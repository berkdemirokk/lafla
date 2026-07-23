import {
  roleplayMasteryContribution,
  roleplayTurnUsedSupport,
} from "../roleplay-session-scoring";

describe("roleplay session scoring", () => {
  it("caps mastery when the learner uses a ready-made choice", () => {
    const supportUsed = roleplayTurnUsedSupport({
      submissionSource: "choice",
      hintVisible: false,
    });

    expect(supportUsed).toBe(true);
    expect(roleplayMasteryContribution(100, supportUsed)).toBe(70);
  });

  it("keeps full mastery for independent voice or text production", () => {
    expect(
      roleplayMasteryContribution(
        100,
        roleplayTurnUsedSupport({
          submissionSource: "voice",
          hintVisible: false,
        }),
      ),
    ).toBe(100);
    expect(
      roleplayMasteryContribution(
        86,
        roleplayTurnUsedSupport({
          submissionSource: "text",
          hintVisible: false,
        }),
      ),
    ).toBe(86);
  });

  it("caps mastery when a hint or retry supported the answer", () => {
    expect(
      roleplayMasteryContribution(
        95,
        roleplayTurnUsedSupport({
          submissionSource: "text",
          hintVisible: true,
        }),
      ),
    ).toBe(70);
    expect(
      roleplayMasteryContribution(
        95,
        roleplayTurnUsedSupport({
          submissionSource: "voice",
          hintVisible: false,
          retried: true,
        }),
      ),
    ).toBe(70);
  });
});
