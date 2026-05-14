// Lafla — Onboarding (multi-step state machine, ~3 minutes).
//
// Six steps in a single file:
//   1. welcome      — pitch + "Başla"
//   2. name         — first name (used by Maya in every greeting)
//   3. level        — CEFR A1..C2 (or jump to placement test)
//   4. program      — goal-based program + optional hedef tarihi
//   5. interests    — multi-select tags (11 modes)
//   6. coach-intro  — animated Maya, personalized greeting, "Başlayalım"
//
// State is collected in a single reducer. Each step gets a "Geri" button
// (except welcome) and progress dots at the top. The active step is
// persisted under `lafla.onboarding.step` so closing the app mid-flow
// resumes exactly where the user left off. All other state (name, level,
// program, interests) writes through to its existing dedicated storage as
// soon as the user advances past that step — same atomic-on-advance pattern
// the placement test uses.
//
// We deliberately keep this one file: every step shares the same header /
// footer / scrollview shell, and extracting six tiny per-step components
// would just add prop-drilling without any code reduction.

import { useEffect, useMemo, useReducer, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFocusEffect, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Button";
import { InterestCard } from "../components/InterestCard";
import { ProgressDots } from "../components/ProgressDots";
import { trackEvent } from "../lib/analytics";
import { completeOnboarding } from "../lib/auth";
import {
  CEFR_LEVELS,
  CEFR_LEVEL_LABELS_TR,
  getCefrLevel,
  setCefrLevel,
  type CefrLevel,
} from "../lib/cefr-level";
import {
  getCoachState,
  setUserDisplayName,
} from "../lib/coach";
import {
  PROGRAMS,
  startProgram,
  type ProgramId,
} from "../lib/programs";
import {
  getOnboardingStep,
  setInterests as persistInterests,
  setOnboarded,
  setOnboardingStep,
} from "../lib/onboarding-state";
import { tokens } from "../theme";

// Defensive import: CoachAvatar exists today, but if the file is ever moved
// during a refactor we don't want to crash the onboarding flow. We try
// require() at module-eval and fall back to a simple monogram circle.
let CoachAvatarMaybe:
  | React.ComponentType<{ state: "idle" | "speaking"; size?: number; name?: string }>
  | null = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const mod = require("../components/CoachAvatar");
  CoachAvatarMaybe = mod?.CoachAvatar ?? null;
} catch {
  CoachAvatarMaybe = null;
}

// ============================================================
// TYPES
// ============================================================

type OnboardingStep =
  | "welcome"
  | "name"
  | "level"
  | "program"
  | "interests"
  | "coach-intro";

const STEP_ORDER: OnboardingStep[] = [
  "welcome",
  "name",
  "level",
  "program",
  "interests",
  "coach-intro",
];

interface OnboardingState {
  step: OnboardingStep;
  name: string;
  level: CefrLevel | null;
  programId: ProgramId | null;
  goalDate: string | undefined;
  interests: string[];
}

type Action =
  | { type: "GOTO"; step: OnboardingStep }
  | { type: "NEXT" }
  | { type: "BACK" }
  | { type: "SET_NAME"; name: string }
  | { type: "SET_LEVEL"; level: CefrLevel | null }
  | { type: "SET_PROGRAM"; programId: ProgramId | null }
  | { type: "SET_GOAL_DATE"; goalDate: string | undefined }
  | { type: "TOGGLE_INTEREST"; id: string }
  | { type: "SET_INTERESTS"; ids: string[] };

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
    case "SET_LEVEL":
      return { ...state, level: action.level };
    case "SET_PROGRAM":
      return { ...state, programId: action.programId };
    case "SET_GOAL_DATE":
      return { ...state, goalDate: action.goalDate };
    case "TOGGLE_INTEREST": {
      const has = state.interests.includes(action.id);
      return {
        ...state,
        interests: has
          ? state.interests.filter((x) => x !== action.id)
          : [...state.interests, action.id],
      };
    }
    case "SET_INTERESTS":
      return { ...state, interests: action.ids };
    default:
      return state;
  }
}

const INITIAL: OnboardingState = {
  step: "welcome",
  name: "",
  level: null,
  programId: null,
  goalDate: undefined,
  interests: [],
};

// ============================================================
// INTEREST OPTIONS (11 modes — extends data/interests.ts)
// ============================================================
//
// We deliberately don't import from data/interests.ts here: the brief asks
// for 11 modes covering categories that file doesn't yet enumerate. This
// list is the single source for the onboarding multi-select; the modes
// emitted are the same string tags the feed algorithm + program engine
// already understand.

interface InterestOption {
  id: string;
  emoji: string;
  label: string;
  mode: string;
}

const INTEREST_OPTIONS: InterestOption[] = [
  { id: "daily", emoji: "☕", label: "Günlük hayat", mode: "daily" },
  { id: "order", emoji: "🛒", label: "Sipariş ve alışveriş", mode: "order" },
  { id: "travel", emoji: "✈️", label: "Seyahat", mode: "travel" },
  { id: "career", emoji: "🎯", label: "Kariyer ve mülakat", mode: "career" },
  { id: "work", emoji: "💼", label: "İş ortamı", mode: "work" },
  { id: "professional", emoji: "🤝", label: "Profesyonel iletişim", mode: "professional" },
  { id: "academic", emoji: "📚", label: "Akademik", mode: "academic" },
  { id: "testprep", emoji: "📘", label: "Sınav hazırlığı", mode: "testprep" },
  { id: "personal", emoji: "🌱", label: "Kişisel gelişim", mode: "personal" },
  { id: "banter", emoji: "🍻", label: "Sohbet ve espri", mode: "banter" },
  { id: "flirt", emoji: "💕", label: "Flört", mode: "flirt" },
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
      const [savedStep, coach, lvl] = await Promise.all([
        getOnboardingStep(),
        getCoachState(),
        getCefrLevel(),
      ]);
      if (cancelled) return;
      const validStep =
        savedStep && (STEP_ORDER as string[]).includes(savedStep)
          ? (savedStep as OnboardingStep)
          : "welcome";
      dispatch({ type: "SET_NAME", name: coach.userDisplayName ?? "" });
      if (lvl) dispatch({ type: "SET_LEVEL", level: lvl });
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

  // -- If the user goes to the placement test and comes back, refresh level
  useFocusEffect(() => {
    let cancelled = false;
    (async () => {
      const lvl = await getCefrLevel();
      if (!cancelled && lvl && lvl !== state.level) {
        dispatch({ type: "SET_LEVEL", level: lvl });
      }
    })();
    return () => {
      cancelled = true;
    };
  });

  const currentIndex = STEP_ORDER.indexOf(state.step);

  // -- Step transitions that need side effects -----------------------------
  const goNext = () => {
    void trackEvent("onboarding_step_completed", { step: state.step }).catch(
      () => {},
    );
    dispatch({ type: "NEXT" });
  };
  const goBack = () => dispatch({ type: "BACK" });

  const handleNameContinue = async () => {
    const trimmed = state.name.trim();
    if (trimmed) {
      await setUserDisplayName(trimmed);
    }
    goNext();
  };

  const handleNameSkip = async () => {
    await setUserDisplayName(""); // clears, getCoachState() will return null
    dispatch({ type: "SET_NAME", name: "" });
    goNext();
  };

  const handlePickLevel = async (lvl: CefrLevel) => {
    dispatch({ type: "SET_LEVEL", level: lvl });
    await setCefrLevel(lvl);
    goNext();
  };

  const handleLevelTest = () => {
    // The placement test persists the chosen level via setCefrLevel before
    // routing to /feed. We don't want it routing past us, so we save the
    // step first and rely on useFocusEffect above to refresh our state.
    setOnboardingStep("level").catch(() => {});
    // Cast: this route is registered in _layout.tsx by the integration step;
    // the typed-routes generator hasn't picked it up yet.
    router.push("/placement-test" as never);
  };

  const handleLevelSkip = async () => {
    dispatch({ type: "SET_LEVEL", level: "B1" });
    await setCefrLevel("B1");
    goNext();
  };

  const handlePickProgram = (id: ProgramId) => {
    dispatch({ type: "SET_PROGRAM", programId: id });
  };

  const handleProgramContinue = async () => {
    const id = state.programId ?? "general-fluency";
    await startProgram(id, state.goalDate);
    goNext();
  };

  const handleProgramSkip = async () => {
    dispatch({ type: "SET_PROGRAM", programId: "general-fluency" });
    await startProgram("general-fluency", undefined);
    goNext();
  };

  const handleInterestsContinue = async () => {
    const modes = state.interests
      .map((id) => INTEREST_OPTIONS.find((o) => o.id === id)?.mode)
      .filter((m): m is string => !!m);
    await persistInterests(modes);
    // Silent cloud sync if signed in.
    await completeOnboarding(modes).catch(() => {});
    goNext();
  };

  const handleFinish = async () => {
    setSaving(true);
    await setOnboarded(true);
    await setOnboardingStep(null);
    setSaving(false);
    router.replace("/feed");
  };

  // -- Render shell --------------------------------------------------------
  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        {state.step !== "welcome" ? (
          <Pressable onPress={goBack} style={styles.backBtn} hitSlop={12}>
            <Text style={styles.backText}>← Geri</Text>
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
        {state.step === "welcome" && (
          <WelcomeStep onNext={goNext} />
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
          <LevelStep
            value={state.level}
            onPick={handlePickLevel}
            onTakeTest={handleLevelTest}
            onSkip={handleLevelSkip}
          />
        )}
        {state.step === "program" && (
          <ProgramStep
            value={state.programId}
            goalDate={state.goalDate}
            onPick={handlePickProgram}
            onPickDate={(d) => dispatch({ type: "SET_GOAL_DATE", goalDate: d })}
            onContinue={handleProgramContinue}
            onSkip={handleProgramSkip}
          />
        )}
        {state.step === "interests" && (
          <InterestsStep
            selected={state.interests}
            onToggle={(id) => dispatch({ type: "TOGGLE_INTEREST", id })}
            onContinue={handleInterestsContinue}
          />
        )}
        {state.step === "coach-intro" && (
          <CoachIntroStep
            name={state.name}
            level={state.level}
            programId={state.programId}
            saving={saving}
            onFinish={handleFinish}
          />
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
          Maya, kişisel İngilizce koçun.
        </Text>
        <Text style={styles.welcomePitch}>
          Senin için ders programı hazırlayacak, her gün yanında olacak.
          Birkaç dakika içinde hazırız.
        </Text>
      </ScrollView>
      <View style={styles.footer}>
        <Button label="Başla" onPress={onNext} stacked />
      </View>
    </View>
  );
}

// ============================================================
// STEP 2 — NAME
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
    // Slight delay so the keyboard animates after the step transition.
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
        <Text style={styles.stepHeader}>Adın ne?</Text>
        <Text style={styles.stepSubtitle}>
          Maya seninle bu isimle konuşacak. Sadece sana özel.
        </Text>

        <TextInput
          ref={inputRef}
          style={styles.input}
          value={value}
          onChangeText={onChange}
          placeholder="Adın"
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
          <Text style={styles.linkText}>
            İsim olmadan devam →
          </Text>
        </Pressable>
      </ScrollView>
      <View style={styles.footer}>
        <Button
          label="Devam"
          onPress={onContinue}
          disabled={!canContinue}
          stacked
        />
      </View>
    </View>
  );
}

// ============================================================
// STEP 3 — LEVEL
// ============================================================

function LevelStep({
  value,
  onPick,
  onTakeTest,
  onSkip,
}: {
  value: CefrLevel | null;
  onPick: (l: CefrLevel) => void;
  onTakeTest: () => void;
  onSkip: () => void;
}) {
  return (
    <View style={styles.stepShell}>
      <ScrollView contentContainerStyle={styles.stepScroll}>
        <Text style={styles.stepHeader}>Şu an İngilizcen nerede?</Text>
        <Text style={styles.stepSubtitle}>
          Sana doğru zorluk seviyesinde içerik göstermemiz için.
        </Text>

        <View style={styles.levelGrid}>
          {CEFR_LEVELS.map((lvl) => {
            const info = CEFR_LEVEL_LABELS_TR[lvl];
            const isSelected = value === lvl;
            return (
              <Pressable
                key={lvl}
                onPress={() => onPick(lvl)}
                style={[
                  styles.levelCard,
                  isSelected && styles.levelCardSelected,
                ]}
              >
                <Text
                  style={[
                    styles.levelCardTitle,
                    isSelected && styles.levelCardTitleSelected,
                  ]}
                >
                  {info.label}
                </Text>
                <Text style={styles.levelCardDesc}>{info.desc}</Text>
              </Pressable>
            );
          })}
        </View>

        <Pressable onPress={onTakeTest} style={styles.altCta}>
          <Text style={styles.altCtaText}>
            Emin değilim → 5 dakikalık test yap
          </Text>
        </Pressable>
        <Pressable onPress={onSkip} style={styles.linkRow}>
          <Text style={styles.linkText}>Sonra belirlerim →</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

// ============================================================
// STEP 4 — PROGRAM
// ============================================================

const DATE_PRESETS: { label: string; addDays: number }[] = [
  { label: "1 ay sonra", addDays: 30 },
  { label: "3 ay sonra", addDays: 90 },
  { label: "6 ay sonra", addDays: 180 },
  { label: "Yaz başlangıcı", addDays: daysUntilSummer() },
];

function daysUntilSummer(): number {
  // Northern hemisphere "yaz başlangıcı" — June 1 of the next occurrence.
  const now = new Date();
  const y = now.getMonth() >= 5 ? now.getFullYear() + 1 : now.getFullYear();
  const target = new Date(y, 5, 1).getTime();
  return Math.max(7, Math.round((target - now.getTime()) / (24 * 3600 * 1000)));
}

function isoFromOffset(addDays: number): string {
  const d = new Date();
  d.setDate(d.getDate() + addDays);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function ProgramStep({
  value,
  goalDate,
  onPick,
  onPickDate,
  onContinue,
  onSkip,
}: {
  value: ProgramId | null;
  goalDate: string | undefined;
  onPick: (id: ProgramId) => void;
  onPickDate: (iso: string | undefined) => void;
  onContinue: () => void;
  onSkip: () => void;
}) {
  const [dateModal, setDateModal] = useState(false);
  const canContinue = value !== null;

  return (
    <View style={styles.stepShell}>
      <ScrollView contentContainerStyle={styles.stepScroll}>
        <Text style={styles.stepHeader}>Hangi hedef için pratik yapıyorsun?</Text>
        <Text style={styles.stepSubtitle}>
          Birini seç — Maya günlük planını ona göre hazırlayacak.
        </Text>

        <View style={styles.programList}>
          {PROGRAMS.map((p) => {
            const isSelected = value === p.id;
            return (
              <Pressable
                key={p.id}
                onPress={() => onPick(p.id)}
                style={[
                  styles.programCard,
                  isSelected && styles.programCardSelected,
                ]}
              >
                <View style={styles.programHead}>
                  <Text style={styles.programEmoji}>{p.emoji}</Text>
                  <View style={styles.programHeadText}>
                    <Text style={styles.programTitle}>{p.title}</Text>
                    <Text style={styles.programMeta}>
                      {p.durationWeeks} hafta · {p.recommendedLevel}+
                    </Text>
                  </View>
                  {isSelected ? (
                    <View style={styles.programCheck}>
                      <Text style={styles.programCheckText}>✓</Text>
                    </View>
                  ) : null}
                </View>
                <Text style={styles.programDesc}>{p.description}</Text>
              </Pressable>
            );
          })}
        </View>

        {value ? (
          <Pressable
            onPress={() => setDateModal(true)}
            style={styles.dateBtn}
          >
            <Text style={styles.dateLabel}>Hedef tarihi (isteğe bağlı)</Text>
            <Text style={styles.dateValue}>
              {goalDate ?? "Tarih seç →"}
            </Text>
          </Pressable>
        ) : null}

        <Pressable onPress={onSkip} style={styles.linkRow}>
          <Text style={styles.linkText}>
            Sadece ilerletmek istiyorum →
          </Text>
        </Pressable>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          label={canContinue ? "Devam" : "Bir hedef seç"}
          onPress={onContinue}
          disabled={!canContinue}
          stacked
        />
      </View>

      <Modal
        visible={dateModal}
        animationType="slide"
        transparent
        onRequestClose={() => setDateModal(false)}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalSheet}>
            <Text style={styles.modalTitle}>Hedef tarihin?</Text>
            <Text style={styles.modalDesc}>
              Programı bitirmek istediğin tarihi seç. İstediğinde değiştirebilirsin.
            </Text>
            <View style={styles.presetList}>
              {DATE_PRESETS.map((p) => (
                <Pressable
                  key={p.label}
                  onPress={() => {
                    onPickDate(isoFromOffset(p.addDays));
                    setDateModal(false);
                  }}
                  style={styles.preset}
                >
                  <Text style={styles.presetLabel}>{p.label}</Text>
                  <Text style={styles.presetDate}>
                    {isoFromOffset(p.addDays)}
                  </Text>
                </Pressable>
              ))}
              {goalDate ? (
                <Pressable
                  onPress={() => {
                    onPickDate(undefined);
                    setDateModal(false);
                  }}
                  style={[styles.preset, styles.presetClear]}
                >
                  <Text style={styles.presetClearText}>Tarihi sıfırla</Text>
                </Pressable>
              ) : null}
            </View>
            <Pressable
              onPress={() => setDateModal(false)}
              style={styles.modalCancel}
            >
              <Text style={styles.modalCancelText}>Vazgeç</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// ============================================================
// STEP 5 — INTERESTS
// ============================================================

function InterestsStep({
  selected,
  onToggle,
  onContinue,
}: {
  selected: string[];
  onToggle: (id: string) => void;
  onContinue: () => void;
}) {
  const canContinue = selected.length > 0;
  return (
    <View style={styles.stepShell}>
      <ScrollView contentContainerStyle={styles.stepScroll}>
        <Text style={styles.stepHeader}>
          Hangi konularda pratik istiyorsun?
        </Text>
        <Text style={styles.stepSubtitle}>
          Birden fazla seçebilirsin. Maya akışı bunlara göre çeşitlendirir.
        </Text>

        <View style={styles.interestList}>
          {INTEREST_OPTIONS.map((opt) => (
            <InterestCard
              key={opt.id}
              emoji={opt.emoji}
              label={opt.label}
              selected={selected.includes(opt.id)}
              onPress={() => onToggle(opt.id)}
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Button
          label={canContinue ? "Devam" : "En az birini seç"}
          onPress={onContinue}
          disabled={!canContinue}
          stacked
        />
      </View>
    </View>
  );
}

// ============================================================
// STEP 6 — COACH INTRO
// ============================================================

function CoachIntroStep({
  name,
  level,
  programId,
  saving,
  onFinish,
}: {
  name: string;
  level: CefrLevel | null;
  programId: ProgramId | null;
  saving: boolean;
  onFinish: () => void;
}) {
  const programDef = useMemo(
    () => PROGRAMS.find((p) => p.id === programId) ?? null,
    [programId],
  );
  const greeting = useMemo(() => {
    const who = name.trim() || "arkadaş";
    const lvl = level ?? "B1";
    const title = programDef?.title ?? "İngilizce";
    const firstFocus = firstDayFocusFor(programId);
    return `Merhaba ${who}, ben Maya. ${lvl} seviyesinden ${title} yolunda yanındayım. İlk seansta ${firstFocus} ile başlayalım. Hazır mısın?`;
  }, [name, level, programDef, programId]);

  return (
    <View style={styles.stepShell}>
      <ScrollView contentContainerStyle={[styles.stepScroll, styles.coachScroll]}>
        <View style={styles.avatarWrap}>
          {CoachAvatarMaybe ? (
            <CoachAvatarMaybe state="idle" size={128} name="Maya" />
          ) : (
            <FallbackAvatar />
          )}
        </View>
        <Text style={styles.coachGreeting}>{greeting}</Text>
      </ScrollView>
      <View style={styles.footer}>
        <Button
          label={saving ? "Hazırlanıyor..." : "Başlayalım"}
          onPress={onFinish}
          disabled={saving}
          loading={saving}
          stacked
        />
      </View>
    </View>
  );
}

function FallbackAvatar() {
  return (
    <View style={styles.fallbackAvatar}>
      <Text style={styles.fallbackAvatarText}>M</Text>
    </View>
  );
}

function firstDayFocusFor(id: ProgramId | null): string {
  switch (id) {
    case "job-interview":
      return "'Tell me about yourself'";
    case "travel-usuk":
      return "havaalanı diyalogları";
    case "ielts-speaking":
      return "Part 1 kişisel sorular";
    case "toefl-speaking":
      return "Task 1 bağımsız konuşma";
    case "yds-yokdil":
      return "kelime bilgisi";
    case "remote-work":
      return "Slack mesajlaşma";
    case "academic-abroad":
      return "sınıf tartışmasına katılım";
    case "general-fluency":
    default:
      return "günlük small talk";
  }
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
    fontSize: 28,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.4,
    marginBottom: tokens.spacing.xs,
    lineHeight: 34,
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
    backgroundColor: "rgba(255, 255, 255, 0.96)",
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
  },
  heroDot: {
    fontSize: 64,
    fontWeight: tokens.weight.black,
    color: tokens.brand.tertiary,
    lineHeight: 70,
  },
  welcomeTitle: {
    fontSize: 30,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.4,
    textAlign: "center",
    marginTop: tokens.spacing.md,
    marginBottom: tokens.spacing.sm,
    lineHeight: 36,
  },
  welcomePitch: {
    fontSize: 17,
    color: tokens.text.secondary,
    lineHeight: 26,
    textAlign: "center",
    paddingHorizontal: tokens.spacing.sm,
  },

  // ---------- Name ----------
  input: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    borderWidth: 2,
    borderColor: tokens.border.light,
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
    gap: 10,
  },
  levelCard: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    borderWidth: 2,
    borderColor: tokens.border.light,
    padding: 16,
  },
  levelCardSelected: {
    backgroundColor: tokens.brand.primarySoft,
    borderColor: tokens.brand.primary,
  },
  levelCardTitle: {
    fontSize: 16,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    marginBottom: 4,
  },
  levelCardTitleSelected: {
    color: tokens.text.primary,
  },
  levelCardDesc: {
    fontSize: 14,
    color: tokens.text.secondary,
    lineHeight: 20,
  },
  altCta: {
    marginTop: tokens.spacing.md,
    backgroundColor: tokens.brand.tertiarySoft,
    borderRadius: tokens.radius.base,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  altCtaText: {
    color: tokens.brand.tertiary,
    fontSize: 15,
    fontWeight: tokens.weight.bold,
  },

  // ---------- Program ----------
  programList: { gap: 10 },
  programCard: {
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderRadius: tokens.radius.base,
    borderWidth: 2,
    borderColor: tokens.border.light,
    padding: tokens.spacing.md,
  },
  programCardSelected: {
    backgroundColor: tokens.brand.primarySoft,
    borderColor: tokens.brand.primary,
  },
  programHead: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  programEmoji: { fontSize: 30 },
  programHeadText: { flex: 1 },
  programTitle: {
    fontSize: 16,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.2,
  },
  programMeta: {
    fontSize: 12,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.semibold,
    marginTop: 2,
  },
  programCheck: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: tokens.brand.tertiary,
    alignItems: "center",
    justifyContent: "center",
  },
  programCheckText: {
    color: tokens.text.onTertiary,
    fontWeight: tokens.weight.extrabold,
    fontSize: 13,
  },
  programDesc: {
    fontSize: 14,
    color: tokens.text.secondary,
    lineHeight: 20,
    marginTop: 8,
  },
  dateBtn: {
    marginTop: tokens.spacing.md,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderRadius: tokens.radius.base,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateLabel: {
    fontSize: 14,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
  },
  dateValue: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
  },

  // ---------- Interests ----------
  interestList: { gap: tokens.spacing.sm },

  // ---------- Coach intro ----------
  coachScroll: {
    paddingTop: tokens.spacing.lg,
    alignItems: "center",
  },
  avatarWrap: {
    marginBottom: tokens.spacing.md,
  },
  coachGreeting: {
    fontSize: 19,
    color: tokens.text.primary,
    lineHeight: 28,
    textAlign: "center",
    paddingHorizontal: tokens.spacing.sm,
    fontWeight: tokens.weight.medium,
  },
  fallbackAvatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: tokens.brand.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  fallbackAvatarText: {
    fontSize: 56,
    fontWeight: tokens.weight.black,
    color: tokens.brand.onPrimary,
  },

  // ---------- Modal (date) ----------
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  modalSheet: {
    backgroundColor: tokens.bg.app,
    borderTopLeftRadius: tokens.radius.lg,
    borderTopRightRadius: tokens.radius.lg,
    padding: tokens.spacing.md,
    paddingBottom: 32,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    marginBottom: 6,
  },
  modalDesc: {
    fontSize: 14,
    color: tokens.text.secondary,
    lineHeight: 20,
    marginBottom: tokens.spacing.md,
  },
  presetList: { gap: 8 },
  preset: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderRadius: tokens.radius.base,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  presetLabel: {
    fontSize: 15,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  presetDate: {
    fontSize: 13,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.semibold,
  },
  presetClear: {
    justifyContent: "center",
  },
  presetClearText: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
  },
  modalCancel: {
    marginTop: tokens.spacing.md,
    alignItems: "center",
    paddingVertical: 12,
  },
  modalCancelText: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
  },
});
