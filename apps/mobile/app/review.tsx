// Review — vocab SRS session screen.
//
// Active-recall flashcard:
//   1. Türkçe ipucu gösterilir, İngilizce cevap kullanıcıdan istenir.
//   2. Cevap cihazda değerlendirilir; sonra doğru karşılık ve ses açılır.
//   3. Ölçülen sonuç HLR aralığını günceller; öz-bildirim puanı şişiremez.
//
// Session bitince: özet (kaç doğru / yanlış, kaç gün sonra tekrar)

import { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Alert,
  Keyboard,
  TextInput,
} from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { ThemedStatusBar } from "../components/ThemedStatusBar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";

import { tokens } from "../theme";
import { Button } from "../components/Button";
import {
  getDueVocab,
  recordVocabReview,
  evaluateVocabRecall,
  type VocabItem,
} from "../lib/srs-vocab";
import { speak } from "../lib/tts";
import { trackEvent } from "../lib/analytics";
import { useTranslation } from "../lib/i18n";
import { AsyncScreenState, type AsyncScreenStatus } from "../components/AsyncScreenState";

interface SessionStats {
  total: number;
  ok: number;
  forgot: number;
}

export default function ReviewScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const [items, setItems] = useState<VocabItem[]>([]);
  const [status, setStatus] = useState<AsyncScreenStatus>("loading");
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [finished, setFinished] = useState(false);
  const [savingRecall, setSavingRecall] = useState(false);
  const [answer, setAnswer] = useState("");
  const [recallCorrect, setRecallCorrect] = useState<boolean | null>(null);
  const [stats, setStats] = useState<SessionStats>({
    total: 0,
    ok: 0,
    forgot: 0,
  });

  // Card flip animation — reveal sırasında card sallanır
  const flip = useSharedValue(0);

  const load = useCallback(async () => {
    setStatus("loading");
    try {
      const due = await getDueVocab({ limit: 30 });
      setItems(due);
      setStats((s) => ({ ...s, total: due.length }));
      setStatus("ready");
      void trackEvent("vocab_review_session_start", {
        due_count: due.length,
      }).catch(() => {});
    } catch {
      setStatus("error");
    }
  }, []);
  useEffect(() => { void load(); }, [load]);

  const current = items[idx] ?? null;

  const handleReveal = () => {
    if (revealed || !current || !answer.trim()) return;
    setRecallCorrect(evaluateVocabRecall(current.word, answer));
    setRevealed(true);
    Keyboard.dismiss();
    void Haptics.selectionAsync().catch(() => {});
    flip.value = withSequence(
      withTiming(1, { duration: 220, easing: Easing.out(Easing.cubic) }),
      withTiming(0, { duration: 0 }),
    );
    // İngilizce kelimeyi auto-speak
    setTimeout(() => speak(current.word).catch(() => {}), 250);
  };

  const handleRecall = async (r: "ok" | "forgot") => {
    if (!current || savingRecall) return;
    setSavingRecall(true);
    void Haptics.impactAsync(
      r === "forgot"
        ? Haptics.ImpactFeedbackStyle.Heavy
        : Haptics.ImpactFeedbackStyle.Light,
    ).catch(() => {});
    try {
      await recordVocabReview(current.id, r);
    } catch {
      Alert.alert(t("common.error_title"), t("common.load_error_body"));
      setSavingRecall(false);
      return;
    }
    setStats((s) => ({
      ...s,
      [r]: s[r] + 1,
    }));
    // Sıradaki item
    if (idx + 1 >= items.length) {
      setFinished(true);
      void trackEvent("vocab_review_session_complete", {
        total: items.length,
      }).catch(() => {});
    } else {
      setIdx(idx + 1);
      setRevealed(false);
      setAnswer("");
      setRecallCorrect(null);
    }
    setSavingRecall(false);
  };

  const cardFlipStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotateY: `${flip.value * 6}deg`,
      },
    ],
  }));

  // ─── empty queue ─────────────────────────────────────────────────
  if (status !== "ready") {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <ThemedStatusBar />
        <AsyncScreenState status={status} onRetry={() => void load()} />
      </SafeAreaView>
    );
  }

  if (items.length === 0 && !finished) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <ThemedStatusBar />
        <View style={styles.empty}>
          <Text style={styles.emptyEmoji}>📚</Text>
          <Text style={styles.emptyTitle}>{t("review.empty_title")}</Text>
          <Text style={styles.emptySub}>{t("review.empty_body")}</Text>
          <Button
            label={t("review.home")}
            onPress={() => router.replace("/today" as never)}
            stacked
          />
        </View>
      </SafeAreaView>
    );
  }

  // ─── session done ───────────────────────────────────────────────
  if (finished) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <ThemedStatusBar />
        <ScrollView contentContainerStyle={styles.doneWrap}>
          <Text style={styles.doneEmoji}>✨</Text>
          <Text style={styles.doneTitle}>{t("review.done")}</Text>
          <View style={styles.doneStats}>
            <DoneRow label={t("review.total")} value={String(stats.total)} accent={tokens.text.primary} />
            <DoneRow label={t("review.remembered")} value={String(stats.ok)} accent={tokens.brand.tertiary} />
            <DoneRow label={t("review.forgot")} value={String(stats.forgot)} accent={tokens.semantic.error} />
          </View>
          <Text style={styles.doneFootnote}>
            {t("review.footnote")}
          </Text>
          <View style={{ marginTop: 24, width: "100%" }}>
            <Button
              label={t("review.home")}
              onPress={() => router.replace("/today" as never)}
              stacked
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ─── active card ────────────────────────────────────────────────
  if (!current) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <ThemedStatusBar />
        <AsyncScreenState status="error" onRetry={() => void load()} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <ThemedStatusBar />

      {/* Header — progress + back */}
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backBtn}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel={t("common.back")}
        >
          <Text style={styles.backText}>← {t("common.back")}</Text>
        </Pressable>
        <Text style={styles.progress}>
          {idx + 1} / {items.length}
        </Text>
        <View style={styles.backBtn} />
      </View>

      <View style={styles.body}>
        {/* Kelime kartı */}
        <Animated.View style={[styles.card, cardFlipStyle]}>
          <Text style={styles.sourceContext}>
            📍 {current.source_lesson_title}
          </Text>
          <Text style={styles.frontWord}>{current.translation}</Text>
          {revealed && (
            <>
              <View style={styles.divider} />
              <Pressable
                onPress={() => speak(current.word).catch(() => {})}
                accessibilityRole="button"
                accessibilityLabel={t("review.listen_label", { word: current.word })}
              >
                <Text style={styles.backWord}>{current.word} 🔊</Text>
              </Pressable>
            </>
          )}
        </Animated.View>

        {/* Active production first; reveal and schedule only after grading. */}
        {!revealed ? (
          <View style={styles.revealBtnWrap}>
            <TextInput
              value={answer}
              onChangeText={setAnswer}
              onSubmitEditing={handleReveal}
              placeholder={t("review.answer_placeholder")}
              placeholderTextColor={tokens.text.tertiary}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="done"
              accessibilityLabel={t("review.answer_label")}
              style={styles.answerInput}
            />
            <Button
              label={t("review.check")}
              onPress={handleReveal}
              disabled={!answer.trim()}
              stacked
            />
          </View>
        ) : (
          <View style={styles.recallResult}>
            <Text
              accessibilityLiveRegion="polite"
              style={[
                styles.recallResultText,
                {
                  color: recallCorrect
                    ? tokens.semantic.success
                    : tokens.semantic.error,
                },
              ]}
            >
              {recallCorrect ? t("review.correct") : t("review.incorrect")}
            </Text>
            <Button
              label={t("common.continue")}
              onPress={() => handleRecall(recallCorrect ? "ok" : "forgot")}
              disabled={savingRecall}
              stacked
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

// ─── sub components ──────────────────────────────────────────────────

function DoneRow({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <View style={styles.doneRow}>
      <Text style={styles.doneRowLabel}>{label}</Text>
      <Text style={[styles.doneRowValue, { color: accent }]}>{value}</Text>
    </View>
  );
}

// ─── styles ──────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
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
  progress: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 0.5,
  },

  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 32,
    justifyContent: "space-between",
  },

  card: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.lg,
    paddingHorizontal: 24,
    paddingVertical: 40,
    minHeight: 280,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: tokens.border.outline,
    gap: 16,
  },
  sourceContext: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  frontWord: {
    fontSize: 32,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    textAlign: "center",
    lineHeight: 38,
    fontFamily: tokens.font.display,
    letterSpacing: -0.5,
  },
  divider: {
    height: 1,
    width: "60%",
    backgroundColor: tokens.border.outlineVariant,
    marginVertical: 8,
  },
  backWord: {
    fontSize: 28,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.tertiary,
    textAlign: "center",
    lineHeight: 34,
    fontFamily: tokens.font.display,
    letterSpacing: -0.3,
  },

  revealBtnWrap: {
    width: "100%",
    marginTop: 16,
  },
  answerInput: {
    minHeight: 52,
    paddingHorizontal: 16,
    borderRadius: tokens.radius.base,
    borderWidth: 1.5,
    borderColor: tokens.border.outline,
    backgroundColor: tokens.bg.surfaceContainer,
    color: tokens.text.primary,
    fontSize: 17,
    fontWeight: tokens.weight.semibold,
    marginBottom: 12,
  },
  recallResult: {
    gap: 12,
    marginTop: 16,
  },
  recallResultText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: tokens.weight.extrabold,
  },

  // empty
  empty: {
    flex: 1,
    paddingHorizontal: 32,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  emptyEmoji: { fontSize: 64, marginBottom: 8 },
  emptyTitle: {
    fontSize: 22,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    textAlign: "center",
    letterSpacing: -0.5,
  },
  emptySub: {
    fontSize: 14,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 20,
  },

  // done
  doneWrap: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 32,
    alignItems: "center",
  },
  doneEmoji: { fontSize: 64, marginBottom: 8 },
  doneTitle: {
    fontSize: 26,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    textAlign: "center",
    letterSpacing: -0.6,
    marginBottom: 20,
    fontFamily: tokens.font.display,
  },
  doneStats: {
    width: "100%",
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.lg,
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: tokens.border.outline,
  },
  doneRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: tokens.border.light,
  },
  doneRowLabel: {
    fontSize: 14,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.semibold,
  },
  doneRowValue: {
    fontSize: 22,
    fontWeight: tokens.weight.black,
    letterSpacing: -0.4,
    fontFamily: tokens.font.display,
  },
  doneFootnote: {
    marginTop: 18,
    fontSize: 12,
    color: tokens.text.tertiary,
    textAlign: "center",
    lineHeight: 17,
  },
});
