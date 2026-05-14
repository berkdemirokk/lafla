// Lafla — ShareCard
//
// Renderable 1080x1920 portrait card for Instagram Story / WhatsApp Status.
// 5 visually distinct templates share a common dark/gradient frame with the
// Lafla wordmark and a "lafla.app" footer. The component renders at a
// scaled-down preview size and is captured at the real story resolution by
// `react-native-view-shot` via `lib/share.ts`.
//
// Designed to feel Instagram-native: high-contrast black background, neon
// yellow brand accent, big bold display type, generous whitespace, no
// chrome competing with the user's content.

import React, { forwardRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { tokens } from "../theme";
import type { ShareCardData, ShareTemplate } from "../lib/share";

// Story canvas size. We render at this exact ratio (logical pixels) and
// rely on `react-native-view-shot` to upscale to 1080x1920 on capture.
export const CARD_W = 360;
export const CARD_H = 640; // 9:16

export interface ShareCardProps {
  data: ShareCardData;
  /** Optional scale factor applied to the whole card. 1 = preview size. */
  scale?: number;
}

export const ShareCard = forwardRef<View, ShareCardProps>(function ShareCard(
  { data, scale = 1 },
  ref,
) {
  return (
    <View
      ref={ref}
      collapsable={false}
      style={[
        styles.card,
        scale !== 1 && { transform: [{ scale }] },
      ]}
    >
      {/* Stacked gradient/glow background. RN core has no gradient — we
          fake one with three layered, partially-transparent rectangles
          tinted with the brand yellow. */}
      <View style={styles.bgBase} />
      <View style={styles.bgGlowYellow} />
      <View style={styles.bgGlowYellowSoft} />

      {/* Brand mark — top-left, low-key */}
      <View style={styles.brandMark}>
        <View style={styles.brandDot} />
        <Text style={styles.brandWordmark}>LAFLA</Text>
      </View>

      {/* Body */}
      <View style={styles.body}>{renderTemplate(data)}</View>

      {/* Footer — handle + level chip */}
      <View style={styles.footer}>
        <Text style={styles.footerHandle}>lafla.app</Text>
        {data.level ? <LevelPill level={data.level} /> : null}
      </View>
    </View>
  );
});

export default ShareCard;

// ---------------------------------------------------------------------------
// Template renderers
// ---------------------------------------------------------------------------

function renderTemplate(data: ShareCardData): React.ReactNode {
  switch (data.template) {
    case "level-up":
      return <LevelUpBody data={data} />;
    case "weekly-wrap":
      return <WeeklyWrapBody data={data} />;
    case "milestone":
      return <MilestoneBody data={data} />;
    case "streak-day":
      return <StreakDayBody data={data} />;
    case "course-complete":
      return <CourseCompleteBody data={data} />;
  }
}

function LevelUpBody({ data }: { data: ShareCardData }) {
  const prev = data.previousLevel ?? "—";
  const next = data.level ?? "?";
  return (
    <View style={styles.bodyInner}>
      <Text style={styles.eyebrow}>SEVİYE ATLADIM</Text>

      <View style={styles.levelRow}>
        <Text style={styles.levelFrom}>{prev}</Text>
        <Text style={styles.levelArrow}>→</Text>
        <Text style={styles.levelTo}>{next}</Text>
      </View>

      <Text style={styles.title}>Lafla'da seviye atladım.</Text>
      <Text style={styles.subtitle}>
        İngilizce CEFR ölçeğinde bir adım yukarı.
      </Text>

      <View style={styles.spacer} />
      <Text style={styles.signature}>— {data.userName}</Text>
    </View>
  );
}

function WeeklyWrapBody({ data }: { data: ShareCardData }) {
  const s = data.stats ?? {};
  return (
    <View style={styles.bodyInner}>
      <Text style={styles.eyebrow}>BU HAFTA</Text>
      <Text style={styles.weekTitle}>Lafla haftalık özetim</Text>

      <View style={styles.statsGrid}>
        <StatTile
          value={fmtMinutes(s.practiceMinutes)}
          label="Pratik"
          accent="yellow"
        />
        <StatTile
          value={fmtNumber(s.vocabCount)}
          label="Yeni kelime"
          accent="white"
        />
        <StatTile
          value={String(s.streakDays ?? 0)}
          label="Aktif gün"
          accent="white"
        />
        <StatTile
          value={String(s.coachMinutes ?? 0)}
          label="Koç oturumu"
          accent="yellow"
        />
      </View>

      {data.customDescription_tr ? (
        <Text style={styles.weekHighlight}>{data.customDescription_tr}</Text>
      ) : null}

      <View style={styles.spacer} />
      <Text style={styles.signature}>— {data.userName}</Text>
    </View>
  );
}

function MilestoneBody({ data }: { data: ShareCardData }) {
  // Pull the most "shareable" big number — vocab beats minutes.
  const stats = data.stats ?? {};
  const big =
    (stats.vocabCount ?? 0) >= 1000
      ? fmtNumber(stats.vocabCount)
      : (stats.practiceMinutes ?? 0) >= 60
        ? `${Math.floor((stats.practiceMinutes ?? 0) / 60)}+`
        : String(stats.vocabCount ?? stats.practiceMinutes ?? 0);

  return (
    <View style={styles.bodyInner}>
      <Text style={styles.eyebrow}>KİLOMETRE TAŞI</Text>
      <Text style={styles.bigNumber} numberOfLines={1} adjustsFontSizeToFit>
        {big}
      </Text>
      <Text style={styles.title}>
        {data.customTitle_tr ?? "Yeni bir kilometre taşı"}
      </Text>
      <Text style={styles.subtitle}>Lafla ile birikiyor.</Text>

      <View style={styles.spacer} />
      <Text style={styles.signature}>— {data.userName}</Text>
    </View>
  );
}

function StreakDayBody({ data }: { data: ShareCardData }) {
  const days = data.stats?.streakDays ?? 0;
  return (
    <View style={styles.bodyInner}>
      <Text style={styles.eyebrow}>STREAK</Text>
      <Text style={styles.bigNumber} numberOfLines={1} adjustsFontSizeToFit>
        {days}
      </Text>
      <Text style={styles.title}>
        {data.customTitle_tr ?? `${days} gün aktif`}
      </Text>
      <Text style={styles.subtitle}>
        Üst üste her gün İngilizce pratiği.
      </Text>

      <View style={styles.spacer} />
      <Text style={styles.signature}>— {data.userName}</Text>
    </View>
  );
}

function CourseCompleteBody({ data }: { data: ShareCardData }) {
  return (
    <View style={styles.bodyInner}>
      <Text style={styles.eyebrow}>PROGRAM TAMAMLANDI</Text>
      <Text style={styles.programEmoji}>🎓</Text>
      <Text style={styles.title}>
        {data.customTitle_tr ?? "Programı tamamladım."}
      </Text>
      {data.customDescription_tr ? (
        <Text style={styles.subtitle} numberOfLines={3}>
          {data.customDescription_tr}
        </Text>
      ) : null}

      <View style={styles.spacer} />
      <Text style={styles.signature}>— {data.userName}</Text>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Small pieces
// ---------------------------------------------------------------------------

function LevelPill({ level }: { level: string }) {
  return (
    <View style={styles.levelPill}>
      <Text style={styles.levelPillText}>{level}</Text>
    </View>
  );
}

function StatTile({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent: "yellow" | "white";
}) {
  return (
    <View style={styles.statTile}>
      <Text
        style={[
          styles.statValue,
          accent === "yellow" && styles.statValueYellow,
        ]}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {value}
      </Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Formatters
// ---------------------------------------------------------------------------

function fmtMinutes(min?: number): string {
  if (!min || min <= 0) return "0dk";
  if (min < 60) return `${min}dk`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m === 0 ? `${h}sa` : `${h}sa ${m}`;
}

function fmtNumber(n?: number): string {
  if (n == null) return "0";
  if (n >= 1000) return n.toLocaleString("tr-TR");
  return String(n);
}

// Exposed for snapshot tests / consumers that want a sane default size.
export const CARD_ASPECT: Record<ShareTemplate, [number, number]> = {
  "level-up": [CARD_W, CARD_H],
  "weekly-wrap": [CARD_W, CARD_H],
  "milestone": [CARD_W, CARD_H],
  "streak-day": [CARD_W, CARD_H],
  "course-complete": [CARD_W, CARD_H],
};

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  card: {
    width: CARD_W,
    height: CARD_H,
    backgroundColor: "#000000",
    borderRadius: 24,
    overflow: "hidden",
    position: "relative",
  },
  bgBase: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#0a0a0a",
  },
  // Two layered "glows" to simulate a radial yellow-tint gradient.
  bgGlowYellow: {
    position: "absolute",
    width: CARD_W * 1.6,
    height: CARD_W * 1.6,
    borderRadius: CARD_W * 0.8,
    top: -CARD_W * 0.5,
    left: -CARD_W * 0.3,
    backgroundColor: tokens.brand.primary,
    opacity: 0.18,
  },
  bgGlowYellowSoft: {
    position: "absolute",
    width: CARD_W * 1.2,
    height: CARD_W * 1.2,
    borderRadius: CARD_W * 0.6,
    bottom: -CARD_W * 0.4,
    right: -CARD_W * 0.3,
    backgroundColor: tokens.brand.primary,
    opacity: 0.08,
  },

  brandMark: {
    position: "absolute",
    top: 28,
    left: 28,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  brandDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: tokens.brand.primary,
  },
  brandWordmark: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: tokens.weight.black,
    letterSpacing: 4,
  },

  body: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 80,
    paddingBottom: 72,
    justifyContent: "center",
  },
  bodyInner: {
    flex: 1,
    justifyContent: "center",
  },

  eyebrow: {
    color: tokens.brand.primary,
    fontSize: 12,
    fontWeight: tokens.weight.black,
    letterSpacing: 4,
    marginBottom: 16,
    textTransform: "uppercase",
  },
  title: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: tokens.weight.black,
    lineHeight: 38,
    letterSpacing: -0.8,
    marginTop: 12,
  },
  subtitle: {
    color: "rgba(255,255,255,0.65)",
    fontSize: 16,
    fontWeight: tokens.weight.medium,
    lineHeight: 22,
    marginTop: 12,
  },

  // Level-up
  levelRow: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 14,
    marginVertical: 8,
  },
  levelFrom: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 56,
    fontWeight: tokens.weight.black,
    letterSpacing: -2,
  },
  levelArrow: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: tokens.weight.bold,
  },
  levelTo: {
    color: tokens.brand.primary,
    fontSize: 88,
    fontWeight: tokens.weight.black,
    letterSpacing: -3,
  },

  // Weekly
  weekTitle: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: tokens.weight.black,
    letterSpacing: -0.6,
    marginBottom: 22,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  statTile: {
    flexBasis: "47%",
    flexGrow: 1,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  statValue: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: tokens.weight.black,
    letterSpacing: -0.6,
    marginBottom: 4,
  },
  statValueYellow: {
    color: tokens.brand.primary,
  },
  statLabel: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 11,
    fontWeight: tokens.weight.semibold,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  weekHighlight: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: tokens.weight.medium,
    lineHeight: 21,
    marginTop: 20,
    opacity: 0.85,
  },

  // Milestone & streak-day
  bigNumber: {
    color: tokens.brand.primary,
    fontSize: 124,
    fontWeight: tokens.weight.black,
    letterSpacing: -5,
    lineHeight: 130,
    marginVertical: 8,
  },

  // Course complete
  programEmoji: {
    fontSize: 96,
    lineHeight: 110,
    marginVertical: 4,
  },

  // Signature
  spacer: {
    flex: 1,
    minHeight: 24,
  },
  signature: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 14,
    fontWeight: tokens.weight.semibold,
    letterSpacing: 0.3,
    marginTop: 20,
  },

  // Footer
  footer: {
    position: "absolute",
    bottom: 28,
    left: 28,
    right: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerHandle: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    letterSpacing: 2,
  },
  levelPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: tokens.brand.primary,
  },
  levelPillText: {
    color: tokens.text.onPrimary,
    fontSize: 12,
    fontWeight: tokens.weight.black,
    letterSpacing: 1.2,
  },
});
