import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { handleLlmChat } from "./handler.ts";

serve(async (req) => {
  return await handleLlmChat(req);
});
