import { getOrCreateDailyPlan } from "./daily-plan";
import { isSupabaseConfigured, supabase } from "./supabase";
import type { LearningAgentRecommendation } from "./learning-agent";

type CloudResponse = {
  action?: unknown;
  lessonId?: unknown;
  reason?: unknown;
  dueReviews?: unknown;
};

const CLOUD_AGENT_TIMEOUT_MS = 5_000;

async function withTimeout<T>(work: Promise<T>, timeoutMs: number): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | null = null;
  try {
    return await Promise.race([
      work,
      new Promise<T>((_, reject) => {
        timer = setTimeout(() => reject(new Error("cloud_agent_timeout")), timeoutMs);
      }),
    ]);
  } finally {
    if (timer) clearTimeout(timer);
  }
}

/** Returns null for anonymous/offline users so the local agent can take over. */
export async function getCloudLearningAgentRecommendation(): Promise<LearningAgentRecommendation | null> {
  if (!isSupabaseConfigured) return null;
  const { data: session } = await supabase.auth.getSession();
  if (!session.session?.user) return null;
  const plan = await getOrCreateDailyPlan();
  const { data, error } = await withTimeout(
    supabase.functions.invoke("learning-agent", {
      body: { candidates: plan.slice(0, 12).map((scene) => ({ lessonId: scene.lessonId, skillId: scene.skillId })) },
    }),
    CLOUD_AGENT_TIMEOUT_MS,
  );
  if (error || !data) return null;
  const result = data as CloudResponse;
  if (result.action === "review") {
    const due = typeof result.dueReviews === "number" ? Math.max(0, Math.round(result.dueReviews)) : 0;
    return { action: { kind: "review" }, reason: "due-review", scene: null, confidence: "high", messageTr: due > 0 ? `${due} tekrar seni bekliyor — önce onları tazele.` : "Tekrarlarına göz atalım.", messageEn: due > 0 ? `${due} reviews are due — refresh them first.` : "Let's look at your reviews." };
  }
  if (result.action !== "scenario" || typeof result.lessonId !== "string") return null;
  const scene = plan.find((item) => item.lessonId === result.lessonId);
  if (!scene) return null; // Never navigate to a server-supplied unknown lesson.
  const reason = result.reason === "weak-skill" ? "weak-skill" : "daily-plan";
  return {
    action: { kind: "scenario", lessonId: scene.lessonId }, reason, scene,
    confidence: reason === "weak-skill" ? "high" : "medium",
    messageTr: reason === "weak-skill" ? "Bugünün sahnesi en çok güçlenmeye ihtiyaç duyan becerine yakın." : "Bugünün planından en iyi sonraki adımı seçtim.",
    messageEn: reason === "weak-skill" ? "Today's scene targets the skill that needs the most work." : "I picked the best next step from today's plan.",
  };
}
