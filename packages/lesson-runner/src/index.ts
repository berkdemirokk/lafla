// Lafla — Lesson Runner
//
// State machine that walks a user through a lesson exercise by exercise.
// Pure functions — given (lesson, current_progress, user_input) returns
// the new progress + feedback. No side effects, runs anywhere.
//
// API:
//   startLesson(lesson)                  → initial LessonProgress
//   getCurrentExercise(lesson, progress) → Exercise | null
//   evaluateExercise(exercise, input)    → ExerciseResult
//   applyResult(lesson, progress, result) → new LessonProgress

import { matchPhrase, type MatchResult } from "../../pattern-matcher/src/index.js";
import type {
  Lesson,
  Exercise,
  VocabTileExercise,
  TranslateExercise,
  FillBlankExercise,
  WordOrderExercise,
  SpotMistakeExercise,
  RoleplayChatExercise,
  RecapQuizExercise,
} from "../../content-types/src/scenario.js";

export interface ExerciseResult {
  exercise_id: string;
  exercise_type: string;
  correct: boolean;
  score: number; // 0-100
  feedback?: string;
  match?: MatchResult;
}

export interface LessonProgress {
  lesson_id: string;
  current_index: number;
  completed: boolean;
  results: ExerciseResult[];
  total_score: number;
  xp_earned: number;
}

export type UserInput = string | string[] | number | number[];

// ------------------------------------------------------------
// Start
// ------------------------------------------------------------
export function startLesson(lesson: Lesson): LessonProgress {
  return {
    lesson_id: lesson.id,
    current_index: 0,
    completed: false,
    results: [],
    total_score: 0,
    xp_earned: 0,
  };
}

export function getCurrentExercise(
  lesson: Lesson,
  progress: LessonProgress,
): Exercise | null {
  if (progress.completed) return null;
  return lesson.exercises[progress.current_index] ?? null;
}

// ------------------------------------------------------------
// Evaluate — dispatches to per-type evaluator
// ------------------------------------------------------------
export function evaluateExercise(
  exercise: Exercise,
  input: UserInput,
): ExerciseResult {
  switch (exercise.type) {
    case "vocab_tile":
      return evaluateVocabTile(exercise);
    case "translate":
      return evaluateTranslate(exercise, input as string);
    case "fill_blank":
      return evaluateFillBlank(exercise, input as string);
    case "word_order":
      return evaluateWordOrder(exercise, input as string | string[]);
    case "spot_mistake":
      return evaluateSpotMistake(exercise, input as string);
    case "roleplay_chat":
      return evaluateRoleplayChat(exercise, input as string[]);
    case "recap_quiz":
      return evaluateRecapQuiz(exercise, input as number[]);
  }
}

// ------------------------------------------------------------
// Per-type evaluators
// ------------------------------------------------------------

function evaluateVocabTile(ex: VocabTileExercise): ExerciseResult {
  // Vocab tile is passive — just shows a card. Always counts as complete.
  return {
    exercise_id: ex.id,
    exercise_type: "vocab_tile",
    correct: true,
    score: 100,
    feedback: `Öğrendin: "${ex.word_or_phrase}" = "${ex.tr_translation}"`,
  };
}

function evaluateTranslate(
  ex: TranslateExercise,
  input: string,
): ExerciseResult {
  const match = matchPhrase({
    user_text: input,
    canonical: ex.target,
    accepted_variants: ex.accepted_variants ?? [],
  });
  const score = Math.round(match.similarity * 100);

  let feedback: string;
  if (match.confidence === "high") {
    feedback = `Mükemmel! "${match.best_variant}"`;
  } else if (match.confidence === "medium") {
    feedback = `Çok iyi. Native şöyle der: "${match.best_variant}"`;
  } else if (match.confidence === "low") {
    feedback = `Yakın. Daha doğal hâli: "${match.best_variant}"`;
  } else {
    feedback = `Hmm. Şöyle dene: "${match.best_variant}"`;
  }

  return {
    exercise_id: ex.id,
    exercise_type: "translate",
    correct: match.matched,
    score,
    feedback,
    match,
  };
}

function evaluateFillBlank(
  ex: FillBlankExercise,
  input: string,
): ExerciseResult {
  const normalizedInput = input.trim().toLowerCase();
  const normalizedAnswer = ex.answer.trim().toLowerCase();
  const correct = normalizedInput === normalizedAnswer;

  return {
    exercise_id: ex.id,
    exercise_type: "fill_blank",
    correct,
    score: correct ? 100 : 0,
    feedback: correct
      ? `Doğru!`
      : `Doğrusu "${ex.answer}". ${ex.tr_hint ?? ""}`.trim(),
  };
}

function evaluateWordOrder(
  ex: WordOrderExercise,
  input: string | string[],
): ExerciseResult {
  const userSentence = Array.isArray(input) ? input.join(" ") : input;
  const match = matchPhrase({
    user_text: userSentence,
    canonical: ex.correct_sentence,
    accepted_variants: [],
  });

  return {
    exercise_id: ex.id,
    exercise_type: "word_order",
    correct: match.matched,
    score: Math.round(match.similarity * 100),
    feedback: match.matched
      ? `Doğru sıralama!`
      : `Doğrusu: "${ex.correct_sentence}"`,
  };
}

function evaluateSpotMistake(
  ex: SpotMistakeExercise,
  input: string,
): ExerciseResult {
  const match = matchPhrase({
    user_text: input,
    canonical: ex.correct_sentence,
    accepted_variants: [],
  });

  return {
    exercise_id: ex.id,
    exercise_type: "spot_mistake",
    correct: match.matched,
    score: Math.round(match.similarity * 100),
    feedback: match.matched
      ? `Doğru düzelttin! ${ex.tr_explanation}`
      : `Doğrusu: "${ex.correct_sentence}". ${ex.tr_explanation}`,
  };
}

function evaluateRoleplayChat(
  ex: RoleplayChatExercise,
  userTurns: string[],
): ExerciseResult {
  // Pick out the turns where the user is expected to speak
  const userExpectedTurns = ex.turns.filter((t) => t.speaker === "user");
  const turnScores: number[] = [];

  for (let i = 0; i < userTurns.length && i < userExpectedTurns.length; i++) {
    const userInput = userTurns[i]!;
    const expectedTurn = userExpectedTurns[i]!;
    const patterns = expectedTurn.acceptable_patterns ?? [];

    let matched = false;
    for (const pattern of patterns) {
      try {
        const regex = new RegExp(pattern, "i");
        if (regex.test(userInput)) {
          matched = true;
          break;
        }
      } catch {
        // Malformed regex — treat as plain substring
        if (userInput.toLowerCase().includes(pattern.toLowerCase())) {
          matched = true;
          break;
        }
      }
    }
    turnScores.push(matched ? 100 : 0);
  }

  const avgScore =
    turnScores.length > 0
      ? turnScores.reduce((a, b) => a + b, 0) / turnScores.length
      : 0;
  const correctCount = turnScores.filter((s) => s > 0).length;

  return {
    exercise_id: ex.id,
    exercise_type: "roleplay_chat",
    correct: avgScore >= 50,
    score: Math.round(avgScore),
    feedback: `${correctCount}/${turnScores.length} tepki doğru.`,
  };
}

function evaluateRecapQuiz(
  ex: RecapQuizExercise,
  answers: number[],
): ExerciseResult {
  let correctCount = 0;
  for (let i = 0; i < ex.questions.length && i < answers.length; i++) {
    if (answers[i] === ex.questions[i]!.correct_index) {
      correctCount++;
    }
  }
  const score = Math.round((correctCount / ex.questions.length) * 100);

  return {
    exercise_id: ex.id,
    exercise_type: "recap_quiz",
    correct: score >= 60,
    score,
    feedback: `${correctCount}/${ex.questions.length} doğru.`,
  };
}

// ------------------------------------------------------------
// Apply result + advance
// ------------------------------------------------------------
export function applyResult(
  lesson: Lesson,
  progress: LessonProgress,
  result: ExerciseResult,
): LessonProgress {
  const newResults = [...progress.results, result];
  const avgScore =
    newResults.reduce((sum, r) => sum + r.score, 0) / newResults.length;
  const newIndex = progress.current_index + 1;
  const completed = newIndex >= lesson.exercises.length;

  // XP: 2 points per exercise × score percentage, up to 14 per lesson
  const xpForThis = Math.round((result.score / 100) * 2);
  const newXp = progress.xp_earned + xpForThis;

  return {
    ...progress,
    current_index: newIndex,
    completed,
    results: newResults,
    total_score: Math.round(avgScore),
    xp_earned: newXp,
  };
}
