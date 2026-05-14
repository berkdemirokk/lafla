# LLM Router — Free-Tier Multi-Provider Strategy

Lafla's AI conversation feature is served by a provider-agnostic router in
`apps/mobile/lib/llm-router.ts`. The router iterates a static list of LLM
providers, skipping any that lack an API key, and falls through on
retryable failures (HTTP 401 / 403 / 429 / 5xx). The first successful
provider wins, and its name is cached in AsyncStorage
(`lafla.llm.lastProvider`) so subsequent calls try it first — this keeps
latency low and spreads quota use across providers.

The router is consumed via a single function:

```ts
import { chatComplete } from "@/lib/llm-router";

const reply = await chatComplete(
  [{ role: "user", content: "Tell me a joke in Turkish." }],
  { system: "You are a friendly Turkish tutor.", maxTokens: 256 },
);
```

## Why multi-provider?

The runtime budget for Lafla is zero — we use the data flywheel
architecture and avoid runtime LLM calls in the hot path (lesson
generation is done offline). The AI conversation feature is the one
exception, and we lean on the generous free tiers of several providers
to stay free at the user level. No single provider's free tier is
reliable enough on its own (rate limits, regional outages, model
deprecation), so we route across many.

## Status legend

- **Implemented** — adapter is wired up and exercised when the key is
  present.
- **Stub** — adapter is present but returns `null`; supply the key and
  replace the stub body with the wire format below to enable.
- **Documented** — listed here for future use; no code yet.

## Currently configured (top 5)

### 1. Groq — Implemented

- Endpoint: `https://api.groq.com/openai/v1/chat/completions`
- Model: `llama-3.3-70b-versatile`
- Wire format: OpenAI chat/completions
- Env var: `EXPO_PUBLIC_GROQ_KEY`
- Free quota (as of 2026-05): ~14,400 req/day, ~30 req/min, ~6k tokens/min
  on the 70B model. Best latency in the list (sub-second on most prompts).
- Get a key: <https://console.groq.com/keys>

### 2. Cerebras — Implemented

- Endpoint: `https://api.cerebras.ai/v1/chat/completions`
- Model: `llama3.3-70b`
- Wire format: OpenAI chat/completions
- Env var: `EXPO_PUBLIC_CEREBRAS_KEY`
- Free quota: ~1M tokens/day, 30 req/min on llama3.3-70b. Fastest
  generation speed (~2000 tok/s) — useful for long replies.
- Get a key: <https://cloud.cerebras.ai/>

### 3. Google AI (Gemini Flash) — Implemented

- Endpoint:
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent`
- Model: `gemini-1.5-flash`
- Wire format: Gemini `generateContent` (different from OpenAI — see
  notes below).
- Env var: `EXPO_PUBLIC_GEMINI_KEY` (passed as `?key=` query param)
- Free quota: 15 RPM, 1M TPM, 1500 req/day on Flash. Strong multilingual
  performance — good for Turkish.
- Get a key: <https://aistudio.google.com/app/apikey>

#### Gemini schema notes

Unlike OpenAI-style providers, Gemini uses:

- `contents: [{ role, parts: [{ text }] }]` instead of `messages`.
- `role` is `'user'` or `'model'` (the router maps `'assistant'` ->
  `'model'`).
- No `'system'` role on a turn — use top-level `systemInstruction`
  instead.
- `generationConfig.maxOutputTokens` instead of `max_tokens`.

### 4. OpenRouter (free model) — Stub

- Endpoint: `https://openrouter.ai/api/v1/chat/completions`
- Model: `deepseek/deepseek-chat:free`
- Wire format: OpenAI chat/completions
- Env var: `EXPO_PUBLIC_OPENROUTER_KEY`
- Required headers: `HTTP-Referer`, `X-Title` (already set in the config).
- Free quota: ~200 req/day on the `:free` variants. A wide catalogue of
  free models — see the `:free` filter in the OpenRouter UI.
- Get a key: <https://openrouter.ai/keys>
- **To enable:** replace the body of `callOpenRouterStub` in
  `llm-router.ts` with a call to `callOpenAICompatible(cfg, messages,
  maxTokens)`.

### 5. Cloudflare Workers AI — Stub

- Endpoint:
  `https://api.cloudflare.com/client/v4/accounts/<account>/ai/run/@cf/meta/llama-3.2-1b-instruct`
- Model: `@cf/meta/llama-3.2-1b-instruct`
- Wire format: OpenAI chat/completions
- Env vars: `EXPO_PUBLIC_CLOUDFLARE_KEY`, `EXPO_PUBLIC_CLOUDFLARE_ACCOUNT`
- Free quota: 10k neurons/day (≈ tens of thousands of small-model
  requests). The 1B model is fast but weak — best used as a last-resort
  fallback or for non-critical UX text.
- Get a key: <https://dash.cloudflare.com/profile/api-tokens> (token
  needs `Workers AI` permissions).
- **To enable:** replace the body of `callCloudflareStub` with a
  `callOpenAICompatible` call.

## Documented (not yet wired)

### 6. Together AI

- Endpoint: `https://api.together.xyz/v1/chat/completions`
- Models: many free tiers including
  `meta-llama/Llama-3.3-70B-Instruct-Turbo-Free`.
- Wire format: OpenAI chat/completions.
- Free quota: $5 free credit on signup, then rate-limited free serverless
  endpoints (60 RPM on the `-Free` models).
- Get a key: <https://api.together.xyz/settings/api-keys>

### 7. Hugging Face Inference API

- Endpoint:
  `https://api-inference.huggingface.co/models/<repo-id>/v1/chat/completions`
  for the chat-completions-compatible endpoint, or
  `https://api-inference.huggingface.co/models/<repo-id>` for the raw
  Inference API.
- Wire format: OpenAI-compatible on the new endpoint; legacy raw payload
  on the old one.
- Free quota: ~1000 req/day with a free account, more with HF Pro.
- Get a key: <https://huggingface.co/settings/tokens>

### 8. Mistral La Plateforme

- Endpoint: `https://api.mistral.ai/v1/chat/completions`
- Model: `mistral-small-latest` or `open-mistral-7b` on the free tier.
- Wire format: OpenAI chat/completions.
- Free quota: 1 req/sec, ~500k tokens/min on the experimental tier.
- Get a key: <https://console.mistral.ai/api-keys/>

### 9. Anthropic (free credits)

- Endpoint: `https://api.anthropic.com/v1/messages`
- Model: `claude-haiku-4-5` (cheap, fast).
- Wire format: Anthropic Messages API (similar to OpenAI but with `system`
  as a top-level field and `content` blocks instead of a string). Would
  require a new `format: 'anthropic'` branch in `llm-types.ts`.
- Free quota: $5 in promotional credits on new accounts.
- Get a key: <https://console.anthropic.com/settings/keys>

### 10. OpenAI (free credits)

- Endpoint: `https://api.openai.com/v1/chat/completions`
- Model: `gpt-4o-mini` or `gpt-4.1-nano`.
- Wire format: OpenAI chat/completions (the canonical one).
- Free quota: occasional $5–$18 promotional credits on new accounts; no
  permanent free tier.
- Get a key: <https://platform.openai.com/api-keys>

## Total expected daily free quota

Conservative estimate, assuming all keys provisioned and no per-user
sharding:

| Tier | Requests/day | Notes |
| --- | --- | --- |
| Groq | ~14,400 | Hard daily cap |
| Cerebras | ~10,000 | Token-cap-limited at ~1M tokens/day |
| Gemini Flash | ~1,500 | Hard daily cap |
| OpenRouter | ~200 | Across all `:free` models |
| Cloudflare | ~5,000 | Neuron-cap-limited |
| Together AI | ~1,000 | Approximate; rate-limited |
| Hugging Face | ~1,000 | Per token |
| Mistral | ~5,000 | Approximate; rate-limited |
| Anthropic | one-time $5 | ~500–2000 Haiku requests |
| OpenAI | one-time $5–$18 | ~500–2000 4o-mini requests |
| **Combined steady-state** | **~38,000 req/day** | Excluding one-time credit pools |

That's enough to support a few thousand active learners daily before we
need to start paying anyone.

## Adding a new provider

1. Add a row to the array returned by `getProviders()` in
   `llm-router.ts`. Pick the closest existing `format` (`'openai'` or
   `'gemini'`) — if neither fits, widen the union in `llm-types.ts` and
   add a new adapter function.
2. Wire the env var. Use the `EXPO_PUBLIC_` prefix so Expo inlines it
   into the client bundle. Add the var to `.env.example` (not done in
   this commit — env file isn't tracked here).
3. If the wire format already matches an implemented adapter, add a
   `case` in `dispatch()` pointing at that adapter. Otherwise implement
   a new `callXxx` function following the patterns of `callOpenAICompatible`
   / `callGemini`:
   - Return `null` for "fallthrough" outcomes (no key, retryable HTTP
     error, empty body).
   - Throw for unexpected errors. The router catches and continues.
4. Document the provider in this file under the right status section.

## Error handling

`chatComplete` throws `Error` only when **every** provider fails or no
keys are configured at all. Callers should treat this as a hard failure
and surface a friendly retry UI — `try { ... } catch (err) { ... }` is
the only pattern needed; the router has already exhausted its retries
internally.

If you need to know which provider answered, read
`lafla.llm.lastProvider` from AsyncStorage after the call returns.

## Caching behaviour

After a successful response, the provider's `name` is written to
`AsyncStorage["lafla.llm.lastProvider"]` (fire-and-forget; storage
errors are swallowed). On the next call, that provider is moved to the
front of the iteration order. If it now fails, we fall through to the
remaining providers in their original order. There is no TTL — the
cache only ever changes after a successful call to a different
provider.

## Privacy

All requests carry the user's conversation but no PII beyond what the
user types. We do not attach a stable user ID. Some providers
(OpenRouter, Hugging Face) may train on free-tier traffic — review each
provider's free-tier ToS before sending sensitive prompts. For
production we should add a per-provider `trainsOnFreeTier: boolean` flag
and skip providers flagged `true` for users who opt out.
