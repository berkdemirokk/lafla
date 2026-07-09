import { buildRoleplayChoiceOptions } from "../roleplay-options";

describe("roleplay guided choices", () => {
  it("only uses safe answers from the current turn", () => {
    const turns = [
      { speaker: "user" as const, model_answers: ["A coffee, please."] },
      { speaker: "user" as const, model_answers: ["Can I pay by card?"] },
      { speaker: "user" as const, model_answers: ["That's all, thanks."] },
    ];

    expect(buildRoleplayChoiceOptions(turns[0]!, turns)).toEqual([
      "A coffee, please.",
    ]);
    expect(buildRoleplayChoiceOptions(turns[0]!, turns)).not.toEqual(
      expect.arrayContaining(["Can I pay by card?", "That's all, thanks."]),
    );
  });

  it("keeps multiple authored variants when the active turn has them", () => {
    const turn = {
      speaker: "user" as const,
      model_answers: [
        "Could we move it to Friday?",
        "Can we reschedule for Friday?",
      ],
    };

    expect(buildRoleplayChoiceOptions(turn, [turn])).toEqual(
      expect.arrayContaining([
        "Could we move it to Friday?",
        "Can we reschedule for Friday?",
      ]),
    );
  });

  it("does not render choices without a real model answer", () => {
    expect(
      buildRoleplayChoiceOptions({ speaker: "user" }, []),
    ).toEqual([]);
  });
});
