import { allLessons, type BundledLesson } from "../../data/lessons";
import { allScenarios, lessonToScenario } from "../scenario";

describe("lesson and scenario integrity", () => {
  it("has unique lesson and scenario IDs", () => {
    const lessonIds = allLessons.map((lesson) => lesson.id);
    const scenarioIds = allScenarios().map((scenario) => scenario.id);

    expect(new Set(lessonIds).size).toBe(lessonIds.length);
    expect(new Set(scenarioIds).size).toBe(scenarioIds.length);
  });

  it("preserves authored order for setup sentence patterns and dialogue gaps", () => {
    const lesson = {
      id: "order.test.1",
      skill_id: "order.test",
      title: "Test",
      description: "",
      estimated_minutes: 3,
      exercises: [
        { type: "dialogue_gap", marker: "gap-first" },
        { type: "sentence_pattern", marker: "pattern-second" },
        {
          type: "roleplay_chat",
          scenario_description: "A test scene",
          npc_role: "NPC",
          setting: "Test setting",
          turns: [],
        },
      ],
    } as unknown as BundledLesson;

    const scenario = lessonToScenario(lesson);
    expect(scenario?.setupExtra.map((exercise) => exercise.marker)).toEqual([
      "gap-first",
      "pattern-second",
    ]);
  });

  it("every registered lesson exercise has a declared type", () => {
    for (const lesson of allLessons) {
      for (const exercise of lesson.exercises) {
        expect([
          "vocab_tile",
          "multiple_choice",
          "recap_quiz",
          "pronounce_phrase",
          "speech_shadowing",
          "listen_and_transcribe",
          "sentence_pattern",
          "dialogue_gap",
          "translate",
          "fill_blank",
          "word_order",
          "spot_mistake",
          "thinking_trap",
          "listen_respond",
          "recall_quiz",
          "roleplay_chat",
        ]).toContain(exercise.type);
      }
    }
  });
});

