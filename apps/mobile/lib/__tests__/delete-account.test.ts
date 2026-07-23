const mockGetSession = jest.fn();
const mockSignOut = jest.fn();
const mockSetRevenueCatUserId = jest.fn();
const mockDeleteSecureItem = jest.fn();
const mockClearVoiceJournal = jest.fn();

jest.mock("expo-constants", () => ({
  expoConfig: {
    extra: {
      supabaseUrl: "https://example.supabase.co",
      supabaseAnonKey: "anon-key",
    },
  },
}));

jest.mock("expo-secure-store", () => ({
  deleteItemAsync: (key: string) => mockDeleteSecureItem(key),
}));

jest.mock("../supabase", () => ({
  isSupabaseConfigured: true,
  supabase: {
    auth: {
      getSession: () => mockGetSession(),
      signOut: () => mockSignOut(),
    },
  },
}));

jest.mock("../iap", () => ({
  isPremium: jest.fn(async () => false),
  setUserId: (id: string | null) => mockSetRevenueCatUserId(id),
}));

jest.mock("../local-progress", () => ({
  getLocalProfile: jest.fn(async () => null),
  getAllLessonState: jest.fn(async () => ({})),
}));

jest.mock("../voice-journal", () => ({
  clearAll: () => mockClearVoiceJournal(),
}));

import AsyncStorage from "@react-native-async-storage/async-storage";
import { deleteAccountInstant } from "../delete-account";

describe("account deletion teardown", () => {
  beforeEach(async () => {
    jest.clearAllMocks();
    await AsyncStorage.clear();
    mockGetSession.mockResolvedValue({ data: { session: null } });
    mockSignOut.mockResolvedValue({ error: null });
    mockSetRevenueCatUserId.mockResolvedValue(undefined);
    mockDeleteSecureItem.mockResolvedValue(undefined);
    mockClearVoiceJournal.mockResolvedValue(undefined);
  });

  it("clears every local identity store when no server session remains", async () => {
    await AsyncStorage.multiSet([
      ["lafla.profile", "cached"],
      ["unrelated.preference", "keep"],
    ]);

    await expect(deleteAccountInstant()).resolves.toEqual({ ok: true });
    await expect(AsyncStorage.getItem("lafla.profile")).resolves.toBeNull();
    await expect(
      AsyncStorage.getItem("unrelated.preference"),
    ).resolves.toBe("keep");
    expect(mockSetRevenueCatUserId).toHaveBeenCalledWith(null);
    expect(mockDeleteSecureItem).toHaveBeenCalledWith(
      "lafla.apple.credentials.v1",
    );
    expect(mockClearVoiceJournal).toHaveBeenCalledTimes(1);
  });
});
