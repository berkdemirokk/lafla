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
import { useReduceMotionPreference } from '../lib/use-reduce-motion-preference';

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
  const reduceMotion = useReduceMotionPreference();
  const washMin = 0.035;
  const washMax =
    mode === 'flirt' || mode === 'bar' || mode === 'order' ? 0.10 : 0.08;
  const pulseAnim = useRef(new Animated.Value(washMin)).current;

  useEffect(() => {
    if (!isActive || reduceMotion) {
      pulseAnim.setValue(washMin);
      return;
    }

    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: washMax,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: washMin,
          duration: 4000,
          useNativeDriver: true,
        }),
      ]),
    );

    loop.start();

    return () => {
      loop.stop();
    };
  }, [isActive, pulseAnim, reduceMotion, washMax]);

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
        colors={['rgba(0,0,0,0.32)', 'transparent']}
        style={styles.topVignette}
      />

      {/* LAYER 3: Bottom Legibility Gradient
          Smooth multi-stop gradient to ensure high readability of text at the bottom. */}
      <LinearGradient
        colors={[
          'transparent',
          'rgba(0,0,0,0.22)',
          'rgba(0,0,0,0.68)',
          'rgba(0,0,0,0.88)',
        ]}
        locations={[0.0, 0.42, 0.78, 1.0]}
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
    height: '54%',
  },
});

export default memo(AnimatedGradientOverlay);
