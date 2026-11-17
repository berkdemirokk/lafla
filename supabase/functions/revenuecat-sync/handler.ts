export interface SubscriptionState {
  isPremium: boolean;
  expiresAt: string | null;
}

export interface SyncDependencies {
  getEnv(name: string): string | undefined;
  now(): number;
  getUserId(authHeader: string): Promise<string | null>;
  fetchSubscriberState(
    userId: string,
    apiKey: string,
    entitlementId: string,
    nowMs: number,
  ): Promise<SubscriptionState>;
  processEvent(input: {
    eventId: string;
    userId: string;
    isPremium: boolean;
    expiresAt: string | null;
    eventTimestamp: string;
  }): Promise<boolean>;
}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
}

export async function handleRevenueCatSync(
  req: Request,
  deps: SyncDependencies,
): Promise<Response> {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: CORS_HEADERS });
  }
  if (req.method !== "POST") {
    return jsonResponse({ error: "method_not_allowed" }, 405);
  }

  const authHeader = req.headers.get("Authorization") ?? "";
  if (!authHeader.startsWith("Bearer ")) {
    return jsonResponse({ error: "unauthorized" }, 401);
  }

  const userId = await deps.getUserId(authHeader);
  if (!userId) {
    return jsonResponse({ error: "unauthorized" }, 401);
  }

  const apiKey = deps.getEnv("RC_API_KEY");
  if (!apiKey) {
    return jsonResponse({ error: "server_misconfigured" }, 500);
  }

  try {
    const nowMs = deps.now();
    const entitlementId = deps.getEnv("RC_ENTITLEMENT_ID") || "Lafla Pro";
    const state = await deps.fetchSubscriberState(
      userId,
      apiKey,
      entitlementId,
      nowMs,
    );
    const eventTimestamp = new Date(nowMs).toISOString();
    const processed = await deps.processEvent({
      eventId: `sync:${userId}:${nowMs}`,
      userId,
      isPremium: state.isPremium,
      expiresAt: state.expiresAt,
      eventTimestamp,
    });

    return jsonResponse({ ok: true, processed, ...state });
  } catch (error) {
    console.error("[RevenueCat Sync]", error);
    return jsonResponse({ error: "subscription_sync_failed" }, 502);
  }
}
