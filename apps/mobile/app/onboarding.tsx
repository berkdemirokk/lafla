// Onboarding — interest multi-select (no mode picker)
// User picks N interests; the feed algorithm uses them to weight content.

import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { InterestCard } from "../components/InterestCard";
import { Button } from "../components/Button";
import { INTERESTS } from "../data/interests";
import { tokens } from "../theme";

export default function Onboarding() {
  const router = useRouter();
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelected(next);
  };

  const canContinue = selected.size > 0;

  const onContinue = () => {
    // TODO: persist selections (AsyncStorage / Supabase user profile)
    router.replace("/feed");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Hangi durumlar seni zorluyor?</Text>
        <Text style={styles.subtitle}>
          Birden çok seçebilirsin. Akış sana göre şekillenir — "mod" seçmek yok.
        </Text>

        {INTERESTS.map((interest) => (
          <InterestCard
            key={interest.id}
            emoji={interest.emoji}
            label={interest.label}
            selected={selected.has(interest.id)}
            onPress={() => toggle(interest.id)}
          />
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <Button
          label={canContinue ? "Devam et" : "En az birini seç"}
          onPress={onContinue}
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
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.5,
    marginBottom: 8,
    lineHeight: 34,
  },
  subtitle: {
    fontSize: 14,
    color: tokens.text.secondary,
    marginBottom: 28,
    lineHeight: 20,
  },
  footer: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 16,
    backgroundColor: tokens.bg.app,
    borderTopWidth: 1,
    borderTopColor: tokens.border.default,
  },
});
