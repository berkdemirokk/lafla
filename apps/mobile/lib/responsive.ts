// Lafla — Responsive layout helpers.
//
// Lafla's `app.json` enables `supportsTablet: true` so the app installs on
// iPad as a first-class device (instead of running letterboxed in iPhone
// compatibility mode). That means we need to make the UI breathe when the
// available width grows past phone sizes. These helpers centralise the
// breakpoints + derived layout values so every screen can adapt with one
// hook call instead of re-rolling its own `Dimensions.get(...)` logic.
//
// Goals:
//   - One source of truth for device classes + breakpoints.
//   - React to rotation, split-view, and slide-over (iPad multitasking)
//     by relying on `useWindowDimensions` rather than the static
//     `Dimensions` API.
//   - Provide deterministic numeric outputs (columns, max width, padding)
//     so screens can compose without reading from a context.
//
// This file is intentionally pure utility — no JSX, no styling tokens
// imported, so it stays cheap to consume from any module.

import { useWindowDimensions } from "react-native";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type DeviceClass = "phone" | "phablet" | "tablet" | "tablet-large";

export interface DeviceMetrics {
  /** Coarse-grained bucket — pick layout strategy off this. */
  class: DeviceClass;
  /** Current window width in points (DIP). */
  width: number;
  /** Current window height in points (DIP). */
  height: number;
  /** True when width > height. Useful for landscape-only layouts. */
  isLandscape: boolean;
  /** Convenience: device is in the "phone" bucket. */
  isPhoneOnly: boolean;
  /** Convenience: device is in any tablet bucket. */
  isTablet: boolean;
}

// ---------------------------------------------------------------------------
// Breakpoints
// ---------------------------------------------------------------------------
//
// Points are device-independent (1pt ≈ 1/163in on iOS). The boundaries are
// chosen to align with common iOS form factors:
//
//   phone         < 480pt   iPhone SE / 12 / 15 portrait
//   phablet     480-767pt   iPhone 14 Pro Max landscape, large phones,
//                           iPad in 1/3 split-view
//   tablet      768-1023pt  iPad mini, iPad 10.x portrait
//   tablet-large 1024+pt    iPad Pro 11"/13", iPad Air landscape
//
// We intentionally treat "iPad in split-view" as a phablet rather than a
// tablet — at < 768pt wide you don't have room for two-column layouts
// regardless of the host device.

export const BREAKPOINTS = {
  phone: 480,
  phablet: 768,
  tablet: 1024,
} as const;

function classify(width: number): DeviceClass {
  if (width < BREAKPOINTS.phone) return "phone";
  if (width < BREAKPOINTS.phablet) return "phablet";
  if (width < BREAKPOINTS.tablet) return "tablet";
  return "tablet-large";
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

/**
 * Reactive device-class metrics. Re-renders the consumer on rotation, split
 * view resize, or slide-over toggle thanks to `useWindowDimensions`.
 *
 * Prefer this over `Dimensions.get("window")` — the latter is captured once
 * and won't update when the user rotates an iPad.
 */
export function useDeviceClass(): DeviceMetrics {
  const { width, height } = useWindowDimensions();
  const cls = classify(width);
  return {
    class: cls,
    width,
    height,
    isLandscape: width > height,
    isPhoneOnly: cls === "phone",
    isTablet: cls === "tablet" || cls === "tablet-large",
  };
}

// ---------------------------------------------------------------------------
// Column counts
// ---------------------------------------------------------------------------

interface ColumnsOpts {
  /** Columns on a phone (< 480pt). Default 1. */
  phone?: number;
  /** Columns on a phablet (480-767pt). Default 1. */
  phablet?: number;
  /** Columns on a tablet (768-1023pt). Default 2. */
  tablet?: number;
  /** Columns on a large tablet (1024+pt). Defaults to `tablet + 1`. */
  tabletLarge?: number;
}

/**
 * Pick a column count for the current device class. Designed for grid /
 * carousel layouts (feed scene cards, certificate gallery, etc).
 *
 * Defaults reflect the most common case: single column on phones, 2 on
 * tablets, 3 on tablet-large. Override per-call when a screen has different
 * density needs.
 */
export function getColumnsFor(
  deviceClass: DeviceClass,
  opts: ColumnsOpts = {},
): number {
  const phone = opts.phone ?? 1;
  const phablet = opts.phablet ?? 1;
  const tablet = opts.tablet ?? 2;
  const tabletLarge = opts.tabletLarge ?? tablet + 1;
  switch (deviceClass) {
    case "phone":
      return phone;
    case "phablet":
      return phablet;
    case "tablet":
      return tablet;
    case "tablet-large":
      return tabletLarge;
  }
}

// ---------------------------------------------------------------------------
// Content width caps
// ---------------------------------------------------------------------------
//
// Reading line length affects comprehension. On a 13" iPad in landscape the
// full window is ~1366pt wide — far too wide for a single column of body
// text. We cap content width so paragraphs stay readable while letting
// chrome (background, gradients, decorative graphics) still bleed full-width.

const MAX_WIDTH: Record<DeviceClass, number> = {
  phone: Number.POSITIVE_INFINITY,
  phablet: 640,
  tablet: 720,
  "tablet-large": 840,
};

/** Maximum body-content width in points. Returns `Infinity` for phones. */
export function getMaxContentWidth(deviceClass: DeviceClass): number {
  return MAX_WIDTH[deviceClass];
}

// ---------------------------------------------------------------------------
// Padding presets
// ---------------------------------------------------------------------------
//
// Tablets get more generous gutters so content doesn't feel pinned to the
// edges. We use multiples of the 8pt grid that `theme.tokens.spacing` is
// built on, but we don't import the theme here to keep this module dep-free.

interface PaddingPreset {
  horizontal: number;
  vertical: number;
}

const PADDING: Record<DeviceClass, PaddingPreset> = {
  phone: { horizontal: 16, vertical: 12 },
  phablet: { horizontal: 24, vertical: 16 },
  tablet: { horizontal: 40, vertical: 24 },
  "tablet-large": { horizontal: 64, vertical: 32 },
};

/** Recommended screen padding for the given device class. */
export function getPadding(deviceClass: DeviceClass): PaddingPreset {
  return PADDING[deviceClass];
}

// ---------------------------------------------------------------------------
// Modal presentation hints
// ---------------------------------------------------------------------------

export type ModalStyle = "full" | "centered" | "drawer";

/**
 * Hint for how a modal should present at the given device class.
 *
 *   - `full`     phones — modal occupies the whole screen.
 *   - `centered` tablets — modal floats in the middle with a dimmed backdrop.
 *   - `drawer`   tablet-large — slide in from one edge so the background
 *                stays partially visible (used for transcript/secondary UI).
 *
 * Note: this is a *hint*. The screen still has to wire the actual
 * `presentationStyle` / `Modal` props.
 */
export function getModalWidth(deviceClass: DeviceClass): ModalStyle {
  switch (deviceClass) {
    case "phone":
      return "full";
    case "phablet":
      return "full";
    case "tablet":
      return "centered";
    case "tablet-large":
      return "centered";
  }
}
