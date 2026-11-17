// Freechat — switch-trigger #4 (2026-05-20).
//
// Rehberli senaryolardan ayrı, tamamen cihaz-içi serbest sohbet:
//   1. Günün prompt'u (pickPromptOfDay) NPC opener olarak gelir
//   2. Kullanıcı serbest text yazar
//   3. Yerel intent/entity/state motoru bağlamsal bir yanıt üretir
//   4. Switch-2 inline error UI burada da çalışır (Türkçe hata ipucu)
//   5. 5. user turn sonra paywall ("Lafla Pro ile uzunluk sınırı yok")
//
// Kullanıcı metni ve sohbet bağlamı ağ üzerinden gönderilmez.

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
import { detectMistakes, getPattern } from "../lib/mistake-patterns";
import { recordUserText } from "../lib/mistake-tracker";
import { trackEvent } from "../lib/analytics";
import { checkMayaOutput, checkUserInput } from "../lib/safety-filter";
import { speak } from "../lib/tts";
import { isPremium, subscribePremiumChange } from "../lib/iap";
import { useSession } from "../lib/useSession";
import { useTranslation } from "../lib/i18n";
import {
  createConversationState,
  replyToConversation,
} from "../lib/local-conversation-engine";
import {
  getLocalFreeChatUsage,
  reserveLocalFreeChatTurn,
} from "../lib/local-freechat-store";

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
  const { t, locale } = useTranslation();
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
  const scrollRef = useRef<ScrollView | null>(null);
  const conversationStateRef = useRef(createConversationState(prompt));
  const sendingRef = useRef(false);

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
      const [isPrem, localTurns] = await Promise.all([
        isPremium().catch(() => false),
        getLocalFreeChatUsage().catch(() => 0),
      ]);
      if (!cancelled) {
        setPremium(isPrem);
        setUserTurnCount(localTurns);
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
    if (!text || limitHit || loading || sendingRef.current) return;
    sendingRef.current = true;
    setLoading(true);
    try {
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
        setLines((previous) => [
          ...previous,
          {
            speaker: "npc",
            text:
              locale === "tr"
                ? (inputSafety.suggestedResponse_tr ??
                  t("freechat.safety_redirect"))
                : t("freechat.safety_redirect"),
            hint_tr:
              locale === "tr" ? t("freechat.safety_hint") : undefined,
          },
        ]);
        return;
      }

      // The daily free quota is local and serialized, so rapid double taps
      // cannot consume more than the visible limit.
      const reservation = await reserveLocalFreeChatTurn({
        limit: premium ? null : FREE_CHAT_FREE_TURN_LIMIT,
        promptId: prompt.id,
      });
      setUserTurnCount(reservation.count);
      if (!reservation.allowed) return;

      const hits = detectMistakes(text);
      let mistakeInline: ChatLine["mistake"];
      if (hits.length > 0) {
        const ranked = hits
          .map((hit) => ({ hit, pattern: getPattern(hit.patternId) }))
          .filter((item) => item.pattern)
          .sort(
            (left, right) =>
              (right.pattern!.weight ?? 0) - (left.pattern!.weight ?? 0),
          );
        const top = ranked[0];
        if (top) {
          mistakeInline = {
            matched: top.hit.matchedSubstring,
            reason_tr: top.pattern!.reason_tr,
            correct_example: top.pattern!.example_right,
          };
        }
      }

      const localReply = replyToConversation(
        text,
        prompt,
        conversationStateRef.current,
      );
      conversationStateRef.current = localReply.state;

      const outputSafety = checkMayaOutput(localReply.text);
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

      const npcLine: ChatLine = {
        speaker: "npc",
        text: outputSafety.ok
          ? localReply.text
          : locale === "tr"
            ? (outputSafety.suggestedResponse_tr ??
              t("freechat.safety_redirect"))
            : t("freechat.safety_redirect"),
        hint_tr: outputSafety.ok
          ? localReply.hintTr
          : locale === "tr"
            ? t("freechat.safety_hint")
            : undefined,
      };
      const userLine: ChatLine = {
        speaker: "user",
        text,
        mistake: mistakeInline,
      };

      setInput("");
      setLines((previous) => [...previous, userLine, npcLine]);
      void Haptics.selectionAsync().catch(() => {});
      void recordUserText(text).catch(() => {});
      void trackEvent("freechat_local_reply", {
        prompt_id: prompt.id,
        intent: localReply.intent,
        strategy: localReply.strategy,
        turn_count: reservation.count,
      }).catch(() => {});
    } finally {
      sendingRef.current = false;
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
          accessibilityLabel={t("common.back")}
        >
          <Text style={styles.backText}>← {t("common.back")}</Text>
        </Pressable>
        <Text style={styles.title}>{t("freechat.title")}</Text>
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

        {/* Paywall gate OR input */}
        {!premium && userTurnCount >= FREE_CHAT_FREE_TURN_LIMIT ? (
          <View style={styles.paywallBox}>
            <Text style={styles.paywallTitle}>{t("freechat.limit_title")}</Text>
            <Text style={styles.paywallSub}>
              {t("freechat.limit_body", { count: String(FREE_CHAT_FREE_TURN_LIMIT) })}
            </Text>
            <Button label={t("freechat.pro_cta")} onPress={handlePaywall} stacked />
            <Pressable
              onPress={handleExit}
              style={styles.paywallSkip}
              accessibilityRole="button"
              accessibilityLabel={t("freechat.skip_for_now")}
            >
              <Text style={styles.paywallSkipText}>{t("freechat.skip_for_now")}</Text>
            </Pressable>
          </View>
        ) : (
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              value={input}
              onChangeText={setInput}
              maxLength={600}
              placeholder={loading ? t("freechat.replying") : t("freechat.write_placeholder")}
              placeholderTextColor={tokens.text.tertiary}
              autoCapitalize="sentences"
              autoCorrect
              returnKeyType="send"
              onSubmitEditing={sendUserTurn}
              editable={!limitHit && !loading}
              accessibilityLabel={t("freechat.message_label")}
              accessibilityHint={t("freechat.message_hint")}
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
              accessibilityLabel={t("freechat.send")}
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
  const { t, locale } = useTranslation();

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
        accessibilityLabel={`${isUser ? t("freechat.you") : t("freechat.partner")}: ${line.text}`}
        accessibilityHint={t("freechat.listen_hint")}
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
            {locale === "tr"
              ? line.mistake.reason_tr
              : t("learning.mistake_fallback_en")}
          </Text>
        </View>
      )}

      {/* NPC ipucu (TR) — sohbet akışında ders */}
      {locale === "tr" && !isUser && line.hint_tr && (
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
