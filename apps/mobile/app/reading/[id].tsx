// Lafla — Reading article + question flow.
// Phases: read → questions → complete.
// State is local-first. Progress lands in lib/reading on completion.

import { useEffect, useMemo, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../components/Button";
import { SpeakerButton } from "../../components/SpeakerButton";
import { ArticleReader } from "../../components/exercises/ArticleReader";
import { markReadingComplete } from "../../lib/reading";
import { getReadingArticle } from "../../data/reading-articles";
import { hapticForScore, hapticSelection } from "../../lib/feedback";
import { tokens } from "../../theme";

type Phase = "read" | "questions" | "complete";

export default function ReadingDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const article = useMemo(
    () => (id ? getReadingArticle(id) : undefined),
    [id],
  );

  const [phase, setPhase] = useState<Phase>("read");
  const [qIdx, setQIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finalScore, setFinalScore] = useState(0);

  useEffect(() => {
    // Save on entering the complete phase.
    if (phase !== "complete" || !article) return;
    void markReadingComplete(article.id, finalScore);
  }, [phase, finalScore, article]);

  if (!article) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <View style={styles.notFound}>
          <Text style={styles.notFoundTitle}>Makale bulunamadı</Text>
          <Text style={styles.notFoundDesc}>
            Bu makale henüz yüklenmemiş olabilir.
          </Text>
          <Button label="Geri" onPress={() => router.back()} />
        </View>
      </SafeAreaView>
    );
  }

  const questions = article.questions ?? [];
  const hasQuestions = questions.length > 0;

  const onSubmitAnswer = () => {
    if (selected === null) return;
    const q = questions[qIdx]!;
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    hapticForScore(selected === q.correct_index ? 100 : 0);

    if (qIdx + 1 >= questions.length) {
      const correctCount = newAnswers.filter(
        (a, i) => a === questions[i]!.correct_index,
      ).length;
      const score = Math.round((correctCount / questions.length) * 100);
      setFinalScore(score);
      setPhase("complete");
    } else {
      // Stay on this question until user taps "Next" — but we've already
      // captured the answer. Move on after a small delay would mask the
      // explanation, so instead we hold the selected state and let the
      // user tap next.
    }
  };

  const goNextQuestion = () => {
    setQIdx((i) => i + 1);
    setSelected(null);
  };

  // ===== READ =====
  if (phase === "read") {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <StatusBar style="dark" />

        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backText}>← Geri</Text>
          </Pressable>
          <Text style={styles.headerLabel}>{article.cefrLevel} · Okuma</Text>
          <View style={styles.spacer} />
        </View>

        <ScrollView contentContainerStyle={styles.readContent}>
          <Text style={styles.emojiBig}>{article.emoji}</Text>
          <Text style={styles.titleTr}>{article.title_tr}</Text>
          <View style={styles.titleEnRow}>
            <Text style={styles.titleEn}>{article.title_en}</Text>
            <SpeakerButton text={article.title_en} size="sm" />
          </View>

          <View style={styles.divider} />

          <ArticleReader
            articleId={article.id}
            body={article.body}
            highlights={article.highlights ?? []}
          />

          <View style={styles.tipBox}>
            <Text style={styles.tipText}>
              💡 Altı çizili kelimelere dokun — çevirisini ve notunu gör,
              SRS'e ekleyebilirsin.
            </Text>
          </View>

          <View style={{ height: 24 }} />

          {hasQuestions ? (
            <Button
              label="Soruları cevapla →"
              onPress={() => {
                hapticSelection();
                setPhase("questions");
              }}
              stacked
            />
          ) : (
            <Button
              label="Bitir"
              onPress={() => {
                setFinalScore(100);
                setPhase("complete");
              }}
              stacked
            />
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ===== QUESTIONS =====
  if (phase === "questions") {
    const q = questions[qIdx]!;
    const showResult = selected !== null && answers.length > qIdx;
    const isCorrect = showResult && selected === q.correct_index;
    const isLast = qIdx + 1 >= questions.length;

    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <StatusBar style="dark" />

        <View style={styles.header}>
          <Pressable
            onPress={() => setPhase("read")}
            style={styles.backBtn}
          >
            <Text style={styles.backText}>← Metne dön</Text>
          </Pressable>
          <Text style={styles.headerLabel}>
            Soru {qIdx + 1}/{questions.length}
          </Text>
          <View style={styles.spacer} />
        </View>

        <ScrollView contentContainerStyle={styles.qContent}>
          <Text style={styles.questionText}>{q.question_tr}</Text>

          <View style={styles.optionsCol}>
            {q.options.map((opt, i) => {
              const isThis = selected === i;
              const showAsCorrect = showResult && i === q.correct_index;
              const showAsWrong = showResult && isThis && !isCorrect;
              return (
                <Pressable
                  key={i}
                  onPress={() => {
                    if (showResult) return;
                    hapticSelection();
                    setSelected(i);
                  }}
                  disabled={showResult}
                  style={[
                    qStyles.option,
                    isThis && !showResult && qStyles.optionSelected,
                    showAsCorrect && qStyles.optionCorrect,
                    showAsWrong && qStyles.optionWrong,
                  ]}
                >
                  <Text style={qStyles.optionText}>{opt}</Text>
                </Pressable>
              );
            })}
          </View>

          {showResult && q.tr_explanation ? (
            <View
              style={[
                qStyles.feedback,
                isCorrect ? qStyles.feedbackOk : qStyles.feedbackMiss,
              ]}
            >
              <Text style={qStyles.feedbackTitle}>
                {isCorrect ? "Doğru" : "Yanlış"}
              </Text>
              <Text style={qStyles.feedbackText}>{q.tr_explanation}</Text>
            </View>
          ) : null}
        </ScrollView>

        <View style={styles.footer}>
          {!showResult ? (
            <Button
              label="Cevapla"
              onPress={onSubmitAnswer}
              disabled={selected === null}
            />
          ) : (
            <Button
              label={isLast ? "Bitir →" : "Sıradaki Soru →"}
              onPress={() => {
                if (isLast) {
                  const correctCount = answers.filter(
                    (a, i) => a === questions[i]!.correct_index,
                  ).length;
                  const score = Math.round(
                    (correctCount / questions.length) * 100,
                  );
                  setFinalScore(score);
                  setPhase("complete");
                } else {
                  goNextQuestion();
                }
              }}
            />
          )}
        </View>
      </SafeAreaView>
    );
  }

  // ===== COMPLETE =====
  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="light" />
      <View style={styles.completeWrap}>
        <Text style={styles.completeEmoji}>🎉</Text>
        <Text style={styles.completeTitle}>Tebrikler!</Text>
        <Text style={styles.completeSubtitle}>{article.title_tr}</Text>

        {hasQuestions ? (
          <View style={styles.scoreCard}>
            <Text style={styles.scoreLabel}>Skor</Text>
            <Text style={styles.scoreValue}>{finalScore}%</Text>
            <Text style={styles.scoreDetail}>
              {
                answers.filter(
                  (a, i) => a === questions[i]?.correct_index,
                ).length
              }
              /{questions.length} doğru
            </Text>
          </View>
        ) : null}

        <View style={styles.completeActions}>
          <Button
            label="Listeye dön"
            onPress={() => router.replace("/reading" as never)}
            stacked
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 56,
  },
  backBtn: { minWidth: 90 },
  backText: { color: tokens.text.secondary, fontSize: 15 },
  headerLabel: {
    fontSize: 12,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.semibold,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  spacer: { width: 90 },
  readContent: {
    paddingHorizontal: tokens.spacing.md,
    paddingBottom: 32,
  },
  emojiBig: { fontSize: 48, marginBottom: 4 },
  titleTr: {
    fontSize: 26,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.4,
    lineHeight: 32,
  },
  titleEnRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 6,
  },
  titleEn: {
    fontSize: 16,
    color: tokens.text.secondary,
    fontStyle: "italic",
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: tokens.border.light,
    marginVertical: tokens.spacing.md,
  },
  tipBox: {
    marginTop: 20,
    padding: 14,
    backgroundColor: tokens.brand.tertiarySoft,
    borderRadius: tokens.radius.base,
    borderLeftWidth: 3,
    borderLeftColor: tokens.brand.tertiary,
  },
  tipText: {
    fontSize: 13,
    color: tokens.text.onSurfaceVariant,
    lineHeight: 18,
  },
  qContent: {
    paddingHorizontal: tokens.spacing.md,
    paddingBottom: 24,
  },
  questionText: {
    fontSize: 22,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    lineHeight: 30,
    marginBottom: tokens.spacing.md,
  },
  optionsCol: {
    gap: tokens.spacing.sm,
  },
  footer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 8,
  },
  completeWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    gap: 12,
  },
  completeEmoji: { fontSize: 72, marginBottom: 8 },
  completeTitle: {
    fontSize: 32,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.5,
  },
  completeSubtitle: {
    fontSize: 16,
    color: tokens.text.secondary,
    textAlign: "center",
    marginBottom: 12,
  },
  scoreCard: {
    alignItems: "center",
    backgroundColor: tokens.bg.surfaceContainer,
    paddingHorizontal: 32,
    paddingVertical: 20,
    borderRadius: tokens.radius.base,
    marginBottom: 16,
  },
  scoreLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 6,
  },
  scoreValue: {
    fontSize: 44,
    fontWeight: tokens.weight.black,
    color: tokens.brand.tertiary,
    letterSpacing: -1,
  },
  scoreDetail: {
    fontSize: 13,
    color: tokens.text.secondary,
    marginTop: 4,
  },
  completeActions: {
    width: "100%",
    marginTop: 8,
  },
  notFound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    gap: 12,
  },
  notFoundTitle: {
    fontSize: 22,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  notFoundDesc: {
    fontSize: 14,
    color: tokens.text.secondary,
    textAlign: "center",
    marginBottom: 12,
  },
});

const qStyles = StyleSheet.create({
  option: {
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderWidth: 2,
    borderColor: tokens.bg.surfaceContainerHigh,
    borderRadius: tokens.radius.base,
    paddingVertical: 16,
    paddingHorizontal: 18,
  },
  optionSelected: {
    borderColor: tokens.border.outline,
  },
  optionCorrect: {
    borderColor: tokens.brand.primaryFixed,
    backgroundColor: "rgba(246, 255, 0, 0.12)",
  },
  optionWrong: {
    borderColor: tokens.semantic.error,
    backgroundColor: tokens.semantic.errorContainer,
  },
  optionText: {
    fontSize: 16,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
    lineHeight: 22,
  },
  feedback: {
    marginTop: tokens.spacing.md,
    padding: tokens.spacing.md,
    borderRadius: tokens.radius.base,
  },
  feedbackOk: {
    backgroundColor: "rgba(246, 255, 0, 0.12)",
    borderWidth: 1,
    borderColor: tokens.brand.primaryFixed,
  },
  feedbackMiss: {
    backgroundColor: tokens.semantic.errorContainer,
  },
  feedbackTitle: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    marginBottom: 4,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  feedbackText: {
    color: tokens.text.secondary,
    fontSize: 14,
    lineHeight: 20,
  },
});
