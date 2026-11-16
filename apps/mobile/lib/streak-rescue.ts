// Lafla — Streak Rescue: free users earn a streak shield via a rewarded ad.
//
// 2026-11-16 — Free tier had zero streak protection (FREE_MONTHLY_GRANT = 0
// in lib/streak-shield.ts) → one missed day reset the streak → churn. Now a
// free user who sees the streak-at-risk banner on Today can watch a short
// rewarded ad ("Seriyi koru — kısa bir reklam izle") to earn ONE shield.
//
// Rules (conservative on purpose — Pro must stay the better deal: Pro gets
// 2 automatic shields/month with zero ads):
//   • Pro / temporary rewarded-Pro users: not eligible (they use the monthly
//     grant path, unchanged). Unknown entitlement (offline, RC down): not
//     eligible — fail closed, never show an ad to a possibly-paying user.
//   • Hold cap: max 1 shield held at a time (FREE_EARNED_SHIELD_CAP).
//   • Daily cap: max 1 successful earn per local calendar day.
//   • Monthly cap: max 2 successful earns per local calendar month — blocks
//     "practice every other day + watch an ad" farming that would make the
//     streak meaningless and out-protect Pro.
//   • A shield is granted ONLY after the ad SDK's EARNED_REWARD callback
//     (RewardedResult.ok === true). Dismissed/failed/no-fill → nothing.
//   • The ad shown here does NOT grant the 30-minute temporary Pro.
//
// Storage:
//   lafla.shield.rescue_log : {"ym":"YYYY-MM","monthCount":n,"lastDay":"YYYY-MM-DD"}

import AsyncStorage from "@react-native-async-storage/async-storage";

import { showRewardedAdForPlacement, type RewardedResult } from "./ads";
import { trackEvent } from "./analytics";
import { localDayKey } from "./day-key";
import { getPremiumStatus } from "./iap";
import { parseSafe, isObject } from "./json-safe";
import {
  FREE_EARNED_SHIELD_CAP,
  getShieldCount,
  getStreakRiskState,
  grantEarnedShield,
  type StreakRiskState,
} from "./streak-shield";

const K_RESCUE_LOG = "lafla.shield.rescue_log";

export const RESCUE_DAILY_EARN_CAP = 1;
export const RESCUE_MONTHLY_EARN_CAP = 2;
export const RESCUE_AD_PLACEMENT = "streak_rescue";

export type RescueIneligibleReason =
  | "premium"
  | "premium_unknown"
  | "already_has_shield"
  | "daily_cap"
  | "monthly_cap";

export type RescueEligibility =
  | { eligible: true }
  | { eligible: false; reason: RescueIneligibleReason };

export type RescueResult =
  | { ok: true }
  | {
      ok: false;
      reason: RescueIneligibleReason | "ad_failed" | "ad_dismissed" | "in_progress" | "grant_failed";
    };

interface RescueLog {
  ym: string;
  monthCount: number;
  lastDay: string | null;
  dayCount: number;
}

function ymKey(d: Date): string {
  return localDayKey(d).slice(0, 7);
}

async function readLog(now: Date): Promise<RescueLog> {
  const empty: RescueLog = { ym: ymKey(now), monthCount: 0, lastDay: null, dayCount: 0 };
  try {
    const raw = await AsyncStorage.getItem(K_RESCUE_LOG);
    if (!raw) return empty;
    const parsed = parseSafe<Partial<RescueLog>>(raw, {}, isObject, {
      source: "streak-rescue.readLog",
    });
    const sameMonth = parsed.ym === ymKey(now);
    const sameDay = parsed.lastDay === localDayKey(now);
    return {
      ym: ymKey(now),
      monthCount:
        sameMonth && typeof parsed.monthCount === "number" ? parsed.monthCount : 0,
      lastDay: typeof parsed.lastDay === "string" ? parsed.lastDay : null,
      dayCount: sameDay && typeof parsed.dayCount === "number" ? parsed.dayCount : 0,
    };
  } catch {
    // Fail closed on unreadable storage: treat caps as reached.
    return {
      ym: ymKey(now),
      monthCount: RESCUE_MONTHLY_EARN_CAP,
      lastDay: localDayKey(now),
      dayCount: RESCUE_DAILY_EARN_CAP,
    };
  }
}

async function recordEarn(now: Date): Promise<void> {
  const log = await readLog(now);
  const next: RescueLog = {
    ym: ymKey(now),
    monthCount: log.monthCount + 1,
    lastDay: localDayKey(now),
    dayCount: log.dayCount + 1,
  };
  await AsyncStorage.setItem(K_RESCUE_LOG, JSON.stringify(next));
}

/**
 * Can this user earn a shield via a rewarded ad right now? Never throws.
 * Does NOT check ad availability — the UI also requires a preloaded ad.
 */
export async function getStreakRescueEligibility(
  now: Date = new Date(),
): Promise<RescueEligibility> {
  try {
    const premium = await getPremiumStatus().catch(() => "unknown" as const);
    if (premium === "active") return { eligible: false, reason: "premium" };
    if (premium !== "inactive") {
      return { eligible: false, reason: "premium_unknown" };
    }
    const count = await getShieldCount();
    if (count >= FREE_EARNED_SHIELD_CAP) {
      return { eligible: false, reason: "already_has_shield" };
    }
    const log = await readLog(now);
    if (log.dayCount >= RESCUE_DAILY_EARN_CAP) {
      return { eligible: false, reason: "daily_cap" };
    }
    if (log.monthCount >= RESCUE_MONTHLY_EARN_CAP) {
      return { eligible: false, reason: "monthly_cap" };
    }
    return { eligible: true };
  } catch {
    return { eligible: false, reason: "premium_unknown" };
  }
}

let _inFlight = false;

/**
 * Full rescue flow: eligibility → rewarded ad → (only on completed reward)
 * grant one shield + record the earn. Never throws.
 *
 * `playAd` is injectable for tests; production uses the AdMob path that
 * does NOT grant temporary Pro.
 */
export async function earnShieldWithRewardedAd(
  playAd: () => Promise<RewardedResult> = () =>
    showRewardedAdForPlacement(RESCUE_AD_PLACEMENT),
  now: () => Date = () => new Date(),
): Promise<RescueResult> {
  if (_inFlight) return { ok: false, reason: "in_progress" };
  _inFlight = true;
  try {
    const before = await getStreakRescueEligibility(now());
    if (!before.eligible) return { ok: false, reason: before.reason };

    void trackEvent("streak_rescue_ad_started").catch(() => {});
    let result: RewardedResult;
    try {
      result = await playAd();
    } catch {
      result = { ok: false, reason: "threw" };
    }
    if (!result.ok) {
      const reason = result.userClosed ? "ad_dismissed" : "ad_failed";
      void trackEvent("streak_rescue_ad_failed", {
        reason,
        detail: result.reason,
      }).catch(() => {});
      return { ok: false, reason };
    }

    // Reward callback completed. Re-check caps (state may have changed while
    // the ad was on screen, e.g. a purchase) before granting.
    const after = await getStreakRescueEligibility(now());
    if (!after.eligible) {
      void trackEvent("streak_rescue_grant_skipped", {
        reason: after.reason,
      }).catch(() => {});
      return { ok: false, reason: after.reason };
    }
    const granted = await grantEarnedShield();
    if (!granted) {
      void trackEvent("streak_rescue_grant_skipped", {
        reason: "grant_failed",
      }).catch(() => {});
      return { ok: false, reason: "grant_failed" };
    }
    await recordEarn(now()).catch(() => {});
    void trackEvent("streak_rescue_shield_earned").catch(() => {});
    return { ok: true };
  } catch {
    return { ok: false, reason: "grant_failed" };
  } finally {
    _inFlight = false;
  }
}

/**
 * What the Today streak-at-risk banner should show. Never throws.
 *
 * Visible for the WHOLE window in which a shield can still matter (local
 * calendar days, see getStreakRiskState):
 *   • "due_today"        — streak alive, lesson today extends it; a held or
 *                          earned shield is insurance against missing today.
 *   • "missed_yesterday" — one day missed; a lesson today saves the streak
 *                          only with a shield. Shown ONLY if the user holds a
 *                          shield or can still earn one — otherwise the
 *                          "one scene saves it" promise would be false.
 * Returns "none" with no streak, practice today, or a 3+ day gap.
 */
export async function getStreakRescueBannerState(
  profile: { current_streak?: number | null; last_lesson_at?: string | null } | null | undefined,
  now: Date = new Date(),
): Promise<StreakRiskState> {
  try {
    if (!profile || !profile.current_streak || profile.current_streak <= 0) {
      return "none";
    }
    const risk = getStreakRiskState(profile.last_lesson_at, now);
    if (risk !== "missed_yesterday") return risk;
    if ((await getShieldCount()) > 0) return risk;
    const eligibility = await getStreakRescueEligibility(now);
    return eligibility.eligible ? risk : "none";
  } catch {
    return "none";
  }
}
