// Fill Blank — Stitch "Lesson Exercise Cool" design.
// Light bg, yellow-underlined blank, 2x2 option grid, yellow CTA pill.

import { useMemo, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Button } from "../Button";
import { tokens } from "../../theme";
import { evaluateFillBlank, type ExerciseResult } from "../../lib/engine";

interface Props {
  sentence: string;
  answer: string;
  distractors: string[];
  trHint?: string;
  onComplete: (result: ExerciseResult) => void;
}

export function FillBlank({
  sentence,
  answer,
  distractors,
  trHint,
  onComplete,
}: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<ExerciseResult | null>(null);

  const options = useMemo(() => {
    const all = [answer, ...distractors];
    return all
      .map((v) => ({ value: v, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }, [answer, distractors]);

  const [before, after] = sentence.split("___");

  const submit = () => {
    if (!selected) return;
    setResult(evaluateFillBlank(answer, selected));
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionBlock}>
        <Text style={styles.sentence}>
          {before}
          <View style={styles.blank}>
            <Text style={styles.blankFill}>
              {selected ? ` ${selected} ` : "       "}
            </Text>
          </View>
          {after}
        </Text>
      </View>

      <View style={styles.optionsGrid}>
        {options.map((opt) => {
          const isSelected = selected === opt;
          const showCorrect = !!result && opt === answer;
          const showWrong = !!result && isSelected && !result.correct;
          return (
            <Pressable
              key={opt}
              style={[
                styles.option,
                isSelected && !result && styles.optionSelected,
                showCorrect && styles.optionCorrect,
                showWrong && styles.optionWrong,
              ]}
              onPress={() => !result && setSelected(opt)}
              disabled={!!result}
            >
              <Text
                style={[
                  styles.optionText,
                  (showCorrect || isSelected) && styles.optionTextBold,
                ]}
              >
                {opt}
              </Text>
              {showCorrect && (
                <View style={styles.checkCircle}>
                  <Text style={styles.checkIcon}>✓</Text>
                </View>
              )}
            </Pressable>
          );
        })}
      </View>

      {!result && trHint && <Text style={styles.hint}>💡 {trHint}</Text>}

      <View style={styles.footer}>
        {result && (
          <View style={styles.feedbackRow}>
            <View
              style={[
                styles.feedbackIcon,
                result.correct ? styles.feedbackIconOk : styles.feedbackIconMiss,
              ]}
            >
              <Text style={styles.feedbackIconText}>
                {result.correct ? "✓" : "✗"}
              </Text>
            </View>
            <Text style={styles.feedbackText}>
              {result.correct ? "Doğru" : `Doğrusu: ${answer}`}
            </Text>
          </View>
        )}
        <Button
          label={result ? "Devam et →" : "Kontrol et"}
          onPress={result ? () => onComplete(result) : submit}
          disabled={!result && !selected}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  questionBlock: {
    marginBottom: tokens.spacing.lg,
    alignItems: "center",
  },
  sentence: {
    fontSize: 28,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    lineHeight: 40,
    textAlign: "center",
  },
  blank: {
    minWidth: 100,
    height: 44,
    paddingHorizontal: 12,
    marginHorizontal: 8,
    borderRadius: tokens.radius.sm,
    backgroundColor: "rgba(246, 255, 0, 0.20)",
    borderBottomWidth: 4,
    borderBottomColor: tokens.brand.primaryFixed,
    alignItems: "center",
    justifyContent: "center",
  },
  blankFill: {
    color: tokens.text.primary,
    fontSize: 22,
    fontWeight: tokens.weight.bold,
  },
  optionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "space-between",
  },
  option: {
    flexBasis: "47%",
    flexGrow: 1,
    paddingVertical: 22,
    paddingHorizontal: 22,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.bg.surface,
    borderWidth: 2,
    borderColor: tokens.bg.surfaceContainerHigh,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
  },
  optionSelected: {
    borderColor: tokens.border.outline,
    backgroundColor: tokens.bg.surfaceContainerLowest,
  },
  optionCorrect: {
    borderColor: tokens.brand.primaryFixed,
    backgroundColor: tokens.bg.surface,
    shadowColor: tokens.brand.primaryFixed,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 4,
  },
  optionWrong: {
    borderColor: tokens.semantic.error,
  },
  optionText: {
    fontSize: 18,
    fontWeight: tokens.weight.regular,
    color: tokens.text.primary,
  },
  optionTextBold: {
    fontWeight: tokens.weight.semibold,
  },
  checkCircle: {
    position: "absolute",
    right: 16,
    top: "50%",
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: tokens.brand.primaryFixed,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translateY: -16 }],
  },
  checkIcon: {
    color: tokens.text.onPrimaryFixed,
    fontSize: 18,
    fontWeight: tokens.weight.black,
  },
  hint: {
    color: tokens.text.secondary,
    fontSize: 14,
    marginTop: tokens.spacing.md,
    textAlign: "center",
  },
  footer: {
    marginTop: "auto",
    paddingTop: tokens.spacing.md,
    gap: tokens.spacing.md,
  },
  feedbackRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: tokens.spacing.sm,
  },
  feedbackIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  feedbackIconOk: {
    backgroundColor: tokens.brand.primaryContainer,
  },
  feedbackIconMiss: {
    backgroundColor: tokens.semantic.errorContainer,
  },
  feedbackIconText: {
    color: tokens.text.onPrimaryFixed,
    fontSize: 20,
    fontWeight: tokens.weight.black,
  },
  feedbackText: {
    fontSize: 22,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.primary,
  },
});
