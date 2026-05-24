// Lafla — Scene history (geçmiş sahne + skor listesi).
//
// 2026-05-21 — Kullanıcı şikayeti: "geçmişimi göremiyorum". Profile'da
// rakamlar var (XP, streak, completed count) ama drill-down yok. Bu ekran
// son 200 sahne completion'ını gösterir, mode filtresi ile.

import { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  FlatList,
  type ListRenderItemInfo,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { tokens } from "../theme";
import {
  readHistory,
  getHistorySummary,
  type SceneHistoryEntry,
} from "../lib/scene-history";
import type { SceneMode } from "../data/scenes";

const MODE_LABEL: Record<SceneMode, string> = {
  flirt: "Flört",
  work: "İş",
  bar: "Bar",
  airport: "Havaalanı",
  daily: "Günlük",
  order: "Sipariş",
  ielts: "IELTS",
};

const MODE_EMOJI: Record<SceneMode, string> = {
  flirt: "💕",
  work: "💼",
  bar: "🍻",
  airport: "✈️",
  daily: "☕",
  order: "🍽️",
  ielts: "🎓",
};

type ModeFilter = "all" | SceneMode;

export default function HistoryScreen() {
  const router = useRouter();
  const [entries, setEntries] = useState<SceneHistoryEntry[]>([]);
  const [summary, setSummary] = useState({
    total: 0,
    thisWeek: 0,
    avgScore: 0,
    topMode: null as SceneMode | null,
  });
  const [filter, setFilter] = useState<ModeFilter>("all");

  useEffect(() => {
    (async () => {
      const [h, s] = await Promise.all([readHistory(), getHistorySummary()]);
      setEntries(h);
      setSummary(s);
    })();
  }, []);

  const filtered = useMemo(() => {
    if (filter === "all") return entries;
    return entries.filter((e) => e.mode === filter);
  }, [entries, filter]);

  // Modes present in user's history — filter chips for only relevant modes
  const availableModes = useMemo(() => {
    const set = new Set<SceneMode>();
    for (const e of entries) set.add(e.mode);
    return Array.from(set);
  }, [entries]);

  const renderItem = ({ item }: ListRenderItemInfo<SceneHistoryEntry>) => {
    const date = new Date(item.completedAt);
    const dateLabel = formatRelativeDate(date);
    const scoreColor =
      item.score >= 75
        ? tokens.brand.tertiary
        : item.score >= 50
          ? tokens.semantic.warning
          : tokens.semantic.error;
    return (
      <Pressable
        style={({ pressed }) => [
          styles.row,
          pressed && styles.rowPressed,
        ]}
        onPress={() => router.push(`/scenario/${item.lessonId}` as never)}
        accessibilityRole="button"
        accessibilityLabel={`${item.title} sahnesi, ${item.score} puan, ${dateLabel}`}
      >
        <Text style={styles.rowEmoji}>{item.emoji ?? MODE_EMOJI[item.mode]}</Text>
        <View style={styles.rowMiddle}>
          <Text style={styles.rowTitle} numberOfLines={2}>
            {item.title.replace(/\n/g, " ")}
          </Text>
          <Text style={styles.rowMeta}>
            {MODE_LABEL[item.mode]} · {dateLabel}
          </Text>
        </View>
        <View style={[styles.scorePill, { borderColor: scoreColor }]}>
          <Text style={[styles.scoreText, { color: scoreColor }]}>
            {item.score}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="light" />

      {/* Header */}
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel="Geri"
          style={styles.backBtn}
        >
          <Text style={styles.backText}>‹</Text>
        </Pressable>
        <Text style={styles.title}>Geçmiş</Text>
        <View style={styles.backBtn} />
      </View>

      {/* Summary */}
      <View style={styles.summaryRow}>
        <View style={styles.summaryCell}>
          <Text style={styles.summaryNum}>{summary.total}</Text>
          <Text style={styles.summaryLbl}>toplam</Text>
        </View>
        <View style={styles.summaryCell}>
          <Text style={styles.summaryNum}>{summary.thisWeek}</Text>
          <Text style={styles.summaryLbl}>bu hafta</Text>
        </View>
        <View style={styles.summaryCell}>
          <Text style={styles.summaryNum}>{summary.avgScore}</Text>
          <Text style={styles.summaryLbl}>ort. skor</Text>
        </View>
        <View style={styles.summaryCell}>
          <Text style={styles.summaryNum}>
            {summary.topMode ? MODE_EMOJI[summary.topMode] : "—"}
          </Text>
          <Text style={styles.summaryLbl}>en sık mod</Text>
        </View>
      </View>

      {/* Filter chips (only if user has data) */}
      {availableModes.length > 1 && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterRow}
        >
          <FilterChip
            label="Hepsi"
            active={filter === "all"}
            onPress={() => setFilter("all")}
          />
          {availableModes.map((m) => (
            <FilterChip
              key={m}
              label={`${MODE_EMOJI[m]} ${MODE_LABEL[m]}`}
              active={filter === m}
              onPress={() => setFilter(m)}
            />
          ))}
        </ScrollView>
      )}

      {/* List */}
      {filtered.length === 0 ? (
        <View style={styles.emptyWrap}>
          <Text style={styles.emptyEmoji}>📭</Text>
          <Text style={styles.emptyTitle}>Henüz bir sahne yapmadın</Text>
          <Text style={styles.emptySub}>
            Anasayfaya dön, ilk sahnene gir — sonuçlar burada birikecek.
          </Text>
        </View>
      ) : (
        <FlatList
          data={filtered}
          renderItem={renderItem}
          keyExtractor={(item, i) => `${item.lessonId}-${i}-${item.completedAt}`}
          contentContainerStyle={styles.listContent}
        />
      )}
    </SafeAreaView>
  );
}

function FilterChip({
  label,
  active,
  onPress,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.chip,
        active && styles.chipActive,
        pressed && !active && styles.chipPressed,
      ]}
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
    >
      <Text style={[styles.chipText, active && styles.chipTextActive]}>
        {label}
      </Text>
    </Pressable>
  );
}

// Türkçe relative date — "5 dk önce", "dün", "3 gün önce", "geçen hafta", etc.
function formatRelativeDate(d: Date): string {
  const diffMs = Date.now() - d.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  if (diffMin < 1) return "şimdi";
  if (diffMin < 60) return `${diffMin} dk önce`;
  const diffH = Math.floor(diffMin / 60);
  if (diffH < 24) return `${diffH} saat önce`;
  const diffD = Math.floor(diffH / 24);
  if (diffD === 1) return "dün";
  if (diffD < 7) return `${diffD} gün önce`;
  if (diffD < 30) return `${Math.floor(diffD / 7)} hafta önce`;
  // Daha eski → DD MMM
  return d.toLocaleDateString("tr-TR", { day: "numeric", month: "short" });
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  backBtn: { width: 44, height: 44, alignItems: "center", justifyContent: "center" },
  backText: {
    fontSize: 32,
    color: tokens.text.primary,
    fontWeight: tokens.weight.bold,
    marginTop: -4,
  },
  title: {
    fontSize: 18,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -0.3,
    fontFamily: tokens.font.display,
  },

  summaryRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: tokens.border.light,
  },
  summaryCell: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainer,
  },
  summaryNum: {
    fontSize: 22,
    fontWeight: tokens.weight.black,
    color: tokens.brand.primary,
    fontFamily: tokens.font.display,
    letterSpacing: -0.5,
  },
  summaryLbl: {
    fontSize: 10,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 0.6,
    marginTop: 2,
  },

  filterRow: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
    flexDirection: "row",
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: tokens.radius.full,
    borderWidth: 1,
    borderColor: tokens.border.light,
    backgroundColor: tokens.bg.surfaceContainerLow,
  },
  chipActive: {
    borderColor: tokens.brand.primary,
    backgroundColor: tokens.brand.primarySoft,
  },
  chipPressed: {
    opacity: 0.85,
  },
  chipText: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
    letterSpacing: 0.3,
  },
  chipTextActive: {
    color: tokens.brand.primary,
  },

  listContent: { paddingBottom: 24 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: tokens.border.light,
    gap: 12,
  },
  rowPressed: {
    backgroundColor: tokens.bg.surfaceContainer,
  },
  rowEmoji: {
    fontSize: 28,
    width: 36,
    textAlign: "center",
  },
  rowMiddle: {
    flex: 1,
    gap: 2,
  },
  rowTitle: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    lineHeight: 18,
    letterSpacing: -0.2,
  },
  rowMeta: {
    fontSize: 11,
    color: tokens.text.tertiary,
    letterSpacing: 0.3,
  },
  scorePill: {
    minWidth: 44,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: tokens.radius.full,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  scoreText: {
    fontSize: 14,
    fontWeight: tokens.weight.extrabold,
    fontFamily: tokens.font.display,
    letterSpacing: -0.3,
  },

  emptyWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    gap: 8,
  },
  emptyEmoji: {
    fontSize: 56,
    marginBottom: 8,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    textAlign: "center",
    letterSpacing: -0.3,
  },
  emptySub: {
    fontSize: 14,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 20,
  },
});
