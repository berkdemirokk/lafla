import { SCENE_COUNT, SCENE_COUNT_DISPLAY } from "../scene-counts";
import { allScenarios } from "../scenario";

describe("public scene count", () => {
  it("matches the playable scenario registry", () => {
    expect(SCENE_COUNT).toBe(allScenarios().length);
    expect(SCENE_COUNT_DISPLAY).toBe(String(allScenarios().length));
  });
});
