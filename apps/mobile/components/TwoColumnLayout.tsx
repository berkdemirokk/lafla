// Lafla — TwoColumnLayout
//
// Renders two children side-by-side on tablets, stacked vertically on
// phones. The collapse point is configurable via `collapseAtClass` so a
// caller can choose whether 1/3 split-view iPad should still get two
// columns (rare) or stack like a phone (common).
//
// Designed for screens like:
//   - scenario: setup phrases (left) + dialogue (right)
//   - freechat-voice: avatar/controls (left) + transcript (right)
//   - settings detail (master/detail)
//
// The component is layout-only and does not enforce a background. It also
// does not constrain max-width; pair with `ResponsiveContainer` if needed.

import type { ReactNode } from "react";
import { View, type StyleProp, type ViewStyle } from "react-native";
import { useDeviceClass, type DeviceClass } from "../lib/responsive";

export interface TwoColumnLayoutProps {
  /** Left column content (above when stacked). */
  left: ReactNode;
  /** Right column content (below when stacked). */
  right: ReactNode;
  /**
   * Ratio of the left column relative to the total. Range (0, 1).
   * E.g. `0.4` -> 40/60 split (left smaller). Default `0.4`.
   *
   * Out-of-range values are clamped to [0.2, 0.8] so neither column
   * disappears entirely.
   */
  leftRatio?: number;
  /**
   * Below (and including) this class we collapse to a stacked layout.
   * Default `phablet` — phones and phablets stack, tablets get columns.
   * Pass `phone` to keep two columns even on phablets, or `tablet` to
   * stack on small tablets too.
   */
  collapseAtClass?: DeviceClass;
  /** Horizontal gap between columns (points). Default 24. */
  gap?: number;
  /** Pass-through style for the wrapper. */
  style?: StyleProp<ViewStyle>;
  /** Pass-through style for the left column container. */
  leftStyle?: StyleProp<ViewStyle>;
  /** Pass-through style for the right column container. */
  rightStyle?: StyleProp<ViewStyle>;
}

// Order classes from smallest to largest so we can compare "is current <= threshold?".
const CLASS_ORDER: Record<DeviceClass, number> = {
  phone: 0,
  phablet: 1,
  tablet: 2,
  "tablet-large": 3,
};

function clamp(value: number, min: number, max: number): number {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

export function TwoColumnLayout({
  left,
  right,
  leftRatio = 0.4,
  collapseAtClass = "phablet",
  gap = 24,
  style,
  leftStyle,
  rightStyle,
}: TwoColumnLayoutProps) {
  const device = useDeviceClass();
  const collapsed = CLASS_ORDER[device.class] <= CLASS_ORDER[collapseAtClass];

  const ratio = clamp(leftRatio, 0.2, 0.8);

  if (collapsed) {
    return (
      <View style={[{ flex: 1 }, style]}>
        <View style={[{ marginBottom: gap }, leftStyle]}>{left}</View>
        <View style={rightStyle}>{right}</View>
      </View>
    );
  }

  return (
    <View
      style={[
        { flex: 1, flexDirection: "row", alignItems: "stretch" },
        style,
      ]}
    >
      <View style={[{ flex: ratio, marginRight: gap }, leftStyle]}>
        {left}
      </View>
      <View style={[{ flex: 1 - ratio }, rightStyle]}>{right}</View>
    </View>
  );
}
