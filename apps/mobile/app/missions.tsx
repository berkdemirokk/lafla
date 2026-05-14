// Lafla — Mission Pack browser.
//
// Lists all 15 packs in `data/mission-packs.ts`, filterable by category. If a
// mission is in flight, surface it at the top as a "Devam et" card. Tapping
// any pack routes into the detail / runner screen.
//
// ROUTE — add to app/_layout.tsx:
//   <Stack.Screen name="missions" />
//   <Stack.Screen name="mission/[id]" />

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFocusEffect, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { MissionCard } from "../components/MissionCard";
import {
  MISSION_PACKS,
  getMissionPack,
  type MissionPack,
} from "../data/mission-packs";
import {
  getActiveMission,
  getMissionProgress,
  type ActiveMissionState,
  type MissionProgress,
} from "../lib/missions";
import { tokens } from "../theme";

type CategoryFilter = "all" | MissionPack["category"];

const CATEGORY_OPTIONS: Array<{ id: CategoryFilter; label: string }> = [
  { id: "all", label: "Hepsi" },
  { id: "exam-prep", label: "Sınav" },
  { id: "career", label: "Kariyer" },
  { id: "travel", label: "Seyahat" },
  { id: "social", label: "Sosyal" },
  { id: "academic", label: "Akademi" },
  { id: "general", label: "Genel" },
];

export default function MissionsScreen() {
  const router = useRouter();
  const [filter, setFilter] = useState<CategoryFilter>("all");
  const [active, setActive] = useState<ActiveMissionState | null>(null);
  const [progress, setProgress] = useState<MissionProgress>({
    done: 0,
    total: 0,
    daysLeft: 0,
  });

  // Refresh active state whenever the screen comes back into focus — the user
  // may have ticked items off in the runner.
  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      (async () => {
        const [state, prog] = await Promise.all([
          getActiveMission(),
          getMissionProgress(),
        ]);
        if (!cancelled) {
          setActive(state);
          setProgress(prog);
        }
      })();
      return () => {
        cancelled = true;
      };
    }, []),
  );

  const activePack = useMemo(
    () => (active ? getMissionPack(active.packId) : undefined),
    [active],
  );

  const filteredPacks = useMemo(() => {
    if (filter === "all") return MISSION_PACKS;
    return MISSION_PACKS.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Görev Paketleri</Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.intro}>
          Temalı sprintler — 3 ile 7 gün arası. Bir hedefe odaklan, kısa
          sürede sonuç al.
        </Text>

        {/* Active mission card (if any) */}
        {active && activePack ? (
          <View style={styles.activeBlock}>
            <Text style={styles.activeEyebrow}>DEVAM EDİYOR</Text>
            <MissionCard
              pack={activePack}
              active={progress}
              onPress={() =>
                router.push(`/mission/${activePack.id}` as never)
              }
            />
          </View>
        ) : null}

        {/* Category filter pills */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterRow}
          style={styles.filterScroll}
        >
          {CATEGORY_OPTIONS.map((opt) => {
            const isSelected = filter === opt.id;
            return (
              <Pressable
                key={opt.id}
                onPress={() => setFilter(opt.id)}
                style={[
                  styles.filterPill,
                  isSelected && styles.filterPillSelected,
                ]}
              >
                <Text
                  style={[
                    styles.filterPillText,
                    isSelected && styles.filterPillTextSelected,
                  ]}
                >
                  {opt.label}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* Browse list */}
        <View style={styles.list}>
          {filteredPacks.map((pack) => {
            // The active pack already appears at the top; don't render twice.
            if (active && pack.id === active.packId) return null;
            return (
              <MissionCard
                key={pack.id}
                pack={pack}
                onPress={() => router.push(`/mission/${pack.id}` as never)}
              />
            );
          })}
        </View>

        {filteredPacks.length === 0 ? (
          <Text style={styles.empty}>Bu kategoride paket yok.</Text>
        ) : null}

        <View style={{ height: 32 }} />
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
  backBtn: { width: 80 },
  backText: { color: tokens.text.secondary, fontSize: 15 },
  headerTitle: {
    fontSize: 20,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.3,
  },
  spacer: { width: 80 },

  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  intro: {
    fontSize: 14,
    color: tokens.text.secondary,
    lineHeight: 20,
    marginBottom: tokens.spacing.md,
  },

  activeBlock: {
    marginBottom: tokens.spacing.md,
    gap: 8,
  },
  activeEyebrow: {
    fontSize: 11,
    fontWeight: tokens.weight.black,
    color: tokens.text.tertiary,
    letterSpacing: 1.4,
  },

  filterScroll: {
    marginBottom: tokens.spacing.sm,
    marginHorizontal: -16,
  },
  filterRow: {
    paddingHorizontal: 16,
    gap: 8,
    paddingVertical: 4,
  },
  filterPill: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  filterPillSelected: {
    backgroundColor: tokens.brand.secondary,
    borderColor: tokens.brand.secondary,
  },
  filterPillText: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    letterSpacing: 0.1,
  },
  filterPillTextSelected: {
    color: tokens.text.inverseOnSurface,
  },

  list: {
    gap: 12,
  },
  empty: {
    marginTop: 24,
    textAlign: "center",
    color: tokens.text.tertiary,
    fontSize: 14,
  },
});
