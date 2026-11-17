import AsyncStorage from "@react-native-async-storage/async-storage";

jest.mock("../sentry", () => ({ captureException: jest.fn() }));
jest.mock("../supabase", () => ({ isSupabaseConfigured: false, supabase: {} }));

import {
  enqueueCloudProgress,
  flushCloudProgressOutbox,
  getCloudProgressOutboxSize,
} from "../cloud-progress-outbox";

const entry = (completedAt: string) => ({
  userId: "user-1",
  lessonState: { lesson_id: "lesson-1", completed_at: completedAt },
  skillMastery: { skill_id: "skill-1", mastery_score: 0.8 },
});

describe("cloud progress outbox", () => {
  beforeEach(async () => {
    jest.clearAllMocks();
    await AsyncStorage.clear();
  });

  it("deduplicates newer snapshots for the same user and lesson", async () => {
    await enqueueCloudProgress(entry("2026-01-01"));
    await enqueueCloudProgress(entry("2026-01-02"));
    let receivedCompletedAt: unknown;
    const writer = jest.fn(async (queued: { lessonState: Record<string, unknown> }) => {
      receivedCompletedAt = queued.lessonState.completed_at;
    });

    await expect(flushCloudProgressOutbox(writer)).resolves.toEqual({ sent: 1, pending: 0 });
    expect(writer).toHaveBeenCalledTimes(1);
    expect(receivedCompletedAt).toBe("2026-01-02");
  });

  it("keeps failed writes and removes them only after a successful retry", async () => {
    await enqueueCloudProgress(entry("2026-01-01"));
    await expect(
      flushCloudProgressOutbox(async () => { throw new Error("offline"); }),
    ).resolves.toEqual({ sent: 0, pending: 1 });
    expect(await getCloudProgressOutboxSize()).toBe(1);

    await expect(flushCloudProgressOutbox(async () => undefined)).resolves.toEqual({
      sent: 1,
      pending: 0,
    });
    expect(await getCloudProgressOutboxSize()).toBe(0);
  });
});
