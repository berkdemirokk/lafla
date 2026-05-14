// Lafla — ShareCardCarousel
//
// Inline, pickable strip of share-card thumbnails. Drop this anywhere the
// user just hit a celebratory moment (lesson complete, streak milestone,
// program completion, profile screen). Each card preview is tappable and
// routes to `/share/[template]` for the full preview + share sheet flow.
//
// Renders the existing <ShareCard/> at a small scale so the carousel is a
// faithful preview of what gets shared.
//
// Trigger points (DOCS-ONLY — do not edit those screens here):
//   1. components/LessonComplete.tsx — show after a milestone lesson.
//   2. app/streakcalendar.tsx — show on streak milestone (3/7/30/100).
//   3. app/profile.tsx — small carousel under the StatsHero, plus a quick
//      "Paylaş" pill next to the level chip.
//   4. After placement-test result — push to /share/level-up directly to
//      capture the first-level moment.

import { useEffect, useMemo, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { tokens } from "../theme";
import {
  ALL_TEMPLATES,
  getShareCardData,
  TEMPLATE_LABELS_TR,
  type ShareCardData,
  type ShareTemplate,
} from "../lib/share";
import { ShareCard, CARD_W, CARD_H } from "./ShareCard";

const PREVIEW_SCALE = 0.4; // tunable — keeps cards ~144x256 in the strip

export interface ShareCardCarouselProps {
  /** Restrict which templates appear. Default: all 5. */
  templates?: ShareTemplate[];
  /** Inline header label. Default: "Paylaş". */
  heading_tr?: string;
}

export function ShareCardCarousel({
  templates = ALL_TEMPLATES,
  heading_tr = "Paylaş",
}: ShareCardCarouselProps) {
  const router = useRouter();
  const [snapshots, setSnapshots] = useState<Record<ShareTemplate, ShareCardData | null>>(
    () => emptySnapshotMap(),
  );

  useEffect(() => {
    let cancelled = false;
    (async () => {
      // Resolve each template's data in parallel — pure local read so cheap.
      const entries = await Promise.all(
        templates.map(async (t) => {
          try {
            const d = await getShareCardData(t);
            return [t, d] as const;
          } catch {
            return [t, null] as const;
          }
        }),
      );
      if (cancelled) return;
      setSnapshots((prev) => {
        const next = { ...prev };
        for (const [t, d] of entries) next[t] = d;
        return next;
      });
    })();
    return () => {
      cancelled = true;
    };
  }, [templates]);

  const cardW = useMemo(() => CARD_W * PREVIEW_SCALE, []);
  const cardH = useMemo(() => CARD_H * PREVIEW_SCALE, []);

  return (
    <View style={styles.wrap}>
      <View style={styles.headingRow}>
        <Text style={styles.heading}>{heading_tr}</Text>
        <Text style={styles.headingHint}>Story / WhatsApp / X</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {templates.map((t) => {
          const data = snapshots[t];
          return (
            <Pressable
              key={t}
              onPress={() => router.push(`/share/${t}` as never)}
              style={({ pressed }) => [
                styles.cardSlot,
                pressed && styles.cardSlotPressed,
                { width: cardW, height: cardH },
              ]}
              accessibilityRole="button"
              accessibilityLabel={`${TEMPLATE_LABELS_TR[t]} kartını paylaş`}
            >
              {/* The capture frame must be the original 1080x1920-ish size,
                  but here we just want a thumb. We render the un-scaled card
                  inside a clipped, transform-scaled wrapper so layout still
                  reads cleanly. */}
              <View style={[styles.clip, { width: cardW, height: cardH }]}>
                {data ? (
                  <View
                    style={{
                      width: CARD_W,
                      height: CARD_H,
                      transform: [{ scale: PREVIEW_SCALE }],
                      transformOrigin: "top left" as never,
                      position: "absolute",
                      left: 0,
                      top: 0,
                    }}
                  >
                    <ShareCard data={data} />
                  </View>
                ) : (
                  <View style={styles.cardPlaceholder} />
                )}
              </View>
              <Text style={styles.cardLabel} numberOfLines={1}>
                {TEMPLATE_LABELS_TR[t]}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default ShareCardCarousel;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function emptySnapshotMap(): Record<ShareTemplate, ShareCardData | null> {
  return {
    "level-up": null,
    "weekly-wrap": null,
    "milestone": null,
    "streak-day": null,
    "course-complete": null,
  };
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  wrap: {
    marginTop: tokens.spacing.md,
    marginBottom: tokens.spacing.md,
  },
  headingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingHorizontal: tokens.spacing.md,
    marginBottom: tokens.spacing.sm,
  },
  heading: {
    fontSize: 14,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: 1.4,
    textTransform: "uppercase",
  },
  headingHint: {
    fontSize: 11,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.tertiary,
    letterSpacing: 1.1,
    textTransform: "uppercase",
  },
  scrollContent: {
    paddingHorizontal: tokens.spacing.md,
    gap: tokens.spacing.sm,
  },
  cardSlot: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  cardSlotPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  clip: {
    overflow: "hidden",
    borderRadius: 16,
    backgroundColor: "#0a0a0a",
  },
  cardPlaceholder: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
  cardLabel: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.secondary,
    letterSpacing: 0.2,
    maxWidth: CARD_W * PREVIEW_SCALE,
  },
});
