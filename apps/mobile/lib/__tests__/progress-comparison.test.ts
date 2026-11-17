import { comparisonDaysApart } from "../progress-comparison";

describe("before/after comparison", () => {
  it("reports the audible repeat interval in full days", () => {
    expect(
      comparisonDaysApart({
        scenarioId: "scene-1",
        scenarioTitle: "Toplantı",
        first: { text: "I explain this.", at: "2026-06-01T10:00:00.000Z" },
        coachedText: "Let me explain this clearly.",
        repeats: [
          {
            text: "Let me explain this clearly.",
            at: "2026-06-08T12:00:00.000Z",
          },
        ],
      }),
    ).toBe(7);
  });
});
