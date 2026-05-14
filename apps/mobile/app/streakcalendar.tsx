// Streak calendar — past 30 days of activity heatmap + hero streak number.

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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getLocalProfile, type LocalProfile } from "../lib/local-progress";
import { tokens } from "../theme";

type DayEntry = { xp: number; lessons: number };
type DailyMap = Record<string, DayEntry>;

type Cell = {
  dateStr: string;     // YYYY-MM-DD (local)
  dayNum: number;      // 1-31
  weekday: number;     // 0=Sun ... 6=Sat
  isToday: boolean;
  lessons: number;
  xp: number;
};

const TR_WEEKDAY_LABELS = ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"];
const TR_MONTHS = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık",
];

const ACHIEVEMENTS: { threshold: number; title: string; subtitle: string }[] = [
  { threshold: 3, title: "3 gün", subtitle: "Üst üste 3 gün" },
  { threshold: 7, title: "1 hafta", subtitle: "Üst üste 7 gün" },
  { threshold: 14, title: "2 hafta", subtitle: "Üst üste 14 gün" },
  { threshold: 30, title: "1 ay", subtitle: "Üst üste 30 gün" },
];

function localDateStr(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function buildLast30Days(daily: DailyMap): Cell[] {
  const cells: Cell[] = [];
  const todayStr = localDateStr(new Date());

  // 29 days ago → today (oldest first → newest last, so today lands at bottom-right of grid)
  for (let i = 29; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = localDateStr(d);
    const entry = daily[dateStr];
    cells.push({
      dateStr,
      dayNum: d.getDate(),
      weekday: d.getDay(),
      isToday: dateStr === todayStr,
      lessons: entry?.lessons ?? 0,
      xp: entry?.xp ?? 0,
    });
  }
  return cells;
}

export default function StreakCalendarScreen() {
  const router = useRouter();
  const [profile, setProfile] = useState<LocalProfile | null>(null);
  const [daily, setDaily] = useState<DailyMap>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const lp = await getLocalProfile();
      setProfile(lp);
      try {
        const raw = await AsyncStorage.getItem("lafla.daily");
        setDaily(raw ? (JSON.parse(raw) as DailyMap) : {});
      } catch {
        setDaily({});
      }
      setLoaded(true);
    })();
  }, []);

  const cells = useMemo(() => buildLast30Days(daily), [daily]);

  const activeDays = cells.filter((c) => c.lessons > 0).length;
  const totalXp30 = cells.reduce((sum, c) => sum + c.xp, 0);

  const currentStreak = profile?.current_streak ?? 0;
  const longestStreak = profile?.longest_streak ?? 0;

  // Today's window for month label
  const now = new Date();
  const monthLabel = `${TR_MONTHS[now.getMonth()]} ${now.getFullYear()}`;

  const unlockedAchievements = ACHIEVEMENTS.filter(
    (a) => Math.max(currentStreak, longestStreak) >= a.threshold,
  );

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.title}>Aktif Günler</Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Hero streak number */}
        <View style={styles.hero}>
          <View style={styles.heroNumberRow}>
            <Text style={styles.heroNumber}>{currentStreak}</Text>
          </View>
          <Text style={styles.heroLabel}>aktif gün</Text>
          <View style={styles.heroLongestPill}>
            <Text style={styles.heroLongestText}>
              En uzun: {longestStreak} gün
            </Text>
          </View>
        </View>

        {/* Calendar grid */}
        <View style={styles.calendarCard}>
          <Text style={styles.calendarMonthLabel}>{monthLabel}</Text>
          <Text style={styles.calendarSubtitle}>Son 30 gün</Text>

          {/* Weekday header row (Pz..Ct = 7 cols) */}
          <View style={styles.weekdayHeader}>
            {TR_WEEKDAY_LABELS.map((label, idx) => (
              <Text key={idx} style={styles.weekdayLabel}>
                {label}
              </Text>
            ))}
          </View>

          {/* 30-day grid: simple 6 rows x 5 cols (oldest at top-left, today at bottom-right).
              Using 6 cols x 5 rows feels more compact. */}
          <View style={styles.grid}>
            {cells.map((cell) => {
              const hasActivity = cell.lessons > 0;
              const isToday = cell.isToday;
              const cellStyle = [
                styles.cell,
                hasActivity && styles.cellActive,
                !hasActivity && isToday && styles.cellTodayEmpty,
                !hasActivity && !isToday && styles.cellEmpty,
              ];
              const textStyle = [
                styles.cellText,
                hasActivity && styles.cellTextActive,
                !hasActivity && isToday && styles.cellTextTodayEmpty,
                !hasActivity && !isToday && styles.cellTextEmpty,
              ];
              return (
                <View key={cell.dateStr} style={cellStyle}>
                  <Text style={textStyle}>{cell.dayNum}</Text>
                </View>
              );
            })}
          </View>

          {/* Legend */}
          <View style={styles.legend}>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, styles.cellActive]} />
              <Text style={styles.legendText}>Pratik</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, styles.cellTodayEmpty]} />
              <Text style={styles.legendText}>Bugün</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, styles.cellEmpty]} />
              <Text style={styles.legendText}>Boş</Text>
            </View>
          </View>
        </View>

        {/* Stat row */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>
              {activeDays}
              <Text style={styles.statValueDenom}> / 30</Text>
            </Text>
            <Text style={styles.statLabel}>gün pratik</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={[styles.statValue, { color: tokens.brand.tertiary }]}>
              {totalXp30}
            </Text>
            <Text style={styles.statLabel}>Son 30 gün puan</Text>
          </View>
        </View>

        {/* Achievement teasers */}
        <View style={styles.achievementsSection}>
          <Text style={styles.sectionLabel}>KİLOMETRE TAŞLARI</Text>
          <View style={styles.achievementsGrid}>
            {ACHIEVEMENTS.map((a) => {
              const reached = Math.max(currentStreak, longestStreak) >= a.threshold;
              return (
                <View
                  key={a.threshold}
                  style={[styles.achCard, !reached && styles.achCardLocked]}
                >
                  <Text
                    style={[styles.achTitle, !reached && styles.achTitleLocked]}
                  >
                    {a.title}
                  </Text>
                  <Text style={styles.achSubtitle}>{a.subtitle}</Text>
                </View>
              );
            })}
          </View>
        </View>

        {/* CTA */}
        <Pressable
          style={styles.cta}
          onPress={() => router.push("/feed" as never)}
        >
          <Text style={styles.ctaText}>Bugünkü pratiğe başla</Text>
        </Pressable>

        {loaded && unlockedAchievements.length === 0 && currentStreak === 0 && (
          <Text style={styles.emptyHint}>
            İlk dersini tamamla, seri burada görünür.
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const CELL_GAP = 8;
const GRID_COLS = 6;
// 6 cells per row with 8pt gaps between them. We use flex on each cell so
// they share row width evenly regardless of container width.

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

  // Hero
  hero: {
    alignItems: "center",
    paddingVertical: tokens.spacing.lg,
    marginBottom: tokens.spacing.md,
  },
  heroNumberRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  heroNumber: {
    fontSize: 96,
    fontWeight: tokens.weight.black,
    color: tokens.brand.primary,
    lineHeight: 100,
    // Subtle dark stroke for legibility on white bg
    textShadowColor: tokens.brand.secondary,
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 0,
  },
  heroLabel: {
    fontSize: 18,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    marginTop: 4,
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },
  heroLongestPill: {
    marginTop: 12,
    backgroundColor: tokens.brand.secondary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: tokens.radius.full,
  },
  heroLongestText: {
    color: tokens.brand.primary,
    fontWeight: tokens.weight.bold,
    fontSize: 13,
    letterSpacing: 0.5,
  },

  // Calendar
  calendarCard: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: 16,
    marginBottom: tokens.spacing.md,
  },
  calendarMonthLabel: {
    fontSize: 16,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  calendarSubtitle: {
    fontSize: 12,
    color: tokens.text.tertiary,
    marginTop: 2,
    marginBottom: 14,
    fontWeight: tokens.weight.semibold,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  weekdayHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingHorizontal: 2,
  },
  weekdayLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 0.5,
    width: 32,
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: CELL_GAP,
    justifyContent: "flex-start",
  },
  cell: {
    // Approx percentage that accounts for 5 gaps of 8pt across ~300pt of width.
    // Slightly under 1/6 so the gap fits cleanly with flexWrap.
    width: "15.5%",
    aspectRatio: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cellActive: {
    backgroundColor: tokens.brand.primary,
  },
  cellEmpty: {
    backgroundColor: tokens.bg.surfaceContainerHigh,
  },
  cellTodayEmpty: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: tokens.brand.primary,
  },
  cellText: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
  },
  cellTextActive: {
    color: tokens.brand.onPrimary,
  },
  cellTextEmpty: {
    color: tokens.text.tertiary,
  },
  cellTextTodayEmpty: {
    color: tokens.text.primary,
  },

  // Legend
  legend: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginTop: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  legendDot: {
    width: 14,
    height: 14,
    borderRadius: 4,
  },
  legendText: {
    fontSize: 11,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.semibold,
  },

  // Stats row
  statsRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: tokens.spacing.md,
  },
  statCard: {
    flex: 1,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    alignItems: "center",
  },
  statValue: {
    fontSize: 28,
    fontWeight: tokens.weight.black,
    color: tokens.brand.primary,
  },
  statValueDenom: {
    fontSize: 16,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.bold,
  },
  statLabel: {
    marginTop: 4,
    fontSize: 11,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.semibold,
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  // Achievements
  achievementsSection: {
    marginBottom: tokens.spacing.md,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 1.2,
    marginBottom: 10,
  },
  achievementsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  achCard: {
    flexBasis: "47%",
    flexGrow: 1,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: 14,
    alignItems: "center",
    borderWidth: 2,
    borderColor: tokens.brand.primary,
  },
  achCardLocked: {
    borderColor: tokens.border.outlineVariant,
    opacity: 0.6,
  },
  achTitle: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    marginBottom: 2,
  },
  achTitleLocked: {
    color: tokens.text.tertiary,
  },
  achSubtitle: {
    fontSize: 11,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.semibold,
  },

  // CTA
  cta: {
    backgroundColor: tokens.brand.primary,
    borderRadius: tokens.radius.full,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: tokens.spacing.base,
    shadowColor: tokens.brand.primary,
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  ctaText: {
    color: tokens.brand.onPrimary,
    fontWeight: tokens.weight.extrabold,
    fontSize: 16,
    letterSpacing: 0.3,
  },
  emptyHint: {
    textAlign: "center",
    color: tokens.text.tertiary,
    fontSize: 13,
    marginTop: tokens.spacing.md,
    fontStyle: "italic",
  },
});
