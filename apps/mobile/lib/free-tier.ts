// Lafla — Free-tier gate (paywall trigger).
//
// 2026-05-21 — Lafla Pro değer önerisini gerçek bir engel ile destekle.
// Önceden: free kullanıcı sınırsız sahne oynayabiliyordu, AdMob banner
// tek "değer" engeliydi. Lafla Pro neden ödenir? Cevap yoktu.
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
import { localDayKey } from "./day-key";

const K_FREE_DATE = "lafla.freeTier.date";
const K_FREE_COUNT = "lafla.freeTier.count";

/**
 * Günlük free quota — değiştirilebilir lever. 3 hızlı sahne sonra paywall.
 * Speak / Talkpal benzer modelleri kullanıyor (~3-5 free/gün).
 */
export const FREE_DAILY_SCENE_QUOTA = 3;

// User-facing daily quota should reset with the same local day boundary as the
// Daily Plan. Otherwise Turkey users can see a fresh plan at 00:00 but stay
// blocked by yesterday's quota until UTC midnight rolls over.
function todayKey(): string {
  return localDayKey();
}

interface CounterState {
  date: string;
  count: number;
}

async function readCounter(): Promise<CounterState> {
  const today = todayKey();
  const [date, rawCount] = await Promise.all([
    AsyncStorage.getItem(K_FREE_DATE),
    AsyncStorage.getItem(K_FREE_COUNT),
  ]);
  // Yeni güne geçtiyse sıfırla
  if (date !== today) {
    return { date: today, count: 0 };
  }
  const parsed = rawCount ? Number(rawCount) : 0;
  const count = Number.isSafeInteger(parsed) && parsed >= 0 ? parsed : 0;
  return { date: today, count };
}

async function writeCounter(state: CounterState): Promise<void> {
  await AsyncStorage.multiSet([
    [K_FREE_DATE, state.date],
    [K_FREE_COUNT, String(state.count)],
  ]);
}

let counterWriteChain: Promise<unknown> = Promise.resolve();

function serializeCounterWrite<T>(work: () => Promise<T>): Promise<T> {
  const job = counterWriteChain.then(work, work);
  counterWriteChain = job.catch(() => undefined);
  return job;
}

/**
 * Bugün tamamlanmış sahne sayısı.
 */
export async function getTodayCount(): Promise<number> {
  return readCounter().then(
    (state) => state.count,
    () => 0,
  );
}

/**
 * Sahne tamamlanınca (verdict completion sonrası) sayacı artır.
 * Premium kullanıcıda no-op.
 */
export async function incrementFreeTier(): Promise<void> {
  const premium = await isPremium().catch(() => false);
  if (premium) return;
  return serializeCounterWrite(async () => {
    const state = await readCounter();
    state.count += 1;
    await writeCounter(state);
  });
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
  try {
    const state = await readCounter();
    return state.count >= FREE_DAILY_SCENE_QUOTA;
  } catch {
    // A broken counter must not silently turn the free tier into unlimited.
    return true;
  }
}

/**
 * Bugün kaç sahne kaldı (free quota açısından). Premium → Infinity.
 * UI badges için ("Bugün 2 sahne kaldı") kullanılır.
 */
export async function getRemainingToday(): Promise<number> {
  const premium = await isPremium().catch(() => false);
  if (premium) return Infinity;
  try {
    const state = await readCounter();
    return Math.max(0, FREE_DAILY_SCENE_QUOTA - state.count);
  } catch {
    return 0;
  }
}

/**
 * Test / debug — sayacı sıfırla. Account silme akışında çağrılır
 * (lafla.* wipe zaten yapıyor, ama explicit reset için).
 */
export async function resetFreeTier(): Promise<void> {
  await AsyncStorage.multiRemove([K_FREE_DATE, K_FREE_COUNT]);
}
