import { Appearance, type ColorSchemeName } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type AppThemePreference = "system" | "dark" | "light";
export type ResolvedThemeScheme = "dark" | "light";

const K_THEME_PREFERENCE = "lafla.settings.themePreference";

// The app does not render until hydration finishes, so `system` is both a safe
// initial snapshot and the least surprising first-run behavior.
let activePreference: AppThemePreference = "system";
const listeners = new Set<() => void>();

function preferenceToColorScheme(
  preference: AppThemePreference,
): ColorSchemeName | null {
  if (preference === "system") return null;
  return preference;
}

function normalizePreference(raw: string | null): AppThemePreference {
  if (raw === "light" || raw === "dark" || raw === "system") return raw;
  return "system";
}

function publishPreference(preference: AppThemePreference) {
  if (activePreference === preference) return;
  activePreference = preference;
  for (const listener of listeners) listener();
}

export function getThemePreferenceSnapshot(): AppThemePreference {
  return activePreference;
}

export function subscribeThemePreference(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function resolveThemePreference(
  preference: AppThemePreference,
  systemScheme: ColorSchemeName,
): ResolvedThemeScheme {
  if (preference !== "system") return preference;
  return systemScheme === "dark" ? "dark" : "light";
}

export async function getThemePreference(): Promise<AppThemePreference> {
  const raw = await AsyncStorage.getItem(K_THEME_PREFERENCE).catch(() => null);
  return normalizePreference(raw);
}

export function applyThemePreference(preference: AppThemePreference) {
  // Publish before invoking native UI work. Settings, root navigation and any
  // hook consumers update in the same interaction even if persistence is slow.
  publishPreference(preference);
  Appearance.setColorScheme(preferenceToColorScheme(preference));
}

export async function setThemePreference(preference: AppThemePreference) {
  applyThemePreference(preference);
  await AsyncStorage.setItem(K_THEME_PREFERENCE, preference).catch(() => {});
}

export async function hydrateThemePreference(): Promise<AppThemePreference> {
  const preference = await getThemePreference();
  applyThemePreference(preference);
  return preference;
}

export function statusBarStyleForScheme(
  colorScheme: ColorSchemeName,
): "light" | "dark" {
  // Unknown schemes resolve to the light palette throughout the theme system.
  return colorScheme === "dark" ? "light" : "dark";
}
