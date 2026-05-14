// Home feed — Adult coaching layout.
//
// Replaces the cartoon-y stats-strip + paged scene cards with a calm,
// magazine-style scroll: Maya greeting → Today's Plan → Review queue →
// (optional) Mistakes / Active mission → Curated scene recommendations →
// Collapsed "more" sections (listening, reading, decks, drills) →
// Restrained bottom nav.
//
// All data is local-first. useFocusEffect refreshes the feed each time the
// user returns to this screen so newly-completed lessons / programs / SRS
// updates appear without a manual reload.
//
// Optional modules (mistake-tracker, missions, CoachAvatar) are imported
// defensively — if a module is not yet built the section silently no-ops.

import { useCallback, useMemo, useState } from "react";
import { useRouter, useFocusEffect } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import { TodaysPlanCard } from "../components/TodaysPlanCard";
import { ReviewBanner } from "../components/ReviewBanner";
import { SAMPLE_SCENES, type Scene, type CefrLevel } from "../data/scenes";
import {
  getCompletedLessonIds,
  getInterests,
} from "../lib/local-progress";
import {
  getCoachGreeting,
  getCoachState,
  type CoachState,
} from "../lib/coach";
import {
  getCefrLevel,
  getRelevantLevels,
} from "../lib/cefr-level";
import {
  getActiveProgram,
  getProgramDef,
  getTodaysPlan,
  type DailyPlan,
  type ProgramDef,
  type ProgramState,
} from "../lib/programs";
import { getDueCount } from "../lib/srs";
import { tokens } from "../theme";

// ---------------------------------------------------------------------------
// Defensive optional imports — parallel agents may not have landed yet.
// Each is wrapped in a require() try/catch so missing modules degrade
// gracefully (the corresponding section just doesn't render).
// ---------------------------------------------------------------------------

type MistakeApi = {
  getActiveMistakeCount?: () => Promise<number>;
};
let mistakeApi: MistakeApi | null = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  mistakeApi = require("../lib/mistake-tracker") as MistakeApi;
} catch {
  mistakeApi = null;
}

type ActiveMission = {
  id: string;
  title_tr: string;
  progress: number; // 0..1
  totalSteps: number;
  completedSteps: number;
};
// Missions feature was removed in v0.1. Keep type for backward-compat
// but never resolve a real implementation — feed simply skips that section.
type MissionApi = {
  getActiveMission?: () => Promise<ActiveMission | null>;
};
const missionApi: MissionApi | null = null;

type CoachAvatarComponent = (props: { size?: number }) => React.ReactElement;
let CoachAvatar: CoachAvatarComponent | null = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const mod = require("../components/CoachAvatar") as {
    CoachAvatar?: CoachAvatarComponent;
    default?: CoachAvatarComponent;
  };
  CoachAvatar = mod.CoachAvatar ?? mod.default ?? null;
} catch {
  CoachAvatar = null;
}

// Voice chat route — added in A2. If the file is removed in a future build
// we'll silently fall back to the text chat. Bundler will tree-shake this
// boolean check; routing is decided at tap time.
const VOICE_ROUTE_AVAILABLE = true;

// ---------------------------------------------------------------------------
// Section data shapes.
// ---------------------------------------------------------------------------

interface FeedState {
  coach: CoachState | null;
  cefrLevel: CefrLevel | null;
  interests: string[];
  completed: Set<string>;
  plan: DailyPlan | null;
  program: ProgramState | null;
  programDef: ProgramDef | null;
  dueCount: number;
  mistakeCount: number;
  activeMission: ActiveMission | null;
}

const EMPTY_STATE: FeedState = {
  coach: null,
  cefrLevel: null,
  interests: [],
  completed: new Set(),
  plan: null,
  program: null,
  programDef: null,
  dueCount: 0,
  mistakeCount: 0,
  activeMission: null,
};

// Header copy for the Turkish horizontal carousel.
const REC_LIMIT = 12;
const SECONDARY_LIMIT = 5;
const DECK_LIMIT = 3;
const DRILL_LIMIT = 3;

export default function Feed() {
  const router = useRouter();
  const [state, setState] = useState<FeedState>(EMPTY_STATE);

  const load = useCallback(async () => {
    const [
      coach,
      cefrLevel,
      interests,
      completed,
      program,
      plan,
      dueCount,
    ] = await Promise.all([
      getCoachState(),
      getCefrLevel(),
      getInterests(),
      getCompletedLessonIds(),
      getActiveProgram(),
      getTodaysPlan(),
      getDueCount(),
    ]);

    const programDef = program ? getProgramDef(program.id) ?? null : null;

    let mistakeCount = 0;
    if (mistakeApi?.getActiveMistakeCount) {
      try {
        mistakeCount = await mistakeApi.getActiveMistakeCount();
      } catch {
        mistakeCount = 0;
      }
    }

    let activeMission: ActiveMission | null = null;
    if (missionApi?.getActiveMission) {
      try {
        activeMission = await missionApi.getActiveMission();
      } catch {
        activeMission = null;
      }
    }

    setState({
      coach,
      cefrLevel,
      interests,
      completed,
      plan,
      program,
      programDef,
      dueCount,
      mistakeCount,
      activeMission,
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      void load();
    }, [load]),
  );

  // -------------------------------------------------------------------------
  // Curated scene recommendations.
  // Filter by CEFR (user level ± 1) and user interest modes, then prioritise
  // scenes that belong to the active program's targetModes. Completed scenes
  // sink to the bottom but stay visible (review-friendly).
  // -------------------------------------------------------------------------
  const recommendedScenes = useMemo<Scene[]>(() => {
    const relevantLevels = new Set(
      state.cefrLevel ? getRelevantLevels(state.cefrLevel) : [],
    );
    const interestSet = new Set(state.interests);
    const programModes = new Set(state.programDef?.targetModes ?? []);

    const passesLevel = (s: Scene) =>
      !state.cefrLevel || !s.cefrLevel || relevantLevels.has(s.cefrLevel);

    const passesInterest = (s: Scene) =>
      interestSet.size === 0 || interestSet.has(s.mode);

    // Score: program-mode match > interest match > level fit. Lower = earlier.
    const score = (s: Scene): number => {
      let n = 0;
      if (programModes.size > 0 && programModes.has(s.mode)) n -= 100;
      if (interestSet.size > 0 && interestSet.has(s.mode)) n -= 20;
      if (state.cefrLevel && s.cefrLevel === state.cefrLevel) n -= 5;
      if (state.completed.has(s.lessonId)) n += 1000; // sink completed
      return n;
    };

    const pool = SAMPLE_SCENES.filter(passesLevel).filter(passesInterest);
    const source = pool.length >= 8 ? pool : SAMPLE_SCENES.filter(passesLevel);
    return [...source].sort((a, b) => score(a) - score(b)).slice(0, REC_LIMIT);
  }, [
    state.cefrLevel,
    state.interests,
    state.programDef,
    state.completed,
  ]);

  // Secondary sections — pulled by mode so they stay quick to scan.
  const listeningScenes = useMemo<Scene[]>(
    () =>
      SAMPLE_SCENES.filter((s) => s.mode === "academic" || s.mode === "professional")
        .slice(0, SECONDARY_LIMIT),
    [],
  );
  const readingScenes = useMemo<Scene[]>(
    () =>
      SAMPLE_SCENES.filter((s) => s.mode === "testprep" || s.mode === "academic")
        .slice(0, SECONDARY_LIMIT),
    [],
  );
  const deckScenes = useMemo<Scene[]>(
    () =>
      SAMPLE_SCENES.filter((s) => s.mode === "daily" || s.mode === "banter")
        .slice(0, DECK_LIMIT),
    [],
  );
  const drillScenes = useMemo<Scene[]>(
    () =>
      SAMPLE_SCENES.filter((s) => s.mode === "order" || s.mode === "work")
        .slice(0, DRILL_LIMIT),
    [],
  );

  const greeting = state.coach
    ? getCoachGreeting(state.coach)
    : "Hoşgeldin.";
  const userName = state.coach?.userDisplayName ?? null;
  const coachName = state.coach?.name ?? "Maya";

  const goCoach = () => {
    if (VOICE_ROUTE_AVAILABLE) {
      router.push("/freechat-voice" as never);
    } else {
      router.push("/freechat" as never);
    }
  };

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 1 — Brand header (minimal). */}
        <View style={styles.brandBar}>
          <Text style={styles.brandMark}>Lafla</Text>
        </View>

        {/* 2 — Maya greeting card. */}
        <GreetingCard
          coachName={coachName}
          userName={userName}
          greeting={greeting}
          renderAvatar={() => {
            if (CoachAvatar) {
              try {
                return <CoachAvatar size={44} />;
              } catch {
                /* fall through */
              }
            }
            return (
              <View style={styles.avatarFallback}>
                <Text style={styles.avatarFallbackText}>
                  {coachName.slice(0, 1).toUpperCase()}
                </Text>
              </View>
            );
          }}
          onPress={goCoach}
        />

        {/* 3 — Today's Plan (program active) or set-goal nudge. */}
        {state.plan && state.programDef ? (
          <View style={styles.section}>
            <TodaysPlanCard
              plan={state.plan}
              programTitle={state.programDef.title}
            />
          </View>
        ) : (
          <View style={styles.section}>
            <SetGoalNudge
              onPress={() => router.push("/program-select" as never)}
            />
          </View>
        )}

        {/* 4 — Review queue (only renders if due > 0). */}
        {state.dueCount > 0 ? (
          <View style={styles.sectionTight}>
            <ReviewBanner />
          </View>
        ) : null}

        {/* 5 — Mistakes banner (defensive). */}
        {mistakeApi && state.mistakeCount > 0 ? (
          <View style={styles.section}>
            <MistakesBanner
              count={state.mistakeCount}
              onPress={() => router.push("/drill" as never)}
            />
          </View>
        ) : null}

        {/* 6 — Active mission (defensive). */}
        {missionApi && state.activeMission ? (
          <View style={styles.section}>
            <ActiveMissionCard
              mission={state.activeMission}
              onPress={() => router.push("/skills" as never)}
            />
          </View>
        ) : null}

        {/* 7 — Curated scene recommendations. */}
        <View style={styles.sectionWide}>
          <SectionHeader
            title="Sana göre öneriler"
            subtitle={
              state.cefrLevel
                ? `${state.cefrLevel} seviyene yakın sahneler`
                : "Seviyene uygun sahneler"
            }
          />
          <FlatList
            data={recommendedScenes}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carousel}
            ItemSeparatorComponent={() => <View style={styles.carouselGap} />}
            renderItem={({ item }) => (
              <RecScene
                scene={item}
                isNew={!state.completed.has(item.lessonId) && !!item.isNew}
                onPress={() =>
                  router.push(`/scenario/${item.lessonId}` as never)
                }
              />
            )}
          />
        </View>

        <View style={styles.divider} />

        {/* 8 — Listening pratiği. */}
        {listeningScenes.length > 0 ? (
          <MoreSection
            title="Dinleme pratiği"
            href="/listening"
            scenes={listeningScenes}
            completed={state.completed}
            onItemPress={(s) =>
              router.push(`/scenario/${s.lessonId}` as never)
            }
            onMore={() => router.push("/listening" as never)}
          />
        ) : null}

        {/* 9 — Okuma pratiği. */}
        {readingScenes.length > 0 ? (
          <MoreSection
            title="Okuma pratiği"
            href="/reading"
            scenes={readingScenes}
            completed={state.completed}
            onItemPress={(s) =>
              router.push(`/scenario/${s.lessonId}` as never)
            }
            onMore={() => router.push("/reading" as never)}
          />
        ) : null}

        {/* 10 — Kelime desteleri. */}
        {deckScenes.length > 0 ? (
          <MoreSection
            title="Kelime desteleri"
            href="/decks"
            scenes={deckScenes}
            completed={state.completed}
            onItemPress={() => router.push("/decks" as never)}
            onMore={() => router.push("/decks" as never)}
          />
        ) : null}

        {/* 11 — Telaffuz drilleri. */}
        {drillScenes.length > 0 ? (
          <MoreSection
            title="Telaffuz drilleri"
            href="/pronunciation"
            scenes={drillScenes}
            completed={state.completed}
            onItemPress={(s) =>
              router.push(`/pronunciation/${s.lessonId}` as never)
            }
            onMore={() => router.push("/skills" as never)}
          />
        ) : null}

        <View style={styles.footerSpacer} />
      </ScrollView>

      {/* Bottom nav — restrained, no emoji. */}
      <View style={styles.bottomNav}>
        <NavTab label="Akış" active />
        <NavTab
          label="Beceriler"
          onPress={() => router.push("/skills" as never)}
        />
        <NavTab
          label="Başarımlar"
          onPress={() => router.push("/achievements" as never)}
        />
        <NavTab
          label="Profil"
          onPress={() => router.push("/profile" as never)}
        />
      </View>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Subcomponents — kept inline so the feed file is a single editable unit.
// ---------------------------------------------------------------------------

interface GreetingCardProps {
  coachName: string;
  userName: string | null;
  greeting: string;
  renderAvatar: () => React.ReactNode;
  onPress: () => void;
}

function GreetingCard({
  coachName,
  userName,
  greeting,
  renderAvatar,
  onPress,
}: GreetingCardProps) {
  return (
    <View style={styles.greetingCard}>
      <View style={styles.greetingHeader}>
        {renderAvatar()}
        <View style={styles.greetingHeaderText}>
          <Text style={styles.greetingEyebrow}>
            {coachName.toUpperCase()}
          </Text>
          <Text style={styles.greetingName} numberOfLines={1}>
            {userName ? `Merhaba ${userName}` : "Merhaba"}
          </Text>
        </View>
      </View>
      <Text style={styles.greetingBody} numberOfLines={3}>
        {greeting}
      </Text>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.greetingCta,
          pressed && styles.pressed,
        ]}
      >
        <Text style={styles.greetingCtaLabel}>
          {coachName} ile konuş →
        </Text>
      </Pressable>
    </View>
  );
}

function SetGoalNudge({ onPress }: { onPress: () => void }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.nudge, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={styles.nudgeText}>
        <Text style={styles.nudgeEyebrow}>HEDEF</Text>
        <Text style={styles.nudgeTitle}>Bir hedef belirle</Text>
        <Text style={styles.nudgeSub} numberOfLines={2}>
          Programı seç, günlük planı sana göre kuralım.
        </Text>
      </View>
      <Text style={styles.nudgeChev}>›</Text>
    </Pressable>
  );
}

function MistakesBanner({
  count,
  onPress,
}: {
  count: number;
  onPress: () => void;
}) {
  return (
    <Pressable
      style={({ pressed }) => [styles.mistakeBanner, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={styles.mistakeText}>
        <Text style={styles.mistakeEyebrow}>DÜZELTME</Text>
        <Text style={styles.mistakeTitle} numberOfLines={1}>
          {count} düzeltme bekliyor
        </Text>
        <Text style={styles.mistakeSub}>
          Geçen hataları tek tek düzelt.
        </Text>
      </View>
      <Text style={styles.mistakeChev}>›</Text>
    </Pressable>
  );
}

function ActiveMissionCard({
  mission,
  onPress,
}: {
  mission: ActiveMission;
  onPress: () => void;
}) {
  const pct = Math.max(0, Math.min(100, Math.round(mission.progress * 100)));
  return (
    <Pressable
      style={({ pressed }) => [styles.missionCard, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={styles.missionEyebrow}>AKTİF GÖREV</Text>
      <Text style={styles.missionTitle} numberOfLines={2}>
        {mission.title_tr}
      </Text>
      <View style={styles.missionProgressTrack}>
        <View
          style={[styles.missionProgressFill, { width: `${pct}%` }]}
        />
      </View>
      <Text style={styles.missionMeta}>
        {mission.completedSteps}/{mission.totalSteps} adım · %{pct}
      </Text>
    </Pressable>
  );
}

function SectionHeader({
  title,
  subtitle,
  onMore,
}: {
  title: string;
  subtitle?: string;
  onMore?: () => void;
}) {
  return (
    <View style={styles.sectionHeader}>
      <View style={styles.sectionHeaderText}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {subtitle ? (
          <Text style={styles.sectionSubtitle}>{subtitle}</Text>
        ) : null}
      </View>
      {onMore ? (
        <Pressable
          onPress={onMore}
          style={({ pressed }) => [
            styles.moreBtn,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.moreBtnLabel}>Tümünü gör</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

function RecScene({
  scene,
  isNew,
  onPress,
}: {
  scene: Scene;
  isNew: boolean;
  onPress: () => void;
}) {
  // Title may include manual line breaks from the source data — collapse to
  // a single string and let RN handle wrapping inside the fixed card width.
  const cleanTitle = scene.title.replace(/\s+/g, " ").trim();
  return (
    <Pressable
      style={({ pressed }) => [styles.recCard, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={styles.recEmoji}>{scene.emoji}</Text>
      <View style={styles.recBody}>
        <Text style={styles.recTitle} numberOfLines={2}>
          {cleanTitle}
        </Text>
        <View style={styles.recMetaRow}>
          <Text style={styles.recDuration}>{scene.durationMin} dk</Text>
          {scene.cefrLevel ? (
            <View style={styles.recLevelChip}>
              <Text style={styles.recLevelChipText}>{scene.cefrLevel}</Text>
            </View>
          ) : null}
          {isNew ? (
            <View style={styles.recNewChip}>
              <Text style={styles.recNewChipText}>Yeni</Text>
            </View>
          ) : null}
        </View>
      </View>
    </Pressable>
  );
}

function MoreSection({
  title,
  scenes,
  completed,
  onItemPress,
  onMore,
}: {
  title: string;
  href: string;
  scenes: Scene[];
  completed: Set<string>;
  onItemPress: (s: Scene) => void;
  onMore: () => void;
}) {
  return (
    <View style={styles.sectionWide}>
      <SectionHeader title={title} onMore={onMore} />
      <View style={styles.moreList}>
        {scenes.map((s) => {
          const done = completed.has(s.lessonId);
          return (
            <Pressable
              key={s.id}
              style={({ pressed }) => [
                styles.moreRow,
                pressed && styles.pressed,
              ]}
              onPress={() => onItemPress(s)}
            >
              <Text style={styles.moreRowEmoji}>{s.emoji}</Text>
              <View style={styles.moreRowText}>
                <Text style={styles.moreRowTitle} numberOfLines={1}>
                  {s.title.replace(/\s+/g, " ").trim()}
                </Text>
                <Text style={styles.moreRowMeta}>
                  {s.durationMin} dk
                  {s.cefrLevel ? ` · ${s.cefrLevel}` : ""}
                  {done ? " · Tamamlandı" : ""}
                </Text>
              </View>
              <Text style={styles.moreRowChev}>›</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

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
      style={[navStyles.tab, active && navStyles.tabActive]}
      onPress={onPress}
    >
      <Text style={[navStyles.label, active && navStyles.labelActive]}>
        {label}
      </Text>
    </Pressable>
  );
}

// ---------------------------------------------------------------------------
// Styles.
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: tokens.bg.app,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  brandBar: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 16,
  },
  brandMark: {
    fontSize: 22,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.5,
  },
  section: {
    paddingHorizontal: 20,
    paddingBottom: tokens.spacing.md,
  },
  sectionTight: {
    paddingBottom: tokens.spacing.sm,
  },
  sectionWide: {
    paddingBottom: tokens.spacing.md,
  },
  divider: {
    height: 1,
    backgroundColor: tokens.border.light,
    marginHorizontal: 20,
    marginVertical: 8,
  },
  footerSpacer: {
    height: 24,
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },

  // Greeting card
  greetingCard: {
    marginHorizontal: 20,
    marginBottom: tokens.spacing.md,
    padding: tokens.spacing.md,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderWidth: 1,
    borderColor: tokens.border.light,
    gap: tokens.spacing.sm,
  },
  greetingHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: tokens.spacing.sm,
  },
  greetingHeaderText: {
    flex: 1,
  },
  greetingEyebrow: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 1.6,
    color: tokens.text.tertiary,
    marginBottom: 2,
  },
  greetingName: {
    fontSize: 22,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.4,
  },
  greetingBody: {
    fontSize: 15,
    lineHeight: 22,
    color: tokens.text.secondary,
  },
  greetingCta: {
    alignSelf: "flex-start",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
  },
  greetingCtaLabel: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
  },
  avatarFallback: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: tokens.brand.tertiary,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarFallbackText: {
    color: tokens.text.onTertiary,
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
  },

  // Set-goal nudge
  nudge: {
    flexDirection: "row",
    alignItems: "center",
    gap: tokens.spacing.sm,
    padding: tokens.spacing.md,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderWidth: 1,
    borderColor: tokens.border.light,
    borderStyle: "dashed",
  },
  nudgeText: { flex: 1 },
  nudgeEyebrow: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 1.6,
    color: tokens.text.tertiary,
    marginBottom: 2,
  },
  nudgeTitle: {
    fontSize: 17,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    marginBottom: 2,
  },
  nudgeSub: {
    fontSize: 13,
    color: tokens.text.secondary,
    lineHeight: 18,
  },
  nudgeChev: {
    fontSize: 22,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.bold,
  },

  // Mistakes banner
  mistakeBanner: {
    flexDirection: "row",
    alignItems: "center",
    gap: tokens.spacing.sm,
    padding: tokens.spacing.md,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.semantic.errorContainer,
    borderWidth: 1,
    borderColor: tokens.semantic.error,
  },
  mistakeText: { flex: 1 },
  mistakeEyebrow: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 1.6,
    color: tokens.semantic.error,
    marginBottom: 2,
  },
  mistakeTitle: {
    fontSize: 15,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  mistakeSub: {
    fontSize: 12,
    color: tokens.text.secondary,
    marginTop: 2,
  },
  mistakeChev: {
    fontSize: 22,
    color: tokens.semantic.error,
    fontWeight: tokens.weight.bold,
  },

  // Active mission
  missionCard: {
    padding: tokens.spacing.md,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderWidth: 1,
    borderColor: tokens.border.light,
    gap: 8,
  },
  missionEyebrow: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 1.6,
    color: tokens.text.tertiary,
  },
  missionTitle: {
    fontSize: 16,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    lineHeight: 22,
  },
  missionProgressTrack: {
    height: 6,
    borderRadius: 3,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    overflow: "hidden",
  },
  missionProgressFill: {
    height: "100%",
    backgroundColor: tokens.brand.primary,
  },
  missionMeta: {
    fontSize: 12,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.secondary,
  },

  // Section header
  sectionHeader: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: tokens.spacing.sm,
    paddingBottom: tokens.spacing.sm,
  },
  sectionHeaderText: { flex: 1 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.3,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: tokens.text.tertiary,
    marginTop: 2,
  },
  moreBtn: {
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  moreBtnLabel: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
  },

  // Carousel
  carousel: {
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
  carouselGap: {
    width: 12,
  },
  recCard: {
    width: 200,
    padding: 14,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderWidth: 1,
    borderColor: tokens.border.light,
    gap: 12,
  },
  recEmoji: {
    fontSize: 28,
  },
  recBody: {
    gap: 8,
  },
  recTitle: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    lineHeight: 19,
  },
  recMetaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    flexWrap: "wrap",
  },
  recDuration: {
    fontSize: 12,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.semibold,
  },
  recLevelChip: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.surfaceContainerHigh,
  },
  recLevelChipText: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
    letterSpacing: 0.4,
  },
  recNewChip: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.tertiarySoft,
  },
  recNewChipText: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
    letterSpacing: 0.4,
  },

  // More-section rows
  moreList: {
    paddingHorizontal: 20,
    gap: 6,
  },
  moreRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: tokens.spacing.sm,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  moreRowEmoji: {
    fontSize: 22,
  },
  moreRowText: { flex: 1 },
  moreRowTitle: {
    fontSize: 14,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
  },
  moreRowMeta: {
    fontSize: 12,
    color: tokens.text.tertiary,
    marginTop: 2,
  },
  moreRowChev: {
    fontSize: 20,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.bold,
  },

  // Bottom nav
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
    backgroundColor: tokens.bg.surfaceContainerLowest,
  },
});

const navStyles = StyleSheet.create({
  tab: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  tabActive: {
    backgroundColor: tokens.brand.tertiarySoft,
    borderRadius: tokens.radius.full,
  },
  label: {
    fontSize: 13,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.secondary,
  },
  labelActive: {
    color: tokens.brand.tertiary,
  },
});
