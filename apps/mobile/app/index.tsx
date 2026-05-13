// Splash screen — dark bg, white wordmark, neon yellow accent line.
// Mirrors Stitch's "Splash Cool" design.

import { useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { tokens } from "../theme";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => {
      router.replace("/onboarding");
    }, 1500);
    return () => clearTimeout(t);
  }, [router]);

  return (
    <Pressable
      style={styles.container}
      onPress={() => router.replace("/onboarding")}
    >
      <StatusBar style="light" />

      <View style={styles.center}>
        <Text style={styles.wordmark}>Lafla</Text>

        {/* Accent underline — glowing yellow */}
        <View style={styles.accentLine} />

        <Text style={styles.tagline}>Söyle gitsin.</Text>
      </View>

      <View style={styles.bottomHint}>
        <Text style={styles.hintText}>Dokun, devam et</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.bg.onBackground,
    justifyContent: "center",
    alignItems: "center",
    padding: tokens.spacing.md,
  },
  center: {
    alignItems: "center",
  },
  wordmark: {
    fontSize: 72,
    fontWeight: tokens.weight.black,
    color: tokens.text.inverseOnSurface,
    letterSpacing: -2.5,
    fontFamily: tokens.font.sans,
  },
  accentLine: {
    width: 64,
    height: 2,
    backgroundColor: tokens.brand.primaryContainer,
    borderRadius: 1,
    marginTop: tokens.spacing.xs,
    marginBottom: tokens.spacing.md,
    // Glow effect — RN shadow
    shadowColor: tokens.brand.primaryContainer,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 15,
    elevation: 6,
  },
  tagline: {
    fontSize: 18,
    color: tokens.text.secondaryFixedDim,
    fontWeight: tokens.weight.medium,
    opacity: 0.9,
  },
  bottomHint: {
    position: "absolute",
    bottom: 48,
  },
  hintText: {
    color: tokens.text.secondary,
    fontSize: 14,
    fontWeight: tokens.weight.medium,
    letterSpacing: 1,
  },
});
