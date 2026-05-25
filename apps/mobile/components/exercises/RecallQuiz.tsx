// RecallQuiz — 5 hızlı MCQ. CONTENT_EXPANSION Phase 1A.
//
// Sahnenin sonunda verdict öncesi çalışır. Her item:
//   - q: soru metni
//   - options: 4 cevap
//   - correct: doğru index
//   - tr_explanation: yanlış seçimde gösterilen Türkçe açıklama
//
// Sıralı flow: item 1 → seç → instant feedback (200ms haptic + renk) →
// 700ms beklet → item 2 → ... → tüm itemlar bitince final card.
// Score: doğru/total × 100. onComplete: { correct: ≥80, score, feedback }.

import { useEffect, useRef, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Button } from "../Button";
import { tokens } from "../../theme";
import { hapticForScore, hapticSelection } from "../../lib/feedback";
import { type ExerciseResult } from "../../lib/engine";

interface RecallItem {
  q: string;
  options: string[];
  correct: number;
  tr_explanation: string;
}

interface Props {
  items: RecallItem[];
  onComplete: (result: ExerciseResult) => void;
}

interface ItemResult {
  picked: number;
  correct: boolean;
}

export function RecallQuiz({ items, onComplete }: Props) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [results, setResults] = useState<ItemResult[]>([]);
  const [finished, setFinished] = useState(false);
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cleanup any pending advance timer on unmount.
  useEffect(() => {
    return () => {
      if (advanceTimer.current) {
        clearTimeout(advanceTimer.current);
        advanceTimer.current = null;
      }
    };
  }, []);

  const current = items[currentIdx];
  const total = items.length;
  // Defensive guard — if items is empty, complete immediately with 100.
  useEffect(() => {
    if (items.length === 0 && !finished) {
      setFinished(true);
    }
  }, [items.length, finished]);

  const handlePick = (idx: number) => {
    if (picked !== null || !current) return;
    hapticSelection();
    setPicked(idx);
    const isCorrect = idx === current.correct;
    setResults((prev) => [...prev, { picked: idx, correct: isCorrect }]);
    // 1.4sn sonra ilerle (yanlışta 1.8sn — açıklamayı okuma süresi).
    const delay = isCorrect ? 1100 : 1900;
    advanceTimer.current = setTimeout(() => {
      const next = currentIdx + 1;
      if (next >= total) {
        // Tamamlandı.
        setFinished(true);
      } else {
        setCurrentIdx(next);
        setPicked(null);
      }
    }, delay);
  };

  const correctCount = results.filter((r) => r.correct).length;
  const score = total > 0 ? Math.round((correctCount / total) * 100) : 100;

  // Trigger final haptic once when finished flips.
  const didHapticFinal = useRef(false);
  useEffect(() => {
    if (finished && !didHapticFinal.current) {
      didHapticFinal.current = true;
      hapticForScore(score);
    }
  }, [finished, score]);

  const handleContinue = () => {
    onComplete({
      exercise_id: "recall_quiz",
      exercise_type: "recall_quiz",
      correct: score >= 80,
      score,
      feedback: `${correctCount}/${total} hatırladın.`,
    });
  };

  if (finished) {
    return (
      <View style={styles.container}>
        <Text style={styles.prompt}>Hatırlama testi</Text>
        <Animated.View
          entering={FadeInDown.duration(420)}
          style={[
            styles.finalCard,
            score >= 80 ? styles.finalCardOk : styles.finalCardMid,
          ]}
        >
          <Text style={styles.finalEmoji}>{score >= 80 ? "✓" : "—"}</Text>
          <Text style={styles.finalScore}>{score}/100</Text>
          <Text style={styles.finalSummary}>
            {correctCount}/{total} doğru
          </Text>
          <Text style={styles.finalCaption}>
            {score >= 80
              ? "Harika — bu sahneyi gerçekten içselleştirdin."
              : score >= 50
                ? "Fena değil. Bazı kalıpları tekrar edebilirsin."
                : "Bu sahneyi yakında tekrar edelim."}
          </Text>
        </Animated.View>
        <View style={styles.footer}>
          <Button label="Devam et →" onPress={handleContinue} />
        </View>
      </View>
    );
  }

  if (!current) return null;

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.prompt}>Hatırlama testi</Text>
        <Text style={styles.progressLabel}>
          {currentIdx + 1}/{total}
        </Text>
      </View>

      <Animated.View
        // Re-mount per question for entrance animation.
        key={`q-${currentIdx}`}
        entering={FadeInDown.duration(360)}
        style={styles.questionBlock}
      >
        <Text style={styles.questionText}>{current.q}</Text>
      </Animated.View>

      <View style={styles.optionsCol}>
        {current.options.map((opt, i) => {
          const isPicked = picked === i;
          const isCorrect = i === current.correct;
          const showAsCorrect = picked !== null && isCorrect;
          const showAsWrong = isPicked && !isCorrect;
          return (
            <Pressable
              key={`${currentIdx}-${i}`}
              onPress={() => handlePick(i)}
              disabled={picked !== null}
              style={[
                styles.option,
                showAsCorrect && styles.optionCorrect,
                showAsWrong && styles.optionWrong,
                picked !== null &&
                  !showAsCorrect &&
                  !showAsWrong &&
                  styles.optionDim,
              ]}
              accessibilityRole="button"
              accessibilityLabel={`${i + 1}. seçenek: ${opt}`}
              accessibilityState={{ selected: isPicked }}
            >
              <Text
                style={[
                  styles.optionText,
                  showAsCorrect && styles.optionTextCorrect,
                  showAsWrong && styles.optionTextWrong,
                ]}
              >
                {opt}
              </Text>
              {showAsCorrect && <Text style={styles.optionMark}>✓</Text>}
              {showAsWrong && <Text style={styles.optionMark}>✗</Text>}
            </Pressable>
          );
        })}
      </View>

      {picked !== null && picked !== current.correct && (
        <Animated.View
          entering={FadeInDown.duration(280)}
          style={styles.explanationBox}
        >
          <Text style={styles.explanationLabel}>Neden</Text>
          <Text style={styles.explanationText}>{current.tr_explanation}</Text>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: tokens.spacing.sm,
  },
  prompt: {
    fontSize: 14,
    fontFamily: tokens.font.sansBold,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },
  progressLabel: {
    fontSize: 13,
    fontFamily: tokens.font.sansBold,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
  },
  questionBlock: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    marginBottom: tokens.spacing.md,
  },
  questionText: {
    fontSize: 20,
    fontFamily: tokens.font.display,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    lineHeight: 28,
  },
  optionsCol: {
    gap: 10,
  },
  option: {
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderWidth: 2,
    borderColor: tokens.bg.surfaceContainerHigh,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: tokens.spacing.sm,
  },
  optionCorrect: {
    borderColor: tokens.brand.tertiary,
    backgroundColor: tokens.brand.tertiarySoft,
  },
  optionWrong: {
    borderColor: tokens.semantic.error,
    backgroundColor: tokens.semantic.errorContainer,
  },
  optionDim: {
    opacity: 0.5,
  },
  optionText: {
    fontSize: 16,
    fontFamily: tokens.font.sansSemi,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
    flex: 1,
  },
  optionTextCorrect: {
    color: tokens.brand.tertiary,
    fontFamily: tokens.font.sansBold,
    fontWeight: tokens.weight.bold,
  },
  optionTextWrong: {
    color: tokens.semantic.error,
    fontFamily: tokens.font.sansBold,
    fontWeight: tokens.weight.bold,
  },
  optionMark: {
    fontSize: 22,
    fontFamily: tokens.font.sansExtra,
    fontWeight: tokens.weight.extrabold,
  },
  explanationBox: {
    marginTop: tokens.spacing.sm,
    padding: tokens.spacing.md,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.semantic.errorContainer,
    borderLeftWidth: 3,
    borderLeftColor: tokens.semantic.error,
    gap: 4,
  },
  explanationLabel: {
    fontSize: 11,
    fontFamily: tokens.font.sansBold,
    fontWeight: tokens.weight.bold,
    color: tokens.semantic.error,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  explanationText: {
    fontSize: 14,
    fontFamily: tokens.font.sans,
    color: tokens.text.primary,
    lineHeight: 20,
  },
  finalCard: {
    padding: tokens.spacing.lg,
    borderRadius: tokens.radius.lg,
    alignItems: "center",
    gap: 8,
    borderWidth: 2,
  },
  finalCardOk: {
    backgroundColor: tokens.brand.tertiarySoft,
    borderColor: tokens.brand.tertiary,
  },
  finalCardMid: {
    backgroundColor: tokens.semantic.warningContainer,
    borderColor: tokens.semantic.warning,
  },
  finalEmoji: {
    fontSize: 36,
    fontFamily: tokens.font.display,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  finalScore: {
    fontSize: 40,
    fontFamily: tokens.font.display,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  finalSummary: {
    fontSize: 16,
    fontFamily: tokens.font.sansBold,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  finalCaption: {
    fontSize: 14,
    fontFamily: tokens.font.sans,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 20,
    marginTop: 4,
  },
  footer: {
    marginTop: "auto",
    paddingTop: tokens.spacing.md,
  },
});
