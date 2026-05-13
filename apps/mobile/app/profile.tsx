// Profile screen — XP, streak, mastery, settings.

import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getCurrentProfile, signOut, type Profile } from "../lib/auth";
import { supabase } from "../lib/supabase";
import { tokens } from "../theme";

export default function ProfileScreen() {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [signedIn, setSignedIn] = useState(false);
  const [lessonsCompleted, setLessonsCompleted] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();
      setSignedIn(!!data.user);
      if (data.user) {
        const p = await getCurrentProfile();
        setProfile(p);
        const { count } = await supabase
          .from("lesson_state")
          .select("*", { count: "exact", head: true })
          .eq("user_id", data.user.id)
          .not("completed_at", "is", null);
        setLessonsCompleted(count ?? 0);
      }
    })();
  }, []);

  const handleSignOut = () => {
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
    ]);
  };

  const handleResetLocal = () => {
    Alert.alert(
      "Veriyi sıfırla",
      "Yerel ilerlemen silinecek. Devam edilsin mi?",
      [
        { text: "Vazgeç", style: "cancel" },
        {
          text: "Sıfırla",
          style: "destructive",
          onPress: async () => {
            await AsyncStorage.clear().catch(() => {});
            router.replace("/onboarding");
          },
        },
      ],
    );
  };

  const xp = profile?.total_xp ?? 0;
  const streak = profile?.current_streak ?? 0;

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.title}>Profil</Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Avatar + identity */}
        <View style={styles.identityCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {(profile?.display_name ?? "L")[0]?.toUpperCase()}
            </Text>
          </View>
          <Text style={styles.name}>
            {signedIn
              ? profile?.display_name ?? "Lafla kullanıcısı"
              : "Misafir"}
          </Text>
          {!signedIn && (
            <Pressable
              onPress={() => router.push("/auth")}
              style={styles.signinPill}
            >
              <Text style={styles.signinPillText}>
                Giriş yap (ilerlemeyi senkronla)
              </Text>
            </Pressable>
          )}
        </View>

        {/* Stats */}
        <View style={styles.statsGrid}>
          <Stat value={`${xp}`} label="Toplam XP" accent="yellow" />
          <Stat value={`${streak}`} label="Günlük seri" accent="blue" />
          <Stat
            value={`${lessonsCompleted}`}
            label="Ders bitirdi"
            accent="yellow"
          />
          <Stat
            value={profile?.is_premium ? "Premium" : "Free"}
            label="Plan"
            accent="blue"
          />
        </View>

        {/* Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>AYARLAR</Text>

          <Pressable
            style={styles.row}
            onPress={() =>
              Alert.alert("Yakında", "Premium üyelik yakında geliyor.")
            }
          >
            <Text style={styles.rowIcon}>⭐</Text>
            <Text style={styles.rowText}>Premium'a Geç</Text>
            <Text style={styles.rowChevron}>›</Text>
          </Pressable>

          <Pressable
            style={styles.row}
            onPress={() =>
              Alert.alert(
                "Bildirimler",
                "Günlük hatırlatıcılar yakında geliyor.",
              )
            }
          >
            <Text style={styles.rowIcon}>🔔</Text>
            <Text style={styles.rowText}>Bildirimler</Text>
            <Text style={styles.rowChevron}>›</Text>
          </Pressable>

          <Pressable
            style={styles.row}
            onPress={() => router.push("/onboarding")}
          >
            <Text style={styles.rowIcon}>🎯</Text>
            <Text style={styles.rowText}>İlgi alanlarımı değiştir</Text>
            <Text style={styles.rowChevron}>›</Text>
          </Pressable>

          <Pressable style={styles.row} onPress={handleResetLocal}>
            <Text style={styles.rowIcon}>🧹</Text>
            <Text style={styles.rowText}>İlerlemeyi sıfırla</Text>
            <Text style={styles.rowChevron}>›</Text>
          </Pressable>

          {signedIn && (
            <Pressable
              style={[styles.row, styles.rowDanger]}
              onPress={handleSignOut}
            >
              <Text style={styles.rowIcon}>🚪</Text>
              <Text style={[styles.rowText, styles.rowTextDanger]}>
                Çıkış yap
              </Text>
              <Text style={styles.rowChevron}>›</Text>
            </Pressable>
          )}
        </View>

        <Text style={styles.versionText}>Lafla v0.1.0 · Söyle gitsin.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function Stat({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent: "yellow" | "blue";
}) {
  const color =
    accent === "yellow" ? tokens.brand.primary : tokens.brand.tertiary;
  return (
    <View style={statStyles.card}>
      <Text style={[statStyles.value, { color }]}>{value}</Text>
      <Text style={statStyles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
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
  content: {
    padding: tokens.spacing.md,
    paddingBottom: 80,
  },
  identityCard: {
    alignItems: "center",
    paddingVertical: tokens.spacing.lg,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: tokens.brand.secondary,
    borderWidth: 3,
    borderColor: tokens.brand.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: tokens.weight.black,
    color: tokens.brand.primary,
  },
  name: {
    fontSize: 22,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    marginBottom: 8,
  },
  signinPill: {
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: tokens.radius.full,
    marginTop: 4,
  },
  signinPillText: {
    color: tokens.brand.tertiary,
    fontWeight: tokens.weight.semibold,
    fontSize: 13,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: tokens.spacing.lg,
  },
  section: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: 4,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 1.2,
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 14,
    gap: 12,
  },
  rowIcon: { fontSize: 20 },
  rowText: {
    flex: 1,
    fontSize: 15,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
  },
  rowChevron: {
    fontSize: 20,
    color: tokens.text.tertiary,
  },
  rowDanger: {
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
  },
  rowTextDanger: {
    color: tokens.semantic.error,
  },
  versionText: {
    textAlign: "center",
    color: tokens.text.tertiary,
    fontSize: 12,
    marginTop: tokens.spacing.lg,
  },
});

const statStyles = StyleSheet.create({
  card: {
    flexBasis: "48%",
    flexGrow: 1,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    alignItems: "center",
  },
  value: {
    fontSize: 30,
    fontWeight: tokens.weight.black,
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.semibold,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
