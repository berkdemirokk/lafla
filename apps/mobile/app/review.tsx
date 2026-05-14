// Daily review session — surfaces SRS-due lessons one card at a time.
// User self-rates each card; recordReview schedules the next visit.
//
// To integrate: add to _layout.tsx Stack: <Stack.Screen name="review" ... />

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Button } from "../components/Button";
import { SpeakerButton } from "../components/SpeakerButton";
import {
  getDueReviews,
  recordReview,
  type DueItem,
  type ReviewRating,
} from "../lib/srs";
import { getLesson, type BundledLesson } from "../data/lessons";
import { tokens } from "../theme";

interface ReviewCard {
  item: DueItem;
  lesson: BundledLesson | undefined;
  prompt: {
    en: string;
    tr: string;
    context?: string;
  } | null;
}

function pickRepresentative(
  lesson: BundledLesson | undefined,
): ReviewCard["prompt"] {
  if (!lesson) return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const exercises = lesson.exercises as any[];

  // Prefer the first vocab_tile (cleanest phrase + translation)
  const vocab = exercises.find((e) => e?.type === "vocab_tile");
  if (vocab?.word_or_phrase && vocab?.tr_translation) {
    return {
      en: String(vocab.word_or_phrase),
      tr: String(vocab.tr_translation),
      context:
        typeof vocab.example === "string" ? String(vocab.example) : undefined,
    };
  }

  // Fall back to translate exercise
  const translate = exercises.find((e) => e?.type === "translate");
  if (translate?.source && translate?.target) {
    const isTrSource = translate.direction === "tr_to_en";
    return {
      en: String(isTrSource ? translate.target : translate.source),
      tr: String(isTrSource ? translate.source : translate.target),
    };
  }

  // Fill-blank: stitch sentence
  const fill = exercises.find((e) => e?.type === "fill_blank");
  if (fill?.sentence_template && fill?.answer) {
    const sentence = String(fill.sentence_template).replace(
      "___",
      String(fill.answer),
    );
    return {
      en: sentence,
      tr: typeof fill.tr_hint === "string" ? String(fill.tr_hint) : "",
    };
  }

  return {
    en: lesson.title,
    tr: lesson.description ?? "",
  };
}

const RATING_BUTTONS: ReadonlyArray<{
  rating: ReviewRating;
  label: string;
  hint: string;
  tint: "muted" | "warn" | "ok" | "easy";
}> = [
  { rating: "again", label: "Yine", hint: "Hatırlamadım", tint: "muted" },
  { rating: "hard", label: "Zor", hint: "Zorlandım", tint: "warn" },
  { rating: "good", label: "İyi", hint: "Doğru", tint: "ok" },
  { rating: "easy", label: "Kolay", hint: "Çok kolay", tint: "easy" },
];

export default function ReviewScreen() {
  const router = useRouter();
  const [cards, setCards] = useState<ReviewCard[] | null>(null);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [tally, setTally] = useState<Record<ReviewRating, number>>({
    again: 0,
    hard: 0,
    good: 0,
    easy: 0,
  });

  useEffect(() => {
    let alive = true;
    (async () => {
      const due = await getDueReviews();
      if (!alive) return;
      const built = due.map<ReviewCard>((item) => {
        const lesson = getLesson(item.lessonId);
        return {
          item,
          lesson,
          prompt: pickRepresentative(lesson),
        };
      });
      setCards(built);
    })();
    return () => {
      alive = false;
    };
  }, []);

  const total = cards?.length ?? 0;
  const current = cards && index < total ? cards[index] : null;
  const done = cards !== null && index >= total && total > 0;
  const empty = cards !== null && total === 0;

  const progressPct = useMemo(() => {
    if (!total) return 0;
    return Math.min(1, index / total);
  }, [index, total]);

  const handleRate = useCallback(
    async (rating: ReviewRating) => {
      if (!current || submitting) return;
      setSubmitting(true);
      try {
        await recordReview(current.item.lessonId, rating);
      } catch {
        // best-effort — keep moving
      }
      setTally((t) => ({ ...t, [rating]: t[rating] + 1 }));
      setIndex((i) => i + 1);
      setRevealed(false);
      setSubmitting(false);
    },
    [current, submitting],
  );

  if (cards === null) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <StatusBar style="dark" />
        <View style={styles.loading}>
          <ActivityIndicator color={tokens.brand.tertiary} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <View style={styles.headerCenter}>
          <Text style={styles.headerKicker}>Tekrar Seansı</Text>
          {!empty && !done && (
            <Text style={styles.headerCount}>
              {Math.min(index + 1, total)} / {total}
            </Text>
          )}
          {done && <Text style={styles.headerCount}>Tamamlandı</Text>}
        </View>
        <View style={styles.spacer} />
      </View>

      {/* Progress bar */}
      {!empty && (
        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressFill,
              { width: `${Math.round(progressPct * 100)}%` },
            ]}
          />
        </View>
      )}

      {empty && (
        <View style={styles.emptyWrap}>
          <Text style={styles.emptyTitle}>Bugün tekrar yok.</Text>
          <Text style={styles.emptySub}>
            Bir sonraki seans yarın. İstersen yeni bir ders açabilirsin.
          </Text>
          <View style={styles.emptyCta}>
            <Button label="Akışa dön" onPress={() => router.replace("/feed")} />
          </View>
        </View>
      )}

      {done && cards.length > 0 && (
        <ReviewSummary
          total={total}
          tally={tally}
          onContinue={() => router.replace("/feed")}
        />
      )}

      {current && !done && (
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* Card */}
          <View style={styles.card}>
            <View style={styles.cardMetaRow}>
              <Text style={styles.skillTag}>
                {current.item.skillId.toUpperCase()}
              </Text>
              <ReviewTypePill type={current.item.reviewType} />
            </View>

            <Text style={styles.lessonTitle} numberOfLines={2}>
              {current.lesson?.title ?? current.item.lessonId}
            </Text>

            {current.prompt && (
              <View style={styles.promptBlock}>
                <Text style={styles.promptLabel}>İFADE</Text>
                <View style={styles.promptRow}>
                  <Text style={styles.promptEn}>{current.prompt.en}</Text>
                  <SpeakerButton text={current.prompt.en} size="md" />
                </View>

                {revealed ? (
                  <>
                    <Text style={styles.promptTr}>{current.prompt.tr}</Text>
                    {current.prompt.context && (
                      <Text style={styles.promptContext}>
                        {current.prompt.context}
                      </Text>
                    )}
                  </>
                ) : (
                  <Pressable
                    onPress={() => setRevealed(true)}
                    style={styles.revealBtn}
                  >
                    <Text style={styles.revealText}>
                      Anlamı göster
                    </Text>
                  </Pressable>
                )}
              </View>
            )}

            {current.item.daysOverdue > 0 && (
              <Text style={styles.overdueNote}>
                {current.item.daysOverdue} gün gecikti
              </Text>
            )}
          </View>

          <Text style={styles.ratePrompt}>Ne kadar hatırladın?</Text>

          {/* Rating buttons (2 x 2 grid) */}
          <View style={styles.ratingGrid}>
            {RATING_BUTTONS.map((btn) => (
              <RatingButton
                key={btn.rating}
                label={btn.label}
                hint={btn.hint}
                tint={btn.tint}
                disabled={submitting}
                onPress={() => handleRate(btn.rating)}
              />
            ))}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

function ReviewTypePill({ type }: { type: DueItem["reviewType"] }) {
  const map: Record<DueItem["reviewType"], { label: string; tint: string }> = {
    fresh: { label: "yeni", tint: tokens.brand.tertiary },
    due: { label: "vakti geldi", tint: tokens.brand.tertiary },
    overdue: { label: "gecikti", tint: tokens.semantic.error },
  };
  const cfg = map[type];
  return (
    <View
      style={[
        pillStyles.pill,
        { borderColor: cfg.tint, backgroundColor: "transparent" },
      ]}
    >
      <Text style={[pillStyles.text, { color: cfg.tint }]}>{cfg.label}</Text>
    </View>
  );
}

function RatingButton({
  label,
  hint,
  tint,
  disabled,
  onPress,
}: {
  label: string;
  hint: string;
  tint: "muted" | "warn" | "ok" | "easy";
  disabled?: boolean;
  onPress: () => void;
}) {
  const [pressed, setPressed] = useState(false);

  const palette: Record<typeof tint, { bg: string; border: string; text: string }> = {
    muted: {
      bg: tokens.bg.surfaceContainer,
      border: tokens.border.outlineVariant,
      text: tokens.text.primary,
    },
    warn: {
      bg: tokens.semantic.errorContainer,
      border: tokens.semantic.error,
      text: tokens.semantic.onErrorContainer,
    },
    ok: {
      bg: tokens.brand.tertiarySoft,
      border: tokens.brand.tertiary,
      text: tokens.brand.tertiary,
    },
    easy: {
      bg: tokens.brand.primarySoft,
      border: tokens.brand.primaryFixed,
      text: tokens.text.onPrimary,
    },
  };
  const colors = palette[tint];

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      disabled={disabled}
      style={[
        ratingStyles.btn,
        {
          backgroundColor: colors.bg,
          borderColor: colors.border,
          opacity: disabled ? 0.5 : 1,
          transform: [{ scale: pressed ? 0.97 : 1 }],
        },
      ]}
    >
      <Text style={[ratingStyles.label, { color: colors.text }]}>{label}</Text>
      <Text style={ratingStyles.hint}>{hint}</Text>
    </Pressable>
  );
}

function ReviewSummary({
  total,
  tally,
  onContinue,
}: {
  total: number;
  tally: Record<ReviewRating, number>;
  onContinue: () => void;
}) {
  const known = tally.good + tally.easy + tally.hard;
  const accuracy = total > 0 ? Math.round((known / total) * 100) : 0;
  return (
    <ScrollView contentContainerStyle={summaryStyles.content}>
      <Text style={summaryStyles.title}>{total} kelime tekrar edildi.</Text>
      <Text style={summaryStyles.sub}>
        Hafıza istatistiğin aşağıda. Yarın yeni kartlar gelecek.
      </Text>

      <View style={summaryStyles.grid}>
        <SummaryStat
          value={`${accuracy}%`}
          label="hatırlama"
          accent={tokens.brand.tertiary}
        />
        <SummaryStat
          value={`${tally.easy + tally.good}`}
          label="iyi/kolay"
          accent={tokens.brand.tertiary}
        />
        <SummaryStat
          value={`${tally.hard}`}
          label="zor"
          accent={tokens.text.primary}
        />
        <SummaryStat
          value={`${tally.again}`}
          label="yine"
          accent={tokens.semantic.error}
        />
      </View>

      <View style={summaryStyles.cta}>
        <Button label="Akışa dön" onPress={onContinue} stacked />
      </View>
    </ScrollView>
  );
}

function SummaryStat({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent: string;
}) {
  return (
    <View style={summaryStyles.statCard}>
      <Text style={[summaryStyles.statValue, { color: accent }]}>{value}</Text>
      <Text style={summaryStyles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: tokens.bg.app,
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 56,
  },
  backBtn: {
    paddingVertical: 6,
    paddingRight: 12,
    minWidth: 80,
  },
  backText: {
    fontSize: 15,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.medium,
  },
  headerCenter: {
    flex: 1,
    alignItems: "center",
  },
  headerKicker: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    letterSpacing: 1.4,
    color: tokens.text.tertiary,
    textTransform: "uppercase",
  },
  headerCount: {
    fontSize: 18,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    marginTop: 2,
  },
  spacer: { minWidth: 80 },
  progressTrack: {
    height: 4,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    marginHorizontal: 16,
    borderRadius: tokens.radius.full,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: tokens.brand.tertiary,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: tokens.bg.surface,
    borderRadius: tokens.radius.lg,
    borderWidth: 1,
    borderColor: tokens.border.light,
    padding: tokens.spacing.md,
    marginBottom: tokens.spacing.md,
  },
  cardMetaRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  skillTag: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    letterSpacing: 1.4,
    color: tokens.text.tertiary,
  },
  lessonTitle: {
    fontSize: 22,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    marginBottom: tokens.spacing.md,
  },
  promptBlock: {
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  promptLabel: {
    fontSize: 10,
    fontWeight: tokens.weight.bold,
    letterSpacing: 1.4,
    color: tokens.text.tertiary,
    marginBottom: 8,
  },
  promptRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  promptEn: {
    flex: 1,
    fontSize: 22,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  promptTr: {
    fontSize: 16,
    color: tokens.text.secondary,
    marginTop: 12,
  },
  promptContext: {
    fontSize: 13,
    fontStyle: "italic",
    color: tokens.text.tertiary,
    marginTop: 8,
  },
  revealBtn: {
    marginTop: 16,
    alignSelf: "flex-start",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.tertiarySoft,
  },
  revealText: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
    letterSpacing: 0.4,
  },
  overdueNote: {
    marginTop: 14,
    fontSize: 12,
    color: tokens.semantic.error,
    fontWeight: tokens.weight.semibold,
  },
  ratePrompt: {
    fontSize: 14,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.secondary,
    marginBottom: 12,
    textAlign: "center",
  },
  ratingGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "space-between",
  },
  emptyWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: tokens.spacing.md,
  },
  emptyEmoji: {
    fontSize: 56,
    marginBottom: tokens.spacing.md,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    marginBottom: 8,
    textAlign: "center",
  },
  emptySub: {
    fontSize: 15,
    color: tokens.text.secondary,
    textAlign: "center",
    marginBottom: tokens.spacing.lg,
    maxWidth: 320,
  },
  emptyCta: {
    width: "100%",
    maxWidth: 320,
  },
});

const pillStyles = StyleSheet.create({
  pill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: tokens.radius.full,
    borderWidth: 1,
  },
  text: {
    fontSize: 10,
    fontWeight: tokens.weight.bold,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
});

const ratingStyles = StyleSheet.create({
  btn: {
    flexBasis: "47%",
    flexGrow: 1,
    borderRadius: tokens.radius.base,
    borderWidth: 1.5,
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    marginBottom: 2,
  },
  hint: {
    fontSize: 11,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.medium,
  },
});

const summaryStyles = StyleSheet.create({
  content: {
    flexGrow: 1,
    padding: tokens.spacing.md,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: { fontSize: 64, marginBottom: 16 },
  title: {
    fontSize: 26,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    textAlign: "center",
    marginBottom: 8,
  },
  sub: {
    fontSize: 15,
    color: tokens.text.secondary,
    textAlign: "center",
    marginBottom: tokens.spacing.lg,
    maxWidth: 340,
  },
  grid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "space-between",
    marginBottom: tokens.spacing.lg,
  },
  statCard: {
    flexBasis: "47%",
    flexGrow: 1,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    alignItems: "center",
  },
  statValue: {
    fontSize: 28,
    fontWeight: tokens.weight.bold,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.secondary,
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  cta: {
    width: "100%",
    maxWidth: 360,
  },
});
