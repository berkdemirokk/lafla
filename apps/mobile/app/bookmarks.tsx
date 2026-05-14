// Lafla — Bookmarks screen ("Kaydedilenler").
// Lists scenes the user has saved, newest first. Tap a card to open the
// scenario; "Kaldır" removes after a confirm prompt.
//
// Integration notes — DO NOT modify those files here; track them upstream:
//   1. app/feed.tsx        → overlay <BookmarkButton /> on each SceneCard
//                            in the recommended carousel.
//   2. app/scenario/[id].tsx → show <BookmarkButton /> in the top-right header.
//   3. app/preview/[id].tsx  → show <BookmarkButton /> next to scene title.
//   4. app/profile.tsx or app/settings.tsx → add a "Kaydedilenler" row that
//      routes to "/bookmarks".
//   5. _layout.tsx → add `<Stack.Screen name="bookmarks" />` to register the
//      route (and optionally `options={{ headerShown: false }}` to keep the
//      in-screen header authoritative).

import { useCallback, useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFocusEffect, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { BookmarkCard } from "../components/BookmarkCard";
import { EmptyState } from "../components/EmptyState";
import {
  getBookmarks,
  removeBookmark,
  type BookmarkEntry,
} from "../lib/bookmarks";
import { SAMPLE_SCENES, type Scene } from "../data/scenes";
import { hapticImpact } from "../lib/feedback";
import { tokens } from "../theme";

interface Row {
  entry: BookmarkEntry;
  scene: Scene | undefined;
}

export default function BookmarksScreen() {
  const router = useRouter();
  const [rows, setRows] = useState<Row[] | null>(null);

  const load = useCallback(async () => {
    const entries = await getBookmarks();
    const sceneIndex = new Map(SAMPLE_SCENES.map((s) => [s.id, s]));
    setRows(
      entries.map((entry) => ({
        entry,
        scene: sceneIndex.get(entry.sceneId),
      })),
    );
  }, []);

  // Refresh whenever the screen comes back into focus (bookmark could
  // have been added/removed elsewhere).
  useFocusEffect(
    useCallback(() => {
      load();
    }, [load]),
  );

  useEffect(() => {
    load();
  }, [load]);

  const onCardPress = useCallback(
    (lessonId: string) => {
      router.push(`/scenario/${lessonId}` as never);
    },
    [router],
  );

  const onRemove = useCallback(
    (sceneId: string, title: string) => {
      const flatTitle = title.replace(/\n/g, " ").replace(/\s+/g, " ").trim();
      Alert.alert(
        "Kaydı kaldır?",
        `"${flatTitle}" listeden çıkarılacak.`,
        [
          { text: "Vazgeç", style: "cancel" },
          {
            text: "Kaldır",
            style: "destructive",
            onPress: async () => {
              hapticImpact("medium");
              await removeBookmark(sceneId);
              await load();
            },
          },
        ],
        { cancelable: true },
      );
    },
    [load],
  );

  const isLoading = rows === null;
  const isEmpty = !isLoading && rows.length === 0;

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backBtn}
          hitSlop={8}
        >
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.title}>Kaydedilenler</Text>
        <View style={styles.spacer} />
      </View>

      {isEmpty ? (
        <EmptyState
          emoji="🔖"
          title="Henüz kayıt yok"
          description="Henüz kayıtlı sahne yok. Kaydetmek için sahne kartında 📑 ikonuna dokun."
        />
      ) : (
        <FlatList
          data={rows ?? []}
          keyExtractor={(r) => r.entry.sceneId}
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={() => <View style={styles.gap} />}
          renderItem={({ item }) => {
            const { entry, scene } = item;
            // Scene may be missing if SAMPLE_SCENES changed since save —
            // fall back gracefully so the user can still remove it.
            const emoji = scene?.emoji ?? "📑";
            const title = scene?.title ?? entry.lessonId;
            const description =
              scene?.description ??
              "Bu sahne artık mevcut değil. Listeden kaldırabilirsin.";
            return (
              <BookmarkCard
                emoji={emoji}
                title={title}
                description={description}
                addedAt={entry.addedAt}
                onPress={() => onCardPress(entry.lessonId)}
                onRemove={() => onRemove(entry.sceneId, title)}
              />
            );
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: tokens.spacing.md,
    height: 56,
  },
  backBtn: { width: 70 },
  backText: { color: tokens.text.secondary, fontSize: 15 },
  title: {
    fontSize: 20,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  spacer: { width: 70 },
  list: {
    paddingHorizontal: tokens.spacing.md,
    paddingTop: tokens.spacing.sm,
    paddingBottom: tokens.spacing.lg,
  },
  gap: { height: tokens.spacing.sm },
});
