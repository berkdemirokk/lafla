// Lafla — Rewarded ad entitlement (geçici Pro grant).
//
// 2026-05-24 — Free tier'da kullanıcının "reklam izle, bugün için Pro aç"
// CTA'sına gönüllü tıkladığı durumda 24 saatlik geçici premium grant edilir.
// Aggressive interstitial yerine opt-in rewarded ad = daha az kullanıcı acısı,
// daha yüksek ARPU.
//
// Mimari:
//   • AsyncStorage key `lafla.premium.rewarded` → { expiresAt: epoch_ms }
//   • isRewardedPremiumActive() → expiresAt > now
//   • grantRewardedPremium(hours) → expiresAt'i hours kadar artırır
//   • lib/iap.ts isPremium() OR'lar bunu → AdBanner, paywall gate, premium
//     feature'lar otomatik saygı duyar.
//
// Grant SADECE rewarded ad successful complete callback'inde çağrılır.
// User dismiss / load failure / non-reward path'inde grant atılmaz.

import AsyncStorage from "@react-native-async-storage/async-storage";

import { parseSafe, isObject } from "./json-safe";

const K_REWARDED = "lafla.premium.rewarded";

interface RewardedState {
  /** Epoch milliseconds — grant expirasyonu. */
  expiresAt: number;
  /** Granted at — analytics ve debug için. */
  grantedAt: number;
  /** İlgili grant'in saat süresi (24 default, ileride değişebilir). */
  hours: number;
}

async function read(): Promise<RewardedState | null> {
  try {
    const raw = await AsyncStorage.getItem(K_REWARDED);
    if (!raw) return null;
    const parsed = parseSafe<Partial<RewardedState>>(raw, {}, isObject, {
      source: "rewarded.read",
    });
    if (
      typeof parsed.expiresAt !== "number" ||
      typeof parsed.grantedAt !== "number" ||
      typeof parsed.hours !== "number"
    ) {
      return null;
    }
    return {
      expiresAt: parsed.expiresAt,
      grantedAt: parsed.grantedAt,
      hours: parsed.hours,
    };
  } catch {
    return null;
  }
}

async function write(state: RewardedState): Promise<void> {
  try {
    await AsyncStorage.setItem(K_REWARDED, JSON.stringify(state));
  } catch {
    // best effort
  }
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
 * Yeni bir rewarded premium grant'i kaydet. Mevcut grant varsa süre EKLENMEZ
 * (kullanıcı arka arkaya 5 reklam izleyip 5 gün Pro almasın); yeni grant
 * her zaman max(şimdi, mevcut expiresAt) + hours olarak hesaplanır AMA
 * yalnız son grant aktif değilse yenisi atanır. Daha basit: aktif grant
 * varken yeni grant atılmaz (caller "zaten aktif" check'i yapmalı).
 */
export async function grantRewardedPremium(hours = 24): Promise<void> {
  const now = Date.now();
  const expiresAt = now + hours * 3600 * 1000;
  await write({ expiresAt, grantedAt: now, hours });
}

/**
 * Grant'i sil (örn. user satın aldı, RC entitlement aktif olunca temizle).
 * Test/debug için de kullanılır.
 */
export async function clearRewardedPremium(): Promise<void> {
  try {
    await AsyncStorage.removeItem(K_REWARDED);
  } catch {
    // best effort
  }
}
