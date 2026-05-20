// Native audio manifest (Adım 9, 2026-05-20).
//
// "🎙️ Native ses" rozeti ile öne çıkan sahneler. Voice actor (ideally
// Türk-American bilingüel, 25-35 yaş, casual native English aksanlı)
// her sahnenin tüm NPC + setup phrase'lerini studio quality kayıt eder.
//
// MANIFEST FORMAT:
//   - key: lesson.id (örn. "flirt.opener.1.1")
//   - value: ses dosyalarının base path'i (bucket veya bundled)
//   - turn audio'sı `${base}/${turnIdx}.mp3`
//
// VERSION 1.0 SCOPE (bu commit'te boş):
//   Aşağıdaki 10 lesson native audio için target ediliyor. Voice actor
//   kontratı + studio sessions sonrasında manifest doldurulacak. Bu
//   tarihe kadar tüm TTS expo-speech veya ElevenLabs üzerinden çalışır.
//
// IMPLEMENTASYON:
//   lib/native-audio.ts → hasNativeAudio(lessonId) helper.
//   lib/tts.ts → speak() önce native manifest kontrol eder, varsa MP3
//   bundle veya remote URL çağırır; yoksa fallback chain (cached → remote
//   ElevenLabs → expo-speech).

export interface NativeAudioBundle {
  /** Sahnenin lesson.id (BundledLesson.id). */
  lessonId: string;
  /** Voice actor adı — credit / quality tracking için. */
  voiceActor: string;
  /** Bundle base path veya remote URL. Şu an placeholder. */
  base: string;
  /** Voice actor kaydının tarihi — content drift takibi. */
  recordedAt: string;
}

// 2026-05-20: SHIPPING WITH ZERO native audio. Manifest hazır ama dolu
// değil. Voice actor anlaşması + studio session yapıldığında bu array
// güncellenir, "🎙️ Native ses" rozeti otomatik gözükmeye başlar.
//
// TARGET LIST (v1.1 hedefi — voice actor brief'i için):
//   1. intro.tinder.0.1     — Berk Demirok (founder) veya 1. native
//   2. flirt.opener.1.1     — Tinder match opener
//   3. flirt.opener.1.4     — Flirty opener
//   4. flirt.date.13.1      — İlk randevuda buluşma
//   5. work.slack.16.1      — Slack mesajı atma
//   6. work.meeting.17.1    — Toplantıda söz alma
//   7. work.interview.21.1  — İş mülakatı tell-me-about-yourself
//   8. bar.7.1              — Bar drink ordering
//   9. bar.approach.24.1    — Bar yanaşma
//   10. airport.44.1        — Check-in
//
// "🎙️ Native ses" rozeti = Apple Editorial submission'ın altın hook'u.
// Hiçbir rakipte yok (Speak/Lerna/Talkpal = TTS).
export const NATIVE_AUDIO_MANIFEST: ReadonlyArray<NativeAudioBundle> = [];

/**
 * Lookup helper. lessonId verildi mi manifest'te bul, yoksa null.
 * Scene card UI bunu çağırır → "🎙️" rozetini gösterir.
 */
export function getNativeAudioBundle(
  lessonId: string,
): NativeAudioBundle | null {
  return NATIVE_AUDIO_MANIFEST.find((b) => b.lessonId === lessonId) ?? null;
}

/**
 * Has this lesson been recorded with a native voice actor?
 * UI rozeti + verdict ekranı için.
 */
export function hasNativeAudio(lessonId: string): boolean {
  return getNativeAudioBundle(lessonId) !== null;
}
