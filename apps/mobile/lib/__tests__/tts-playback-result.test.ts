const mockSpeechSpeak = jest.fn();
const mockSpeechStop = jest.fn();

jest.mock("expo-speech", () => ({
  speak: (...args: unknown[]) => mockSpeechSpeak(...args),
  stop: () => mockSpeechStop(),
}));

jest.mock("expo-av", () => ({
  Audio: {
    setAudioModeAsync: jest.fn().mockResolvedValue(undefined),
    Sound: { createAsync: jest.fn() },
  },
}));

jest.mock("expo-constants", () => ({
  __esModule: true,
  default: { expoConfig: { extra: {} } },
}));

jest.mock("../../assets/audio", () => ({ AUDIO_INDEX: {} }));
jest.mock("../tts-cache", () => ({
  getCachedAudio: jest.fn().mockResolvedValue(null),
  setCachedAudio: jest.fn().mockResolvedValue(null),
  hashText: jest.fn(() => "missing"),
  pruneOlderThan: jest.fn().mockResolvedValue(undefined),
}));

import { speak, stop } from "../tts";

describe("TTS playback result", () => {
  afterEach(() => {
    stop();
    jest.clearAllMocks();
  });

  it("rejects empty utterances without touching native speech", async () => {
    await expect(speak("   ")).resolves.toBe(false);
    expect(mockSpeechSpeak).not.toHaveBeenCalled();
  });

  it("reports a native speech startup error", async () => {
    mockSpeechSpeak.mockImplementation((_: string, options: { onError: () => void }) => {
      options.onError();
    });

    await expect(speak("Audio failure")).resolves.toBe(false);
  });

  it("reports success only after native speech starts", async () => {
    mockSpeechSpeak.mockImplementation((_: string, options: { onStart: () => void }) => {
      options.onStart();
    });

    await expect(speak("Audio started")).resolves.toBe(true);
  });
});
