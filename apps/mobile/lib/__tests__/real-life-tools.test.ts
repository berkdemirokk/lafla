jest.mock("../llm-router", () => ({
  chatCompleteDetailed: jest.fn(),
}));

import {
  fallbackCustomScenario,
  fallbackEmergencyAnswers,
  parseCustomScenario,
  parseEmergencyAnswers,
} from "../real-life-tools";

describe("real-life tools", () => {
  it("parses fenced emergency JSON without trusting extra prose", () => {
    expect(
      parseEmergencyAnswers(
        '```json\n{"formal":"I apologize for the delay.","neutral":"I am running late.","friendly":"Running late — sorry!"}\n```',
      ),
    ).toMatchObject({
      formal: "I apologize for the delay.",
      source: "ai",
    });
  });

  it("has a useful offline late-to-work fallback", () => {
    const result = fallbackEmergencyAnswers(
      "Patronuma gecikeceğimi söyleyeceğim",
    );
    expect(result.formal).toMatch(/running .*late/i);
    expect(result.friendly).toMatch(/sorry/i);
    expect(result.source).toBe("fallback");
  });

  it("keeps emergency English useful without an LLM for high-stakes work intents", () => {
    const result = fallbackEmergencyAnswers(
      "Yöneticimle maaş artışı konuşacağım",
    );

    expect(result.neutral).toMatch(/salary adjustment/i);
    expect(result.formal).toMatch(/compensation/i);
    expect(result.friendly).toMatch(/responsibility/i);
  });

  it("builds a contextual offline custom scenario with multiple answer options", () => {
    const scenario = fallbackCustomScenario(
      "Yöneticimle maaş artışı konuşacağım",
    );

    expect(scenario.source).toBe("fallback");
    expect(scenario.npcRole).toBe("Manager");
    expect(scenario.turns).toHaveLength(5);
    expect(scenario.turns[1]?.model_answers?.length).toBeGreaterThanOrEqual(2);
    expect(scenario.turns[3]?.model_answers?.[0]).toMatch(/responsibility|impact/i);
  });

  it("rejects malformed or open-ended custom scenarios", () => {
    expect(parseCustomScenario('{"titleTr":"Eksik"}')).toBeNull();
    expect(
      parseCustomScenario(
        JSON.stringify({
          titleTr: "İş",
          descriptionTr: "Gecikme",
          npcRole: "Manager",
          settingTr: "Chat",
          turns: [
            { speaker: "npc", message: "Hi" },
            { speaker: "user", modelAnswers: ["I'm late."], hintTr: "Açıkla" },
            { speaker: "npc", message: "Why?" },
            { speaker: "user", modelAnswers: ["Traffic."], hintTr: "Sebep" },
            { speaker: "npc", message: "When will you arrive?" },
          ],
        }),
      ),
    ).toBeNull();
  });

  it("parses multiple AI model answer variants for guided roleplay", () => {
    expect(
      parseCustomScenario(
        JSON.stringify({
          titleTr: "İş",
          descriptionTr: "Maaş görüşmesi",
          npcRole: "Manager",
          settingTr: "Work meeting",
          turns: [
            { speaker: "npc", message: "What would you like to discuss?" },
            {
              speaker: "user",
              model_answers: [
                "I would like to discuss my compensation.",
                "Could we talk about my salary?",
              ],
              hint_tr: "Konuyu aç.",
            },
            { speaker: "npc", message: "Why now?" },
            {
              speaker: "user",
              modelAnswers: [
                "I have taken on more responsibility.",
                "I can share examples of my recent impact.",
              ],
              hintTr: "Değerini anlat.",
            },
            { speaker: "npc", message: "Thanks for explaining it." },
          ],
        }),
      )?.turns[1]?.model_answers,
    ).toEqual([
      "I would like to discuss my compensation.",
      "Could we talk about my salary?",
    ]);
  });
});
