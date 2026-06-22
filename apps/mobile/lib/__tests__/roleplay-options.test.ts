import { buildRoleplayChoiceOptions } from "../roleplay-options";

describe("roleplay guided choices", () => {
  it("uses answers from the same scene as contextual distractors", () => {
    const turns = [
      { speaker: "user" as const, model_answers: ["A coffee, please."] },
      { speaker: "user" as const, model_answers: ["Can I pay by card?"] },
      { speaker: "user" as const, model_answers: ["That's all, thanks."] },
    ];

    expect(buildRoleplayChoiceOptions(turns[0]!, turns)).toEqual(
      expect.arrayContaining([
        "A coffee, please.",
        "Can I pay by card?",
        "That's all, thanks.",
      ]),
    );
  });

  it("does not render choices without a real model answer", () => {
    expect(
      buildRoleplayChoiceOptions({ speaker: "user" }, []),
    ).toEqual([]);
  });
});
