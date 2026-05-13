// Lafla — Spaced Repetition System
// Local-first: writes to AsyncStorage immediately, syncs to Supabase if signed in.

import { supabase } from "./supabase";
import {
  bumpDailyActivity,
  bumpSkillMastery,
  bumpStreak,
  bumpXp,
  getAllLessonState,
  getLessonState as getLocalLessonState,
  nextSrsInterval,
  saveLessonState as saveLocalLessonState,
  type LessonStateLocal,
} from "./local-progress";

export type LessonState = {
  user_id: string;
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

export type AttemptInput = {
  exercise_id: string;
  lesson_id: string;
  skill_id: string;
  exercise_type: string;
  is_correct: boolean;
  response_time_ms?: number;
  hints_used?: number;
};

export async function recordAttempt(attempt: AttemptInput) {
  // Cloud sync (signed in only). Local doesn't need per-attempt detail —
  // completeLesson aggregates accuracy.
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  await supabase.from("attempts").insert({
    user_id: user.id,
    exercise_id: attempt.exercise_id,
    lesson_id: attempt.lesson_id,
    skill_id: attempt.skill_id,
    exercise_type: attempt.exercise_type,
    is_correct: attempt.is_correct,
    response_time_ms: attempt.response_time_ms,
    hints_used: attempt.hints_used ?? 0,
  }).then(() => {}, () => {});
}

export async function completeLesson(args: {
  lesson_id: string;
  skill_id: string;
  accuracy: number;
  exercises_completed: number;
}) {
  const xpEarned = Math.round(10 + args.accuracy * 20);

  // ===== LOCAL (always) =====
  const prev = (await getLocalLessonState(args.lesson_id)) ?? {
    lesson_id: args.lesson_id,
    completed_at: null,
    next_review_at: null,
    ease_factor: 2.5,
    interval_days: 0,
    consecutive_correct: 0,
    total_attempts: 0,
    total_correct: 0,
    last_attempt_at: null,
  };

  const { ease, interval_days, consecutive_correct } = nextSrsInterval(
    prev,
    args.accuracy,
  );
  const nextReview = new Date(Date.now() + interval_days * 24 * 60 * 60 * 1000);

  const newLocal: LessonStateLocal = {
    lesson_id: args.lesson_id,
    completed_at: new Date().toISOString(),
    next_review_at: nextReview.toISOString(),
    ease_factor: ease,
    interval_days,
    consecutive_correct,
    total_attempts: prev.total_attempts + args.exercises_completed,
    total_correct:
      prev.total_correct + Math.round(args.accuracy * args.exercises_completed),
    last_attempt_at: new Date().toISOString(),
  };
  await saveLocalLessonState(newLocal);
  await bumpSkillMastery(args.skill_id, args.accuracy);
  await bumpDailyActivity(xpEarned);
  await bumpXp(xpEarned);
  await bumpStreak();

  // ===== CLOUD (if signed in) =====
  const { data: { user } } = await supabase.auth.getUser();
  if (user) {
    // best-effort cloud mirror; ignore failures
    const cloudState = {
      user_id: user.id,
      lesson_id: args.lesson_id,
      completed_at: newLocal.completed_at,
      next_review_at: newLocal.next_review_at,
      ease_factor: ease,
      interval_days,
      consecutive_correct,
      total_attempts: newLocal.total_attempts,
      total_correct: newLocal.total_correct,
      last_attempt_at: newLocal.last_attempt_at,
    };
    supabase.from("lesson_state").upsert(cloudState).then(() => {}, () => {});

    supabase
      .from("skill_mastery")
      .upsert({
        user_id: user.id,
        skill_id: args.skill_id,
        mastery_score: args.accuracy,
        lessons_completed: 1,
        last_practiced_at: new Date().toISOString(),
      })
      .then(() => {}, () => {});
  }

  return { xp_earned: xpEarned, next_review_at: nextReview.toISOString() };
}

export async function getDueLessons(limit = 20): Promise<string[]> {
  // Local first (always works, even anonymous)
  const local = await getAllLessonState();
  const now = new Date().toISOString();
  const due = Object.values(local)
    .filter((s) => s.next_review_at && s.next_review_at <= now)
    .sort((a, b) =>
      (a.next_review_at ?? "").localeCompare(b.next_review_at ?? ""),
    )
    .slice(0, limit)
    .map((s) => s.lesson_id);
  return due;
}
