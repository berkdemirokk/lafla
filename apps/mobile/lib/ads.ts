// Lafla — AdMob ads (free-tier monetization).
//
// 2026-05-20 — Strategic placement: Lafla Pro premium kullanıcı sıfır reklam
// görür (üstelik premium positioning'i destekler). Free kullanıcı:
//   - Interstitial after EVERY 3 scene completion
//   - Banner on home (bottom, just above tab bar — non-intrusive)
//
// Apple AdMob policy:
//   - Children categorization NO — Lafla ships flirt mode (dating-app DMs)
//     + bar mode (alcohol ordering, cocktail/whisky vocabulary). App Store
//     age rating is 17+. tagForChildDirectedTreatment + tagForUnderAgeOfConsent
//     MUST be false, otherwise Apple 1.3 / 2.3.7 (age-rating accuracy) flags
//     a contradiction between metadata and content. We still request non-
//     personalized ads via requestNonPersonalizedAdsOnly for GDPR safety
//     in EEA (default), regardless of children flag.
//   - GDPR consent needed for EEA users (basic gate via ATT result)
//
// SETUP STEPS (user-side, manuel):
//   1. AdMob admin → New app → bundle id com.lafla.app → grab App ID
//   2. Create 2 ad units:
//      - Banner: 320×50 anchored adaptive banner
//      - Interstitial: full-screen interstitial
//   3. Paste IDs into app.json `extra.admob*` fields
//   4. iOS-specific: set NSUserTrackingUsageDescription (already set) +
//      enable SKAdNetwork identifiers in app.json (auto from plugin)

import { Platform } from "react-native";
import Constants from "expo-constants";
import mobileAds, {
  AdEventType,
  InterstitialAd,
  MaxAdContentRating,
  RewardedAd,
  RewardedAdEventType,
  TestIds,
  type RequestOptions,
} from "react-native-google-mobile-ads";

import { isPremium } from "./iap";
import { grantRewardedPremium } from "./rewarded";
import { trackEvent } from "./analytics";

// ─── Config ────────────────────────────────────────────────────────────

const IS_DEV = __DEV__;

// 2026-05-23 (v0.9.3) — Audit fix: önceki kod `executionEnvironment !==
// "storeClient"` ile TestFlight'ı da test ads'e düşürüyordu. AMA EAS-built
// standalone iOS app TestFlight VE App Store her ikisinde "standalone"
// döner — "storeClient" sadece Expo Go'da true. Sonuç: production App
// Store build'i ÖMÜR BOYU test ad yayınlardı → revenue=0.
//
// Apple Review gerçek ad'i tolere ediyor (maxAdContentRating: T zaten
// 17+ uyumu sağlıyor). "TestFlight reviewer'ı reject eder" iddiası
// hatalıydı (1.1.4 = UGC, 2.5.4 = background ads — ne biri uygulanabilir).
//
// Yeni logic: sadece dev + explicit env override. Production binary
// (TestFlight + App Store) gerçek ads serve eder.
const USE_TEST_ADS =
  IS_DEV || process.env.EXPO_PUBLIC_USE_TEST_ADS === "true";

// AdMob unit IDs — production değerleri app.json extra'dan, test/dev'de
// AdMob'un resmi TestIds. Production App Store dışındaki tüm ortamlarda
// (dev, simulator, TestFlight) TEST ID kullanılır.
function getInterstitialUnitId(): string {
  if (USE_TEST_ADS) return TestIds.INTERSTITIAL;
  const key =
    Platform.OS === "ios" ? "admobInterstitialIos" : "admobInterstitialAndroid";
  const id = (Constants.expoConfig?.extra?.[key] as string | undefined) ?? "";
  return id || TestIds.INTERSTITIAL;
}

export function getBannerUnitId(): string {
  if (USE_TEST_ADS) return TestIds.BANNER;
  const key =
    Platform.OS === "ios" ? "admobBannerIos" : "admobBannerAndroid";
  const id = (Constants.expoConfig?.extra?.[key] as string | undefined) ?? "";
  return id || TestIds.BANNER;
}

function getRewardedUnitId(): string {
  if (USE_TEST_ADS) return TestIds.REWARDED;
  const key =
    Platform.OS === "ios" ? "admobRewardedIos" : "admobRewardedAndroid";
  const id = (Constants.expoConfig?.extra?.[key] as string | undefined) ?? "";
  return id || TestIds.REWARDED;
}

// ─── Init (call once in app/_layout.tsx) ───────────────────────────────

let _initialized = false;

export async function initAds(): Promise<void> {
  if (_initialized) return;
  try {
    // 2026-05-23 — Apple Review fix: explicit request config so the SDK
    // knows this is a 17+ app (NOT children/family). With Lafla shipping
    // flirt mode + alcohol bar mode, claiming children=true would trigger
    // Apple 1.3 / 2.3.7 age-rating contradictions on review.
    //
    // maxAdContentRating: T (Teen) → AdMob serves Teen-or-tamer creatives.
    // PG would also be safe; G is overly restrictive for 17+ app.
    //
    // tagForChildDirectedTreatment + tagForUnderAgeOfConsent: false →
    // SDK does NOT apply COPPA/GDPR-kids restrictions. Required because
    // Lafla content (alcohol vocab, dating DMs) is not suitable for under
    // 13 / under EEA-consent-age users.
    await mobileAds().setRequestConfiguration({
      maxAdContentRating: MaxAdContentRating.T,
      tagForChildDirectedTreatment: false,
      tagForUnderAgeOfConsent: false,
    });
    await mobileAds().initialize();
    _initialized = true;
  } catch {
    // Best effort — ads non-critical
  }
}

// ─── Interstitial scheduling ───────────────────────────────────────────

// Sahne completion her 3'üncüde bir interstitial göster (premium hariç).
const SHOW_EVERY_N = 3;

let _scenarioCount = 0;
let _currentInterstitial: InterstitialAd | null = null;
let _loadingInterstitial = false;

/**
 * Sahne tamamlandı sinyali. Premium kullanıcıda no-op. Free kullanıcıda
 * her 3. tamamlamada interstitial gösterilir (kullanıcı verdict ekranını
 * görmüş, "Devam et" basmış olur → ads geçişi natural).
 */
export async function onScenarioComplete(): Promise<void> {
  const premium = await isPremium().catch(() => false);
  if (premium) return;
  if (!_initialized) await initAds();

  _scenarioCount += 1;
  if (_scenarioCount < SHOW_EVERY_N) return;

  _scenarioCount = 0;
  await showInterstitial().catch(() => {});
}

async function showInterstitial(): Promise<void> {
  if (_loadingInterstitial) return;
  _loadingInterstitial = true;
  try {
    const opts: RequestOptions = {
      requestNonPersonalizedAdsOnly: true, // Türkiye + EEA için güvenli default
    };
    const ad = InterstitialAd.createForAdRequest(
      getInterstitialUnitId(),
      opts,
    );
    _currentInterstitial = ad;

    const loadedPromise = new Promise<void>((resolve, reject) => {
      const unsubLoaded = ad.addAdEventListener(AdEventType.LOADED, () => {
        unsubLoaded();
        unsubError();
        resolve();
      });
      const unsubError = ad.addAdEventListener(AdEventType.ERROR, (err) => {
        unsubLoaded();
        unsubError();
        reject(err);
      });
    });

    ad.load();
    await loadedPromise;
    ad.show();

    void trackEvent("interstitial_shown", {
      unit_id: getInterstitialUnitId(),
    }).catch(() => {});
  } catch (err) {
    void trackEvent("interstitial_failed", {
      reason: err instanceof Error ? err.message : "unknown",
    }).catch(() => {});
  } finally {
    _loadingInterstitial = false;
  }
}

/**
 * Reset (örn. user'a premium grant verildi anında banner + interstitial
 * artık görünmemeli). Bu fonksiyon ileride RevenueCat customerInfoUpdated
 * listener'ından çağrılabilir.
 */
export function resetAdState(): void {
  _scenarioCount = 0;
  _currentInterstitial = null;
}

// ─── Rewarded video ────────────────────────────────────────────────────
//
// 2026-05-24 — Opt-in rewarded ad. Kullanıcı "Reklamı izle, bugün için Pro
// aç" CTA'sına tıklar → 30 saniye reklam → reward callback'i → 24 saat
// geçici premium. Free tier ARPU lift; aggressive interstitial yerine
// gönüllü engagement.
//
// State: ad load + show tek bir promise zinciri; failure path (no fill,
// dismiss, network error) reject döner — caller UI mesajı gösterir.

export type RewardedResult =
  | { ok: true; hoursGranted: number }
  | { ok: false; reason: string; userClosed?: boolean };

let _loadingRewarded = false;

/**
 * Rewarded video reklamı yükle ve göster. Successful reward callback'inde
 * 24 saat premium grant atılır. UI tıkladıktan sonra "Hazırlanıyor..." ekrana
 * koymalı; loadedPromise resolve olunca ad.show() çağrılır.
 *
 * NOT: showRewardedAd Promise<RewardedResult> döner; caller başarı durumunda
 * UI'yi güncellesin (örn "Bugün Pro açıldı" ve banner gizleme).
 */
export async function showRewardedAd(): Promise<RewardedResult> {
  if (_loadingRewarded) {
    return { ok: false, reason: "Reklam zaten yükleniyor" };
  }
  // Premium kullanıcı için CTA gösterilmemeli ama defensive guard.
  const premium = await isPremium().catch(() => false);
  if (premium) {
    return { ok: false, reason: "Zaten premium aktif" };
  }
  if (!_initialized) await initAds();

  _loadingRewarded = true;
  void trackEvent("rewarded_ad_load_initiated").catch(() => {});

  try {
    const opts: RequestOptions = {
      requestNonPersonalizedAdsOnly: true,
    };
    const ad = RewardedAd.createForAdRequest(getRewardedUnitId(), opts);

    let earnedReward = false;
    let userClosed = false;

    // Reward + lifecycle listener'ları (tek bir kapanış path'i).
    const result = await new Promise<RewardedResult>((resolve) => {
      const unsubLoaded = ad.addAdEventListener(
        RewardedAdEventType.LOADED,
        () => {
          // Load successful → göster.
          ad.show().catch((err) => {
            cleanup();
            resolve({
              ok: false,
              reason: err instanceof Error ? err.message : "show failed",
            });
          });
        },
      );
      const unsubEarned = ad.addAdEventListener(
        RewardedAdEventType.EARNED_REWARD,
        () => {
          earnedReward = true;
          // CLOSED event'i bekle (kullanıcı reklamı bitirdikten sonra X'e basabilir).
        },
      );
      const unsubClosed = ad.addAdEventListener(AdEventType.CLOSED, () => {
        userClosed = true;
        cleanup();
        if (earnedReward) {
          resolve({ ok: true, hoursGranted: 24 });
        } else {
          resolve({
            ok: false,
            reason: "Reklam tamamlanmadı",
            userClosed: true,
          });
        }
      });
      const unsubError = ad.addAdEventListener(AdEventType.ERROR, (err) => {
        cleanup();
        resolve({
          ok: false,
          reason: err instanceof Error ? err.message : "ad error",
        });
      });

      function cleanup() {
        unsubLoaded();
        unsubEarned();
        unsubClosed();
        unsubError();
      }

      ad.load();
    });

    if (result.ok) {
      await grantRewardedPremium(result.hoursGranted);
      void trackEvent("rewarded_ad_completed", {
        hours: result.hoursGranted,
      }).catch(() => {});
    } else {
      void trackEvent("rewarded_ad_failed", {
        reason: result.reason,
        user_closed: result.userClosed ?? false,
      }).catch(() => {});
    }
    return result;
  } finally {
    _loadingRewarded = false;
  }
}
