// Lafla — Spaced Repetition System
// Local-first: writes to AsyncStorage immediately, syncs to Supabase if signed in.

import { supabase } from "./supabase";
import { captureException } from "./sentry";
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
  // BUG-6 FIX: unified XP formula across srs + scenario/daily-quests.
  // Previously 10+acc*20 here but 20+acc*30 in scenario — quest progress
  // reported different XP than actually earned. Now consistent everywhere.
  const xpEarned = Math.round(20 + args.accuracy * 30);

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
    // BUG-15 FIX: log cloud sync errors to Sentry (still fire-and-forget)
    supabase.from("lesson_state").upsert(cloudState).then(() => {}, (err: unknown) => {
      captureException(err, { source: "srs.completeLesson.lesson_state" });
    });

    supabase
      .from("skill_mastery")
      .upsert({
        user_id: user.id,
        skill_id: args.skill_id,
        mastery_score: args.accuracy,
        lessons_completed: 1,
        last_practiced_at: new Date().toISOString(),
      })
      .then(() => {}, (err: unknown) => {
        captureException(err, { source: "srs.completeLesson.skill_mastery" });
      });
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

// ============================================================
// DAILY REVIEW SURFACE
// Helpers powering the /review screen + ReviewBanner.
// ============================================================

export interface DueItem {
  lessonId: string;
  skillId: string;
  daysOverdue: number;
  ease: number;
  reviewType: "fresh" | "due" | "overdue";
}

const MS_PER_DAY = 24 * 60 * 60 * 1000;

function deriveSkillId(lessonId: string): string {
  // Lesson IDs follow "{skill_id}.{n}.{m}" — e.g. "order.cafe.1.1".
  // Strip the trailing ".n.m" so consumers get the skill.
  const parts = lessonId.split(".");
  if (parts.length <= 2) return lessonId;
  return parts.slice(0, parts.length - 2).join(".");
}

function classifyReview(daysOverdue: number): DueItem["reviewType"] {
  if (daysOverdue >= 3) return "overdue";
  if (daysOverdue >= 0) return "due";
  return "fresh";
}

export async function getDueReviews(today?: Date): Promise<DueItem[]> {
  const now = today ?? new Date();
  const local = await getAllLessonState();
  const items: DueItem[] = [];

  for (const state of Object.values(local)) {
    if (!state.next_review_at || !state.completed_at) continue;
    const nextReview = new Date(state.next_review_at);
    if (Number.isNaN(nextReview.getTime())) continue;
    const diffMs = now.getTime() - nextReview.getTime();
    const daysOverdue = Math.floor(diffMs / MS_PER_DAY);
    if (daysOverdue < 0) continue; // not yet due

    items.push({
      lessonId: state.lesson_id,
      skillId: deriveSkillId(state.lesson_id),
      daysOverdue,
      ease: state.ease_factor,
      reviewType: classifyReview(daysOverdue),
    });
  }

  // Most overdue first; ties broken by lower ease (harder cards first).
  items.sort((a, b) => {
    if (b.daysOverdue !== a.daysOverdue) return b.daysOverdue - a.daysOverdue;
    return a.ease - b.ease;
  });
  return items;
}

export async function getDueCount(today?: Date): Promise<number> {
  const items = await getDueReviews(today);
  return items.length;
}

export type ReviewRating = "again" | "hard" | "good" | "easy";

/**
 * Update SRS state from a user self-rating in a daily review session.
 * Schedule rules:
 *  - "again" → reset interval to 1, ease -= 0.2 (min 1.3)
 *  - "hard"  → interval × 1.2, ease -= 0.15
 *  - "good"  → interval × ease, ease unchanged
 *  - "easy"  → interval × ease × 1.3, ease += 0.15
 */
export async function recordReview(
  lessonId: string,
  rating: ReviewRating,
): Promise<void> {
  const prev = await getLocalLessonState(lessonId);
  if (!prev) return; // nothing to schedule against

  const prevEase = prev.ease_factor || 2.5;
  const prevInterval = prev.interval_days || 1;
  let ease = prevEase;
  let interval = prevInterval;
  let consecutive = prev.consecutive_correct;

  switch (rating) {
    case "again":
      ease = Math.max(1.3, prevEase - 0.2);
      interval = 1;
      consecutive = 0;
      break;
    case "hard":
      ease = Math.max(1.3, prevEase - 0.15);
      interval = Math.max(1, Math.round(prevInterval * 1.2));
      consecutive = consecutive + 1;
      break;
    case "good":
      // ease unchanged
      interval = Math.max(1, Math.round(prevInterval * prevEase));
      consecutive = consecutive + 1;
      break;
    case "easy":
      ease = prevEase + 0.15;
      interval = Math.max(1, Math.round(prevInterval * prevEase * 1.3));
      consecutive = consecutive + 1;
      break;
  }

  const nextReview = new Date(Date.now() + interval * MS_PER_DAY);
  const wasCorrect = rating !== "again";

  const newLocal: LessonStateLocal = {
    lesson_id: lessonId,
    completed_at: prev.completed_at,
    next_review_at: nextReview.toISOString(),
    ease_factor: ease,
    interval_days: interval,
    consecutive_correct: consecutive,
    total_attempts: prev.total_attempts + 1,
    total_correct: prev.total_correct + (wasCorrect ? 1 : 0),
    last_attempt_at: new Date().toISOString(),
  };
  await saveLocalLessonState(newLocal);

  // Best-effort cloud mirror
  const { data: { user } } = await supabase.auth.getUser();
  if (user) {
    supabase
      .from("lesson_state")
      .upsert({
        user_id: user.id,
        lesson_id: lessonId,
        completed_at: newLocal.completed_at,
        next_review_at: newLocal.next_review_at,
        ease_factor: ease,
        interval_days: interval,
        consecutive_correct: consecutive,
        total_attempts: newLocal.total_attempts,
        total_correct: newLocal.total_correct,
        last_attempt_at: newLocal.last_attempt_at,
      })
      .then(() => {}, () => {});
  }
}
