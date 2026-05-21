// Review — vocab SRS session screen.
//
// Anki-style flashcard:
//   1. Türkçe kelime gösterilir
//   2. Kullanıcı "Cevabı gör" basar
//   3. İngilizce karşılık gösterilir + ses oyna
//   4. 4 button: "Hatırlamadım / Zor / Tamam / Kolay"
//   5. HLR algoritması yeni half-life'ı hesaplar, sonraki item'a geç
//
// Session bitince: özet (kaç doğru / yanlış, kaç gün sonra tekrar)

import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";

import { tokens } from "../theme";
import { Button } from "../components/Button";
import {
  getDueVocab,
  recordVocabReview,
  type Recall,
  type VocabItem,
} from "../lib/srs-vocab";
import { speak } from "../lib/tts";
import { trackEvent } from "../lib/analytics";

interface SessionStats {
  total: number;
  easy: number;
  ok: number;
  hard: number;
  forgot: number;
}

export default function ReviewScreen() {
  const router = useRouter();
  const [items, setItems] = useState<VocabItem[]>([]);
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [finished, setFinished] = useState(false);
  const [stats, setStats] = useState<SessionStats>({
    total: 0,
    easy: 0,
    ok: 0,
    hard: 0,
    forgot: 0,
  });

  // Card flip animation — reveal sırasında card sallanır
  const flip = useSharedValue(0);

  useEffect(() => {
    (async () => {
      const due = await getDueVocab({ limit: 30 });
      setItems(due);
      setStats((s) => ({ ...s, total: due.length }));
      void trackEvent("vocab_review_session_start", {
        due_count: due.length,
      }).catch(() => {});
    })();
  }, []);

  const current = items[idx] ?? null;

  const handleReveal = () => {
    if (revealed) return;
    setRevealed(true);
    void Haptics.selectionAsync().catch(() => {});
    flip.value = withSequence(
      withTiming(1, { duration: 220, easing: Easing.out(Easing.cubic) }),
      withTiming(0, { duration: 0 }),
    );
    // İngilizce kelimeyi auto-speak
    if (current) {
      setTimeout(() => speak(current.word).catch(() => {}), 250);
    }
  };

  const handleRecall = async (r: Recall) => {
    if (!current) return;
    void Haptics.impactAsync(
      r === "easy"
        ? Haptics.ImpactFeedbackStyle.Light
        : r === "forgot"
          ? Haptics.ImpactFeedbackStyle.Heavy
          : Haptics.ImpactFeedbackStyle.Medium,
    ).catch(() => {});
    await recordVocabReview(current.id, r).catch(() => {});
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
    }
  };

  const cardFlipStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotateY: `${flip.value * 6}deg`,
      },
    ],
  }));

  // ─── empty queue ─────────────────────────────────────────────────
  if (items.length === 0 && !finished) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <StatusBar style="light" />
        <View style={styles.empty}>
          <Text style={styles.emptyEmoji}>📚</Text>
          <Text style={styles.emptyTitle}>Bugünlük tekrar yok</Text>
          <Text style={styles.emptySub}>
            Yeni kelime öğrenmek için bir sahne aç. Tekrarlar otomatik olarak
            burada belirir.
          </Text>
          <Button
            label="Anasayfa"
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
        <StatusBar style="light" />
        <ScrollView contentContainerStyle={styles.doneWrap}>
          <Text style={styles.doneEmoji}>✨</Text>
          <Text style={styles.doneTitle}>Tekrar tamamlandı</Text>
          <View style={styles.doneStats}>
            <DoneRow label="Toplam" value={String(stats.total)} accent={tokens.text.primary} />
            <DoneRow label="Kolay" value={String(stats.easy)} accent={tokens.brand.tertiary} />
            <DoneRow label="Tamam" value={String(stats.ok)} accent={tokens.brand.primary} />
            <DoneRow label="Zor" value={String(stats.hard)} accent={tokens.semantic.warning} />
            <DoneRow label="Hatırlamadım" value={String(stats.forgot)} accent={tokens.semantic.error} />
          </View>
          <Text style={styles.doneFootnote}>
            Hatırlamadığın kelimeler yarın yine gelir. Kolayların 3-5 gün sonra.
          </Text>
          <View style={{ marginTop: 24, width: "100%" }}>
            <Button
              label="Anasayfa"
              onPress={() => router.replace("/today" as never)}
              stacked
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ─── active card ────────────────────────────────────────────────
  if (!current) return null;

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="light" />

      {/* Header — progress + back */}
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backBtn}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel="Geri"
        >
          <Text style={styles.backText}>← Geri</Text>
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
                accessibilityLabel={`${current.word} — sesli dinle`}
              >
                <Text style={styles.backWord}>{current.word} 🔊</Text>
              </Pressable>
            </>
          )}
        </Animated.View>

        {/* CTA: reveal veya 4 recall button */}
        {!revealed ? (
          <View style={styles.revealBtnWrap}>
            <Button label="Cevabı gör" onPress={handleReveal} stacked />
          </View>
        ) : (
          <View style={styles.recallGrid}>
            <RecallBtn
              label="Hatırlamadım"
              hint="< 1 gün"
              accent={tokens.semantic.error}
              onPress={() => handleRecall("forgot")}
            />
            <RecallBtn
              label="Zor"
              hint="yarın"
              accent={tokens.semantic.warning}
              onPress={() => handleRecall("hard")}
            />
            <RecallBtn
              label="Tamam"
              hint="2-3 gün"
              accent={tokens.brand.primary}
              onPress={() => handleRecall("ok")}
            />
            <RecallBtn
              label="Kolay"
              hint="5-7 gün"
              accent={tokens.brand.tertiary}
              onPress={() => handleRecall("easy")}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

// ─── sub components ──────────────────────────────────────────────────

function RecallBtn({
  label,
  hint,
  accent,
  onPress,
}: {
  label: string;
  hint: string;
  accent: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.recallBtn,
        { borderColor: accent },
        pressed && styles.recallBtnPressed,
      ]}
      accessibilityRole="button"
      accessibilityLabel={`${label} — sonraki tekrar ${hint}`}
    >
      <Text style={[styles.recallLabel, { color: accent }]}>{label}</Text>
      <Text style={styles.recallHint}>{hint}</Text>
    </Pressable>
  );
}

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
  recallGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 16,
  },
  recallBtn: {
    flexGrow: 1,
    flexBasis: "48%",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: tokens.radius.base,
    borderWidth: 1.5,
    backgroundColor: tokens.bg.surfaceContainerLow,
    alignItems: "center",
    gap: 4,
  },
  recallBtnPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.97 }],
  },
  recallLabel: {
    fontSize: 15,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 0.2,
  },
  recallHint: {
    fontSize: 11,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.semibold,
    letterSpacing: 0.3,
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
