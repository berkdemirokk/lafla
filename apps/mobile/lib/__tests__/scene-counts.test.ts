import { SCENE_COUNT, SCENE_COUNT_DISPLAY } from "../scene-counts";
import { allScenarios } from "../scenario";

describe("public scene count", () => {
  it("matches the playable scenario registry", () => {
    expect(SCENE_COUNT).toBe(allScenarios().length);
    expect(SCENE_COUNT_DISPLAY).toBe(String(allScenarios().length));
  });

  it("gives every playable scenario an explicit or calibrated CEFR level", () => {
    expect(allScenarios().filter((scenario) => !scenario.cefrLevel)).toEqual([]);
  });
});
