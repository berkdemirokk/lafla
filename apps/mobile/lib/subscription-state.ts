// Lafla — Subscription state manager.
//
// Richer counterpart to `lib/iap.ts`. Where `iap.ts` answers the boolean
// question "is the user entitled to premium *right now*?", this module
// describes the *shape* of their subscription: tier, trial status, when
// it expires, whether it will auto-renew, and which leg of the lifecycle
// they're currently on.
//
// We keep the two modules deliberately separate:
//   - `iap.ts`        — entitlement contract; what gates features.
//   - `subscription-state.ts` — descriptive state; what we *render* on
//     the paywall, settings screen, and "Manage subscription" CTAs.
//
// `iap.isPremium()` is a derived boolean over this state:
//   `isPremium  ===  state.isActive  &&  (state.tier !== 'free')`.
// We do NOT make `iap.ts` import this file — `isPremium` must remain a
// thin, fast read so feature gates stay zero-allocation.
//
// In production this layer would mirror StoreKit 2 / RevenueCat's
// `CustomerInfo`:
//   - `tier`           ← entitlement product identifier
//   - `isActive`       ← entitlements.active[premium] !== undefined
//   - `expiresAt`      ← entitlement.expirationDate
//   - `inTrial`        ← entitlement.periodType === 'trial' (or
//                       `Transaction.offerType === .introductory`)
//   - `trialEndsAt`    ← entitlement.expirationDate while inTrial
//   - `willRenew`      ← !entitlement.willRenew === false (StoreKit:
//                       `Product.SubscriptionInfo.RenewalState.autoRenewing`)
//
// Today everything is mocked through AsyncStorage so the rest of the app
// can be built and demoed end-to-end. See `docs/SUBSCRIPTION.md` for the
// state machine and the StoreKit mapping in full.

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useRef, useState } from "react";

// ------------------------------------------------------------
// Public types — the contract for callers (paywall, settings, hooks).
// ------------------------------------------------------------

export type SubscriptionTier = "free" | "premium_monthly" | "premium_yearly";

export type SubscriptionState = {
  /** Which plan the user is on. `free` covers both "never paid" and "lapsed". */
  tier: SubscriptionTier;
  /**
   * True while the user can use premium features. Stays true through the
   * paid period AND any active trial. Flips false once `expiresAt` passes
   * (and the cancel/grace flow has run).
   */
  isActive: boolean;
  /** ISO timestamp at which the current period ends. Null for `free`. */
  expiresAt: string | null;
  /** True while the user is inside a 7-day free trial. */
  inTrial: boolean;
  /** ISO timestamp at which the trial ends and the first charge would post. */
  trialEndsAt: string | null;
  /**
   * Auto-renew flag. Mirrors StoreKit's `willAutoRenew`. False after the
   * user taps "Cancel subscription" — they keep access until `expiresAt`,
   * then drop to `free`.
   */
  willRenew: boolean;
};

// ------------------------------------------------------------
// Mock storage — single key holds the entire snapshot.
// ------------------------------------------------------------

const K_SUBSCRIPTION = "lafla.subscription";

/** Length of the introductory free trial, in days. Apple's default is 7. */
const TRIAL_DAYS = 7;

/** Default state for a brand-new install. */
const FREE_STATE: SubscriptionState = {
  tier: "free",
  isActive: false,
  expiresAt: null,
  inTrial: false,
  trialEndsAt: null,
  willRenew: false,
};

function daysFromNow(days: number, from: Date = new Date()): string {
  const d = new Date(from);
  d.setDate(d.getDate() + days);
  return d.toISOString();
}

function isFutureIso(iso: string | null): boolean {
  if (!iso) return false;
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return false;
  return t > Date.now();
}

/**
 * Run any time-based transitions a stored snapshot may have aged into:
 *   - trial that has just ended → flip `inTrial` off (paid period begins)
 *   - period that has just expired with `willRenew: false` → drop to free
 *
 * This is what makes "cancel then wait" work without a server tick: the
 * next `getSubscriptionState()` call after the clock crosses `expiresAt`
 * will return the post-expiration state automatically.
 *
 * Production note: real StoreKit fires `Transaction.updates` for renewals
 * and revocations, so we'd update from those events instead of polling.
 */
function reconcile(state: SubscriptionState, now: Date = new Date()): SubscriptionState {
  let next = state;

  // Trial just ended — caller is now on the paid period (or about to lapse
  // if they cancelled during trial).
  if (next.inTrial && next.trialEndsAt && Date.parse(next.trialEndsAt) <= now.getTime()) {
    next = { ...next, inTrial: false, trialEndsAt: null };
  }

  // Period ended without auto-renew → drop to free.
  if (
    next.tier !== "free" &&
    next.expiresAt &&
    Date.parse(next.expiresAt) <= now.getTime() &&
    !next.willRenew
  ) {
    next = { ...FREE_STATE };
  }

  // Period ended WITH auto-renew → in production this would be a renewal
  // event from StoreKit. The mock just extends the expiry by one period so
  // the simulated subscription stays "active" across reloads.
  if (
    next.tier !== "free" &&
    next.expiresAt &&
    Date.parse(next.expiresAt) <= now.getTime() &&
    next.willRenew
  ) {
    const periodDays = next.tier === "premium_yearly" ? 365 : 30;
    next = { ...next, expiresAt: daysFromNow(periodDays, now) };
  }

  // Final `isActive` is derived — true iff we're inside a paid/trial window.
  const active = next.tier !== "free" && isFutureIso(next.expiresAt);
  if (active !== next.isActive) next = { ...next, isActive: active };

  return next;
}

async function readRaw(): Promise<SubscriptionState> {
  try {
    const raw = await AsyncStorage.getItem(K_SUBSCRIPTION);
    if (!raw) return { ...FREE_STATE };
    const parsed = JSON.parse(raw) as Partial<SubscriptionState>;
    return {
      tier: (parsed.tier as SubscriptionTier) ?? "free",
      isActive: !!parsed.isActive,
      expiresAt: parsed.expiresAt ?? null,
      inTrial: !!parsed.inTrial,
      trialEndsAt: parsed.trialEndsAt ?? null,
      willRenew: !!parsed.willRenew,
    };
  } catch {
    return { ...FREE_STATE };
  }
}

async function writeRaw(state: SubscriptionState): Promise<void> {
  try {
    await AsyncStorage.setItem(K_SUBSCRIPTION, JSON.stringify(state));
  } catch {
    // ignore — best-effort, matches iap.ts behaviour
  }
}

// ------------------------------------------------------------
// Public API
// ------------------------------------------------------------

/**
 * Read the current subscription snapshot, with time-based transitions
 * already applied. Safe to call from any screen — `O(1)` AsyncStorage hit.
 *
 * Mock: reads / reconciles `lafla.subscription`.
 * Prod: `Purchases.getCustomerInfo()` -> map to `SubscriptionState`.
 */
export async function getSubscriptionState(): Promise<SubscriptionState> {
  const stored = await readRaw();
  const reconciled = reconcile(stored);
  // Persist the reconciled state so subsequent reads are cheap.
  if (
    reconciled.tier !== stored.tier ||
    reconciled.isActive !== stored.isActive ||
    reconciled.expiresAt !== stored.expiresAt ||
    reconciled.inTrial !== stored.inTrial ||
    reconciled.trialEndsAt !== stored.trialEndsAt ||
    reconciled.willRenew !== stored.willRenew
  ) {
    await writeRaw(reconciled);
  }
  return reconciled;
}

/**
 * Start a 7-day free trial on the given plan. Idempotent guard: if the
 * user already has an active subscription we return the existing state
 * unchanged (Apple won't grant a second intro offer either).
 *
 * Mock: writes `{ tier, inTrial: true, trialEndsAt: +7d, expiresAt: +7d,
 *       willRenew: true }` so the trial *flows into* the paid period when
 *       it ends.
 * Prod: `Purchases.purchasePackage(pkgWithIntroOffer)` — StoreKit returns
 *       a `Transaction` with `offerType == .introductory` whose
 *       `expirationDate` is the trial end.
 */
export async function startTrial(plan: "monthly" | "yearly"): Promise<SubscriptionState> {
  const current = await getSubscriptionState();
  if (current.isActive) return current;

  const now = new Date();
  const trialEnd = daysFromNow(TRIAL_DAYS, now);
  const next: SubscriptionState = {
    tier: plan === "yearly" ? "premium_yearly" : "premium_monthly",
    isActive: true,
    expiresAt: trialEnd, // first paid charge would post at the same moment
    inTrial: true,
    trialEndsAt: trialEnd,
    willRenew: true,
  };
  await writeRaw(next);
  return next;
}

/**
 * Cancel auto-renewal. The user keeps access until `expiresAt`, then drops
 * to `free` on the next `getSubscriptionState()` after that timestamp.
 *
 * No-op if the user is already on `free`.
 *
 * Mock: flips `willRenew` to false; everything else preserved so the user
 *       sees an honest "you have premium until <date>" message.
 * Prod: cancellation happens via the OS Settings app — we cannot cancel
 *       on the user's behalf. Production version of this fn would deep-link
 *       to `itms-apps://apps.apple.com/account/subscriptions` instead, and
 *       the renewal flag would update on the next `CustomerInfo` refresh.
 */
export async function cancelSubscription(): Promise<SubscriptionState> {
  const current = await getSubscriptionState();
  if (current.tier === "free") return current;
  const next: SubscriptionState = { ...current, willRenew: false };
  await writeRaw(next);
  return next;
}

/**
 * Restore purchases — what the user taps after a re-install or switching
 * devices. Apple requires a restore affordance on every paywall.
 *
 * Mock: re-reads the persisted snapshot (no remote source of truth).
 * Prod: `Purchases.restorePurchases()` -> map the returned `CustomerInfo`
 *       to a fresh `SubscriptionState` and overwrite local storage. If the
 *       Apple ID has any historical purchase on this entitlement that's
 *       still active server-side, it comes back here.
 */
export async function restorePurchases(): Promise<SubscriptionState> {
  // Simulate a brief network roundtrip so callers can test loading states.
  await new Promise((resolve) => setTimeout(resolve, 200));
  return getSubscriptionState();
}

// ------------------------------------------------------------
// Dev helpers (exported so tests / debug menu can poke state)
// ------------------------------------------------------------

/**
 * Force a specific subscription snapshot. Dev / settings-only — do NOT
 * call from production UI. Useful for QA flows like "show me the expired
 * grace screen" without waiting 30 days of real time.
 */
export async function __setMockSubscription(
  patch: Partial<SubscriptionState>,
): Promise<SubscriptionState> {
  const current = await readRaw();
  const next: SubscriptionState = { ...current, ...patch };
  await writeRaw(next);
  return next;
}

/** Clear the snapshot entirely. Useful for "reset onboarding" debug flows. */
export async function __clearMockSubscription(): Promise<void> {
  try {
    await AsyncStorage.removeItem(K_SUBSCRIPTION);
  } catch {
    // ignore
  }
}

// ------------------------------------------------------------
// Hook
// ------------------------------------------------------------

export type UseSubscriptionResult = {
  /** Current snapshot. Defaults to `FREE_STATE` until the first read settles. */
  state: SubscriptionState;
  /** True until the first AsyncStorage read completes. */
  loading: boolean;
  /** Re-read from storage. Call after `startTrial` / `cancelSubscription` / `restorePurchases`. */
  refresh: () => Promise<void>;
};

/**
 * Reactive wrapper around `getSubscriptionState`. Mirrors `usePremium`'s
 * shape (loading + refresh) so callers feel familiar. The hook does NOT
 * subscribe to AsyncStorage — call `refresh()` after any mutator above.
 *
 * Typical usage:
 *   const { state, loading, refresh } = useSubscription();
 *   if (loading) return <Spinner />;
 *   if (state.inTrial) return <TrialBanner endsAt={state.trialEndsAt!} />;
 */
export function useSubscription(): UseSubscriptionResult {
  const [state, setState] = useState<SubscriptionState>(FREE_STATE);
  const [loading, setLoading] = useState<boolean>(true);
  // Track mount state so an in-flight refresh after unmount doesn't setState.
  const mountedRef = useRef(true);

  const refresh = useCallback(async () => {
    try {
      const next = await getSubscriptionState();
      if (mountedRef.current) setState(next);
    } catch {
      if (mountedRef.current) setState(FREE_STATE);
    } finally {
      if (mountedRef.current) setLoading(false);
    }
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    void refresh();
    return () => {
      mountedRef.current = false;
    };
  }, [refresh]);

  return { state, loading, refresh };
}
