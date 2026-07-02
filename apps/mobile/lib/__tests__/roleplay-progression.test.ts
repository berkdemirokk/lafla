import {
  resolveRoleplayMode,
  resolveTurnSupport,
} from "../roleplay-progression";

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

describe("resolveTurnSupport", () => {
  it("removes support turn by turn for a first encounter", () => {
    expect(
      resolveTurnSupport({
        baseMode: "multi-choice",
        userTurnIndex: 0,
        levelDelta: 0,
      }),
    ).toBe("multi-choice");
    expect(
      resolveTurnSupport({
        baseMode: "multi-choice",
        userTurnIndex: 1,
        levelDelta: 0,
      }),
    ).toBe("multi-choice");
    expect(
      resolveTurnSupport({
        baseMode: "multi-choice",
        userTurnIndex: 2,
        levelDelta: 0,
      }),
    ).toBe("hinted");
    expect(
      resolveTurnSupport({
        baseMode: "multi-choice",
        userTurnIndex: 3,
        levelDelta: 0,
      }),
    ).toBe("free");
  });

  it("keeps guided support for a stretch scene", () => {
    expect(
      resolveTurnSupport({
        baseMode: "free",
        userTurnIndex: 0,
        levelDelta: -1,
      }),
    ).toBe("multi-choice");
    expect(
      resolveTurnSupport({
        baseMode: "free",
        userTurnIndex: 1,
        levelDelta: -1,
      }),
    ).toBe("multi-choice");
    expect(
      resolveTurnSupport({
        baseMode: "free",
        userTurnIndex: 2,
        levelDelta: -1,
      }),
    ).toBe("hinted");
  });

  it("uses free production for review and hard mode", () => {
    expect(
      resolveTurnSupport({
        baseMode: "multi-choice",
        userTurnIndex: 0,
        levelDelta: 1,
      }),
    ).toBe("free");
    expect(
      resolveTurnSupport({
        baseMode: "multi-choice",
        userTurnIndex: 0,
        levelDelta: -1,
        hardMode: true,
      }),
    ).toBe("free");
  });
});
