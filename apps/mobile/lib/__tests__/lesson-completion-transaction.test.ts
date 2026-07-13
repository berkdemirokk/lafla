import AsyncStorage from "@react-native-async-storage/async-storage";

const baseAsyncStorageSetItem = jest
  .mocked(AsyncStorage.setItem)
  .getMockImplementation()!;

const mockGetSession = jest.fn(
  async () => ({ data: { session: null as { user: { id: string } } | null } }),
);
const mockEnqueueCloudProgress = jest.fn();

jest.mock("../supabase", () => ({
  supabase: { auth: { getSession: () => mockGetSession() } },
}));
jest.mock("../cloud-progress-outbox", () => ({
  enqueueCloudProgress: (...args: unknown[]) => mockEnqueueCloudProgress(...args),
  flushCloudProgressOutbox: jest.fn().mockResolvedValue({ sent: 0, pending: 0 }),
}));
jest.mock("../sentry", () => ({ captureException: jest.fn() }));

import { getLessonState, getLocalProfile } from "../local-progress";
import { completeLesson } from "../srs";

const input = {
  lesson_id: "lesson.transaction.1",
  skill_id: "transaction-skill",
  accuracy: 0.8,
  exercises_completed: 1,
  completion_id: "completion-1",
};

describe("lesson completion transaction", () => {
  beforeEach(async () => {
    jest.restoreAllMocks();
    jest.mocked(AsyncStorage.setItem).mockImplementation(baseAsyncStorageSetItem);
    await AsyncStorage.clear();
    mockGetSession.mockResolvedValue({ data: { session: null } });
    mockEnqueueCloudProgress.mockReset();
    mockEnqueueCloudProgress.mockResolvedValue(undefined);
  });

  it("applies the same completion id only once", async () => {
    const first = await completeLesson(input);
    const second = await completeLesson(input);
    const profile = await getLocalProfile();
    const lesson = await getLessonState(input.lesson_id);

    expect(second).toEqual(first);
    expect(profile.total_xp).toBe(first.xp_earned);
    expect(lesson?.total_attempts).toBe(1);
  });

  it("restores the pre-completion snapshot when a core write fails", async () => {
    jest.spyOn(AsyncStorage, "setItem").mockImplementation((key, value) => {
      if (key === "lafla.skills") return Promise.reject(new Error("disk full"));
      return baseAsyncStorageSetItem(key, value);
    });

    await expect(completeLesson({ ...input, completion_id: "completion-fail" })).rejects.toThrow(
      "disk full",
    );
    expect(await getLessonState(input.lesson_id)).toBeNull();
    expect((await getLocalProfile()).total_xp).toBe(0);
  });

  it("retries a failed cloud enqueue without applying local progress twice", async () => {
    mockGetSession.mockResolvedValue({
      data: { session: { user: { id: "user-1" } } },
    });
    mockEnqueueCloudProgress
      .mockRejectedValueOnce(new Error("outbox unavailable"))
      .mockResolvedValueOnce(undefined);

    await expect(completeLesson(input)).rejects.toThrow("outbox unavailable");
    const profileAfterFailure = await getLocalProfile();
    await expect(completeLesson(input)).resolves.toMatchObject({
      xp_earned: profileAfterFailure.total_xp,
    });

    expect((await getLocalProfile()).total_xp).toBe(profileAfterFailure.total_xp);
    expect((await getLessonState(input.lesson_id))?.total_attempts).toBe(1);
    expect(mockEnqueueCloudProgress).toHaveBeenCalledTimes(2);
  });
});
