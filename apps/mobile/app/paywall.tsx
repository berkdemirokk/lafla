// Premium paywall — Cyber-Electric Modern. RevenueCat wired.

import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Button";
import {
  getOffering,
  isLiveBilling,
  purchasePackage,
  restorePurchases,
} from "../lib/iap";
import { tokens } from "../theme";

type Plan = "monthly" | "yearly";

const FEATURES: Array<{ emoji: string; title: string; description: string }> = [
  {
    emoji: "🚫",
    title: "Reklamsız",
    description: "Tüm reklamları kaldır, kesintisiz pratik.",
  },
  {
    emoji: "🛡️",
    title: "Esneklik Günü",
    description: "Bir gün kaçırırsan aktif günlerin korunur (ayda 2 kez).",
  },
  {
    emoji: "🎯",
    title: "Sınırsız Telaffuz",
    description: "Premium ses + telaffuz analizi.",
  },
  {
    emoji: "📊",
    title: "Detaylı İstatistik",
    description: "Hangi konularda gelişebilirsin, AI önerisi.",
  },
  {
    emoji: "⚡",
    title: "Erken Erişim",
    description: "Yeni ders ve özelliklere ilk sen ulaş.",
  },
  {
    emoji: "💛",
    title: "Geliştiriciyi Destekle",
    description: "Tek kişilik takım, Pro üyelik Lafla'nın yakıtı.",
  },
];

export default function PaywallScreen() {
  const router = useRouter();
  const [plan, setPlan] = useState<Plan>("yearly");
  const [loading, setLoading] = useState(false);
  const [live, setLive] = useState<boolean | null>(null);
  const [prices, setPrices] = useState<{
    monthly: string;
    yearly: string;
  } | null>(null);

  useEffect(() => {
    (async () => {
      const isLive = await isLiveBilling();
      setLive(isLive);
      if (isLive) {
        const offering = await getOffering();
        if (offering?.monthly?.price && offering?.yearly?.price) {
          setPrices({
            monthly: offering.monthly.price,
            yearly: offering.yearly.price,
          });
        }
      }
    })();
  }, []);

  const handlePurchase = async () => {
    setLoading(true);
    try {
      const result = await purchasePackage(plan);
      if (result.ok) {
        Alert.alert(
          "Pro üyelik aktif.",
          "Tüm Pro özellikler artık kullanımında.",
          [{ text: "Devam", onPress: () => router.back() }],
        );
        return;
      }
      if (result.cancelled) {
        // user cancelled — silent
        return;
      }
      Alert.alert(
        "Satın alma başarısız",
        result.error ?? "Bilinmeyen bir hata oluştu.",
      );
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Bilinmeyen hata";
      Alert.alert("Hata", msg);
    } finally {
      setLoading(false);
    }
  };

  const handleRestore = async () => {
    setLoading(true);
    try {
      const restored = await restorePurchases();
      Alert.alert(
        restored ? "Geri yüklendi" : "Aktif abonelik yok",
        restored
          ? "Pro özelliklerine erişebilirsin."
          : "Bu Apple ID'de aktif bir Lafla aboneliği bulunmuyor.",
      );
    } catch {
      Alert.alert("Hata", "Geri yükleme başarısız.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.closeBtn}>
          <Text style={styles.closeText}>×</Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <Text style={styles.crown}>👑</Text>
          <Text style={styles.title}>Lafla Pro</Text>
          <Text style={styles.subtitle}>
            Reklamsız, ekstra özellikler.{"\n"}Profesyonel pratik. Sınırsız.
          </Text>
        </View>

        <View style={styles.featureList}>
          {FEATURES.map((f) => (
            <View key={f.title} style={styles.feature}>
              <Text style={styles.featureEmoji}>{f.emoji}</Text>
              <View style={styles.featureText}>
                <Text style={styles.featureTitle}>{f.title}</Text>
                <Text style={styles.featureDesc}>{f.description}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.plans}>
          <Pressable
            style={[styles.plan, plan === "yearly" && styles.planSelected]}
            onPress={() => setPlan("yearly")}
          >
            <View style={styles.savePill}>
              <Text style={styles.savePillText}>%50 İNDİRİM</Text>
            </View>
            <Text style={styles.planName}>Yıllık</Text>
            <Text style={styles.planPrice}>
              {prices?.yearly ?? "599 ₺/yıl"}
            </Text>
            <Text style={styles.planMonthly}>≈ 50 ₺/ay</Text>
            {plan === "yearly" && <View style={styles.planCheck} />}
          </Pressable>

          <Pressable
            style={[styles.plan, plan === "monthly" && styles.planSelected]}
            onPress={() => setPlan("monthly")}
          >
            <Text style={styles.planName}>Aylık</Text>
            <Text style={styles.planPrice}>
              {prices?.monthly ?? "99 ₺/ay"}
            </Text>
            <Text style={styles.planMonthly}>İstediğin zaman iptal</Text>
            {plan === "monthly" && <View style={styles.planCheck} />}
          </Pressable>
        </View>

        <View style={styles.cta}>
          <Button
            label={
              loading
                ? "..."
                : plan === "yearly"
                ? "Yıllık plan ile başla"
                : "Aylık plan ile başla"
            }
            onPress={handlePurchase}
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
            <Text style={styles.restoreText}>Satın alımları geri yükle</Text>
          </Pressable>

          <Text style={styles.disclaimer}>
            {live === false
              ? "Demo: gerçek satın alma App Store onayı sonrası aktif."
              : "İstediğin zaman iptal. Otomatik yenileme öncesi bildirim."}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.onBackground },
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
    backgroundColor: tokens.bg.inverseSurfaceLight,
    alignItems: "center",
    justifyContent: "center",
  },
  closeText: {
    color: tokens.text.inverseOnSurface,
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
  crown: {
    fontSize: 64,
    marginBottom: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: tokens.weight.black,
    color: tokens.brand.primary,
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: tokens.text.secondaryFixedDim,
    textAlign: "center",
    lineHeight: 22,
  },
  featureList: {
    gap: 14,
    paddingVertical: tokens.spacing.lg,
  },
  feature: {
    flexDirection: "row",
    gap: 14,
    alignItems: "flex-start",
  },
  featureEmoji: {
    fontSize: 28,
    width: 32,
  },
  featureText: { flex: 1 },
  featureTitle: {
    fontSize: 16,
    fontWeight: tokens.weight.bold,
    color: tokens.text.inverseOnSurface,
    marginBottom: 2,
  },
  featureDesc: {
    fontSize: 13,
    color: tokens.text.secondaryFixedDim,
    lineHeight: 18,
  },
  plans: {
    flexDirection: "row",
    gap: 10,
    paddingVertical: tokens.spacing.md,
  },
  plan: {
    flex: 1,
    backgroundColor: tokens.bg.inverseSurface,
    borderRadius: tokens.radius.base,
    padding: 14,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.08)",
    position: "relative",
  },
  planSelected: {
    borderColor: tokens.brand.primary,
    backgroundColor: tokens.bg.inverseSurfaceLight,
  },
  planName: {
    color: tokens.text.inverseOnSurface,
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    marginBottom: 4,
  },
  planPrice: {
    color: tokens.brand.primary,
    fontSize: 20,
    fontWeight: tokens.weight.black,
    marginBottom: 2,
  },
  planMonthly: {
    color: tokens.text.secondaryFixedDim,
    fontSize: 11,
  },
  planCheck: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: tokens.brand.primary,
  },
  savePill: {
    position: "absolute",
    top: -10,
    right: 8,
    backgroundColor: tokens.brand.primary,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    zIndex: 2,
  },
  savePillText: {
    color: tokens.text.onPrimary,
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
  restoreBtn: {
    alignItems: "center",
    marginTop: tokens.spacing.md,
    paddingVertical: 8,
  },
  restoreText: {
    color: tokens.text.secondaryFixedDim,
    fontSize: 13,
    fontWeight: tokens.weight.medium,
    textDecorationLine: "underline",
  },
});
