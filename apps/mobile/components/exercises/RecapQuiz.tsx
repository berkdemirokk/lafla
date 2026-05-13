// Recap Quiz — light bg, multi-question multi-choice, yellow feedback.

import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Button } from "../Button";
import { tokens } from "../../theme";
import type { ExerciseResult } from "../../lib/engine";

interface Question {
  question: string;
  options: string[];
  correct_index: number;
  tr_explanation?: string;
}

interface Props {
  questions: Question[];
  onComplete: (result: ExerciseResult) => void;
}

export function RecapQuiz({ questions, onComplete }: Props) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);

  const q = questions[idx]!;
  const showResult = selected !== null;
  const isCorrect = showResult && selected === q.correct_index;

  const submitAnswer = () => {
    if (selected === null) return;
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);

    if (idx + 1 >= questions.length) {
      const correctCount = newAnswers.filter(
        (a, i) => a === questions[i]!.correct_index,
      ).length;
      const score = Math.round((correctCount / questions.length) * 100);
      onComplete({
        exercise_id: "recap_quiz",
        exercise_type: "recap_quiz",
        correct: score >= 60,
        score,
        feedback: `${correctCount}/${questions.length} doğru.`,
      });
    } else {
      setIdx(idx + 1);
      setSelected(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>
        Soru {idx + 1}/{questions.length}
      </Text>

      <Text style={styles.question}>{q.question}</Text>

      <View style={styles.options}>
        {q.options.map((opt, i) => {
          const isThis = selected === i;
          const showAsCorrect = showResult && i === q.correct_index;
          const showAsWrong = showResult && isThis && !isCorrect;
          return (
            <Pressable
              key={i}
              style={[
                styles.option,
                isThis && !showResult && styles.optionSelected,
                showAsCorrect && styles.optionCorrect,
                showAsWrong && styles.optionWrong,
              ]}
              onPress={() => !showResult && setSelected(i)}
              disabled={showResult}
            >
              <Text style={styles.optionText}>{opt}</Text>
            </Pressable>
          );
        })}
      </View>

      {showResult && q.tr_explanation && (
        <View
          style={[
            styles.feedback,
            isCorrect ? styles.feedbackOk : styles.feedbackMiss,
          ]}
        >
          <Text style={styles.feedbackText}>{q.tr_explanation}</Text>
        </View>
      )}

      <View style={styles.footer}>
        <Button
          label={
            !showResult
              ? "Cevapla"
              : idx + 1 >= questions.length
              ? "Quiz Bitti →"
              : "Sıradaki Soru →"
          }
          onPress={submitAnswer}
          disabled={selected === null}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  prompt: {
    fontSize: 14,
    color: tokens.text.secondary,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    fontWeight: tokens.weight.bold,
    marginBottom: tokens.spacing.md,
  },
  question: {
    fontSize: 22,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    lineHeight: 30,
    marginBottom: tokens.spacing.md,
  },
  options: {
    gap: tokens.spacing.sm,
  },
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
  feedbackText: {
    color: tokens.text.secondary,
    fontSize: 14,
    lineHeight: 20,
  },
  footer: {
    marginTop: "auto",
    paddingTop: tokens.spacing.md,
  },
});
