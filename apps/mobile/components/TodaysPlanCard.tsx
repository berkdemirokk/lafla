// Lafla — Bugünün Planı card.
// Replaces the daily quest tile with a coach-style daily prescription.
//
// Renders the active program's plan for the current day:
//   - Progress bar ("Gün 14 / 28")
//   - Today's focus headline
//   - Checklist of items (lesson, listening, coach, review, reading)
//   - Estimated total minutes
//   - Tap an item to route to its detail screen
//
// Completed items show a strikethrough and a check; tapping them re-opens the
// underlying screen so the user can revisit.

import { Pressable, Text, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { tokens } from "../theme";
import type { DailyPlan, DailyPlanItem } from "../lib/programs";

interface Props {
  plan: DailyPlan;
  programTitle?: string;
}

const ITEM_ICONS: Record<DailyPlanItem["type"], string> = {
  lesson: "📖",
  listening: "🎧",
  coach: "🗣️",
  review: "🔁",
  reading: "📰",
};

const ITEM_LABELS: Record<DailyPlanItem["type"], string> = {
  lesson: "Ders",
  listening: "Dinleme",
  coach: "Coach",
  review: "Tekrar",
  reading: "Okuma",
};

export function TodaysPlanCard({ plan, programTitle }: Props) {
  const router = useRouter();

  const completedCount = plan.items.filter((it) => it.completed).length;
  const progressPct = Math.min(
    100,
    Math.round((plan.dayNumber / plan.totalDays) * 100),
  );

  const onItemPress = (item: DailyPlanItem) => {
    switch (item.type) {
      case "lesson":
        router.push(`/lesson/${item.id}` as never);
        break;
      case "coach":
        router.push("/freechat" as never);
        break;
      case "listening":
      case "reading":
      case "review":
        // No dedicated screen yet — route to skills tree as a graceful fallback.
        router.push("/skills" as never);
        break;
    }
  };

  return (
    <View style={styles.card}>
      {/* Header — program title + day counter */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.eyebrow}>BUGÜNÜN PLANI</Text>
          {programTitle ? (
            <Text style={styles.programTitle} numberOfLines={1}>
              {programTitle}
            </Text>
          ) : null}
        </View>
        <View style={styles.dayPill}>
          <Text style={styles.dayPillText}>
            Gün {plan.dayNumber}/{plan.totalDays}
          </Text>
        </View>
      </View>

      {/* Progress bar */}
      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, { width: `${progressPct}%` }]} />
      </View>

      {/* Today's focus */}
      <Text style={styles.focus} numberOfLines={2}>
        {plan.focus_tr}
      </Text>

      {/* Items checklist */}
      <View style={styles.items}>
        {plan.items.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => onItemPress(item)}
            style={({ pressed }) => [
              styles.item,
              item.completed && styles.itemDone,
              pressed && styles.itemPressed,
            ]}
          >
            <View
              style={[styles.checkbox, item.completed && styles.checkboxDone]}
            >
              {item.completed ? (
                <Text style={styles.checkmark}>✓</Text>
              ) : (
                <Text style={styles.itemIcon}>{ITEM_ICONS[item.type]}</Text>
              )}
            </View>
            <View style={styles.itemBody}>
              <Text style={styles.itemKind}>{ITEM_LABELS[item.type]}</Text>
              <Text
                style={[
                  styles.itemTitle,
                  item.completed && styles.itemTitleDone,
                ]}
                numberOfLines={2}
              >
                {item.title_tr}
              </Text>
            </View>
            <Text style={styles.itemMin}>{item.estimatedMinutes} dk</Text>
          </Pressable>
        ))}
      </View>

      {/* Footer — totals */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {completedCount}/{plan.items.length} tamam
        </Text>
        <Text style={styles.footerText}>~{plan.estimatedMinutes} dk</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderRadius: tokens.radius.lg,
    padding: tokens.spacing.md,
    borderWidth: 1,
    borderColor: tokens.border.light,
    gap: tokens.spacing.sm,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: tokens.spacing.sm,
  },
  headerLeft: {
    flex: 1,
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.tertiary,
    letterSpacing: 1.4,
    marginBottom: 4,
  },
  programTitle: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.3,
  },
  dayPill: {
    backgroundColor: tokens.brand.secondary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: tokens.radius.full,
  },
  dayPillText: {
    fontSize: 12,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.inverseOnSurface,
    letterSpacing: 0.5,
  },
  progressTrack: {
    height: 6,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderRadius: 3,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: tokens.brand.primary,
    borderRadius: 3,
  },
  focus: {
    fontSize: 16,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    lineHeight: 22,
    marginTop: 2,
  },
  items: {
    gap: 8,
    marginTop: 4,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderRadius: tokens.radius.base,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  itemDone: {
    opacity: 0.65,
    backgroundColor: tokens.bg.surfaceContainer,
  },
  itemPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
  checkbox: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxDone: {
    backgroundColor: tokens.brand.tertiary,
  },
  checkmark: {
    color: tokens.text.onTertiary,
    fontSize: 16,
    fontWeight: tokens.weight.extrabold,
  },
  itemIcon: {
    fontSize: 16,
  },
  itemBody: {
    flex: 1,
  },
  itemKind: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.tertiary,
    letterSpacing: 1.2,
    marginBottom: 2,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
    lineHeight: 18,
  },
  itemTitleDone: {
    textDecorationLine: "line-through",
    color: tokens.text.tertiary,
  },
  itemMin: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: tokens.spacing.sm,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
  },
  footerText: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
  },
});
