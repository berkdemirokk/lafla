describe("supabase config fallback", () => {
  const originalEnv = process.env;
  let warnSpy: jest.SpyInstance;

  beforeEach(() => {
    jest.resetModules();
    warnSpy = jest.spyOn(console, "warn").mockImplementation(() => {});
    process.env = { ...originalEnv };
    delete process.env.EXPO_PUBLIC_SUPABASE_URL;
    delete process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;
    jest.doMock("react-native-url-polyfill/auto", () => ({}));
  });

  afterEach(() => {
    warnSpy.mockRestore();
    process.env = originalEnv;
    jest.dontMock("expo-constants");
    jest.dontMock("@supabase/supabase-js");
    jest.dontMock("@react-native-async-storage/async-storage");
    jest.dontMock("react-native-url-polyfill/auto");
  });

  it("does not pass an empty URL to createClient when Supabase config is missing", () => {
    const mockCreateClient = jest.fn(() => ({
      auth: {},
      functions: {},
    }));

    jest.doMock("expo-constants", () => ({
      __esModule: true,
      default: {
        expoConfig: {
          extra: {
            supabaseUrl: "",
            supabaseAnonKey: "",
          },
        },
      },
    }));
    jest.doMock("@supabase/supabase-js", () => ({
      createClient: mockCreateClient,
    }));
    jest.doMock("@react-native-async-storage/async-storage", () => ({}));

    const mod = require("../supabase");

    expect(mod.isSupabaseConfigured).toBe(false);
    expect(mockCreateClient).toHaveBeenCalledWith(
      "https://lafla-offline.supabase.co",
      "offline-anon-key",
      expect.any(Object),
    );
  });

  it("uses configured Supabase values when they exist", () => {
    const mockCreateClient = jest.fn(() => ({
      auth: {},
      functions: {},
    }));

    jest.doMock("expo-constants", () => ({
      __esModule: true,
      default: {
        expoConfig: {
          extra: {
            supabaseUrl: "https://real-project.supabase.co",
            supabaseAnonKey: "real-anon-key",
          },
        },
      },
    }));
    jest.doMock("@supabase/supabase-js", () => ({
      createClient: mockCreateClient,
    }));
    jest.doMock("@react-native-async-storage/async-storage", () => ({}));

    const mod = require("../supabase");

    expect(mod.isSupabaseConfigured).toBe(true);
    expect(mockCreateClient).toHaveBeenCalledWith(
      "https://real-project.supabase.co",
      "real-anon-key",
      expect.any(Object),
    );
  });
});
