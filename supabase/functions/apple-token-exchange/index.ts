// Lafla — Apple Sign-In token exchange edge function.
//
// 2026-05-23 — Guideline 5.1.1(v) compliance step 1/2.
//
// AKIŞ:
//   1. Client (lib/auth-apple.ts) Apple Sign-In bittikten sonra POST
//      authorization_code + user Bearer token ile çağırır.
//   2. Bu function user JWT'yi doğrular (anon client).
//   3. Apple client_secret JWT yarat (ES256, .p8 key ile imzalı).
//   4. POST appleid.apple.com/auth/token → refresh_token al.
//   5. apple_credentials tablosuna UPSERT (service role).
//
// ENV (Supabase secrets):
//   - SUPABASE_URL
//   - SUPABASE_ANON_KEY
//   - SUPABASE_SERVICE_ROLE_KEY
//   - APPLE_TEAM_ID                (zaten var: 44B88YK392)
//   - APPLE_SIGNIN_SERVICE_ID      (yeni — Apple Developer Console'da yarat)
//   - APPLE_SIGNIN_KEY_ID          (yeni)
//   - APPLE_SIGNIN_PRIVATE_KEY     (.p8 PEM içeriği)
//
// Deploy:
//   supabase functions deploy apple-token-exchange --project-ref <ref>
//
// MITIGATION: Eğer Apple secrets yoksa function 503 döner ve "not_configured"
// reason'ı verir. Client bu durumu non-fatal handle eder — kullanıcı normal
// kullanıma devam. Sadece deletion sırasında revoke skipped.

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

  let body: { authorization_code?: string } = {};
  try {
    body = await req.json();
  } catch {
    return jsonResponse(400, { ok: false, error: "invalid_json" });
  }
  const authCode = body.authorization_code;
  if (!authCode || typeof authCode !== "string") {
    return jsonResponse(400, { ok: false, error: "missing_authorization_code" });
  }

  const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
  const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY");
  const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !SUPABASE_SERVICE_ROLE_KEY) {
    return jsonResponse(500, { ok: false, error: "server_misconfigured" });
  }

  // Apple config (Sign in with Apple key). Eğer yoksa "not_configured" döner —
  // client non-fatal handle eder.
  const appleCfg = loadAppleConfig();
  if (!appleCfg) {
    return jsonResponse(503, {
      ok: false,
      error: "apple_signin_not_configured",
      detail:
        "Apple Sign-In key/service/team env not set. Skip non-fatal — see docs/APPLE_SIGNIN_SETUP.md.",
    });
  }

  // Verify user JWT
  const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: { headers: { Authorization: authHeader } },
  });
  const { data: { user }, error: userErr } =
    await supabaseClient.auth.getUser();
  if (userErr || !user) {
    return jsonResponse(401, { ok: false, error: "unauthorized" });
  }

  // Generate Apple client_secret JWT (ES256, 1h validity)
  let clientSecret: string;
  try {
    clientSecret = await generateAppleClientSecret(appleCfg);
  } catch (e) {
    return jsonResponse(500, {
      ok: false,
      error: "client_secret_signing_failed",
      detail: (e as Error).message,
    });
  }

  // Exchange authorization_code → refresh_token
  let appleRes: Response;
  try {
    appleRes = await fetch("https://appleid.apple.com/auth/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formUrlEncode({
        client_id: appleCfg.serviceId,
        client_secret: clientSecret,
        code: authCode,
        grant_type: "authorization_code",
      }),
    });
  } catch (e) {
    return jsonResponse(502, {
      ok: false,
      error: "apple_network",
      detail: (e as Error).message,
    });
  }

  const appleText = await appleRes.text();
  if (!appleRes.ok) {
    return jsonResponse(502, {
      ok: false,
      error: "apple_token_exchange_failed",
      apple_status: appleRes.status,
      apple_body: appleText,
    });
  }

  let parsed: { refresh_token?: string };
  try {
    parsed = JSON.parse(appleText);
  } catch {
    return jsonResponse(502, {
      ok: false,
      error: "apple_response_not_json",
      apple_body: appleText,
    });
  }

  const refreshToken = parsed.refresh_token;
  if (!refreshToken || typeof refreshToken !== "string") {
    return jsonResponse(502, {
      ok: false,
      error: "apple_no_refresh_token",
      apple_body: appleText,
    });
  }

  // UPSERT into apple_credentials (service role)
  const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  const { error: upErr } = await supabaseAdmin
    .from("apple_credentials")
    .upsert({ user_id: user.id, refresh_token: refreshToken }, {
      onConflict: "user_id",
    });
  if (upErr) {
    return jsonResponse(500, {
      ok: false,
      error: "db_upsert_failed",
      detail: upErr.message,
    });
  }

  return jsonResponse(200, { ok: true });
});

function jsonResponse(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
}
