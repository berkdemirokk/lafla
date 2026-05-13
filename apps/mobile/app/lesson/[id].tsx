// Lesson screen — placeholder.
// Will host the lesson runner state machine + 7 exercise UIs.

import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../components/Button";
import { tokens } from "../../theme";

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.icon}>🚧</Text>
        <Text style={styles.title}>Ders Henüz Hazır Değil</Text>
        <Text style={styles.subtitle}>{id}</Text>
        <Text style={styles.desc}>
          Lesson runner + 7 alıştırma ekranı yakında eklenecek:
          {"\n\n"}
          📇 vocab_tile{"\n"}
          🔄 translate{"\n"}
          ✏️ fill_blank{"\n"}
          🧩 word_order{"\n"}
          🔍 spot_mistake{"\n"}
          💬 roleplay_chat{"\n"}
          📝 recap_quiz
        </Text>

        <View style={styles.btnWrap}>
          <Button
            label="Akışa Geri Dön"
            onPress={() => router.back()}
            variant="secondary"
          />
        </View>
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
    flex: 1,
    padding: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 64,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 13,
    color: tokens.text.tertiary,
    marginBottom: 32,
    fontFamily: "monospace",
  },
  desc: {
    fontSize: 14,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 32,
  },
  btnWrap: {
    width: "100%",
    paddingHorizontal: 16,
  },
});
