# Local Conversation Engine

Free Chat and Real Life generation run entirely on-device. No conversation
text is sent to Lafla servers or a model provider.

## Runtime pieces

- `apps/mobile/lib/local-conversation-engine.ts` classifies each Free Chat
  turn, extracts a small set of useful entities, and advances explicit turn
  state. Candidate selection is deterministic for the same prompt, state, and
  input, while recently used reply IDs are excluded to prevent loops.
- `apps/mobile/data/free-chat-prompts.ts` is the extensible prompt and
  first-turn rule bank. New topics and first-turn branches are added as data.
- `apps/mobile/lib/real-life-tools.ts` compiles Turkish requests through an
  ordered scenario-blueprint catalog. Each blueprint owns three tone variants,
  a five-turn rehearsal, hints, and acceptable answer patterns.
- `apps/mobile/lib/local-freechat-store.ts` serializes local daily quota writes
  and records content-free practice markers for metrics. It never stores the
  user's message text, caps markers at 500, and removes daily counters older
  than 14 days.

## Safety and privacy contract

User input passes through `checkUserInput` before quota consumption or local
generation. Generated output passes through `checkMayaOutput` before display.
Analytics include prompt ID, classified intent, response strategy, and turn
number; they do not include user text or conversation history.

## Extending behavior

1. Add a `FreeChatPrompt` or a prompt-specific follow-up pattern for a new
   conversation opening.
2. Extend the entity lexicon or add response candidates for an existing intent
   when a multi-turn gap is observed.
3. Add a `ScenarioBlueprint` for a new Real Life request. Keep specific
   patterns before broad patterns and include Turkish stems so inflected input
   still matches.
4. Add table-driven tests for classification, all generated turns, and safety.

The engine does not learn by uploading user conversations. It grows through
versioned, reviewable rule and blueprint additions, while its turn state adapts
each reply to the current on-device conversation.
