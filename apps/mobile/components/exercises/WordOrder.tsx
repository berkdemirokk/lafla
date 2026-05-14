// Word Order — Cyber-Electric: Tap tokens in order to build the sentence.
// Built tokens show at top, available below. Tap a built token to remove.

import { useMemo, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Button } from "../Button";
import { tokens } from "../../theme";
import { hapticForScore, hapticSelection } from "../../lib/feedback";
import { evaluateWordOrder, type ExerciseResult } from "../../lib/engine";

interface Props {
  scrambledTokens: string[];
  correctSentence: string;
  trTranslation: string;
  onComplete: (result: ExerciseResult) => void;
}

export function WordOrder({
  scrambledTokens,
  correctSentence,
  trTranslation,
  onComplete,
}: Props) {
  // Shuffle tokens once
  const initialOrder = useMemo(
    () =>
      scrambledTokens
        .map((t, i) => ({ token: t, key: `${i}-${t}` }))
        .map((x) => ({ ...x, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ token, key }) => ({ token, key })),
    [scrambledTokens],
  );

  const [available, setAvailable] = useState<{ token: string; key: string }[]>(
    initialOrder,
  );
  const [built, setBuilt] = useState<{ token: string; key: string }[]>([]);
  const [result, setResult] = useState<ExerciseResult | null>(null);

  const addToBuild = (entry: { token: string; key: string }) => {
    if (result) return;
    hapticSelection();
    setBuilt([...built, entry]);
    setAvailable(available.filter((a) => a.key !== entry.key));
  };

  const removeFromBuild = (entry: { token: string; key: string }) => {
    if (result) return;
    hapticSelection();
    setBuilt(built.filter((b) => b.key !== entry.key));
    setAvailable([...available, entry]);
  };

  const builtSentence = built.map((b) => b.token).join(" ");
  const canSubmit = available.length === 0;

  const submit = () => {
    const r = evaluateWordOrder(correctSentence, builtSentence);
    setResult(r);
    hapticForScore(r.score);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Sırala</Text>
      <Text style={styles.trHint}>"{trTranslation}"</Text>

      {/* Built sentence area */}
      <View
        style={[
          styles.builtArea,
          result && (result.correct ? styles.builtAreaOk : styles.builtAreaMiss),
        ]}
      >
        {built.length === 0 ? (
          <Text style={styles.builtPlaceholder}>Kelimeleri sırayla seç...</Text>
        ) : (
          built.map((b) => (
            <Pressable
              key={b.key}
              onPress={() => removeFromBuild(b)}
              style={styles.builtToken}
              disabled={!!result}
            >
              <Text style={styles.builtTokenText}>{b.token}</Text>
            </Pressable>
          ))
        )}
      </View>

      {/* Available tokens */}
      <View style={styles.tokenBank}>
        {available.map((a) => (
          <Pressable
            key={a.key}
            onPress={() => addToBuild(a)}
            style={styles.bankToken}
            disabled={!!result}
          >
            <Text style={styles.bankTokenText}>{a.token}</Text>
          </Pressable>
        ))}
      </View>

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
        </View>
      )}

      <View style={styles.footer}>
        <Button
          label={result ? "Devam et →" : "Kontrol et"}
          onPress={result ? () => onComplete(result) : submit}
          disabled={!result && !canSubmit}
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
  trHint: {
    fontSize: 20,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    marginBottom: tokens.spacing.md,
    fontStyle: "italic",
  },
  builtArea: {
    minHeight: 80,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 2,
    borderColor: tokens.bg.surfaceContainerHigh,
    borderStyle: "dashed",
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.sm,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    alignItems: "flex-start",
    marginBottom: tokens.spacing.md,
  },
  builtAreaOk: {
    borderColor: tokens.brand.tertiary,
    backgroundColor: tokens.brand.tertiarySoft,
    borderStyle: "solid",
  },
  builtAreaMiss: {
    borderColor: tokens.semantic.error,
    backgroundColor: tokens.semantic.errorContainer,
    borderStyle: "solid",
  },
  builtPlaceholder: {
    color: tokens.text.tertiary,
    fontSize: 14,
    fontStyle: "italic",
    padding: 8,
  },
  builtToken: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primary,
  },
  builtTokenText: {
    color: tokens.text.onPrimary,
    fontSize: 16,
    fontWeight: tokens.weight.bold,
  },
  tokenBank: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
  },
  bankToken: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderWidth: 2,
    borderColor: tokens.bg.surfaceContainerHigh,
  },
  bankTokenText: {
    color: tokens.text.primary,
    fontSize: 16,
    fontWeight: tokens.weight.semibold,
  },
  feedback: {
    marginTop: tokens.spacing.md,
    padding: tokens.spacing.md,
    borderRadius: tokens.radius.base,
  },
  feedbackOk: {
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
  },
  feedbackMiss: {
    backgroundColor: tokens.semantic.errorContainer,
  },
  feedbackTitle: {
    color: tokens.text.primary,
    fontWeight: tokens.weight.extrabold,
    fontSize: 16,
  },
  footer: {
    marginTop: "auto",
    paddingTop: tokens.spacing.md,
  },
});
