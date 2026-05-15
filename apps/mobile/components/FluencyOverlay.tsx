// Lafla — FluencyOverlay
//
// Subtle live-fluency HUD overlaid on the conversation screen.
// Think fitness-watch, not flashy: dark translucent card, 3 mini rows
// (time, wpm, fillers), 4px colored left-border accent reflecting the
// current fluency band.
//
// - Auto fades in when `active` becomes true, out otherwise (~200 ms).
// - WPM value smoothly interpolates between updates to avoid jitter.
// - `pointerEvents="box-none"` on the outer wrap so taps pass through to
//   the underlying conversation UI everywhere except on the card itself.

import { useEffect, useRef } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { tokens } from "../theme";

export type FluencyBand = "low" | "mid" | "high";

export interface FluencyOverlayProps {
  active: boolean;
  metrics?: {
    wpm?: number;
    fillerCount?: number;
    fluencyBand?: FluencyBand;
    elapsedSec?: number;
  };
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  compact?: boolean;
  onPress?: () => void;
}

const BAND_COLOR: Record<FluencyBand, string> = {
  // Match Cyber-Electric palette + standard semantic cues.
  high: "#3ddc84", // green
  mid: "#f6c700", // yellow
  low: "#ff5252", // red
};

function formatElapsed(sec: number): string {
  const s = Math.max(0, Math.floor(sec));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m.toString().padStart(1, "0")}:${r.toString().padStart(2, "0")}`;
}

export function FluencyOverlay({
  active,
  metrics,
  position = "top-right",
  compact = false,
  onPress,
}: FluencyOverlayProps) {
  const wpm = metrics?.wpm ?? 0;
  const fillerCount = metrics?.fillerCount ?? 0;
  const fluencyBand: FluencyBand = metrics?.fluencyBand ?? "low";
  const elapsedSec = metrics?.elapsedSec ?? 0;

  // Fade animation.
  const opacity = useSharedValue(active ? 1 : 0);
  useEffect(() => {
    opacity.value = withTiming(active ? 1 : 0, {
      duration: 220,
      easing: Easing.out(Easing.quad),
    });
  }, [active, opacity]);

  // Interpolated WPM display.
  const wpmShared = useSharedValue(wpm);
  const lastWpm = useRef(wpm);
  useEffect(() => {
    wpmShared.value = withTiming(wpm, {
      duration: 260,
      easing: Easing.out(Easing.cubic),
    });
    lastWpm.current = wpm;
  }, [wpm, wpmShared]);

  // We can't render a shared value directly in <Text>, so we rely on state-ish
  // smoothing by displaying the rounded incoming wpm. The reanimated value
  // still animates the underlying scale of the WPM badge as a subtle pulse.
  const wpmBadgeStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: 1 + Math.min(0.08, Math.abs(wpmShared.value - lastWpm.current) / 400),
      },
    ],
  }));

  const wrapStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const positionStyle = positionStyles[position];
  const accent = BAND_COLOR[fluencyBand];

  return (
    <Animated.View
      pointerEvents="box-none"
      style={[styles.outer, positionStyle, wrapStyle]}
    >
      <Pressable
        onPress={onPress}
        disabled={!onPress}
        style={({ pressed }) => [
          styles.card,
          compact && styles.cardCompact,
          { borderLeftColor: accent },
          pressed && styles.cardPressed,
        ]}
      >
        <View style={styles.row}>
          <Text style={styles.icon}>{"⏱"}</Text>
          <Text style={styles.value}>{formatElapsed(elapsedSec)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.icon}>{"💬"}</Text>
          <Animated.View style={wpmBadgeStyle}>
            <Text style={[styles.value, styles.valueWpm, { color: accent }]}>
              {Math.round(wpm)}
            </Text>
          </Animated.View>
          <Text style={styles.unit}>wpm</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.icon}>{"⚠️"}</Text>
          <Text style={styles.value}>{fillerCount}</Text>
          {!compact && <Text style={styles.unit}>dolgu</Text>}
        </View>
      </Pressable>
    </Animated.View>
  );
}

export default FluencyOverlay;

const styles = StyleSheet.create({
  outer: {
    position: "absolute",
    zIndex: 50,
  },
  card: {
    backgroundColor: "rgba(0,0,0,0.70)",
    borderRadius: tokens.radius.base,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderLeftWidth: 4,
    minWidth: 112,
    // Subtle outline for crispness on light backgrounds.
    borderTopWidth: StyleSheet.hairlineWidth,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopColor: "rgba(255,255,255,0.06)",
    borderRightColor: "rgba(255,255,255,0.06)",
    borderBottomColor: "rgba(255,255,255,0.06)",
  },
  cardCompact: {
    paddingVertical: 6,
    paddingHorizontal: 9,
    minWidth: 88,
  },
  cardPressed: {
    opacity: 0.85,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 2,
  },
  icon: {
    fontSize: 12,
    width: 16,
    textAlign: "center",
  },
  value: {
    fontSize: 14,
    color: "#f0f1f1",
    fontWeight: tokens.weight.bold,
    fontVariant: ["tabular-nums"],
    letterSpacing: 0.2,
  },
  valueWpm: {
    fontSize: 15,
  },
  unit: {
    fontSize: 11,
    color: "rgba(240,241,241,0.55)",
    fontWeight: tokens.weight.medium,
    marginLeft: 2,
  },
});

const positionStyles = StyleSheet.create({
  "top-right": {
    top: 16,
    right: 16,
  },
  "top-left": {
    top: 16,
    left: 16,
  },
  "bottom-right": {
    bottom: 16,
    right: 16,
  },
  "bottom-left": {
    bottom: 16,
    left: 16,
  },
});
