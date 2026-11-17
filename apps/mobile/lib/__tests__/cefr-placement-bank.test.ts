import {
  CEFR_ORDER,
  pickQuestionFromLevel,
} from "../../data/cefr-placement-bank";

describe("CEFR placement question selection", () => {
  it("never repeats a used question when the target-level pool is exhausted", () => {
    const used = new Set<string>();
    for (let index = 0; index < 12; index += 1) {
      const question = pickQuestionFromLevel("C2", used);
      expect(question).not.toBeNull();
      expect(used.has(question!.id)).toBe(false);
      used.add(question!.id);
    }
    expect(used.size).toBe(12);
  });

  it("prefers the requested level while unused questions remain", () => {
    const question = pickQuestionFromLevel("B1", new Set());
    expect(CEFR_ORDER.indexOf(question!.level)).toBe(CEFR_ORDER.indexOf("B1"));
  });
});
