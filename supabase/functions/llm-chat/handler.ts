const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

/**
 * Compatibility tombstone for older mobile builds.
 *
 * Runtime conversation moved fully on-device. Keeping a non-provider handler
 * at the old deployment name prevents an already-installed legacy client from
 * reaching a stale AI deployment while the App Store rollout converges.
 */
export function handleRetiredChat(request: Request): Response {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: CORS_HEADERS });
  }

  return new Response(
    JSON.stringify({
      error: "feature_retired",
      message: "Conversation now runs on-device. Please update Lafla.",
    }),
    {
      status: 410,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    },
  );
}
