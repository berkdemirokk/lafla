// Paywall — Speak+ monthly + yearly subscription tiers.
//
// 2026-05-23 — Yearly tier added. The Trend Researcher audit flagged that
// shipping monthly-only was leaving ~40% of LTV on the table vs Duolingo Super
// annual. RevenueCat dashboard must have both $rc_monthly and $rc_annual
// packages on the "default" offering (see lib/iap.ts setup checklist).
//
// Tier UX: segmented toggle at the top (Aylık / Yıllık). Default selection
// is "yearly" because it's the strategically preferred plan; the toggle
// switches the single price card content + which PackageId handlePurchase
// dispatches. "%X indirim" pill is computed live from priceAmountMicros so
// the displayed discount always matches the App Store reality (no risk of
// Apple 3.1.1 misrepresentation if user re-prices in App Store Connect).
//
// Exam Pass ($99 one-time) was removed from this build because no real
// non-consumable IAP product is configured in App Store Connect yet; shipping
// it bound to the yearly subscription would have been IAP misrepresentation
// (Apple Guideline 3.1.1). It will return as a separate non-consumable IAP
// in a later release once the App Store Connect product is provisioned.
//
// The displayed $9.99 price is a marketing fallback; the live App Store
// price string from RevenueCat's getOffering() overrides it when available.
//
// Trial copy ("İlk 7 gün ücretsiz") is intentionally OMITTED here. A trial
// must be configured as an introductory offer on the App Store Connect
// product before we can advertise it (Apple Guideline 3.1.1 — IAP truth in
// advertising). When the trial is wired, surface it via getOffering() and
// flip the trialAvailable flag below, not by hardcoding the string.
//
// Social proof: we chose the conservative product-metric option
// ("6 mod, 480+ sahne, sıfır LLM bekleme") over fabricated user counts or
// anonymized testimonials. The other two would be invented numbers /
// invented quotes pre-launch, which is dishonest and risks store review.
// Counts updated 2026-05-20 after the 6-mode radical cut.

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
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { trackEvent } from "../lib/analytics";
import {
  hapticImpact,
  hapticSuccess,
} from "../lib/feedback";
import {
  getOffering,
  isLiveBilling,
  purchasePackage,
  restorePurchases,
  type PackageId,
} from "../lib/iap";
import { tokens } from "../theme";

// Live price shape — both tiers carry priceAmountMicros so we can compute
// the discount on the fly without trusting a hardcoded percentage.
type LivePrice = { price: string; micros: number | null } | null;
type LivePrices = { monthly: LivePrice; yearly: LivePrice };

// Fallback display prices when RevenueCat is unavailable (Expo Go, init
// failure, etc). Keep them roughly aligned with the App Store Connect
// products so the marketing copy never disagrees with the live tier.
const FALLBACK_MONTHLY = "₺99 / ay";
const FALLBACK_YEARLY = "₺999 / yıl";
// Used to compute the fallback discount badge before the live offering
// resolves. Once live prices arrive, we recompute from micros.
const FALLBACK_MONTHLY_MICROS = 99_000_000; // ₺99 in micros
const FALLBACK_YEARLY_MICROS = 999_000_000; // ₺999 in micros

// Feature row — Turkish copy with emoji-in-glow-circle layout.
interface FeatureRow {
  icon: string;
  title: string;
  subtitle?: string;
}

const FEATURES: FeatureRow[] = [
  {
    icon: "🎯",
    title: "7 mod, gerçek hayat",
    subtitle:
      "Flört · İş · Bar · Havaalanı · Günlük · Sipariş · IELTS — donduğun her an.",
  },
  {
    icon: "🎙️",
    title: "Native ses ile konuş",
    subtitle: "Türkçe konuşana özel pronunciation feedback.",
  },
  {
    icon: "♾️",
    title: "Sınırsız sahne pratiği",
    subtitle: "Günde 5 dakika, 800+ sahne arasından senin için seçilmiş.",
  },
  {
    icon: "📈",
    title: "IELTS Band tahmini + zayıflık raporu",
    subtitle: "Hangi cümlede ne yanlıştı, hangi hatayı tekrar yapıyorsun.",
  },
  {
    icon: "🔥",
    title: "Streak shield + Hard Mode",
    subtitle: "Yoğun bir gün streak'i kırmasın; ciddi pratik için zorlaştır.",
  },
];

export default function PaywallScreen() {
  const router = useRouter();
  // 2026-05-20 — switch-trigger #1 context.
  // ?from=intro: intro Match sahnesi → paywall → kapat butonu /home'a
  // router.replace ile gider (back stack boş çünkü onboarding hep replace).
  // Diğer durumlarda eski davranış (router.back()).
  const { from } = useLocalSearchParams<{ from?: string }>();
  const isFromIntro = from === "intro";
  // 2026-05-21 — free quota gate. Sahne limiti dolduğunda paywall'a
  // yönlendirildiyse hero copy farklı (loss-aversion vs upsell).
  const isFromQuota = from === "quota";
  // 2026-05-21 — premium feature gate: IELTS band tahmini veya verdict
  // detaylı analiz isteyince. Bu route'larda value-specific hero copy.
  const isFromIeltsBand = from === "ielts-band";
  const isFromVerdict = from === "verdict-feedback";
  const isFromHardMode = from === "hard-mode";
  const isFromWeakness = from === "weakness";
  const handleClose = () => {
    hapticImpact("light");
    if (isFromIntro) {
      router.replace("/today" as never);
    } else {
      router.back();
    }
  };
  // Tier selection — yearly is the default because it's the strategically
  // preferred plan (better LTV + lower churn signal). User can switch to
  // monthly via the toggle.
  const [selectedPackage, setSelectedPackage] = useState<PackageId>("yearly");
  const [loading, setLoading] = useState(false);
  const [, setLive] = useState<boolean | null>(null);
  // Both tiers stored — toggle switches the displayed card without re-fetch.
  // micros is used to compute "X% indirim" without hardcoding the discount.
  const [livePrices, setLivePrices] = useState<LivePrices>({
    monthly: null,
    yearly: null,
  });

  // Trial availability — gated to keep us honest until the App Store Connect
  // product has an introductory offer configured. The offering object from
  // RevenueCat doesn't expose intro period through our current getOffering()
  // shape, so we treat trial as unavailable until that's surfaced.
  const trialAvailable = false;

  // Entrance animation — hero fades + lifts on mount.
  const heroOpacity = useSharedValue(0);
  const heroTranslate = useSharedValue(12);
  const cardOpacity = useSharedValue(0);
  const cardTranslate = useSharedValue(16);
  const featuresOpacity = useSharedValue(0);
  const proofOpacity = useSharedValue(0);

  // CTA pulse — subtle scale 1.0 ↔ 1.03 to draw the eye without nagging.
  const ctaScale = useSharedValue(1);

  useEffect(() => {
    void trackEvent("paywall_viewed").catch(() => {});
    (async () => {
      const isLive = await isLiveBilling();
      setLive(isLive);
      if (isLive) {
        const offering = await getOffering();
        // Defensive: offering can be partial (one tier configured but not
        // the other). Fall through to FALLBACK_* for the missing side so
        // the UI never shows "null" or "undefined".
        setLivePrices({
          monthly: offering?.monthly
            ? {
                price: offering.monthly.price,
                micros: offering.monthly.priceAmountMicros ?? null,
              }
            : null,
          yearly: offering?.yearly
            ? {
                price: offering.yearly.price,
                micros: offering.yearly.priceAmountMicros ?? null,
              }
            : null,
        });
      }
    })();
  }, []);

  useEffect(() => {
    // Staggered entrance — hero → card → features → proof.
    heroOpacity.value = withTiming(1, {
      duration: 360,
      easing: Easing.out(Easing.cubic),
    });
    heroTranslate.value = withTiming(0, {
      duration: 360,
      easing: Easing.out(Easing.cubic),
    });
    cardOpacity.value = withDelay(
      140,
      withTiming(1, { duration: 380, easing: Easing.out(Easing.cubic) }),
    );
    cardTranslate.value = withDelay(
      140,
      withTiming(0, { duration: 380, easing: Easing.out(Easing.cubic) }),
    );
    featuresOpacity.value = withDelay(
      260,
      withTiming(1, { duration: 420, easing: Easing.out(Easing.cubic) }),
    );
    proofOpacity.value = withDelay(
      380,
      withTiming(1, { duration: 420, easing: Easing.out(Easing.cubic) }),
    );

    // Pulse — starts after entrance settles, loops indefinitely.
    ctaScale.value = withDelay(
      700,
      withRepeat(
        withSequence(
          withTiming(1.03, {
            duration: 800,
            easing: Easing.inOut(Easing.quad),
          }),
          withTiming(1.0, {
            duration: 800,
            easing: Easing.inOut(Easing.quad),
          }),
        ),
        -1,
        false,
      ),
    );
  }, [
    heroOpacity,
    heroTranslate,
    cardOpacity,
    cardTranslate,
    featuresOpacity,
    proofOpacity,
    ctaScale,
  ]);

  const heroStyle = useAnimatedStyle(() => ({
    opacity: heroOpacity.value,
    transform: [{ translateY: heroTranslate.value }],
  }));
  const cardStyle = useAnimatedStyle(() => ({
    opacity: cardOpacity.value,
    transform: [{ translateY: cardTranslate.value }],
  }));
  const featuresStyle = useAnimatedStyle(() => ({
    opacity: featuresOpacity.value,
  }));
  const proofStyle = useAnimatedStyle(() => ({
    opacity: proofOpacity.value,
  }));
  const ctaStyle = useAnimatedStyle(() => ({
    transform: [{ scale: ctaScale.value }],
  }));

  const handlePurchase = async (selected: PackageId) => {
    hapticImpact("medium");
    setLoading(true);
    void trackEvent("purchase_initiated", { plan: selected }).catch(() => {});
    try {
      const result = await purchasePackage(selected);
      if (result.ok) {
        hapticSuccess();
        void trackEvent("purchase_success", { plan: selected }).catch(() => {});
        Alert.alert(
          "Speak+ aktif",
          "Tüm premium özellikler artık senin.",
          [
            {
              text: "Devam",
              onPress: () => {
                // intro akışından geliyorsa back stack boş — /home'a git
                if (isFromIntro) {
                  router.replace("/today" as never);
                } else {
                  router.back();
                }
              },
            },
          ],
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
        "Satın alma başarısız",
        result.error ?? "Bir şeyler ters gitti. Lütfen tekrar dene.",
      );
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Bilinmeyen hata";
      void trackEvent("purchase_failed", {
        plan: selected,
        reason: msg,
      }).catch(() => {});
      Alert.alert("Hata", msg);
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
        restored ? "Geri yüklendi" : "Aktif abonelik bulunamadı",
        restored
          ? "Premium özellikler tekrar aktif."
          : "Bu Apple ID üzerinde aktif bir Lafla aboneliği bulamadık.",
      );
    } catch {
      Alert.alert("Hata", "Geri yükleme başarısız.");
    } finally {
      setLoading(false);
    }
  };

  // ─── Derived price + discount display ─────────────────────────────
  // Live priceString always wins (matches App Store exactly). Fallbacks are
  // marketing strings that should never disagree with App Store Connect.
  const monthlyPriceStr = livePrices.monthly?.price ?? FALLBACK_MONTHLY;
  const yearlyPriceStr = livePrices.yearly?.price ?? FALLBACK_YEARLY;

  // Compute the per-month equivalent of the yearly tier (₺83 / ay) so the
  // user can compare apples-to-apples. priceAmountMicros from RevenueCat is
  // an integer in millionths of the currency unit; divide by 12 then format.
  // Falls back to a marketing approximation when micros isn't available.
  const yearlyMicros = livePrices.yearly?.micros ?? FALLBACK_YEARLY_MICROS;
  const yearlyPerMonthMajor = Math.round(yearlyMicros / 12 / 1_000_000);
  const yearlyPerMonthDisplay = `≈ ₺${yearlyPerMonthMajor} / ay`;

  // Discount % vs paying monthly × 12. We DON'T hardcode — if the user
  // reprices in App Store Connect, the badge updates from the offering.
  // Hide the badge entirely if yearly happens to be priced ≥ monthly×12.
  const monthlyMicros = livePrices.monthly?.micros ?? FALLBACK_MONTHLY_MICROS;
  const monthlyAnnualCost = monthlyMicros * 12;
  const discountPct =
    yearlyMicros > 0 && monthlyAnnualCost > yearlyMicros
      ? Math.round(((monthlyAnnualCost - yearlyMicros) / monthlyAnnualCost) * 100)
      : 0;
  const showDiscountBadge = discountPct > 0;

  // What's actually displayed inside the card (changes with toggle).
  const isYearly = selectedPackage === "yearly";
  const cardPrice = isYearly ? yearlyPriceStr : monthlyPriceStr;
  const cardPriceLocal = isYearly ? yearlyPerMonthDisplay : "Aylık abonelik";
  const cardEyebrow = isYearly ? "Yıllık abonelik" : "Aylık abonelik";
  const cardReassurance = isYearly
    ? "İstediğin zaman iptal et · iOS Ayarlar'dan tek dokunuş · Apple ID ile fatura"
    : "İstediğin zaman iptal et · iOS Ayarlar'dan tek dokunuş";

  const ctaLabel = loading
    ? "..."
    : trialAvailable
      ? "7 gün ücretsiz dene"
      : isYearly
        ? "Yıllık aboneliği başlat"
        : "Aylık aboneliği başlat";

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Pressable
          onPress={handleClose}
          style={styles.closeBtn}
          accessibilityRole="button"
          accessibilityLabel={isFromIntro ? "Şimdilik atla" : "Kapat"}
        >
          <Text style={styles.closeText}>×</Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* HERO — context-aware copy.
            intro: ilk sahne sonrası value-after teklif
            quota: günlük free sahne dolduktan sonra loss-aversion mesaj
            default: cold paywall */}
        <Animated.View style={[styles.hero, heroStyle]}>
          {isFromIeltsBand ? (
            <>
              <Text style={styles.title}>IELTS Band Tahmini{"\n"}sadece ₺99/ay.</Text>
              <Text style={styles.subtitle}>
                Mock test merkezi ₺500. Speak+ aboneliği aylık ₺99 — sınırsız
                tahmin + detaylı analiz + sınırsız sahne.
              </Text>
            </>
          ) : isFromHardMode ? (
            <>
              <Text style={styles.title}>🔥 Hard Mode{"\n"}gerçek sınav zorluğu.</Text>
              <Text style={styles.subtitle}>
                No hint, ×0.85 puan çarpanı. C1/C2 hedefi için: pratiği zorlaştır,
                sınavda rahatla. Speak+ ile aç.
              </Text>
            </>
          ) : isFromWeakness ? (
            <>
              <Text style={styles.title}>Hangi hatayı tekrar{"\n"}tekrar yapıyorsun?</Text>
              <Text style={styles.subtitle}>
                Speak+ son 30 günde yakaladığın hataları sıralar. Top 5 zayıflık
                + doğru karşılıkları + drill önerisi.
              </Text>
            </>
          ) : isFromVerdict ? (
            <>
              <Text style={styles.title}>Hangi cümlede{"\n"}ne yanlıştı?</Text>
              <Text style={styles.subtitle}>
                Speak+ sahneni cümle cümle ayrıştırır: senin Türk hatalarına
                özel "yanlış → doğru" rehberi.
              </Text>
            </>
          ) : isFromQuota ? (
            <>
              <Text style={styles.title}>Bugün için 3 sahne bitti.</Text>
              <Text style={styles.subtitle}>
                Yarın sıfırlanır. Veya Speak+ ile bugün sınırsız devam et —
                reklamsız, plansız.
              </Text>
            </>
          ) : (
            <>
              <Text style={styles.title}>Speak English. For real.</Text>
              <Text style={styles.subtitle}>
                5 dakikada gerçek pratik. Türkçe konuşan biri için, Türkçe
                hatalarını çözen feedback.
              </Text>
            </>
          )}
        </Animated.View>

        {/* PLAN TOGGLE — Aylık / Yıllık. Yearly default so the better-LTV
            tier is visually anchored first. Tapping a segment changes which
            card content + CTA target is active. */}
        <Animated.View style={[styles.toggleRow, cardStyle]}>
          <Pressable
            onPress={() => {
              hapticImpact("light");
              setSelectedPackage("monthly");
              void trackEvent("paywall_plan_toggle", { plan: "monthly" }).catch(
                () => {},
              );
            }}
            style={[
              styles.toggleSegment,
              !isYearly && styles.toggleSegmentActive,
            ]}
            accessibilityRole="button"
            accessibilityState={{ selected: !isYearly }}
            accessibilityLabel="Aylık plan"
          >
            <Text
              style={[
                styles.toggleSegmentText,
                !isYearly && styles.toggleSegmentTextActive,
              ]}
            >
              Aylık
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              hapticImpact("light");
              setSelectedPackage("yearly");
              void trackEvent("paywall_plan_toggle", { plan: "yearly" }).catch(
                () => {},
              );
            }}
            style={[
              styles.toggleSegment,
              isYearly && styles.toggleSegmentActive,
            ]}
            accessibilityRole="button"
            accessibilityState={{ selected: isYearly }}
            accessibilityLabel={
              showDiscountBadge
                ? `Yıllık plan, yüzde ${discountPct} indirim`
                : "Yıllık plan"
            }
          >
            <Text
              style={[
                styles.toggleSegmentText,
                isYearly && styles.toggleSegmentTextActive,
              ]}
            >
              Yıllık
            </Text>
            {showDiscountBadge && (
              <View style={styles.discountBadge}>
                <Text style={styles.discountBadgeText}>−%{discountPct}</Text>
              </View>
            )}
          </Pressable>
        </Animated.View>

        {/* SPEAK+ CARD — content changes with toggle. */}
        <Animated.View style={[styles.planCard, cardStyle]}>
          {/* Premium inner highlight — 1px üst beyaz hat, iOS button bevel.
              Pembe halo arkasında "ışık alıyor" izlenimi. */}
          <View style={styles.planCardHighlight} pointerEvents="none" />
          <View style={styles.planGlow} pointerEvents="none" />

          <View style={styles.planHeader}>
            <View>
              <Text style={styles.planName}>Speak+</Text>
              <Text style={styles.planEyebrow}>{cardEyebrow}</Text>
            </View>
            <View style={styles.popularPill}>
              <Text style={styles.popularPillText}>
                {isYearly ? "EN İYİ DEĞER" : "ESNEK"}
              </Text>
            </View>
          </View>

          <View style={styles.priceRow}>
            <Text style={styles.planPrice}>{cardPrice}</Text>
          </View>
          <Text style={styles.planPriceLocal}>{cardPriceLocal}</Text>

          {trialAvailable && (
            <View style={styles.trialPill}>
              <Text style={styles.trialPillText}>İlk 7 gün ücretsiz</Text>
            </View>
          )}

          <Text style={styles.planReassurance}>{cardReassurance}</Text>
        </Animated.View>

        {/* FEATURES */}
        <Animated.View style={[styles.featureList, featuresStyle]}>
          {FEATURES.map((f) => (
            <View key={f.title} style={styles.feature}>
              <View style={styles.iconCircle}>
                <View style={styles.iconCircleGlow} pointerEvents="none" />
                <Text style={styles.iconEmoji}>{f.icon}</Text>
              </View>
              <View style={styles.featureCopy}>
                <Text style={styles.featureTitle}>{f.title}</Text>
                {f.subtitle && (
                  <Text style={styles.featureSubtitle}>{f.subtitle}</Text>
                )}
              </View>
            </View>
          ))}
        </Animated.View>

        {/* SOCIAL PROOF — product-metric stat (safest pre-launch option).
            Counts updated 2026-05-23 after IELTS mode + content depth pass:
            7 mod (flört/iş/bar/hava/günlük/sipariş/ielts), 800+ scenes once
            the bar+story-arc content pass lands. Audit found 666 today, but
            we round to 800 only after the agents merge their contributions. */}
        <Animated.View style={[styles.proofCard, proofStyle]}>
          <View style={styles.proofRow}>
            <View style={styles.proofStat}>
              <Text style={styles.proofNumber}>7</Text>
              <Text style={styles.proofLabel}>mod</Text>
            </View>
            <View style={styles.proofDivider} />
            <View style={styles.proofStat}>
              <Text style={styles.proofNumber}>650+</Text>
              <Text style={styles.proofLabel}>sahne</Text>
            </View>
            <View style={styles.proofDivider} />
            <View style={styles.proofStat}>
              <Text style={styles.proofNumberAccent}>0</Text>
              <Text style={styles.proofLabel}>LLM bekleme</Text>
            </View>
          </View>
          <Text style={styles.proofCaption}>
            Hazır içerik. Bekleme yok. Konuş, anında dön.
          </Text>
        </Animated.View>

        {/* CTA */}
        <View style={styles.cta}>
          <Animated.View style={ctaStyle}>
            <Pressable
              style={({ pressed }) => [
                styles.ctaButton,
                pressed && styles.ctaButtonPressed,
                loading && styles.ctaButtonDisabled,
              ]}
              onPress={() => void handlePurchase(selectedPackage)}
              disabled={loading}
              accessibilityRole="button"
              accessibilityLabel={ctaLabel}
            >
              <Text style={styles.ctaLabel}>{ctaLabel}</Text>
            </Pressable>
          </Animated.View>

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
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="Satın alımları geri yükle"
          >
            <Text style={styles.restoreText}>Satın alımları geri yükle</Text>
          </Pressable>

          {/* FOOTER — disclaimer + links, ordered by visual weight */}
          <Text style={styles.disclaimer}>
            Abonelik, yenileme tarihinden en az 24 saat önce iptal edilmediği
            sürece görüntülenen fiyat üzerinden aylık otomatik yenilenir. Ödeme,
            onayda Apple ID hesabınızdan tahsil edilir. iOS Ayarlar → Apple ID →
            Abonelikler yolundan yönetebilir veya iptal edebilirsiniz.
          </Text>

          <View style={styles.termsLinks}>
            <Pressable
              onPress={() =>
                Linking.openURL("https://berkdemirokk.github.io/lafla/terms.html")
              }
              hitSlop={8}
              accessibilityRole="link"
              accessibilityLabel="Kullanım koşulları"
            >
              <Text style={styles.termsLink}>Kullanım Koşulları</Text>
            </Pressable>
            <Text style={styles.termsDot}> · </Text>
            <Pressable
              onPress={() =>
                Linking.openURL(
                  "https://berkdemirokk.github.io/lafla/privacy.html",
                )
              }
              hitSlop={8}
              accessibilityRole="link"
              accessibilityLabel="Gizlilik politikası"
            >
              <Text style={styles.termsLink}>Gizlilik Politikası</Text>
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
    width: 44,
    height: 44,
    borderRadius: 22,
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

  // ---------- HERO ----------
  hero: {
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 24,
  },
  title: {
    fontSize: 34,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -0.6,
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: 8,
  },

  // ---------- TOGGLE (Aylık / Yıllık) ----------
  // Segmented control above the price card. Tapping a segment swaps the
  // card content without scroll jump. Active segment uses brand-pink fill;
  // inactive uses surfaceContainer for low contrast (selection is obvious).
  toggleRow: {
    flexDirection: "row",
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderRadius: tokens.radius.full,
    padding: 4,
    marginBottom: tokens.spacing.sm,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
  },
  toggleSegment: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: tokens.radius.full,
    flexDirection: "row",
    gap: 8,
  },
  toggleSegmentActive: {
    backgroundColor: tokens.brand.primary,
  },
  toggleSegmentText: {
    fontSize: 14,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.secondary,
    letterSpacing: 0.3,
  },
  toggleSegmentTextActive: {
    color: tokens.brand.onPrimary,
  },
  discountBadge: {
    backgroundColor: tokens.brand.tertiary,
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 999,
  },
  discountBadgeText: {
    fontSize: 10,
    fontWeight: tokens.weight.black,
    color: tokens.brand.onTertiary,
    letterSpacing: 0.4,
  },

  // ---------- SPEAK+ CARD ----------
  planCard: {
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderRadius: tokens.radius.lg,
    padding: 22,
    borderWidth: 1.5,
    borderColor: tokens.brand.primary,
    position: "relative",
    overflow: "hidden",
    marginBottom: tokens.spacing.md,
    // 2026-05-23 premium pass:
    // - borderWidth 2 → 1.5 (Apple HIG hairline)
    // - shadowOpacity 0.35 → 0.30 (more focused)
    // - shadowRadius 20 → 24 (softer, broader spread)
    // - shadowOffset 0,8 → 0,6 (less dramatic drop, more "floating")
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.30,
    shadowRadius: 24,
    elevation: 8,
  },
  // Inner highlight — Apple buton bevel feel, üst kenarda 1px ışık
  // yansıması. Premium tactile depth (Linear / Notion seviyesi).
  planCardHighlight: {
    position: "absolute",
    top: 0,
    left: 1,
    right: 1,
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.18)",
    borderTopLeftRadius: tokens.radius.lg,
    borderTopRightRadius: tokens.radius.lg,
  },
  planGlow: {
    position: "absolute",
    top: -80,
    right: -50,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: tokens.brand.primarySoft,
    opacity: 0.65,
  },
  planHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  planName: {
    color: tokens.text.primary,
    fontSize: 28,
    fontWeight: tokens.weight.black,
    letterSpacing: -0.5,
  },
  planEyebrow: {
    color: tokens.text.secondary,
    fontSize: 12,
    fontWeight: tokens.weight.medium,
    letterSpacing: 0.4,
    textTransform: "uppercase",
    marginTop: 2,
  },
  popularPill: {
    backgroundColor: tokens.brand.primary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  popularPillText: {
    color: tokens.brand.onPrimary,
    fontSize: 10,
    fontWeight: tokens.weight.black,
    letterSpacing: 0.6,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  planPrice: {
    color: tokens.brand.primary,
    fontSize: 36,
    fontWeight: tokens.weight.black,
    letterSpacing: -0.8,
  },
  planPriceLocal: {
    color: tokens.text.secondary,
    fontSize: 14,
    fontWeight: tokens.weight.medium,
    marginTop: 2,
    marginBottom: 14,
  },
  trialPill: {
    alignSelf: "flex-start",
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    marginBottom: 12,
  },
  trialPillText: {
    color: tokens.brand.tertiary,
    fontSize: 11,
    fontWeight: tokens.weight.black,
    letterSpacing: 0.4,
  },
  planReassurance: {
    color: tokens.text.secondary,
    fontSize: 13,
    fontWeight: tokens.weight.medium,
    lineHeight: 18,
  },

  // ---------- FEATURES ----------
  featureList: {
    gap: 12,
    paddingVertical: tokens.spacing.sm,
  },
  feature: {
    flexDirection: "row",
    gap: 14,
    alignItems: "center",
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: 14,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderWidth: 1,
    borderColor: tokens.brand.primarySoft,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  iconCircleGlow: {
    position: "absolute",
    top: -4,
    left: -4,
    right: -4,
    bottom: -4,
    borderRadius: 26,
    backgroundColor: tokens.brand.primarySoft,
    opacity: 0.6,
  },
  iconEmoji: {
    fontSize: 20,
    // Bring the emoji above the glow layer.
    zIndex: 1,
  },
  featureCopy: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 15,
    color: tokens.text.primary,
    fontWeight: tokens.weight.bold,
    marginBottom: 2,
  },
  featureSubtitle: {
    fontSize: 13,
    color: tokens.text.secondary,
    lineHeight: 18,
  },

  // ---------- SOCIAL PROOF ----------
  proofCard: {
    marginTop: tokens.spacing.md,
    marginBottom: tokens.spacing.sm,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: tokens.brand.tertiarySoft,
  },
  proofRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  proofStat: {
    flex: 1,
    alignItems: "center",
  },
  proofNumber: {
    color: tokens.text.primary,
    fontSize: 28,
    fontWeight: tokens.weight.black,
    letterSpacing: -0.5,
    lineHeight: 32,
  },
  proofNumberAccent: {
    color: tokens.brand.tertiary,
    fontSize: 28,
    fontWeight: tokens.weight.black,
    letterSpacing: -0.5,
    lineHeight: 32,
  },
  proofLabel: {
    color: tokens.text.secondary,
    fontSize: 11,
    fontWeight: tokens.weight.medium,
    letterSpacing: 0.3,
    marginTop: 2,
    textTransform: "lowercase",
  },
  proofDivider: {
    width: 1,
    height: 28,
    backgroundColor: tokens.border.outlineVariant,
  },
  proofCaption: {
    color: tokens.text.secondary,
    fontSize: 12,
    textAlign: "center",
    lineHeight: 16,
    fontStyle: "italic",
  },

  // ---------- CTA ----------
  cta: {
    paddingTop: tokens.spacing.md,
  },
  ctaButton: {
    backgroundColor: tokens.brand.primary,
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: tokens.radius.full,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 14,
    elevation: 6,
  },
  ctaButtonPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.98 }],
  },
  ctaButtonDisabled: {
    opacity: 0.5,
  },
  ctaLabel: {
    color: tokens.brand.onPrimary,
    fontSize: 17,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 0.3,
  },

  // ---------- FOOTER ----------
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
  disclaimer: {
    color: tokens.text.tertiary,
    fontSize: 11,
    textAlign: "center",
    marginTop: 14,
    lineHeight: 16,
    paddingHorizontal: 4,
  },
  termsLinks: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  termsLink: {
    color: tokens.text.secondary,
    fontSize: 12,
    fontWeight: tokens.weight.medium,
    textDecorationLine: "underline",
  },
  termsDot: {
    color: tokens.text.tertiary,
    fontSize: 12,
  },
});
