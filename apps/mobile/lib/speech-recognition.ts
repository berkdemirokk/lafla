// Lafla — Speech recognition wrapper (expo-speech-recognition).
//
// Wraps the native iOS Speech framework (iOS 17+) for pronunciation
// exercises. The dep is loaded via require() in a try/catch so the
// bundle still builds in environments where expo-speech-recognition is
// not yet installed — callers get a graceful "not available" path
// instead of a hard crash.
//
// All public methods are async to keep the API uniform across the
// available / unavailable branches.

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
  const mod = loadModule();
  if (!mod) return false;
  try {
    if (typeof mod.isRecognitionAvailable === "function") {
      return Boolean(mod.isRecognitionAvailable());
    }
    // If the function is missing but the module loaded, assume yes —
    // older versions of the package don't expose isRecognitionAvailable.
    return true;
  } catch {
    return false;
  }
}

export async function requestPermission(): Promise<boolean> {
  const mod = loadModule();
  if (!mod) return false;
  try {
    if (typeof mod.requestPermissionsAsync === "function") {
      const res = await mod.requestPermissionsAsync();
      return Boolean(res?.granted);
    }
    if (typeof mod.getPermissionsAsync === "function") {
      const res = await mod.getPermissionsAsync();
      return Boolean(res?.granted);
    }
    return false;
  } catch {
    return false;
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

    const resultListener = mod.addListener("result", (raw) => {
      if (opts.signal?.aborted) return;
      const e = raw as SpeechResultEvent;
      const transcript = e.results?.[0]?.transcript ?? "";
      const isFinal = Boolean(e.isFinal);
      if (transcript) opts.onResult(transcript, isFinal);
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
      clearActive();
    });

    activeListeners = [resultListener, errorListener, endListener];

    const timeoutMs = opts.timeoutMs ?? 8000;
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
}
