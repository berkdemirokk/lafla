import { Appearance, type ColorSchemeName } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type AppThemePreference = "system" | "dark" | "light";

const K_THEME_PREFERENCE = "lafla.settings.themePreference";

function preferenceToColorScheme(
  preference: AppThemePreference,
): ColorSchemeName | null {
  if (preference === "system") return null;
  return preference;
}

function normalizePreference(raw: string | null): AppThemePreference {
  if (raw === "light" || raw === "dark" || raw === "system") return raw;
  return "dark";
}

export async function getThemePreference(): Promise<AppThemePreference> {
  const raw = await AsyncStorage.getItem(K_THEME_PREFERENCE).catch(() => null);
  return normalizePreference(raw);
}

export function applyThemePreference(preference: AppThemePreference) {
  Appearance.setColorScheme(preferenceToColorScheme(preference));
}

export async function setThemePreference(preference: AppThemePreference) {
  await AsyncStorage.setItem(K_THEME_PREFERENCE, preference).catch(() => {});
  applyThemePreference(preference);
}

export async function hydrateThemePreference(): Promise<AppThemePreference> {
  const preference = await getThemePreference();
  applyThemePreference(preference);
  return preference;
}

export function statusBarStyleForScheme(
  colorScheme: ColorSchemeName,
): "light" | "dark" {
  return colorScheme === "light" ? "dark" : "light";
}
