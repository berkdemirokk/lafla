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
import { clearAll } from "../voice-journal";

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
});
