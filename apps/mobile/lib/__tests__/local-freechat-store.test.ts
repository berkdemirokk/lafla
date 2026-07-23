import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getLocalFreeChatUsage,
  reserveLocalFreeChatTurn,
  resetLocalFreeChatStoreForTests,
} from "../local-freechat-store";

describe("local free-chat quota", () => {
  const today = new Date(2026, 6, 11, 12, 0);

  beforeEach(async () => {
    await AsyncStorage.clear();
    await resetLocalFreeChatStoreForTests();
  });

  it("persists a device-local daily count", async () => {
    await expect(
      reserveLocalFreeChatTurn({ limit: 5, promptId: "daily.howsday", now: today }),
    ).resolves.toEqual({ allowed: true, count: 1 });
    await expect(getLocalFreeChatUsage(today)).resolves.toBe(1);
    await expect(
      AsyncStorage.getItem("lafla.freechat.dailyCount.2026-07-11"),
    ).resolves.toBe("1");
  });

  it("serializes rapid submissions and never crosses the free limit", async () => {
    const results = await Promise.all(
      Array.from({ length: 9 }, () =>
        reserveLocalFreeChatTurn({
          limit: 5,
          promptId: "daily.howsday",
          now: today,
        }),
      ),
    );

    expect(results.filter((result) => result.allowed)).toHaveLength(5);
    expect(results.filter((result) => !result.allowed)).toHaveLength(4);
    expect(results.at(-1)).toEqual({ allowed: false, count: 5 });
    await expect(getLocalFreeChatUsage(today)).resolves.toBe(5);
  });

  it("rolls over at device-local midnight", async () => {
    const tomorrow = new Date(2026, 6, 12, 0, 1);
    await reserveLocalFreeChatTurn({ limit: 5, promptId: "daily.howsday", now: today });

    await expect(getLocalFreeChatUsage(tomorrow)).resolves.toBe(0);
    await expect(
      reserveLocalFreeChatTurn({ limit: 5, promptId: "daily.howsday", now: tomorrow }),
    ).resolves.toEqual({ allowed: true, count: 1 });
  });

  it("recovers from corrupt persisted data", async () => {
    await AsyncStorage.multiSet([
      ["lafla.freechat.dailyCount.2026-07-11", "not-a-number"],
      ["lafla.freechat.session", "{broken"],
    ]);

    await expect(
      reserveLocalFreeChatTurn({ limit: 5, promptId: "daily.howsday", now: today }),
    ).resolves.toEqual({ allowed: true, count: 1 });
  });

  it("records premium turns without imposing a local ceiling", async () => {
    const results = await Promise.all(
      Array.from({ length: 7 }, () =>
        reserveLocalFreeChatTurn({
          limit: null,
          promptId: "work.project",
          now: today,
        }),
      ),
    );

    expect(results.every((result) => result.allowed)).toBe(true);
    expect(results.at(-1)?.count).toBe(7);
  });

  it("prunes expired daily counters without touching recent or unrelated data", async () => {
    await AsyncStorage.multiSet([
      ["lafla.freechat.dailyCount.2026-06-01", "4"],
      ["lafla.freechat.dailyCount.2026-06-27", "2"],
      ["lafla.settings.themePreference", "light"],
    ]);

    await reserveLocalFreeChatTurn({
      limit: 5,
      promptId: "daily.howsday",
      now: today,
    });

    await expect(
      AsyncStorage.getItem("lafla.freechat.dailyCount.2026-06-01"),
    ).resolves.toBeNull();
    await expect(
      AsyncStorage.getItem("lafla.freechat.dailyCount.2026-06-27"),
    ).resolves.toBe("2");
    await expect(
      AsyncStorage.getItem("lafla.settings.themePreference"),
    ).resolves.toBe("light");
  });
});
