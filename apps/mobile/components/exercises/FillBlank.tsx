// Fill blank exercise — kelime listesinden boşluğu doldur.

import { useMemo, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Button } from "../Button";
import { tokens } from "../../theme";
import { evaluateFillBlank, type ExerciseResult } from "../../lib/engine";

interface Props {
  sentence: string; // contains ___ placeholder
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

  // Shuffle options once per mount
  const options = useMemo(() => {
    const all = [answer, ...distractors];
    return all
      .map((v) => ({ value: v, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }, [answer, distractors]);

  // Split sentence around the blank placeholder
  const [before, after] = sentence.split("___");

  const submit = () => {
    if (!selected) return;
    setResult(evaluateFillBlank(answer, selected));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Boşluğu doldur</Text>

      <Text style={styles.sentence}>
        {before}
        <Text
          style={[
            styles.blank,
            selected && styles.blankFilled,
            result?.correct && styles.blankCorrect,
            result && !result.correct && styles.blankWrong,
          ]}
        >
          {selected ? ` ${selected} ` : "  ___  "}
        </Text>
        {after}
      </Text>

      <View style={styles.options}>
        {options.map((opt) => {
          const isSelected = selected === opt;
          const showCorrect = !!result && opt === answer;
          const showWrong = !!result && isSelected && !result.correct;
          return (
            <Pressable
              key={opt}
              style={[
                styles.option,
                isSelected && styles.optionSelected,
                showCorrect && styles.optionCorrect,
                showWrong && styles.optionWrong,
              ]}
              onPress={() => !result && setSelected(opt)}
              disabled={!!result}
            >
              <Text
                style={[
                  styles.optionText,
                  (showCorrect || showWrong) && styles.optionTextEmphasis,
                ]}
              >
                {opt}
                {showCorrect && " ✓"}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {!result && trHint && <Text style={styles.hint}>💡 {trHint}</Text>}

      {result && (
        <View
          style={[
            styles.feedback,
            result.correct ? styles.feedbackOk : styles.feedbackMiss,
          ]}
        >
          <Text style={styles.feedbackTitle}>
            {result.correct ? "✓ Doğru!" : `✗ Doğrusu: "${answer}"`}
          </Text>
        </View>
      )}

      <View style={styles.footer}>
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
  prompt: {
    fontSize: 12,
    color: tokens.text.secondary,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    fontWeight: tokens.weight.bold,
    marginBottom: 14,
  },
  sentence: {
    fontSize: 22,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    lineHeight: 32,
    marginBottom: 28,
  },
  blank: {
    color: tokens.brand.accent,
    backgroundColor: tokens.brand.accentSoft,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  blankFilled: {
    backgroundColor: tokens.brand.accentSoft,
  },
  blankCorrect: {
    color: tokens.semantic.success,
    backgroundColor: tokens.semantic.successSoft,
  },
  blankWrong: {
    color: tokens.semantic.error,
  },
  options: {
    gap: 8,
  },
  option: {
    backgroundColor: tokens.bg.card,
    borderWidth: 2,
    borderColor: tokens.border.default,
    borderRadius: tokens.radius.input,
    paddingVertical: 16,
    paddingHorizontal: 18,
  },
  optionSelected: {
    borderColor: tokens.brand.accent,
    backgroundColor: tokens.brand.accentSoft,
  },
  optionCorrect: {
    borderColor: tokens.semantic.success,
    backgroundColor: tokens.semantic.successSoft,
  },
  optionWrong: {
    borderColor: tokens.semantic.error,
  },
  optionText: {
    fontSize: 16,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
  },
  optionTextEmphasis: {
    fontWeight: tokens.weight.bold,
  },
  hint: {
    color: tokens.text.tertiary,
    fontSize: 13,
    marginTop: 16,
  },
  feedback: {
    marginTop: 16,
    padding: 14,
    borderRadius: tokens.radius.card,
  },
  feedbackOk: {
    backgroundColor: tokens.semantic.successSoft,
  },
  feedbackMiss: {
    backgroundColor: "rgba(239, 68, 68, 0.12)",
  },
  feedbackTitle: {
    color: tokens.text.primary,
    fontWeight: tokens.weight.extrabold,
    fontSize: 16,
  },
  footer: {
    marginTop: "auto",
    paddingTop: 16,
  },
});
