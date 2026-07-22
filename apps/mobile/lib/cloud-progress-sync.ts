import {
  getAllLessonState,
  getAllSkillMastery,
  replaceLearningProgress,
  type LessonStateLocal,
  type SkillMasteryLocal,
} from "./local-progress";
import { captureException } from "./sentry";
import { supabase } from "./supabase";

type CloudLessonState = LessonStateLocal & { user_id: string };
type CloudSkillMastery = {
  user_id: string;
  skill_id: string;
  mastery_score: number;
  lessons_completed: number;
  last_practiced_at: string | null;
};

function time(value: string | null | undefined): number {
  const parsed = value ? Date.parse(value) : 0;
  return Number.isFinite(parsed) ? parsed : 0;
}

export function mergeLessonProgress(
  local: Record<string, LessonStateLocal>,
  cloud: readonly CloudLessonState[],
): Record<string, LessonStateLocal> {
  const merged = { ...local };
  for (const row of cloud) {
    const { user_id: _userId, ...candidate } = row;
    const current = merged[row.lesson_id];
    if (
      !current ||
      time(candidate.last_attempt_at ?? candidate.completed_at) >
        time(current.last_attempt_at ?? current.completed_at)
    ) {
      merged[row.lesson_id] = candidate;
    }
  }
  return merged;
}

export function mergeSkillProgress(
  local: Record<string, SkillMasteryLocal>,
  cloud: readonly CloudSkillMastery[],
): Record<string, SkillMasteryLocal> {
  const merged = { ...local };
  for (const row of cloud) {
    const candidate: SkillMasteryLocal = {
      score: row.mastery_score,
      lessons_completed: row.lessons_completed,
      last_practiced_at: row.last_practiced_at ?? undefined,
    };
    const current = merged[row.skill_id];
    const cloudWins =
      !current ||
      candidate.lessons_completed > current.lessons_completed ||
      (candidate.lessons_completed === current.lessons_completed &&
        time(candidate.last_practiced_at) > time(current.last_practiced_at));
    if (cloudWins) merged[row.skill_id] = candidate;
  }
  return merged;
}

let syncChain: Promise<unknown> = Promise.resolve();

export function synchronizeCloudProgress(userId: string): Promise<void> {
  const operation = syncChain.then(async () => {
    const [localLessons, localSkills, lessonResult, skillResult] =
      await Promise.all([
        getAllLessonState(),
        getAllSkillMastery(),
        supabase.from("lesson_state").select("*").eq("user_id", userId),
        supabase.from("skill_mastery").select("*").eq("user_id", userId),
      ]);
    if (lessonResult.error) throw lessonResult.error;
    if (skillResult.error) throw skillResult.error;

    const lessons = mergeLessonProgress(
      localLessons,
      (lessonResult.data ?? []) as CloudLessonState[],
    );
    const skills = mergeSkillProgress(
      localSkills,
      (skillResult.data ?? []) as CloudSkillMastery[],
    );
    await replaceLearningProgress({ lessons, skills });

    const lessonRows = Object.values(lessons).map((row) => ({
      ...row,
      user_id: userId,
    }));
    const skillRows = Object.entries(skills).map(([skillId, row]) => ({
      user_id: userId,
      skill_id: skillId,
      mastery_score: row.score,
      lessons_completed: row.lessons_completed,
      last_practiced_at: row.last_practiced_at ?? null,
    }));
    if (lessonRows.length > 0) {
      const { error } = await supabase.from("lesson_state").upsert(lessonRows);
      if (error) throw error;
    }
    if (skillRows.length > 0) {
      const { error } = await supabase.from("skill_mastery").upsert(skillRows);
      if (error) throw error;
    }
  });
  syncChain = operation.catch((error) => {
    captureException(error, { source: "cloud-progress-sync" });
  });
  return operation;
}
