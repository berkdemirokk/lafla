import {
  createContext,
  use,
  useMemo,
  useSyncExternalStore,
  type PropsWithChildren,
} from "react";
import { useColorScheme } from "react-native";

import {
  getThemePreferenceSnapshot,
  resolveThemePreference,
  subscribeThemePreference,
  type AppThemePreference,
} from "../lib/theme-preference";
import {
  themeColors,
  type ThemeColorPalette,
  type ThemeScheme,
} from "./palette";

export type AppTheme = {
  preference: AppThemePreference;
  scheme: ThemeScheme;
  isDark: boolean;
  colors: ThemeColorPalette;
};

const ThemeContext = createContext<AppTheme | null>(null);

export function ThemeProvider({ children }: PropsWithChildren) {
  const preference = useSyncExternalStore(
    subscribeThemePreference,
    getThemePreferenceSnapshot,
    getThemePreferenceSnapshot,
  );
  const systemScheme = useColorScheme();
  const scheme = resolveThemePreference(preference, systemScheme);

  const theme = useMemo<AppTheme>(
    () => ({
      preference,
      scheme,
      isDark: scheme === "dark",
      colors: themeColors[scheme],
    }),
    [preference, scheme],
  );

  return <ThemeContext value={theme}>{children}</ThemeContext>;
}

export function useAppTheme(): AppTheme {
  const theme = use(ThemeContext);
  if (!theme) {
    throw new Error("useAppTheme must be used inside ThemeProvider");
  }
  return theme;
}
