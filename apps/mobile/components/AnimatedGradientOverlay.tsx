/**
 * AnimatedGradientOverlay.tsx
 * ──────────────────────────────────────────────────────────────────────
 * Neon Noir gradient overlay for scene cards.
 *
 * Uses expo-linear-gradient to create a smooth, premium transition from
 * transparent to dark at the bottom for text readability, and a subtle
 * top-down vignette for badge contrast.
 *
 * Additionally layers a soft pulsing color wash for the Neon Noir aesthetic.
 */

import React, { memo, useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import type { SceneMode } from '../data/scenes';

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
  // Pulse animation value (tint opacity: 0.10 → 0.22 → 0.10)
  const pulseAnim = useRef(new Animated.Value(0.10)).current;

  useEffect(() => {
    if (!isActive) {
      pulseAnim.setValue(0.10);
      return;
    }

    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 0.22,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0.10,
          duration: 4000,
          useNativeDriver: true,
        }),
      ]),
    );

    loop.start();

    return () => {
      loop.stop();
    };
  }, [isActive, pulseAnim]);

  return (
    <View style={StyleSheet.absoluteFillObject} pointerEvents="none">
      {/* LAYER 1: Pulsing Color Wash
          Semi-transparent mode accent color overlay for Neon Noir look. */}
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          {
            backgroundColor: accentColor,
            opacity: pulseAnim,
          },
        ]}
      />

      {/* LAYER 2: Top Vignette
          A very soft top-down dark gradient to make header badges pop. */}
      <LinearGradient
        colors={['rgba(0,0,0,0.5)', 'transparent']}
        style={styles.topVignette}
      />

      {/* LAYER 3: Bottom Legibility Gradient
          Smooth multi-stop gradient to ensure high readability of text at the bottom. */}
      <LinearGradient
        colors={[
          'transparent',
          'rgba(0,0,0,0.4)',
          'rgba(0,0,0,0.85)',
          'rgba(0,0,0,0.95)',
        ]}
        locations={[0.0, 0.4, 0.8, 1.0]}
        style={styles.bottomGradient}
      />
    </View>
  );
};

// ─── Styles ──────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  topVignette: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 120,
  },
  bottomGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '65%',
  },
});

export default memo(AnimatedGradientOverlay);
