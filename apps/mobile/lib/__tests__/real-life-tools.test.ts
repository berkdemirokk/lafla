import {
  compileRealLifeRequest,
  extractRealLifeEntities,
  generateCustomScenario,
  generateEmergencyAnswers,
  REAL_LIFE_BLUEPRINT_IDS,
} from "../real-life-tools";

const BLUEPRINT_CASES = [
  ["medical_emergency", "Şiddetli alerjik reaksiyon geçiriyorum ve ambulans gerekiyor"],
  ["police_emergency", "Tehlikedeyim ve hemen polis yardımına ihtiyacım var"],
  ["fire_emergency", "Binada yangın var ve itfaiye gerekiyor"],
  ["accident_emergency", "Trafik kazası oldu ve bir kişi yaralı olabilir"],
  ["lost_passport", "Pasaportumu kaybettim ve elçiliğe ulaşmam gerekiyor"],
  ["salary_raise", "Yöneticimle maaş artışını konuşacağım"],
  ["running_late", "Patronuma 15 dakika geç kalacağımı söyleyeceğim"],
  ["deadline_extension", "Teslim tarihi için ek süre istemem gerekiyor"],
  ["reschedule", "Toplantıyı başka güne taşımak istiyorum"],
  ["cancel_plan", "Arkadaşıma gelemiyorum, planı iptal etmem lazım"],
  ["doctor_appointment", "Doktor randevusu almak istiyorum"],
  ["sick_leave", "Patronuma hasta olduğumu ve dinlenmem gerektiğini söyleyeceğim"],
  ["apology", "Yanlış anlaşıldım ve özür dilemek istiyorum"],
  ["refund", "Ürün için para iadesi istemem gerekiyor"],
  ["complaint", "Yanlış ürün geldi, şikâyet etmek istiyorum"],
  ["price_increase", "Müşteriye fiyat artışını açıklayacağım"],
  ["payment_reminder", "Müşteriye geciken ödeme hatırlatması yapacağım"],
  ["workload_boundary", "İş yüküm çok fazla, öncelikleri konuşacağım"],
  ["professional_disagreement", "Toplantıda aynı fikirde değilim, profesyonelce itiraz edeceğim"],
  ["leave_request", "Yöneticimden yıllık izin isteyeceğim"],
  ["job_interview", "İş görüşmesi mülakat provası yapmak istiyorum"],
  ["hotel_checkin", "Otelde rezervasyonumla check-in yapacağım"],
  ["airport_help", "Havalimanında uçuş kapısını bulmak için yardım isteyeceğim"],
  ["taxi", "Taksi şoförüne adresi söyleyeceğim"],
  ["restaurant", "Restoranda yemek siparişi vereceğim"],
  ["directions", "Sokakta yol tarifi isteyeceğim"],
  ["landlord_repair", "Ev sahibine bozulan kombiyi yazacağım"],
  ["decline_invitation", "Bir daveti kibarca reddetmem gerekiyor"],
  ["networking_intro", "Etkinlikte networking yapıp kendimi tanıtacağım"],
  ["general_update", "Komşumla kısa bir konuyu konuşacağım"],
] as const;

describe("local real-life tools", () => {
  it("ships a broad, uniquely identified blueprint catalog", () => {
    expect(REAL_LIFE_BLUEPRINT_IDS.length).toBeGreaterThanOrEqual(20);
    expect(new Set(REAL_LIFE_BLUEPRINT_IDS).size).toBe(
      REAL_LIFE_BLUEPRINT_IDS.length,
    );
    expect(REAL_LIFE_BLUEPRINT_IDS).toEqual(
      expect.arrayContaining([
        "salary_raise",
        "deadline_extension",
        "workload_boundary",
        "professional_disagreement",
        "airport_help",
        "landlord_repair",
        "medical_emergency",
        "police_emergency",
        "fire_emergency",
        "accident_emergency",
        "lost_passport",
      ]),
    );
  });

  it("classifies and safely renders every shipped blueprint", async () => {
    expect(BLUEPRINT_CASES.map(([id]) => id).sort()).toEqual(
      [...REAL_LIFE_BLUEPRINT_IDS].sort(),
    );

    for (const [expectedId, request] of BLUEPRINT_CASES) {
      const compiled = compileRealLifeRequest(request);
      expect(compiled.blueprintId).toBe(expectedId);

      const [answers, scenario] = await Promise.all([
        generateEmergencyAnswers(request),
        generateCustomScenario(request),
      ]);
      expect(answers.intentId).toBe(expectedId);
      expect(Object.values(answers).every((value) => String(value).trim())).toBe(
        true,
      );
      expect(scenario.intentId).toBe(expectedId);
      expect(scenario.turns).toHaveLength(5);
      expect(scenario.turns.filter((turn) => turn.speaker === "user")).toHaveLength(2);
    }
  });

  it("extracts channel, audience, duration, and schedule slots locally", () => {
    expect(
      extractRealLifeEntities(
        "Yöneticime WhatsApp'tan yarın 20 dakika gecikeceğimi yazacağım",
      ),
    ).toEqual({
      channel: "WhatsApp",
      audience: "manager",
      duration: "about 20 minutes",
      schedule: "tomorrow",
    });
  });

  it("creates useful emergency English with preserved time detail", async () => {
    const result = await generateEmergencyAnswers(
      "Patronuma 25 dakika gecikeceğimi söyleyeceğim",
    );

    expect(result.source).toBe("local");
    expect(result.intentId).toBe("running_late");
    expect(result.formal).toMatch(/about 25 minutes late/i);
    expect(result.neutral).toMatch(/keep you posted/i);
    expect(result.friendly).toMatch(/sorry/i);
    expect(result.kind).toBe("everyday");
    expect(result.category).toBe("everyday");
  });

  it.each([
    ["Ambulans lazım, kişi bilinçsiz", "medical_emergency", "medical", /ambulance now/i],
    ["Saldırıya uğradım, polise acil yardım lazım", "police_emergency", "police", /police now/i],
    ["Evde yangın var", "fire_emergency", "fire", /fire department now/i],
    ["Trafik kazası oldu", "accident_emergency", "accident", /emergency help/i],
    ["Pasaportum çalındı", "lost_passport", "travel", /police report/i],
  ])(
    "creates authored critical phrases for %s",
    async (request, expectedId, expectedCategory, firstPhrase) => {
      const result = await generateEmergencyAnswers(request);
      expect(result.intentId).toBe(expectedId);
      expect(result.kind).toBe("critical");
      expect(result.category).toBe(expectedCategory);
      expect(result.formal).toMatch(firstPhrase);
    },
  );

  it("never lets a critical blueprint bypass crisis safety", async () => {
    await expect(
      generateEmergencyAnswers("Ambulans çağır, kendimi öldüreceğim"),
    ).rejects.toThrow(/112|yalnız olmadığını/i);
    await expect(
      generateCustomScenario("Ambulans çağır, kendimi öldüreceğim"),
    ).rejects.toThrow(/112|yalnız olmadığını/i);
  });

  it.each([
    ["Yöneticimle maaş artışını konuşacağım", "salary_raise"],
    ["Teslim tarihi için ek süre istemem lazım", "deadline_extension"],
    ["İş yüküm çok fazla, öncelikleri konuşacağım", "workload_boundary"],
    ["Müşteriye fiyat artışını açıklayacağım", "price_increase"],
    ["Ev sahibine bozulan şeyi yazacağım", "landlord_repair"],
    ["Havalimanında kapıyı bulmak için yardım isteyeceğim", "airport_help"],
    ["Bir daveti kibarca reddetmem gerekiyor", "decline_invitation"],
  ])("classifies %s as %s", (request, expectedId) => {
    expect(compileRealLifeRequest(request).blueprintId).toBe(expectedId);
  });

  it("builds a contextual five-turn roleplay with genuine answer coverage", async () => {
    const scenario = await generateCustomScenario(
      "Yöneticimle maaş artışını konuşacağım",
    );

    expect(scenario.source).toBe("local");
    expect(scenario.intentId).toBe("salary_raise");
    expect(scenario.npcRole).toBe("Manager");
    expect(scenario.turns.map((turn) => turn.speaker)).toEqual([
      "npc",
      "user",
      "npc",
      "user",
      "npc",
    ]);
    expect(scenario.turns[1]?.model_answers).toHaveLength(3);
    expect(scenario.turns[1]?.acceptable_patterns?.length).toBeGreaterThan(0);
    expect(scenario.turns[3]?.model_answers?.join(" ")).toMatch(
      /responsibility|impact|results/i,
    );
    expect(scenario.turns[4]?.message).not.toMatch(/\?\s*$/);
  });

  it("uses the safe generic compiler for an unknown but valid situation", async () => {
    const answers = await generateEmergencyAnswers(
      "Komşumla kısa bir konuyu konuşacağım",
    );

    expect(answers.intentId).toBe("general_update");
    expect(answers.neutral).toMatch(/quick update/i);
    expect(answers.formal).not.toMatch(/\b(?:name|date|monday|price)\b/i);
  });

  it("rejects empty input instead of generating a meaningless scenario", async () => {
    await expect(generateEmergencyAnswers("   ")).rejects.toThrow(/durumu yaz/i);
    await expect(generateCustomScenario("\n")).rejects.toThrow(/durumu yaz/i);
  });
});
