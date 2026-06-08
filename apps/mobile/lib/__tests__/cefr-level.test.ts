import { getRelevantLevels, getStretchLevel, adjustLevel } from "../cefr-level";

describe("CEFR Level Management Tests", () => {
  describe("getRelevantLevels", () => {
    it("should return correct relevant levels for middle levels (e.g. B1)", () => {
      const result = getRelevantLevels("B1");
      expect(result).toEqual(["A2", "B1", "B2"]);
    });

    it("should return correct relevant levels for A1 edge level", () => {
      const result = getRelevantLevels("A1");
      expect(result).toEqual(["A1", "A2"]);
    });

    it("should return correct relevant levels for C2 edge level", () => {
      const result = getRelevantLevels("C2");
      expect(result).toEqual(["B2", "C1", "C2"]);
    });
  });

  describe("getStretchLevel", () => {
    it("should return next level up for lower/middle levels", () => {
      expect(getStretchLevel("A1")).toBe("A2");
      expect(getStretchLevel("B2")).toBe("C1");
      expect(getStretchLevel("C1")).toBe("C2");
    });

    it("should return null for C2 level", () => {
      expect(getStretchLevel("C2")).toBeNull();
    });
  });

  describe("adjustLevel", () => {
    it("should shift level up when direction is up, capped at C2", () => {
      expect(adjustLevel("A1", "up")).toBe("A2");
      expect(adjustLevel("C1", "up")).toBe("C2");
      expect(adjustLevel("C2", "up")).toBe("C2");
    });

    it("should shift level down when direction is down, capped at A1", () => {
      expect(adjustLevel("B1", "down")).toBe("A2");
      expect(adjustLevel("A2", "down")).toBe("A1");
      expect(adjustLevel("A1", "down")).toBe("A1");
    });
  });
});
