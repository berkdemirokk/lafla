import { FREE_CHAT_OPENERS } from "./prompts.ts";

export interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

export function validatePayload(
  messages: unknown,
  promptId: unknown,
): { ok: boolean; error?: string } {
  // 1. Validate prompt ID
  if (
    !promptId || typeof promptId !== "string" || !FREE_CHAT_OPENERS[promptId]
  ) {
    return { ok: false, error: "invalid_or_missing_prompt_id" };
  }

  // 2. Validate messages array structure
  if (!Array.isArray(messages)) {
    return { ok: false, error: "messages_must_be_array" };
  }

  if (messages.length === 0) {
    return { ok: false, error: "messages_must_not_be_empty" };
  }

  // 3. Enforce maximum history depth (15 messages max)
  if (messages.length > 15) {
    return { ok: false, error: "history_limit_exceeded" };
  }

  // 4. Validate each message in the array
  for (const m of messages) {
    if (!m || typeof m !== "object") {
      return { ok: false, error: "invalid_message_object" };
    }

    const { role, content } = m;

    // Reject system roles and other roles besides user/assistant
    if (role !== "user" && role !== "assistant") {
      return { ok: false, error: "invalid_role_type" };
    }

    if (typeof content !== "string") {
      return { ok: false, error: "invalid_content_type" };
    }

    if (content.trim().length === 0) {
      return { ok: false, error: "message_must_not_be_empty" };
    }

    // Enforce maximum character limit (500 chars)
    if (content.length > 500) {
      return { ok: false, error: "message_too_long" };
    }
  }

  if (messages[messages.length - 1]?.role !== "user") {
    return { ok: false, error: "last_message_must_be_user" };
  }

  return { ok: true };
}
