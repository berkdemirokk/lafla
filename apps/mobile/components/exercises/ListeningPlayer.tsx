// ListeningPlayer — line-by-line playback of a multi-character drama.
// Cyber-Electric theme. Uses expo-speech via lib/tts.
//
// Speaker labels render as a chip ("Sarah:") above the line text.
// Transcript is hidden by default; user toggles visibility.
// Speed: 1× normal or 0.7× slow. The "base rate" prop lets the parent
// dial in level-appropriate defaults (A1 ~0.95, B2 1.0).

import { useEffect, useRef, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { tokens } from "../../theme";
import { speak, stop as stopSpeech } from "../../lib/tts";
import { hapticSelection } from "../../lib/feedback";

export interface PlayerLine {
  speaker: string;
  text: string;
}

interface Props {
  lines: PlayerLine[];
  /** Base playback rate. A1 ~0.95, A2 0.95, B1 1.0, B2 1.0, C1 1.05. */
  baseRate?: number;
  /** Show transcript by default. Defaults to false. */
  initiallyVisible?: boolean;
  /** Called once every line has finished playing. */
  onFinished?: () => void;
}

const SLOW_RATIO = 0.7 / 1.0;

export function ListeningPlayer({
  lines,
  baseRate = 0.95,
  initiallyVisible = false,
  onFinished,
}: Props) {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [slow, setSlow] = useState(false);
  const [transcriptVisible, setTranscriptVisible] = useState(initiallyVisible);
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const playingRef = useRef(false);
  const idxRef = useRef(0);

  useEffect(() => {
    idxRef.current = idx;
  }, [idx]);

  useEffect(() => {
    playingRef.current = playing;
  }, [playing]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
      stopSpeech();
    };
  }, []);

  const total = lines.length;
  const current = lines[idx];

  function rate() {
    return slow ? baseRate * SLOW_RATIO : baseRate;
  }

  function estimatedMs(text: string): number {
    // Rough: ~14 chars/sec at rate 1.0; scale by rate.
    const base = Math.max(900, text.length * 70);
    return base / Math.max(rate(), 0.4);
  }

  function playFrom(start: number) {
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    if (start >= total) {
      setPlaying(false);
      setIdx(total - 1);
      onFinished?.();
      return;
    }
    setIdx(start);
    setPlaying(true);
    const line = lines[start]!;
    speak(`${line.text}`, { lang: "en-US", rate: rate() });
    // expo-speech onDone is reliable but speak() in tts.ts swallows it, so
    // we approximate with a duration-based timer. Worst case the user taps
    // pause if drift becomes annoying — content is short by design.
    advanceTimer.current = setTimeout(() => {
      if (!playingRef.current) return;
      // Brief pause between speakers feels more like a scene
      const next = idxRef.current + 1;
      if (next >= total) {
        setPlaying(false);
        onFinished?.();
        return;
      }
      playFrom(next);
    }, estimatedMs(line.text) + 220);
  }

  function onPlayPause() {
    hapticSelection();
    if (playing) {
      stopSpeech();
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
      setPlaying(false);
      return;
    }
    playFrom(idx);
  }

  function onReplay() {
    hapticSelection();
    stopSpeech();
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    playFrom(0);
  }

  function onToggleSpeed() {
    hapticSelection();
    setSlow((s) => !s);
  }

  function onToggleTranscript() {
    hapticSelection();
    setTranscriptVisible((v) => !v);
  }

  const progressPct = total > 0 ? ((idx + (playing ? 1 : 0)) / total) * 100 : 0;

  return (
    <View style={styles.container}>
      {/* Line block */}
      <View style={styles.lineCard}>
        <View style={styles.speakerRow}>
          <View style={styles.speakerChip}>
            <View style={styles.speakerDot} />
            <Text style={styles.speakerName}>
              {current?.speaker ?? "—"}
            </Text>
          </View>
          <Text style={styles.lineCount}>
            {idx + 1}/{total}
          </Text>
        </View>

        {transcriptVisible ? (
          <Text style={styles.lineText}>{current?.text ?? ""}</Text>
        ) : (
          <View style={styles.transcriptHidden}>
            <Text style={styles.transcriptHint}>Yazı gizli</Text>
            <Text style={styles.transcriptSub}>
              Önce dinlemeye odaklan. Hazırsan yazıyı aç.
            </Text>
          </View>
        )}
      </View>

      {/* Progress bar */}
      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, { width: `${progressPct}%` }]} />
      </View>

      {/* Controls */}
      <View style={styles.controls}>
        <Pressable
          style={styles.iconBtn}
          onPress={onReplay}
          hitSlop={8}
          accessibilityLabel="Baştan dinle"
        >
          <View style={styles.replayIcon}>
            <View style={styles.replayArrow} />
          </View>
        </Pressable>

        <Pressable
          style={styles.playBtn}
          onPress={onPlayPause}
          accessibilityLabel={playing ? "Duraklat" : "Oynat"}
        >
          {playing ? (
            <View style={styles.pauseIcon}>
              <View style={styles.pauseBar} />
              <View style={styles.pauseBar} />
            </View>
          ) : (
            <View style={styles.playIcon} />
          )}
        </Pressable>

        <Pressable
          style={[styles.speedBtn, slow && styles.speedBtnActive]}
          onPress={onToggleSpeed}
        >
          <Text style={[styles.speedLabel, slow && styles.speedLabelActive]}>
            {slow ? "0.7×" : "1×"}
          </Text>
        </Pressable>
      </View>

      {/* Transcript toggle */}
      <Pressable style={styles.transcriptToggle} onPress={onToggleTranscript}>
        <Text style={styles.transcriptToggleLabel}>
          {transcriptVisible ? "Yazıyı gizle" : "Yazıyı göster"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: tokens.spacing.md,
  },
  lineCard: {
    backgroundColor: tokens.bg.inverseSurface,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    minHeight: 180,
    justifyContent: "space-between",
  },
  speakerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: tokens.spacing.sm,
  },
  speakerChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: tokens.bg.inverseSurfaceLight,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: tokens.radius.full,
  },
  speakerDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: tokens.brand.primary,
  },
  speakerName: {
    color: tokens.text.inverseOnSurface,
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    letterSpacing: 0.3,
  },
  lineCount: {
    color: tokens.text.secondaryFixedDim,
    fontSize: 12,
    fontWeight: tokens.weight.semibold,
  },
  lineText: {
    color: tokens.text.inverseOnSurface,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: tokens.weight.medium,
  },
  transcriptHidden: {
    paddingVertical: 24,
    alignItems: "center",
    gap: 6,
  },
  transcriptHint: {
    color: tokens.text.secondaryFixedDim,
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  transcriptSub: {
    color: tokens.text.secondaryFixedDim,
    fontSize: 13,
    textAlign: "center",
    opacity: 0.7,
  },
  progressTrack: {
    height: 4,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderRadius: 2,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: tokens.brand.primary,
    borderRadius: 2,
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: tokens.spacing.md,
  },
  iconBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: tokens.bg.surfaceContainer,
    alignItems: "center",
    justifyContent: "center",
  },
  replayIcon: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: tokens.text.primary,
    borderRadius: 9,
    borderTopColor: "transparent",
    transform: [{ rotate: "-45deg" }],
  },
  replayArrow: {
    position: "absolute",
    top: -3,
    right: -1,
    width: 0,
    height: 0,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderBottomWidth: 6,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: tokens.text.primary,
    transform: [{ rotate: "100deg" }],
  },
  playBtn: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: tokens.brand.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    elevation: 6,
  },
  playIcon: {
    width: 0,
    height: 0,
    borderLeftWidth: 22,
    borderTopWidth: 14,
    borderBottomWidth: 14,
    borderLeftColor: tokens.text.onPrimary,
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    marginLeft: 6,
  },
  pauseIcon: {
    flexDirection: "row",
    gap: 6,
  },
  pauseBar: {
    width: 6,
    height: 24,
    backgroundColor: tokens.text.onPrimary,
    borderRadius: 2,
  },
  speedBtn: {
    minWidth: 48,
    height: 48,
    paddingHorizontal: 12,
    borderRadius: 24,
    backgroundColor: tokens.bg.surfaceContainer,
    alignItems: "center",
    justifyContent: "center",
  },
  speedBtnActive: {
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1.5,
    borderColor: tokens.brand.tertiary,
  },
  speedLabel: {
    fontSize: 13,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: 0.3,
  },
  speedLabelActive: {
    color: tokens.brand.tertiary,
  },
  transcriptToggle: {
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: tokens.radius.full,
    borderWidth: 1.5,
    borderColor: tokens.border.outlineVariant,
  },
  transcriptToggleLabel: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
  },
});
