import {
  normalizeRoleplayPatterns,
  repairRoleplayPattern,
} from "../roleplay-pattern";

describe("roleplay pattern normalization", () => {
  it("keeps valid patterns unchanged", () => {
    expect(repairRoleplayPattern("(could|can) i (have|get) coffee")).toBe(
      "(could|can) i (have|get) coffee",
    );
  });

  it("removes extra closing groups and closes missing groups", () => {
    expect(repairRoleplayPattern("(nervous|anxious))")).toBe(
      "(nervous|anxious)",
    );
    expect(repairRoleplayPattern("(hope (you made it|you are well)")).toBe(
      "(hope (you made it|you are well))",
    );
  });

  it("repairs punctuation classes and literal question marks", () => {
    expect(repairRoleplayPattern("(guess|theory)[,—-:]? why")).toBe(
      "(guess|theory)[,—\\-:]? why",
    );
    expect(repairRoleplayPattern("(coffee )?(or tea)(?)?")).toBe(
      "(coffee )?(or tea)\\??",
    );
  });

  it("drops blank and irreparable patterns", () => {
    expect(normalizeRoleplayPatterns(["", "   ", "trailing\\"])).toEqual([]);
  });
});
