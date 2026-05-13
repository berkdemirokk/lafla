// Lafla — Content Types
// Lafla uygulamasının tüm scenario pack'leri için paylaşılan tipler.
// content/scenarios/{mode}/*.json dosyaları bu şemaya uyar.

// ============================================================
// TEMEL TİPLER
// ============================================================

export type Mode = "flirt" | "work" | "banter" | "order" | "daily";

export type Tone =
  | "playful"
  | "witty"
  | "sincere"
  | "mysterious"
  | "self-aware"
  | "self-deprecating"
  | "flirty"
  | "confident"
  | "sassy"
  | "polite"
  | "casual"
  | "formal"
  | "neutral";

export type Level = "beginner" | "intermediate" | "advanced";

export type LengthClass = "short" | "medium" | "long";

// ============================================================
// PHRASE & VARYANT & MISTAKE
// ============================================================

export interface Phrase {
  id: string;
  phrase: string;
  tr?: string;
  tone: Tone;
  level: Level;
  length_class: LengthClass;
  context?: string;
  tr_note?: string;
  tr_trap?: string;
}

export interface PhraseVariant {
  phrase_id: string;
  variant: string;
  similarity: number;
}

export interface CommonMistake {
  phrase_id: string;
  mistake: string;
  correction: string;
  tr_explanation: string;
  rule?: string;
}

export interface ScenarioPack {
  mode: Mode;
  sub_scenario?: string;
  skill?: string;
  version: number;
  generated_at: string;
  generated_by: string;
  description: string;
  phrases: Phrase[];
}

export interface VariantPack {
  mode: Mode;
  sub_scenario?: string;
  skill?: string;
  version: number;
  generated_at: string;
  variants: PhraseVariant[];
}

export interface MistakePack {
  mode: Mode;
  sub_scenario?: string;
  skill?: string;
  version: number;
  generated_at: string;
  mistakes: CommonMistake[];
}

// ============================================================
// LESSON & EXERCISE TYPES (Duolingo-style motor)
// ============================================================

export type ExerciseType =
  | "vocab_tile"
  | "translate"
  | "fill_blank"
  | "word_order"
  | "spot_mistake"
  | "roleplay_chat"
  | "recap_quiz";

export interface ExerciseBase {
  id: string;
  type: ExerciseType;
  difficulty: 1 | 2 | 3 | 4 | 5;
  phrase_refs?: string[];
}

// 1) Vocab Tile — kelime tanıtım kartı
export interface VocabTileExercise extends ExerciseBase {
  type: "vocab_tile";
  word_or_phrase: string;
  tr_translation: string;
  example: string;
  example_tr: string;
  audio_hint?: string;
}

// 2) Translate — TR↔EN çeviri
export interface TranslateExercise extends ExerciseBase {
  type: "translate";
  direction: "tr_to_en" | "en_to_tr";
  source: string;
  target: string;
  accepted_variants?: string[];
  tr_hint?: string;
}

// 3) Fill Blank — boşluk doldurma
export interface FillBlankExercise extends ExerciseBase {
  type: "fill_blank";
  sentence_template: string;
  answer: string;
  distractors: string[];
  tr_hint?: string;
}

// 4) Word Order — kelime sırası
export interface WordOrderExercise extends ExerciseBase {
  type: "word_order";
  scrambled_tokens: string[];
  correct_sentence: string;
  tr_translation: string;
}

// 5) Spot Mistake — hatayı bul
export interface SpotMistakeExercise extends ExerciseBase {
  type: "spot_mistake";
  incorrect_sentence: string;
  correct_sentence: string;
  tr_explanation: string;
  mistake_rule?: string;
}

// 6) Roleplay Chat — bot ile sohbet
export interface RoleplayChatTurn {
  speaker: "npc" | "user";
  message?: string;
  acceptable_patterns?: string[];
  hint_tr?: string;
}

export interface RoleplayChatExercise extends ExerciseBase {
  type: "roleplay_chat";
  scenario_description: string;
  npc_role: string;
  setting: string;
  turns: RoleplayChatTurn[];
}

// 7) Recap Quiz — dersin tekrarı
export interface RecapQuizQuestion {
  question: string;
  options: string[];
  correct_index: number;
  tr_explanation?: string;
}

export interface RecapQuizExercise extends ExerciseBase {
  type: "recap_quiz";
  questions: RecapQuizQuestion[];
}

export type Exercise =
  | VocabTileExercise
  | TranslateExercise
  | FillBlankExercise
  | WordOrderExercise
  | SpotMistakeExercise
  | RoleplayChatExercise
  | RecapQuizExercise;

// ============================================================
// LESSON & SKILL & MODE METADATA
// ============================================================

export interface Lesson {
  id: string;
  skill_id: string;
  index: number;
  title: string;
  description: string;
  estimated_minutes: number;
  exercises: Exercise[];
}

export interface Skill {
  id: string;
  mode: Mode;
  title: string;
  description: string;
  icon: string;
  prerequisites: string[];
  lesson_count: number;
}

export interface ModeMetadata {
  id: Mode;
  title: string;
  description: string;
  icon: string;
  color: string;
  version: number;
  skills: Skill[];
}

export interface LessonPack {
  mode: Mode;
  skill: string;
  version: number;
  generated_at: string;
  generated_by: string;
  lessons: Lesson[];
}
