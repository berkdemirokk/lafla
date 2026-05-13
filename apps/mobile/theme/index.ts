// Lafla — Mobile Design Tokens
// Theme: "Cyber-Electric Modern" (Stitch)
// Mode: Light
// Palette: Yellow primary · Black secondary · Blue tertiary · White neutral

import { Platform } from "react-native";

export const tokens = {
  bg: {
    // Light surfaces (default)
    app: "#ffffff",
    surface: "#fafbfc",
    surfaceBright: "#ffffff",
    surfaceDim: "#dadce0",
    surfaceContainer: "#f5f7fb",
    surfaceContainerLow: "#f8fafd",
    surfaceContainerLowest: "#ffffff",
    surfaceContainerHigh: "#eef1f6",
    surfaceContainerHighest: "#e8ecf2",
    surfaceVariant: "#e8ecf2",
    // Dark accent surfaces (splash, lesson complete, NPC bubbles)
    onBackground: "#1a1c1c",
    inverseSurface: "#2f3131",
    inverseSurfaceLight: "#3a3c3c",
  },
  text: {
    primary: "#1a1c1c",
    secondary: "#5d5f63",
    tertiary: "#888a90",
    onSurfaceVariant: "#444851",
    // On dark surfaces
    inverseOnSurface: "#f0f1f1",
    secondaryFixedDim: "#c6c6c7",
    // On accent backgrounds
    onPrimary: "#1c1d00", // near-black text on yellow
    onSecondary: "#ffffff", // white text on black
    onTertiary: "#ffffff", // white text on blue
  },
  border: {
    outline: "#5d5f63",
    outlineVariant: "#c0c8d4",
    light: "#e0e6ee",
  },
  brand: {
    // Primary — neon yellow (CTAs, hero accents)
    primary: "#f6ff00",
    primaryFixed: "#e3ec00",
    primaryFixedDim: "#c7cf00",
    primaryContainer: "#f6ff00",
    onPrimary: "#1c1d00",
    onPrimaryContainer: "#1c1d00",
    primaryGlow: "rgba(246, 255, 0, 0.40)",
    primarySoft: "rgba(246, 255, 0, 0.15)",

    // Secondary — pure black (strong contrast, dark buttons, NPC bubbles)
    secondary: "#1a1c1c",
    onSecondary: "#ffffff",

    // Tertiary — electric blue (scores, links, active states, online dot)
    tertiary: "#1978e5",
    tertiaryContainer: "#d5e5fc",
    onTertiary: "#ffffff",
    onTertiaryContainer: "#001b3c",
    tertiaryGlow: "rgba(25, 120, 229, 0.30)",
    tertiarySoft: "rgba(25, 120, 229, 0.12)",
  },
  semantic: {
    // Success uses TERTIARY blue per Cyber-Electric (#1978e5)
    success: "#1978e5",
    successContainer: "rgba(25, 120, 229, 0.12)",
    error: "#ba1a1a",
    errorContainer: "#ffdad6",
    onError: "#ffffff",
    onErrorContainer: "#93000a",
  },
  radius: {
    sm: 8,
    base: 16,
    lg: 32,
    xl: 48,
    full: 9999,
  },
  spacing: {
    xs: 4,
    base: 8,
    sm: 12,
    md: 24,
    lg: 48,
    xl: 80,
  },
  font: {
    sans: Platform.select({
      ios: "System",
      android: "Roboto",
      default: "System",
    }),
  },
  weight: {
    regular: "400" as const,
    medium: "500" as const,
    semibold: "600" as const,
    bold: "700" as const,
    extrabold: "800" as const,
    black: "900" as const,
  },
} as const;

export type Tokens = typeof tokens;
