// Spot Mistake exercise — hatalı cümleyi düzelt.

import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button } from "../Button";
import { tokens } from "../../theme";
import { evaluateSpotMistake, type ExerciseResult } from "../../lib/engine";

interface Props {
  incorrectSentence: string;
  correctSentence: string;
  trExplanation?: string;
  onComplete: (result: ExerciseResult) => void;
}

export function SpotMistake({
  incorrectSentence,
  correctSentence,
  trExplanation,
  onComplete,
}: Props) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<ExerciseResult | null>(null);

  const submit = () => {
    if (!input.trim()) return;
    setResult(evaluateSpotMistake(correctSentence, input, trExplanation));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Hatayı bul ve düzelt</Text>

      <View style={styles.incorrectBox}>
        <Text style={styles.incorrectLabel}>❌ Hatalı</Text>
        <Text style={styles.incorrectText}>{incorrectSentence}</Text>
      </View>

      <TextInput
        style={[
          styles.input,
          result && (result.correct ? styles.inputCorrect : styles.inputWrong),
        ]}
        placeholder="Doğrusunu yaz..."
        placeholderTextColor={tokens.text.tertiary}
        value={input}
        onChangeText={setInput}
        multiline
        editable={!result}
        autoCapitalize="none"
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
              : `✗ Doğrusu: "${correctSentence}"`}
          </Text>
          {trExplanation && (
            <Text style={styles.feedbackText}>{trExplanation}</Text>
          )}
        </View>
      )}

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
    fontSize: 12,
    color: tokens.text.secondary,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    fontWeight: tokens.weight.bold,
    marginBottom: 12,
  },
  incorrectBox: {
    backgroundColor: "rgba(239, 68, 68, 0.08)",
    borderWidth: 1,
    borderColor: "rgba(239, 68, 68, 0.25)",
    borderRadius: tokens.radius.card,
    padding: 16,
    marginBottom: 16,
  },
  incorrectLabel: {
    fontSize: 11,
    color: tokens.semantic.error,
    fontWeight: tokens.weight.bold,
    marginBottom: 6,
    letterSpacing: 1,
  },
  incorrectText: {
    fontSize: 20,
    color: tokens.text.primary,
    fontWeight: tokens.weight.semibold,
    lineHeight: 28,
    textDecorationLine: "line-through",
    opacity: 0.7,
  },
  input: {
    backgroundColor: tokens.bg.card,
    borderWidth: 2,
    borderColor: tokens.border.default,
    borderRadius: tokens.radius.input,
    padding: 16,
    color: tokens.text.primary,
    fontSize: 16,
    minHeight: 80,
    textAlignVertical: "top",
  },
  inputCorrect: { borderColor: tokens.semantic.success },
  inputWrong: { borderColor: tokens.semantic.error },
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
    marginBottom: 6,
  },
  feedbackText: {
    color: tokens.text.secondary,
    fontSize: 14,
    lineHeight: 20,
  },
  footer: {
    marginTop: "auto",
    paddingTop: 16,
  },
});
