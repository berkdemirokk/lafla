import { countRecentOccurrences } from "../mistake-dna";
import type { TrackedMistake } from "../mistake-tracker";

const base: TrackedMistake = {
  patternId: "missing-article-singular",
  count: 8,
  firstSeenAt: "2026-01-01T00:00:00.000Z",
  lastSeenAt: "2026-06-20T00:00:00.000Z",
  examples: ["I have car"],
  resolved: false,
  consecutiveCorrect: 0,
};

describe("Mistake DNA recency", () => {
  it("counts only occurrences inside the rolling window", () => {
    expect(
      countRecentOccurrences(
        {
          ...base,
          recentOccurrences: [
            "2026-05-01T00:00:00.000Z",
            "2026-06-18T00:00:00.000Z",
            "2026-06-20T00:00:00.000Z",
          ],
        },
        Date.parse("2026-06-10T00:00:00.000Z"),
      ),
    ).toBe(2);
  });

  it("migrates legacy aggregate records conservatively", () => {
    expect(
      countRecentOccurrences(base, Date.parse("2026-06-10T00:00:00.000Z")),
    ).toBe(3);
  });
});
