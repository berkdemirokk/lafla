jest.mock("expo-store-review", () => ({
  isAvailableAsync: jest.fn(async () => true),
  requestReview: jest.fn(async () => {}),
}));

import { shouldAskForReview } from "../review-prompt";

const base = {
  successRatio: 0.9,
  activeDaysLast7: 4,
  lastAskedAt: null,
  askCount: 0,
  now: new Date("2026-11-16T12:00:00Z"),
};

describe("review prompt", () => {
  it("asks an engaged learner after a strong session", () => {
    expect(shouldAskForReview(base)).toBe(true);
  });

  it("does not ask after a weak session or before the learner is engaged", () => {
    expect(shouldAskForReview({ ...base, successRatio: 0.5 })).toBe(false);
    expect(shouldAskForReview({ ...base, activeDaysLast7: 2 })).toBe(false);
  });

  it("respects the re-ask window and the lifetime cap", () => {
    expect(
      shouldAskForReview({ ...base, lastAskedAt: "2026-10-01T12:00:00Z" }),
    ).toBe(false);
    expect(
      shouldAskForReview({ ...base, lastAskedAt: "2026-05-01T12:00:00Z", askCount: 1 }),
    ).toBe(true);
    expect(shouldAskForReview({ ...base, askCount: 3 })).toBe(false);
  });
});
