import { trackEvent } from "./analytics";
import { supabase } from "./supabase";

/** The server owns code creation so shared codes always exist and are unique. */
export async function getMyReferralCode(): Promise<string> {
  const { data, error } = await supabase.rpc("get_or_create_referral_code");
  if (error) throw error;
  if (typeof data !== "string" || !data) throw new Error("Referral code unavailable");
  return data;
}

/** Returns false for an invalid, self, or already redeemed code. */
export async function redeemReferralCode(code: string): Promise<boolean> {
  const trimmed = code.trim().toUpperCase();
  if (!/^[A-Z0-9]{4,32}$/.test(trimmed)) return false;
  const { data, error } = await supabase.rpc("redeem_referral_code", {
    candidate: trimmed,
  });
  if (error) throw error;
  if (data === true) {
    void trackEvent("referral_redeemed", {}).catch(() => {});
    return true;
  }
  return false;
}

export async function getRedeemedCode(): Promise<string | null> {
  const { data: auth, error: authError } = await supabase.auth.getUser();
  if (authError) throw authError;
  if (!auth.user) throw new Error("Authentication required");
  const { data, error } = await supabase
    .from("profiles")
    .select("redeemed_referral_code")
    .eq("id", auth.user.id)
    .single();
  if (error) throw error;
  return data.redeemed_referral_code ?? null;
}

export function buildReferralLink(code: string): string {
  return `https://berkdemirokk.github.io/lafla/?ref=${encodeURIComponent(code)}`;
}

export function shareMessage(code: string, name?: string): string {
  const namePart = name && name.trim() ? `${name.trim()}, ` : "";
  return `${namePart}Lafla'da İngilizce konuşma pratiği yapıyorum — sen de denesene: ${buildReferralLink(code)}`;
}
