import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { checkMayaOutput, checkUserInput } from "./safety.ts";
import { FREE_CHAT_OPENERS } from "./prompts.ts";
import { Message, validatePayload } from "./validation.ts";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface Provider {
  name: string;
  format: "openai" | "gemini";
  endpoint: string;
  model: string;
  apiKey: string | undefined;
  extraHeaders?: Record<string, string>;
}

const SAFETY_PREAMBLE = `[AI SAFETY GUARDRAIL ACTIVE]
1. Decline NSFW, sexual, violent, illegal, or self-harm requests and redirect the user to English practice.
2. Do not provide personalized medical, legal, or financial advice; recommend qualified professional help.
3. Do not reproduce copyrighted song lyrics, scripts, or other long copyrighted passages.
4. For crisis signals, respond empathetically and direct users in Turkey to 112 or AMATEM 444 0 776.
5. Stay within the English-coaching context.`;

function buildCoachSystemPrompt(opener: string): string {
  return `${SAFETY_PREAMBLE}

You are roleplaying a conversation scenario. The scenario opener was: "${opener}".
Play your role as a helpful and friendly native English speaker.
Respond in short, conversational English (strictly 1 to 2 sentences maximum) suitable for language learners.
Do not write Turkish translations. Respond in English only.`;
}

function buildAllowedSystemPrompt(promptId: string, opener: string): string {
  if (promptId === "tool.emergency") {
    return `${SAFETY_PREAMBLE}

You are an expert English coach for adult Turkish speakers. Convert the user's
real-life Turkish intent into exactly three natural English messages: formal,
neutral, and friendly. Preserve meaning; do not add facts, names, dates, or
promises. Return JSON only, with this exact shape:
{"formal":"...","neutral":"...","friendly":"..."}`;
  }
  if (promptId === "tool.custom-scenario") {
    return `${SAFETY_PREAMBLE}

Create a realistic, adult, two-turn English roleplay practice from the user's
Turkish situation, pasted message, or meeting topic. Keep every English line
short and natural. Return JSON only with this exact shape:
{"titleTr":"...","descriptionTr":"...","npcRole":"...","settingTr":"...","turns":[{"speaker":"npc","message":"..."},{"speaker":"user","modelAnswers":["..."],"hintTr":"..."},{"speaker":"npc","message":"..."},{"speaker":"user","modelAnswers":["..."],"hintTr":"..."},{"speaker":"npc","message":"..."}]}
Do not include markdown. The final NPC line must be a closing acknowledgement,
not a question.`;
  }
  return buildCoachSystemPrompt(opener);
}

function getProviders(): Provider[] {
  return [
    {
      name: "groq",
      format: "openai",
      endpoint: "https://api.groq.com/openai/v1/chat/completions",
      model: "llama-3.3-70b-versatile",
      apiKey: Deno.env.get("GROQ_KEY") || Deno.env.get("EXPO_PUBLIC_GROQ_KEY"),
    },
    {
      name: "cerebras",
      format: "openai",
      endpoint: "https://api.cerebras.ai/v1/chat/completions",
      model: "llama3.3-70b",
      apiKey: Deno.env.get("CEREBRAS_KEY") ||
        Deno.env.get("EXPO_PUBLIC_CEREBRAS_KEY"),
    },
    {
      name: "gemini",
      format: "gemini",
      endpoint:
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      model: "gemini-2.5-flash",
      apiKey: Deno.env.get("GEMINI_KEY") ||
        Deno.env.get("EXPO_PUBLIC_GEMINI_KEY"),
    },
    {
      name: "openrouter",
      format: "openai",
      endpoint: "https://openrouter.ai/api/v1/chat/completions",
      model: "openrouter/free",
      apiKey: Deno.env.get("OPENROUTER_KEY") ||
        Deno.env.get("EXPO_PUBLIC_OPENROUTER_KEY"),
      extraHeaders: {
        "HTTP-Referer": "https://lafla.app",
        "X-Title": "Lafla App",
      },
    },
    {
      name: "cloudflare",
      format: "openai",
      endpoint: `https://api.cloudflare.com/client/v4/accounts/${
        Deno.env.get("CLOUDFLARE_ACCOUNT") ||
        Deno.env.get("EXPO_PUBLIC_CLOUDFLARE_ACCOUNT")
      }/ai/run/@cf/meta/llama-3.2-1b-instruct`,
      model: "@cf/meta/llama-3.2-1b-instruct",
      apiKey: Deno.env.get("CLOUDFLARE_KEY") ||
        Deno.env.get("EXPO_PUBLIC_CLOUDFLARE_KEY"),
    },
  ];
}

async function callOpenAICompatible(
  provider: Provider,
  messages: Message[],
  systemPrompt: string,
): Promise<string | null> {
  if (!provider.apiKey) return null;

  const requestMessages = [...messages];
  if (systemPrompt) {
    requestMessages.unshift({ role: "system", content: systemPrompt });
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${provider.apiKey}`,
    ...provider.extraHeaders,
  };

  const isCloudflare = provider.name === "cloudflare";
  const body = isCloudflare
    ? { messages: requestMessages, max_tokens: 128, temperature: 0.7 }
    : {
      model: provider.model,
      messages: requestMessages,
      max_tokens: 128,
      temperature: 0.7,
    };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3500); // 3.5s timeout per provider

  try {
    const response = await fetch(provider.endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    if (!response.ok) {
      console.warn(
        `[llm-chat] ${provider.name} failed with status: ${response.status}`,
      );
      return null;
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content?.trim() ||
      data.result?.response?.trim() || null;
  } catch (e) {
    if ((e as Error).name === "AbortError") {
      console.warn(`[llm-chat] ${provider.name} request timed out`);
    } else {
      console.warn(`[llm-chat] Error calling ${provider.name}:`, e);
    }
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}

async function callGemini(
  provider: Provider,
  messages: Message[],
  systemPrompt: string,
): Promise<string | null> {
  if (!provider.apiKey) return null;

  const contents = messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  const url = `${provider.endpoint}?key=${provider.apiKey}`;

  const body: Record<string, any> = {
    contents,
    generationConfig: {
      maxOutputTokens: 128,
      temperature: 0.7,
    },
  };

  if (systemPrompt) {
    body.systemInstruction = {
      parts: [{ text: systemPrompt }],
    };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3500); // 3.5s timeout per provider

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    if (!response.ok) {
      console.warn(`[llm-chat] Gemini failed with status: ${response.status}`);
      return null;
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || null;
  } catch (e) {
    if ((e as Error).name === "AbortError") {
      console.warn(`[llm-chat] Gemini request timed out`);
    } else {
      console.warn("[llm-chat] Error calling Gemini:", e);
    }
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}

async function callProvider(
  provider: Provider,
  messages: Message[],
  systemPrompt: string,
): Promise<string | null> {
  return provider.format === "gemini"
    ? callGemini(provider, messages, systemPrompt)
    : callOpenAICompatible(provider, messages, systemPrompt);
}

export async function handleLlmChat(req: Request): Promise<Response> {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: CORS_HEADERS });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "method_not_allowed" }), {
      status: 405,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }

  const authHeader = req.headers.get("Authorization") ?? "";
  if (!authHeader.startsWith("Bearer ")) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }

  const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
  const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY")!;
  const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !SUPABASE_SERVICE_ROLE_KEY) {
    return new Response(
      JSON.stringify({ error: "server_misconfigured" }),
      {
        status: 500,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      },
    );
  }

  // Setup authenticated user client
  const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: { headers: { Authorization: authHeader } },
  });
  const { data: { user }, error: userErr } = await supabaseClient.auth
    .getUser();
  if (userErr || !user) {
    return new Response(
      JSON.stringify({ error: "unauthorized" }),
      {
        status: 401,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      },
    );
  }

  // Setup service role client
  const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  let reservationId: string | null = null;

  try {
    const body = await req.json() as {
      messages?: unknown;
      promptId?: unknown;
    };
    const { messages, promptId } = body;

    // 1. Validate Payload Schema & Length
    const validation = validatePayload(messages, promptId);
    if (!validation.ok) {
      return new Response(JSON.stringify({ error: validation.error }), {
        status: 400,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      });
    }

    const validatedMessages = messages as Message[];
    const validatedPromptId = promptId as string;

    // 2. Enforce User Input Safety Check on ALL user inputs in the history
    for (const m of validatedMessages) {
      if (m.role === "user") {
        const inputSafety = checkUserInput(m.content);
        if (!inputSafety.ok) {
          return new Response(
            JSON.stringify({ error: "safety_blocked", safety: inputSafety }),
            {
              status: 400,
              headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
            },
          );
        }
      }
    }

    // 3. Quota Reservation (runs check_and_increment_usage internally inside reserve_usage RPC)
    const { data: reservationRes, error: rpcErr } = await supabaseClient.rpc(
      "reserve_usage",
    );

    if (rpcErr) {
      console.error("[llm-chat] reserve_usage RPC failed:", rpcErr);
      return new Response(JSON.stringify({ error: rpcErr.message }), {
        status: 500,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      });
    }

    if (!reservationRes?.allowed) {
      const reason = reservationRes?.reason || "rate_limit_exceeded";
      const status = reason === "paywall_limit_reached" ? 402 : 429;
      return new Response(JSON.stringify({ error: reason }), {
        status,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      });
    }

    reservationId = reservationRes.reservation_id;

    // 4. Construct System Prompt from Allowlist
    const opener = FREE_CHAT_OPENERS[validatedPromptId];
    const systemPrompt = buildAllowedSystemPrompt(validatedPromptId, opener);
    const providers = getProviders();
    const providerMessages = validatedMessages.filter(
      (message) => message.role === "user",
    );

    for (const provider of providers) {
      if (!provider.apiKey) {
        continue;
      }

      const responseText = await callProvider(
        provider,
        providerMessages,
        systemPrompt,
      );

      if (responseText) {
        // 5. Enforce Model Output Safety check
        const outputSafety = checkMayaOutput(
          validatedPromptId === "tool.custom-scenario"
            ? `roleplay practice ${responseText}`
            : responseText,
        );
        if (!outputSafety.ok) {
          // Release reserved quota on safety breach
          const { error: releaseError } = await supabaseAdmin.rpc(
            "release_usage",
            { p_reservation_id: reservationId },
          );
          if (releaseError) {
            console.error(
              "[llm-chat] Failed to release blocked output reservation:",
              releaseError,
            );
          }
          reservationId = null;

          return new Response(
            JSON.stringify({ error: "safety_blocked", safety: outputSafety }),
            {
              status: 400,
              headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
            },
          );
        }

        // Finalize reserved quota on success
        const { data: finalized, error: finalizeError } = await supabaseAdmin
          .rpc("finalize_usage", {
            p_reservation_id: reservationId,
          });
        if (finalizeError || finalized !== true) {
          console.error(
            "[llm-chat] Failed to finalize reservation:",
            finalizeError,
          );
          await supabaseAdmin.rpc("release_usage", {
            p_reservation_id: reservationId,
          });
          reservationId = null;
          return new Response(
            JSON.stringify({ error: "usage_finalize_failed" }),
            {
              status: 500,
              headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
            },
          );
        }
        reservationId = null;

        return new Response(
          JSON.stringify({
            text: responseText,
            provider: provider.name,
            currentTurns: reservationRes.current_turns,
            limit: reservationRes.limit,
          }),
          {
            status: 200,
            headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
          },
        );
      }
    }

    // Release reserved quota on general provider failures
    const { error: releaseError } = await supabaseAdmin.rpc(
      "release_usage",
      { p_reservation_id: reservationId },
    );
    if (releaseError) {
      console.error(
        "[llm-chat] Failed to release provider-failure reservation:",
        releaseError,
      );
    }
    reservationId = null;

    return new Response(
      JSON.stringify({
        error:
          "All configured LLM providers failed or no API keys are present.",
      }),
      {
        status: 502,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      },
    );
  } catch (e) {
    console.error("[llm-chat] Exception during chat execution:", e);
    if (reservationId) {
      const { error: releaseError } = await supabaseAdmin.rpc(
        "release_usage",
        { p_reservation_id: reservationId },
      );
      if (releaseError) {
        console.error(
          "[llm-chat] Failed to release reservation after exception:",
          releaseError,
        );
      }
    }
    return new Response(
      JSON.stringify({ error: "internal_error" }),
      {
        status: 500,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      },
    );
  }
}
