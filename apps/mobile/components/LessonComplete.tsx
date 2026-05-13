// Lesson completion screen — score summary, XP gained, next prompt.

import { View, Text, StyleSheet } from "react-native";
import { Button } from "./Button";
import { tokens } from "../theme";
import type { LessonProgress } from "../lib/engine";

interface Props {
  progress: LessonProgress;
  onContinue: () => void;
}

export function LessonComplete({ progress, onContinue }: Props) {
  const correctCount = progress.results.filter((r) => r.correct).length;

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🎯</Text>
      <Text style={styles.title}>Tamam!</Text>
      <Text style={styles.subtitle}>Ders tamamlandı.</Text>

      <View style={styles.stats}>
        <StatRow label="Toplam Skor" value={`${progress.total_score}/100`} />
        <StatRow
          label="Doğru cevap"
          value={`${correctCount}/${progress.results.length}`}
        />
        <StatRow label="XP Kazandın" value={`+${progress.xp_earned}`} />
        <StatRow label="🔥 Streak" value="+1 gün" />
      </View>

      <Text style={styles.nextHint}>⏰ Sonraki tekrar: yarın 19:00</Text>

      <View style={styles.footer}>
        <Button label="Sıradaki Sahne →" onPress={onContinue} />
      </View>
    </View>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={statStyles.row}>
      <Text style={statStyles.label}>{label}</Text>
      <Text style={statStyles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  icon: {
    fontSize: 96,
    textAlign: "center",
    marginTop: 24,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    textAlign: "center",
    letterSpacing: -1,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: tokens.text.secondary,
    textAlign: "center",
    marginBottom: 32,
  },
  stats: {
    marginBottom: 24,
  },
  nextHint: {
    fontSize: 13,
    color: tokens.text.secondary,
    textAlign: "center",
    marginBottom: 16,
  },
  footer: {
    marginTop: "auto",
    paddingTop: 16,
  },
});

const statStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: tokens.border.default,
  },
  label: {
    fontSize: 15,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
  },
  value: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.accent,
  },
});
