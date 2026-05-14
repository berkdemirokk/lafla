// Lafla — App version & build metadata helpers.
//
// Small surface used by the About screen footer, Sentry release tagging,
// support email templates, and feedback uploads. Everything here is
// synchronous except `getInstallId` (one AsyncStorage round-trip) and
// `getReportableContext` (which awaits it).
//
// The module intentionally depends only on packages already in
// apps/mobile/package.json:
//
//   - expo-constants                       (already in deps)
//   - @react-native-async-storage/async-storage  (already in deps)
//   - react-native (Platform)              (transitive via expo)
//
// `expo-localization` is *optional*. We dynamic-require it so the bundle
// keeps building even when the package is absent, falling back to
// `Intl.DateTimeFormat().resolvedOptions().locale`.
//
// See docs/APP_META.md for usage patterns.
//
// Source of truth for version / buildNumber / bundleId is app.json, read
// at runtime through expo-constants. Never hard-code — keep app.json the
// only place these strings live.
//
// Source of truth for currentDate semantics: today is 2026-05-14 per the
// project's working memory; we still read system clock at call time.

import Constants from "expo-constants";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const INSTALL_ID_KEY = "lafla.installId";
const FALLBACK_BUNDLE_ID = "com.lafla.app";

/**
 * Returns the human-readable app version (e.g. "0.1.0") from app.json.
 * Defaults to "0.0.0" if expo-constants is unavailable for any reason.
 */
export function getAppVersion(): string {
  return Constants.expoConfig?.version ?? "0.0.0";
}

/**
 * Returns the platform build number as a string. Reads
 * `ios.buildNumber` on iOS, `android.versionCode` on Android. Returns
 * "0" if the field is missing. Always a string so callers don't have
 * to handle parseInt() failures.
 */
export function getBuildNumber(): string {
  const cfg = Constants.expoConfig;
  if (!cfg) return "0";
  if (Platform.OS === "android") {
    const code = cfg.android?.versionCode;
    return code != null ? String(code) : "0";
  }
  // iOS, web (no real build number on web — fall through to iOS field if present)
  return cfg.ios?.buildNumber ?? "0";
}

/**
 * Returns the bundle / package identifier. Prefers the value declared in
 * app.json (`ios.bundleIdentifier` or `android.package`) and falls back
 * to the hard-coded project default "com.lafla.app".
 */
export function getBundleId(): string {
  const cfg = Constants.expoConfig;
  if (!cfg) return FALLBACK_BUNDLE_ID;
  if (Platform.OS === "android") {
    return cfg.android?.package ?? FALLBACK_BUNDLE_ID;
  }
  return cfg.ios?.bundleIdentifier ?? FALLBACK_BUNDLE_ID;
}

/**
 * Generate a random 32-char hex string without pulling in `uuid` or
 * `expo-crypto`. Uses `globalThis.crypto.getRandomValues` when available
 * (Hermes 0.74+ exposes WebCrypto via react-native-get-random-values or
 * the JS engine itself). Falls back to `Math.random` — fine for an
 * anonymous install id, which is not a security token.
 */
function randomHex(bytes: number): string {
  const buf = new Uint8Array(bytes);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const g: any = globalThis as any;
  if (g?.crypto?.getRandomValues) {
    g.crypto.getRandomValues(buf);
  } else {
    for (let i = 0; i < bytes; i++) buf[i] = Math.floor(Math.random() * 256);
  }
  let out = "";
  for (let i = 0; i < bytes; i++) {
    const v = buf[i] ?? 0;
    out += v.toString(16).padStart(2, "0");
  }
  return out;
}

/**
 * Returns a stable, anonymous install id. Generated once per install and
 * persisted to AsyncStorage under `lafla.installId`. Safe to call from
 * any number of call sites — concurrent first-calls may both generate a
 * value, but only the first persisted one wins on the next launch, and
 * the cached in-memory copy keeps subsequent calls consistent within
 * the running session.
 *
 * This is NOT a user id. It is not tied to auth and rotates if the user
 * reinstalls. Use it to correlate crash reports / feedback submissions
 * from the same device.
 */
let _installIdCache: string | null = null;
export async function getInstallId(): Promise<string> {
  if (_installIdCache) return _installIdCache;
  try {
    const existing = await AsyncStorage.getItem(INSTALL_ID_KEY);
    if (existing && existing.length > 0) {
      _installIdCache = existing;
      return existing;
    }
    const next = randomHex(16);
    await AsyncStorage.setItem(INSTALL_ID_KEY, next);
    _installIdCache = next;
    return next;
  } catch {
    // AsyncStorage unavailable (e.g. SSR / unit test) — return an
    // ephemeral id so callers never have to handle null.
    const ephemeral = randomHex(16);
    _installIdCache = ephemeral;
    return ephemeral;
  }
}

export type DeviceInfo = {
  os: "ios" | "android" | "web";
  osVersion?: string;
  locale: string;
};

/**
 * Try to read the device locale from `expo-localization`. The package is
 * optional in this project — see file header. Falls back to
 * `Intl.DateTimeFormat().resolvedOptions().locale`, then to "tr-TR"
 * (the project's primary market) as a last resort.
 */
function readLocale(): string {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require("expo-localization");
    // expo-localization >= 16 exposes getLocales(); older versions used
    // `locale`. Try both, in order.
    const locales: Array<{ languageTag?: string }> | undefined = mod?.getLocales?.();
    const fromList = locales?.[0]?.languageTag;
    if (fromList) return fromList;
    const legacy: string | undefined = mod?.locale;
    if (legacy) return legacy;
  } catch {
    // package not installed or threw — fall through
  }
  try {
    const fromIntl = new Intl.DateTimeFormat().resolvedOptions().locale;
    if (fromIntl) return fromIntl;
  } catch {
    // Intl missing — extremely unlikely on Hermes but guard anyway
  }
  return "tr-TR";
}

/**
 * Snapshot of OS, OS version, and locale. Safe to call synchronously
 * from render code; reads only in-memory globals.
 */
export function getDeviceInfo(): DeviceInfo {
  const os: DeviceInfo["os"] =
    Platform.OS === "ios" || Platform.OS === "android" ? Platform.OS : "web";
  const osVersion =
    Platform.Version != null ? String(Platform.Version) : undefined;
  return {
    os,
    osVersion,
    locale: readLocale(),
  };
}

export type ReportableContext = {
  version: string;
  buildNumber: string;
  bundleId: string;
  installId: string;
  deviceInfo: DeviceInfo;
  currentDate: string; // ISO 8601 UTC, e.g. "2026-05-14T12:34:56.789Z"
};

/**
 * Bundled metadata snapshot for crash reports, feedback uploads, and
 * support email bodies. Awaits getInstallId() once; everything else is
 * synchronous.
 *
 * Recommended call sites:
 *   - Sentry `setContext("app", …)` right after init
 *   - feedback.ts when submitting a user report
 *   - About screen footer (display version + buildNumber)
 */
export async function getReportableContext(): Promise<ReportableContext> {
  const installId = await getInstallId();
  return {
    version: getAppVersion(),
    buildNumber: getBuildNumber(),
    bundleId: getBundleId(),
    installId,
    deviceInfo: getDeviceInfo(),
    currentDate: new Date().toISOString(),
  };
}
