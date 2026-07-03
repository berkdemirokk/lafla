// Lafla — In-App Purchase (IAP) abstraction with RevenueCat.
//
// PRODUCTION PATH:
//   - react-native-purchases SDK is loaded dynamically via require()
//   - Configured with API key from app.json extra.revenuecatIosKey or env
//   - Calls Purchases.* and returns real entitlement state
//
// FALLBACK PATH:
//   - If SDK missing (e.g. Expo Go) or API key absent → mock via AsyncStorage
//   - Mock allows dev testing across reloads
//   - Key: `lafla.premium.mock` — JSON `{ active: boolean, entitlement?: string, since?: string }`
//
// SETUP CHECKLIST (one-time, see docs/REVENUECAT.md):
//   1. Create RevenueCat project — get iOS public SDK key
//   2. In App Store Connect → My Apps → Lafla → Subscriptions:
//      - Create Subscription Group "Lafla Premium"
//      - Create two products: lafla.premium.monthly (₺99/ay), lafla.premium.yearly (₺999/yıl)
//   3. In RevenueCat dashboard:
//      - Add iOS app with bundle id com.lafla.app
//      - Create Entitlement "Lafla Pro" (must match PREMIUM_ENTITLEMENT below)
//      - Create Offering "default" with two packages: $rc_monthly, $rc_annual
//      - Attach App Store products to packages
//   4. Add key to app.json:
//        "extra": { "revenuecatIosKey": "appl_xxxxxxxxxxxxxx" }
//   5. Test with Sandbox testers in App Store Connect → Users and Access → Sandbox.

import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import { captureException, captureMessage } from "./sentry";
import { isObject, parseSafe } from "./json-safe";
import { isRewardedPremiumActive } from "./rewarded";
import { isSupabaseConfigured, supabase } from "./supabase";

// ------------------------------------------------------------
// Types — stable contract with callers.
// ------------------------------------------------------------

export type PackageId = "monthly" | "yearly";

// IMPORTANT: This MUST match the entitlement identifier in the RevenueCat
// dashboard exactly (case + spaces). Set to "Lafla Pro" to align with the
// dashboard entry created during initial RC project setup.
export const PREMIUM_ENTITLEMENT = "Lafla Pro";

export type PurchaseResult = {
  ok: boolean;
  entitlement?: string;
  error?: string;
  cancelled?: boolean;
};

type MockState = {
  active: boolean;
  entitlement?: string;
  since?: string;
  packageId?: PackageId;
};

// ------------------------------------------------------------
// SDK loader — defensive, never throws.
// ------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _purchases: any = null;
let _initialized = false;
let _initFailed = false;
let _initPromise: Promise<boolean> | null = null;

function loadSdk(): // eslint-disable-next-line @typescript-eslint/no-explicit-any
any | null {
  if (_purchases || _initFailed) return _purchases;
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require("react-native-purchases");
    _purchases = mod?.default ?? mod;
    return _purchases;
  } catch {
    _initFailed = true;
    return null;
  }
}

function getApiKey(): string | null {
  const fromExtra = Constants.expoConfig?.extra?.revenuecatIosKey as
    | string
    | undefined;
  const fromEnv = process.env.EXPO_PUBLIC_REVENUECAT_IOS_KEY;
  const key = fromExtra ?? fromEnv ?? "";
  return key && key.length > 0 && !key.includes("YOUR_") ? key : null;
}

async function initIfNeeded(): Promise<boolean> {
  if (_initialized) return _purchases !== null;
  if (_initPromise) return _initPromise;

  _initPromise = (async () => {
    const Purchases = loadSdk();
    if (!Purchases) return false;

    const key = getApiKey();
    if (!key) {
      if (__DEV__) {
        // eslint-disable-next-line no-console
        console.debug("[Lafla iap] No RevenueCat key — falling back to mock");
      } else {
        captureMessage("iap.no_revenuecat_key_in_production", "warning");
      }
      return false;
    }

    try {
      await Purchases.configure({ apiKey: key });
      _initialized = true;
      return true;
    } catch (err) {
      if (__DEV__) {
        // eslint-disable-next-line no-console
        console.warn("[Lafla iap] configure() failed:", err);
      }
      captureException(err, { source: "iap.initIfNeeded" });
      return false;
    }
  })();

  try {
    return await _initPromise;
  } finally {
    _initPromise = null;
  }
}

// ------------------------------------------------------------
// 2026-05-25 (B-PAY-3) — Premium-state change pub/sub.
// Purchase başarılı oldu ama UI component'leri (AdBanner, scenario,
// freechat) eski "free" cache'iyle render kalıyordu. Mount sonrası tek
// okuma yapan component'ler subscribePremiumChange ile listener kaydı.
// ------------------------------------------------------------

const _premiumListeners = new Set<() => void>();

export function subscribePremiumChange(cb: () => void): () => void {
  _premiumListeners.add(cb);
  return () => {
    _premiumListeners.delete(cb);
  };
}

export function notifyPremiumChange(): void {
  for (const cb of _premiumListeners) {
    try {
      cb();
    } catch {
      // bir listener çökerse diğerleri etkilenmesin
    }
  }
}

export async function syncRevenueCatSubscription(): Promise<void> {
  if (!isSupabaseConfigured) return;
  const { error } = await supabase.functions.invoke("revenuecat-sync", {
    method: "POST",
  });
  if (error) {
    captureException(error, { source: "iap.syncRevenueCatSubscription" });
  }
}

// ------------------------------------------------------------
// Mock storage helpers (fallback when SDK unavailable).
// ------------------------------------------------------------

const K_MOCK = "lafla.premium.mock";

async function readMock(): Promise<MockState> {
  try {
    const raw = await AsyncStorage.getItem(K_MOCK);
    const parsed = parseSafe<Partial<MockState>>(raw, { active: false }, isObject, {
      source: "iap.readMock",
    });
    return { ...parsed, active: !!parsed.active };
  } catch {
    return { active: false };
  }
}

async function writeMock(next: MockState): Promise<void> {
  try {
    await AsyncStorage.setItem(K_MOCK, JSON.stringify(next));
  } catch {
    // ignore
  }
}

// ------------------------------------------------------------
// Dev helpers
// ------------------------------------------------------------

export async function __setMockPremium(active: boolean): Promise<void> {
  await writeMock({
    active,
    entitlement: active ? PREMIUM_ENTITLEMENT : undefined,
    since: active ? new Date().toISOString() : undefined,
  });
}

export async function __clearMockPremium(): Promise<void> {
  try {
    await AsyncStorage.removeItem(K_MOCK);
  } catch {
    // ignore
  }
}

// Public — answer "is SDK live?" for paywall UI to show fallback banner
export async function isLiveBilling(): Promise<boolean> {
  return await initIfNeeded();
}

// ------------------------------------------------------------
// Public API
// ------------------------------------------------------------

/**
 * Returns true if the user has the premium entitlement.
 *
 * 2026-05-24 — Rewarded ad grant'i de OR'lanır. Kullanıcı "reklamı izle,
 * bugün için Pro aç" ile geçici premium aldıysa AdBanner, paywall gate,
 * premium feature'lar bu duruma otomatik saygı duyar. Rewarded path RC
 * entitlement'ına dokunmaz — bağımsız asyncstorage flag.
 *
 * Real SDK: Purchases.getCustomerInfo() → entitlements.premium.isActive.
 * Fallback: read lafla.premium.mock.
 */
export async function isPremium(): Promise<boolean> {
  // Rewarded grant her şeyden önce — kullanıcı "bugün Pro" açmışsa hemen ver.
  if (await isRewardedPremiumActive().catch(() => false)) return true;

  const live = await initIfNeeded();
  if (!live) {
    // In production the mock store is intentionally unreachable — see
    // purchasePackage() for the matching guard. Treating a missing SDK as
    // "not premium" is the safe failure mode.
    if (!__DEV__) return false;
    return (await readMock()).active;
  }

  // Defensive: initIfNeeded() returning true means we configured the SDK at
  // least once, but a hot-reload or memory pressure can null out the module
  // handle. Without this guard the next line throws "Cannot read properties
  // of null (reading 'getCustomerInfo')" which crashes the paywall screen.
  if (!_purchases) {
    if (!__DEV__) return false;
    return (await readMock()).active;
  }

  try {
    const info = await _purchases.getCustomerInfo();
    return Boolean(info?.entitlements?.active?.[PREMIUM_ENTITLEMENT]);
  } catch {
    if (!__DEV__) return false;
    return (await readMock()).active;
  }
}

/**
 * Initiate a purchase.
 * Real SDK: fetch offerings → find package → purchase → check entitlement.
 * Fallback: persist mock state.
 */
export async function purchasePackage(id: PackageId): Promise<PurchaseResult> {
  if (id !== "monthly" && id !== "yearly") {
    return { ok: false, error: `Unknown package id: ${String(id)}` };
  }

  const live = await initIfNeeded();
  if (!live) {
    // 2026-05-25 (B-PAY-5) — Init başarısızsa bir kez retry için bayrağı
    // sıfırla; sonraki purchasePackage çağrısı (kullanıcı "Tekrar dene"
    // basarsa) yeniden init dener. Aksi halde "_initialized=true,
    // _purchases=null" durumunda sıkışıyordu.
    _initialized = false;
    // PRODUCTION SAFETY: the mock path grants premium without any real
    // charge. In a released build that would be a "give everyone premium"
    // backdoor. Gate the mock strictly to __DEV__.
    if (!__DEV__) {
      return {
        ok: false,
        error:
          "Ödeme servisine ulaşılamıyor. İnternet bağlantını kontrol edip tekrar dene. Devam ederse berkkdemirok@gmail.com adresine yaz.",
      };
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
    try {
      await writeMock({
        active: true,
        entitlement: PREMIUM_ENTITLEMENT,
        since: new Date().toISOString(),
        packageId: id,
      });
      return { ok: true, entitlement: PREMIUM_ENTITLEMENT };
    } catch (err) {
      return {
        ok: false,
        error: err instanceof Error ? err.message : "Mock purchase failed",
      };
    }
  }

  // Same defensive null-check as isPremium(): live=true but _purchases nulled
  // out by RN hot-reload or fast-refresh would otherwise crash mid-purchase.
  if (!_purchases) {
    return {
      ok: false,
      error: "Billing SDK not available",
    };
  }

  try {
    const offerings = await _purchases.getOfferings();
    const current = offerings?.current;
    if (!current) {
      return { ok: false, error: "No current offering configured" };
    }

    // Map our PackageId to RevenueCat's package types and identifiers. The
    // dashboard has historically used both RevenueCat defaults ($rc_monthly /
    // $rc_annual) and plain aliases (monthly / yearly); accept both so a
    // correct StoreKit product is not missed because of dashboard naming.
    const packageAliases =
      id === "monthly"
        ? new Set(["monthly", "$rc_monthly"])
        : new Set(["yearly", "annual", "$rc_annual"]);
    const pkg =
      id === "monthly"
        ? current.monthly ??
          current.availablePackages?.find(
            (p: { identifier?: string; packageType?: string }) =>
              packageAliases.has(String(p.identifier ?? "").toLowerCase()) ||
              packageAliases.has(String(p.packageType ?? "").toLowerCase()),
          )
        : current.annual ??
          current.availablePackages?.find(
            (p: { identifier?: string; packageType?: string }) =>
              packageAliases.has(String(p.identifier ?? "").toLowerCase()) ||
              packageAliases.has(String(p.packageType ?? "").toLowerCase()),
          );

    if (!pkg) {
      return { ok: false, error: `Package ${id} not found in offering` };
    }

    const { customerInfo } = await _purchases.purchasePackage(pkg);
    const active = Boolean(
      customerInfo?.entitlements?.active?.[PREMIUM_ENTITLEMENT],
    );
    if (active) {
      await syncRevenueCatSubscription();
      // 2026-05-25 (B-PAY-3) — UI'a haber ver, AdBanner/scenario/freechat
      // mount'unu beklemeden refresh etsin.
      notifyPremiumChange();
      return { ok: true, entitlement: PREMIUM_ENTITLEMENT };
    }
    return { ok: false, error: "Purchase did not unlock entitlement" };
  } catch (err: unknown) {
    // RevenueCat throws { userCancelled: true } on cancel
    if (typeof err === "object" && err !== null) {
      const e = err as { userCancelled?: boolean; message?: string; code?: string };
      if (e.userCancelled) {
        return { ok: false, cancelled: true, error: "User cancelled" };
      }
      return { ok: false, error: e.message ?? "Purchase failed" };
    }
    return { ok: false, error: "Purchase failed" };
  }
}

/**
 * Restore previous purchases.
 * Real SDK: Purchases.restorePurchases() → check entitlement.
 * Fallback: re-read mock state.
 */
export type RestoreResult =
  | { ok: true; active: boolean }
  | { ok: false; error: string };

export async function restorePurchases(): Promise<boolean> {
  const r = await restorePurchasesDetailed();
  return r.ok && r.active;
}

/**
 * 2026-05-25 (B-PAY-2) — restorePurchases boolean dönüyordu; network fail
 * ile "abonelik yok" sessizce karışıyordu. Detailed version error mesajı
 * döner; Apple 3.1.1 reject riski azaltılır.
 */
export async function restorePurchasesDetailed(): Promise<RestoreResult> {
  const live = await initIfNeeded();
  if (!live) {
    if (!__DEV__) {
      return { ok: false, error: "Billing SDK not available" };
    }
    await new Promise((resolve) => setTimeout(resolve, 200));
    return { ok: true, active: (await readMock()).active };
  }

  if (!_purchases) {
    if (!__DEV__) {
      return { ok: false, error: "Billing SDK not available" };
    }
    return { ok: true, active: (await readMock()).active };
  }

  try {
    const info = await _purchases.restorePurchases();
    const active = Boolean(info?.entitlements?.active?.[PREMIUM_ENTITLEMENT]);
    await syncRevenueCatSubscription();
    if (active) notifyPremiumChange();
    return { ok: true, active };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Restore failed";
    return { ok: false, error: msg };
  }
}

/**
 * Set the RevenueCat user ID (call after sign-in to attribute purchases).
 */
export async function setUserId(userId: string | null): Promise<void> {
  const live = await initIfNeeded();
  if (!live) return;
  // Defensive null-check (see isPremium for rationale).
  if (!_purchases) return;
  try {
    if (userId) {
      await _purchases.logIn(userId);
      await syncRevenueCatSubscription();
    } else {
      await _purchases.logOut();
    }
  } catch {
    // ignore — best effort
  }
}

/**
 * Fetch the current offering for display (prices, etc) without purchasing.
 * Returns null when SDK unavailable.
 *
 * 2026-05-24 — `trialDays` eklendi. App Store Connect'te ürün için
 * "Introductory Offer: Free Trial" tanımlıysa RevenueCat product.introPrice
 * dolu gelir; periodUnit (DAY/WEEK) + periodNumberOfUnits gün sayısına
 * çevrilir. Trial yokken `undefined` döner, paywall pill'i gizler.
 */
export async function getOffering(): Promise<{
  monthly: {
    price: string;
    priceAmountMicros?: number;
    trialDays?: number;
  } | null;
  yearly: {
    price: string;
    priceAmountMicros?: number;
    trialDays?: number;
  } | null;
} | null> {
  const live = await initIfNeeded();
  if (!live) return null;
  // Defensive null-check (see isPremium for rationale).
  if (!_purchases) return null;
  try {
    const offerings = await _purchases.getOfferings();
    const current = offerings?.current;
    if (!current) return null;
    const monthly = current.monthly?.product;
    const yearly = current.annual?.product;
    return {
      monthly: monthly
        ? {
            price: monthly.priceString,
            priceAmountMicros: monthly.priceAmountMicros,
            trialDays: extractTrialDays(monthly),
          }
        : null,
      yearly: yearly
        ? {
            price: yearly.priceString,
            priceAmountMicros: yearly.priceAmountMicros,
            trialDays: extractTrialDays(yearly),
          }
        : null,
    };
  } catch {
    return null;
  }
}

/**
 * RevenueCat product objesinden ücretsiz deneme gün sayısını çıkar.
 * Yapı: `product.introPrice` veya `product.introductoryPrice` (SDK version)
 * içinde `periodUnit` ("DAY" | "WEEK" | "MONTH" | "YEAR") + `periodNumberOfUnits`.
 * Sadece bedava trial (price === 0 veya pricePerWeek === 0) sayılır.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractTrialDays(product: any): number | undefined {
  const intro = product?.introPrice ?? product?.introductoryPrice;
  if (!intro) return undefined;
  // Free trial check — fiyat 0 veya yok.
  const price = intro.price ?? intro.priceAmountMicros;
  if (price !== 0 && price !== "0" && price != null) return undefined;
  const unit = String(intro.periodUnit ?? intro.unit ?? "").toUpperCase();
  const n = Number(intro.periodNumberOfUnits ?? intro.numberOfUnits ?? 0);
  if (!Number.isFinite(n) || n <= 0) return undefined;
  const perUnitDays =
    unit === "DAY" ? 1 : unit === "WEEK" ? 7 : unit === "MONTH" ? 30 : unit === "YEAR" ? 365 : 0;
  if (perUnitDays === 0) return undefined;
  return n * perUnitDays;
}
