import React, { memo, useEffect, useMemo, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface FloatingParticlesProps {
  /** Accent colour applied to every particle (with varying opacity). */
  accentColor: string;
  /** When false the animation loops are never started – saves battery. */
  isActive?: boolean;
  /** Number of bokeh circles to render (default 6). */
  particleCount?: number;
}

/** Internal config generated once per particle index. */
interface ParticleConfig {
  /** Diameter in pixels (4–12). */
  size: number;
  /** Starting X position as a fraction of the container width (0–1). */
  startX: number;
  /** Starting Y position as a fraction of the container height (0–1). */
  startY: number;
  /** Duration of one full animation cycle in ms (15 000–25 000). */
  duration: number;
  /** Maximum horizontal drift in pixels (±20). */
  driftX: number;
  /** Maximum vertical drift in pixels (±30). */
  driftY: number;
  /** Resting (minimum) opacity value (0.08–0.15). */
  opacityMin: number;
  /** Peak opacity value (0.18–0.25). */
  opacityMax: number;
}

// ---------------------------------------------------------------------------
// Deterministic pseudo-random helper
// ---------------------------------------------------------------------------

/**
 * Returns a deterministic value in [0, 1) for a given particle `index` and
 * `seed` offset.  Using simple modular arithmetic keeps the result stable
 * across re-renders without relying on Math.random().
 */
const deterministicRandom = (index: number, seed: number): number => {
  // Larger prime multipliers reduce visible patterns across particles.
  const hash = ((index * 7919 + seed * 6271 + 1013) % 9973) / 9973;
  return hash;
};

/**
 * Map a deterministic [0,1) value into the range [min, max].
 */
const mapRange = (value: number, min: number, max: number): number =>
  min + value * (max - min);

// ---------------------------------------------------------------------------
// Build stable particle configs
// ---------------------------------------------------------------------------

const buildConfigs = (count: number): ParticleConfig[] =>
  Array.from({ length: count }, (_, i) => ({
    size: Math.round(mapRange(deterministicRandom(i, 0), 4, 12)),
    startX: deterministicRandom(i, 1),
    startY: deterministicRandom(i, 2),
    duration: Math.round(mapRange(deterministicRandom(i, 3), 15000, 25000)),
    driftX: mapRange(deterministicRandom(i, 4), -20, 20),
    driftY: mapRange(deterministicRandom(i, 5), -30, 30),
    opacityMin: mapRange(deterministicRandom(i, 6), 0.08, 0.15),
    opacityMax: mapRange(deterministicRandom(i, 7), 0.18, 0.25),
  }));

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const FloatingParticles: React.FC<FloatingParticlesProps> = ({
  accentColor,
  isActive = true,
  particleCount = 6,
}) => {
  // Memoised configs so random values are stable across renders.
  const configs = useMemo(() => buildConfigs(particleCount), [particleCount]);

  // One Animated.Value per particle drives all transforms via a single loop.
  const progressRefs = useRef<Animated.Value[]>([]);
  if (progressRefs.current.length !== particleCount) {
    progressRefs.current = configs.map(() => new Animated.Value(0));
  }

  // Store animation handles so we can stop them on unmount / deactivation.
  const loopRefs = useRef<Animated.CompositeAnimation[]>([]);

  useEffect(() => {
    if (!isActive) {
      // Stop any running loops & reset values.
      loopRefs.current.forEach((l) => l.stop());
      loopRefs.current = [];
      progressRefs.current.forEach((v) => v.setValue(0));
      return;
    }

    // Start independent loops for each particle.
    loopRefs.current = configs.map((cfg, i) => {
      const anim = Animated.loop(
        Animated.timing(progressRefs.current[i], {
          toValue: 1,
          duration: cfg.duration,
          useNativeDriver: true,
          // Linear easing keeps the drift smooth & continuous.
          easing: undefined, // default linear-ish; explicit undefined = linear
        }),
      );
      anim.start();
      return anim;
    });

    // Cleanup on unmount or when isActive flips to false.
    return () => {
      loopRefs.current.forEach((l) => l.stop());
      loopRefs.current = [];
    };
  }, [isActive, configs]);

  return (
    <View style={styles.container} pointerEvents="none">
      {configs.map((cfg, i) => {
        const progress = progressRefs.current[i];

        // --- Translate X: 0 → driftX → 0 (sinusoidal-style via keyframes) ---
        const translateX = progress.interpolate({
          inputRange: [0, 0.25, 0.5, 0.75, 1],
          outputRange: [0, cfg.driftX, 0, -cfg.driftX, 0],
        });

        // --- Translate Y: 0 → driftY → 0 ---
        const translateY = progress.interpolate({
          inputRange: [0, 0.25, 0.5, 0.75, 1],
          outputRange: [0, cfg.driftY, 0, -cfg.driftY, 0],
        });

        // --- Opacity: pulse between min and max ---
        const opacity = progress.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [cfg.opacityMin, cfg.opacityMax, cfg.opacityMin],
        });

        // --- Scale: subtle breathing 0.8 → 1.2 → 0.8 ---
        const scale = progress.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0.8, 1.2, 0.8],
        });

        return (
          <Animated.View
            key={i}
            style={[
              styles.particle,
              {
                width: cfg.size,
                height: cfg.size,
                borderRadius: cfg.size / 2,
                backgroundColor: accentColor,
                // Position the particle deterministically within the container.
                left: `${(cfg.startX * 100).toFixed(1)}%` as any,
                top: `${(cfg.startY * 100).toFixed(1)}%` as any,
                opacity,
                transform: [{ translateX }, { translateY }, { scale }],
              },
            ]}
          />
        );
      })}
    </View>
  );
};

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
  particle: {
    position: 'absolute',
  },
});

// ---------------------------------------------------------------------------
// Export – memo-wrapped to avoid unnecessary re-renders.
// ---------------------------------------------------------------------------

export default memo(FloatingParticles);
