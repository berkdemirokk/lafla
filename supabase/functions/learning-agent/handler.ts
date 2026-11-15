const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

type Candidate = { lessonId: string; skillId: string };
type LessonState = { completed_at: string | null; next_review_at: string | null };
type Skill = { skill_id: string; mastery_score: number; lessons_completed: number };

export interface LearningAgentDependencies {
  authenticate: () => Promise<string | null>;
  loadProgress: (userId: string) => Promise<{ lessons: LessonState[]; skills: Skill[] }>;
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
}

function candidates(value: unknown): Candidate[] | null {
  if (!Array.isArray(value) || value.length > 12) return null;
  const valid = value.every((item) => item && typeof item === "object" &&
    typeof (item as Candidate).lessonId === "string" &&
    typeof (item as Candidate).skillId === "string" &&
    (item as Candidate).lessonId.length <= 120 && (item as Candidate).skillId.length <= 120);
  return valid ? value as Candidate[] : null;
}

/** Cloud decision service. It never receives free-form learner messages. */
export async function handleLearningAgent(
  request: Request,
  dependencies: LearningAgentDependencies,
): Promise<Response> {
  if (request.method === "OPTIONS") return new Response("ok", { headers: CORS_HEADERS });
  if (request.method !== "POST") return json({ error: "method_not_allowed" }, 405);
  const userId = await dependencies.authenticate().catch(() => null);
  if (!userId) return json({ error: "unauthorized" }, 401);
  let body: { candidates?: unknown };
  try { body = await request.json(); } catch { return json({ error: "invalid_json" }, 400); }
  const plan = candidates(body.candidates);
  if (!plan) return json({ error: "invalid_candidates" }, 400);

  let progress: { lessons: LessonState[]; skills: Skill[] };
  try {
    progress = await dependencies.loadProgress(userId);
  } catch {
    // Returning a successful empty recommendation prevents the client from
    // switching to its local agent fallback after a database outage.
    return json({ error: "progress_unavailable" }, 503);
  }
  const { lessons, skills } = progress;
  const now = new Date().toISOString();
  const dueReviews = lessons.filter((lesson) => Boolean(lesson.completed_at) &&
    Boolean(lesson.next_review_at) && lesson.next_review_at! <= now).length;
  if (dueReviews > 0) return json({ action: "review", reason: "due-review", dueReviews });

  const weakSkill = [...skills]
    .filter((skill) => skill.lessons_completed > 0 && Number.isFinite(skill.mastery_score))
    .sort((a, b) => a.mastery_score - b.mastery_score)[0]?.skill_id;
  const scene = (weakSkill ? plan.find((item) => item.skillId === weakSkill) : null) ?? plan[0] ?? null;
  if (!scene) return json({ action: "review", reason: "no-candidate", dueReviews: 0 });
  return json({
    action: "scenario",
    lessonId: scene.lessonId,
    reason: weakSkill && scene.skillId === weakSkill ? "weak-skill" : "daily-plan",
    dueReviews: 0,
  });
}
