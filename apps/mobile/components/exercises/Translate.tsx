// Translate exercise UI — Türkçe cümleyi İngilizceye çevir (veya tersi).

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
    const r = evaluateTranslate(target, acceptedVariants, input);
    setResult(r);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Çevir</Text>
      <Text style={styles.source}>{source}</Text>

      <TextInput
        style={[
          styles.input,
          result && (result.correct ? styles.inputCorrect : styles.inputWrong),
        ]}
        placeholder={
          direction === "tr_to_en" ? "İngilizce yaz..." : "Türkçe yaz..."
        }
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
            {result.correct ? `✓ ${result.score}/100` : `✗ ${result.score}/100`}
          </Text>
          {result.feedback && (
            <Text style={styles.feedbackText}>{result.feedback}</Text>
          )}
        </View>
      )}

      {!result && trHint && (
        <Text style={styles.hint}>💡 {trHint}</Text>
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
  source: {
    fontSize: 22,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    lineHeight: 30,
    marginBottom: 24,
  },
  input: {
    backgroundColor: tokens.bg.card,
    borderWidth: 2,
    borderColor: tokens.border.default,
    borderRadius: tokens.radius.input,
    padding: 16,
    color: tokens.text.primary,
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: "top",
  },
  inputCorrect: { borderColor: tokens.semantic.success },
  inputWrong: { borderColor: tokens.semantic.error },
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
    marginBottom: 4,
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
