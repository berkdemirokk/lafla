import { evaluateRoleplayTurn } from "../engine";

describe("evaluateRoleplayTurn", () => {
  const patterns = ["(could|can) i (have|get) a coffee"];

  it("awards success only when an accepted goal pattern matches", () => {
    expect(evaluateRoleplayTurn(patterns, "Could I have a coffee")).toEqual({
      matched: true,
      score: 100,
    });
  });

  it("treats word count as effort rather than correctness", () => {
    expect(evaluateRoleplayTurn(patterns, "The weather looks nice today")).toEqual({
      matched: false,
      score: 50,
    });
    expect(evaluateRoleplayTurn(patterns, "coffee please")).toEqual({
      matched: false,
      score: 20,
    });
  });

  it("accepts close natural wording against an authored model answer", () => {
    expect(
      evaluateRoleplayTurn([], "Could I get a coffee please", [
        "Could I have a coffee, please?",
      ]),
    ).toEqual({ matched: true, score: 90 });
  });

  it("does not fuzzy-match a contradictory negated answer", () => {
    expect(
      evaluateRoleplayTurn([], "I do not want a coffee please", [
        "I want a coffee, please.",
      ]),
    ).toMatchObject({ matched: false });
  });
});
