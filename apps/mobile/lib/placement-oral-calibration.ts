import { nextLevelDown } from "../data/cefr-placement-bank";
import type { CefrLevel } from "./cefr-level";

export const ORAL_SKIPPED_SCORE = 35;
export const ORAL_PROMPT_COUNT = 2;

export function averageOralScores(scores: readonly number[]): number | null {
  const valid = scores.filter((score) => Number.isFinite(score));
  if (valid.length === 0) return null;
  const sum = valid.reduce((total, score) => total + score, 0);
  return Math.round(sum / valid.length);
}

export function normalizeOralScores(
  scores: unknown,
  legacyScore: unknown,
): number[] {
  if (Array.isArray(scores)) {
    return scores
      .filter((score): score is number => Number.isFinite(score))
      .slice(0, ORAL_PROMPT_COUNT);
  }
  return Number.isFinite(legacyScore) ? [legacyScore as number] : [];
}

export function appendOralScore(
  scores: readonly number[],
  score: number,
): number[] {
  return [...scores, score].slice(0, ORAL_PROMPT_COUNT);
}

/**
 * The MCQ side measures recognition and grammar. Oral evidence adjusts only
 * downward because one short placement flow should not over-promote a user.
 */
export function applyOralAdjustment(
  mcqLevel: CefrLevel,
  speakingScore: number | null,
  listeningScore: number | null,
): CefrLevel {
  if (speakingScore === null && listeningScore === null) return mcqLevel;

  let drops = 0;

  if (speakingScore !== null) {
    if (speakingScore < 30) {
      drops += 2;
    } else if (speakingScore < 50) {
      drops += 1;
    }
  }

  if (listeningScore !== null && listeningScore < 50) {
    drops += 1;
  }

  let adjustedLevel = mcqLevel;
  for (let i = 0; i < Math.min(drops, 2); i++) {
    adjustedLevel = nextLevelDown(adjustedLevel);
  }
  return adjustedLevel;
}
