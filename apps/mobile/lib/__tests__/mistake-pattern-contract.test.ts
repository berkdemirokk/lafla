import { detectMistakes, MISTAKE_PATTERNS } from "../mistake-patterns";

describe("mistake pattern contract", () => {
  it("keeps every pattern id unique", () => {
    const ids = MISTAKE_PATTERNS.map((pattern) => pattern.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it.each([
    ["I listen podcast every morning.", "listen-music"],
    ["I made a selfie yesterday.", "make-photo"],
    ["Please close the air conditioner.", "close-light"],
    ["Can you open some music?", "open-music"],
    ["Can you describe me the route?", "explain-me"],
    ["Children is playing outside.", "people-is"],
    ["The actual government changed the rule.", "actual-current"],
    ["My actual job is remote.", "actual-current"],
  ])("preserves merged coverage for %s", (input, expectedId) => {
    expect(detectMistakes(input).map((hit) => hit.patternId)).toContain(
      expectedId,
    );
  });
});
