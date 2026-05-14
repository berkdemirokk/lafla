// Lafla — Voice conversation session manager.
//
// Drives a continuous voice dialogue with Maya (the persistent coach):
//
//   listen  --(silence > 1.5s)-->  thinking
//   thinking --(LLM reply)--->     speaking
//   speaking --(TTS onDone)--->    listen   (if autoStart)
//                                  idle     (otherwise)
//
// Glue between:
//   - lib/speech-recognition.ts  (iOS Speech framework via expo-speech-recognition)
//   - lib/llm-router.ts           (chatComplete — multi-provider fallback)
//   - expo-speech                 (we call it directly here to wire callbacks;
//                                  lib/tts.ts intentionally hides them so the
//                                  rest of the app can stay fire-and-forget)
//
// This module is UI-agnostic: it exposes an event-based API (onStateChange,
// onTurn, onError) so /freechat-voice can wire whichever animations it likes.
//
// Threading model:
//   - All public methods are synchronous (start() returns a Promise just to
//     resolve mic-permission), and the loop is driven by listener callbacks
//     from the native modules. No timers fight each other for ownership of
//     the state — every transition is funnelled through `setState()`.
//
// Lifecycle: createVoiceSession() returns a fresh API instance. Call stop()
// before unmounting or you'll leak a recognition listener.

import * as Speech from "expo-speech";
import {
  isAvailable as isSpeechAvailable,
  startListening,
  stopListening,
} from "./speech-recognition";
import { chatComplete, chatCompleteFast } from "./llm-router";
import type { ChatMessage } from "./llm-types";
import {
  checkUserInput,
  checkMayaOutput,
  getMayaSafeFallback,
  type SafetyCheck,
} from "./safety-filter";

// Cap the in-memory turns array so a long-running session can't grow without
// bound. We keep the most-recent MAX_TURNS entries (drop oldest first).
const MAX_TURNS = 50;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type VoiceSessionState =
  | "idle"
  | "listening"
  | "thinking"
  | "speaking"
  | "error";

export interface VoiceTurnMetrics {
  /** Words per minute for the user turn. Computed only for user turns. */
  wpm?: number;
  /** Number of common English filler words detected ("um", "uh", "like"). */
  fillerCount?: number;
  /** Number of pauses > 1s in the recognised text. Heuristic; not reliable. */
  pauseCount?: number;
}

export interface VoiceTurn {
  role: "user" | "assistant";
  text: string;
  startedAt: string;
  durationMs?: number;
  metrics?: VoiceTurnMetrics;
}

export interface VoiceSessionAPI {
  start(): Promise<void>;
  stop(): void;
  pause(): void;
  resume(): void;
  state(): VoiceSessionState;
  turns(): VoiceTurn[];
  onStateChange(cb: (s: VoiceSessionState) => void): () => void;
  onTurn(cb: (t: VoiceTurn) => void): () => void;
  onError(cb: (e: Error) => void): () => void;
  /**
   * Fires when the safety filter blocks a user input or a Maya draft reply.
   * The host UI must react to `check.shouldEscalate === true` by opening the
   * crisis modal. For non-crisis blocks the session has already injected a
   * safe Turkish redirect turn — the UI only needs to render it.
   */
  onSafetyBlock(cb: (check: SafetyCheck) => void): () => void;
}

export interface VoiceSessionOptions {
  systemPrompt: string;
  userLevel?: string;
  /**
   * If true, after Maya finishes speaking we automatically re-open the mic.
   * If false, the loop returns to "idle" and the caller must call start()
   * (or resume()) again to take the next turn. Default: true.
   */
  autoStart?: boolean;
  /**
   * Silence window before we treat the user as "done speaking". Default 1500ms.
   */
  silenceTimeoutMs?: number;
  /**
   * Hard cap on a single listening window. Default 15000ms.
   */
  maxListenMs?: number;
  /**
   * Max tokens for the LLM reply. Default 200 (voice replies should be short).
   */
  maxTokens?: number;
  /**
   * If true, race all configured providers and use the first 2xx response.
   * Burns more free-tier quota but cuts perceived latency by ~50% when the
   * preferred provider is slow. Reserved for premium users — see /freechat
   * and /freechat-voice for wiring.
   */
  fastMode?: boolean;
}

// ---------------------------------------------------------------------------
// Heuristics — kept inline (and small) so the voice loop stays self-contained.
// ---------------------------------------------------------------------------

// Common English fillers we count for "metrics.fillerCount". Conservative:
// we only flag words that are unambiguously filler in spoken English so we
// don't over-correct second-language learners for legitimate uses of "well".
const FILLER_TOKENS = new Set([
  "um",
  "uh",
  "uhh",
  "umm",
  "er",
  "erm",
  "like", // catches "like, you know" — false positives accepted
  "y'know",
  "yknow",
]);

function computeMetrics(text: string, durationMs: number): VoiceTurnMetrics {
  const cleaned = text.trim();
  if (!cleaned) return {};

  const words = cleaned.split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const minutes = durationMs / 60000;
  const wpm = minutes > 0 ? Math.round(wordCount / minutes) : undefined;

  let fillerCount = 0;
  for (const w of words) {
    const norm = w.toLowerCase().replace(/[^a-z']/g, "");
    if (FILLER_TOKENS.has(norm)) fillerCount += 1;
  }

  // expo-speech-recognition collapses pauses to a single space, so we can't
  // measure real pauses. As a rough proxy we look at sentence-ending
  // punctuation density — every "." or "?" or "..." is treated as a pause.
  const pauseCount = (cleaned.match(/[.?!]+|\.{3,}/g) ?? []).length;

  return { wpm, fillerCount, pauseCount };
}

// ---------------------------------------------------------------------------
// Factory
// ---------------------------------------------------------------------------

export function createVoiceSession(
  opts: VoiceSessionOptions,
): VoiceSessionAPI {
  const autoStart = opts.autoStart !== false; // default true
  const silenceTimeoutMs = opts.silenceTimeoutMs ?? 1500;
  const maxListenMs = opts.maxListenMs ?? 15000;
  const maxTokens = opts.maxTokens ?? 200;
  const fastMode = opts.fastMode === true; // default false — only premium opts in

  // --- mutable state -------------------------------------------------------
  let state: VoiceSessionState = "idle";
  let paused = false;
  let disposed = false;
  const turns: VoiceTurn[] = [];

  // Per-listening-window scratch.
  let currentTranscript = "";
  let listenStartedAt = 0;
  let silenceTimer: ReturnType<typeof setTimeout> | null = null;
  // AbortController is plumbed through async work (LLM call, begin/commit) so
  // stop() can sever any in-flight callback delivery. We re-create it on every
  // start() / beginListening() so a previous abort can't poison the next loop.
  let abortController: AbortController | null = null;

  // Listener registries.
  const stateListeners = new Set<(s: VoiceSessionState) => void>();
  const turnListeners = new Set<(t: VoiceTurn) => void>();
  const errorListeners = new Set<(e: Error) => void>();
  const safetyListeners = new Set<(c: SafetyCheck) => void>();

  // --- helpers -------------------------------------------------------------

  function setState(next: VoiceSessionState): void {
    if (disposed) return;
    if (state === next) return;
    state = next;
    for (const cb of stateListeners) {
      try {
        cb(next);
      } catch {
        // ignore subscriber errors so one bad listener can't break the loop
      }
    }
  }

  function emitTurn(turn: VoiceTurn): void {
    if (disposed) return;
    turns.push(turn);
    // Cap the array so a long voice marathon can't OOM the device. Drop the
    // oldest turn (FIFO). The LLM call further trims history anyway, so
    // dropping the head only affects the on-screen transcript drawer.
    while (turns.length > MAX_TURNS) {
      turns.shift();
    }
    for (const cb of turnListeners) {
      try {
        cb(turn);
      } catch {
        // ignore
      }
    }
  }

  function emitSafety(check: SafetyCheck): void {
    if (disposed) return;
    for (const cb of safetyListeners) {
      try {
        cb(check);
      } catch {
        // ignore subscriber errors so one bad listener can't break the loop
      }
    }
  }

  function emitError(err: Error): void {
    if (disposed) return;
    if (__DEV__) console.warn("[voice-session]", err.message);
    for (const cb of errorListeners) {
      try {
        cb(err);
      } catch {
        // ignore
      }
    }
  }

  function clearSilenceTimer(): void {
    if (silenceTimer) {
      clearTimeout(silenceTimer);
      silenceTimer = null;
    }
  }

  function armSilenceTimer(): void {
    clearSilenceTimer();
    if (disposed) return;
    silenceTimer = setTimeout(() => {
      // Defensive: stop() may have fired between scheduling and execution.
      silenceTimer = null;
      if (disposed) return;
      // User has been silent past the threshold — commit whatever we heard.
      void commitUserTurn();
    }, silenceTimeoutMs);
  }

  // --- core loop steps -----------------------------------------------------

  async function beginListening(): Promise<void> {
    if (disposed || paused) return;

    // Each fresh listen window gets its own AbortController so callbacks from
    // the previous window can no-op cleanly.
    abortController?.abort();
    abortController = new AbortController();
    const signal = abortController.signal;

    const available = await isSpeechAvailable();
    if (disposed || signal.aborted) return;
    if (!available) {
      setState("error");
      emitError(new Error("speech recognition not available on this device"));
      return;
    }

    currentTranscript = "";
    listenStartedAt = Date.now();
    setState("listening");

    await startListening({
      lang: "en-US",
      timeoutMs: maxListenMs,
      signal,
      onResult: (text, isFinal) => {
        if (disposed || signal.aborted) return;
        // The native module sends interim results frequently; we always take
        // the latest because each event already contains the full transcript
        // up to that point.
        if (text && text !== currentTranscript) {
          currentTranscript = text;
          // Every spoken word resets the silence timer.
          armSilenceTimer();
        }
        if (isFinal) {
          clearSilenceTimer();
          void commitUserTurn();
        }
      },
      onError: (err) => {
        if (disposed || signal.aborted) return;
        clearSilenceTimer();
        // "no-speech" type errors are not really errors during a voice loop
        // — they just mean the user said nothing within the listen window.
        // Surface them but recover by going to idle so the UI can prompt
        // the user to try again.
        emitError(err);
        setState("error");
      },
    });

    if (disposed || signal.aborted) return;

    // If the underlying module finished without ever firing onResult, we
    // arm a fallback timer so the loop doesn't stall forever.
    if (state === "listening" && !silenceTimer) {
      armSilenceTimer();
    }
  }

  async function commitUserTurn(): Promise<void> {
    if (disposed) return;
    if (state !== "listening") return; // already transitioned
    clearSilenceTimer();

    // Stop the underlying recogniser before doing anything else — calling
    // stop() is safe even if the engine has already ended on its own.
    try {
      await stopListening();
    } catch {
      // ignore
    }

    if (disposed) return;

    const text = currentTranscript.trim();
    const durationMs = Date.now() - listenStartedAt;

    if (!text) {
      // Empty turn — back to idle, let UI decide whether to retry.
      setState("idle");
      return;
    }

    const userTurn: VoiceTurn = {
      role: "user",
      text,
      startedAt: new Date(listenStartedAt).toISOString(),
      durationMs,
      metrics: computeMetrics(text, durationMs),
    };
    emitTurn(userTurn);

    // --- Safety gate: pre-check on user input -----------------------------
    // Crisis signals and other category-blocks short-circuit BEFORE the LLM
    // call. We still emit the user's turn (so the transcript shows what
    // happened), then surface a deterministic Turkish redirect or escalate
    // to the crisis modal via the safety listener.
    const inputCheck = checkUserInput(text, "tr");
    if (!inputCheck.ok) {
      emitSafety(inputCheck);
      const safe = inputCheck.suggestedResponse_tr ?? getMayaSafeFallback();
      const safeTurn: VoiceTurn = {
        role: "assistant",
        text: safe,
        startedAt: new Date().toISOString(),
      };
      emitTurn(safeTurn);
      // Speak the safe redirect in Turkish so the response is intelligible
      // to the user (Maya normally speaks English).
      speakReply(safe, "tr-TR");
      return;
    }

    setState("thinking");
    void requestReply();
  }

  async function requestReply(): Promise<void> {
    if (disposed) return;

    // Build the chat history from accumulated turns. We prepend the system
    // prompt fresh on every call so memory updates take effect immediately.
    const history: ChatMessage[] = [
      { role: "system", content: opts.systemPrompt },
      ...turns.map((t) => ({
        role: t.role,
        content: t.text,
      })),
    ];

    let reply = "";
    const startedAt = Date.now();
    try {
      // Premium / fastMode races all providers to cut p95 latency by ~50%;
      // free tier uses the sequential path so we don't burn 3x quota per turn.
      const completer = fastMode ? chatCompleteFast : chatComplete;
      reply = (await completer(history, { maxTokens })).trim();
    } catch (err) {
      const e = err instanceof Error ? err : new Error("LLM call failed");
      emitError(e);
      setState("error");
      return;
    }

    if (!reply) {
      emitError(new Error("LLM returned empty reply"));
      setState("error");
      return;
    }
    if (disposed) return;

    // --- Safety gate: post-check on Maya's draft reply --------------------
    // Defence-in-depth: even with the safety preamble in the system prompt,
    // a misbehaving provider could leak unsafe content. We swap the draft
    // for a Turkish safe-fallback if the post-check fails.
    const outputCheck = checkMayaOutput(reply);
    let finalReply = reply;
    let replyLocale: "en-US" | "tr-TR" = "en-US";
    if (!outputCheck.ok) {
      emitSafety(outputCheck);
      finalReply = outputCheck.suggestedResponse_tr ?? getMayaSafeFallback();
      replyLocale = "tr-TR";
    }

    const assistantTurn: VoiceTurn = {
      role: "assistant",
      text: finalReply,
      startedAt: new Date(startedAt).toISOString(),
    };
    emitTurn(assistantTurn);

    speakReply(finalReply, replyLocale);
  }

  function speakReply(text: string, language: "en-US" | "tr-TR" = "en-US"): void {
    if (disposed) return;
    setState("speaking");

    Speech.stop();
    Speech.speak(text, {
      language,
      rate: 0.95,
      pitch: 1.0,
      onDone: () => {
        if (disposed) return;
        // TTS finished cleanly — loop back if autoStart is enabled.
        if (autoStart && !paused) {
          void beginListening();
        } else {
          setState("idle");
        }
      },
      onStopped: () => {
        if (disposed) return;
        // Explicit stop (e.g. user hit "Bitir" or "Duraklat") — settle to idle.
        setState("idle");
      },
      onError: () => {
        if (disposed) return;
        emitError(new Error("TTS playback failed"));
        setState("error");
      },
    });
  }

  // --- public API ----------------------------------------------------------

  async function start(): Promise<void> {
    if (disposed) return;
    paused = false;
    // If we're already mid-flight, don't restart — just resume.
    if (state === "listening" || state === "thinking" || state === "speaking") {
      return;
    }
    await beginListening();
  }

  function stop(): void {
    // CRITICAL: set disposed BEFORE doing any teardown so callbacks fired
    // during stopListening() / Speech.stop() see disposed === true and bail.
    disposed = true;
    paused = true;
    abortController?.abort();
    clearSilenceTimer();
    // Drop all subscribers — after stop(), nothing should hear from us. This
    // also catches the case where a listener was added by a since-unmounted
    // component that forgot to call its returned unsubscribe.
    stateListeners.clear();
    turnListeners.clear();
    errorListeners.clear();
    safetyListeners.clear();
    try {
      void stopListening();
    } catch {
      // ignore
    }
    try {
      Speech.stop();
    } catch {
      // ignore
    }
    // Note: state intentionally not pushed to listeners — we just cleared them.
    state = "idle";
  }

  function pause(): void {
    paused = true;
    abortController?.abort();
    clearSilenceTimer();
    try {
      void stopListening();
    } catch {
      // ignore
    }
    try {
      Speech.stop();
    } catch {
      // ignore
    }
    // Settle to idle — user can hit resume() to come back.
    setState("idle");
  }

  function resume(): void {
    if (disposed) return;
    paused = false;
    void beginListening();
  }

  function onStateChange(cb: (s: VoiceSessionState) => void): () => void {
    stateListeners.add(cb);
    return () => {
      stateListeners.delete(cb);
    };
  }

  function onTurn(cb: (t: VoiceTurn) => void): () => void {
    turnListeners.add(cb);
    return () => {
      turnListeners.delete(cb);
    };
  }

  function onError(cb: (e: Error) => void): () => void {
    errorListeners.add(cb);
    return () => {
      errorListeners.delete(cb);
    };
  }

  function onSafetyBlock(cb: (c: SafetyCheck) => void): () => void {
    safetyListeners.add(cb);
    return () => {
      safetyListeners.delete(cb);
    };
  }

  return {
    start,
    stop,
    pause,
    resume,
    state: () => state,
    turns: () => turns.slice(),
    onStateChange,
    onTurn,
    onError,
    onSafetyBlock,
  };
}
