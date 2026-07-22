import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { handlePronunciationAssess } from "./handler.ts";

serve((request) => {
  const authHeader = request.headers.get("Authorization") ?? "";
  const client = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? "",
    { global: { headers: { Authorization: authHeader } } },
  );

  return handlePronunciationAssess(request, {
    getEnv: (name) => Deno.env.get(name),
    fetch,
    authenticate: async () => {
      const { data, error } = await client.auth.getUser();
      return error ? null : data.user?.id ?? null;
    },
    consumeQuota: async () => {
      const { data, error } = await client.rpc("consume_pronunciation_quota");
      if (error) throw error;
      return data === true;
    },
  });
});
