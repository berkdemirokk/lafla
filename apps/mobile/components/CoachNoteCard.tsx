// Lafla — CoachNoteCard.
//
// One transparent "observation" tile for the /coach-notes self-awareness
// dashboard. The visual language is deliberately quiet: a card with a
// thin border, generous whitespace, and a small left-side glyph that
// signals tone (neutral / concern / positive) without resorting to emoji
// or color blasts.
//
// Why a standalone component instead of an inline View per row:
// - Multiple sections (weaknesses, topics, sessions, recommendations)
//   need the same row shape. Centralising prevents drift.
// - The optional CTA + meta line have enough conditional rendering that
//   inlining would clutter the screen file.
// - Variants: "concern" rows (weaknesses) get a subtle warm-tinted left
//   border so the eye can pick them out without alarming color.
//
// Style note: this card is *informational*, not actionable bait. The CTA
// row is intentionally low-emphasis (text-link style, not a filled button)
// because the dashboard is about transparency, not conversion.

import {
  Pressable,
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import { tokens } from "../theme";

export type CoachNoteVariant = "neutral" | "concern" | "positive";

export interface CoachNoteCardProps {
  /** Short text icon like "•" / "→" / "·". Keep it adult — no emoji. */
  icon?: string;
  title: string;
  body: string;
  /** Right-aligned metadata strip, e.g. "3 kez yaptın" / "5 gün önce". */
  meta?: string;
  cta?: { label: string; onPress: () => void };
  variant?: CoachNoteVariant;
  style?: StyleProp<ViewStyle>;
}

export function CoachNoteCard({
  icon,
  title,
  body,
  meta,
  cta,
  variant = "neutral",
  style,
}: CoachNoteCardProps) {
  const accent = accentFor(variant);

  return (
    <View
      style={[
        styles.card,
        { borderLeftColor: accent.border, borderLeftWidth: 3 },
        style,
      ]}
      accessibilityRole="text"
      accessibilityLabel={`${title}. ${body}${meta ? `. ${meta}` : ""}`}
    >
      <View style={styles.headerRow}>
        <View style={styles.titleWrap}>
          {icon ? (
            <Text
              style={[styles.icon, { color: accent.icon }]}
              allowFontScaling={false}
            >
              {icon}
            </Text>
          ) : null}
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
        </View>
        {meta ? <Text style={styles.meta}>{meta}</Text> : null}
      </View>

      {body ? <Text style={styles.body}>{body}</Text> : null}

      {cta ? (
        <Pressable
          onPress={cta.onPress}
          hitSlop={8}
          style={({ pressed }) => [
            styles.ctaWrap,
            pressed && styles.ctaPressed,
          ]}
          accessibilityRole="button"
          accessibilityLabel={cta.label}
        >
          <Text style={styles.ctaText}>{cta.label} →</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

// ---------------------------------------------------------------------------
// Variants. We map each tone to a left-border + icon colour. Card body and
// typography stay constant so the row reads as a uniform "note", not a
// status pill.
// ---------------------------------------------------------------------------

function accentFor(v: CoachNoteVariant): { border: string; icon: string } {
  switch (v) {
    case "concern":
      // Warm amber, deliberately desaturated. The same shade we use for the
      // CoachAvatar error badge — keeps the system coherent.
      return { border: "#ff9f1c", icon: "#9c5d00" };
    case "positive":
      // Tertiary blue per the Cyber-Electric tokens (success colour).
      return {
        border: tokens.brand.tertiary,
        icon: tokens.brand.tertiary,
      };
    case "neutral":
    default:
      return {
        border: tokens.border.outlineVariant,
        icon: tokens.text.tertiary,
      };
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderRadius: tokens.radius.base,
    borderWidth: 1,
    borderColor: tokens.border.light,
    paddingVertical: 14,
    paddingHorizontal: 16,
    paddingLeft: 16, // left border eats the visual margin already
    marginBottom: 10,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
  },
  titleWrap: {
    flexDirection: "row",
    alignItems: "flex-start",
    flexShrink: 1,
    gap: 8,
  },
  icon: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: tokens.weight.bold,
    minWidth: 10,
  },
  title: {
    flexShrink: 1,
    fontSize: 15,
    lineHeight: 22,
    color: tokens.text.primary,
    fontWeight: tokens.weight.semibold,
    fontFamily: tokens.font.sans,
  },
  meta: {
    fontSize: 12,
    lineHeight: 18,
    color: tokens.text.tertiary,
    fontFamily: tokens.font.sans,
    fontVariant: ["tabular-nums"],
  },
  body: {
    marginTop: 4,
    fontSize: 14,
    lineHeight: 20,
    color: tokens.text.secondary,
    fontFamily: tokens.font.sans,
  },
  ctaWrap: {
    marginTop: 10,
    alignSelf: "flex-start",
  },
  ctaPressed: {
    opacity: 0.55,
  },
  ctaText: {
    fontSize: 13,
    color: tokens.brand.tertiary,
    fontWeight: tokens.weight.semibold,
    fontFamily: tokens.font.sans,
  },
});
