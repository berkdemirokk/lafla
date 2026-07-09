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

  it("accepts concise beginner wording when the model answer anchors the intent", () => {
    expect(
      evaluateRoleplayTurn([], "coffee please", ["A coffee, please."]),
    ).toEqual({ matched: true, score: 90 });
  });

  it("accepts common natural paraphrases without an LLM call", () => {
    expect(
      evaluateRoleplayTurn([], "Could we reschedule for Friday?", [
        "Can we push it to Friday?",
      ]),
    ).toEqual({ matched: true, score: 86 });
  });

  it("does not fuzzy-match a contradictory negated answer", () => {
    expect(
      evaluateRoleplayTurn([], "I do not want a coffee please", [
        "I want a coffee, please.",
      ]),
    ).toMatchObject({ matched: false });
  });
});
