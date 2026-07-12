// Lafla mobile design system.
//
// `tokens` remains the backwards-compatible API used by existing StyleSheets.
// On iOS it contains DynamicColorIOS values, so already-mounted views update
// without rebuilding their styles. Android neutral colors use native theme
// attributes; accents use mode-independent AA-safe fallbacks. New components
// should prefer `useAppTheme().colors` for an exact resolved palette.

import {
  Appearance,
  DynamicColorIOS,
  Platform,
  PlatformColor,
} from "react-native";

import {
  darkThemeColors,
  lightThemeColors,
} from "./palette";

export {
  darkThemeColors,
  lightThemeColors,
  themeColors,
  type ThemeColorPalette,
  type ThemeScheme,
} from "./palette";
export { ThemeProvider, useAppTheme, type AppTheme } from "./theme-provider";

type AndroidColor = string | readonly string[];

const runtimePlatform = process.env.EXPO_OS ?? Platform.OS;

function androidColor(value: AndroidColor): string {
  return (Array.isArray(value)
    ? PlatformColor(...value)
    : value) as unknown as string;
}

export function resolveAdaptiveColorForPlatform(
  platform: string,
  light: string,
  dark: string,
  androidFallback?: AndroidColor,
): string {
  if (light === dark) return light;

  if (platform === "ios") {
    return DynamicColorIOS({
      light,
      dark,
      highContrastLight: light,
      highContrastDark: dark,
    }) as unknown as string;
  }

  if (platform === "android" && androidFallback) {
    return androidColor(androidFallback);
  }

  // Web and non-native test environments do not support native adaptive color
  // objects. Pick their current scheme instead of silently forcing dark mode.
  return Appearance.getColorScheme() === "dark" ? dark : light;
}

function adaptiveColor(
  light: string,
  dark: string,
  androidFallback?: AndroidColor,
): string {
  return resolveAdaptiveColorForPlatform(
    runtimePlatform,
    light,
    dark,
    androidFallback,
  );
}

const androidSemantic = {
  background: [
    "?android:attr/colorBackground",
    "?attr/colorBackground",
  ] as const,
  floatingBackground: [
    "?android:attr/colorBackgroundFloating",
    "?android:attr/colorBackground",
  ] as const,
  primaryText: [
    "?android:attr/textColorPrimary",
    "?attr/textColorPrimary",
  ] as const,
  secondaryText: [
    "?android:attr/textColorSecondary",
    "?attr/textColorSecondary",
  ] as const,
  tertiaryText: [
    "?android:attr/textColorTertiary",
    "?android:attr/textColorSecondary",
  ] as const,
  inverseText: [
    "?android:attr/textColorPrimaryInverse",
    "?android:attr/textColorPrimary",
  ] as const,
} as const;

// Android fallback accents sit in the narrow luminance band that clears AA
// against both white and black. Native semantic colors handle neutral surfaces
// and text, so they keep reacting to AppCompat day/night configuration changes.
const androidAccent = {
  primary: "#E4066A",
  primaryDim: "#A80046",
  primaryGlow: "rgba(228, 6, 106, 0.32)",
  primarySoft: "rgba(228, 6, 106, 0.12)",
  tertiary: "#00838B",
  tertiaryContainer: "rgba(0, 131, 139, 0.14)",
  tertiaryGlow: "rgba(0, 131, 139, 0.28)",
  tertiarySoft: "rgba(0, 131, 139, 0.11)",
  warning: "#A46900",
  warningContainer: "rgba(164, 105, 0, 0.14)",
  error: "#DC3059",
  errorContainer: "rgba(220, 48, 89, 0.14)",
} as const;

const c = (
  light: string,
  dark: string,
  androidFallback?: AndroidColor,
) => adaptiveColor(light, dark, androidFallback);

export const tokens = {
  bg: {
    app: c(
      lightThemeColors.bg.app,
      darkThemeColors.bg.app,
      androidSemantic.background,
    ),
    surface: c(
      lightThemeColors.bg.surface,
      darkThemeColors.bg.surface,
      androidSemantic.floatingBackground,
    ),
    surfaceBright: c(
      lightThemeColors.bg.surfaceBright,
      darkThemeColors.bg.surfaceBright,
      androidSemantic.floatingBackground,
    ),
    surfaceDim: c(
      lightThemeColors.bg.surfaceDim,
      darkThemeColors.bg.surfaceDim,
      androidSemantic.background,
    ),
    surfaceContainer: c(
      lightThemeColors.bg.surfaceContainer,
      darkThemeColors.bg.surfaceContainer,
      androidSemantic.floatingBackground,
    ),
    surfaceContainerLow: c(
      lightThemeColors.bg.surfaceContainerLow,
      darkThemeColors.bg.surfaceContainerLow,
      androidSemantic.background,
    ),
    surfaceContainerLowest: c(
      lightThemeColors.bg.surfaceContainerLowest,
      darkThemeColors.bg.surfaceContainerLowest,
      androidSemantic.background,
    ),
    surfaceContainerHigh: c(
      lightThemeColors.bg.surfaceContainerHigh,
      darkThemeColors.bg.surfaceContainerHigh,
      androidSemantic.floatingBackground,
    ),
    surfaceContainerHighest: c(
      lightThemeColors.bg.surfaceContainerHighest,
      darkThemeColors.bg.surfaceContainerHighest,
      androidSemantic.floatingBackground,
    ),
    surfaceVariant: c(
      lightThemeColors.bg.surfaceVariant,
      darkThemeColors.bg.surfaceVariant,
      androidSemantic.floatingBackground,
    ),
    onBackground: c(
      lightThemeColors.bg.onBackground,
      darkThemeColors.bg.onBackground,
      androidSemantic.floatingBackground,
    ),
    inverseSurface: c(
      lightThemeColors.bg.inverseSurface,
      darkThemeColors.bg.inverseSurface,
      androidSemantic.primaryText,
    ),
    inverseSurfaceLight: c(
      lightThemeColors.bg.inverseSurfaceLight,
      darkThemeColors.bg.inverseSurfaceLight,
      androidSemantic.primaryText,
    ),
  },
  text: {
    primary: c(
      lightThemeColors.text.primary,
      darkThemeColors.text.primary,
      androidSemantic.primaryText,
    ),
    secondary: c(
      lightThemeColors.text.secondary,
      darkThemeColors.text.secondary,
      androidSemantic.secondaryText,
    ),
    tertiary: c(
      lightThemeColors.text.tertiary,
      darkThemeColors.text.tertiary,
      androidSemantic.tertiaryText,
    ),
    onSurfaceVariant: c(
      lightThemeColors.text.onSurfaceVariant,
      darkThemeColors.text.onSurfaceVariant,
      androidSemantic.secondaryText,
    ),
    inverseOnSurface: c(
      lightThemeColors.text.inverseOnSurface,
      darkThemeColors.text.inverseOnSurface,
      androidSemantic.background,
    ),
    secondaryFixedDim: c(
      lightThemeColors.text.secondaryFixedDim,
      darkThemeColors.text.secondaryFixedDim,
      androidSemantic.secondaryText,
    ),
    onPrimary: c(
      lightThemeColors.text.onPrimary,
      darkThemeColors.text.onPrimary,
      androidSemantic.inverseText,
    ),
    onSecondary: lightThemeColors.text.onSecondary,
    onTertiary: c(
      lightThemeColors.text.onTertiary,
      darkThemeColors.text.onTertiary,
      androidSemantic.inverseText,
    ),
  },
  border: {
    outline: c(
      lightThemeColors.border.outline,
      darkThemeColors.border.outline,
      androidSemantic.tertiaryText,
    ),
    outlineVariant: c(
      lightThemeColors.border.outlineVariant,
      darkThemeColors.border.outlineVariant,
      androidSemantic.tertiaryText,
    ),
    light: c(
      lightThemeColors.border.light,
      darkThemeColors.border.light,
      androidSemantic.tertiaryText,
    ),
  },
  brand: {
    primary: c(
      lightThemeColors.brand.primary,
      darkThemeColors.brand.primary,
      androidAccent.primary,
    ),
    primaryFixed: lightThemeColors.brand.primaryFixed,
    primaryFixedDim: androidAccent.primaryDim,
    primaryContainer: c(
      lightThemeColors.brand.primaryContainer,
      darkThemeColors.brand.primaryContainer,
      androidAccent.primary,
    ),
    onPrimary: c(
      lightThemeColors.brand.onPrimary,
      darkThemeColors.brand.onPrimary,
      androidSemantic.inverseText,
    ),
    onPrimaryContainer: c(
      lightThemeColors.brand.onPrimaryContainer,
      darkThemeColors.brand.onPrimaryContainer,
      androidSemantic.inverseText,
    ),
    primaryGlow: c(
      lightThemeColors.brand.primaryGlow,
      darkThemeColors.brand.primaryGlow,
      androidAccent.primaryGlow,
    ),
    primarySoft: c(
      lightThemeColors.brand.primarySoft,
      darkThemeColors.brand.primarySoft,
      androidAccent.primarySoft,
    ),
    secondary: lightThemeColors.brand.secondary,
    onSecondary: lightThemeColors.brand.onSecondary,
    tertiary: c(
      lightThemeColors.brand.tertiary,
      darkThemeColors.brand.tertiary,
      androidAccent.tertiary,
    ),
    tertiaryContainer: c(
      lightThemeColors.brand.tertiaryContainer,
      darkThemeColors.brand.tertiaryContainer,
      androidAccent.tertiaryContainer,
    ),
    onTertiary: c(
      lightThemeColors.brand.onTertiary,
      darkThemeColors.brand.onTertiary,
      androidSemantic.inverseText,
    ),
    onTertiaryContainer: c(
      lightThemeColors.brand.onTertiaryContainer,
      darkThemeColors.brand.onTertiaryContainer,
      androidSemantic.primaryText,
    ),
    tertiaryGlow: c(
      lightThemeColors.brand.tertiaryGlow,
      darkThemeColors.brand.tertiaryGlow,
      androidAccent.tertiaryGlow,
    ),
    tertiarySoft: c(
      lightThemeColors.brand.tertiarySoft,
      darkThemeColors.brand.tertiarySoft,
      androidAccent.tertiarySoft,
    ),
  },
  semantic: {
    success: c(
      lightThemeColors.semantic.success,
      darkThemeColors.semantic.success,
      androidAccent.tertiary,
    ),
    successContainer: c(
      lightThemeColors.semantic.successContainer,
      darkThemeColors.semantic.successContainer,
      androidAccent.tertiaryContainer,
    ),
    onSuccess: c(
      lightThemeColors.semantic.onSuccess,
      darkThemeColors.semantic.onSuccess,
      androidSemantic.inverseText,
    ),
    onSuccessContainer: c(
      lightThemeColors.semantic.onSuccessContainer,
      darkThemeColors.semantic.onSuccessContainer,
      androidSemantic.primaryText,
    ),
    warning: c(
      lightThemeColors.semantic.warning,
      darkThemeColors.semantic.warning,
      androidAccent.warning,
    ),
    warningContainer: c(
      lightThemeColors.semantic.warningContainer,
      darkThemeColors.semantic.warningContainer,
      androidAccent.warningContainer,
    ),
    onWarning: c(
      lightThemeColors.semantic.onWarning,
      darkThemeColors.semantic.onWarning,
      androidSemantic.inverseText,
    ),
    onWarningContainer: c(
      lightThemeColors.semantic.onWarningContainer,
      darkThemeColors.semantic.onWarningContainer,
      androidSemantic.primaryText,
    ),
    error: c(
      lightThemeColors.semantic.error,
      darkThemeColors.semantic.error,
      androidAccent.error,
    ),
    errorContainer: c(
      lightThemeColors.semantic.errorContainer,
      darkThemeColors.semantic.errorContainer,
      androidAccent.errorContainer,
    ),
    onError: c(
      lightThemeColors.semantic.onError,
      darkThemeColors.semantic.onError,
      androidSemantic.inverseText,
    ),
    onErrorContainer: c(
      lightThemeColors.semantic.onErrorContainer,
      darkThemeColors.semantic.onErrorContainer,
      androidSemantic.primaryText,
    ),
  },
  radius: {
    sm: 8,
    base: 16,
    lg: 24,
    xl: 36,
    full: 9999,
  },
  shadow: {
    card: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.16,
      shadowRadius: 12,
      elevation: 4,
    },
    hero: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.28,
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
    display: "SpaceGrotesk_700Bold",
    displaySemi: "SpaceGrotesk_600SemiBold",
    displayMedium: "SpaceGrotesk_500Medium",
    /** @deprecated Space Grotesk has no Black variant. */
    displayBlack: "SpaceGrotesk_700Bold",
    /** @deprecated Space Grotesk has no ExtraBold variant. */
    displayBold: "SpaceGrotesk_700Bold",
    sans: "Inter_500Medium",
    sansRegular: "Inter_400Regular",
    sansSemi: "Inter_600SemiBold",
    sansBold: "Inter_700Bold",
    sansExtra: "Inter_800ExtraBold",
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
