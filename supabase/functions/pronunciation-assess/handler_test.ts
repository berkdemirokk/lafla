import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { handlePronunciationAssess } from "./handler.ts";

function request(body: unknown, ip = "203.0.113.10"): Request {
  return new Request("https://example.test/pronunciation-assess", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-forwarded-for": ip },
    body: JSON.stringify(body),
  });
}

const wavBase64 = btoa("RIFF" + "0".repeat(80));

const authenticated = {
  authenticate: async () => "11111111-1111-1111-1111-111111111111",
  consumeQuota: async () => true,
};

Deno.test("pronunciation assessment rejects anonymous requests", async () => {
  const response = await handlePronunciationAssess(request({ action: "status" }), {
    getEnv: () => "configured",
    fetch,
    authenticate: async () => null,
    consumeQuota: async () => true,
  });
  assertEquals(response.status, 401);
  assertEquals(await response.json(), { error: "unauthorized" });
});

Deno.test("pronunciation assessment fails closed without provider secrets", async () => {
  const response = await handlePronunciationAssess(request({
    referenceText: "Good morning.",
    audioBase64: wavBase64,
  }), { getEnv: () => undefined, fetch, ...authenticated });
  assertEquals(response.status, 503);
  assertEquals(await response.json(), { error: "provider_not_configured" });
});

Deno.test("pronunciation assessment validates and normalizes provider scores", async () => {
  let receivedUrl = "";
  const response = await handlePronunciationAssess(request({
    referenceText: "Good morning.",
    audioBase64: wavBase64,
  }), {
    getEnv: (name) => name === "AZURE_SPEECH_KEY" ? "secret" : "westeurope",
    ...authenticated,
    fetch: async (input) => {
      receivedUrl = String(input);
      return new Response(JSON.stringify({
        RecognitionStatus: "Success",
        NBest: [{
          Display: "Good morning.",
          PronunciationAssessment: {
            AccuracyScore: 81.4,
            FluencyScore: 72.6,
            CompletenessScore: 100,
            ProsodyScore: 68.2,
            PronScore: 79.7,
          },
          Words: [{
            Word: "Good",
            PronunciationAssessment: { AccuracyScore: 84.7, ErrorType: "None" },
          }],
        }],
      }), { status: 200 });
    },
  });

  assertEquals(response.status, 200);
  assertEquals(receivedUrl.includes("format=detailed"), true);
  assertEquals(await response.json(), {
    provider: "azure",
    transcript: "Good morning.",
    overall: 80,
    accuracy: 81,
    fluency: 73,
    completeness: 100,
    prosody: 68,
    words: [{ word: "Good", accuracy: 85, errorType: "None" }],
  });
});

Deno.test("pronunciation assessment rejects oversized or malformed input", async () => {
  const deps = { getEnv: () => "configured", fetch, ...authenticated };
  const missing = await handlePronunciationAssess(request({ referenceText: "Hi" }), deps);
  assertEquals(missing.status, 400);
  const invalidReference = await handlePronunciationAssess(request({
    referenceText: " ",
    audioBase64: wavBase64,
  }), deps);
  assertEquals(invalidReference.status, 400);
});

Deno.test("pronunciation assessment enforces the persistent quota result", async () => {
  const deps = {
    getEnv: () => "configured",
    fetch,
    authenticate: async () => "11111111-1111-1111-1111-111111111111",
    consumeQuota: async () => false,
  };
  const response = await handlePronunciationAssess(
    request({ referenceText: "Hi", audioBase64: wavBase64 }),
    deps,
  );
  assertEquals(response.status, 429);
  assertEquals(await response.json(), { error: "rate_limited" });
});
