// Lafla — Onboarding (4 steps, ~30 seconds).
//
// Four steps in a single file:
//   1. welcome  — pitch + "Start"
//   2. track    — pick a goal: Daily Life / Exam Prep / Both (default)
//   3. name     — first name (skippable)
//   4. level    — three big buttons: Beginner / Intermediate / Advanced
//
// Programs, interests, and the coach-intro animation have been removed
// for v1. The feed algorithm learns from the user's behaviour on the
// first few scenarios instead of asking up front. Users who want a more
// precise level pick can still take the placement test from Settings.
//
// State is collected in a single reducer. Each step gets a "Back" button
// (except welcome) and progress dots at the top. The active step is
// persisted under `lafla.onboarding.step` so closing the app mid-flow
// resumes exactly where the user left off.

import { useEffect, useReducer, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "../components/Button";
import { ProgressDots } from "../components/ProgressDots";
import { trackEvent } from "../lib/analytics";
import { requestAttOnce } from "../lib/att";
import { completeOnboarding } from "../lib/auth";
import { setCefrLevel, type CefrLevel } from "../lib/cefr-level";
import {
  hapticImpact,
  hapticSelection,
  hapticSuccess,
} from "../lib/feedback";
import {
  getOnboardingStep,
  setOnboarded,
  setOnboardingStep,
} from "../lib/onboarding-state";
import { tokens } from "../theme";

// ============================================================
// TYPES
// ============================================================

type OnboardingStep = "welcome" | "track" | "name" | "level";

const STEP_ORDER: OnboardingStep[] = ["welcome", "track", "name", "level"];

type Track = "life" | "exam" | "both";

const TRACK_STORAGE_KEY = "lafla.track";

interface OnboardingState {
  step: OnboardingStep;
  name: string;
  track: Track;
}

type Action =
  | { type: "GOTO"; step: OnboardingStep }
  | { type: "NEXT" }
  | { type: "BACK" }
  | { type: "SET_NAME"; name: string }
  | { type: "SET_TRACK"; track: Track };

function reducer(state: OnboardingState, action: Action): OnboardingState {
  switch (action.type) {
    case "GOTO":
      return { ...state, step: action.step };
    case "NEXT": {
      const idx = STEP_ORDER.indexOf(state.step);
      const next = STEP_ORDER[Math.min(STEP_ORDER.length - 1, idx + 1)];
      return { ...state, step: next };
    }
    case "BACK": {
      const idx = STEP_ORDER.indexOf(state.step);
      const prev = STEP_ORDER[Math.max(0, idx - 1)];
      return { ...state, step: prev };
    }
    case "SET_NAME":
      return { ...state, name: action.name };
    case "SET_TRACK":
      return { ...state, track: action.track };
    default:
      return state;
  }
}

const INITIAL: OnboardingState = {
  step: "welcome",
  name: "",
  track: "both",
};

// 3 coarse level buckets mapped onto CEFR. Users who want a precise level
// can take the placement test from Settings.
interface LevelChoice {
  emoji: string;
  label: string;
  description: string;
  cefr: CefrLevel;
}

const LEVEL_CHOICES: LevelChoice[] = [
  {
    emoji: "🌱",
    label: "Just starting",
    description: "I know a few words but struggle to form sentences.",
    cefr: "A1",
  },
  {
    emoji: "📖",
    label: "Intermediate",
    description: "I understand simple conversations and can express myself.",
    cefr: "B1",
  },
  {
    emoji: "🎯",
    label: "Advanced",
    description: "I speak fluently and want to sound more natural.",
    cefr: "C1",
  },
];

// 3 learning tracks. Default is "both" so users who don't have a strong
// preference still get a balanced mix.
interface TrackChoice {
  id: Track;
  emoji: string;
  label: string;
  description: string;
}

const TRACK_CHOICES: TrackChoice[] = [
  {
    id: "life",
    emoji: "🎬",
    label: "Daily Life",
    description: "Real-world English: cafés, work, dating, travel",
  },
  {
    id: "exam",
    emoji: "🎓",
    label: "Exam Prep",
    description: "Pass IELTS, TOEFL, Cambridge speaking",
  },
  {
    id: "both",
    emoji: "✨",
    label: "Both",
    description: "Mix lifestyle + exam practice",
  },
];

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function Onboarding() {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, INITIAL);
  const [saving, setSaving] = useState(false);
  const [restored, setRestored] = useState(false);

  // -- Restore step from disk on first mount -------------------------------
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const savedStep = await getOnboardingStep();
      if (cancelled) return;
      const validStep =
        savedStep && (STEP_ORDER as string[]).includes(savedStep)
          ? (savedStep as OnboardingStep)
          : "welcome";
      dispatch({ type: "GOTO", step: validStep });
      setRestored(true);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // -- Persist current step whenever it changes ----------------------------
  useEffect(() => {
    if (!restored) return;
    setOnboardingStep(state.step).catch(() => {});
  }, [state.step, restored]);

  const currentIndex = STEP_ORDER.indexOf(state.step);

  const goNext = () => {
    hapticSelection();
    void trackEvent("onboarding_step_completed", { step: state.step }).catch(
      () => {},
    );
    dispatch({ type: "NEXT" });
  };
  const goBack = () => {
    hapticSelection();
    dispatch({ type: "BACK" });
  };

  // Phase 1 cleanup: the Maya coach subsystem (which persisted the user's
  // display name) is gone. We still collect the name in onboarding state so
  // the UX is unchanged, but there's nowhere to persist it yet — Phase 3
  // will reintroduce a name store as part of the new user profile.
  const handleNameContinue = async () => {
    goNext();
  };

  const handleNameSkip = async () => {
    dispatch({ type: "SET_NAME", name: "" });
    goNext();
  };

  const handleTrackContinue = async () => {
    try {
      await AsyncStorage.setItem(TRACK_STORAGE_KEY, state.track);
    } catch {
      // Track persistence is best-effort; never block onboarding on it.
    }
    void trackEvent("onboarding_track_selected", { track: state.track }).catch(
      () => {},
    );
    goNext();
  };

  const handlePickLevel = async (lvl: CefrLevel) => {
    hapticImpact("medium");
    setSaving(true);
    await setCefrLevel(lvl);
    await setOnboarded(true);
    await setOnboardingStep(null);
    // Cloud-sync the empty-interests profile if signed in. Errors are
    // non-fatal — onboarding is finalised locally already.
    await completeOnboarding([]).catch(() => {});
    // Ask for ATT now, after the user has seen value — Apple-recommended
    // timing for higher consent rates. Non-blocking: if the user denies or
    // skips, the app still works (analytics just degrade gracefully).
    await requestAttOnce().catch(() => {});
    void trackEvent("onboarding_completed", {
      level: lvl,
      track: state.track,
    }).catch(() => {});
    hapticSuccess();
    setSaving(false);
    router.replace("/home" as never);
  };

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="light" />

      <View style={styles.header}>
        {state.step !== "welcome" ? (
          <Pressable onPress={goBack} style={styles.backBtn} hitSlop={12}>
            <Text style={styles.backText}>← Back</Text>
          </Pressable>
        ) : (
          <View style={styles.backBtn} />
        )}
        <View style={styles.dotsWrap}>
          <ProgressDots total={STEP_ORDER.length} currentIndex={currentIndex} />
        </View>
        <View style={styles.backBtn} />
      </View>

      <KeyboardAvoidingView
        style={styles.kav}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 24 : 0}
      >
        {state.step === "welcome" && <WelcomeStep onNext={goNext} />}
        {state.step === "track" && (
          <TrackStep
            value={state.track}
            onChange={(track) => dispatch({ type: "SET_TRACK", track })}
            onContinue={handleTrackContinue}
          />
        )}
        {state.step === "name" && (
          <NameStep
            value={state.name}
            onChange={(name) => dispatch({ type: "SET_NAME", name })}
            onContinue={handleNameContinue}
            onSkip={handleNameSkip}
          />
        )}
        {state.step === "level" && (
          <LevelStep onPick={handlePickLevel} saving={saving} />
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// ============================================================
// STEP 1 — WELCOME
// ============================================================

function WelcomeStep({ onNext }: { onNext: () => void }) {
  return (
    <View style={styles.stepShell}>
      <ScrollView contentContainerStyle={styles.stepScroll}>
        <View style={styles.welcomeHero}>
          <Text style={styles.wordmark}>lafla</Text>
          <Text style={styles.heroDot}>·</Text>
        </View>
        <Text style={styles.welcomeTitle}>
          The English app that teaches you to think on your feet.
        </Text>
        <Text style={styles.welcomePitch}>
          No textbook drills. Real-world scenes — cafés, work, conversations,
          travel. Practice speaking like yourself.
        </Text>
      </ScrollView>
      <View style={styles.footer}>
        <Button label="Start" onPress={onNext} stacked />
      </View>
    </View>
  );
}

// ============================================================
// STEP 2 — TRACK
// ============================================================

function TrackStep({
  value,
  onChange,
  onContinue,
}: {
  value: Track;
  onChange: (t: Track) => void;
  onContinue: () => void;
}) {
  return (
    <View style={styles.stepShell}>
      <ScrollView contentContainerStyle={styles.stepScroll}>
        <Text style={styles.stepHeader}>What's your goal?</Text>
        <Text style={styles.stepSubtitle}>
          Pick a track. You can change this later in Settings.
        </Text>

        <View style={styles.trackGrid}>
          {TRACK_CHOICES.map((choice) => (
            <TrackCard
              key={choice.id}
              choice={choice}
              selected={value === choice.id}
              onPress={() => {
                hapticSelection();
                onChange(choice.id);
              }}
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Button label="Continue" onPress={onContinue} stacked />
      </View>
    </View>
  );
}

function TrackCard({
  choice,
  selected,
  onPress,
}: {
  choice: TrackChoice;
  selected: boolean;
  onPress: () => void;
}) {
  const scale = useSharedValue(1);
  const cardStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));
  const handlePress = () => {
    scale.value = withSequence(
      withTiming(0.97, { duration: 80 }),
      withSpring(1, { damping: 12, stiffness: 220 }),
    );
    onPress();
  };
  return (
    <Animated.View style={cardStyle}>
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [
          styles.trackCard,
          selected && styles.trackCardSelected,
          pressed && styles.trackCardPressed,
        ]}
      >
        <Text style={styles.trackEmoji}>{choice.emoji}</Text>
        <View style={styles.trackText}>
          <Text style={styles.trackCardTitle}>{choice.label}</Text>
          <Text style={styles.trackCardDesc}>{choice.description}</Text>
        </View>
        <View
          style={[
            styles.trackRadio,
            selected && styles.trackRadioSelected,
          ]}
        >
          {selected ? <View style={styles.trackRadioDot} /> : null}
        </View>
      </Pressable>
    </Animated.View>
  );
}

// ============================================================
// STEP 3 — NAME
// ============================================================

function NameStep({
  value,
  onChange,
  onContinue,
  onSkip,
}: {
  value: string;
  onChange: (v: string) => void;
  onContinue: () => void;
  onSkip: () => void;
}) {
  const inputRef = useRef<TextInput | null>(null);
  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 200);
    return () => clearTimeout(t);
  }, []);

  const canContinue = value.trim().length > 0;

  return (
    <View style={styles.stepShell}>
      <ScrollView
        contentContainerStyle={styles.stepScroll}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.stepHeader}>What's your name?</Text>
        <Text style={styles.stepSubtitle}>
          Characters in scenes will address you by this name.
        </Text>

        <TextInput
          ref={inputRef}
          style={styles.input}
          value={value}
          onChangeText={onChange}
          placeholder="Your name"
          placeholderTextColor={tokens.text.tertiary}
          autoCapitalize="words"
          autoCorrect={false}
          returnKeyType="done"
          maxLength={24}
          onSubmitEditing={() => {
            if (canContinue) onContinue();
          }}
        />

        <Pressable onPress={onSkip} style={styles.linkRow}>
          <Text style={styles.linkText}>Continue without a name →</Text>
        </Pressable>
      </ScrollView>
      <View style={styles.footer}>
        <Button
          label="Continue"
          onPress={onContinue}
          disabled={!canContinue}
          stacked
        />
      </View>
    </View>
  );
}

// ============================================================
// STEP 4 — LEVEL
// ============================================================

function LevelStep({
  onPick,
  saving,
}: {
  onPick: (l: CefrLevel) => void;
  saving: boolean;
}) {
  return (
    <View style={styles.stepShell}>
      <ScrollView contentContainerStyle={styles.stepScroll}>
        <Text style={styles.stepHeader}>Where's your English?</Text>
        <Text style={styles.stepSubtitle}>
          So we can pick scenes at the right difficulty. You can change this
          later in Settings.
        </Text>

        <View style={styles.levelGrid}>
          {LEVEL_CHOICES.map((choice) => (
            <LevelCard
              key={choice.cefr}
              choice={choice}
              disabled={saving}
              onPress={() => onPick(choice.cefr)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

function LevelCard({
  choice,
  disabled,
  onPress,
}: {
  choice: LevelChoice;
  disabled: boolean;
  onPress: () => void;
}) {
  const scale = useSharedValue(1);
  const cardStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));
  const handlePress = () => {
    scale.value = withSequence(
      withTiming(0.96, { duration: 80 }),
      withSpring(1, { damping: 12, stiffness: 220 }),
    );
    onPress();
  };
  return (
    <Animated.View style={cardStyle}>
      <Pressable
        onPress={handlePress}
        disabled={disabled}
        style={({ pressed }) => [
          styles.levelCard,
          pressed && styles.levelCardPressed,
          disabled && styles.levelCardDisabled,
        ]}
      >
        <Text style={styles.levelEmoji}>{choice.emoji}</Text>
        <View style={styles.levelText}>
          <Text style={styles.levelCardTitle}>{choice.label}</Text>
          <Text style={styles.levelCardDesc}>{choice.description}</Text>
        </View>
        <Text style={styles.levelArrow}>›</Text>
      </Pressable>
    </Animated.View>
  );
}

// ============================================================
// STYLES
// ============================================================

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  kav: { flex: 1 },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    gap: 12,
  },
  backBtn: { width: 72 },
  backText: {
    color: tokens.text.secondary,
    fontSize: 15,
    fontWeight: tokens.weight.semibold,
  },
  dotsWrap: { flex: 1 },

  stepShell: { flex: 1 },
  stepScroll: {
    paddingHorizontal: tokens.spacing.md,
    paddingTop: 8,
    paddingBottom: 140,
  },
  stepHeader: {
    fontSize: 30,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.4,
    marginBottom: tokens.spacing.xs,
    lineHeight: 36,
    fontFamily: tokens.font.display,
  },
  stepSubtitle: {
    fontSize: 16,
    color: tokens.text.secondary,
    lineHeight: 24,
    marginBottom: tokens.spacing.md,
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: tokens.spacing.md,
    paddingTop: tokens.spacing.md,
    paddingBottom: 28,
    backgroundColor: tokens.bg.app,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
  },

  // ---------- Welcome ----------
  welcomeHero: {
    alignItems: "center",
    paddingTop: tokens.spacing.lg,
    paddingBottom: tokens.spacing.md,
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
  },
  wordmark: {
    fontSize: 64,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -2,
    lineHeight: 70,
    fontFamily: tokens.font.display,
  },
  heroDot: {
    fontSize: 64,
    fontWeight: tokens.weight.black,
    color: tokens.brand.primary,
    lineHeight: 70,
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.4,
    textAlign: "center",
    marginTop: tokens.spacing.md,
    marginBottom: tokens.spacing.sm,
    lineHeight: 38,
    fontFamily: tokens.font.display,
  },
  welcomePitch: {
    fontSize: 17,
    color: tokens.text.secondary,
    lineHeight: 26,
    textAlign: "center",
    paddingHorizontal: tokens.spacing.sm,
  },

  // ---------- Track ----------
  trackGrid: {
    gap: 12,
  },
  trackCard: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.lg,
    borderWidth: 1,
    borderColor: tokens.border.outline,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  trackCardSelected: {
    backgroundColor: tokens.brand.primarySoft,
    borderColor: tokens.brand.primary,
  },
  trackCardPressed: {
    opacity: 0.85,
  },
  trackEmoji: {
    fontSize: 36,
  },
  trackText: {
    flex: 1,
    gap: 4,
  },
  trackCardTitle: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  trackCardDesc: {
    fontSize: 14,
    color: tokens.text.secondary,
    lineHeight: 20,
  },
  trackRadio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: tokens.border.outline,
    alignItems: "center",
    justifyContent: "center",
  },
  trackRadioSelected: {
    borderColor: tokens.brand.primary,
  },
  trackRadioDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: tokens.brand.primary,
  },

  // ---------- Name ----------
  input: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    borderWidth: 2,
    borderColor: tokens.border.outline,
    paddingHorizontal: 18,
    paddingVertical: 18,
    fontSize: 20,
    color: tokens.text.primary,
    fontWeight: tokens.weight.semibold,
    marginTop: tokens.spacing.xs,
  },
  linkRow: {
    marginTop: tokens.spacing.md,
    paddingVertical: 12,
    alignSelf: "flex-start",
  },
  linkText: {
    fontSize: 14,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.bold,
    textDecorationLine: "underline",
  },

  // ---------- Level ----------
  levelGrid: {
    gap: 12,
  },
  levelCard: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.lg,
    borderWidth: 1,
    borderColor: tokens.border.outline,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  levelCardPressed: {
    backgroundColor: tokens.brand.primarySoft,
    borderColor: tokens.brand.primary,
  },
  levelCardDisabled: {
    opacity: 0.5,
  },
  levelEmoji: {
    fontSize: 36,
  },
  levelText: {
    flex: 1,
    gap: 4,
  },
  levelCardTitle: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  levelCardDesc: {
    fontSize: 14,
    color: tokens.text.secondary,
    lineHeight: 20,
  },
  levelArrow: {
    fontSize: 26,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.bold,
  },
});
