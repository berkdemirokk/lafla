// Review banner — shown at top of feed when SRS-due reviews exist.
// Tapping launches the daily review session at /review.

import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import { getDueCount } from "../lib/srs";
import { tokens } from "../theme";

interface Props {
  onDismiss?: () => void;
}

export function ReviewBanner(_props: Props = {}) {
  const router = useRouter();
  const [count, setCount] = useState(0);

  useEffect(() => {
    let alive = true;
    (async () => {
      const c = await getDueCount();
      if (alive) setCount(c);
    })();
    return () => {
      alive = false;
    };
  }, []);

  if (count <= 0) return null;

  return (
    <View style={styles.wrap}>
      <Pressable
        style={styles.banner}
        onPress={() => router.push("/review" as never)}
      >
        <View style={styles.iconWrap}>
          <Text style={styles.icon}>🧠</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.label}>GÜNLÜK TEKRAR</Text>
          <Text style={styles.title} numberOfLines={1}>
            {count === 1
              ? "Bugün 1 tekrar bekliyor"
              : `Bugün ${count} tekrar bekliyor`}
          </Text>
          <Text style={styles.sub}>Hafızanı taze tut — başla →</Text>
        </View>
        <Text style={styles.chev}>›</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  banner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
    borderRadius: tokens.radius.base,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: tokens.radius.full,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: tokens.brand.tertiary,
  },
  icon: { fontSize: 20 },
  text: { flex: 1 },
  label: {
    fontSize: 10,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
    letterSpacing: 1.4,
    marginBottom: 2,
  },
  title: {
    fontSize: 15,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  sub: {
    fontSize: 12,
    color: tokens.text.secondary,
    marginTop: 2,
  },
  chev: {
    fontSize: 22,
    color: tokens.brand.tertiary,
    fontWeight: tokens.weight.bold,
  },
});
