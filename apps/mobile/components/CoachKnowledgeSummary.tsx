// Lafla — CoachKnowledgeSummary.
//
// Hero card for the top of the /coach-notes ("Maya'nın Notları") screen.
// Three quiet stats — hours together, topics covered, mistakes corrected —
// next to Maya's avatar. The tone is "what we've built together", not
// celebration. No big numbers, no medals, no progress bars.
//
// We import CoachAvatar defensively: in test/storybook contexts the avatar
// module may not be available, so a require-with-catch falls back to a
// pure-text monogram. This also keeps the screen renderable on devices
// where react-native-reanimated has init-time issues — the dashboard is
// the kind of screen the user opens when something feels off, so it must
// never crash itself.
//
// Layout choice: avatar on the left, three stacked stat rows on the right.
// We use a 2-column flex layout (avatar takes its intrinsic size, stats
// take the rest) so the card looks correct on phones from 360–430 dp wide.

import { StyleSheet, Text, View } from "react-native";
import { tokens } from "../theme";

export interface CoachKnowledgeSummaryProps {
  coachName: string;
  /** Total practice time across all surfaces, in hours (rounded sensibly). */
  hoursTogether: number;
  /** Number of distinct topics Maya remembers from this user. */
  topicsCovered: number;
  /** Mistakes the user has resolved (drilled to mastery). 0 is fine. */
  mistakesCorrected: number;
}

// Defensive avatar import. We try-require so a missing/broken module degrades
// to a quiet monogram circle instead of crashing the dashboard.
//
// Reanimated-backed components (CoachAvatar) sometimes fail to load in
// off-main contexts (e.g. dev menu inspectors). The user opening a self-
// awareness screen specifically wants to see their data, not a red box.
function loadCoachAvatar():
  | ((props: {
      state: "idle" | "thinking" | "speaking" | "listening" | "error";
      size: number;
      name: string;
      variant?: "primary" | "muted";
    }) => JSX.Element)
  | null {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require("./CoachAvatar");
    if (mod && typeof mod.CoachAvatar === "function") {
      return mod.CoachAvatar;
    }
    return null;
  } catch {
    return null;
  }
}

const CoachAvatar = loadCoachAvatar();

export function CoachKnowledgeSummary({
  coachName,
  hoursTogether,
  topicsCovered,
  mistakesCorrected,
}: CoachKnowledgeSummaryProps) {
  const hoursLabel = formatHoursTr(hoursTogether);
  const initial = (coachName.trim()[0] ?? "M").toUpperCase();

  return (
    <View
      style={styles.card}
      accessibilityRole="summary"
      accessibilityLabel={`${coachName} ile ${hoursLabel} birlikte çalıştınız, ${topicsCovered} konu, ${mistakesCorrected} düzeltilen hata.`}
    >
      <View style={styles.row}>
        <View style={styles.avatarSlot}>
          {CoachAvatar ? (
            <CoachAvatar state="idle" size={72} name={coachName} variant="muted" />
          ) : (
            <View style={styles.fallbackAvatar}>
              <Text style={styles.fallbackInitial} allowFontScaling={false}>
                {initial}
              </Text>
            </View>
          )}
        </View>

        <View style={styles.stats}>
          <StatRow label="birlikte çalıştık" value={hoursLabel} />
          <View style={styles.statDivider} />
          <StatRow
            label="konuyu birlikte ele aldık"
            value={String(topicsCovered)}
          />
          <View style={styles.statDivider} />
          <StatRow
            label="hatayı düzelttin"
            value={String(mistakesCorrected)}
          />
        </View>
      </View>
    </View>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.statRow}>
      <Text style={styles.statValue} numberOfLines={1} allowFontScaling={false}>
        {value}
      </Text>
      <Text style={styles.statLabel} numberOfLines={2}>
        {label}
      </Text>
    </View>
  );
}

/**
 * "12 saat", "1 saat 20 dk", "20 dk" — never show "0.3 hours". Adult tone.
 * Input is in hours (may be fractional).
 */
function formatHoursTr(hours: number): string {
  if (!Number.isFinite(hours) || hours <= 0) return "Henüz başlamadık";
  const totalMinutes = Math.round(hours * 60);
  if (totalMinutes < 60) return `${totalMinutes} dk`;
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  if (m === 0) return `${h} saat`;
  return `${h} saat ${m} dk`;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderRadius: tokens.radius.base,
    borderWidth: 1,
    borderColor: tokens.border.light,
    padding: 18,
    marginBottom: 18,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },
  avatarSlot: {
    width: 72,
    height: 72,
    alignItems: "center",
    justifyContent: "center",
  },
  fallbackAvatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderWidth: 1,
    borderColor: tokens.border.light,
    alignItems: "center",
    justifyContent: "center",
  },
  fallbackInitial: {
    fontSize: 28,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    fontFamily: tokens.font.sans,
    includeFontPadding: false,
  },
  stats: {
    flex: 1,
  },
  statRow: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 8,
    paddingVertical: 4,
  },
  statValue: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    fontFamily: tokens.font.sans,
    fontVariant: ["tabular-nums"],
    minWidth: 40,
  },
  statLabel: {
    flexShrink: 1,
    fontSize: 13,
    lineHeight: 18,
    color: tokens.text.secondary,
    fontFamily: tokens.font.sans,
  },
  statDivider: {
    height: 1,
    backgroundColor: tokens.border.light,
    marginVertical: 2,
  },
});
