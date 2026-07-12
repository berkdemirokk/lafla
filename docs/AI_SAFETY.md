# Local Conversation Safety

Lafla's Free Chat, Emergency English, and custom-scenario tools run entirely
on-device. User text is not sent to an AI provider or to Lafla's backend.

## Runtime flow

1. `checkUserInput()` in `apps/mobile/lib/safety-filter.ts` checks the text
   before it reaches a conversation or scenario rule.
2. Crisis language opens `CrisisModal`; disallowed sexual, violent, illegal,
   hateful, or self-harm coaching requests receive a bounded redirect.
3. The local intent/entity/state engine or deterministic scenario compiler
   produces the response.
4. `checkMayaOutput()` validates the generated local response before render.
5. Only safety reason codes, prompt IDs, and engine strategy names may be sent
   to analytics. Raw chat text is never included.

Both checks are retained even though output is authored from local templates:
future content-bank edits must not be able to bypass the same safety contract.

## Crisis behavior

- The app does not diagnose, counsel, or attempt to resolve a crisis.
- It interrupts language practice, shows a clear Turkish redirect, and offers
  immediate-help guidance through `CrisisModal`.
- Obfuscated variants are normalized before matching.
- A crisis event is recorded without the user's text.

## High-stakes topics

Emergency English provides communication phrasing, not medical, legal, or
financial advice. The local compiler preserves the user's stated facts and
does not invent names, dates, promises, diagnoses, or outcomes.

## Verification

- `apps/mobile/lib/__tests__/safety-filter.test.ts`
- `apps/mobile/lib/__tests__/local-conversation-engine.test.ts`
- `apps/mobile/lib/__tests__/real-life-tools.test.ts`
- `supabase/functions/llm-chat/handler_test.ts` verifies the legacy endpoint
  is a provider-free HTTP 410 compatibility tombstone.
