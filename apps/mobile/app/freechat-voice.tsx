// Free Chat — VOICE MODE.
//
// Parallel screen to /freechat. Same coach (Maya), same memory, but the
// entire conversation runs over voice via lib/voice-session.ts:
//
//   user speaks  ->  STT (expo-speech-recognition)
//                ->  LLM (chatComplete with buildVoiceCoachSystemPrompt)
//                ->  TTS (expo-speech)  ->  loop back (if auto-mode is on)
//
// Premium gating: free users get FREE_DAILY_MINUTES per day (computed from
// the stored session log). Premium users have no cap.
//
// IMPORTANT: this screen is iOS-only for the moment because the underlying
// speech-recognition wrapper targets the iOS 17+ Speech framework. On other
// platforms (or older iOS) we render a friendly "yakında" placeholder.
//
// Route note: add `<Stack.Screen name="freechat-voice" />` to app/_layout.tsx
// when wiring this in.

import { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet,
  Alert,
  Platform,
  Switch,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  Easing,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { tokens } from "../theme";
import { trackEvent } from "../lib/analytics";
import {
  buildVoiceCoachSystemPrompt,
  getCoachState,
  recordMessage,
  recordSession,
  type CoachState,
} from "../lib/coach";
import { isPremium } from "../lib/iap";
import { isAvailable as isSpeechAvailable } from "../lib/speech-recognition";
import {
  createVoiceSession,
  type VoiceSessionAPI,
  type VoiceSessionState,
  type VoiceTurn,
} from "../lib/voice-session";
import {
  getVoiceMinutesToday,
  saveVoiceSession,
  type VoiceSessionLog,
} from "../lib/voice-session-storage";
import CrisisModal from "../components/CrisisModal";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const FREE_DAILY_MINUTES = 5;

const STATE_LABEL: Record<VoiceSessionState, string> = {
  idle: "Bekliyor",
  listening: "Dinliyor",
  thinking: "Düşünüyor",
  speaking: "Konuşuyor",
  error: "Hata",
};

// ---------------------------------------------------------------------------
// Optional avatar component — imported defensively so the screen still builds
// while CoachAvatar.tsx is in flight on another branch.
// ---------------------------------------------------------------------------

type AvatarComponent = React.ComponentType<{
  size?: number;
  state?: VoiceSessionState;
  name?: string;
}>;

function loadAvatar(): AvatarComponent | null {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require("../components/CoachAvatar");
    return (mod?.default ?? mod?.CoachAvatar ?? null) as AvatarComponent | null;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Screen
// ---------------------------------------------------------------------------

export default function FreeChatVoiceScreen() {
  const router = useRouter();
  const [coach, setCoach] = useState<CoachState | null>(null);
  const [premium, setPremium] = useState(false);
  const [voiceAvailable, setVoiceAvailable] = useState<boolean | null>(null);
  const [minutesToday, setMinutesToday] = useState(0);
  const [autoMode, setAutoMode] = useState(true);
  const [sessionState, setSessionState] = useState<VoiceSessionState>("idle");
  const [turns, setTurns] = useState<VoiceTurn[]>([]);
  const [transcriptOpen, setTranscriptOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [crisisOpen, setCrisisOpen] = useState(false);

  const sessionRef = useRef<VoiceSessionAPI | null>(null);
  const sessionStartRef = useRef<number>(0);
  const sessionIdRef = useRef<string>("");
  const transcriptScrollRef = useRef<ScrollView>(null);
  // Guards every async resumption — after any await we check this before
  // touching state. Set false in the unmount cleanup so straggling promises
  // don't trigger React warnings ("can't update state on unmounted component").
  const isMountedRef = useRef(true);
  // Subscriptions returned by session.onStateChange / onTurn / onError. We
  // collect them here so a single cleanup call can drop every listener at
  // once, preventing the post-unmount setState leak.
  const unsubscribersRef = useRef<Array<() => void>>([]);

  const Avatar = useMemo(loadAvatar, []);
  const atDailyLimit =
    !premium && minutesToday >= FREE_DAILY_MINUTES && voiceAvailable === true;

  // -------------------------------------------------------------------------
  // Hydrate on mount.
  // -------------------------------------------------------------------------
  useEffect(() => {
    (async () => {
      try {
        const [coachState, prem, available, mins] = await Promise.all([
          getCoachState(),
          isPremium(),
          isSpeechAvailable(),
          getVoiceMinutesToday(),
        ]);
        // Bail if the screen unmounted while we were awaiting — otherwise we'd
        // call setState on an unmounted component (React warning + ref leak).
        if (!isMountedRef.current) return;
        setCoach(coachState);
        setPremium(prem);
        setVoiceAvailable(available && Platform.OS === "ios");
        setMinutesToday(mins);
        void recordSession();
      } catch {
        if (!isMountedRef.current) return;
        setVoiceAvailable(false);
      } finally {
        if (isMountedRef.current) setHydrated(true);
      }
    })();
  }, []);

  // -------------------------------------------------------------------------
  // Auto-scroll transcript to bottom on new turn.
  // -------------------------------------------------------------------------
  useEffect(() => {
    if (!transcriptOpen) return;
    const t = setTimeout(
      () => transcriptScrollRef.current?.scrollToEnd({ animated: true }),
      80,
    );
    return () => clearTimeout(t);
  }, [turns, transcriptOpen]);

  // -------------------------------------------------------------------------
  // Stop the session if the screen unmounts mid-conversation. Also finalises
  // the saved log so the user gets credited for the time they spent.
  //
  // Order matters: flip isMountedRef BEFORE calling stop(), so callbacks fired
  // synchronously by stop() can't reach into a torn-down component. Then drop
  // every onStateChange / onTurn / onError subscription we collected.
  // -------------------------------------------------------------------------
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
      for (const off of unsubscribersRef.current) {
        try {
          off();
        } catch {
          // ignore — subscriber teardown must never crash unmount
        }
      }
      unsubscribersRef.current = [];
      if (sessionRef.current) {
        sessionRef.current.stop();
        sessionRef.current = null;
        // finaliseSessionLog awaits AsyncStorage; we don't await it here
        // (cleanup must be sync) and it guards its own setState with the
        // isMountedRef pattern.
        void finaliseSessionLog();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // -------------------------------------------------------------------------
  // Build system prompt off live coach state — same pattern as /freechat so
  // memory updates take effect on the very next turn.
  // -------------------------------------------------------------------------
  const systemPrompt = useMemo(() => {
    if (!coach) return "";
    return buildVoiceCoachSystemPrompt(coach, null);
  }, [coach]);

  // -------------------------------------------------------------------------
  // Session control
  // -------------------------------------------------------------------------

  const ensureSession = (): VoiceSessionAPI | null => {
    // Idempotent — if a session already exists, return it. This guards against
    // a double-tap on "Konuş" creating two sessions racing the same mic.
    if (sessionRef.current) return sessionRef.current;
    if (!systemPrompt) return null;

    const api = createVoiceSession({
      systemPrompt,
      autoStart: autoMode,
      // Premium voice users get the racing LLM path — voice latency is the
      // single biggest "feels slow" complaint and racing chops it ~50%.
      fastMode: premium,
    });
    // Collect every subscription so the unmount cleanup can drop them all
    // atomically (otherwise setState fires after unmount → leak).
    const offState = api.onStateChange((s) => {
      if (!isMountedRef.current) return;
      setSessionState(s);
    });
    const offTurn = api.onTurn((t) => {
      if (!isMountedRef.current) return;
      setTurns((prev) => {
        const next = [...prev, t];
        // Mirror the voice-session in-memory cap so the on-screen transcript
        // can't grow unbounded for a long auto-mode session.
        if (next.length > 50) next.shift();
        return next;
      });
      // Record user-turn message counts against the coach memory layer.
      if (t.role === "user") void recordMessage();
    });
    const offError = api.onError((e) => {
      if (!isMountedRef.current) return;
      if (__DEV__) console.warn("[freechat-voice] session error", e);
      Alert.alert("Sesli sohbet hatası", e.message);
    });
    // Safety blocks bubble up here. Crisis signals open the full-screen
    // emergency-resource modal AND pause the session — the user shouldn't
    // be looped back into a fresh listening window while reading the lines.
    const offSafety = api.onSafetyBlock((check) => {
      if (!isMountedRef.current) return;
      if (check.shouldEscalate) {
        setCrisisOpen(true);
        sessionRef.current?.pause();
      }
    });
    unsubscribersRef.current.push(offState, offTurn, offError, offSafety);
    sessionRef.current = api;
    sessionStartRef.current = Date.now();
    sessionIdRef.current = `vs-${Date.now()}-${Math.floor(Math.random() * 1e6)}`;
    void trackEvent("voice_session_started", {
      auto_mode: autoMode,
      premium,
    }).catch(() => {});
    return api;
  };

  const handleStartTalk = async () => {
    // Idempotent: if we already created a session AND the user is mid-flight,
    // route to the right control instead of building a second VoiceSession
    // racing the same recogniser.
    if (sessionRef.current && sessionState === "listening") {
      sessionRef.current.pause();
      return;
    }
    if (atDailyLimit) {
      Alert.alert(
        "Günlük süre doldu",
        `Bugün ${FREE_DAILY_MINUTES} dakikalık ücretsiz sesli sohbet hakkını kullandın. Premium'a geçerek sınırsız konuş.`,
        [
          { text: "Vazgeç", style: "cancel" },
          {
            text: "Premium'a geç",
            onPress: () => router.push("/paywall" as never),
          },
        ],
      );
      return;
    }
    const api = ensureSession();
    if (!api) return;
    await api.start();
    if (!isMountedRef.current) return;
  };

  const handlePause = () => {
    sessionRef.current?.pause();
  };

  const finaliseSessionLog = async () => {
    if (!sessionStartRef.current || !sessionIdRef.current) return;
    const durationSec = Math.max(
      0,
      Math.round((Date.now() - sessionStartRef.current) / 1000),
    );
    if (durationSec < 3) return; // ignore taps / immediate exits
    const log: VoiceSessionLog = {
      id: sessionIdRef.current,
      startedAt: new Date(sessionStartRef.current).toISOString(),
      durationSec,
      turnsCount: turns.length,
    };
    void trackEvent("voice_session_ended", {
      durationMin: Math.round((durationSec / 60) * 10) / 10,
      turns: turns.length,
    }).catch(() => {});
    try {
      await saveVoiceSession(log);
      // Don't bother fetching today's minutes if we've unmounted — the next
      // mount will read fresh from storage anyway.
      if (!isMountedRef.current) return;
      const next = await getVoiceMinutesToday();
      if (!isMountedRef.current) return;
      setMinutesToday(next);
    } catch {
      // ignore
    }
  };

  const handleEnd = () => {
    Alert.alert("Sesli sohbeti bitir", "Konuşmayı sonlandırmak istiyor musun?", [
      { text: "Vazgeç", style: "cancel" },
      {
        text: "Bitir",
        style: "destructive",
        onPress: async () => {
          if (sessionRef.current) {
            sessionRef.current.stop();
            sessionRef.current = null;
          }
          // Drop any remaining subscriptions — the session is gone but the
          // unsubscribers array might still hold dead handles.
          for (const off of unsubscribersRef.current) {
            try {
              off();
            } catch {
              // ignore
            }
          }
          unsubscribersRef.current = [];
          await finaliseSessionLog();
          if (!isMountedRef.current) return;
          router.back();
        },
      },
    ]);
  };

  const handleUndo = () => {
    if (turns.length === 0) return;
    setTurns((prev) => prev.slice(0, -1));
  };

  const handleRepeatLast = () => {
    const last = [...turns].reverse().find((t) => t.role === "assistant");
    if (!last) return;
    const api = sessionRef.current;
    if (!api) return;
    // Re-speak the last assistant line. The simplest way is to fake a new
    // turn — but to avoid double-counting, we just call speak directly via
    // a tiny helper. We expose this by stopping the current session and
    // re-issuing the text.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Speech = require("expo-speech") as typeof import("expo-speech");
    Speech.stop();
    Speech.speak(last.text, { language: "en-US", rate: 0.95 });
  };

  // -------------------------------------------------------------------------
  // iOS<17 / unavailable fallback.
  // -------------------------------------------------------------------------
  if (hydrated && voiceAvailable === false) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <StatusBar style="dark" />
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} hitSlop={8}>
            <Text style={styles.backText}>← Geri</Text>
          </Pressable>
          <Text style={styles.title}>Sesli sohbet</Text>
          <View style={{ width: 70 }} />
        </View>
        <View style={styles.fallbackBox}>
          <Text style={styles.fallbackTitle}>Yakında</Text>
          <Text style={styles.fallbackBody}>
            Sesli sohbet şu anda yalnızca iOS 17 ve üstünde çalışıyor. Cihazını
            güncellersen Maya ile konuşmaya başlayabilirsin. O zamana kadar
            yazışarak devam edebilirsin.
          </Text>
          <Pressable
            style={styles.fallbackBtn}
            onPress={() => router.replace("/freechat" as never)}
          >
            <Text style={styles.fallbackBtnText}>
              Yazışmalı sohbete dön
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  // -------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------

  const coachName = coach?.name ?? "Maya";
  const remainingMin = Math.max(0, FREE_DAILY_MINUTES - minutesToday);

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={handleEnd} hitSlop={8} style={styles.backBtn}>
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <View style={styles.titleBlock}>
          <Text style={styles.title}>{coachName} ile sesli sohbet</Text>
          <Text style={styles.aiHint}>Yapay zeka tabanlı koç</Text>
          <StateChip state={sessionState} />
        </View>
        <View style={{ width: 70 }} />
      </View>

      {/* Daily minutes chip (hide for premium) */}
      {!premium && (
        <View style={styles.minutesRow}>
          <Text
            style={[
              styles.minutesText,
              atDailyLimit && styles.minutesTextLimit,
            ]}
          >
            {atDailyLimit
              ? `Bugünkü 5 dk hakkın doldu`
              : `Bugün kalan: ~${remainingMin} dk`}
          </Text>
        </View>
      )}

      {/* Avatar with state-driven animation */}
      <View style={styles.avatarBlock}>
        <AvatarRing state={sessionState}>
          {Avatar ? (
            <Avatar size={140} state={sessionState} name={coachName} />
          ) : (
            <View style={styles.fallbackAvatar}>
              <Text style={styles.fallbackAvatarText}>
                {coachName.charAt(0).toUpperCase()}
              </Text>
            </View>
          )}
        </AvatarRing>

        {sessionState === "speaking" && <Waveform />}

        <Text style={styles.stateHint}>
          {sessionState === "listening"
            ? "Konuş — Maya seni dinliyor"
            : sessionState === "thinking"
              ? "Cevap hazırlanıyor..."
              : sessionState === "speaking"
                ? `${coachName} konuşuyor`
                : sessionState === "error"
                  ? "Bir sorun oldu. Tekrar dene."
                  : "Başlamak için 'Konuş' tuşuna bas"}
        </Text>
      </View>

      {/* Auto mode toggle + undo / repeat */}
      <View style={styles.toggleRow}>
        <View style={styles.toggleLeft}>
          <Text style={styles.toggleLabel}>Otomatik mod</Text>
          <Text style={styles.toggleHint}>
            Maya konuşmasını bitirir bitirmez mikrofon açılır.
          </Text>
        </View>
        <Switch
          value={autoMode}
          onValueChange={(v) => {
            setAutoMode(v);
            // If a session already exists, we can't change its autoStart
            // mid-flight — note this for the user.
            if (sessionRef.current && __DEV__) {
              console.info(
                "[freechat-voice] auto mode toggled mid-session — takes effect on next session",
              );
            }
          }}
          trackColor={{
            false: tokens.bg.surfaceContainerHigh,
            true: tokens.brand.tertiary,
          }}
          thumbColor={tokens.bg.surfaceBright}
        />
      </View>

      <View style={styles.secondaryRow}>
        <Pressable
          onPress={handleUndo}
          disabled={turns.length === 0}
          style={[
            styles.secondaryBtn,
            turns.length === 0 && styles.secondaryBtnDisabled,
          ]}
        >
          <Text style={styles.secondaryBtnText}>Geri al</Text>
        </Pressable>
        <Pressable
          onPress={handleRepeatLast}
          disabled={!turns.some((t) => t.role === "assistant")}
          style={[
            styles.secondaryBtn,
            !turns.some((t) => t.role === "assistant") &&
              styles.secondaryBtnDisabled,
          ]}
        >
          <Text style={styles.secondaryBtnText}>Son cevabı tekrarla</Text>
        </Pressable>
        <Pressable
          onPress={() => setTranscriptOpen((v) => !v)}
          style={styles.secondaryBtn}
        >
          <Text style={styles.secondaryBtnText}>
            {transcriptOpen ? "Kapat" : `Yazılı dök (${turns.length})`}
          </Text>
        </Pressable>
      </View>

      {/* Transcript drawer */}
      {transcriptOpen && (
        <View style={styles.transcript}>
          <ScrollView
            ref={transcriptScrollRef}
            contentContainerStyle={styles.transcriptContent}
            showsVerticalScrollIndicator={false}
          >
            {turns.length === 0 ? (
              <Text style={styles.transcriptEmpty}>Henüz konuşma yok.</Text>
            ) : (
              turns.map((t, i) => (
                <View
                  key={i}
                  style={[
                    styles.transcriptRow,
                    t.role === "user"
                      ? styles.transcriptRowUser
                      : styles.transcriptRowAssistant,
                  ]}
                >
                  <Text style={styles.transcriptRole}>
                    {t.role === "user" ? "Sen" : coachName}
                  </Text>
                  <Text style={styles.transcriptText}>{t.text}</Text>
                </View>
              ))
            )}
          </ScrollView>
        </View>
      )}

      {/* Bottom control bar */}
      <View style={styles.controlBar}>
        <ControlButton
          label={sessionState === "listening" ? "Durdur" : "Konuş"}
          icon={sessionState === "listening" ? "■" : "🎤"}
          variant="primary"
          onPress={handleStartTalk}
        />
        <ControlButton
          label="Duraklat"
          icon="⏸"
          variant="secondary"
          onPress={handlePause}
        />
        <ControlButton
          label="Bitir"
          icon="✕"
          variant="danger"
          onPress={handleEnd}
        />
      </View>

      <CrisisModal visible={crisisOpen} onClose={() => setCrisisOpen(false)} />
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function StateChip({ state }: { state: VoiceSessionState }) {
  const bg =
    state === "listening"
      ? tokens.brand.tertiarySoft
      : state === "thinking"
        ? tokens.brand.primarySoft
        : state === "speaking"
          ? tokens.semantic.successContainer
          : state === "error"
            ? tokens.semantic.errorContainer
            : tokens.bg.surfaceContainerHigh;
  const fg =
    state === "listening"
      ? tokens.brand.tertiary
      : state === "thinking"
        ? tokens.brand.onPrimary
        : state === "speaking"
          ? tokens.semantic.success
          : state === "error"
            ? tokens.semantic.onErrorContainer
            : tokens.text.secondary;
  return (
    <View style={[styles.chip, { backgroundColor: bg }]}>
      <Text style={[styles.chipText, { color: fg }]}>{STATE_LABEL[state]}</Text>
    </View>
  );
}

function AvatarRing({
  state,
  children,
}: {
  state: VoiceSessionState;
  children: React.ReactNode;
}) {
  const pulse = useSharedValue(0);

  useEffect(() => {
    cancelAnimation(pulse);
    if (state === "listening") {
      pulse.value = withRepeat(
        withTiming(1, { duration: 1200, easing: Easing.inOut(Easing.ease) }),
        -1,
        true,
      );
    } else if (state === "thinking") {
      pulse.value = withRepeat(
        withTiming(1, { duration: 600, easing: Easing.linear }),
        -1,
        true,
      );
    } else {
      pulse.value = withTiming(0, { duration: 300 });
    }
    return () => cancelAnimation(pulse);
  }, [state, pulse]);

  const ringStyle = useAnimatedStyle(() => {
    const scale = 1 + pulse.value * 0.18;
    const opacity = 0.25 + pulse.value * 0.45;
    return {
      transform: [{ scale }],
      opacity: state === "idle" || state === "error" ? 0 : opacity,
    };
  });

  const ringColor =
    state === "listening"
      ? tokens.brand.tertiary
      : state === "thinking"
        ? tokens.brand.primary
        : state === "speaking"
          ? tokens.semantic.success
          : tokens.bg.surfaceContainerHigh;

  return (
    <View style={styles.avatarWrap}>
      <Animated.View
        style={[
          styles.avatarRing,
          { borderColor: ringColor },
          ringStyle,
        ]}
      />
      {children}
    </View>
  );
}

function Waveform() {
  // Five bars bouncing in a staggered loop to suggest TTS playback.
  const bars = [0, 1, 2, 3, 4];
  return (
    <View style={styles.waveform}>
      {bars.map((i) => (
        <WaveformBar key={i} delay={i * 100} />
      ))}
    </View>
  );
}

function WaveformBar({ delay }: { delay: number }) {
  const h = useSharedValue(0.3);

  useEffect(() => {
    const t = setTimeout(() => {
      h.value = withRepeat(
        withTiming(1, { duration: 420, easing: Easing.inOut(Easing.quad) }),
        -1,
        true,
      );
    }, delay);
    return () => {
      clearTimeout(t);
      cancelAnimation(h);
    };
  }, [delay, h]);

  const barStyle = useAnimatedStyle(() => ({
    height: 6 + h.value * 24,
  }));

  return <Animated.View style={[styles.waveformBar, barStyle]} />;
}

function ControlButton({
  label,
  icon,
  variant,
  onPress,
}: {
  label: string;
  icon: string;
  variant: "primary" | "secondary" | "danger";
  onPress: () => void;
}) {
  const bg =
    variant === "primary"
      ? tokens.brand.primary
      : variant === "danger"
        ? tokens.semantic.error
        : tokens.bg.surfaceContainerHigh;
  const fg =
    variant === "primary"
      ? tokens.text.onPrimary
      : variant === "danger"
        ? tokens.semantic.onError
        : tokens.text.primary;
  return (
    <Pressable
      onPress={onPress}
      style={[styles.controlBtn, { backgroundColor: bg }]}
      hitSlop={6}
    >
      <Text style={[styles.controlIcon, { color: fg }]}>{icon}</Text>
      <Text style={[styles.controlLabel, { color: fg }]}>{label}</Text>
    </Pressable>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 56,
  },
  backBtn: { width: 70 },
  backText: { color: tokens.text.secondary, fontSize: 15 },
  titleBlock: { alignItems: "center", gap: 4 },
  title: {
    fontSize: 17,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  aiHint: {
    fontSize: 10,
    color: tokens.text.tertiary,
    fontStyle: "italic",
  },
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: tokens.radius.full,
  },
  chipText: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    letterSpacing: 0.6,
    textTransform: "uppercase",
  },
  minutesRow: {
    alignItems: "center",
    paddingBottom: 4,
  },
  minutesText: {
    fontSize: 11,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.semibold,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  minutesTextLimit: {
    color: tokens.semantic.error,
  },
  avatarBlock: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 18,
  },
  avatarWrap: {
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarRing: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 4,
  },
  fallbackAvatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: tokens.brand.secondary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: tokens.brand.primary,
  },
  fallbackAvatarText: {
    fontSize: 54,
    fontWeight: tokens.weight.black,
    color: tokens.brand.primary,
  },
  waveform: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    height: 32,
  },
  waveformBar: {
    width: 6,
    borderRadius: 3,
    backgroundColor: tokens.brand.tertiary,
  },
  stateHint: {
    fontSize: 14,
    color: tokens.text.secondary,
    textAlign: "center",
    paddingHorizontal: 24,
  },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginBottom: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  toggleLeft: { flex: 1, paddingRight: 12 },
  toggleLabel: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  toggleHint: {
    fontSize: 12,
    color: tokens.text.secondary,
    marginTop: 2,
  },
  secondaryRow: {
    flexDirection: "row",
    gap: 8,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  secondaryBtn: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.full,
    alignItems: "center",
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  secondaryBtnDisabled: { opacity: 0.4 },
  secondaryBtnText: {
    fontSize: 12,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
  },
  transcript: {
    maxHeight: 200,
    marginHorizontal: 16,
    marginBottom: 8,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  transcriptContent: {
    padding: 12,
    gap: 10,
  },
  transcriptRow: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: tokens.radius.sm,
  },
  transcriptRowUser: {
    backgroundColor: tokens.brand.primarySoft,
    alignSelf: "flex-end",
    maxWidth: "85%",
  },
  transcriptRowAssistant: {
    backgroundColor: tokens.brand.tertiarySoft,
    alignSelf: "flex-start",
    maxWidth: "85%",
  },
  transcriptRole: {
    fontSize: 10,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 2,
  },
  transcriptText: {
    fontSize: 14,
    color: tokens.text.primary,
    lineHeight: 19,
  },
  transcriptEmpty: {
    fontSize: 13,
    color: tokens.text.tertiary,
    textAlign: "center",
    paddingVertical: 12,
  },
  controlBar: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
  },
  controlBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: tokens.radius.full,
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  controlIcon: {
    fontSize: 20,
    fontWeight: tokens.weight.black,
  },
  controlLabel: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
  },
  fallbackBox: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
  },
  fallbackTitle: {
    fontSize: 22,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
  },
  fallbackBody: {
    fontSize: 15,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 22,
  },
  fallbackBtn: {
    marginTop: 12,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primary,
  },
  fallbackBtnText: {
    fontSize: 15,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.onPrimary,
  },
});
