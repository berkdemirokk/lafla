import { modelAnswersForTurn } from "./roleplay-model";

export interface RoleplayChoiceTurn {
  speaker: "npc" | "user";
  model_answers?: string[];
  hint_tr?: string;
}

function hash(value: string): number {
  let result = 0;
  for (let index = 0; index < value.length; index += 1) {
    result = (result * 31 + value.charCodeAt(index)) | 0;
  }
  return Math.abs(result);
}

/**
 * Builds only safe answers for the current turn.
 *
 * Earlier versions mixed the correct answer with "distractors" from later
 * turns in the same scene. That is acceptable for a quiz, but roleplay choices
 * are a support rail: if Lafla offers a sentence, selecting it must not make
 * the conversation semantically wrong. Keep this list limited to authored
 * model answers for the active turn.
 */
export function buildRoleplayChoiceOptions(
  currentTurn: RoleplayChoiceTurn,
  allTurns: readonly RoleplayChoiceTurn[],
): string[] {
  const answers = modelAnswersForTurn(currentTurn);
  if (answers.length === 0) return [];

  const seen = new Set<string>();
  const safeAnswers = answers.filter((answer) => {
    const normalized = answer.toLowerCase();
    if (seen.has(normalized)) return false;
    seen.add(normalized);
    return true;
  });
  const seed = hash(
    `${safeAnswers.join("|")}|${currentTurn.hint_tr ?? ""}|${allTurns.length}`,
  );
  return safeAnswers
    .map((option, index) => ({ option, order: hash(`${seed}|${index}|${option}`) }))
    .sort((a, b) => a.order - b.order)
    .map(({ option }) => option);
}
