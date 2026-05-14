// Lafla — Multi-provider LLM router.
//
// Goal: serve the in-app AI conversation feature using FREE tiers across
// several providers. We iterate a static provider order, skipping any
// provider that lacks an API key, and falling through on retryable
// failures (401 / 429 / 5xx). The first provider that returns a 2xx
// response wins and is cached in AsyncStorage so the next call tries it
// first (reduces latency + balances quota use).
//
// Only Groq, Cerebras, and Gemini Flash are fully implemented. The
// remaining adapters are stubs that log "provider X disabled" and return
// null so the caller falls through to the next provider. To enable them,
// supply the env var listed below and replace the stub body — the wire
// formats are documented in docs/LLM_ROUTER.md.
//
// Env vars (all EXPO_PUBLIC_* so they're inlined into the client bundle
// by Expo at build time):
//   EXPO_PUBLIC_GROQ_KEY
//   EXPO_PUBLIC_CEREBRAS_KEY
//   EXPO_PUBLIC_GEMINI_KEY
//   EXPO_PUBLIC_OPENROUTER_KEY        (stub)
//   EXPO_PUBLIC_CLOUDFLARE_KEY        (stub)
//   EXPO_PUBLIC_CLOUDFLARE_ACCOUNT    (stub — required for URL templating)
//
// Public API:
//   chatComplete(messages, opts?)      -> Promise<string>  (sequential, cheap)
//   chatCompleteFast(messages, opts?)  -> Promise<string>  (race all providers, premium)
//   warmupLastProvider()               -> Promise<void>    (boot-time heartbeat)
// chatComplete throws only if every configured provider fails.
//
// Performance: every fetch is wrapped in an 8s timeout (REQUEST_TIMEOUT_MS).
// Providers that returned 401/403 within the last hour, 429 within the last
// 5 min, or 5xx/timeout within the last minute are skipped — that block
// state lives in AsyncStorage so cold-start respects what we learned last
// session. Each call emits a Sentry breadcrumb (defensive import) with
// `provider`, `durationMs`, `success`, and `errorCode` (if any) so we can
// graph provider health from prod.

import AsyncStorage from "@react-native-async-storage/async-storage";
import { captureException } from "./sentry";
import { isObject, parseSafe } from "./json-safe";
import type {
  ChatCompleteOptions,
  ChatMessage,
  ProviderConfig,
} from "./llm-types";

const LAST_PROVIDER_KEY = "lafla.llm.lastProvider";
const PROVIDER_BLOCK_KEY = "lafla.llm.providerBlocks"; // JSON: {name: untilMs}

// Per-request hard cap. Free tiers occasionally hang for tens of seconds
// before erroring; we'd rather abort fast and try the next provider.
const REQUEST_TIMEOUT_MS = 8000;

// Backoff windows (ms) per error category. Tuned so a transient 5xx
// recovers within a minute, but a misconfigured key is skipped for an hour
// so we don't burn time on a guaranteed failure.
const BLOCK_AUTH_MS = 60 * 60 * 1000; // 401/403 -> 1 hour
const BLOCK_RATE_MS = 5 * 60 * 1000; // 429     -> 5 min
const BLOCK_SERVER_MS = 60 * 1000; // 5xx/timeout -> 1 min
// Network errors get no block (we retry immediately on next call).

// Defensive import for Sentry. The sentry module already no-ops when DSN
// is missing, but we wrap addBreadcrumb in our own try/catch so a future
// regression in that file can never break the LLM call path.
let _addBreadcrumb:
  | null
  | ((c: { category: string; message: string; data?: Record<string, unknown> }) => void) = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const sentry = require("./sentry") as {
    addBreadcrumb?: typeof _addBreadcrumb;
  };
  _addBreadcrumb = sentry?.addBreadcrumb ?? null;
} catch {
  _addBreadcrumb = null;
}

function breadcrumb(data: {
  provider: string;
  durationMs: number;
  success: boolean;
  errorCode?: number;
}): void {
  if (!_addBreadcrumb) return;
  try {
    _addBreadcrumb({
      category: "llm-router",
      message: `${data.provider} ${data.success ? "ok" : "fail"} (${data.durationMs}ms)`,
      data: {
        provider: data.provider,
        durationMs: data.durationMs,
        success: data.success,
        errorCode: data.errorCode,
      },
    });
  } catch {
    // breadcrumbs must never throw upward
  }
}

// HTTP status codes that signal "try the next provider".
// 401: bad/expired key (provider misconfigured)
// 403: forbidden (region / model not allowed)
// 429: rate-limited (free tier exhausted)
// 5xx: provider outage
function isFallthroughStatus(status: number): boolean {
  return status === 401 || status === 403 || status === 429 || status >= 500;
}

function blockMsForStatus(status: number): number {
  if (status === 401 || status === 403) return BLOCK_AUTH_MS;
  if (status === 429) return BLOCK_RATE_MS;
  if (status >= 500) return BLOCK_SERVER_MS;
  return 0;
}

// ---------------------------------------------------------------------------
// AbortController-backed fetch with hard timeout.
// All provider adapters MUST call this instead of bare `fetch`.
// ---------------------------------------------------------------------------

class TimeoutError extends Error {
  constructor() {
    super("request timed out");
    this.name = "TimeoutError";
  }
}

async function fetchWithTimeout(
  url: string,
  init: RequestInit,
  ms: number = REQUEST_TIMEOUT_MS,
): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), ms);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } catch (err) {
    // AbortError surfaces as a DOMException on RN; normalise so callers
    // can distinguish "we killed it" from "network really broke".
    if (
      (err as { name?: string })?.name === "AbortError" ||
      controller.signal.aborted
    ) {
      throw new TimeoutError();
    }
    throw err;
  } finally {
    clearTimeout(timeout);
  }
}

// ---------------------------------------------------------------------------
// Provider list. Order = preferred order on a cold start (no cache).
// ---------------------------------------------------------------------------

function getProviders(): ProviderConfig[] {
  const env = (process.env ?? {}) as Record<string, string | undefined>;
  const cfAccount = env.EXPO_PUBLIC_CLOUDFLARE_ACCOUNT ?? "";
  const cfModel = "@cf/meta/llama-3.2-1b-instruct";

  return [
    {
      name: "groq",
      url: "https://api.groq.com/openai/v1/chat/completions",
      model: "llama-3.3-70b-versatile",
      apiKey: env.EXPO_PUBLIC_GROQ_KEY,
      format: "openai",
    },
    {
      name: "cerebras",
      url: "https://api.cerebras.ai/v1/chat/completions",
      model: "llama3.3-70b",
      apiKey: env.EXPO_PUBLIC_CEREBRAS_KEY,
      format: "openai",
    },
    {
      name: "gemini",
      // Gemini's REST API takes the key as a `?key=` query param. We append
      // it lazily inside callGemini so the config row stays declarative.
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
      model: "gemini-1.5-flash",
      apiKey: env.EXPO_PUBLIC_GEMINI_KEY,
      format: "gemini",
    },
    {
      name: "openrouter",
      url: "https://openrouter.ai/api/v1/chat/completions",
      model: "deepseek/deepseek-chat:free",
      apiKey: env.EXPO_PUBLIC_OPENROUTER_KEY,
      format: "openai",
      headers: {
        // OpenRouter requires an HTTP-Referer / X-Title for free routing.
        "HTTP-Referer": "https://lafla.app",
        "X-Title": "Lafla",
      },
    },
    {
      name: "cloudflare",
      url: `https://api.cloudflare.com/client/v4/accounts/${cfAccount}/ai/run/${cfModel}`,
      model: cfModel,
      apiKey: env.EXPO_PUBLIC_CLOUDFLARE_KEY,
      format: "openai",
    },
  ];
}

// ---------------------------------------------------------------------------
// Adapters.
// Each adapter returns:
//   - string  on success
//   - null    on a fallthrough condition (no key, retryable HTTP error, parse fail)
// A thrown error is treated as fatal-for-this-provider but does NOT abort the
// loop — the router catches and continues to the next provider.
//
// Each adapter is also responsible for emitting one breadcrumb per call and
// for recording a block via markProviderBlocked() when it sees a categorised
// failure. The router doesn't re-emit on success because the adapter saw
// the actual durationMs and is best placed to attribute it.
// ---------------------------------------------------------------------------

async function callOpenAICompatible(
  cfg: ProviderConfig,
  messages: ChatMessage[],
  maxTokens: number,
): Promise<string | null> {
  if (!cfg.apiKey) return null;

  const body = {
    model: cfg.model,
    messages,
    max_tokens: maxTokens,
    temperature: 0.7,
    stream: false,
  };

  const t0 = Date.now();
  let res: Response;
  try {
    res = await fetchWithTimeout(cfg.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cfg.apiKey}`,
        ...(cfg.headers ?? {}),
      },
      body: JSON.stringify(body),
    });
  } catch (err) {
    const durationMs = Date.now() - t0;
    if (err instanceof TimeoutError) {
      breadcrumb({ provider: cfg.name, durationMs, success: false, errorCode: 0 });
      void markProviderBlocked(cfg.name, BLOCK_SERVER_MS);
      if (__DEV__) {
        console.warn(`[llm-router] ${cfg.name} timed out after ${durationMs}ms`);
      }
      return null;
    }
    // Genuine network error — no block, but breadcrumb it so we can see it.
    breadcrumb({ provider: cfg.name, durationMs, success: false });
    throw err;
  }

  if (!res.ok) {
    const durationMs = Date.now() - t0;
    breadcrumb({
      provider: cfg.name,
      durationMs,
      success: false,
      errorCode: res.status,
    });
    if (isFallthroughStatus(res.status)) {
      void markProviderBlocked(cfg.name, blockMsForStatus(res.status));
      if (__DEV__) {
        console.warn(`[llm-router] ${cfg.name} returned ${res.status}, falling through`);
      }
      return null;
    }
    // Non-retryable client error (e.g. 400). Surface so we can fix the bug;
    // the router still falls through to the next provider via the outer catch.
    const text = await res.text().catch(() => "");
    throw new Error(`${cfg.name} HTTP ${res.status}: ${text.slice(0, 200)}`);
  }

  // Response-shape validation. JSON parsing itself can throw on a malformed
  // body (e.g. provider returned an HTML error page with the wrong content-
  // type), so we wrap it explicitly rather than relying on the outer catch
  // in `chatComplete`. Catching here also lets us distinguish "shape was
  // wrong" from "network broke" in the breadcrumb stream.
  let json: { choices?: Array<{ message?: { content?: string } }> };
  try {
    json = (await res.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
  } catch (err) {
    const durationMs = Date.now() - t0;
    breadcrumb({ provider: cfg.name, durationMs, success: false });
    if (__DEV__) {
      console.warn(
        `[llm-router] ${cfg.name} response body was not JSON:`,
        err,
      );
    }
    return null;
  }

  const content = json?.choices?.[0]?.message?.content;
  const durationMs = Date.now() - t0;
  if (typeof content !== "string" || content.length === 0) {
    // Differentiate "empty response from provider" (real, e.g. content-
    // filter triggered) from "shape mismatch" (transient bug — provider
    // changed their wire format). We log the SHAPE not the payload — the
    // raw text can contain user-typed Turkish, which we never want in
    // Sentry. The shape summary (which keys exist, choices length, has
    // message, has content) is enough to debug the regression remotely.
    breadcrumb({ provider: cfg.name, durationMs, success: false });
    if (_addBreadcrumb) {
      try {
        _addBreadcrumb({
          category: "llm-router",
          message: `${cfg.name} unexpected response shape`,
          data: {
            provider: cfg.name,
            topLevelKeys: json && typeof json === "object" ? Object.keys(json) : [],
            choicesLength: Array.isArray(json?.choices) ? json.choices.length : -1,
            hasFirstChoice: !!json?.choices?.[0],
            hasMessage: !!json?.choices?.[0]?.message,
            contentType: typeof content,
            contentEmpty: typeof content === "string" && content.length === 0,
          },
        });
      } catch {
        // breadcrumbs never throw upward
      }
    }
    if (__DEV__) console.warn(`[llm-router] ${cfg.name} returned empty content`);
    return null;
  }
  breadcrumb({ provider: cfg.name, durationMs, success: true });
  return content;
}

async function callGemini(
  cfg: ProviderConfig,
  messages: ChatMessage[],
  maxTokens: number,
): Promise<string | null> {
  if (!cfg.apiKey) return null;

  // Gemini's `generateContent` schema:
  //   - No `system` role. Use top-level `systemInstruction`.
  //   - 'assistant' is called 'model'.
  //   - Each turn is `{ role, parts: [{ text }] }`.
  const systemMsgs = messages.filter((m) => m.role === "system");
  const turnMsgs = messages.filter((m) => m.role !== "system");

  const contents = turnMsgs.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  const systemInstruction =
    systemMsgs.length > 0
      ? { parts: [{ text: systemMsgs.map((m) => m.content).join("\n\n") }] }
      : undefined;

  const body: Record<string, unknown> = {
    contents,
    generationConfig: {
      maxOutputTokens: maxTokens,
      temperature: 0.7,
    },
  };
  if (systemInstruction) body.systemInstruction = systemInstruction;

  const url = `${cfg.url}?key=${encodeURIComponent(cfg.apiKey)}`;

  const t0 = Date.now();
  let res: Response;
  try {
    res = await fetchWithTimeout(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(cfg.headers ?? {}),
      },
      body: JSON.stringify(body),
    });
  } catch (err) {
    const durationMs = Date.now() - t0;
    if (err instanceof TimeoutError) {
      breadcrumb({ provider: cfg.name, durationMs, success: false, errorCode: 0 });
      void markProviderBlocked(cfg.name, BLOCK_SERVER_MS);
      if (__DEV__) {
        console.warn(`[llm-router] ${cfg.name} timed out after ${durationMs}ms`);
      }
      return null;
    }
    breadcrumb({ provider: cfg.name, durationMs, success: false });
    throw err;
  }

  if (!res.ok) {
    const durationMs = Date.now() - t0;
    breadcrumb({
      provider: cfg.name,
      durationMs,
      success: false,
      errorCode: res.status,
    });
    if (isFallthroughStatus(res.status)) {
      void markProviderBlocked(cfg.name, blockMsForStatus(res.status));
      if (__DEV__) {
        console.warn(`[llm-router] ${cfg.name} returned ${res.status}, falling through`);
      }
      return null;
    }
    const text = await res.text().catch(() => "");
    throw new Error(`${cfg.name} HTTP ${res.status}: ${text.slice(0, 200)}`);
  }

  // Same defensive parse + shape validation as the OpenAI-compatible path.
  let json: {
    candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
  };
  try {
    json = (await res.json()) as {
      candidates?: Array<{
        content?: { parts?: Array<{ text?: string }> };
      }>;
    };
  } catch (err) {
    const durationMs = Date.now() - t0;
    breadcrumb({ provider: cfg.name, durationMs, success: false });
    if (__DEV__) {
      console.warn(
        `[llm-router] ${cfg.name} response body was not JSON:`,
        err,
      );
    }
    return null;
  }

  const parts = json?.candidates?.[0]?.content?.parts ?? [];
  const text = parts
    .map((p) => (typeof p?.text === "string" ? p.text : ""))
    .join("")
    .trim();
  const durationMs = Date.now() - t0;
  if (text.length === 0) {
    // Log shape (NOT payload — Gemini's content can contain user PII).
    breadcrumb({ provider: cfg.name, durationMs, success: false });
    if (_addBreadcrumb) {
      try {
        _addBreadcrumb({
          category: "llm-router",
          message: `${cfg.name} unexpected response shape`,
          data: {
            provider: cfg.name,
            topLevelKeys: json && typeof json === "object" ? Object.keys(json) : [],
            candidatesLength: Array.isArray(json?.candidates) ? json.candidates.length : -1,
            hasFirstCandidate: !!json?.candidates?.[0],
            hasContent: !!json?.candidates?.[0]?.content,
            partsLength: Array.isArray(parts) ? parts.length : -1,
          },
        });
      } catch {
        // breadcrumbs never throw upward
      }
    }
    if (__DEV__) console.warn(`[llm-router] ${cfg.name} returned empty content`);
    return null;
  }
  breadcrumb({ provider: cfg.name, durationMs, success: true });
  return text;
}

// Stub adapters — kept as named functions so future implementers see
// exactly where to add wire-format code. Each one short-circuits to null.
async function callOpenRouterStub(cfg: ProviderConfig): Promise<string | null> {
  if (!cfg.apiKey) return null;
  if (__DEV__) console.info(`[llm-router] provider ${cfg.name} disabled (stub)`);
  return null;
}

async function callCloudflareStub(cfg: ProviderConfig): Promise<string | null> {
  if (!cfg.apiKey) return null;
  if (__DEV__) console.info(`[llm-router] provider ${cfg.name} disabled (stub)`);
  return null;
}

// Dispatch table: provider.name -> adapter. Keeps `chatComplete` tidy.
async function dispatch(
  cfg: ProviderConfig,
  messages: ChatMessage[],
  maxTokens: number,
): Promise<string | null> {
  switch (cfg.name) {
    case "groq":
    case "cerebras":
      return callOpenAICompatible(cfg, messages, maxTokens);
    case "gemini":
      return callGemini(cfg, messages, maxTokens);
    case "openrouter":
      return callOpenRouterStub(cfg);
    case "cloudflare":
      return callCloudflareStub(cfg);
    default:
      // Unknown provider name — try OpenAI-compatible as a safe default
      // since most third-party hosts adopt that schema.
      return callOpenAICompatible(cfg, messages, maxTokens);
  }
}

// ---------------------------------------------------------------------------
// AsyncStorage cache for the last-working provider.
// Best-effort: storage errors are swallowed (logged in __DEV__).
// ---------------------------------------------------------------------------

async function readLastProvider(): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(LAST_PROVIDER_KEY);
  } catch (err) {
    if (__DEV__) console.warn("[llm-router] AsyncStorage read failed", err);
    return null;
  }
}

async function writeLastProvider(name: string): Promise<void> {
  try {
    await AsyncStorage.setItem(LAST_PROVIDER_KEY, name);
  } catch (err) {
    if (__DEV__) console.warn("[llm-router] AsyncStorage write failed", err);
  }
}

async function clearLastProvider(): Promise<void> {
  try {
    await AsyncStorage.removeItem(LAST_PROVIDER_KEY);
  } catch (err) {
    if (__DEV__) console.warn("[llm-router] AsyncStorage clear failed", err);
  }
}

// ---------------------------------------------------------------------------
// AsyncStorage cache for "this provider is dead, don't try it for N ms".
// Shape: { [providerName]: unixMillisUntilUnblocked }
// We re-read on every chatComplete() call so a blocked provider unblocks
// itself naturally without us having to manage timers in-process.
// ---------------------------------------------------------------------------

async function readBlocks(): Promise<Record<string, number>> {
  try {
    const raw = await AsyncStorage.getItem(PROVIDER_BLOCK_KEY);
    const parsed = parseSafe<Record<string, unknown>>(raw, {}, isObject, {
      source: "llm-router.readBlocks",
    });
    const out: Record<string, number> = {};
    for (const [k, v] of Object.entries(parsed)) {
      if (typeof v === "number" && Number.isFinite(v)) out[k] = v;
    }
    return out;
  } catch (err) {
    if (__DEV__) console.warn("[llm-router] block-cache read failed", err);
    return {};
  }
}

async function writeBlocks(blocks: Record<string, number>): Promise<void> {
  try {
    // Prune already-expired entries before persisting so the blob doesn't
    // grow unbounded with stale entries.
    const now = Date.now();
    const pruned: Record<string, number> = {};
    for (const [k, v] of Object.entries(blocks)) {
      if (v > now) pruned[k] = v;
    }
    await AsyncStorage.setItem(PROVIDER_BLOCK_KEY, JSON.stringify(pruned));
  } catch (err) {
    if (__DEV__) console.warn("[llm-router] block-cache write failed", err);
  }
}

async function markProviderBlocked(name: string, ms: number): Promise<void> {
  if (ms <= 0) return;
  const blocks = await readBlocks();
  blocks[name] = Date.now() + ms;
  await writeBlocks(blocks);
}

function isBlocked(name: string, blocks: Record<string, number>): boolean {
  const until = blocks[name];
  return typeof until === "number" && until > Date.now();
}

/**
 * Reorder providers so that `preferred` is tried first. Pure function;
 * does not mutate the input array.
 */
function orderProviders(
  providers: ProviderConfig[],
  preferred: string | null,
): ProviderConfig[] {
  if (!preferred) return providers;
  const head = providers.filter((p) => p.name === preferred);
  const tail = providers.filter((p) => p.name !== preferred);
  return [...head, ...tail];
}

// ---------------------------------------------------------------------------
// Public entry point — sequential fallthrough.
// Cheap path: most calls hit the cached `lastProvider` first and return
// after one network round trip.
// ---------------------------------------------------------------------------

export async function chatComplete(
  messages: ChatMessage[],
  opts?: ChatCompleteOptions,
): Promise<string> {
  const maxTokens = opts?.maxTokens ?? 512;

  // Materialise the final message list. `opts.system` is a convenience
  // shorthand that prepends a system turn — useful for callers that don't
  // want to build the array themselves.
  const finalMessages: ChatMessage[] = opts?.system
    ? [{ role: "system", content: opts.system }, ...messages]
    : messages;

  const all = getProviders();
  const [last, blocks] = await Promise.all([readLastProvider(), readBlocks()]);
  const ordered = orderProviders(all, last);

  const errors: string[] = [];

  for (const cfg of ordered) {
    if (!cfg.apiKey) {
      // Silent skip — expected when a free key hasn't been provisioned.
      continue;
    }
    if (isBlocked(cfg.name, blocks)) {
      // Cooling off after a previous failure. Skip silently; the block
      // expires on its own via the timestamp comparison.
      errors.push(`${cfg.name}: blocked (cooling off)`);
      continue;
    }
    try {
      const result = await dispatch(cfg, finalMessages, maxTokens);
      if (result !== null) {
        // Fire and forget — don't block the caller on storage.
        void writeLastProvider(cfg.name);
        return result;
      }
      errors.push(`${cfg.name}: fallthrough`);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      if (__DEV__) console.warn(`[llm-router] ${cfg.name} threw:`, msg);
      errors.push(`${cfg.name}: ${msg}`);
      // Report per-provider exception with tag so we can spot one provider
      // that's failing for everyone vs. a single-user network blip.
      captureException(err, { provider: cfg.name, source: "llm-router" });
      // Continue to the next provider.
    }
  }

  const finalErr = new Error(
    `All LLM providers failed or unavailable. Tried: ${errors.length > 0 ? errors.join("; ") : "none (no keys configured)"}`,
  );
  // Emit a single aggregate event so a global outage shows as one alert
  // instead of one event per provider per user.
  captureException(finalErr, { source: "llm-router", attempts: errors });
  throw finalErr;
}

// ---------------------------------------------------------------------------
// Public entry point — concurrent race.
// For premium users where we'd rather burn 3x the quota than make them wait
// for a slow provider. Returns the first 2xx response, cancels nothing
// (cancellation would require provider-side AbortController plumbing that
// we don't have today; the unused responses are simply ignored).
//
// Falls back to sequential if no providers are eligible (e.g. all blocked).
// ---------------------------------------------------------------------------

export async function chatCompleteFast(
  messages: ChatMessage[],
  opts?: ChatCompleteOptions,
): Promise<string> {
  const maxTokens = opts?.maxTokens ?? 512;
  const finalMessages: ChatMessage[] = opts?.system
    ? [{ role: "system", content: opts.system }, ...messages]
    : messages;

  const all = getProviders();
  const blocks = await readBlocks();
  const eligible = all.filter(
    (p) => !!p.apiKey && !isBlocked(p.name, blocks),
  );

  if (eligible.length === 0) {
    // Nothing to race — fall back to sequential (which will surface a
    // proper aggregate error if every provider really is unavailable).
    return chatComplete(messages, opts);
  }

  if (eligible.length === 1) {
    // Single provider — racing is a waste; just dispatch directly.
    const only = eligible[0]!;
    const result = await dispatch(only, finalMessages, maxTokens);
    if (result !== null) {
      void writeLastProvider(only.name);
      return result;
    }
    // Single provider failed → fall through to the proper error path.
    return chatComplete(messages, opts);
  }

  // Race: each promise resolves to the result string on success, rejects
  // otherwise. `Promise.any` resolves with the first fulfilled value and
  // ignores rejections — exactly the "first 2xx wins" semantic.
  const racers = eligible.map(async (cfg) => {
    const result = await dispatch(cfg, finalMessages, maxTokens);
    if (result === null) {
      throw new Error(`${cfg.name}: fallthrough`);
    }
    // Record the winner async so the next call prefers it. If a slower
    // provider would have won had we waited, we still bias toward the
    // fastest one, which is the point.
    void writeLastProvider(cfg.name);
    return result;
  });

  try {
    return await Promise.any(racers);
  } catch (err) {
    // All racers rejected. Surface as a normal "all providers failed"
    // error so consumers can show the same UI as the sequential path.
    const aggregateErr = new Error(
      `All LLM providers failed (raced ${eligible.length}). ${
        err instanceof Error ? err.message : ""
      }`,
    );
    captureException(aggregateErr, {
      source: "llm-router",
      raced: eligible.map((p) => p.name),
    });
    throw aggregateErr;
  }
}

// ---------------------------------------------------------------------------
// Boot-time heartbeat. Fire-and-forget from app/_layout.tsx.
//
// Cold-start UX problem: the very first chatComplete after launch routes
// to whatever was lastProvider, which might be stale (e.g. yesterday's
// pick is now rate-limited). We send a 1-token ping right at app boot.
// If it succeeds, the connection is already warm by the time the user
// taps a chat screen. If it fails, we clear the cache so the next call
// starts at the canonical Groq-first order.
// ---------------------------------------------------------------------------

export async function warmupLastProvider(): Promise<void> {
  let last: string | null;
  try {
    last = await readLastProvider();
  } catch {
    return;
  }
  if (!last) return; // nothing to warm

  const cfg = getProviders().find((p) => p.name === last);
  if (!cfg || !cfg.apiKey) {
    // Cached provider no longer configured — clear so cold start can
    // re-discover a working one.
    void clearLastProvider();
    return;
  }

  const blocks = await readBlocks();
  if (isBlocked(cfg.name, blocks)) {
    // It's already known-bad; don't even ping. The block will expire on
    // its own and the next real call will try the next provider.
    return;
  }

  try {
    const result = await dispatch(
      cfg,
      [{ role: "user", content: "hi" }],
      1,
    );
    if (result === null) {
      // Adapter returned null — treat as "not warm anymore"; let cold
      // start re-discover from the canonical order.
      void clearLastProvider();
    }
    // On success we deliberately leave lastProvider untouched (it's
    // already correct) and rely on the adapter's own breadcrumb.
  } catch (err) {
    if (__DEV__) console.warn("[llm-router] warmup failed", err);
    void clearLastProvider();
  }
}
