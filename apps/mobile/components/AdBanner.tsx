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

import { isPremium, subscribePremiumChange } from "../lib/iap";
import { getBannerUnitId } from "../lib/ads";

export function AdBanner() {
  const [show, setShow] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;
    const refresh = async () => {
      const premium = await isPremium().catch(() => false);
      if (!cancelled) setShow(!premium);
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

  if (show !== true) return null;

  return (
    <View accessibilityLabel="Reklam alanı (Lafla Pro ile kalkar)">
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
