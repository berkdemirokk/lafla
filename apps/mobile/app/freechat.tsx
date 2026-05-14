// Free Chat — persistent AI coach ("Maya") conversation.
//
// Single-coach model. The 5-persona picker has been retired in favour of a
// long-running coach (default name "Maya") who remembers the user's name,
// recent topics, weaknesses, and session count. Memory lives in
// `lib/coach.ts` and is wired into every chatComplete via
// `buildCoachSystemPrompt()`.
//
// Persistence:
//   lafla.coach.state                    -> CoachState blob (lib/coach.ts)
//   lafla.freechat.session               -> JSON UiMessage[] (current chat)
//   lafla.freechat.dailyCount.YYYY-MM-DD -> number (free-tier daily user cap)
//
// Daily free-tier cap: 15 user messages / day (was 10 in the persona build).
// Premium users bypass the cap. Resets at local midnight by date key.

import { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { tokens } from "../theme";
import { speak } from "../lib/tts";
import { chatComplete } from "../lib/llm-router";
import type { ChatMessage } from "../lib/llm-types";
import {
  buildCoachSystemPrompt,
  getCoachGreeting,
  getCoachState,
  recordMessage,
  recordSession,
  type CoachState,
} from "../lib/coach";
import { isPremium } from "../lib/iap";
import {
  isAvailable as isSpeechAvailable,
  startListening,
  stopListening,
} from "../lib/speech-recognition";

// ---------------------------------------------------------------------------
// Storage keys + cap
// ---------------------------------------------------------------------------

const K_SESSION = "lafla.freechat.session";
const K_DAILY_PREFIX = "lafla.freechat.dailyCount."; // + YYYY-MM-DD
const DAILY_LIMIT = 15;

function todayKey(): string {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

// ---------------------------------------------------------------------------
// Local message shape (separate from llm-types ChatMessage so we can carry
// transient flags like "error" without leaking them to the API).
// ---------------------------------------------------------------------------

interface UiMessage {
  role: "user" | "assistant";
  content: string;
  error?: boolean;
}

const ERROR_FALLBACK = "Şu an AI hizmeti kullanılamıyor, biraz sonra dene.";

// ---------------------------------------------------------------------------
// Screen
// ---------------------------------------------------------------------------

export default function FreeChatScreen() {
  const router = useRouter();
  const [coach, setCoach] = useState<CoachState | null>(null);
  const [messages, setMessages] = useState<UiMessage[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [dailyCount, setDailyCount] = useState(0);
  const [premium, setPremium] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [voiceAvailable, setVoiceAvailable] = useState(false);
  const [listening, setListening] = useState(false);
  const scrollRef = useRef<ScrollView>(null);

  const atLimit = !premium && dailyCount >= DAILY_LIMIT;

  // -------------------------------------------------------------------------
  // Hydrate coach state + session + daily count + premium + voice on mount.
  // recordSession() is called once per screen open (defines a "session").
  // -------------------------------------------------------------------------
  useEffect(() => {
    (async () => {
      try {
        const [coachState, storedSession, storedCount, prem, voice] =
          await Promise.all([
            getCoachState(),
            AsyncStorage.getItem(K_SESSION),
            AsyncStorage.getItem(K_DAILY_PREFIX + todayKey()),
            isPremium(),
            isSpeechAvailable(),
          ]);

        setCoach(coachState);
        setPremium(prem);
        setVoiceAvailable(voice);

        if (storedSession) {
          try {
            const parsed = JSON.parse(storedSession) as UiMessage[];
            if (Array.isArray(parsed) && parsed.length > 0) {
              setMessages(parsed);
            } else {
              seedGreeting(coachState);
            }
          } catch {
            seedGreeting(coachState);
          }
        } else {
          seedGreeting(coachState);
        }

        const n = storedCount ? parseInt(storedCount, 10) : 0;
        setDailyCount(Number.isFinite(n) && n > 0 ? n : 0);

        // Record one session per app open of this screen.
        void recordSession();
      } catch {
        // Even if storage flat-out fails, render *something* so the screen
        // isn't a blank wall.
        seedGreeting(null);
      } finally {
        setHydrated(true);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Helper used during hydration / reset.
  const seedGreeting = (state: CoachState | null) => {
    const greeting = state
      ? getCoachGreeting(state)
      : "Hi, I'm Maya — your English coach. Bugün ne konuşmak istersin?";
    setMessages([{ role: "assistant", content: greeting }]);
  };

  // -------------------------------------------------------------------------
  // Persist session whenever it changes (after hydration).
  // -------------------------------------------------------------------------
  useEffect(() => {
    if (!hydrated) return;
    void AsyncStorage.setItem(K_SESSION, JSON.stringify(messages)).catch(
      () => {},
    );
  }, [messages, hydrated]);

  // -------------------------------------------------------------------------
  // Stop voice recognition if the screen unmounts mid-listen.
  // -------------------------------------------------------------------------
  useEffect(() => {
    return () => {
      if (listening) void stopListening();
    };
  }, [listening]);

  // -------------------------------------------------------------------------
  // Auto-scroll to bottom on new content.
  // -------------------------------------------------------------------------
  useEffect(() => {
    const t = setTimeout(
      () => scrollRef.current?.scrollToEnd({ animated: true }),
      80,
    );
    return () => clearTimeout(t);
  }, [messages, sending]);

  // -------------------------------------------------------------------------
  // System prompt is rebuilt every render off the current coach state. Cheap
  // (string concat, <1 KB) and ensures freshly-added topics/weaknesses make
  // it into the very next turn without a full re-mount.
  // -------------------------------------------------------------------------
  const systemPrompt = useMemo(() => {
    if (!coach) return "";
    return buildCoachSystemPrompt(coach, null);
  }, [coach]);

  // -------------------------------------------------------------------------
  // Actions
  // -------------------------------------------------------------------------

  const handleNewSession = () => {
    Alert.alert(
      "Yeni sohbet",
      "Mevcut konuşma silinecek. Devam edilsin mi?",
      [
        { text: "Vazgeç", style: "cancel" },
        {
          text: "Yeni başla",
          style: "destructive",
          onPress: () => {
            seedGreeting(coach);
          },
        },
      ],
    );
  };

  const handleMicPress = async () => {
    if (sending || atLimit) return;

    if (!voiceAvailable || Platform.OS !== "ios") {
      Alert.alert(
        "Yakında",
        "Sesli mesaj özelliği yakında geliyor. Şimdilik yazarak devam edebilirsin.",
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
        // Interim results overwrite the draft; final result triggers nothing
        // automatically — we wait for the user to hit send.
        setInput(text);
        if (isFinal) setListening(false);
      },
      onError: (err) => {
        if (__DEV__) console.warn("[freechat] speech error", err);
        setListening(false);
        Alert.alert(
          "Sesli giriş başarısız",
          "Mikrofon izni veya iOS sürümü uygun değil. Yazarak deneyebilirsin.",
        );
      },
    });
  };

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || sending || atLimit) return;
    if (listening) {
      await stopListening();
      setListening(false);
    }

    // Optimistic append + clear input.
    const userMsg: UiMessage = { role: "user", content: text };
    const nextMessages: UiMessage[] = [...messages, userMsg];
    setMessages(nextMessages);
    setInput("");
    setSending(true);

    // Bump daily count + persistent message counter (best-effort; failures
    // never block the send).
    if (!premium) {
      const newCount = dailyCount + 1;
      setDailyCount(newCount);
      void AsyncStorage.setItem(
        K_DAILY_PREFIX + todayKey(),
        String(newCount),
      ).catch(() => {});
    }
    void recordMessage();

    // Build API payload — strip transient UI flags and prepend the system
    // prompt built from the live coach state.
    const apiMessages: ChatMessage[] = [
      { role: "system", content: systemPrompt },
      ...nextMessages.map((m) => ({ role: m.role, content: m.content })),
    ];

    try {
      const reply = await chatComplete(apiMessages, { maxTokens: 280 });
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply.trim() },
      ]);
    } catch (err) {
      if (__DEV__) console.warn("[freechat] chatComplete failed", err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: ERROR_FALLBACK, error: true },
      ]);
    } finally {
      setSending(false);
    }
  };

  // -------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------

  const coachName = coach?.name ?? "Maya";
  const status = sending ? "yazıyor…" : listening ? "dinliyor…" : "aktif";

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backBtn}
          hitSlop={8}
        >
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.title}>Sohbet</Text>
        <View style={styles.headerRight}>
          <Pressable
            onPress={() => router.push("/freechat-voice" as never)}
            style={styles.voiceBtn}
            hitSlop={8}
            accessibilityLabel="Sesli sohbet moduna geç"
          >
            <Text style={styles.voiceBtnText}>🎙 Sesli sohbet</Text>
          </Pressable>
          <Pressable
            onPress={handleNewSession}
            style={styles.newBtn}
            hitSlop={8}
          >
            <Text style={styles.newBtnText}>Yeni</Text>
          </Pressable>
        </View>
      </View>

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      >
        {/* Coach card — single coach, no picker. */}
        <View style={styles.coachCard}>
          <View style={styles.coachAvatar}>
            <Text style={styles.coachAvatarText}>
              {coachName.charAt(0).toUpperCase()}
            </Text>
          </View>
          <View style={styles.coachText}>
            <Text style={styles.coachName}>{coachName} — Koçun</Text>
            <View style={styles.statusRow}>
              <View
                style={[
                  styles.onlineDot,
                  (sending || listening) && styles.onlineDotBusy,
                ]}
              />
              <Text style={styles.statusText}>{status}</Text>
            </View>
          </View>
        </View>

        {/* Daily-count chip (hidden for premium) */}
        {!premium && (
          <View style={styles.counterRow}>
            <Text
              style={[styles.counterText, atLimit && styles.counterTextLimit]}
            >
              {atLimit
                ? `Bugün için sınıra ulaştın (${dailyCount}/${DAILY_LIMIT})`
                : `Bugünkü mesaj: ${dailyCount}/${DAILY_LIMIT}`}
            </Text>
          </View>
        )}

        {/* Chat scroll */}
        <ScrollView
          ref={scrollRef}
          style={styles.chatScroll}
          contentContainerStyle={styles.chatContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {messages.map((msg, i) => (
            <ChatBubble key={i} message={msg} />
          ))}

          {sending && (
            <View style={[bubbleStyles.row, bubbleStyles.rowNpc]}>
              <View
                style={[
                  bubbleStyles.bubble,
                  bubbleStyles.bubbleNpc,
                  bubbleStyles.typingBubble,
                ]}
              >
                <ActivityIndicator
                  color={tokens.text.onSecondary}
                  size="small"
                />
                <Text style={bubbleStyles.typingText}>yazıyor…</Text>
              </View>
            </View>
          )}
        </ScrollView>

        {/* Input bar OR paywall CTA */}
        {atLimit ? (
          <View style={styles.paywallBar}>
            <Text style={styles.paywallText}>
              {coachName} ile sınırsız sohbet için Premium'a geç.
            </Text>
            <Pressable
              style={styles.paywallBtn}
              onPress={() => router.push("/paywall" as never)}
            >
              <Text style={styles.paywallBtnText}>Premium'a geç →</Text>
            </Pressable>
          </View>
        ) : (
          <View style={styles.inputBar}>
            <View style={styles.inputRow}>
              <Pressable
                style={[styles.micBtn, listening && styles.micBtnActive]}
                onPress={handleMicPress}
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
                value={input}
                onChangeText={setInput}
                placeholder="İngilizce yaz..."
                placeholderTextColor={tokens.text.tertiary}
                editable={!sending}
                multiline
                autoCapitalize="sentences"
                returnKeyType="send"
                blurOnSubmit={false}
                onSubmitEditing={sendMessage}
              />
              <Pressable
                style={[
                  styles.sendBtn,
                  (!input.trim() || sending) && styles.sendBtnDisabled,
                ]}
                onPress={sendMessage}
                disabled={!input.trim() || sending}
                hitSlop={6}
              >
                <Text style={styles.sendBtnText}>↑</Text>
              </Pressable>
            </View>
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Chat bubble — tap to replay assistant lines via TTS (English).
// Error bubbles play back in Turkish since the fallback copy is TR.
// ---------------------------------------------------------------------------

function ChatBubble({ message }: { message: UiMessage }) {
  const isUser = message.role === "user";
  const isError = message.error === true;

  return (
    <View
      style={[
        bubbleStyles.row,
        isUser ? bubbleStyles.rowUser : bubbleStyles.rowNpc,
      ]}
    >
      <Pressable
        onPress={() =>
          speak(message.content, { lang: isError ? "tr-TR" : "en-US" })
        }
        style={[
          bubbleStyles.bubble,
          isUser
            ? bubbleStyles.bubbleUser
            : isError
              ? bubbleStyles.bubbleError
              : bubbleStyles.bubbleNpc,
        ]}
      >
        <Text
          style={[
            bubbleStyles.text,
            isUser
              ? bubbleStyles.textUser
              : isError
                ? bubbleStyles.textError
                : bubbleStyles.textNpc,
          ]}
        >
          {message.content}
        </Text>
      </Pressable>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  flex: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 56,
  },
  backBtn: { width: 70 },
  backText: { color: tokens.text.secondary, fontSize: 15 },
  title: {
    fontSize: 20,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  voiceBtn: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
  },
  voiceBtnText: {
    color: tokens.brand.tertiary,
    fontSize: 12,
    fontWeight: tokens.weight.bold,
  },
  newBtn: {
    alignItems: "flex-end",
  },
  newBtnText: {
    color: tokens.brand.tertiary,
    fontSize: 14,
    fontWeight: tokens.weight.bold,
  },
  coachCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginHorizontal: 16,
    marginTop: 4,
    marginBottom: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  coachAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: tokens.brand.secondary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: tokens.brand.tertiary,
  },
  coachAvatarText: {
    fontSize: 20,
    fontWeight: tokens.weight.black,
    color: tokens.brand.primary,
  },
  coachText: { flex: 1 },
  coachName: {
    fontSize: 16,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 2,
  },
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: tokens.brand.tertiary,
  },
  onlineDotBusy: {
    backgroundColor: tokens.semantic.success,
  },
  statusText: {
    fontSize: 12,
    color: tokens.text.secondary,
  },
  counterRow: {
    alignItems: "center",
    paddingBottom: 6,
  },
  counterText: {
    fontSize: 11,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.semibold,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  counterTextLimit: {
    color: tokens.semantic.error,
  },
  chatScroll: {
    flex: 1,
    paddingHorizontal: 16,
  },
  chatContent: {
    paddingVertical: 12,
    gap: 10,
  },
  inputBar: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
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
    backgroundColor: tokens.bg.surfaceContainerHigh,
    alignItems: "center",
    justifyContent: "center",
  },
  micBtnActive: {
    backgroundColor: tokens.semantic.error,
  },
  micText: {
    fontSize: 20,
  },
  micTextActive: {
    fontSize: 18,
    color: tokens.semantic.onError,
    fontWeight: tokens.weight.black,
  },
  input: {
    flex: 1,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.light,
    borderRadius: tokens.radius.full,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    color: tokens.text.primary,
    maxHeight: 100,
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: tokens.brand.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  sendBtnDisabled: {
    opacity: 0.4,
  },
  sendBtnText: {
    color: tokens.text.onPrimary,
    fontSize: 22,
    fontWeight: tokens.weight.black,
  },
  paywallBar: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
    gap: 8,
  },
  paywallText: {
    fontSize: 13,
    color: tokens.text.secondary,
    textAlign: "center",
  },
  paywallBtn: {
    backgroundColor: tokens.brand.primary,
    paddingVertical: 14,
    borderRadius: tokens.radius.full,
    alignItems: "center",
  },
  paywallBtnText: {
    color: tokens.text.onPrimary,
    fontSize: 15,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 0.3,
  },
});

const bubbleStyles = StyleSheet.create({
  row: {
    flexDirection: "column",
    maxWidth: "85%",
  },
  rowNpc: {
    alignSelf: "flex-start",
    alignItems: "flex-start",
  },
  rowUser: {
    alignSelf: "flex-end",
    alignItems: "flex-end",
  },
  bubble: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
  },
  bubbleNpc: {
    backgroundColor: tokens.brand.secondary,
    borderBottomLeftRadius: 4,
  },
  bubbleUser: {
    backgroundColor: tokens.brand.primary,
    borderBottomRightRadius: 4,
  },
  bubbleError: {
    backgroundColor: tokens.semantic.errorContainer,
    borderBottomLeftRadius: 4,
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
  },
  textNpc: {
    color: tokens.text.onSecondary,
  },
  textUser: {
    color: tokens.text.onPrimary,
  },
  textError: {
    color: tokens.semantic.onErrorContainer,
  },
  typingBubble: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  typingText: {
    color: tokens.text.onSecondary,
    fontSize: 13,
    fontStyle: "italic",
  },
});
