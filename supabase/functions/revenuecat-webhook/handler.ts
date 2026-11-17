export const DEFAULT_ENTITLEMENT_ID = "Lafla Pro";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const SYNC_EVENT_TYPES = new Set([
  "INITIAL_PURCHASE",
  "NON_RENEWING_PURCHASE",
  "RENEWAL",
  "PRODUCT_CHANGE",
  "CANCELLATION",
  "EXPIRATION",
  "BILLING_ISSUE",
  "UNCANCELLATION",
  "TRANSFER",
  "SUBSCRIPTION_EXTENDED",
  "TEMPORARY_ENTITLEMENT_GRANT",
  "REFUND_REVERSED",
]);

export interface SubscriptionState {
  isPremium: boolean;
  expiresAt: string | null;
}

export interface ProcessRevenueCatEventInput {
  eventId: string;
  userId: string;
  isPremium: boolean;
  expiresAt: string | null;
  eventTimestamp: string;
}

export interface RevenueCatWebhookDependencies {
  getEnv: (name: string) => string | undefined;
  now: () => number;
  fetchSubscriberState: (
    userId: string,
    apiKey: string,
    entitlementId: string,
    nowMs: number,
  ) => Promise<SubscriptionState>;
  processEvent: (input: ProcessRevenueCatEventInput) => Promise<boolean>;
}

function jsonResponse(
  body: Record<string, unknown>,
  status = 200,
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
}

function isUuid(value: unknown): value is string {
  return typeof value === "string" && UUID_REGEX.test(value);
}

function uniqueUuids(values: unknown[]): string[] {
  return [...new Set(values.filter(isUuid))];
}

function getTargetUserIds(event: Record<string, unknown>): string[] {
  if (event.type === "TRANSFER") {
    const transferredFrom = Array.isArray(event.transferred_from)
      ? event.transferred_from
      : [];
    const transferredTo = Array.isArray(event.transferred_to)
      ? event.transferred_to
      : [];
    return uniqueUuids([...transferredFrom, ...transferredTo]);
  }

  const aliases = Array.isArray(event.aliases) ? event.aliases : [];
  return uniqueUuids([
    event.app_user_id,
    event.original_app_user_id,
    ...aliases,
  ]).slice(0, 1);
}

function parseDateMs(value: unknown): number | null {
  if (typeof value !== "string") return null;
  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? parsed : null;
}

export function readEntitlementState(
  payload: unknown,
  entitlementId: string,
  nowMs: number,
): SubscriptionState {
  if (!payload || typeof payload !== "object") {
    throw new Error("invalid_subscriber_response");
  }

  const subscriber = (payload as {
    subscriber?: {
      entitlements?: Record<
        string,
        {
          expires_date?: string | null;
          grace_period_expires_date?: string | null;
        }
      >;
    };
  }).subscriber;
  const entitlement = subscriber?.entitlements?.[entitlementId];
  if (!entitlement) {
    return { isPremium: false, expiresAt: null };
  }

  const expiresAtMs = parseDateMs(entitlement.expires_date);
  const graceExpiresAtMs = parseDateMs(
    entitlement.grace_period_expires_date,
  );
  if (
    typeof entitlement.expires_date === "string" &&
    expiresAtMs === null
  ) {
    throw new Error("invalid_entitlement_expiration");
  }
  if (
    typeof entitlement.grace_period_expires_date === "string" &&
    graceExpiresAtMs === null
  ) {
    throw new Error("invalid_entitlement_grace_expiration");
  }

  const expirationCandidates = [
    expiresAtMs,
    graceExpiresAtMs,
  ].filter((value): value is number => value !== null);

  if (expirationCandidates.length === 0) {
    return { isPremium: true, expiresAt: null };
  }

  const effectiveExpiresAtMs = Math.max(...expirationCandidates);
  return {
    isPremium: effectiveExpiresAtMs > nowMs,
    expiresAt: new Date(effectiveExpiresAtMs).toISOString(),
  };
}

export async function handleRevenueCatWebhook(
  req: Request,
  deps: RevenueCatWebhookDependencies,
): Promise<Response> {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: CORS_HEADERS });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "method_not_allowed" }, 405);
  }

  const webhookSecret = deps.getEnv("RC_WEBHOOK_SECRET");
  const revenueCatApiKey = deps.getEnv("RC_API_KEY");
  if (!webhookSecret || !revenueCatApiKey) {
    console.error("[RC Webhook] Required RevenueCat secrets are missing.");
    return jsonResponse({ error: "server_misconfigured" }, 500);
  }

  if (req.headers.get("Authorization") !== `Bearer ${webhookSecret}`) {
    return jsonResponse({ error: "unauthorized" }, 401);
  }

  try {
    const body = await req.json() as { event?: unknown };
    if (!body.event || typeof body.event !== "object") {
      return jsonResponse({ error: "missing_event_payload" }, 400);
    }

    const event = body.event as Record<string, unknown>;
    const eventId = event.id;
    const eventType = event.type;
    const eventEnvironment = event.environment;
    const eventTimestampMs = event.event_timestamp_ms;

    if (typeof eventId !== "string" || eventId.trim().length === 0) {
      return jsonResponse({ error: "invalid_event_id" }, 400);
    }
    if (
      typeof eventType !== "string" ||
      !SYNC_EVENT_TYPES.has(eventType)
    ) {
      return jsonResponse({ ok: true, message: "event_type_ignored" });
    }
    if (
      eventEnvironment !== "PRODUCTION" &&
      eventEnvironment !== "SANDBOX"
    ) {
      return jsonResponse({ error: "invalid_environment" }, 400);
    }

    const configuredEnvironments = deps.getEnv("RC_ENVIRONMENTS") ||
      deps.getEnv("RC_ENVIRONMENT") ||
      "PRODUCTION,SANDBOX";
    const allowedEnvironments = new Set(
      configuredEnvironments
        .split(",")
        .map((value) => value.trim().toUpperCase())
        .filter((value) => value === "PRODUCTION" || value === "SANDBOX"),
    );
    if (!allowedEnvironments.has(eventEnvironment)) {
      return jsonResponse({ ok: true, message: "environment_ignored" });
    }

    if (
      typeof eventTimestampMs !== "number" ||
      !Number.isFinite(eventTimestampMs) ||
      eventTimestampMs <= 0
    ) {
      return jsonResponse({ error: "invalid_event_timestamp" }, 400);
    }

    const userIds = getTargetUserIds(event);
    if (userIds.length === 0) {
      console.warn("[RC Webhook] Event has no Supabase UUID user ID.");
      return jsonResponse({ ok: true, message: "user_ignored" });
    }

    const entitlementId = deps.getEnv("RC_ENTITLEMENT_ID") ||
      DEFAULT_ENTITLEMENT_ID;
    const eventTimestamp = new Date(eventTimestampMs).toISOString();
    const nowMs = deps.now();
    const processed: boolean[] = [];

    for (const userId of userIds) {
      const state = await deps.fetchSubscriberState(
        userId,
        revenueCatApiKey,
        entitlementId,
        nowMs,
      );
      processed.push(
        await deps.processEvent({
          eventId: `${eventId}:${userId}`,
          userId,
          isPremium: state.isPremium,
          expiresAt: state.expiresAt,
          eventTimestamp,
        }),
      );
    }

    return jsonResponse({
      ok: true,
      processed: processed.some(Boolean),
      users: userIds.length,
    });
  } catch (error) {
    console.error("[RC Webhook] Processing failed:", error);
    return jsonResponse({ error: "processing_failed" }, 500);
  }
}
