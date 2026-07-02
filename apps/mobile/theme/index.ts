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

import {
  DynamicColorIOS,
  Platform,
} from "react-native";

function dynamicColor(light: string, dark: string): string {
  if (Platform.OS === "ios") {
    return DynamicColorIOS({ light, dark }) as unknown as string;
  }
  // Android/Web fallback keeps the existing dark Neon Noir palette. The user
  // preference is still stored and applied via Appearance.setColorScheme; iOS
  // resolves the full custom palette natively through DynamicColorIOS.
  return dark;
}

export const tokens = {
  bg: {
    // Dynamic base hierarchy. Dark remains the default Neon Noir identity;
    // light mode keeps the same pink/cyan accents on paper-like surfaces.
    app: dynamicColor("#F8F8FB", "#000000"),
    surface: dynamicColor("#FFFFFF", "#0a0a0a"),
    surfaceBright: dynamicColor("#FFFFFF", "#1a1a1a"),
    surfaceDim: dynamicColor("#EEF0F6", "#050505"),
    surfaceContainer: dynamicColor("#FFFFFF", "#121212"),
    surfaceContainerLow: dynamicColor("#F3F4F8", "#0c0c0c"),
    surfaceContainerLowest: dynamicColor("#FFFFFF", "#000000"),
    surfaceContainerHigh: dynamicColor("#ECEEF4", "#1c1c1c"),
    surfaceContainerHighest: dynamicColor("#E4E7EF", "#252525"),
    surfaceVariant: dynamicColor("#EEF0F6", "#1a1a1a"),
    // Inverse surfaces — used sparingly for "NPC bubbles" / coach quotes.
    onBackground: dynamicColor("#FFFFFF", "#0a0a0a"),
    inverseSurface: dynamicColor("#111318", "#fafafa"),
    inverseSurfaceLight: dynamicColor("#000000", "#ffffff"),
  },
  text: {
    primary: dynamicColor("#101116", "#ffffff"),
    secondary: dynamicColor("rgba(16, 17, 22, 0.68)", "rgba(255, 255, 255, 0.65)"),
    // Bumped from 0.40 → 0.58 to clear WCAG AA 4.5:1 for body text on
    // bg.app (#000). Accessibility audit flagged the lower value as ~4.3:1.
    tertiary: dynamicColor("rgba(16, 17, 22, 0.52)", "rgba(255, 255, 255, 0.58)"),
    onSurfaceVariant: dynamicColor("rgba(16, 17, 22, 0.72)", "rgba(255, 255, 255, 0.75)"),
    // On inverse (light) surfaces — rare
    inverseOnSurface: dynamicColor("#ffffff", "#0a0a0a"),
    secondaryFixedDim: dynamicColor("rgba(16, 17, 22, 0.55)", "rgba(255, 255, 255, 0.55)"),
    // On accent backgrounds
    onPrimary: "#ffffff", // white text on hot pink (WCAG AA on large text)
    onSecondary: "#ffffff", // white text on near-black
    onTertiary: "#000000", // black text on cyan (cyan too bright for white)
  },
  border: {
    outline: dynamicColor("rgba(16, 17, 22, 0.18)", "rgba(255, 255, 255, 0.18)"),
    outlineVariant: dynamicColor("rgba(16, 17, 22, 0.10)", "rgba(255, 255, 255, 0.10)"),
    light: dynamicColor("rgba(16, 17, 22, 0.08)", "rgba(255, 255, 255, 0.06)"),
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
    primarySoft: dynamicColor("rgba(255, 6, 122, 0.10)", "rgba(255, 6, 122, 0.15)"),

    // Secondary — near-black (cards, NPC bubbles, panels)
    secondary: dynamicColor("#15151A", "#121212"),
    onSecondary: "#ffffff",

    // Tertiary — electric cyan (scores, links, info, active states)
    tertiary: dynamicColor("#007A83", "#00FFFF"),
    tertiaryContainer: dynamicColor("rgba(0, 162, 170, 0.14)", "rgba(0, 255, 255, 0.16)"),
    onTertiary: dynamicColor("#ffffff", "#000000"), // white on light-mode teal, black on dark neon cyan
    onTertiaryContainer: dynamicColor("#003a3a", "#003a3a"),
    tertiaryGlow: dynamicColor("rgba(0, 162, 170, 0.24)", "rgba(0, 255, 255, 0.32)"),
    tertiarySoft: dynamicColor("rgba(0, 162, 170, 0.10)", "rgba(0, 255, 255, 0.12)"),
  },
  semantic: {
    // Success uses tertiary cyan (Neon Noir accent system)
    success: dynamicColor("#007A83", "#00FFFF"),
    successContainer: dynamicColor("rgba(0, 162, 170, 0.12)", "rgba(0, 255, 255, 0.14)"),
    // Warning — soft amber that reads in dark
    warning: dynamicColor("#9A6200", "#FFB020"),
    warningContainer: dynamicColor("rgba(180, 112, 0, 0.12)", "rgba(255, 176, 32, 0.14)"),
    // Error — slightly less aggressive red on dark
    error: dynamicColor("#C81E4A", "#FF4D6D"),
    errorContainer: dynamicColor("rgba(190, 31, 62, 0.10)", "rgba(255, 77, 109, 0.14)"),
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
