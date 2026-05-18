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
//      - Create two products: lafla.premium.monthly (149 TL), lafla.premium.yearly (999 TL)
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
import { captureException } from "./sentry";
import { isObject, parseSafe } from "./json-safe";

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
  _initialized = true;

  const Purchases = loadSdk();
  if (!Purchases) return false;

  const key = getApiKey();
  if (!key) {
    if (__DEV__) {
      // eslint-disable-next-line no-console
      console.debug("[Lafla iap] No RevenueCat key — falling back to mock");
    }
    _initFailed = true;
    _purchases = null;
    return false;
  }

  try {
    await Purchases.configure({ apiKey: key });
    return true;
  } catch (err) {
    if (__DEV__) {
      // eslint-disable-next-line no-console
      console.warn("[Lafla iap] configure() failed:", err);
    }
    // A misconfigured RevenueCat SDK silently demotes every user to the
    // mock plan — surface this so we can see it in prod instead of
    // discovering it via "why is nobody paying?".
    captureException(err, { source: "iap.initIfNeeded" });
    _initFailed = true;
    _purchases = null;
    return false;
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
 * Real SDK: Purchases.getCustomerInfo() → entitlements.premium.isActive.
 * Fallback: read lafla.premium.mock.
 */
export async function isPremium(): Promise<boolean> {
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
    // PRODUCTION SAFETY: the mock path grants premium without any real
    // charge. In a released build that would be a "give everyone premium"
    // backdoor (anyone who triggers SDK init failure gets unlocked
    // content). Gate the mock strictly to __DEV__.
    if (!__DEV__) {
      return {
        ok: false,
        error: "Billing not available. Please try again or contact support.",
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

    // Map our PackageId to RevenueCat's identifiers
    const pkg =
      id === "monthly"
        ? current.monthly ?? current.availablePackages?.find((p: { identifier: string }) => p.identifier === "$rc_monthly")
        : current.annual ?? current.availablePackages?.find((p: { identifier: string }) => p.identifier === "$rc_annual");

    if (!pkg) {
      return { ok: false, error: `Package ${id} not found in offering` };
    }

    const { customerInfo } = await _purchases.purchasePackage(pkg);
    const active = Boolean(
      customerInfo?.entitlements?.active?.[PREMIUM_ENTITLEMENT],
    );
    if (active) {
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
export async function restorePurchases(): Promise<boolean> {
  const live = await initIfNeeded();
  if (!live) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return (await readMock()).active;
  }

  // Defensive null-check (see isPremium for rationale).
  if (!_purchases) return (await readMock()).active;

  try {
    const info = await _purchases.restorePurchases();
    return Boolean(info?.entitlements?.active?.[PREMIUM_ENTITLEMENT]);
  } catch {
    return false;
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
 */
export async function getOffering(): Promise<{
  monthly: { price: string; priceAmountMicros?: number } | null;
  yearly: { price: string; priceAmountMicros?: number } | null;
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
          }
        : null,
      yearly: yearly
        ? {
            price: yearly.priceString,
            priceAmountMicros: yearly.priceAmountMicros,
          }
        : null,
    };
  } catch {
    return null;
  }
}
