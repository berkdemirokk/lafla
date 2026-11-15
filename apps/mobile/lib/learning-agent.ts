// Lafla — Learning agent.
//
// A small, deterministic orchestration layer for the learning loop.  It is
// deliberately local-first: the agent reads only the progress signals already
// stored on the device and returns an explainable next action.  This prevents
// a generic chat model from making opaque curriculum decisions (or requiring a
// network connection) while leaving a single seam for a future hosted agent.

import { getOrCreateDailyPlan } from "./daily-plan";
import { getActiveMistakes } from "./mistake-tracker";
import { getMistakeDNA } from "./mistake-dna";
import {
  getAllLessonState,
  getAllSkillMastery,
  getLocalProfile,
} from "./local-progress";
import { isStreakAtRisk } from "./streak-shield";
import { getCloudLearningAgentRecommendation } from "./cloud-learning-agent";
import type { Scene } from "../data/scenes";

export type LearningAgentAction =
  | { kind: "review" }
  | { kind: "mistake-drill"; patternId: string }
  | { kind: "scenario"; lessonId: string };

export type LearningAgentReason =
  | "due-review"
  | "repeated-mistake"
  | "streak-protection"
  | "weak-skill"
  | "daily-plan";

export interface LearningAgentRecommendation {
  action: LearningAgentAction;
  reason: LearningAgentReason;
  /** Short, user-facing explanation. Never includes raw user text. */
  messageTr: string;
  messageEn: string;
  confidence: "high" | "medium";
  scene: Scene | null;
}

export interface LearningAgentSignals {
  plan: Scene[];
  dueReviews: number;
  streakAtRisk: boolean;
  activeMistakes: Array<{ patternId: string; count: number }>;
  dominantMistakeLabel: string | null;
  weakestSkillId: string | null;
}

export async function collectLearningAgentSignals(
  now = new Date(),
): Promise<LearningAgentSignals> {
  const [plan, lessons, profile, mistakes, dna, skills] = await Promise.all([
    getOrCreateDailyPlan(),
    getAllLessonState(),
    getLocalProfile(),
    getActiveMistakes(),
    getMistakeDNA(21, now),
    getAllSkillMastery(),
  ]);
  const nowIso = now.toISOString();
  const dueReviews = Object.values(lessons).filter(
    (lesson) => Boolean(lesson.completed_at) &&
      Boolean(lesson.next_review_at) && lesson.next_review_at! <= nowIso,
  ).length;
  const weakestSkillId = Object.entries(skills)
    .filter(([, skill]) => skill.lessons_completed > 0 && Number.isFinite(skill.score))
    .sort(([, a], [, b]) => a.score - b.score)[0]?.[0] ?? null;

  return {
    plan,
    dueReviews,
    streakAtRisk: profile.current_streak > 0 &&
      await isStreakAtRisk(profile.last_lesson_at ?? undefined),
    activeMistakes: mistakes.map(({ patternId, count }) => ({ patternId, count })),
    dominantMistakeLabel: dna?.dominantLabelTr ?? null,
    weakestSkillId,
  };
}

/**
 * Priority is intentional: spaced repetition protects retention first;
 * repeated mistakes receive an immediate, bounded drill; then the agent uses
 * the already-curated daily plan.  All branches return a concrete action.
 */
export function decideNextLearningAction(
  signals: LearningAgentSignals,
): LearningAgentRecommendation {
  const sceneForWeakSkill = signals.weakestSkillId
    ? signals.plan.find((scene) => scene.skillId === signals.weakestSkillId) ?? null
    : null;
  const firstScene = sceneForWeakSkill ?? signals.plan[0] ?? null;

  if (signals.dueReviews > 0) {
    return {
      action: { kind: "review" }, reason: "due-review", scene: null,
      confidence: "high",
      messageTr: `${signals.dueReviews} tekrar seni bekliyor — önce onları tazele.`,
      messageEn: `${signals.dueReviews} reviews are due — refresh them first.`,
    };
  }
  const repeated = [...signals.activeMistakes].sort((a, b) => b.count - a.count)[0];
  if (repeated && repeated.count >= 2) {
    return {
      action: { kind: "mistake-drill", patternId: repeated.patternId },
      reason: "repeated-mistake", scene: null, confidence: "high",
      messageTr: `${signals.dominantMistakeLabel ?? "Tekrarlayan bir yapı"} için kısa bir düzeltme turu yapalım.`,
      messageEn: "Let's do a quick correction round for a repeated pattern.",
    };
  }
  if (firstScene) {
    const reason: LearningAgentReason = signals.streakAtRisk
      ? "streak-protection"
      : sceneForWeakSkill ? "weak-skill" : "daily-plan";
    return {
      action: { kind: "scenario", lessonId: firstScene.lessonId },
      reason, scene: firstScene,
      confidence: signals.streakAtRisk || sceneForWeakSkill ? "high" : "medium",
      messageTr: signals.streakAtRisk
        ? "Serini korumak için bugün kısa bir sahne yeterli."
        : sceneForWeakSkill
          ? "Bugünün sahnesi en çok güçlenmeye ihtiyaç duyan becerine yakın."
          : "Bugünün planından en iyi sonraki adımı seçtim.",
      messageEn: signals.streakAtRisk
        ? "A short scene is enough to protect your streak today."
        : sceneForWeakSkill
          ? "Today's scene targets the skill that needs the most work."
          : "I picked the best next step from today's plan.",
    };
  }
  return {
    action: { kind: "review" }, reason: "daily-plan", scene: null,
    confidence: "medium", messageTr: "Yeni bir çalışma alanı seçmek için tekrarlarına göz atalım.",
    messageEn: "Let's look at your reviews to choose a new practice area.",
  };
}

export async function getLearningAgentRecommendation(): Promise<LearningAgentRecommendation> {
  const cloud = await getCloudLearningAgentRecommendation().catch(() => null);
  if (cloud) return cloud;
  return decideNextLearningAction(await collectLearningAgentSignals());
}
