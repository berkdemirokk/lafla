// Listening mode — drama listing, filtered by CEFR level.
// To integrate: add to app/_layout.tsx Stack:
//   <Stack.Screen name="listening" options={{ headerShown: false }} />
//   <Stack.Screen name="listening/[id]" options={{ headerShown: false }} />

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
import { tokens } from "../theme";
import { getCompletedListenings } from "../lib/listening";
import { hapticSelection } from "../lib/feedback";

// Defensive import — the parallel agent owns this file. If it isn't there
// yet, we fall back to a minimal local shape + an empty catalog so the screen
// still typechecks and renders an empty state. Integration fixes this.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let importedDramas: any[] = [];
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const mod = require("../data/listening-dramas");
  importedDramas = mod.LISTENING_DRAMAS ?? mod.listeningDramas ?? mod.default ?? [];
} catch {
  // TODO(integration): wire to apps/mobile/data/listening-dramas.ts once present.
  importedDramas = [];
}

// Minimal fallback type if data/listening-dramas.ts isn't loaded yet.
type LocalDrama = {
  id: string;
  emoji?: string;
  title: string;
  durationMin?: number;
  duration_min?: number;
  durationSec?: number;
  level?: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  cefrLevel?: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  description?: string;
};

type Level = "A1" | "A2" | "B1" | "B2" | "C1";
type Filter = "all" | Level;
const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "Tümü" },
  { id: "A1", label: "A1" },
  { id: "A2", label: "A2" },
  { id: "B1", label: "B1" },
  { id: "B2", label: "B2" },
  { id: "C1", label: "C1" },
];

function normaliseDrama(d: LocalDrama) {
  const minFromSec =
    typeof d.durationSec === "number"
      ? Math.max(1, Math.round(d.durationSec / 60))
      : undefined;
  return {
    id: d.id,
    emoji: d.emoji ?? "🎧",
    title: d.title,
    durationMin: d.durationMin ?? d.duration_min ?? minFromSec ?? 3,
    level: (d.level ?? d.cefrLevel ?? "A2") as Level | "C2",
    description: d.description ?? "",
  };
}

export default function ListeningScreen() {
  const router = useRouter();
  const [filter, setFilter] = useState<Filter>("all");
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  useEffect(() => {
    getCompletedListenings().then((ids) => setCompleted(new Set(ids)));
  }, []);

  const dramas = useMemo(
    () => (importedDramas as LocalDrama[]).map(normaliseDrama),
    [],
  );

  const visible = useMemo(() => {
    if (filter === "all") return dramas;
    return dramas.filter((d) => d.level === filter);
  }, [dramas, filter]);

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.title}>Listening pratiği</Text>
        <View style={styles.spacer} />
      </View>

      <Text style={styles.subtitle}>
        Çok karakterli mini sahneleri dinle, sorulara cevap ver.
      </Text>

      {/* CEFR filter pills */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterRow}
      >
        {FILTERS.map((f) => {
          const active = filter === f.id;
          return (
            <Pressable
              key={f.id}
              onPress={() => {
                hapticSelection();
                setFilter(f.id);
              }}
              style={[styles.pill, active && styles.pillActive]}
            >
              <Text
                style={[
                  styles.pillLabel,
                  active && styles.pillLabelActive,
                ]}
              >
                {f.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <ScrollView contentContainerStyle={styles.list}>
        {visible.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.emptyTitle}>Henüz drama yok</Text>
            <Text style={styles.emptyBody}>
              {dramas.length === 0
                ? "İçerik yüklenince burada görünecek."
                : "Bu seviyede drama bulunamadı. Başka bir filtre dene."}
            </Text>
          </View>
        ) : (
          visible.map((d) => {
            const isDone = completed.has(d.id);
            return (
              <Pressable
                key={d.id}
                style={({ pressed }) => [
                  styles.card,
                  pressed && styles.cardPressed,
                ]}
                onPress={() => {
                  hapticSelection();
                  router.push(`/listening/${d.id}` as never);
                }}
              >
                <View style={styles.cardTop}>
                  <Text style={styles.cardEmoji}>{d.emoji}</Text>
                  <View style={styles.cardChips}>
                    <View style={styles.levelChip}>
                      <Text style={styles.levelChipLabel}>{d.level}</Text>
                    </View>
                    <View style={styles.durChip}>
                      <Text style={styles.durChipLabel}>
                        {d.durationMin} dk
                      </Text>
                    </View>
                    {isDone && (
                      <View style={styles.doneChip}>
                        <Text style={styles.doneChipLabel}>Bitti</Text>
                      </View>
                    )}
                  </View>
                </View>
                <Text style={styles.cardTitle}>{d.title}</Text>
                {d.description ? (
                  <Text style={styles.cardDesc} numberOfLines={2}>
                    {d.description}
                  </Text>
                ) : null}
                <View style={styles.cta}>
                  <Text style={styles.ctaLabel}>BAŞLA →</Text>
                </View>
              </Pressable>
            );
          })
        )}
      </ScrollView>
    </SafeAreaView>
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
  subtitle: {
    paddingHorizontal: tokens.spacing.md,
    color: tokens.text.secondary,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: tokens.spacing.sm,
  },
  filterRow: {
    paddingHorizontal: tokens.spacing.md,
    gap: 8,
    paddingVertical: tokens.spacing.base,
  },
  pill: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1.5,
    borderColor: "transparent",
  },
  pillActive: {
    backgroundColor: tokens.brand.secondary,
    borderColor: tokens.brand.secondary,
  },
  pillLabel: {
    fontSize: 13,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.secondary,
    letterSpacing: 0.3,
  },
  pillLabelActive: {
    color: tokens.brand.primary,
  },
  list: {
    padding: tokens.spacing.md,
    paddingBottom: 80,
    gap: tokens.spacing.sm,
  },
  card: {
    backgroundColor: tokens.brand.secondary,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    gap: tokens.spacing.sm,
  },
  cardPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.99 }],
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardEmoji: { fontSize: 40 },
  cardChips: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    justifyContent: "flex-end",
    maxWidth: "70%",
  },
  levelChip: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primary,
  },
  levelChipLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.onPrimary,
    letterSpacing: 0.6,
  },
  durChip: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.inverseSurfaceLight,
  },
  durChipLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.inverseOnSurface,
  },
  doneChip: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.tertiary,
  },
  doneChipLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.onTertiary,
  },
  cardTitle: {
    fontSize: 22,
    lineHeight: 26,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.inverseOnSurface,
    letterSpacing: -0.3,
  },
  cardDesc: {
    fontSize: 14,
    lineHeight: 20,
    color: tokens.text.secondaryFixedDim,
  },
  cta: {
    alignSelf: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primary,
    marginTop: tokens.spacing.base,
  },
  ctaLabel: {
    fontSize: 13,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.onPrimary,
    letterSpacing: 1.4,
  },
  empty: {
    paddingVertical: tokens.spacing.lg,
    alignItems: "center",
    gap: 6,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  emptyBody: {
    fontSize: 14,
    color: tokens.text.secondary,
    textAlign: "center",
    paddingHorizontal: tokens.spacing.md,
  },
});
