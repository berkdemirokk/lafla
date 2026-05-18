// Lafla — Home (TikTok/Bumble hybrid swipe stack)
//
// Replaces the previous Netflix-rows feed. The new home is a vertical
// pager of full-screen scene cards:
//   - One scene per screen, edge-to-edge dark Neon Noir.
//   - Vertical swipe (up/down) snaps between scenes via FlatList paging.
//   - Horizontal swipe + bottom CTAs handle "Konuş ▶" (enter scenario) and
//     "✕ Atla" (skip to next scene).
//
// Data flow preserved from the previous version:
//   - SAMPLE_SCENES filtered by getScenario(s.lessonId) !== null (only
//     playable scenes; we have ~980 scenes but ~146 playable lessons).
//   - Completion via getCompletedLessonIds().
//   - Streak chip via getLocalProfile().current_streak.
//   - Bottom 2-tab nav (Anasayfa / Profil) unchanged.
//
// Ordering: deterministic shuffle (seeded by today's date) so the day's
// first card is stable for a session, then completed scenes drift toward
// the back of the stack. New (isNew) cards get a small boost so featured
// content surfaces early.

import { memo, useCallback, useMemo, useRef, useState } from "react";
import { useFocusEffect, useRouter } from "expo-router";
import {
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  type ListRenderItemInfo,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";

import {
  getLocalProfile,
  getCompletedLessonIds,
  type LocalProfile,
} from "../lib/local-progress";
import { SAMPLE_SCENES, type Scene } from "../data/scenes";
import { getScenario } from "../lib/scenario";
import { tokens } from "../theme";
import { SwipeSceneCard } from "../components/SwipeSceneCard";

// ---------------------------------------------------------------------------
// Layout constants
// ---------------------------------------------------------------------------

const SCREEN = Dimensions.get("window");

// Top chrome: status bar inset + wordmark + streak chip.
// Bottom chrome: 2-tab nav.
// These two are subtracted from the window height to give each card its
// row height for the vertical pager.
const TOP_BAR_HEIGHT = 52;
const BOTTOM_NAV_HEIGHT = 60;

// ---------------------------------------------------------------------------
// Deterministic shuffle (seeded by date)
// ---------------------------------------------------------------------------

// Hash-then-sort: each scene gets a stable numeric key for today's seed.
// This is NOT cryptographic — we just want the same order across a day so
// the "today's pick" never moves mid-session.
function todaySeed(): number {
  const d = new Date();
  // YYYYMMDD as an integer.
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

function hashString(input: string, seed: number): number {
  // 32-bit FNV-1a, mixed with the day seed at the end.
  let h = 2166136261 >>> 0;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  h ^= seed;
  h = Math.imul(h, 16777619) >>> 0;
  return h >>> 0;
}

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------

interface HomeState {
  profile: LocalProfile | null;
  completed: Set<string>;
  hydrated: boolean;
}

const EMPTY_STATE: HomeState = {
  profile: null,
  completed: new Set(),
  hydrated: false,
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Home() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [state, setState] = useState<HomeState>(EMPTY_STATE);
  const listRef = useRef<FlatList<Scene>>(null);
  // Track which card is on screen so haptics fire on snap (and so we can
  // expose an "index/total" hint later if we want).
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndexRef = useRef(0);

  // ---- data hydration -----------------------------------------------------

  const load = useCallback(async () => {
    const [profile, completed] = await Promise.all([
      getLocalProfile(),
      getCompletedLessonIds(),
    ]);
    setState({ profile, completed, hydrated: true });
  }, []);

  useFocusEffect(
    useCallback(() => {
      void load();
    }, [load]),
  );

  // ---- scene ordering -----------------------------------------------------

  // Playable + deterministically shuffled + completed-drift-to-back.
  // We compute the playable list and stable shuffle once (no deps on
  // `completed`) so the order doesn't reshuffle as the user finishes
  // scenes. Completion only adds a "drift" pass which is also stable.
  const playableShuffled = useMemo<Scene[]>(() => {
    const seed = todaySeed();
    const playable = SAMPLE_SCENES.filter(
      (s) => getScenario(s.lessonId) !== null,
    );
    // Sort by hash(scene.id, seed). isNew gets a -1 bias so featured cards
    // bubble toward the top of today's order without dominating it.
    const ranked = playable
      .map((s) => ({
        scene: s,
        key: hashString(s.id, seed) - (s.isNew ? 0x40000000 : 0),
      }))
      .sort((a, b) => a.key - b.key)
      .map((x) => x.scene);
    return ranked;
  }, []);

  // Drift completed scenes to the back, keeping relative order otherwise.
  // This recomputes when `state.completed` changes (i.e. after a session),
  // which is fine: the user is back on Home and a re-sort is expected.
  const scenes = useMemo<Scene[]>(() => {
    if (state.completed.size === 0) return playableShuffled;
    const fresh: Scene[] = [];
    const done: Scene[] = [];
    for (const s of playableShuffled) {
      if (state.completed.has(s.lessonId)) done.push(s);
      else fresh.push(s);
    }
    return fresh.concat(done);
  }, [playableShuffled, state.completed]);

  const streak = state.profile?.current_streak ?? 0;

  // ---- callbacks ----------------------------------------------------------

  const goScene = useCallback(
    (lessonId: string) => {
      router.push(`/scenario/${lessonId}` as never);
    },
    [router],
  );

  // Skip = advance to next card programmatically. We don't mutate the
  // playable list; we just nudge the pager. If we're already at the last
  // card, wrap to the first (TikTok behavior — infinite-ish feed feel).
  const goSkip = useCallback(
    (_lessonId: string) => {
      const total = scenes.length;
      if (total <= 1) return;
      const next = (lastIndexRef.current + 1) % total;
      listRef.current?.scrollToIndex({ index: next, animated: true });
    },
    [scenes.length],
  );

  // ---- card height: window minus chrome ----------------------------------

  // We compute this in render rather than useMemo because Dimensions can
  // change on orientation/resize, and the cost is trivial.
  const cardHeight =
    SCREEN.height - insets.top - insets.bottom - TOP_BAR_HEIGHT - BOTTOM_NAV_HEIGHT;

  // ---- FlatList wiring ----------------------------------------------------

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Scene>) => (
      <SwipeSceneCard
        scene={item}
        completed={state.completed.has(item.lessonId)}
        cardHeight={cardHeight}
        onEnter={goScene}
        onSkip={goSkip}
      />
    ),
    [cardHeight, goScene, goSkip, state.completed],
  );

  const keyExtractor = useCallback((s: Scene) => s.id, []);

  const getItemLayout = useCallback(
    (_: ArrayLike<Scene> | null | undefined, index: number) => ({
      length: cardHeight,
      offset: cardHeight * index,
      index,
    }),
    [cardHeight],
  );

  const onMomentumScrollEnd = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const y = e.nativeEvent.contentOffset.y;
      const idx = Math.round(y / Math.max(cardHeight, 1));
      if (idx !== lastIndexRef.current) {
        lastIndexRef.current = idx;
        setActiveIndex(idx);
        try {
          void Haptics.selectionAsync();
        } catch {}
      }
    },
    [cardHeight],
  );

  // ---- render -------------------------------------------------------------

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="light" />

      {/* Top bar — wordmark + streak chip. Floats over the cards so it
          doesn't eat into the immersive look but stays reachable. */}
      <View style={styles.topBar}>
        <Text style={styles.wordmark}>Lafla</Text>
        <View style={styles.topBarRight}>
          {streak > 0 ? (
            <View style={styles.streakChip}>
              <Text style={styles.streakChipText}>🔥 {streak} gün</Text>
            </View>
          ) : null}
          {scenes.length > 0 ? (
            <Text style={styles.countText}>
              {Math.min(activeIndex + 1, scenes.length)} / {scenes.length}
            </Text>
          ) : null}
        </View>
      </View>

      {/* Body: vertical pager OR empty state */}
      {scenes.length === 0 ? (
        <EmptyState onProfile={() => router.push("/profile" as never)} />
      ) : (
        <FlatList
          ref={listRef}
          data={scenes}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          pagingEnabled
          showsVerticalScrollIndicator={false}
          snapToInterval={cardHeight}
          snapToAlignment="start"
          decelerationRate="fast"
          disableIntervalMomentum
          getItemLayout={getItemLayout}
          initialNumToRender={2}
          windowSize={3}
          maxToRenderPerBatch={2}
          removeClippedSubviews
          onMomentumScrollEnd={onMomentumScrollEnd}
        />
      )}

      {/* Bottom nav — Anasayfa active, Profil to /profile */}
      <View style={[styles.nav, { height: BOTTOM_NAV_HEIGHT }]}>
        <NavTab label="Anasayfa" active />
        <NavTab label="Profil" onPress={() => router.push("/profile" as never)} />
      </View>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Empty state
// ---------------------------------------------------------------------------

// Falls through only if SAMPLE_SCENES is empty OR every scene fails the
// playable filter. In practice this shouldn't happen — but the previous
// home had no empty state, and showing nothing reads as a broken app.
const EmptyState = memo(function EmptyState({
  onProfile,
}: {
  onProfile: () => void;
}) {
  return (
    <View style={styles.emptyWrap}>
      <Text style={styles.emptyEmoji}>🌙</Text>
      <Text style={styles.emptyTitle}>Daha çok sahne yakında</Text>
      <Text style={styles.emptySub}>
        İçerik üretildikçe ilk burada görünecek. Bu arada profilinden
        ayarlarına göz at.
      </Text>
      <Pressable
        onPress={onProfile}
        style={({ pressed }) => [
          styles.emptyCta,
          pressed && styles.emptyCtaPressed,
        ]}
        accessibilityRole="button"
        accessibilityLabel="Profile git"
      >
        <Text style={styles.emptyCtaText}>Profil</Text>
      </Pressable>
    </View>
  );
});

// ---------------------------------------------------------------------------
// Bottom nav tab
// ---------------------------------------------------------------------------

function NavTab({
  label,
  active,
  onPress,
}: {
  label: string;
  active?: boolean;
  onPress?: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        navStyles.tab,
        pressed && !active && navStyles.tabPressed,
      ]}
      accessibilityRole="tab"
      accessibilityState={{ selected: !!active }}
    >
      <Text style={[navStyles.label, active && navStyles.labelActive]}>
        {label}
      </Text>
    </Pressable>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: tokens.bg.app,
  },
  topBar: {
    height: TOP_BAR_HEIGHT,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  wordmark: {
    fontSize: 26,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -0.8,
  },
  topBarRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  streakChip: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.primary,
  },
  streakChipText: {
    fontSize: 12,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.primary,
    letterSpacing: 0.3,
  },
  countText: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 0.6,
  },

  // ---- empty state ----
  emptyWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  emptyEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    textAlign: "center",
    letterSpacing: -0.5,
  },
  emptySub: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 20,
    color: tokens.text.secondary,
    textAlign: "center",
  },
  emptyCta: {
    marginTop: 22,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primary,
  },
  emptyCtaPressed: {
    opacity: 0.86,
    transform: [{ scale: 0.97 }],
  },
  emptyCtaText: {
    fontSize: 15,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.onPrimary,
    letterSpacing: 0.4,
  },

  // ---- bottom nav ----
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
    backgroundColor: tokens.bg.surfaceContainerLowest,
  },
});

const navStyles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  tabPressed: {
    opacity: 0.7,
  },
  label: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 0.3,
  },
  labelActive: {
    color: tokens.brand.primary,
  },
});
