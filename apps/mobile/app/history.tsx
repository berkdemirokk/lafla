// Lafla — Scene history (geçmiş sahne + skor listesi).
//
// 2026-05-21 — Kullanıcı şikayeti: "geçmişimi göremiyorum". Profile'da
// rakamlar var (XP, streak, completed count) ama drill-down yok. Bu ekran
// son 200 sahne completion'ını gösterir, mode filtresi ile.

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  FlatList,
  type ListRenderItemInfo,
} from "react-native";
import { ThemedStatusBar } from "../components/ThemedStatusBar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { tokens } from "../theme";
import {
  readHistory,
  getHistorySummary,
  type SceneHistoryEntry,
} from "../lib/scene-history";
import type { SceneMode } from "../data/scenes";
import { useTranslation, type Locale } from "../lib/i18n";
import { AsyncScreenState, type AsyncScreenStatus } from "../components/AsyncScreenState";

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
  const { t, locale } = useTranslation();
  const [entries, setEntries] = useState<SceneHistoryEntry[]>([]);
  const [summary, setSummary] = useState({
    total: 0,
    thisWeek: 0,
    avgScore: 0,
    topMode: null as SceneMode | null,
  });
  const [filter, setFilter] = useState<ModeFilter>("all");
  const [status, setStatus] = useState<AsyncScreenStatus>("loading");

  const load = useCallback(async () => {
    setStatus("loading");
    try {
      const [h, s] = await Promise.all([readHistory(), getHistorySummary()]);
      setEntries(h);
      setSummary(s);
      setStatus("ready");
    } catch {
      setStatus("error");
    }
  }, []);
  useEffect(() => { void load(); }, [load]);

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
    const dateLabel = formatRelativeDate(date, locale);
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
        accessibilityLabel={t("history.scene_label", { title: item.title, score: String(item.score), date: dateLabel })}
      >
        <Text style={styles.rowEmoji}>{item.emoji ?? MODE_EMOJI[item.mode]}</Text>
        <View style={styles.rowMiddle}>
          <Text style={styles.rowTitle} numberOfLines={2}>
            {item.title.replace(/\n/g, " ")}
          </Text>
          <Text style={styles.rowMeta}>
            {t(`mode.${item.mode}`)} · {dateLabel}
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
      <ThemedStatusBar />

      {/* Header */}
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel={t("common.back")}
          style={styles.backBtn}
        >
          <Text style={styles.backText}>‹</Text>
        </Pressable>
        <Text style={styles.title}>{t("history.title")}</Text>
        <View style={styles.backBtn} />
      </View>

      {status !== "ready" ? (
        <AsyncScreenState status={status} onRetry={() => void load()} />
      ) : <>
      {/* Summary */}
      <View style={styles.summaryRow}>
        <View style={styles.summaryCell}>
          <Text style={styles.summaryNum}>{summary.total}</Text>
          <Text style={styles.summaryLbl}>{t("history.total")}</Text>
        </View>
        <View style={styles.summaryCell}>
          <Text style={styles.summaryNum}>{summary.thisWeek}</Text>
          <Text style={styles.summaryLbl}>{t("history.this_week")}</Text>
        </View>
        <View style={styles.summaryCell}>
          <Text style={styles.summaryNum}>{summary.avgScore}</Text>
          <Text style={styles.summaryLbl}>{t("history.avg_score")}</Text>
        </View>
        <View style={styles.summaryCell}>
          <Text style={styles.summaryNum}>
            {summary.topMode ? MODE_EMOJI[summary.topMode] : "—"}
          </Text>
          <Text style={styles.summaryLbl}>{t("history.top_mode")}</Text>
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
            label={t("history.all")}
            accessibilityLabel={t("history.filter_label", { filter: t("history.all") })}
            active={filter === "all"}
            onPress={() => setFilter("all")}
          />
          {availableModes.map((m) => (
            <FilterChip
              key={m}
              label={`${MODE_EMOJI[m]} ${t(`mode.${m}`)}`}
              accessibilityLabel={t("history.filter_label", { filter: t(`mode.${m}`) })}
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
          <Text style={styles.emptyTitle}>{t("history.empty_title")}</Text>
          <Text style={styles.emptySub}>{t("history.empty_body")}</Text>
        </View>
      ) : (
        <FlatList
          data={filtered}
          renderItem={renderItem}
          keyExtractor={(item, i) => `${item.lessonId}-${i}-${item.completedAt}`}
          contentContainerStyle={styles.listContent}
        />
      )}
      </>}
    </SafeAreaView>
  );
}

function FilterChip({
  label,
  accessibilityLabel,
  active,
  onPress,
}: {
  label: string;
  accessibilityLabel: string;
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
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ selected: active }}
    >
      <Text style={[styles.chipText, active && styles.chipTextActive]}>
        {label}
      </Text>
    </Pressable>
  );
}

// Türkçe relative date — "5 dk önce", "dün", "3 gün önce", "geçen hafta", etc.
function formatRelativeDate(d: Date, locale: Locale): string {
  const diffMs = Date.now() - d.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  const formatter = new Intl.RelativeTimeFormat(locale === "tr" ? "tr-TR" : "en-US", { numeric: "auto" });
  if (diffMin < 1) return formatter.format(0, "minute");
  if (diffMin < 60) return formatter.format(-diffMin, "minute");
  const diffH = Math.floor(diffMin / 60);
  if (diffH < 24) return formatter.format(-diffH, "hour");
  const diffD = Math.floor(diffH / 24);
  if (diffD < 7) return formatter.format(-diffD, "day");
  if (diffD < 30) return formatter.format(-Math.floor(diffD / 7), "week");
  return d.toLocaleDateString(locale === "tr" ? "tr-TR" : "en-US", { day: "numeric", month: "short" });
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
