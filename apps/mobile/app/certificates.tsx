// Lafla — Certificates gallery.
//
// 2026-05-21 — CEFR seviye atlamasında "ödül" hissi. cefr-level.ts
// onLevelAdvanced() certificate mint eder, kullanıcı buradan görür.
// Galeri tarzında: 6 slot (A1-C2), kazanılanlar dolu, diğerleri silik.
//
// Tek tıklayışta share card opsiyonu — sosyal medyada paylaşılır.

import { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import { ThemedStatusBar } from "../components/ThemedStatusBar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { tokens } from "../theme";
import {
  getCertificates,
  type Certificate,
} from "../lib/certificate";
import type { CefrLevel } from "../lib/cefr-level";
import { useTranslation, type Locale } from "../lib/i18n";
import { AsyncScreenState, type AsyncScreenStatus } from "../components/AsyncScreenState";

const ALL_LEVELS: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

export default function CertificatesScreen() {
  const router = useRouter();
  const { t, locale } = useTranslation();
  const [certs, setCerts] = useState<Certificate[]>([]);
  const [status, setStatus] = useState<AsyncScreenStatus>("loading");

  const load = useCallback(async () => {
    setStatus("loading");
    try {
      const c = await getCertificates();
      setCerts(c);
      setStatus("ready");
    } catch {
      setStatus("error");
    }
  }, []);

  useEffect(() => { void load(); }, [load]);

  const earnedMap = new Map(certs.map((c) => [c.level, c]));

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <ThemedStatusBar />

      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backBtn}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel={t("common.back")}
        >
          <Text style={styles.backText}>‹</Text>
        </Pressable>
        <Text style={styles.title}>{t("certificates.title")}</Text>
        <View style={styles.backBtn} />
      </View>

      {status !== "ready" ? (
        <AsyncScreenState status={status} onRetry={() => void load()} />
      ) : <>
      <View style={styles.summaryBar}>
        <Text style={styles.summaryText}>
          {t("certificates.summary", { earned: String(certs.length), total: String(ALL_LEVELS.length) })}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.grid}>
        {ALL_LEVELS.map((level) => {
          const cert = earnedMap.get(level);
          const earned = !!cert;
          return (
            <View
              key={level}
              style={[
                styles.card,
                earned ? styles.cardEarned : styles.cardLocked,
              ]}
            >
              <Text
                style={[
                  styles.cardLevel,
                  earned ? styles.levelEarned : styles.levelLocked,
                ]}
              >
                {level}
              </Text>
              <Text
                style={[
                  styles.cardLabel,
                  earned ? styles.labelEarned : styles.labelLocked,
                ]}
              >
                {t(`certificates.level.${level}`)}
              </Text>
              {earned ? (
                <Text style={styles.cardDate}>
                  {formatDate(cert.awardedAt, locale)}
                </Text>
              ) : (
                <Text style={styles.cardLock}>🔒</Text>
              )}
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {t("certificates.footer")}
        </Text>
      </View>
      </>}
    </SafeAreaView>
  );
}

function formatDate(iso: string, locale: Locale): string {
  const d = new Date(iso);
  return d.toLocaleDateString(locale === "tr" ? "tr-TR" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
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
  backText: {
    fontSize: 32,
    color: tokens.text.primary,
    fontWeight: tokens.weight.bold,
    marginTop: -4,
  },
  title: {
    fontSize: 18,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -0.3,
    fontFamily: tokens.font.display,
  },

  summaryBar: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: tokens.border.light,
    backgroundColor: tokens.bg.surfaceContainerLow,
  },
  summaryText: {
    fontSize: 14,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.secondary,
    textAlign: "center",
    letterSpacing: 0.2,
  },

  grid: {
    paddingHorizontal: 16,
    paddingVertical: 18,
    gap: 12,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    width: "47%",
    aspectRatio: 0.9,
    padding: 20,
    borderRadius: tokens.radius.lg,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  cardEarned: {
    borderColor: tokens.brand.primary,
    backgroundColor: tokens.brand.primarySoft,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.45,
    shadowRadius: 16,
    elevation: 6,
  },
  cardLocked: {
    borderColor: tokens.border.light,
    backgroundColor: tokens.bg.surfaceContainer,
    opacity: 0.55,
  },
  cardLevel: {
    fontSize: 48,
    fontWeight: tokens.weight.black,
    fontFamily: tokens.font.display,
    letterSpacing: -2,
  },
  levelEarned: { color: tokens.brand.primary },
  levelLocked: { color: tokens.text.tertiary },
  cardLabel: {
    fontSize: 13,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 0.5,
  },
  labelEarned: { color: tokens.text.primary },
  labelLocked: { color: tokens.text.tertiary },
  cardDate: {
    fontSize: 11,
    color: tokens.text.secondary,
    letterSpacing: 0.2,
  },
  cardLock: { fontSize: 22, opacity: 0.5 },

  footer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
  },
  footerText: {
    fontSize: 12,
    color: tokens.text.tertiary,
    textAlign: "center",
    lineHeight: 17,
  },
});
