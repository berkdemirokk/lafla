// Vocab Tile — yellow-highlighted word card with example.

import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../Button";
import { SpeakerButton } from "../SpeakerButton";
import { speak } from "../../lib/tts";
import { tokens } from "../../theme";
import type { ExerciseResult } from "../../lib/engine";

interface Props {
  wordOrPhrase: string;
  trTranslation: string;
  example: string;
  exampleTr: string;
  onComplete: (result: ExerciseResult) => void;
}

export function VocabTile({
  wordOrPhrase,
  trTranslation,
  example,
  exampleTr,
  onComplete,
}: Props) {
  const onContinue = () => {
    onComplete({
      exercise_id: "vocab_tile",
      exercise_type: "vocab_tile",
      correct: true,
      score: 100,
      feedback: `Öğrendin: ${wordOrPhrase} = ${trTranslation}`,
    });
  };

  // Auto-speak the word once on mount
  useEffect(() => {
    const t = setTimeout(() => speak(wordOrPhrase), 400);
    return () => clearTimeout(t);
  }, [wordOrPhrase]);

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Yeni Kelime</Text>

      <View style={styles.heroCard}>
        <View style={styles.wordRow}>
          <Text style={styles.word}>{wordOrPhrase}</Text>
          <SpeakerButton text={wordOrPhrase} size="lg" />
        </View>
        <View style={styles.divider} />
        <Text style={styles.tr}>{trTranslation}</Text>
      </View>

      <View style={styles.exampleBox}>
        <View style={styles.exampleHeader}>
          <Text style={styles.exampleLabel}>Örnek</Text>
          <SpeakerButton text={example} size="sm" />
        </View>
        <Text style={styles.exampleEn}>"{example}"</Text>
        <Text style={styles.exampleTr}>"{exampleTr}"</Text>
      </View>

      <View style={styles.footer}>
        <Button label="Anladım →" onPress={onContinue} />
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
  heroCard: {
    backgroundColor: "rgba(246, 255, 0, 0.18)",
    borderWidth: 2,
    borderColor: tokens.brand.primaryContainer,
    borderRadius: tokens.radius.base,
    padding: 32,
    alignItems: "center",
    marginBottom: tokens.spacing.md,
  },
  wordRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 14,
  },
  word: {
    fontSize: 36,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -0.5,
    textAlign: "center",
  },
  exampleHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  divider: {
    height: 2,
    width: 40,
    backgroundColor: tokens.brand.primaryFixed,
    marginBottom: 14,
  },
  tr: {
    fontSize: 24,
    color: tokens.text.primary,
    fontWeight: tokens.weight.bold,
    textAlign: "center",
  },
  exampleBox: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
  },
  exampleLabel: {
    fontSize: 11,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.bold,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  exampleEn: {
    fontSize: 17,
    color: tokens.text.primary,
    fontWeight: tokens.weight.semibold,
    marginBottom: 4,
    lineHeight: 24,
  },
  exampleTr: {
    fontSize: 14,
    color: tokens.text.secondary,
    fontStyle: "italic",
    lineHeight: 20,
  },
  footer: {
    marginTop: "auto",
    paddingTop: tokens.spacing.md,
  },
});
