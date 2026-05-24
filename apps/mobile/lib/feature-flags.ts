// Lafla — Feature flags + A/B test infrastructure.
//
// 2026-05-24 — PostHog feature flag wrapper. Minimal API:
//   • getFeatureFlag(key, defaultValue): Promise<boolean>
//   • getFeatureVariant(key, defaultVariant): Promise<string>
//
// PostHog initialize edilmiş + ATT granted ise gerçek flag değeri döner.
// Aksi halde defaultValue. UI bunu "ilk açılışta hemen göster" pattern'i
// için kullanır — flag fetch async ama default value ile sync render.
//
// Variant tracking: caller analytics'e variant'i `experiment_variant`
// property ile push'lar; PostHog dashboard conversion'ı bu key üzerinden
// böler.
//
// İlk A/B: `onboarding_preview_enabled` (boolean)
//   • A (default true) → welcome → preview → interests → name → cefr
//   • B (false)        → welcome → interests → name → cefr (preview yok)

import Constants from "expo-constants";
import { Platform } from "react-native";

import { getAttStatus } from "./att";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _phClient: any = null;
let _initInProgress: Promise<void> | null = null;

const KEY = Constants.expoConfig?.extra?.posthogKey as string | undefined;
const HOST =
  (Constants.expoConfig?.extra?.posthogHost as string | undefined) ??
  "https://eu.i.posthog.com";

function hasUsableKey(): boolean {
  return !!KEY && KEY.length > 0 && !KEY.includes("YOUR_");
}

/**
 * Lazy PostHog instance. lib/analytics.ts kendi instance'ını tutuyor ama
 * o module isim çakışmasını önlemek için private. Bu modül kendi instance'ını
 * yükler — PostHog SDK pencerede zaten singleton olduğu için memory
 * duplikasyonu yaratmaz; 2. instance event'leri 1.'in distinct_id'siyle
 * gönderir.
 */
async function ensureClient(): Promise<void> {
  if (_phClient) return;
  if (_initInProgress) return _initInProgress;
  if (!hasUsableKey()) return;

  // ATT gate — denied users → no PostHog → return null silently.
  if (Platform.OS === "ios") {
    const att = await getAttStatus().catch(() => "denied" as const);
    if (att !== "granted") return;
  }

  _initInProgress = (async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const mod = require("posthog-react-native") as {
        default?: new (key: string, opts?: { host?: string }) => unknown;
        PostHog?: new (key: string, opts?: { host?: string }) => unknown;
      };
      const Ctor = (mod.default ?? mod.PostHog) as
        | (new (key: string, opts?: { host?: string }) => unknown)
        | undefined;
      if (!Ctor) return;
      _phClient = new Ctor(KEY as string, { host: HOST });
    } catch {
      _phClient = null;
    } finally {
      _initInProgress = null;
    }
  })();
  return _initInProgress;
}

/**
 * Bool flag oku. PostHog cevap vermezse defaultValue döner.
 * Non-blocking için caller'lar genelde Promise.race + timeout kullanır
 * ama default'a düşmek de geçerli pattern.
 */
export async function getFeatureFlag(
  key: string,
  defaultValue: boolean,
): Promise<boolean> {
  try {
    await ensureClient();
    if (!_phClient) return defaultValue;
    // posthog-react-native v3 → isFeatureEnabled(key) returns boolean | undefined.
    const fn = _phClient.isFeatureEnabled as
      | ((k: string) => boolean | undefined | Promise<boolean | undefined>)
      | undefined;
    if (typeof fn !== "function") return defaultValue;
    const result = await Promise.resolve(fn.call(_phClient, key));
    if (typeof result !== "boolean") return defaultValue;
    return result;
  } catch {
    return defaultValue;
  }
}

/**
 * Multivariate variant oku. "A" / "B" / "control" gibi string variant'lar
 * için. PostHog cevap vermezse defaultVariant döner.
 */
export async function getFeatureVariant(
  key: string,
  defaultVariant: string,
): Promise<string> {
  try {
    await ensureClient();
    if (!_phClient) return defaultVariant;
    const fn = _phClient.getFeatureFlag as
      | ((k: string) => string | boolean | undefined | Promise<string | boolean | undefined>)
      | undefined;
    if (typeof fn !== "function") return defaultVariant;
    const result = await Promise.resolve(fn.call(_phClient, key));
    if (typeof result === "string") return result;
    if (typeof result === "boolean") return result ? "true" : "false";
    return defaultVariant;
  } catch {
    return defaultVariant;
  }
}

/** A/B test isimlerini tek yerde tutmak için. PostHog dashboard'da bu key'ler
 *  ile flag tanımlanır. */
export const FLAG_KEYS = {
  /** Onboarding preview (teaser) step shown — A (true) default vs B (false). */
  ONBOARDING_PREVIEW: "onboarding_preview_enabled",
} as const;
