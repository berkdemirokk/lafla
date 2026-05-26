// Lafla — Speech recognition wrapper (expo-speech-recognition).
//
// Wraps the native iOS Speech framework (iOS 17+) for pronunciation
// exercises. The dep is loaded via require() in a try/catch so the
// bundle still builds in environments where expo-speech-recognition is
// not yet installed — callers get a graceful "not available" path
// instead of a hard crash.
//
// 2026-05-26 (P0 audio session fix) — lib/tts.ts ilk speak() çağrısında
// AVAudioSessionCategoryPlayback ayarlıyor (allowsRecordingIOS: false)
// ve idempotent flag ile bir daha değiştirmiyor. Sonuç: TTS çalan bir
// sahnede kullanıcı "Konuş" basınca STT mikrofonu açmaya çalışıyor ama
// session record'a izin vermiyor → transcript boş, "Dinliyor..." donuk.
// Tüm 4 voice egzersizinde (PronouncePhrase, RoleplayChat STT,
// SpeechShadowing, ListenAndTranscribe) ortak semptom buydu.
// Fix: startListening'in başında session'ı playAndRecord'a (allowsRecording:
// true) çevir; stopListening'de geri playback-only'ye al — TTS yeniden
// çalabilsin. iOS bu iki state arası hızlı geçişi tolere eder.
//
// All public methods are async to keep the API uniform across the
// available / unavailable branches.

import { Audio } from "expo-av";

type SpeechResultEvent = {
  results?: Array<{ transcript?: string }>;
  isFinal?: boolean;
};

type SpeechErrorEvent = {
  error?: string;
  message?: string;
};

type ExpoSpeechRecognitionModule = {
  requestPermissionsAsync?: () => Promise<{ granted: boolean }>;
  getPermissionsAsync?: () => Promise<{ granted: boolean }>;
  isRecognitionAvailable?: () => boolean;
  start: (opts: {
    lang: string;
    interimResults?: boolean;
    continuous?: boolean;
  }) => void;
  stop: () => void;
  abort?: () => void;
  addListener: (
    event: "result" | "error" | "end",
    handler: (e: SpeechResultEvent | SpeechErrorEvent) => void,
  ) => { remove: () => void };
};

// Lazily resolve the native module. Wrapped in try/catch so that:
//   - missing peer dep doesn't blow up Metro bundler
//   - Expo Go (no native module) degrades cleanly
function loadModule(): ExpoSpeechRecognitionModule | null {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const mod = require("expo-speech-recognition");
    // The package exposes the API under ExpoSpeechRecognitionModule.
    return (
      (mod?.ExpoSpeechRecognitionModule as ExpoSpeechRecognitionModule) ??
      (mod?.default as ExpoSpeechRecognitionModule) ??
      (mod as ExpoSpeechRecognitionModule) ??
      null
    );
  } catch {
    return null;
  }
}

type Listener = { remove: () => void };
let activeListeners: Listener[] = [];
let activeTimeout: ReturnType<typeof setTimeout> | null = null;
let isListening = false;

// 2026-05-26 (P0 audio session fix) — iOS audio session category geçişleri.
// TTS playback-only, STT playAndRecord. İki sabit config'i tek yerde tutuyoruz
// ki driver tarafında drift olmasın. interruption + Android flag'ları tts.ts'in
// ensureAudioModeForTts() bloğuyla birebir aynı — yalnız allowsRecordingIOS
// farklı, çünkü tek değişen oydu.
async function setAudioSessionForRecording(): Promise<void> {
  try {
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      allowsRecordingIOS: true,
      staysActiveInBackground: false,
      interruptionModeIOS: 1, // DoNotMix
      interruptionModeAndroid: 1,
      shouldDuckAndroid: true,
      playThroughEarpieceAndroid: false,
    });
  } catch {
    // Best effort — başarısız olursa STT yine deneyecek, native modül
    // kendi error event'i ile sinyalleyecek.
  }
}

async function setAudioSessionForPlayback(): Promise<void> {
  try {
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      allowsRecordingIOS: false,
      staysActiveInBackground: false,
      interruptionModeIOS: 1,
      interruptionModeAndroid: 1,
      shouldDuckAndroid: true,
      playThroughEarpieceAndroid: false,
    });
  } catch {
    // ignore — TTS path zaten kendi setAudioModeAsync'ini deneyecek
  }
}

function clearActive() {
  for (const l of activeListeners) {
    try {
      l.remove();
    } catch {
      // ignore
    }
  }
  activeListeners = [];
  if (activeTimeout) {
    clearTimeout(activeTimeout);
    activeTimeout = null;
  }
  isListening = false;
}

export async function isAvailable(): Promise<boolean> {
  // 2026-05-21 — daha lenient. Önceden isRecognitionAvailable() false
  // dönerse direkt false dönüyorduk; ama iOS'ta bu fonksiyon izin VERİLMEDEN
  // önce false dönebiliyor → kullanıcı voice butonunu hiç göremezdi.
  //
  // Yeni: native modül yüklendiyse TRUE dön. Gerçek izin kontrolü
  // startListening içinde permission flow'unda yapılır; reddedilirse
  // onError tetiklenir, kullanıcı text mode'a düşer. Bu yol hem Expo
  // Go'da (require fails → false) hem prod'da (modül yükü → true) sağlam.
  return loadModule() !== null;
}

// 2026-05-26 — Permission status detail (canAskAgain) için extended interface.
// "Don't Allow" basan kullanıcı bir daha dialog göremez — UI'da Settings'e
// CTA göstermek için ayrım gerekli.
type PermissionStatus = {
  granted: boolean;
  canAskAgain: boolean;
};

export async function requestPermission(): Promise<boolean> {
  const status = await requestPermissionStatus();
  return status.granted;
}

export async function requestPermissionStatus(): Promise<PermissionStatus> {
  const mod = loadModule();
  if (!mod) return { granted: false, canAskAgain: false };
  try {
    if (typeof mod.requestPermissionsAsync === "function") {
      const res = (await mod.requestPermissionsAsync()) as {
        granted?: boolean;
        canAskAgain?: boolean;
      };
      return {
        granted: Boolean(res?.granted),
        canAskAgain: res?.canAskAgain !== false, // undefined → true (safe default)
      };
    }
    if (typeof mod.getPermissionsAsync === "function") {
      const res = (await mod.getPermissionsAsync()) as {
        granted?: boolean;
        canAskAgain?: boolean;
      };
      return {
        granted: Boolean(res?.granted),
        canAskAgain: res?.canAskAgain !== false,
      };
    }
    return { granted: false, canAskAgain: false };
  } catch {
    return { granted: false, canAskAgain: false };
  }
}

export interface StartListeningOpts {
  lang: "en-US";
  onResult: (text: string, isFinal: boolean) => void;
  onError: (e: Error) => void;
  /** Auto-stop after this many ms. Defaults to 8000. */
  timeoutMs?: number;
  /**
   * Optional AbortSignal. When fired we tear down listeners and stop the
   * native recogniser. Callers from useEffect cleanup paths should pass one
   * so a previous listen window can't deliver callbacks to a stale closure
   * after the component unmounts.
   */
  signal?: AbortSignal;
}

export async function startListening(opts: StartListeningOpts): Promise<void> {
  const mod = loadModule();
  if (!mod) {
    opts.onError(new Error("speech recognition not available"));
    return;
  }

  // Stop any in-flight session before starting a new one.
  if (isListening) {
    try {
      mod.stop();
    } catch {
      // ignore
    }
    clearActive();
  }

  // If the caller already aborted before we got going, bail before touching
  // permissions or native module state.
  if (opts.signal?.aborted) {
    opts.onError(new Error("speech recognition aborted"));
    return;
  }

  // Track whether we've handed control over to native listeners. If anything
  // throws or the signal fires before that point, we must still leave the
  // module in a clean state — wrapped in try/finally below.
  let succeeded = false;
  let abortHandler: (() => void) | null = null;

  try {
    const granted = await requestPermission();
    if (!granted) {
      opts.onError(new Error("speech recognition permission denied"));
      return;
    }

    if (opts.signal?.aborted) {
      opts.onError(new Error("speech recognition aborted"));
      return;
    }

    // 2026-05-26 (P0 audio session fix) — Permission alındıktan SONRA, native
    // start()'tan ÖNCE audio session'ı record-capable mode'a al. TTS önce çaldıysa
    // session playback-only kalmıştı; bu çağrı olmadan iOS Speech Recognition
    // mikrofona erişip transcript üretemiyor (silent fail, "Dinliyor..." donuk).
    await setAudioSessionForRecording();

    if (opts.signal?.aborted) {
      opts.onError(new Error("speech recognition aborted"));
      return;
    }

    // 2026-05-26 — Son interim'i takip et. iOS 17- "silence 3s" auto-stop
    // tetiklenirse `isFinal:true` event'i HİÇ gelmiyor; sadece interim'ler
    // gelir. `end` event'inde son interim'i final olarak emit ediyoruz ki
    // PronouncePhrase + SpeechShadowing'in `gradedThisSession` flag'i
    // sırasında grade hesaplanabilsin.
    let lastInterim = "";
    let finalEmitted = false;

    const resultListener = mod.addListener("result", (raw) => {
      if (opts.signal?.aborted) return;
      const e = raw as SpeechResultEvent;
      const transcript = e.results?.[0]?.transcript ?? "";
      const isFinal = Boolean(e.isFinal);
      if (transcript) {
        if (!isFinal) lastInterim = transcript;
        if (isFinal) finalEmitted = true;
        opts.onResult(transcript, isFinal);
      }
    });

    const errorListener = mod.addListener("error", (raw) => {
      if (opts.signal?.aborted) {
        clearActive();
        return;
      }
      const e = raw as SpeechErrorEvent;
      const message = e.message ?? e.error ?? "speech recognition error";
      opts.onError(new Error(message));
      clearActive();
    });

    const endListener = mod.addListener("end", () => {
      // 2026-05-26 (P0-3 fix) — iOS silence detection finals'ı yutuyor.
      // Son interim varsa onu final olarak emit et. Bu olmadan kullanıcı
      // konuşuyor ama grade hiç hesaplanmıyor, UI "Dinliyor..." sonsuza
      // kadar kalıyor.
      if (!finalEmitted && lastInterim && !opts.signal?.aborted) {
        try {
          opts.onResult(lastInterim, true);
        } catch {
          // listener throw ederse temizliği engelleme
        }
      }
      clearActive();
    });

    activeListeners = [resultListener, errorListener, endListener];

    // 2026-05-26 (P0-2 fix) — 8s → 12s. Türk kullanıcı düşünmek için 2-3sn
    // duraksayabilir; iOS native 3s silence kapatıyor zaten, biz timeout'u
    // safety net olarak büyük tutuyoruz.
    const timeoutMs = opts.timeoutMs ?? 12000;
    activeTimeout = setTimeout(() => {
      void stopListening();
    }, timeoutMs);

    // Wire the abort signal to a native stop + cleanup so an unmount or stop()
    // upstream severs all callbacks immediately.
    if (opts.signal) {
      abortHandler = () => {
        try {
          mod.stop();
        } catch {
          // ignore
        }
        clearActive();
      };
      opts.signal.addEventListener("abort", abortHandler, { once: true });
    }

    mod.start({
      lang: opts.lang,
      interimResults: true,
      continuous: false,
    });
    isListening = true;
    succeeded = true;
  } catch (err) {
    opts.onError(
      err instanceof Error ? err : new Error("speech recognition failed"),
    );
  } finally {
    // If anything between addListener and mod.start() threw, the registered
    // listeners would otherwise leak. Guarantee cleanup on the failure path.
    if (!succeeded) {
      // Detach the abort handler we may have just attached.
      if (abortHandler && opts.signal) {
        try {
          opts.signal.removeEventListener("abort", abortHandler);
        } catch {
          // ignore
        }
      }
      clearActive();
    }
  }
}

export async function stopListening(): Promise<void> {
  const mod = loadModule();
  if (!mod) return;
  try {
    mod.stop();
  } catch {
    // ignore — listeners will still be torn down below
  }
  clearActive();
  // 2026-05-26 (P0 audio session fix) — STT bitince session'ı TTS için
  // playback-only'ye al. NPC'nin bir sonraki replikasını okuyabilmesi için.
  // Fire-and-forget — TTS yine kendi ensureAudioModeForTts ile fallback yapar.
  void setAudioSessionForPlayback();
}
