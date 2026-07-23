const QUOTES = new Set(["'", "‘", "’", '"', "“", "”"]);

function isLetter(char: string | undefined): boolean {
  return !!char && /[A-Za-z]/.test(char);
}

/** Extracts quoted model answers while preserving apostrophes in contractions. */
export function extractQuotedModelAnswers(hint?: string): string[] {
  if (!hint) return [];
  const answers: string[] = [];
  let start: number | null = null;

  for (let index = 0; index < hint.length; index += 1) {
    const char = hint[index]!;
    if (!QUOTES.has(char)) continue;

    const apostropheInsideWord =
      (char === "'" || char === "’") &&
      isLetter(hint[index - 1]) &&
      isLetter(hint[index + 1]);
    if (apostropheInsideWord) continue;

    if (start === null) {
      start = index + 1;
      continue;
    }

    const candidate = hint.slice(start, index).trim();
    if (/[A-Za-z]/.test(candidate)) answers.push(candidate);
    start = null;
  }

  return answers;
}

interface TurnWithModelAnswers {
  model_answers?: readonly string[];
  hint_tr?: string;
}

/** Uses structured content first; hint parsing remains legacy-only fallback. */
export function modelAnswersForTurn(turn: TurnWithModelAnswers): string[] {
  const structured = (turn.model_answers ?? [])
    .map((answer) => answer.trim())
    .filter(Boolean);
  return structured.length > 0
    ? [...new Set(structured)]
    : extractQuotedModelAnswers(turn.hint_tr);
}
