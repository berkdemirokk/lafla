#!/usr/bin/env bash
# Lafla — prune non-hero MP3s.
#
# 2026-05-21 — Bundle size optimization. Mevcut audio/index.ts'te listed
# hash'ler hero lesson dosyalarına ait (--only-files dry-run sonrası).
# Diğer tüm MP3'ler silinir. Bu dosyalara karşılık gelen lesson'ların
# TTS'i runtime'da expo-speech native fallback ile çalışır.
#
# Etki: ~32MB → ~5MB (87% azalma, 165 hero clip kalır).

set -e

AUDIO_DIR="apps/mobile/assets/audio"
INDEX_FILE="$AUDIO_DIR/index.ts"

# 1. Extract whitelist hash list from index.ts
HASHES=$(grep -oE '"[0-9a-f]{6,12}"' "$INDEX_FILE" | tr -d '"' | sort -u)
HASH_COUNT=$(echo "$HASHES" | wc -l)
echo "  Whitelist: $HASH_COUNT hashes"

# 2. Build hash-to-keep set in temp file (newline-separated)
KEEP_FILE=$(mktemp)
trap "rm -f $KEEP_FILE" EXIT
echo "$HASHES" > "$KEEP_FILE"

# 3. Tüm MP3'leri tara, whitelist'te olmayanları sil
DELETED=0
KEPT=0
while IFS= read -r mp3; do
  bn=$(basename "$mp3" .mp3)
  if grep -qx "$bn" "$KEEP_FILE"; then
    KEPT=$((KEPT + 1))
  else
    rm -f "$mp3"
    DELETED=$((DELETED + 1))
  fi
done < <(find "$AUDIO_DIR" -name '*.mp3')

echo "  Deleted: $DELETED"
echo "  Kept:    $KEPT"
echo
echo "  Disk usage now:"
du -sh "$AUDIO_DIR"
