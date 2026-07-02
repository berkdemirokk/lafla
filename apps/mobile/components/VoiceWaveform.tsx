// Lafla — VoiceWaveform.
//
// A row of small vertical bars that breathe up and down to suggest audio
// activity. Two modes:
//   • Dynamic — caller passes `amplitude` (0..1) and bars scale around it
//     with a small per-bar deterministic offset so each bar reads differently.
//   • Idle    — caller omits `amplitude` and the bars loop a slow sinusoidal
//     wave. Cheap (one shared value driving all bars) and never restarts on
//     re-render.
//
// Built on react-native-reanimated v3. All work happens on the UI thread —
// `useDerivedValue` reads the driver, `useAnimatedStyle` produces the height.
// No JS-thread per-frame callbacks. Designed for 60fps even with 12 bars.
//
// Visual contract:
//   • Bars sit on a shared baseline (alignItems: "flex-end"). Heights grow
//     upward so the row feels grounded.
//   • Min/max heights are derived from `height` so consumers only have to
//     size the row.
//   • A single accent color is used; brand primary by default.
//
// This component is shared between CoachAvatar (speaking state, small inline)
// and any standalone "user is speaking" indicator.

import { useEffect } from "react";
import { StyleSheet, View, type StyleProp, type ViewStyle } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
  cancelAnimation,
  type SharedValue,
} from "react-native-reanimated";
import { tokens } from "../theme";

export interface VoiceWaveformProps {
  /**
   * Optional live amplitude in [0, 1]. When provided, bars track this value
   * (each bar varies around it). When omitted, an internal idle wave plays.
   */
  amplitude?: number;
  /** Number of bars to render. Clamped to [3, 24] for sanity. Default 5. */
  bars?: number;
  /** Total row height in px. Bars derive their min/max from this. Default 24. */
  height?: number;
  /** Bar color. Defaults to brand primary. */
  color?: string;
  /** Width of each bar. Default 3. */
  barWidth?: number;
  /** Gap between bars. Default 4. */
  gap?: number;
  /** Optional style passthrough for layout (margins etc.). */
  style?: StyleProp<ViewStyle>;
  /** A11y label override; defaults to a generic "Ses dalgası". */
  accessibilityLabel?: string;
  /** Hide purely decorative ambient waveforms from screen readers. */
  decorative?: boolean;
}

const MIN_BARS = 3;
const MAX_BARS = 24;
const IDLE_CYCLE_MS = 1200;

export function VoiceWaveform({
  amplitude,
  bars = 5,
  height = 24,
  color = tokens.brand.primary,
  barWidth = 3,
  gap = 4,
  style,
  accessibilityLabel = "Ses dalgası",
  decorative = false,
}: VoiceWaveformProps) {
  const barCount = Math.max(MIN_BARS, Math.min(MAX_BARS, Math.floor(bars)));
  const minH = Math.max(2, Math.round(height * 0.18));
  const maxH = height;

  // Single driver value in [0, 1]. In idle mode this loops; in dynamic mode
  // it follows `amplitude`. Per-bar variation is computed from the driver
  // plus a deterministic phase offset, so we never need N animated values.
  const driver = useSharedValue(0);

  useEffect(() => {
    if (amplitude === undefined) {
      // Idle: loop a smooth back-and-forth so bars breathe even in silence.
      driver.value = 0;
      driver.value = withRepeat(
        withTiming(1, {
          duration: IDLE_CYCLE_MS,
          easing: Easing.inOut(Easing.sin),
        }),
        -1,
        true,
      );
    } else {
      // Dynamic: glide toward the live value. Short duration keeps the bars
      // feeling reactive without snapping (which would look like glitching).
      const clamped = Math.max(0, Math.min(1, amplitude));
      driver.value = withTiming(clamped, {
        duration: 120,
        easing: Easing.out(Easing.quad),
      });
    }
    return () => {
      // Stop the underlying loop / transition so it doesn't keep ticking on
      // a screen the user has navigated away from.
      cancelAnimation(driver);
    };
  }, [amplitude, driver]);

  return (
    <View
      style={[styles.row, { height, gap }, style]}
      accessible={!decorative}
      accessibilityElementsHidden={decorative}
      importantForAccessibility={decorative ? "no-hide-descendants" : "auto"}
      accessibilityRole={decorative ? undefined : "image"}
      accessibilityLabel={decorative ? undefined : accessibilityLabel}
    >
      {Array.from({ length: barCount }).map((_, i) => (
        <Bar
          key={i}
          index={i}
          total={barCount}
          driver={driver}
          minH={minH}
          maxH={maxH}
          width={barWidth}
          color={color}
          dynamic={amplitude !== undefined}
        />
      ))}
    </View>
  );
}

// ---------------------------------------------------------------------------
// Individual bar — kept as a tiny child component so each `useAnimatedStyle`
// closes over a stable set of inputs (index, total). React Native logs a
// warning if you allocate `useAnimatedStyle` inside a `.map` of the parent.
// ---------------------------------------------------------------------------

interface BarProps {
  index: number;
  total: number;
  driver: SharedValue<number>;
  minH: number;
  maxH: number;
  width: number;
  color: string;
  dynamic: boolean;
}

function Bar({
  index,
  total,
  driver,
  minH,
  maxH,
  width,
  color,
  dynamic,
}: BarProps) {
  // Phase offset per bar so neighbours don't move in lockstep. Spread across
  // 2π. Center-bars get the largest amplitude in idle mode (classic EQ look).
  const phase = (index / total) * Math.PI * 2;
  const centerBias =
    1 - Math.abs(index - (total - 1) / 2) / ((total - 1) / 2 || 1); // 0..1

  const heightSV = useDerivedValue(() => {
    "worklet";
    if (dynamic) {
      // amplitude-driven mode: each bar samples a pseudo-noise around the
      // live amplitude. Cheap math, no Math.random (would re-roll every frame
      // and look like static).
      const base = driver.value;
      const wobble = 0.35 * Math.sin(phase + base * Math.PI * 4);
      const eased = Math.max(0, Math.min(1, base + wobble * base));
      return minH + (maxH - minH) * eased;
    }
    // Idle mode: shaped sinusoid. Center bars bigger, edges smaller —
    // matches what users expect a "voice waveform" to look like.
    const t = driver.value;
    const wave = (Math.sin(phase + t * Math.PI * 2) + 1) / 2; // 0..1
    const shaped = 0.3 + 0.7 * wave * (0.4 + 0.6 * centerBias);
    return minH + (maxH - minH) * shaped;
  }, [phase, centerBias, dynamic, minH, maxH]);

  const animStyle = useAnimatedStyle(() => ({
    height: heightSV.value,
  }));

  return (
    <Animated.View
      style={[
        styles.bar,
        {
          width,
          backgroundColor: color,
          borderRadius: width / 2,
        },
        animStyle,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  bar: {
    // height is animated; width/color applied inline.
  },
});
