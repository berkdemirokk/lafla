// Lafla — Spaced Repetition System
// Simplified SM-2: interval based on consecutive correct + ease factor.

import { supabase } from "./supabase";

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

// Calculate next interval using SM-2 lite.
// Quality 0-5 mapped from accuracy: <0.6 = 2, 0.6-0.8 = 3, 0.8-0.95 = 4, >0.95 = 5.
function nextInterval(state: Pick<LessonState, "ease_factor" | "interval_days" | "consecutive_correct">, accuracy: number) {
  let ease = state.ease_factor;
  const quality = accuracy < 0.6 ? 2 : accuracy < 0.8 ? 3 : accuracy < 0.95 ? 4 : 5;

  if (quality < 3) {
    return { ease, interval_days: 1, consecutive_correct: 0 };
  }

  ease = Math.max(1.3, ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
  const cc = state.consecutive_correct + 1;
  const interval = cc === 1 ? 1 : cc === 2 ? 3 : Math.round(state.interval_days * ease);
  return { ease, interval_days: interval, consecutive_correct: cc };
}

export async function recordAttempt(attempt: AttemptInput) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return; // anonymous — skip persistence

  await supabase.from("attempts").insert({
    user_id: user.id,
    exercise_id: attempt.exercise_id,
    lesson_id: attempt.lesson_id,
    skill_id: attempt.skill_id,
    exercise_type: attempt.exercise_type,
    is_correct: attempt.is_correct,
    response_time_ms: attempt.response_time_ms,
    hints_used: attempt.hints_used ?? 0,
  });
}

export async function completeLesson(args: {
  lesson_id: string;
  skill_id: string;
  accuracy: number;
  exercises_completed: number;
}) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: existing } = await supabase
    .from("lesson_state")
    .select("*")
    .eq("user_id", user.id)
    .eq("lesson_id", args.lesson_id)
    .maybeSingle();

  const prev: Pick<LessonState, "ease_factor" | "interval_days" | "consecutive_correct" | "total_attempts" | "total_correct"> =
    existing ?? {
      ease_factor: 2.5,
      interval_days: 0,
      consecutive_correct: 0,
      total_attempts: 0,
      total_correct: 0,
    };

  const { ease, interval_days, consecutive_correct } = nextInterval(prev, args.accuracy);
  const nextReview = new Date(Date.now() + interval_days * 24 * 60 * 60 * 1000);

  const upsert: Partial<LessonState> = {
    user_id: user.id,
    lesson_id: args.lesson_id,
    completed_at: new Date().toISOString(),
    next_review_at: nextReview.toISOString(),
    ease_factor: ease,
    interval_days,
    consecutive_correct,
    total_attempts: prev.total_attempts + args.exercises_completed,
    total_correct: prev.total_correct + Math.round(args.accuracy * args.exercises_completed),
    last_attempt_at: new Date().toISOString(),
  };

  await supabase.from("lesson_state").upsert(upsert);

  // Bump skill mastery (rolling avg of accuracy, capped at 1.0)
  const { data: mastery } = await supabase
    .from("skill_mastery")
    .select("*")
    .eq("user_id", user.id)
    .eq("skill_id", args.skill_id)
    .maybeSingle();

  const newScore = mastery
    ? Math.min(1, mastery.mastery_score * 0.85 + args.accuracy * 0.15)
    : args.accuracy * 0.5;

  await supabase.from("skill_mastery").upsert({
    user_id: user.id,
    skill_id: args.skill_id,
    mastery_score: newScore,
    lessons_completed: (mastery?.lessons_completed ?? 0) + 1,
    last_practiced_at: new Date().toISOString(),
  });

  // Daily activity + XP
  const today = new Date().toISOString().slice(0, 10);
  const xpEarned = Math.round(10 + args.accuracy * 20);

  await supabase.rpc("upsert_daily_activity", {
    p_user_id: user.id,
    p_activity_date: today,
    p_xp: xpEarned,
  }).then(() => {}, async () => {
    // Fallback if RPC doesn't exist yet
    await supabase.from("daily_activity").upsert(
      { user_id: user.id, activity_date: today, xp_earned: xpEarned, lessons_completed: 1 },
      { onConflict: "user_id,activity_date" },
    );
  });

  return { xp_earned: xpEarned, next_review_at: nextReview.toISOString() };
}

export async function getDueLessons(limit = 20): Promise<string[]> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  const { data, error } = await supabase
    .from("lesson_state")
    .select("lesson_id, next_review_at")
    .eq("user_id", user.id)
    .lte("next_review_at", new Date().toISOString())
    .order("next_review_at", { ascending: true })
    .limit(limit);

  if (error) return [];
  return (data ?? []).map((r) => r.lesson_id);
}
