import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { handleRetiredChat } from "./handler.ts";

Deno.test("retired chat never exposes a provider path", async () => {
  const response = handleRetiredChat(
    new Request("https://example.test/llm-chat", {
      method: "POST",
      body: JSON.stringify({ messages: [{ role: "user", content: "hello" }] }),
    }),
  );

  assertEquals(response.status, 410);
  assertEquals(await response.json(), {
    error: "feature_retired",
    message: "Conversation now runs on-device. Please update Lafla.",
  });
});

Deno.test("retired chat still answers CORS preflight", async () => {
  const response = handleRetiredChat(
    new Request("https://example.test/llm-chat", { method: "OPTIONS" }),
  );
  assertEquals(response.status, 200);
});
