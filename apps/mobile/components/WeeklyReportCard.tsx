// Lafla — WeeklyReportCard
//
// "Bu Hafta" summary card for the adult profile. Strava-style weekly
// recap: a header, four mini stats in a row, then a single-line
// highlight in Turkish.
//
// Tap target is reserved (onPress prop) so a future weekly-history
// screen can drop in without restyling the card.

import { Pressable, StyleSheet, Text, View } from "react-native";
import { tokens } from "../theme";
import type { WeeklyReport } from "../lib/metrics";

interface WeeklyReportCardProps {
  report: WeeklyReport | null;
  onPress?: () => void;
}

export function WeeklyReportCard({ report, onPress }: WeeklyReportCardProps) {
  const Wrapper = onPress ? Pressable : View;

  return (
    <Wrapper
      onPress={onPress}
      style={({ pressed }: { pressed?: boolean } = {}) => [
        styles.card,
        pressed && onPress ? styles.cardPressed : null,
      ]}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Bu Hafta</Text>
        {onPress ? <Text style={styles.chev}>›</Text> : null}
      </View>

      <View style={styles.statsRow}>
        <MiniStat
          value={report ? String(report.daysActive) : "—"}
          label="Gün"
        />
        <MiniStat
          value={report ? String(report.totalMinutes) : "—"}
          label="Dakika"
        />
        <MiniStat
          value={report ? String(report.newVocabAdded) : "—"}
          label="Kelime"
        />
        <MiniStat
          value={report ? String(report.coachSessions) : "—"}
          label="Koç"
        />
      </View>

      <View style={styles.divider} />

      <Text style={styles.highlight} numberOfLines={2}>
        {report?.highlight_tr ?? "Veriler hazırlanıyor."}
      </Text>
    </Wrapper>
  );
}

export default WeeklyReportCard;

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <View style={styles.mini}>
      <Text style={styles.miniValue} numberOfLines={1}>
        {value}
      </Text>
      <Text style={styles.miniLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    borderWidth: 1,
    borderColor: tokens.border.light,
    marginBottom: tokens.spacing.md,
  },
  cardPressed: {
    opacity: 0.85,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  title: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  chev: {
    fontSize: 20,
    color: tokens.text.tertiary,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  mini: {
    flex: 1,
    alignItems: "center",
  },
  miniValue: {
    fontSize: 20,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  miniLabel: {
    fontSize: 10,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.tertiary,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: tokens.border.light,
    marginVertical: 14,
  },
  highlight: {
    fontSize: 13,
    color: tokens.text.secondary,
    lineHeight: 18,
    fontWeight: tokens.weight.medium,
  },
});
