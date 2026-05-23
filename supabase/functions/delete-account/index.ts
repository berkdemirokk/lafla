// Lafla — Account deletion edge function (App Store 5.1.1(v) compliance).
//
// Performs IRREVERSIBLE deletion of:
//   1. All user rows in profiles, lesson_state, skill_mastery, attempts,
//      daily_activity (most cascade via FK; we delete explicitly to be safe).
//   2. All storage objects under user-backups/users/{uid}/ .
//   3. The auth.users row itself (via Admin API) — this is what makes the
//      action permanent and frees the email for re-signup.
//
// Auth: caller MUST supply a valid Bearer access token. We verify the JWT
// against the anon client, then perform deletes with the service role key.
//
// Deploy:
//   supabase functions deploy delete-account --project-ref <ref>
//   supabase secrets set SUPABASE_SERVICE_ROLE_KEY=... (set in dashboard)

import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: CORS_HEADERS });
  }
  if (req.method !== "POST") {
    return new Response("Method not allowed", {
      status: 405,
      headers: CORS_HEADERS,
    });
  }

  const authHeader = req.headers.get("Authorization") ?? "";
  if (!authHeader.startsWith("Bearer ")) {
    return new Response("Unauthorized", {
      status: 401,
      headers: CORS_HEADERS,
    });
  }

  const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
  const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY");
  const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !SUPABASE_SERVICE_ROLE_KEY) {
    return new Response(
      JSON.stringify({ ok: false, error: "server_misconfigured" }),
      {
        status: 500,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      },
    );
  }

  // Resolve the user from the JWT using the anon client.
  const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: { headers: { Authorization: authHeader } },
  });
  const { data: { user }, error: userErr } = await supabaseClient.auth.getUser();
  if (userErr || !user) {
    return new Response(
      JSON.stringify({ ok: false, error: "unauthorized" }),
      {
        status: 401,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      },
    );
  }

  // Service role client — bypasses RLS for deletes.
  const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const errors: string[] = [];

  // ---- 1. Storage: list & remove all objects under users/{uid}/ ----
  try {
    const prefix = `users/${user.id}`;
    const { data: files, error: listErr } = await supabaseAdmin.storage
      .from("user-backups")
      .list(prefix, { limit: 1000 });
    if (listErr) {
      errors.push(`storage_list: ${listErr.message}`);
    } else if (files && files.length > 0) {
      // Also walk into common subfolders (backups/).
      const paths: string[] = [];
      for (const f of files) {
        paths.push(`${prefix}/${f.name}`);
      }
      // Try to list backups/ subfolder too.
      const { data: nested } = await supabaseAdmin.storage
        .from("user-backups")
        .list(`${prefix}/backups`, { limit: 1000 });
      if (nested) {
        for (const f of nested) {
          paths.push(`${prefix}/backups/${f.name}`);
        }
      }
      if (paths.length > 0) {
        const { error: rmErr } = await supabaseAdmin.storage
          .from("user-backups")
          .remove(paths);
        if (rmErr) errors.push(`storage_remove: ${rmErr.message}`);
      }
    }
  } catch (e) {
    errors.push(`storage_exception: ${(e as Error).message}`);
  }

  // ---- 2. Table data ----
  // Order matters: child rows first; profiles last (cascades will catch
  // anything we miss, but explicit deletes are safer and observable).
  const tables = [
    "attempts",
    "lesson_state",
    "skill_mastery",
    "daily_activity",
  ] as const;
  for (const t of tables) {
    const { error } = await supabaseAdmin.from(t).delete().eq("user_id", user.id);
    if (error) errors.push(`${t}: ${error.message}`);
  }
  // profiles uses `id` not `user_id`.
  {
    const { error } = await supabaseAdmin
      .from("profiles")
      .delete()
      .eq("id", user.id);
    if (error) errors.push(`profiles: ${error.message}`);
  }

  // ---- 3. Apple Sign-In token revocation (Guideline 5.1.1(v) — TODO v1.0.1) ----
  //
  // 2026-05-23 — APPLE REJECTION RISK: Guideline 5.1.1(v) "If your app offers
  // Sign in with Apple, you'll need to use the Sign in with Apple REST API to
  // revoke user tokens when deleting an account."
  //
  // ŞU AN EKSİK. v1.0.1'de eklenmeli — gerekli kaynaklar:
  //   1. Apple Developer Console → Identifiers → Services IDs → yeni Service ID
  //   2. Apple Developer Console → Keys → Sign in with Apple key (.p8)
  //   3. Supabase secrets:
  //      - APPLE_SIGNIN_KEY_ID
  //      - APPLE_SIGNIN_SERVICE_ID (com.lafla.signinwithapple.service)
  //      - APPLE_SIGNIN_PRIVATE_KEY (.p8 contents)
  //   4. apple_credentials table: user_id → encrypted refresh_token (set on sign-in)
  //   5. Burada: ES256 JWT yarat → POST appleid.apple.com/auth/revoke
  //
  // MITIGATION (submission notes'a yaz): "Apple Sign-In token revocation
  // will be implemented in v1.0.1. Current users may revoke manually via
  // iOS Settings → Apple ID → Password & Security → Apps Using Apple ID → Lafla."
  //
  // Bu açıklama %100 kabul edilmiyor — gerçek implementation güvenli yol.
  // Detay: docs/APPLE_REJECTION_RISK_AUDIT.md Section R1.

  // ---- 4. Auth user (irreversible) ----
  const { error: delErr } = await supabaseAdmin.auth.admin.deleteUser(user.id);
  if (delErr) {
    errors.push(`auth_delete: ${delErr.message}`);
    return new Response(
      JSON.stringify({ ok: false, error: "auth_delete_failed", errors }),
      {
        status: 500,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      },
    );
  }

  return new Response(
    JSON.stringify({ ok: true, partial_errors: errors }),
    {
      status: 200,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    },
  );
});
