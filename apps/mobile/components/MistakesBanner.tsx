// Lafla — MistakesBanner.
//
// Feed-level banner that surfaces when the user has active tracked mistakes.
// Mirrors ReviewBanner's design language (cyber-electric tertiary blue) but
// uses the primary yellow accent to differentiate from "SRS due reviews".
//
// Tap → routes to /drill. Hides entirely when there are no active mistakes
// so the feed doesn't accumulate dead surface area.

import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { getActiveMistakes } from "../lib/mistake-tracker";
import { tokens } from "../theme";

interface Props {
  /** Optional refresh key — caller may bump this when freechat suspects
   *  new mistakes arrived (so banner count refreshes without a remount). */
  refreshKey?: number;
  onDismiss?: () => void;
}

export function MistakesBanner({ refreshKey = 0 }: Props = {}) {
  const router = useRouter();
  const [count, setCount] = useState(0);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const list = await getActiveMistakes();
        if (alive) setCount(list.length);
      } catch {
        if (alive) setCount(0);
      }
    })();
    return () => {
      alive = false;
    };
  }, [refreshKey]);

  if (count <= 0) return null;

  return (
    <View style={styles.wrap}>
      <Pressable
        style={styles.banner}
        onPress={() => router.push("/drill" as never)}
      >
        <View style={styles.iconWrap}>
          <Text style={styles.icon}>🎯</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.label}>DÜZELTME SEANSI</Text>
          <Text style={styles.title} numberOfLines={1}>
            {count === 1
              ? "1 düzeltme bekliyor"
              : `${count} düzeltme bekliyor`}
          </Text>
          <Text style={styles.sub}>Maya senin için topladı — başla →</Text>
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
    backgroundColor: tokens.brand.primarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.primaryFixed,
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
    backgroundColor: tokens.brand.primary,
  },
  icon: { fontSize: 20 },
  text: { flex: 1 },
  label: {
    fontSize: 10,
    fontWeight: tokens.weight.bold,
    color: tokens.text.onPrimary,
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
    color: tokens.text.primary,
    fontWeight: tokens.weight.bold,
  },
});
