// Cultural Intelligence — browse and read cultural tips.
// Cyber-Electric Modern: light bg, dark cards on accents, yellow primary chip.
//
// To integrate: add to _layout.tsx:
//   <Stack.Screen name="cultural" />
//   <Stack.Screen name="cultural-quiz" />

import { useCallback, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  FlatList,
  Modal,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter, useFocusEffect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { tokens } from "../theme";
import {
  CULTURAL_TIPS,
  type CulturalAxis,
  type CulturalTip,
} from "../data/cultural-tips";
import {
  getReadTips,
  markTipRead,
  findNextUnreadTip,
} from "../lib/cultural";
import { CulturalCard } from "../components/CulturalCard";

type AxisFilter = "ALL" | CulturalAxis;
type RegionFilter = "ALL" | CulturalTip["region"];

const AXIS_LABEL_TR: Record<CulturalAxis, string> = {
  directness: "Doğrudanlık",
  register: "Resmiyet",
  regional: "Bölgesel",
  humor: "Mizah",
  tipping: "Bahşiş",
  "body-language": "Beden Dili",
  "small-talk": "Küçük Sohbet",
  compliments: "İltifat",
  complaints: "Şikâyet",
  agreement: "Onay",
  time: "Zaman",
  "social-norms": "Sosyal Normlar",
};

const REGION_LABEL: Record<CulturalTip["region"], string> = {
  us: "ABD",
  uk: "İngiltere",
  au: "Avustralya",
  ca: "Kanada",
  "all-english": "Genel",
};

const REGION_FLAG: Record<CulturalTip["region"], string> = {
  us: "US",
  uk: "UK",
  au: "AU",
  ca: "CA",
  "all-english": "EN",
};

const AXIS_FILTERS: AxisFilter[] = [
  "ALL",
  "directness",
  "small-talk",
  "register",
  "humor",
  "body-language",
  "tipping",
  "compliments",
  "complaints",
  "agreement",
  "time",
  "regional",
  "social-norms",
];

const REGION_FILTERS: RegionFilter[] = [
  "ALL",
  "us",
  "uk",
  "au",
  "ca",
  "all-english",
];

export default function CulturalScreen() {
  const router = useRouter();
  const [axisFilter, setAxisFilter] = useState<AxisFilter>("ALL");
  const [regionFilter, setRegionFilter] = useState<RegionFilter>("ALL");
  const [readIds, setReadIds] = useState<Set<string>>(new Set());
  const [activeTipId, setActiveTipId] = useState<string | null>(null);

  const refreshRead = useCallback(async () => {
    const ids = await getReadTips();
    setReadIds(new Set(ids));
  }, []);

  useFocusEffect(
    useCallback(() => {
      refreshRead();
    }, [refreshRead]),
  );

  const filtered = useMemo(() => {
    return CULTURAL_TIPS.filter((t) => {
      if (axisFilter !== "ALL" && t.axis !== axisFilter) return false;
      if (regionFilter !== "ALL" && t.region !== regionFilter) return false;
      return true;
    });
  }, [axisFilter, regionFilter]);

  const activeTip = useMemo(
    () => CULTURAL_TIPS.find((t) => t.id === activeTipId) ?? null,
    [activeTipId],
  );

  const readCount = readIds.size;
  const totalCount = CULTURAL_TIPS.length;

  const handleMarkRead = useCallback(async () => {
    if (!activeTip) return;
    if (readIds.has(activeTip.id)) return;
    await markTipRead(activeTip.id);
    setReadIds((prev) => new Set([...prev, activeTip.id]));
  }, [activeTip, readIds]);

  const handleNext = useCallback(async () => {
    if (!activeTip) return;
    // Mark current as read on transition (one-tap onboarding)
    if (!readIds.has(activeTip.id)) {
      await markTipRead(activeTip.id);
    }
    const nextRead = new Set(readIds);
    nextRead.add(activeTip.id);

    const next = findNextUnreadTip(nextRead, {
      axis: axisFilter !== "ALL" ? axisFilter : undefined,
      afterId: activeTip.id,
    });

    setReadIds(nextRead);

    if (next) {
      setActiveTipId(next.id);
    } else {
      // No more unread — close.
      setActiveTipId(null);
    }
  }, [activeTip, readIds, axisFilter]);

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.title}>Kültürel Zeka</Text>
        <Pressable
          onPress={() => router.push("/cultural-quiz" as never)}
          style={styles.quizBtn}
        >
          <Text style={styles.quizBtnText}>Quiz</Text>
        </Pressable>
      </View>

      {/* Subhead */}
      <View style={styles.subhead}>
        <Text style={styles.subheadKicker}>NEW YORKER GİBİ OKU</Text>
        <Text style={styles.subheadLine}>
          Kelime değil, alttan akan anlam. {readCount}/{totalCount} kart okundu.
        </Text>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${(readCount / totalCount) * 100}%` },
            ]}
          />
        </View>
      </View>

      {/* Axis filter pills */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterRow}
      >
        {AXIS_FILTERS.map((f) => {
          const active = f === axisFilter;
          const label = f === "ALL" ? "Tümü" : AXIS_LABEL_TR[f];
          return (
            <Pressable
              key={f}
              onPress={() => setAxisFilter(f)}
              style={[styles.pill, active && styles.pillActive]}
            >
              <Text
                style={[styles.pillText, active && styles.pillTextActive]}
              >
                {label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* Region filter pills */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterRowRegion}
      >
        {REGION_FILTERS.map((f) => {
          const active = f === regionFilter;
          const label = f === "ALL" ? "Tüm Bölgeler" : REGION_LABEL[f];
          return (
            <Pressable
              key={f}
              onPress={() => setRegionFilter(f)}
              style={[styles.regionPill, active && styles.regionPillActive]}
            >
              <Text
                style={[
                  styles.regionPillText,
                  active && styles.regionPillTextActive,
                ]}
              >
                {label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* Tip list */}
      <FlatList
        data={filtered}
        keyExtractor={(t) => t.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyEmoji}>🔍</Text>
            <Text style={styles.emptyTitle}>Bu kombinasyonda kart yok</Text>
            <Text style={styles.emptyDesc}>Filtrelerden birini değiştir.</Text>
          </View>
        }
        renderItem={({ item }) => {
          const isRead = readIds.has(item.id);
          return (
            <Pressable
              onPress={() => setActiveTipId(item.id)}
              style={({ pressed }) => [
                styles.tipCard,
                pressed && styles.tipCardPressed,
              ]}
            >
              <View style={styles.tipTopRow}>
                <View style={styles.axisChipSmall}>
                  <Text style={styles.axisChipSmallText}>
                    {AXIS_LABEL_TR[item.axis]}
                  </Text>
                </View>
                <View style={styles.regionChipSmall}>
                  <Text style={styles.regionChipSmallText}>
                    {REGION_FLAG[item.region]}
                  </Text>
                </View>
                {isRead && (
                  <View style={styles.readDot}>
                    <Text style={styles.readDotText}>✓</Text>
                  </View>
                )}
              </View>

              <Text style={styles.tipTitle} numberOfLines={3}>
                {item.title_tr}
              </Text>

              <Text style={styles.tipPreview} numberOfLines={2}>
                {item.scenario_tr}
              </Text>

              <View style={styles.tipFooter}>
                <Text style={styles.tipFooterText}>
                  {isRead ? "Okundu" : "Oku →"}
                </Text>
              </View>
            </Pressable>
          );
        }}
      />

      {/* Detail modal */}
      <Modal
        animationType="slide"
        presentationStyle="pageSheet"
        visible={activeTip !== null}
        onRequestClose={() => setActiveTipId(null)}
      >
        {activeTip && (
          <SafeAreaView style={styles.modalSafe} edges={["top", "bottom"]}>
            <CulturalCard
              tip={activeTip}
              isRead={readIds.has(activeTip.id)}
              onMarkRead={handleMarkRead}
              onNext={handleNext}
              onClose={() => setActiveTipId(null)}
            />
          </SafeAreaView>
        )}
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  modalSafe: { flex: 1, backgroundColor: tokens.bg.app },
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
    letterSpacing: -0.3,
  },
  quizBtn: {
    width: 70,
    alignItems: "flex-end",
  },
  quizBtnText: {
    fontSize: 14,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.tertiary,
    letterSpacing: 0.4,
  },
  subhead: {
    paddingHorizontal: tokens.spacing.md,
    paddingBottom: tokens.spacing.sm,
  },
  subheadKicker: {
    fontSize: 11,
    fontWeight: tokens.weight.black,
    color: tokens.brand.tertiary,
    letterSpacing: 1.4,
    marginBottom: 6,
  },
  subheadLine: {
    fontSize: 14,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.medium,
    marginBottom: 10,
  },
  progressBar: {
    height: 4,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: 2,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: tokens.brand.primary,
    borderRadius: 2,
  },
  filterRow: {
    paddingHorizontal: tokens.spacing.md,
    paddingVertical: tokens.spacing.base,
    gap: 8,
  },
  filterRowRegion: {
    paddingHorizontal: tokens.spacing.md,
    paddingBottom: tokens.spacing.base,
    gap: 8,
  },
  pill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.light,
    marginRight: 8,
  },
  pillActive: {
    backgroundColor: tokens.brand.primary,
    borderColor: tokens.brand.primary,
  },
  pillText: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
    letterSpacing: 0.4,
  },
  pillTextActive: {
    color: tokens.text.onPrimary,
  },
  regionPill: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.app,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    marginRight: 8,
  },
  regionPillActive: {
    backgroundColor: tokens.brand.secondary,
    borderColor: tokens.brand.secondary,
  },
  regionPillText: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 0.4,
  },
  regionPillTextActive: {
    color: tokens.text.onSecondary,
  },
  list: {
    padding: tokens.spacing.md,
    paddingTop: 0,
    paddingBottom: 80,
    gap: tokens.spacing.sm,
  },
  tipCard: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    marginBottom: tokens.spacing.sm,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  tipCardPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
  tipTopRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: tokens.spacing.sm,
  },
  axisChipSmall: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primary,
  },
  axisChipSmallText: {
    fontSize: 10,
    fontWeight: tokens.weight.black,
    color: tokens.text.onPrimary,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  regionChipSmall: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.app,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
  },
  regionChipSmallText: {
    fontSize: 10,
    fontWeight: tokens.weight.black,
    color: tokens.text.secondary,
    letterSpacing: 0.6,
  },
  readDot: {
    marginLeft: "auto",
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: tokens.brand.tertiary,
    alignItems: "center",
    justifyContent: "center",
  },
  readDotText: {
    color: tokens.text.onTertiary,
    fontSize: 12,
    fontWeight: tokens.weight.black,
  },
  tipTitle: {
    fontSize: 17,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.3,
    lineHeight: 23,
    marginBottom: 6,
  },
  tipPreview: {
    fontSize: 13,
    color: tokens.text.secondary,
    lineHeight: 19,
    marginBottom: 10,
  },
  tipFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  tipFooterText: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
    letterSpacing: 0.4,
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: tokens.spacing.lg,
    minHeight: 280,
  },
  emptyEmoji: {
    fontSize: 56,
    marginBottom: tokens.spacing.sm,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    marginBottom: 6,
  },
  emptyDesc: {
    fontSize: 14,
    color: tokens.text.tertiary,
    textAlign: "center",
  },
});
