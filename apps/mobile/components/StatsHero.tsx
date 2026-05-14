// Lafla — StatsHero
//
// Top section of the redesigned adult profile. Replaces the cartoony
// "+10 XP" tile with a 2×2 grid of real-world metrics, à la Strava
// or Whoop summary cards.
//
// Grid:
//   Toplam pratik          Aktif kelime
//   23 saat 14 dakika      1.247
//
//   Sahne                  Aktif gün (30g)
//   142 / 191              21
//
// Adult typography: bold value, muted uppercase label below. No emoji.

import { StyleSheet, Text, View } from "react-native";
import { tokens } from "../theme";
import {
  formatPracticeMinutes,
  formatVocabCount,
  type UserMetrics,
} from "../lib/metrics";

interface StatsHeroProps {
  metrics: UserMetrics | null;
}

export function StatsHero({ metrics }: StatsHeroProps) {
  const practice = metrics ? formatPracticeMinutes(metrics.totalPracticeMinutes) : "—";
  const vocab = metrics ? formatVocabCount(metrics.activeVocabSize) : "—";
  const scenes = metrics
    ? `${metrics.scenesCompleted} / ${metrics.scenesTotal}`
    : "—";
  const consistency = metrics ? String(metrics.consistencyDays30) : "—";

  return (
    <View style={styles.grid}>
      <HeroTile value={practice} label="Toplam pratik" />
      <HeroTile value={vocab} label="Aktif kelime" />
      <HeroTile value={scenes} label="Sahne" />
      <HeroTile value={consistency} label="Aktif gün (30g)" />
    </View>
  );
}

export default StatsHero;

function HeroTile({ value, label }: { value: string; label: string }) {
  return (
    <View style={styles.tile}>
      <Text style={styles.value} numberOfLines={1} adjustsFontSizeToFit>
        {value}
      </Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: tokens.spacing.md,
  },
  tile: {
    flexBasis: "48%",
    flexGrow: 1,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  value: {
    fontSize: 22,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    marginBottom: 6,
    letterSpacing: -0.5,
  },
  label: {
    fontSize: 11,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.tertiary,
    textTransform: "uppercase",
    letterSpacing: 1.1,
  },
});
