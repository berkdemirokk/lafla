import { roleplayReaction } from "../roleplay-branching";

describe("bounded roleplay branching", () => {
  it("returns distinct response families for goal, close, and retry bands", () => {
    const input = "Could I have a coffee please";
    expect(roleplayReaction(100, input)).toMatch(/Got it|Nice|Perfect/);
    expect(roleplayReaction(50, input)).toMatch(/Hmm|follow/);
    expect(roleplayReaction(20, input)).toMatch(/off-topic|caught|not quite/);
  });

  it("is deterministic and silent for empty/unassessed input", () => {
    expect(roleplayReaction(100, "same answer")).toBe(
      roleplayReaction(100, "same answer"),
    );
    expect(roleplayReaction(0, "")).toBeNull();
  });
});
