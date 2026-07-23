import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";

import { captureException } from "./sentry";
import { supabase } from "./supabase";

export interface AcousticWordScore {
  word: string;
  accuracy: number;
  errorType: string;
}

export interface AcousticPronunciationResult {
  provider: "azure";
  transcript: string;
  overall: number;
  accuracy: number | null;
  fluency: number | null;
  completeness: number | null;
  prosody: number | null;
  words: AcousticWordScore[];
}

export interface AcousticRecordingSession {
  recording: Audio.Recording;
  startedAt: number;
}

let availabilityPromise: Promise<boolean> | null = null;

const preset = Audio.RecordingOptionsPresets.HIGH_QUALITY;
const PCM_RECORDING_OPTIONS: Audio.RecordingOptions = {
  ...preset,
  isMeteringEnabled: true,
  ios: {
    ...preset.ios,
    extension: ".wav",
    outputFormat: Audio.IOSOutputFormat.LINEARPCM,
    audioQuality: Audio.IOSAudioQuality.HIGH,
    sampleRate: 16000,
    numberOfChannels: 1,
    bitRate: 256000,
    linearPCMBitDepth: 16,
    linearPCMIsBigEndian: false,
    linearPCMIsFloat: false,
  },
};

async function restorePlaybackMode(): Promise<void> {
  await Audio.setAudioModeAsync({
    playsInSilentModeIOS: true,
    allowsRecordingIOS: false,
    staysActiveInBackground: false,
    interruptionModeIOS: 1,
    interruptionModeAndroid: 1,
    shouldDuckAndroid: true,
    playThroughEarpieceAndroid: false,
  }).catch((error) => {
    captureException(error, {
      module: "acoustic-pronunciation",
      stage: "restorePlaybackMode",
    });
  });
}

export function resetAcousticAvailabilityCache(): void {
  availabilityPromise = null;
}

export async function isAcousticPronunciationAvailable(): Promise<boolean> {
  if (availabilityPromise) return availabilityPromise;
  availabilityPromise = (async () => {
    try {
      const { data, error } = await supabase.functions.invoke(
        "pronunciation-assess",
        { body: { action: "status" } },
      );
      if (error) return false;
      return data?.available === true;
    } catch {
      return false;
    }
  })();
  return availabilityPromise;
}

export async function startAcousticRecording(): Promise<AcousticRecordingSession> {
  const permission = await Audio.requestPermissionsAsync();
  if (!permission.granted) {
    throw new Error("microphone permission denied");
  }
  await Audio.setAudioModeAsync({
    playsInSilentModeIOS: true,
    allowsRecordingIOS: true,
    staysActiveInBackground: false,
    interruptionModeIOS: 1,
    interruptionModeAndroid: 1,
    shouldDuckAndroid: true,
    playThroughEarpieceAndroid: false,
  });
  const recording = new Audio.Recording();
  try {
    await recording.prepareToRecordAsync(PCM_RECORDING_OPTIONS);
    await recording.startAsync();
    return { recording, startedAt: Date.now() };
  } catch (error) {
    await restorePlaybackMode();
    throw error;
  }
}

export async function cancelAcousticRecording(
  session: AcousticRecordingSession,
): Promise<void> {
  const uri = session.recording.getURI();
  await session.recording.stopAndUnloadAsync().catch(() => undefined);
  await restorePlaybackMode();
  if (uri) {
    await FileSystem.deleteAsync(uri, { idempotent: true }).catch(() => undefined);
  }
}

export async function stopAndAssessPronunciation(
  session: AcousticRecordingSession,
  referenceText: string,
): Promise<AcousticPronunciationResult> {
  let uri: string | null = null;
  try {
    await session.recording.stopAndUnloadAsync();
    uri = session.recording.getURI();
    if (!uri) throw new Error("pronunciation recording file missing");
    const audioBase64 = await FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    const { data, error } = await supabase.functions.invoke(
      "pronunciation-assess",
      { body: { referenceText, audioBase64 } },
    );
    if (error) throw error;
    if (
      !data ||
      data.provider !== "azure" ||
      typeof data.overall !== "number" ||
      !Array.isArray(data.words)
    ) {
      throw new Error("invalid pronunciation assessment response");
    }
    return data as AcousticPronunciationResult;
  } catch (error) {
    captureException(error, {
      module: "acoustic-pronunciation",
      stage: "stopAndAssessPronunciation",
    });
    throw error;
  } finally {
    await restorePlaybackMode();
    if (uri) {
      await FileSystem.deleteAsync(uri, { idempotent: true }).catch(() => undefined);
    }
  }
}
