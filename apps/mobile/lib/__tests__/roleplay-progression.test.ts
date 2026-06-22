import { resolveRoleplayMode } from "../roleplay-progression";

describe("resolveRoleplayMode", () => {
  it("starts every new scenario with guided choices", () => {
    expect(resolveRoleplayMode(null)).toBe("multi-choice");
    expect(resolveRoleplayMode({ total_attempts: 0, consecutive_correct: 0 })).toBe(
      "multi-choice",
    );
  });

  it("keeps hints after attempts without demonstrated mastery", () => {
    expect(resolveRoleplayMode({ total_attempts: 3, consecutive_correct: 1 })).toBe(
      "hinted",
    );
  });

  it("unlocks free roleplay after two consecutive successful completions", () => {
    expect(resolveRoleplayMode({ total_attempts: 2, consecutive_correct: 2 })).toBe(
      "free",
    );
  });
});
