import { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "../components/Button";
import { ThemedStatusBar } from "../components/ThemedStatusBar";
import { useTranslation } from "../lib/i18n";
import {
  getPermissionStatus,
  isAvailable,
  requestPermissionStatus,
  startListening,
  stopListening,
  type PermissionStatus,
} from "../lib/speech-recognition";
import { tokens } from "../theme";

type ProbeState = "idle" | "listening" | "passed" | "failed";

const copy = {
  tr: {
    title: "Ses teşhisi",
    subtitle: "Mikrofon ve konuşma algılama zincirini gerçek cihazda sınar.",
    module: "Konuşma modülü",
    permission: "Mikrofon izni",
    probe: "Canlı algılama",
    available: "Hazır",
    unavailable: "Bu yapıda kullanılamıyor",
    granted: "İzin verildi",
    denied: "İzin verilmedi",
    askable: "İzin istenebilir",
    blocked: "Ayarlar'dan izin gerekli",
    idle: "Henüz denenmedi",
    listening: "Dinleniyor... İngilizce kısa bir cümle söyle.",
    passed: "Ses algılandı",
    failed: "Algılama başarısız",
    refresh: "Durumu yenile",
    permissionAction: "Mikrofon izni ver",
    start: "Canlı testi başlat",
    stop: "Testi durdur",
    transcript: "Algılanan metin",
  },
  en: {
    title: "Voice diagnostics",
    subtitle: "Tests the microphone and speech recognition chain on this device.",
    module: "Speech module",
    permission: "Microphone permission",
    probe: "Live recognition",
    available: "Ready",
    unavailable: "Unavailable in this build",
    granted: "Permission granted",
    denied: "Permission not granted",
    askable: "Permission can be requested",
    blocked: "Permission required in Settings",
    idle: "Not tested yet",
    listening: "Listening... Say a short English sentence.",
    passed: "Speech detected",
    failed: "Recognition failed",
    refresh: "Refresh status",
    permissionAction: "Grant microphone permission",
    start: "Start live test",
    stop: "Stop test",
    transcript: "Recognized text",
  },
} as const;

export default function VoiceDiagnosticsScreen() {
  const { locale } = useTranslation();
  const labels = copy[locale === "tr" ? "tr" : "en"];
  const [available, setAvailable] = useState(false);
  const [permission, setPermission] = useState<PermissionStatus>({
    granted: false,
    canAskAgain: true,
  });
  const [probeState, setProbeState] = useState<ProbeState>("idle");
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState("");
  const controllerRef = useRef<AbortController | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearProbeTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  };

  const refresh = async () => {
    const [moduleAvailable, permissionStatus] = await Promise.all([
      isAvailable(),
      getPermissionStatus(),
    ]);
    setAvailable(moduleAvailable);
    setPermission(permissionStatus);
  };

  useEffect(() => {
    void refresh();
    return () => {
      clearProbeTimeout();
      controllerRef.current?.abort();
      void stopListening();
    };
  }, []);

  const requestPermission = async () => {
    setPermission(await requestPermissionStatus());
  };

  const stopProbe = async () => {
    clearProbeTimeout();
    controllerRef.current?.abort();
    controllerRef.current = null;
    await stopListening();
    setProbeState((current) => (current === "passed" ? current : "idle"));
  };

  const startProbe = async () => {
    clearProbeTimeout();
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;
    setTranscript("");
    setError("");
    setProbeState("listening");

    await startListening({
      lang: "en-US",
      timeoutMs: 7000,
      signal: controller.signal,
      onResult: (text, isFinal) => {
        setTranscript(text);
        if (isFinal) {
          clearProbeTimeout();
          setProbeState("passed");
          void refresh();
        }
      },
      onError: (reason) => {
        clearProbeTimeout();
        setError(reason.message);
        setProbeState("failed");
        void refresh();
      },
    });

    timeoutRef.current = setTimeout(() => {
      setProbeState((current) => {
        if (current !== "listening") return current;
        setError("No speech result was returned before timeout.");
        return "failed";
      });
    }, 7500);
  };

  const permissionText = permission.granted
    ? labels.granted
    : `${labels.denied} · ${permission.canAskAgain ? labels.askable : labels.blocked}`;
  const probeText =
    probeState === "listening"
      ? labels.listening
      : probeState === "passed"
        ? labels.passed
        : probeState === "failed"
          ? labels.failed
          : labels.idle;

  return (
    <SafeAreaView style={styles.safe} edges={["bottom"]}>
      <Stack.Screen options={{ title: labels.title }} />
      <ThemedStatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.content}
      >
        <Text style={styles.subtitle}>{labels.subtitle}</Text>
        <StatusRow
          label={labels.module}
          value={available ? labels.available : labels.unavailable}
          ok={available}
        />
        <StatusRow
          label={labels.permission}
          value={permissionText}
          ok={permission.granted}
        />
        <StatusRow
          label={labels.probe}
          value={probeText}
          ok={probeState === "passed"}
        />

        {transcript ? (
          <View style={styles.result}>
            <Text style={styles.resultLabel}>{labels.transcript}</Text>
            <Text selectable style={styles.resultText}>
              {transcript}
            </Text>
          </View>
        ) : null}
        {error ? (
          <Text selectable style={styles.error}>
            {error}
          </Text>
        ) : null}

        <View style={styles.actions}>
          <Button label={labels.refresh} variant="secondary" onPress={refresh} />
          {!permission.granted && permission.canAskAgain ? (
            <Button label={labels.permissionAction} onPress={requestPermission} />
          ) : null}
          {probeState === "listening" ? (
            <Button label={labels.stop} variant="secondary" onPress={stopProbe} />
          ) : (
            <Button
              label={labels.start}
              onPress={startProbe}
              disabled={!available}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function StatusRow({ label, value, ok }: { label: string; value: string; ok: boolean }) {
  return (
    <View style={styles.statusRow}>
      <View
        style={[
          styles.statusDot,
          { backgroundColor: ok ? tokens.semantic.success : tokens.semantic.warning },
        ]}
      />
      <View style={styles.statusText}>
        <Text style={styles.statusLabel}>{label}</Text>
        <Text selectable style={styles.statusValue}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  content: { padding: tokens.spacing.md, gap: tokens.spacing.sm },
  subtitle: {
    color: tokens.text.secondary,
    fontFamily: tokens.font.sansRegular,
    fontSize: 15,
    lineHeight: 22,
    paddingBottom: tokens.spacing.base,
  },
  statusRow: {
    minHeight: 72,
    borderRadius: tokens.radius.sm,
    backgroundColor: tokens.bg.surfaceContainer,
    padding: tokens.spacing.sm,
    flexDirection: "row",
    alignItems: "center",
    gap: tokens.spacing.sm,
  },
  statusDot: { width: 10, height: 10, borderRadius: 5 },
  statusText: { flex: 1, gap: tokens.spacing.xs },
  statusLabel: {
    color: tokens.text.primary,
    fontFamily: tokens.font.sansBold,
    fontSize: 15,
  },
  statusValue: {
    color: tokens.text.secondary,
    fontFamily: tokens.font.sansRegular,
    fontSize: 13,
    lineHeight: 18,
  },
  result: {
    borderRadius: tokens.radius.sm,
    backgroundColor: tokens.semantic.successContainer,
    padding: tokens.spacing.sm,
    gap: tokens.spacing.xs,
  },
  resultLabel: {
    color: tokens.semantic.onSuccessContainer,
    fontFamily: tokens.font.sansBold,
    fontSize: 13,
  },
  resultText: {
    color: tokens.semantic.onSuccessContainer,
    fontFamily: tokens.font.sansRegular,
    fontSize: 16,
    lineHeight: 23,
  },
  error: {
    color: tokens.semantic.onErrorContainer,
    backgroundColor: tokens.semantic.errorContainer,
    borderRadius: tokens.radius.sm,
    padding: tokens.spacing.sm,
    fontFamily: tokens.font.sansRegular,
    fontSize: 13,
    lineHeight: 19,
  },
  actions: { gap: tokens.spacing.base, paddingTop: tokens.spacing.base },
});
