import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { handleRevenueCatWebhook, readEntitlementState } from "./handler.ts";

serve((req) =>
  handleRevenueCatWebhook(req, {
    getEnv: (name) => Deno.env.get(name),
    now: () => Date.now(),
    fetchSubscriberState: async (
      userId,
      apiKey,
      entitlementId,
      nowMs,
    ) => {
      const response = await fetch(
        `https://api.revenuecat.com/v1/subscribers/${
          encodeURIComponent(userId)
        }`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        },
      );
      if (!response.ok) {
        throw new Error(
          `revenuecat_subscriber_lookup_failed:${response.status}`,
        );
      }
      return readEntitlementState(
        await response.json(),
        entitlementId,
        nowMs,
      );
    },
    processEvent: async (input) => {
      const supabaseUrl = Deno.env.get("SUPABASE_URL");
      const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
      if (!supabaseUrl || !serviceRoleKey) {
        throw new Error("supabase_server_misconfigured");
      }

      const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
        auth: { autoRefreshToken: false, persistSession: false },
      });
      const { data, error } = await supabaseAdmin.rpc(
        "process_revenuecat_event",
        {
          p_event_id: input.eventId,
          p_user_id: input.userId,
          p_is_premium: input.isPremium,
          p_expires_at: input.expiresAt,
          p_event_timestamp: input.eventTimestamp,
        },
      );
      if (error) throw error;
      return data === true;
    },
  })
);
