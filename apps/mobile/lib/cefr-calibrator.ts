import type { CefrLevel } from "../data/scenes";

interface CalibratableTurn {
  speaker: "npc" | "user";
  model_answers?: string[];
}

const LEVELS: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

const COMPLEX_LINKERS =
  /\b(although|however|whereas|despite|unless|provided that|even though|in case|so that|which|whose|whom)\b/i;
const COMPLEX_GRAMMAR =
  /\b(would have|could have|should have|had been|have been|might be|not only|on the condition that|were I|had I)\b/i;
const SOPHISTICATED_VOCAB =
  /\b(alternative|appreciate|clarify|concern|convenient|deadline|discuss|ensure|expectation|flexible|perspective|preferable|priority|recommend|responsibility|specifically|unfortunately)\b/gi;

function words(text: string): string[] {
  return text.match(/[A-Za-z]+(?:'[A-Za-z]+)?/g) ?? [];
}

export function inferProductionLevel(
  turns: readonly CalibratableTurn[],
): CefrLevel {
  const userTurns = turns.filter((turn) => turn.speaker === "user");
  const answers = userTurns.flatMap((turn) => turn.model_answers ?? []);
  if (answers.length === 0) return "A1";

  const lengths = answers.map((answer) => words(answer).length);
  const averageWords =
    lengths.reduce((sum, length) => sum + length, 0) / lengths.length;
  const longest = Math.max(...lengths);
  const joined = answers.join(" ");
  const linker = COMPLEX_LINKERS.test(joined);
  const grammar = COMPLEX_GRAMMAR.test(joined);
  const vocabularyHits = new Set(
    (joined.match(SOPHISTICATED_VOCAB) ?? []).map((hit) => hit.toLowerCase()),
  ).size;

  if (
    averageWords >= 18 &&
    longest >= 24 &&
    linker &&
    grammar &&
    vocabularyHits >= 2
  ) {
    return "C1";
  }
  if (
    longest >= 18 ||
    (averageWords >= 13 && (grammar || (linker && vocabularyHits >= 2)))
  ) {
    return "B2";
  }
  if (
    averageWords >= 9.5 ||
    (longest >= 12 && linker) ||
    (userTurns.length >= 4 && averageWords >= 6)
  ) {
    return "B1";
  }
  if (averageWords >= 4 || longest >= 6) return "A2";
  return "A1";
}

/** Never expose a scene below the production level its answers require. */
export function calibrateScenarioLevel(
  authoredLevel: CefrLevel | undefined,
  turns: readonly CalibratableTurn[],
): CefrLevel {
  const inferred = inferProductionLevel(turns);
  if (!authoredLevel) return inferred;
  return LEVELS.indexOf(inferred) > LEVELS.indexOf(authoredLevel)
    ? inferred
    : authoredLevel;
}

/** Product contract: one focused scene must fit into a 2–4 minute window. */
export function calibrateSessionMinutes(authoredMinutes: number): number {
  if (!Number.isFinite(authoredMinutes)) return 3;
  return Math.min(4, Math.max(2, Math.round(authoredMinutes)));
}
