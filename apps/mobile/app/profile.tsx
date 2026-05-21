// Profile screen — premium stats dashboard (Neon Noir).
//
// Replaces the previous settings-style list with a Strava/Whoop-flavored
// dashboard: hero stat strip (streak / XP / completed), per-mode progress
// rails for the 6 canonical modes, then a slim account section at the
// bottom. All data is read locally; no network on mount.
//
// Mode taxonomy (post-2026-05-20 6-mode cut — matches onboarding chips):
//   💕 Flört     → scenes.mode === "flirt"
//   💼 İş        → scenes.mode === "work"   (work + career + professional merged)
//   🍻 Bar       → scenes.mode === "bar"
//   ✈️ Havaalanı → scenes.mode === "airport"
//   ☕ Günlük    → scenes.mode === "daily"  (daily + personal merged)
//   🍽️ Sipariş   → scenes.mode === "order"

import { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
  RefreshControl,
  Share,
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
  getInterests,
  getLocalProfile,
  type LocalProfile,
} from "../lib/local-progress";
import { SAMPLE_SCENES, type SceneMode } from "../data/scenes";
import {
  getCefrLevel,
  getRecentDecay,
  type CefrLevel,
} from "../lib/cefr-level";
import {
  getShieldCount,
  getMonthlyGrant,
  recentShieldUseIso,
} from "../lib/streak-shield";
import {
  getMyReferralCode,
  shareMessage as referralShareMessage,
} from "../lib/referral";
import { interestsToModes } from "../lib/interest-mapping";
import { tokens } from "../theme";
import { TabBar } from "../components/TabBar";

// ---------------------------------------------------------------
// Mode taxonomy
// ---------------------------------------------------------------

type ModeRow = {
  key: SceneMode;
  emoji: string;
  label: string;
};

// 6 mod (2026-05-20 cut). Onboarding chip'leri ile aynı sıra ve emoji.
const MODES: ReadonlyArray<ModeRow> = [
  { key: "flirt",   emoji: "💕", label: "Flört" },
  { key: "work",    emoji: "💼", label: "İş" },
  { key: "bar",     emoji: "🍻", label: "Bar" },
  { key: "airport", emoji: "✈️", label: "Havaalanı" },
  { key: "daily",   emoji: "☕", label: "Günlük" },
  { key: "order",   emoji: "🍽️", label: "Sipariş" },
  { key: "ielts",   emoji: "🎓", label: "IELTS" },
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

// Sanitize a display name for safe inline rendering. Strips control chars,
// collapses whitespace, trims, and visually truncates long names. Casing is
// preserved verbatim ("berk" stays "berk"). The stored value is unchanged.
function sanitizeName(raw: string | null | undefined): string {
  if (!raw) return "";
  // eslint-disable-next-line no-control-regex
  const cleaned = raw.replace(/[ -]/g, "").replace(/\s+/g, " ").trim();
  if (cleaned.length <= 30) return cleaned;
  return cleaned.slice(0, 28) + "…";
}

export default function ProfileScreen() {
  const router = useRouter();
  // Empty string means "no name set" so the greeting renders as plain
  // "Merhaba" without a trailing comma.
  const [displayName, setDisplayName] = useState<string>("");
  const [signedIn, setSignedIn] = useState(false);
  const [local, setLocal] = useState<LocalProfile | null>(null);
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [refreshing, setRefreshing] = useState(false);
  // Onboarding-derived prefs. `cefrLevel` powers the 4th StatChip; the
  // interest set powers the visible MODES list below. Both default to null
  // so the dashboard degrades gracefully on first launch.
  const [cefrLevel, setCefrLevelState] = useState<CefrLevel | null>(null);
  // CEFR rosette zenginleştirme (2026-05-21 — Erosion sürümü).
  // cefrProgress = fractional kazanım (0..1). Recent decay > 0 ise son
  // aşınmayı kırmızı pill ile göster. Hem switch-trigger #3 (delta sayısı)
  // hem CEFR Erosion (loss-aversion) için tek satır okuma.
  const [cefrProgress, setCefrProgress] = useState<number>(0);
  const [recentDecay, setRecentDecay] = useState<number>(0);
  const [visibleModes, setVisibleModes] =
    useState<ReadonlyArray<ModeRow>>(MODES);
  // Streak Shield state — switch-trigger #2 (Adım 2, 2026-05-20).
  // shieldCount = bu ay kalan shield sayısı (premium: 2'den, free: 0'dan).
  // monthlyGrant = bilgi amaçlı tooltip (gönderiliyor mu / gönderilmiyor mu).
  // recentSave = son 24h içinde shield kullanıldıysa ISO timestamp.
  const [shieldCount, setShieldCount] = useState<number>(0);
  const [monthlyGrant, setMonthlyGrant] = useState<number>(0);
  const [recentShieldSave, setRecentShieldSave] = useState<string | null>(null);

  const loadAll = useCallback(async () => {
    // Display name lives in AsyncStorage under `lafla.displayName` per the
    // dashboard spec. Sanitize before storing in state so render-time logic
    // doesn't need to defend against control chars or huge names.
    try {
      const name = await AsyncStorage.getItem("lafla.displayName");
      setDisplayName(sanitizeName(name));
    } catch {
      setDisplayName("");
    }

    try {
      const { data } = await supabase.auth.getUser();
      setSignedIn(!!data.user);
    } catch {
      setSignedIn(false);
    }

    try {
      const [p, c, lvl, interests, shields, grant, recent, decay, progRaw] =
        await Promise.all([
          getLocalProfile(),
          getCompletedLessonIds(),
          getCefrLevel(),
          getInterests(),
          getShieldCount(),
          getMonthlyGrant(),
          recentShieldUseIso(),
          getRecentDecay(),
          AsyncStorage.getItem("lafla.cefr.progress").catch(() => null),
        ]);
      setLocal(p);
      setCompleted(c);
      setCefrLevelState(lvl);
      setShieldCount(shields);
      setMonthlyGrant(grant);
      setRecentShieldSave(recent);
      setRecentDecay(decay);
      const prog = progRaw ? parseFloat(progRaw) : 0;
      setCefrProgress(Number.isFinite(prog) && prog >= 0 && prog <= 1 ? prog : 0);
      // Filter the 8-mode dashboard down to modes the user expressed
      // interest in. An empty interests list (skipped onboarding / legacy
      // install) keeps the full 8-mode list — current behaviour. Modes are
      // intersected against the user-facing surface set so the dashboard
      // never sprouts hidden modes like `career` or `professional`.
      if (interests.length > 0) {
        const allowed = new Set<SceneMode>(interestsToModes(interests));
        const filtered = MODES.filter((m) => allowed.has(m.key));
        setVisibleModes(filtered.length > 0 ? filtered : MODES);
      } else {
        setVisibleModes(MODES);
      }
    } catch {
      // Soft-fail: chips fall back to 0 and the mode list to the full 8.
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

  // Per-mode completion counts derived from the in-memory Set. We compute
  // for ALL 8 canonical modes (not just visibleModes) because precompute
  // is cheap and lets the chip values stay correct if the user toggles
  // interests in settings later in the same session.
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
        {/* Greeting — "Merhaba, {name}" or just "Merhaba" if name unset.
            Keeps the heading size/colour from the previous raw-displayName
            rendering; only the content changes. */}
        <Text style={styles.greeting} numberOfLines={1}>
          {displayName ? `Merhaba, ${displayName}` : "Merhaba"}
        </Text>

        {/* Hero stat strip — 4 chips: streak, XP, completed, and the user's
            current CEFR level. Level chip renders "—" until onboarding hydrates
            cefrLevel (or the user has skipped the level step entirely) so the
            row never collapses to 3 chips mid-render. */}
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
          <StatChip
            icon="📚"
            value={cefrLevel ? `${cefrLevel}${cefrProgress > 0 ? `+${cefrProgress.toFixed(2)}` : ""}` : "—"}
            label="seviye"
            accent={tokens.brand.primary}
            glow={tokens.brand.primaryGlow}
          />
        </View>

        {/* CEFR Erosion rozeti — yetişkin loss-aversion (2026-05-21).
            recentDecay > 0 ise son ihmal aşınmasını sayısal göster.
            Hearts/Lives'tan çok daha mature: gerçek başarı metriği
            kullanıcının önünde geriliyor. Premium kullanıcıda decay
            zaten 0; pill render etmiyor.

            Eğer aşınma yoksa ve progress > 0 ise "+0.04 bu sahnede"
            yerine tek satır pozitif okuma: "%X · B2'ye yaklaşıyorsun". */}
        {cefrLevel && recentDecay > 0 && (
          <View style={styles.erosionPill}>
            <Text style={styles.erosionPillLabel}>CEFR AŞINMASI</Text>
            <Text style={styles.erosionPillValue}>
              −{recentDecay.toFixed(2)} · ihmal cezası
            </Text>
          </View>
        )}
        {cefrLevel && recentDecay === 0 && cefrProgress > 0 && (
          <View style={styles.cefrProgressPill}>
            <Text style={styles.cefrProgressPillLabel}>
              {cefrLevel} İLERLEMEN
            </Text>
            <Text style={styles.cefrProgressPillValue}>
              %{Math.round(cefrProgress * 100)} · bir üst seviyeye doğru
            </Text>
          </View>
        )}

        {/* Streak Shield rozeti — sadece premium kullanıcılarda (grant > 0).
            Free kullanıcı için 0/0 olur, anlamsız. Recent save varsa
            "kurtarıldı" altı satırı önce gösterilir (FOMO + reward). */}
        {monthlyGrant > 0 && (
          <View style={styles.shieldRow}>
            <Text style={styles.shieldText}>
              🛡️ {shieldCount} / {monthlyGrant} streak shield
              {monthlyGrant === 2 ? " · bu ay" : ""}
            </Text>
            {recentShieldSave && (
              <Text style={styles.shieldSavedText}>
                ✨ Son 24 saatte 1 shield streak'ini kurtardı
              </Text>
            )}
          </View>
        )}

        {/* Modes — filtered to the user's onboarding-selected interest set.
            Falls back to the full 8 when interests is empty (skipped step or
            legacy install) so we never render a blank dashboard. */}
        <Text style={styles.sectionLabel}>MODLAR</Text>
        <View style={styles.modeList}>
          {visibleModes.map((m) => {
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

        {/* Speak+ — sole paywall entry point. Submission-critical: Apple's
            reviewer needs at least one navigation path to the IAP surface.
            Pre-2026-05-20 the paywall existed as a registered route but had
            zero callers; this row closes that gap. Free-tier hard gating is
            a post-launch decision (cf. APP_REVIEW_NOTES.md). */}
        {/* History — 2026-05-21. Local 200 kayıt ring buffer. Modes filter
            + relative date. Tek sahne row'una basınca scenario re-open. */}
        <Text style={styles.sectionLabel}>İLERLEME</Text>
        <View style={styles.accountCard}>
          <AccountRow
            icon="📜"
            label="Geçmiş sahneler"
            onPress={() => router.push("/history" as never)}
          />
        </View>

        <Text style={styles.sectionLabel}>SPEAK+</Text>
        <View style={styles.accountCard}>
          <AccountRow
            icon="✨"
            label="Speak+ aboneliği"
            onPress={() => router.push("/paywall" as never)}
          />
          {/* Referral — Adım 7 (2026-05-20). MVP: kod paylaşımı, manuel
              bonus award (Supabase referral_code tablosu, admin cron). */}
          <View style={styles.rowDivider} />
          <AccountRow
            icon="🎁"
            label="Arkadaşını davet et — 1 ay ücretsiz"
            onPress={async () => {
              try {
                const code = await getMyReferralCode();
                const msg = referralShareMessage(code, displayName);
                await Share.share({
                  message: msg,
                  url: `https://berkdemirokk.github.io/lafla/?ref=${encodeURIComponent(code)}`,
                });
              } catch {
                Alert.alert("Hata", "Davet linki oluşturulamadı.");
              }
            }}
          />
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
      <TabBar active="profile" />
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

  // Hero strip — 4 chips fit comfortably with reduced gap + slim horizontal
  // padding so the row doesn't wrap or clip on a 360-wide device.
  heroRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: tokens.spacing.sm,
  },
  // Streak Shield rozeti satırı — hero altında.
  shieldRow: {
    marginBottom: tokens.spacing.lg,
    paddingHorizontal: 4,
    gap: 2,
  },
  shieldText: {
    fontSize: 12,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.secondary,
    letterSpacing: 0.2,
  },
  shieldSavedText: {
    fontSize: 11,
    fontWeight: tokens.weight.semibold,
    color: tokens.brand.tertiary,
    letterSpacing: 0.3,
  },
  // CEFR Erosion pill — kırmızı, hero strip altında, dikkat çeker
  // ama paniğe yol açmaz. Tek satır iki bilgi: label + sayısal kayıp.
  erosionPill: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: tokens.spacing.md,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.semantic.errorContainer,
    borderWidth: 1,
    borderColor: tokens.semantic.error,
  },
  erosionPillLabel: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    color: tokens.semantic.error,
    letterSpacing: 1.2,
  },
  erosionPillValue: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    letterSpacing: 0.2,
  },
  // CEFR progress pill — pozitif okuma (decay yokken).
  // Cyan tone — başarı palette. "B1 ilerlemen %32" gibi.
  cefrProgressPill: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: tokens.spacing.md,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
  },
  cefrProgressPillLabel: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.tertiary,
    letterSpacing: 1.2,
  },
  cefrProgressPillValue: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    letterSpacing: 0.2,
  },
  chip: {
    flex: 1,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 6,
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
