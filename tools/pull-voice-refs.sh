#!/usr/bin/env bash
# Lafla — pull CMU ARCTIC voice reference clips from Festvox.
#
# CMU ARCTIC is a SPEECH SYNTHESIS RESEARCH dataset hosted by Carnegie Mellon
# (festvox.org). Voices are public-domain native English speakers, recorded
# in studio conditions. We pick a 3-10 second clip per persona and convert
# to 24kHz mono PCM 16-bit WAV — Chatterbox's preferred format for voice
# cloning references.
#
# Speakers used:
#   - SLT (cmu_us_slt_arctic) — US female, conversational
#   - CLB (cmu_us_clb_arctic) — US female, mid-age clearer tone
#   - BDL (cmu_us_bdl_arctic) — US male, warm peer
#   - RMS (cmu_us_rms_arctic) — US male, neutral
#   - JMK (cmu_us_jmk_arctic) — Canadian male, authoritative
#   - KSP (cmu_us_ksp_arctic) — Indian English male, formal/announcer
#
# Each "arctic_XXXXX.wav" is a single sentence from H.G. Wells / Mark Twain
# / other classics, ~3-5 seconds long. We grab specific indices that have
# good natural prosody.
#
# License: CMU ARCTIC is released for any use without restriction (public
# domain announcement on festvox.org). We add attribution in
# tools/voice-refs/ATTRIBUTION.md.

set -e

OUT_DIR="tools/voice-refs"
TMP_DIR=$(mktemp -d)
trap "rm -rf $TMP_DIR" EXIT

BASE="http://festvox.org/cmu_arctic/cmu_arctic"

# (persona_voiceId, speaker_dir, arctic_index)
# arctic_aNNNN — A set has cleanest recordings, picks vary for prosody variety.
declare -a MAPPING=(
  "vc_match|cmu_us_slt_arctic|0050"   # SLT female, mid-prosody
  "vc_doctor|cmu_us_clb_arctic|0100"  # CLB female, clearer
  "vc_service|cmu_us_slt_arctic|0250" # SLT female different clip
  "vc_coach|cmu_us_bdl_arctic|0070"   # BDL male energetic
  "vc_boss|cmu_us_jmk_arctic|0030"    # JMK Canadian authoritative
  "vc_teacher|cmu_us_rms_arctic|0060" # RMS male neutral
  "vc_friend|cmu_us_bdl_arctic|0200"  # BDL male warmer clip
  "vc_family|cmu_us_clb_arctic|0250"  # CLB female motherly
  "vc_travel|cmu_us_ksp_arctic|0040"  # KSP Indian English announcer
  "vc_default|cmu_us_rms_arctic|0010" # RMS male neutral
)

echo "Pulling ${#MAPPING[@]} voice references to $OUT_DIR/"
echo

for ENTRY in "${MAPPING[@]}"; do
  PERSONA=$(echo "$ENTRY" | cut -d'|' -f1)
  SPEAKER=$(echo "$ENTRY" | cut -d'|' -f2)
  INDEX=$(echo "$ENTRY" | cut -d'|' -f3)

  URL="$BASE/$SPEAKER/wav/arctic_a${INDEX}.wav"
  RAW="$TMP_DIR/${PERSONA}.raw.wav"
  OUT="$OUT_DIR/${PERSONA}.wav"

  echo "  $PERSONA  ← $SPEAKER / arctic_a${INDEX}"

  # Download
  if ! curl -sfL "$URL" -o "$RAW"; then
    echo "    ✗ Download failed for $URL" >&2
    continue
  fi

  # Convert to 24kHz mono PCM 16-bit (Chatterbox's preferred ref format)
  if ! ffmpeg -y -loglevel error -i "$RAW" \
        -ac 1 -ar 24000 -acodec pcm_s16le \
        "$OUT"; then
    echo "    ✗ ffmpeg conversion failed" >&2
    continue
  fi

  echo "    ✓ Wrote $OUT"
done

echo
echo "Done. Verify with: ffprobe -v error -show_streams $OUT_DIR/vc_match.wav"
echo "Next step: python tools/tts-generate.py --workers 1 --limit 30 (smoke test)"
