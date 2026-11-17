import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import {
  handleRevenueCatWebhook,
  ProcessRevenueCatEventInput,
  readEntitlementState,
  SubscriptionState,
} from "./handler.ts";

const USER_1 = "11111111-1111-1111-1111-111111111111";
const USER_2 = "22222222-2222-2222-2222-222222222222";
const NOW = Date.parse("2026-06-08T12:00:00.000Z");

function request(event: Record<string, unknown>, secret = "secret"): Request {
  return new Request("https://example.test/revenuecat-webhook", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secret}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ event }),
  });
}

function dependencies(
  processed: ProcessRevenueCatEventInput[],
  state: SubscriptionState = {
    isPremium: true,
    expiresAt: "2026-07-08T12:00:00.000Z",
  },
  environmentConfig?: string,
) {
  return {
    getEnv: (name: string) =>
      ({
        RC_WEBHOOK_SECRET: "secret",
        RC_API_KEY: "rc-key",
        RC_ENVIRONMENTS: environmentConfig,
      })[name],
    now: () => NOW,
    fetchSubscriberState: async () => state,
    processEvent: async (input: ProcessRevenueCatEventInput) => {
      processed.push(input);
      return true;
    },
  };
}

Deno.test("RevenueCat webhook rejects an invalid authorization header", async () => {
  const response = await handleRevenueCatWebhook(
    request({}, "wrong"),
    dependencies([]),
  );
  assertEquals(response.status, 401);
});

Deno.test("RevenueCat webhook syncs the Lafla Pro subscriber state", async () => {
  const processed: ProcessRevenueCatEventInput[] = [];
  const response = await handleRevenueCatWebhook(
    request({
      id: "evt_purchase",
      type: "INITIAL_PURCHASE",
      environment: "PRODUCTION",
      event_timestamp_ms: NOW,
      app_user_id: USER_1,
      entitlement_ids: ["Lafla Pro"],
    }),
    dependencies(processed),
  );

  assertEquals(response.status, 200);
  assertEquals(processed, [{
    eventId: `evt_purchase:${USER_1}`,
    userId: USER_1,
    isPremium: true,
    expiresAt: "2026-07-08T12:00:00.000Z",
    eventTimestamp: "2026-06-08T12:00:00.000Z",
  }]);
});

Deno.test("RevenueCat TRANSFER syncs source and destination UUIDs", async () => {
  const processed: ProcessRevenueCatEventInput[] = [];
  const response = await handleRevenueCatWebhook(
    request({
      id: "evt_transfer",
      type: "TRANSFER",
      environment: "PRODUCTION",
      event_timestamp_ms: NOW,
      transferred_from: [USER_1],
      transferred_to: [USER_2],
    }),
    dependencies(processed),
  );

  assertEquals(response.status, 200);
  assertEquals(processed.map((entry) => entry.userId), [USER_1, USER_2]);
});

Deno.test("RevenueCat webhook accepts TestFlight sandbox events by default", async () => {
  const processed: ProcessRevenueCatEventInput[] = [];
  const response = await handleRevenueCatWebhook(
    request({
      id: "evt_sandbox",
      type: "RENEWAL",
      environment: "SANDBOX",
      event_timestamp_ms: NOW,
      app_user_id: USER_1,
    }),
    dependencies(processed),
  );

  assertEquals(response.status, 200);
  assertEquals(processed.length, 1);
});

Deno.test("RevenueCat webhook honors an explicit environment allowlist", async () => {
  const processed: ProcessRevenueCatEventInput[] = [];
  const response = await handleRevenueCatWebhook(
    request({
      id: "evt_ignored_sandbox",
      type: "RENEWAL",
      environment: "SANDBOX",
      event_timestamp_ms: NOW,
      app_user_id: USER_1,
    }),
    dependencies(
      processed,
      { isPremium: true, expiresAt: null },
      "PRODUCTION",
    ),
  );

  assertEquals(response.status, 200);
  assertEquals(await response.json(), {
    ok: true,
    message: "environment_ignored",
  });
  assertEquals(processed, []);
});

Deno.test("Subscriber state honors grace period and exact entitlement ID", () => {
  const state = readEntitlementState(
    {
      subscriber: {
        entitlements: {
          "Lafla Pro": {
            expires_date: "2026-06-07T12:00:00.000Z",
            grace_period_expires_date: "2026-06-10T12:00:00.000Z",
          },
          premium: {
            expires_date: "2027-01-01T00:00:00.000Z",
          },
        },
      },
    },
    "Lafla Pro",
    NOW,
  );

  assertEquals(state, {
    isPremium: true,
    expiresAt: "2026-06-10T12:00:00.000Z",
  });
});
