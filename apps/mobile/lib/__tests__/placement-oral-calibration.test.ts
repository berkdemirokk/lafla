import {
  ORAL_SKIPPED_SCORE,
  appendOralScore,
  applyOralAdjustment,
  averageOralScores,
  normalizeOralScores,
} from "../placement-oral-calibration";

describe("placement oral calibration", () => {
  it("averages two speaking/listening samples before adjustment", () => {
    expect(averageOralScores([80, 40])).toBe(60);
    expect(applyOralAdjustment("B1", averageOralScores([80, 40]), 70)).toBe(
      "B1",
    );
  });

  it("uses conservative skipped scores without trapping the user", () => {
    const speaking = averageOralScores([ORAL_SKIPPED_SCORE, ORAL_SKIPPED_SCORE]);
    const listening = averageOralScores([ORAL_SKIPPED_SCORE, ORAL_SKIPPED_SCORE]);
    expect(applyOralAdjustment("B2", speaking, listening)).toBe("A2");
  });

  it("caps oral prompt persistence to two samples", () => {
    expect(appendOralScore([90, 80], 70)).toEqual([90, 80]);
    expect(normalizeOralScores([90, 80, 70], null)).toEqual([90, 80]);
    expect(normalizeOralScores(undefined, 55)).toEqual([55]);
  });
});
