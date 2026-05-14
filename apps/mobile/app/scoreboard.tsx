// Scoreboard — mode-by-mode fluency view ("Akıcılığım").
// Core "where am I?" screen post-scenario pivot.
// Light bg, Cyber-Electric tokens, no network calls.

import { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  getAllModeFluency,
  getCompletedLessonIds,
  type ModeFluency,
} from "../lib/local-progress";
import { allLessons } from "../data/lessons";
import { tokens } from "../theme";

type ModeKey = "order" | "flirt" | "work" | "daily" | "banter";

interface ModeDescriptor {
  key: ModeKey;
  label: string;
  emoji: string;
  accent: "yellow" | "blue";
}

// Fixed display order per spec.
const MODES: ReadonlyArray<ModeDescriptor> = [
  { key: "order", label: "Sipariş", emoji: "☕", accent: "yellow" },
  { key: "flirt", label: "Flört", emoji: "💘", accent: "yellow" },
  { key: "work", label: "İş", emoji: "💼", accent: "blue" },
  { key: "daily", label: "Günlük", emoji: "🚶", accent: "blue" },
  { key: "banter", label: "Banter", emoji: "🎤", accent: "blue" },
];

interface ModeRowData {
  desc: ModeDescriptor;
  score: number; // 0..1
  scenesDone: number;
  scenesTotal: number;
}

export default function ScoreboardScreen() {
  const router = useRouter();
  const [fluencyMap, setFluencyMap] = useState<Record<string, ModeFluency>>({});
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const [f, c] = await Promise.all([
        getAllModeFluency(),
        getCompletedLessonIds(),
      ]);
      setFluencyMap(f);
      setCompletedIds(c);
      setLoaded(true);
    })();
  }, []);

  // Compute per-mode totals from bundled lessons. skill_id is `${mode}.${topic}`.
  const totalsByMode = useMemo<Record<ModeKey, number>>(() => {
    const acc: Record<ModeKey, number> = {
      order: 0,
      flirt: 0,
      work: 0,
      daily: 0,
      banter: 0,
    };
    for (const lesson of allLessons) {
      const dot = lesson.skill_id.indexOf(".");
      if (dot <= 0) continue;
      const mode = lesson.skill_id.slice(0, dot) as ModeKey;
      if (mode in acc) acc[mode] += 1;
    }
    return acc;
  }, []);

  // Build row data for each mode. scenes_done comes from mode fluency tracking;
  // fall back to counting completed lesson IDs by mode when fluency hasn't been
  // bumped yet (defensive — first-run users may have lesson completions but no
  // scene runs).
  const rows = useMemo<ModeRowData[]>(() => {
    return MODES.map((desc) => {
      const fluency = fluencyMap[desc.key];
      let scenesDone = fluency?.scenes_done ?? 0;
      if (scenesDone === 0 && completedIds.size > 0) {
        let count = 0;
        for (const id of completedIds) {
          // Lesson IDs follow `{mode}.{topic}.{x}.{y}` (e.g. "order.cafe.1.1").
          if (id.startsWith(`${desc.key}.`)) count += 1;
        }
        scenesDone = count;
      }
      return {
        desc,
        score: fluency?.score ?? 0,
        scenesDone,
        scenesTotal: totalsByMode[desc.key],
      };
    });
  }, [fluencyMap, completedIds, totalsByMode]);

  // Totals for the hero card. Sum scenes_done across all modes vs sum of totals.
  const totalScenesDone = rows.reduce((s, r) => s + r.scenesDone, 0);
  const totalScenes = rows.reduce((s, r) => s + r.scenesTotal, 0);

  // Lowest-fluency mode that has scenes_done > 0 (skip 0-progress modes — they
  // haven't been tried; calling them "weakest" would be misleading).
  const weakest = useMemo(() => {
    const candidates = rows.filter((r) => r.scenesDone > 0);
    if (candidates.length === 0) return null;
    return candidates.reduce((min, r) => (r.score < min.score ? r : min));
  }, [rows]);

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.title}>Akıcılığım</Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero — total scenes completed */}
        <View style={styles.hero}>
          <Text style={styles.heroLabel}>Tamamlanan sahne</Text>
          <View style={styles.heroValueRow}>
            <Text style={styles.heroValue}>{totalScenesDone}</Text>
            <Text style={styles.heroDenominator}> / {totalScenes}</Text>
          </View>
          <Text style={styles.heroSub}>sahne</Text>
        </View>

        {/* Mode rows */}
        <View style={styles.modeList}>
          {rows.map((row) => (
            <ModeRow
              key={row.desc.key}
              row={row}
              onPress={() => router.push("/feed")}
            />
          ))}
        </View>

        {/* Weakest mode callout */}
        {loaded && weakest && (
          <View style={styles.calloutCard}>
            <Text style={styles.calloutLabel}>Odaklanılacak alan</Text>
            <View style={styles.calloutRow}>
              <Text style={styles.calloutEmoji}>{weakest.desc.emoji}</Text>
              <Text style={styles.calloutMode}>{weakest.desc.label}</Text>
              <Text style={styles.calloutPct}>
                {Math.round(weakest.score * 100)}%
              </Text>
            </View>
            <Text style={styles.calloutHint}>
              Bu alanda daha fazla pratik, akıcılığını yükseltecek.
            </Text>
          </View>
        )}

        {loaded && !weakest && (
          <View style={styles.calloutCard}>
            <Text style={styles.calloutLabel}>Henüz başlamadın</Text>
            <Text style={styles.calloutHint}>
              İlk sahneni tamamla, burası akıcılığını gösterir.
            </Text>
          </View>
        )}

        {/* CTA */}
        <Pressable
          style={styles.cta}
          onPress={() => router.push("/feed")}
          accessibilityRole="button"
        >
          <Text style={styles.ctaText}>Pratiğe başla</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

function ModeRow({
  row,
  onPress,
}: {
  row: ModeRowData;
  onPress: () => void;
}) {
  const pct = Math.round(row.score * 100);
  const fillColor =
    row.desc.accent === "yellow" ? tokens.brand.primary : tokens.brand.tertiary;
  // Show a hairline of fill even at 0% so the bar reads as "empty" not "broken".
  const fillWidthPct = Math.max(0, Math.min(100, row.score * 100));

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
      accessibilityRole="button"
      accessibilityLabel={`${row.desc.label} modu, akıcılık yüzde ${pct}, ${row.scenesDone} bölü ${row.scenesTotal} sahne`}
    >
      <View style={styles.rowHeader}>
        <Text style={styles.rowEmoji}>{row.desc.emoji}</Text>
        <Text style={styles.rowLabel}>{row.desc.label}</Text>
        <Text
          style={[
            styles.rowPct,
            { color: row.desc.accent === "yellow" ? tokens.text.primary : tokens.brand.tertiary },
          ]}
        >
          {pct}%
        </Text>
      </View>

      <View style={styles.barTrack}>
        <View
          style={[
            styles.barFill,
            { width: `${fillWidthPct}%`, backgroundColor: fillColor },
          ]}
        />
      </View>

      <Text style={styles.rowMeta}>
        {row.scenesDone} / {row.scenesTotal} sahne
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 56,
  },
  backBtn: { width: 70 },
  backText: { color: tokens.text.secondary, fontSize: 15 },
  title: {
    fontSize: 20,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  spacer: { width: 70 },
  content: {
    padding: tokens.spacing.md,
    paddingBottom: 96,
  },

  // Hero card
  hero: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    alignItems: "center",
    marginBottom: tokens.spacing.md,
    borderWidth: 2,
    borderColor: tokens.brand.primary,
  },
  heroLabel: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  heroValueRow: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  heroValue: {
    fontSize: 56,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    lineHeight: 60,
  },
  heroDenominator: {
    fontSize: 24,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
  },
  heroSub: {
    fontSize: 13,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.semibold,
    marginTop: 2,
  },

  // Mode rows
  modeList: {
    gap: tokens.spacing.sm,
    marginBottom: tokens.spacing.md,
  },
  row: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.sm,
    paddingHorizontal: 14,
  },
  rowPressed: {
    opacity: 0.7,
  },
  rowHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  rowEmoji: {
    fontSize: 22,
    marginRight: 10,
  },
  rowLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  rowPct: {
    fontSize: 22,
    fontWeight: tokens.weight.black,
  },
  barTrack: {
    height: 10,
    backgroundColor: tokens.bg.surfaceContainerHighest,
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 6,
  },
  barFill: {
    height: "100%",
    borderRadius: 5,
  },
  rowMeta: {
    fontSize: 12,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.semibold,
  },

  // Weakest callout
  calloutCard: {
    backgroundColor: tokens.brand.tertiarySoft,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
    marginBottom: tokens.spacing.md,
  },
  calloutLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  calloutRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  calloutEmoji: {
    fontSize: 26,
    marginRight: 10,
  },
  calloutMode: {
    flex: 1,
    fontSize: 20,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  calloutPct: {
    fontSize: 20,
    fontWeight: tokens.weight.black,
    color: tokens.brand.tertiary,
  },
  calloutHint: {
    fontSize: 13,
    color: tokens.text.secondary,
    lineHeight: 18,
  },

  // CTA
  cta: {
    backgroundColor: tokens.brand.primary,
    borderRadius: tokens.radius.full,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  ctaText: {
    color: tokens.brand.onPrimary,
    fontSize: 16,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 0.3,
  },
});
