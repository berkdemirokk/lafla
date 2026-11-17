import type { CefrLevel } from "./cefr-level";
import { interestsToModes } from "./interest-mapping";
import { allScenarios, type Scenario } from "./scenario";
import { modelAnswersForTurn } from "./roleplay-model";

const LEVELS: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];
export const FALLBACK_INTRO_SCENARIO_ID = "intro.match.0.1";

/** Selects a first practice that matches the learner's chosen context. */
export function pickOnboardingScenarioId(
  interests: string[],
  level: CefrLevel,
  scenarios: readonly Scenario[] = allScenarios(),
): string {
  const modes = interestsToModes(interests);
  const levelIndex = LEVELS.indexOf(level);

  for (const mode of modes) {
    const candidates = scenarios
      .map((scenario, authoredOrder) => ({ scenario, authoredOrder }))
      .filter(({ scenario }) => {
        if (scenario.mode !== mode) return false;
        const lastTurn = scenario.scene.turns.at(-1);
        const userTurns = scenario.scene.turns.filter(
          (turn) => turn.speaker === "user",
        );
        const hasGuidedFirstAttempt =
          userTurns.length > 0 &&
          userTurns.every(
            (turn) => modelAnswersForTurn(turn).length > 0,
          );
        // Do not make a learner's very first experience a script that ends
        // with an unanswered NPC question or lacks model answers.
        return !(
          (lastTurn?.speaker === "npc" &&
            /[?？]\s*$/.test(lastTurn.message ?? ""))
        ) && hasGuidedFirstAttempt;
      })
      .sort((a, b) => {
        const aLevel = a.scenario.cefrLevel
          ? LEVELS.indexOf(a.scenario.cefrLevel)
          : levelIndex;
        const bLevel = b.scenario.cefrLevel
          ? LEVELS.indexOf(b.scenario.cefrLevel)
          : levelIndex;
        return (
          Math.abs(aLevel - levelIndex) - Math.abs(bLevel - levelIndex) ||
          a.authoredOrder - b.authoredOrder
        );
      });
    if (candidates[0]) return candidates[0].scenario.id;
  }

  return FALLBACK_INTRO_SCENARIO_ID;
}
