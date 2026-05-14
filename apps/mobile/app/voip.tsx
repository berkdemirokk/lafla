// VOIP Calls — listing screen.
//
// Surfaces the 10 simulated phone calls. Tap a card to push /voip/[id].
//
// To wire this into the root nav (apps/mobile/app/_layout.tsx), add:
//   <Stack.Screen name="voip" />
//   <Stack.Screen name="voip/[id]" />

import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { tokens } from "../theme";
import { VOIP_CALLS } from "../data/voip-calls";
import type { VoipAgent } from "../data/voip-calls";

const EMOJI: Record<VoipAgent, string> = {
  att_billing: "📱",
  irs_query: "🏛️",
  hospital_admin: "🏥",
  airline_rebook: "✈️",
  verizon_tech: "📡",
  uscis_status: "🛂",
  comcast_cancel: "📺",
  amex_dispute: "💳",
  consulate_appointment: "🛃",
  uber_complaint: "🚗",
};

const DIFFICULTY_COLOR: Record<string, string> = {
  A2: tokens.brand.tertiary,
  B1: tokens.semantic.success,
  B2: tokens.brand.primary,
  C1: tokens.semantic.error,
};

export default function VoipListScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backBtn}
          hitSlop={8}
        >
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.title}>Telefon Görüşmeleri</Text>
        <View style={styles.backBtn} />
      </View>

      <View style={styles.subtitleBox}>
        <Text style={styles.subtitle}>
          Stresli gerçek hayat telefon görüşmelerini güvenli ortamda dene.
          Sesli ya da yazılı cevap verebilirsin.
        </Text>
      </View>

      <ScrollView
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >
        {VOIP_CALLS.map((c) => (
          <Pressable
            key={c.id}
            style={({ pressed }) => [styles.card, pressed && styles.cardPress]}
            onPress={() => router.push(`/voip/${c.id}` as never)}
          >
            <View style={styles.cardLeft}>
              <Text style={styles.cardEmoji}>{EMOJI[c.agent]}</Text>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>{c.title_tr}</Text>
              <Text style={styles.cardAgent}>{c.agentName}</Text>
              <View style={styles.cardMetaRow}>
                <View
                  style={[
                    styles.diffChip,
                    {
                      backgroundColor:
                        DIFFICULTY_COLOR[c.difficulty] ?? tokens.brand.tertiary,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.diffChipText,
                      c.difficulty === "B2" && { color: tokens.text.onPrimary },
                    ]}
                  >
                    {c.difficulty}
                  </Text>
                </View>
                <Text style={styles.cardMin}>
                  {c.estimatedMin} dk · {c.nodes.length} adım
                </Text>
              </View>
            </View>
            <Text style={styles.cardArrow}>›</Text>
          </Pressable>
        ))}

        <Text style={styles.footer}>
          İpucu: Mikrofona tıkla, konuş, bitir. Anlamadığı zaman ajan tekrar
          sorabilir.
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
  subtitleBox: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: tokens.text.secondary,
    lineHeight: 20,
  },
  list: { flex: 1 },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 32,
    gap: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.light,
    borderRadius: tokens.radius.base,
    padding: 14,
    gap: 14,
  },
  cardPress: { opacity: 0.65 },
  cardLeft: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: tokens.brand.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  cardEmoji: { fontSize: 26 },
  cardBody: { flex: 1, gap: 2 },
  cardTitle: {
    fontSize: 16,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  cardAgent: {
    fontSize: 12,
    color: tokens.text.secondary,
    marginBottom: 4,
  },
  cardMetaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  diffChip: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: tokens.radius.sm,
  },
  diffChipText: {
    fontSize: 11,
    fontWeight: tokens.weight.black,
    color: tokens.text.onSecondary,
    letterSpacing: 0.5,
  },
  cardMin: {
    fontSize: 12,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.semibold,
  },
  cardArrow: {
    fontSize: 28,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.regular,
  },
  footer: {
    marginTop: 16,
    fontSize: 12,
    color: tokens.text.tertiary,
    lineHeight: 18,
    textAlign: "center",
    paddingHorizontal: 8,
  },
});
