// Lafla — SpeechMetricsDashboard
//
// Reusable card that renders a SpeechMetrics object. Two variants:
//
//   compact={true}  → single row of WPM / fluency / top filler, no hints
//   compact={false} → full panel: WPM hero, fluency bar, fillers list,
//                     pause stats, hint chips
//
// Cyber-Electric Modern: tertiary blue fill for the fluency bar, neon
// yellow accent on the band chip, generous spacing. No emojis (aside
// from a single trend glyph in the band chip, kept minimal).

import { StyleSheet, Text, View } from "react-native";
import { tokens } from "../theme";
import type { SpeechMetrics } from "../lib/speech-metrics";

interface SpeechMetricsDashboardProps {
  metrics: SpeechMetrics;
  compact?: boolean;
}

const BAND_LABEL_TR: Record<SpeechMetrics["band"], string> = {
  high: "akıcı",
  mid: "rahat",
  low: "yavaş",
};

export function SpeechMetricsDashboard({
  metrics,
  compact = false,
}: SpeechMetricsDashboardProps) {
  const topFillers = metrics.fillerWords.slice(0, 3);

  if (compact) {
    return (
      <View style={styles.compactCard}>
        <CompactStat
          value={metrics.wpm > 0 ? String(metrics.wpm) : "—"}
          label="WPM"
        />
        <View style={styles.compactDivider} />
        <CompactStat
          value={String(metrics.fluencyScore)}
          label="akıcılık"
          accent
        />
        <View style={styles.compactDivider} />
        <CompactStat
          value={topFillers[0] ? String(topFillers[0].count) : "0"}
          label={topFillers[0] ? `"${topFillers[0].word}"` : "dolgu"}
        />
      </View>
    );
  }

  return (
    <View style={styles.card}>
      {/* Header: WPM hero + band chip */}
      <View style={styles.header}>
        <View>
          <Text style={styles.wpmValue}>
            {metrics.wpm > 0 ? metrics.wpm : "—"}
          </Text>
          <Text style={styles.wpmLabel}>kelime / dakika</Text>
        </View>
        <View
          style={[
            styles.bandChip,
            metrics.band === "high"
              ? styles.bandChipHigh
              : metrics.band === "mid"
                ? styles.bandChipMid
                : styles.bandChipLow,
          ]}
        >
          <Text
            style={[
              styles.bandChipText,
              metrics.band === "high"
                ? styles.bandChipTextHigh
                : styles.bandChipTextDark,
            ]}
          >
            {BAND_LABEL_TR[metrics.band]}
          </Text>
        </View>
      </View>

      {/* Fluency bar */}
      <View style={styles.fluencyRow}>
        <Text style={styles.fluencyLabel}>Akıcılık</Text>
        <View style={styles.trackWrapper}>
          <View style={styles.track}>
            <View
              style={[
                styles.fill,
                { width: `${Math.max(2, metrics.fluencyScore)}%` },
              ]}
            />
          </View>
        </View>
        <Text style={styles.fluencyValue}>{metrics.fluencyScore}</Text>
      </View>

      {/* Sub-stats row: duration · pauses · filler rate */}
      <View style={styles.subStatsRow}>
        <SubStat
          value={`${metrics.durationSec.toFixed(1)}s`}
          label="süre"
        />
        <SubStat
          value={metrics.pauseCount > 0 ? String(metrics.pauseCount) : "0"}
          label="duraksama"
        />
        <SubStat
          value={`${metrics.fillerRate}/dk`}
          label="dolgu"
        />
        <SubStat
          value={
            metrics.longestPauseMs > 0
              ? `${Math.round(metrics.longestPauseMs / 100) / 10}s`
              : "—"
          }
          label="en uzun es"
        />
      </View>

      {/* Top fillers list */}
      {topFillers.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>En çok kullandığın dolgular</Text>
          <View style={styles.fillerList}>
            {topFillers.map((f, idx) => (
              <View key={f.word + idx} style={styles.fillerRow}>
                <Text style={styles.fillerWord}>"{f.word}"</Text>
                <Text style={styles.fillerCount}>{f.count}×</Text>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Hint chips — at most 2 in the dashboard */}
      {metrics.hintsTr.length > 0 && (
        <View style={styles.hintList}>
          {metrics.hintsTr.slice(0, 2).map((h, idx) => (
            <View key={idx} style={styles.hintChip}>
              <Text style={styles.hintText}>{h}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

export default SpeechMetricsDashboard;

// ---------------------------------------------------------------------------
// Small sub-components
// ---------------------------------------------------------------------------

function CompactStat({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <View style={styles.compactCol}>
      <Text style={[styles.compactValue, accent && styles.compactValueAccent]}>
        {value}
      </Text>
      <Text style={styles.compactLabel} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

function SubStat({ value, label }: { value: string; label: string }) {
  return (
    <View style={styles.subStat}>
      <Text style={styles.subStatValue} numberOfLines={1}>
        {value}
      </Text>
      <Text style={styles.subStatLabel}>{label}</Text>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  // Full card
  card: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    borderWidth: 1,
    borderColor: tokens.border.light,
    marginBottom: tokens.spacing.md,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  wpmValue: {
    fontSize: 48,
    lineHeight: 50,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -1,
  },
  wpmLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.tertiary,
    textTransform: "uppercase",
    letterSpacing: 1.1,
    marginTop: 2,
  },
  bandChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: tokens.radius.full,
    alignItems: "center",
  },
  bandChipHigh: {
    backgroundColor: tokens.brand.primary,
  },
  bandChipMid: {
    backgroundColor: tokens.brand.tertiaryContainer,
  },
  bandChipLow: {
    backgroundColor: tokens.bg.surfaceContainerHigh,
  },
  bandChipText: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    letterSpacing: 0.8,
  },
  bandChipTextHigh: {
    color: tokens.brand.onPrimary,
  },
  bandChipTextDark: {
    color: tokens.text.primary,
  },

  // Fluency row
  fluencyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },
  fluencyLabel: {
    width: 64,
    fontSize: 12,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.secondary,
    textTransform: "uppercase",
    letterSpacing: 0.6,
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
  fluencyValue: {
    minWidth: 32,
    textAlign: "right",
    fontSize: 16,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },

  // Sub stats
  subStatsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: tokens.border.light,
    marginBottom: 14,
  },
  subStat: {
    flex: 1,
    alignItems: "center",
  },
  subStatValue: {
    fontSize: 16,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  subStatLabel: {
    fontSize: 10,
    color: tokens.text.tertiary,
    textTransform: "uppercase",
    letterSpacing: 0.7,
    marginTop: 3,
    fontWeight: tokens.weight.semibold,
  },

  // Sections
  section: {
    marginBottom: 12,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    textTransform: "uppercase",
    letterSpacing: 1.1,
    marginBottom: 8,
  },
  fillerList: {
    gap: 6,
  },
  fillerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 4,
  },
  fillerWord: {
    fontSize: 14,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
  },
  fillerCount: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
  },

  // Hint chips
  hintList: {
    marginTop: 6,
    gap: 8,
  },
  hintChip: {
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderRadius: tokens.radius.sm,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderLeftWidth: 3,
    borderLeftColor: tokens.brand.primary,
  },
  hintText: {
    fontSize: 13,
    lineHeight: 18,
    color: tokens.text.primary,
    fontWeight: tokens.weight.medium,
  },

  // Compact variant
  compactCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  compactCol: {
    flex: 1,
    alignItems: "center",
  },
  compactDivider: {
    width: 1,
    height: 32,
    backgroundColor: tokens.border.light,
    marginHorizontal: 8,
  },
  compactValue: {
    fontSize: 22,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  compactValueAccent: {
    color: tokens.brand.tertiary,
  },
  compactLabel: {
    fontSize: 10,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.tertiary,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginTop: 2,
  },
});
