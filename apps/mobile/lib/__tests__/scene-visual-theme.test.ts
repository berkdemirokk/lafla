import type { Scene } from "../../data/scenes";
import { getSceneCoverSpec } from "../scene-cover-source";
import { getVisualThemeForScene } from "../scene-visual-theme";

function scene(overrides: Partial<Scene>): Scene {
  return {
    id: "test-scene",
    emoji: "💬",
    title: "Test scene",
    description: "Short test scene",
    durationMin: 4,
    mode: "daily",
    skillId: "daily.smalltalk",
    lessonId: "daily.smalltalk.1",
    ...overrides,
  };
}

describe("scene visual theme mapping", () => {
  it("does not classify Flat White cafe scenes as housing", () => {
    const s = scene({
      title: "Kafe'de Flat White söylemek",
      description: "Barista'ya net sipariş ver.",
      mode: "order",
      skillId: "order.cafe",
      lessonId: "order.cafe.1.1",
    });

    expect(getVisualThemeForScene(s)).toBe("cafe");
  });

  it("keeps restaurant scenes in restaurant even when copy contains sipariş", () => {
    const s = scene({
      title: "Bifteği sipariş et, medium rare söyle",
      description: "Öneri sor, ana yemek söyle, içecek seç.",
      mode: "order",
      skillId: "order.restaurant",
      lessonId: "order.restaurant.2.2",
    });

    expect(getVisualThemeForScene(s)).toBe("restaurant");
  });

  it("keeps bar ordering scenes in bar instead of generic delivery", () => {
    const s = scene({
      title: "Bar'da bira, şarap, soft drink sipariş",
      description: "Tab aç, last call, close me out.",
      mode: "bar",
      skillId: "order.bar",
      lessonId: "order.bar.7.1",
    });

    expect(getVisualThemeForScene(s)).toBe("bar");
  });

  it("keeps delivery scenes as delivery even when apartment words appear", () => {
    const s = scene({
      title: "Kuryeye not — leave at door, buzz apt 4B",
      description: "Teslimat notunu net yaz.",
      mode: "order",
      skillId: "order.delivery",
      lessonId: "order.delivery.8.2",
    });

    expect(getVisualThemeForScene(s)).toBe("delivery");
  });

  it("does not classify Turkish words containing 'bar' as bar scenes", () => {
    const s = scene({
      title: "Kurulda Q3 highlight sunumu",
      description:
        "Abartmadan, gizlemeden — kurul registeriyle pozitif headwind anlat.",
      mode: "work",
      skillId: "professional.c1",
      lessonId: "professional.c1.board.2",
    });

    expect(getVisualThemeForScene(s)).toBe("work_presentation");
  });

  it("does not classify 'today' as hotel room wording", () => {
    const s = scene({
      title: "Hastalık izni — yöneticini ara",
      description:
        "I'm afraid I won't be able to come in today — sebep + süre + devir teslim.",
      mode: "work",
      skillId: "professional.b1",
      lessonId: "professional.b1.sickleave.1",
    });

    expect(getVisualThemeForScene(s)).not.toBe("hotel");
  });

  it("does not classify compensation package wording as food delivery", () => {
    const s = scene({
      title: "Equity / RSU — total comp, vesting & refresh",
      description:
        "Equity pazarlığı: vesting, cliff, refresh grant. Paket, kuru rakam değil.",
      mode: "work",
      skillId: "career.b2",
      lessonId: "career.b2.equity_negotiation.1",
    });

    expect(getVisualThemeForScene(s)).not.toBe("delivery");
  });

  it("does not classify public speaking as pub/bar", () => {
    const s = scene({
      title: "Public Speaking — iç demo",
      description: "All-hands demo. 50 kişi izliyor. Açılış + demo + Q&A.",
      mode: "work",
      skillId: "work.expand",
      lessonId: "work.expand.49",
    });

    expect(getVisualThemeForScene(s)).not.toBe("bar");
  });

  it("maps professional public-service scenes away from generic office meetings", () => {
    const police = scene({
      title: "Polise ifade — hırsızlık, rapor kopyası",
      description: "Kısa, net ifade ver.",
      mode: "work",
      skillId: "professional.b1",
      lessonId: "professional.b1.policestatement.1",
    });
    const lease = scene({
      title: "Kira görüşmesi — depozit, faturalar, pazarlık",
      description: "Ev sahibiyle şartları konuş.",
      mode: "work",
      skillId: "professional.b1",
      lessonId: "professional.b1.lease.1",
    });
    const board = scene({
      title: "Kurul sunumu — sert direktör sorularına dayan",
      description: "Yüksek riskli sunum provası.",
      mode: "work",
      skillId: "professional.c1",
      lessonId: "professional.c1.board.1",
    });
    const conflict = scene({
      title: "Üç ekip çatışmasını nötr çöz — yapısal kapanış",
      description: "Tartışmayı sakin ve yapılandırılmış şekilde kapat.",
      mode: "work",
      skillId: "professional.c1",
      lessonId: "professional.c1.conflict.1",
    });

    expect(getVisualThemeForScene(police)).toBe("service_counter");
    expect(getVisualThemeForScene(lease)).toBe("housing");
    expect(getVisualThemeForScene(board)).toBe("work_presentation");
    expect(getVisualThemeForScene(conflict)).toBe("work_meeting");
  });

  it("keeps A1 self-introduction as daily conversation despite passport example copy", () => {
    const s = scene({
      title: "Tanışma — My name is, I'm from Turkey",
      description:
        "Kendini tanıt. Pasaport kontrolünden bara kadar her yerde işine yarar.",
      mode: "daily",
      skillId: "daily.survival.a1",
      lessonId: "daily.survival.a1.2",
    });

    expect(getVisualThemeForScene(s)).toBe("daily_conversation");
  });

  it("uses bank and phone visuals for daily logistics scenes that are not packages", () => {
    expect(
      getVisualThemeForScene(
        scene({
          title: "Cüzdanım kayıp — banka iptal",
          description: "Bankayı ara, kartları iptal ettir.",
          mode: "daily",
          skillId: "daily.logistics",
          lessonId: "daily.expand.22",
        }),
      ),
    ).toBe("bank");

    expect(
      getVisualThemeForScene(
        scene({
          title: "Telefon hattı aktivasyonu",
          description: "SIM kart al, hat aktive et.",
          mode: "daily",
          skillId: "daily.logistics",
          lessonId: "daily.expand.23",
        }),
      ),
    ).toBe("phone");
  });
});

describe("scene cover source", () => {
  it("uses a specific remote cover and no wrong office fallback for IELTS", () => {
    const s = scene({
      title: "IELTS Speaking Part 2 cue card",
      description: "Mock test provası.",
      mode: "ielts",
      skillId: "ielts.p2",
      lessonId: "ielts.p2.1",
    });

    const spec = getSceneCoverSpec(s);

    expect(spec.theme).toBe("ielts");
    expect(spec.label).toBe("IELTS");
    expect(spec.source).toEqual({
      uri: expect.stringContaining("https://images.unsplash.com/"),
    });
    expect(spec.fallbackSource).toBeUndefined();
  });
});
