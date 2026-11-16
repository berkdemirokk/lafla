// Lafla — Streak Shield (premium loss-aversion mechanic).
//
// Spec: docs/STREAK_SHIELD.md.
//
// One missed day → shield consumed silently, streak preserved.
// Two or more missed days → shield does NOT save you (intentional —
// the user knows they didn't earn that save).
//
// Premium: 2 shields per calendar month. Free: 0. Shields refresh on
// the 1st of each month (local time). Unused shields don't roll over.
//
// 2026-11-16 — Free users can EARN one shield by watching a rewarded ad
// (see lib/streak-rescue.ts for caps). An earned shield is held at most
// one at a time and survives the monthly refresh until it is consumed.
//
// Storage:
//   lafla.shield.count        : "0" | "1" | "2"
//   lafla.shield.refresh_ym   : "YYYY-MM" (refresh tracking)
//   lafla.shield.last_used_at : ISO string (telemetry / "shield rolled in"
//                               toast hint)
//   lafla.shield.earned       : "1" while the pool holds an ad-earned shield

import AsyncStorage from "@react-native-async-storage/async-storage";
import { isPremium } from "./iap";
import { trackEvent } from "./analytics";

const K_COUNT = "lafla.shield.count";
const K_REFRESH = "lafla.shield.refresh_ym";
const K_LAST_USED = "lafla.shield.last_used_at";
const K_EARNED = "lafla.shield.earned";

const PREMIUM_MONTHLY_GRANT = 2;
const FREE_MONTHLY_GRANT = 0;
/** Max ad-earned shields a free user can HOLD at once. */
export const FREE_EARNED_SHIELD_CAP = 1;

function ymKey(d = new Date()): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

/**
 * Read the current shield count, refreshing the monthly grant if we've
 * crossed into a new calendar month since last read.
 */
export async function getShieldCount(): Promise<number> {
  await refreshIfNewMonth();
  try {
    const raw = await AsyncStorage.getItem(K_COUNT);
    if (!raw) return 0;
    const n = parseInt(raw, 10);
    return Number.isNaN(n) ? 0 : Math.max(0, Math.min(2, n));
  } catch {
    return 0;
  }
}

/**
 * Manually trigger the monthly refresh. Idempotent — only writes when
 * the stored YM differs from the current YM. Called automatically by
 * getShieldCount() and consumeShieldIfAvailable().
 */
async function refreshIfNewMonth(): Promise<void> {
  try {
    const stored = await AsyncStorage.getItem(K_REFRESH);
    const currentYm = ymKey();
    if (stored === currentYm) return;

    // New month — grant according to entitlement.
    const premium = await isPremium().catch(() => false);
    let grant = premium ? PREMIUM_MONTHLY_GRANT : FREE_MONTHLY_GRANT;
    if (premium) {
      // Premium grant supersedes any ad-earned shield.
      await AsyncStorage.removeItem(K_EARNED);
    } else if ((await AsyncStorage.getItem(K_EARNED)) === "1") {
      // An ad-earned shield is the user's own — don't wipe it at month end.
      grant = Math.max(grant, FREE_EARNED_SHIELD_CAP);
    }
    await AsyncStorage.setItem(K_COUNT, String(grant));
    await AsyncStorage.setItem(K_REFRESH, currentYm);
    void trackEvent("shield_refreshed", {
      premium,
      grant,
      ym: currentYm,
    }).catch(() => {});
  } catch {
    // best effort — never block the streak path
  }
}

/**
 * Attempt to spend one shield. Returns true if a shield was consumed
 * (and therefore the streak should be preserved); false if the user
 * has no shields available (and the streak should reset normally).
 *
 * Caller (markActive in local-progress.ts) only invokes this when the
 * gap is exactly 1 day. Multi-day gaps skip the shield path entirely.
 */
export async function consumeShieldIfAvailable(): Promise<boolean> {
  await refreshIfNewMonth();
  try {
    const raw = await AsyncStorage.getItem(K_COUNT);
    const n = raw ? parseInt(raw, 10) : 0;
    if (Number.isNaN(n) || n <= 0) {
      void trackEvent("shield_not_available").catch(() => {});
      return false;
    }
    await AsyncStorage.setItem(K_COUNT, String(n - 1));
    if (n - 1 <= 0) await AsyncStorage.removeItem(K_EARNED);
    await AsyncStorage.setItem(K_LAST_USED, new Date().toISOString());
    void trackEvent("shield_consumed", { remaining: n - 1 }).catch(() => {});
    return true;
  } catch {
    return false;
  }
}

/**
 * Add one ad-earned shield to the pool (free tier). Returns false — and
 * writes nothing — when the user already holds FREE_EARNED_SHIELD_CAP or
 * more shields. Callers MUST only invoke this after a completed rewarded-ad
 * reward callback; eligibility/daily caps live in lib/streak-rescue.ts.
 */
export async function grantEarnedShield(): Promise<boolean> {
  await refreshIfNewMonth();
  try {
    const raw = await AsyncStorage.getItem(K_COUNT);
    const parsed = raw ? parseInt(raw, 10) : 0;
    const n = Number.isNaN(parsed) ? 0 : Math.max(0, parsed);
    if (n >= FREE_EARNED_SHIELD_CAP) return false;
    await AsyncStorage.setItem(K_COUNT, String(n + 1));
    await AsyncStorage.setItem(K_EARNED, "1");
    return true;
  } catch {
    return false;
  }
}

/**
 * Was a shield used recently (last 24h)? Drives the "your streak was
 * saved by a shield" toast on home open. Returns null if no recent use.
 */
export async function recentShieldUseIso(): Promise<string | null> {
  try {
    const raw = await AsyncStorage.getItem(K_LAST_USED);
    if (!raw) return null;
    const t = new Date(raw).getTime();
    if (Number.isNaN(t)) return null;
    const ageH = (Date.now() - t) / 3600000;
    if (ageH > 24) return null;
    return raw;
  } catch {
    return null;
  }
}

/**
 * Maximum shields user could have this month (informational — used by
 * profile rosette tooltip and home banner copy).
 */
export async function getMonthlyGrant(): Promise<number> {
  const premium = await isPremium().catch(() => false);
  return premium ? PREMIUM_MONTHLY_GRANT : FREE_MONTHLY_GRANT;
}

/**
 * Total streak-at-risk check. Returns true if it's been ≥22h since the
 * user's last active session — the home banner uses this to nudge them
 * before the 24h cliff hits.
 */
export async function isStreakAtRisk(lastLessonIso?: string): Promise<boolean> {
  if (!lastLessonIso) return false;
  const last = new Date(lastLessonIso).getTime();
  if (Number.isNaN(last)) return false;
  const ageH = (Date.now() - last) / 3600000;
  // 22-26h window: at-risk. Before 22h = safe; after 26h = already broken
  // (or about to be saved by shield). The banner is most useful inside
  // this window so it doesn't nag well-streaked users every visit.
  return ageH >= 22 && ageH < 26;
}
