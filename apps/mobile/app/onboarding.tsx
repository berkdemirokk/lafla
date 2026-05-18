// Lafla — Onboarding (5 adım, ~60 saniye, tamamen Türkçe, premium hareket).
//
// Akış:
//   1. welcome    — Wordmark glow + tagline + "Başla"
//   2. track      — "Bugün ne öğrenmek istiyorsun?" → 3 kart (daily/exam/both)
//                   → AsyncStorage `lafla.track`
//   3. interests  — "Hangi sahneler senin için önemli?" → 8 chip, çoklu seçim,
//                   en az 2 zorunlu → AsyncStorage `lafla.interests`
//   4. name       — "Sana nasıl hitap edelim?" → opsiyonel, atlanabilir
//                   → AsyncStorage `lafla.displayName`
//   5. cefr       — "İngilizce seviyen?" → 6 kart (A1–C2) → setCefrLevel
//
// Premium hareket için Reanimated 3.17 kullanılır:
//   - Her adım mount'ta opacity + translateY ile gelir (StepContainer).
//   - Track/Level kartları + Interest chip'leri onPressIn'de scale 0.97'ye iner,
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

type OnboardingStep = "welcome" | "track" | "interests" | "name" | "cefr";

const STEP_ORDER: OnboardingStep[] = [
  "welcome",
  "track",
  "interests",
  "name",
  "cefr",
];

// Persistence keys (yeni 5-adım akışı). Eski `lafla.user.name` anahtarı geçişte
// temizlenir; yeni isim `lafla.displayName` altında tutulur.
const K_TRACK = "lafla.track";
const K_DISPLAY_NAME = "lafla.displayName";
const K_LEGACY_NAME = "lafla.user.name";

const MIN_INTERESTS = 2;

type TrackId = "daily" | "exam" | "both";

interface OnboardingState {
  step: OnboardingStep;
  track: TrackId | null;
  interests: string[];
  displayName: string;
}

type Action =
  | { type: "GOTO"; step: OnboardingStep }
  | { type: "NEXT" }
  | { type: "BACK" }
  | { type: "SET_TRACK"; track: TrackId }
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
    case "SET_TRACK":
      return { ...state, track: action.track };
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
  track: null,
  interests: [],
  displayName: "",
};

// ---------- Track seçenekleri ----------
interface TrackChoice {
  id: TrackId;
  emoji: string;
  title: string;
  description: string;
}

const TRACK_CHOICES: TrackChoice[] = [
  {
    id: "daily",
    emoji: "☕",
    title: "Günlük hayat",
    description:
      "Kahve sipariş etmekten flörte, seyahatten arkadaşlıklara — sahnede pratik.",
  },
  {
    id: "exam",
    emoji: "🎓",
    title: "Sınav hazırlığı",
    description:
      "IELTS, TOEFL, YDS — gerçek formatla puanını yükseltecek odaklı çalışma.",
  },
  {
    id: "both",
    emoji: "✨",
    title: "Her ikisi",
    description:
      "Hem günlük akıcılık hem sınav skoru. En kapsamlı program — Lafla'nın gücü.",
  },
];

// ---------- İlgi alanı (interest) chip'leri ----------
interface InterestChoice {
  id: string;
  emoji: string;
  label: string;
}

const INTEREST_CHOICES: InterestChoice[] = [
  { id: "dating", emoji: "🧊", label: "Flört" },
  { id: "work", emoji: "💼", label: "İş" },
  { id: "travel", emoji: "✈️", label: "Seyahat" },
  { id: "social", emoji: "👥", label: "Sosyal" },
  { id: "ordering", emoji: "🍽️", label: "Sipariş" },
  { id: "humor", emoji: "🎉", label: "Espri" },
  { id: "sports", emoji: "💪", label: "Spor" },
  { id: "health", emoji: "🩺", label: "Sağlık" },
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

  // ---------- Track ----------
  const handleTrackContinue = async () => {
    if (!state.track) return;
    hapticSelection();
    await AsyncStorage.setItem(K_TRACK, state.track).catch(() => {});
    void trackEvent("onboarding_track_selected", { track: state.track }).catch(
      () => {},
    );
    void trackEvent("onboarding_step_completed", { step: "track" }).catch(
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

  // ---------- CEFR — finalize ----------
  const handlePickLevel = async (lvl: CefrLevel) => {
    if (saving) return;
    hapticImpact("medium");
    setSaving(true);

    await setCefrLevel(lvl);
    await setInterests(state.interests).catch(() => {});
    if (state.track) {
      await AsyncStorage.setItem(K_TRACK, state.track).catch(() => {});
    }
    const trimmed = state.displayName.trim();
    if (trimmed.length > 0) {
      await AsyncStorage.setItem(K_DISPLAY_NAME, trimmed).catch(() => {});
    }
    await setOnboarded(true);
    await setOnboardingStep(null);
    // Hesap varsa profili senkronla (hata yutulur — local zaten kaydedildi).
    await completeOnboarding(state.interests).catch(() => {});

    // ATT — değer gördükten sonra (Apple önerisi). Reddedilirse de uygulama
    // çalışır; sadece analytics zarif şekilde devre dışı kalır.
    const attStatus = await requestAttOnce().catch(() => null);
    if (attStatus === "granted") {
      await initAnalytics().catch(() => {});
    }

    void trackEvent("onboarding_completed", {
      level: lvl,
      track: state.track,
      interests: state.interests,
      had_name: trimmed.length > 0,
    }).catch(() => {});

    hapticSuccess();
    setSaving(false);
    router.replace("/home" as never);
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
        {state.step === "track" && (
          <TrackStep
            selected={state.track}
            onSelect={(id) => {
              hapticSelection();
              dispatch({ type: "SET_TRACK", track: id });
            }}
            onContinue={handleTrackContinue}
          />
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
          <CefrStep onPick={handlePickLevel} saving={saving} />
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
// ADIM 2 — TRACK (3 kart, tek seçim)
// ============================================================

function TrackStep({
  selected,
  onSelect,
  onContinue,
}: {
  selected: TrackId | null;
  onSelect: (id: TrackId) => void;
  onContinue: () => void;
}) {
  const canContinue = selected !== null;
  return (
    <StepContainer>
      <ScrollView contentContainerStyle={styles.stepScroll}>
        <Text style={styles.stepHeader}>Bugün ne öğrenmek istiyorsun?</Text>
        <Text style={styles.stepSubtitle}>
          Bir tane seç — sonra Ayarlar'dan değiştirebilirsin.
        </Text>

        <View style={styles.trackGrid}>
          {TRACK_CHOICES.map((choice) => (
            <TrackCard
              key={choice.id}
              choice={choice}
              selected={selected === choice.id}
              onPress={() => onSelect(choice.id)}
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <AnimatedCta
          label="Devam et"
          onPress={onContinue}
          disabled={!canContinue}
          accessibilityLabel={
            canContinue
              ? "Devam et — ilgi alanlarını seç"
              : "Önce bir program seç"
          }
        />
      </View>
    </StepContainer>
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
  return (
    <PressScale
      onPress={onPress}
      style={[styles.trackCard, selected && styles.trackCardSelected]}
      accessibilityRole="button"
      accessibilityLabel={`${choice.title}. ${choice.description}`}
      accessibilityState={{ checked: selected }}
    >
      <Text style={styles.trackEmoji}>{choice.emoji}</Text>
      <View style={styles.trackText}>
        <Text style={styles.trackTitle}>{choice.title}</Text>
        <Text style={styles.trackDesc}>{choice.description}</Text>
      </View>
      <View
        style={[
          styles.trackRadio,
          selected && styles.trackRadioSelected,
        ]}
      >
        {selected ? <View style={styles.trackRadioDot} /> : null}
      </View>
    </PressScale>
  );
}

// ============================================================
// ADIM 3 — INTERESTS (8 chip, çoklu seçim, min 2)
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
// ADIM 4 — İSİM (opsiyonel, atlanabilir)
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
// ADIM 5 — CEFR SEVİYE
// ============================================================

function CefrStep({
  onPick,
  saving,
}: {
  onPick: (l: CefrLevel) => void;
  saving: boolean;
}) {
  return (
    <StepContainer>
      <ScrollView contentContainerStyle={styles.stepScroll}>
        <Text style={styles.stepHeader}>İngilizce seviyen?</Text>
        <Text style={styles.stepSubtitle}>
          Tahmin yeter — sahneler bu seviyeden başlar, zamanla otomatik ayarlanır.
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

  // ---------- Track (3 dikey kart) ----------
  trackGrid: {
    gap: 12,
    marginTop: tokens.spacing.xs,
  },
  trackCard: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.lg,
    borderWidth: 1.5,
    borderColor: tokens.border.outline,
    padding: 18,
    minHeight: 92,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  trackCardSelected: {
    backgroundColor: tokens.brand.primarySoft,
    borderColor: tokens.brand.primary,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 6,
  },
  trackEmoji: {
    fontSize: 36,
  },
  trackText: {
    flex: 1,
    gap: 4,
  },
  trackTitle: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    fontFamily: tokens.font.display,
  },
  trackDesc: {
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
    backgroundColor: tokens.brand.primary,
  },
  trackRadioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: tokens.text.onPrimary,
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
