import { scorePlacementProduction } from "../placement-production";

describe("placement production scoring", () => {
  it("gives short beginner answers a conservative score", () => {
    expect(scorePlacementProduction("My name is Ada.")).toBeLessThan(40);
  });

  it("rewards sustained original production and discourse markers", () => {
    const basic = scorePlacementProduction("I work from home and I like it very much every day.");
    const advanced = scorePlacementProduction(
      "Although remote work is convenient, it can weaken informal collaboration. On the other hand, teams can address that problem if they design deliberate opportunities for discussion.",
    );
    expect(basic).toBeGreaterThanOrEqual(50);
    expect(advanced).toBeGreaterThanOrEqual(85);
    expect(advanced).toBeGreaterThan(basic);
  });

  it("does not reward repeated filler as lexical variety", () => {
    const repeated = "good good good good good good good good good good good good";
    expect(scorePlacementProduction(repeated)).toBeLessThan(60);
  });
});
