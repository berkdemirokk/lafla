// Home feed — TikTok-style vertical paging through scene cards.
// Algorithm placeholder: just shows SAMPLE_SCENES sequentially.
// Real impl: weighted by user interests + mastery model + SRS due items.

import { useRouter } from "expo-router";
import {
  FlatList,
  View,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SceneCard } from "../components/SceneCard";
import { SAMPLE_SCENES, type Scene } from "../data/scenes";
import { tokens } from "../theme";

export default function Feed() {
  const router = useRouter();
  const { height } = useWindowDimensions();

  // Subtract status bar + safe areas roughly — actual safe area handled by SafeAreaView
  const pageHeight = height - 60;

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <FlatList
        data={SAMPLE_SCENES}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        renderItem={({ item }) => (
          <View style={[styles.page, { height: pageHeight }]}>
            <SceneCard
              emoji={item.emoji}
              title={item.title}
              description={item.description}
              durationMin={item.durationMin}
              isNew={item.isNew}
              progressLabel={item.progressLabel}
              accentColor={item.accentColor}
              onPress={() => router.push(`/lesson/${item.lessonId}`)}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: tokens.bg.app,
  },
  page: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
