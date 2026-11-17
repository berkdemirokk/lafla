import { introMatchLesson_0_1 } from "../../data/intro-match-lesson";
import { allLessons } from "../../data/lessons";
import { filterSetupByLevel } from "../cefr-level";
import { modelAnswersForTurn } from "../roleplay-model";
import { evaluateRoleplayTurn } from "../engine";
import {
  allScenarios,
  lessonToScenario,
  MAX_CONTROLLED_PRACTICE_ITEMS,
  MAX_ROLEPLAY_USER_TURNS,
  MAX_SETUP_ITEMS,
} from "../scenario";

describe("short scenario learning loop", () => {
  const scenario = lessonToScenario(introMatchLesson_0_1)!;

  it("limits presentation and controlled practice", () => {
    expect(filterSetupByLevel(scenario.setup, "A2")).toHaveLength(
      MAX_SETUP_ITEMS,
    );
    expect(scenario.warmups.length).toBeLessThanOrEqual(
      MAX_CONTROLLED_PRACTICE_ITEMS,
    );
    expect(scenario.setupExtra).toEqual([]);
    expect(scenario.preScene).toEqual([]);
    expect(scenario.recallQuiz).toBeNull();
  });

  it("keeps the authored multiple-choice preparation instead of auto-skipping it", () => {
    expect(scenario.warmups[0]).toMatchObject({ type: "multiple_choice" });
  });

  it("ends the intro conversation without an unanswered question", () => {
    const lastTurn = scenario.scene.turns.at(-1);
    expect(lastTurn?.speaker).toBe("npc");
    expect(lastTurn?.message).not.toMatch(/[?？]\s*$/);
  });

  it("caps production so roleplay remains a short practice", () => {
    const userTurns = scenario.scene.turns.filter(
      (turn) => turn.speaker === "user",
    );
    expect(userTurns.length).toBeLessThanOrEqual(MAX_ROLEPLAY_USER_TURNS);
  });

  it("keeps every bundled roleplay short and removes unanswered endings", () => {
    for (const bundled of allScenarios()) {
      const userTurns = bundled.scene.turns.filter(
        (turn) => turn.speaker === "user",
      );
      const lastTurn = bundled.scene.turns.at(-1);
      expect(userTurns.length).toBeLessThanOrEqual(MAX_ROLEPLAY_USER_TURNS);
      expect(
        lastTurn?.speaker === "npc" && /[?？]\s*$/.test(lastTurn.message ?? ""),
      ).toBe(false);
    }
  });

  it("keeps every active turn teachable and every warmup renderable", () => {
    const supportedWarmups = new Set([
      "multiple_choice",
      "fill_blank",
      "word_order",
      "spot_mistake",
      "translate",
      "pronounce_phrase",
      "speech_shadowing",
      "listen_and_transcribe",
      "sentence_pattern",
      "dialogue_gap",
      "listen_respond",
      "thinking_trap",
    ]);

    for (const bundled of allScenarios()) {
      for (const warmup of bundled.warmups as Array<{ type?: string }>) {
        expect(supportedWarmups.has(warmup.type ?? "")).toBe(true);
        expectWarmupContent(warmup);
      }

      const userTurns = bundled.scene.turns.filter(
        (turn) => turn.speaker === "user",
      );
      expect(userTurns.length).toBeGreaterThan(0);
      for (const turn of userTurns) {
        expect(turn.acceptable_patterns?.length ?? 0).toBeGreaterThan(0);
        for (const pattern of turn.acceptable_patterns ?? []) {
          expect(() => new RegExp(pattern, "i")).not.toThrow();
        }
        const models = modelAnswersForTurn(turn);
        expect(models.length).toBeGreaterThan(0);
        expect(
          evaluateRoleplayTurn(
            turn.acceptable_patterns ?? [],
            models[0]!,
            models,
          ).matched,
        ).toBe(true);
      }
    }
  });

  it("keeps every authored user turn structured and regex-valid", () => {
    for (const lesson of allLessons) {
      const roleplay = (lesson.exercises as Array<Record<string, any>>).find(
        (exercise) => exercise.type === "roleplay_chat",
      );
      if (!roleplay) continue;

      for (const turn of roleplay.turns as Array<Record<string, any>>) {
        if (turn.speaker !== "user") continue;
        expect(Array.isArray(turn.model_answers)).toBe(true);
        expect(turn.model_answers).toHaveLength(1);
        expect(turn.model_answers.every((answer: unknown) =>
          typeof answer === "string" && answer.trim().length > 0,
        )).toBe(true);
        expect(Array.isArray(turn.acceptable_patterns)).toBe(true);
        expect(turn.acceptable_patterns.length).toBeGreaterThan(0);
        for (const pattern of turn.acceptable_patterns as string[]) {
          expect(() => new RegExp(pattern, "i")).not.toThrow();
        }
      }
    }
  });
});

function expectWarmupContent(exercise: Record<string, any>): void {
  const nonEmptyString = (value: unknown) =>
    typeof value === "string" && value.trim().length > 0;

  switch (exercise.type) {
    case "multiple_choice":
      expect(nonEmptyString(exercise.question)).toBe(true);
      expect(Array.isArray(exercise.options)).toBe(true);
      expect(exercise.options.length).toBeGreaterThanOrEqual(2);
      expect(exercise.options.every(nonEmptyString)).toBe(true);
      expect(Number.isInteger(exercise.correct_index)).toBe(true);
      expect(exercise.correct_index).toBeGreaterThanOrEqual(0);
      expect(exercise.correct_index).toBeLessThan(exercise.options.length);
      break;
    case "sentence_pattern":
      expect(nonEmptyString(exercise.template)).toBe(true);
      expect(Array.isArray(exercise.slots)).toBe(true);
      expect(exercise.slots.length).toBeGreaterThan(0);
      expect(
        exercise.slots.every(
          (slot: { accepted?: unknown[] }) =>
            Array.isArray(slot.accepted) && slot.accepted.length > 0,
        ),
      ).toBe(true);
      expect(nonEmptyString(exercise.example_filled)).toBe(true);
      break;
    case "translate":
      expect(nonEmptyString(exercise.source)).toBe(true);
      expect(nonEmptyString(exercise.target)).toBe(true);
      break;
    case "fill_blank":
      expect(nonEmptyString(exercise.sentence_template)).toBe(true);
      expect(nonEmptyString(exercise.answer)).toBe(true);
      expect(Array.isArray(exercise.distractors)).toBe(true);
      break;
    case "dialogue_gap":
      expect(Array.isArray(exercise.turns)).toBe(true);
      expect(exercise.turns.length).toBeGreaterThan(1);
      expect(Number.isInteger(exercise.missing_at)).toBe(true);
      expect(exercise.missing_at).toBeGreaterThanOrEqual(0);
      expect(exercise.missing_at).toBeLessThan(exercise.turns.length);
      expect(Array.isArray(exercise.accepted_patterns)).toBe(true);
      expect(exercise.accepted_patterns.length).toBeGreaterThan(0);
      expect(nonEmptyString(exercise.ideal_answer)).toBe(true);
      break;
    case "word_order":
      expect(Array.isArray(exercise.scrambled_tokens)).toBe(true);
      expect(exercise.scrambled_tokens.length).toBeGreaterThan(1);
      expect(nonEmptyString(exercise.correct_sentence)).toBe(true);
      break;
  }
}
