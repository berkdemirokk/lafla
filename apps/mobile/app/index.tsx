import { useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { tokens } from "../theme";

export default function Splash() {
  const router = useRouter();

  // Auto-advance after 1.5s (later: check auth/onboarding state)
  useEffect(() => {
    const t = setTimeout(() => {
      router.replace("/onboarding");
    }, 1500);
    return () => clearTimeout(t);
  }, [router]);

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.title}>Lafla</Text>
        <Text style={styles.tagline}>Söyle gitsin.</Text>
      </View>
      <Pressable
        style={styles.skipHint}
        onPress={() => router.replace("/onboarding")}
      >
        <Text style={styles.skipText}>Dokun, devam et</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.bg.app,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  center: {
    alignItems: "center",
  },
  title: {
    fontSize: 72,
    fontWeight: "900",
    color: tokens.text.primary,
    letterSpacing: -3,
    fontFamily: tokens.font.sans,
  },
  tagline: {
    fontSize: 20,
    color: tokens.text.secondary,
    marginTop: 16,
    fontWeight: "500",
  },
  skipHint: {
    position: "absolute",
    bottom: 60,
  },
  skipText: {
    color: tokens.text.tertiary,
    fontSize: 13,
    fontWeight: "600",
  },
});
