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
import { Button } from "../Button";
import { tokens } from "../../theme";
import { speak } from "../../lib/tts";
import {
  evaluateRoleplayTurn,
  type ExerciseResult,
} from "../../lib/engine";
import { nameForNpc } from "../../lib/npc-names";

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
}

interface ChatMessage {
  speaker: "npc" | "user";
  message: string;
  score?: number;
}

// Extract the example English sentence from hint_tr (text between single quotes)
function extractExampleFromHint(hint?: string): string | null {
  if (!hint) return null;
  const match = hint.match(/['']([^'']+)['']/);
  return match?.[1] ?? null;
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

export function RoleplayChat({
  scenarioDescription,
  npcRole,
  setting,
  turns,
  onComplete,
  mode = "free",
  seed,
}: Props) {
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
  const scrollRef = useRef<ScrollView>(null);

  // Auto-show NPC turns until next user turn + auto-speak last one
  useEffect(() => {
    let i = turnIdx;
    const newShown: ChatMessage[] = [];
    while (i < turns.length && turns[i]!.speaker === "npc") {
      if (turns[i]!.message) {
        newShown.push({ speaker: "npc", message: turns[i]!.message! });
      }
      i++;
    }
    if (newShown.length > 0) {
      setShown((prev) => [...prev, ...newShown]);
      setTurnIdx(i);
      // Auto-speak the most recent NPC line after a short beat
      const last = newShown[newShown.length - 1]!.message;
      const t = setTimeout(() => speak(last), 600);
      return () => clearTimeout(t);
    }
  }, [turnIdx, turns]);

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
    setShown((prev) => [
      ...prev,
      { speaker: "user", message: input, score: evalResult.score },
    ]);
    setTurnScores((prev) => [...prev, evalResult.score]);
    setInput("");

    const nextIdx = turnIdx + 1;
    if (nextIdx >= turns.length) {
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
          {mode !== "free" && currentTurn?.hint_tr && (
            <View style={styles.hintBox}>
              <Text style={styles.hintText}>💡 {currentTurn.hint_tr}</Text>
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
                      if (nextIdx >= turns.length) setFinished(true);
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
      {isUser && message.score !== undefined && (
        <View
          style={[
            bubbleStyles.scoreChip,
            message.score >= 75
              ? bubbleStyles.scoreOk
              : bubbleStyles.scoreMiss,
          ]}
        >
          <Text
            style={[
              bubbleStyles.scoreText,
              message.score >= 75
                ? bubbleStyles.scoreTextOk
                : bubbleStyles.scoreTextMiss,
            ]}
          >
            {message.score >= 75 ? "✓" : "✗"} {message.score}/100
          </Text>
        </View>
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
  scoreTextMiss: {
    color: tokens.semantic.error,
  },
});
