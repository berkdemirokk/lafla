import AsyncStorage from "@react-native-async-storage/async-storage";

import { readHistory, recordSceneCompletion } from "../scene-history";

const entry = (lessonId: string, completionId = `completion-${lessonId}`) => ({
  completionId,
  lessonId,
  title: lessonId,
  mode: "daily" as const,
  score: 80,
});

describe("scene history persistence", () => {
  beforeEach(async () => {
    jest.useFakeTimers().setSystemTime(new Date("2026-07-22T12:00:00.000Z"));
    await AsyncStorage.clear();
  });

  afterEach(() => jest.useRealTimers());

  it("preserves concurrent completions", async () => {
    await Promise.all([
      recordSceneCompletion(entry("scene-a")),
      recordSceneCompletion(entry("scene-b")),
    ]);
    await expect(readHistory()).resolves.toHaveLength(2);
  });

  it("collapses duplicate native completion callbacks", async () => {
    await Promise.all([
      recordSceneCompletion(entry("scene-a")),
      recordSceneCompletion(entry("scene-a")),
    ]);
    await expect(readHistory()).resolves.toHaveLength(1);
  });

  it("keeps legitimate repeats of the same scene", async () => {
    await recordSceneCompletion(entry("scene-a", "attempt-1"));
    await recordSceneCompletion(entry("scene-a", "attempt-2"));
    await expect(readHistory()).resolves.toHaveLength(2);
  });
});
