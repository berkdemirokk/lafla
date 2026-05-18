// Lafla — Cloudflare Worker for TTS fallback (tier 2 of 3).
//
// CONTEXT
// ───────
// The Lafla mobile app has a 3-tier TTS chain:
//   1. Bundled MP3s (top ~50 lessons, ~150 MB cellular cap) — instant, free.
//   2. THIS WORKER — long-tail lessons, cached in R2 forever.
//   3. expo-speech (native OS TTS) — last-ditch fallback when offline / Worker
//      down / ElevenLabs degraded.
//
// The client POSTs `{ text, voiceId, lang? }` and gets back raw `audio/mpeg`
// MP3 bytes (or a JSON error). The path is intentionally simple: we never
// proxy a stream we haven't finished caching — the second hit on the same
// (text, voiceId) is a pure R2 read with no upstream call.
//
// CACHE KEY
// ─────────
// djb2(text + "|" + voiceId) — *bit-identical* to apps/mobile/lib/tts-cache.ts
// `hashText`. This is load-bearing: the on-device cache and the R2 cache use
// the same filenames, so a future tool can mirror R2 → bundled assets without
// rehashing anything.
//
// R2 LAYOUT
// ─────────
//   lafla-tts-cache/
//     <voiceId>/<hash>.mp3
//
// SWAP POINT
// ──────────
// `fetchFromElevenLabs` is the only function that knows about ElevenLabs. To
// switch providers (OpenAI TTS, self-hosted Chatterbox on RunPod, etc.) you
// only need to replace that function — the rest of the pipeline (validation,
// hashing, R2 caching, response shape) stays put.
//
// SECURITY
// ────────
// No auth on the endpoint itself; we rely on Cloudflare's DDoS shield + the
// fact that the worst attacker can do is burn ElevenLabs credits. To harden:
// add a `x-lafla-secret` header check (see README) and rotate quarterly.

export interface Env {
  /** R2 bucket binding (see wrangler.toml). */
  LAFLA_TTS_CACHE: R2Bucket;
  /** ElevenLabs API key — set via `wrangler secret put ELEVENLABS_API_KEY`. */
  ELEVENLABS_API_KEY: string;
  /** Plain var (non-secret) — handy for log filtering. */
  PROJECT: string;
}

// ─── constants ────────────────────────────────────────────────────────────

/** ElevenLabs model. v2 is multilingual (Turkish-friendly) and good enough
 *  for short conversational phrases. v3 / turbo are options if cost or
 *  latency become a problem. */
const ELEVENLABS_MODEL_ID = "eleven_multilingual_v2";

/** MP3 at 128 kbps / 44.1 kHz — matches the bundled-asset pipeline so users
 *  don't perceive a quality shift when they cross the bundle boundary. */
const ELEVENLABS_OUTPUT_FORMAT = "mp3_44100_128";

/** Aggressive immutable caching — same (text, voiceId) is byte-identical
 *  forever, so CDNs and the mobile cache layer can treat it as such. */
const AUDIO_CACHE_CONTROL = "public, max-age=31536000, immutable";

const PERMISSIVE_CORS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, x-lafla-secret",
  "Access-Control-Max-Age": "86400",
};

// ─── entry point ──────────────────────────────────────────────────────────

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // CORS preflight — the native iOS app doesn't strictly need this, but
    // (a) it's cheap, and (b) we want to be able to hit the endpoint from a
    // browser-based debug page without a separate code path.
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: PERMISSIVE_CORS });
    }

    if (request.method === "GET" && url.pathname === "/health") {
      return new Response("ok", {
        status: 200,
        headers: { "Content-Type": "text/plain", ...PERMISSIVE_CORS },
      });
    }

    if (request.method === "POST" && url.pathname === "/tts") {
      return handleTts(request, env, ctx);
    }

    return jsonError(404, "not_found", `No route for ${request.method} ${url.pathname}`);
  },
};

// ─── /tts ────────────────────────────────────────────────────────────────

interface TtsBody {
  text: string;
  voiceId: string;
  lang?: string;
}

async function handleTts(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  // ── 1. Parse + validate body ──────────────────────────────────────────
  let body: TtsBody;
  try {
    const raw = (await request.json()) as unknown;
    body = validateBody(raw);
  } catch (err) {
    const msg = err instanceof Error ? err.message : "invalid body";
    return jsonError(400, "bad_request", msg);
  }

  const { text, voiceId } = body;
  const hash = djb2(`${text}|${voiceId}`);
  const r2Key = `${voiceId}/${hash}.mp3`;

  // ── 2. R2 cache lookup ────────────────────────────────────────────────
  // The vast majority of requests after warm-up land here — a single R2
  // GET, no upstream call, sub-100ms latency from most regions.
  try {
    const cached = await env.LAFLA_TTS_CACHE.get(r2Key);
    if (cached !== null) {
      return new Response(cached.body, {
        status: 200,
        headers: {
          "Content-Type": "audio/mpeg",
          "Cache-Control": AUDIO_CACHE_CONTROL,
          "X-Lafla-Cache": "hit",
          ...PERMISSIVE_CORS,
        },
      });
    }
  } catch (err) {
    // R2 lookup failures are non-fatal — we just fall through to the
    // upstream call. Worst case we pay an extra ElevenLabs request.
    console.warn(`[${env.PROJECT}] r2 get failed for ${r2Key}:`, err);
  }

  // ── 3. Cache miss — call ElevenLabs ───────────────────────────────────
  let mp3Bytes: ArrayBuffer;
  try {
    mp3Bytes = await fetchFromElevenLabs(text, voiceId, env);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`[${env.PROJECT}] elevenlabs failed for hash=${hash}:`, msg);
    return jsonError(502, "upstream_failed", msg);
  }

  // ── 4. Store in R2 (fire-and-forget so we don't block the client) ─────
  // ctx.waitUntil lets the upload finish after we've already responded — the
  // user gets their audio ASAP and the next call hits the cache.
  ctx.waitUntil(
    env.LAFLA_TTS_CACHE.put(r2Key, mp3Bytes.slice(0), {
      httpMetadata: {
        contentType: "audio/mpeg",
        cacheControl: AUDIO_CACHE_CONTROL,
      },
      customMetadata: {
        voiceId,
        textLength: String(text.length),
        // We deliberately don't store the raw text — it's not secret, but
        // an R2 list endpoint dumping user phrases would be awkward.
        createdAt: new Date().toISOString(),
      },
    }).catch((err: unknown) => {
      console.warn(`[${env.PROJECT}] r2 put failed for ${r2Key}:`, err);
    }),
  );

  return new Response(mp3Bytes, {
    status: 200,
    headers: {
      "Content-Type": "audio/mpeg",
      "Cache-Control": AUDIO_CACHE_CONTROL,
      "X-Lafla-Cache": "miss",
      ...PERMISSIVE_CORS,
    },
  });
}

// ─── ElevenLabs ──────────────────────────────────────────────────────────

/**
 * Single point of upstream contact. Swap this function (and the constants
 * above) to migrate to OpenAI TTS, Chatterbox on RunPod, etc.
 *
 * Throws on any non-2xx — caller wraps as a 502 to the client.
 */
async function fetchFromElevenLabs(
  text: string,
  voiceId: string,
  env: Env,
): Promise<ArrayBuffer> {
  if (!env.ELEVENLABS_API_KEY) {
    throw new Error("ELEVENLABS_API_KEY is not configured");
  }

  const endpoint =
    `https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(voiceId)}` +
    `?output_format=${ELEVENLABS_OUTPUT_FORMAT}`;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "xi-api-key": env.ELEVENLABS_API_KEY,
      "Content-Type": "application/json",
      Accept: "audio/mpeg",
    },
    body: JSON.stringify({
      text,
      model_id: ELEVENLABS_MODEL_ID,
      // Conservative defaults — clear pronunciation matters more than
      // emotive range for language-learning audio.
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75,
      },
    }),
  });

  if (!res.ok) {
    // ElevenLabs returns JSON errors. We surface a short string upward so
    // the client can decide whether to retry (5xx) or fail loud (4xx).
    let detail = `${res.status} ${res.statusText}`;
    try {
      const errText = await res.text();
      if (errText) detail += ` — ${errText.slice(0, 400)}`;
    } catch {
      // best-effort
    }
    throw new Error(`elevenlabs: ${detail}`);
  }

  return await res.arrayBuffer();
}

// ─── helpers ─────────────────────────────────────────────────────────────

/**
 * djb2 with xor variant — bit-identical to apps/mobile/lib/tts-cache.ts.
 * DO NOT "optimize" this: any change here invalidates every cached file in
 * R2 AND on every user's device.
 */
function djb2(input: string): string {
  let h = 5381;
  for (let i = 0; i < input.length; i++) {
    // h * 33 ^ c, kept in uint32 range. The `(h << 5) + h` form is exactly
    // h * 33 in two's-complement 32-bit — same result as `h * 33` after the
    // `>>> 0`, but bit-cheaper on some JS engines. We use it to mirror the
    // mobile implementation byte-for-byte.
    h = (((h << 5) + h) ^ input.charCodeAt(i)) >>> 0;
  }
  return h.toString(16).padStart(8, "0");
}

function validateBody(raw: unknown): TtsBody {
  if (raw === null || typeof raw !== "object") {
    throw new Error("body must be a JSON object");
  }
  const obj = raw as Record<string, unknown>;

  if (typeof obj.text !== "string" || obj.text.length === 0) {
    throw new Error("`text` must be a non-empty string");
  }
  // Cheap DoS guard: ElevenLabs themselves cap at 5000 chars; we mirror that.
  if (obj.text.length > 5000) {
    throw new Error("`text` exceeds 5000 character limit");
  }

  if (typeof obj.voiceId !== "string" || obj.voiceId.length === 0) {
    throw new Error("`voiceId` must be a non-empty string");
  }
  // voiceId becomes part of the R2 key — be strict about what we accept.
  if (!/^[A-Za-z0-9_-]{1,64}$/.test(obj.voiceId)) {
    throw new Error("`voiceId` must match /^[A-Za-z0-9_-]{1,64}$/");
  }

  const lang = typeof obj.lang === "string" ? obj.lang : undefined;
  if (lang !== undefined && lang.length > 16) {
    throw new Error("`lang` is unreasonably long");
  }

  return { text: obj.text, voiceId: obj.voiceId, lang };
}

function jsonError(status: number, code: string, message: string): Response {
  return new Response(
    JSON.stringify({ error: { code, message } }),
    {
      status,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        ...PERMISSIVE_CORS,
      },
    },
  );
}
