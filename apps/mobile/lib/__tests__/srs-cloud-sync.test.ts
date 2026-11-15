import AsyncStorage from "@react-native-async-storage/async-storage";
import { completeLesson } from "../srs";
import { supabase } from "../supabase";
import { captureException } from "../sentry";

jest.mock("../supabase", () => ({
  supabase: {
    auth: { getUser: jest.fn() },
    from: jest.fn(),
  },
}));
jest.mock("../sentry", () => ({ captureException: jest.fn() }));

describe("lesson cloud sync", () => {
  const upsert = jest.fn();
  const getUser = supabase.auth.getUser as jest.Mock;
  const from = supabase.from as jest.Mock;

  beforeEach(async () => {
    await AsyncStorage.clear();
    jest.clearAllMocks();
    getUser.mockResolvedValue({ data: { user: { id: "user-1" } } });
    upsert.mockResolvedValue({ error: null });
    from.mockReturnValue({ upsert });
  });

  it("syncs accumulated local mastery rather than resetting it for each lesson", async () => {
    const args = { lesson_id: "lesson-1", skill_id: "skill-1", accuracy: 1, exercises_completed: 4 };
    await completeLesson(args);
    await completeLesson({ ...args, lesson_id: "lesson-2" });
    const masteryWrites = upsert.mock.calls.map(([row]) => row).filter((row) => row.skill_id);
    expect(masteryWrites).toHaveLength(2);
    expect(masteryWrites[1]).toMatchObject({ user_id: "user-1", lessons_completed: 2 });
    expect(masteryWrites[1].mastery_score).toBeCloseTo(0.575);
  });

  it("reports Supabase response errors without failing the local lesson", async () => {
    const error = new Error("sync rejected");
    upsert.mockResolvedValue({ error });
    await expect(completeLesson({ lesson_id: "lesson-1", skill_id: "skill-1", accuracy: 1, exercises_completed: 4 })).resolves.toHaveProperty("xp_earned");
    expect(captureException).toHaveBeenCalledWith(error, { source: "srs.completeLesson.skill_mastery" });
    expect(captureException).toHaveBeenCalledWith(error, { source: "srs.completeLesson.lesson_state" });
  });
});
