// Lafla — Kelime Defterin (vocabulary book).
//
// 2026-05-21 — Retention. Kullanıcı sahnelerden öğrendiği vocab tile'ları
// burada görür: "Bu hafta 24 kelime, toplam 87". /vocab-book route.
// Profile sayfasından erişilir.

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
  getVocabBook,
  getVocabBookSummary,
  type VocabBookEntry,
} from "../lib/vocab-book";
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

type Filter = "all" | SceneMode;

export default function VocabBookScreen() {
  const router = useRouter();
  const { t, locale } = useTranslation();
  const [entries, setEntries] = useState<VocabBookEntry[]>([]);
  const [summary, setSummary] = useState({
    total: 0,
    thisWeek: 0,
    topMode: null as SceneMode | null,
  });
  const [filter, setFilter] = useState<Filter>("all");
  const [status, setStatus] = useState<AsyncScreenStatus>("loading");

  const load = useCallback(async () => {
    setStatus("loading");
    try {
      const [b, s] = await Promise.all([getVocabBook(), getVocabBookSummary()]);
      setEntries(b);
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

  const availableModes = useMemo(() => {
    const set = new Set<SceneMode>();
    for (const e of entries) set.add(e.mode);
    return Array.from(set);
  }, [entries]);

  const renderItem = ({ item }: ListRenderItemInfo<VocabBookEntry>) => {
    const date = formatRelativeDate(new Date(item.addedAt), locale);
    return (
      <Pressable
        onPress={() => router.push(`/scenario/${item.lessonId}` as never)}
        style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
        accessibilityRole="button"
        accessibilityLabel={t("vocab_book.item_label", { word: item.en, meaning: item.tr, date })}
      >
        <View style={styles.cardHeader}>
          <Text style={styles.modeEmoji}>{MODE_EMOJI[item.mode]}</Text>
          <Text style={styles.dateLabel}>{date}</Text>
        </View>
        <Text style={styles.cardEn} numberOfLines={2}>
          {item.en}
        </Text>
        <Text style={styles.cardTr} numberOfLines={2}>
          {item.tr}
        </Text>
        {item.example && (
          <View style={styles.exampleBox}>
            <Text style={styles.exampleEn} numberOfLines={2}>
              {item.example}
            </Text>
            {item.example_tr && (
              <Text style={styles.exampleTr} numberOfLines={2}>
                {item.example_tr}
              </Text>
            )}
          </View>
        )}
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <ThemedStatusBar />

      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backBtn}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel={t("common.back")}
        >
          <Text style={styles.backText}>‹</Text>
        </Pressable>
        <Text style={styles.title}>{t("vocab_book.title")}</Text>
        <View style={styles.backBtn} />
      </View>

      {status !== "ready" ? (
        <AsyncScreenState status={status} onRetry={() => void load()} />
      ) : <>
      <View style={styles.summaryRow}>
        <View style={styles.summaryCell}>
          <Text style={styles.summaryNum}>{summary.total}</Text>
          <Text style={styles.summaryLbl}>{t("vocab_book.total")}</Text>
        </View>
        <View style={styles.summaryCell}>
          <Text style={styles.summaryNum}>{summary.thisWeek}</Text>
          <Text style={styles.summaryLbl}>{t("vocab_book.this_week")}</Text>
        </View>
        <View style={styles.summaryCell}>
          <Text style={styles.summaryNum}>
            {summary.topMode ? MODE_EMOJI[summary.topMode] : "—"}
          </Text>
          <Text style={styles.summaryLbl}>{t("vocab_book.top_mode")}</Text>
        </View>
      </View>

      {availableModes.length > 1 && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterRow}
        >
          <FilterChip
            label={t("vocab_book.all")}
            accessibilityLabel={t("vocab_book.filter_label", { filter: t("vocab_book.all") })}
            active={filter === "all"}
            onPress={() => setFilter("all")}
          />
          {availableModes.map((m) => (
            <FilterChip
              key={m}
              label={`${MODE_EMOJI[m]} ${t(`mode.${m}`)}`}
              accessibilityLabel={t("vocab_book.filter_label", { filter: t(`mode.${m}`) })}
              active={filter === m}
              onPress={() => setFilter(m)}
            />
          ))}
        </ScrollView>
      )}

      {filtered.length === 0 ? (
        <View style={styles.emptyWrap}>
          <Text style={styles.emptyEmoji}>📖</Text>
          <Text style={styles.emptyTitle}>{t("vocab_book.empty_title")}</Text>
          <Text style={styles.emptySub}>{t("vocab_book.empty_body")}</Text>
          <Pressable
            onPress={() => router.replace("/today" as never)}
            style={({ pressed }) => [
              styles.emptyCta,
              pressed && { opacity: 0.86 },
            ]}
            accessibilityRole="button"
            accessibilityLabel={t("vocab_book.go_today")}
          >
            <Text style={styles.emptyCtaText}>{t("vocab_book.go_today")}</Text>
          </Pressable>
        </View>
      ) : (
        <FlatList
          data={filtered}
          renderItem={renderItem}
          keyExtractor={(item, i) => `${item.lessonId}-${i}-${item.addedAt}`}
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
        pressed && !active && { opacity: 0.85 },
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

function formatRelativeDate(d: Date, locale: Locale): string {
  const diffMs = Date.now() - d.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  const formatter = new Intl.RelativeTimeFormat(locale === "tr" ? "tr-TR" : "en-US", { numeric: "auto" });
  if (diffMin < 60) return formatter.format(-Math.max(1, diffMin), "minute");
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
  backText: { fontSize: 32, color: tokens.text.primary, fontWeight: tokens.weight.bold, marginTop: -4 },
  title: { fontSize: 18, fontWeight: tokens.weight.black, color: tokens.text.primary, letterSpacing: -0.3, fontFamily: tokens.font.display },

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
    paddingVertical: 10,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainer,
  },
  summaryNum: {
    fontSize: 24,
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

  filterRow: { paddingHorizontal: 16, paddingVertical: 12, gap: 8, flexDirection: "row" },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: tokens.radius.full,
    borderWidth: 1,
    borderColor: tokens.border.light,
    backgroundColor: tokens.bg.surfaceContainerLow,
  },
  chipActive: { borderColor: tokens.brand.primary, backgroundColor: tokens.brand.primarySoft },
  chipText: { fontSize: 12, fontWeight: tokens.weight.bold, color: tokens.text.secondary },
  chipTextActive: { color: tokens.brand.primary },

  listContent: { paddingHorizontal: 16, paddingTop: 4, paddingBottom: 24, gap: 12 },
  card: {
    padding: 14,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    gap: 6,
    // 2026-05-23 premium polish (Faz 1) — tokens.shadow.card spread.
    // Linear/Notion tarzı floating depth.
    ...tokens.shadow.card,
  },
  cardPressed: { opacity: 0.86, transform: [{ scale: 0.99 }] },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modeEmoji: { fontSize: 20 },
  dateLabel: { fontSize: 11, color: tokens.text.tertiary, letterSpacing: 0.3 },
  cardEn: {
    fontSize: 17,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    fontFamily: tokens.font.display,
    letterSpacing: -0.3,
  },
  cardTr: {
    fontSize: 13,
    color: tokens.text.secondary,
    letterSpacing: -0.1,
  },
  exampleBox: {
    marginTop: 6,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
    gap: 3,
  },
  exampleEn: {
    fontSize: 12,
    fontStyle: "italic",
    color: tokens.text.primary,
    lineHeight: 17,
  },
  exampleTr: {
    fontSize: 11,
    color: tokens.text.tertiary,
    lineHeight: 16,
  },

  emptyWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    gap: 8,
  },
  emptyEmoji: { fontSize: 56, marginBottom: 8 },
  emptyTitle: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.3,
  },
  emptySub: {
    fontSize: 14,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 20,
  },
  emptyCta: {
    marginTop: 18,
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primary,
  },
  emptyCtaText: {
    fontSize: 14,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.onPrimary,
    letterSpacing: 0.3,
  },
});
