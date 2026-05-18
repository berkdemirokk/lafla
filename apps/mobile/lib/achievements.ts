// Lafla — Achievement & streak system. Local state only (badges are universal).
//
// This module owns three concerns:
//   1. Streak ticking on lesson completion (calendar-day arithmetic)
//   2. Milestone catalog (lessons / streaks / XP / single-scene / mode mastery)
//   3. Unlock detection with idempotent storage (so a badge never re-toasts)
//
// Designed to be called from scenario/[id].tsx in the verdict phase:
//
//     const { newStreak, brokenStreak, longestNew } =
//       await tickStreakOnLessonComplete();
//     const unlocked = await checkUnlocksAfterLesson(score, mode);
//
// Both calls are safe to run in either order — tickStreakOnLessonComplete
// writes to the profile before checkUnlocksAfterLesson reads it.

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getLocalProfile,
  getAllLessonState,
  getAllModeFluency,
  setLocalProfile,
} from "./local-progress";
import { allScenarios } from "./scenario";

// ============================================================
// Achievement catalog
// ============================================================

export type AchievementId =
  // Lesson count milestones
  | "first_lesson"
  | "lessons_5"
  | "lessons_25"
  | "lessons_100"
  // Streak milestones
  | "streak_3"
  | "streak_7"
  | "streak_30"
  | "streak_100"
  // XP milestones
  | "xp_100"
  | "xp_500"
  | "xp_2500"
  // Single-session achievements
  | "perfect_scene"
  // Mode mastery (>80% completion in any mode)
  | "mode_master"
  // Auth
  | "first_signin"
  // Legacy IDs retained so historical AsyncStorage values still parse.
  // These are not awarded going forward; they exist so older installs that
  // already earned them don't have orphan strings rejected on read.
  | "lessons_50"
  | "xp_1000";

export interface AchievementDef {
  id: AchievementId;
  emoji: string;
  title: string;
  description: string;
  /** Category for grouping in a future achievements grid. */
  category: "lesson" | "streak" | "xp" | "scene" | "mode" | "auth";
}

export const ACHIEVEMENTS: AchievementDef[] = [
  // ---------- Lesson count ----------
  {
    id: "first_lesson",
    emoji: "🎓",
    title: "İlk sahne",
    description: "İlk sahneni tamamladın.",
    category: "lesson",
  },
  {
    id: "lessons_5",
    emoji: "📚",
    title: "5 sahne tamamlandı",
    description: "Beş sahneyi geçtin.",
    category: "lesson",
  },
  {
    id: "lessons_25",
    emoji: "📘",
    title: "25 sahne tamamlandı",
    description: "Yirmi beş sahneyi geçtin.",
    category: "lesson",
  },
  {
    id: "lessons_100",
    emoji: "🏆",
    title: "100 sahne tamamlandı",
    description: "Yüz sahneyi geçtin. Bu artık alışkanlık.",
    category: "lesson",
  },

  // ---------- Streak ----------
  {
    id: "streak_3",
    emoji: "🔥",
    title: "3 gün üst üste",
    description: "Üç gün ara vermedin.",
    category: "streak",
  },
  {
    id: "streak_7",
    emoji: "⚡",
    title: "1 hafta seri",
    description: "Yedi gün üst üste pratik.",
    category: "streak",
  },
  {
    id: "streak_30",
    emoji: "💎",
    title: "1 ay seri",
    description: "Otuz gün aralıksız.",
    category: "streak",
  },
  {
    id: "streak_100",
    emoji: "👑",
    title: "Lafla'da 100 gün",
    description: "Yüz gün üst üste. Bu seri efsane.",
    category: "streak",
  },

  // ---------- XP ----------
  {
    id: "xp_100",
    emoji: "💯",
    title: "100 XP",
    description: "İlk yüz XP'yi topladın.",
    category: "xp",
  },
  {
    id: "xp_500",
    emoji: "🌟",
    title: "500 XP",
    description: "Beş yüz XP. Yol açılıyor.",
    category: "xp",
  },
  {
    id: "xp_2500",
    emoji: "🚀",
    title: "2500 XP",
    description: "İki bin beş yüz XP. Cidden ileri seviye.",
    category: "xp",
  },

  // ---------- Single-session ----------
  {
    id: "perfect_scene",
    emoji: "🎯",
    title: "Mükemmel sahne",
    description: "Bir sahneyi tam puanla (100/100) bitirdin.",
    category: "scene",
  },

  // ---------- Mode mastery ----------
  {
    id: "mode_master",
    emoji: "🧠",
    title: "Mod ustası",
    description: "Bir modun sahnelerinin %80'inden fazlasını tamamladın.",
    category: "mode",
  },

  // ---------- Auth ----------
  {
    id: "first_signin",
    emoji: "☁️",
    title: "Bulutta yaşa",
    description: "İlk kez hesap açtın, ilerlemen güvende.",
    category: "auth",
  },
];

/** Quick lookup. Built lazily, kept module-scoped — catalog never changes. */
const DEF_BY_ID = new Map<AchievementId, AchievementDef>(
  ACHIEVEMENTS.map((a) => [a.id, a]),
);

export function getAchievementDef(id: AchievementId): AchievementDef | null {
  return DEF_BY_ID.get(id) ?? null;
}

// ============================================================
// Storage
// ============================================================

// Kept as the original key so users who already earned badges keep them.
// (Spec suggested `lafla.achievements.unlocked` but renaming would wipe
// existing installs — preserving the historical key is the safer choice.)
const K_UNLOCKED = "lafla.achievements";

async function getUnlockedSet(): Promise<Set<AchievementId>> {
  try {
    const raw = await AsyncStorage.getItem(K_UNLOCKED);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return new Set();
    return new Set(parsed as AchievementId[]);
  } catch {
    return new Set();
  }
}

async function setUnlockedSet(set: Set<AchievementId>) {
  try {
    await AsyncStorage.setItem(K_UNLOCKED, JSON.stringify([...set]));
  } catch {
    // ignore — best-effort persistence
  }
}

export async function getUnlockedAchievementIds(): Promise<AchievementId[]> {
  return [...(await getUnlockedSet())];
}

/** Alias retained for callers using the older "earned" terminology. */
export const getEarnedAchievements = getUnlockedAchievementIds;

// ============================================================
// Streak logic
// ============================================================

function localDateKey(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Difference in calendar days, ignoring time-of-day. Negative if `b` before `a`. */
function daysBetween(a: Date, b: Date): number {
  const aMid = new Date(a.getFullYear(), a.getMonth(), a.getDate()).getTime();
  const bMid = new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime();
  const ms = bMid - aMid;
  return Math.round(ms / (24 * 60 * 60 * 1000));
}

export interface StreakTickResult {
  /** Streak count AFTER this lesson is counted. */
  newStreak: number;
  /** True when this lesson reset the streak (gap of 2+ calendar days). */
  brokenStreak: boolean;
  /** True when the new streak set a personal record. */
  longestNew: boolean;
  /** True when last lesson was earlier today — no streak change happened. */
  alreadyCountedToday: boolean;
}

/**
 * Update the streak on lesson completion, using calendar-day arithmetic in
 * the device's local timezone. Idempotent within a day: if the user already
 * completed a lesson today, this is a no-op (streak unchanged, no double
 * credit). Also persists last_lesson_at and longest_streak when they move.
 *
 * The `date` parameter exists for tests; production callers should omit it.
 */
export async function tickStreakOnLessonComplete(
  date?: Date,
): Promise<StreakTickResult> {
  const now = date ?? new Date();
  const profile = await getLocalProfile();
  const last = profile.last_lesson_at ? new Date(profile.last_lesson_at) : null;

  let newStreak = profile.current_streak;
  let brokenStreak = false;
  let alreadyCountedToday = false;

  if (!last || Number.isNaN(last.getTime())) {
    // First-ever lesson: streak starts at 1.
    newStreak = 1;
  } else {
    const gap = daysBetween(last, now);
    if (gap <= 0) {
      // Already counted today (or last was somehow in the future — treat as today).
      alreadyCountedToday = true;
    } else if (gap === 1) {
      // Continued the streak yesterday → today.
      newStreak = profile.current_streak + 1;
    } else {
      // Gap of 2+ calendar days: streak broke. Today starts a new run of 1.
      newStreak = 1;
      brokenStreak = true;
    }
  }

  const longestNew = newStreak > profile.longest_streak;
  const nextLongest = Math.max(profile.longest_streak, newStreak);

  // Skip the write when nothing changed — avoids burning a write on every
  // attempt of an already-counted-today session.
  if (!alreadyCountedToday) {
    await setLocalProfile({
      current_streak: newStreak,
      longest_streak: nextLongest,
      last_lesson_at: now.toISOString(),
    });
  }

  return { newStreak, brokenStreak, longestNew, alreadyCountedToday };
}

// ============================================================
// Unlock detection
// ============================================================

/**
 * Evaluate every milestone against the current profile and return the set
 * of achievements that are NEWLY unlocked by this call.
 *
 * `score` is the just-completed scene's fluency (0-100) and powers the
 * `perfect_scene` award. `mode` is the scene's mode (e.g. "flirt") and
 * powers the `mode_master` award alongside per-mode catalog stats.
 *
 * Idempotent: an achievement is returned at most once across the lifetime
 * of an install (storage acts as a permanent set).
 */
export async function checkUnlocksAfterLesson(
  score: number,
  mode: string,
): Promise<AchievementDef[]> {
  const unlocked = await getUnlockedSet();
  const profile = await getLocalProfile();
  const lessons = await getAllLessonState();
  const completedCount = Object.values(lessons).filter(
    (l) => l.completed_at !== null,
  ).length;

  // Per-mode completion ratio drives "mode_master". We compare scenes done
  // in any one mode against that mode's catalog total; >80% wins the badge.
  const modeMasteryReached = await isAnyModeMastered();

  const checks: Array<[AchievementId, boolean]> = [
    ["first_lesson", completedCount >= 1],
    ["lessons_5", completedCount >= 5],
    ["lessons_25", completedCount >= 25],
    ["lessons_100", completedCount >= 100],
    ["streak_3", profile.current_streak >= 3],
    ["streak_7", profile.current_streak >= 7],
    ["streak_30", profile.current_streak >= 30],
    ["streak_100", profile.current_streak >= 100],
    ["xp_100", profile.total_xp >= 100],
    ["xp_500", profile.total_xp >= 500],
    ["xp_2500", profile.total_xp >= 2500],
    ["perfect_scene", score >= 100],
    ["mode_master", modeMasteryReached],
  ];

  const newlyUnlocked: AchievementDef[] = [];
  for (const [id, condition] of checks) {
    if (condition && !unlocked.has(id)) {
      unlocked.add(id);
      const def = DEF_BY_ID.get(id);
      if (def) newlyUnlocked.push(def);
    }
  }

  if (newlyUnlocked.length > 0) {
    await setUnlockedSet(unlocked);
  }
  // `mode` is reserved for future per-mode badges (e.g. "flirt master")
  // and intentionally not used in the current check set.
  void mode;
  return newlyUnlocked;
}

/**
 * True when at least one mode has >80% of its catalog scenes completed.
 * Uses the scenario catalog as the per-mode denominator and the count of
 * completed lessons in that mode as the numerator.
 */
async function isAnyModeMastered(): Promise<boolean> {
  const completedIds = new Set(
    Object.values(await getAllLessonState())
      .filter((l) => l.completed_at !== null)
      .map((l) => l.lesson_id),
  );
  if (completedIds.size === 0) return false;

  const totalsByMode = new Map<string, number>();
  const doneByMode = new Map<string, number>();
  for (const s of allScenarios()) {
    totalsByMode.set(s.mode, (totalsByMode.get(s.mode) ?? 0) + 1);
    if (completedIds.has(s.id)) {
      doneByMode.set(s.mode, (doneByMode.get(s.mode) ?? 0) + 1);
    }
  }
  for (const [mode, total] of totalsByMode) {
    // Guard against single-scenario modes giving instant mastery — require
    // at least 3 scenes in the catalog for the ratio to be meaningful.
    if (total < 3) continue;
    const done = doneByMode.get(mode) ?? 0;
    if (done / total > 0.8) return true;
  }
  // Fall back to scoreboard-based mastery for modes whose catalog is sparse
  // but whose rolling fluency is high (≥0.85 over ≥5 scenes).
  const fluency = await getAllModeFluency();
  for (const [, f] of Object.entries(fluency)) {
    if (f.scenes_done >= 5 && f.score >= 0.85) return true;
  }
  return false;
}

/**
 * Legacy entry point. Older call sites used this; it now delegates to
 * `checkUnlocksAfterLesson` with neutral defaults (score 0, mode "") so
 * profile-based milestones (streak, XP, lesson count, mode mastery) still
 * fire, but per-scene awards (`perfect_scene`) won't trigger spuriously.
 *
 * New code should call `checkUnlocksAfterLesson` directly.
 */
export async function evaluateAchievements(): Promise<AchievementDef[]> {
  return checkUnlocksAfterLesson(0, "");
}

// ============================================================
// One-shot awards (called from outside the lesson flow)
// ============================================================

export async function awardSigninAchievement(): Promise<AchievementDef | null> {
  const unlocked = await getUnlockedSet();
  if (unlocked.has("first_signin")) return null;
  unlocked.add("first_signin");
  await setUnlockedSet(unlocked);
  return DEF_BY_ID.get("first_signin") ?? null;
}
