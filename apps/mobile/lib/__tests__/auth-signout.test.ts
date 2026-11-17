const mockSupabaseSignOut = jest.fn();
const mockRevenueCatUserId = jest.fn();
const mockSecureDelete = jest.fn();
const mockClearVoiceJournal = jest.fn();

jest.mock("expo-secure-store", () => ({
  deleteItemAsync: (key: string) => mockSecureDelete(key),
}));

jest.mock("../supabase", () => ({
  supabase: { auth: { signOut: () => mockSupabaseSignOut() } },
}));

jest.mock("../iap", () => ({
  setUserId: (id: string | null) => mockRevenueCatUserId(id),
}));

jest.mock("../voice-journal", () => ({
  clearAll: () => mockClearVoiceJournal(),
}));

import AsyncStorage from "@react-native-async-storage/async-storage";
import { signOut } from "../auth";

describe("signOut local isolation", () => {
  beforeEach(async () => {
    jest.clearAllMocks();
    await AsyncStorage.clear();
    mockSupabaseSignOut.mockResolvedValue({ error: null });
    mockRevenueCatUserId.mockResolvedValue(undefined);
    mockSecureDelete.mockResolvedValue(undefined);
    mockClearVoiceJournal.mockResolvedValue(undefined);
  });

  it("removes account data while preserving device preferences", async () => {
    await AsyncStorage.multiSet([
      ["lafla.local.profile.v1", "user-one"],
      ["lafla.mistakes.tracked", "private-history"],
      ["lafla.voice-journal.index", "private-recordings"],
      ["lafla.premium.rewarded", "grant"],
      ["lafla.settings.themePreference", "light"],
      ["lafla.locale", "en"],
      ["unrelated.preference", "keep"],
    ]);

    await expect(signOut()).resolves.toBeUndefined();

    await expect(
      AsyncStorage.multiGet([
        "lafla.local.profile.v1",
        "lafla.mistakes.tracked",
        "lafla.voice-journal.index",
        "lafla.premium.rewarded",
      ]),
    ).resolves.toEqual([
      ["lafla.local.profile.v1", null],
      ["lafla.mistakes.tracked", null],
      ["lafla.voice-journal.index", null],
      ["lafla.premium.rewarded", null],
    ]);
    await expect(
      AsyncStorage.multiGet([
        "lafla.settings.themePreference",
        "lafla.locale",
        "unrelated.preference",
      ]),
    ).resolves.toEqual([
      ["lafla.settings.themePreference", "light"],
      ["lafla.locale", "en"],
      ["unrelated.preference", "keep"],
    ]);
    expect(mockRevenueCatUserId).toHaveBeenCalledWith(null);
    expect(mockSecureDelete).toHaveBeenCalledWith(
      "lafla.apple.credentials.v1",
    );
    expect(mockClearVoiceJournal).toHaveBeenCalledTimes(1);
  });

  it("preserves local account data when remote sign-out fails", async () => {
    await AsyncStorage.setItem("lafla.lessons", "valuable-progress");
    mockSupabaseSignOut.mockResolvedValue({ error: new Error("offline") });

    await expect(signOut()).rejects.toThrow("offline");

    await expect(AsyncStorage.getItem("lafla.lessons"))
      .resolves.toBe("valuable-progress");
    expect(mockClearVoiceJournal).not.toHaveBeenCalled();
    expect(mockRevenueCatUserId).not.toHaveBeenCalled();
  });
});
