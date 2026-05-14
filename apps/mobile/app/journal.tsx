// Journal screen — log of what user learned today + yesterday + this week.

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
  getAllLessonState,
  type LessonStateLocal,
} from "../lib/local-progress";
import { getScenario, type Scenario } from "../lib/scenario";
import { tokens } from "../theme";

// ============================================================
// Date helpers (LOCAL timezone)
// ============================================================

function ymd(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function ymdFromIso(iso: string): string {
  // Convert an ISO string -> YYYY-MM-DD using LOCAL timezone.
  const d = new Date(iso);
  return ymd(d);
}

function startOfWeekMonday(d: Date): Date {
  // Monday = start. JS getDay(): 0=Sun..6=Sat. Convert so Mon=0..Sun=6.
  const day = (d.getDay() + 6) % 7;
  const monday = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  monday.setDate(monday.getDate() - day);
  return monday;
}

const TR_LONG_DATE = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const TR_DAY_NAME = new Intl.DateTimeFormat("tr-TR", { weekday: "long" });

const TR_SHORT_DATE = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
});

// ============================================================
// Mode -> emoji
// ============================================================

function emojiForMode(mode: string | undefined): string {
  switch (mode) {
    case "order":
      return "☕";
    case "flirt":
      return "💘";
    case "work":
      return "💼";
    case "daily":
      return "🚶";
    case "banter":
      return "🎤";
    default:
      return "📚";
  }
}

// ============================================================
// Data shape for the screen
// ============================================================

interface JournalEntry {
  lessonId: string;
  completedAt: string; // ISO
  scenario: Scenario | null;
  emoji: string;
  title: string;
  keyPhraseEn: string | null;
  keyPhraseTr: string | null;
  descriptionFallback: string | null;
}

interface DateGroup {
  dateStr: string; // YYYY-MM-DD
  date: Date;
  entries: JournalEntry[];
}

function buildEntry(state: LessonStateLocal): JournalEntry | null {
  if (!state.completed_at) return null;
  const scenario = getScenario(state.lesson_id);
  const emoji = emojiForMode(scenario?.mode);
  const title = scenario?.title ?? state.lesson_id;
  const setup0 = scenario?.setup?.[0];
  const keyPhraseEn = setup0?.en ?? null;
  const keyPhraseTr = setup0?.tr ?? null;
  const descriptionFallback =
    !setup0 && scenario?.description
      ? scenario.description.length > 90
        ? scenario.description.slice(0, 87) + "…"
        : scenario.description
      : null;

  return {
    lessonId: state.lesson_id,
    completedAt: state.completed_at,
    scenario,
    emoji,
    title,
    keyPhraseEn,
    keyPhraseTr,
    descriptionFallback,
  };
}

// ============================================================
// Screen
// ============================================================

export default function JournalScreen() {
  const router = useRouter();
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  useEffect(() => {
    (async () => {
      const all = await getAllLessonState();
      const built: JournalEntry[] = [];
      for (const state of Object.values(all)) {
        const e = buildEntry(state);
        if (e) built.push(e);
      }
      // Newest first
      built.sort(
        (a, b) =>
          new Date(b.completedAt).getTime() -
          new Date(a.completedAt).getTime(),
      );
      setEntries(built);
      setLoaded(true);
    })();
  }, []);

  const {
    todayEntries,
    yesterdayEntries,
    weekGroups,
    todayStr,
    yesterdayStr,
    todayLabel,
    yesterdayLabel,
    weekCount,
    lastWeekCount,
  } = useMemo(() => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const todayKey = ymd(today);
    const yesterdayKey = ymd(yesterday);

    const weekStart = startOfWeekMonday(today);
    const lastWeekStart = new Date(weekStart);
    lastWeekStart.setDate(lastWeekStart.getDate() - 7);

    const todayBucket: JournalEntry[] = [];
    const yesterdayBucket: JournalEntry[] = [];
    const weekBuckets = new Map<string, JournalEntry[]>();
    let weekTotal = 0;
    let lastWeekTotal = 0;

    for (const e of entries) {
      const key = ymdFromIso(e.completedAt);
      const t = new Date(e.completedAt).getTime();

      if (key === todayKey) todayBucket.push(e);
      if (key === yesterdayKey) yesterdayBucket.push(e);

      if (t >= weekStart.getTime() && t < today.getTime() + 86400000) {
        weekTotal++;
        // exclude today + yesterday from grouped "this week" listing
        if (key !== todayKey && key !== yesterdayKey) {
          const arr = weekBuckets.get(key) ?? [];
          arr.push(e);
          weekBuckets.set(key, arr);
        }
      } else if (
        t >= lastWeekStart.getTime() &&
        t < weekStart.getTime()
      ) {
        lastWeekTotal++;
      }
    }

    const groups: DateGroup[] = Array.from(weekBuckets.entries())
      .map(([dateStr, items]) => {
        const [y, m, d] = dateStr.split("-").map(Number);
        return {
          dateStr,
          date: new Date(y, (m ?? 1) - 1, d ?? 1),
          entries: items,
        };
      })
      .sort((a, b) => b.date.getTime() - a.date.getTime());

    return {
      todayEntries: todayBucket,
      yesterdayEntries: yesterdayBucket,
      weekGroups: groups,
      todayStr: todayKey,
      yesterdayStr: yesterdayKey,
      todayLabel: TR_LONG_DATE.format(today),
      yesterdayLabel: TR_LONG_DATE.format(yesterday),
      weekCount: weekTotal,
      lastWeekCount: lastWeekTotal,
    };
  }, [entries]);

  const toggle = (key: string) =>
    setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }));

  const isCollapsed = (key: string) => collapsed[key] === true;

  const weekDelta = weekCount - lastWeekCount;
  const hasAnyHistory = lastWeekCount > 0 || weekCount > 0;

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.title}>Günlük</Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Stats pills */}
        <View style={styles.pillRow}>
          <View style={[styles.pill, styles.pillYellow]}>
            <Text style={styles.pillValue}>{todayEntries.length}</Text>
            <Text style={styles.pillLabel}>
              Bugün {todayEntries.length === 1 ? "sahne" : "sahne"}
            </Text>
          </View>
          <View style={[styles.pill, styles.pillBlue]}>
            <Text style={[styles.pillValue, styles.pillValueBlue]}>
              {weekCount}
            </Text>
            <Text style={[styles.pillLabel, styles.pillLabelBlue]}>
              Bu hafta sahne
            </Text>
          </View>
        </View>

        {/* Last-week comparison */}
        {hasAnyHistory && lastWeekCount > 0 && (
          <View style={styles.compareRow}>
            <Text style={styles.compareText}>
              Geçen hafta{" "}
              <Text
                style={[
                  styles.compareDelta,
                  {
                    color:
                      weekDelta >= 0
                        ? tokens.brand.tertiary
                        : tokens.semantic.error,
                  },
                ]}
              >
                {weekDelta >= 0 ? `+${weekDelta}` : `${weekDelta}`}
              </Text>
            </Text>
          </View>
        )}

        {/* TODAY */}
        <Section
          label={`Bugün, ${todayLabel}`}
          count={todayEntries.length}
          collapsed={isCollapsed("today")}
          onToggle={() => toggle("today")}
        >
          {todayEntries.length === 0 ? (
            <EmptyTodayCard onStart={() => router.push("/feed" as never)} />
          ) : (
            todayEntries.map((e) => (
              <LessonCard
                key={`today-${e.lessonId}-${e.completedAt}`}
                entry={e}
                onPress={() =>
                  router.push(`/preview/${e.lessonId}` as never)
                }
              />
            ))
          )}
        </Section>

        {/* YESTERDAY */}
        <Section
          label={`Dün, ${yesterdayLabel}`}
          count={yesterdayEntries.length}
          collapsed={isCollapsed("yesterday")}
          onToggle={() => toggle("yesterday")}
        >
          {yesterdayEntries.length === 0 ? (
            <EmptyStateCard text="Dün ders yapmadın." />
          ) : (
            yesterdayEntries.map((e) => (
              <LessonCard
                key={`yest-${e.lessonId}-${e.completedAt}`}
                entry={e}
                onPress={() =>
                  router.push(`/preview/${e.lessonId}` as never)
                }
              />
            ))
          )}
        </Section>

        {/* THIS WEEK (excluding today + yesterday) */}
        <Section
          label="Bu hafta"
          count={weekGroups.reduce((s, g) => s + g.entries.length, 0)}
          collapsed={isCollapsed("week")}
          onToggle={() => toggle("week")}
        >
          {loaded && weekGroups.length === 0 ? (
            <EmptyStateCard text="Bu haftanın geri kalanında henüz başka ders yok." />
          ) : (
            weekGroups.map((group) => (
              <View key={group.dateStr} style={styles.dayGroup}>
                <Text style={styles.dayHeader}>
                  {capitalize(TR_DAY_NAME.format(group.date))},{" "}
                  {TR_SHORT_DATE.format(group.date)}
                </Text>
                {group.entries.map((e) => (
                  <LessonCard
                    key={`week-${e.lessonId}-${e.completedAt}`}
                    entry={e}
                    onPress={() =>
                      router.push(`/preview/${e.lessonId}` as never)
                    }
                  />
                ))}
              </View>
            ))
          )}
        </Section>

        {/* If absolutely no data anywhere */}
        {loaded &&
          todayEntries.length === 0 &&
          yesterdayEntries.length === 0 &&
          weekGroups.length === 0 && (
            <Text style={styles.tipText}>
              Bir sahne tamamladıkça burada birikecek.
            </Text>
          )}
      </ScrollView>
    </SafeAreaView>
  );
}

function capitalize(s: string): string {
  if (!s) return s;
  return s[0]!.toLocaleUpperCase("tr-TR") + s.slice(1);
}

// ============================================================
// Subcomponents
// ============================================================

function Section({
  label,
  count,
  collapsed,
  onToggle,
  children,
}: {
  label: string;
  count: number;
  collapsed: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <View style={sectionStyles.wrap}>
      <Pressable style={sectionStyles.header} onPress={onToggle}>
        <Text style={sectionStyles.label}>{label}</Text>
        <View style={sectionStyles.right}>
          {count > 0 && (
            <View style={sectionStyles.countBadge}>
              <Text style={sectionStyles.countBadgeText}>{count}</Text>
            </View>
          )}
          <Text style={sectionStyles.chevron}>{collapsed ? "▸" : "▾"}</Text>
        </View>
      </Pressable>
      {!collapsed && <View style={sectionStyles.body}>{children}</View>}
    </View>
  );
}

function LessonCard({
  entry,
  onPress,
}: {
  entry: JournalEntry;
  onPress: () => void;
}) {
  return (
    <Pressable style={cardStyles.card} onPress={onPress}>
      <Text style={cardStyles.emoji}>{entry.emoji}</Text>
      <View style={cardStyles.body}>
        <Text style={cardStyles.title} numberOfLines={1}>
          {entry.title}
        </Text>
        {entry.keyPhraseEn && entry.keyPhraseTr ? (
          <Text style={cardStyles.phrase} numberOfLines={2}>
            <Text style={cardStyles.phraseEn}>{entry.keyPhraseEn}</Text>
            <Text style={cardStyles.phraseSep}> = </Text>
            <Text style={cardStyles.phraseTr}>{entry.keyPhraseTr}</Text>
          </Text>
        ) : entry.descriptionFallback ? (
          <Text style={cardStyles.phrase} numberOfLines={2}>
            {entry.descriptionFallback}
          </Text>
        ) : null}
      </View>
      <Text style={cardStyles.chevron}>›</Text>
    </Pressable>
  );
}

function EmptyTodayCard({ onStart }: { onStart: () => void }) {
  return (
    <View style={emptyStyles.todayCard}>
      <Text style={emptyStyles.todayText}>Bugün henüz ders yapmadın.</Text>
      <Pressable style={emptyStyles.cta} onPress={onStart}>
        <Text style={emptyStyles.ctaText}>Şimdi başla →</Text>
      </Pressable>
    </View>
  );
}

function EmptyStateCard({ text }: { text: string }) {
  return (
    <View style={emptyStyles.simple}>
      <Text style={emptyStyles.simpleText}>{text}</Text>
    </View>
  );
}

// ============================================================
// Styles
// ============================================================

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
    paddingBottom: 80,
  },
  pillRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },
  pill: {
    flex: 1,
    borderRadius: tokens.radius.base,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 2,
  },
  pillYellow: {
    backgroundColor: tokens.brand.primarySoft,
    borderColor: tokens.brand.primaryFixed,
  },
  pillBlue: {
    backgroundColor: tokens.brand.tertiarySoft,
    borderColor: tokens.brand.tertiary,
  },
  pillValue: {
    fontSize: 28,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    lineHeight: 32,
  },
  pillValueBlue: {
    color: tokens.brand.tertiary,
  },
  pillLabel: {
    fontSize: 12,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.secondary,
    textTransform: "uppercase",
    letterSpacing: 0.6,
    marginTop: 2,
  },
  pillLabelBlue: {
    color: tokens.brand.tertiary,
  },
  compareRow: {
    paddingHorizontal: 4,
    paddingBottom: 12,
  },
  compareText: {
    fontSize: 13,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.medium,
  },
  compareDelta: {
    fontWeight: tokens.weight.bold,
  },
  dayGroup: {
    marginBottom: 12,
  },
  dayHeader: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
    marginTop: 4,
    paddingHorizontal: 4,
  },
  tipText: {
    textAlign: "center",
    color: tokens.text.tertiary,
    fontSize: 13,
    marginTop: tokens.spacing.lg,
    paddingHorizontal: 24,
  },
});

const sectionStyles = StyleSheet.create({
  wrap: {
    marginBottom: tokens.spacing.md,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  label: {
    fontSize: 15,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    flex: 1,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  countBadge: {
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderRadius: tokens.radius.full,
    paddingHorizontal: 8,
    paddingVertical: 2,
    minWidth: 22,
    alignItems: "center",
  },
  countBadgeText: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
  },
  chevron: {
    fontSize: 14,
    color: tokens.text.tertiary,
    width: 16,
    textAlign: "center",
  },
  body: {
    gap: 8,
  },
});

const cardStyles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: 14,
    gap: 12,
  },
  emoji: {
    fontSize: 28,
    width: 36,
    textAlign: "center",
  },
  body: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    marginBottom: 3,
  },
  phrase: {
    fontSize: 13,
    color: tokens.text.secondary,
    lineHeight: 18,
  },
  phraseEn: {
    color: tokens.text.primary,
    fontWeight: tokens.weight.semibold,
  },
  phraseSep: {
    color: tokens.text.tertiary,
  },
  phraseTr: {
    color: tokens.text.secondary,
    fontStyle: "italic",
  },
  chevron: {
    fontSize: 22,
    color: tokens.text.tertiary,
  },
});

const emptyStyles = StyleSheet.create({
  todayCard: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: 18,
    alignItems: "center",
    gap: 12,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  todayText: {
    fontSize: 14,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.medium,
    textAlign: "center",
  },
  cta: {
    backgroundColor: tokens.brand.primary,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: tokens.radius.full,
  },
  ctaText: {
    color: tokens.brand.onPrimary,
    fontWeight: tokens.weight.bold,
    fontSize: 14,
  },
  simple: {
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderRadius: tokens.radius.base,
    padding: 14,
    alignItems: "center",
  },
  simpleText: {
    fontSize: 13,
    color: tokens.text.tertiary,
    fontStyle: "italic",
  },
});
