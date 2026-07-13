import AsyncStorage from "@react-native-async-storage/async-storage";

import { getAllEntries, setTodayEntry } from "../daily-diary";

const STORAGE_KEY = "lafla.diary.entries";

describe("daily diary persistence", () => {
  beforeEach(async () => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
    await AsyncStorage.clear();
  });

  it("serializes concurrent edits without corrupting the journal", async () => {
    await Promise.all([setTodayEntry("First thought"), setTodayEntry("Final thought")]);

    const entries = await getAllEntries();
    expect(entries).toHaveLength(1);
    expect(entries[0]?.text).toBe("Final thought");
  });

  it("surfaces write failures instead of pretending the entry was saved", async () => {
    jest
      .spyOn(AsyncStorage, "setItem")
      .mockRejectedValueOnce(new Error("disk full"));

    await expect(setTodayEntry("Keep this sentence")).rejects.toThrow(
      "disk full",
    );
    await expect(AsyncStorage.getItem(STORAGE_KEY)).resolves.toBeNull();
  });

  it("does not replace an invalid personal journal with an empty list", async () => {
    const damaged = "{not-json";
    await AsyncStorage.setItem(STORAGE_KEY, damaged);

    await expect(setTodayEntry("New sentence")).rejects.toThrow();
    await expect(AsyncStorage.getItem(STORAGE_KEY)).resolves.toBe(damaged);
  });
});
