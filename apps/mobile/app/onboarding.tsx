// Lafla — Onboarding (4 adım, ~45 saniye, tamamen Türkçe, premium hareket).
//
// Akış (2026-05-20 — track adımı söküldü):
//   1. welcome    — Wordmark glow + tagline + "Başla"
//   2. interests  — "Hangi sahneler senin için önemli?" → 6 chip, çoklu seçim,
//                   en az 2 zorunlu → AsyncStorage `lafla.interests`
//   3. name       — "Sana nasıl hitap edelim?" → opsiyonel, atlanabilir
//                   → AsyncStorage `lafla.displayName`
//   4. cefr       — "İngilizce seviyen?" → 6 kart (A1–C2) → setCefrLevel
//
// 6 chip: Flört · İş · Bar · Havaalanı · Günlük · Sipariş. Her chip 1:1
// SceneMode'a map'lenir (bkz. lib/interest-mapping.ts).
//
// Premium hareket için Reanimated 3.17 kullanılır:
//   - Her adım mount'ta opacity + translateY ile gelir (StepContainer).
//   - Interest chip'leri + Level kartları onPressIn'de scale 0.97'ye iner,
//     onPressOut'ta spring ile 1.0'a döner.
//   - ProgressDots aktif noktasının genişliği animasyonla artar (flex 1 → 2.4).
//
// "← Geri" üstte solda — welcome dışında. Bottom CTA: "Devam et" / "Başla" /
// "Tamamla". Skip yalnız Name ve Interests'te görünür.
//
// Akış bitince:
//   - State diske yazılır (level, interests, displayName, onboarded=true).
//   - `onboarding_completed` analytics event'i atılır.
//   - ATT izni istenir (value-after pattern); granted ise analytics re-init.
//   - /home'a router.replace ile gidilir.

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
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "../components/Button";
import { initAnalytics, trackEvent } from "../lib/analytics";
import { requestAttOnce } from "../lib/att";
import { completeOnboarding } from "../lib/auth";
import { setCefrLevel, type CefrLevel } from "../lib/cefr-level";
import { finalizeOnboarding } from "../lib/onboarding-finalize";
import {
  hapticImpact,
  hapticSelection,
  hapticSuccess,
} from "../lib/feedback";
import {
  getOnboardingStep,
  setInterests,
  setOnboarded,
  setOnboardingStep,
} from "../lib/onboarding-state";
import { tokens } from "../theme";

// ============================================================
// TİPLER & SABİTLER
// ============================================================

type OnboardingStep = "welcome" | "interests" | "name" | "cefr";

const STEP_ORDER: OnboardingStep[] = [
  "welcome",
  "interests",
  "name",
  "cefr",
];

// Persistence keys (yeni 4-adım akışı). Eski `lafla.user.name` anahtarı geçişte
// temizlenir; yeni isim `lafla.displayName` altında tutulur. `lafla.track`
// anahtarı 2026-05-20 itibarıyla artık yazılmıyor — orphan kalır, sonraki
// açılışta ignored olur.
const K_DISPLAY_NAME = "lafla.displayName";
const K_LEGACY_NAME = "lafla.user.name";

const MIN_INTERESTS = 2;

interface OnboardingState {
  step: OnboardingStep;
  interests: string[];
  displayName: string;
}

type Action =
  | { type: "GOTO"; step: OnboardingStep }
  | { type: "NEXT" }
  | { type: "BACK" }
  | { type: "TOGGLE_INTEREST"; id: string }
  | { type: "SET_NAME"; name: string };

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
    case "TOGGLE_INTEREST": {
      const exists = state.interests.includes(action.id);
      const next = exists
        ? state.interests.filter((id) => id !== action.id)
        : [...state.interests, action.id];
      return { ...state, interests: next };
    }
    case "SET_NAME":
      return { ...state, displayName: action.name };
    default:
      return state;
  }
}

const INITIAL: OnboardingState = {
  step: "welcome",
  interests: [],
  displayName: "",
};

// ---------- İlgi alanı (interest) chip'leri — 6 mod (2026-05-20 cut) ----------
// id değerleri lib/interest-mapping.ts'deki InterestId ile eşleşir.
interface InterestChoice {
  id: string;
  emoji: string;
  label: string;
}

const INTEREST_CHOICES: InterestChoice[] = [
  { id: "flirt",   emoji: "💕", label: "Flört" },
  { id: "work",    emoji: "💼", label: "İş" },
  { id: "bar",     emoji: "🍻", label: "Bar" },
  { id: "airport", emoji: "✈️", label: "Havaalanı" },
  { id: "daily",   emoji: "☕", label: "Günlük" },
  { id: "order",   emoji: "🍽️", label: "Sipariş" },
];

// ---------- CEFR seviye kartları (A1–C2, altı tane) ----------
interface LevelChoice {
  emoji: string;
  cefr: CefrLevel;
  label: string;
  description: string;
}

const LEVEL_CHOICES: LevelChoice[] = [
  {
    emoji: "🌱",
    cefr: "A1",
    label: "A1 — Başlangıç",
    description: "Birkaç kelime biliyorum, cümle kurmak zor geliyor.",
  },
  {
    emoji: "🌿",
    cefr: "A2",
    label: "A2 — Temel",
    description: "Basit cümleleri anlıyorum, kısa diyaloglar kurabiliyorum.",
  },
  {
    emoji: "📖",
    cefr: "B1",
    label: "B1 — Orta",
    description: "Günlük konuları anlatabiliyorum, takıldığım yerler oluyor.",
  },
  {
    emoji: "🎯",
    cefr: "B2",
    label: "B2 — Orta-üstü",
    description: "İş ve sosyal hayatta rahatım; akıcılığımı geliştirmek istiyorum.",
  },
  {
    emoji: "🚀",
    cefr: "C1",
    label: "C1 — İleri",
    description: "Karmaşık konuları rahat tartışırım; nüansları cilalıyorum.",
  },
  {
    emoji: "🏆",
    cefr: "C2",
    label: "C2 — Ustalık",
    description: "Anadil seviyesine yakın; idiom ve jargon kovalıyorum.",
  },
];

// ============================================================
// ANA BİLEŞEN
// ============================================================

export default function Onboarding() {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, INITIAL);
  const [saving, setSaving] = useState(false);
  const [restored, setRestored] = useState(false);

  // Diskten son adımı geri yükle (kullanıcı uygulamayı yarıda kapattıysa).
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

  // Her adım değiştiğinde diske yaz.
  useEffect(() => {
    if (!restored) return;
    setOnboardingStep(state.step).catch(() => {});
  }, [state.step, restored]);

  const currentIndex = STEP_ORDER.indexOf(state.step);

  const goBack = () => {
    hapticSelection();
    dispatch({ type: "BACK" });
  };

  // ---------- Welcome ----------
  const handleWelcomeStart = () => {
    hapticImpact("light");
    void trackEvent("onboarding_step_completed", { step: "welcome" }).catch(
      () => {},
    );
    dispatch({ type: "NEXT" });
  };

  // ---------- Interests ----------
  const handleInterestsContinue = async () => {
    if (state.interests.length < MIN_INTERESTS) return;
    hapticSelection();
    await setInterests(state.interests).catch(() => {});
    void trackEvent("onboarding_interests_selected", {
      interests: state.interests,
      count: state.interests.length,
    }).catch(() => {});
    void trackEvent("onboarding_step_completed", { step: "interests" }).catch(
      () => {},
    );
    dispatch({ type: "NEXT" });
  };

  const handleInterestsSkip = async () => {
    hapticSelection();
    // Atlayan kullanıcının tercihi boş listedir — sahneler genel havuzdan gelir.
    await setInterests([]).catch(() => {});
    void trackEvent("onboarding_step_skipped", { step: "interests" }).catch(
      () => {},
    );
    dispatch({ type: "NEXT" });
  };

  // ---------- Name ----------
  const handleNameContinue = async () => {
    const trimmed = state.displayName.trim();
    hapticSelection();
    if (trimmed.length > 0) {
      await AsyncStorage.setItem(K_DISPLAY_NAME, trimmed).catch(() => {});
      void trackEvent("onboarding_name_set", { length: trimmed.length }).catch(
        () => {},
      );
    } else {
      await AsyncStorage.removeItem(K_DISPLAY_NAME).catch(() => {});
    }
    // Eski anahtar varsa temizle — tek kaynak: lafla.displayName.
    await AsyncStorage.removeItem(K_LEGACY_NAME).catch(() => {});
    dispatch({ type: "NEXT" });
  };

  const handleNameSkip = async () => {
    hapticSelection();
    dispatch({ type: "SET_NAME", name: "" });
    await AsyncStorage.removeItem(K_DISPLAY_NAME).catch(() => {});
    await AsyncStorage.removeItem(K_LEGACY_NAME).catch(() => {});
    void trackEvent("onboarding_step_skipped", { step: "name" }).catch(
      () => {},
    );
    dispatch({ type: "NEXT" });
  };

  // ---------- Placement test — adaptive yol ----------
  // Self-report yerine 6-soruluk test ile seviye ölç. Test bitince
  // /placement screen finalizeOnboarding'i kendi çağırır ve /home'a
  // yönlendirir. Interests + displayName state'i AsyncStorage'da
  // zaten saklanmış olduğu için placement screen bunları okuyup
  // finalize tetikleyebilir.
  const handleTakeTest = async () => {
    if (saving) return;
    hapticImpact("light");
    // Onboarding state'ini disk'e kaydet (interests + displayName) —
    // placement screen onlara erişebilsin.
    await setInterests(state.interests).catch(() => {});
    const trimmed = state.displayName.trim();
    if (trimmed.length > 0) {
      await AsyncStorage.setItem(K_DISPLAY_NAME, trimmed).catch(() => {});
    }
    await setOnboardingStep("cefr").catch(() => {});
    void trackEvent("onboarding_placement_initiated").catch(() => {});
    router.replace("/placement" as never);
  };

  // ---------- CEFR — finalize ----------
  const handlePickLevel = async (lvl: CefrLevel) => {
    if (saving) return;
    hapticImpact("medium");
    setSaving(true);

    // 2026-05-21 — finalize logic helper'a taşındı (lib/onboarding-finalize)
    // Aynı işi /placement ekranı da çağırır (adaptive test sonu).
    await finalizeOnboarding({
      level: lvl,
      interests: state.interests,
      displayName: state.displayName,
      source: "self_report",
    });

    hapticSuccess();
    setSaving(false);

    // 2026-05-20 — switch-trigger #1: force-first scene.
    // Onboarding biter bitmez kullanıcıyı doğrudan home feed'e koymak
    // yerine zorunlu bir "Tinder DM" sahnesi gösteriyoruz. Amaç: kullanıcı
    // ilk 90 saniyede "evet bu ben" momentini yaşasın. Daha önce intro
    // tamamlandıysa (`lafla.intro.tinder.completed=true`) bu adım atlanır
    // ve home feed normal akar.
    const introDone = await AsyncStorage.getItem(
      "lafla.intro.tinder.completed",
    ).catch(() => null);
    if (introDone === "true") {
      router.replace("/home" as never);
    } else {
      router.replace("/scenario/intro.tinder.0.1?intro=true" as never);
    }
  };

  // ---------- Render ----------
  const showBack = state.step !== "welcome" && !saving;

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="light" />

      <View style={styles.header}>
        {showBack ? (
          <Pressable
            onPress={goBack}
            style={styles.headerBtn}
            hitSlop={16}
            accessibilityRole="button"
            accessibilityLabel="Önceki adıma dön"
          >
            <Text style={styles.headerBtnText}>← Geri</Text>
          </Pressable>
        ) : (
          <View style={styles.headerBtn} />
        )}
        <View style={styles.dotsWrap}>
          <AnimatedProgressDots
            total={STEP_ORDER.length}
            currentIndex={currentIndex}
          />
        </View>
        {/* Sağ taraf — simetri için boşluk; Skip artık adımın içinde. */}
        <View style={styles.headerBtn} />
      </View>

      <KeyboardAvoidingView
        style={styles.kav}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 24 : 0}
      >
        {state.step === "welcome" && (
          <WelcomeStep onStart={handleWelcomeStart} />
        )}
        {state.step === "interests" && (
          <InterestsStep
            selected={state.interests}
            onToggle={(id) => {
              hapticSelection();
              dispatch({ type: "TOGGLE_INTEREST", id });
            }}
            onContinue={handleInterestsContinue}
            onSkip={handleInterestsSkip}
          />
        )}
        {state.step === "name" && (
          <NameStep
            value={state.displayName}
            onChange={(name) => dispatch({ type: "SET_NAME", name })}
            onContinue={handleNameContinue}
            onSkip={handleNameSkip}
          />
        )}
        {state.step === "cefr" && (
          <CefrStep
            onPick={handlePickLevel}
            onTakeTest={handleTakeTest}
            saving={saving}
          />
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// ============================================================
// PAYLAŞILAN — Adım kabı (fade + translateY on mount)
// ============================================================

function StepContainer({ children }: { children: React.ReactNode }) {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(18);

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 420,
      easing: Easing.out(Easing.cubic),
    });
    translateY.value = withTiming(0, {
      duration: 480,
      easing: Easing.out(Easing.cubic),
    });
  }, [opacity, translateY]);

  const animStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Animated.View style={[styles.stepShell, animStyle]}>
      {children}
    </Animated.View>
  );
}

// ---------- Animated CTA (spring-press scale) ----------
function AnimatedCta({
  label,
  onPress,
  disabled,
  loading,
  accessibilityLabel,
}: {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  accessibilityLabel?: string;
}) {
  const scale = useSharedValue(1);
  const ctaStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePress = () => {
    if (disabled) return;
    scale.value = withSequence(
      withTiming(0.97, { duration: 90, easing: Easing.out(Easing.quad) }),
      withSpring(1, { damping: 12, stiffness: 220 }),
    );
    onPress();
  };

  return (
    <Animated.View
      style={ctaStyle}
      accessibilityLabel={accessibilityLabel ?? label}
    >
      <Button
        label={label}
        onPress={handlePress}
        disabled={disabled}
        loading={loading}
        stacked
      />
    </Animated.View>
  );
}

// ---------- Spring-press Pressable wrapper (kart + chip için) ----------
function PressScale({
  children,
  onPress,
  disabled,
  style,
  accessibilityLabel,
  accessibilityRole,
  accessibilityState,
}: {
  children: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
  style?: object | object[];
  accessibilityLabel?: string;
  accessibilityRole?: "button" | "checkbox";
  accessibilityState?: { checked?: boolean; disabled?: boolean };
}) {
  const scale = useSharedValue(1);
  const animStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={animStyle}>
      <Pressable
        onPress={onPress}
        onPressIn={() => {
          scale.value = withTiming(0.97, {
            duration: 90,
            easing: Easing.out(Easing.quad),
          });
        }}
        onPressOut={() => {
          scale.value = withSpring(1, { damping: 12, stiffness: 220 });
        }}
        disabled={disabled}
        style={style}
        accessibilityRole={accessibilityRole}
        accessibilityLabel={accessibilityLabel}
        accessibilityState={accessibilityState}
        hitSlop={6}
      >
        {children}
      </Pressable>
    </Animated.View>
  );
}

// ---------- Animated progress dots (aktif olanın genişliği animasyonla artar) ----------
function AnimatedProgressDots({
  total,
  currentIndex,
}: {
  total: number;
  currentIndex: number;
}) {
  return (
    <View style={dotStyles.row}>
      {Array.from({ length: total }).map((_, i) => (
        <ProgressDot
          key={i}
          state={
            i < currentIndex ? "done" : i === currentIndex ? "active" : "pending"
          }
        />
      ))}
    </View>
  );
}

function ProgressDot({ state }: { state: "done" | "active" | "pending" }) {
  // Aktif nokta daha geniş (genişlik için flex katsayısı kullanıyoruz).
  const widthFactor = useSharedValue(state === "active" ? 2.4 : 1);
  const opacity = useSharedValue(state === "pending" ? 0.55 : 1);

  useEffect(() => {
    widthFactor.value = withTiming(state === "active" ? 2.4 : 1, {
      duration: 320,
      easing: Easing.out(Easing.cubic),
    });
    opacity.value = withTiming(state === "pending" ? 0.55 : 1, {
      duration: 220,
      easing: Easing.out(Easing.cubic),
    });
  }, [state, widthFactor, opacity]);

  const animStyle = useAnimatedStyle(() => ({
    flex: widthFactor.value,
    opacity: opacity.value,
  }));

  return (
    <Animated.View
      style={[
        dotStyles.dot,
        state === "done" && dotStyles.dotDone,
        state === "active" && dotStyles.dotActive,
        animStyle,
      ]}
    />
  );
}

const dotStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 6,
    width: "100%",
  },
  dot: {
    height: 6,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderRadius: 3,
  },
  dotDone: {
    backgroundColor: tokens.brand.primary,
  },
  dotActive: {
    backgroundColor: tokens.brand.primary,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.65,
    shadowRadius: 10,
    elevation: 4,
  },
});

// ============================================================
// ADIM 1 — KARŞILAMA
// ============================================================

function WelcomeStep({ onStart }: { onStart: () => void }) {
  // Wordmark için: gecikmeli scale-in + sürekli yumuşak nabız glow.
  const wordmarkScale = useSharedValue(0.9);
  const glowOpacity = useSharedValue(0.4);
  const taglineOpacity = useSharedValue(0);
  const taglineTranslateY = useSharedValue(10);

  useEffect(() => {
    wordmarkScale.value = withDelay(
      120,
      withSpring(1, { damping: 10, stiffness: 180 }),
    );
    glowOpacity.value = withDelay(
      200,
      withTiming(0.85, { duration: 800, easing: Easing.out(Easing.cubic) }),
    );
    taglineOpacity.value = withDelay(
      420,
      withTiming(1, { duration: 520, easing: Easing.out(Easing.cubic) }),
    );
    taglineTranslateY.value = withDelay(
      420,
      withTiming(0, { duration: 520, easing: Easing.out(Easing.cubic) }),
    );
  }, [wordmarkScale, glowOpacity, taglineOpacity, taglineTranslateY]);

  const wordmarkStyle = useAnimatedStyle(() => ({
    transform: [{ scale: wordmarkScale.value }],
  }));
  const glowStyle = useAnimatedStyle(() => ({
    opacity: glowOpacity.value,
    transform: [{ scale: wordmarkScale.value }],
  }));
  const taglineStyle = useAnimatedStyle(() => ({
    opacity: taglineOpacity.value,
    transform: [{ translateY: taglineTranslateY.value }],
  }));

  return (
    <StepContainer>
      <View style={styles.welcomeBody}>
        <View style={styles.welcomeHero}>
          <Animated.View style={[styles.wordmarkGlow, glowStyle]} />
          <Animated.Text style={[styles.wordmark, wordmarkStyle]}>
            Lafla
          </Animated.Text>
        </View>
        <Animated.View style={taglineStyle}>
          <Text style={styles.welcomeTagline}>
            5 dakikada gerçek İngilizce.
          </Text>
          <Text style={styles.welcomeSubtagline}>
            Sahne sahne pratik — ezber yok, gerçek hayat var.
          </Text>
        </Animated.View>
      </View>
      <View style={styles.footer}>
        <AnimatedCta
          label="Başla"
          onPress={onStart}
          accessibilityLabel="Onboarding'i başlat"
        />
      </View>
    </StepContainer>
  );
}

// ============================================================
// ADIM 2 — INTERESTS (6 chip, çoklu seçim, min 2)
// ============================================================

function InterestsStep({
  selected,
  onToggle,
  onContinue,
  onSkip,
}: {
  selected: string[];
  onToggle: (id: string) => void;
  onContinue: () => void;
  onSkip: () => void;
}) {
  const canContinue = selected.length >= MIN_INTERESTS;
  const remaining = Math.max(0, MIN_INTERESTS - selected.length);

  return (
    <StepContainer>
      <ScrollView contentContainerStyle={styles.stepScroll}>
        <Text style={styles.stepHeader}>Hangi sahneler senin için önemli?</Text>
        <Text style={styles.stepSubtitle}>
          {remaining > 0
            ? `En az ${MIN_INTERESTS} tane seç — istediğin kadar ekleyebilirsin.`
            : `Harika — ${selected.length} sahne seçtin.`}
        </Text>

        <View style={styles.chipGrid}>
          {INTEREST_CHOICES.map((choice) => (
            <InterestChip
              key={choice.id}
              choice={choice}
              selected={selected.includes(choice.id)}
              onPress={() => onToggle(choice.id)}
            />
          ))}
        </View>

        <Pressable
          onPress={onSkip}
          style={styles.linkRow}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel="İlgi alanı seçmeden devam et"
        >
          <Text style={styles.linkText}>Şimdilik atla →</Text>
        </Pressable>
      </ScrollView>
      <View style={styles.footer}>
        <AnimatedCta
          label="Devam et"
          onPress={onContinue}
          disabled={!canContinue}
          accessibilityLabel={
            canContinue
              ? "Devam et — ismini gir"
              : `En az ${MIN_INTERESTS} ilgi alanı seç`
          }
        />
      </View>
    </StepContainer>
  );
}

function InterestChip({
  choice,
  selected,
  onPress,
}: {
  choice: InterestChoice;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <PressScale
      onPress={onPress}
      style={[styles.chip, selected && styles.chipSelected]}
      accessibilityRole="checkbox"
      accessibilityLabel={`${choice.label} — ${selected ? "seçili" : "seçili değil"}`}
      accessibilityState={{ checked: selected }}
    >
      <Text style={styles.chipEmoji}>{choice.emoji}</Text>
      <Text style={[styles.chipLabel, selected && styles.chipLabelSelected]}>
        {choice.label}
      </Text>
    </PressScale>
  );
}

// ============================================================
// ADIM 3 — İSİM (opsiyonel, atlanabilir)
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
    const t = setTimeout(() => inputRef.current?.focus(), 280);
    return () => clearTimeout(t);
  }, []);

  return (
    <StepContainer>
      <ScrollView
        contentContainerStyle={styles.stepScroll}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.stepHeader}>Sana nasıl hitap edelim?</Text>
        <Text style={styles.stepSubtitle}>
          Sahnelerdeki karakterler bu isimle seslenir. İstersen sonra
          değiştirebilirsin.
        </Text>

        <TextInput
          ref={inputRef}
          style={styles.input}
          value={value}
          onChangeText={onChange}
          placeholder="Berk"
          placeholderTextColor={tokens.text.tertiary}
          autoCapitalize="words"
          autoCorrect={false}
          returnKeyType="done"
          maxLength={24}
          onSubmitEditing={onContinue}
          accessibilityLabel="Adın — sahnelerde sana böyle hitap edilecek"
        />

        <Pressable
          onPress={onSkip}
          style={styles.linkRow}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel="İsim girmeden devam et"
        >
          <Text style={styles.linkText}>Şimdilik atla →</Text>
        </Pressable>
      </ScrollView>
      <View style={styles.footer}>
        <AnimatedCta
          label="Devam et"
          onPress={onContinue}
          accessibilityLabel="Devam et — seviyeni seç"
        />
      </View>
    </StepContainer>
  );
}

// ============================================================
// ADIM 4 — CEFR SEVİYE
// ============================================================

function CefrStep({
  onPick,
  saving,
  onTakeTest,
}: {
  onPick: (l: CefrLevel) => void;
  saving: boolean;
  /** 2026-05-21 — Adaptive placement test alternatifi. */
  onTakeTest: () => void;
}) {
  return (
    <StepContainer>
      <ScrollView contentContainerStyle={styles.stepScroll}>
        <Text style={styles.stepHeader}>İngilizce seviyen?</Text>
        <Text style={styles.stepSubtitle}>
          Test ile ölç (3 dakika) veya kendin seç — zamanla otomatik ayarlanır.
        </Text>

        {/* Placement test CTA — primary path. Lerna AI'da var, Lafla'da
            self-report yerine artık adaptive 6-soru test. */}
        <Pressable
          onPress={onTakeTest}
          disabled={saving}
          style={({ pressed }) => [
            styles.placementCta,
            pressed && styles.placementCtaPressed,
            saving && styles.placementCtaDisabled,
          ]}
          accessibilityRole="button"
          accessibilityLabel="3 dakikada adaptive İngilizce seviye testi"
        >
          <Text style={styles.placementCtaIcon}>🎯</Text>
          <View style={styles.placementCtaText}>
            <Text style={styles.placementCtaTitle}>Test ile ölç</Text>
            <Text style={styles.placementCtaSub}>
              6 soru, ~3 dakika — gerçek seviyeni öğren
            </Text>
          </View>
          <Text style={styles.placementCtaArrow}>›</Text>
        </Pressable>

        <Text style={styles.orDivider}>YA DA KENDİN SEÇ</Text>

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

        {saving && (
          <Text style={styles.savingText}>Hazırlanıyor…</Text>
        )}
      </ScrollView>
    </StepContainer>
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
  return (
    <PressScale
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.levelCard,
        disabled && styles.levelCardDisabled,
      ]}
      accessibilityRole="button"
      accessibilityLabel={`Seviyeni ${choice.label} olarak seç. ${choice.description}`}
    >
      <Text style={styles.levelEmoji}>{choice.emoji}</Text>
      <View style={styles.levelText}>
        <Text style={styles.levelCardTitle}>{choice.label}</Text>
        <Text style={styles.levelCardDesc}>{choice.description}</Text>
      </View>
      <Text style={styles.levelArrow}>›</Text>
    </PressScale>
  );
}

// ============================================================
// STİLLER
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
    paddingBottom: 14,
    gap: 12,
    minHeight: 44,
  },
  headerBtn: {
    width: 72,
    minHeight: 44,
    justifyContent: "center",
  },
  headerBtnText: {
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
  welcomeBody: {
    flex: 1,
    paddingHorizontal: tokens.spacing.md,
    paddingTop: tokens.spacing.lg,
    paddingBottom: 160,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeHero: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: tokens.spacing.lg,
    position: "relative",
  },
  wordmarkGlow: {
    position: "absolute",
    top: -28,
    left: -36,
    right: -36,
    bottom: -28,
    backgroundColor: tokens.brand.primaryGlow,
    borderRadius: 9999,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 48,
    elevation: 12,
  },
  wordmark: {
    fontSize: 76,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -2.4,
    lineHeight: 82,
    fontFamily: tokens.font.display,
    textShadowColor: tokens.brand.primary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 24,
  },
  welcomeTagline: {
    fontSize: 24,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.3,
    textAlign: "center",
    marginBottom: tokens.spacing.sm,
    lineHeight: 30,
    fontFamily: tokens.font.display,
  },
  welcomeSubtagline: {
    fontSize: 16,
    color: tokens.text.secondary,
    lineHeight: 24,
    textAlign: "center",
    paddingHorizontal: tokens.spacing.sm,
  },

  // ---------- Interests (chip grid) ----------
  chipGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: tokens.spacing.xs,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    minHeight: 44,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1.5,
    borderColor: tokens.border.outline,
  },
  chipSelected: {
    backgroundColor: tokens.brand.primarySoft,
    borderColor: tokens.brand.primary,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 3,
  },
  chipEmoji: {
    fontSize: 18,
  },
  chipLabel: {
    fontSize: 15,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
  },
  chipLabelSelected: {
    color: tokens.text.primary,
  },

  // ---------- İsim ----------
  input: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    borderWidth: 2,
    borderColor: tokens.border.outline,
    paddingHorizontal: 18,
    paddingVertical: 18,
    fontSize: 20,
    minHeight: 56,
    color: tokens.text.primary,
    fontWeight: tokens.weight.semibold,
    marginTop: tokens.spacing.xs,
  },
  linkRow: {
    marginTop: tokens.spacing.md,
    paddingVertical: 12,
    minHeight: 44,
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  linkText: {
    fontSize: 14,
    color: tokens.brand.primary,
    fontWeight: tokens.weight.bold,
  },

  // ---------- Seviye ----------
  // Placement test CTA — Adım 49 (2026-05-21).
  placementCta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginVertical: 6,
    borderRadius: tokens.radius.lg,
    borderWidth: 2,
    borderColor: tokens.brand.tertiary,
    backgroundColor: tokens.brand.tertiarySoft,
    shadowColor: tokens.brand.tertiary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.45,
    shadowRadius: 18,
    elevation: 6,
  },
  placementCtaPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  placementCtaDisabled: {
    opacity: 0.5,
  },
  placementCtaIcon: {
    fontSize: 32,
  },
  placementCtaText: {
    flex: 1,
    gap: 2,
  },
  placementCtaTitle: {
    fontSize: 17,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.2,
    fontFamily: tokens.font.display,
  },
  placementCtaSub: {
    fontSize: 13,
    color: tokens.text.secondary,
    lineHeight: 17,
  },
  placementCtaArrow: {
    fontSize: 26,
    color: tokens.brand.tertiary,
    fontWeight: tokens.weight.bold,
  },
  orDivider: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 1.4,
    textAlign: "center",
    marginVertical: 18,
  },

  levelGrid: {
    gap: 12,
  },
  levelCard: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.lg,
    borderWidth: 1,
    borderColor: tokens.border.outline,
    padding: 18,
    minHeight: 80,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
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
    fontFamily: tokens.font.display,
  },
  levelCardDesc: {
    fontSize: 14,
    color: tokens.text.secondary,
    lineHeight: 20,
  },
  levelArrow: {
    fontSize: 26,
    color: tokens.brand.primary,
    fontWeight: tokens.weight.bold,
  },
  savingText: {
    marginTop: tokens.spacing.md,
    textAlign: "center",
    color: tokens.text.secondary,
    fontSize: 14,
    fontWeight: tokens.weight.semibold,
  },
});
