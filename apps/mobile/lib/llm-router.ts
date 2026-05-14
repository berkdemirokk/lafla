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
//   chatComplete(messages, opts?) -> Promise<string>
// Throws only if every configured provider fails.

import AsyncStorage from "@react-native-async-storage/async-storage";
import type {
  ChatCompleteOptions,
  ChatMessage,
  ProviderConfig,
} from "./llm-types";

const LAST_PROVIDER_KEY = "lafla.llm.lastProvider";

// HTTP status codes that signal "try the next provider".
// 401: bad/expired key (provider misconfigured)
// 403: forbidden (region / model not allowed)
// 429: rate-limited (free tier exhausted)
// 5xx: provider outage
function isFallthroughStatus(status: number): boolean {
  return status === 401 || status === 403 || status === 429 || status >= 500;
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

  const res = await fetch(cfg.url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cfg.apiKey}`,
      ...(cfg.headers ?? {}),
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    if (isFallthroughStatus(res.status)) {
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

  const json = (await res.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  const content = json?.choices?.[0]?.message?.content;
  if (typeof content !== "string" || content.length === 0) {
    if (__DEV__) console.warn(`[llm-router] ${cfg.name} returned empty content`);
    return null;
  }
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
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(cfg.headers ?? {}),
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    if (isFallthroughStatus(res.status)) {
      if (__DEV__) {
        console.warn(`[llm-router] ${cfg.name} returned ${res.status}, falling through`);
      }
      return null;
    }
    const text = await res.text().catch(() => "");
    throw new Error(`${cfg.name} HTTP ${res.status}: ${text.slice(0, 200)}`);
  }

  const json = (await res.json()) as {
    candidates?: Array<{
      content?: { parts?: Array<{ text?: string }> };
    }>;
  };
  const parts = json?.candidates?.[0]?.content?.parts ?? [];
  const text = parts
    .map((p) => (typeof p?.text === "string" ? p.text : ""))
    .join("")
    .trim();
  if (text.length === 0) {
    if (__DEV__) console.warn(`[llm-router] ${cfg.name} returned empty content`);
    return null;
  }
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
// Public entry point.
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
  const last = await readLastProvider();
  const ordered = orderProviders(all, last);

  const errors: string[] = [];

  for (const cfg of ordered) {
    if (!cfg.apiKey) {
      // Silent skip — expected when a free key hasn't been provisioned.
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
      // Continue to the next provider.
    }
  }

  throw new Error(
    `All LLM providers failed or unavailable. Tried: ${errors.length > 0 ? errors.join("; ") : "none (no keys configured)"}`,
  );
}
