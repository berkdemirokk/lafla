// Vocab Tile — pasif kart, kullanıcı sadece okur ve devam eder.

import { View, Text, StyleSheet } from "react-native";
import { Button } from "../Button";
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

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Yeni kelime</Text>

      <View style={styles.card}>
        <Text style={styles.word}>{wordOrPhrase}</Text>
        <View style={styles.divider} />
        <Text style={styles.tr}>{trTranslation}</Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleLabel}>Örnek</Text>
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
    fontSize: 12,
    color: tokens.text.secondary,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    fontWeight: tokens.weight.bold,
    marginBottom: 16,
  },
  card: {
    backgroundColor: tokens.brand.accentSoft,
    borderWidth: 2,
    borderColor: tokens.brand.accent,
    borderRadius: tokens.radius.card,
    padding: 28,
    alignItems: "center",
    marginBottom: 24,
  },
  word: {
    fontSize: 32,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -0.5,
    textAlign: "center",
    marginBottom: 14,
  },
  divider: {
    height: 1,
    width: 40,
    backgroundColor: tokens.brand.accent,
    marginBottom: 14,
  },
  tr: {
    fontSize: 22,
    color: tokens.brand.accent,
    fontWeight: tokens.weight.bold,
    textAlign: "center",
  },
  exampleBox: {
    backgroundColor: tokens.bg.card,
    borderRadius: tokens.radius.card,
    padding: 16,
  },
  exampleLabel: {
    fontSize: 11,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.bold,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
  },
  exampleEn: {
    fontSize: 16,
    color: tokens.text.primary,
    fontWeight: tokens.weight.semibold,
    marginBottom: 4,
    lineHeight: 22,
  },
  exampleTr: {
    fontSize: 14,
    color: tokens.text.secondary,
    fontStyle: "italic",
    lineHeight: 20,
  },
  footer: {
    marginTop: "auto",
    paddingTop: 16,
  },
});
