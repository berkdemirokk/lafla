// Lafla — Content Types
// Lafla uygulamasının tüm scenario pack'leri için paylaşılan tipler.
// content/scenarios/{mode}/{sub_scenario}.json dosyaları bu şemaya uyar.

export type Mode = "flirt" | "work" | "banter";

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
  | "neutral";

export type Level = "beginner" | "intermediate" | "advanced";

export type LengthClass = "short" | "medium" | "long";

export interface Phrase {
  id: string;
  phrase: string;
  tone: Tone;
  level: Level;
  length_class: LengthClass;
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
  sub_scenario: string;
  version: number;
  generated_at: string;
  generated_by: string;
  description: string;
  phrases: Phrase[];
}

export interface VariantPack {
  mode: Mode;
  sub_scenario: string;
  version: number;
  generated_at: string;
  variants: PhraseVariant[];
}

export interface MistakePack {
  mode: Mode;
  sub_scenario: string;
  version: number;
  generated_at: string;
  mistakes: CommonMistake[];
}
