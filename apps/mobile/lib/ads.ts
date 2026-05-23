// Lafla — AdMob ads (free-tier monetization).
//
// 2026-05-20 — Strategic placement: Speak+ premium kullanıcı sıfır reklam
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
  TestIds,
  type RequestOptions,
} from "react-native-google-mobile-ads";

import { isPremium } from "./iap";
import { trackEvent } from "./analytics";

// ─── Config ────────────────────────────────────────────────────────────

const IS_DEV = __DEV__;

// 2026-05-23 — Apple Review safety: TestFlight build'lerinde de TEST ads
// kullan. Önceki sürüm sadece __DEV__'a bakıyordu — TestFlight build
// __DEV__ === false döner, dolayısıyla gerçek production AdMob reklamları
// görünür. Apple TestFlight reviewer'ı production-grade reklam görürse
// 1.1.4/2.5.4 violation diye reject eder. Çözüm: TestFlight'ı da test
// reklam'a düşür. Production App Store build'inde Constants.appOwnership
// veya releaseChannel ile ayır.
//
// expo-constants'da `expoConfig.extra.releaseChannel` veya
// `Constants.executionEnvironment === 'standalone'` ile TestFlight ile
// production App Store'u ayırmak normalde mümkün, AMA en sağlam yol:
// `EXPO_PUBLIC_USE_TEST_ADS=true` env var ile manuel override + default
// `__DEV__` lojiği. TestFlight build'ini bu env ile flag'la.
const USE_TEST_ADS =
  IS_DEV ||
  process.env.EXPO_PUBLIC_USE_TEST_ADS === "true" ||
  // TestFlight detection: bundleVersion ile app store build farkı tutmak
  // sağlam yöntem olamadığı için, default'a TestFlight'ı dahil ediyoruz.
  // Production-store-only switch ileride uygulanabilir.
  Constants.executionEnvironment !== "storeClient";

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
