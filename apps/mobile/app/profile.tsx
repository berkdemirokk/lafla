// Profile screen — adult metric dashboard + account + settings.
//
// Pivoted from the XP/streak gamification surface to a Strava/Whoop-style
// view: real practice minutes, vocab size, scene completion, CEFR
// sub-skill bars, and a weekly recap card. The legacy auth and settings
// rows are preserved unchanged.

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
import {
  getCompletedLessonIds,
  getLocalProfile,
  type LocalProfile,
} from "../lib/local-progress";
import {
  disableReminders,
  enableDailyReminder,
  isNotificationsEnabled,
} from "../lib/notifications";
import { tokens } from "../theme";
import {
  computeMetrics,
  getWeeklyReport,
  type UserMetrics,
  type WeeklyReport,
} from "../lib/metrics";
import { StatsHero } from "../components/StatsHero";
import { MetricBar } from "../components/MetricBar";
import { WeeklyReportCard } from "../components/WeeklyReportCard";

export default function ProfileScreen() {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [local, setLocal] = useState<LocalProfile | null>(null);
  const [signedIn, setSignedIn] = useState(false);
  const [lessonsCompleted, setLessonsCompleted] = useState(0);
  const [remindersOn, setRemindersOn] = useState(false);
  const [metrics, setMetrics] = useState<UserMetrics | null>(null);
  const [weekly, setWeekly] = useState<WeeklyReport | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();
      setSignedIn(!!data.user);
      // Always read local
      const lp = await getLocalProfile();
      setLocal(lp);
      const completed = await getCompletedLessonIds();
      setLessonsCompleted(completed.size);
      setRemindersOn(await isNotificationsEnabled());
      // Override with cloud values if signed in
      if (data.user) {
        const p = await getCurrentProfile();
        setProfile(p);
        const { count } = await supabase
          .from("lesson_state")
          .select("*", { count: "exact", head: true })
          .eq("user_id", data.user.id)
          .not("completed_at", "is", null);
        if (count !== null && count !== undefined) setLessonsCompleted(count);
      }
      // Adult-tone metrics — fully local, no network.
      try {
        const [m, w] = await Promise.all([computeMetrics(), getWeeklyReport()]);
        setMetrics(m);
        setWeekly(w);
      } catch {
        // Soft-fail: profile still renders with — placeholders.
      }
    })();
  }, []);

  const toggleReminders = async () => {
    if (remindersOn) {
      await disableReminders();
      setRemindersOn(false);
      Alert.alert("Bildirimler kapatıldı", "Her gün hatırlatıcı almayacaksın.");
    } else {
      const ok = await enableDailyReminder(19);
      if (ok) {
        setRemindersOn(true);
        Alert.alert(
          "Bildirimler açık ✓",
          "Her gün saat 19:00'da ders hatırlatıcısı alacaksın.",
        );
      } else {
        Alert.alert(
          "İzin reddedildi",
          "Ayarlar > Lafla > Bildirimler yolundan açabilirsin.",
        );
      }
    }
  };

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

  const streakNum = profile?.current_streak ?? local?.current_streak ?? 0;
  const consistencyText =
    lessonsCompleted === 0
      ? "Henüz başlamadın"
      : `${streakNum} günlük aktif`;

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
        {/* Identity strip — slimmer, no oversized avatar tile. */}
        <View style={styles.identityRow}>
          <View style={styles.avatarSmall}>
            <Text style={styles.avatarSmallText}>
              {(profile?.display_name ?? "L")[0]?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.identityCol}>
            <Text style={styles.name}>
              {signedIn
                ? profile?.display_name ?? "Lafla kullanıcısı"
                : "Misafir"}
            </Text>
            <View style={styles.identityMetaRow}>
              <View style={styles.consistencyDot} />
              <Text style={styles.consistencyText}>{consistencyText}</Text>
              <Text style={styles.metaDivider}>·</Text>
              <Text style={styles.consistencyText}>
                {profile?.is_premium ? "Pro" : "Free"}
              </Text>
            </View>
          </View>
          {!signedIn && (
            <Pressable
              onPress={() => router.push("/auth")}
              style={styles.signinPill}
            >
              <Text style={styles.signinPillText}>Giriş</Text>
            </Pressable>
          )}
        </View>

        {/* Adult metric hero — 2x2 real stats grid. */}
        <StatsHero metrics={metrics} />

        {/* CEFR sub-skill bars. */}
        <View style={styles.skillsBlock}>
          <Text style={styles.blockLabel}>BECERİ KIRILIMI</Text>
          {metrics ? (
            <>
              <MetricBar label="Dinleme" level={metrics.skillBreakdown.listening} />
              <MetricBar label="Konuşma" level={metrics.skillBreakdown.speaking} />
              <MetricBar
                label="Telaffuz"
                level={metrics.skillBreakdown.pronunciation}
              />
              <MetricBar
                label="Kelime"
                level={metrics.skillBreakdown.vocabulary}
              />
            </>
          ) : (
            <Text style={styles.blockPlaceholder}>Hazırlanıyor…</Text>
          )}
        </View>

        {/* Weekly recap card. */}
        <WeeklyReportCard report={weekly} />

        {/* Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>AYARLAR</Text>

          <Pressable
            style={styles.row}
            onPress={() => router.push("/achievements" as never)}
          >
            <Text style={styles.rowIcon}>🏆</Text>
            <Text style={styles.rowText}>Başarımlar</Text>
            <Text style={styles.rowChevron}>›</Text>
          </Pressable>

          <Pressable
            style={styles.row}
            onPress={() => router.push("/skills" as never)}
          >
            <Text style={styles.rowIcon}>🌳</Text>
            <Text style={styles.rowText}>Beceri Ağacı</Text>
            <Text style={styles.rowChevron}>›</Text>
          </Pressable>

          <Pressable
            style={styles.row}
            onPress={() => router.push("/journal" as never)}
          >
            <Text style={styles.rowIcon}>📓</Text>
            <Text style={styles.rowText}>Günlük</Text>
            <Text style={styles.rowChevron}>›</Text>
          </Pressable>

          <Pressable
            style={styles.row}
            onPress={() => router.push("/freechat" as never)}
          >
            <Text style={styles.rowIcon}>💬</Text>
            <Text style={styles.rowText}>AI Sohbet</Text>
            <Text style={styles.rowChevron}>›</Text>
          </Pressable>

          <Pressable
            style={styles.row}
            onPress={() => router.push("/referral" as never)}
          >
            <Text style={styles.rowIcon}>🎁</Text>
            <Text style={styles.rowText}>Arkadaş Davet</Text>
            <Text style={styles.rowChevron}>›</Text>
          </Pressable>

          <Pressable
            style={styles.row}
            onPress={() => router.push("/settings" as never)}
          >
            <Text style={styles.rowIcon}>⚙️</Text>
            <Text style={styles.rowText}>Ayarlar</Text>
            <Text style={styles.rowChevron}>›</Text>
          </Pressable>

          <Pressable
            style={styles.row}
            onPress={() => router.push("/about" as never)}
          >
            <Text style={styles.rowIcon}>ℹ️</Text>
            <Text style={styles.rowText}>Hakkında</Text>
            <Text style={styles.rowChevron}>›</Text>
          </Pressable>

          <Pressable
            style={styles.row}
            onPress={() => router.push("/help" as never)}
          >
            <Text style={styles.rowIcon}>❓</Text>
            <Text style={styles.rowText}>Yardım</Text>
            <Text style={styles.rowChevron}>›</Text>
          </Pressable>

          <Pressable
            style={styles.row}
            onPress={() => router.push("/paywall" as never)}
          >
            <Text style={styles.rowIcon}>👑</Text>
            <Text style={styles.rowText}>Pro'ya Geç</Text>
            <Text style={styles.rowChevron}>›</Text>
          </Pressable>

          <Pressable style={styles.row} onPress={toggleReminders}>
            <Text style={styles.rowIcon}>🔔</Text>
            <Text style={styles.rowText}>
              Günlük hatırlatıcı{" "}
              <Text style={styles.rowBadge}>
                {remindersOn ? "(Açık)" : "(Kapalı)"}
              </Text>
            </Text>
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

        <Text style={styles.versionText}>Lafla v0.1.0 · Konuş, çalış.</Text>
      </ScrollView>
    </SafeAreaView>
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
  identityRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: tokens.spacing.md,
  },
  avatarSmall: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarSmallText: {
    fontSize: 20,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  identityCol: {
    flex: 1,
    gap: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  identityMetaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  consistencyDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: tokens.brand.tertiary,
  },
  consistencyText: {
    fontSize: 12,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.medium,
  },
  metaDivider: {
    fontSize: 12,
    color: tokens.text.tertiary,
  },
  signinPill: {
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: tokens.radius.full,
  },
  signinPillText: {
    color: tokens.brand.tertiary,
    fontWeight: tokens.weight.semibold,
    fontSize: 12,
  },
  skillsBlock: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    borderWidth: 1,
    borderColor: tokens.border.light,
    padding: tokens.spacing.md,
    marginBottom: tokens.spacing.md,
  },
  blockLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 1.2,
    marginBottom: 8,
  },
  blockPlaceholder: {
    fontSize: 13,
    color: tokens.text.tertiary,
    paddingVertical: 12,
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
  rowBadge: {
    color: tokens.brand.tertiary,
    fontSize: 13,
    fontWeight: tokens.weight.bold,
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
