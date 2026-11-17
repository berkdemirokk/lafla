import { FREE_CHAT_PROMPTS } from "../../data/free-chat-prompts";
import {
  classifyConversationIntent,
  createConversationState,
  extractConversationEntities,
  replyToConversation,
} from "../local-conversation-engine";
import { checkMayaOutput } from "../safety-filter";

function prompt(id = "daily.howsday") {
  const value = FREE_CHAT_PROMPTS.find((item) => item.id === id);
  if (!value) throw new Error(`Missing test prompt: ${id}`);
  return value;
}

describe("local conversation engine", () => {
  it("ships 20 unique conversation starters", () => {
    expect(FREE_CHAT_PROMPTS).toHaveLength(20);
    expect(new Set(FREE_CHAT_PROMPTS.map((item) => item.id)).size).toBe(20);
  });

  it("keeps every authored prompt branch executable and complete", () => {
    for (const item of FREE_CHAT_PROMPTS) {
      expect(item.npc_opener.trim()).not.toBe("");
      expect(item.hint_tr.trim()).not.toBe("");
      expect(item.default_followup.trim()).not.toBe("");
      expect(item.default_hint_tr.trim()).not.toBe("");
      expect(item.followups.length).toBeGreaterThan(0);

      for (const followup of item.followups) {
        expect(followup.npc_reply.trim()).not.toBe("");
        expect(followup.triggers.length).toBeGreaterThan(0);
        for (const trigger of followup.triggers) {
          expect(() => new RegExp(trigger, "i")).not.toThrow();
        }
      }
    }
  });

  it("extracts useful entities and sentiment without a network model", () => {
    expect(
      extractConversationEntities(
        "I was exhausted after working with my team for three hours yesterday.",
      ),
    ).toMatchObject({
      emotion: "exhausted",
      activity: "work",
      person: "your team",
      time: "yesterday",
      duration: "for three hours",
      polarity: -1,
    });
  });

  it.each([
    ["Hey!", "greeting"],
    ["What about you?", "question"],
    ["I am going to study tomorrow.", "plan"],
    ["I chose it because it is calmer.", "reason"],
    ["I prefer small groups.", "preference"],
    ["Yeah", "short_answer"],
  ] as const)("classifies %s as %s", (text, expected) => {
    expect(classifyConversationIntent(text)).toBe(expected);
  });

  it("honors a prompt-specific first turn, then moves into contextual state", () => {
    const selected = prompt();
    const first = replyToConversation(
      "My day was great.",
      selected,
      createConversationState(selected),
    );
    const second = replyToConversation(
      "Because I finally finished a difficult project.",
      selected,
      first.state,
    );

    expect(first.text).toMatch(/anything specific/i);
    expect(first.state.turnCount).toBe(1);
    expect(second.intent).toBe("reason");
    expect(second.state.turnCount).toBe(2);
    expect(second.text).not.toBe(first.text);
    expect(second.state.focus?.value).toBe("work");
  });

  it("uses the previous question to deepen a short answer", () => {
    const selected = prompt();
    const first = replyToConversation(
      "It was good.",
      selected,
      createConversationState(selected),
    );
    const second = replyToConversation("Yeah.", selected, first.state);

    expect(second.intent).toBe("short_answer");
    expect(second.text).toMatch(/detail|example|what happened/i);
    expect(second.strategy).not.toBe(first.strategy);
  });

  it("answers a question back in the active topic instead of dodging it", () => {
    const selected = prompt("food.favorite");
    const response = replyToConversation(
      "What about you?",
      selected,
      createConversationState(selected),
    );

    expect(response.intent).toBe("question");
    expect(response.text).toMatch(/I'd|I enjoy/i);
    expect(response.text).toMatch(/\?$/);
  });

  it("responds empathetically to negative emotion and keeps a safe focus", () => {
    const selected = prompt("feel.mood");
    const response = replyToConversation(
      "I feel overwhelmed and tired today.",
      selected,
      createConversationState(selected),
    );

    expect(response.intent).toBe("emotion");
    expect(response.entities.polarity).toBe(-1);
    expect(response.text).toMatch(/hard|manageable|hear you|draining/i);
    expect(response.state.focus).toEqual({
      kind: "emotion",
      value: "overwhelmed",
    });
  });

  it("is deterministic for the same text and state while avoiding used replies", () => {
    const selected = prompt("work.project");
    const state = createConversationState(selected);
    const left = replyToConversation("I am working on an app.", selected, state);
    const right = replyToConversation("I am working on an app.", selected, state);
    const next = replyToConversation(
      "I am working on another app.",
      selected,
      left.state,
    );

    expect(left).toEqual(right);
    expect(next.text).not.toBe(left.text);
    expect(new Set(next.state.usedReplyIds).size).toBe(
      next.state.usedReplyIds.length,
    );
  });

  it("safely advances every prompt through a representative multi-intent conversation", () => {
    const turns = [
      "Hi!",
      "I am working on a difficult project today.",
      "I feel proud because we finally finished it.",
      "I prefer small teams because communication is easier.",
      "What about you?",
      "Yeah.",
      "Yesterday I met my friend for dinner.",
      "Tomorrow I am going to rest and read a book.",
      "Thanks for listening.",
      "I have to go now, see you later.",
    ];

    for (const selected of FREE_CHAT_PROMPTS) {
      let state = createConversationState(selected);
      for (const input of turns) {
        const response = replyToConversation(input, selected, state);
        expect(response.text.trim()).not.toBe("");
        expect(response.text.length).toBeLessThanOrEqual(280);
        expect(checkMayaOutput(response.text).ok).toBe(true);
        expect(response.state.turnCount).toBe(state.turnCount + 1);
        expect(response.state.usedReplyIds.length).toBeLessThanOrEqual(12);
        state = response.state;
      }
    }
  });
});
