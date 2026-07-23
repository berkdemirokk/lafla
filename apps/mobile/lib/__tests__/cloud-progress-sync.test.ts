jest.mock("../supabase", () => ({ supabase: {} }));
jest.mock("../sentry", () => ({ captureException: jest.fn() }));

import {
  mergeLessonProgress,
  mergeSkillProgress,
} from "../cloud-progress-sync";

const localLesson = {
  lesson_id: "lesson.1",
  completed_at: "2026-01-01T00:00:00.000Z",
  next_review_at: "2026-01-02T00:00:00.000Z",
  ease_factor: 2.5,
  interval_days: 1,
  consecutive_correct: 1,
  total_attempts: 2,
  total_correct: 2,
  last_attempt_at: "2026-01-01T00:00:00.000Z",
};

describe("cloud progress merge", () => {
  it("keeps the newest lesson state in either direction", () => {
    const cloud = {
      ...localLesson,
      user_id: "user-1",
      total_attempts: 4,
      last_attempt_at: "2026-01-03T00:00:00.000Z",
    };
    expect(mergeLessonProgress({ [localLesson.lesson_id]: localLesson }, [cloud]))
      .toMatchObject({ "lesson.1": { total_attempts: 4 } });

    const olderCloud = {
      ...cloud,
      total_attempts: 1,
      last_attempt_at: "2025-12-31T00:00:00.000Z",
    };
    expect(mergeLessonProgress({ [localLesson.lesson_id]: localLesson }, [olderCloud]))
      .toMatchObject({ "lesson.1": { total_attempts: 2 } });
  });

  it("prefers cumulative skill evidence over a stale last-write row", () => {
    const merged = mergeSkillProgress(
      {
        "skill.1": {
          score: 0.64,
          lessons_completed: 5,
          last_practiced_at: "2026-01-02T00:00:00.000Z",
        },
      },
      [{
        user_id: "user-1",
        skill_id: "skill.1",
        mastery_score: 0.9,
        lessons_completed: 1,
        last_practiced_at: "2026-01-03T00:00:00.000Z",
      }],
    );
    expect(merged["skill.1"]).toMatchObject({
      score: 0.64,
      lessons_completed: 5,
    });
  });
});
