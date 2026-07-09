// Lafla — Lightweight i18n scaffold. No external i18n libraries.
//
// Loads flat dictionaries for TR/EN/IT/ES/DE/SR from /locales, persists active locale in
// AsyncStorage under `lafla.locale`. Falls back to the key string if a
// translation is missing.
//
// Usage:
//   import { t, useTranslation } from "@/lib/i18n";
//   t("common.continue")                       // "Devam et" (tr)
//   t("welcome_user", { name: "Berk" })        // "Hoş geldin Berk"
//   const { t, locale, setLocale } = useTranslation();
//
// Adding a new key: add it to BOTH locales/tr.json and locales/en.json.
// Missing keys return the key itself (visible in dev as a missing-string
// signal). Missing locale falls back to 'tr'.

import { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";

import trMessages from "../locales/tr.json";
import enMessages from "../locales/en.json";

export type Locale = "tr" | "en";

const STORAGE_KEY = "lafla.locale";
const DEFAULT_LOCALE: Locale = "tr";

type Dict = Record<string, string>;

const MESSAGES: Record<Locale, Dict> = {
  tr: trMessages as Dict,
  en: enMessages as Dict,
};

// Subscribers are notified when setLocale runs so any mounted
// useTranslation() consumer re-renders with the new strings.
type Listener = (locale: Locale) => void;
const listeners = new Set<Listener>();

let currentLocale: Locale = DEFAULT_LOCALE;
let hydrated = false;
let hydratePromise: Promise<void> | null = null;

function isLocale(value: unknown): value is Locale {
  return value === "tr" || value === "en";
}

/**
 * Best-effort detection of the device locale using expo-localization.
 *
 * Best-effort detection. We only support Turkish and English; every other
 * device language falls back to the Turkish-first default.
 */
function detectDeviceLocale(): Locale | null {
  try {
    const preferred = Localization.getLocales?.()[0];
    const language =
      preferred?.languageCode ??
      preferred?.languageTag?.split(/[-_]/)[0] ??
      null;
    if (language === "tr") return "tr";
    if (language === "en") return "en";
  } catch {
    // Unsupported runtime or mocked module.
  }
  return null;
}

/**
 * Load the persisted locale from AsyncStorage. If none is stored, fall back
 * to the device locale (when expo-localization is available) and finally
 * to DEFAULT_LOCALE. Safe to call repeatedly — only hits storage once.
 */
export function hydrateLocale(): Promise<void> {
  if (hydratePromise) return hydratePromise;
  hydratePromise = (async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (isLocale(stored)) {
        currentLocale = stored;
      } else {
        const device = detectDeviceLocale();
        currentLocale = device ?? DEFAULT_LOCALE;
      }
    } catch {
      currentLocale = DEFAULT_LOCALE;
    } finally {
      hydrated = true;
      listeners.forEach((fn) => fn(currentLocale));
    }
  })();
  return hydratePromise;
}

// Kick off hydration on module load — non-blocking. Callers that need to
// await it can call hydrateLocale() explicitly.
void hydrateLocale();

export function getLocale(): Locale {
  return currentLocale;
}

export async function setLocale(locale: Locale): Promise<void> {
  if (!isLocale(locale)) return;
  currentLocale = locale;
  hydrated = true;
  try {
    await AsyncStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Persistence failure is non-fatal — locale still applies for session.
  }
  listeners.forEach((fn) => fn(locale));
}

/**
 * Interpolate {name}-style placeholders inside a translated string.
 * Unknown placeholders are left as-is so missing data is visible in dev.
 */
function interpolate(template: string, vars?: Record<string, string>): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (match, key: string) => {
    const value = vars[key];
    return value === undefined ? match : value;
  });
}

/**
 * Look up `key` in the active locale. Falls back to TR, then to the raw
 * key string if nothing is found. Supports {var} interpolation via `vars`.
 */
export function t(key: string, vars?: Record<string, string>): string {
  const active = MESSAGES[currentLocale];
  const fallback = MESSAGES[DEFAULT_LOCALE];
  const raw = active?.[key] ?? fallback?.[key] ?? key;
  return interpolate(raw, vars);
}

export type UseTranslation = {
  t: (key: string, vars?: Record<string, string>) => string;
  locale: Locale;
  setLocale: (locale: Locale) => Promise<void>;
};

/**
 * React hook — re-renders consumers when the active locale changes so
 * t() returns the right language without manual prop drilling.
 */
export function useTranslation(): UseTranslation {
  const [locale, setLocaleState] = useState<Locale>(currentLocale);

  useEffect(() => {
    if (!hydrated) {
      void hydrateLocale();
    }
    const listener: Listener = (next) => setLocaleState(next);
    listeners.add(listener);
    // Sync once after subscribing in case locale changed before mount.
    if (currentLocale !== locale) setLocaleState(currentLocale);
    return () => {
      listeners.delete(listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const translate = useCallback(
    (key: string, vars?: Record<string, string>) => {
      // Read from currentLocale rather than the closed-over `locale` so
      // that updates between renders are reflected immediately.
      const active = MESSAGES[currentLocale];
      const fallback = MESSAGES[DEFAULT_LOCALE];
      const raw = active?.[key] ?? fallback?.[key] ?? key;
      return interpolate(raw, vars);
    },
    [locale],
  );

  return { t: translate, locale, setLocale };
}
