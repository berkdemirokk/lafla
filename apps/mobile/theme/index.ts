// Lafla — Mobile Design Tokens
// Theme: "Neon Noir" (Stitch)
// Mode: Dark
// Palette:
//   Primary   #FF067A  (hot pink — CTA, brand accent)
//   Secondary #121212  (near-black surfaces)
//   Tertiary  #00FFFF  (electric cyan — scores, success, info)
//   Neutral   #000000  (pure black base)
// Typography:
//   Headline: "Space Grotesk" (geometric, distinctive)
//   Body / Label: "Inter" (humanist sans, very readable on mobile)

import { Platform } from "react-native";

export const tokens = {
  bg: {
    // Dark base hierarchy
    app: "#000000",
    surface: "#0a0a0a",
    surfaceBright: "#1a1a1a",
    surfaceDim: "#050505",
    surfaceContainer: "#121212",
    surfaceContainerLow: "#0c0c0c",
    surfaceContainerLowest: "#000000",
    surfaceContainerHigh: "#1c1c1c",
    surfaceContainerHighest: "#252525",
    surfaceVariant: "#1a1a1a",
    // Inverse (light surfaces — used sparingly for "NPC bubbles" / coach quotes)
    onBackground: "#0a0a0a",
    inverseSurface: "#fafafa",
    inverseSurfaceLight: "#ffffff",
  },
  text: {
    primary: "#ffffff",
    secondary: "rgba(255, 255, 255, 0.65)",
    // Bumped from 0.40 → 0.58 to clear WCAG AA 4.5:1 for body text on
    // bg.app (#000). Accessibility audit flagged the lower value as ~4.3:1.
    tertiary: "rgba(255, 255, 255, 0.58)",
    onSurfaceVariant: "rgba(255, 255, 255, 0.75)",
    // On inverse (light) surfaces — rare
    inverseOnSurface: "#0a0a0a",
    secondaryFixedDim: "rgba(255, 255, 255, 0.55)",
    // On accent backgrounds
    onPrimary: "#ffffff", // white text on hot pink (WCAG AA on large text)
    onSecondary: "#ffffff", // white text on near-black
    onTertiary: "#000000", // black text on cyan (cyan too bright for white)
  },
  border: {
    outline: "rgba(255, 255, 255, 0.18)",
    outlineVariant: "rgba(255, 255, 255, 0.10)",
    light: "rgba(255, 255, 255, 0.06)",
  },
  brand: {
    // Primary — hot pink (CTA, focus, hero accent)
    primary: "#FF067A",
    primaryFixed: "#ff2e91",
    primaryFixedDim: "#cc0561",
    primaryContainer: "#FF067A",
    onPrimary: "#ffffff",
    onPrimaryContainer: "#ffffff",
    primaryGlow: "rgba(255, 6, 122, 0.40)",
    primarySoft: "rgba(255, 6, 122, 0.15)",

    // Secondary — near-black (cards, NPC bubbles, panels)
    secondary: "#121212",
    onSecondary: "#ffffff",

    // Tertiary — electric cyan (scores, links, info, active states)
    tertiary: "#00FFFF",
    tertiaryContainer: "rgba(0, 255, 255, 0.16)",
    onTertiary: "#000000",
    onTertiaryContainer: "#003a3a",
    tertiaryGlow: "rgba(0, 255, 255, 0.32)",
    tertiarySoft: "rgba(0, 255, 255, 0.12)",
  },
  semantic: {
    // Success uses tertiary cyan (Neon Noir accent system)
    success: "#00FFFF",
    successContainer: "rgba(0, 255, 255, 0.14)",
    // Warning — soft amber that reads in dark
    warning: "#FFB020",
    warningContainer: "rgba(255, 176, 32, 0.14)",
    // Error — slightly less aggressive red on dark
    error: "#FF4D6D",
    errorContainer: "rgba(255, 77, 109, 0.14)",
    onError: "#ffffff",
    onErrorContainer: "#ffb3c1",
  },
  radius: {
    sm: 8,
    base: 16,
    lg: 24, // tightened from 32 for Neon Noir's more architectural feel
    xl: 36,
    full: 9999,
  },
  // 2026-05-23 — Premium shadow tokens. Spread into card-like styles
  // for Linear/Notion-grade tactile depth. Apple HIG: 0,4 offset + 12
  // radius is the "lifted floating" sweet spot.
  shadow: {
    // Default card shadow — subtle floating depth.
    card: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.28,
      shadowRadius: 12,
      elevation: 4,
    },
    // Hero/featured shadow — stronger lift for primary CTAs.
    hero: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.40,
      shadowRadius: 18,
      elevation: 8,
    },
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
    // Neon Noir typography pairing — 2026-05-24'te canlandı.
    //   - Space Grotesk: display + headlines (geometric, brand)
    //   - Inter: body + UI (humanist, screen-friendly)
    //
    // Yüklemesi _layout.tsx'te @expo-google-fonts/* paketleriyle yapılır.
    // useFonts'a verilen key'ler ile aşağıdaki string'ler EXACT eşleşmeli.
    // fontFamily explicit verildiğinde RN/iOS fontWeight prop'unu yok sayar —
    // o yüzden ağırlık-spesifik varyantlar ayrı export edildi.
    //
    // NOT: Google Fonts'ta Space Grotesk max 700 Bold'da biter — Black/
    // ExtraBold variant'ı yok. displayBlack ve displayBold ikisi de 700 Bold'a
    // alias; ileri seviye hiyerarşi için Inter ExtraBold (sansExtra) kullanılır.
    display: "SpaceGrotesk_700Bold",
    displaySemi: "SpaceGrotesk_600SemiBold",
    displayMedium: "SpaceGrotesk_500Medium",
    /** @deprecated SG Black yok — display (700 Bold) ile aynı. */
    displayBlack: "SpaceGrotesk_700Bold",
    /** @deprecated SG ExtraBold yok — display (700 Bold) ile aynı. */
    displayBold: "SpaceGrotesk_700Bold",
    sans: "Inter_500Medium",
    sansRegular: "Inter_400Regular",
    sansSemi: "Inter_600SemiBold",
    sansBold: "Inter_700Bold",
    sansExtra: "Inter_800ExtraBold",
    // System fallback for any place needing guaranteed availability
    system: Platform.select({
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
