// Lafla — VOIP Call Session Manager.
//
// Drives the dialogue tree defined in data/voip-calls.ts. Listens to user
// input (text or transcribed speech), matches it against the current node's
// acceptable_patterns or options, and advances. Agent turns auto-play via
// the existing TTS wrapper.
//
// State machine:
//   ringing      — short ring "tone" before connect (TTS placeholder)
//   connected    — normal back-and-forth, agent speaking and user answering
//   hold         — agent put us on hold (rarely used)
//   ended-success / ended-failed — terminal states
//
// No backend. Everything stays in memory — start fresh on each screen mount.

import { getVoipCall, type VoipCall, type VoipCallNode } from "../data/voip-calls";
import { speak, stop as stopTts } from "./tts";

export type VoipCallState =
  | "ringing"
  | "connected"
  | "hold"
  | "ended-success"
  | "ended-failed";

export interface VoipHistoryEntry {
  speaker: "agent" | "user";
  text: string;
}

export interface VoipSessionAPI {
  start(callId: string): Promise<void>;
  hangup(): void;
  state(): VoipCallState;
  currentNode(): VoipCallNode | null;
  history(): VoipHistoryEntry[];
  selectOption(nextId: string): Promise<void>;
  submitUserText(text: string): Promise<void>;
  onStateChange(cb: (s: VoipCallState) => void): () => void;
}

// Treat a user response that matches none of the patterns this many times as
// a failed call (agent "hangs up"). Keeps short sessions from dragging.
const MAX_MISSES_PER_NODE = 2;

function normalize(s: string): string {
  return s.toLowerCase().trim().replace(/[^a-z0-9 \-']/g, " ");
}

function matchesAny(input: string, patterns: readonly string[] | undefined): boolean {
  if (!patterns || patterns.length === 0) return false;
  const norm = normalize(input);
  for (const p of patterns) {
    try {
      const re = new RegExp(p, "i");
      if (re.test(norm)) return true;
    } catch {
      // Bad regex in content → fall through. Authoring bug, not a user bug.
    }
  }
  return false;
}

export function createVoipSession(): VoipSessionAPI {
  let call: VoipCall | null = null;
  let nodeId: string | null = null;
  let st: VoipCallState = "ringing";
  let hist: VoipHistoryEntry[] = [];
  let misses = 0;
  const listeners = new Set<(s: VoipCallState) => void>();

  function setState(next: VoipCallState) {
    if (st === next) return;
    st = next;
    for (const l of listeners) {
      try {
        l(next);
      } catch {
        // ignore listener errors so one bad cb doesn't break the chain
      }
    }
  }

  function currentNodeRaw(): VoipCallNode | null {
    if (!call || !nodeId) return null;
    return call.nodes.find((n) => n.id === nodeId) ?? null;
  }

  function endForNode(node: VoipCallNode) {
    if (!call) return;
    if (call.endNodeIds.includes(node.id)) {
      setState("ended-success");
    } else if (call.failureNodeIds.includes(node.id)) {
      setState("ended-failed");
    }
  }

  /**
   * Advance to a node id, speak its line if it's an agent turn, and keep
   * walking if it auto-continues (agent → agent chain). Stops on user-turn
   * nodes (waits for input) or terminal nodes.
   */
  async function goTo(nextId: string): Promise<void> {
    if (!call) return;
    nodeId = nextId;
    misses = 0;
    const node = currentNodeRaw();
    if (!node) return;

    if (node.speaker === "agent") {
      if (node.text) {
        hist = [...hist, { speaker: "agent", text: node.text }];
        playAgent(node.text, call.voice);
      }
      // Terminal? Update state and stop.
      if (
        call.endNodeIds.includes(node.id) ||
        call.failureNodeIds.includes(node.id)
      ) {
        endForNode(node);
        return;
      }
      // If this agent node has options, we wait for the user to pick.
      if (node.options && node.options.length > 0) {
        return;
      }
      // Single-path continuation: keep walking after a short visual beat.
      if (node.next) {
        await new Promise((res) => setTimeout(res, 600));
        await goTo(node.next);
      }
    }
    // User turns: just wait. UI will call submitUserText / selectOption.
  }

  function playAgent(text: string, voice: VoipCall["voice"]) {
    // expo-speech doesn't expose individual voices by accent reliably, but
    // we can at least nudge rate down a touch for UK voices (often need
    // more time to register on iOS engine).
    const rate = voice.endsWith("uk") ? 0.92 : 0.96;
    speak(text, { lang: "en-US", rate });
  }

  async function start(callId: string): Promise<void> {
    const found = getVoipCall(callId);
    if (!found) throw new Error(`unknown voip call: ${callId}`);
    call = found;
    nodeId = null;
    hist = [];
    misses = 0;
    setState("ringing");

    // Fake ring — say "ring ring" through TTS. Cheap, gets the vibe across
    // without bundling a sound file.
    speak("Ring. Ring.", { lang: "en-US", rate: 0.9 });
    await new Promise((res) => setTimeout(res, 1800));

    setState("connected");
    await goTo(call.startNodeId);
  }

  function hangup(): void {
    stopTts();
    setState("ended-failed");
  }

  function state(): VoipCallState {
    return st;
  }

  function currentNode(): VoipCallNode | null {
    return currentNodeRaw();
  }

  function history(): VoipHistoryEntry[] {
    return hist;
  }

  async function selectOption(nextId: string): Promise<void> {
    const node = currentNodeRaw();
    if (!node || !node.options) return;
    const chosen = node.options.find((o) => o.nextId === nextId);
    if (!chosen) return;
    hist = [...hist, { speaker: "user", text: chosen.text }];
    await goTo(nextId);
  }

  async function submitUserText(text: string): Promise<void> {
    const node = currentNodeRaw();
    if (!node || node.speaker !== "user") return;

    const cleanText = text.trim();
    if (!cleanText) return;
    hist = [...hist, { speaker: "user", text: cleanText }];

    if (matchesAny(cleanText, node.acceptable_patterns)) {
      if (node.next) {
        await goTo(node.next);
      }
      return;
    }

    // Miss — give them one more try, then escalate.
    misses += 1;
    if (misses >= MAX_MISSES_PER_NODE) {
      // Force-end the call as failure to avoid an infinite loop.
      hist = [
        ...hist,
        {
          speaker: "agent",
          text: "I'm sorry, I'm having trouble understanding. Please call back when you have a moment. Goodbye.",
        },
      ];
      if (call) {
        playAgent(
          "I'm sorry, I'm having trouble understanding. Please call back when you have a moment. Goodbye.",
          call.voice,
        );
      }
      setState("ended-failed");
      return;
    }

    // Soft reprompt — agent asks to repeat.
    const reprompt = "Sorry, could you repeat that?";
    hist = [...hist, { speaker: "agent", text: reprompt }];
    if (call) playAgent(reprompt, call.voice);
  }

  function onStateChange(cb: (s: VoipCallState) => void): () => void {
    listeners.add(cb);
    return () => {
      listeners.delete(cb);
    };
  }

  return {
    start,
    hangup,
    state,
    currentNode,
    history,
    selectOption,
    submitUserText,
    onStateChange,
  };
}
