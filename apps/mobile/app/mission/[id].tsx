// Lafla — Mission Pack detail + runner.
//
// Two modes (same screen, route shared):
//   1) "Available" — user hasn't started this pack yet.
//      Shows pack metadata, the full item checklist (greyed), reward, and a
//      "Görevi başlat" CTA. If another mission is in flight, the CTA confirms
//      before overwriting.
//   2) "Active" — this pack is the user's current mission.
//      Same layout, but progress bar at top, items are tappable / strike-through
//      when complete, "Devam et" CTA jumps to the first incomplete item, and a
//      "Bırak" link clears the mission.
//
// ROUTE: file path resolves to /mission/:id via expo-router.

import { useCallback, useMemo, useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  useFocusEffect,
  useLocalSearchParams,
  useRouter,
} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "../../components/Button";
import {
  getMissionPack,
  packRequiredMinutes,
  type MissionItem,
  type MissionPack,
} from "../../data/mission-packs";
import {
  endMission,
  getActiveMission,
  isMissionRequiredComplete,
  markItemComplete,
  startMission,
  type ActiveMissionState,
} from "../../lib/missions";
import { tokens } from "../../theme";

const ITEM_ICONS: Record<MissionItem["type"], string> = {
  lesson: "📖",
  voip: "🎙️",
  listening: "🎧",
  reading: "📰",
  "coach-chat": "🗣️",
  drill: "🎯",
  "cultural-tip": "💡",
  "vocab-deck": "🗂️",
};

const ITEM_TYPE_LABELS: Record<MissionItem["type"], string> = {
  lesson: "Ders",
  voip: "Roleplay",
  listening: "Dinleme",
  reading: "Okuma",
  "coach-chat": "Coach",
  drill: "Drilli",
  "cultural-tip": "Kültürel ipucu",
  "vocab-deck": "Kelime",
};

function urgencyCopy(daysLeft: number): string {
  if (daysLeft <= 0) return "Bugün son";
  if (daysLeft === 1) return "1 gün kaldı";
  return `${daysLeft} gün kaldı`;
}

export default function MissionDetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id?: string }>();
  const packId = typeof params.id === "string" ? params.id : "";

  const [active, setActive] = useState<ActiveMissionState | null>(null);
  const [activeOther, setActiveOther] = useState<ActiveMissionState | null>(
    null,
  );
  const [saving, setSaving] = useState(false);

  const pack = useMemo<MissionPack | undefined>(
    () => getMissionPack(packId),
    [packId],
  );

  const refresh = useCallback(async () => {
    const state = await getActiveMission();
    if (state && state.packId === packId) {
      setActive(state);
      setActiveOther(null);
    } else {
      setActive(null);
      setActiveOther(state ?? null);
    }
  }, [packId]);

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      (async () => {
        await refresh();
        if (cancelled) return;
      })();
      return () => {
        cancelled = true;
      };
    }, [refresh]),
  );

  if (!pack) {
    return (
      <SafeAreaView style={styles.safe} edges={["top"]}>
        <View style={styles.missingWrap}>
          <Text style={styles.missingTitle}>Görev paketi bulunamadı</Text>
          <Text style={styles.missingDesc}>
            Bu paket kaldırılmış olabilir. Görev listesine geri dön.
          </Text>
          <View style={{ height: 16 }} />
          <Button label="Görev listesi" onPress={() => router.replace("/missions" as never)} />
        </View>
      </SafeAreaView>
    );
  }

  const completedSet = new Set(active?.completedItems ?? []);
  const totalItems = pack.items.length;
  const doneItems = pack.items.filter((it) => completedSet.has(it.id)).length;
  const progressPct =
    totalItems === 0 ? 0 : Math.round((doneItems / totalItems) * 100);
  const requiredComplete = active
    ? isMissionRequiredComplete(pack, active.completedItems)
    : false;

  // Days left — only meaningful for the active mission.
  const daysLeft = active
    ? Math.max(
        0,
        Math.ceil(
          (new Date(active.expectedEndAt).getTime() - Date.now()) /
            (24 * 60 * 60 * 1000),
        ),
      )
    : pack.durationDays;

  const handleStart = async () => {
    if (saving) return;
    const doStart = async () => {
      setSaving(true);
      try {
        await startMission(pack.id);
        await refresh();
      } catch {
        Alert.alert("Hata", "Görev başlatılamadı. Tekrar dene.");
      } finally {
        setSaving(false);
      }
    };

    if (activeOther) {
      const otherPack = getMissionPack(activeOther.packId);
      const otherTitle = otherPack?.title_tr ?? "Mevcut görev";
      Alert.alert(
        "Mevcut görevin var",
        `"${otherTitle}" aktif. Yeni paketi başlatırsan ilerleme sıfırlanır.`,
        [
          { text: "Vazgeç", style: "cancel" },
          {
            text: "Devam et",
            style: "destructive",
            onPress: () => {
              void doStart();
            },
          },
        ],
      );
      return;
    }
    await doStart();
  };

  const handleEnd = () => {
    Alert.alert(
      "Görevi bırak",
      `"${pack.title_tr}" görevini bırakmak istiyor musun? İlerleme silinir.`,
      [
        { text: "Vazgeç", style: "cancel" },
        {
          text: "Bırak",
          style: "destructive",
          onPress: async () => {
            await endMission();
            await refresh();
          },
        },
      ],
    );
  };

  const handleItemPress = async (item: MissionItem) => {
    if (!active) return;
    const wasDone = completedSet.has(item.id);

    // Route to the underlying content. Items that have no dedicated screen
    // yet (cultural tip, vocab deck, drill, voip, coach-chat) route to the
    // best-fit fallback so the user always sees content.
    const route = routeForItem(item);
    if (route) {
      // Optimistically mark the item done — running the underlying screen
      // doesn't yet phone home to the mission layer.
      if (!wasDone) {
        await markItemComplete(item.id);
        await refresh();
      }
      router.push(route as never);
    } else if (!wasDone) {
      // No routable screen — still let the user tick it off manually.
      await markItemComplete(item.id);
      await refresh();
    }
  };

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.headerTitle} numberOfLines={1}>
          {pack.emoji} {pack.title_tr}
        </Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero block */}
        <View style={styles.hero}>
          <View style={styles.heroRow}>
            <Text style={styles.heroEmoji}>{pack.emoji}</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.heroTitle}>{pack.title_tr}</Text>
              <Text style={styles.heroMeta}>
                {pack.durationDays} gün · {pack.cefrLevel} ·{" "}
                {packRequiredMinutes(pack)} dk
              </Text>
            </View>
          </View>
          <Text style={styles.heroDesc}>{pack.description_tr}</Text>
        </View>

        {/* Active progress block */}
        {active ? (
          <View style={styles.activeBox}>
            <View style={styles.progressTrack}>
              <View
                style={[styles.progressFill, { width: `${progressPct}%` }]}
              />
            </View>
            <View style={styles.activeMetaRow}>
              <Text style={styles.activeMetaText}>
                {doneItems}/{totalItems} görev tamam
              </Text>
              <Text style={styles.urgency}>{urgencyCopy(daysLeft)}</Text>
            </View>
            {requiredComplete ? (
              <View style={styles.rewardBox}>
                <Text style={styles.rewardEyebrow}>GÖREV TAMAM</Text>
                <Text style={styles.rewardText}>{pack.rewardMessage_tr}</Text>
              </View>
            ) : null}
          </View>
        ) : null}

        {/* Checklist */}
        <Text style={styles.sectionTitle}>Görevler</Text>
        <View style={styles.itemList}>
          {pack.items.map((item) => {
            const isDone = completedSet.has(item.id);
            return (
              <Pressable
                key={item.id}
                onPress={() => handleItemPress(item)}
                disabled={!active}
                style={({ pressed }) => [
                  styles.itemRow,
                  isDone && styles.itemRowDone,
                  pressed && active && styles.itemRowPressed,
                  !active && styles.itemRowInactive,
                ]}
              >
                <View
                  style={[styles.checkbox, isDone && styles.checkboxDone]}
                >
                  {isDone ? (
                    <Text style={styles.checkboxText}>✓</Text>
                  ) : null}
                </View>
                <Text style={styles.itemIcon}>{ITEM_ICONS[item.type]}</Text>
                <View style={styles.itemBody}>
                  <Text
                    style={[
                      styles.itemTitle,
                      isDone && styles.itemTitleDone,
                    ]}
                    numberOfLines={2}
                  >
                    {item.title_tr}
                  </Text>
                  <Text style={styles.itemMeta}>
                    {ITEM_TYPE_LABELS[item.type]} · {item.estimatedMin} dk
                    {item.required ? "" : " · bonus"}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </View>

        {/* Reward preview (always visible, hint of what's coming) */}
        {!active ? (
          <View style={styles.rewardPreview}>
            <Text style={styles.rewardEyebrow}>BİTİRİNCE</Text>
            <Text style={styles.rewardText}>{pack.rewardMessage_tr}</Text>
          </View>
        ) : null}

        <View style={{ height: 24 }} />
      </ScrollView>

      {/* CTA footer */}
      <View style={styles.footer}>
        <Button
          label={
            active
              ? requiredComplete
                ? "Görevi bitir"
                : "Devam et"
              : "Görevi başlat"
          }
          onPress={() => {
            if (!active) {
              void handleStart();
              return;
            }
            if (requiredComplete) {
              Alert.alert(
                "Görev tamam",
                pack.rewardMessage_tr,
                [
                  {
                    text: "Bitir",
                    onPress: async () => {
                      await endMission();
                      router.replace("/missions" as never);
                    },
                  },
                ],
              );
              return;
            }
            const firstUndone = pack.items.find(
              (it) => !completedSet.has(it.id),
            );
            if (firstUndone) {
              void handleItemPress(firstUndone);
            }
          }}
          disabled={saving}
          loading={saving}
          stacked
        />
        {active ? (
          <Pressable onPress={handleEnd} style={styles.endRow}>
            <Text style={styles.endText}>Bırak</Text>
          </Pressable>
        ) : null}
      </View>
    </SafeAreaView>
  );
}

// ============================================================
// Routing helpers
// ============================================================

/**
 * Best-fit route per item type. Items whose underlying screen doesn't yet
 * exist (cultural tip, vocab deck, drill) fall back to a sensible nearby
 * screen so the tap is never a dead end.
 */
function routeForItem(item: MissionItem): string | null {
  switch (item.type) {
    case "lesson":
    case "drill":
      return `/lesson/${item.refId}`;
    case "voip":
      return `/scenario/${item.refId}`;
    case "listening":
      return `/listening/${item.refId}`;
    case "reading":
      return `/reading/${item.refId}`;
    case "coach-chat":
      return "/freechat";
    case "vocab-deck":
      return `/deck/${item.refId}`;
    case "cultural-tip":
      // No dedicated screen yet — manual completion handled by caller.
      return null;
    default:
      return null;
  }
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
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.3,
  },
  spacer: { width: 80 },

  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },

  hero: {
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    gap: 10,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  heroRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  heroEmoji: { fontSize: 40 },
  heroTitle: {
    fontSize: 20,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -0.4,
  },
  heroMeta: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    marginTop: 2,
    letterSpacing: 0.2,
  },
  heroDesc: {
    fontSize: 14,
    color: tokens.text.secondary,
    lineHeight: 20,
  },

  activeBox: {
    marginTop: tokens.spacing.md,
    backgroundColor: tokens.brand.primarySoft,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    gap: 10,
    borderWidth: 2,
    borderColor: tokens.brand.primary,
  },
  progressTrack: {
    height: 8,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: tokens.brand.tertiary,
    borderRadius: tokens.radius.full,
  },
  activeMetaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  activeMetaText: {
    fontSize: 13,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: 0.2,
  },
  urgency: {
    fontSize: 13,
    fontWeight: tokens.weight.extrabold,
    color: tokens.semantic.error,
    letterSpacing: 0.2,
  },

  rewardPreview: {
    marginTop: tokens.spacing.md,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    gap: 6,
  },
  rewardBox: {
    marginTop: 4,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: tokens.brand.primaryFixed,
    gap: 6,
  },
  rewardEyebrow: {
    fontSize: 11,
    fontWeight: tokens.weight.black,
    color: tokens.text.tertiary,
    letterSpacing: 1.4,
  },
  rewardText: {
    fontSize: 14,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
    lineHeight: 20,
  },

  sectionTitle: {
    marginTop: tokens.spacing.md,
    marginBottom: 8,
    fontSize: 13,
    fontWeight: tokens.weight.black,
    color: tokens.text.tertiary,
    letterSpacing: 1.4,
  },

  itemList: {
    gap: 8,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderRadius: tokens.radius.base,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  itemRowDone: {
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderColor: tokens.border.outlineVariant,
  },
  itemRowPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.997 }],
  },
  itemRowInactive: {
    opacity: 0.6,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: tokens.border.outlineVariant,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: tokens.bg.app,
  },
  checkboxDone: {
    backgroundColor: tokens.brand.tertiary,
    borderColor: tokens.brand.tertiary,
  },
  checkboxText: {
    color: tokens.text.onTertiary,
    fontSize: 13,
    fontWeight: tokens.weight.black,
  },
  itemIcon: { fontSize: 20 },
  itemBody: { flex: 1 },
  itemTitle: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    letterSpacing: -0.1,
  },
  itemTitleDone: {
    color: tokens.text.tertiary,
    textDecorationLine: "line-through",
  },
  itemMeta: {
    fontSize: 11,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.tertiary,
    marginTop: 2,
    letterSpacing: 0.2,
  },

  footer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
    backgroundColor: tokens.bg.app,
    gap: 8,
  },
  endRow: {
    alignItems: "center",
    paddingVertical: 8,
  },
  endText: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    textDecorationLine: "underline",
  },

  missingWrap: {
    flex: 1,
    padding: tokens.spacing.md,
    justifyContent: "center",
    alignItems: "center",
  },
  missingTitle: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    marginBottom: 6,
  },
  missingDesc: {
    fontSize: 14,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 20,
  },
});
