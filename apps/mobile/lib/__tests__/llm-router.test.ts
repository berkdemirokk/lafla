import { chatComplete, chatCompleteDetailed } from "../llm-router";
import { supabase } from "../supabase";

// Mock supabase client functions
jest.mock("../supabase", () => ({
  supabase: {
    functions: {
      invoke: jest.fn(),
    },
  },
}));

// Mock AsyncStorage
jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn().mockResolvedValue(null),
  setItem: jest.fn().mockResolvedValue(null),
}));

// Mock fetch globally
const mockFetch = jest.fn();
global.fetch = mockFetch;

// Keep reference to original __DEV__
const originalDev = (global as any).__DEV__;

describe("llm-router tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockFetch.mockReset();
    (global as any).__DEV__ = true; // reset to dev mode
    // reset keys env
    delete process.env.EXPO_PUBLIC_GROQ_KEY;
    delete process.env.EXPO_PUBLIC_GEMINI_KEY;
  });

  afterAll(() => {
    (global as any).__DEV__ = originalDev;
  });

  it("should call secure Edge Function in production even if local keys are set", async () => {
    (global as any).__DEV__ = false; // Mock production build
    process.env.EXPO_PUBLIC_GROQ_KEY = "dummy-key";

    // Mock successful Edge Function response
    const mockInvoke = supabase.functions.invoke as jest.Mock;
    mockInvoke.mockResolvedValue({
      data: { text: "Hello from secure proxy" },
      error: null,
    });

    const response = await chatComplete([{ role: "user", content: "Hi" }], {
      promptId: "daily.howsday",
    });

    expect(response).toBe("Hello from secure proxy");
    expect(mockInvoke).toHaveBeenCalledWith("llm-chat", {
      body: {
        messages: [{ role: "user", content: "Hi" }],
        promptId: "daily.howsday",
      },
    });
    expect(mockFetch).not.toHaveBeenCalled();
  });

  it("returns authoritative usage metadata from the Edge Function", async () => {
    (global as any).__DEV__ = false;
    const mockInvoke = supabase.functions.invoke as jest.Mock;
    mockInvoke.mockResolvedValue({
      data: { text: "Fifth reply", currentTurns: 5, limit: 5 },
      error: null,
    });

    await expect(
      chatCompleteDetailed([{ role: "user", content: "Hi" }], {
        promptId: "daily.howsday",
      }),
    ).resolves.toEqual({
      text: "Fifth reply",
      currentTurns: 5,
      limit: 5,
    });
  });

  it("should call secure Edge Function in development if no local keys are present", async () => {
    (global as any).__DEV__ = true;
    // No keys set in process.env

    const mockInvoke = supabase.functions.invoke as jest.Mock;
    mockInvoke.mockResolvedValue({
      data: { text: "Hello from Deno proxy" },
      error: null,
    });

    const response = await chatComplete([{ role: "user", content: "Hello" }], {
      promptId: "daily.howsday",
    });

    expect(response).toBe("Hello from Deno proxy");
    expect(mockInvoke).toHaveBeenCalledWith("llm-chat", {
      body: {
        messages: [{ role: "user", content: "Hello" }],
        promptId: "daily.howsday",
      },
    });
    expect(mockFetch).not.toHaveBeenCalled();
  });

  it("should call provider directly in development if local keys are present", async () => {
    (global as any).__DEV__ = true;
    process.env.EXPO_PUBLIC_GROQ_KEY = "local-groq-key";

    // Mock direct API response
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({
        choices: [{ message: { content: "Direct response from Groq" } }],
      }),
    });

    const response = await chatComplete(
      [{ role: "user", content: "Hi local" }],
      {
        promptId: "daily.howsday",
      },
    );

    expect(response).toBe("Direct response from Groq");
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(supabase.functions.invoke).not.toHaveBeenCalled();
  });
});
