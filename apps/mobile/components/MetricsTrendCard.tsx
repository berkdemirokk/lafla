// Lafla — MetricsTrendCard
//
// 7- or 30-day fluency trend, Strava-style:
//   • Mini bar chart of fluency over time (View-based; no SVG dep).
//   • Trend chip ("Yükselişte" / "Sabit" / "Düşüşte").
//   • Average WPM and Average fluency stats.
//
// Pulls async data via `getMetricsTrend` + `getRecentSamples`. Owner can
// pass `samples` + `trend` directly to skip the internal fetch (useful
// for screens that already hold the data).

import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { tokens } from "../theme";
import {
  getMetricsTrend,
  getRecentSamples,
  type MetricSample,
  type MetricsTrend,
} from "../lib/speech-metrics-storage";

interface MetricsTrendCardProps {
  /** Window in days; defaults to 7. Supports 7 or 30 cleanly. */
  days?: number;
  /** Pre-loaded trend (skip internal fetch when provided). */
  trend?: MetricsTrend;
  /** Pre-loaded samples (newest first). */
  samples?: MetricSample[];
}

const TREND_LABEL: Record<MetricsTrend["trend"], string> = {
  improving: "Yükselişte",
  stable: "Sabit",
  declining: "Düşüşte",
};

export function MetricsTrendCard({
  days = 7,
  trend: providedTrend,
  samples: providedSamples,
}: MetricsTrendCardProps) {
  const [trend, setTrend] = useState<MetricsTrend | null>(
    providedTrend ?? null,
  );
  const [samples, setSamples] = useState<MetricSample[]>(
    providedSamples ?? [],
  );
  const [loading, setLoading] = useState(
    !(providedTrend && providedSamples),
  );

  useEffect(() => {
    let alive = true;
    if (providedTrend && providedSamples) {
      setTrend(providedTrend);
      setSamples(providedSamples);
      setLoading(false);
      return () => {
        alive = false;
      };
    }
    setLoading(true);
    Promise.all([
      getMetricsTrend(days),
      getRecentSamples(days === 30 ? 60 : 30),
    ])
      .then(([t, s]) => {
        if (!alive) return;
        setTrend(t);
        setSamples(s);
      })
      .catch(() => {
        if (!alive) return;
        setTrend({
          avgWpm: 0,
          avgFluency: 0,
          trend: "stable",
          weeklyChange: 0,
        });
        setSamples([]);
      })
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, [days, providedTrend, providedSamples]);

  const series = buildSeries(samples, days);
  const empty =
    !loading && samples.length === 0 && (trend?.avgFluency ?? 0) === 0;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {days === 30 ? "30 Günlük Akıcılık" : "7 Günlük Akıcılık"}
        </Text>
        {trend ? (
          <View
            style={[
              styles.trendChip,
              trend.trend === "improving"
                ? styles.trendChipUp
                : trend.trend === "declining"
                  ? styles.trendChipDown
                  : styles.trendChipFlat,
            ]}
          >
            <Text
              style={[
                styles.trendChipText,
                trend.trend === "improving"
                  ? styles.trendChipTextUp
                  : trend.trend === "declining"
                    ? styles.trendChipTextDown
                    : styles.trendChipTextFlat,
              ]}
            >
              {TREND_LABEL[trend.trend]}
              {trend.weeklyChange !== 0
                ? `  ${trend.weeklyChange > 0 ? "+" : ""}${trend.weeklyChange}`
                : ""}
            </Text>
          </View>
        ) : null}
      </View>

      {/* Mini chart */}
      <View style={styles.chartArea}>
        {empty ? (
          <Text style={styles.emptyText}>
            Henüz veri yok. İlk kayıtla birlikte trend çıkar.
          </Text>
        ) : (
          <View style={styles.chartRow}>
            {series.map((v, idx) => (
              <View key={idx} style={styles.barSlot}>
                <View style={styles.barBg}>
                  <View
                    style={[
                      styles.bar,
                      {
                        height: `${Math.max(4, v)}%`,
                        backgroundColor:
                          v >= 70
                            ? tokens.brand.tertiary
                            : v >= 45
                              ? tokens.brand.tertiarySoft
                              : tokens.bg.surfaceContainerHighest,
                      },
                    ]}
                  />
                </View>
              </View>
            ))}
          </View>
        )}
        <View style={styles.chartAxis}>
          <Text style={styles.axisLabel}>
            {days === 30 ? "30g önce" : "7g önce"}
          </Text>
          <Text style={styles.axisLabel}>bugün</Text>
        </View>
      </View>

      {/* Averages */}
      <View style={styles.statsRow}>
        <View style={styles.statBlock}>
          <Text style={styles.statValue}>
            {trend && trend.avgFluency > 0 ? trend.avgFluency : "—"}
          </Text>
          <Text style={styles.statLabel}>ort. akıcılık</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statBlock}>
          <Text style={styles.statValue}>
            {trend && trend.avgWpm > 0 ? trend.avgWpm : "—"}
          </Text>
          <Text style={styles.statLabel}>ort. WPM</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statBlock}>
          <Text style={styles.statValue}>{samples.length}</Text>
          <Text style={styles.statLabel}>kayıt</Text>
        </View>
      </View>
    </View>
  );
}

export default MetricsTrendCard;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Builds a fixed-length series of fluency scores (0-100), oldest → newest.
 *
 * Strategy: bucket the past `days` days by day; within each day, average
 * the fluency scores of samples recorded that day. Empty days become 0
 * (rendered as a thin baseline bar). Length = `days` so the chart looks
 * stable as data arrives.
 */
function buildSeries(samples: MetricSample[], days: number): number[] {
  const bucketCount = Math.max(7, Math.min(30, Math.floor(days)));
  const now = new Date();
  const buckets: number[][] = Array.from({ length: bucketCount }, () => []);

  for (const s of samples) {
    const t = Date.parse(s.recordedAt);
    if (Number.isNaN(t)) continue;
    const diffMs = now.getTime() - t;
    if (diffMs < 0) continue;
    const daysAgo = Math.floor(diffMs / (24 * 60 * 60 * 1000));
    if (daysAgo >= bucketCount) continue;
    // Newest day → last bucket
    const idx = bucketCount - 1 - daysAgo;
    buckets[idx].push(s.metrics.fluencyScore);
  }

  return buckets.map((arr) => {
    if (arr.length === 0) return 0;
    return Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);
  });
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
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
    marginBottom: 16,
  },
  title: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    textTransform: "uppercase",
    letterSpacing: 1.1,
  },
  trendChip: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: tokens.radius.full,
  },
  trendChipUp: {
    backgroundColor: tokens.brand.primary,
  },
  trendChipDown: {
    backgroundColor: tokens.semantic.errorContainer,
  },
  trendChipFlat: {
    backgroundColor: tokens.bg.surfaceContainerHigh,
  },
  trendChipText: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    letterSpacing: 0.6,
  },
  trendChipTextUp: {
    color: tokens.brand.onPrimary,
  },
  trendChipTextDown: {
    color: tokens.semantic.onErrorContainer,
  },
  trendChipTextFlat: {
    color: tokens.text.secondary,
  },

  // Chart
  chartArea: {
    marginBottom: 14,
  },
  chartRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: 72,
    gap: 3,
  },
  barSlot: {
    flex: 1,
    height: "100%",
    justifyContent: "flex-end",
  },
  barBg: {
    width: "100%",
    height: "100%",
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderRadius: 3,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  bar: {
    width: "100%",
    borderRadius: 3,
  },
  chartAxis: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },
  axisLabel: {
    fontSize: 10,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.tertiary,
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
  emptyText: {
    fontSize: 13,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.medium,
    textAlign: "center",
    paddingVertical: 22,
  },

  // Stats
  statsRow: {
    flexDirection: "row",
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
    alignItems: "center",
  },
  statBlock: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    fontSize: 22,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.tertiary,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: 28,
    backgroundColor: tokens.border.light,
  },
});
