import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { ThemedStatusBar } from "../components/ThemedStatusBar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { SpeakerButton } from "../components/SpeakerButton";
import {
  comparisonDaysApart,
  getProgressComparisons,
  type ProgressComparison,
} from "../lib/progress-comparison";
import { tokens } from "../theme";

export default function ProgressCompareScreen() {
  const router = useRouter();
  const [items, setItems] = useState<ProgressComparison[]>([]);

  useEffect(() => {
    void getProgressComparisons().then(setItems).catch(() => setItems([]));
  }, []);

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
        <Text style={styles.headerTitle}>Önce · Sonra</Text>
        <View style={styles.back} />
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Gelişimini duy.</Text>
        <Text style={styles.subtitle}>
          İlk cevabın, koç versiyonu ve sonraki denemen yan yana.
        </Text>
        {items.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.emptyTitle}>Henüz karşılaştırma yok</Text>
            <Text style={styles.emptyText}>
              Aynı sahneyi ikinci kez yaptığında üçüncü kart da açılır.
            </Text>
          </View>
        ) : (
          items.map((item) => (
            <ComparisonCard key={item.scenarioId} item={item} />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function ComparisonCard({ item }: { item: ProgressComparison }) {
  const repeat = item.repeats[0];
  const days = comparisonDaysApart(item);
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.scenarioTitle}</Text>
      <AudioLine label="İLK CEVABIN" text={item.first.text} />
      <View style={styles.connector} />
      <AudioLine label="KOÇ VERSİYONU" text={item.coachedText} coached />
      <View style={styles.connector} />
      {repeat ? (
        <AudioLine
          label={days !== null && days >= 6 ? `${days} GÜN SONRA` : "SONRAKİ DENEMEN"}
          text={repeat.text}
        />
      ) : (
        <View style={styles.lockedLine}>
          <Text style={styles.lockedLabel}>BİR HAFTA SONRA</Text>
          <Text style={styles.lockedText}>Aynı sahneyi tekrar et; farkı burada gör.</Text>
        </View>
      )}
    </View>
  );
}

function AudioLine({
  label,
  text,
  coached = false,
}: {
  label: string;
  text: string;
  coached?: boolean;
}) {
  return (
    <View style={[styles.audioLine, coached && styles.audioLineCoached]}>
      <View style={styles.audioText}>
        <Text style={[styles.audioLabel, coached && styles.audioLabelCoached]}>
          {label}
        </Text>
        <Text style={styles.audioSentence}>{text}</Text>
      </View>
      <SpeakerButton text={text} size="sm" />
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 16, paddingVertical: 8 },
  back: { width: 44, height: 44, alignItems: "center", justifyContent: "center" },
  backText: { color: tokens.text.primary, fontSize: 34, marginTop: -4 },
  headerTitle: { color: tokens.text.primary, fontSize: 18, fontWeight: tokens.weight.black },
  content: { padding: 20, paddingBottom: 44, gap: 16 },
  title: { color: tokens.text.primary, fontSize: 30, fontWeight: tokens.weight.black, fontFamily: tokens.font.display },
  subtitle: { color: tokens.text.secondary, fontSize: 14, lineHeight: 20, marginBottom: 4 },
  card: { padding: 16, borderRadius: tokens.radius.lg, backgroundColor: tokens.bg.surfaceContainer, borderWidth: 1, borderColor: tokens.border.outlineVariant },
  cardTitle: { color: tokens.text.primary, fontSize: 16, fontWeight: tokens.weight.extrabold, marginBottom: 14 },
  audioLine: { flexDirection: "row", alignItems: "center", padding: 12, borderRadius: tokens.radius.base, backgroundColor: tokens.bg.surfaceContainerHigh, gap: 10 },
  audioLineCoached: { borderWidth: 1, borderColor: tokens.brand.tertiary, backgroundColor: tokens.brand.tertiarySoft },
  audioText: { flex: 1, gap: 4 },
  audioLabel: { color: tokens.text.tertiary, fontSize: 9, fontWeight: tokens.weight.extrabold, letterSpacing: 1.1 },
  audioLabelCoached: { color: tokens.brand.tertiary },
  audioSentence: { color: tokens.text.primary, fontSize: 14, lineHeight: 20 },
  connector: { width: 1, height: 10, backgroundColor: tokens.border.outlineVariant, marginLeft: 28 },
  lockedLine: { padding: 12, borderRadius: tokens.radius.base, borderWidth: 1, borderStyle: "dashed", borderColor: tokens.border.outlineVariant, gap: 4 },
  lockedLabel: { color: tokens.text.tertiary, fontSize: 9, fontWeight: tokens.weight.extrabold, letterSpacing: 1.1 },
  lockedText: { color: tokens.text.secondary, fontSize: 13 },
  empty: { marginTop: 24, padding: 24, alignItems: "center", borderRadius: tokens.radius.lg, backgroundColor: tokens.bg.surfaceContainer, gap: 8 },
  emptyTitle: { color: tokens.text.primary, fontSize: 18, fontWeight: tokens.weight.extrabold },
  emptyText: { color: tokens.text.secondary, fontSize: 13, lineHeight: 19, textAlign: "center" },
});
