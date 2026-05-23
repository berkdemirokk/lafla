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
import {
  generateAppleClientSecret,
  loadAppleConfig,
  formUrlEncode,
} from "../_shared/apple-jwt.ts";

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

  // ---- 3. Apple Sign-In token revocation (Guideline 5.1.1(v)) ----
  //
  // Apple kuralı: app Sign in with Apple sunuyorsa, account deletion'da
  // Apple'ın refresh_token'ını da REVOKE etmelidir. Aksi halde Apple
  // "user deleted account but Apple-managed sign-in still works" durumunu
  // 2024'ten beri reject ediyor.
  //
  // AKIŞ:
  //   a. apple_credentials tablosunda user için refresh_token var mı bak
  //   b. Apple Sign-In env'leri set mi (Service ID, Key ID, .p8) bak
  //   c. İkisi de OK ise: ES256 JWT yarat → POST appleid.apple.com/auth/revoke
  //   d. Sonuçtan bağımsız (Apple 200 dönmese bile) apple_credentials sil
  //
  // Best-effort: revoke fail olursa errors[]'a yansır AMA account deletion'ı
  // bloke ETMEZ. Apple'ın endpoint'i down olduğu için kullanıcı silinemese
  // 5.1.1(v) ihlali daha kötü olur ("user can't delete"). Trade-off bilinçli.
  //
  // ENV: docs/APPLE_SIGNIN_SETUP.md
  const appleCfg = loadAppleConfig();
  try {
    const { data: cred } = await supabaseAdmin
      .from("apple_credentials")
      .select("refresh_token")
      .eq("user_id", user.id)
      .maybeSingle();

    if (cred?.refresh_token && appleCfg) {
      const clientSecret = await generateAppleClientSecret(appleCfg);
      const revokeRes = await fetch("https://appleid.apple.com/auth/revoke", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formUrlEncode({
          client_id: appleCfg.serviceId,
          client_secret: clientSecret,
          token: cred.refresh_token,
          token_type_hint: "refresh_token",
        }),
      });
      if (!revokeRes.ok) {
        const txt = await revokeRes.text().catch(() => "<no body>");
        errors.push(`apple_revoke ${revokeRes.status}: ${txt.slice(0, 200)}`);
      }
    } else if (cred?.refresh_token && !appleCfg) {
      // Token mevcut ama config eksik — submission öncesi setup yapılmadıysa
      // bu durum. Yine de auth.users'ı sil; Apple manuel revoke yolu açık
      // (Settings → Apple ID → ...).
      errors.push(
        "apple_revoke skipped: APPLE_SIGNIN_* env not configured (see docs/APPLE_SIGNIN_SETUP.md)",
      );
    }

    // Her durumda credential satırını sil (ON DELETE CASCADE de yapar ama
    // belirgin olalım).
    await supabaseAdmin
      .from("apple_credentials")
      .delete()
      .eq("user_id", user.id);
  } catch (e) {
    errors.push(`apple_revoke_exception: ${(e as Error).message}`);
  }

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
