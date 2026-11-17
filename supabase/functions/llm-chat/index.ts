import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { handleRetiredChat } from "./handler.ts";

serve(async (req) => {
  return handleRetiredChat(req);
});
