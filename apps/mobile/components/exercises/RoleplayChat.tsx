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
import {
  evaluateRoleplayTurn,
  type ExerciseResult,
} from "../../lib/engine";

interface RoleplayTurn {
  speaker: "npc" | "user";
  message?: string;
  acceptable_patterns?: string[];
  hint_tr?: string;
}

interface Props {
  scenarioDescription: string;
  npcRole: string;
  setting: string;
  turns: RoleplayTurn[];
  onComplete: (result: ExerciseResult) => void;
}

interface ChatMessage {
  speaker: "npc" | "user";
  message: string;
  score?: number;
}

export function RoleplayChat({
  scenarioDescription,
  npcRole,
  setting,
  turns,
  onComplete,
}: Props) {
  const [turnIdx, setTurnIdx] = useState(0);
  const [shown, setShown] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [turnScores, setTurnScores] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);
  const scrollRef = useRef<ScrollView>(null);

  // Auto-show NPC turns until next user turn
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
    }
  }, [turnIdx, turns]);

  // Auto-scroll
  useEffect(() => {
    setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 80);
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
          <Text style={styles.avatarEmoji}>👤</Text>
        </View>
        <View style={styles.headerText}>
          <Text style={styles.npcName}>{npcRole}</Text>
          <Text style={styles.npcSubtitle}>{setting}</Text>
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

      {/* Input or finalize button */}
      {!finished ? (
        <View style={styles.inputBar}>
          {currentTurn?.hint_tr && (
            <View style={styles.hintBox}>
              <Text style={styles.hintText}>💡 {currentTurn.hint_tr}</Text>
            </View>
          )}
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
                (!input.trim() || !awaitingUserInput) && styles.sendBtnDisabled,
              ]}
              onPress={submitUserTurn}
              disabled={!input.trim() || !awaitingUserInput}
            >
              <Text style={styles.sendBtnText}>↑</Text>
            </Pressable>
          </View>
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
      <View
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
          {message.message}
        </Text>
      </View>
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
  sendBtnText: {
    color: tokens.text.onPrimary,
    fontSize: 22,
    fontWeight: tokens.weight.black,
  },
  finishBar: {
    paddingTop: 12,
    paddingBottom: 8,
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
