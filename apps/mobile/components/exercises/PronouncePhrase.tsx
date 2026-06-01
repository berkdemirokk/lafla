// PronouncePhrase — speak the English phrase aloud, grade per-word.
//
// Three states:
//   idle     → phrase + speaker + big yellow "Şimdi sen söyle 🎤" CTA
//   listening → pulsing mic + "Dinliyorum..." + "İptal"
//   graded   → per-word color bands + overall score + retry / continue
//
// Speech recognition is loaded dynamically via lib/speech-recognition.ts.
// If the native module is unavailable (Expo Go, missing peer dep, web),
// we degrade gracefully: the user gets a free 100 and we hand back an
// ExerciseResult immediately so the lesson keeps flowing.

import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Animated,
  Easing,
  AppState,
  Linking,
  type AppStateStatus,
} from "react-native";
import { Button } from "../Button";
import { SpeakerButton } from "../SpeakerButton";
import { tokens } from "../../theme";
import {
  hapticForScore,
  hapticImpact,
  hapticError,
} from "../../lib/feedback";
import type { ExerciseResult } from "../../lib/engine";
import {
  gradePronunciation,
  gradePronunciationWithPhonemes,
  type WordBand,
  type PronunciationBand,
  type PhonemeAnalysisResult,
} from "../../lib/pronunciation-grader";
import { pushPronScore } from "../../lib/pronunciation-history";
import { PhonemeFeedback } from "../PhonemeFeedback";

interface Props {
  phrase: string;
  trHint?: string;
  onComplete: (result: ExerciseResult) => void;
  /** 2026-05-25 (B-SCN-15) — Eğer parent skip yolunu desteklediği bir flow ise
   *  (placement test gibi) bu prop'u verir. Mic permission reddedildiyse /
   *  cihaz desteklemiyorsa kullanıcı stuck kalmadan egzersizi atlayabilir.
   *  Verilmediyse skip butonu render edilmez (lesson akışında geri uyumluluk). */
  onSkip?: () => void;
}

type Stage = "idle" | "listening" | "graded";

interface GradedState {
  score: number;
  bandsByWord: WordBand[];
  heard: string;
  /** Phoneme analysis — sadece skor <85 ise hesaplanır + gösterilir.
   *  Türk-niche moat: ELSA/Speak generic %, Lafla per-fonem TR ipucu. */
  phonemes: PhonemeAnalysisResult | null;
}

const BAND_COLORS: Record<PronunciationBand, string> = {
  good: "#95d5b2",
  okay: "#ffd54f",
  miss: "#ef9a9a",
};

function feedbackFor(score: number): string {
  if (score >= 85) return "Harika telaffuz!";
  if (score >= 50) return "Fena değil — tekrar dene, daha net çıkar.";
  return "Yavaş ve net söylemeyi dene.";
}

export function PronouncePhrase({ phrase, trHint, onComplete, onSkip }: Props) {
  const [stage, setStage] = useState<Stage>("idle");
  const [graded, setGraded] = useState<GradedState | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  // 2026-05-26 (P0-5 fix) — Permission denied state: Settings'e CTA göstermek
  // için. iOS "Don't Allow" → ikinci dialog asla açılmıyor; kullanıcının
  // Ayarlar'a manuel gitmesi şart.
  const [permissionDenied, setPermissionDenied] = useState(false);
  // 2026-05-26 (P0-7 fix) — Race condition koruması: phoneme analiz async
  // başlar, kullanıcı handleRetry'a basarsa yeni denemede ESKİ phoneme
  // result'u patch'leyebilir. Snapshot ile bağ.
  const phraseSnapshotRef = useRef<string>("");

  // Pulse animation for mic during listening
  const pulse = useRef(new Animated.Value(1)).current;
  const pulseLoop = useRef<Animated.CompositeAnimation | null>(null);

  // Track whether we've already consumed a final result this session,
  // so a late onResult callback can't double-grade.
  const gradedThisSession = useRef(false);

  // Keep latest stage value accessible in async callbacks without
  // re-binding listeners.
  const stageRef = useRef<Stage>("idle");
  useEffect(() => {
    stageRef.current = stage;
  }, [stage]);

  useEffect(() => {
    if (stage === "listening") {
      pulse.setValue(1);
      pulseLoop.current = Animated.loop(
        Animated.sequence([
          Animated.timing(pulse, {
            toValue: 1.25,
            duration: 700,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(pulse, {
            toValue: 1,
            duration: 700,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ]),
      );
      pulseLoop.current.start();
    } else {
      pulseLoop.current?.stop();
      pulseLoop.current = null;
      pulse.setValue(1);
    }
    return () => {
      pulseLoop.current?.stop();
      pulseLoop.current = null;
    };
  }, [stage, pulse]);

  // Auto-clear error toast after a moment.
  useEffect(() => {
    if (!errorMsg) return;
    const t = setTimeout(() => setErrorMsg(null), 2400);
    return () => clearTimeout(t);
  }, [errorMsg]);

  // If we unmount mid-listen, make sure we tear down the native session.
  useEffect(() => {
    return () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const sr = require("../../lib/speech-recognition");
        sr?.stopListening?.();
      } catch {
        // module not installed — nothing to clean up
      }
    };
  }, []);

  // 2026-05-25 (B-SCN-14) — Kullanıcı listening sırasında Ayarlar'a giderse
  // (örn. mic permission açmak için) component mount kalır, mic native side
  // background'da donar. App active'e dönerse stage hala "listening" + pulse
  // loop'u. AppState listener ile background'da stopListening + stage idle.
  useEffect(() => {
    const sub = AppState.addEventListener("change", (next: AppStateStatus) => {
      if (next !== "active" && stage === "listening") {
        try {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          const sr = require("../../lib/speech-recognition");
          sr?.stopListening?.();
        } catch {}
        setStage("idle");
      }
    });
    return () => sub.remove();
  }, [stage]);

  const handleMicPress = async () => {
    hapticImpact("medium");
    setErrorMsg(null);
    gradedThisSession.current = false;

    // Dynamic require so the bundle still builds when the native dep
    // isn't installed in the current environment.
    type SrModule = typeof import("../../lib/speech-recognition");
    let sr: SrModule | null = null;
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      sr = require("../../lib/speech-recognition") as SrModule;
    } catch {
      sr = null;
    }

    if (!sr) {
      // Graceful degrade — skip pronunciation for this exercise.
      onComplete({
        exercise_id: "pronounce_phrase",
        exercise_type: "pronounce_phrase",
        correct: true,
        score: 100,
        feedback: "Telaffuz atlandı (cihaz desteklemiyor).",
      });
      return;
    }

    const available = await sr.isAvailable().catch(() => false);
    if (!available) {
      onComplete({
        exercise_id: "pronounce_phrase",
        exercise_type: "pronounce_phrase",
        correct: true,
        score: 100,
        feedback: "Telaffuz atlandı (cihaz desteklemiyor).",
      });
      return;
    }

    // 2026-05-26 (P0 audit fix) — setStage("listening") buradan kaldırıldı.
    // sr.startListening'in içinde onError SYNC tetiklenirse (permission
    // denied, modül yok) React 18 batching sırasında "listening" set'i
    // onError'ın "idle" set'inden sonra commit olabiliyordu → stage
    // sonsuza dek "listening" pulse'ında kilitleniyordu. Çözüm: ilk gerçek
    // interim event'inde set et — native modül gerçekten "dinliyor"
    // sinyalini verdiğinde UI da o duruma geçer.
    await sr.startListening({
      lang: "en-US",
      contextualStrings: [phrase],
      onResult: (text, isFinal) => {
        // İlk interim sinyalinde stage'i "listening"e taşı. Final'a kadar
        // tekrar set edilmesi React no-op.
        if (!gradedThisSession.current) setStage("listening");
        if (!isFinal) return;
        if (gradedThisSession.current) return;
        gradedThisSession.current = true;
        const g = gradePronunciation(phrase, text);
        hapticForScore(g.score);
        // Phoneme-level analiz sadece skor <85 ise — kullanıcı zaten
        // başardıysa "fonem ipucu" gürültü, başaramadıysa altın değerinde.
        // Async; UI'a "graded" set ettikten sonra setState ile gelir.
        setGraded({
          score: g.score,
          bandsByWord: g.bandsByWord,
          heard: text,
          phonemes: null,
        });
        setStage("graded");
        if (g.score < 85) {
          // 2026-05-26 (P0-7 fix) — Snapshot phrase'i ve callback'te eşle.
          // handleRetry phrase'i değiştirmez ama component remount ederse
          // (key değişir) eski promise yeni instance'a patch yapmasın.
          const snap = phrase;
          phraseSnapshotRef.current = snap;
          gradePronunciationWithPhonemes(phrase, text)
            .then((pa) => {
              if (phraseSnapshotRef.current !== snap) return;
              setGraded((prev) =>
                prev ? { ...prev, phonemes: pa } : prev,
              );
            })
            .catch(() => {
              // Best effort — phoneme analysis failure shouldn't break
              // the basic graded UI.
            });
        }
      },
      onError: (e) => {
        hapticError();
        // 2026-05-25 (B-SCN-10) — Engine'den gelen mesajlar İngilizce
        // (örn. "speech recognition permission denied"). Türk kullanıcıya
        // anlamlı çevirim.
        const raw = (e.message || "").toLowerCase();
        let tr: string;
        if (raw.includes("permission")) {
          tr = "Mikrofon izni gerekli — Ayarlar'dan izin ver.";
          setPermissionDenied(true); // Settings CTA görünür olsun
        } else if (raw.includes("network") || raw.includes("fetch")) {
          tr = "Bağlantı problemi. İnternetini kontrol et.";
        } else if (raw.includes("not available") || raw.includes("module")) {
          tr = "Mikrofon bu cihazda desteklenmiyor.";
        } else {
          tr = "Mikrofon hatası — bir daha dene.";
        }
        setErrorMsg(tr);
        // 2026-05-26 (P0-8 fix) — Functional setter ile race koruması.
        // setStage("listening") henüz commit olmadan onError SYNC çağrılırsa
        // önceki "idle → listening" intent kaybolup pulse loop kilitleniyordu.
        if (!gradedThisSession.current) {
          setStage((s) => (s === "graded" ? s : "idle"));
        }
      },
    });
  };

  const handleCancel = async () => {
    hapticImpact("light");
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const sr = require("../../lib/speech-recognition");
      await sr?.stopListening?.();
    } catch {
      // ignore
    }
    setStage("idle");
  };

  const handleRetry = () => {
    hapticImpact("light");
    setGraded(null);
    setStage("idle");
  };

  const handleContinue = () => {
    if (!graded) return;
    const score = graded.score;
    // 2026-05-23 — CEFR fix v2: phoneme score'u sadece pronunciation-history'e
    // yaz, recordCefrProgress'a YAZMA. Eski versiyon (PronouncePhrase +
    // SpeechShadowing + scenario verdict) aynı CEFR kanalına 3 kere yazıyordu:
    // user level'lar tasarımdan 2-3× hızlı yükseliyordu (audit confirmed
    // double-count). Tek source-of-truth: scene verdict (scenario/[id].tsx
    // line ~1260). Phoneme history sadece IELTS Band Estimator pron column
    // için ayrı kanal — CEFR'a doğrudan etkisi yok.
    void pushPronScore(score, "pronounce_phrase").catch(() => {});
    onComplete({
      exercise_id: "pronounce_phrase",
      exercise_type: "pronounce_phrase",
      correct: score >= 50,
      score,
      feedback: feedbackFor(score),
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Telaffuz et</Text>

      <View style={styles.phraseBlock}>
        <Text style={styles.phrase}>{phrase}</Text>
        <View style={styles.speakerRow}>
          <SpeakerButton text={phrase} size="lg" />
          <Text style={styles.speakerHint}>Önce dinle</Text>
        </View>
      </View>

      {stage !== "graded" && trHint && (
        <Text style={styles.hint}>💡 {trHint}</Text>
      )}

      {stage === "graded" && graded && (
        <View style={styles.gradedBlock}>
          <View style={styles.wordsRow}>
            {graded.bandsByWord.map((wb, idx) => (
              <View
                key={`${wb.word}-${idx}`}
                style={[
                  styles.wordChip,
                  { backgroundColor: BAND_COLORS[wb.band] },
                ]}
              >
                <Text style={styles.wordText}>{wb.word}</Text>
              </View>
            ))}
          </View>

          <View style={styles.scoreRow}>
            <Text style={styles.scoreLabel}>Skor</Text>
            <Text style={styles.scoreValue}>{graded.score}/100</Text>
          </View>
          <Text style={styles.feedbackText}>{feedbackFor(graded.score)}</Text>

          {/* Phoneme-level feedback — skor <85 ise gözükür.
              Türk için en zor fonemler (TH, V/W, AE, etc.) inline coaching.
              Bu Lafla'nın ELSA/Speak'e karşı moat'i — generic % değil,
              "şu sesi şöyle çıkar" Türkçe ipucu. */}
          {graded.phonemes && (
            <PhonemeFeedback analysis={graded.phonemes} />
          )}
        </View>
      )}

      {errorMsg && (
        <View style={styles.errorToast}>
          <Text style={styles.errorToastText}>⚠️  {errorMsg}</Text>
          {/* 2026-05-26 (P0-5 fix) — Permission denied'de Settings'e CTA.
              iOS "Don't Allow" sonrası dialog tekrar açılmıyor; user manuel
              Ayarlar'a gitmek zorunda. Linking.openSettings tek-tap çözer. */}
          {permissionDenied && (
            <Pressable
              onPress={() => {
                hapticImpact("light");
                void Linking.openSettings().catch(() => {});
              }}
              style={({ pressed }) => [
                styles.settingsBtn,
                pressed && styles.settingsBtnPressed,
              ]}
              hitSlop={8}
            >
              <Text style={styles.settingsBtnText}>Ayarları aç →</Text>
            </Pressable>
          )}
        </View>
      )}

      {/* 2026-05-25 (B-SCN-15) — Skip butonu. Mic permission reddedildiyse
          veya cihaz desteklemiyorsa kullanıcı stuck kalmasın. Sadece:
            • parent onSkip prop'u verdiyse (placement gibi opt-in flow)
            • stage idle/listening (graded'da artık skip mantıklı değil)
            • errorMsg var (yani gerçekten mic problemi yaşandı; aksi halde
              "kolay yolu seçme" gürültüsü olurdu).
          Bu kombinasyon Hafta-1 churn'ün gizli kaynağıydı (audit raporu). */}
      {onSkip && errorMsg && stage !== "graded" && (
        <Pressable
          onPress={() => {
            hapticImpact("light");
            onSkip();
          }}
          style={({ pressed }) => [
            styles.skipBtn,
            pressed && styles.skipBtnPressed,
          ]}
          hitSlop={8}
        >
          <Text style={styles.skipBtnText}>Bu egzersizi atla →</Text>
        </Pressable>
      )}

      <View style={styles.footer}>
        {stage === "idle" && (
          <Pressable
            onPress={handleMicPress}
            style={({ pressed }) => [
              styles.micCta,
              pressed && styles.micCtaPressed,
            ]}
          >
            <Text style={styles.micCtaText}>Şimdi sen söyle 🎤</Text>
          </Pressable>
        )}

        {stage === "listening" && (
          <View style={styles.listeningBlock}>
            <Animated.View
              style={[styles.micPulse, { transform: [{ scale: pulse }] }]}
            >
              <Text style={styles.micPulseIcon}>🎤</Text>
            </Animated.View>
            <Text style={styles.listeningText}>Dinliyorum...</Text>
            <Pressable
              onPress={handleCancel}
              style={({ pressed }) => [
                styles.cancelBtn,
                pressed && styles.cancelBtnPressed,
              ]}
              hitSlop={8}
            >
              <Text style={styles.cancelBtnText}>İptal</Text>
            </Pressable>
          </View>
        )}

        {stage === "graded" && (
          <View style={styles.gradedButtons}>
            <View style={styles.retryWrap}>
              <Button
                label="Tekrar dene"
                onPress={handleRetry}
                variant="secondary"
              />
            </View>
            <View style={styles.continueWrap}>
              <Button label="Devam et →" onPress={handleContinue} />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  prompt: {
    fontSize: 14,
    color: tokens.text.secondary,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    fontWeight: tokens.weight.bold,
    marginBottom: tokens.spacing.sm,
  },
  phraseBlock: {
    marginBottom: tokens.spacing.md,
  },
  phrase: {
    fontSize: 28,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    lineHeight: 36,
    marginBottom: tokens.spacing.sm,
  },
  speakerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  speakerHint: {
    fontSize: 14,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.medium,
  },
  hint: {
    color: tokens.text.secondary,
    fontSize: 14,
    marginTop: tokens.spacing.xs,
  },

  // Graded
  gradedBlock: {
    marginTop: tokens.spacing.md,
    padding: tokens.spacing.md,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderWidth: 2,
    borderColor: tokens.bg.surfaceContainerHigh,
  },
  wordsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: tokens.spacing.md,
  },
  wordChip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: tokens.radius.sm,
  },
  wordText: {
    fontSize: 16,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  scoreRow: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: tokens.spacing.xs,
  },
  scoreLabel: {
    fontSize: 14,
    color: tokens.text.secondary,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    fontWeight: tokens.weight.bold,
  },
  scoreValue: {
    fontSize: 28,
    color: tokens.brand.tertiary,
    fontWeight: tokens.weight.black,
  },
  feedbackText: {
    fontSize: 14,
    color: tokens.text.secondary,
    lineHeight: 20,
  },

  // Error toast
  errorToast: {
    marginTop: tokens.spacing.md,
    padding: tokens.spacing.sm,
    borderRadius: tokens.radius.sm,
    backgroundColor: tokens.semantic.errorContainer,
  },
  errorToastText: {
    color: tokens.semantic.onErrorContainer,
    fontSize: 14,
    fontWeight: tokens.weight.semibold,
  },
  settingsBtn: {
    marginTop: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primarySoft,
    alignSelf: "flex-start",
  },
  settingsBtnPressed: { opacity: 0.6 },
  settingsBtnText: {
    color: tokens.brand.primary,
    fontSize: 13,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 0.2,
  },

  // Skip button — küçük, tertiary. Yalnızca onSkip prop'u + errorMsg
  // varsa görünür (parent opt-in escape hatch).
  skipBtn: {
    marginTop: tokens.spacing.sm,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: tokens.radius.full,
    alignSelf: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: tokens.border.outline,
  },
  skipBtnPressed: {
    opacity: 0.6,
  },
  skipBtnText: {
    fontSize: 13,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.semibold,
    letterSpacing: 0.2,
  },

  // Footer
  footer: {
    marginTop: "auto",
    paddingTop: tokens.spacing.md,
  },

  // Idle CTA — big yellow
  micCta: {
    backgroundColor: tokens.brand.primaryContainer,
    paddingVertical: 22,
    paddingHorizontal: 32,
    borderRadius: tokens.radius.full,
    alignItems: "center",
    justifyContent: "center",
  },
  micCtaPressed: {
    opacity: 0.88,
    transform: [{ scale: 0.98 }],
  },
  micCtaText: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.onPrimary,
    letterSpacing: 0.3,
  },

  // Listening
  listeningBlock: {
    alignItems: "center",
    gap: tokens.spacing.sm,
  },
  micPulse: {
    width: 88,
    height: 88,
    borderRadius: 44,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: tokens.brand.primarySoft,
    borderWidth: 2,
    borderColor: tokens.brand.primaryFixed,
  },
  micPulseIcon: {
    fontSize: 40,
  },
  listeningText: {
    fontSize: 18,
    color: tokens.text.primary,
    fontWeight: tokens.weight.bold,
    marginTop: tokens.spacing.xs,
  },
  cancelBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: tokens.radius.full,
    backgroundColor: "transparent",
  },
  cancelBtnPressed: {
    opacity: 0.6,
  },
  cancelBtnText: {
    fontSize: 14,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.semibold,
  },

  // Graded buttons row
  gradedButtons: {
    flexDirection: "row",
    gap: tokens.spacing.sm,
  },
  retryWrap: {
    flex: 1,
  },
  continueWrap: {
    flex: 1,
  },
});
