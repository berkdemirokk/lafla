import {
  calibrateScenarioLevel,
  calibrateSessionMinutes,
  inferProductionLevel,
} from "../cefr-calibrator";

const userTurn = (answer: string) => ({
  speaker: "user" as const,
  model_answers: [answer],
});

describe("CEFR production calibrator", () => {
  it("keeps genuinely short production at beginner level", () => {
    expect(inferProductionLevel([userTurn("Two coffees, please.")])).toBe("A1");
    expect(inferProductionLevel([userTurn("Could I have two coffees, please?")])).toBe(
      "A2",
    );
  });

  it("uses sentence structure and vocabulary to protect advanced scenes", () => {
    const turns = [
      userTurn(
        "Although the deadline is tight, I would have preferred to clarify the alternative with the team first.",
      ),
      userTurn(
        "However, I appreciate your perspective and would like to discuss the responsibility more specifically.",
      ),
    ];
    expect(inferProductionLevel(turns)).toBe("B2");
    expect(calibrateScenarioLevel("A2", turns)).toBe("B2");
  });

  it("never lowers an authored upper level", () => {
    expect(calibrateScenarioLevel("C1", [userTurn("Yes, please.")])).toBe("C1");
  });

  it("clamps every focused session to two through four minutes", () => {
    expect(calibrateSessionMinutes(1)).toBe(2);
    expect(calibrateSessionMinutes(3)).toBe(3);
    expect(calibrateSessionMinutes(8)).toBe(4);
  });
});
