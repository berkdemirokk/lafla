// Lafla — NPC İlişkileri ekran.
//
// 2026-05-23 — Engagement #6 UI. Kullanıcının tanıştığı NPC'ler timeline'ı.
// Brand: Day One + LinkedIn hibrit, minimal yetişkin.
//
// Liste:
//   • Yeni → eski (son etkileşim sırası)
//   • Her satır: avatar emoji + name + tier label + sahne sayısı + son tarih
//   • Tap → şu an için sadece avatar genişlemesi (V2'de NPC profile sayfası)

import { useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { ThemedStatusBar } from "../components/ThemedStatusBar";
import { useFocusEffect, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { tokens } from "../theme";
import { trackEvent } from "../lib/analytics";
import {
  getAllRelationships,
  tierFor,
  type NpcRelationship,
  type RelationshipTier,
} from "../lib/npc-relationships";
import { useTranslation, type Locale } from "../lib/i18n";
import { AsyncScreenState, type AsyncScreenStatus } from "../components/AsyncScreenState";

// Tier → görsel hint. Pembe accent yakına ayrıldı (en derin ilişki),
// cyan arkadaşa (mid), nötr tanıdığa (yüzeysel).
const TIER_COLOR: Record<RelationshipTier, string> = {
  close: tokens.brand.primary,
  friend: tokens.brand.tertiary,
  acquaintance: tokens.text.tertiary,
};

const TIER_SOFT: Record<RelationshipTier, string> = {
  close: tokens.brand.primarySoft,
  friend: tokens.brand.tertiarySoft,
  acquaintance: tokens.bg.surfaceContainerLow,
};

// Tier emojisi (text label'a yardımcı). Subtle, çocuksu değil.
const TIER_DOT: Record<RelationshipTier, string> = {
  close: "●●●",
  friend: "●●○",
  acquaintance: "●○○",
};

function avatarEmojiFor(name: string): string {
  // Çok basit emoji haritalama. "Dr." varsa stetoskop, "Coach" varsa
  // halter, default ikili kafa. Brand'a uygun minimal.
  if (/^dr\./i.test(name)) return "🩺";
  if (/^coach/i.test(name)) return "🏋️";
  if (/^ms\.|^mr\.|^prof/i.test(name)) return "📚";
  return "👤";
}

function formatRelativeDate(iso: string, locale: Locale): string {
  const timestamp = new Date(iso).getTime();
  const now = Date.now();
  const formatter = new Intl.RelativeTimeFormat(locale === "tr" ? "tr-TR" : "en-US", { numeric: "auto" });
  const diffHours = (now - timestamp) / (3600 * 1000);
  if (diffHours < 1) return formatter.format(0, "hour");
  if (diffHours < 24) return formatter.format(-Math.floor(diffHours), "hour");
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return formatter.format(-diffDays, "day");
  if (diffDays < 30) return formatter.format(-Math.floor(diffDays / 7), "week");
  return formatter.format(-Math.floor(diffDays / 30), "month");
}

export default function RelationshipsScreen() {
  const router = useRouter();
  const { t, locale } = useTranslation();
  const [relationships, setRelationships] = useState<NpcRelationship[]>([]);
  const [status, setStatus] = useState<AsyncScreenStatus>("loading");

  const load = useCallback(async () => {
    setStatus("loading");
    try {
      setRelationships(await getAllRelationships());
      setStatus("ready");
    } catch {
      setStatus("error");
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      void load();
      void trackEvent("relationships_opened").catch(() => {});
    }, [load]),
  );

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <ThemedStatusBar />

      {/* Header */}
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
        <Text style={styles.headerTitle}>{t("relationships.title")}</Text>
        <View style={{ width: 40 }} />
      </View>

      {status !== "ready" ? (
        <AsyncScreenState status={status} onRetry={() => void load()} />
      ) : <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {relationships.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>👥</Text>
            <Text style={styles.emptyTitle}>{t("relationships.empty_title")}</Text>
            <Text style={styles.emptyText}>{t("relationships.empty_body")}</Text>
          </View>
        ) : (
          <>
            <Text style={styles.intro}>
              {t("relationships.intro", { count: String(relationships.length) })}
            </Text>
            {relationships.map((rel) => {
              const info = tierFor(rel.sceneCount);
              const accent = TIER_COLOR[info.tier];
              const bg = TIER_SOFT[info.tier];
              return (
                <View key={rel.id} style={styles.card}>
                  <View
                    style={[styles.avatarCircle, { backgroundColor: bg }]}
                  >
                    <Text style={styles.avatarEmoji}>
                      {avatarEmojiFor(rel.name)}
                    </Text>
                  </View>
                  <View style={styles.cardBody}>
                    <View style={styles.nameRow}>
                      <Text style={styles.name}>{rel.name}</Text>
                      <Text style={[styles.tierDot, { color: accent }]}>
                        {TIER_DOT[info.tier]}
                      </Text>
                    </View>
                    <Text style={[styles.tierLabel, { color: accent }]}>
                      {t(`relationships.tier.${info.tier}`)}
                    </Text>
                    <Text style={styles.subtext}>
                      {t("relationships.scene_count", { count: String(rel.sceneCount) })} · {formatRelativeDate(rel.lastInteraction, locale)}
                    </Text>
                    {rel.modes.length > 0 && (
                      <Text style={styles.modesText}>
                        {rel.modes
                          .map((m) => t(`mode.${m}`))
                          .join(" · ")}
                      </Text>
                    )}
                  </View>
                </View>
              );
            })}
          </>
        )}
      </ScrollView>}
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
    paddingTop: 4,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: tokens.border.light,
  },
  backBtn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  backText: {
    fontSize: 30,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    lineHeight: 34,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.3,
    fontFamily: tokens.font.display,
  },

  scroll: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 36,
    gap: 12,
  },

  intro: {
    fontSize: 13,
    color: tokens.text.secondary,
    lineHeight: 19,
    paddingHorizontal: 4,
    marginBottom: 8,
  },

  card: {
    flexDirection: "row",
    gap: 14,
    padding: 14,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    alignItems: "center",
    // Premium polish — floating depth shadow (Apple Music card feel)
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.28,
    shadowRadius: 12,
    elevation: 4,
  },
  avatarCircle: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarEmoji: {
    fontSize: 26,
  },
  cardBody: {
    flex: 1,
    gap: 1,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 17,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.3,
    fontFamily: tokens.font.display,
  },
  tierDot: {
    fontSize: 11,
    letterSpacing: 2,
  },
  tierLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 1.3,
    marginTop: 2,
  },
  subtext: {
    fontSize: 12,
    color: tokens.text.tertiary,
    marginTop: 2,
  },
  modesText: {
    fontSize: 11,
    color: tokens.text.tertiary,
    marginTop: 1,
    letterSpacing: 0.2,
  },

  emptyState: {
    paddingVertical: 60,
    paddingHorizontal: 28,
    alignItems: "center",
    gap: 12,
  },
  emptyEmoji: {
    fontSize: 56,
    marginBottom: 8,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.3,
    fontFamily: tokens.font.display,
    textAlign: "center",
  },
  emptyText: {
    fontSize: 14,
    lineHeight: 20,
    color: tokens.text.secondary,
    textAlign: "center",
  },
});
