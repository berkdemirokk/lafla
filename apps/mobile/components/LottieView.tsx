import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Defensive wrapper around `lottie-react-native`.
 *
 * The native Lottie SDK is an optional dependency: the project may run without
 * it installed (e.g. on a stripped-down dev build, in Expo Go before native
 * modules are linked, or on platforms where Lottie hasn't been added yet).
 *
 * To keep callers ergonomic and crash-free we attempt to `require()` the
 * module lazily inside a try/catch. If resolution fails for *any* reason
 * (module missing, native module not linked, runtime throw), we degrade to
 * a silent placeholder so screens render normally without their animation.
 *
 * Once `lottie-react-native` is installed and configured, callers do not need
 * to change — this wrapper will start rendering the real animation
 * automatically.
 */

export type LottieViewProps = {
  /** The Lottie JSON. `unknown` because we don't want to assume the SDK's type is loaded. */
  source: unknown;
  /** Square size in px (applied to both width and height). */
  size: number;
  autoPlay?: boolean;
  loop?: boolean;
  onAnimationFinish?: () => void;
  /**
   * Optional fallback text rendered if the SDK is missing. If omitted, the
   * fallback renders `null` (truly silent). Useful in development for spotting
   * missing animations on screen.
   */
  fallbackText?: string;
};

// Attempt to resolve the SDK once at module load. Wrapped in try/catch so a
// missing module never crashes import of this file.
let NativeLottieView: React.ComponentType<any> | null = null;
let resolutionError: unknown = null;

try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
  const mod = require('lottie-react-native');
  // The package exports the component as default in v6+, but some versions
  // expose it as a named `LottieView`. Handle both shapes defensively.
  NativeLottieView =
    (mod && (mod.default || mod.LottieView || mod)) as React.ComponentType<any> | null;
  if (typeof NativeLottieView !== 'function' && typeof NativeLottieView !== 'object') {
    NativeLottieView = null;
  }
} catch (err) {
  resolutionError = err;
  NativeLottieView = null;
}

export default function LottieView(props: LottieViewProps): React.ReactElement | null {
  const {
    source,
    size,
    autoPlay = true,
    loop = true,
    onAnimationFinish,
    fallbackText,
  } = props;

  // SDK missing → silent fallback (or labelled placeholder when fallbackText given).
  if (!NativeLottieView) {
    if (fallbackText && __DEV__) {
      return (
        <View
          style={[
            styles.fallback,
            { width: size, height: size },
          ]}
          accessibilityRole="image"
          accessibilityLabel={fallbackText}
        >
          <Text style={styles.fallbackText} numberOfLines={2}>
            {fallbackText}
          </Text>
        </View>
      );
    }
    return null;
  }

  // SDK available → render the real component. We pass through the props the
  // wrapper documents; everything else is handled by the underlying SDK.
  return (
    <NativeLottieView
      source={source}
      autoPlay={autoPlay}
      loop={loop}
      onAnimationFinish={onAnimationFinish}
      style={{ width: size, height: size }}
      // resizeMode contain keeps designs intact on non-square assets.
      resizeMode="contain"
    />
  );
}

/** True when the underlying `lottie-react-native` module loaded successfully. */
export const isLottieAvailable: boolean = NativeLottieView !== null;

/** Resolution error (if any). `null` when the SDK loaded cleanly. */
export const lottieResolutionError: unknown = resolutionError;

const styles = StyleSheet.create({
  fallback: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: 'rgba(246, 255, 0, 0.08)', // Cyber-Electric yellow @ 8%
    borderWidth: 1,
    borderColor: 'rgba(246, 255, 0, 0.35)',
  },
  fallbackText: {
    color: '#f6ff00',
    fontSize: 10,
    textAlign: 'center',
    paddingHorizontal: 4,
  },
});
