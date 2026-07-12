# CEFR Scene Tag Audit — Auto-Generated

**Generated:** 2026-07-11T10:48:13.704Z
**Source:** `apps/mobile/scripts/audit-cefr-tags.ts` — re-run with `npx tsx scripts/audit-cefr-tags.ts`

## Summary

- **971** lessons with NPC turns scanned
- **971** scene→level mappings found
- **971** lessons mapped to a Scene level
- **0** POTENTIAL MISMATCHES (tagged level lower than detected markers)

Heuristic: a scene tagged below a marker's minimum level is
flagged. Marker dictionaries are HIGH-CONFIDENCE only (no common
B1 phrases) — false positives should be rare but possible.

Manual review is required for each mismatch. The script does
NOT auto-fix.

## Mismatches (sorted by severity)

> No high-confidence mismatches detected. All scenes appear
> correctly tagged relative to their NPC turn content.
---

## Notes for manual review

1. **False positives are possible.** A B1 scene that quotes a
   character using C1 sarcasm ("with respect, I'd push back")
   may be pedagogically intentional — the user learns to
   RECOGNIZE the register, not produce it.

2. **Re-tagging up is conservative.** When in doubt, raise the
   level rather than lower the content. CEFR engine treats
   higher-tagged scenes as stretch material.

3. **Rewriting NPC turns** is the alternative — soften the
   marker phrase to a level-appropriate equivalent.