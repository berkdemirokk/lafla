// VOIP — full call experience.
//
// Phone-call UI: state chip (Çalıyor / Bağlı / Beklemede / Bitti), agent name,
// scrolling transcript, mic-or-options input bar, mute/hangup controls, and a
// summary panel at the end with score + Turkish coaching feedback.

import { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet,
  Alert,
  Platform,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { tokens } from "../../theme";
import { getVoipCall } from "../../data/voip-calls";
import type { VoipCallNode } from "../../data/voip-calls";
import {
  createVoipSession,
  type VoipCallState,
  type VoipHistoryEntry,
  type VoipSessionAPI,
} from "../../lib/voip";
import {
  isAvailable as isSpeechAvailable,
  startListening,
  stopListening,
} from "../../lib/speech-recognition";
import { stop as stopTts } from "../../lib/tts";

const STATE_LABEL_TR: Record<VoipCallState, string> = {
  ringing: "Çalıyor…",
  connected: "Bağlı",
  hold: "Beklemede",
  "ended-success": "Tamamlandı",
  "ended-failed": "Sonlandı",
};

const STATE_COLOR: Record<VoipCallState, string> = {
  ringing: tokens.brand.primary,
  connected: tokens.semantic.success,
  hold: tokens.brand.primary,
  "ended-success": tokens.semantic.success,
  "ended-failed": tokens.semantic.error,
};

function formatTimer(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

export default function VoipCallScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const call = useMemo(() => (id ? getVoipCall(id) : null), [id]);

  const sessionRef = useRef<VoipSessionAPI | null>(null);
  if (!sessionRef.current) sessionRef.current = createVoipSession();
  const session = sessionRef.current!;

  const [state, setState] = useState<VoipCallState>("ringing");
  const [hist, setHist] = useState<VoipHistoryEntry[]>([]);
  const [currentNode, setCurrentNode] = useState<VoipCallNode | null>(null);
  const [voiceAvailable, setVoiceAvailable] = useState(false);
  const [listening, setListening] = useState(false);
  const [draft, setDraft] = useState("");
  const [timer, setTimer] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  // Subscribe to state changes from the session manager.
  useEffect(() => {
    const off = session.onStateChange((s) => {
      setState(s);
      setHist([...session.history()]);
      setCurrentNode(session.currentNode());
    });
    return off;
  }, [session]);

  // Start the call once on mount.
  useEffect(() => {
    if (!call) return;
    void (async () => {
      const v = await isSpeechAvailable();
      setVoiceAvailable(v);
      try {
        await session.start(call.id);
      } catch (err) {
        if (__DEV__) console.warn("[voip] start failed", err);
      }
      setHist([...session.history()]);
      setCurrentNode(session.currentNode());
    })();

    return () => {
      stopTts();
      if (listening) void stopListening();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [call?.id]);

  // Poll for history/node updates while connected — the manager pushes via
  // state changes but agent→agent chains modify history between transitions.
  useEffect(() => {
    if (state === "ended-success" || state === "ended-failed") return;
    const t = setInterval(() => {
      setHist([...session.history()]);
      setCurrentNode(session.currentNode());
    }, 350);
    return () => clearInterval(t);
  }, [state, session]);

  // Call duration timer — runs from connected to terminal.
  useEffect(() => {
    if (state === "ringing") return;
    if (state === "ended-success" || state === "ended-failed") return;
    const t = setInterval(() => setTimer((n) => n + 1), 1000);
    return () => clearInterval(t);
  }, [state]);

  // Auto-scroll on transcript growth.
  useEffect(() => {
    const t = setTimeout(
      () => scrollRef.current?.scrollToEnd({ animated: true }),
      80,
    );
    return () => clearTimeout(t);
  }, [hist]);

  if (!call) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.center}>
          <Text style={styles.errorText}>Bu arama bulunamadı.</Text>
          <Pressable onPress={() => router.back()} style={styles.backCta}>
            <Text style={styles.backCtaText}>Geri dön</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  const ended = state === "ended-success" || state === "ended-failed";
  const userTurn =
    state === "connected" && currentNode?.speaker === "user" && !ended;
  const agentHasOptions = !!(
    state === "connected" &&
    currentNode?.speaker === "agent" &&
    currentNode?.options &&
    currentNode.options.length > 0
  );

  const handleMic = async () => {
    if (!userTurn) return;
    if (!voiceAvailable || Platform.OS !== "ios") {
      Alert.alert(
        "Sesli giriş yok",
        "Bu cihazda mikrofon kullanılamıyor. Yazılı cevap verebilirsin.",
      );
      return;
    }
    if (listening) {
      await stopListening();
      setListening(false);
      return;
    }
    setListening(true);
    await startListening({
      lang: "en-US",
      onResult: (text, isFinal) => {
        setDraft(text);
        if (isFinal) {
          setListening(false);
          void session.submitUserText(text);
          setDraft("");
          setHist([...session.history()]);
          setCurrentNode(session.currentNode());
        }
      },
      onError: () => {
        setListening(false);
        Alert.alert(
          "Sesli giriş başarısız",
          "Mikrofon erişimi yok. Yazarak deneyebilirsin.",
        );
      },
    });
  };

  const sendDraft = async () => {
    const t = draft.trim();
    if (!t || !userTurn) return;
    if (listening) {
      await stopListening();
      setListening(false);
    }
    setDraft("");
    await session.submitUserText(t);
    setHist([...session.history()]);
    setCurrentNode(session.currentNode());
  };

  const selectOption = async (nextId: string) => {
    if (!agentHasOptions) return;
    await session.selectOption(nextId);
    setHist([...session.history()]);
    setCurrentNode(session.currentNode());
  };

  const hangup = () => {
    Alert.alert("Aramayı bitir?", "Çağrıyı kapatmak istediğine emin misin?", [
      { text: "Vazgeç", style: "cancel" },
      {
        text: "Kapat",
        style: "destructive",
        onPress: () => {
          session.hangup();
          if (listening) void stopListening();
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="light" />

      {/* Header */}
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.headerBtn}
          hitSlop={8}
        >
          <Text style={styles.headerBtnText}>← Çıkış</Text>
        </Pressable>
        <View style={styles.headerCenter}>
          <Text style={styles.agentName}>{call.agentName}</Text>
          <View style={styles.statusRow}>
            <View
              style={[
                styles.statusDot,
                { backgroundColor: STATE_COLOR[state] },
              ]}
            />
            <Text style={styles.statusText}>{STATE_LABEL_TR[state]}</Text>
            {!ended && state !== "ringing" && (
              <Text style={styles.timer}>· {formatTimer(timer)}</Text>
            )}
          </View>
        </View>
        <View style={styles.headerBtn} />
      </View>

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* Transcript */}
        <ScrollView
          ref={scrollRef}
          style={styles.transcript}
          contentContainerStyle={styles.transcriptContent}
          showsVerticalScrollIndicator={false}
        >
          {state === "ringing" && (
            <View style={styles.ringingBox}>
              <Text style={styles.ringingEmoji}>📞</Text>
              <Text style={styles.ringingText}>Aranıyor…</Text>
            </View>
          )}

          {hist.map((h, i) => (
            <TranscriptBubble key={i} entry={h} />
          ))}

          {userTurn && currentNode?.hint_tr && (
            <View style={styles.hintCard}>
              <Text style={styles.hintLabel}>İPUCU</Text>
              <Text style={styles.hintText}>{currentNode.hint_tr}</Text>
            </View>
          )}

          {ended && <CallSummary state={state} hist={hist} call={call.id} />}
        </ScrollView>

        {/* Bottom: options OR mic+text input OR end actions */}
        {!ended && agentHasOptions && currentNode?.options && (
          <View style={styles.optionsBar}>
            {currentNode.options.map((opt) => (
              <Pressable
                key={opt.nextId}
                style={({ pressed }) => [
                  styles.optionBtn,
                  pressed && styles.optionBtnPressed,
                ]}
                onPress={() => selectOption(opt.nextId)}
              >
                <Text style={styles.optionText}>{opt.text}</Text>
              </Pressable>
            ))}
          </View>
        )}

        {!ended && userTurn && (
          <View style={styles.inputBar}>
            <View style={styles.inputRow}>
              <Pressable
                style={[styles.micBtn, listening && styles.micBtnActive]}
                onPress={handleMic}
                hitSlop={6}
              >
                <Text
                  style={[styles.micText, listening && styles.micTextActive]}
                >
                  {listening ? "■" : "🎤"}
                </Text>
              </Pressable>
              <TextInput
                style={styles.input}
                value={draft}
                onChangeText={setDraft}
                placeholder="İngilizce cevabını yaz veya konuş..."
                placeholderTextColor={tokens.text.tertiary}
                multiline
                autoCapitalize="sentences"
                returnKeyType="send"
                blurOnSubmit={false}
                onSubmitEditing={sendDraft}
              />
              <Pressable
                style={[
                  styles.sendBtn,
                  !draft.trim() && styles.sendBtnDisabled,
                ]}
                onPress={sendDraft}
                disabled={!draft.trim()}
                hitSlop={6}
              >
                <Text style={styles.sendBtnText}>↑</Text>
              </Pressable>
            </View>
          </View>
        )}

        {/* Hangup row — always visible while live; restart after end */}
        <View style={styles.controlRow}>
          {!ended ? (
            <Pressable style={styles.hangupBtn} onPress={hangup}>
              <Text style={styles.hangupText}>Kapat</Text>
            </Pressable>
          ) : (
            <>
              <Pressable
                style={styles.secondaryBtn}
                onPress={() => router.replace("/voip" as never)}
              >
                <Text style={styles.secondaryBtnText}>Listeye dön</Text>
              </Pressable>
              <Pressable
                style={styles.primaryBtn}
                onPress={() => {
                  sessionRef.current = createVoipSession();
                  setTimer(0);
                  setHist([]);
                  setCurrentNode(null);
                  setState("ringing");
                  void sessionRef.current.start(call.id).then(() => {
                    setHist([...sessionRef.current!.history()]);
                    setCurrentNode(sessionRef.current!.currentNode());
                  });
                  // Re-subscribe.
                  sessionRef.current.onStateChange((s) => {
                    setState(s);
                    setHist([...sessionRef.current!.history()]);
                    setCurrentNode(sessionRef.current!.currentNode());
                  });
                }}
              >
                <Text style={styles.primaryBtnText}>Tekrar dene</Text>
              </Pressable>
            </>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Transcript bubble — phone-call style. Agent left, user right.
// ---------------------------------------------------------------------------
function TranscriptBubble({ entry }: { entry: VoipHistoryEntry }) {
  const isUser = entry.speaker === "user";
  return (
    <View
      style={[
        bubble.row,
        isUser ? bubble.rowUser : bubble.rowAgent,
      ]}
    >
      <View
        style={[
          bubble.bubble,
          isUser ? bubble.bubbleUser : bubble.bubbleAgent,
        ]}
      >
        <Text
          style={[
            bubble.text,
            isUser ? bubble.textUser : bubble.textAgent,
          ]}
        >
          {entry.text}
        </Text>
      </View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Call summary — shown at terminal state. Score = % of user turns that
// matched (i.e. not rephrased / hung up). Coaching is Turkish.
// ---------------------------------------------------------------------------
function CallSummary({
  state,
  hist,
  call,
}: {
  state: VoipCallState;
  hist: VoipHistoryEntry[];
  call: string;
}) {
  const success = state === "ended-success";
  const userTurns = hist.filter((h) => h.speaker === "user").length;
  const agentReprompts = hist.filter(
    (h) =>
      h.speaker === "agent" && h.text.toLowerCase().includes("could you repeat"),
  ).length;
  const rawScore = Math.max(0, userTurns - agentReprompts);
  const score = userTurns === 0 ? 0 : Math.round((rawScore / userTurns) * 100);

  const headline = success
    ? "Aramayı başarıyla tamamladın."
    : "Arama yarıda kaldı, sorun değil — tekrar dene.";

  const coach = success
    ? score >= 90
      ? "Akıcı, kibar ve nettin. Telefon Türkçesi öz güveni yakalanmış. Daha hızlı tepki vererek doğal akıcılığı yakalayabilirsin."
      : score >= 60
        ? "Hedefe ulaştın ama ajan 1-2 kez tekrar istedi. 'Could you spell that?' veya 'Just to confirm…' gibi netleştirme kalıpları çalış."
        : "Tamamladın ama zorlandın. Cevaplarını daha kısa ve hedefe yönelik tut: 'I'm calling about X. The issue is Y.'"
    : "Telefonda anlaşılmamak normal. Cümlelerini daha kısa ve net kur. Aramayı tekrar dene — bu kez sadece ana fikri söyle.";

  return (
    <View style={summary.card}>
      <Text style={summary.headline}>{headline}</Text>
      <View style={summary.scoreRow}>
        <Text style={summary.scoreNumber}>{score}</Text>
        <Text style={summary.scoreLabel}>/100</Text>
      </View>
      <Text style={summary.coachLabel}>KOÇ NOTU</Text>
      <Text style={summary.coachText}>{coach}</Text>
      <View style={summary.statRow}>
        <View style={summary.stat}>
          <Text style={summary.statNum}>{userTurns}</Text>
          <Text style={summary.statLabel}>Cevap</Text>
        </View>
        <View style={summary.stat}>
          <Text style={summary.statNum}>{agentReprompts}</Text>
          <Text style={summary.statLabel}>Tekrar isteme</Text>
        </View>
        <View style={summary.stat}>
          <Text style={summary.statNum}>{success ? "✓" : "✗"}</Text>
          <Text style={summary.statLabel}>
            {success ? "Başarılı" : "Yarım"}
          </Text>
        </View>
      </View>
      <Text style={summary.callId}>{call}</Text>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.onBackground },
  flex: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: tokens.bg.inverseSurface,
    borderBottomWidth: 1,
    borderBottomColor: tokens.bg.inverseSurfaceLight,
  },
  headerBtn: { width: 70 },
  headerBtnText: { color: tokens.text.inverseOnSurface, fontSize: 14 },
  headerCenter: { flex: 1, alignItems: "center" },
  agentName: {
    fontSize: 15,
    fontWeight: tokens.weight.bold,
    color: tokens.text.inverseOnSurface,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 2,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 12,
    color: tokens.text.secondaryFixedDim,
  },
  timer: {
    fontSize: 12,
    color: tokens.text.secondaryFixedDim,
    fontWeight: tokens.weight.semibold,
  },
  transcript: { flex: 1, backgroundColor: tokens.bg.onBackground },
  transcriptContent: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 10,
  },
  ringingBox: {
    alignItems: "center",
    paddingVertical: 40,
    gap: 12,
  },
  ringingEmoji: { fontSize: 56 },
  ringingText: {
    fontSize: 16,
    color: tokens.text.secondaryFixedDim,
    fontWeight: tokens.weight.semibold,
    letterSpacing: 0.5,
  },
  hintCard: {
    backgroundColor: tokens.brand.primarySoft,
    borderRadius: tokens.radius.base,
    padding: 12,
    borderWidth: 1,
    borderColor: tokens.brand.primaryFixed,
    gap: 4,
    marginTop: 4,
  },
  hintLabel: {
    fontSize: 11,
    color: tokens.brand.primaryFixedDim,
    fontWeight: tokens.weight.black,
    letterSpacing: 1.2,
  },
  hintText: {
    fontSize: 14,
    color: tokens.text.inverseOnSurface,
    lineHeight: 20,
  },
  optionsBar: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
    backgroundColor: tokens.bg.inverseSurface,
    borderTopWidth: 1,
    borderTopColor: tokens.bg.inverseSurfaceLight,
  },
  optionBtn: {
    backgroundColor: tokens.brand.primary,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: tokens.radius.base,
  },
  optionBtnPressed: { opacity: 0.7 },
  optionText: {
    color: tokens.text.onPrimary,
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    textAlign: "center",
  },
  inputBar: {
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: tokens.bg.inverseSurface,
    borderTopWidth: 1,
    borderTopColor: tokens.bg.inverseSurfaceLight,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
  },
  micBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: tokens.bg.inverseSurfaceLight,
    alignItems: "center",
    justifyContent: "center",
  },
  micBtnActive: { backgroundColor: tokens.semantic.error },
  micText: { fontSize: 20 },
  micTextActive: {
    fontSize: 18,
    color: tokens.semantic.onError,
    fontWeight: tokens.weight.black,
  },
  input: {
    flex: 1,
    backgroundColor: tokens.bg.inverseSurfaceLight,
    borderRadius: tokens.radius.full,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    color: tokens.text.inverseOnSurface,
    maxHeight: 90,
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: tokens.brand.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  sendBtnDisabled: { opacity: 0.4 },
  sendBtnText: {
    color: tokens.text.onPrimary,
    fontSize: 20,
    fontWeight: tokens.weight.black,
  },
  controlRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    gap: 10,
    backgroundColor: tokens.bg.inverseSurface,
  },
  hangupBtn: {
    flex: 1,
    backgroundColor: tokens.semantic.error,
    paddingVertical: 14,
    borderRadius: tokens.radius.full,
    alignItems: "center",
  },
  hangupText: {
    color: tokens.semantic.onError,
    fontSize: 15,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 1,
  },
  secondaryBtn: {
    flex: 1,
    backgroundColor: tokens.bg.inverseSurfaceLight,
    paddingVertical: 14,
    borderRadius: tokens.radius.full,
    alignItems: "center",
  },
  secondaryBtnText: {
    color: tokens.text.inverseOnSurface,
    fontSize: 14,
    fontWeight: tokens.weight.bold,
  },
  primaryBtn: {
    flex: 1,
    backgroundColor: tokens.brand.primary,
    paddingVertical: 14,
    borderRadius: tokens.radius.full,
    alignItems: "center",
  },
  primaryBtnText: {
    color: tokens.text.onPrimary,
    fontSize: 14,
    fontWeight: tokens.weight.extrabold,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    padding: 24,
  },
  errorText: {
    color: tokens.text.inverseOnSurface,
    fontSize: 15,
  },
  backCta: {
    backgroundColor: tokens.brand.primary,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: tokens.radius.full,
  },
  backCtaText: {
    color: tokens.text.onPrimary,
    fontWeight: tokens.weight.bold,
  },
});

const bubble = StyleSheet.create({
  row: {
    flexDirection: "column",
    maxWidth: "85%",
  },
  rowAgent: { alignSelf: "flex-start", alignItems: "flex-start" },
  rowUser: { alignSelf: "flex-end", alignItems: "flex-end" },
  bubble: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
  },
  bubbleAgent: {
    backgroundColor: tokens.bg.inverseSurfaceLight,
    borderBottomLeftRadius: 4,
  },
  bubbleUser: {
    backgroundColor: tokens.brand.primary,
    borderBottomRightRadius: 4,
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
  },
  textAgent: { color: tokens.text.inverseOnSurface },
  textUser: { color: tokens.text.onPrimary },
});

const summary = StyleSheet.create({
  card: {
    marginTop: 12,
    backgroundColor: tokens.bg.inverseSurfaceLight,
    borderRadius: tokens.radius.base,
    padding: 16,
    gap: 10,
  },
  headline: {
    fontSize: 16,
    fontWeight: tokens.weight.bold,
    color: tokens.text.inverseOnSurface,
  },
  scoreRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 4,
  },
  scoreNumber: {
    fontSize: 44,
    fontWeight: tokens.weight.black,
    color: tokens.brand.primary,
    lineHeight: 46,
  },
  scoreLabel: {
    fontSize: 16,
    color: tokens.text.secondaryFixedDim,
    paddingBottom: 6,
  },
  coachLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.black,
    color: tokens.brand.primaryFixedDim,
    letterSpacing: 1.2,
    marginTop: 4,
  },
  coachText: {
    fontSize: 14,
    lineHeight: 20,
    color: tokens.text.inverseOnSurface,
  },
  statRow: {
    flexDirection: "row",
    marginTop: 8,
    gap: 10,
  },
  stat: {
    flex: 1,
    alignItems: "center",
    backgroundColor: tokens.bg.inverseSurface,
    paddingVertical: 10,
    borderRadius: tokens.radius.sm,
  },
  statNum: {
    fontSize: 18,
    fontWeight: tokens.weight.black,
    color: tokens.brand.primary,
  },
  statLabel: {
    fontSize: 11,
    color: tokens.text.secondaryFixedDim,
    fontWeight: tokens.weight.semibold,
  },
  callId: {
    fontSize: 10,
    color: tokens.text.tertiary,
    textAlign: "right",
    marginTop: 4,
    letterSpacing: 0.5,
  },
});
