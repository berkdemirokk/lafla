// Lafla — MetricBar
//
// Horizontal CEFR skill bar for the adult metric dashboard.
// Layout: [Label]            [══════░░░░] [B1]
//
// Cyber-Electric tone: muted track, blue fill, level chip in yellow accent.
// No emoji, adult typography.
//
// Visual reference:
//   Konuşma                ████████░░░░░░  B1

import { StyleSheet, Text, View } from "react-native";
import { tokens } from "../theme";
import { cefrFillPercent } from "../lib/metrics";
import type { CefrLevel } from "../lib/cefr-level";

interface MetricBarProps {
  label: string;
  level: CefrLevel;
  /** Optional override of the fill percentage (0-100). Defaults to CEFR mapping. */
  fillPercent?: number;
}

export function MetricBar({ label, level, fillPercent }: MetricBarProps) {
  const fill = Math.max(
    0,
    Math.min(100, fillPercent ?? cefrFillPercent(level)),
  );

  return (
    <View style={styles.row}>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
      <View style={styles.trackWrapper}>
        <View style={styles.track}>
          <View style={[styles.fill, { width: `${fill}%` }]} />
        </View>
      </View>
      <View style={styles.chip}>
        <Text style={styles.chipText}>{level}</Text>
      </View>
    </View>
  );
}

export default MetricBar;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 8,
  },
  label: {
    width: 96,
    fontSize: 13,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.secondary,
  },
  trackWrapper: {
    flex: 1,
  },
  track: {
    height: 8,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    backgroundColor: tokens.brand.tertiary,
    borderRadius: tokens.radius.full,
  },
  chip: {
    minWidth: 36,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: tokens.radius.sm,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    alignItems: "center",
  },
  chipText: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    letterSpacing: 0.5,
  },
});
