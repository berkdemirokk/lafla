// Lafla — Rewarded ad entitlement (geçici Pro grant).
//
// 2026-05-24 — Free tier'da kullanıcının "reklam izle, kısa süre Pro aç"
// CTA'sına gönüllü tıkladığı durumda kısa süreli premium grant edilir.
// Aggressive interstitial yerine opt-in rewarded ad = daha az kullanıcı acısı,
// daha yüksek ARPU.
//
// 2026-05-25 — Süre 24 saat → 30 dakika. 24 saat'in kullanıcıya verdiği
// "Pro abone gibi" hissi monetization funnel'ı bozuyordu. 30 dakika "bir
// sahne paketi" süresi — istersen tekrar reklam izle, bir paket daha aç.
//
// Mimari:
//   • AsyncStorage key `lafla.premium.rewarded` → { expiresAt, grantedAt, minutes }
//   • isRewardedPremiumActive() → expiresAt > now
//   • grantRewardedPremium(minutes) → expiresAt'i minutes kadar artırır
//   • lib/iap.ts isPremium() OR'lar bunu → AdBanner, paywall gate, premium
//     feature'lar otomatik saygı duyar.

import AsyncStorage from "@react-native-async-storage/async-storage";

import { parseSafe, isObject } from "./json-safe";
import { notifyPremiumChange } from "./iap";

const K_REWARDED = "lafla.premium.rewarded";

interface RewardedState {
  /** Epoch milliseconds — grant expirasyonu. */
  expiresAt: number;
  /** Granted at — analytics ve debug için. */
  grantedAt: number;
  /** İlgili grant'in dakika süresi (default 30). */
  minutes: number;
}

async function read(): Promise<RewardedState | null> {
  try {
    const raw = await AsyncStorage.getItem(K_REWARDED);
    if (!raw) return null;
    // 2026-05-25 — Backward compat: eski grant'lerde "hours" field'ı vardı.
    // Şu an "minutes" kullanıyoruz. Eski grant okurken hours → minutes'a çevir.
    const parsed = parseSafe<
      Partial<RewardedState> & { hours?: number }
    >(raw, {}, isObject, {
      source: "rewarded.read",
    });
    if (
      typeof parsed.expiresAt !== "number" ||
      typeof parsed.grantedAt !== "number"
    ) {
      return null;
    }
    // Yeni shape varsa direkt al; yoksa eski hours'tan türet.
    const minutes =
      typeof parsed.minutes === "number"
        ? parsed.minutes
        : typeof parsed.hours === "number"
          ? parsed.hours * 60
          : 0;
    if (minutes <= 0) return null;
    // 2026-05-25 (B-PAY-15) — Eski "hours" formatı ile okuduysak storage'a
    // yeni "minutes" formatıyla yaz; eski grant kalıntısı 24h olarak göründüğü
    // sürece yeni grant'le karışırdı. Write-back idempotent.
    if (typeof parsed.minutes !== "number") {
      void AsyncStorage.setItem(
        K_REWARDED,
        JSON.stringify({
          expiresAt: parsed.expiresAt,
          grantedAt: parsed.grantedAt,
          minutes,
        }),
      ).catch(() => {});
    }
    return {
      expiresAt: parsed.expiresAt,
      grantedAt: parsed.grantedAt,
      minutes,
    };
  } catch {
    return null;
  }
}

async function write(state: RewardedState): Promise<void> {
  await AsyncStorage.setItem(K_REWARDED, JSON.stringify(state));
}

/**
 * Şu an aktif bir rewarded-ad grant'i var mı?
 * isPremium() bunu OR'lar — separate kontrol genelde gerekmez ama
 * UI'da "Bugün Pro açık" göstermek için faydalı.
 */
export async function isRewardedPremiumActive(): Promise<boolean> {
  const state = await read();
  if (!state) return false;
  return state.expiresAt > Date.now();
}

/**
 * Aktif grant'in bitiş zamanını döner (Date), yoksa null.
 * UI: "Pro X saat 12 dakika sonra biter" göstermek için.
 */
export async function getRewardedExpiresAt(): Promise<Date | null> {
  const state = await read();
  if (!state) return null;
  if (state.expiresAt <= Date.now()) return null;
  return new Date(state.expiresAt);
}

/**
 * Yeni bir rewarded premium grant'i kaydet. Default 30 dakika (kısa bir
 * "sahne paketi" süresi — kullanıcı sahne yaparken aktif kalır, bitince
 * tekrar reklam izleyebilir).
 *
 * 2026-05-25 — Eski default 24 saat'ti, "Pro abone gibi" hissi monetization
 * funnel'ını yiyordu. 30 dk daha doğru ölçek.
 */
export async function grantRewardedPremium(minutes = 30): Promise<void> {
  if (!Number.isFinite(minutes) || minutes <= 0) {
    throw new RangeError("Reward duration must be a positive finite number");
  }
  const now = Date.now();
  const expiresAt = now + minutes * 60 * 1000;
  await write({ expiresAt, grantedAt: now, minutes });
  // 2026-05-25 (B-PAY-3) — UI listener'larına haber ver (AdBanner gizlensin).
  notifyPremiumChange();
}

/**
 * Grant'i sil (örn. user satın aldı, RC entitlement aktif olunca temizle).
 * Test/debug için de kullanılır.
 */
export async function clearRewardedPremium(): Promise<void> {
  await AsyncStorage.removeItem(K_REWARDED);
  notifyPremiumChange();
}
