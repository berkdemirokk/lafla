import { handleLearningAgent } from "./handler.ts";

const candidates = [{ lessonId: "daily.1", skillId: "daily.smalltalk" }];

Deno.test("learning agent falls back to a 503 when progress is unavailable", async () => {
  const response = await handleLearningAgent(
    new Request("https://example.test/learning-agent", {
      method: "POST",
      body: JSON.stringify({ candidates }),
    }),
    {
      authenticate: async () => "user-1",
      loadProgress: async () => { throw new Error("database unavailable"); },
    },
  );
  const body = await response.json();
  if (response.status !== 503 || body.error !== "progress_unavailable") {
    throw new Error("expected progress-unavailable response");
  }
});

Deno.test("learning agent prioritizes a due review", async () => {
  const response = await handleLearningAgent(
    new Request("https://example.test/learning-agent", {
      method: "POST",
      body: JSON.stringify({ candidates }),
    }),
    {
      authenticate: async () => "user-1",
      loadProgress: async () => ({
        lessons: [{ completed_at: "2026-01-01T00:00:00Z", next_review_at: "2026-01-02T00:00:00Z" }],
        skills: [],
      }),
    },
  );
  const body = await response.json();
  if (response.status !== 200 || body.action !== "review" || body.reason !== "due-review") {
    throw new Error("expected due-review recommendation");
  }
});
