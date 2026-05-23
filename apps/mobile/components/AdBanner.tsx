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

import { isPremium } from "../lib/iap";
import { getBannerUnitId } from "../lib/ads";

export function AdBanner() {
  const [show, setShow] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const premium = await isPremium().catch(() => false);
      setShow(!premium);
    })();
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
