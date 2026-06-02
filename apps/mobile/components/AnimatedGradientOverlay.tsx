/**
 * AnimatedGradientOverlay.tsx
 * ──────────────────────────────────────────────────────────────────────
 * Neon Noir gradient overlay for scene cards.
 *
 * Instead of expo-linear-gradient (not installed), we layer multiple
 * Animated.View elements to achieve:
 *   1. Pulsing color wash (mode accent at low opacity)
 *   2. Bottom darkening (text readability on card imagery)
 *   3. Corner vignettes (subtle depth / cinematic feel)
 *
 * Uses React Native's built-in Animated API with `useNativeDriver: true`
 * for all opacity animations — keeps everything on the UI thread at 60fps.
 *
 * The pulse animation only runs when `isActive` is true so off-screen
 * cards don't waste battery.
 */

import React, { memo, useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import type { SceneMode } from '../data/scenes';
import { tokens } from '../theme';

// ─── Props ───────────────────────────────────────────────────────────

interface AnimatedGradientOverlayProps {
  /** Current scene mode — determines which accent family to use */
  mode: SceneMode;
  /** Resolved accent color passed from parent (pink or cyan) */
  accentColor: string;
  /** Whether this card is currently visible / active in the viewport */
  isActive?: boolean;
}

// ─── Component ───────────────────────────────────────────────────────

const AnimatedGradientOverlay: React.FC<AnimatedGradientOverlayProps> = ({
  mode,
  accentColor,
  isActive = true,
}) => {
  // ── Pulse animation value (opacity: 0.20 → 0.35 → 0.20) ──────────
  const pulseAnim = useRef(new Animated.Value(0.20)).current;

  useEffect(() => {
    // Only run the animation when the card is active (visible).
    if (!isActive) {
      // Reset to resting opacity and bail out.
      pulseAnim.setValue(0.20);
      return;
    }

    // Infinite loop: 0.20 → 0.35 → 0.20 over 8 seconds total
    const loop = Animated.loop(
      Animated.sequence([
        // Breathe in — 4s ease to peak
        Animated.timing(pulseAnim, {
          toValue: 0.35,
          duration: 4000,
          useNativeDriver: true,
        }),
        // Breathe out — 4s ease back to base
        Animated.timing(pulseAnim, {
          toValue: 0.20,
          duration: 4000,
          useNativeDriver: true,
        }),
      ]),
    );

    loop.start();

    // Cleanup: stop the animation when unmounting or going inactive
    return () => {
      loop.stop();
    };
  }, [isActive, pulseAnim]);

  return (
    <View style={StyleSheet.absoluteFillObject} pointerEvents="none">
      {/* ─────────────────────────────────────────────────────────────
       * LAYER 1 — Color Wash
       * Semi-transparent accent overlay that pulses gently.
       * The accent color is determined by mode:
       *   flirt/bar/order → pink (tokens.brand.primary)
       *   work/airport/daily/ielts → cyan (tokens.brand.tertiary)
       * ──────────────────────────────────────────────────────────── */}
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          {
            backgroundColor: accentColor,
            opacity: pulseAnim,
          },
        ]}
      />

      {/* ─────────────────────────────────────────────────────────────
       * LAYER 2 — Bottom Darkening (pseudo-gradient for text)
       * Two stacked Views simulate a top-to-bottom gradient:
       *   • Upper band (25%-50%): lighter black overlay for transition
       *   • Lower band (bottom 50%): heavier black overlay for contrast
       * ──────────────────────────────────────────────────────────── */}
      <View style={StyleSheet.absoluteFillObject}>
        {/* Transition zone — sits in the 25%→50% vertical band */}
        <View style={styles.darkTransition} />
        {/* Heavy darkening — bottom 50% of the card */}
        <View style={styles.darkBottom} />
      </View>

      {/* ─────────────────────────────────────────────────────────────
       * LAYER 3 — Vignette
       * Four corner patches with rounded inner edges, creating
       * a subtle cinematic vignette / depth effect.
       * ──────────────────────────────────────────────────────────── */}
      <View style={StyleSheet.absoluteFillObject}>
        {/* Top-left */}
        <View style={[styles.vignetteCorner, styles.vignetteTopLeft]} />
        {/* Top-right */}
        <View style={[styles.vignetteCorner, styles.vignetteTopRight]} />
        {/* Bottom-left */}
        <View style={[styles.vignetteCorner, styles.vignetteBottomLeft]} />
        {/* Bottom-right */}
        <View style={[styles.vignetteCorner, styles.vignetteBottomRight]} />
      </View>
    </View>
  );
};

// ─── Styles ──────────────────────────────────────────────────────────

/** Shared size for vignette corner patches */
const VIGNETTE_SIZE = 80;

const styles = StyleSheet.create({
  // ── Layer 2: Bottom darkening ──────────────────────────────────────

  /** Lighter transition zone — positioned at 25% from top, 25% tall */
  darkTransition: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: '25%',
    height: '25%',
    backgroundColor: 'rgba(0,0,0,0.35)',
  },

  /** Heavy darkening — bottom 50% of the card */
  darkBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },

  // ── Layer 3: Vignette corners ──────────────────────────────────────

  /** Base style shared by all four corners */
  vignetteCorner: {
    position: 'absolute',
    width: VIGNETTE_SIZE,
    height: VIGNETTE_SIZE,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },

  /** Top-left: rounded on the inner (bottom-right) edge */
  vignetteTopLeft: {
    top: 0,
    left: 0,
    borderBottomRightRadius: VIGNETTE_SIZE,
  },

  /** Top-right: rounded on the inner (bottom-left) edge */
  vignetteTopRight: {
    top: 0,
    right: 0,
    borderBottomLeftRadius: VIGNETTE_SIZE,
  },

  /** Bottom-left: rounded on the inner (top-right) edge */
  vignetteBottomLeft: {
    bottom: 0,
    left: 0,
    borderTopRightRadius: VIGNETTE_SIZE,
  },

  /** Bottom-right: rounded on the inner (top-left) edge */
  vignetteBottomRight: {
    bottom: 0,
    right: 0,
    borderTopLeftRadius: VIGNETTE_SIZE,
  },
});

// ─── Export ──────────────────────────────────────────────────────────

export default memo(AnimatedGradientOverlay);
