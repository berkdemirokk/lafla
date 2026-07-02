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

function formatRelativeDate(iso: string): string {
  const t = new Date(iso).getTime();
  const now = Date.now();
  const diffHours = (now - t) / (3600 * 1000);
  if (diffHours < 1) return "az önce";
  if (diffHours < 24) return `${Math.floor(diffHours)} saat önce`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return `${diffDays} gün önce`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} hafta önce`;
  return `${Math.floor(diffDays / 30)} ay önce`;
}

const MODE_LABEL: Record<string, string> = {
  flirt: "Flört",
  work: "İş",
  bar: "Bar",
  airport: "Havaalanı",
  daily: "Günlük",
  order: "Sipariş",
  ielts: "IELTS",
};

export default function RelationshipsScreen() {
  const router = useRouter();
  const [relationships, setRelationships] = useState<NpcRelationship[]>([]);

  const load = useCallback(async () => {
    const all = await getAllRelationships().catch(
      () => [] as NpcRelationship[],
    );
    setRelationships(all);
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
          accessibilityLabel="Geri"
        >
          <Text style={styles.backText}>‹</Text>
        </Pressable>
        <Text style={styles.headerTitle}>İlişkilerim</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {relationships.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>👥</Text>
            <Text style={styles.emptyTitle}>Henüz tanıştığın kimse yok</Text>
            <Text style={styles.emptyText}>
              Sahneler tamamladıkça karşılaştığın NPC'ler burada birikecek.
              Aynı kişiyle tekrar konuşunca ilişki seviyesi yükselir —
              Tanıdık → Arkadaş → Yakın.
            </Text>
          </View>
        ) : (
          <>
            <Text style={styles.intro}>
              {relationships.length} kişiyle konuştun. Tekrar gördüğün NPC'ler
              seni hatırlar.
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
                      {info.labelTr}
                    </Text>
                    <Text style={styles.subtext}>
                      {rel.sceneCount} sahne · {formatRelativeDate(rel.lastInteraction)}
                    </Text>
                    {rel.modes.length > 0 && (
                      <Text style={styles.modesText}>
                        {rel.modes
                          .map((m) => MODE_LABEL[m] ?? m)
                          .join(" · ")}
                      </Text>
                    )}
                  </View>
                </View>
              );
            })}
          </>
        )}
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
