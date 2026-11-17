import { SAMPLE_SCENES } from "../../data/scenes";
import { getScenario } from "../scenario";
import { getSceneDisplayMinutes } from "../scene-duration";

describe("scene display duration", () => {
  it("uses calibrated scenario minutes instead of stale scene metadata", () => {
    const scene = SAMPLE_SCENES.find((s) => s.lessonId === "order.cafe.1.1");
    expect(scene).toBeTruthy();
    expect(scene?.durationMin).toBeGreaterThan(4);

    expect(getSceneDisplayMinutes(scene)).toBe(
      getScenario("order.cafe.1.1")?.estimated_minutes,
    );
    expect(getSceneDisplayMinutes(scene)).toBeLessThanOrEqual(4);
  });

  it("clamps fallback scene metadata when no scenario exists", () => {
    expect(
      getSceneDisplayMinutes({ lessonId: "missing.lesson", durationMin: 10 }),
    ).toBe(4);
    expect(
      getSceneDisplayMinutes({ lessonId: "missing.lesson", durationMin: 1 }),
    ).toBe(2);
    expect(
      getSceneDisplayMinutes({ lessonId: "missing.lesson", durationMin: NaN }),
    ).toBe(3);
  });
});
