// Lafla — LLM provider types.
// Shared shapes used by the multi-provider router. The router normalises
// every provider response to a single `string` (assistant content), so
// callers do not need to care which backend served the request.
//
// `format` controls request/response serialisation:
//   - 'openai' : OpenAI-style chat/completions schema (Groq, Cerebras,
//                OpenRouter, Together AI, Mistral La Plateforme, etc.)
//   - 'gemini' : Google generativelanguage v1beta `generateContent` schema
//                (separate `contents[]` array + `parts[]`).
//
// `apiKey` is optional so the router can iterate the provider list and
// gracefully skip any entry whose key is not configured.

export type ChatRole = 'system' | 'user' | 'assistant';

export type ChatMessage = {
  role: ChatRole;
  content: string;
};

export type ProviderFormat = 'openai' | 'gemini';

export type ProviderConfig = {
  /** Stable human-readable id, e.g. 'groq', used for logs and AsyncStorage. */
  name: string;
  /** Fully qualified HTTPS endpoint. May be templated (e.g. Cloudflare account id). */
  url: string;
  /** Model identifier as the provider expects it. */
  model: string;
  /** Provider API key. If absent, the router skips this provider. */
  apiKey?: string;
  /** Extra headers to merge on top of the format default. */
  headers?: Record<string, string>;
  /** Wire format. Determines body + parse path. */
  format: ProviderFormat;
};

export type ChatCompleteOptions = {
  /** Soft upper bound on response tokens. Defaults to 512. */
  maxTokens?: number;
  /** Convenience: prepend a system message before `messages`. */
  system?: string;
};
