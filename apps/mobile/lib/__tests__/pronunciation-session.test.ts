import {
  summarizePronunciationAttempts,
  unavailablePronunciationResult,
} from "../pronunciation-session";

describe("pronunciation session scoring", () => {
  it("does not turn unavailable recognition into a perfect score", () => {
    expect(unavailablePronunciationResult("pronounce_phrase")).toMatchObject({
      correct: false,
      score: 0,
    });
  });

  it("excludes skipped attempts without inflating the evaluated average", () => {
    expect(
      summarizePronunciationAttempts([
        { score: 70, skipped: false },
        { score: 0, skipped: true },
        { score: 90, skipped: false },
      ]),
    ).toEqual({
      score: 80,
      correct: true,
      evaluatedCount: 2,
      skippedCount: 1,
    });
  });

  it("reports an all-skipped session as unassessed", () => {
    expect(
      summarizePronunciationAttempts([{ score: 0, skipped: true }]),
    ).toEqual({
      score: 0,
      correct: false,
      evaluatedCount: 0,
      skippedCount: 1,
    });
  });
});
