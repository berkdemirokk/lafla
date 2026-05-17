// Home feed — TikTok-style vertical pager.
//
// One scenario per screen. Swipe up = next scenario. Tap the CTA (or the
// card) to enter the 4-phase scenario runner. No bottom nav: profile is
// the only escape hatch via the top-right icon. Everything else (skill
// tree, achievements, decks, drills) lives behind the profile screen as
// secondary surfaces.
//
// Card prioritisation (highest first):
//   1. "Review due" — if SRS has cards due, the first item routes to /review
//   2. New scenes that match user CEFR (±1) AND user interests
//   3. New scenes that match CEFR only (interest fallback)
//   4. Completed scenes (review-friendly, ranked last)
//
// All data is local-first. useFocusEffect reloads when the user returns
// from a scenario so completion state and SRS due count refresh
// automatically.

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useFocusEffect } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  useWindowDimensions,
  RefreshControl,
  type ViewToken,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  withSpring,
  Easing,
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

import { SAMPLE_SCENES, type Scene, type CefrLevel } from "../data/scenes";
import {
  getCompletedLessonIds,
  getInterests,
} from "../lib/local-progress";
import { getCefrLevel, getRelevantLevels } from "../lib/cefr-level";
import { getDueCount } from "../lib/srs";
import {
  hapticImpact,
  hapticSelection,
  hapticSuccess,
} from "../lib/feedback";
import { tokens } from "../theme";

// ---------------------------------------------------------------------------
// Mode label map — Turkish, single-word eyebrows above each scene title.
// ---------------------------------------------------------------------------
const MODE_LABEL_TR: Record<string, string> = {
  flirt: "Flört",
  work: "İş",
  banter: "Sohbet",
  order: "Sipariş",
  daily: "Günlük",
  travel: "Seyahat",
  career: "Kariyer",
  academic: "Akademik",
  professional: "Profesyonel",
  personal: "Kişisel",
  testprep: "Sınav",
};

// Special card kinds that aren't scenes (e.g. review prompt).
type ReviewCard = { kind: "review"; dueCount: number };
type SceneCard = { kind: "scene"; scene: Scene; completed: boolean };
type FeedItem = ReviewCard | SceneCard;

interface FeedState {
  cefrLevel: CefrLevel | null;
  interests: string[];
  completed: Set<string>;
  dueCount: number;
  loaded: boolean;
}

const EMPTY: FeedState = {
  cefrLevel: null,
  interests: [],
  completed: new Set(),
  dueCount: 0,
  loaded: false,
};

export default function Feed() {
  const router = useRouter();
  const { height: winHeight } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [state, setState] = useState<FeedState>(EMPTY);
  const [refreshing, setRefreshing] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const load = useCallback(async () => {
    const [cefrLevel, interests, completed, dueCount] = await Promise.all([
      getCefrLevel(),
      getInterests(),
      getCompletedLessonIds(),
      getDueCount(),
    ]);
    setState({
      cefrLevel,
      interests,
      completed,
      dueCount,
      loaded: true,
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      void load();
    }, [load]),
  );

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    hapticSelection();
    await load();
    hapticSuccess();
    setRefreshing(false);
  }, [load]);

  // Build the feed: optional review card + ranked scenes.
  const items = useMemo<FeedItem[]>(() => {
    if (!state.loaded) return [];
    const out: FeedItem[] = [];
    if (state.dueCount > 0) {
      out.push({ kind: "review", dueCount: state.dueCount });
    }
    const ranked = rankScenes(
      SAMPLE_SCENES,
      state.cefrLevel,
      state.interests,
      state.completed,
    );
    for (const s of ranked) {
      out.push({
        kind: "scene",
        scene: s,
        completed: state.completed.has(s.lessonId),
      });
    }
    return out;
  }, [state]);

  const cardHeight = winHeight - insets.top - TOPBAR_HEIGHT;

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index != null) {
        const newIndex = viewableItems[0].index;
        setActiveIndex((prev) => {
          if (prev !== newIndex) hapticSelection();
          return newIndex;
        });
      }
    },
  ).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 60,
  }).current;

  const renderItem = useCallback(
    ({ item, index }: { item: FeedItem; index: number }) => {
      if (item.kind === "review") {
        return (
          <ReviewSlide
            dueCount={item.dueCount}
            height={cardHeight}
            isLast={index === items.length - 1}
            onStart={() => router.push("/review" as never)}
          />
        );
      }
      return (
        <SceneSlide
          scene={item.scene}
          completed={item.completed}
          height={cardHeight}
          isLast={index === items.length - 1}
          onStart={() =>
            router.push(`/scenario/${item.scene.lessonId}` as never)
          }
        />
      );
    },
    [cardHeight, items.length, router],
  );

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <StatusBar style="light" />

      {/* Top bar — brand + profile entry */}
      <View style={styles.topBar}>
        <Text style={styles.brand}>Lafla</Text>
        <Pressable
          onPress={() => {
            hapticImpact("light");
            router.push("/profile" as never);
          }}
          style={({ pressed }) => [
            styles.profileBtn,
            pressed && styles.pressed,
          ]}
          accessibilityLabel="Profil"
          accessibilityRole="button"
        >
          <Text style={styles.profileGlyph}>◐</Text>
        </Pressable>
      </View>

      {/* Vertical pager */}
      {items.length === 0 ? (
        <EmptyState
          loaded={state.loaded}
          onUpdateInterests={() => router.push("/onboarding" as never)}
        />
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item, idx) =>
            item.kind === "review" ? `review-${idx}` : item.scene.id
          }
          renderItem={renderItem}
          pagingEnabled
          showsVerticalScrollIndicator={false}
          decelerationRate="fast"
          snapToAlignment="start"
          getItemLayout={(_, i) => ({
            length: cardHeight,
            offset: cardHeight * i,
            index: i,
          })}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={tokens.brand.tertiary}
              colors={[tokens.brand.tertiary]}
            />
          }
        />
      )}
    </SafeAreaView>
  );
}

// ===========================================================================
// Scene scoring — same logic as the old feed, but returns the full ordered
// pool (no 12-item slice) so the pager can scroll indefinitely.
// ===========================================================================
function rankScenes(
  pool: ReadonlyArray<Scene>,
  cefr: CefrLevel | null,
  interests: string[],
  completed: Set<string>,
): Scene[] {
  const relevant = new Set(cefr ? getRelevantLevels(cefr) : []);
  const interestSet = new Set(interests);

  const passesLevel = (s: Scene) =>
    !cefr || !s.cefrLevel || relevant.has(s.cefrLevel);

  const score = (s: Scene): number => {
    let n = 0;
    if (interestSet.size > 0 && interestSet.has(s.mode)) n -= 20;
    if (cefr && s.cefrLevel === cefr) n -= 5;
    if (completed.has(s.lessonId)) n += 1000;
    return n;
  };

  return [...pool.filter(passesLevel)].sort((a, b) => score(a) - score(b));
}

// ===========================================================================
// Slide components.
// ===========================================================================

interface SceneSlideProps {
  scene: Scene;
  completed: boolean;
  height: number;
  isLast: boolean;
  onStart: () => void;
}

function SceneSlide({
  scene,
  completed,
  height,
  isLast,
  onStart,
}: SceneSlideProps) {
  const cleanTitle = scene.title.replace(/\s+/g, " ").trim();
  const modeLabel = MODE_LABEL_TR[scene.mode] ?? scene.mode.toUpperCase();

  // Emoji pulse — subtle breathing animation, calls attention without distracting.
  const emojiScale = useSharedValue(1);
  useEffect(() => {
    emojiScale.value = withRepeat(
      withSequence(
        withTiming(1.06, { duration: 1400, easing: Easing.inOut(Easing.quad) }),
        withTiming(1, { duration: 1400, easing: Easing.inOut(Easing.quad) }),
      ),
      -1,
      false,
    );
  }, [emojiScale]);
  const emojiStyle = useAnimatedStyle(() => ({
    transform: [{ scale: emojiScale.value }],
  }));

  // CTA press — spring scale + haptic for tactile confirmation.
  const ctaScale = useSharedValue(1);
  const ctaStyle = useAnimatedStyle(() => ({
    transform: [{ scale: ctaScale.value }],
  }));
  const handleCtaPress = () => {
    hapticImpact("medium");
    ctaScale.value = withSequence(
      withTiming(0.94, { duration: 80 }),
      withSpring(1, { damping: 12, stiffness: 200 }),
    );
    onStart();
  };

  return (
    <Pressable onPress={handleCtaPress}>
      <View style={[slideStyles.container, { height }]}>
        <View style={slideStyles.content}>
          <Animated.Text style={[slideStyles.emoji, emojiStyle]}>
            {scene.emoji}
          </Animated.Text>
          <Text style={slideStyles.eyebrow}>{modeLabel.toUpperCase()}</Text>
          <Text style={slideStyles.title} numberOfLines={4}>
            {cleanTitle}
          </Text>
          <Text style={slideStyles.description} numberOfLines={3}>
            {scene.description}
          </Text>
          <View style={slideStyles.metaRow}>
            <Text style={slideStyles.metaText}>{scene.durationMin} dk</Text>
            {scene.cefrLevel ? (
              <>
                <Text style={slideStyles.metaDot}>·</Text>
                <Text style={slideStyles.metaText}>{scene.cefrLevel}</Text>
              </>
            ) : null}
            {completed ? (
              <>
                <Text style={slideStyles.metaDot}>·</Text>
                <Text style={[slideStyles.metaText, slideStyles.metaDone]}>
                  Tamamlandı
                </Text>
              </>
            ) : null}
          </View>
        </View>

        <View style={slideStyles.cta}>
          <Animated.View style={ctaStyle}>
            <Pressable
              onPress={handleCtaPress}
              style={[
                slideStyles.ctaBtn,
                completed && slideStyles.ctaBtnGhost,
              ]}
            >
              <Text
                style={[
                  slideStyles.ctaLabel,
                  completed && slideStyles.ctaLabelGhost,
                ]}
              >
                {completed ? "Tekrar et" : "Başla"}
              </Text>
            </Pressable>
          </Animated.View>
          {!isLast ? (
            <Text style={slideStyles.swipeHint}>↑ Sonraki</Text>
          ) : (
            <Text style={slideStyles.swipeHint}>Aşağı çek, yenile</Text>
          )}
        </View>
      </View>
    </Pressable>
  );
}

function ReviewSlide({
  dueCount,
  height,
  isLast,
  onStart,
}: {
  dueCount: number;
  height: number;
  isLast: boolean;
  onStart: () => void;
}) {
  // Pulse the 🔁 emoji to signal action needed.
  const emojiScale = useSharedValue(1);
  useEffect(() => {
    emojiScale.value = withRepeat(
      withSequence(
        withTiming(1.1, { duration: 900, easing: Easing.inOut(Easing.quad) }),
        withTiming(1, { duration: 900, easing: Easing.inOut(Easing.quad) }),
      ),
      -1,
      false,
    );
  }, [emojiScale]);
  const emojiStyle = useAnimatedStyle(() => ({
    transform: [{ scale: emojiScale.value }],
  }));

  // CTA spring + haptic.
  const ctaScale = useSharedValue(1);
  const ctaStyle = useAnimatedStyle(() => ({
    transform: [{ scale: ctaScale.value }],
  }));
  const handleCtaPress = () => {
    hapticImpact("medium");
    ctaScale.value = withSequence(
      withTiming(0.94, { duration: 80 }),
      withSpring(1, { damping: 12, stiffness: 200 }),
    );
    onStart();
  };

  return (
    <Pressable onPress={handleCtaPress}>
      <View style={[slideStyles.container, { height }]}>
        <View style={slideStyles.content}>
          <Animated.Text style={[slideStyles.emoji, emojiStyle]}>
            🔁
          </Animated.Text>
          <Text style={[slideStyles.eyebrow, slideStyles.eyebrowAccent]}>
            TEKRAR ZAMANI
          </Text>
          <Text style={slideStyles.title} numberOfLines={3}>
            {dueCount} kelime{"\n"}seni bekliyor
          </Text>
          <Text style={slideStyles.description} numberOfLines={3}>
            Önce dünkü işi bitir. 2 dakikalık hızlı tekrar, sonra yeni
            sahnelere devam.
          </Text>
        </View>

        <View style={slideStyles.cta}>
          <Animated.View style={ctaStyle}>
            <Pressable
              onPress={handleCtaPress}
              style={[slideStyles.ctaBtn, slideStyles.ctaBtnAccent]}
            >
              <Text style={slideStyles.ctaLabel}>Tekrarı başlat</Text>
            </Pressable>
          </Animated.View>
          {!isLast ? (
            <Text style={slideStyles.swipeHint}>↑ Atla, yeni sahne</Text>
          ) : null}
        </View>
      </View>
    </Pressable>
  );
}

function EmptyState({
  loaded,
  onUpdateInterests,
}: {
  loaded: boolean;
  onUpdateInterests: () => void;
}) {
  return (
    <View style={emptyStyles.container}>
      <Text style={emptyStyles.emoji}>{loaded ? "🌱" : "…"}</Text>
      <Text style={emptyStyles.title}>
        {loaded ? "Senin için sahne bulamadık" : "Yükleniyor"}
      </Text>
      {loaded ? (
        <>
          <Text style={emptyStyles.body}>
            İlgi alanlarını veya seviyeni güncelle, akış sana göre yeniden
            kurulsun.
          </Text>
          <Pressable
            onPress={onUpdateInterests}
            style={({ pressed }) => [
              emptyStyles.btn,
              pressed && styles.pressed,
            ]}
          >
            <Text style={emptyStyles.btnLabel}>İlgi alanlarımı güncelle</Text>
          </Pressable>
        </>
      ) : null}
    </View>
  );
}

// ===========================================================================
// Styles.
// ===========================================================================

const TOPBAR_HEIGHT = 52;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: tokens.bg.app,
  },
  topBar: {
    height: TOPBAR_HEIGHT,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brand: {
    fontSize: 22,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.5,
    fontFamily: tokens.font.display,
  },
  profileBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: tokens.border.outline,
    alignItems: "center",
    justifyContent: "center",
  },
  profileGlyph: {
    color: tokens.text.primary,
    fontSize: 18,
    lineHeight: 18,
    fontWeight: tokens.weight.bold,
  },
  pressed: {
    opacity: 0.8,
  },
});

const slideStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    paddingTop: 24,
    paddingBottom: 32,
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    gap: 16,
  },
  emoji: {
    fontSize: 72,
    marginBottom: 8,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.tertiary,
    letterSpacing: 2,
  },
  eyebrowAccent: {
    color: tokens.brand.tertiary,
  },
  title: {
    fontSize: 36,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -1,
    lineHeight: 42,
    fontFamily: tokens.font.display,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: tokens.text.secondary,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 4,
  },
  metaText: {
    fontSize: 13,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.tertiary,
    letterSpacing: 0.3,
  },
  metaDot: {
    fontSize: 13,
    color: tokens.text.tertiary,
  },
  metaDone: {
    color: tokens.brand.tertiary,
  },
  cta: {
    gap: 14,
    alignItems: "center",
  },
  ctaBtn: {
    width: "100%",
    paddingVertical: 18,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 6,
  },
  ctaBtnGhost: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: tokens.border.outline,
    shadowOpacity: 0,
  },
  ctaBtnAccent: {
    backgroundColor: tokens.brand.tertiary,
    shadowColor: tokens.brand.tertiary,
  },
  ctaLabel: {
    fontSize: 17,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.onPrimary,
    letterSpacing: 0.3,
  },
  ctaLabelGhost: {
    color: tokens.text.primary,
  },
  swipeHint: {
    fontSize: 12,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.medium,
    letterSpacing: 0.4,
  },
  pressed: {
    opacity: 0.92,
    transform: [{ scale: 0.995 }],
  },
});

const emptyStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    gap: 12,
  },
  emoji: {
    fontSize: 56,
  },
  title: {
    fontSize: 22,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    textAlign: "center",
  },
  body: {
    fontSize: 15,
    lineHeight: 22,
    color: tokens.text.secondary,
    textAlign: "center",
  },
  btn: {
    marginTop: 16,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primary,
  },
  btnLabel: {
    fontSize: 15,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.onPrimary,
  },
});
