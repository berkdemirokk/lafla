// Lafla Mobile — Engine (Pattern Matcher + Lesson Runner)
//
// Inlined logic for packages/pattern-matcher + packages/lesson-runner so
// the mobile bundle doesn't need monorepo path tricks. When backend exists,
// most of this becomes server-side and the client only renders state.

// ============================================================
// PATTERN MATCHER
// ============================================================

export type Confidence = "high" | "medium" | "low" | "none";

export interface MatchResult {
  matched: boolean;
  best_variant: string;
  similarity: number;
  confidence: Confidence;
  normalized_input: string;
}

export function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;

  let prevRow: number[] = new Array(n + 1);
  let currRow: number[] = new Array(n + 1);
  for (let j = 0; j <= n; j++) prevRow[j] = j;

  for (let i = 1; i <= m; i++) {
    currRow[0] = i;
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      currRow[j] = Math.min(
        prevRow[j] + 1,
        currRow[j - 1] + 1,
        prevRow[j - 1] + cost,
      );
    }
    [prevRow, currRow] = [currRow, prevRow];
  }
  return prevRow[n];
}

export function similarity(a: string, b: string): number {
  const dist = levenshtein(a, b);
  const maxLen = Math.max(a.length, b.length);
  if (maxLen === 0) return 1;
  return 1 - dist / maxLen;
}

export function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[.,!?;:'"()—–\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenOverlap(a: string, b: string): number {
  const A = new Set(normalize(a).split(" ").filter(Boolean));
  const B = new Set(normalize(b).split(" ").filter(Boolean));
  if (A.size === 0 && B.size === 0) return 1;
  let inter = 0;
  for (const t of A) if (B.has(t)) inter++;
  const union = A.size + B.size - inter;
  return union === 0 ? 0 : inter / union;
}

function combinedScore(a: string, b: string): number {
  const lev = similarity(a, b);
  const maxLen = Math.max(a.length, b.length);
  if (maxLen < 30) return lev;
  return 0.65 * lev + 0.35 * tokenOverlap(a, b);
}

function bandFromSimilarity(sim: number): Confidence {
  if (sim >= 0.95) return "high";
  if (sim >= 0.85) return "medium";
  if (sim >= 0.75) return "low";
  return "none";
}

export function matchPhrase(input: {
  user_text: string;
  accepted_variants: string[];
  canonical?: string;
}): MatchResult {
  const candidates = input.canonical
    ? [input.canonical, ...input.accepted_variants]
    : input.accepted_variants;
  const normalizedInput = normalize(input.user_text);

  if (candidates.length === 0) {
    return {
      matched: false,
      best_variant: "",
      similarity: 0,
      confidence: "none",
      normalized_input: normalizedInput,
    };
  }

  let bestSim = 0;
  let bestVar = candidates[0]!;
  for (const variant of candidates) {
    const sim = combinedScore(normalizedInput, normalize(variant));
    if (sim > bestSim) {
      bestSim = sim;
      bestVar = variant;
    }
  }
  return {
    matched: bestSim >= 0.75,
    best_variant: bestVar,
    similarity: bestSim,
    confidence: bandFromSimilarity(bestSim),
    normalized_input: normalizedInput,
  };
}

// Regex-with-fallback for roleplay acceptable_patterns
export function matchAgainstPatterns(
  userInput: string,
  patterns: string[],
): boolean {
  const lowered = userInput.toLowerCase();
  for (const pattern of patterns) {
    try {
      const regex = new RegExp(pattern, "i");
      if (regex.test(userInput)) return true;
    } catch {
      // Malformed regex - fall back to substring match
      if (lowered.includes(pattern.toLowerCase())) return true;
    }
  }
  return false;
}

// ============================================================
// LESSON RUNNER
// ============================================================

export interface ExerciseResult {
  exercise_id: string;
  exercise_type: string;
  correct: boolean;
  score: number;
  feedback?: string;
}

export interface LessonProgress {
  lesson_id: string;
  current_index: number;
  completed: boolean;
  results: ExerciseResult[];
  total_score: number;
  xp_earned: number;
}

export function startLesson(lesson: {
  id: string;
  exercises: unknown[];
}): LessonProgress {
  return {
    lesson_id: lesson.id,
    current_index: 0,
    completed: false,
    results: [],
    total_score: 0,
    xp_earned: 0,
  };
}

export function applyResult(
  lesson: { exercises: unknown[] },
  progress: LessonProgress,
  result: ExerciseResult,
): LessonProgress {
  const newResults = [...progress.results, result];
  const avgScore =
    newResults.reduce((sum, r) => sum + r.score, 0) / newResults.length;
  const newIndex = progress.current_index + 1;
  const completed = newIndex >= lesson.exercises.length;
  const xpForThis = Math.round((result.score / 100) * 2);

  return {
    ...progress,
    current_index: newIndex,
    completed,
    results: newResults,
    total_score: Math.round(avgScore),
    xp_earned: progress.xp_earned + xpForThis,
  };
}

// ============================================================
// PER-TYPE EVALUATORS
// ============================================================

export function evaluateTranslate(
  target: string,
  acceptedVariants: string[],
  input: string,
): ExerciseResult {
  const match = matchPhrase({
    user_text: input,
    canonical: target,
    accepted_variants: acceptedVariants,
  });
  let feedback: string;
  if (match.confidence === "high") feedback = `Mükemmel! "${match.best_variant}"`;
  else if (match.confidence === "medium")
    feedback = `Çok iyi. Native: "${match.best_variant}"`;
  else if (match.confidence === "low")
    feedback = `Yakın. Doğrusu: "${match.best_variant}"`;
  else feedback = `Hmm. Şöyle dene: "${match.best_variant}"`;

  return {
    exercise_id: "translate",
    exercise_type: "translate",
    correct: match.matched,
    score: Math.round(match.similarity * 100),
    feedback,
  };
}

export function evaluateFillBlank(answer: string, input: string): ExerciseResult {
  const correct = input.trim().toLowerCase() === answer.trim().toLowerCase();
  return {
    exercise_id: "fill_blank",
    exercise_type: "fill_blank",
    correct,
    score: correct ? 100 : 0,
    feedback: correct ? "Doğru!" : `Doğrusu: "${answer}".`,
  };
}

export function evaluateSpotMistake(
  correctSentence: string,
  input: string,
  explanation?: string,
): ExerciseResult {
  const match = matchPhrase({
    user_text: input,
    canonical: correctSentence,
    accepted_variants: [],
  });
  return {
    exercise_id: "spot_mistake",
    exercise_type: "spot_mistake",
    correct: match.matched,
    score: Math.round(match.similarity * 100),
    feedback: match.matched
      ? `Doğru düzelttin! ${explanation ?? ""}`
      : `Doğrusu: "${correctSentence}". ${explanation ?? ""}`,
  };
}

export function evaluateWordOrder(
  correctSentence: string,
  builtSentence: string,
): ExerciseResult {
  const match = matchPhrase({
    user_text: builtSentence,
    canonical: correctSentence,
    accepted_variants: [],
  });
  return {
    exercise_id: "word_order",
    exercise_type: "word_order",
    correct: match.matched,
    score: Math.round(match.similarity * 100),
    feedback: match.matched
      ? `Doğru sıralama!`
      : `Doğrusu: "${correctSentence}"`,
  };
}

export function evaluateRoleplayTurn(
  patterns: string[],
  input: string,
): { matched: boolean; score: number } {
  const matched = matchAgainstPatterns(input, patterns);
  return { matched, score: matched ? 100 : 0 };
}
