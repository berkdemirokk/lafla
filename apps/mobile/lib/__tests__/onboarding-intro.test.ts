import { pickOnboardingScenarioId } from "../onboarding-intro";
import type { Scenario } from "../scenario";

function scenario(id: string, mode: string, cefrLevel: Scenario["cefrLevel"]): Scenario {
  return {
    id,
    skill_id: mode,
    mode,
    title: id,
    description: "",
    estimated_minutes: 3,
    cefrLevel,
    setup: [],
    setupExtra: [],
    preScene: [],
    recallQuiz: null,
    warmups: [],
    scene: {
      description: "",
      npc_role: "",
      setting: "",
      turns: [
        { speaker: "npc", message: "Hello" },
        {
          speaker: "user",
          hint_tr: "Örnek: 'Hello, nice to meet you.'",
          acceptable_patterns: ["hello"],
        },
        { speaker: "npc", message: "Nice to meet you too." },
      ],
    },
  };
}

describe("pickOnboardingScenarioId", () => {
  const scenarios = [
    scenario("flirt.a2", "flirt", "A2"),
    scenario("work.a2", "work", "A2"),
    scenario("work.b1", "work", "B1"),
  ];

  it("uses the first selected interest and nearest level", () => {
    expect(pickOnboardingScenarioId(["work", "flirt"], "B1", scenarios)).toBe(
      "work.b1",
    );
  });

  it("falls back safely when interests are empty or stale", () => {
    expect(pickOnboardingScenarioId(["removed-interest"], "A2", scenarios)).toBe(
      "intro.match.0.1",
    );
  });
});
