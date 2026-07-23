// Lafla — global ErrorBoundary
//
// Catches React render-phase errors anywhere in the tree, reports them to
// Sentry via the defensive wrapper in lib/sentry.ts, and presents a graceful
// crash UI in the Cyber-Electric theme. Wrap once at the root (around
// <Stack> in app/_layout.tsx) so a single bad screen cannot take the whole
// app down.
//
// NOTE: An ErrorBoundary only catches errors thrown during render, in
// lifecycle methods, and in constructors of child components. It does NOT
// catch:
//   - Errors inside event handlers (use try/catch + captureException)
//   - Async errors (promise rejections — handle at the call site)
//   - Server-side rendering errors
//   - Errors thrown in the ErrorBoundary itself
//
// See docs/ERROR_BOUNDARY.md for usage and testing notes.

import React from "react";
import {
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { tokens } from "../theme";
import { captureException } from "../lib/sentry";
import { t } from "../lib/i18n";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Flip into the error state synchronously so the next render shows the
    // crash UI instead of attempting to re-render the broken tree.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Persist the component stack for the dev-only debug box and report
    // the error to Sentry. captureException is a safe no-op when the SDK
    // is not installed (see lib/sentry.ts).
    this.setState({ errorInfo });
    try {
      captureException(error, {
        componentStack: errorInfo.componentStack,
      });
    } catch {
      // never let the reporter itself crash the crash screen
    }
  }

  handleRestart = (): void => {
    // Resetting state to a clean slate causes children to re-mount. If the
    // underlying problem is non-deterministic (network blip, race) the app
    // will recover; if it is deterministic the boundary will catch again.
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  handleReport = (): void => {
    const { error, errorInfo } = this.state;
    const subject = encodeURIComponent("Lafla crash report");
    // 2026-05-25 (B-EDGE-6) — Önceki body sadece error.message taşıyordu;
    // componentStack yoksa kullanıcı yararsız mail atardı. Şimdi: stack
    // kırpılmış olarak eklenir.
    const stackPreview = errorInfo?.componentStack
      ? errorInfo.componentStack.split("\n").slice(0, 10).join("\n")
      : "(stack yok)";
    const bodyLines = [
      "Bir hata oluştu. Aşağıdaki detaylar otomatik olarak Sentry'ye gönderildi.",
      "",
      `Hata: ${error?.message ?? "unknown"}`,
      `Zaman: ${new Date().toISOString()}`,
      "",
      "Stack:",
      stackPreview,
      "",
      "Ne yapıyordunuz?",
      "",
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    const url = `mailto:berkkdemirok@gmail.com?subject=${subject}&body=${body}`;
    Linking.openURL(url).catch((e) => {
      // openURL can reject on simulators with no mail client configured
      if (__DEV__) console.warn("[ErrorBoundary] mailto failed", e);
    });
  };

  render(): React.ReactNode {
    if (!this.state.hasError) {
      return this.props.children;
    }

    const { error, errorInfo } = this.state;
    const stackPreview = errorInfo?.componentStack
      ? errorInfo.componentStack.split("\n").slice(0, 10).join("\n")
      : null;

    return (
      <View style={styles.root}>
        <View style={styles.content}>
          <Text style={styles.emoji}>💥</Text>
          <Text style={styles.title}>{t("error_boundary.title")}</Text>
          <Text style={styles.subtitle}>{t("error_boundary.subtitle")}</Text>

          {__DEV__ && error ? (
            <ScrollView
              style={styles.debugBox}
              contentContainerStyle={styles.debugContent}
            >
              <Text style={styles.debugLabel}>DEV — error.message</Text>
              <Text style={styles.debugText}>{error.message}</Text>
              {stackPreview ? (
                <>
                  <Text style={[styles.debugLabel, styles.debugLabelSpaced]}>
                    componentStack (first 10 lines)
                  </Text>
                  <Text style={styles.debugText}>{stackPreview}</Text>
                </>
              ) : null}
            </ScrollView>
          ) : null}

          <View style={styles.actions}>
            <Pressable
              onPress={this.handleRestart}
              style={({ pressed }) => [
                styles.btn,
                styles.btnPrimary,
                pressed && styles.btnPressed,
              ]}
              accessibilityRole="button"
              accessibilityLabel={t("error_boundary.restart_label")}
            >
              <Text style={styles.btnPrimaryLabel}>{t("error_boundary.restart")}</Text>
            </Pressable>

            <Pressable
              onPress={this.handleReport}
              style={({ pressed }) => [
                styles.btn,
                styles.btnGhost,
                pressed && styles.btnPressed,
              ]}
              accessibilityRole="button"
              accessibilityLabel={t("error_boundary.report")}
            >
              <Text style={styles.btnGhostLabel}>{t("error_boundary.report")}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: tokens.bg.app,
    paddingHorizontal: tokens.spacing.md,
    paddingVertical: tokens.spacing.lg,
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
  },
  emoji: {
    fontSize: 72,
    marginBottom: tokens.spacing.md,
  },
  title: {
    fontSize: 28,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    textAlign: "center",
    marginBottom: tokens.spacing.sm,
    letterSpacing: 0.3,
  },
  subtitle: {
    fontSize: 16,
    color: tokens.text.secondaryFixedDim,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: tokens.spacing.lg,
    paddingHorizontal: tokens.spacing.sm,
  },
  debugBox: {
    width: "100%",
    maxHeight: 220,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderRadius: tokens.radius.base,
    borderWidth: 1,
    borderColor: tokens.border.outline,
    marginBottom: tokens.spacing.lg,
  },
  debugContent: {
    padding: tokens.spacing.sm,
  },
  debugLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.primary,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    marginBottom: tokens.spacing.xs,
  },
  debugLabelSpaced: {
    marginTop: tokens.spacing.sm,
  },
  debugText: {
    fontSize: 12,
    color: tokens.text.primary,
    fontFamily: "monospace",
    lineHeight: 16,
  },
  actions: {
    width: "100%",
    gap: tokens.spacing.sm,
  },
  btn: {
    paddingVertical: 16,
    paddingHorizontal: tokens.spacing.md,
    borderRadius: tokens.radius.full,
    alignItems: "center",
    justifyContent: "center",
  },
  btnPrimary: {
    backgroundColor: tokens.brand.primary,
  },
  btnGhost: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: tokens.border.outline,
  },
  btnPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  btnPrimaryLabel: {
    fontSize: 16,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.onPrimary,
    letterSpacing: 0.3,
  },
  btnGhostLabel: {
    fontSize: 16,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
    letterSpacing: 0.3,
  },
});

export default ErrorBoundary;
