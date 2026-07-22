import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  estimateSpokenSeconds,
  getWeeklyLearningEvidence,
  recordPronunciationEvidence,
  recordSceneEvidence,
} from "../learning-evidence";

describe("learning evidence", () => {
  beforeEach(async () => {
    await AsyncStorage.clear();
  });

  it("estimates speaking time from learner output", () => {
    expect(estimateSpokenSeconds(["one two three", "four five"])).toBe(3);
    expect(estimateSpokenSeconds([])).toBe(0);
  });

  it("compares current and previous seven-day windows", async () => {
    await recordSceneEvidence({
      sceneId: "old",
      score: 60,
      userResponses: ["I need some help please"],
      assistedTurns: 1,
      mistakeCount: 3,
      at: new Date("2026-07-10T12:00:00.000Z"),
    });
    await recordSceneEvidence({
      sceneId: "new",
      score: 80,
      userResponses: ["Could you help me with this request please"],
      assistedTurns: 0,
      mistakeCount: 1,
      at: new Date("2026-07-18T12:00:00.000Z"),
    });
    await recordPronunciationEvidence({
      score: 90,
      durationSeconds: 30,
      at: new Date("2026-07-19T12:00:00.000Z"),
    });

    const summary = await getWeeklyLearningEvidence(
      new Date("2026-07-22T12:00:00.000Z"),
    );
    expect(summary.completedScenes).toBe(1);
    expect(summary.unsupportedScenes).toBe(1);
    expect(summary.pronunciationAttempts).toBe(1);
    expect(summary.averageScore).toBe(85);
    expect(summary.scoreChange).toBe(25);
    expect(summary.mistakeChange).toBe(-2);
  });

  it("deduplicates one completion callback but keeps a real replay", async () => {
    const shared = {
      sceneId: "daily-cafe",
      score: 70,
      at: new Date("2026-07-20T12:00:00.000Z"),
    };
    await recordSceneEvidence({ ...shared, completionId: "attempt-1" });
    await recordSceneEvidence({ ...shared, completionId: "attempt-1" });
    await recordSceneEvidence({ ...shared, completionId: "attempt-2" });

    const summary = await getWeeklyLearningEvidence(
      new Date("2026-07-22T12:00:00.000Z"),
    );
    expect(summary.completedScenes).toBe(2);
  });
});
