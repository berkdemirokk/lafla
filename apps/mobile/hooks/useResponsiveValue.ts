// Lafla — useResponsiveValue
//
// Pick a value based on the current device class. Lets callers express
// per-breakpoint values as a partial map; missing keys fall back to a
// supplied default.
//
// Typical use:
//
//   const cardSize = useResponsiveValue<number>(
//     { phone: 140, tablet: 200, "tablet-large": 240 },
//     180,
//   );
//
// The hook re-runs on rotation / split-view because `useDeviceClass`
// internally subscribes to `useWindowDimensions`.

import { useDeviceClass, type DeviceClass } from "../lib/responsive";

/**
 * Resolve a value for the current device class.
 *
 * Lookup order:
 *   1. Exact match for the current device class.
 *   2. `fallback`.
 *
 * Note: this intentionally does NOT walk down the class hierarchy
 * (i.e. there is no "tablet inherits from tablet-large"). That keeps
 * behaviour predictable — what you pass is what you get.
 */
export function useResponsiveValue<T>(
  values: Partial<Record<DeviceClass, T>>,
  fallback: T,
): T {
  const { class: deviceClass } = useDeviceClass();
  const v = values[deviceClass];
  return v !== undefined ? v : fallback;
}
