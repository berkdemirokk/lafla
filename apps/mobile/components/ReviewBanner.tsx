// Review banner — shown at top of feed when SRS-due lessons exist.

import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import { getAllLessonState } from "../lib/local-progress";
import { allLessons } from "../data/lessons";
import { tokens } from "../theme";

interface Props {
  onDismiss?: () => void;
}

export function ReviewBanner({ onDismiss }: Props) {
  const router = useRouter();
  const [due, setDue] = useState<{ id: string; title: string } | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let alive = true;
    (async () => {
      const states = await getAllLessonState();
      const now = new Date().toISOString();
      const dueIds = Object.values(states)
        .filter((s) => s.next_review_at && s.next_review_at <= now)
        .sort((a, b) =>
          (a.next_review_at ?? "").localeCompare(b.next_review_at ?? ""),
        )
        .map((s) => s.lesson_id);
      if (!alive) return;
      if (dueIds.length === 0) return;
      const lesson = allLessons.find((l) => l.id === dueIds[0]);
      if (!lesson) return;
      setDue({ id: lesson.id, title: lesson.title });
      setCount(dueIds.length);
    })();
    return () => {
      alive = false;
    };
  }, []);

  if (!due) return null;

  return (
    <View style={styles.wrap}>
      <Pressable
        style={styles.banner}
        onPress={() => router.push(`/preview/${due.id}` as never)}
      >
        <Text style={styles.icon}>🔄</Text>
        <View style={styles.text}>
          <Text style={styles.label}>TEKRAR ZAMANI</Text>
          <Text style={styles.title} numberOfLines={1}>
            {due.title}
          </Text>
          {count > 1 && (
            <Text style={styles.sub}>+{count - 1} ders daha bekliyor</Text>
          )}
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
  icon: { fontSize: 22 },
  text: { flex: 1 },
  label: {
    fontSize: 10,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
    letterSpacing: 1.4,
    marginBottom: 2,
  },
  title: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  sub: {
    fontSize: 11,
    color: tokens.text.secondary,
    marginTop: 1,
  },
  chev: {
    fontSize: 22,
    color: tokens.brand.tertiary,
    fontWeight: tokens.weight.bold,
  },
});
