// Offline / back-online banner — fixed-top status indicator.
//
// Mount once near the root (e.g. inside SafeAreaProvider, above the Stack in
// app/_layout.tsx). Shows a yellow banner while offline, then briefly shows
// a tertiary-blue "back online" confirmation that fades after 2s.
//
// Uses the defensive useNetworkStatus hook, so it is a no-op (always-online)
// when @react-native-community/netinfo is not installed.

import { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { tokens } from "../theme";
import { useNetworkStatus } from "../lib/network";

const BACK_ONLINE_DURATION_MS = 2000;
const FADE_DURATION_MS = 250;

type BannerMode = "hidden" | "offline" | "back-online";

export function OfflineBanner() {
  const { isOnline } = useNetworkStatus();
  const [mode, setMode] = useState<BannerMode>("hidden");
  const opacity = useRef(new Animated.Value(0)).current;
  // Track whether we have ever observed an offline state, so we do NOT
  // flash "Tekrar çevrimiçi" on the very first render of a session that
  // started online (which would be confusing — there was nothing to recover
  // from).
  const wasOfflineRef = useRef(false);

  useEffect(() => {
    let cancelled = false;
    let hideTimer: ReturnType<typeof setTimeout> | undefined;

    if (!isOnline) {
      wasOfflineRef.current = true;
      setMode("offline");
      Animated.timing(opacity, {
        toValue: 1,
        duration: FADE_DURATION_MS,
        useNativeDriver: true,
      }).start();
    } else if (wasOfflineRef.current) {
      // We just recovered — flash the confirmation, then fade out.
      setMode("back-online");
      Animated.timing(opacity, {
        toValue: 1,
        duration: FADE_DURATION_MS,
        useNativeDriver: true,
      }).start();

      hideTimer = setTimeout(() => {
        if (cancelled) return;
        Animated.timing(opacity, {
          toValue: 0,
          duration: FADE_DURATION_MS,
          useNativeDriver: true,
        }).start(() => {
          if (cancelled) return;
          setMode("hidden");
        });
      }, BACK_ONLINE_DURATION_MS);
    } else {
      // First render and online — keep banner hidden, no flash.
      opacity.setValue(0);
      setMode("hidden");
    }

    return () => {
      cancelled = true;
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, [isOnline, opacity]);

  if (mode === "hidden") return null;

  const isOffline = mode === "offline";
  const message = isOffline
    ? "Çevrimdışısın — ilerlemen güvende, internet gelince senkron olur."
    : "Tekrar çevrimiçi ✓";

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.container,
        isOffline ? styles.offline : styles.online,
        { opacity },
      ]}
      accessibilityRole="alert"
      accessibilityLiveRegion="polite"
    >
      <Text
        style={[
          styles.text,
          isOffline ? styles.offlineText : styles.onlineText,
        ]}
        numberOfLines={2}
      >
        {message}
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 44, // leave room for the status bar / notch
    paddingBottom: 10,
    paddingHorizontal: 16,
    zIndex: 1000,
    elevation: 12,
  },
  offline: {
    backgroundColor: tokens.brand.primary,
    borderBottomWidth: 1,
    borderBottomColor: tokens.brand.primaryFixedDim,
  },
  online: {
    backgroundColor: tokens.brand.tertiary,
    borderBottomWidth: 1,
    borderBottomColor: tokens.brand.tertiary,
  },
  text: {
    fontSize: 13,
    fontWeight: tokens.weight.semibold,
    textAlign: "center",
  },
  offlineText: {
    color: tokens.brand.onPrimary,
  },
  onlineText: {
    color: tokens.brand.onTertiary,
  },
});
