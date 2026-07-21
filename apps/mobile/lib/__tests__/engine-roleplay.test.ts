import {
  evaluateRoleplayTurn,
  evaluateTranslate,
  matchPhrase,
} from "../engine";

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

  it("does not let a broad positive regex accept a negated response", () => {
    expect(evaluateRoleplayTurn(["(yes|sure)"], "I'm not sure")).toMatchObject({
      matched: false,
    });
  });

  it("still accepts an explicitly authored negative response", () => {
    expect(evaluateRoleplayTurn(["(no|not really)"], "No, thanks")).toEqual({
      matched: true,
      score: 100,
    });
  });

  it("requires both intent anchors for a two-token model answer", () => {
    expect(
      evaluateRoleplayTurn([], "Friday please", ["Can we move it to Friday?"]),
    ).toMatchObject({ matched: false });
  });
});

describe("semantic polarity", () => {
  it("never fuzzy-matches can and cannot as equivalent", () => {
    expect(
      matchPhrase({
        user_text: "I can't attend tomorrow",
        canonical: "I can attend tomorrow",
        accepted_variants: [],
      }),
    ).toMatchObject({ matched: false, similarity: 0 });
  });

  it("marks a contradictory translation incorrect", () => {
    expect(
      evaluateTranslate("I want a coffee", [], "I don't want a coffee"),
    ).toMatchObject({ correct: false, score: 0 });
  });
});
