export type ThemeScheme = "light" | "dark";

export type ThemeColorPalette = {
  bg: {
    app: string;
    surface: string;
    surfaceBright: string;
    surfaceDim: string;
    surfaceContainer: string;
    surfaceContainerLow: string;
    surfaceContainerLowest: string;
    surfaceContainerHigh: string;
    surfaceContainerHighest: string;
    surfaceVariant: string;
    onBackground: string;
    inverseSurface: string;
    inverseSurfaceLight: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    onSurfaceVariant: string;
    inverseOnSurface: string;
    secondaryFixedDim: string;
    onPrimary: string;
    onSecondary: string;
    onTertiary: string;
  };
  border: {
    outline: string;
    outlineVariant: string;
    light: string;
  };
  brand: {
    primary: string;
    primaryFixed: string;
    primaryFixedDim: string;
    primaryContainer: string;
    onPrimary: string;
    onPrimaryContainer: string;
    primaryGlow: string;
    primarySoft: string;
    secondary: string;
    onSecondary: string;
    tertiary: string;
    tertiaryContainer: string;
    onTertiary: string;
    onTertiaryContainer: string;
    tertiaryGlow: string;
    tertiarySoft: string;
  };
  semantic: {
    success: string;
    successContainer: string;
    onSuccess: string;
    onSuccessContainer: string;
    warning: string;
    warningContainer: string;
    onWarning: string;
    onWarningContainer: string;
    error: string;
    errorContainer: string;
    onError: string;
    onErrorContainer: string;
  };
};

/**
 * Concrete palettes are kept separate from React Native's adaptive colors.
 * This gives hooks, navigation and tests an exact color for the resolved mode.
 */
export const lightThemeColors: ThemeColorPalette = {
  bg: {
    app: "#F7F7FA",
    surface: "#FFFFFF",
    surfaceBright: "#FFFFFF",
    surfaceDim: "#E9ECF2",
    surfaceContainer: "#FFFFFF",
    surfaceContainerLow: "#F1F2F6",
    surfaceContainerLowest: "#FFFFFF",
    surfaceContainerHigh: "#E8EAF0",
    surfaceContainerHighest: "#DFE2EA",
    surfaceVariant: "#ECEEF4",
    onBackground: "#FFFFFF",
    inverseSurface: "#111318",
    inverseSurfaceLight: "#000000",
  },
  text: {
    primary: "#101116",
    secondary: "rgba(16, 17, 22, 0.72)",
    tertiary: "rgba(16, 17, 22, 0.64)",
    onSurfaceVariant: "rgba(16, 17, 22, 0.78)",
    inverseOnSurface: "#FFFFFF",
    secondaryFixedDim: "rgba(16, 17, 22, 0.64)",
    onPrimary: "#FFFFFF",
    onSecondary: "#FFFFFF",
    onTertiary: "#FFFFFF",
  },
  border: {
    outline: "rgba(16, 17, 22, 0.24)",
    outlineVariant: "rgba(16, 17, 22, 0.14)",
    light: "rgba(16, 17, 22, 0.10)",
  },
  brand: {
    // The light-mode pink is deliberately deeper: it works both as normal-size
    // text on white and as a button fill with white text (WCAG AA).
    primary: "#C6005A",
    // A fixed pink that clears 4.5:1 against both black and white. Components
    // that truly need a mode-independent accent can safely use this token.
    primaryFixed: "#E4066A",
    primaryFixedDim: "#A80046",
    primaryContainer: "#C6005A",
    onPrimary: "#FFFFFF",
    onPrimaryContainer: "#FFFFFF",
    primaryGlow: "rgba(198, 0, 90, 0.28)",
    primarySoft: "rgba(198, 0, 90, 0.10)",
    secondary: "#15151A",
    onSecondary: "#FFFFFF",
    tertiary: "#007A83",
    tertiaryContainer: "rgba(0, 122, 131, 0.12)",
    onTertiary: "#FFFFFF",
    onTertiaryContainer: "#00484D",
    tertiaryGlow: "rgba(0, 122, 131, 0.24)",
    tertiarySoft: "rgba(0, 122, 131, 0.10)",
  },
  semantic: {
    success: "#007A83",
    successContainer: "rgba(0, 122, 131, 0.12)",
    onSuccess: "#FFFFFF",
    onSuccessContainer: "#00484D",
    warning: "#9A6200",
    warningContainer: "rgba(154, 98, 0, 0.12)",
    onWarning: "#FFFFFF",
    onWarningContainer: "#5C3900",
    error: "#C81E4A",
    errorContainer: "rgba(200, 30, 74, 0.12)",
    onError: "#FFFFFF",
    onErrorContainer: "#7A0B2D",
  },
};

export const darkThemeColors: ThemeColorPalette = {
  bg: {
    app: "#000000",
    surface: "#0A0A0A",
    surfaceBright: "#1A1A1A",
    surfaceDim: "#050505",
    surfaceContainer: "#121212",
    surfaceContainerLow: "#0C0C0C",
    surfaceContainerLowest: "#000000",
    surfaceContainerHigh: "#1C1C1C",
    surfaceContainerHighest: "#252525",
    surfaceVariant: "#1A1A1A",
    onBackground: "#0A0A0A",
    inverseSurface: "#FAFAFA",
    inverseSurfaceLight: "#FFFFFF",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "rgba(255, 255, 255, 0.68)",
    tertiary: "rgba(255, 255, 255, 0.62)",
    onSurfaceVariant: "rgba(255, 255, 255, 0.78)",
    inverseOnSurface: "#0A0A0A",
    secondaryFixedDim: "rgba(255, 255, 255, 0.64)",
    onPrimary: "#000000",
    onSecondary: "#FFFFFF",
    onTertiary: "#000000",
  },
  border: {
    outline: "rgba(255, 255, 255, 0.24)",
    outlineVariant: "rgba(255, 255, 255, 0.14)",
    light: "rgba(255, 255, 255, 0.10)",
  },
  brand: {
    primary: "#FF2E91",
    primaryFixed: "#E4066A",
    primaryFixedDim: "#A80046",
    primaryContainer: "#FF2E91",
    onPrimary: "#000000",
    onPrimaryContainer: "#000000",
    primaryGlow: "rgba(255, 46, 145, 0.40)",
    primarySoft: "rgba(255, 46, 145, 0.15)",
    secondary: "#15151A",
    onSecondary: "#FFFFFF",
    tertiary: "#00FFFF",
    tertiaryContainer: "rgba(0, 255, 255, 0.16)",
    onTertiary: "#000000",
    onTertiaryContainer: "#B8FFFF",
    tertiaryGlow: "rgba(0, 255, 255, 0.32)",
    tertiarySoft: "rgba(0, 255, 255, 0.12)",
  },
  semantic: {
    success: "#00FFFF",
    successContainer: "rgba(0, 255, 255, 0.16)",
    onSuccess: "#000000",
    onSuccessContainer: "#B8FFFF",
    warning: "#FFB020",
    warningContainer: "rgba(255, 176, 32, 0.16)",
    onWarning: "#000000",
    onWarningContainer: "#FFE1A6",
    error: "#FF5A78",
    errorContainer: "rgba(255, 90, 120, 0.16)",
    onError: "#000000",
    onErrorContainer: "#FFD0D9",
  },
};

export const themeColors: Readonly<Record<ThemeScheme, ThemeColorPalette>> = {
  light: lightThemeColors,
  dark: darkThemeColors,
};
