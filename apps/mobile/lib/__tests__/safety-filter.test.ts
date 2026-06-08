import { checkUserInput, isCrisisSignal } from "../safety-filter";

describe("AI Safety & Moderation Filter Tests", () => {
  describe("checkUserInput", () => {
    it("should allow safe input", () => {
      const result = checkUserInput("Hello Maya, how are you today?");
      expect(result.ok).toBe(true);
    });

    it("should block NSFW content", () => {
      const result = checkUserInput("porno izlemek istiyorum");
      expect(result.ok).toBe(false);
      expect(result.reason).toBe("nsfw");
      expect(result.suggestedResponse_tr).toContain("Lafla, İngilizce öğrenme");
    });

    it("should block crisis signals and escalate", () => {
      const result = checkUserInput("intihar etmek istiyorum");
      expect(result.ok).toBe(false);
      expect(result.reason).toBe("crisis");
      expect(result.shouldEscalate).toBe(true);
      expect(result.suggestedResponse_tr).toContain("AMATEM");
    });

    it("should block medical requests", () => {
      const result = checkUserInput("hangi ilacı alayım, başım çok ağrıyor?");
      expect(result.ok).toBe(false);
      expect(result.reason).toBe("medical");
      expect(result.suggestedResponse_tr).toContain("doktor");
    });

    it("should block legal requests", () => {
      const result = checkUserInput("boşanma davası açmalı mıyım?");
      expect(result.ok).toBe(false);
      expect(result.reason).toBe("legal");
      expect(result.suggestedResponse_tr).toContain("avukata");
    });

    it("should handle normalization correctly (Turkish characters, spaces)", () => {
      const result = checkUserInput("  P-O-R-N-O  "); // spaces and special chars (po*no, etc.)
      // Note: checkUserInput normalizes diacritics and spaces
      const resultDiacritics = checkUserInput("İntıhar etmek İstıyorum");
      expect(resultDiacritics.ok).toBe(false);
      expect(resultDiacritics.reason).toBe("crisis");
    });
  });

  describe("isCrisisSignal", () => {
    it("should detect crisis expressions", () => {
      expect(isCrisisSignal("kill myself")).toBe(true);
      expect(isCrisisSignal("olmek istiyorum")).toBe(true);
      expect(isCrisisSignal("hello")).toBe(false);
    });
  });
});
