jest.mock("../llm-router", () => ({
  chatCompleteDetailed: jest.fn(),
}));

import {
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
    expect(result.formal).toMatch(/running late/i);
    expect(result.friendly).toMatch(/sorry/i);
    expect(result.source).toBe("fallback");
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
});
