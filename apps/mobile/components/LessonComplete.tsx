// Lesson Complete — Cyber-Electric Modern
// Dark bg, mixed-accent stats grid (yellow + blue), 3D yellow CTA.

import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "./Button";
import { tokens } from "../theme";
import { getCurrentProfile } from "../lib/auth";
import { getLocalProfile } from "../lib/local-progress";
import type { LessonProgress } from "../lib/engine";

interface Props {
  progress: LessonProgress;
  onContinue: () => void;
  hasNext?: boolean;
}

export function LessonComplete({ progress, onContinue, hasNext }: Props) {
  const correctCount = progress.results.filter((r) => r.correct).length;
  const total = progress.results.length;
  const [streak, setStreak] = useState<number | null>(null);

  useEffect(() => {
    (async () => {
      const local = await getLocalProfile();
      setStreak(local.current_streak ?? 0);
      // Override with cloud if signed in
      const cloud = await getCurrentProfile().catch(() => null);
      if (cloud?.current_streak != null) setStreak(cloud.current_streak);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.content}>
        <Text style={styles.title}>Tamamlandı</Text>
        <Text style={styles.subtitle}>Oturum özeti</Text>

        <View style={styles.statsGrid}>
          <StatCard
            value={`${progress.total_score}`}
            unit="/100"
            label="Doğruluk"
            accent="yellow"
          />
          <StatCard
            value={`${correctCount}`}
            unit={`/${total}`}
            label="Soru"
            accent="blue"
          />
          <StatCard
            value={`${progress.xp_earned}`}
            unit="dk"
            unitColored
            label="Pratik"
            accent="yellow"
          />
          <StatCard
            value={`${streak ?? "—"}`}
            unit="gün"
            label="Aktif"
            accent="blue"
          />
        </View>
      </View>

      <View style={styles.footer}>
        <Button
          label={hasNext ? "Sonraki ders" : "Akışa dön"}
          onPress={onContinue}
          stacked
        />
      </View>
    </View>
  );
}

function StatCard({
  value,
  unit,
  unitColored,
  label,
  accent,
}: {
  value: string;
  unit?: string;
  unitColored?: boolean;
  label: string;
  accent: "yellow" | "blue";
}) {
  const accentColor =
    accent === "yellow" ? tokens.brand.primary : tokens.brand.tertiary;
  return (
    <View style={statStyles.card}>
      <Text style={[statStyles.value, { color: accentColor }]}>
        {value}
        {unit && (
          <Text
            style={[
              statStyles.unit,
              unitColored && { color: accentColor },
            ]}
          >
            {unit.startsWith("/") ? unit : ` ${unit}`}
          </Text>
        )}
      </Text>
      <Text style={statStyles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.bg.onBackground,
  },
  content: {
    flex: 1,
    paddingHorizontal: tokens.spacing.md,
    paddingTop: tokens.spacing.lg,
    paddingBottom: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: tokens.weight.bold,
    color: tokens.text.inverseOnSurface,
    marginBottom: tokens.spacing.base,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: tokens.text.secondaryFixedDim,
    textAlign: "center",
    marginBottom: tokens.spacing.lg,
  },
  statsGrid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "space-between",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: tokens.spacing.md,
    paddingTop: tokens.spacing.md,
    paddingBottom: 36,
  },
});

const statStyles = StyleSheet.create({
  card: {
    flexBasis: "47%",
    flexGrow: 1,
    backgroundColor: tokens.bg.inverseSurface,
    borderRadius: tokens.radius.base,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.06)",
    padding: tokens.spacing.md,
    alignItems: "center",
    justifyContent: "center",
  },
  value: {
    fontSize: 32,
    fontWeight: tokens.weight.bold,
    marginBottom: 4,
  },
  unit: {
    fontSize: 16,
    fontWeight: tokens.weight.regular,
    color: tokens.text.secondaryFixedDim,
  },
  label: {
    fontSize: 12,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.secondaryFixedDim,
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
});
