// Lafla — AdMob ads (free-tier monetization).
//
// 2026-05-20 — Strategic placement: Speak+ premium kullanıcı sıfır reklam
// görür (üstelik premium positioning'i destekler). Free kullanıcı:
//   - Interstitial after EVERY 3 scene completion
//   - Banner on home (bottom, just above tab bar — non-intrusive)
//
// Apple AdMob policy:
//   - Children categorization YES (Education category) — non-personalized
//     ads only via Mobile Ads SDK request config
//   - GDPR consent needed for EEA users (we'll do basic gate via ATT result)
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
  TestIds,
  type RequestOptions,
} from "react-native-google-mobile-ads";

import { isPremium } from "./iap";
import { trackEvent } from "./analytics";

// ─── Config ────────────────────────────────────────────────────────────

const IS_DEV = __DEV__;

// AdMob unit IDs — production değerleri app.json extra'dan, dev'de TestIds.
function getInterstitialUnitId(): string {
  if (IS_DEV) return TestIds.INTERSTITIAL;
  const key =
    Platform.OS === "ios" ? "admobInterstitialIos" : "admobInterstitialAndroid";
  const id = (Constants.expoConfig?.extra?.[key] as string | undefined) ?? "";
  return id || TestIds.INTERSTITIAL;
}

export function getBannerUnitId(): string {
  if (IS_DEV) return TestIds.BANNER;
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
