import { modelAnswersForTurn } from "./roleplay-model";

export interface RoleplayChoiceTurn {
  speaker: "npc" | "user";
  model_answers?: string[];
  hint_tr?: string;
}

const FALLBACK_DISTRACTORS = [
  "I don't understand.",
  "Let me think about it.",
  "Could you say that again?",
] as const;

function hash(value: string): number {
  let result = 0;
  for (let index = 0; index < value.length; index += 1) {
    result = (result * 31 + value.charCodeAt(index)) | 0;
  }
  return Math.abs(result);
}

/** Builds one correct option plus context-specific alternatives from the scene. */
export function buildRoleplayChoiceOptions(
  currentTurn: RoleplayChoiceTurn,
  allTurns: readonly RoleplayChoiceTurn[],
): string[] {
  const correct = modelAnswersForTurn(currentTurn)[0];
  if (!correct) return [];

  const seen = new Set([correct.toLowerCase()]);
  const contextual = allTurns
    .filter((turn) => turn !== currentTurn && turn.speaker === "user")
    .flatMap(modelAnswersForTurn)
    .filter((answer) => {
      const normalized = answer.toLowerCase();
      if (seen.has(normalized)) return false;
      seen.add(normalized);
      return true;
    });

  const distractors = [...contextual];
  for (const fallback of FALLBACK_DISTRACTORS) {
    if (distractors.length >= 2) break;
    if (!seen.has(fallback.toLowerCase())) distractors.push(fallback);
  }

  const seed = hash(`${correct}|${currentTurn.hint_tr ?? ""}`);
  return [correct, ...distractors.slice(0, 2)]
    .map((option, index) => ({ option, order: hash(`${seed}|${index}|${option}`) }))
    .sort((a, b) => a.order - b.order)
    .map(({ option }) => option);
}
