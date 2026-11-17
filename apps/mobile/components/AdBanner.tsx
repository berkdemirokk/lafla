// AdBanner — free-tier home bottom banner (AdMob).
//
// Premium kullanıcıda render etmez (null döner). Non-premium'da bottom
// anchored adaptive banner gösterir. Banner state isPremium() ile reload
// edilir (her focus'ta yenilenir).

import { useEffect, useState } from "react";
import { View } from "react-native";
import {
  BannerAd,
  BannerAdSize,
} from "react-native-google-mobile-ads";

import { getPremiumStatus, subscribePremiumChange } from "../lib/iap";
import {
  getBannerUnitId,
  isAdsInitialized,
  subscribeAdsInitialized,
} from "../lib/ads";
import { useTranslation } from "../lib/i18n";

export function AdBanner() {
  const { t } = useTranslation();
  const [show, setShow] = useState<boolean | null>(null);
  // 2026-11-16 — SDK initialize (ATT sırasından sonra) olana kadar banner
  // reklam isteği atmaz.
  const [adsReady, setAdsReady] = useState<boolean>(isAdsInitialized());

  useEffect(() => {
    if (adsReady) return;
    const unsub = subscribeAdsInitialized(() => setAdsReady(true));
    // Subscribe ile mount arasında init bitmiş olabilir.
    if (isAdsInitialized()) setAdsReady(true);
    return unsub;
  }, [adsReady]);

  useEffect(() => {
    let cancelled = false;
    const refresh = async () => {
      const premium = await getPremiumStatus().catch(() => "unknown" as const);
      if (!cancelled) setShow(premium === "inactive");
    };
    refresh();
    // 2026-05-25 (B-PAY-3) — purchase/rewarded grant sonrası global notify
    // ile yeniden okur. Eski versiyon sadece mount'ta okuyor, paywall'dan
    // dönüş sonrası banner kalıyordu.
    const unsub = subscribePremiumChange(refresh);
    return () => {
      cancelled = true;
      unsub();
    };
  }, []);

  if (show !== true || !adsReady) return null;

  return (
    <View accessibilityLabel={t("ads.banner_label")}>
      <BannerAd
        unitId={getBannerUnitId()}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  );
}
