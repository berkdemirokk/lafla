// Home feed — Cyber-Electric Modern
// Light bg, dark scene cards, BLUE active nav tab.
// Filters by user interests + reorders by completion state.

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "expo-router";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Pressable,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { SceneCard } from "../components/SceneCard";
import { SAMPLE_SCENES, type Scene } from "../data/scenes";
import { getCompletedLessonIds, getInterests } from "../lib/local-progress";
import { tokens } from "../theme";

export default function Feed() {
  const router = useRouter();
  const { height } = useWindowDimensions();
  const pageHeight = height - 200;

  const [interests, setInterests] = useState<string[] | null>(null);
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  useEffect(() => {
    (async () => {
      const [i, c] = await Promise.all([getInterests(), getCompletedLessonIds()]);
      setInterests(i);
      setCompleted(c);
    })();
  }, []);

  const orderedScenes = useMemo<Scene[]>(() => {
    if (interests === null) return SAMPLE_SCENES.slice();
    const interestModes = new Set(interests);
    // Match interest ids (like 'flirt', 'work', etc) to scene modes
    const isMatch = (s: Scene) =>
      interestModes.size === 0 || interestModes.has(s.mode);
    const inInterests = SAMPLE_SCENES.filter(isMatch);
    const others = SAMPLE_SCENES.filter((s) => !isMatch(s));
    const allOrdered = [...inInterests, ...others];
    // Move completed lessons toward the end (still accessible for review)
    const notDone = allOrdered.filter((s) => !completed.has(s.lessonId));
    const done = allOrdered.filter((s) => completed.has(s.lessonId));
    return [...notDone, ...done];
  }, [interests, completed]);

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <StatusBar style="dark" />

      {/* Top app bar */}
      <View style={styles.topBar}>
        <Pressable style={styles.avatar} onPress={() => router.push("/profile" as never)} />
        <Text style={styles.brandMark}>Lafla</Text>
        <Pressable
          style={styles.iconBtn}
          onPress={() => router.push("/profile" as never)}
        >
          <Text style={styles.iconText}>⚙</Text>
        </Pressable>
      </View>

      <FlatList
        data={orderedScenes}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        renderItem={({ item }) => {
          const isDone = completed.has(item.lessonId);
          return (
            <View style={[styles.page, { height: pageHeight }]}>
              <SceneCard
                emoji={item.emoji}
                title={item.title}
                description={item.description}
                durationMin={item.durationMin}
                isNew={item.isNew && !isDone}
                progressLabel={isDone ? "✓ Tamamlandı" : item.progressLabel}
                onPress={() => router.push(`/lesson/${item.lessonId}`)}
              />
            </View>
          );
        }}
      />

      {/* Bottom nav */}
      <View style={styles.bottomNav}>
        <NavTab icon="🎓" label="Learn" active />
        <NavTab
          icon="💬"
          label="Chat"
          onPress={() =>
            Alert.alert(
              "Chat",
              "AI chat partner yakında geliyor. Şimdilik ders içindeki roleplay'leri dene.",
            )
          }
        />
        <NavTab
          icon="📺"
          label="Social"
          onPress={() =>
            Alert.alert(
              "Social",
              "Topluluk ve arkadaşlık özellikleri yakında.",
            )
          }
        />
        <NavTab
          icon="👤"
          label="Profile"
          onPress={() => router.push("/profile" as never)}
        />
      </View>
    </SafeAreaView>
  );
}

function NavTab({
  icon,
  label,
  active,
  onPress,
}: {
  icon: string;
  label: string;
  active?: boolean;
  onPress?: () => void;
}) {
  return (
    <Pressable
      style={[navStyles.tab, active && navStyles.tabActive]}
      onPress={onPress}
    >
      <Text style={navStyles.icon}>{icon}</Text>
      <Text style={[navStyles.label, active && navStyles.labelActive]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: tokens.bg.app,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 64,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: tokens.brand.secondary, // black avatar (Cyber-Electric)
    borderWidth: 2,
    borderColor: tokens.brand.tertiary, // BLUE ring (Cyber accent)
  },
  brandMark: {
    fontSize: 24,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.5,
  },
  iconBtn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    fontSize: 22,
    color: tokens.text.secondary,
  },
  page: {
    paddingHorizontal: tokens.spacing.base,
    paddingVertical: tokens.spacing.base,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 76,
    paddingHorizontal: 8,
    paddingBottom: 12,
    backgroundColor: tokens.bg.surfaceContainer,
    borderTopLeftRadius: tokens.radius.base,
    borderTopRightRadius: tokens.radius.base,
  },
});

const navStyles = StyleSheet.create({
  tab: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  tabActive: {
    backgroundColor: tokens.brand.tertiarySoft, // BLUE soft active bg
    borderRadius: tokens.radius.full,
    paddingHorizontal: 16,
  },
  icon: {
    fontSize: 22,
  },
  label: {
    fontSize: 12,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.secondary,
    marginTop: 4,
  },
  labelActive: {
    color: tokens.brand.tertiary, // BLUE active text
  },
});
