// Spot Mistake — light bg, error-tinted incorrect sentence.

import { useRef, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button } from "../Button";
import { SpeakerButton } from "../SpeakerButton";
import { tokens } from "../../theme";
import { hapticForScore } from "../../lib/feedback";
import { evaluateSpotMistake, type ExerciseResult } from "../../lib/engine";
import { useTranslation } from "../../lib/i18n";

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
  const { t, locale } = useTranslation();
  const [input, setInput] = useState("");
  const [result, setResult] = useState<ExerciseResult | null>(null);
  // 2026-05-26 (P1 audit fix) — double-tap guard (haptic + evaluate çift fire).
  const submittedRef = useRef(false);

  const submit = () => {
    if (!input.trim() || submittedRef.current) return;
    // 2026-05-26 (P1 audit fix) — Eski versiyon kullanıcı "ok" gibi 2
    // karakterlik input ile yine partial score alıyordu. Pedagoji bypass'i.
    // Minimum length kontrolü: doğru cümlenin yarısı (yaklaşık) kadar
    // karakter yoksa kullanıcı henüz cümleyi düzeltmemiş — reject.
    const minLen = Math.max(8, Math.floor(correctSentence.length * 0.5));
    if (input.trim().length < minLen) return;
    submittedRef.current = true;
    const r = evaluateSpotMistake(correctSentence, input, trExplanation);
    setResult(r);
    hapticForScore(r.score);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>{t("exercise.spot_mistake.title")}</Text>

      <View style={styles.errorBox}>
        <Text style={styles.errorLabel}>{t("exercise.incorrect")}</Text>
        <Text style={styles.errorText}>{incorrectSentence}</Text>
      </View>

      <TextInput
        style={[
          styles.input,
          result && (result.correct ? styles.inputOk : styles.inputMiss),
        ]}
        placeholder={t("exercise.write_correction")}
        placeholderTextColor={tokens.text.secondary}
        value={input}
        onChangeText={setInput}
        multiline
        editable={!result}
        autoCapitalize="sentences"
        autoCorrect={false}
        accessibilityLabel={t("exercise.correct_sentence_label")}
      />

      {result && (
        <View
          style={[
            styles.feedback,
            result.correct ? styles.feedbackOk : styles.feedbackMiss,
          ]}
        >
          <View style={styles.feedbackHeader}>
            <Text style={styles.feedbackTitle}>
              {result.correct
                ? `✓ ${result.score}/100`
                : t("exercise.correct_answer_quoted", { answer: correctSentence })}
            </Text>
            <SpeakerButton text={correctSentence} size="sm" />
          </View>
          {trExplanation && (
            <Text style={styles.feedbackText}>
              {locale === "tr" ? trExplanation : t("learning.explanation_fallback_en")}
            </Text>
          )}
        </View>
      )}

      <View style={styles.footer}>
        <Button
          label={result ? `${t("common.continue")} →` : t("exercise.check")}
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
  errorBox: {
    backgroundColor: tokens.semantic.errorContainer,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    marginBottom: tokens.spacing.md,
  },
  errorLabel: {
    fontSize: 11,
    color: tokens.semantic.error,
    fontWeight: tokens.weight.bold,
    marginBottom: 6,
    letterSpacing: 1,
  },
  errorText: {
    fontSize: 22,
    color: tokens.text.primary,
    fontWeight: tokens.weight.semibold,
    lineHeight: 30,
    textDecorationLine: "line-through",
    opacity: 0.7,
  },
  input: {
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderWidth: 2,
    borderColor: tokens.bg.surfaceContainerHigh,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    color: tokens.text.primary,
    fontSize: 17,
    minHeight: 90,
    textAlignVertical: "top",
  },
  inputOk: { borderColor: tokens.brand.primaryFixed },
  inputMiss: { borderColor: tokens.semantic.error },
  feedback: {
    marginTop: tokens.spacing.md,
    padding: tokens.spacing.md,
    borderRadius: tokens.radius.base,
  },
  feedbackOk: {
    backgroundColor: tokens.semantic.successContainer,
    borderWidth: 1,
    borderColor: tokens.semantic.success,
  },
  feedbackMiss: {
    backgroundColor: tokens.semantic.errorContainer,
  },
  feedbackHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 6,
  },
  feedbackTitle: {
    flex: 1,
    color: tokens.text.primary,
    fontWeight: tokens.weight.extrabold,
    fontSize: 16,
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
