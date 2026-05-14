// Referral screen — "Arkadaşını davet et" growth surface.
// Uses React Native's built-in Share API. Tracking backend TBD.

import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Share,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "../components/Button";
import { tokens } from "../theme";

const REF_CODE_KEY = "lafla.refCode";
const ACCEPTED_REFS_KEY = "lafla.acceptedRefs";
const REF_CODE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function generateRefCode(): string {
  let out = "";
  for (let i = 0; i < 6; i++) {
    out += REF_CODE_CHARS[Math.floor(Math.random() * REF_CODE_CHARS.length)];
  }
  return out;
}

type Tier = {
  count: number;
  reward: string;
};

const TIERS: Tier[] = [
  { count: 3, reward: "1 ay premium" },
  { count: 10, reward: "6 ay premium" },
  { count: 30, reward: "ömür boyu premium" },
];

export default function ReferralScreen() {
  const router = useRouter();
  const [refCode, setRefCode] = useState<string>("");
  const [accepted, setAccepted] = useState<number>(0);

  useEffect(() => {
    (async () => {
      try {
        let code = await AsyncStorage.getItem(REF_CODE_KEY);
        if (!code) {
          code = generateRefCode();
          await AsyncStorage.setItem(REF_CODE_KEY, code);
        }
        setRefCode(code);

        const acceptedRaw = await AsyncStorage.getItem(ACCEPTED_REFS_KEY);
        const parsed = acceptedRaw ? parseInt(acceptedRaw, 10) : 0;
        setAccepted(Number.isFinite(parsed) ? parsed : 0);
      } catch {
        // Fallback to a fresh code if storage fails
        setRefCode(generateRefCode());
        setAccepted(0);
      }
    })();
  }, []);

  const handleShare = async () => {
    if (!refCode) return;
    const link = `https://lafla.app/?ref=${refCode}`;
    const message = `Lafla'yı dene: lafla.app/?ref=${refCode} — Türkler için, gerçek konuşmalar, sıfır XP saçmalığı. Söyle gitsin.`;
    try {
      await Share.share({
        message,
        url: link,
      });
    } catch (err) {
      Alert.alert("Paylaşılamadı", "Bir şeyler ters gitti. Tekrar dener misin?");
    }
  };

  // Pick the active tier — first tier whose threshold isn't yet hit.
  const activeTier =
    TIERS.find((t) => accepted < t.count) ?? TIERS[TIERS.length - 1];
  const counterTarget = activeTier?.count ?? TIERS[0].count;

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.title}>Arkadaş Davet</Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Hero */}
        <View style={styles.hero}>
          <Text style={styles.giftEmoji}>🎁</Text>
          <Text style={styles.headline}>
            Beraber öğrenmek daha eğlenceli
          </Text>
          <Text style={styles.subtitle}>
            Arkadaşına Lafla'yı önerirsen ikiniz de premium kazanır
          </Text>
        </View>

        {/* CTA */}
        <View style={styles.ctaWrap}>
          <Button
            label="Davet linkini paylaş →"
            onPress={handleShare}
            variant="primary"
            stacked
          />
          {refCode ? (
            <Text style={styles.refCodeLine}>
              Davet kodun:{" "}
              <Text style={styles.refCodeValue}>{refCode}</Text>
            </Text>
          ) : null}
        </View>

        {/* Benefits */}
        <Text style={styles.sectionLabel}>ÖDÜLLER</Text>
        <View style={styles.tiersRow}>
          {TIERS.map((tier) => {
            const reached = accepted >= tier.count;
            return (
              <View
                key={tier.count}
                style={[
                  styles.tierCard,
                  reached && styles.tierCardReached,
                ]}
              >
                <Text style={styles.tierCount}>{tier.count}</Text>
                <Text style={styles.tierLabel}>arkadaş</Text>
                <View style={styles.tierDivider} />
                <Text style={styles.tierReward}>{tier.reward}</Text>
                {reached && (
                  <Text style={styles.tierBadge}>✓ Kazandın</Text>
                )}
              </View>
            );
          })}
        </View>

        {/* Counter */}
        <View style={styles.counterCard}>
          <Text style={styles.counterText}>
            <Text style={styles.counterValue}>{accepted}</Text>
            <Text style={styles.counterSlash}> / </Text>
            <Text style={styles.counterTarget}>{counterTarget}</Text>
            <Text style={styles.counterRest}> davet kabul edildi</Text>
          </Text>
        </View>

        {/* Disclaimer */}
        <Text style={styles.disclaimer}>
          Premium şu an pasif — App Store onayından sonra aktif olacak. Davet
          linkin saklanıyor.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 56,
  },
  backBtn: { width: 70 },
  backText: { color: tokens.text.secondary, fontSize: 15 },
  title: {
    fontSize: 20,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  spacer: { width: 70 },
  content: {
    padding: tokens.spacing.md,
    paddingBottom: 80,
  },
  hero: {
    alignItems: "center",
    paddingVertical: tokens.spacing.md,
    marginBottom: tokens.spacing.md,
  },
  giftEmoji: {
    fontSize: 96,
    lineHeight: 110,
    marginBottom: tokens.spacing.sm,
  },
  headline: {
    fontSize: 24,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    textAlign: "center",
    marginBottom: tokens.spacing.base,
    paddingHorizontal: tokens.spacing.sm,
  },
  subtitle: {
    fontSize: 15,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: tokens.spacing.md,
  },
  ctaWrap: {
    marginBottom: tokens.spacing.lg,
    alignItems: "center",
  },
  refCodeLine: {
    marginTop: tokens.spacing.md,
    fontSize: 13,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.medium,
  },
  refCodeValue: {
    color: tokens.brand.tertiary,
    fontWeight: tokens.weight.black,
    letterSpacing: 1.5,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 1.2,
    marginBottom: tokens.spacing.sm,
    paddingHorizontal: 4,
  },
  tiersRow: {
    flexDirection: "row",
    gap: tokens.spacing.sm,
    marginBottom: tokens.spacing.md,
  },
  tierCard: {
    flex: 1,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    paddingVertical: tokens.spacing.md,
    paddingHorizontal: tokens.spacing.sm,
    alignItems: "center",
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  tierCardReached: {
    backgroundColor: tokens.brand.primarySoft,
    borderColor: tokens.brand.primary,
  },
  tierCount: {
    fontSize: 28,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    lineHeight: 32,
  },
  tierLabel: {
    fontSize: 11,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.semibold,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginTop: 2,
  },
  tierDivider: {
    width: 24,
    height: 2,
    backgroundColor: tokens.border.light,
    marginVertical: tokens.spacing.base,
    borderRadius: 1,
  },
  tierReward: {
    fontSize: 12,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.semibold,
    textAlign: "center",
    lineHeight: 16,
  },
  tierBadge: {
    marginTop: 6,
    fontSize: 10,
    fontWeight: tokens.weight.black,
    color: tokens.brand.tertiary,
    letterSpacing: 0.5,
  },
  counterCard: {
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderRadius: tokens.radius.base,
    paddingVertical: tokens.spacing.md,
    paddingHorizontal: tokens.spacing.md,
    alignItems: "center",
    marginBottom: tokens.spacing.lg,
  },
  counterText: {
    fontSize: 16,
    textAlign: "center",
  },
  counterValue: {
    fontSize: 22,
    fontWeight: tokens.weight.black,
    color: tokens.brand.tertiary,
  },
  counterSlash: {
    fontSize: 18,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.bold,
  },
  counterTarget: {
    fontSize: 18,
    color: tokens.text.primary,
    fontWeight: tokens.weight.bold,
  },
  counterRest: {
    fontSize: 14,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.medium,
  },
  disclaimer: {
    fontSize: 12,
    color: tokens.text.tertiary,
    textAlign: "center",
    lineHeight: 18,
    paddingHorizontal: tokens.spacing.sm,
  },
});
