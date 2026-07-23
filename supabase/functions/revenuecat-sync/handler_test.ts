import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import {
  handleRevenueCatSync,
  SubscriptionState,
} from "./handler.ts";

const USER_ID = "11111111-1111-1111-1111-111111111111";
const NOW = Date.parse("2026-06-09T12:00:00.000Z");

function request(token = "valid"): Request {
  return new Request("https://example.test/revenuecat-sync", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
}

function dependencies(
  processed: unknown[],
  state: SubscriptionState = {
    isPremium: true,
    expiresAt: "2026-07-09T12:00:00.000Z",
  },
) {
  return {
    getEnv: (name: string) =>
      ({ RC_API_KEY: "rc-key", RC_ENTITLEMENT_ID: "Lafla Pro" })[name],
    now: () => NOW,
    getUserId: async (authHeader: string) =>
      authHeader === "Bearer valid" ? USER_ID : null,
    fetchSubscriberState: async () => state,
    processEvent: async (input: unknown) => {
      processed.push(input);
      return true;
    },
  };
}

Deno.test("RevenueCat sync rejects unauthenticated callers", async () => {
  const response = await handleRevenueCatSync(
    request("invalid"),
    dependencies([]),
  );
  assertEquals(response.status, 401);
});

Deno.test("RevenueCat sync stores server-fetched entitlement state", async () => {
  const processed: unknown[] = [];
  const response = await handleRevenueCatSync(
    request(),
    dependencies(processed),
  );

  assertEquals(response.status, 200);
  assertEquals(await response.json(), {
    ok: true,
    processed: true,
    isPremium: true,
    expiresAt: "2026-07-09T12:00:00.000Z",
  });
  assertEquals(processed, [{
    eventId: `sync:${USER_ID}:${NOW}`,
    userId: USER_ID,
    isPremium: true,
    expiresAt: "2026-07-09T12:00:00.000Z",
    eventTimestamp: "2026-06-09T12:00:00.000Z",
  }]);
});
