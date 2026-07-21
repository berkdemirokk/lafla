// Roleplay Chat — iMessage-style multi-turn conversation with score chips.
// Cyber-Electric: yellow user bubbles, black NPC bubbles, BLUE score chips.

import { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Animated, {
  Easing,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { Button } from "../Button";
import { tokens } from "../../theme";
import { speak, stop as stopTts } from "../../lib/tts";
import {
  evaluateRoleplayTurn,
  type ExerciseResult,
  type RoleplayMistake,
} from "../../lib/engine";
import { nameForNpc } from "../../lib/npc-names";
import { maybePrependBridge } from "../../lib/npc-bridge";
import { recordUserText } from "../../lib/mistake-tracker";
import { detectMistakes, getPattern } from "../../lib/mistake-patterns";
import {
  resolveTurnSupport,
  type RoleplayMode,
} from "../../lib/roleplay-progression";
import {
  averageRoleplayScores,
  assessRoleplayScore,
} from "../../lib/roleplay-assessment";
import { trackEvent } from "../../lib/analytics";
import { modelAnswersForTurn } from "../../lib/roleplay-model";
import { buildRoleplayChoiceOptions } from "../../lib/roleplay-options";
import { roleplayReaction } from "../../lib/roleplay-branching";
import {
  roleplayMasteryContribution,
  roleplayTurnUsedSupport,
} from "../../lib/roleplay-session-scoring";
import {
  isAvailable as isSttAvailable,
  startListening as startStt,
  stopListening as stopStt,
} from "../../lib/speech-recognition";
import { useTranslation } from "../../lib/i18n";
import { useReduceMotionPreference } from "../../lib/use-reduce-motion-preference";

// AsyncStorage key for the per-app TTS mute preference. Survives across
// scenarios and app restarts so the user doesn't have to re-mute every chat.
const K_TTS_MUTED = "lafla.tts.muted";

// 2026-05-21 — voice-first roleplay. User defaults to VOICE input (the whole
// point of Lafla) and can opt into keyboard mode via the toggle in the input
// bar. Preference persists so the user only chooses once. New users start
// with voice; the choice survives across scenarios and app restarts.
const K_INPUT_MODE = "lafla.roleplay.inputMode";
type InputMode = "voice" | "text";
type SubmissionSource = InputMode | "choice";

interface RoleplayTurn {
  speaker: "npc" | "user";
  message?: string;
  acceptable_patterns?: string[];
  model_answers?: string[];
  hint_tr?: string;
}

export type { RoleplayMode } from "../../lib/roleplay-progression";

interface Props {
  scenarioDescription: string;
  npcRole: string;
  setting: string;
  turns: RoleplayTurn[];
  onComplete: (result: ExerciseResult) => void;
  mode?: RoleplayMode;
  /**
   * Stable seed used to derive a consistent NPC first name across renders.
   * Pass the scenario/lesson id so the same scene always shows the same NPC.
   * Falls back to `npcRole + setting` if omitted — still deterministic, but
   * two scenarios sharing role+setting would share a name.
   */
  seed?: string;
  /**
   * Display name for the user. When present, the NPC's opening line is
   * lightly personalized at render time (e.g. "Hi there" → "Hi {name}").
   * Lesson data is NOT modified — this is purely visual.
   */
  userName?: string;
  /**
   * 2026-05-21 — scene-level CEFR adaptation.
   * - `sceneLevel`: anchor level of the scenario (from data/scenes.ts)
   * - `userLevel`: current CEFR level (from lib/cefr-level.ts)
   *
   * Delta = userLevelIndex - sceneLevelIndex:
   *   < 0 → "stretch" mode — scene above user. Always show TR hint, accept
   *         simpler patterns. UI shows a "+1 zorla" badge above the input.
   *   = 0 → matched mode — current behavior. Hint shown on demand.
   *   > 0 → "review" mode — user above scene. Hide TR hint by default;
   *         user can tap to reveal. UI shows "Kolay tekrar" badge.
   *
   * Both optional so legacy callers (no level data) keep working.
   */
  sceneLevel?: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  userLevel?: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  /**
   * 2026-05-21 — Hard Mode (Premium feature).
   * true ise:
   *   - TR hint asla gösterilmez (review davranışı gibi)
   *   - Min user response length: 8 char (kısa cevap rejected)
   *   - "🔥 HARD MODE" badge gözükür
   * Free kullanıcı zaten hard mode toggle'a basamaz (paywall'a gider),
   * bu prop sadece premium'da true gelir.
   */
  hardMode?: boolean;
  /** Hide live scores/corrections and deliver one focused correction at the end. */
  lowPressure?: boolean;
  /** A short previous-episode acknowledgement shown as the NPC's first bubble. */
  memoryPrompt?: string;
  /** Reader-facing estimate shown before the first answer. */
  estimatedMinutes?: number;
}

interface ChatMessage {
  speaker: "npc" | "user";
  message: string;
  score?: number;
  // 2026-05-20 — switch-trigger #2: inline error UI.
  // Eğer kullanıcının mesajı bir bilinen Türk-İngilizce hata pattern'ini
  // tetiklediyse, bubble altına Türkçe açıklama baloncuğu rendere düşer.
  // Bubble bazlı — sahnede sıralı olarak göründüğü için kullanıcı hatasını
  // konuşma akışı içinde görür (verdict ekranına ertelemek yerine).
  mistake?: RoleplayMistake;
}

function extractExampleFromTurn(turn?: RoleplayTurn): string | null {
  return turn ? modelAnswersForTurn(turn)[0] ?? null : null;
}

function compactTurnGoal(turn?: RoleplayTurn): string | null {
  const source = turn?.hint_tr ?? extractExampleFromTurn(turn);
  if (!source) return null;
  const cleaned = source.replace(/\s+/g, " ").trim();
  if (cleaned.length <= 120) return cleaned;
  return `${cleaned.slice(0, 117).trimEnd()}…`;
}

// Sanitize a display name for inline injection into NPC dialog. Strips
// control chars and quotes that would break the rendered string, collapses
// whitespace, and hard-caps the length. Casing is preserved.
function sanitizeUserName(raw: string | null | undefined): string {
  if (!raw) return "";
  // 2026-05-25 (B-SCN-1) — Doğrusu kontrol karakterleri (\x00-\x1F + DEL).
  // Önceki versiyon `/[ -]/g` printable space-dash strip ediyordu — yanlış.
  // eslint-disable-next-line no-control-regex
  let cleaned = raw.replace(/[\x00-\x1F\x7F]/g, "");
  // Drop quote characters that could disrupt the rendered sentence; leaves
  // apostrophes (O'Brien) intact because they're meaningful in names.
  cleaned = cleaned.replace(/["`]/g, "");
  cleaned = cleaned.replace(/\s+/g, " ").trim();
  if (cleaned.length > 30) cleaned = cleaned.slice(0, 28) + "…";
  return cleaned;
}

// Personalize the opening NPC line by inserting the user's name after the
// first greeting word. Only mutates the rendered string when:
//   - userName is non-empty
//   - the line starts with a recognised greeting token
// Otherwise returns the original text unchanged.
//
// Examples (with name = "Berk"):
//   "Hi"                          → "Hi Berk"
//   "Hi there"                    → "Hi Berk"
//   "Hi there, ready to order?"   → "Hi Berk, ready to order?"
//   "Welcome!"                    → "Welcome Berk!"
//   "Hey, how can I help?"        → "Hey Berk, how can I help?"
//   "Good morning, sir."          → "Good morning Berk, sir."
//   "So, what'll it be?"          → "So, what'll it be?"   (no greeting → unchanged)
export function personalizeOpener(
  text: string,
  userName: string | null | undefined,
): string {
  const name = sanitizeUserName(userName);
  if (!name) return text;
  if (!text) return text;

  // Match the greeting token AND any immediately-following "there" filler
  // word. Group 1 = greeting, group 2 = optional " there", group 3 = the
  // rest (incl. punctuation immediately after).
  const pattern =
    /^(hi|hey|hello|welcome|good\s+morning|good\s+afternoon|good\s+evening)(\s+there)?(.*)$/i;
  const m = text.match(pattern);
  if (!m) return text;

  const greeting = m[1]!;
  const rest = m[3] ?? "";

  // 2026-05-25 (B-SCN-3) — Lesson author NPC opener'a kullanıcı adını
  // hardcode etmiş olabilir ("Hi, Berk."). Bu durumda kişiselleştirme
  // duplicate ekler: "Hi Berk, Berk." → çift. Rest içinde isim varsa
  // personalize etmeyi atla, original'i döndür.
  const lowerRest = rest.toLowerCase();
  const lowerName = name.toLowerCase();
  if (lowerName && lowerRest.includes(lowerName)) {
    return text;
  }

  // If the remainder starts with a comma/punctuation+space, keep it; we just
  // splice the name between greeting and remainder. Otherwise insert a
  // leading space.
  // Strategy: replace "greeting [there]" with "greeting name" and keep rest.
  return `${greeting} ${name}${rest}`;
}

/**
 * Pick a contextual emoji for the NPC avatar based on their role + setting.
 * Falls back to a generic chat bubble when nothing matches. Keeps the header
 * from looking like a placeholder (the previous 👤 made every scene feel
 * identical regardless of context).
 */
function avatarEmojiFor(role: string, setting: string): string {
  const ctx = `${role} ${setting}`.toLowerCase();
  if (/match|date|match|crush|flirt|romance|partner|girlfriend|boyfriend/.test(ctx)) return "💕";
  if (/coffee|cafe|barista|espresso|latte/.test(ctx)) return "☕";
  if (/doctor|dr\.|hospital|clinic|gp\b|nurse|er\b|a&e/.test(ctx)) return "🩺";
  if (/pharmacist|pharmacy|drugstore|eczane/.test(ctx)) return "💊";
  if (/dentist|dental/.test(ctx)) return "🦷";
  if (/boss|manager|interview|recruit|hiring|director/.test(ctx)) return "💼";
  if (/coworker|colleague|team|standup|meeting|slack/.test(ctx)) return "👥";
  if (/teacher|professor|advisor|tutor|examiner/.test(ctx)) return "📚";
  if (/waiter|server|restaurant|chef|kitchen|host/.test(ctx)) return "🍽️";
  if (/friend|buddy|roommate|pal/.test(ctx)) return "🤝";
  if (/family|mom|dad|parent|sister|brother|cousin/.test(ctx)) return "👨‍👩‍👧";
  if (/airport|gate|flight|airline|customs|check-in/.test(ctx)) return "✈️";
  if (/hotel|concierge|reception|bellhop/.test(ctx)) return "🏨";
  if (/gym|trainer|workout|fitness|coach.*fit/.test(ctx)) return "💪";
  if (/taxi|driver|uber|lyft|cab/.test(ctx)) return "🚕";
  if (/shop|store|cashier|sales|retail/.test(ctx)) return "🛍️";
  if (/bank|teller|atm|currency/.test(ctx)) return "🏦";
  if (/police|officer|cop/.test(ctx)) return "👮";
  if (/landlord|neighbor|apartment|rental/.test(ctx)) return "🏠";
  return "💬";
}

// CEFR level order — index used for delta comparison. Kept inline (vs a
// shared util) so the component is self-contained for tests.
const CEFR_ORDER = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;

export function RoleplayChat({
  scenarioDescription,
  npcRole,
  setting,
  turns,
  onComplete,
  mode = "free",
  seed,
  userName,
  sceneLevel,
  userLevel,
  hardMode = false,
  lowPressure = true,
  memoryPrompt,
  estimatedMinutes,
}: Props) {
  const { t, locale } = useTranslation();
  const reduceMotion = useReduceMotionPreference();
  // Delta: positive = user above scene (review mode), negative = below (stretch).
  // Both levels required for non-neutral adaptation; either missing → 0.
  const levelDelta = useMemo(() => {
    if (!sceneLevel || !userLevel) return 0;
    return CEFR_ORDER.indexOf(userLevel) - CEFR_ORDER.indexOf(sceneLevel);
  }, [sceneLevel, userLevel]);
  const beginnerSafety = !hardMode && (userLevel === "A1" || userLevel === "A2");
  const supportLevelDelta = beginnerSafety ? Math.min(levelDelta, 0) : levelDelta;
  // Mode classification — keeps render branches readable.
  // Hard mode override — Premium kullanıcı toggle'lamışsa adaptMode
  // "review" gibi davranır (no hint) + minimum response length.
  const adaptMode: "stretch" | "matched" | "review" = hardMode
    ? "review"
    : supportLevelDelta < 0
      ? "stretch"
      : supportLevelDelta > 0
        ? "review"
        : "matched";
  const pressureFree = lowPressure && !hardMode;
  // Resolve a stable seed. The caller usually passes the scenario id; if it
  // doesn't, fall back to (role + setting) so the name is still consistent
  // for that pairing (just not unique across scenarios sharing those values).
  const npcName = useMemo(
    () => nameForNpc(npcRole, setting, seed ?? `${npcRole}|${setting}`),
    [npcRole, setting, seed],
  );
  const [turnIdx, setTurnIdx] = useState(0);
  const [shown, setShown] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [turnScores, setTurnScores] = useState<number[]>([]);
  const [independentScores, setIndependentScores] = useState<number[]>([]);
  const [assistedTurns, setAssistedTurns] = useState(0);
  const [sceneMistakes, setSceneMistakes] = useState<RoleplayMistake[]>([]);
  const [userResponses, setUserResponses] = useState<string[]>([]);
  const focusMistakeRef = useRef<{
    mistake: RoleplayMistake;
    weight: number;
  } | null>(null);
  const roleplayStartedAtRef = useRef(Date.now());
  const firstResponseTrackedRef = useRef(false);
  const hintTrackedTurnsRef = useRef(new Set<number>());
  const finalizedRef = useRef(false);
  const [finished, setFinished] = useState(false);
  const [retryTurnIdx, setRetryTurnIdx] = useState<number | null>(null);
  const [freeInputForTurn, setFreeInputForTurn] = useState(false);
  const [selectedReadyAnswer, setSelectedReadyAnswer] = useState<string | null>(
    null,
  );
  // 2026-05-23 — Faz 3 LLM-siz smart conversation:
  //
  // hintAttention: user cevabı vermeden 5sn geçtiyse hint box glow yapar.
  // 0 = idle, 1 = glowing. Reanimated shared value, idle timer reset
  // her input change / record start'ta.
  //
  // forceShowHint: 2 ardışık 0 score turn'den sonra hint görünürlüğü
  // adaptMode'a bakmaksızın ZORLA açılır — kullanıcı sıkışıyor demektir,
  // pedagojik destek lazım.
  const [forceShowHint, setForceShowHint] = useState(false);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hintAttention = useSharedValue(0);
  // 2026-05-21 — voice-first roleplay state.
  //
  // inputMode = "voice" (default) → big mic button replaces the text input;
  // STT transcribes user speech and auto-submits. "text" → legacy keyboard
  // input with submit button. Preference persists via K_INPUT_MODE.
  //
  // recording = true while expo-speech-recognition is active. We track it
  // explicitly so the UI can show the "listening" affordance and avoid
  // double-starting.
  //
  // interimText = the partial transcript streamed back from STT during a
  // listening window. Shown as a small ghost-text under the mic so the user
  // sees their words being heard in real time.
  //
  // sttAvailable = result of the lib's runtime probe (Expo Go / simulator
  // returns false). If false we silently fall back to text mode regardless
  // of stored preference, since voice would be a dead button.
  const [inputMode, setInputMode] = useState<InputMode>("voice");
  const [recording, setRecording] = useState(false);
  const [interimText, setInterimText] = useState("");
  const [voiceError, setVoiceError] = useState<string | null>(null);
  // 2026-05-26 (P0-4 fix) — interimText ref pattern. closeTimer 8500ms sonra
  // tetiklenirken `interimText` stale closure değeri okuyordu (boş string),
  // submit hiç çalışmıyordu. Ref state ile sync; closeTimer ref'i okur.
  const interimTextRef = useRef("");

  // ─── Faz 3: Smart hint timing (5sn idle → glow) ──────────────────
  // User cevap girmeden 5 saniye geçtiyse hint box subtle pulse yapar.
  // Trigger: input edit, voice record start. Timer expire → glow ON.
  // Submit / next turn → reset + glow OFF.
  useEffect(() => {
    // User aktivite gösterdi (input edit veya recording başladı) → reset.
    if (input.trim().length > 0 || recording) {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      cancelAnimation(hintAttention);
      hintAttention.value = withTiming(0, { duration: 200 });
      return;
    }
    // Idle → 5sn sonra glow başlat.
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => {
      if (reduceMotion) {
        cancelAnimation(hintAttention);
        hintAttention.value = 1;
        return;
      }
      hintAttention.value = withRepeat(
        withTiming(1, {
          duration: 1100,
          easing: Easing.inOut(Easing.sin),
        }),
        -1,
        true,
      );
    }, 5000);
    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [input, recording, turnIdx, hintAttention, reduceMotion]);

  // ─── Faz 3: Adaptive force-show hint ──────────────────────────────
  // 2 ardışık 0/30 score (low) turn'den sonra hint'i ZORLA göster — kullanıcı
  // sıkışıyor demektir. adaptMode review veya hardMode olsa bile devreye girer.
  useEffect(() => {
    if (turnScores.length < 2) {
      setForceShowHint(false);
      return;
    }
    const lastTwo = turnScores.slice(-2);
    const bothLow = lastTwo.every((s) => s < 50);
    setForceShowHint(bothLow);
  }, [turnScores]);

  const hintGlowStyle = useAnimatedStyle(() => ({
    shadowOpacity: 0.2 + hintAttention.value * 0.55,
    shadowRadius: 8 + hintAttention.value * 14,
  }));
  const [sttAvailable, setSttAvailable] = useState(false);
  const [sttChecked, setSttChecked] = useState(false);
  const sttAbortRef = useRef<AbortController | null>(null);
  const submissionLockedRef = useRef(false);
  // TTS mute toggle. Persisted to AsyncStorage so it carries across scenarios
  // and app restarts. We default to false (audio on) because hearing native
  // pronunciation is core to the product — users have to opt OUT, not in.
  const [muted, setMuted] = useState(false);
  const mutedRef = useRef(false);
  // Pending reaction prefix queued by the last user turn. Consumed by the
  // auto-show effect and prepended onto the next NPC message rendered into
  // `shown`. We carry it as state (not a ref) so React re-runs the effect
  // and we don't get a stale-closure read.
  const [pendingReaction, setPendingReaction] = useState<string | null>(null);
  const scrollRef = useRef<ScrollView>(null);

  // Hydrate the mute preference from storage once on mount. Best-effort —
  // a storage read failure just leaves the default (unmuted). We don't gate
  // rendering on this; the first speak() call before hydration completes
  // will fire normally, which is the desired behavior anyway.
  useEffect(() => {
    let cancelled = false;
    AsyncStorage.getItem(K_TTS_MUTED)
      .then((raw) => {
        if (!cancelled && raw === "true") setMuted(true);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    mutedRef.current = muted;
    if (muted) stopTts();
  }, [muted]);

  // Hydrate voice input preference + STT availability probe. The order
  // matters: probe availability first, then read stored mode. If STT is
  // unavailable (simulator, Expo Go, denied perm) we force text mode
  // regardless of stored preference so the user isn't stuck staring at a
  // dead mic button.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const avail = await isSttAvailable().catch(() => false);
      if (cancelled) return;
      setSttAvailable(avail);
      setSttChecked(true);
      if (!avail) {
        setInputMode("text");
        // 2026-05-26 (P1-10 fix) — STT yokken stale "voice" preference'i
        // sonraki açılışlarda toggle butonunu tıklatamaz halde gösteriyordu.
        // Probe fail → preference text'e güncelle.
        void AsyncStorage.setItem(K_INPUT_MODE, "text").catch(() => {});
        return;
      }
      try {
        const raw = await AsyncStorage.getItem(K_INPUT_MODE);
        if (cancelled) return;
        if (raw === "text") setInputMode("text");
        // any other value (incl null/voice) → keep default "voice"
      } catch {
        // best effort — default stays as set
      }
    })();
    return () => {
      cancelled = true;
      // Tear down any in-flight STT session when the component unmounts.
      sttAbortRef.current?.abort();
      sttAbortRef.current = null;
    };
  }, []);

  // Toggle between voice and text input. Persisted so each user only picks
  // once. When switching AWAY from voice while recording, stop the listener.
  const toggleInputMode = () => {
    setInputMode((prev) => {
      const next: InputMode = prev === "voice" ? "text" : "voice";
      AsyncStorage.setItem(K_INPUT_MODE, next).catch(() => {});
      if (prev === "voice" && recording) {
        sttAbortRef.current?.abort();
        sttAbortRef.current = null;
        void stopStt().catch(() => {});
        setRecording(false);
        setInterimText("");
      }
      return next;
    });
  };

  const toggleMute = () => {
    setMuted((prev) => {
      const next = !prev;
      AsyncStorage.setItem(K_TTS_MUTED, next ? "true" : "false").catch(() => {});
      // When muting mid-playback, kill the current sound too — otherwise the
      // already-scheduled audio keeps going and the toggle feels broken.
      if (next) stopTts();
      return next;
    });
  };

  // Auto-show NPC turns until next user turn + auto-speak last one.
  //
  // Personalization: the FIRST NPC message in the conversation may be
  // rewritten to inject the user's name after a greeting word (e.g.
  // "Hi there" → "Hi Berk"). This only fires when:
  //   - we're flushing from turnIdx === 0 (i.e. opening of the convo)
  //   - the very first NPC line has not already been shown
  //   - userName is non-empty
  // The TTS read-aloud uses the personalized text too so the audio matches
  // what the user reads on-screen.
  useEffect(() => {
    let i = turnIdx;
    const isOpening = turnIdx === 0 && shown.length === 0;
    const newShown: ChatMessage[] = [];
    if (isOpening && memoryPrompt) {
      newShown.push({ speaker: "npc", message: memoryPrompt });
    }
    let authoredNpcCount = 0;
    while (i < turns.length && turns[i]!.speaker === "npc") {
      const raw = turns[i]!.message;
      if (raw) {
        // Only the first NPC line of the conversation gets personalized.
        // Everything that follows in the same opening block (rare, but
        // some scenes have consecutive NPC lines) is left untouched so we
        // don't try to inject the name multiple times into one greeting.
        const isFirstNpcLine = isOpening && authoredNpcCount === 0;
        let message = isFirstNpcLine
          ? personalizeOpener(raw, userName)
          : raw;
        // 2026-05-23 Faz 3: NPC bridge phrase injection (mini-Markov).
        // 30% deterministic chance of "Right,", "Hmm,", "Yeah," etc. prefix.
        // Score-aware: bucket selection prevScore'a göre — good/partial/low/opening.
        // Aynı sahne her zaman aynı bridge alır (seed = scenario id + turnIdx).
        const prevScore =
          turnScores.length > 0
            ? turnScores[turnScores.length - 1]!
            : null;
        message = maybePrependBridge(
          message,
          seed ?? `${npcRole}|${setting}`,
          i,
          isFirstNpcLine ? null : prevScore,
        );
        // Prepend the score-based reaction ACK to the FIRST NPC line of this
        // block so the scene visibly reacts to what the user just said. We
        // only do this on the first line in case the script has consecutive
        // NPC turns — the reaction belongs to the immediate response, not
        // every follow-up. Personalized opener path never hits this branch
        // because reactions are queued from user submits, and the opening
        // block (turnIdx === 0, shown empty) precedes any user turn.
        if (authoredNpcCount === 0 && pendingReaction && !isFirstNpcLine) {
          message = `${pendingReaction} ${message}`;
        }
        newShown.push({ speaker: "npc", message });
        authoredNpcCount += 1;
      }
      i++;
    }
    if (newShown.length > 0) {
      setShown((prev) => [...prev, ...newShown]);
      setTurnIdx(i);
      // Most scripts end with an NPC closing line. Previously the cursor
      // moved past the array but `finished` stayed false, leaving a disabled
      // input and forcing users to hunt for an escape link.
      if (i >= turns.length) setFinished(true);
      // The reaction (if any) has now been baked into the rendered text.
      // Clear it so the next NPC block doesn't re-use a stale prefix.
      if (pendingReaction) setPendingReaction(null);
      // Auto-speak the most recent NPC line after a short beat — UNLESS the
      // user has muted TTS, in which case we drop the side effect entirely.
      // The bubble still renders; only the audio is suppressed.
      if (!mutedRef.current) {
        const last = newShown[newShown.length - 1]!.message;
        // 2026-05-23 — Audio audit fix: npcRole + setting'i speak()'e geçir.
        // Önceki versiyon sadece text geçiyordu — tts.ts'in pickVoiceId
        // fallback'i her NPC için vc_default kullanıyordu. Şimdi bundled
        // voice (vc_match / vc_friend / etc) doğru NPC için seçilir.
        const t = setTimeout(() => {
          if (!mutedRef.current) speak(last, { npcRole, setting });
        }, 600);
        return () => clearTimeout(t);
      }
    }
    // We intentionally exclude `shown` from deps — the effect already
    // self-gates by checking `turns[i].speaker === "npc"` and we advance
    // `turnIdx` past NPC turns, so re-running on `shown` changes would
    // just no-op anyway. Adding it would re-trigger on every user reply.
    // mutedRef keeps the delayed TTS callback current without making mute
    // toggles re-run this NPC flushing effect.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turnIdx, turns, userName, pendingReaction, memoryPrompt]);

  // Auto-scroll
  useEffect(() => {
    const t = setTimeout(
      () => scrollRef.current?.scrollToEnd({ animated: true }),
      80,
    );
    return () => clearTimeout(t);
  }, [shown]);

  const currentTurn = turns[turnIdx];
  const awaitingUserInput =
    !finished && currentTurn?.speaker === "user";
  const totalUserTurns = useMemo(
    () => turns.filter((turn) => turn.speaker === "user").length,
    [turns],
  );
  const sessionMinutes =
    Math.min(
      4,
      Math.max(2, estimatedMinutes ?? Math.ceil(totalUserTurns * 1.2)),
    );
  const currentUserTurnIndex = useMemo(
    () =>
      turns
        .slice(0, turnIdx)
        .filter((turn) => turn.speaker === "user").length,
    [turnIdx, turns],
  );
  const turnSupportMode = resolveTurnSupport({
    baseMode: beginnerSafety ? "multi-choice" : mode,
    userTurnIndex: currentUserTurnIndex,
    levelDelta: supportLevelDelta,
    hardMode,
  });
  const openingSupportMode = resolveTurnSupport({
    baseMode: beginnerSafety ? "multi-choice" : mode,
    userTurnIndex: 0,
    levelDelta: supportLevelDelta,
    hardMode,
  });
  const supportSummary =
    hardMode
      ? t("roleplay.support.free_no_hint")
      : openingSupportMode === "multi-choice"
        ? t("roleplay.support.rehearse_first")
        : openingSupportMode === "hinted"
          ? t("roleplay.support.hint_open")
          : t("roleplay.support.free_answer");
  const shouldShowHint = Boolean(
    !hardMode &&
      currentTurn?.hint_tr &&
      (retryTurnIdx === turnIdx ||
        forceShowHint ||
        adaptMode === "stretch" ||
        (adaptMode === "matched" && turnSupportMode !== "free")),
  );

  useEffect(() => {
    if (!shouldShowHint || hintTrackedTurnsRef.current.has(turnIdx)) return;
    hintTrackedTurnsRef.current.add(turnIdx);
    void trackEvent("roleplay_hint_shown", {
      scenario_id: seed ?? "unknown",
      turn_index: turnIdx,
      support_mode: turnSupportMode,
      reason:
        retryTurnIdx === turnIdx
          ? "retry"
          : forceShowHint
            ? "rescue"
            : adaptMode === "stretch"
              ? "stretch"
              : "guided",
    }).catch(() => {});
  }, [
    adaptMode,
    forceShowHint,
    retryTurnIdx,
    seed,
    shouldShowHint,
    turnIdx,
    turnSupportMode,
  ]);
  const choiceOptions = useMemo(
    () =>
      currentTurn
        ? buildRoleplayChoiceOptions(currentTurn, turns)
        : [],
    [currentTurn, turns],
  );
  const currentTurnGoal = useMemo(
    () => compactTurnGoal(currentTurn),
    [currentTurn],
  );
  const turnProgressLabel = awaitingUserInput
    ? `${Math.min(currentUserTurnIndex + 1, totalUserTurns)}/${totalUserTurns}`
    : `${Math.min(currentUserTurnIndex, totalUserTurns)}/${totalUserTurns}`;

  useEffect(() => {
    setFreeInputForTurn(false);
    setSelectedReadyAnswer(null);
    setVoiceError(null);
  }, [turnIdx]);

  useEffect(() => {
    // React Native press events and some speech recognizers can deliver the
    // same action twice before the next render. Unlock only after the turn or
    // retry state has visibly advanced.
    submissionLockedRef.current = false;
  }, [turnIdx, retryTurnIdx]);

  const finalScore = useMemo(() => {
    return averageRoleplayScores(turnScores);
  }, [turnScores]);
  const masteryScore = useMemo(
    () => averageRoleplayScores(independentScores),
    [independentScores],
  );
  const finalAssessmentLabel = t(
    `scenario.assessment.${assessRoleplayScore(finalScore)}`,
  );
  const firstTargetAnswer = useMemo(
    () =>
      turns
        .filter((turn) => turn.speaker === "user")
        .flatMap(modelAnswersForTurn)[0] ?? null,
    [turns],
  );
  const targetResponses = useMemo(
    () =>
      turns
        .filter((turn) => turn.speaker === "user")
        .map((turn) => modelAnswersForTurn(turn)[0])
        .filter((answer): answer is string => Boolean(answer)),
    [turns],
  );

  // Voice capture handlers. Owns the lifecycle of one listening window.
  // - startVoiceCapture: requests mic, starts STT, streams interim transcripts
  //   into interimText, on final result writes to `input` and auto-submits.
  // - stopVoiceCapture: user cancellation (e.g. tapped mic again to stop).
  //   The transcript-so-far is still committed if non-empty (more forgiving
  //   than throwing the user's words away if they stop early).
  const startVoiceCapture = () => {
    if (!awaitingUserInput || recording) return;
    setVoiceError(null);
    setInterimText("");
    interimTextRef.current = "";
    setRecording(true);
    const controller = new AbortController();
    sttAbortRef.current = controller;

    let finalText = "";
    void startStt({
      lang: "en-US",
      // 2026-05-26 — Türk kullanıcı düşünmek için duraksayabilir; 8s → 12s.
      timeoutMs: 12000,
      signal: controller.signal,
      onResult: (text, isFinal) => {
        if (sttAbortRef.current !== controller) return;
        // Interim and final updates use the same path. We display interim
        // text live; on isFinal we commit and auto-submit so the user
        // doesn't have to tap an extra button.
        setInterimText(text);
        interimTextRef.current = text;
        if (isFinal && text.trim()) {
          finalText = text.trim();
          // Final transcript is authoritative; submit immediately instead of
          // making the learner wait for the 12.5s safety timeout.
          setRecording(false);
          setInput(finalText);
          setInterimText("");
          interimTextRef.current = "";
          sttAbortRef.current = null;
          void stopStt().catch(() => {});
          submitUserTurnWith(finalText);
        }
      },
      onError: () => {
        if (sttAbortRef.current !== controller) return;
        // Permission denied / not-available / mic error — fall back to text
        // mode for THIS turn (preference stays voice unless user explicitly
        // toggles). We avoid surfacing the raw error string; the empty
        // interim + recording=false visually conveys "didn't catch that."
        setRecording(false);
        setInterimText("");
        setVoiceError(t("roleplay.voice.not_heard"));
        sttAbortRef.current = null;
        void trackEvent("roleplay_voice_failed", {
          scenario_id: seed ?? "unknown",
          reason: "recognition_error",
          turn_index: turnIdx,
        }).catch(() => {});
      },
    }).catch(() => {
      if (sttAbortRef.current !== controller) return;
      setRecording(false);
      setInterimText("");
      setVoiceError(t("roleplay.voice.start_failed"));
      sttAbortRef.current = null;
      void trackEvent("roleplay_voice_failed", {
        scenario_id: seed ?? "unknown",
        reason: "start_failed",
        turn_index: turnIdx,
      }).catch(() => {});
    });

    // When the listening window closes (timeout or `end` event from the lib),
    // sttAbortRef stays set but recording flips false. Poll for finality via
    // a one-shot timeout that matches the lib's timeoutMs + a small buffer.
    // 2026-05-25 (B-SCN-15) — `if (!recording) return` stale closure idi
    // (kapatma sırasında `recording` initial false okunuyordu). Doğru
    // kontrol: sttAbortRef hala bizim controller mı?
    // 2026-05-26 — 12000ms STT timeout + 500ms grace = 12500ms close timer.
    const closeTimer = setTimeout(() => {
      if (sttAbortRef.current !== controller) return;
      void stopStt().catch(() => {});
      setRecording(false);
      // 2026-05-26 (P0-4 fix) — ref kullan, stale closure'dan kurtul.
      const text = finalText || interimTextRef.current;
      if (text.trim()) {
        // 2026-05-26 (P0 audit fix) — setInput + setTimeout(submit,50)
        // pattern'i `input` state'inin commit'ini bekliyordu, ama
        // submitUserTurn closure'dan eski `input=""` okuyordu → voice
        // submit'ler sessizce drop oluyordu. Çözüm: text'i parametre
        // olarak ver, state commit zamanına bağımlı olma.
        const trimmed = text.trim();
        setInput(trimmed);
        submitUserTurnWith(trimmed);
      } else {
        setVoiceError(t("roleplay.voice.nothing_heard"));
        void trackEvent("roleplay_voice_failed", {
          scenario_id: seed ?? "unknown",
          reason: "empty_timeout",
          turn_index: turnIdx,
        }).catch(() => {});
      }
      setInterimText("");
      interimTextRef.current = "";
      sttAbortRef.current = null;
    }, 12500);

    // Clean up the close timer if the user aborts manually.
    controller.signal.addEventListener("abort", () => clearTimeout(closeTimer), {
      once: true,
    });
  };

  const stopVoiceCapture = () => {
    if (!recording) return;
    // 2026-05-26 (P0-4 fix) — ref'ten oku.
    const captured = interimTextRef.current || interimText;
    sttAbortRef.current?.abort();
    sttAbortRef.current = null;
    void stopStt().catch(() => {});
    setRecording(false);
    setInterimText("");
    interimTextRef.current = "";
    if (captured.trim()) {
      const trimmed = captured.trim();
      setInput(trimmed);
      // 2026-05-26 (P0 audit fix) — text-as-arg pattern (closure'dan kurtul).
      submitUserTurnWith(trimmed);
    } else {
      setVoiceError(t("roleplay.voice.nothing_heard"));
    }
  };

  // 2026-05-26 (P0 audit fix) — submitUserTurn'ın text-as-arg wrapper'ı.
  // Voice path'lerde `input` state commit'ini beklemeden direkt submit
  // edebilmek için text parametresi alır; manuel klavye submit'ler
  // submitUserTurn() yine input state'inden okur.
  const submitUserTurnWith = (
    text: string,
    source: SubmissionSource = inputMode,
  ) => {
    if (!awaitingUserInput || !text.trim() || !currentTurn) return;
    submitUserTurnInternal(text, source);
  };

  const submitUserTurn = () => {
    if (!awaitingUserInput || !input.trim() || !currentTurn) return;
    submitUserTurnInternal(input, inputMode);
  };

  const submitUserTurnInternal = (
    input: string,
    submissionSource: SubmissionSource,
  ) => {
    // NOT: parameter adı bilinçli olarak `input` — outer state'i shadow eder
    // ki eski body'deki tüm `input` referansları parameter'a bağlansın.
    // Voice path text-as-arg geçer; klavye path submitUserTurn `input`
    // state'inden okur ve bu fonksiyona iletir. Sonuç: closure-stale yok.
    if (!awaitingUserInput || !input.trim() || !currentTurn) return;

    // 2026-05-21 — Hard mode: min response length 8 char. Kısa cevap
    // reject edilir, kullanıcıya "Hard mode'da daha uzun cevap" denir.
    if (hardMode && input.trim().length < 8) {
      // Visual silent reject — input temizlenmez, kullanıcı uzatabilir.
      // (Toast/alert ekleyebiliriz ileride; şu an minimal davranış.)
      return;
    }

    if (submissionLockedRef.current) return;
    submissionLockedRef.current = true;

    if (!firstResponseTrackedRef.current) {
      firstResponseTrackedRef.current = true;
      void trackEvent("roleplay_first_response", {
        scenario_id: seed ?? "unknown",
        elapsed_ms: Date.now() - roleplayStartedAtRef.current,
        input_source: submissionSource,
        support_mode: turnSupportMode,
        low_pressure: pressureFree,
        scene_level: sceneLevel ?? "unknown",
        user_level: userLevel ?? "unknown",
      }).catch(() => {});
    }

    const rawEval = evaluateRoleplayTurn(
      currentTurn.acceptable_patterns ?? [],
      input,
      modelAnswersForTurn(currentTurn),
    );
    // Difficulty changes available support, not semantic correctness.
    const evalResult = rawEval;

    // 2026-05-20 — switch-trigger #2: inline error detection.
    // Kullanıcının mesajını mistake-patterns ile tara. İlk hit'i (en yüksek
    // önemli) bubble altına attach et; konuşma akışı içinde Türkçe açıklama
    // gösterilir. Yan etkisi yok — `recordUserText` zaten tracker'a yazıyor.
    const hits = detectMistakes(input);
    let mistakeInline: ChatMessage["mistake"];
    if (hits.length > 0) {
      // En ağır pattern'i öncelik ver (weight desc). detectMistakes pattern
      // sırasına göre döner — kalite için weight-bazlı yeniden sırala.
      const ranked = hits
        .map((h) => ({ h, pat: getPattern(h.patternId) }))
        .filter((x) => x.pat)
        .sort((a, b) => (b.pat!.weight ?? 0) - (a.pat!.weight ?? 0));
      const top = ranked[0];
      if (top) {
        mistakeInline = {
          matched: top.h.matchedSubstring,
          reason_tr: top.pat!.reason_tr,
          correct_example: top.pat!.example_right,
        };
        const weight = top.pat!.weight ?? 0;
        if (!focusMistakeRef.current || weight > focusMistakeRef.current.weight) {
          focusMistakeRef.current = { mistake: mistakeInline, weight };
          setSceneMistakes([mistakeInline]);
        }
      }
    }

    setShown((prev) => [
      ...prev,
      {
        speaker: "user",
        message: input,
        score: pressureFree ? undefined : evalResult.score,
        mistake: pressureFree ? undefined : mistakeInline,
      },
    ]);

    // Completion score and mastery score are intentionally different.
    // A ready-made choice/hint is good support for finishing the scene, but it
    // must not be treated as fully independent speaking ability for CEFR /
    // free-mode unlocks. Cap supported turns below the success threshold.
    const firstAttempt = retryTurnIdx !== turnIdx;
    const supportedTurn = roleplayTurnUsedSupport({
      submissionSource,
      hintVisible: shouldShowHint,
      retried: !firstAttempt,
    });
    const masteryContribution = roleplayMasteryContribution(
      evalResult.score,
      supportedTurn,
    );
    if (firstAttempt) {
      setIndependentScores((prev) => [...prev, masteryContribution]);
    }
    // A correction only becomes learning when the user retrieves the phrase
    // again. Keep the first low response on the same turn and allow one
    // immediate repair attempt before the scripted conversation advances.
    const shouldRetry = !pressureFree && evalResult.score < 80 && firstAttempt;
    if (shouldRetry) {
      setRetryTurnIdx(turnIdx);
      setInput("");
      recordUserText(input).catch(() => {});
      void trackEvent("roleplay_turn_retry_prompted", {
        scenario_id: seed ?? "unknown",
        turn_index: turnIdx,
        assessment: assessRoleplayScore(evalResult.score),
        input_mode: submissionSource,
        support_mode: turnSupportMode,
        low_pressure: pressureFree,
      }).catch(() => {});
      return;
    }

    if (!firstAttempt || supportedTurn) setAssistedTurns((count) => count + 1);
    setUserResponses((previous) => [...previous, input]);
    setRetryTurnIdx(null);
    setTurnScores((prev) => [...prev, evalResult.score]);
    void trackEvent("roleplay_turn_completed", {
      scenario_id: seed ?? "unknown",
      turn_index: turnIdx,
      assessment: assessRoleplayScore(evalResult.score),
      retried: retryTurnIdx === turnIdx,
      input_mode: submissionSource,
      support_mode: turnSupportMode,
      support_used: supportedTurn,
      low_pressure: pressureFree,
    }).catch(() => {});

    // Queue the score-based reaction ACK for the NEXT NPC line. Skipped on
    // the final user turn — there's no next NPC bubble to attach to and the
    // post-roleplay verdict will deliver the feedback instead.
    const nextIdx = turnIdx + 1;
    const isLastTurn = nextIdx >= turns.length;
    if (!isLastTurn) {
      const reaction = roleplayReaction(evalResult.score, input);
      if (reaction) setPendingReaction(reaction);
    }

    // Fire-and-forget mistake capture. Only sub-80 turns are interesting —
    // an exact-match (100) hit means the user already nailed the target
    // pattern. Errors are swallowed so a tracker failure (storage quota,
    // corrupt blob, etc.) never blocks the chat path. Snapshot the input
    // before clearing state so the call isn't racing with `setInput("")`
    // below.
    if (evalResult.score < 80) {
      const captured = input;
      recordUserText(captured).catch(() => {});
    }

    setInput("");

    if (isLastTurn) {
      setFinished(true);
    } else {
      setTurnIdx(nextIdx);
    }
  };

  const finalize = () => {
    if (finalizedRef.current) return;
    finalizedRef.current = true;
    const correctCount = turnScores.filter((s) => s >= 80).length;
    const focusMistake = sceneMistakes[0];
    const feedback = focusMistake
      ? locale === "tr"
        ? t("roleplay.feedback.focus", { reason: focusMistake.reason_tr })
        : t("learning.mistake_fallback_en")
      : finalScore >= 80
        ? t("roleplay.feedback.win")
        : firstTargetAnswer
          ? t("roleplay.feedback.sentence", { sentence: firstTargetAnswer })
          : t("roleplay.feedback.score", {
              correct: String(correctCount),
              total: String(turnScores.length),
            });
    onComplete({
      exercise_id: "roleplay_chat",
      exercise_type: "roleplay_chat",
      correct: finalScore >= 80,
      score: finalScore,
      mastery_score: masteryScore,
      assisted_turns: assistedTurns,
      mistakes: sceneMistakes,
      user_responses: userResponses,
      target_responses: targetResponses.slice(0, userResponses.length),
      feedback,
    });
  };

  return (
    <View style={styles.container}>
      {/* NPC header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarEmoji}>
            {avatarEmojiFor(npcRole, setting)}
          </Text>
        </View>
        <View style={styles.headerText}>
          <Text style={styles.npcName} numberOfLines={1}>
            {npcName}
          </Text>
          <Text style={styles.npcSubtitle} numberOfLines={1}>
            {npcRole} · {setting}
          </Text>
        </View>
        <View style={styles.onlineDot} />
        {/* TTS mute toggle. Gray-out when muted, cyan when active. We expose
            it as a Pressable so screen readers can toggle audio output even
            when there's no system-level media control. */}
        <Pressable
          onPress={toggleMute}
          style={[styles.muteBtn, muted && styles.muteBtnOff]}
          accessibilityRole="button"
          accessibilityLabel={
            muted ? t("roleplay.audio_on") : t("roleplay.audio_off")
          }
          accessibilityState={{ selected: !muted }}
          hitSlop={8}
        >
          <Text style={[styles.muteIcon, muted && styles.muteIconOff]}>
            {muted ? "🔇" : "🔊"}
          </Text>
        </Pressable>
      </View>

      {/* Chat scroll */}
      <ScrollView
        ref={scrollRef}
        style={styles.chatScroll}
        contentContainerStyle={styles.chatContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contextBubble}>
          <Text style={styles.contextText}>{scenarioDescription}</Text>
        </View>

        <View style={styles.sessionContractCard}>
          <View style={styles.contractHeader}>
            <Text style={styles.contractEyebrow}>{t("roleplay.task")}</Text>
            <Text style={styles.contractMeta}>
              {t("roleplay.task_meta", {
                minutes: String(sessionMinutes),
                answers: String(totalUserTurns),
              })}
            </Text>
          </View>
          <Text style={styles.contractGoal}>
            {scenarioDescription}
          </Text>
          <Text style={styles.contractSupport}>
            {supportSummary} · {t("roleplay.correction_summary")}
          </Text>
        </View>

        {shown.map((msg, i) => (
          <ChatBubble key={i} message={msg} npcRole={npcRole} setting={setting} />
        ))}

        {finished && (
          <View style={styles.finalScore}>
            <Text style={styles.finalScoreText}>
              {finalAssessmentLabel}
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Input or finalize */}
      {!finished ? (
        <View style={styles.inputBar}>
          {/* Level adaptation badge — shows when the user's CEFR level
              differs from the scene's anchor. Single-line, color-coded:
                stretch → amber "+1 zorla seni" (loss-aversion: this is
                          above your level, hint always on, take a swing)
                review  → cyan "kolay tekrar" (this is below your level,
                          hint hidden by default, build fluency reps)
              Matched (delta 0) renders nothing — the default UI is
              already calibrated to user level. */}
          {awaitingUserInput && currentTurnGoal && (
            <View style={styles.turnGoalStrip}>
              <Text style={styles.turnGoalStep}>
                {t("roleplay.turn", { progress: turnProgressLabel })}
              </Text>
              <Text style={styles.turnGoalText}>{currentTurnGoal}</Text>
            </View>
          )}
          {hardMode && (
            <View style={styles.hardModeBadge}>
              <Text style={styles.hardModeBadgeText}>
                {t("roleplay.hard_badge")}
              </Text>
            </View>
          )}
          {pressureFree && (
            <View style={styles.lowPressureBadge}>
              <Text style={styles.lowPressureBadgeText}>
                {t("roleplay.relaxed_badge")}
              </Text>
            </View>
          )}
          {!hardMode && adaptMode === "stretch" && (
            <View style={styles.stretchBadge}>
              <Text style={styles.stretchBadgeText}>
                {t("roleplay.stretch_badge", {
                  scene: sceneLevel ?? "",
                  user: userLevel ?? "",
                })}
              </Text>
            </View>
          )}
          {!hardMode && adaptMode === "review" && (
            <View style={styles.reviewBadge}>
              <Text style={styles.reviewBadgeText}>
                {t("roleplay.review_badge", {
                  scene: sceneLevel ?? "",
                  user: userLevel ?? "",
                })}
              </Text>
            </View>
          )}

          {retryTurnIdx === turnIdx && (
            <View style={styles.retryBox}>
              <Text style={styles.retryTitle}>{t("roleplay.retry_title")}</Text>
              {extractExampleFromTurn(currentTurn) ? (
                <Text style={styles.retryExample}>
                  {t("roleplay.example", {
                    example: extractExampleFromTurn(currentTurn) ?? "",
                  })}
                </Text>
              ) : null}
            </View>
          )}

          {/* TR hint — visibility + DETAIL adapts to CEFR delta.
              2026-05-23 — Audit feedback: roleplay daha gerçekçi seviye göre.
              Eski binary "var/yok" logic değişti:
              - stretch (user altı): FULL hint, büyük + colored bg (yardım net)
              - matched: subtle hint (sadece non-free mode)
              - review (user üstü): ASLA hint (kullanıcı kendisi düşünmeli)
              - hardMode: ASLA hint (premium challenge)

              Stretch'te hint görsel olarak daha PROMINENT — "yardım için
              buradayım" hissi; review'da hiç yok — "sen biliyorsun" güveni. */}
          {/* Faz 3 — hint visibility:
              - hardMode true → ASLA gösterme (premium challenge)
              - forceShowHint (2 ardışık low score) → ZORLA göster (override review)
              - stretch → her zaman göster (PROMINENT styling)
              - matched + non-free → göster
              - review → gösterme
              hintGlowStyle (Reanimated): 5sn idle → shadow opacity/radius pulse */}
          {shouldShowHint && (
            <Animated.View
              style={[
                styles.hintBox,
                (adaptMode === "stretch" || forceShowHint) &&
                  styles.hintBoxStretch,
                hintGlowStyle,
              ]}
            >
              {forceShowHint && (
                <Text style={styles.hintForcedLabel}>
                  {t("roleplay.hint_rescue")}
                </Text>
              )}
              <Text
                style={[
                  styles.hintText,
                  (adaptMode === "stretch" || forceShowHint) &&
                    styles.hintTextStretch,
                ]}
              >
                {locale === "tr"
                  ? currentTurn?.hint_tr
                  : t("learning.hint_fallback_en")}
              </Text>
            </Animated.View>
          )}

          {/* First encounter is recognition before production. The learner
              can still bypass choices and answer with voice/text. */}
          {turnSupportMode === "multi-choice" &&
          currentTurn &&
          choiceOptions.length > 0 &&
          !freeInputForTurn ? (
            <View style={styles.choiceCol}>
              <View style={styles.choiceCoachBox}>
                <Text style={styles.choiceCoachTitle}>
                  {t("roleplay.rehearse_turn", { progress: turnProgressLabel })}
                </Text>
                <Text style={styles.choiceCoachText}>
                  {t("roleplay.rehearse_body")}
                </Text>
              </View>
              {selectedReadyAnswer ? (
                <View style={styles.readyAnswerCard}>
                  <Text style={styles.readyAnswerEyebrow}>{t("roleplay.ready_sentence")}</Text>
                  <Text style={styles.readyAnswerText}>
                    {selectedReadyAnswer}
                  </Text>
                  <View style={styles.readyAnswerActions}>
                    <Pressable
                      onPress={() => speak(selectedReadyAnswer)}
                      style={styles.readyAnswerSecondaryBtn}
                      accessibilityRole="button"
                      accessibilityLabel={t("roleplay.listen_ready")}
                    >
                      <Text style={styles.readyAnswerSecondaryText}>
                        {t("roleplay.listen")}
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() =>
                        submitUserTurnWith(selectedReadyAnswer, "choice")
                      }
                      style={styles.readyAnswerPrimaryBtn}
                      accessibilityRole="button"
                      accessibilityLabel={t("roleplay.send_ready")}
                    >
                      <Text style={styles.readyAnswerPrimaryText}>
                        {t("roleplay.send")}
                      </Text>
                    </Pressable>
                  </View>
                </View>
              ) : (
                choiceOptions.map((opt, i) => (
                  <Pressable
                    key={`${turnIdx}-${i}`}
                    style={styles.choiceBtn}
                    onPress={() => {
                      setSelectedReadyAnswer(opt);
                      void trackEvent("roleplay_ready_answer_previewed", {
                        scenario_id: seed ?? "unknown",
                        turn_index: turnIdx,
                      }).catch(() => {});
                    }}
                    accessibilityRole="button"
                    accessibilityLabel={t("roleplay.rehearse_option", {
                      number: String(i + 1),
                      answer: opt,
                    })}
                  >
                    <Text style={styles.choiceText}>{opt}</Text>
                  </Pressable>
                ))
              )}
              <Pressable
                onPress={() => {
                  setFreeInputForTurn(true);
                  setSelectedReadyAnswer(null);
                  void trackEvent("roleplay_guidance_bypassed", {
                    scenario_id: seed ?? "unknown",
                    turn_index: turnIdx,
                  }).catch(() => {});
                }}
                style={styles.inputModeToggle}
                hitSlop={10}
                accessibilityRole="button"
                accessibilityLabel={t("roleplay.own_answer_label")}
              >
                <Text style={styles.inputModeToggleText}>
                  {sttAvailable
                    ? t("roleplay.own_answer_speak")
                    : t("roleplay.own_answer_write")}
                </Text>
              </Pressable>
            </View>
          ) : inputMode === "voice" && sttAvailable ? (
            <View style={styles.voiceBar}>
              <Pressable
                style={[
                  styles.micBtn,
                  recording && styles.micBtnRecording,
                  !awaitingUserInput && styles.micBtnDisabled,
                ]}
                onPress={recording ? stopVoiceCapture : startVoiceCapture}
                disabled={!awaitingUserInput}
                accessibilityRole="button"
                accessibilityState={{
                  disabled: !awaitingUserInput,
                  busy: recording,
                }}
                accessibilityLabel={
                  recording
                    ? t("roleplay.voice.stop_label")
                    : t("roleplay.voice.start_label")
                }
                accessibilityHint={
                  recording
                    ? t("roleplay.voice.stop_hint")
                    : t("roleplay.voice.start_hint")
                }
              >
                <Text style={styles.micEmoji}>
                  {recording ? "🔴" : "🎙️"}
                </Text>
                <Text style={styles.micLabel}>
                  {recording
                    ? t("roleplay.voice.listening")
                    : t("roleplay.voice.tap_to_speak")}
                </Text>
              </Pressable>
              {recording && interimText ? (
                <View style={styles.interimBox}>
                  <Text
                    style={styles.interimText}
                    numberOfLines={3}
                    accessibilityLiveRegion="polite"
                  >
                    {interimText}
                  </Text>
                </View>
              ) : null}
              {voiceError ? (
                <Text
                  style={styles.voiceErrorText}
                  accessibilityLiveRegion="assertive"
                >
                  {voiceError}
                </Text>
              ) : null}
              <Pressable
                onPress={toggleInputMode}
                style={styles.inputModeToggle}
                hitSlop={10}
                accessibilityRole="button"
                accessibilityLabel={t("roleplay.write_answer")}
              >
                <Text style={styles.inputModeToggleText}>
                  {t("roleplay.write_answer_cta")}
                </Text>
              </Pressable>
            </View>
          ) : (
            // Klavye fallback — voice unavailable VEYA kullanıcı text seçti
            // VEYA multi-choice değil. Hint pill voice'a geri dönüş için
            // sttAvailable koşuluyla render edilir.
            <View>
              {sttChecked && !sttAvailable ? (
                <Text
                  style={styles.voiceErrorText}
                  accessibilityLiveRegion="polite"
                >
                  {t("roleplay.voice.unavailable")}
                </Text>
              ) : null}
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  value={input}
                  onChangeText={setInput}
                  placeholder={t("roleplay.write_placeholder")}
                  placeholderTextColor={tokens.text.tertiary}
                  editable={awaitingUserInput}
                  multiline
                  autoCapitalize="sentences"
                  returnKeyType="send"
                  blurOnSubmit={false}
                  onSubmitEditing={submitUserTurn}
                  accessibilityLabel={t("roleplay.answer_label")}
                />
                <Pressable
                  style={[
                    styles.sendBtn,
                    (!input.trim() || !awaitingUserInput) &&
                      styles.sendBtnDisabled,
                  ]}
                  onPress={submitUserTurn}
                  disabled={!input.trim() || !awaitingUserInput}
                  accessibilityRole="button"
                  accessibilityLabel={t("roleplay.send")}
                >
                  {/* Right-pointing triangle drawn from borders — crisper than
                      a unicode glyph and adapts to any font. */}
                  <View style={styles.sendIcon} />
                </Pressable>
              </View>
              {sttAvailable && (
                <Pressable
                  onPress={toggleInputMode}
                  style={styles.inputModeToggle}
                  hitSlop={10}
                  accessibilityRole="button"
                  accessibilityLabel={t("roleplay.switch_to_voice")}
                >
                  <Text style={styles.inputModeToggleText}>
                    {t("roleplay.switch_to_voice_cta")}
                  </Text>
                </Pressable>
              )}
            </View>
          )}

          {/* 2026-05-20 — escape hatch. Bazı lesson scriptleri NPC'nin son
              repliğini "I'll be back with the cards" gibi final-tonda yazıyor
              ama turn'ler bitmemiş oluyor; kullanıcı "ekrandayım takıldım"
              diyor. ≥2 user turn sonra her zaman görünür bir "Sahneyi bitir"
              linki kullanıcıyı kilitlenmekten korur. Skor şu ana kadarki
              turnScores ortalaması olur. */}
          {turnScores.length >= 2 && (
            <Pressable
              onPress={() => setFinished(true)}
              style={styles.endSceneLink}
              hitSlop={10}
              accessibilityRole="button"
              accessibilityLabel={t("roleplay.finish_scene_label")}
            >
              <Text style={styles.endSceneText}>{t("roleplay.finish_scene")}</Text>
            </Pressable>
          )}
        </View>
      ) : (
        <View style={styles.finishBar}>
          <Button label={`${t("common.continue")} →`} onPress={finalize} />
        </View>
      )}
    </View>
  );
}

function ChatBubble({
  message,
  npcRole,
  setting,
}: {
  message: ChatMessage;
  npcRole?: string;
  setting?: string;
}) {
  const isUser = message.speaker === "user";
  const { t, locale } = useTranslation();

  return (
    <View
      style={[
        bubbleStyles.row,
        isUser ? bubbleStyles.rowUser : bubbleStyles.rowNpc,
      ]}
    >
      <Pressable
        // 2026-05-23 — Audio audit fix: NPC bubble'ında speaker icon tap'lendiğinde
        // doğru voice route'lensin (vc_match, vc_friend, vc_doctor). User
        // bubble'ında default English voice yeterli.
        onPress={() =>
          speak(
            message.message,
            isUser ? undefined : { npcRole, setting },
          )
        }
        style={[
          bubbleStyles.bubble,
          isUser ? bubbleStyles.bubbleUser : bubbleStyles.bubbleNpc,
        ]}
        accessibilityRole="button"
        accessibilityLabel={`${
          isUser ? t("roleplay.you") : t("roleplay.partner")
        }: ${message.message}`}
        accessibilityHint={t("roleplay.listen_message_hint")}
      >
        <Text
          style={[
            bubbleStyles.text,
            isUser ? bubbleStyles.textUser : bubbleStyles.textNpc,
          ]}
        >
          {message.message} 🔊
        </Text>
      </Pressable>

      {/* Inline mistake hint — 2026-05-20 switch-trigger #2.
          Lerna AI Türkçe açıklamayı verdict ekranında verir; Lafla sahne
          akışı içinde verir. Rakibe karşı kullanıcı "neden yanlış"
          sorusunu CEVAP YAZARKEN değil, ZIPLAYIP YAZINCA anlıyor. */}
      {isUser && message.mistake && (
        <View style={bubbleStyles.mistakeBox}>
          <Text style={bubbleStyles.mistakeMatched}>
            ✗ {message.mistake.matched}
          </Text>
          <Text style={bubbleStyles.mistakeCorrect}>
            ✓ {message.mistake.correct_example}
          </Text>
          <Text style={bubbleStyles.mistakeReason}>
            {locale === "tr"
              ? message.mistake.reason_tr
              : t("learning.mistake_fallback_en")}
          </Text>
        </View>
      )}

      {isUser && message.score !== undefined && (
        (() => {
          // 3-tier score chip — gives the user a felt difference between
          // "close" (60) and "missed" (0). The engine returns {0, 30, 60, 100}
          // so the thresholds 80 / 40 keep each band non-empty:
          //   >= 80  → 100 only  → cyan success
          //   40-79  → 60        → amber warning
          //   <  40  → 0 or 30   → red error
          const score = message.score;
          const isGood = score >= 80;
          const isMid = score >= 40 && score < 80;
          const chipStyle = isGood
            ? bubbleStyles.scoreOk
            : isMid
              ? bubbleStyles.scoreMid
              : bubbleStyles.scoreMiss;
          const textStyle = isGood
            ? bubbleStyles.scoreTextOk
            : isMid
              ? bubbleStyles.scoreTextMid
              : bubbleStyles.scoreTextMiss;
          const label = isGood
            ? t("roleplay.score.good")
            : isMid
              ? t("roleplay.score.close")
              : t("roleplay.score.retry");
          return (
            <View style={[bubbleStyles.scoreChip, chipStyle]}>
              <Text style={[bubbleStyles.scoreText, textStyle]}>{label}</Text>
            </View>
          );
        })()
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: tokens.border.light,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: tokens.brand.secondary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: tokens.brand.tertiary, // BLUE ring
  },
  avatarEmoji: {
    fontSize: 22,
    color: tokens.text.onSecondary,
  },
  headerText: { flex: 1 },
  npcName: {
    fontSize: 16,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  npcSubtitle: {
    fontSize: 12,
    color: tokens.text.secondary,
  },
  onlineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: tokens.brand.tertiary, // BLUE online indicator
  },
  muteBtn: {
    // Small circular button at the top-right of the header. Cyan when audio
    // is on (matches the "online" / brand accent), neutral gray when muted.
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  muteBtnOff: {
    // Drop the cyan accent so the muted state is visually distinct without
    // needing to read the icon.
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderColor: tokens.border.outlineVariant,
  },
  muteIcon: {
    fontSize: 16,
    lineHeight: 18,
  },
  muteIconOff: {
    // Slight desaturation for the muted glyph — emojis ignore color but
    // opacity reads as "off" to most users.
    opacity: 0.6,
  },
  chatScroll: { flex: 1 },
  chatContent: {
    paddingVertical: 16,
    gap: 10,
  },
  contextBubble: {
    alignSelf: "center",
    backgroundColor: tokens.bg.surfaceContainerHigh,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: tokens.radius.full,
    marginBottom: 8,
  },
  contextText: {
    fontSize: 12,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.semibold,
  },
  sessionContractCard: {
    alignSelf: "stretch",
    padding: 14,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    gap: 10,
    marginBottom: 6,
  },
  contractHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  contractEyebrow: {
    fontSize: 10,
    color: tokens.brand.tertiary,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 1.2,
  },
  contractMeta: {
    fontSize: 11,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.semibold,
  },
  contractGoal: {
    fontSize: 14,
    color: tokens.text.primary,
    fontWeight: tokens.weight.bold,
    lineHeight: 20,
  },
  contractSupport: {
    fontSize: 12,
    color: tokens.text.secondary,
    lineHeight: 17,
    fontWeight: tokens.weight.semibold,
  },
  inputBar: {
    paddingTop: 8,
    paddingBottom: 8,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
    gap: 6,
  },
  turnGoalStrip: {
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.light,
    gap: 3,
  },
  turnGoalStep: {
    fontSize: 10,
    color: tokens.brand.tertiary,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  turnGoalText: {
    fontSize: 13,
    color: tokens.text.primary,
    fontWeight: tokens.weight.semibold,
    lineHeight: 18,
  },
  hintBox: {
    backgroundColor: tokens.brand.primarySoft,
    borderLeftWidth: 3,
    borderLeftColor: tokens.brand.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 4,
    // Faz 3 — idle glow için shadow ground state. Animated style hintGlowStyle
    // shadowOpacity + shadowRadius'u dinamik üzerine yazar.
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 8,
  },
  retryBox: {
    backgroundColor: tokens.semantic.warningContainer,
    borderWidth: 1,
    borderColor: tokens.semantic.warning,
    borderRadius: tokens.radius.base,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 3,
    marginBottom: 4,
  },
  retryTitle: {
    color: tokens.text.primary,
    fontSize: 13,
    fontWeight: tokens.weight.bold,
  },
  retryExample: {
    color: tokens.text.secondary,
    fontSize: 13,
    lineHeight: 18,
  },
  // 2026-05-23 Faz 3: forceShowHint state'inde gösterilen küçük eyebrow.
  // "Sıkıştın mı? İpucu açıldı:" — pedagojik nudge, user'a hint'in NEDEN
  // açıldığını söyler (otomatik mid-scene rescue).
  hintForcedLabel: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.primary,
    letterSpacing: 1,
    marginBottom: 3,
    textTransform: "uppercase",
  },
  // 2026-05-23 — Stretch mode (user altı sahne) için yardımı PROMINENT
  // yap. Daha kalın border, daha büyük padding, koyu pembe accent —
  // "burada destek var" hissi. Matched/review'da default subtle kalır.
  hintBoxStretch: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderLeftWidth: 4,
    borderRadius: 12,
  },
  hintText: {
    fontSize: 13,
    color: tokens.text.primary,
    lineHeight: 18,
  },
  hintTextStretch: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: tokens.weight.medium,
  },
  // CEFR adaptation badges — sit just above the input bar so the
  // user reads the level cue before they type. Compact single-line.
  // Hard mode badge — Premium "🔥 HARD MODE" rozet, üst sıra, kırmızı
  // glow. Diğer badge'lerin yerini alır (hard mode active ise onlar
  // gözükmez).
  hardModeBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.semantic.errorContainer,
    borderWidth: 1.5,
    borderColor: tokens.semantic.error,
    marginBottom: 6,
    shadowColor: tokens.semantic.error,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  hardModeBadgeText: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    color: tokens.semantic.error,
    letterSpacing: 1.2,
  },
  lowPressureBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    marginBottom: 6,
  },
  lowPressureBadgeText: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.secondary,
    letterSpacing: 0.8,
  },
  stretchBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.semantic.warningContainer,
    borderWidth: 1,
    borderColor: tokens.semantic.warning,
    marginBottom: 6,
  },
  stretchBadgeText: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    color: tokens.semantic.warning,
    letterSpacing: 1,
  },
  reviewBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
    marginBottom: 6,
  },
  reviewBadgeText: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.tertiary,
    letterSpacing: 1,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.light,
    borderRadius: tokens.radius.full,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    color: tokens.text.primary,
    maxHeight: 100,
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: tokens.brand.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  sendBtnDisabled: {
    opacity: 0.4,
  },
  sendIcon: {
    width: 0,
    height: 0,
    borderTopWidth: 7,
    borderBottomWidth: 7,
    borderLeftWidth: 11,
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: tokens.text.onPrimary,
    // Nudge to optical center — pure right-triangle looks slightly left-heavy.
    marginLeft: 3,
  },
  // 2026-05-21 — voice input UI. Big tap target replaces the keyboard +
  // send-button pair. Recording state flips colors so the user has clear
  // visual feedback that the mic is hot.
  voiceBar: {
    alignItems: "center",
    paddingVertical: 8,
    gap: 12,
  },
  micBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primary,
    minWidth: 240,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 6,
  },
  micBtnRecording: {
    backgroundColor: tokens.semantic.error,
    shadowColor: tokens.semantic.error,
    shadowOpacity: 0.6,
  },
  micBtnDisabled: {
    opacity: 0.4,
  },
  micEmoji: {
    fontSize: 22,
  },
  micLabel: {
    fontSize: 16,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.onPrimary,
    letterSpacing: 0.4,
  },
  // Interim transcript ghost — shows what STT is hearing in real time so
  // the user can see if it picked them up before final commit.
  interimBox: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.light,
    maxWidth: "90%",
  },
  interimText: {
    fontSize: 14,
    color: tokens.text.secondary,
    fontStyle: "italic",
    textAlign: "center",
  },
  voiceErrorText: {
    color: tokens.semantic.error,
    fontSize: 12,
    lineHeight: 17,
    textAlign: "center",
  },
  // Small pill below the input row to swap voice ↔ text. Low visual
  // weight so it doesn't compete with the primary action.
  inputModeToggle: {
    alignSelf: "center",
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginTop: 4,
  },
  inputModeToggleText: {
    fontSize: 12,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.tertiary,
    letterSpacing: 0.3,
  },
  finishBar: {
    paddingTop: 12,
    paddingBottom: 8,
  },
  // 2026-05-20 — "Sahneyi bitir" escape link (≥2 user turn sonra görünür).
  endSceneLink: {
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 4,
    paddingHorizontal: 12,
  },
  endSceneText: {
    fontSize: 13,
    fontWeight: tokens.weight.semibold,
    color: tokens.brand.tertiary,
    letterSpacing: 0.3,
  },
  choiceCoachBox: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    gap: 3,
  },
  choiceCoachTitle: {
    fontSize: 13,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.tertiary,
    letterSpacing: -0.1,
  },
  choiceCoachText: {
    fontSize: 12,
    color: tokens.text.secondary,
    lineHeight: 17,
  },
  choiceCol: {
    gap: 8,
  },
  choiceBtn: {
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderWidth: 2,
    borderColor: tokens.border.outlineVariant,
    borderRadius: tokens.radius.base,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  choiceText: {
    color: tokens.text.primary,
    fontSize: 15,
    fontWeight: tokens.weight.semibold,
    lineHeight: 20,
  },
  readyAnswerCard: {
    padding: 14,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderWidth: 2,
    borderColor: tokens.brand.tertiary,
    gap: 10,
  },
  readyAnswerEyebrow: {
    fontSize: 10,
    color: tokens.brand.tertiary,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  readyAnswerText: {
    color: tokens.text.primary,
    fontSize: 17,
    fontWeight: tokens.weight.bold,
    lineHeight: 23,
  },
  readyAnswerActions: {
    flexDirection: "row",
    gap: 8,
  },
  readyAnswerSecondaryBtn: {
    flex: 1,
    paddingVertical: 11,
    borderRadius: tokens.radius.base,
    alignItems: "center",
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    backgroundColor: tokens.bg.surfaceContainer,
  },
  readyAnswerPrimaryBtn: {
    flex: 1,
    paddingVertical: 11,
    borderRadius: tokens.radius.base,
    alignItems: "center",
    backgroundColor: tokens.brand.primary,
  },
  readyAnswerSecondaryText: {
    color: tokens.text.secondary,
    fontWeight: tokens.weight.bold,
    fontSize: 13,
  },
  readyAnswerPrimaryText: {
    color: tokens.text.onPrimary,
    fontWeight: tokens.weight.black,
    fontSize: 13,
  },
  finalScore: {
    alignSelf: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: tokens.brand.tertiarySoft,
    borderRadius: tokens.radius.base,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
    marginTop: 8,
  },
  finalScoreText: {
    color: tokens.brand.tertiary,
    fontWeight: tokens.weight.bold,
    fontSize: 14,
  },
});

const bubbleStyles = StyleSheet.create({
  row: {
    flexDirection: "column",
    maxWidth: "85%",
  },
  rowNpc: {
    alignSelf: "flex-start",
    alignItems: "flex-start",
  },
  rowUser: {
    alignSelf: "flex-end",
    alignItems: "flex-end",
  },
  bubble: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
  },
  bubbleNpc: {
    backgroundColor: tokens.brand.secondary, // BLACK npc bubble
    borderBottomLeftRadius: 4,
  },
  bubbleUser: {
    backgroundColor: tokens.brand.primary, // YELLOW user bubble
    borderBottomRightRadius: 4,
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
  },
  textNpc: {
    color: tokens.text.onSecondary,
  },
  textUser: {
    color: tokens.text.onPrimary,
  },
  scoreChip: {
    marginTop: 4,
    marginRight: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: tokens.radius.full,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  scoreOk: {
    backgroundColor: tokens.brand.tertiarySoft,
  },
  scoreMid: {
    // Amber band for "partial credit" turns. Uses semantic.warningContainer
    // so themes can re-skin the warning palette without touching this file.
    backgroundColor: tokens.semantic.warningContainer,
  },
  scoreMiss: {
    backgroundColor: tokens.semantic.errorContainer,
  },
  scoreText: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
  },
  scoreTextOk: {
    color: tokens.brand.tertiary,
  },
  scoreTextMid: {
    color: tokens.semantic.warning,
  },
  scoreTextMiss: {
    color: tokens.semantic.error,
  },

  // Inline error baloncuğu — switch-trigger #2 (2026-05-20).
  // User bubble'ın altına bir küçük "düzeltme kartı" yapışır. ✗ matched
  // (kırmızı), ✓ correct example (cyan), Türkçe açıklama (soft gray).
  mistakeBox: {
    marginTop: 6,
    marginBottom: 2,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: tokens.semantic.error,
    backgroundColor: tokens.semantic.errorContainer,
    alignSelf: "flex-end",
    maxWidth: "100%",
  },
  mistakeMatched: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.semantic.error,
    marginBottom: 2,
    textDecorationLine: "line-through",
  },
  mistakeCorrect: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
    marginBottom: 6,
  },
  mistakeReason: {
    fontSize: 12,
    lineHeight: 17,
    color: tokens.text.secondary,
  },
});
