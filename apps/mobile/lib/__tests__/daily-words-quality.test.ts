import {
  buildAsciiFoldIndex,
  cleanLessonEntry,
  cleanTranslation,
  hasColloquialToken,
  isAsciiTurkish,
  isFragment,
  normalizeEnglishCase,
  startsWithFunctionWord,
} from "../daily-words-quality";

describe("normalizeEnglishCase", () => {
  it("lowercases ordinary first letters", () => {
    expect(normalizeEnglishCase("Full breakdown")).toBe("full breakdown");
    expect(normalizeEnglishCase("Quick")).toBe("quick");
  });
  it("keeps I, acronyms, mixed-case brands and proper nouns", () => {
    for (const w of ["I mean", "I'm free", "ATM", "FaceTime call", "Wi-Fi", "Friday's meeting", "Turkish coffee", "Uber tip", "Q3 goals"]) {
      expect(normalizeEnglishCase(w)).toBe(w);
    }
  });
  it("leaves already-lowercase entries alone", () => {
    expect(normalizeEnglishCase("share")).toBe("share");
  });
});

describe("cleanTranslation", () => {
  it("removes parentheses and trailing punctuation", () => {
    expect(cleanTranslation("Temassız öde (turnike / kartla)")).toBe("Temassız öde");
    expect(cleanTranslation("Hesabı kapat.")).toBe("Hesabı kapat");
  });
  it("keeps at most two slash alternatives", () => {
    expect(cleanTranslation("a / b / c")).toBe("a, b");
    expect(cleanTranslation("ne haber / naber")).toBe("ne haber, naber");
  });
  it("fixes the aciklama typo", () => {
    expect(cleanTranslation("Detaylı döküm / tam aciklama")).toBe("Detaylı döküm, tam açıklama");
  });
  it("rejects empty, overlong or placeholder translations", () => {
    expect(cleanTranslation("(note)")).toBeNull();
    expect(cleanTranslation("x".repeat(41))).toBeNull();
    expect(cleanTranslation("___ ile rahat değilim")).toBeNull();
    expect(cleanTranslation("... kısar mısın")).toBeNull();
  });
});

describe("isFragment", () => {
  it("drops dangling prepositions after non-verbs", () => {
    for (const w of ["share of", "background in", "party of", "thanks for", "the equivalent of"]) {
      expect(isFragment(w)).toBe(true);
    }
  });
  it("keeps phrasal and prepositional verbs", () => {
    for (const w of ["carry over", "give up", "look into", "wait for", "come up with", "look forward to", "run out of", "get rid of", "listen to"]) {
      expect(isFragment(w)).toBe(false);
    }
  });
  it("drops auxiliary and clause starts", () => {
    for (const w of ["should subside soon", "could you help me", "I'm free", "what's up", "I need to go now"]) {
      expect(isFragment(w)).toBe(true);
    }
  });
  it("drops symbols and sentence punctuation", () => {
    for (const w of ["a/b", "tap (twice)", "wait…", "really?", "Help!", "Yes,"]) {
      expect(isFragment(w)).toBe(true);
    }
  });
  it("keeps normal words and collocations", () => {
    for (const w of ["deadline", "baggage claim", "no pressure", "have fun", "I"]) {
      expect(isFragment(w)).toBe(false);
    }
  });
});

describe("cleanLessonEntry", () => {
  it("normalises or drops", () => {
    expect(cleanLessonEntry("Tap to pay", "Temassız öde (turnike)")).toEqual({
      word: "tap to pay",
      translation: "Temassız öde",
    });
    expect(cleanLessonEntry("share of", "payı")).toBeNull();
    expect(cleanLessonEntry("ticket", "(x)")).toBeNull();
  });
});

describe("startsWithFunctionWord", () => {
  it("flags articles, pronouns and determiners", () => {
    for (const w of ["the noise", "the document", "I remember", "you mean", "any updates", "My plan", "those days", "some help"]) {
      expect(startsWithFunctionWord(w)).toBe(true);
    }
  });
  it("keeps no-phrases, a lone I, acronyms and ordinary words", () => {
    for (const w of ["no rush", "no charge", "no pressure", "I", "IT support", "another", "theory", "item"]) {
      expect(startsWithFunctionWord(w)).toBe(false);
    }
  });
});

describe("hasColloquialToken", () => {
  it("flags chat contractions", () => {
    for (const w of ["gotta run", "gonna mingle", "wanna go", "y'all ready", "ain't bad", "Dunno"]) {
      expect(hasColloquialToken(w)).toBe(true);
    }
  });
  it("keeps normal words", () => {
    for (const w of ["going to", "yacht", "kind of", "run"]) {
      expect(hasColloquialToken(w)).toBe(false);
    }
  });
});

describe("ASCII-ized Turkish detection", () => {
  const index = buildAsciiFoldIndex(
    ["Döviz kuru", "Gitmem lazım", "Aktarma uçuşu", "İlişki", "Çözeriz", "Bir büyük beden", "kalmış"],
    ["Büyük ekran", "kalmis"],
  );
  it("builds folded forms of accented tokens of length >= 5, minus trusted unaccented ones", () => {
    expect(index.has("doviz")).toBe(true);
    expect(index.has("lazim")).toBe(true);
    expect(index.has("iliski")).toBe(true);
    expect(index.has("kalmis")).toBe(false); // trusted curated list uses it unaccented
    expect(index.has("kuru")).toBe(false); // too short / no accent
  });
  it("flags unaccented forms and suffixed inflections", () => {
    for (const tr of ["doviz kuru", "gitmem lazim", "aktarma ucusu", "Cozeriz", "Bir buyuk beden", "iliskisi"]) {
      expect(isAsciiTurkish(tr, index)).toBe(true);
    }
  });
  it("keeps properly accented or unrelated text", () => {
    for (const tr of ["döviz kuru", "gitmem lazım", "Bilet", "Çözeriz", "iyi akşamlar", "kalmis"]) {
      expect(isAsciiTurkish(tr, index)).toBe(false);
    }
  });
  it("cleanLessonEntry applies the index, the word rules and keeps good entries", () => {
    expect(cleanLessonEntry("exchange rate", "Doviz kuru", index)).toBeNull();
    expect(cleanLessonEntry("exchange rate", "Döviz kuru", index)).not.toBeNull();
    expect(cleanLessonEntry("exchange rate", "Doviz kuru")).not.toBeNull();
    expect(cleanLessonEntry("the noise", "gürültü")).toBeNull();
    expect(cleanLessonEntry("gotta run", "koşmalıyım")).toBeNull();
    expect(cleanLessonEntry("no rush", "acele yok")).not.toBeNull();
  });
});

describe("looksAccentless", () => {
  const { looksAccentless } = require("../daily-words-quality");
  it("flags long multi-word glosses typed without Turkish letters", () => {
    expect(looksAccentless("cift terapisi")).toBe(true);
    expect(looksAccentless("uzun donemli, ciddi")).toBe(true);
  });
  it("keeps accented, short or single-word glosses", () => {
    expect(looksAccentless("çift terapisi")).toBe(false);
    expect(looksAccentless("iyi fikir")).toBe(false);
    expect(looksAccentless("dezavantaj")).toBe(false);
  });
});

describe("glossRevealsWord", () => {
  const { glossRevealsWord } = require("../daily-words-quality");
  it("flags glosses that repeat the English entry", () => {
    expect(glossRevealsWord("milkshake", "milkshake")).toBe(true);
    expect(glossRevealsWord("Erasmus year", "Erasmus yili")).toBe(true);
    expect(glossRevealsWord("lounge", "lounge, dinlenme salonu")).toBe(true);
  });
  it("keeps real translations and short shared tokens", () => {
    expect(glossRevealsWord("prepaid SIM", "ön ödemeli SIM")).toBe(false);
    expect(glossRevealsWord("discount", "indirim")).toBe(false);
  });
});
