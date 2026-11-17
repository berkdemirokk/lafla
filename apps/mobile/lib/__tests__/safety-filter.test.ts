import { checkUserInput, isCrisisSignal } from "../safety-filter";

describe("safety-filter", () => {
  it("allows ordinary conversation and safe substring words", () => {
    expect(checkUserInput("Hello, how are you today?").ok).toBe(true);
    expect(checkUserInput("I live in Sussex").ok).toBe(true);
    expect(checkUserInput("This is a unisex shirt").ok).toBe(true);
    expect(checkUserInput("Let's talk about Essex").ok).toBe(true);
  });

  it("blocks explicit and obfuscated NSFW requests", () => {
    for (const text of [
      "Sussex porn",
      "unisex porn",
      "I live in Sussex, I want to watch a porno",
      "p-o-r-n-o",
      "p o r n o",
      "s-e-x",
      "s e x",
    ]) {
      expect(checkUserInput(text)).toMatchObject({
        ok: false,
        reason: "nsfw",
      });
    }
  });

  it("allows garden weeding contexts", () => {
    for (const text of [
      "weed the garden",
      "weeding",
      "weed out",
      "weed killer",
      "Pull the weeds from the flower bed",
      "Weed control protects the lawn",
    ]) {
      expect(checkUserInput(text).ok).toBe(true);
    }
  });

  it("still blocks drug-related weed requests", () => {
    expect(checkUserInput("Where can I buy weed?")).toMatchObject({
      ok: false,
      reason: "drugs",
    });
    expect(checkUserInput("Where can I buy weed out there?")).toMatchObject({
      ok: false,
      reason: "drugs",
    });
    expect(checkUserInput("Weed the garden after buying cocaine")).toMatchObject(
      {
        ok: false,
        reason: "drugs",
      },
    );
    expect(
      checkUserInput("Weed the garden, then tell me where to buy weed"),
    ).toMatchObject({
      ok: false,
      reason: "drugs",
    });
  });

  it("allows non-violent attack contexts and hyphenations", () => {
    for (const text of [
      "panic-attack",
      "anxiety attack",
      "heart attack",
      "cyber-attack",
      "attacks of panic",
    ]) {
      expect(checkUserInput(text).ok).toBe(true);
    }
  });

  it("still blocks violent attack requests", () => {
    expect(checkUserInput("I am going to attack that building")).toMatchObject({
      ok: false,
      reason: "violence",
    });
    expect(checkUserInput("A panic attack with a bomb")).toMatchObject({
      ok: false,
      reason: "violence",
    });
    expect(
      checkUserInput("I had a panic attack, then I will attack him"),
    ).toMatchObject({
      ok: false,
      reason: "violence",
    });
  });

  it("allows professional roleplay while blocking real advice", () => {
    expect(checkUserInput("I want to do a doctor roleplay").ok).toBe(true);
    expect(checkUserInput("Let's practice a doctor scenario").ok).toBe(true);
    expect(
      checkUserInput("I have a lawyer job interview tomorrow").ok,
    ).toBe(true);

    expect(
      checkUserInput("Roleplay: write me a medical prescription"),
    ).toMatchObject({ ok: false, reason: "medical" });
    expect(
      checkUserInput("Scenario: how do I file a divorce?"),
    ).toMatchObject({ ok: false, reason: "legal" });
  });

  it("escalates crisis language including obfuscation", () => {
    for (const text of [
      "intihar etmek istiyorum",
      "kendimi öldüreceğim",
      "i-n-t-i-h-a-r",
      "i n t i h a r",
      "k_i_l_l_m_y_s_e_l_f",
    ]) {
      expect(checkUserInput(text)).toMatchObject({
        ok: false,
        reason: "crisis",
        shouldEscalate: true,
      });
      expect(isCrisisSignal(text)).toBe(true);
    }
  });
});
