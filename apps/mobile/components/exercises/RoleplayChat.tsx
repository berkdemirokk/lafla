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
import { Button } from "../Button";
import { tokens } from "../../theme";
import { speak, stop as stopTts } from "../../lib/tts";
import {
  evaluateRoleplayTurn,
  type ExerciseResult,
} from "../../lib/engine";
import { nameForNpc } from "../../lib/npc-names";
import { recordUserText } from "../../lib/mistake-tracker";
import { detectMistakes, getPattern } from "../../lib/mistake-patterns";

// AsyncStorage key for the per-app TTS mute preference. Survives across
// scenarios and app restarts so the user doesn't have to re-mute every chat.
const K_TTS_MUTED = "lafla.tts.muted";

// NPC reaction prefixes — short ACKs prepended to the next NPC bubble so the
// scene reacts to the user's score instead of plowing through the script.
// Rotated deterministically by input hash so the same input always elicits
// the same reaction (avoids the uncanny "different reaction on retry" feel).
const REACTIONS_GOOD = ["Got it.", "Nice.", "Perfect."] as const;
const REACTIONS_MID = ["Hmm, okay.", "I think I follow."] as const;
// 2026-05-20 — low-score reactions made HONEST. Eski tek option "Sorry,
// could you say that again?" + scripted NPC reply = "Sorry, sure thing!"
// kullanıcıya cevabını anladığım yalanı söylüyordu. Şimdi off-topic
// olduğunu açıkça belirtiyor; kullanıcı "Sahneyi bitir" butonuyla kaçabilir
// veya sıradaki turn'e geçebilir (en kötü "biraz konudan saptık" intibası).
const REACTIONS_LOW = [
  "Hmm, that's a bit off-topic — let me try anyway.",
  "Not sure I caught that. Moving on...",
  "Okay, not quite what I asked but —",
] as const;

function hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function pickReactionPrefix(score: number, userInput: string): string | null {
  const trimmed = userInput.trim();
  // score 0 (empty / garbage with no recognisable words) → don't tack a
  // reaction onto the next line. The verdict / lack of progress already
  // tells the story, and a "say that again" loop on empty input feels broken.
  if (score === 0 || !trimmed) return null;
  const h = hashStr(trimmed);
  if (score >= 80) return REACTIONS_GOOD[h % REACTIONS_GOOD.length]!;
  if (score >= 40) return REACTIONS_MID[h % REACTIONS_MID.length]!;
  return REACTIONS_LOW[h % REACTIONS_LOW.length]!;
}

interface RoleplayTurn {
  speaker: "npc" | "user";
  message?: string;
  acceptable_patterns?: string[];
  hint_tr?: string;
}

export type RoleplayMode = "multi-choice" | "hinted" | "free";

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
  mistake?: {
    /** Kullanıcı metninde patlayan substring (örn. "I am go"). Highlight için. */
    matched: string;
    /** Bir cümle Türkçe açıklama. */
    reason_tr: string;
    /** "I am going / I go" gibi doğru karşılık. */
    correct_example: string;
  };
}

// Extract the example English sentence from hint_tr (text between single quotes)
function extractExampleFromHint(hint?: string): string | null {
  if (!hint) return null;
  const match = hint.match(/['']([^'']+)['']/);
  return match?.[1] ?? null;
}

// Sanitize a display name for inline injection into NPC dialog. Strips
// control chars and quotes that would break the rendered string, collapses
// whitespace, and hard-caps the length. Casing is preserved.
function sanitizeUserName(raw: string | null | undefined): string {
  if (!raw) return "";
  // eslint-disable-next-line no-control-regex
  let cleaned = raw.replace(/[ -]/g, "");
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
  if (/tinder|date|match|crush|flirt|romance|partner|girlfriend|boyfriend/.test(ctx)) return "💕";
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

// Generic distractor pool — wrong but plausible responses
const GENERIC_DISTRACTORS = [
  "I don't understand.",
  "Sorry, what?",
  "Let me think about it.",
  "Maybe later.",
  "I'm not sure.",
  "Can you repeat?",
  "Hold on a sec.",
  "Yeah, sounds good.",
];

function buildChoiceOptions(turn: RoleplayTurn): string[] {
  const example = extractExampleFromHint(turn.hint_tr);
  const correct = example ?? "(continue)";
  // 2 random distractors from pool, deterministic by hint length
  const seed = (turn.hint_tr ?? "").length;
  const d1 = GENERIC_DISTRACTORS[seed % GENERIC_DISTRACTORS.length]!;
  const d2 =
    GENERIC_DISTRACTORS[(seed * 3 + 1) % GENERIC_DISTRACTORS.length]!;
  const opts = [correct, d1, d2 === d1 ? GENERIC_DISTRACTORS[0]! : d2];
  // Shuffle deterministically
  return opts
    .map((o, i) => ({ o, k: (i * 7 + seed) % 13 }))
    .sort((a, b) => a.k - b.k)
    .map((x) => x.o);
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
}: Props) {
  // Delta: positive = user above scene (review mode), negative = below (stretch).
  // Both levels required for non-neutral adaptation; either missing → 0.
  const levelDelta = useMemo(() => {
    if (!sceneLevel || !userLevel) return 0;
    return CEFR_ORDER.indexOf(userLevel) - CEFR_ORDER.indexOf(sceneLevel);
  }, [sceneLevel, userLevel]);
  // Mode classification — keeps render branches readable.
  const adaptMode: "stretch" | "matched" | "review" =
    levelDelta < 0 ? "stretch" : levelDelta > 0 ? "review" : "matched";
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
  const [finished, setFinished] = useState(false);
  // TTS mute toggle. Persisted to AsyncStorage so it carries across scenarios
  // and app restarts. We default to false (audio on) because hearing native
  // pronunciation is core to the product — users have to opt OUT, not in.
  const [muted, setMuted] = useState(false);
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
    while (i < turns.length && turns[i]!.speaker === "npc") {
      const raw = turns[i]!.message;
      if (raw) {
        // Only the first NPC line of the conversation gets personalized.
        // Everything that follows in the same opening block (rare, but
        // some scenes have consecutive NPC lines) is left untouched so we
        // don't try to inject the name multiple times into one greeting.
        const isFirstNpcLine = isOpening && newShown.length === 0;
        let message = isFirstNpcLine
          ? personalizeOpener(raw, userName)
          : raw;
        // Prepend the score-based reaction ACK to the FIRST NPC line of this
        // block so the scene visibly reacts to what the user just said. We
        // only do this on the first line in case the script has consecutive
        // NPC turns — the reaction belongs to the immediate response, not
        // every follow-up. Personalized opener path never hits this branch
        // because reactions are queued from user submits, and the opening
        // block (turnIdx === 0, shown empty) precedes any user turn.
        if (newShown.length === 0 && pendingReaction && !isFirstNpcLine) {
          message = `${pendingReaction} ${message}`;
        }
        newShown.push({ speaker: "npc", message });
      }
      i++;
    }
    if (newShown.length > 0) {
      setShown((prev) => [...prev, ...newShown]);
      setTurnIdx(i);
      // The reaction (if any) has now been baked into the rendered text.
      // Clear it so the next NPC block doesn't re-use a stale prefix.
      if (pendingReaction) setPendingReaction(null);
      // Auto-speak the most recent NPC line after a short beat — UNLESS the
      // user has muted TTS, in which case we drop the side effect entirely.
      // The bubble still renders; only the audio is suppressed.
      if (!muted) {
        const last = newShown[newShown.length - 1]!.message;
        const t = setTimeout(() => speak(last), 600);
        return () => clearTimeout(t);
      }
    }
    // We intentionally exclude `shown` from deps — the effect already
    // self-gates by checking `turns[i].speaker === "npc"` and we advance
    // `turnIdx` past NPC turns, so re-running on `shown` changes would
    // just no-op anyway. Adding it would re-trigger on every user reply.
    // `muted` is read for the speak() guard; including it would re-flush
    // the same NPC block when the toggle flips, so we deliberately omit it
    // and accept the stale-closure trade (mute applies to the NEXT block).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turnIdx, turns, userName, pendingReaction]);

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

  const finalScore = useMemo(() => {
    if (turnScores.length === 0) return 0;
    return Math.round(
      turnScores.reduce((a, b) => a + b, 0) / turnScores.length,
    );
  }, [turnScores]);

  const submitUserTurn = () => {
    if (!awaitingUserInput || !input.trim() || !currentTurn) return;

    const evalResult = evaluateRoleplayTurn(
      currentTurn.acceptable_patterns ?? [],
      input,
    );

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
      }
    }

    setShown((prev) => [
      ...prev,
      {
        speaker: "user",
        message: input,
        score: evalResult.score,
        mistake: mistakeInline,
      },
    ]);
    setTurnScores((prev) => [...prev, evalResult.score]);

    // Queue the score-based reaction ACK for the NEXT NPC line. Skipped on
    // the final user turn — there's no next NPC bubble to attach to and the
    // post-roleplay verdict will deliver the feedback instead.
    const nextIdx = turnIdx + 1;
    const isLastTurn = nextIdx >= turns.length;
    if (!isLastTurn) {
      const reaction = pickReactionPrefix(evalResult.score, input);
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
    const correctCount = turnScores.filter((s) => s > 0).length;
    onComplete({
      exercise_id: "roleplay_chat",
      exercise_type: "roleplay_chat",
      correct: finalScore >= 50,
      score: finalScore,
      feedback: `${correctCount}/${turnScores.length} tepki doğru.`,
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
          accessibilityLabel={muted ? "Sesi aç" : "Sesi kapat"}
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

        {shown.map((msg, i) => (
          <ChatBubble key={i} message={msg} />
        ))}

        {finished && (
          <View style={styles.finalScore}>
            <Text style={styles.finalScoreText}>
              ✓ Roleplay tamamlandı · {finalScore}/100
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
          {adaptMode === "stretch" && (
            <View style={styles.stretchBadge}>
              <Text style={styles.stretchBadgeText}>
                +1 ZORLA · {sceneLevel}{userLevel ? ` (sen ${userLevel})` : ""}
              </Text>
            </View>
          )}
          {adaptMode === "review" && (
            <View style={styles.reviewBadge}>
              <Text style={styles.reviewBadgeText}>
                KOLAY TEKRAR · {sceneLevel}{userLevel ? ` (sen ${userLevel})` : ""}
              </Text>
            </View>
          )}

          {/* TR hint — visibility depends on mode AND adaptation:
              - stretch (user below scene): ALWAYS show, regardless of mode
              - review  (user above scene): NEVER show (user shouldn't lean
                on it for content below their level)
              - matched: legacy behavior — only in non-free mode */}
          {(adaptMode === "stretch"
            ? currentTurn?.hint_tr
            : adaptMode === "matched"
              ? mode !== "free" && currentTurn?.hint_tr
              : null) && (
            <View style={styles.hintBox}>
              <Text style={styles.hintText}>💡 {currentTurn?.hint_tr}</Text>
            </View>
          )}

          {mode === "multi-choice" && currentTurn ? (
            <View style={styles.choiceCol}>
              {buildChoiceOptions(currentTurn).map((opt, i) => (
                <Pressable
                  key={`${turnIdx}-${i}`}
                  style={styles.choiceBtn}
                  onPress={() => {
                    setInput(opt);
                    setTimeout(() => {
                      // Submit with the chosen option as input
                      const fakeInput = opt;
                      if (!currentTurn) return;
                      const r = evaluateRoleplayTurn(
                        currentTurn.acceptable_patterns ?? [],
                        fakeInput,
                      );
                      setShown((prev) => [
                        ...prev,
                        {
                          speaker: "user",
                          message: fakeInput,
                          score: r.score,
                        },
                      ]);
                      setTurnScores((prev) => [...prev, r.score]);
                      setInput("");
                      const nextIdx = turnIdx + 1;
                      const isLastTurn = nextIdx >= turns.length;
                      // Mirror the free-mode path: queue a score-based ACK
                      // for the next NPC line and (for sub-80 picks) capture
                      // the mistake. Choice-mode users still benefit from
                      // both signals.
                      if (!isLastTurn) {
                        const reaction = pickReactionPrefix(r.score, fakeInput);
                        if (reaction) setPendingReaction(reaction);
                      }
                      if (r.score < 80) {
                        recordUserText(fakeInput).catch(() => {});
                      }
                      if (isLastTurn) setFinished(true);
                      else setTurnIdx(nextIdx);
                    }, 50);
                  }}
                >
                  <Text style={styles.choiceText}>{opt}</Text>
                </Pressable>
              ))}
            </View>
          ) : (
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                value={input}
                onChangeText={setInput}
                placeholder="İngilizce cevap yaz..."
                placeholderTextColor={tokens.text.tertiary}
                editable={awaitingUserInput}
                multiline
                autoCapitalize="sentences"
                returnKeyType="send"
                blurOnSubmit={false}
                onSubmitEditing={submitUserTurn}
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
                accessibilityLabel="Gönder"
              >
                {/* Right-pointing triangle drawn from borders — crisper than
                    a unicode glyph and adapts to any font. */}
                <View style={styles.sendIcon} />
              </Pressable>
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
              accessibilityLabel="Sahneyi şimdi bitir ve sonucu gör"
            >
              <Text style={styles.endSceneText}>Sahneyi bitir →</Text>
            </Pressable>
          )}
        </View>
      ) : (
        <View style={styles.finishBar}>
          <Button label={`Devam et →`} onPress={finalize} />
        </View>
      )}
    </View>
  );
}

function ChatBubble({ message }: { message: ChatMessage }) {
  const isUser = message.speaker === "user";

  return (
    <View
      style={[
        bubbleStyles.row,
        isUser ? bubbleStyles.rowUser : bubbleStyles.rowNpc,
      ]}
    >
      <Pressable
        onPress={() => speak(message.message)}
        style={[
          bubbleStyles.bubble,
          isUser ? bubbleStyles.bubbleUser : bubbleStyles.bubbleNpc,
        ]}
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
            {message.mistake.reason_tr}
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
          // Symbols: only the extremes get one. Mid-tier omits the symbol
          // so the bare number reads as "neutral / partial" instead of
          // pass/fail.
          const symbol = isGood ? "✓ " : isMid ? "" : "✕ ";
          return (
            <View style={[bubbleStyles.scoreChip, chipStyle]}>
              <Text style={[bubbleStyles.scoreText, textStyle]}>
                {symbol}
                {score}/100
              </Text>
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
  inputBar: {
    paddingTop: 8,
    paddingBottom: 8,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
    gap: 6,
  },
  hintBox: {
    backgroundColor: tokens.brand.primarySoft,
    borderLeftWidth: 3,
    borderLeftColor: tokens.brand.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 4,
  },
  hintText: {
    fontSize: 13,
    color: tokens.text.primary,
    lineHeight: 18,
  },
  // CEFR adaptation badges — sit just above the input bar so the
  // user reads the level cue before they type. Compact single-line.
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
