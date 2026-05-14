// First-time tutorial — 4-slide swipe intro. Shown once before onboarding.

import { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  useWindowDimensions,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "../components/Button";
import { tokens } from "../theme";

interface Slide {
  emoji: string;
  title: string;
  body: string;
  bg: string;
}

const SLIDES: Slide[] = [
  {
    emoji: "🗣️",
    title: "Bağlam temelli İngilizce",
    body: "Tinder'da flört, Slack'te toplantı, kafede sipariş. Hayatın senaryolarıyla konuşma pratiği yap.",
    bg: tokens.bg.surfaceContainer,
  },
  {
    emoji: "🎯",
    title: "Senin için kişisel",
    body: "Geliştirmek istediğin alanları seç, akış sana göre düzenlenir. Bildiklerini tekrarlamazsın.",
    bg: tokens.bg.surfaceContainer,
  },
  {
    emoji: "🔊",
    title: "Native ses ve rol oyunu",
    body: "Her İngilizce ifadeyi dinle, sohbetlerde cevap ver. Konuşma kasını geliştir.",
    bg: tokens.bg.surfaceContainer,
  },
  {
    emoji: "📈",
    title: "Günde 5 dakika yeter",
    body: "Aktif günlerini sürdür, ilerlemeni izle, ustalaş. Konuş, çalış.",
    bg: tokens.bg.surfaceContainer,
  },
];

export default function Tutorial() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [idx, setIdx] = useState(0);
  const listRef = useRef<FlatList<Slide>>(null);

  const next = async () => {
    if (idx + 1 >= SLIDES.length) {
      await AsyncStorage.setItem("lafla.tutorial.done", "true").catch(() => {});
      router.replace("/onboarding");
      return;
    }
    listRef.current?.scrollToIndex({ index: idx + 1, animated: true });
  };

  const skip = async () => {
    await AsyncStorage.setItem("lafla.tutorial.done", "true").catch(() => {});
    router.replace("/onboarding");
  };

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const newIdx = Math.round(e.nativeEvent.contentOffset.x / width);
    if (newIdx !== idx) setIdx(newIdx);
  };

  const isLast = idx + 1 >= SLIDES.length;

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />

      <View style={styles.topRow}>
        <View style={styles.spacer} />
        <Pressable onPress={skip} style={styles.skipBtn}>
          <Text style={styles.skipText}>Atla</Text>
        </Pressable>
      </View>

      <FlatList
        ref={listRef}
        data={SLIDES}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => `slide-${i}`}
        onMomentumScrollEnd={onScroll}
        renderItem={({ item }) => (
          <View style={[styles.slide, { width, backgroundColor: item.bg }]}>
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
          </View>
        )}
      />

      <View style={styles.dotsRow}>
        {SLIDES.map((_, i) => (
          <View
            key={i}
            style={[styles.dot, i === idx && styles.dotActive]}
          />
        ))}
      </View>

      <View style={styles.footer}>
        <Button label={isLast ? "Başla" : "Devam"} onPress={next} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 8,
    height: 44,
  },
  spacer: { flex: 1 },
  skipBtn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  skipText: {
    color: tokens.text.secondary,
    fontSize: 15,
    fontWeight: tokens.weight.medium,
  },
  slide: {
    paddingHorizontal: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    fontSize: 104,
    marginBottom: 36,
  },
  title: {
    fontSize: 30,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.6,
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 36,
  },
  body: {
    fontSize: 17,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 26,
    paddingHorizontal: 8,
  },
  dotsRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: tokens.border.outlineVariant,
  },
  dotActive: {
    backgroundColor: tokens.brand.primary,
    width: 24,
  },
  footer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
});
