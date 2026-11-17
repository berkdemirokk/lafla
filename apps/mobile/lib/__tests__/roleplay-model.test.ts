import {
  extractQuotedModelAnswers,
  modelAnswersForTurn,
} from "../roleplay-model";

describe("roleplay model answer extraction", () => {
  it("preserves apostrophes inside contractions", () => {
    expect(
      extractQuotedModelAnswers(
        "Örnek: 'I'm ready, and that's exactly what I'd say.'",
      ),
    ).toEqual(["I'm ready, and that's exactly what I'd say."]);
  });

  it("supports smart and double quotes", () => {
    expect(
      extractQuotedModelAnswers('“Could I get a coffee?” veya "Tea, please."'),
    ).toEqual(["Could I get a coffee?", "Tea, please."]);
  });

  it("prefers structured model answers over quoted hint text", () => {
    expect(
      modelAnswersForTurn({
        model_answers: ["Structured answer"],
        hint_tr: 'Örnek: “Legacy answer”',
      }),
    ).toEqual(["Structured answer"]);
  });
});
