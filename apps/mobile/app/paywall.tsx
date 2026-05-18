// Paywall — Speak+ monthly subscription.
//
// Exam Pass ($99 one-time) was removed from this build because no real
// non-consumable IAP product is configured in App Store Connect yet; shipping
// it bound to the yearly subscription would have been IAP misrepresentation
// (Apple Guideline 3.1.1). It will return as a separate non-consumable IAP
// in a later release once the App Store Connect product is provisioned.
//
// The displayed $9.99 price is a marketing fallback; the live App Store
// price string from RevenueCat's getOffering() overrides it when available.

import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
  ActivityIndicator,
  Linking,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Button";
import { trackEvent } from "../lib/analytics";
import {
  hapticImpact,
  hapticSelection,
  hapticSuccess,
} from "../lib/feedback";
import {
  getOffering,
  isLiveBilling,
  purchasePackage,
  restorePurchases,
} from "../lib/iap";
import { tokens } from "../theme";

// UI-level tier identifiers (what the user sees / picks).
type Tier = "speakplus";

// Map UI tier → IAP PackageId.
const tierToPackage = {
  speakplus: "monthly",
} as const;

const FEATURES: string[] = [
  "Practice unlimited scenarios",
  "Personalized speech feedback",
  "Exam-specific drills (IELTS/TOEFL)",
  "Track fluency improvement",
  "Daily streak protection",
];

export default function PaywallScreen() {
  const router = useRouter();
  const [tier, setTier] = useState<Tier>("speakplus");
  const [loading, setLoading] = useState(false);
  const [, setLive] = useState<boolean | null>(null);
  const [livePrices, setLivePrices] = useState<{
    monthly: string | null;
  }>({ monthly: null });

  useEffect(() => {
    void trackEvent("paywall_viewed").catch(() => {});
    (async () => {
      const isLive = await isLiveBilling();
      setLive(isLive);
      if (isLive) {
        const offering = await getOffering();
        if (offering?.monthly?.price) {
          setLivePrices({ monthly: offering.monthly.price });
        }
      }
    })();
  }, []);

  const handlePurchase = async (selected: Tier) => {
    hapticImpact("medium");
    setLoading(true);
    void trackEvent("purchase_initiated", { plan: selected }).catch(() => {});
    try {
      const result = await purchasePackage(tierToPackage[selected]);
      if (result.ok) {
        hapticSuccess();
        void trackEvent("purchase_success", { plan: selected }).catch(() => {});
        Alert.alert(
          "Welcome to Speak+",
          "All premium features are now available.",
          [{ text: "Continue", onPress: () => router.back() }],
        );
        return;
      }
      if (result.cancelled) {
        void trackEvent("purchase_failed", {
          plan: selected,
          reason: "cancelled",
        }).catch(() => {});
        return;
      }
      void trackEvent("purchase_failed", {
        plan: selected,
        reason: result.error ?? "unknown",
      }).catch(() => {});
      Alert.alert(
        "Purchase failed",
        result.error ?? "Something went wrong. Please try again.",
      );
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Unknown error";
      void trackEvent("purchase_failed", {
        plan: selected,
        reason: msg,
      }).catch(() => {});
      Alert.alert("Error", msg);
    } finally {
      setLoading(false);
    }
  };

  const handleRestore = async () => {
    hapticImpact("light");
    setLoading(true);
    try {
      const restored = await restorePurchases();
      if (restored) hapticSuccess();
      Alert.alert(
        restored ? "Restored" : "No active subscription",
        restored
          ? "Your premium features are back."
          : "We couldn't find an active Lafla subscription on this Apple ID.",
      );
    } catch {
      Alert.alert("Error", "Restore failed.");
    } finally {
      setLoading(false);
    }
  };

  // Prefer the live App Store price string if available; otherwise fall back
  // to the marketing display price.
  const speakPlusPrice = livePrices.monthly ?? "$9.99 / month";

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Pressable
          onPress={() => {
            hapticImpact("light");
            router.back();
          }}
          style={styles.closeBtn}
          accessibilityRole="button"
          accessibilityLabel="Close"
        >
          <Text style={styles.closeText}>×</Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <Text style={styles.title}>Speak English. For real.</Text>
          <Text style={styles.subtitle}>
            Daily speaking practice that actually moves the needle.
          </Text>
        </View>

        <View style={styles.featureList}>
          {FEATURES.map((f) => (
            <View key={f} style={styles.feature}>
              <View style={styles.checkCircle}>
                <Text style={styles.checkMark}>✓</Text>
              </View>
              <Text style={styles.featureText}>{f}</Text>
            </View>
          ))}
        </View>

        <View style={styles.plans}>
          {/* Speak+ — sole tier for this build */}
          <Pressable
            style={[styles.plan, styles.planPrimary, styles.planSelected]}
            onPress={() => {
              hapticSelection();
              setTier("speakplus");
            }}
            accessibilityRole="button"
            accessibilityLabel="Select Speak+ monthly plan"
          >
            <View style={styles.planHeader}>
              <Text style={styles.planName}>Speak+</Text>
              <View style={styles.popularPill}>
                <Text style={styles.popularPillText}>MOST POPULAR</Text>
              </View>
            </View>
            <Text style={styles.planPrice}>{speakPlusPrice}</Text>
            <Text style={styles.planPriceLocal}>₺99 / ay</Text>
            <Text style={styles.planTagline}>
              All features. Cancel anytime.
            </Text>
            <View style={styles.planCheck} />
          </Pressable>
        </View>

        <View style={styles.cta}>
          <Button
            label={loading ? "..." : "Subscribe"}
            onPress={() => void handlePurchase(tier)}
            disabled={loading}
          />
          {loading && (
            <ActivityIndicator
              style={{ marginTop: 12 }}
              color={tokens.brand.primary}
            />
          )}

          <Pressable
            style={styles.restoreBtn}
            onPress={handleRestore}
            disabled={loading}
          >
            <Text style={styles.restoreText}>Restore purchases</Text>
          </Pressable>

          <Text style={styles.disclaimer}>
            Subscriptions auto-renew. Cancel in App Store.
          </Text>

          <View style={styles.termsLinks}>
            <Pressable
              onPress={() =>
                Linking.openURL("https://berkdemirokk.github.io/lafla/terms.html")
              }
            >
              <Text style={styles.termsLink}>Terms of Use</Text>
            </Pressable>
            <Text style={styles.termsDot}> · </Text>
            <Pressable
              onPress={() =>
                Linking.openURL(
                  "https://berkdemirokk.github.io/lafla/privacy.html",
                )
              }
            >
              <Text style={styles.termsLink}>Privacy Policy</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 12,
    paddingTop: 4,
    height: 48,
  },
  closeBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: tokens.bg.surfaceContainer,
    alignItems: "center",
    justifyContent: "center",
  },
  closeText: {
    color: tokens.text.primary,
    fontSize: 24,
    fontWeight: tokens.weight.bold,
    lineHeight: 28,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  hero: {
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -0.5,
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 22,
  },
  featureList: {
    gap: 14,
    paddingVertical: tokens.spacing.md,
  },
  feature: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
    alignItems: "center",
    justifyContent: "center",
  },
  checkMark: {
    color: tokens.brand.tertiary,
    fontSize: 13,
    fontWeight: tokens.weight.black,
  },
  featureText: {
    flex: 1,
    fontSize: 15,
    color: tokens.text.primary,
    fontWeight: tokens.weight.medium,
  },
  plans: {
    gap: 12,
    paddingVertical: tokens.spacing.sm,
  },
  plan: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: 18,
    borderWidth: 2,
    borderColor: tokens.border.outlineVariant,
    position: "relative",
  },
  planPrimary: {
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderColor: tokens.brand.primarySoft,
  },
  planSelected: {
    borderColor: tokens.brand.primary,
    backgroundColor: tokens.bg.surfaceContainerHigh,
  },
  planHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  planName: {
    color: tokens.text.primary,
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
  },
  planPrice: {
    color: tokens.brand.primary,
    fontSize: 26,
    fontWeight: tokens.weight.black,
    marginBottom: 2,
  },
  planPriceLocal: {
    color: tokens.text.secondary,
    fontSize: 13,
    fontWeight: tokens.weight.medium,
    marginBottom: 6,
  },
  planTagline: {
    color: tokens.text.secondary,
    fontSize: 13,
    lineHeight: 18,
  },
  planCheck: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: tokens.brand.primary,
  },
  popularPill: {
    backgroundColor: tokens.brand.primary,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  popularPillText: {
    color: tokens.brand.onPrimary,
    fontSize: 10,
    fontWeight: tokens.weight.black,
    letterSpacing: 0.5,
  },
  guaranteePill: {
    backgroundColor: tokens.brand.tertiarySoft,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
  },
  guaranteePillText: {
    color: tokens.brand.tertiary,
    fontSize: 10,
    fontWeight: tokens.weight.black,
    letterSpacing: 0.5,
  },
  cta: {
    paddingTop: tokens.spacing.md,
  },
  disclaimer: {
    color: tokens.text.tertiary,
    fontSize: 11,
    textAlign: "center",
    marginTop: 12,
    lineHeight: 16,
  },
  termsLinks: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  termsLink: {
    color: tokens.text.secondary,
    fontSize: 11,
    textDecorationLine: "underline",
  },
  termsDot: {
    color: tokens.text.tertiary,
    fontSize: 11,
  },
  restoreBtn: {
    alignItems: "center",
    marginTop: tokens.spacing.sm,
    paddingVertical: 8,
  },
  restoreText: {
    color: tokens.text.secondary,
    fontSize: 13,
    fontWeight: tokens.weight.medium,
    textDecorationLine: "underline",
  },
});
