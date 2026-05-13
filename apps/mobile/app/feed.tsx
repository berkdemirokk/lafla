// Home feed — Cyber-Electric Modern
// Light bg, dark scene cards, BLUE active nav tab.

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
import { SAMPLE_SCENES } from "../data/scenes";
import { signOut } from "../lib/auth";
import { tokens } from "../theme";

export default function Feed() {
  const router = useRouter();
  const { height } = useWindowDimensions();
  const pageHeight = height - 200;

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <StatusBar style="dark" />

      {/* Top app bar */}
      <View style={styles.topBar}>
        <View style={styles.avatar} />
        <Text style={styles.brandMark}>Lafla</Text>
        <Pressable
          style={styles.iconBtn}
          onPress={() =>
            Alert.alert("Hesap", "Çıkış yapmak istediğine emin misin?", [
              { text: "Vazgeç", style: "cancel" },
              {
                text: "Çıkış",
                style: "destructive",
                onPress: async () => {
                  await signOut().catch(() => {});
                  router.replace("/auth");
                },
              },
            ])
          }
        >
          <Text style={styles.iconText}>⚙</Text>
        </Pressable>
      </View>

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
              onPress={() => router.push(`/lesson/${item.lessonId}`)}
            />
          </View>
        )}
      />

      {/* Bottom nav */}
      <View style={styles.bottomNav}>
        <NavTab icon="🎓" label="Learn" active />
        <NavTab icon="💬" label="Chat" />
        <NavTab icon="📺" label="Social" />
        <NavTab icon="👤" label="Profile" />
      </View>
    </SafeAreaView>
  );
}

function NavTab({
  icon,
  label,
  active,
}: {
  icon: string;
  label: string;
  active?: boolean;
}) {
  return (
    <Pressable style={[navStyles.tab, active && navStyles.tabActive]}>
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
