import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { ThemedStatusBar } from "../components/ThemedStatusBar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { SpeakerButton } from "../components/SpeakerButton";
import { trackEvent } from "../lib/analytics";
import type { AccentId } from "../lib/accent";
import { tokens } from "../theme";

const ACCENTS: Array<{ id: AccentId; label: string; region: string }> = [
  { id: "american", label: "Amerikan", region: "ABD" },
  { id: "british", label: "İngiliz", region: "Birleşik Krallık" },
  { id: "indian", label: "Hint", region: "Hindistan" },
  { id: "irish", label: "İrlanda", region: "İrlanda" },
  { id: "international", label: "Uluslararası", region: "İş İngilizcesi" },
];

const PHRASES = [
  "Could you walk me through the next steps?",
  "I just wanted to follow up on yesterday's meeting.",
  "Would it be possible to move the deadline?",
  "Let me make sure I understood you correctly.",
  "I'll send a short summary after the call.",
];

export default function AccentLabScreen() {
  const router = useRouter();
  const [accent, setAccent] = useState<AccentId>("american");
  const active = ACCENTS.find((item) => item.id === accent)!;

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <ThemedStatusBar />
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.back}
          accessibilityRole="button"
          accessibilityLabel="Geri"
        >
          <Text style={styles.backText}>‹</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Aksan Laboratuvarı</Text>
        <View style={styles.back} />
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>GERÇEK DÜNYA DİNLEMESİ</Text>
        <Text style={styles.title}>Aynı İngilizce, farklı kulak.</Text>
        <Text style={styles.subtitle}>
          İş görüşmesinde yalnızca Amerikan aksanı duymayacaksın. Aynı cümleyi
          beş farklı konuşma ortamında dinle.
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.accentRow}
        >
          {ACCENTS.map((item) => {
            const selected = item.id === accent;
            return (
              <Pressable
                key={item.id}
                onPress={() => {
                  setAccent(item.id);
                  void trackEvent("accent_lab_selected", {
                    accent: item.id,
                  }).catch(() => {});
                }}
                style={[styles.accentCard, selected && styles.accentCardActive]}
                accessibilityRole="button"
                accessibilityState={{ selected }}
                accessibilityLabel={`${item.label} aksanı`}
              >
                <Text style={[styles.accentName, selected && styles.accentNameActive]}>
                  {item.label}
                </Text>
                <Text style={styles.accentRegion}>{item.region}</Text>
              </Pressable>
            );
          })}
        </ScrollView>

        <View style={styles.activeRow}>
          <Text style={styles.activeLabel}>SEÇİLİ AKSAN</Text>
          <Text style={styles.activeName}>{active.label}</Text>
        </View>

        <View style={styles.phraseList}>
          {PHRASES.map((phrase, index) => (
            <View key={phrase} style={styles.phraseCard}>
              <Text style={styles.phraseIndex}>{String(index + 1).padStart(2, "0")}</Text>
              <Text style={styles.phraseText}>{phrase}</Text>
              <SpeakerButton text={phrase} accent={accent} size="md" />
            </View>
          ))}
        </View>

        <Text style={styles.note}>
          Ses kalitesi cihazındaki yüklü sistem seslerine bağlıdır. Bir bölgesel
          ses yüklü değilse iOS en yakın İngilizce sesi kullanabilir.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 16, paddingVertical: 8 },
  back: { width: 44, height: 44, alignItems: "center", justifyContent: "center" },
  backText: { color: tokens.text.primary, fontSize: 34, marginTop: -4 },
  headerTitle: { color: tokens.text.primary, fontSize: 18, fontWeight: tokens.weight.black },
  content: { paddingHorizontal: 20, paddingBottom: 44 },
  eyebrow: { color: tokens.brand.tertiary, fontSize: 10, fontWeight: tokens.weight.extrabold, letterSpacing: 1.4, marginTop: 8, marginBottom: 7 },
  title: { color: tokens.text.primary, fontSize: 29, lineHeight: 35, fontWeight: tokens.weight.black, fontFamily: tokens.font.display },
  subtitle: { color: tokens.text.secondary, fontSize: 14, lineHeight: 21, marginTop: 8, marginBottom: 18 },
  accentRow: { gap: 10, paddingRight: 20 },
  accentCard: { minWidth: 126, padding: 14, borderRadius: tokens.radius.lg, backgroundColor: tokens.bg.surfaceContainer, borderWidth: 1, borderColor: tokens.border.outlineVariant, gap: 3 },
  accentCardActive: { borderColor: tokens.brand.primary, backgroundColor: tokens.brand.primarySoft },
  accentName: { color: tokens.text.primary, fontSize: 15, fontWeight: tokens.weight.extrabold },
  accentNameActive: { color: tokens.brand.primary },
  accentRegion: { color: tokens.text.tertiary, fontSize: 11 },
  activeRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 24, marginBottom: 10 },
  activeLabel: { color: tokens.text.tertiary, fontSize: 10, fontWeight: tokens.weight.extrabold, letterSpacing: 1.2 },
  activeName: { color: tokens.brand.primary, fontSize: 12, fontWeight: tokens.weight.bold },
  phraseList: { gap: 10 },
  phraseCard: { flexDirection: "row", alignItems: "center", gap: 12, padding: 14, borderRadius: tokens.radius.lg, backgroundColor: tokens.bg.surfaceContainer, borderWidth: 1, borderColor: tokens.border.light },
  phraseIndex: { color: tokens.text.tertiary, fontSize: 10, fontWeight: tokens.weight.extrabold },
  phraseText: { flex: 1, color: tokens.text.primary, fontSize: 14, lineHeight: 20, fontWeight: tokens.weight.semibold },
  note: { color: tokens.text.tertiary, fontSize: 11, lineHeight: 16, marginTop: 18, textAlign: "center" },
});
