# `@lafla/tts-worker`

Cloudflare Worker that serves tier 2 of the Lafla mobile app's TTS chain.

## Where it fits

```
mobile app request → bundled MP3?      ──► play (free, <50 ms)
                  ↓ no
                  → THIS WORKER /tts   ──► R2 hit (cheap, <200 ms)
                                       ──► R2 miss → ElevenLabs (~600–1500 ms)
                                                   → cache to R2 for next time
                  ↓ network error / 5xx
                  → expo-speech native TTS (last resort, free, robotic)
```

R2 is the permanent cache — once a phrase is synthesised, every future user
who hits the same `(text, voiceId)` gets the cached bytes. Cost asymptotes
toward zero as content stabilises.

## Setup

```bash
# 1. Install wrangler (CLI). Either install globally...
npm install -g wrangler
# ...or run via pnpm dlx with no global install:
pnpm dlx wrangler --version

# 2. Authenticate against your Cloudflare account (opens browser).
wrangler login

# 3. Create the R2 bucket the Worker writes to.
wrangler r2 bucket create lafla-tts-cache

# 4. Provision the ElevenLabs API key as a secret (paste when prompted).
#    Get a key from https://elevenlabs.io/app/settings/api-keys
wrangler secret put ELEVENLABS_API_KEY

# 5. Install local deps + deploy.
pnpm install
pnpm run deploy
```

`wrangler deploy` prints a URL like:

```
https://lafla-tts.<your-account-subdomain>.workers.dev
```

Paste it into `apps/mobile/app.json`:

```jsonc
{
  "expo": {
    "extra": {
      "ttsEndpoint": "https://lafla-tts.<your-account-subdomain>.workers.dev"
    }
  }
}
```

The mobile app appends `/tts` to that endpoint when making requests.

## Smoke test

ElevenLabs ships several stock voices. We default to **Rachel** (`21m00Tcm4TlvDq8ikWAM`)
for English. Pick a Turkish-trained voice (e.g. `XB0fDUnXU5powFXDhCwa` "Charlotte"
sounds reasonable in Turkish; audition in the ElevenLabs voice library).

```bash
# Health probe
curl https://lafla-tts.<your-account>.workers.dev/health
# → ok

# Full TTS round-trip — writes test.mp3 you can play locally
curl -X POST https://lafla-tts.<your-account>.workers.dev/tts \
  -H 'Content-Type: application/json' \
  -d '{"text":"hello","voiceId":"21m00Tcm4TlvDq8ikWAM"}' \
  --output test.mp3

# Repeat the same call — second one should be sub-200ms and report
# `X-Lafla-Cache: hit` in headers.
curl -X POST https://lafla-tts.<your-account>.workers.dev/tts \
  -H 'Content-Type: application/json' \
  -d '{"text":"hello","voiceId":"21m00Tcm4TlvDq8ikWAM"}' \
  --output test2.mp3 -D -
```

## Logs

```bash
wrangler tail              # live stream while debugging
```

Observability is also enabled in `wrangler.toml`, so the Cloudflare dashboard
shows error rates and per-route metrics without any extra setup.

## Cost & capacity

| Layer       | Free tier                              | Paid baseline                                   |
| ----------- | -------------------------------------- | ----------------------------------------------- |
| Workers     | 100k requests/day                      | $5/mo for 10M req                               |
| R2 storage  | 10 GB-month free                       | $0.015/GB-month after                           |
| R2 reads    | 1M Class B free/mo                     | $0.36 per 1M                                    |
| R2 writes   | 1M Class A free/mo                     | $4.50 per 1M                                    |
| ElevenLabs  | Free tier ~10k chars/mo                | Starter $5/mo = 30k chars; Creator $22 = 100k   |

**Back-of-envelope for Lafla:**

- Top ~50 lessons bundled → maybe 80 % of plays never touch the Worker.
- The other 20 % long-tail: assume a user plays ~30 lines per skipped lesson,
  most lines re-used across users (cached after the first listener pays
  for them).
- For 1,000 active users with 5 skipped lessons each, expect
  ~30 × 5 = 150 unique lines _per user_, but the union across all users is
  probably ~10× smaller after dedupe (~15k unique phrases × ~80 chars).
- That's ~1.2M characters of ElevenLabs synthesis _one time only_ — the
  Creator plan ($22/mo) covers a full content refresh; the Starter ($5)
  covers a quarter at a time. After that, R2 reads dominate (cents/month).

If costs balloon, the cheapest single swap is to point the Worker at OpenAI's
TTS API (`tts-1-hd`, ~$0.030 per 1k chars) or a self-hosted Chatterbox
container on RunPod — see **Swapping providers** below.

## Swapping providers

The Worker has exactly one function that knows about ElevenLabs:
`fetchFromElevenLabs(text, voiceId, env)` in `src/worker.ts`. To switch:

1. Replace the body of that function with a call to your new provider.
2. Update `ELEVENLABS_MODEL_ID` / `ELEVENLABS_OUTPUT_FORMAT` constants
   accordingly (or delete them if not used).
3. Rotate the secret: `wrangler secret put OPENAI_API_KEY` and update `Env`.
4. `pnpm run deploy`.

The R2 cache key is `<voiceId>/<hash>.mp3` regardless of provider — as long
as new requests come in with new voice IDs, you can run providers side-by-
side during a migration without polluting each other's cached bytes.

## Hardening for production

- **Shared secret.** Add an `x-lafla-secret` header check at the top of
  `handleTts`. Generate via `wrangler secret put LAFLA_SHARED_SECRET`, embed
  the same value in the mobile build via `app.config.ts → extra`, and reject
  requests missing it. Doesn't stop a determined attacker who decompiles the
  app, but raises the bar enough to deter casual abuse.
- **Per-IP rate limit.** Cloudflare's free Rate Limiting rules let you cap
  e.g. 60 req/min per source IP — set this up in the dashboard once the
  endpoint is in production.
- **Bucket lifecycle rules.** Set R2 to transition objects to infrequent-
  access tier after 30 days idle if you start paying for storage.

## File map

```
tools/tts-worker/
├── README.md         ← you are here
├── package.json
├── tsconfig.json
├── wrangler.toml
└── src/
    └── worker.ts     ← all the logic; single file by design
```
