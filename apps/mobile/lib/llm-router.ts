import AsyncStorage from "@react-native-async-storage/async-storage";
import { supabase } from "./supabase";
import { buildCoachSystemPrompt } from "./coach";
import { FREE_CHAT_PROMPTS } from "../data/free-chat-prompts";

export const LLM_REQUEST_TIMEOUT_MS = 15_000;

export async function withTimeout<T>(
  promise: Promise<T>,
  timeoutMs = LLM_REQUEST_TIMEOUT_MS,
): Promise<T> {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  try {
    return await Promise.race([
      promise,
      new Promise<never>((_, reject) => {
        timeoutId = setTimeout(
          () => reject(new Error("AI response timed out")),
          timeoutMs,
        );
      }),
    ]);
  } finally {
    if (timeoutId) clearTimeout(timeoutId);
  }
}

export interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface ChatOptions {
  system?: string;
  maxTokens?: number;
  temperature?: number;
  promptId?: string;
}

export interface ChatCompletionResult {
  text: string;
  currentTurns?: number;
  limit?: number;
}

interface Provider {
  name: string;
  format: "openai" | "gemini";
  endpoint: string;
  model: string;
  apiKey: string | undefined;
  extraHeaders?: Record<string, string>;
}

const K_LAST_PROVIDER = "lafla.llm.lastProvider";

/**
 * Gets configured LLM providers in priority order.
 */
function getProviders(): Provider[] {
  return [
    {
      name: "groq",
      format: "openai",
      endpoint: "https://api.groq.com/openai/v1/chat/completions",
      model: "llama-3.3-70b-versatile",
      apiKey: process.env.EXPO_PUBLIC_GROQ_KEY,
    },
    {
      name: "cerebras",
      format: "openai",
      endpoint: "https://api.cerebras.ai/v1/chat/completions",
      model: "llama3.3-70b",
      apiKey: process.env.EXPO_PUBLIC_CEREBRAS_KEY,
    },
    {
      name: "gemini",
      format: "gemini",
      endpoint:
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      model: "gemini-2.5-flash",
      apiKey: process.env.EXPO_PUBLIC_GEMINI_KEY,
    },
    {
      name: "openrouter",
      format: "openai",
      endpoint: "https://openrouter.ai/api/v1/chat/completions",
      model: "openrouter/free",
      apiKey: process.env.EXPO_PUBLIC_OPENROUTER_KEY,
      extraHeaders: {
        "HTTP-Referer": "https://lafla.app",
        "X-Title": "Lafla App",
      },
    },
    {
      name: "cloudflare",
      format: "openai",
      endpoint: `https://api.cloudflare.com/client/v4/accounts/${process.env.EXPO_PUBLIC_CLOUDFLARE_ACCOUNT}/ai/run/@cf/meta/llama-3.2-1b-instruct`,
      model: "@cf/meta/llama-3.2-1b-instruct",
      apiKey: process.env.EXPO_PUBLIC_CLOUDFLARE_KEY,
    },
  ];
}

/**
 * Sends a chat completion request to an OpenAI-compatible provider.
 */
async function callOpenAICompatible(
  provider: Provider,
  messages: Message[],
  options: ChatOptions,
): Promise<string | null> {
  if (!provider.apiKey) return null;

  const requestMessages = [...messages];
  if (options.system) {
    requestMessages.unshift({ role: "system", content: options.system });
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${provider.apiKey}`,
    ...provider.extraHeaders,
  };

  // Cloudflare uses Bearer token, but endpoint is specific and does not take model in json
  const body =
    provider.name === "cloudflare"
      ? {
          messages: requestMessages,
          max_tokens: options.maxTokens ?? 256,
          temperature: options.temperature ?? 0.7,
        }
      : {
          model: provider.model,
          messages: requestMessages,
          max_tokens: options.maxTokens ?? 256,
          temperature: options.temperature ?? 0.7,
        };

  try {
    const response = await fetch(provider.endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      if (__DEV__) {
        // eslint-disable-next-line no-console
        console.warn(
          `[LLM Router] ${provider.name} failed with status: ${response.status}`,
        );
      }
      return null; // Fallthrough
    }

    const data = await response.json();
    return (
      data.choices?.[0]?.message?.content?.trim() ||
      data.result?.response?.trim() ||
      null
    );
  } catch (e) {
    if (__DEV__) {
      // eslint-disable-next-line no-console
      console.warn(`[LLM Router] Error calling ${provider.name}:`, e);
    }
    return null; // Fallthrough
  }
}

/**
 * Sends a chat completion request to Google Gemini API.
 */
async function callGemini(
  provider: Provider,
  messages: Message[],
  options: ChatOptions,
): Promise<string | null> {
  if (!provider.apiKey) return null;

  // Map roles to Gemini roles ('user' or 'model')
  const contents = messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  const url = `${provider.endpoint}?key=${provider.apiKey}`;

  const body: Record<string, any> = {
    contents,
    generationConfig: {
      maxOutputTokens: options.maxTokens ?? 256,
      temperature: options.temperature ?? 0.7,
    },
  };

  if (options.system) {
    body.systemInstruction = {
      parts: [{ text: options.system }],
    };
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      if (__DEV__) {
        // eslint-disable-next-line no-console
        console.warn(
          `[LLM Router] Gemini failed with status: ${response.status}`,
        );
      }
      return null; // Fallthrough
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || null;
  } catch (e) {
    if (__DEV__) {
      // eslint-disable-next-line no-console
      console.warn("[LLM Router] Error calling Gemini:", e);
    }
    return null; // Fallthrough
  }
}

/**
 * Main completion router. Tries the last successful provider first,
 * then iterates all configured providers.
 */
export async function chatCompleteDetailed(
  messages: Message[],
  options: ChatOptions = {},
): Promise<ChatCompletionResult> {
  const providers = getProviders();

  // Always use the secure Edge Function proxy in production/release builds.
  // Direct client-side calls are only allowed in development (__DEV__ is true) AND when local keys are present.
  const isDevMode = typeof __DEV__ !== "undefined" && __DEV__;
  const hasLocalKeys = providers.some((p) => p.apiKey);

  if (!isDevMode || !hasLocalKeys) {
    try {
      const { data, error } = await withTimeout(
        supabase.functions.invoke("llm-chat", {
          body: { messages, promptId: options.promptId || "" },
        }),
      );
      if (error) {
        throw new Error(`Edge function error: ${error.message}`);
      }
      if (data && data.text) {
        return {
          text: data.text as string,
          currentTurns:
            typeof data.currentTurns === "number"
              ? data.currentTurns
              : undefined,
          limit: typeof data.limit === "number" ? data.limit : undefined,
        };
      }
      throw new Error("Edge function returned empty response");
    } catch (e) {
      if (__DEV__) {
        // eslint-disable-next-line no-console
        console.error("[LLM Router] Failed to call Edge Function proxy:", e);
      }
      throw e;
    }
  }

  // Local path: use local keys and construct system prompt from promptId if not already present
  const localOptions = { ...options };
  if (!localOptions.system && options.promptId) {
    const p = FREE_CHAT_PROMPTS.find((x) => x.id === options.promptId);
    if (p) {
      localOptions.system = buildCoachSystemPrompt(p.npc_opener);
    }
  }

  // Sort providers based on last successful one cached
  let sortedProviders = [...providers];
  try {
    const lastProviderName = await AsyncStorage.getItem(K_LAST_PROVIDER);
    if (lastProviderName) {
      const idx = sortedProviders.findIndex((p) => p.name === lastProviderName);
      if (idx > 0) {
        const [last] = sortedProviders.splice(idx, 1);
        sortedProviders.unshift(last);
      }
    }
  } catch {
    // ignore storage read failures
  }

  for (const provider of sortedProviders) {
    if (!provider.apiKey) {
      continue;
    }

    let responseText: string | null = null;
    if (provider.format === "openai") {
      responseText = await callOpenAICompatible(
        provider,
        messages,
        localOptions,
      );
    } else if (provider.format === "gemini") {
      responseText = await callGemini(provider, messages, localOptions);
    }

    if (responseText) {
      // Cache successful provider name
      try {
        await AsyncStorage.setItem(K_LAST_PROVIDER, provider.name);
      } catch {
        // ignore storage write failures
      }
      return { text: responseText };
    }
  }

  throw new Error(
    "All configured LLM providers failed or no API keys are present.",
  );
}

export async function chatComplete(
  messages: Message[],
  options: ChatOptions = {},
): Promise<string> {
  return (await chatCompleteDetailed(messages, options)).text;
}
