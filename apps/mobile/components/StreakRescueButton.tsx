// Lafla — "Seriyi koru — kısa bir reklam izle" CTA (streak-at-risk banner).
//
// Self-contained so app/today.tsx only mounts it. Renders NOTHING unless:
//   • the user is eligible (free, verified entitlement, caps OK — see
//     lib/streak-rescue.ts), AND
//   • a rewarded ad is actually preloaded (no spinner-then-fail UX).
// A free user who already holds a shield sees a short "kalkan hazır" note.
// The shield is granted only inside earnShieldWithRewardedAd after the
// ad's completed-reward callback.

import { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "./Button";
import {
  isAdsInitialized,
  preloadRewardedAd,
  subscribeAdsInitialized,
} from "../lib/ads";
import { trackEvent } from "../lib/analytics";
import { useTranslation } from "../lib/i18n";
import {
  earnShieldWithRewardedAd,
  getStreakRescueEligibility,
} from "../lib/streak-rescue";
import { tokens } from "../theme";

type Mode = "hidden" | "ready" | "loading" | "protected" | "unavailable";

interface Props {
  /** Called after a shield was granted (e.g. to refresh parent state). */
  onShieldEarned?: () => void;
  /**
   * The user already missed yesterday (see getStreakRiskState): copy says
   * "finish a scene TODAY" instead of "if you miss a day".
   */
  missedYesterday?: boolean;
}

export function StreakRescueButton({ onShieldEarned, missedYesterday = false }: Props) {
  const { t } = useTranslation();
  const [mode, setMode] = useState<Mode>("hidden");

  // Eligibility + preload. Re-runs when the ads SDK finishes initializing
  // (it initializes after the ATT prompt; we never trigger init ourselves).
  useEffect(() => {
    let cancelled = false;
    let unsubInit: (() => void) | null = null;

    const evaluate = async () => {
      const eligibility = await getStreakRescueEligibility().catch(
        () => ({ eligible: false, reason: "premium_unknown" }) as const,
      );
      if (cancelled) return;
      if (!eligibility.eligible) {
        setMode(
          eligibility.reason === "already_has_shield" ? "protected" : "hidden",
        );
        return;
      }
      if (!isAdsInitialized()) {
        if (!unsubInit) {
          unsubInit = subscribeAdsInitialized(() => void evaluate());
        }
        return;
      }
      const ready = await preloadRewardedAd().catch(() => false);
      if (cancelled) return;
      setMode((prev) => (prev === "loading" ? prev : ready ? "ready" : "hidden"));
      if (ready) {
        void trackEvent("streak_rescue_cta_shown").catch(() => {});
      }
    };

    void evaluate();
    return () => {
      cancelled = true;
      unsubInit?.();
    };
  }, []);

  const handlePress = useCallback(async () => {
    if (mode !== "ready") return;
    setMode("loading");
    void trackEvent("streak_rescue_cta_tapped").catch(() => {});
    const result = await earnShieldWithRewardedAd().catch(
      () => ({ ok: false, reason: "ad_failed" }) as const,
    );
    if (result.ok) {
      setMode("protected");
      onShieldEarned?.();
      return;
    }
    if (result.reason === "ad_dismissed") {
      // User closed early — offer again only if another ad is ready.
      const ready = await preloadRewardedAd().catch(() => false);
      setMode(ready ? "ready" : "hidden");
      return;
    }
    if (result.reason === "already_has_shield") {
      setMode("protected");
      return;
    }
    setMode(result.reason === "ad_failed" ? "unavailable" : "hidden");
  }, [mode, onShieldEarned]);

  if (mode === "hidden") return null;

  if (mode === "protected" || mode === "unavailable") {
    const message =
      mode === "protected"
        ? t(missedYesterday ? "streakRescue.protected_missed" : "streakRescue.protected")
        : t("streakRescue.unavailable");
    return (
      <View style={styles.wrap}>
        <Text
          style={[styles.note, mode === "protected" && styles.noteSuccess]}
          accessibilityRole="text"
          accessibilityLabel={message}
          accessibilityLiveRegion="polite"
        >
          {message}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.wrap}>
      <Button
        label={t("streakRescue.cta")}
        accessibilityHint={t(
          missedYesterday ? "streakRescue.cta_hint_missed" : "streakRescue.cta_hint",
        )}
        variant="secondary"
        loading={mode === "loading"}
        onPress={() => void handlePress()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: 8,
    alignSelf: "center",
  },
  note: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
    textAlign: "center",
    paddingHorizontal: 14,
  },
  noteSuccess: {
    color: tokens.semantic.success,
  },
});
