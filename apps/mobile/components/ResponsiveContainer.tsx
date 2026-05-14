// Lafla — ResponsiveContainer
//
// Wraps a screen (or major section) so its content:
//   - has a sensible max width on tablets (lines don't run comically wide)
//   - is horizontally centered when there is leftover width
//   - has padding that scales with device class
//
// On phones it is a no-op pass-through (max width is effectively infinite),
// which means consumers can use it unconditionally without worrying about
// over-constraining phone layouts.
//
// This is layout-only — it deliberately doesn't set a background colour so
// the surrounding screen can still bleed gradients / images full-width
// while the actual content stays readable.

import type { ReactNode } from "react";
import { View, type StyleProp, type ViewStyle } from "react-native";
import {
  getMaxContentWidth,
  getPadding,
  useDeviceClass,
} from "../lib/responsive";

export type MaxWidthVariant = "narrow" | "standard" | "wide" | "full";
export type PaddingVariant = "compact" | "standard" | "spacious";

export interface ResponsiveContainerProps {
  children: ReactNode;
  /**
   * Content max-width preset:
   *   narrow    480pt  — short forms, single-column reading text
   *   standard  720pt  — default body content (matches `getMaxContentWidth`)
   *   wide      960pt  — two-column layouts, dashboards
   *   full      ∞      — disable the cap (use full window width)
   */
  maxWidth?: MaxWidthVariant;
  /**
   * Padding density. `standard` follows `getPadding(deviceClass)`. The other
   * variants scale that baseline by ~0.66 / ~1.33.
   */
  paddingVariant?: PaddingVariant;
  /**
   * Whether to horizontally center the content when window width exceeds the
   * max-width cap. Defaults to `true` for tablet device classes, `false` on
   * phones (since on phones the cap is infinite anyway, centering is a no-op
   * either way — the flag mostly exists for explicit overrides).
   */
  centered?: boolean;
  /** Pass-through style hook for the outer wrapper. */
  style?: StyleProp<ViewStyle>;
  /** Pass-through style hook for the inner (constrained) content view. */
  contentStyle?: StyleProp<ViewStyle>;
}

const MAX_WIDTH_BY_VARIANT: Record<MaxWidthVariant, number> = {
  narrow: 480,
  standard: 720,
  wide: 960,
  full: Number.POSITIVE_INFINITY,
};

const PADDING_SCALE: Record<PaddingVariant, number> = {
  compact: 0.66,
  standard: 1,
  spacious: 1.33,
};

export function ResponsiveContainer({
  children,
  maxWidth = "standard",
  paddingVariant = "standard",
  centered,
  style,
  contentStyle,
}: ResponsiveContainerProps) {
  const device = useDeviceClass();

  // Resolve max-width: when caller picks `standard` we defer to the
  // device-class table so the cap auto-tightens on small tablets.
  const explicitMax = MAX_WIDTH_BY_VARIANT[maxWidth];
  const cap =
    maxWidth === "standard" ? getMaxContentWidth(device.class) : explicitMax;

  const basePad = getPadding(device.class);
  const scale = PADDING_SCALE[paddingVariant];
  const paddingHorizontal = Math.round(basePad.horizontal * scale);
  const paddingVertical = Math.round(basePad.vertical * scale);

  const shouldCenter = centered ?? device.isTablet;

  // On phones (or when caller picked `full`) we skip the centering wrapper
  // entirely — `flex: 1` + padding is enough.
  const isCapped = Number.isFinite(cap);

  if (!isCapped) {
    return (
      <View
        style={[
          { flex: 1, paddingHorizontal, paddingVertical },
          style,
          contentStyle,
        ]}
      >
        {children}
      </View>
    );
  }

  return (
    <View
      style={[
        {
          flex: 1,
          alignItems: shouldCenter ? "center" : "stretch",
        },
        style,
      ]}
    >
      <View
        style={[
          {
            flex: 1,
            width: "100%",
            maxWidth: cap,
            paddingHorizontal,
            paddingVertical,
          },
          contentStyle,
        ]}
      >
        {children}
      </View>
    </View>
  );
}
