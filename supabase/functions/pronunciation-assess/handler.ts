const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const MAX_AUDIO_BYTES = 1_500_000;
const MAX_REFERENCE_LENGTH = 500;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_ASSESSMENTS = 12;

interface RateLimitEntry {
  windowStartedAt: number;
  count: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

export interface PronunciationAssessDependencies {
  getEnv: (name: string) => string | undefined;
  fetch: typeof fetch;
  now?: () => number;
  rateLimits?: Map<string, RateLimitEntry>;
}

interface AzureWord {
  Word?: string;
  PronunciationAssessment?: {
    AccuracyScore?: number;
    ErrorType?: string;
  };
}

interface AzureDetailedResult {
  RecognitionStatus?: string;
  DisplayText?: string;
  NBest?: Array<{
    Display?: string;
    PronunciationAssessment?: {
      AccuracyScore?: number;
      FluencyScore?: number;
      CompletenessScore?: number;
      ProsodyScore?: number;
      PronScore?: number;
    };
    Words?: AzureWord[];
  }>;
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
}

function decodeBase64(value: string): Uint8Array {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

function finiteScore(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value)
    ? Math.max(0, Math.min(100, Math.round(value)))
    : null;
}

function clientKey(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("cf-connecting-ip") ||
    "unknown"
  );
}

function isRateLimited(
  request: Request,
  now: number,
  store: Map<string, RateLimitEntry>,
): boolean {
  const key = clientKey(request);
  const current = store.get(key);
  if (!current || now - current.windowStartedAt >= RATE_LIMIT_WINDOW_MS) {
    store.set(key, { windowStartedAt: now, count: 1 });
    return false;
  }
  if (current.count >= RATE_LIMIT_MAX_ASSESSMENTS) return true;
  current.count += 1;
  return false;
}

export async function handlePronunciationAssess(
  request: Request,
  dependencies: PronunciationAssessDependencies = {
    getEnv: (name) => Deno.env.get(name),
    fetch,
  },
): Promise<Response> {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: CORS_HEADERS });
  }
  if (request.method !== "POST") return json({ error: "method_not_allowed" }, 405);

  let body: { action?: unknown; audioBase64?: unknown; referenceText?: unknown };
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid_json" }, 400);
  }

  const speechKey = dependencies.getEnv("AZURE_SPEECH_KEY");
  const speechRegion = dependencies.getEnv("AZURE_SPEECH_REGION");
  if (body.action === "status") {
    return json({ available: Boolean(speechKey && speechRegion) });
  }
  if (!speechKey || !speechRegion) {
    return json({ error: "provider_not_configured" }, 503);
  }
  if (
    isRateLimited(
      request,
      dependencies.now?.() ?? Date.now(),
      dependencies.rateLimits ?? rateLimitStore,
    )
  ) {
    return json({ error: "rate_limited" }, 429);
  }

  const referenceText =
    typeof body.referenceText === "string" ? body.referenceText.trim() : "";
  const audioBase64 =
    typeof body.audioBase64 === "string" ? body.audioBase64 : "";
  if (!referenceText || referenceText.length > MAX_REFERENCE_LENGTH) {
    return json({ error: "invalid_reference_text" }, 400);
  }
  if (!audioBase64) return json({ error: "missing_audio" }, 400);

  let audio: Uint8Array;
  try {
    audio = decodeBase64(audioBase64);
  } catch {
    return json({ error: "invalid_audio" }, 400);
  }
  if (audio.byteLength < 44 || audio.byteLength > MAX_AUDIO_BYTES) {
    return json({ error: "invalid_audio_size" }, 400);
  }

  const assessmentHeader = btoa(
    JSON.stringify({
      ReferenceText: referenceText,
      GradingSystem: "HundredMark",
      Granularity: "Word",
      Dimension: "Comprehensive",
      EnableMiscue: true,
      EnableProsodyAssessment: true,
    }),
  );
  const endpoint = new URL(
    `https://${speechRegion}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1`,
  );
  endpoint.searchParams.set("language", "en-US");
  endpoint.searchParams.set("format", "detailed");

  const audioBody = audio.slice().buffer as ArrayBuffer;
  let providerResponse: Response;
  try {
    providerResponse = await dependencies.fetch(endpoint, {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": speechKey,
        "Content-Type": "audio/wav; codecs=audio/pcm; samplerate=16000",
        "Pronunciation-Assessment": assessmentHeader,
      },
      body: audioBody,
    });
  } catch {
    return json({ error: "provider_unavailable" }, 502);
  }

  if (!providerResponse.ok) {
    return json(
      { error: "provider_error", providerStatus: providerResponse.status },
      502,
    );
  }

  const provider = (await providerResponse.json()) as AzureDetailedResult;
  const best = provider.NBest?.[0];
  const assessment = best?.PronunciationAssessment;
  const overall = finiteScore(assessment?.PronScore);
  if (!best || !assessment || overall === null) {
    return json({ error: "assessment_unavailable" }, 422);
  }

  return json({
    provider: "azure",
    transcript: best.Display ?? provider.DisplayText ?? "",
    overall,
    accuracy: finiteScore(assessment.AccuracyScore),
    fluency: finiteScore(assessment.FluencyScore),
    completeness: finiteScore(assessment.CompletenessScore),
    prosody: finiteScore(assessment.ProsodyScore),
    words: (best.Words ?? []).map((word) => ({
      word: word.Word ?? "",
      accuracy: finiteScore(word.PronunciationAssessment?.AccuracyScore) ?? 0,
      errorType: word.PronunciationAssessment?.ErrorType ?? "None",
    })),
  });
}
