// Profile screen — premium stats dashboard (Neon Noir).
//
// Replaces the previous settings-style list with a Strava/Whoop-flavored
// dashboard: hero stat strip (streak / XP / completed), per-mode progress
// rails for the 8 canonical modes, then a slim account section at the
// bottom. All data is read locally; no network on mount.
//
// Mode taxonomy used (8 surfaces shown to user):
//   🧊 Flört   → scenes.mode === "flirt"
//   💼 İş      → scenes.mode === "work"
//   ✈️ Seyahat → scenes.mode === "travel"
//   👥 Sosyal  → scenes.mode === "daily"   (everyday social register)
//   🍽️ Sipariş → scenes.mode === "order"
//   🎉 Espri   → scenes.mode === "banter"
//   💪 Spor    → scenes.mode === "sport"
//   🩺 Sağlık  → scenes.mode === "health"
//
// SceneMode also has career / academic / professional / personal / testprep,
// which intentionally don't surface here — they roll up into the user-facing
// 8 above (e.g. "career" lives under İş context-wise, but to keep counts
// honest we only count exact matches; this is documented and intentional).

import { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
  RefreshControl,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { signOut } from "../lib/auth";
import { supabase } from "../lib/supabase";
import {
  getCompletedLessonIds,
  getLocalProfile,
  type LocalProfile,
} from "../lib/local-progress";
import { SAMPLE_SCENES, type SceneMode } from "../data/scenes";
import { tokens } from "../theme";

// ---------------------------------------------------------------
// Mode taxonomy
// ---------------------------------------------------------------

type ModeRow = {
  key: SceneMode;
  emoji: string;
  label: string;
};

const MODES: ReadonlyArray<ModeRow> = [
  { key: "flirt", emoji: "🧊", label: "Flört" },
  { key: "work", emoji: "💼", label: "İş" },
  { key: "travel", emoji: "✈️", label: "Seyahat" },
  { key: "daily", emoji: "👥", label: "Sosyal" },
  { key: "order", emoji: "🍽️", label: "Sipariş" },
  { key: "banter", emoji: "🎉", label: "Espri" },
  { key: "sport", emoji: "💪", label: "Spor" },
  { key: "health", emoji: "🩺", label: "Sağlık" },
];

// Precompute total lesson counts per mode at module load — SAMPLE_SCENES is
// a bundled constant, so this never changes between renders or sessions.
const TOTAL_PER_MODE: Record<string, number> = MODES.reduce(
  (acc, m) => {
    acc[m.key] = SAMPLE_SCENES.filter((s) => s.mode === m.key).length;
    return acc;
  },
  {} as Record<string, number>,
);

// ---------------------------------------------------------------
// Screen
// ---------------------------------------------------------------

export default function ProfileScreen() {
  const router = useRouter();
  const [displayName, setDisplayName] = useState<string>("Hoş geldin");
  const [signedIn, setSignedIn] = useState(false);
  const [local, setLocal] = useState<LocalProfile | null>(null);
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [refreshing, setRefreshing] = useState(false);

  const loadAll = useCallback(async () => {
    // Display name lives in AsyncStorage under `lafla.displayName` per the
    // dashboard spec — fallback "Hoş geldin" when not set yet.
    try {
      const name = await AsyncStorage.getItem("lafla.displayName");
      setDisplayName(name && name.trim().length > 0 ? name : "Hoş geldin");
    } catch {
      setDisplayName("Hoş geldin");
    }

    try {
      const { data } = await supabase.auth.getUser();
      setSignedIn(!!data.user);
    } catch {
      setSignedIn(false);
    }

    try {
      const [p, c] = await Promise.all([
        getLocalProfile(),
        getCompletedLessonIds(),
      ]);
      setLocal(p);
      setCompleted(c);
    } catch {
      // Soft-fail: chips fall back to 0.
    }
  }, []);

  useEffect(() => {
    loadAll();
  }, [loadAll]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadAll();
    setRefreshing(false);
  }, [loadAll]);

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

  const streak = local?.current_streak ?? 0;
  const xp = local?.total_xp ?? 0;
  const completedCount = completed.size;

  // Per-mode completion counts derived from the in-memory Set.
  const completedPerMode: Record<string, number> = MODES.reduce(
    (acc, m) => {
      acc[m.key] = SAMPLE_SCENES.filter(
        (s) => s.mode === m.key && completed.has(s.lessonId),
      ).length;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backBtn}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel="Geri"
        >
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.title}>Profil</Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={tokens.brand.tertiary}
            colors={[tokens.brand.primary]}
            progressBackgroundColor={tokens.bg.surfaceContainer}
          />
        }
      >
        {/* Greeting */}
        <Text style={styles.greeting} numberOfLines={1}>
          {displayName}
        </Text>

        {/* Hero stat strip — 3 chips. */}
        <View style={styles.heroRow}>
          <StatChip
            icon="🔥"
            value={String(streak)}
            label="gün seri"
            accent={tokens.brand.primary}
            glow={tokens.brand.primaryGlow}
          />
          <StatChip
            icon="⭐"
            value={String(xp)}
            label="XP"
            accent={tokens.brand.tertiary}
            glow={tokens.brand.tertiaryGlow}
          />
          <StatChip
            icon="✅"
            value={String(completedCount)}
            label="tamamlanan"
            accent={tokens.brand.tertiary}
            glow={tokens.brand.tertiaryGlow}
          />
        </View>

        {/* Modes */}
        <Text style={styles.sectionLabel}>MODLAR</Text>
        <View style={styles.modeList}>
          {MODES.map((m) => {
            const total = TOTAL_PER_MODE[m.key] ?? 0;
            const done = completedPerMode[m.key] ?? 0;
            const ratio = total > 0 ? Math.min(1, done / total) : 0;
            return (
              <ModeRowView
                key={m.key}
                emoji={m.emoji}
                label={m.label}
                done={done}
                total={total}
                ratio={ratio}
                onPress={() => router.push("/home" as never)}
              />
            );
          })}
        </View>

        {/* Account */}
        <Text style={styles.sectionLabel}>HESAP</Text>
        <View style={styles.accountCard}>
          <AccountRow
            icon="⚙️"
            label="Ayarlar"
            onPress={() => router.push("/settings" as never)}
          />
          <View style={styles.rowDivider} />
          <AccountRow
            icon="🗑️"
            label="Hesabımı sil"
            danger
            onPress={() => router.push("/settings" as never)}
          />
        </View>

        {signedIn && (
          <Pressable
            style={({ pressed }) => [
              styles.signOutBtn,
              pressed && styles.pressed,
            ]}
            onPress={handleSignOut}
            accessibilityRole="button"
            accessibilityLabel="Çıkış yap"
          >
            <Text style={styles.signOutText}>Çıkış yap</Text>
          </Pressable>
        )}

        <Text style={styles.versionText}>Lafla v0.1.0 · Konuş, çalış.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------

interface StatChipProps {
  icon: string;
  value: string;
  label: string;
  accent: string;
  glow: string;
}

function StatChip({ icon, value, label, accent, glow }: StatChipProps) {
  return (
    <View
      style={[
        styles.chip,
        {
          borderColor: accent,
          shadowColor: glow,
        },
      ]}
    >
      <Text style={styles.chipIcon}>{icon}</Text>
      <Text style={[styles.chipValue, { color: accent }]}>{value}</Text>
      <Text style={styles.chipLabel} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

interface ModeRowProps {
  emoji: string;
  label: string;
  done: number;
  total: number;
  ratio: number;
  onPress: () => void;
}

function ModeRowView({ emoji, label, done, total, ratio, onPress }: ModeRowProps) {
  // Animate the fill bar from 0 → ratio on mount. Reanimated v3 — all work
  // happens on the UI thread; no per-frame JS callbacks.
  const fill = useSharedValue(0);
  useEffect(() => {
    fill.value = withTiming(ratio, {
      duration: 650,
      easing: Easing.out(Easing.cubic),
    });
  }, [ratio, fill]);

  const fillStyle = useAnimatedStyle(() => ({
    width: `${fill.value * 100}%`,
  }));

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.modeRow,
        pressed && styles.pressed,
      ]}
      accessibilityRole="button"
      accessibilityLabel={`${label}, ${done} / ${total} tamamlandı`}
    >
      <Text style={styles.modeEmoji}>{emoji}</Text>
      <View style={styles.modeBody}>
        <View style={styles.modeTopRow}>
          <Text style={styles.modeLabel}>{label}</Text>
          <Text style={styles.modeCount}>
            {done} / {total}
          </Text>
        </View>
        <View style={styles.barTrack}>
          <Animated.View style={[styles.barFill, fillStyle]} />
        </View>
      </View>
    </Pressable>
  );
}

interface AccountRowProps {
  icon: string;
  label: string;
  danger?: boolean;
  onPress: () => void;
}

function AccountRow({ icon, label, danger, onPress }: AccountRowProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.accountRow,
        pressed && styles.pressed,
      ]}
      accessibilityRole="button"
      accessibilityLabel={label}
    >
      <Text style={styles.accountIcon}>{icon}</Text>
      <Text
        style={[
          styles.accountLabel,
          danger && { color: tokens.semantic.error },
        ]}
      >
        {label}
      </Text>
      <Text style={styles.accountChevron}>›</Text>
    </Pressable>
  );
}

// ---------------------------------------------------------------
// Styles
// ---------------------------------------------------------------

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
    fontFamily: tokens.font.display,
  },
  spacer: { width: 70 },
  content: {
    paddingHorizontal: tokens.spacing.md,
    paddingTop: tokens.spacing.base,
    paddingBottom: 96,
  },
  greeting: {
    fontSize: 22,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    marginBottom: tokens.spacing.md,
    fontFamily: tokens.font.display,
  },

  // Hero strip
  heroRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: tokens.spacing.lg,
  },
  chip: {
    flex: 1,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    // Neon glow — iOS only honors these; Android falls back to flat border.
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 12,
  },
  chipIcon: {
    fontSize: 22,
  },
  chipValue: {
    fontSize: 22,
    fontWeight: tokens.weight.extrabold,
    fontFamily: tokens.font.display,
  },
  chipLabel: {
    fontSize: 11,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.medium,
    letterSpacing: 0.4,
    textAlign: "center",
  },

  // Section
  sectionLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 1.4,
    marginBottom: 10,
    marginTop: 4,
  },

  // Mode rows
  modeList: {
    gap: 8,
    marginBottom: tokens.spacing.lg,
  },
  modeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderRadius: tokens.radius.base,
    borderWidth: 1,
    borderColor: tokens.border.light,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  modeEmoji: {
    fontSize: 24,
  },
  modeBody: {
    flex: 1,
    gap: 8,
  },
  modeTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  modeLabel: {
    fontSize: 15,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
  },
  modeCount: {
    fontSize: 13,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.secondary,
    fontVariant: ["tabular-nums"],
  },
  barTrack: {
    height: 6,
    borderRadius: 3,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    backgroundColor: tokens.brand.primary,
    borderRadius: 3,
  },

  // Account
  accountCard: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    borderWidth: 1,
    borderColor: tokens.border.light,
    overflow: "hidden",
    marginBottom: tokens.spacing.md,
  },
  accountRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 14,
  },
  accountIcon: {
    fontSize: 20,
  },
  accountLabel: {
    flex: 1,
    fontSize: 15,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
  },
  accountChevron: {
    fontSize: 22,
    color: tokens.text.tertiary,
  },
  rowDivider: {
    height: 1,
    backgroundColor: tokens.border.light,
    marginLeft: 50,
  },

  // Sign out
  signOutBtn: {
    backgroundColor: tokens.semantic.errorContainer,
    borderRadius: tokens.radius.base,
    borderWidth: 1,
    borderColor: tokens.semantic.error,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: tokens.spacing.md,
  },
  signOutText: {
    color: tokens.semantic.error,
    fontWeight: tokens.weight.bold,
    fontSize: 15,
  },

  pressed: {
    opacity: 0.7,
  },

  versionText: {
    textAlign: "center",
    color: tokens.text.tertiary,
    fontSize: 12,
    marginTop: tokens.spacing.base,
  },
});
