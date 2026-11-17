import type { ExerciseResult } from "./engine";

export interface PronunciationAttempt {
  score: number;
  skipped: boolean;
}

export function summarizePronunciationAttempts(
  attempts: readonly PronunciationAttempt[],
): {
  score: number;
  correct: boolean;
  evaluatedCount: number;
  skippedCount: number;
} {
  const evaluated = attempts.filter((attempt) => !attempt.skipped);
  const score =
    evaluated.length === 0
      ? 0
      : Math.round(
          evaluated.reduce((sum, attempt) => sum + attempt.score, 0) /
            evaluated.length,
        );
  return {
    score,
    correct: evaluated.length > 0 && score >= 60,
    evaluatedCount: evaluated.length,
    skippedCount: attempts.length - evaluated.length,
  };
}

export function unavailablePronunciationResult(
  exerciseType: "pronounce_phrase" | "speech_shadowing",
): ExerciseResult {
  return {
    exercise_id: exerciseType,
    exercise_type: exerciseType,
    correct: false,
    score: 0,
    feedback: "Konuşma tanıma kullanılamadı — puan verilmeden atlandı.",
  };
}
