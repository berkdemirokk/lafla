// Lafla — Referral (Adım 7, 2026-05-20).
//
// MVP scope: user-facing UI + tracking. Otomatik bonus award MANUEL —
// sen Supabase'deki referral_codes tablosundan günde 1 kez referrer-side
// kullanıcılara RevenueCat promo-code göndereceksin (script veya manuel).
//
// Bunun nedeni: tam otomatik referral attribution Branch.io / Adjust SDK
// veya custom server gerektirir; bu da 1-2 haftalık ek iş + maliyet. MVP
// için manuel award ile çık, ölç, yatırım kararını rakamla ver.
//
// Akış:
//   1. Her kullanıcı bir referral code oluşturur (ilk profile open'da).
//      Format: 6 char alphanumeric (örn. K3M9PX).
//   2. Profile'da "Arkadaşını davet et" CTA → Share API ile şu link:
//      `https://berkdemirokk.github.io/lafla/?ref=K3M9PX`
//   3. Friend opens link → Pages script `localStorage.setItem('lafla.ref','K3M9PX')`
//      ve App Store'a yönlendirir.
//   4. App install + onboarding bittiğinde:
//      - Onboarding referral kodunu okuyamayacak (App Store install break)
//      - User manuel girer (settings'te "Bir kodum var" entry) — MVP versiyon
//   5. Code Supabase'e yazılır → günlük cron veya manuel award.

import AsyncStorage from "@react-native-async-storage/async-storage";
import { trackEvent } from "./analytics";
import { supabase } from "./supabase";

const K_MY_CODE = "lafla.referral.myCode";
const K_REDEEMED_CODE = "lafla.referral.redeemedCode";

const CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no 0/O/1/I confusion
const CODE_LENGTH = 6;
const CODE_PATTERN = new RegExp(`^[${CODE_ALPHABET}]{${CODE_LENGTH}}$`);

function generateCode(): string {
  let out = "";
  for (let i = 0; i < CODE_LENGTH; i++) {
    out += CODE_ALPHABET[Math.floor(Math.random() * CODE_ALPHABET.length)];
  }
  return out;
}

/**
 * Get (or lazily create) the user's referral code. Stable across launches.
 * Stored locally; also written to Supabase profiles.referral_code on next
 * sync (best-effort).
 */
export async function getMyReferralCode(): Promise<string> {
  try {
    const stored = await AsyncStorage.getItem(K_MY_CODE);
    if (stored && stored.length >= 4) return stored;
  } catch {
    // fall through
  }
  const code = generateCode();
  try {
    await AsyncStorage.setItem(K_MY_CODE, code);
  } catch {
    // best effort
  }
  // Supabase'e best-effort yaz — RLS / auth gerektirir, fail ise sessiz.
  try {
    const { data } = await supabase.auth.getUser();
    const userId = data?.user?.id;
    if (userId) {
      await supabase
        .from("profiles")
        .update({ referral_code: code })
        .eq("id", userId);
    }
  } catch {
    // ignore
  }
  void trackEvent("referral_code_generated").catch(() => {});
  return code;
}

/**
 * Bir referral kodu redeem et — referrer'a +1 ay Lafla Pro tetikler (manuel
 * award için Supabase'e yazılır). Aynı kod 2 kez redeem edilemez (cleanup
 * server-side). Returns true if accepted.
 */
export async function redeemReferralCode(code: string): Promise<boolean> {
  const trimmed = code.trim().toUpperCase();
  if (!CODE_PATTERN.test(trimmed)) return false;

  // Self-redeem korumasi: kendi kodunu sen redeem edemezsin.
  try {
    const my = await AsyncStorage.getItem(K_MY_CODE);
    if (my && my === trimmed) return false;
  } catch {
    // ignore
  }

  // Daha önce redeem ettin mi?
  try {
    const prev = await AsyncStorage.getItem(K_REDEEMED_CODE);
    if (prev) return false;
  } catch {
    // ignore
  }

  // The backend is authoritative. Do not consume local one-time state before
  // the server accepts the code, or an offline attempt becomes unrecoverable.
  try {
    const { data } = await supabase.auth.getUser();
    const userId = data?.user?.id;
    if (!userId) return false;
    const { error } = await supabase
      .from("profiles")
      .update({ redeemed_referral_code: trimmed })
      .eq("id", userId);
    if (error) return false;
  } catch {
    return false;
  }

  try {
    await AsyncStorage.setItem(K_REDEEMED_CODE, trimmed);
  } catch {
    // The backend already accepted it; do not invite a duplicate redemption.
  }

  void trackEvent("referral_redeemed").catch(() => {});
  return true;
}

export async function getRedeemedCode(): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(K_REDEEMED_CODE);
  } catch {
    return null;
  }
}

export function buildReferralLink(code: string): string {
  return `https://berkdemirokk.github.io/lafla/?ref=${encodeURIComponent(code)}`;
}

export function shareMessage(code: string, name?: string): string {
  const namePart = name && name.trim() ? `${name.trim()}, ` : "";
  return `${namePart}Lafla'da İngilizce konuşma pratiği yapıyorum — sen de denesene. Bu linkle ikimiz de 1 ay Lafla Pro kazanırız: ${buildReferralLink(code)}`;
}
