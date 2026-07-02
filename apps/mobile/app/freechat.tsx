// Freechat — switch-trigger #4 (2026-05-20).
//
// Rehberli senaryolardan ayrı, isteğe bağlı AI destekli serbest sohbet:
//   1. Günün prompt'u (pickPromptOfDay) NPC opener olarak gelir
//   2. Kullanıcı serbest text yazar
//   3. Güvenli Edge Function üzerinden kısa bir AI yanıtı alınır
//   4. Switch-2 inline error UI burada da çalışır (Türkçe hata ipucu)
//   5. 5. user turn sonra paywall ("Lafla Pro ile uzunluk sınırı yok")
//
// Hata/zaman aşımında statik takip sorusuna düşer; kullanıcı sohbeti sürdürebilir.

import { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { ThemedStatusBar } from "../components/ThemedStatusBar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";

import { tokens } from "../theme";
import { Button } from "../components/Button";
import { CrisisModal } from "../components/CrisisModal";
import {
  FREE_CHAT_FREE_TURN_LIMIT,
  pickPromptOfDay,
} from "../data/free-chat-prompts";
import { chatCompleteDetailed } from "../lib/llm-router";
import { detectMistakes, getPattern } from "../lib/mistake-patterns";
import { recordUserText } from "../lib/mistake-tracker";
import { trackEvent } from "../lib/analytics";
import { checkMayaOutput, checkUserInput } from "../lib/safety-filter";
import { speak } from "../lib/tts";
import { isPremium, subscribePremiumChange } from "../lib/iap";
import { useSession } from "../lib/useSession";
import { supabase } from "../lib/supabase";

interface ChatLine {
  speaker: "npc" | "user";
  text: string;
  hint_tr?: string;
  mistake?: {
    matched: string;
    reason_tr: string;
    correct_example: string;
  };
}

export default function FreechatScreen() {
  const router = useRouter();
  const { session, loading: sessionLoading } = useSession();

  const prompt = useMemo(() => pickPromptOfDay(), []);
  const [lines, setLines] = useState<ChatLine[]>(() => [
    {
      speaker: "npc",
      text: prompt.npc_opener,
      hint_tr: prompt.hint_tr,
    },
  ]);
  const [input, setInput] = useState("");
  const [userTurnCount, setUserTurnCount] = useState(0);
  const [premium, setPremium] = useState(false);
  const [crisisModalVisible, setCrisisModalVisible] = useState(false);
  const [serviceNotice, setServiceNotice] = useState<string | null>(null);
  const scrollRef = useRef<ScrollView | null>(null);

  // Sahne açılışında analytics + premium check (kullanıcı premium'sa
  // turn limit'i devre dışı kalır — Lafla Pro "uzunluk sınırı yok" sözünü
  // bu noktada yerine getiriyoruz).
  // 2026-05-25 (B-PAY-3) — subscribePremiumChange ile purchase/rewarded
  // grant sonrası refresh; aksi halde turn limit eski cache'le tetiklenir.
  useEffect(() => {
    if (sessionLoading || !session) return;

    void trackEvent("freechat_opened", { prompt_id: prompt.id }).catch(
      () => {},
    );
    let cancelled = false;
    const refresh = async () => {
      const isPrem = await isPremium().catch(() => false);
      if (!cancelled) setPremium(isPrem);

      // Fetch daily turn count from server to sync state
      try {
        const { data: serverTurns, error } =
          await supabase.rpc("get_freechat_usage");
        if (!error && serverTurns != null && !cancelled) {
          setUserTurnCount(serverTurns);
        }
      } catch (err) {
        if (__DEV__) {
          // eslint-disable-next-line no-console
          console.warn("[Freechat] Failed to fetch server turn count:", err);
        }
      }
    };
    refresh();
    const unsub = subscribePremiumChange(refresh);
    return () => {
      cancelled = true;
      unsub();
    };
  }, [prompt.id, session, sessionLoading]);

  // 2026-05-25 (B-PAY-13) — Anonim user freechat'e ulaşırsa paywall'a
  // gönder; RC user ID yok → satın alma yapsa bile entitlement attribute
  // edilmez. Sign-in zorunlu.
  useEffect(() => {
    if (sessionLoading) return;
    if (!session) router.replace("/auth" as never);
  }, [session, sessionLoading, router]);

  // Auto-scroll on new line — keep latest bubble in view.
  useEffect(() => {
    const t = setTimeout(() => {
      scrollRef.current?.scrollToEnd({ animated: true });
    }, 50);
    return () => clearTimeout(t);
  }, [lines.length]);

  const limitHit = !premium && userTurnCount >= FREE_CHAT_FREE_TURN_LIMIT;

  const [loading, setLoading] = useState(false);

  const sendUserTurn = async () => {
    const text = input.trim();
    if (!text || limitHit || loading) return;
    setServiceNotice(null);

    const inputSafety = checkUserInput(text);
    if (!inputSafety.ok) {
      setInput("");
      void Haptics.selectionAsync().catch(() => {});
      if (inputSafety.shouldEscalate) {
        setCrisisModalVisible(true);
      }
      void trackEvent("freechat_safety_blocked", {
        prompt_id: prompt.id,
        reason: inputSafety.reason ?? "unknown",
        stage: "input",
        escalated: Boolean(inputSafety.shouldEscalate),
      }).catch(() => {});
      setLines((prev) => [
        ...prev,
        {
          speaker: "npc",
          text:
            inputSafety.suggestedResponse_tr ??
            "Bu konu Lafla pratiği için uygun değil. İngilizce çalışmaya başka bir güvenli konuyla devam edelim.",
          hint_tr: "Güvenli bir İngilizce pratiği konusu seçelim.",
        },
      ]);
      return;
    }

    // 1) detectMistakes — Switch-2 inline error UI reuse (Contrastive Coaching)
    const hits = detectMistakes(text);
    let mistakeInline: ChatLine["mistake"];
    if (hits.length > 0) {
      const ranked = hits
        .map((h) => ({ h, pat: getPattern(h.patternId) }))
        .filter((x) => x.pat)
        .sort((a, b) => (b.pat!.weight ?? 0) - (a.pat!.weight ?? 0));
      const top = ranked[0];
      if (top) {
        mistakeInline = {
          matched: top.h.matchedSubstring,
          reason_tr: top.pat!.reason_tr,
          correct_example: top.pat!.example_right,
        };
      }
    }

    // Append user message immediately
    const userLine: ChatLine = {
      speaker: "user",
      text,
      mistake: mistakeInline,
    };

    setLines((prev) => [...prev, userLine]);
    setInput("");
    void Haptics.selectionAsync().catch(() => {});

    // mistake tracker (best-effort)
    recordUserText(text).catch(() => {});

    // 2) NPC Response - Trigger real LLM
    setLoading(true);

    // Add temporary typing indicator
    setLines((prev) => [
      ...prev,
      {
        speaker: "npc",
        text: "typing...",
      },
    ]);

    try {
      // Map previous chat history to Message format
      const history = lines
        .filter((l) => l.text !== "typing...")
        .map(
          (l) =>
            ({
              role: l.speaker === "user" ? "user" : "assistant",
              content: l.text,
            }) as const,
        )
        .slice(-14);

      // Add the new user message to the history
      history.push({ role: "user", content: text });

      const completion = await chatCompleteDetailed(history, {
        promptId: prompt.id,
        maxTokens: 128,
      });
      const aiReply = completion.text;
      setServiceNotice(null);
      setUserTurnCount(completion.currentTurns ?? userTurnCount + 1);
      const outputSafety = checkMayaOutput(aiReply);
      if (!outputSafety.ok) {
        if (outputSafety.shouldEscalate) {
          setCrisisModalVisible(true);
        }
        void trackEvent("freechat_safety_blocked", {
          prompt_id: prompt.id,
          reason: outputSafety.reason ?? "unknown",
          stage: "output",
          escalated: Boolean(outputSafety.shouldEscalate),
        }).catch(() => {});
      }

      setLines((prev) => {
        const updated = [...prev];
        if (
          updated.length > 0 &&
          updated[updated.length - 1].text === "typing..."
        ) {
          updated.pop();
        }
        return [
          ...updated,
          {
            speaker: "npc",
            text: outputSafety.ok
              ? aiReply
              : (outputSafety.suggestedResponse_tr ??
                "Bu konu Lafla pratiği için uygun değil. İngilizce çalışmaya başka bir güvenli konuyla devam edelim."),
            hint_tr: outputSafety.ok
              ? "Akıcı şekilde cevap verin."
              : "Konuyu güvenli bir pratik alanına taşıyalım.",
          },
        ];
      });
    } catch (err) {
      if (__DEV__) {
        // eslint-disable-next-line no-console
        console.warn(
          "[Freechat] LLM router failed, falling back to static prompt:",
          err,
        );
      }
      setServiceNotice(
        "Canlı yanıt gecikti. Sohbeti hazır takip sorusuyla sürdürüyoruz.",
      );
      try {
        const { data: serverTurns } = await supabase.rpc("get_freechat_usage");
        if (typeof serverTurns === "number") {
          setUserTurnCount(serverTurns);
        }
      } catch {
        // The provider error remains the primary failure.
      }
      // Fallback to static prompt if offline/error
      setLines((prev) => {
        const updated = [...prev];
        if (
          updated.length > 0 &&
          updated[updated.length - 1].text === "typing..."
        ) {
          updated.pop();
        }
        return [
          ...updated,
          {
            speaker: "npc",
            text: prompt.default_followup,
            hint_tr: prompt.default_hint_tr,
          },
        ];
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePaywall = () => {
    void trackEvent("freechat_paywall_view", {
      prompt_id: prompt.id,
      turn_count: userTurnCount,
    }).catch(() => {});
    router.push("/paywall" as never);
  };

  const handleExit = () => {
    if (lines.length > 1) {
      void trackEvent("freechat_exited", {
        prompt_id: prompt.id,
        turn_count: userTurnCount,
      }).catch(() => {});
    }
    router.back();
  };

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <ThemedStatusBar />

      {/* Header */}
      <View style={styles.header}>
        <Pressable
          onPress={handleExit}
          style={styles.backBtn}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel="Geri"
        >
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.title}>Serbest sohbet</Text>
        <View style={styles.headerRight}>
          {!premium && (
            <Text style={styles.turnCounter}>
              {userTurnCount} / {FREE_CHAT_FREE_TURN_LIMIT}
            </Text>
          )}
        </View>
      </View>

      <KeyboardAvoidingView
        style={styles.kav}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 24 : 0}
      >
        <ScrollView
          ref={scrollRef}
          contentContainerStyle={styles.chatContent}
          showsVerticalScrollIndicator={false}
        >
          {lines.map((line, i) => (
            <ChatLineView key={i} line={line} />
          ))}
        </ScrollView>

        {serviceNotice ? (
          <Text style={styles.serviceNotice} accessibilityLiveRegion="polite">
            {serviceNotice}
          </Text>
        ) : null}

        {/* Paywall gate OR input */}
        {!premium && userTurnCount >= FREE_CHAT_FREE_TURN_LIMIT ? (
          <View style={styles.paywallBox}>
            <Text style={styles.paywallTitle}>Sohbet devam etmek istiyor</Text>
            <Text style={styles.paywallSub}>
              Ücretsiz: 5 mesaj. Lafla Pro ile uzunluk sınırı yok.
            </Text>
            <Button label="Lafla Pro açıkla" onPress={handlePaywall} stacked />
            <Pressable
              onPress={handleExit}
              style={styles.paywallSkip}
              accessibilityRole="button"
              accessibilityLabel="Şimdilik atla"
            >
              <Text style={styles.paywallSkipText}>Şimdilik atla</Text>
            </Pressable>
          </View>
        ) : (
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              value={input}
              onChangeText={setInput}
              placeholder={loading ? "Cevaplanıyor..." : "Yaz..."}
              placeholderTextColor={tokens.text.tertiary}
              autoCapitalize="sentences"
              autoCorrect
              returnKeyType="send"
              onSubmitEditing={sendUserTurn}
              editable={!limitHit && !loading}
              accessibilityLabel="Serbest sohbet mesajı"
              accessibilityHint="İngilizce mesajını yaz"
            />
            <Pressable
              onPress={sendUserTurn}
              disabled={!input.trim() || limitHit || loading}
              style={({ pressed }) => [
                styles.sendBtn,
                (!input.trim() || limitHit || loading) &&
                  styles.sendBtnDisabled,
                pressed && styles.sendBtnPressed,
              ]}
              accessibilityRole="button"
              accessibilityLabel="Gönder"
              accessibilityState={{
                disabled: !input.trim() || limitHit || loading,
                busy: loading,
              }}
            >
              <Text style={styles.sendText}>↑</Text>
            </Pressable>
          </View>
        )}
      </KeyboardAvoidingView>
      <CrisisModal
        visible={crisisModalVisible}
        onClose={() => setCrisisModalVisible(false)}
      />
    </SafeAreaView>
  );
}

// ============================================================
// ChatLineView — bubble + optional hint + optional mistake card
// ============================================================

function ChatLineView({ line }: { line: ChatLine }) {
  const isUser = line.speaker === "user";

  return (
    <View
      style={[
        bubbleStyles.row,
        isUser ? bubbleStyles.rowUser : bubbleStyles.rowNpc,
      ]}
    >
      <Pressable
        onPress={() => speak(line.text)}
        accessibilityRole="button"
        accessibilityLabel={`${isUser ? "Sen" : "Sohbet partneri"}: ${line.text}`}
        accessibilityHint="Mesajı sesli dinler"
        style={[
          bubbleStyles.bubble,
          isUser ? bubbleStyles.bubbleUser : bubbleStyles.bubbleNpc,
        ]}
      >
        <Text
          style={[
            bubbleStyles.text,
            isUser ? bubbleStyles.textUser : bubbleStyles.textNpc,
          ]}
        >
          {line.text}
        </Text>
      </Pressable>

      {/* Inline mistake hint (Switch-2 paritesi) */}
      {isUser && line.mistake && (
        <View style={bubbleStyles.mistakeBox}>
          <Text style={bubbleStyles.mistakeMatched}>
            ✗ {line.mistake.matched}
          </Text>
          <Text style={bubbleStyles.mistakeCorrect}>
            ✓ {line.mistake.correct_example}
          </Text>
          <Text style={bubbleStyles.mistakeReason}>
            {line.mistake.reason_tr}
          </Text>
        </View>
      )}

      {/* NPC ipucu (TR) — sohbet akışında ders */}
      {!isUser && line.hint_tr && (
        <Text style={bubbleStyles.hintTr}>💡 {line.hint_tr}</Text>
      )}
    </View>
  );
}

// ============================================================
// Styles
// ============================================================

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  kav: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: tokens.border.light,
  },
  backBtn: { minWidth: 72 },
  backText: {
    color: tokens.text.secondary,
    fontSize: 15,
    fontWeight: tokens.weight.semibold,
  },
  title: {
    fontSize: 17,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    fontFamily: tokens.font.display,
    letterSpacing: -0.3,
  },
  headerRight: { minWidth: 72, alignItems: "flex-end" },
  turnCounter: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 0.5,
  },
  serviceNotice: {
    marginHorizontal: 16,
    marginBottom: 8,
    color: tokens.semantic.warning,
    fontSize: 12,
    lineHeight: 17,
  },

  chatContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
    gap: 14,
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 16,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
    backgroundColor: tokens.bg.app,
  },
  input: {
    flex: 1,
    minHeight: 44,
    maxHeight: 120,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 15,
    color: tokens.text.primary,
    borderWidth: 1,
    borderColor: tokens.border.outline,
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: tokens.brand.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 4,
  },
  sendBtnDisabled: {
    opacity: 0.4,
    shadowOpacity: 0,
  },
  sendBtnPressed: {
    transform: [{ scale: 0.94 }],
    opacity: 0.85,
  },
  sendText: {
    fontSize: 22,
    color: tokens.text.onPrimary,
    fontWeight: tokens.weight.black,
    lineHeight: 24,
  },

  paywallBox: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 24,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
    backgroundColor: tokens.bg.surfaceContainerLow,
    alignItems: "stretch",
    gap: 6,
  },
  paywallTitle: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    fontFamily: tokens.font.display,
    textAlign: "center",
  },
  paywallSub: {
    fontSize: 13,
    color: tokens.text.secondary,
    textAlign: "center",
    marginBottom: 8,
  },
  paywallSkip: {
    marginTop: 6,
    paddingVertical: 10,
    alignItems: "center",
  },
  paywallSkipText: {
    fontSize: 13,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.semibold,
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
  text: {
    fontSize: 15,
    lineHeight: 21,
  },
  textNpc: { color: tokens.text.primary },
  textUser: { color: tokens.text.onPrimary },

  hintTr: {
    marginTop: 6,
    fontSize: 12,
    lineHeight: 17,
    color: tokens.text.tertiary,
    paddingHorizontal: 4,
  },

  mistakeBox: {
    marginTop: 6,
    marginBottom: 2,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: tokens.semantic.error,
    backgroundColor: tokens.semantic.errorContainer,
    alignSelf: "flex-end",
    maxWidth: "100%",
  },
  mistakeMatched: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.semantic.error,
    marginBottom: 2,
    textDecorationLine: "line-through",
  },
  mistakeCorrect: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
    marginBottom: 6,
  },
  mistakeReason: {
    fontSize: 12,
    lineHeight: 17,
    color: tokens.text.secondary,
  },
});
