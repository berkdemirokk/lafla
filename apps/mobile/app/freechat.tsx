// Freechat — switch-trigger #4 (2026-05-20).
//
// Lafla'nın "sıfır LLM" konumlandırması rakipler için moat; ama kullanıcı
// "günümü anlatmak istiyorum" derse karşılığı yoktu. Free chat hybrid bu
// boşluğu deterministic, regex-tabanlı bir state machine ile kapatır:
//   1. Günün prompt'u (pickPromptOfDay) NPC opener olarak gelir
//   2. Kullanıcı serbest text yazar
//   3. pickFollowup() pattern matcher cevabı sınıflandırır, NPC reply gönderir
//   4. Switch-2 inline error UI burada da çalışır (Türkçe hata ipucu)
//   5. 5. user turn sonra paywall ("Lafla Pro ile uzunluk sınırı yok")
//
// Latency: 0 LLM, <5ms per turn. iMessage tarzı bubble UI; RoleplayChat'in
// daha minimal versiyonu (skor chip yok — bu "akıcılık testi" değil sohbet).

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
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";

import { tokens } from "../theme";
import { Button } from "../components/Button";
import {
  FREE_CHAT_FREE_TURN_LIMIT,
  pickFollowup,
  pickPromptOfDay,
  type FollowupPattern,
} from "../data/free-chat-prompts";
import {
  detectMistakes,
  getPattern,
} from "../lib/mistake-patterns";
import { recordUserText } from "../lib/mistake-tracker";
import { trackEvent } from "../lib/analytics";
import { speak } from "../lib/tts";
import { isPremium, subscribePremiumChange } from "../lib/iap";
import { useSession } from "../lib/useSession";

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
  const [paywallGate, setPaywallGate] = useState(false);
  const [premium, setPremium] = useState(false);
  const scrollRef = useRef<ScrollView | null>(null);

  // Sahne açılışında analytics + premium check (kullanıcı premium'sa
  // turn limit'i devre dışı kalır — Lafla Pro "uzunluk sınırı yok" sözünü
  // bu noktada yerine getiriyoruz).
  // 2026-05-25 (B-PAY-3) — subscribePremiumChange ile purchase/rewarded
  // grant sonrası refresh; aksi halde turn limit eski cache'le tetiklenir.
  useEffect(() => {
    void trackEvent("freechat_opened", { prompt_id: prompt.id }).catch(
      () => {},
    );
    let cancelled = false;
    const refresh = async () => {
      const isPrem = await isPremium().catch(() => false);
      if (!cancelled) setPremium(isPrem);
    };
    refresh();
    const unsub = subscribePremiumChange(refresh);
    return () => {
      cancelled = true;
      unsub();
    };
  }, [prompt.id]);

  // 2026-05-25 (B-PAY-13) — Anonim user freechat'e ulaşırsa paywall'a
  // gönder; RC user ID yok → satın alma yapsa bile entitlement attribute
  // edilmez. Sign-in zorunlu.
  const { session, loading: sessionLoading } = useSession();
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

  const sendUserTurn = () => {
    const text = input.trim();
    if (!text || limitHit) return;

    // 1) detectMistakes — Switch-2 inline error UI reuse
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

    // 2) classify reply -> followup
    const fu: FollowupPattern | null = pickFollowup(text, prompt);

    setLines((prev) => [
      ...prev,
      {
        speaker: "user",
        text,
        mistake: mistakeInline,
      },
    ]);
    setInput("");
    void Haptics.selectionAsync().catch(() => {});

    // mistake tracker (best-effort)
    recordUserText(text).catch(() => {});

    const newTurnCount = userTurnCount + 1;
    setUserTurnCount(newTurnCount);

    // 3) NPC follow-up after a short delay (feels less robotic)
    setTimeout(() => {
      const npc_text = fu?.npc_reply ?? prompt.default_followup;
      const hint_tr = fu?.hint_tr ?? prompt.default_hint_tr;

      // 4) Paywall gate at limit
      if (!premium && newTurnCount >= FREE_CHAT_FREE_TURN_LIMIT) {
        setLines((prev) => [
          ...prev,
          {
            speaker: "npc",
            text: "(...)",
            hint_tr: "Devam etmek için Lafla Pro gerekli — uzunluk sınırı yok.",
          },
        ]);
        setPaywallGate(true);
        return;
      }

      setLines((prev) => [
        ...prev,
        {
          speaker: "npc",
          text: npc_text,
          hint_tr,
        },
      ]);
    }, 650);
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
      <StatusBar style="light" />

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

        {/* Paywall gate OR input */}
        {paywallGate ? (
          <View style={styles.paywallBox}>
            <Text style={styles.paywallTitle}>Sohbet devam etmek istiyor</Text>
            <Text style={styles.paywallSub}>
              Ücretsiz: 5 mesaj. Lafla Pro ile uzunluk sınırı yok.
            </Text>
            <Button label="Lafla Pro açıkla" onPress={handlePaywall} stacked />
            <Pressable onPress={handleExit} style={styles.paywallSkip}>
              <Text style={styles.paywallSkipText}>Şimdilik atla</Text>
            </Pressable>
          </View>
        ) : (
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              value={input}
              onChangeText={setInput}
              placeholder="Yaz..."
              placeholderTextColor={tokens.text.tertiary}
              autoCapitalize="sentences"
              autoCorrect
              returnKeyType="send"
              onSubmitEditing={sendUserTurn}
              editable={!limitHit}
            />
            <Pressable
              onPress={sendUserTurn}
              disabled={!input.trim() || limitHit}
              style={({ pressed }) => [
                styles.sendBtn,
                (!input.trim() || limitHit) && styles.sendBtnDisabled,
                pressed && styles.sendBtnPressed,
              ]}
              accessibilityRole="button"
              accessibilityLabel="Gönder"
            >
              <Text style={styles.sendText}>↑</Text>
            </Pressable>
          </View>
        )}
      </KeyboardAvoidingView>
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
          <Text style={bubbleStyles.mistakeReason}>{line.mistake.reason_tr}</Text>
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
