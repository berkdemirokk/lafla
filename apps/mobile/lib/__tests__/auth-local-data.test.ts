import AsyncStorage from "@react-native-async-storage/async-storage";
import { signOut, switchLocalUserData } from "../auth";
import { supabase } from "../supabase";

jest.mock("../supabase", () => ({ supabase: { auth: { getSession: jest.fn(), signOut: jest.fn() } } }));

describe("account-scoped local data", () => {
  beforeEach(async () => {
    await AsyncStorage.clear();
  });

  it("keeps local progress isolated and restores it when the account returns", async () => {
    await AsyncStorage.setItem("lafla.lessons", "account A progress");
    await switchLocalUserData(null, "user-a");
    expect(await AsyncStorage.getItem("lafla.lessons")).toBe("account A progress");

    await switchLocalUserData("user-a", "user-b");
    expect(await AsyncStorage.getItem("lafla.lessons")).toBeNull();

    await AsyncStorage.setItem("lafla.lessons", "account B progress");
    await switchLocalUserData("user-b", null);
    expect(await AsyncStorage.getItem("lafla.lessons")).toBeNull();

    await switchLocalUserData(null, "user-a");
    expect(await AsyncStorage.getItem("lafla.lessons")).toBe("account A progress");

    await switchLocalUserData("user-a", "user-b");
    expect(await AsyncStorage.getItem("lafla.lessons")).toBe("account B progress");
  });

  it("moves every Lafla key except its owner marker and preserves unrelated storage", async () => {
    await AsyncStorage.setItem("lafla.voice-journal.index", "voice entries");
    await AsyncStorage.setItem("device.preference", "enabled");
    await switchLocalUserData(null, "user-a");
    await switchLocalUserData("user-a", null);

    expect(await AsyncStorage.getItem("lafla.voice-journal.index")).toBeNull();
    expect(await AsyncStorage.getItem("device.preference")).toBe("enabled");
  });

  it("keeps the active account and data when sign out fails", async () => {
    await AsyncStorage.setItem("lafla.lessons", "A");
    await switchLocalUserData(null, "user-a");
    (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: { user: { id: "user-a" } } } });
    (supabase.auth.signOut as jest.Mock).mockResolvedValue({ error: new Error("offline") });
    await expect(signOut()).rejects.toThrow("offline");
    expect(await AsyncStorage.getItem("lafla.local.owner")).toBe("user-a");
    expect(await AsyncStorage.getItem("lafla.lessons")).toBe("A");
  });

  it("serializes the signed-out listener with the explicit transition", async () => {
    await AsyncStorage.setItem("lafla.lessons", "A");
    await switchLocalUserData(null, "user-a");
    (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: { user: { id: "user-a" } } } });
    let listener: Promise<void> | undefined;
    (supabase.auth.signOut as jest.Mock).mockImplementation(async () => {
      listener = switchLocalUserData("user-a", null);
      return { error: null };
    });
    await signOut();
    await listener;
    expect(await AsyncStorage.getItem("lafla.local.owner")).toBe("anonymous");
    expect(await AsyncStorage.getItem("lafla.lessons")).toBeNull();
    await switchLocalUserData(null, "user-a");
    expect(await AsyncStorage.getItem("lafla.lessons")).toBe("A");
  });

  it.each([
    ["setItem", 1], // journal persisted
    ["multiSet", 1], // old account archived
    ["multiRemove", 1], // old active data removed
    ["multiSet", 2], // new account restored
    ["setItem", 2], // owner updated
    ["multiRemove", 2], // target archive removed
    ["removeItem", 1], // journal removed
  ] as const)("recovers after interruption at %s call %i", async (method, failAt) => {
    await AsyncStorage.setItem("lafla.lessons", "A");
    await switchLocalUserData(null, "user-a");
    await switchLocalUserData("user-a", "user-b");
    await AsyncStorage.setItem("lafla.lessons", "B");
    await switchLocalUserData("user-b", "user-a");

    const mock = AsyncStorage[method] as jest.Mock;
    const original = mock.getMockImplementation()!;
    let calls = 0;
    mock.mockImplementation(async (...args: any[]) => {
      const result = await original(...args);
      if (++calls === failAt) throw new Error("simulated interruption");
      return result;
    });
    await expect(switchLocalUserData("user-a", "user-b")).rejects.toThrow("simulated interruption");
    mock.mockImplementation(original);

    await switchLocalUserData("user-a", "user-b");
    expect(await AsyncStorage.getItem("lafla.lessons")).toBe("B");
    await switchLocalUserData("user-b", "user-a");
    expect(await AsyncStorage.getItem("lafla.lessons")).toBe("A");
  });
});
