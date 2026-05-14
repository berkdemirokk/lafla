// Lafla — Streak Shield (premium feature).
//
// Premium users get 2 "shields" per month that automatically save their
// streak if they miss a day. Free users have 0 shields/month. The shield
// is a soft anxiety-reducer: the streak counter (in `lib/local-progress`)
// remains conceptually the same — this module just decides whether to
// extend `last_lesson_at` to "yesterday" when the user has been gone for
// a 1-day gap.
//
// Storage: AsyncStorage key `lafla.streakShield` →
//   { month: 'YYYY-MM', used: number, lastUsedAt?: string }
// The `month` field is the rotation key — when the current month changes
// we reset `used` to 0. This avoids needing a daily cron and is robust
// to clock changes (the user can lose the month boundary forwards but not
// backwards: a Date.now() drift forward never spends more shields).
//
// The two public verbs are:
//   - `consumeShield(reason)` — mutate-only; deducts one shield if available.
//   - `restoreStreak()` — high-level "did the user just miss yesterday?
//     if so, spend a shield and patch `last_lesson_at` so `bumpStreak()`
//     treats their next lesson as continuous." Returns true if a shield
//     was consumed.
//
// IMPORTANT: this module does NOT modify `lib/local-progress.ts`. It reads
// `last_lesson_at` and writes it back via `setLocalProfile({...})` which
// is the public mutator; the streak counter itself is untouched.

import AsyncStorage from "@react-native-async-storage/async-storage";

import { getLocalProfile, setLocalProfile } from "./local-progress";
import { isPremium } from "./iap";

// ------------------------------------------------------------
// Constants
// ------------------------------------------------------------

const K_SHIELD = "lafla.streakShield";

/** Monthly shield allowance per tier. */
export const SHIELDS_PER_MONTH_PREMIUM = 2;
export const SHIELDS_PER_MONTH_FREE = 0;

export type ShieldReason = "missed_day";

// ------------------------------------------------------------
// Types
// ------------------------------------------------------------

interface ShieldStorage {
  month: string; // "YYYY-MM"
  used: number;
  lastUsedAt?: string; // ISO timestamp
}

export interface ShieldState {
  /** Shields remaining this month (clamped to >= 0). */
  available: number;
  /** Shields consumed this month so far. */
  usedThisMonth: number;
  /** ISO timestamp at which the monthly counter rolls over. */
  nextResetAt: string;
  /** ISO timestamp of the most recent shield use, if any. */
  lastUsedAt?: string;
  /** True if the active tier is premium (governs the cap). */
  isPremium: boolean;
  /** Cap for the active tier this month. */
  monthlyCap: number;
}

// ------------------------------------------------------------
// Date helpers (local time)
// ------------------------------------------------------------

function localMonthStr(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  return `${y}-${m}`;
}

function localDayStr(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** First moment of the *next* month, as an ISO string. */
function nextMonthResetIso(d: Date = new Date()): string {
  const next = new Date(d.getFullYear(), d.getMonth() + 1, 1, 0, 0, 0, 0);
  return next.toISOString();
}

// ------------------------------------------------------------
// Storage
// ------------------------------------------------------------

async function readRaw(): Promise<ShieldStorage> {
  const month = localMonthStr();
  try {
    const raw = await AsyncStorage.getItem(K_SHIELD);
    if (!raw) return { month, used: 0 };
    const parsed = JSON.parse(raw) as ShieldStorage;
    // Roll over if month changed since last write.
    if (parsed.month !== month) return { month, used: 0, lastUsedAt: parsed.lastUsedAt };
    return {
      month: parsed.month,
      used: Math.max(0, Number.isFinite(parsed.used) ? parsed.used : 0),
      lastUsedAt: parsed.lastUsedAt,
    };
  } catch {
    return { month, used: 0 };
  }
}

async function writeRaw(state: ShieldStorage): Promise<void> {
  try {
    await AsyncStorage.setItem(K_SHIELD, JSON.stringify(state));
  } catch {
    // ignore — best-effort
  }
}

// ------------------------------------------------------------
// Public API
// ------------------------------------------------------------

/**
 * Read the current shield wallet, applying premium-tier cap.
 *
 * Returns:
 *   - `available`   — max(monthlyCap - used, 0)
 *   - `usedThisMonth` — shields consumed in the current calendar month
 *   - `nextResetAt` — ISO of next month's first moment (local time)
 *   - `lastUsedAt`  — ISO of most recent shield use, if any (persists across months)
 *   - `isPremium`   — current entitlement
 *   - `monthlyCap`  — 2 for premium, 0 for free
 */
export async function getShieldState(): Promise<ShieldState> {
  const [raw, premium] = await Promise.all([readRaw(), isPremium()]);
  const monthlyCap = premium ? SHIELDS_PER_MONTH_PREMIUM : SHIELDS_PER_MONTH_FREE;
  const available = Math.max(0, monthlyCap - raw.used);
  return {
    available,
    usedThisMonth: raw.used,
    nextResetAt: nextMonthResetIso(),
    lastUsedAt: raw.lastUsedAt,
    isPremium: premium,
    monthlyCap,
  };
}

/**
 * Attempt to spend one shield. Returns true if a shield was consumed.
 *
 * Returns false if:
 *   - the user is not premium (cap is 0)
 *   - the user has already used their monthly allotment
 *
 * Callers must handle their own side effects (mutating `last_lesson_at`,
 * showing a toast, etc.). For the end-to-end "save the streak if we
 * missed yesterday" flow use `restoreStreak()` instead.
 */
export async function consumeShield(reason: ShieldReason): Promise<boolean> {
  void reason; // currently single-reason; param reserved for future telemetry
  const premium = await isPremium();
  if (!premium) return false;

  const raw = await readRaw();
  const cap = SHIELDS_PER_MONTH_PREMIUM;
  if (raw.used >= cap) return false;

  await writeRaw({
    month: raw.month,
    used: raw.used + 1,
    lastUsedAt: new Date().toISOString(),
  });
  return true;
}

/**
 * Check the streak state and, if the user missed exactly *yesterday*
 * (i.e. would-be 1-day gap that resets the streak to 1 on next lesson),
 * spend a shield and patch `last_lesson_at` forward to yesterday so that
 * the next `bumpStreak()` call treats their session as continuous.
 *
 * Returns true if a shield was consumed and the streak is now "protected".
 *
 * Rules — does NOT consume a shield if:
 *   - user has no recorded streak (`current_streak === 0` or no `last_lesson_at`)
 *   - the last lesson was today or yesterday already (nothing to save)
 *   - the gap is >= 2 full days (shield doesn't cover multi-day absence)
 *   - the user is not premium / has no shields left
 */
export async function restoreStreak(): Promise<boolean> {
  const profile = await getLocalProfile();
  if (!profile.last_lesson_at || profile.current_streak <= 0) return false;

  const now = new Date();
  const todayStr = localDayStr(now);
  const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
  const yesterdayStr = localDayStr(yesterday);
  const twoDaysAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 2);
  const twoDaysAgoStr = localDayStr(twoDaysAgo);

  const last = new Date(profile.last_lesson_at);
  if (Number.isNaN(last.getTime())) return false;
  const lastStr = localDayStr(last);

  // Already up-to-date — nothing to shield.
  if (lastStr === todayStr || lastStr === yesterdayStr) return false;

  // Gap is exactly one missed day: last lesson was the day before yesterday.
  // (Today and yesterday are both empty → that's the single-day miss we cover.)
  if (lastStr !== twoDaysAgoStr) return false;

  const consumed = await consumeShield("missed_day");
  if (!consumed) return false;

  // Patch last_lesson_at to yesterday end-of-day so:
  //   - bumpStreak() on next lesson sees `daysAgo === 1` → streak + 1 (continues).
  //   - the calendar shows yesterday as covered.
  const patched = new Date(
    yesterday.getFullYear(),
    yesterday.getMonth(),
    yesterday.getDate(),
    23,
    59,
    0,
    0,
  );
  await setLocalProfile({ last_lesson_at: patched.toISOString() });
  return true;
}

// ------------------------------------------------------------
// Dev helpers
// ------------------------------------------------------------

/** Reset the shield wallet entirely. Dev / settings-only. */
export async function __resetShieldWallet(): Promise<void> {
  try {
    await AsyncStorage.removeItem(K_SHIELD);
  } catch {
    // ignore
  }
}
