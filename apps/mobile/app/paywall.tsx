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
} from "../lib/iap";
import { tokens } from "../theme";

// UI-level tier identifiers (what the user sees / picks).
type Tier = "speakplus";

// Map UI tier → IAP PackageId.
const tierToPackage = {
  speakplus: "monthly",
} as const;

// Feature row — Turkish copy with emoji-in-glow-circle layout.
interface FeatureRow {
  icon: string;
  title: string;
  subtitle?: string;
}

const FEATURES: FeatureRow[] = [
  {
    icon: "🎯",
    title: "6 mod, gerçek hayat",
    subtitle: "Flört · İş · Bar · Havaalanı · Günlük · Sipariş — donduğun her an.",
  },
  {
    icon: "🎙️",
    title: "Native ses ile konuş",
    subtitle: "Türkçe konuşana özel pronunciation feedback.",
  },
  {
    icon: "♾️",
    title: "Sınırsız sahne pratiği",
    subtitle: "Günde 5 dakika, 480+ sahne arasından senin için seçilmiş.",
  },
  {
    icon: "📈",
    title: "Akıcılık skorunu takip et",
    subtitle: "Her hafta nerede ilerlediğini gör.",
  },
  {
    icon: "🔥",
    title: "Streak shield",
    subtitle: "Yoğun bir gün bile streak'i kırmasın.",
  },
];

export default function PaywallScreen() {
  const router = useRouter();
  // 2026-05-20 — switch-trigger #1 context.
  // ?from=intro: intro Tinder sahnesi → paywall → kapat butonu /home'a
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
  // Single-tier build — kept as state so the IAP-wiring shape stays stable
  // when Exam Pass returns.
  const [tier] = useState<Tier>("speakplus");
  const [loading, setLoading] = useState(false);
  const [, setLive] = useState<boolean | null>(null);
  const [livePrices, setLivePrices] = useState<{
    monthly: string | null;
  }>({ monthly: null });

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
        if (offering?.monthly?.price) {
          setLivePrices({ monthly: offering.monthly.price });
        }
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

  // Prefer the live App Store price string if available; otherwise fall back
  // to the marketing display price.
  const speakPlusPrice = livePrices.monthly ?? "$9.99 / ay";

  const ctaLabel = loading
    ? "..."
    : trialAvailable
      ? "7 gün ücretsiz dene"
      : "Speak+ Aboneliği Başlat";

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

        {/* SPEAK+ CARD */}
        <Animated.View style={[styles.planCard, cardStyle]}>
          <View style={styles.planGlow} pointerEvents="none" />

          <View style={styles.planHeader}>
            <View>
              <Text style={styles.planName}>Speak+</Text>
              <Text style={styles.planEyebrow}>Aylık abonelik</Text>
            </View>
            <View style={styles.popularPill}>
              <Text style={styles.popularPillText}>EN POPÜLER</Text>
            </View>
          </View>

          <View style={styles.priceRow}>
            <Text style={styles.planPrice}>{speakPlusPrice}</Text>
          </View>
          <Text style={styles.planPriceLocal}>≈ ₺99 / ay</Text>

          {trialAvailable && (
            <View style={styles.trialPill}>
              <Text style={styles.trialPillText}>İlk 7 gün ücretsiz</Text>
            </View>
          )}

          <Text style={styles.planReassurance}>
            İstediğin zaman iptal et · iOS Ayarlar'dan tek dokunuş
          </Text>
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

        {/* SOCIAL PROOF — product-metric stat (safest pre-launch option) */}
        <Animated.View style={[styles.proofCard, proofStyle]}>
          <View style={styles.proofRow}>
            <View style={styles.proofStat}>
              <Text style={styles.proofNumber}>6</Text>
              <Text style={styles.proofLabel}>mod</Text>
            </View>
            <View style={styles.proofDivider} />
            <View style={styles.proofStat}>
              <Text style={styles.proofNumber}>480+</Text>
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
              onPress={() => void handlePurchase(tier)}
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

  // ---------- SPEAK+ CARD ----------
  planCard: {
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderRadius: tokens.radius.lg,
    padding: 22,
    borderWidth: 2,
    borderColor: tokens.brand.primary,
    position: "relative",
    overflow: "hidden",
    marginBottom: tokens.spacing.md,
    // Subtle pink glow shadow on iOS; Android picks up elevation below.
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 8,
  },
  planGlow: {
    position: "absolute",
    top: -60,
    right: -40,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: tokens.brand.primarySoft,
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
