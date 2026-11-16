// Lafla — Cold-start ATT + AdMob sequencing (2026-11-16).
//
// Audit bulgusu: app/_layout.tsx her soğuk açılışta requestAttOnce()
// çağırıyordu → iOS ATT sistem penceresi kullanıcı hiçbir değer görmeden,
// onboarding'in ilk saniyesinde çıkıyordu. ATT'nin asıl yeri
// lib/onboarding-finalize.ts (onboarding tamamlandıktan sonra).
//
// Yeni kural:
//   - Onboarding bitmemişse cold start'ta ATT SORULMAZ ve AdMob
//     başlatılmaz (onboarding'de reklam yok; ATT çözülmeden reklam isteği
//     gönderilmez).
//   - Onboarding bitmiş ama ATT hiç sorulmamış (eski sürümden gelen veya
//     finalize sırasında pencere sunulamamış) kullanıcıya bir kez sorulur.
//     requestAttOnce idempotent; cevap alınmışsa no-op.
//   - AdMob, ATT denemesinden SONRA başlatılır. Tüm reklam istekleri zaten
//     requestNonPersonalizedAdsOnly: true ile gider.
//
// Bağımlılıklar enjekte edilir ki sıralama jest'te native modül olmadan
// test edilebilsin.

import type { AttStatus } from "./att";

export interface AttAdsDeps {
  isOnboarded: () => Promise<boolean>;
  requestAttOnce: () => Promise<AttStatus | null>;
  getAttStatus: () => Promise<AttStatus>;
  initAds: () => Promise<void>;
}

export interface AttAdsResult {
  attRequested: boolean;
  adsInitialized: boolean;
}

export async function bootstrapAttAndAds(
  deps: AttAdsDeps,
): Promise<AttAdsResult> {
  const onboarded = await deps.isOnboarded().catch(() => false);

  let attRequested = false;
  if (onboarded) {
    const result = await deps.requestAttOnce().catch(() => null);
    attRequested = result !== null;
  }

  // Onboarding'deki kullanıcı: ATT sistemi henüz karar vermediyse reklam
  // SDK'sına dokunma. (Android / ATT dışı platformlarda getAttStatus
  // "granted" döner → reklam başlatılır.)
  if (!onboarded) {
    const status = await deps
      .getAttStatus()
      .catch(() => "not-determined" as AttStatus);
    if (status === "not-determined") {
      return { attRequested, adsInitialized: false };
    }
  }

  try {
    await deps.initAds();
    return { attRequested, adsInitialized: true };
  } catch {
    return { attRequested, adsInitialized: false };
  }
}
