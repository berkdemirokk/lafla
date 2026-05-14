// Lafla — In-App Purchase (IAP) abstraction.
//
// This is a RevenueCat-shaped facade that returns mocked values today.
// Production wiring lives behind this interface so the rest of the app
// (paywall, premium gates, settings) never needs to change.
//
// To switch from mock -> real:
//   1. `pnpm add react-native-purchases` in apps/mobile (managed Expo dev build).
//   2. Add iOS bundle ID + RevenueCat API key in app.json `extra` (see docs/REVENUECAT.md).
//   3. Replace the mock bodies below with `Purchases.*` calls.
// The public signatures of `isPremium`, `purchasePackage`, `restorePurchases`
// MUST stay identical so callers don't have to change.
//
// All mock state persists in AsyncStorage so dev testing across reloads works.
// Key: `lafla.premium.mock` — JSON `{ active: boolean, entitlement?: string, since?: string }`.

import AsyncStorage from "@react-native-async-storage/async-storage";

// ------------------------------------------------------------
// Types — keep these stable; they're the contract with callers.
// ------------------------------------------------------------

export type PackageId = "monthly" | "yearly";

/** Entitlement identifier as configured in RevenueCat. */
export const PREMIUM_ENTITLEMENT = "premium";

export type PurchaseResult = {
  ok: boolean;
  entitlement?: string;
  error?: string;
};

type MockState = {
  active: boolean;
  entitlement?: string;
  since?: string; // ISO timestamp of the mock "purchase"
  packageId?: PackageId;
};

// ------------------------------------------------------------
// Mock storage helpers
// ------------------------------------------------------------

const K_MOCK = "lafla.premium.mock";

async function readMock(): Promise<MockState> {
  try {
    const raw = await AsyncStorage.getItem(K_MOCK);
    if (!raw) return { active: false };
    const parsed = JSON.parse(raw) as MockState;
    return { ...parsed, active: !!parsed.active };
  } catch {
    return { active: false };
  }
}

async function writeMock(next: MockState): Promise<void> {
  try {
    await AsyncStorage.setItem(K_MOCK, JSON.stringify(next));
  } catch {
    // ignore — mock state is best-effort
  }
}

// ------------------------------------------------------------
// Dev helpers (exported so tests / debug menu can poke state)
// ------------------------------------------------------------

/** Force a specific mock state. Dev-only — do NOT call from production UI. */
export async function __setMockPremium(active: boolean): Promise<void> {
  await writeMock({
    active,
    entitlement: active ? PREMIUM_ENTITLEMENT : undefined,
    since: active ? new Date().toISOString() : undefined,
  });
}

/** Clear the mock state entirely. Useful for "reset onboarding" debug flows. */
export async function __clearMockPremium(): Promise<void> {
  try {
    await AsyncStorage.removeItem(K_MOCK);
  } catch {
    // ignore
  }
}

// ------------------------------------------------------------
// Public API
// ------------------------------------------------------------

/**
 * Returns true if the user currently has the premium entitlement.
 *
 * Mock: reads `lafla.premium.mock` from AsyncStorage.
 * Prod: `Purchases.getCustomerInfo()` -> check entitlements[PREMIUM_ENTITLEMENT].isActive.
 */
export async function isPremium(): Promise<boolean> {
  const state = await readMock();
  return state.active;
}

/**
 * Initiate a purchase for the given package.
 *
 * Mock: pretends the purchase succeeded immediately and persists state.
 * Prod: `Purchases.purchasePackage(pkg)` -> handle StoreKit flow, then verify entitlement.
 *
 * @param id  Package identifier — must match the `monthly` / `yearly` offerings
 *            configured in RevenueCat dashboard.
 */
export async function purchasePackage(id: PackageId): Promise<PurchaseResult> {
  if (id !== "monthly" && id !== "yearly") {
    return { ok: false, error: `Unknown package id: ${String(id)}` };
  }

  // Simulate a brief StoreKit roundtrip so callers can test loading states.
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

/**
 * Restore previous purchases (e.g. user reinstalled the app).
 *
 * Mock: re-reads stored state — returns true iff `lafla.premium.mock` says active.
 * Prod: `Purchases.restorePurchases()` -> check entitlement after restore.
 *
 * @returns true if the user has an active entitlement after restore.
 */
export async function restorePurchases(): Promise<boolean> {
  // Simulate a brief network roundtrip.
  await new Promise((resolve) => setTimeout(resolve, 200));
  const state = await readMock();
  return state.active;
}
