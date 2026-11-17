import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Button } from "../Button";
import { hapticForScore, hapticSelection } from "../../lib/feedback";
import type { ExerciseResult } from "../../lib/engine";
import { tokens } from "../../theme";
import { useTranslation } from "../../lib/i18n";

interface Props {
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
  onComplete: (result: ExerciseResult) => void;
}

export function MultipleChoice({
  question,
  options,
  correctIndex,
  explanation,
  onComplete,
}: Props) {
  const { t, locale } = useTranslation();
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const correct = selected === correctIndex;

  const check = () => {
    if (selected === null) return;
    setAttempts((n) => n + 1);
    setChecked(true);
    hapticForScore(correct ? 100 : 0);
  };

  const retry = () => {
    setSelected(null);
    setChecked(false);
    hapticSelection();
  };

  const complete = () => {
    const score = attempts <= 1 ? 100 : 70;
    onComplete({
      exercise_id: "multiple_choice",
      exercise_type: "multiple_choice",
      correct: true,
      score,
      feedback:
        attempts <= 1
          ? t("exercise.feedback.first_try")
          : t("exercise.feedback.corrected"),
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>{t("exercise.quick_prep")}</Text>
      <Text style={styles.question}>{question}</Text>

      <View style={styles.options}>
        {options.map((option, index) => {
          const isSelected = selected === index;
          const showCorrect = checked && index === correctIndex;
          const showWrong = checked && isSelected && !correct;
          return (
            <Pressable
              key={`${index}-${option}`}
              disabled={checked}
              onPress={() => {
                setSelected(index);
                hapticSelection();
              }}
              style={[
                styles.option,
                isSelected && styles.optionSelected,
                showCorrect && styles.optionCorrect,
                showWrong && styles.optionWrong,
              ]}
              accessibilityRole="radio"
              accessibilityLabel={t("exercise.numbered_option", {
                number: String(index + 1),
                option,
              })}
              accessibilityState={{ checked: isSelected, disabled: checked }}
            >
              <Text style={styles.optionText}>{option}</Text>
            </Pressable>
          );
        })}
      </View>

      {checked && (
        <View
          style={[styles.feedback, correct ? styles.feedbackOk : styles.feedbackMiss]}
          accessibilityLiveRegion="polite"
        >
          <Text style={styles.feedbackTitle}>
            {correct ? t("exercise.correct") : t("exercise.not_yet")}
          </Text>
          {explanation ? (
            <Text style={styles.feedbackText}>
              {locale === "tr" ? explanation : t("learning.explanation_fallback_en")}
            </Text>
          ) : null}
        </View>
      )}

      <Button
        label={
          checked
            ? correct
              ? `${t("common.continue")} →`
              : t("common.try_again")
            : t("exercise.check")
        }
        onPress={checked ? (correct ? complete : retry) : check}
        disabled={!checked && selected === null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: tokens.spacing.md, gap: tokens.spacing.md },
  eyebrow: {
    color: tokens.brand.tertiary,
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 1.4,
  },
  question: {
    color: tokens.text.primary,
    fontSize: 24,
    lineHeight: 31,
    fontWeight: tokens.weight.extrabold,
  },
  options: { gap: 10 },
  option: {
    minHeight: 54,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: tokens.radius.base,
    borderWidth: 1.5,
    borderColor: tokens.border.outline,
    backgroundColor: tokens.bg.surfaceContainer,
  },
  optionSelected: { borderColor: tokens.brand.primary },
  optionCorrect: {
    borderColor: tokens.brand.tertiary,
    backgroundColor: tokens.brand.tertiarySoft,
  },
  optionWrong: {
    borderColor: tokens.semantic.error,
    backgroundColor: tokens.semantic.errorContainer,
  },
  optionText: {
    color: tokens.text.primary,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: tokens.weight.semibold,
  },
  feedback: {
    borderRadius: tokens.radius.base,
    borderWidth: 1,
    padding: 14,
    gap: 5,
  },
  feedbackOk: {
    borderColor: tokens.brand.tertiary,
    backgroundColor: tokens.brand.tertiarySoft,
  },
  feedbackMiss: {
    borderColor: tokens.semantic.warning,
    backgroundColor: tokens.semantic.warningContainer,
  },
  feedbackTitle: {
    color: tokens.text.primary,
    fontSize: 15,
    fontWeight: tokens.weight.bold,
  },
  feedbackText: { color: tokens.text.secondary, fontSize: 13, lineHeight: 19 },
});
