// Lafla — Local progress storage (anonymous mode + cache).
// Mirror the Supabase schema in AsyncStorage so the app works without signup.

import AsyncStorage from "@react-native-async-storage/async-storage";
import { isObject, isStringArray, parseSafe } from "./json-safe";

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
    // Validator only checks "is plain object" — per-value typing is the
    // caller's responsibility. Storing the raw key as the breadcrumb source
    // lets us tell at a glance WHICH map died if we see corruption events.
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
  const current = await getLocalProfile();
  const next = { ...current, ...patch };
  await AsyncStorage.setItem(K_PROFILE, JSON.stringify(next));
  return next;
}

export async function getAllLessonState(): Promise<Record<string, LessonStateLocal>> {
  return readMap<LessonStateLocal>(K_LESSON_STATE);
}

export async function getLessonState(lessonId: string): Promise<LessonStateLocal | null> {
  const all = await getAllLessonState();
  return all[lessonId] ?? null;
}

export async function saveLessonState(state: LessonStateLocal) {
  const all = await getAllLessonState();
  all[state.lesson_id] = state;
  await writeMap(K_LESSON_STATE, all);
}

export async function getAllSkillMastery(): Promise<
  Record<string, { score: number; lessons_completed: number }>
> {
  return readMap(K_SKILL_MASTERY);
}

export async function bumpSkillMastery(skillId: string, accuracy: number) {
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
  return all[skillId];
}

function localDateStr(): string {
  // YYYY-MM-DD in user's LOCAL timezone (not UTC)
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export async function bumpDailyActivity(xp: number) {
  const today = localDateStr();
  const all = await readMap<{ xp: number; lessons: number }>(K_DAILY);
  const prev = all[today] ?? { xp: 0, lessons: 0 };
  all[today] = { xp: prev.xp + xp, lessons: prev.lessons + 1 };
  await writeMap(K_DAILY, all);
  return all[today];
}

export async function bumpStreak() {
  // Streak rule: if last_lesson_at was yesterday or today, ++ (today only counts once).
  // If gap ≥ 2 days, reset to 1. Local timezone.
  const profile = await getLocalProfile();
  const today = new Date();
  const todayStr = localDateStr();
  const last = profile.last_lesson_at;
  const lastDate = last ? new Date(last) : null;
  const lastStr = lastDate
    ? `${lastDate.getFullYear()}-${String(lastDate.getMonth() + 1).padStart(2, "0")}-${String(lastDate.getDate()).padStart(2, "0")}`
    : undefined;

  let streak = profile.current_streak;
  if (!lastStr) {
    streak = 1;
  } else if (lastStr === todayStr) {
    // already counted today; no change
  } else {
    const dayMs = 24 * 60 * 60 * 1000;
    const daysAgo = Math.floor((today.getTime() - (lastDate?.getTime() ?? 0)) / dayMs);
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
      // 3+ days missed → hard reset.
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

export async function clearAllProgress() {
  await AsyncStorage.multiRemove([
    K_LESSON_STATE,
    K_SKILL_MASTERY,
    K_DAILY,
    K_PROFILE,
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
  const all = await getAllModeFluency();
  const prev = all[mode] ?? { score: 0, scenes_done: 0 };
  const newScore =
    prev.scenes_done === 0
      ? sceneScore01 * 0.6 // first scene weighted gently
      : Math.min(1, prev.score * 0.8 + sceneScore01 * 0.2);
  all[mode] = {
    score: newScore,
    scenes_done: prev.scenes_done + 1,
  };
  await writeMap(K_MODE_FLUENCY, all);
  return all[mode];
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
