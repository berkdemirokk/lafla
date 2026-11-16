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
import { getSubscriptionStatus, hasPaidEntitlement } from "./iap";
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

    // New month — grant according to entitlement. PAID subscription only:
    // the 30-min rewarded-ad "temporary Pro" must never unlock the Pro grant.
    const status = await getSubscriptionStatus().catch(() => "unknown" as const);
    // Offline / not yet resolved: don't lock the month with a free (0) grant.
    // Leave count + marker untouched so the next call retries.
    if (status === "unknown") return;
    const premium = status === "active";
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
  const premium = await hasPaidEntitlement().catch(() => false);
  return premium ? PREMIUM_MONTHLY_GRANT : FREE_MONTHLY_GRANT;
}

/**
 * Where the user stands relative to the streak cliff (local calendar days —
 * mirrors bumpStreak in lib/local-progress.ts):
 *
 *   • "none"             — practiced today, no history, 3+ days missed (a
 *                          shield can no longer help), or clock drift.
 *   • "due_today"        — last lesson was YESTERDAY and it's been ≥22h:
 *                          a lesson today extends the streak; if today is
 *                          missed, a held shield will save it tomorrow.
 *   • "missed_yesterday" — last lesson was the day BEFORE yesterday (exactly
 *                          one missed day). A lesson today keeps the streak
 *                          ONLY if a shield is consumed. Lasts until local
 *                          midnight — after that the gap is 3 days and the
 *                          streak resets regardless of shields.
 */
export type StreakRiskState = "none" | "due_today" | "missed_yesterday";

/** Hours since the last lesson before a yesterday-practicer gets nudged. */
const DUE_TODAY_NUDGE_HOURS = 22;

function calendarDaysBetween(a: Date, b: Date): number {
  const aStart = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const bStart = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.round((bStart - aStart) / 86_400_000);
}

export function getStreakRiskState(
  lastLessonIso: string | null | undefined,
  now: Date = new Date(),
): StreakRiskState {
  if (!lastLessonIso) return "none";
  const last = new Date(lastLessonIso);
  if (Number.isNaN(last.getTime())) return "none";
  const daysAgo = calendarDaysBetween(last, now);
  if (daysAgo === 2) return "missed_yesterday";
  if (daysAgo === 1) {
    const ageH = (now.getTime() - last.getTime()) / 3600000;
    return ageH >= DUE_TODAY_NUDGE_HOURS ? "due_today" : "none";
  }
  return "none";
}

/**
 * Boolean form of getStreakRiskState — true for "due_today" and
 * "missed_yesterday". (Was a 22–26h wall-clock window, which hid the
 * rescue offer from users opening the app later on the missed day.)
 */
export async function isStreakAtRisk(
  lastLessonIso?: string,
  now: Date = new Date(),
): Promise<boolean> {
  return getStreakRiskState(lastLessonIso, now) !== "none";
}
