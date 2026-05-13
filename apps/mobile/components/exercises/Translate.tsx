// Translate — light bg, yellow accent feedback.

import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button } from "../Button";
import { tokens } from "../../theme";
import { evaluateTranslate, type ExerciseResult } from "../../lib/engine";

interface Props {
  source: string;
  target: string;
  acceptedVariants: string[];
  direction: "tr_to_en" | "en_to_tr";
  trHint?: string;
  onComplete: (result: ExerciseResult) => void;
}

export function Translate({
  source,
  target,
  acceptedVariants,
  direction,
  trHint,
  onComplete,
}: Props) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<ExerciseResult | null>(null);

  const submit = () => {
    if (!input.trim()) return;
    setResult(evaluateTranslate(target, acceptedVariants, input));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Çevir</Text>
      <Text style={styles.source}>{source}</Text>

      <TextInput
        style={[
          styles.input,
          result && (result.correct ? styles.inputOk : styles.inputMiss),
        ]}
        placeholder={
          direction === "tr_to_en" ? "İngilizce yaz..." : "Türkçe yaz..."
        }
        placeholderTextColor={tokens.text.secondary}
        value={input}
        onChangeText={setInput}
        multiline
        editable={!result}
        autoCapitalize="sentences"
        autoCorrect={false}
      />

      {result && (
        <View
          style={[
            styles.feedback,
            result.correct ? styles.feedbackOk : styles.feedbackMiss,
          ]}
        >
          <Text style={styles.feedbackTitle}>
            {result.correct
              ? `✓ ${result.score}/100`
              : `✗ ${result.score}/100`}
          </Text>
          {result.feedback && (
            <Text style={styles.feedbackText}>{result.feedback}</Text>
          )}
        </View>
      )}

      {!result && trHint && <Text style={styles.hint}>💡 {trHint}</Text>}

      <View style={styles.footer}>
        <Button
          label={result ? "Devam et →" : "Kontrol et"}
          onPress={result ? () => onComplete(result) : submit}
          disabled={!result && !input.trim()}
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
    marginBottom: tokens.spacing.sm,
  },
  source: {
    fontSize: 28,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    lineHeight: 36,
    marginBottom: tokens.spacing.md,
  },
  input: {
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderWidth: 2,
    borderColor: tokens.bg.surfaceContainerHigh,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    color: tokens.text.primary,
    fontSize: 17,
    minHeight: 110,
    textAlignVertical: "top",
  },
  inputOk: { borderColor: tokens.brand.primaryFixed },
  inputMiss: { borderColor: tokens.semantic.error },
  hint: {
    color: tokens.text.secondary,
    fontSize: 14,
    marginTop: tokens.spacing.md,
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
    color: tokens.text.primary,
    fontWeight: tokens.weight.extrabold,
    fontSize: 18,
    marginBottom: 4,
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
