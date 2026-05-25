// Lafla — Akış (Home feed) — TikTok/Bumble vertical swipe.
//
// 2026-05-21 — 3-ekran refactor. Önceden home çok yüklüydü (banner cluster
// + daily plan + tutorial + feed). Şimdi:
//   /today   → goal-driven (banners + plan + tutorial)
//   /home    → bu dosya: SADECE feed (TikTok swipe)
//   /profile → self-reflective
//
// Bu ekran kullanıcı "boş zamanım var, sahne karıştırayım" diyerek
// gelir. Banner yok, kafa karıştırıcı CTA yok — sadece full-screen
// swipe-able sahne kartları.

import { useCallback, useMemo, useRef, useState } from "react";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import {
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  type LayoutChangeEvent,
  type ListRenderItemInfo,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  getLocalProfile,
  getCompletedLessonIds,
  getInterests,
  type LocalProfile,
} from "../lib/local-progress";
import { SAMPLE_SCENES, type Scene, type SceneMode } from "../data/scenes";
import { getScenario } from "../lib/scenario";
import {
  getCefrLevel,
  getRelevantLevels,
  type CefrLevel,
} from "../lib/cefr-level";
import { interestsToModes } from "../lib/interest-mapping";
import { tokens } from "../theme";
import { SwipeSceneCard } from "../components/SwipeSceneCard";
import { AdBanner } from "../components/AdBanner";
import { TabBar, TAB_BAR_HEIGHT } from "../components/TabBar";

const K_DISPLAY_NAME = "lafla.displayName";
const MIN_FEED = 5;
const SCREEN = Dimensions.get("window");
const TOP_BAR_HEIGHT = 48;

// Mode label haritası — top bar başlığında ve aria-label'larda kullanılır.
// Order ve sceneMode değerleri data/scenes.ts SceneMode tipiyle birebir.
// 2026-05-24 — emoji eklendi (onboarding chip'leriyle senkron); başlıkta
// görsel ayırıcı olarak kullanılır.
const MODE_LABELS: Record<SceneMode, string> = {
  flirt: "Flört",
  work: "İş",
  bar: "Bar",
  airport: "Havaalanı",
  daily: "Günlük",
  order: "Sipariş",
  ielts: "IELTS",
};

const MODE_EMOJI: Record<SceneMode, string> = {
  flirt: "💕",
  work: "💼",
  bar: "🍻",
  airport: "✈️",
  daily: "☕",
  order: "🍽️",
  ielts: "🎓",
};

function isSceneMode(value: unknown): value is SceneMode {
  return (
    typeof value === "string" &&
    (value === "flirt" ||
      value === "work" ||
      value === "bar" ||
      value === "airport" ||
      value === "daily" ||
      value === "order" ||
      value === "ielts")
  );
}

// ───────────────────────────────────────────────────────────────
// Deterministic shuffle (seeded by date)
// ───────────────────────────────────────────────────────────────

function todaySeed(): number {
  const d = new Date();
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

function hashString(input: string, seed: number): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  h ^= seed;
  h = Math.imul(h, 16777619) >>> 0;
  return h >>> 0;
}

interface FeedState {
  profile: LocalProfile | null;
  completed: Set<string>;
  hydrated: boolean;
  cefrLevel: CefrLevel | null;
  interestModes: SceneMode[] | null;
  displayName: string;
}

const EMPTY: FeedState = {
  profile: null,
  completed: new Set(),
  hydrated: false,
  cefrLevel: null,
  interestModes: null,
  displayName: "",
};

export default function Home() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [state, setState] = useState<FeedState>(EMPTY);
  const listRef = useRef<FlatList<Scene>>(null);
  const lastIndexRef = useRef(0);

  // 2026-05-23 — Mode filter override.
  // Profile ekranındaki mod chip'leri "/home?mode=<key>" ile push eder.
  // Param varsa o mod tek başına filtrelenir (interests + cefr cascade'ini
  // bypass eder, sadece CEFR ±1 kalır). Tab nav "Akış" tıklayınca param
  // gitsin diye router.replace("/home") çalışıyor — natural reset.
  const params = useLocalSearchParams<{ mode?: string | string[] }>();
  const rawMode = Array.isArray(params.mode) ? params.mode[0] : params.mode;
  const modeOverride: SceneMode | null = isSceneMode(rawMode) ? rawMode : null;

  // 2026-05-23 — Card height ölçümü onLayout ile.
  // Önceki: SCREEN.height - insets - topBar - tabBar. AdBanner yüksekliğini
  // kaçırıyordu → snapToInterval kartın görünür yüksekliğinden büyüktü →
  // her swipe 1.1-1.2 kart kayıyordu. Şimdi FlatList'in container'ı
  // onLayout'la measured height'i veriyor, snap + getItemLayout tam.
  const [measuredHeight, setMeasuredHeight] = useState<number | null>(null);
  const onListContainerLayout = useCallback((e: LayoutChangeEvent) => {
    const h = e.nativeEvent.layout.height;
    if (h > 0 && h !== measuredHeight) setMeasuredHeight(h);
  }, [measuredHeight]);

  const load = useCallback(async () => {
    const [profile, completed, cefrLevel, interests, nameRaw] =
      await Promise.all([
        getLocalProfile(),
        getCompletedLessonIds(),
        getCefrLevel(),
        getInterests(),
        AsyncStorage.getItem(K_DISPLAY_NAME).catch(() => null),
      ]);
    const interestModes =
      interests.length > 0 ? interestsToModes(interests) : null;
    setState({
      profile,
      completed,
      hydrated: true,
      cefrLevel,
      interestModes,
      displayName: nameRaw ?? "",
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      void load();
    }, [load]),
  );

  // Filter cascade (interests + CEFR ±1; both optional, fallbacks intact).
  const playableShuffled = useMemo<Scene[]>(() => {
    const seed = todaySeed();
    const playable = SAMPLE_SCENES.filter(
      (s) => getScenario(s.lessonId) !== null,
    );

    const filterByInterests = (list: Scene[]): Scene[] => {
      // modeOverride > interests precedence: kullanıcı profilden bir mod chip
      // tıkladıysa onun tek başına filtrelenmesini ister, interest cascade'i
      // ezilir. Bu olmadan "İş" tıklayıp "günlük" sahnesi görmek gibi
      // 2026-05-23 bug'ı oluşuyordu (intent ↔ feed mismatch).
      if (modeOverride) return list.filter((s) => s.mode === modeOverride);
      if (!state.interestModes || state.interestModes.length === 0) return list;
      const set = new Set(state.interestModes);
      return list.filter((s) => set.has(s.mode));
    };
    const filterByCefr = (list: Scene[]): Scene[] => {
      if (!state.cefrLevel) return list;
      const allowed = new Set(getRelevantLevels(state.cefrLevel));
      return list.filter((s) => !s.cefrLevel || allowed.has(s.cefrLevel));
    };

    let filtered = filterByCefr(filterByInterests(playable));
    // modeOverride aktifse interest fallback yapılmamalı — kullanıcı net bir
    // mod istedi, az sahne varsa CEFR'a düşülür ama interest'e geri dönmez.
    if (filtered.length < MIN_FEED && !modeOverride) {
      filtered = filterByCefr(playable);
    }
    // Bu safety net hem normal akışta hem modeOverride aktifken devrede:
    // o mod hiç sahnesi yoksa yine tüm playable'a düş (boş feed'den iyi).
    if (filtered.length < MIN_FEED) filtered = playable;

    return filtered
      .map((s) => ({
        scene: s,
        key: hashString(s.id, seed) - (s.isNew ? 0x40000000 : 0),
      }))
      .sort((a, b) => a.key - b.key)
      .map((x) => x.scene);
  }, [state.cefrLevel, state.interestModes, modeOverride]);

  // Completed scenes drift to back
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

  const goScene = useCallback(
    (lessonId: string) => {
      router.push(`/scenario/${lessonId}` as never);
    },
    [router],
  );

  const goSkip = useCallback(
    (_lessonId: string) => {
      const total = scenes.length;
      if (total <= 1) return;
      // 2026-05-25 — Sonsuz modulo loop yerine son sahneye gelince başa
      // dönme. Listenin sonundaysak haptik feedback + en başa dön; user
      // "hepsini gördüm" sinyali alır. Önceki modulo bypass kullanıcıyı
      // sahte sonsuz scroll içinde bırakıyordu.
      const nextRaw = lastIndexRef.current + 1;
      if (nextRaw >= total) {
        // Son sahnedeyiz — başa sar, ileride EmptyState eklenebilir.
        listRef.current?.scrollToIndex({ index: 0, animated: true });
        return;
      }
      listRef.current?.scrollToIndex({ index: nextRaw, animated: true });
    },
    [scenes.length],
  );

  // measured > computed: onLayout sonrası gerçek yüksekliği kullan. İlk
  // render'da measured yok → computed fallback (AdBanner hesaba katılmaz
  // ama bu sadece ilk frame; ikinci frame'de measured devreye girer).
  const computedHeight =
    SCREEN.height - insets.top - insets.bottom - TOP_BAR_HEIGHT - TAB_BAR_HEIGHT;
  const cardHeight = measuredHeight ?? computedHeight;

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
        try {
          void Haptics.selectionAsync();
        } catch {}
      }
    },
    [cardHeight],
  );

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="light" />

      {/* Top bar — başlık + (varsa) filtrelenen mod chip'i + "tümü" reset.
          2026-05-24 polish: mod aktifken emoji ile birlikte gösterilir
          ("Akış · 💕 Flört"); filter clear chip cyan accent (eski jenerik
          gri yerine — Neon Noir semantic). */}
      <View style={styles.topBar}>
        <Text style={styles.title} numberOfLines={1}>
          Akış
          {modeOverride
            ? ` · ${MODE_EMOJI[modeOverride]} ${MODE_LABELS[modeOverride]}`
            : ""}
        </Text>
        {modeOverride && (
          <Pressable
            onPress={() => router.replace("/home" as never)}
            style={({ pressed }) => [
              styles.clearFilter,
              pressed && { opacity: 0.6 },
            ]}
            accessibilityRole="button"
            accessibilityLabel="Mod filtresini kaldır, tüm akışı göster"
            hitSlop={8}
          >
            <Text style={styles.clearFilterText}>Tümü ✕</Text>
          </Pressable>
        )}
      </View>

      {/* FlatList container — onLayout ile measured height'i alır.
          flex:1 sayesinde topBar + AdBanner + TabBar arasında kalan alanı
          tam kaplar. Bu measured height snapToInterval ile birebir
          olduğu için her swipe tam 1 kart kayar. */}
      <View style={styles.listContainer} onLayout={onListContainerLayout}>
        {scenes.length === 0 ? (
          <EmptyState onTo={() => router.replace("/today" as never)} />
        ) : measuredHeight === null ? (
          // İlk frame: measured yok → boş frame (FlatList'i computed height ile
          // render etmek snap'i bozardı, AdBanner gelmeden önce ölçüm hayalet).
          // measuredHeight ikinci layout pass'inde dolar (genelde <16ms).
          <View />
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
      </View>

      <AdBanner />
      <TabBar active="home" />
    </SafeAreaView>
  );
}

function EmptyState({ onTo }: { onTo: () => void }) {
  return (
    <View style={styles.emptyWrap}>
      <Text style={styles.emptyEmoji}>🌙</Text>
      <Text style={styles.emptyTitle}>Daha çok sahne yakında</Text>
      <Text style={styles.emptySub}>
        İçerik üretildikçe ilk burada görünecek. Bu arada Bugün sekmesindeki
        planına göz at.
      </Text>
      <Pressable
        onPress={onTo}
        style={({ pressed }) => [
          styles.emptyCta,
          pressed && { opacity: 0.86, transform: [{ scale: 0.97 }] },
        ]}
        accessibilityRole="button"
        accessibilityLabel="Bugün sekmesine git"
      >
        <Text style={styles.emptyCtaText}>Bugüne git</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  topBar: {
    height: TOP_BAR_HEIGHT,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -0.5,
    fontFamily: tokens.font.display,
  },
  listContainer: {
    flex: 1,
  },
  // 2026-05-24 — Mod filter clear chip: jenerik gri → cyan accent (Neon Noir
  // semantic, "şu anki override durumu" göstergesi olarak çağrı yapar).
  clearFilter: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
  },
  clearFilterText: {
    fontSize: 12,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.tertiary,
    letterSpacing: 0.3,
    fontFamily: tokens.font.sansBold,
  },
  emptyWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  emptyEmoji: { fontSize: 64, marginBottom: 16 },
  emptyTitle: {
    fontSize: 22,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    textAlign: "center",
    letterSpacing: -0.5,
    fontFamily: tokens.font.display,
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
  emptyCtaText: {
    fontSize: 15,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.onPrimary,
    letterSpacing: 0.4,
  },
});
