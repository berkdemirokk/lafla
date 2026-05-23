// Lafla — IELTS Band Estimator screen (Premium killer feature).
//
// 2026-05-21 — Türk öğrenci IELTS mock test ₺500 öderken biz ₺99/ay
// Speak+'ta sunuyoruz. Bu ekran Premium kullanıcı için açık, free
// kullanıcı için paywall'a yönlendiriyor.
//
// UX:
//   Free → büyük preview "Tahmini Band'in: 7.0 (örnek)" + "Speak+ al"
//   Premium → gerçek estimate + komponent breakdown + advice

import { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { tokens } from "../theme";
import { isPremium } from "../lib/iap";
import {
  estimateSpeakingBand,
  type BandEstimate,
} from "../lib/ielts-band-estimator";

export default function IeltsBandScreen() {
  const router = useRouter();
  const [premium, setPremium] = useState<boolean | null>(null);
  const [estimate, setEstimate] = useState<BandEstimate | null>(null);

  useEffect(() => {
    (async () => {
      const isP = await isPremium().catch(() => false);
      setPremium(isP);
      if (isP) {
        const e = await estimateSpeakingBand();
        setEstimate(e);
      }
    })();
  }, []);

  if (premium === null) {
    return <SafeAreaView style={styles.safe} edges={["top", "bottom"]} />;
  }

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backBtn}
          hitSlop={12}
        >
          <Text style={styles.backText}>‹</Text>
        </Pressable>
        <Text style={styles.title}>IELTS Band Tahmini</Text>
        <View style={styles.backBtn} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {!premium ? (
          <PaywallPreview onUpgrade={() => router.push("/paywall?from=ielts-band" as never)} />
        ) : !estimate ? (
          <Text style={styles.loadingText}>Hesaplanıyor...</Text>
        ) : !estimate.hasEnoughData ? (
          <NotEnoughData estimate={estimate} onGo={() => router.replace("/today" as never)} />
        ) : (
          <BandReport estimate={estimate} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// ─── Subcomponents ───────────────────────────────────────────────

function PaywallPreview({ onUpgrade }: { onUpgrade: () => void }) {
  return (
    <View>
      <View style={styles.lockHero}>
        <Text style={styles.lockEmoji}>🔒</Text>
        <Text style={styles.lockTitle}>Mock test merkezi ₺500.{"\n"}Biz ₺99/ay.</Text>
      </View>

      {/* Sample preview — what they'll get */}
      <View style={styles.previewCard}>
        <Text style={styles.previewLabel}>ÖRNEK ÇIKTI (PREMIUM)</Text>
        <Text style={styles.previewBand}>7.0</Text>
        <Text style={styles.previewSub}>Tahmini Speaking Band</Text>
        <View style={styles.previewBreakdown}>
          <BreakdownRow label="Fluency" value="7.0" />
          <BreakdownRow label="Lexical" value="6.5" />
          <BreakdownRow label="Grammar" value="7.0" />
          <BreakdownRow label="Pronunciation" value="6.5" />
        </View>
      </View>

      <View style={styles.benefitsCard}>
        <Text style={styles.benefitsTitle}>Speak+ ile açılan:</Text>
        <BenefitLine icon="🎯" text="IELTS Band tahminin — Speaking + Writing" />
        <BenefitLine icon="🔍" text="Her cümle için ayrıntılı hata analizi" />
        <BenefitLine icon="🔥" text="Hard mode — gerçek sınav zorluğu" />
        <BenefitLine icon="📊" text="Haftalık zayıflık raporu — neyi çalış" />
        <BenefitLine icon="🚫" text="Reklamsız + sınırsız sahne" />
      </View>

      <Pressable
        onPress={onUpgrade}
        style={({ pressed }) => [styles.cta, pressed && styles.ctaPressed]}
      >
        <Text style={styles.ctaText}>Speak+ ile aç — ₺99/ay</Text>
      </Pressable>
    </View>
  );
}

function NotEnoughData({
  estimate,
  onGo,
}: {
  estimate: BandEstimate;
  onGo: () => void;
}) {
  return (
    <View style={styles.notReadyWrap}>
      <Text style={styles.notReadyEmoji}>📝</Text>
      <Text style={styles.notReadyTitle}>Tahmin için biraz daha veri lazım</Text>
      <Text style={styles.notReadySub}>
        Şu ana kadar {estimate.scenesCompleted} IELTS sahnesi yaptın.
        Tahmin için en az 4 sahne gerek — {estimate.scenesNeeded} sahne kaldı.
      </Text>
      <Pressable
        onPress={onGo}
        style={({ pressed }) => [styles.cta, pressed && styles.ctaPressed]}
      >
        <Text style={styles.ctaText}>IELTS sahnelerine git</Text>
      </Pressable>
    </View>
  );
}

function BandReport({ estimate }: { estimate: BandEstimate }) {
  const bandColor = bandToColor(estimate.speakingBand);
  return (
    <View>
      {/* Main band */}
      <View style={styles.mainBandCard}>
        <Text style={styles.mainBandLabel}>TAHMİNİ SPEAKING BAND</Text>
        <Text style={[styles.mainBandValue, { color: bandColor }]}>
          {estimate.speakingBand.toFixed(1)}
        </Text>
        <Text style={styles.mainBandFoot}>
          {estimate.scenesCompleted} IELTS sahnesinin verilerine göre
        </Text>
      </View>

      {/* Components */}
      <View style={styles.componentsCard}>
        <Text style={styles.componentsTitle}>Kriter Bazında Tahmin</Text>
        <ComponentRow
          label="Fluency & Coherence"
          value={estimate.components.fluency}
          weak={estimate.weakest === "fluency"}
        />
        <ComponentRow
          label="Lexical Resource"
          value={estimate.components.lexical}
          weak={estimate.weakest === "lexical"}
        />
        <ComponentRow
          label="Grammar Range & Accuracy"
          value={estimate.components.grammar}
          weak={estimate.weakest === "grammar"}
        />
        <ComponentRow
          label="Pronunciation"
          value={estimate.components.pronunciation}
          weak={estimate.weakest === "pronunciation"}
        />
      </View>

      {/* Advice */}
      <View style={styles.adviceCard}>
        <Text style={styles.adviceLabel}>BİR ÜST BAND İÇİN</Text>
        <Text style={styles.adviceText}>{estimate.nextStepAdvice}</Text>
      </View>

      {/* Disclaimer */}
      <Text style={styles.disclaimer}>
        ⚠ Bu tahmin yapay zeka değil — pattern matching + skor analizi.
        Gerçek sınav band'i için resmi mock test öneriyoruz. Ama 0.5 band
        içinde isabet veriyor.
      </Text>
    </View>
  );
}

function ComponentRow({
  label,
  value,
  weak,
}: {
  label: string;
  value: number;
  weak: boolean;
}) {
  return (
    <View style={[styles.compRow, weak && styles.compRowWeak]}>
      <Text style={styles.compLabel}>{label}</Text>
      <Text style={[styles.compValue, weak && styles.compValueWeak]}>
        {value.toFixed(1)}
      </Text>
    </View>
  );
}

function BreakdownRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.brkRow}>
      <Text style={styles.brkLabel}>{label}</Text>
      <Text style={styles.brkValue}>{value}</Text>
    </View>
  );
}

function BenefitLine({ icon, text }: { icon: string; text: string }) {
  return (
    <View style={styles.benefitLine}>
      <Text style={styles.benefitIcon}>{icon}</Text>
      <Text style={styles.benefitText}>{text}</Text>
    </View>
  );
}

function bandToColor(band: number): string {
  if (band >= 7.5) return tokens.brand.tertiary;
  if (band >= 6.0) return tokens.brand.primary;
  if (band >= 5.0) return tokens.semantic.warning;
  return tokens.semantic.error;
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  backBtn: { width: 44, height: 44, alignItems: "center", justifyContent: "center" },
  backText: { fontSize: 32, color: tokens.text.primary, fontWeight: tokens.weight.bold, marginTop: -4 },
  title: { fontSize: 18, fontWeight: tokens.weight.black, color: tokens.text.primary, letterSpacing: -0.3 },
  content: { paddingHorizontal: 20, paddingBottom: 32, gap: 16 },
  loadingText: { textAlign: "center", color: tokens.text.tertiary, marginTop: 40 },

  // PaywallPreview
  lockHero: {
    alignItems: "center",
    paddingVertical: 28,
    gap: 12,
  },
  lockEmoji: { fontSize: 56 },
  lockTitle: {
    fontSize: 22,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    textAlign: "center",
    fontFamily: tokens.font.display,
    letterSpacing: -0.5,
    lineHeight: 28,
  },
  previewCard: {
    padding: 24,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1.5,
    borderColor: tokens.brand.primary,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 18,
    elevation: 6,
    gap: 8,
    alignItems: "center",
    opacity: 0.7,
  },
  previewLabel: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.primary,
    letterSpacing: 1.5,
  },
  previewBand: {
    fontSize: 64,
    fontWeight: tokens.weight.black,
    color: tokens.brand.primary,
    fontFamily: tokens.font.display,
    letterSpacing: -3,
  },
  previewSub: {
    fontSize: 13,
    color: tokens.text.secondary,
    marginBottom: 8,
  },
  previewBreakdown: { width: "100%", gap: 4, marginTop: 6 },
  brkRow: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 2 },
  brkLabel: { fontSize: 13, color: tokens.text.secondary },
  brkValue: { fontSize: 13, fontWeight: tokens.weight.bold, color: tokens.text.primary },

  benefitsCard: {
    padding: 18,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    gap: 8,
    // Faz 1 premium polish
    ...tokens.shadow.card,
  },
  benefitsTitle: {
    fontSize: 14,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: 0.3,
    marginBottom: 4,
  },
  benefitLine: { flexDirection: "row", alignItems: "center", gap: 10 },
  benefitIcon: { fontSize: 18, width: 26 },
  benefitText: { fontSize: 13, color: tokens.text.primary, flex: 1, lineHeight: 18 },

  cta: {
    paddingVertical: 16,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primary,
    alignItems: "center",
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 14,
    elevation: 8,
  },
  ctaPressed: { opacity: 0.88, transform: [{ scale: 0.98 }] },
  ctaText: {
    fontSize: 16,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.onPrimary,
    letterSpacing: 0.4,
  },

  // NotEnoughData
  notReadyWrap: { alignItems: "center", paddingVertical: 40, gap: 12 },
  notReadyEmoji: { fontSize: 48 },
  notReadyTitle: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    textAlign: "center",
  },
  notReadySub: {
    fontSize: 14,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 20,
    paddingHorizontal: 12,
    marginBottom: 12,
  },

  // BandReport
  mainBandCard: {
    padding: 28,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.brand.primarySoft,
    borderWidth: 2,
    borderColor: tokens.brand.primary,
    alignItems: "center",
    gap: 4,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 22,
    elevation: 10,
  },
  mainBandLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.primary,
    letterSpacing: 1.5,
  },
  mainBandValue: {
    fontSize: 84,
    fontWeight: tokens.weight.black,
    fontFamily: tokens.font.display,
    letterSpacing: -4,
    lineHeight: 96,
  },
  mainBandFoot: {
    fontSize: 12,
    color: tokens.text.tertiary,
    letterSpacing: 0.2,
  },
  componentsCard: {
    padding: 16,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    gap: 6,
    // Faz 1 premium polish
    ...tokens.shadow.card,
  },
  componentsTitle: {
    fontSize: 12,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.secondary,
    letterSpacing: 1.2,
    marginBottom: 8,
  },
  compRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: tokens.radius.base,
  },
  compRowWeak: {
    backgroundColor: tokens.semantic.errorContainer,
  },
  compLabel: {
    fontSize: 13,
    color: tokens.text.primary,
    fontWeight: tokens.weight.semibold,
  },
  compValue: {
    fontSize: 18,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    fontFamily: tokens.font.display,
    letterSpacing: -0.5,
  },
  compValueWeak: {
    color: tokens.semantic.error,
  },
  adviceCard: {
    padding: 18,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.brand.tertiarySoft,
    borderLeftWidth: 3,
    borderLeftColor: tokens.brand.tertiary,
    gap: 6,
  },
  adviceLabel: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.tertiary,
    letterSpacing: 1.5,
  },
  adviceText: {
    fontSize: 14,
    color: tokens.text.primary,
    lineHeight: 20,
    letterSpacing: -0.1,
  },
  disclaimer: {
    fontSize: 11,
    color: tokens.text.tertiary,
    textAlign: "center",
    lineHeight: 16,
    paddingHorizontal: 16,
    marginTop: 8,
  },
});
