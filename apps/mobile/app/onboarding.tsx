// Onboarding — light bg, yellow-tinted selected cards, pill CTA at bottom.
// Mirrors Stitch's "Onboarding Cool" layout exactly.

import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { InterestCard } from "../components/InterestCard";
import { Button } from "../components/Button";
import { INTERESTS } from "../data/interests";
import { completeOnboarding } from "../lib/auth";
import { tokens } from "../theme";

export default function Onboarding() {
  const router = useRouter();
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [saving, setSaving] = useState(false);

  const toggle = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelected(next);
  };

  const canContinue = selected.size > 0 && !saving;

  const handleContinue = async () => {
    setSaving(true);
    try {
      await completeOnboarding(Array.from(selected));
    } catch (e) {
      console.warn("[Lafla] onboarding save failed:", e);
      // Continue anyway — user can still browse with local-only state.
    } finally {
      setSaving(false);
      router.replace("/feed");
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Hangi durumlar seni zorluyor?</Text>
        <Text style={styles.subtitle}>
          Sana en uygun içerikleri sunabilmemiz için birkaç konuyu seç.
        </Text>

        <View style={styles.list}>
          {INTERESTS.map((interest) => (
            <InterestCard
              key={interest.id}
              emoji={interest.emoji}
              label={interest.label}
              selected={selected.has(interest.id)}
              onPress={() => toggle(interest.id)}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          label={
            saving
              ? "Kaydediliyor..."
              : canContinue
              ? "Devam et →"
              : "En az birini seç"
          }
          onPress={handleContinue}
          disabled={!canContinue}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: tokens.bg.app,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: tokens.spacing.md,
    paddingTop: tokens.spacing.xl,
    paddingBottom: 120,
  },
  title: {
    fontSize: 32,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    letterSpacing: -0.4,
    marginBottom: tokens.spacing.xs,
    lineHeight: 38,
  },
  subtitle: {
    fontSize: 16,
    color: tokens.text.secondary,
    marginBottom: tokens.spacing.lg,
    lineHeight: 24,
  },
  list: {
    gap: tokens.spacing.sm,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: tokens.spacing.md,
    paddingTop: tokens.spacing.md,
    paddingBottom: 28,
    backgroundColor: "rgba(249, 249, 249, 0.95)",
  },
});
