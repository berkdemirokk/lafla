// Lafla — Certificate gallery screen ("Sertifikalarım").
//
// Lists every CEFR proficiency certificate the user has earned. Tap a card to
// drill into the full preview + share/PDF/LinkedIn actions on /certificate/[id].
//
// Empty state nudges the user to keep practicing — the certificate is the
// extrinsic anchor at the end of each CEFR band climb.
//
// NOTE: route this from settings.tsx and profile.tsx via a "Sertifikalarım" row
//   <Pressable onPress={() => router.push("/certificate")}>...
// (Not modified here per scope of this change.)

import { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  RefreshControl,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter, useFocusEffect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { tokens } from "../theme";
import {
  getEarnedCertificates,
  formatAwardedDate,
  LEVEL_LABELS_TR,
  type CertificateData,
} from "../lib/certificate";

export default function CertificateListScreen() {
  const router = useRouter();
  const [certs, setCerts] = useState<CertificateData[] | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    const list = await getEarnedCertificates();
    setCerts(list);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  // Re-fetch when the screen comes back into focus (e.g. after a fresh award
  // triggered by onLevelAdvanced elsewhere in the app).
  useFocusEffect(
    useCallback(() => {
      void load();
    }, [load]),
  );

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await load();
    setRefreshing(false);
  }, [load]);

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backBtn}
          hitSlop={12}
        >
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.title}>Sertifikalarım</Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text style={styles.subtitle}>
          CEFR seviyene ulaştığında Maya seni sertifikalandırır.
        </Text>
        <Text style={styles.subtitleEn}>
          LinkedIn'de paylaşılmaya hazır — PDF + görsel olarak indirebilirsin.
        </Text>

        {certs === null ? (
          <View style={styles.loadingBox}>
            <Text style={styles.muted}>Yükleniyor…</Text>
          </View>
        ) : certs.length === 0 ? (
          <EmptyState onStart={() => router.push("/feed" as never)} />
        ) : (
          <View style={styles.list}>
            {certs.map((c) => (
              <CertCard
                key={c.id}
                cert={c}
                onPress={() => router.push(`/certificate/${c.id}` as never)}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Card
// ---------------------------------------------------------------------------

function CertCard({
  cert,
  onPress,
}: {
  cert: CertificateData;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.cardBadge}>
        <Text style={styles.cardBadgeText}>{cert.level}</Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardLevel}>{LEVEL_LABELS_TR[cert.level]}</Text>
        <Text style={styles.cardRecipient}>{cert.recipientName}</Text>
        <Text style={styles.cardMeta}>
          {formatAwardedDate(cert.awardedAt)} · {cert.serialNumber}
        </Text>
      </View>
      <Text style={styles.cardChevron}>›</Text>
    </Pressable>
  );
}

// ---------------------------------------------------------------------------
// Empty state
// ---------------------------------------------------------------------------

function EmptyState({ onStart }: { onStart: () => void }) {
  return (
    <View style={styles.empty}>
      <View style={styles.emptyIcon}>
        <Text style={styles.emptyIconText}>A1–C2</Text>
      </View>
      <Text style={styles.emptyTitle}>Henüz sertifika kazanmadın.</Text>
      <Text style={styles.emptyBody}>
        CEFR seviyene ulaşmak için pratiğe devam. Bir sahne bitirdiğinde,
        bir koç seansı tamamladığında, ve seviyen ilerlediğinde Maya seni
        otomatik olarak sertifikalandırır.
      </Text>
      <Pressable onPress={onStart} style={styles.emptyCta}>
        <Text style={styles.emptyCtaText}>Pratiğe Başla</Text>
      </Pressable>
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
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  subtitle: {
    fontSize: 15,
    color: tokens.text.primary,
    marginTop: 4,
  },
  subtitleEn: {
    fontSize: 13,
    color: tokens.text.secondary,
    marginTop: 4,
    marginBottom: 24,
  },
  loadingBox: {
    paddingVertical: 60,
    alignItems: "center",
  },
  muted: {
    color: tokens.text.tertiary,
    fontSize: 14,
  },
  list: {
    gap: 12,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: 16,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  cardPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
  cardBadge: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: tokens.brand.primary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  cardBadgeText: {
    fontSize: 18,
    fontWeight: tokens.weight.black,
    color: tokens.text.onPrimary,
    letterSpacing: 0.5,
  },
  cardBody: { flex: 1 },
  cardLevel: {
    fontSize: 15,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  cardRecipient: {
    fontSize: 14,
    color: tokens.text.secondary,
    marginTop: 2,
  },
  cardMeta: {
    fontSize: 11,
    color: tokens.text.tertiary,
    marginTop: 4,
  },
  cardChevron: {
    fontSize: 24,
    color: tokens.text.tertiary,
    marginLeft: 8,
  },
  empty: {
    alignItems: "center",
    paddingTop: 48,
    paddingHorizontal: 8,
  },
  emptyIcon: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 2,
    borderColor: tokens.brand.secondary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  emptyIconText: {
    fontSize: 16,
    fontWeight: tokens.weight.black,
    color: tokens.brand.secondary,
    letterSpacing: 0.5,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    textAlign: "center",
  },
  emptyBody: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 20,
    color: tokens.text.secondary,
    textAlign: "center",
    paddingHorizontal: 8,
  },
  emptyCta: {
    marginTop: 24,
    backgroundColor: tokens.brand.primary,
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: tokens.radius.full,
  },
  emptyCtaText: {
    fontSize: 15,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.onPrimary,
    letterSpacing: 0.3,
  },
});
