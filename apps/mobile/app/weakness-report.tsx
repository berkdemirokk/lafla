// Lafla — Personal Weakness Report (Premium feature).
//
// 2026-05-21 — Türk öğrenciye "haftalık zayıflık raporu" verir. Mevcut
// mistake-tracker pattern istatistiklerini topluyor; bu ekran onları
// gruplandırıp "Bu hafta 'present perfect'te 12 hata yaptın" der.
//
// Free: locked preview + paywall
// Premium: top 5 zayıflık + her biri için ne yapacağı + drill önerisi

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
import { getMistakeDNA } from "../lib/mistake-dna";

interface WeaknessRow {
  patternId: string;
  count: number;
  reason_tr: string;
  example_right: string;
  example_wrong?: string;
  weight: number;
}

export default function WeaknessReportScreen() {
  const router = useRouter();
  const [premium, setPremium] = useState<boolean | null>(null);
  const [rows, setRows] = useState<WeaknessRow[]>([]);
  const [focusLabel, setFocusLabel] = useState("");
  const [totalRecent, setTotalRecent] = useState(0);

  useEffect(() => {
    (async () => {
      const isP = await isPremium().catch(() => false);
      setPremium(isP);
      if (isP) {
        const dna = await getMistakeDNA(21).catch(() => null);
        const enriched = (dna?.items ?? []).map<WeaknessRow>((item) => ({
          patternId: item.pattern.id,
          count: item.recentCount,
          reason_tr: item.pattern.reason_tr,
          example_right: item.pattern.example_right,
          example_wrong: item.pattern.example_wrong,
          weight: item.pattern.weight,
        }));
        setFocusLabel(dna?.dominantLabelTr ?? "");
        setTotalRecent(dna?.totalRecent ?? 0);
        setRows(enriched);
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
          accessibilityRole="button"
          accessibilityLabel="Geri"
        >
          <Text style={styles.backText}>‹</Text>
        </Pressable>
        <Text style={styles.title}>Hata DNA’n</Text>
        <View style={styles.backBtn} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {!premium ? (
          <PaywallPreview onUpgrade={() => router.push("/paywall?from=weakness" as never)} />
        ) : rows.length === 0 ? (
          <NoDataYet onGo={() => router.replace("/today" as never)} />
        ) : (
          <Report
            rows={rows}
            focusLabel={focusLabel}
            totalRecent={totalRecent}
            onTrain={() => router.push("/mistake-coach" as never)}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function PaywallPreview({ onUpgrade }: { onUpgrade: () => void }) {
  return (
    <View>
      <View style={styles.lockHero}>
        <Text style={styles.lockEmoji}>📊</Text>
        <Text style={styles.lockTitle}>Hangi hatayı{"\n"}tekrar tekrar yapıyorsun?</Text>
      </View>

      <View style={styles.previewCard}>
        <Text style={styles.previewLabel}>ÖRNEK (PREMIUM)</Text>
        <PreviewWeakness
          rank={1}
          count={18}
          reason="Present perfect yerine past simple kullanıyorsun"
          example="'I lived here for 3 years' → 'I've lived here for 3 years'"
        />
        <PreviewWeakness
          rank={2}
          count={11}
          reason="'I am agree' yanlış — be verb yok"
          example="'I am agree' → 'I agree'"
        />
        <PreviewWeakness
          rank={3}
          count={9}
          reason="'According to me' Türkçe etkisi"
          example="'According to me' → 'In my opinion'"
        />
      </View>

      <View style={styles.benefitsCard}>
        <Text style={styles.benefitsTitle}>Lafla Pro ile açılan:</Text>
        <BenefitLine icon="📊" text="Top 5 zayıflığın — sıralı, sayılı" />
        <BenefitLine icon="🎯" text="Her hatanın doğru karşılığı" />
        <BenefitLine icon="📚" text="Drill önerisi — bu hatayı çözecek sahneler" />
        <BenefitLine icon="📈" text="Haftalık ilerleme — düzeliyor mu?" />
      </View>

      <Pressable
        onPress={onUpgrade}
        style={({ pressed }) => [styles.cta, pressed && { opacity: 0.88 }]}
        accessibilityRole="button"
        accessibilityLabel="Lafla Pro ile aç"
      >
        <Text style={styles.ctaText}>Lafla Pro ile aç — ₺99/ay</Text>
      </Pressable>
    </View>
  );
}

function NoDataYet({ onGo }: { onGo: () => void }) {
  return (
    <View style={styles.notReadyWrap}>
      <Text style={styles.notReadyEmoji}>✨</Text>
      <Text style={styles.notReadyTitle}>Henüz yakalanan hata yok</Text>
      <Text style={styles.notReadySub}>
        Birkaç sahne tamamladığında hatalar burada birikecek. Düzenli pratiğe
        devam et — rapor bir hafta sonra anlamlı olur.
      </Text>
      <Pressable
        onPress={onGo}
        style={({ pressed }) => [styles.cta, pressed && { opacity: 0.88 }]}
        accessibilityRole="button"
        accessibilityLabel="Bugüne git"
      >
        <Text style={styles.ctaText}>Bugüne git</Text>
      </Pressable>
    </View>
  );
}

function Report({
  rows,
  focusLabel,
  totalRecent,
  onTrain,
}: {
  rows: WeaknessRow[];
  focusLabel: string;
  totalRecent: number;
  onTrain: () => void;
}) {
  return (
    <View>
      <View style={styles.summaryCard}>
        <Text style={styles.summaryLabel}>SON 3 HAFTADAKİ HATA DNA’N</Text>
        <Text style={styles.summaryNum}>{totalRecent}</Text>
        <Text style={styles.summarySub}>
          Ana odağın: {focusLabel}. Bugün yalnızca bunu çalışacağız.
        </Text>
      </View>

      <Pressable
        onPress={onTrain}
        style={({ pressed }) => [styles.coachCta, pressed && { opacity: 0.88 }]}
        accessibilityRole="button"
        accessibilityLabel="Üç dakikalık kişisel çalışmayı başlat"
      >
        <Text style={styles.coachCtaEyebrow}>SANA ÖZEL · 3 DAKİKA</Text>
        <Text style={styles.coachCtaTitle}>Tek odaklı çalışmayı başlat →</Text>
      </Pressable>

      {rows.map((row, i) => (
        <View key={row.patternId} style={styles.weaknessCard}>
          <View style={styles.weaknessHeader}>
            <Text style={styles.weaknessRank}>#{i + 1}</Text>
            <View style={styles.weaknessCountBadge}>
              <Text style={styles.weaknessCountText}>{row.count}×</Text>
            </View>
          </View>
          <Text style={styles.weaknessReason}>{row.reason_tr}</Text>
          {row.example_wrong && (
            <Text style={styles.weaknessWrong}>✗ {row.example_wrong}</Text>
          )}
          <Text style={styles.weaknessRight}>✓ {row.example_right}</Text>
        </View>
      ))}

      <Text style={styles.disclaimer}>
        Bu rapor son 21 günlük verilere bakar. Hata azalırsa liste yenilenir —
        düzeldiğini buradan göreceksin.
      </Text>
    </View>
  );
}

function PreviewWeakness({
  rank,
  count,
  reason,
  example,
}: {
  rank: number;
  count: number;
  reason: string;
  example: string;
}) {
  return (
    <View style={styles.previewWeakness}>
      <Text style={styles.previewRank}>#{rank} · {count}×</Text>
      <Text style={styles.previewReason}>{reason}</Text>
      <Text style={styles.previewExample}>{example}</Text>
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
  title: { fontSize: 18, fontWeight: tokens.weight.black, color: tokens.text.primary, letterSpacing: -0.3, fontFamily: tokens.font.display },
  content: { paddingHorizontal: 20, paddingBottom: 32, gap: 14 },

  // PaywallPreview
  lockHero: { alignItems: "center", paddingVertical: 22, gap: 10 },
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
    padding: 16,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1.5,
    borderColor: tokens.brand.primary,
    opacity: 0.75,
    gap: 12,
  },
  previewLabel: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.primary,
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  previewWeakness: { gap: 3 },
  previewRank: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.primary,
    letterSpacing: 0.6,
  },
  previewReason: {
    fontSize: 13,
    color: tokens.text.primary,
    fontWeight: tokens.weight.semibold,
  },
  previewExample: {
    fontSize: 12,
    color: tokens.text.tertiary,
    fontStyle: "italic",
  },
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
  },
  ctaText: {
    fontSize: 16,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.onPrimary,
    letterSpacing: 0.4,
  },

  // NoDataYet
  notReadyWrap: { alignItems: "center", paddingVertical: 40, gap: 10 },
  notReadyEmoji: { fontSize: 48 },
  notReadyTitle: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  notReadySub: {
    fontSize: 14,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 20,
    paddingHorizontal: 24,
    marginBottom: 12,
  },

  // Report
  summaryCard: {
    padding: 24,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.semantic.errorContainer,
    borderWidth: 2,
    borderColor: tokens.semantic.error,
    alignItems: "center",
    gap: 4,
  },
  summaryLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.semantic.error,
    letterSpacing: 1.5,
  },
  summaryNum: {
    fontSize: 48,
    fontWeight: tokens.weight.black,
    color: tokens.semantic.error,
    fontFamily: tokens.font.display,
    letterSpacing: -2,
  },
  summarySub: {
    fontSize: 12,
    color: tokens.text.secondary,
    textAlign: "center",
    marginTop: 4,
    paddingHorizontal: 8,
  },
  weaknessCard: {
    padding: 14,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.bg.surfaceContainer,
    borderLeftWidth: 3,
    borderLeftColor: tokens.semantic.warning,
    gap: 6,
  },
  coachCta: {
    marginVertical: 14,
    padding: 18,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.brand.primary,
    gap: 4,
  },
  coachCtaEyebrow: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.onPrimary,
    letterSpacing: 1.2,
    opacity: 0.72,
  },
  coachCtaTitle: {
    fontSize: 17,
    fontWeight: tokens.weight.black,
    color: tokens.text.onPrimary,
  },
  weaknessHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  weaknessRank: {
    fontSize: 13,
    fontWeight: tokens.weight.black,
    color: tokens.text.secondary,
    fontFamily: tokens.font.display,
  },
  weaknessCountBadge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.semantic.errorContainer,
    borderWidth: 1,
    borderColor: tokens.semantic.error,
  },
  weaknessCountText: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.semantic.error,
  },
  weaknessReason: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    lineHeight: 19,
  },
  weaknessWrong: {
    fontSize: 12,
    color: tokens.semantic.error,
    fontStyle: "italic",
  },
  weaknessRight: {
    fontSize: 13,
    color: tokens.brand.tertiary,
    fontWeight: tokens.weight.bold,
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
