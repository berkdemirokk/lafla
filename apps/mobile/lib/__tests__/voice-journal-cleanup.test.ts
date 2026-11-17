const mockDeleteFile = jest.fn();

jest.mock("expo-file-system", () => ({
  documentDirectory: "file:///documents/",
  deleteAsync: (uri: string, options: unknown) =>
    mockDeleteFile(uri, options),
  getInfoAsync: jest.fn(),
  makeDirectoryAsync: jest.fn(),
  readDirectoryAsync: jest.fn(),
}));

import AsyncStorage from "@react-native-async-storage/async-storage";
import { clearAll, getEntries, saveEntry } from "../voice-journal";

describe("voice journal cleanup", () => {
  beforeEach(async () => {
    jest.clearAllMocks();
    await AsyncStorage.clear();
    mockDeleteFile.mockResolvedValue(undefined);
  });

  it("waits for every indexed recording to be deleted before clearing metadata", async () => {
    let releaseFirstDelete!: () => void;
    mockDeleteFile
      .mockImplementationOnce(
        () => new Promise<void>((resolve) => (releaseFirstDelete = resolve)),
      )
      .mockResolvedValueOnce(undefined);
    await AsyncStorage.setItem(
      "lafla.voice-journal.index",
      JSON.stringify([
        {
          id: "one",
          uri: "file:///documents/voice-journal/one.m4a",
          recordedAt: "2026-01-01T00:00:00.000Z",
          durationMs: 5000,
        },
        {
          id: "two",
          uri: "file:///documents/voice-journal/two.m4a",
          recordedAt: "2026-01-02T00:00:00.000Z",
          durationMs: 5000,
        },
      ]),
    );

    let completed = false;
    const cleanup = clearAll().then(() => {
      completed = true;
    });
    await new Promise<void>((resolve) => setImmediate(resolve));
    expect(mockDeleteFile).toHaveBeenCalledTimes(2);
    expect(completed).toBe(false);

    releaseFirstDelete();
    await cleanup;
    expect(mockDeleteFile).toHaveBeenCalledTimes(2);
    await expect(
      AsyncStorage.getItem("lafla.voice-journal.index"),
    ).resolves.toBeNull();
  });

  it("never sweeps files when the metadata index is corrupt", async () => {
    await AsyncStorage.setItem(
      "lafla.voice-journal.index",
      JSON.stringify([{ id: "broken", uri: 42 }]),
    );

    await expect(getEntries()).rejects.toThrow("index is invalid");
    expect(mockDeleteFile).not.toHaveBeenCalled();
  });

  it("keeps evicted files when the replacement index cannot be saved", async () => {
    const entries = Array.from({ length: 30 }, (_, index) => ({
      id: String(index),
      uri: `file:///documents/voice-journal/${index}.m4a`,
      recordedAt: new Date(2026, 0, index + 1).toISOString(),
      durationMs: 5000,
    }));
    await AsyncStorage.setItem(
      "lafla.voice-journal.index",
      JSON.stringify(entries),
    );
    jest
      .spyOn(AsyncStorage, "setItem")
      .mockRejectedValueOnce(new Error("disk full"));

    await expect(
      saveEntry({
        uri: "file:///documents/voice-journal/new.m4a",
        durationMs: 10000,
      }),
    ).rejects.toThrow("disk full");
    expect(mockDeleteFile).not.toHaveBeenCalled();
  });
});
