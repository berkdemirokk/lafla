import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { handleLearningAgent } from "./handler.ts";

serve((request) => {
  const client = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? "",
    { global: { headers: { Authorization: request.headers.get("Authorization") ?? "" } } },
  );
  return handleLearningAgent(request, {
    authenticate: async () => {
      const { data, error } = await client.auth.getUser();
      return error ? null : data.user?.id ?? null;
    },
    loadProgress: async (userId) => {
      const [lessons, skills] = await Promise.all([
        client.from("lesson_state").select("completed_at,next_review_at").eq("user_id", userId),
        client.from("skill_mastery").select("skill_id,mastery_score,lessons_completed").eq("user_id", userId),
      ]);
      if (lessons.error) throw lessons.error;
      if (skills.error) throw skills.error;
      return { lessons: lessons.data ?? [], skills: skills.data ?? [] };
    },
  });
});
