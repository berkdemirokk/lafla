// Lafla — Free-tier gate (paywall trigger).
//
// 2026-05-21 — Lafla Pro değer önerisini gerçek bir engel ile destekle.
// Önceden: free kullanıcı sınırsız sahne oynayabiliyordu, AdMob banner
// tek "değer" engeliydi. ₺99/ay neden ödenir? Cevap yoktu.
//
// Şimdi: günde N sahne free. N+1'inci sahne açılışında paywall.
// Premium ise (RevenueCat isPremium) muaf.
//
// State:
//   K_FREE_DATE       — son sayaç tarihi (toDateString); değişince sayaç sıfırlanır
//   K_FREE_COUNT      — bugün tamamlanan sahne sayısı
//   K_FREE_GATE_SEEN  — bugün paywall'u açtı mı (true ise yeniden bypass'e olanak verilir)
//
// Counter SAHNE TAMAMLANDIĞINDA artar (verdict ekranı sonrası), açılışta
// kontrol edilir. Bu yüzden free user 3 sahneyi tamamlar, 4. sahneye
// tıklayınca paywall görür. "Tamamlanmamış" sayılmaz.

import AsyncStorage from "@react-native-async-storage/async-storage";
import { isPremium } from "./iap";

const K_FREE_DATE = "lafla.freeTier.date";
const K_FREE_COUNT = "lafla.freeTier.count";

/**
 * Günlük free quota — değiştirilebilir lever. 3 hızlı sahne sonra paywall.
 * Speak / Talkpal benzer modelleri kullanıyor (~3-5 free/gün).
 */
export const FREE_DAILY_SCENE_QUOTA = 3;

// 2026-05-25 (B-PAY-11) — Eski versiyon `toDateString()` LOCAL timezone'a
// bağımlıydı: kullanıcı uçakta saat değiştirebilir / TR → AB seyahat ederse
// gece yarısı geçişinde sayaç ya erken sıfırlanır ya ileriye atlar. UTC
// gün başlangıcı stabildir; abuse vektörünü de kapatır (cihaz saatini
// ileri al → quota sıfırla).
function todayKey(): string {
  const d = new Date();
  // YYYY-MM-DD (UTC)
  return d.toISOString().slice(0, 10);
}

interface CounterState {
  date: string;
  count: number;
}

async function readCounter(): Promise<CounterState> {
  const today = todayKey();
  try {
    const [date, rawCount] = await Promise.all([
      AsyncStorage.getItem(K_FREE_DATE),
      AsyncStorage.getItem(K_FREE_COUNT),
    ]);
    // Yeni güne geçtiyse sıfırla
    if (date !== today) {
      return { date: today, count: 0 };
    }
    const count = rawCount ? parseInt(rawCount, 10) : 0;
    return { date: today, count: Number.isFinite(count) ? count : 0 };
  } catch {
    return { date: today, count: 0 };
  }
}

async function writeCounter(state: CounterState): Promise<void> {
  try {
    await AsyncStorage.setItem(K_FREE_DATE, state.date);
    await AsyncStorage.setItem(K_FREE_COUNT, String(state.count));
  } catch {
    // best effort
  }
}

/**
 * Bugün tamamlanmış sahne sayısı.
 */
export async function getTodayCount(): Promise<number> {
  const s = await readCounter();
  return s.count;
}

/**
 * Sahne tamamlanınca (verdict completion sonrası) sayacı artır.
 * Premium kullanıcıda no-op.
 */
export async function incrementFreeTier(): Promise<void> {
  const premium = await isPremium().catch(() => false);
  if (premium) return;
  const s = await readCounter();
  s.count += 1;
  await writeCounter(s);
}

/**
 * Yeni bir sahne AÇILIŞINDA çağrılır. true → paywall göster + sahneye
 * girme. false → free quota dahilinde, normal flow.
 *
 * Premium her zaman false döner (sınırsız).
 * Quota dolmadan false (free quota dahilinde).
 * Quota dolduktan sonra true.
 */
export async function shouldGatePaywall(): Promise<boolean> {
  const premium = await isPremium().catch(() => false);
  if (premium) return false;
  const s = await readCounter();
  return s.count >= FREE_DAILY_SCENE_QUOTA;
}

/**
 * Bugün kaç sahne kaldı (free quota açısından). Premium → Infinity.
 * UI badges için ("Bugün 2 sahne kaldı") kullanılır.
 */
export async function getRemainingToday(): Promise<number> {
  const premium = await isPremium().catch(() => false);
  if (premium) return Infinity;
  const s = await readCounter();
  return Math.max(0, FREE_DAILY_SCENE_QUOTA - s.count);
}

/**
 * Test / debug — sayacı sıfırla. Account silme akışında çağrılır
 * (lafla.* wipe zaten yapıyor, ama explicit reset için).
 */
export async function resetFreeTier(): Promise<void> {
  try {
    await AsyncStorage.removeItem(K_FREE_DATE);
    await AsyncStorage.removeItem(K_FREE_COUNT);
  } catch {
    // ignore
  }
}
