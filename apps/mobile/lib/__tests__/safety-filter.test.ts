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
    });

    it("should allow safe words containing sex (Sussex, unisex)", () => {
      expect(checkUserInput("I live in Sussex").ok).toBe(true);
      expect(checkUserInput("This is a unisex shirt").ok).toBe(true);
      expect(checkUserInput("Let's talk about Essex").ok).toBe(true);
    });

    it("should block Sussex porn (verifies safe word whitelist vulnerability is fixed)", () => {
      const result = checkUserInput("I want Sussex p-o-r-n");
      expect(result.ok).toBe(false);
      expect(result.reason).toBe("nsfw");
    });

    it("should allow doctor/lawyer in roleplay, practice, or scenario contexts", () => {
      expect(checkUserInput("I want to do a doctor roleplay").ok).toBe(true);
      expect(checkUserInput("Let's practice a doctor scenario").ok).toBe(true);
      expect(checkUserInput("I have a lawyer job interview tomorrow").ok).toBe(true);
    });

    it("should still block actual medical/legal advice requests even in roleplay", () => {
      expect(checkUserInput("roleplay: write me a medical prescription").ok).toBe(false);
      expect(checkUserInput("scenario: how do I file a divorce (boşanma davası)?").ok).toBe(false);
    });

    it("should allow weed/attack in safe contexts (weed the garden, panic attack)", () => {
      expect(checkUserInput("I need to weed the garden today").ok).toBe(true);
      expect(checkUserInput("My mom is weeding her garden").ok).toBe(true);
      expect(checkUserInput("I had a panic attack last night").ok).toBe(true);
      expect(checkUserInput("He had a sudden heart attack").ok).toBe(true);
    });

    it("should still block weed/attack when used in drug/violence contexts", () => {
      expect(checkUserInput("where can I buy weed?").ok).toBe(false);
      expect(checkUserInput("where can I buy weed?").reason).toBe("drugs");
      expect(checkUserInput("I am going to attack that building").ok).toBe(false);
      expect(checkUserInput("I am going to attack that building").reason).toBe("violence");
    });

    it("should block crisis signals and escalate", () => {
      const result = checkUserInput("intihar etmek istiyorum");
      expect(result.ok).toBe(false);
      expect(result.reason).toBe("crisis");
      expect(result.shouldEscalate).toBe(true);
    });

    it("should block medical requests", () => {
      const result = checkUserInput("hangi ilacı alayım, başım çok ağrıyor?");
      expect(result.ok).toBe(false);
      expect(result.reason).toBe("medical");
    });

    it("should block legal requests", () => {
      const result = checkUserInput("boşanma davası açmalı mıyım?");
      expect(result.ok).toBe(false);
      expect(result.reason).toBe("legal");
    });

    it("should detect dashed and spaced bypasses", () => {
      // Crisis bypasses
      expect(checkUserInput("i-n-t-i-h-a-r").ok).toBe(false);
      expect(checkUserInput("i-n-t-i-h-a-r").reason).toBe("crisis");
      expect(checkUserInput("i n t i h a r").ok).toBe(false);
      expect(checkUserInput("k_i_l_l_m_y_s_e_l_f").ok).toBe(false);

      // NSFW bypasses
      expect(checkUserInput("s-e-x").ok).toBe(false);
      expect(checkUserInput("s-e-x").reason).toBe("nsfw");
      expect(checkUserInput("s e x").ok).toBe(false);
    });

    it("should handle normalization correctly (Turkish characters, spaces)", () => {
      const resultDiacritics = checkUserInput("İntıhar etmek İstıyorum");
      expect(resultDiacritics.ok).toBe(false);
      expect(resultDiacritics.reason).toBe("crisis");
    });
  });

  describe("isCrisisSignal", () => {
    it("should detect crisis expressions", () => {
      expect(isCrisisSignal("kill myself")).toBe(true);
      expect(isCrisisSignal("olmek istiyorum")).toBe(true);
      expect(isCrisisSignal("i-n-t-i-h-a-r")).toBe(true);
      expect(isCrisisSignal("hello")).toBe(false);
    });
  });
});
