// Lafla — Mission Pack browse card.
//
// Used in app/missions.tsx (pack browser). Renders a single pack in its
// "available" state: emoji, title, duration + level pill, item count, short
// description. Optional `active` flag re-styles the card for the in-flight
// mission (top-of-list summary).
//
// Adult typography (no childish gradients); brand-accent border + soft fill
// reserves the "selected" visual for the dedicated detail screen.

import { memo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { tokens } from "../theme";
import type { MissionPack } from "../data/mission-packs";

interface Props {
  pack: MissionPack;
  onPress: () => void;
  /**
   * If set, the card renders the "in-flight" variant: highlight border,
   * progress bar, days-left chip. Pass null for the default browse layout.
   */
  active?: { done: number; total: number; daysLeft: number } | null;
}

const CATEGORY_LABELS: Record<MissionPack["category"], string> = {
  "exam-prep": "Sınav",
  career: "Kariyer",
  travel: "Seyahat",
  social: "Sosyal",
  academic: "Akademi",
  general: "Genel",
};

function urgencyCopy(daysLeft: number): string {
  if (daysLeft <= 0) return "Bugün son";
  if (daysLeft === 1) return "1 gün kaldı";
  return `${daysLeft} gün kaldı`;
}

export const MissionCard = memo(function MissionCard({
  pack,
  onPress,
  active,
}: Props) {
  const isActive = !!active;
  const progressPct = isActive
    ? Math.min(100, Math.round((active.done / Math.max(1, active.total)) * 100))
    : 0;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        isActive && styles.cardActive,
        pressed && styles.cardPressed,
      ]}
      accessibilityRole="button"
      accessibilityLabel={`${pack.title_tr}, ${pack.durationDays} gün`}
    >
      <View style={styles.head}>
        <Text style={styles.emoji}>{pack.emoji}</Text>
        <View style={styles.headText}>
          <Text style={styles.title} numberOfLines={2}>
            {pack.title_tr}
          </Text>
          <View style={styles.metaRow}>
            <View style={styles.metaPill}>
              <Text style={styles.metaPillText}>{pack.durationDays} gün</Text>
            </View>
            <View style={styles.metaPill}>
              <Text style={styles.metaPillText}>{pack.cefrLevel}</Text>
            </View>
            <View style={styles.metaPill}>
              <Text style={styles.metaPillText}>
                {CATEGORY_LABELS[pack.category]}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <Text style={styles.desc} numberOfLines={2}>
        {pack.description_tr}
      </Text>

      {/* Bottom row: items count OR active progress bar */}
      {isActive ? (
        <View style={styles.activeBlock}>
          <View style={styles.progressTrack}>
            <View
              style={[styles.progressFill, { width: `${progressPct}%` }]}
            />
          </View>
          <View style={styles.activeMeta}>
            <Text style={styles.activeMetaText}>
              {active.done}/{active.total} görev
            </Text>
            <Text style={styles.urgency}>{urgencyCopy(active.daysLeft)}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.footer}>
          <Text style={styles.itemsLabel}>
            {pack.items.length} görev · {totalMinutes(pack)} dk
          </Text>
          <Text style={styles.cta}>Başlat →</Text>
        </View>
      )}
    </Pressable>
  );
});

function totalMinutes(pack: MissionPack): number {
  return pack.items.reduce((sum, it) => sum + it.estimatedMin, 0);
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    borderWidth: 1,
    borderColor: tokens.border.light,
    gap: 12,
  },
  cardActive: {
    borderWidth: 2,
    borderColor: tokens.brand.primary,
    backgroundColor: tokens.brand.primarySoft,
  },
  cardPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.995 }],
  },
  head: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  emoji: {
    fontSize: 36,
    lineHeight: 40,
  },
  headText: {
    flex: 1,
    gap: 6,
  },
  title: {
    fontSize: 17,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.3,
    lineHeight: 22,
  },
  metaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  metaPill: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.surfaceContainerHigh,
  },
  metaPillText: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.onSurfaceVariant,
    letterSpacing: 0.2,
  },
  desc: {
    fontSize: 13,
    color: tokens.text.secondary,
    lineHeight: 19,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
  },
  itemsLabel: {
    fontSize: 12,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.tertiary,
    letterSpacing: 0.2,
  },
  cta: {
    fontSize: 13,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.tertiary,
    letterSpacing: -0.1,
  },

  // Active state
  activeBlock: {
    gap: 8,
    paddingTop: 4,
  },
  progressTrack: {
    height: 6,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: tokens.brand.tertiary,
    borderRadius: tokens.radius.full,
  },
  activeMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  activeMetaText: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    letterSpacing: 0.2,
  },
  urgency: {
    fontSize: 12,
    fontWeight: tokens.weight.extrabold,
    color: tokens.semantic.error,
    letterSpacing: 0.2,
  },
});
