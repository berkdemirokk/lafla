// Lafla — Local progress storage (anonymous mode + cache).
// Mirror the Supabase schema in AsyncStorage so the app works without signup.

import AsyncStorage from "@react-native-async-storage/async-storage";
import { isObject, isStringArray, parseSafe } from "./json-safe";

// ---------------------------------------------------------------------------
// BUG-2 FIX: Simple promise-based mutex per key to prevent concurrent
// read-modify-write on the same AsyncStorage key. Without this, two parallel
// async calls (e.g. bumpXp + bumpStreak) can read the same snapshot and the
// last writer wins, silently discarding the other's changes.
// ---------------------------------------------------------------------------
const _locks = new Map<string, Promise<void>>();

async function withLock<T>(key: string, fn: () => Promise<T>): Promise<T> {
  // Wait for any existing operation on this key to finish
  const prev = _locks.get(key) ?? Promise.resolve();
  let resolve: () => void;
  const next = new Promise<void>((r) => { resolve = r; });
  _locks.set(key, next);
  try {
    await prev;
    return await fn();
  } finally {
    resolve!();
    // Clean up if we're the last in line
    if (_locks.get(key) === next) _locks.delete(key);
  }
}

const K_LESSON_STATE = "lafla.lessons";       // map: lesson_id -> LessonStateLocal
const K_SKILL_MASTERY = "lafla.skills";       // map: skill_id -> { score, lessons_completed }
const K_DAILY = "lafla.daily";                // map: YYYY-MM-DD -> { xp, lessons }
const K_PROFILE = "lafla.profile";            // { total_xp, current_streak, longest_streak, last_lesson_at, interests }
const K_MODE_FLUENCY = "lafla.mode_fluency";  // map: mode (string) -> { score 0-1, scenes_done }

export type LessonStateLocal = {
  lesson_id: string;
  completed_at: string | null;
  next_review_at: string | null;
  ease_factor: number;
  interval_days: number;
  consecutive_correct: number;
  total_attempts: number;
  total_correct: number;
  last_attempt_at: string | null;
};

export type LocalProfile = {
  total_xp: number;
  current_streak: number;
  longest_streak: number;
  last_lesson_at: string | null;
  interests: string[];
};

const DEFAULT_PROFILE: LocalProfile = {
  total_xp: 0,
  current_streak: 0,
  longest_streak: 0,
  last_lesson_at: null,
  interests: [],
};

async function readMap<T>(key: string): Promise<Record<string, T>> {
  try {
    const raw = await AsyncStorage.getItem(key);
    return parseSafe<Record<string, T>>(raw, {}, isObject, {
      source: `local-progress.${key}`,
    });
  } catch {
    return {};
  }
}

async function writeMap<T>(key: string, map: Record<string, T>) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(map));
  } catch {
    // ignore
  }
}

export async function getLocalProfile(): Promise<LocalProfile> {
  try {
    const raw = await AsyncStorage.getItem(K_PROFILE);
    // Spread-merge with DEFAULT_PROFILE means a profile object missing some
    // fields is fine; we only need to guarantee the parsed value is an
    // object so the spread doesn't blow up on null/array/primitive.
    const parsed = parseSafe<Partial<LocalProfile>>(raw, {}, isObject, {
      source: "local-progress.profile",
    });
    return { ...DEFAULT_PROFILE, ...parsed };
  } catch {
    return { ...DEFAULT_PROFILE };
  }
}

export async function setLocalProfile(patch: Partial<LocalProfile>) {
  // BUG-2 FIX: mutex prevents concurrent profile writes from losing data
  return withLock(K_PROFILE, async () => {
    const current = await getLocalProfile();
    const next = { ...current, ...patch };
    await AsyncStorage.setItem(K_PROFILE, JSON.stringify(next));
    return next;
  });
}

export async function getAllLessonState(): Promise<Record<string, LessonStateLocal>> {
  return readMap<LessonStateLocal>(K_LESSON_STATE);
}

export async function getLessonState(lessonId: string): Promise<LessonStateLocal | null> {
  const all = await getAllLessonState();
  return all[lessonId] ?? null;
}

export async function saveLessonState(state: LessonStateLocal) {
  // BUG-2 FIX: mutex prevents concurrent lesson state writes
  await withLock(K_LESSON_STATE, async () => {
    const all = await getAllLessonState();
    all[state.lesson_id] = state;
    await writeMap(K_LESSON_STATE, all);
  });
}

export async function getAllSkillMastery(): Promise<
  Record<string, { score: number; lessons_completed: number }>
> {
  return readMap(K_SKILL_MASTERY);
}

export async function bumpSkillMastery(skillId: string, accuracy: number) {
  // BUG-2 FIX: mutex on skill mastery map
  return withLock(K_SKILL_MASTERY, async () => {
    const all = await getAllSkillMastery();
    const prev = all[skillId] ?? { score: 0, lessons_completed: 0 };
    const newScore =
      prev.lessons_completed > 0
        ? Math.min(1, prev.score * 0.85 + accuracy * 0.15)
        : accuracy * 0.5;
    all[skillId] = {
      score: newScore,
      lessons_completed: prev.lessons_completed + 1,
    };
    await writeMap(K_SKILL_MASTERY, all);
    return all[skillId]!;
  });
}

// BUG-4 FIX: Use UTC for date keys everywhere (matches free-tier.ts).
// Prevents timezone-change exploits and cross-module inconsistency.
function localDateStr(): string {
  return new Date().toISOString().slice(0, 10);
}

export async function bumpDailyActivity(xp: number) {
  // BUG-2 FIX: mutex on daily activity map
  return withLock(K_DAILY, async () => {
    const today = localDateStr();
    const all = await readMap<{ xp: number; lessons: number }>(K_DAILY);
    const prev = all[today] ?? { xp: 0, lessons: 0 };
    all[today] = { xp: prev.xp + xp, lessons: prev.lessons + 1 };
    await writeMap(K_DAILY, all);
    return all[today]!;
  });
}

export async function bumpStreak() {
  // Streak rule: if last_lesson_at was yesterday or today, ++ (today only counts once).
  // If gap >= 2 days, reset to 1. Use UTC dates to match daily/free-tier keys.
  const profile = await getLocalProfile();
  const today = new Date();
  const todayStr = localDateStr();
  const last = profile.last_lesson_at;
  const lastDate = last ? new Date(last) : null;
  const lastStr = lastDate ? lastDate.toISOString().slice(0, 10) : undefined;

  let streak = profile.current_streak;
  if (!lastStr) {
    streak = 1;
  } else if (lastStr === todayStr) {
    // already counted today; no change
  } else {
    // 2026-05-26 (P0 audit fix) — Eski versiyon `Math.floor((now.ms -
    // last.ms) / 86400000)` ms-saat farkı hesaplıyordu; calendar günü
    // değil. Pazartesi 23:00 → Salı 01:00 farkı 2 saat = floor(0.08) = 0
    // dönüyor, `lastStr !== todayStr` ama daysAgo!==1/2 → final else =
    // streak RESET. Retention için ölümcül.
    //
    // Yeni: günler arası farkı tarihten (yıl/ay/gün) hesaplıyoruz —
    // saat bağımsız. midnight rollover ile tetiklenmeyi garantiler.
    const calendarDaysBetween = (a: Date, b: Date): number => {
      const aStart = Date.UTC(
        a.getUTCFullYear(),
        a.getUTCMonth(),
        a.getUTCDate(),
      );
      const bStart = Date.UTC(
        b.getUTCFullYear(),
        b.getUTCMonth(),
        b.getUTCDate(),
      );
      return Math.round((bStart - aStart) / 86_400_000);
    };
    const daysAgo = lastDate ? calendarDaysBetween(lastDate, today) : 999;
    if (daysAgo === 1) {
      // Normal extension — yesterday → today, streak++.
      streak = streak + 1;
    } else if (daysAgo === 2) {
      // Streak Shield path (2026-05-20). Exactly 1 day missed → try to
      // consume a shield to preserve the streak (silently). Multi-day
      // absences (≥3) skip this; user has to start over.
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const ss = require("./streak-shield") as {
        consumeShieldIfAvailable: () => Promise<boolean>;
      };
      const saved = await ss.consumeShieldIfAvailable().catch(() => false);
      streak = saved ? streak + 1 : 1;
    } else {
      // 3+ days missed (veya 0 — clock drift / future last_lesson_at)
      // → hard reset.
      streak = 1;
    }
  }

  const next = await setLocalProfile({
    current_streak: streak,
    longest_streak: Math.max(profile.longest_streak, streak),
    last_lesson_at: today.toISOString(),
  });
  return next;
}

export async function bumpXp(delta: number) {
  const profile = await getLocalProfile();
  return setLocalProfile({ total_xp: profile.total_xp + delta });
}

// BUG-11 FIX: K_MODE_FLUENCY was missing — mode mastery lingered after reset
export async function clearAllProgress() {
  await AsyncStorage.multiRemove([
    K_LESSON_STATE,
    K_SKILL_MASTERY,
    K_DAILY,
    K_PROFILE,
    K_MODE_FLUENCY,
  ]);
}

// Calculate next SRS interval (SM-2 lite)
export function nextSrsInterval(
  state: Pick<LessonStateLocal, "ease_factor" | "interval_days" | "consecutive_correct">,
  accuracy: number,
) {
  let ease = state.ease_factor;
  const quality = accuracy < 0.6 ? 2 : accuracy < 0.8 ? 3 : accuracy < 0.95 ? 4 : 5;

  if (quality < 3) {
    return { ease, interval_days: 1, consecutive_correct: 0 };
  }

  ease = Math.max(
    1.3,
    ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)),
  );
  const cc = state.consecutive_correct + 1;
  const interval =
    cc === 1 ? 1 : cc === 2 ? 3 : Math.round(state.interval_days * ease);
  return { ease, interval_days: interval, consecutive_correct: cc };
}

export async function getCompletedLessonIds(): Promise<Set<string>> {
  const all = await getAllLessonState();
  return new Set(
    Object.values(all)
      .filter((s) => s.completed_at !== null)
      .map((s) => s.lesson_id),
  );
}

// ============================================================
// MODE FLUENCY (new in scenario engine)
// ============================================================

export interface ModeFluency {
  score: number; // 0..1
  scenes_done: number;
}

export async function getAllModeFluency(): Promise<Record<string, ModeFluency>> {
  return readMap<ModeFluency>(K_MODE_FLUENCY);
}

export async function getModeFluency(mode: string): Promise<ModeFluency> {
  const all = await getAllModeFluency();
  return all[mode] ?? { score: 0, scenes_done: 0 };
}

export async function bumpModeFluency(mode: string, sceneScore01: number) {
  // BUG-2 FIX: mutex on mode fluency map
  return withLock(K_MODE_FLUENCY, async () => {
    const all = await getAllModeFluency();
    const prev = all[mode] ?? { score: 0, scenes_done: 0 };
    const newScore =
      prev.scenes_done === 0
        ? sceneScore01 * 0.6
        : Math.min(1, prev.score * 0.8 + sceneScore01 * 0.2);
    all[mode] = {
      score: newScore,
      scenes_done: prev.scenes_done + 1,
    };
    await writeMap(K_MODE_FLUENCY, all);
    return all[mode]!;
  });
}

export async function getInterests(): Promise<string[]> {
  // Prefer profile.interests, fall back to dedicated key
  const profile = await getLocalProfile();
  if (profile.interests.length > 0) return profile.interests;
  try {
    const raw = await AsyncStorage.getItem("lafla.interests");
    // Validator narrows to string[] so callers can iterate without per-item
    // type-checking. A corrupt list (mixed types, e.g. {0: "music"}) falls
    // back to empty rather than silently producing `undefined` entries.
    return parseSafe<string[]>(raw, [], isStringArray, {
      source: "local-progress.interests",
    });
  } catch {
    return [];
  }
}
