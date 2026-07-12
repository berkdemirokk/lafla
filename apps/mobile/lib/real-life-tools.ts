import { checkMayaOutput, checkUserInput } from "./safety-filter";

export interface EmergencyAnswers {
  formal: string;
  neutral: string;
  friendly: string;
  source: "local";
  intentId: string;
}

export interface CustomScenarioTurn {
  speaker: "npc" | "user";
  message?: string;
  model_answers?: string[];
  acceptable_patterns?: string[];
  hint_tr?: string;
}

export interface CustomScenario {
  titleTr: string;
  descriptionTr: string;
  npcRole: string;
  settingTr: string;
  turns: CustomScenarioTurn[];
  source: "local";
  intentId: string;
}

export interface RealLifeEntities {
  channel: "WhatsApp" | "Email" | "Phone" | "Real life";
  audience:
    | "manager"
    | "client"
    | "colleague"
    | "friend"
    | "recruiter"
    | "landlord"
    | "staff"
    | "unknown";
  duration?: string;
  schedule?: string;
}

interface CompileContext {
  normalized: string;
  original: string;
  entities: RealLifeEntities;
}

type Template = string | ((context: CompileContext) => string);

interface ScenarioBlueprint {
  id: string;
  patterns: readonly RegExp[];
  titleTr: string;
  descriptionTr?: string;
  npcRole: Template;
  settingTr: Template;
  formal: Template;
  neutral: Template;
  friendly: Template;
  opener: Template;
  followUp: Template;
  closing: Template;
  firstHintTr: string;
  secondAnswers: readonly [Template, Template, Template];
  secondHintTr: string;
  firstPatterns: readonly string[];
  secondPatterns: readonly string[];
}

export interface CompiledRealLifeRequest {
  blueprintId: string;
  entities: RealLifeEntities;
  titleTr: string;
  descriptionTr: string;
  npcRole: string;
  settingTr: string;
  formal: string;
  neutral: string;
  friendly: string;
  opener: string;
  followUp: string;
  closing: string;
  firstHintTr: string;
  secondAnswers: string[];
  secondHintTr: string;
  firstPatterns: string[];
  secondPatterns: string[];
}

function normalizeTr(value: string): string {
  const turkishMap: Record<string, string> = {
    ç: "c",
    Ç: "c",
    ğ: "g",
    Ğ: "g",
    ı: "i",
    İ: "i",
    ö: "o",
    Ö: "o",
    ş: "s",
    Ş: "s",
    ü: "u",
    Ü: "u",
  };
  return value
    .replace(/[çÇğĞıİöÖşŞüÜ]/g, (character) => turkishMap[character] ?? character)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’‘]/g, "'")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function detectChannel(text: string): RealLifeEntities["channel"] {
  if (/\b(whatsapp|mesaj|message\b|dm\b|sms\b|yazacag|yazicam)/.test(text)) return "WhatsApp";
  if (/\b(mail|email|e posta|e-posta)/.test(text)) return "Email";
  if (/\b(telefon|arama|arayacag|call\b)/.test(text)) return "Phone";
  return "Real life";
}

function detectAudience(text: string): RealLifeEntities["audience"] {
  if (/\b(patron|mudur|yonetici|manager\b|boss\b)/.test(text)) return "manager";
  if (/\b(musteri|client\b|customer\b)/.test(text)) return "client";
  if (/\b(is arkadas|ekip|colleague\b|coworker\b|team\b)/.test(text)) return "colleague";
  if (/\b(arkadas|friend\b)/.test(text)) return "friend";
  if (/\b(ik\b|insan kaynak|recruiter\b|hr\b|mulakat)/.test(text)) return "recruiter";
  if (/\b(ev sahib|landlord\b)/.test(text)) return "landlord";
  if (/\b(gorevli|personel|reception|staff\b|support\b)/.test(text)) return "staff";
  return "unknown";
}

function detectDuration(text: string): string | undefined {
  const numeric = text.match(/\b(\d{1,3})\s*(dakika|dk|minutes?|min|saat|hours?|hrs?)\b/);
  if (numeric) {
    const unit = /saat|hour|hr/.test(numeric[2] ?? "") ? "hours" : "minutes";
    return `about ${numeric[1]} ${unit}`;
  }
  if (/\b(yarim saat|half an hour)\b/.test(text)) return "about half an hour";
  if (/\b(bir saat|one hour)\b/.test(text)) return "about an hour";
  return undefined;
}

function detectSchedule(text: string): string | undefined {
  const clock = text.match(/\b(?:saat\s*)?(\d{1,2}(?::\d{2})?)\s*(am|pm)?\b/);
  if (clock && (/saat|am|pm/.test(clock[0]) || clock[1]?.includes(":"))) {
    return `${clock[1]}${clock[2] ? ` ${clock[2].toUpperCase()}` : ""}`;
  }
  const phrases: readonly [RegExp, string][] = [
    [/\b(yarin|tomorrow)\b/, "tomorrow"],
    [/\b(bugun|today)\b/, "today"],
    [/\b(bu aksam|tonight)\b/, "tonight"],
    [/\b(pazartesi|monday)\b/, "on Monday"],
    [/\b(sali|tuesday)\b/, "on Tuesday"],
    [/\b(carsamba|wednesday)\b/, "on Wednesday"],
    [/\b(persembe|thursday)\b/, "on Thursday"],
    [/\b(cuma|friday)\b/, "on Friday"],
    [/\b(haftaya|next week)\b/, "next week"],
  ];
  return phrases.find(([pattern]) => pattern.test(text))?.[1];
}

export function extractRealLifeEntities(input: string): RealLifeEntities {
  const normalized = normalizeTr(input).slice(0, 500);
  return {
    channel: detectChannel(normalized),
    audience: detectAudience(normalized),
    duration: detectDuration(normalized),
    schedule: detectSchedule(normalized),
  };
}

function render(template: Template, context: CompileContext): string {
  return (typeof template === "function" ? template(context) : template)
    .replace(/\s+/g, " ")
    .trim();
}

function conversationSetting(context: CompileContext, fallback: string): string {
  return context.entities.channel === "Real life" ? fallback : context.entities.channel;
}

function audienceRole(context: CompileContext, fallback: string): string {
  const labels: Record<RealLifeEntities["audience"], string> = {
    manager: "Manager",
    client: "Client",
    colleague: "Colleague",
    friend: "Friend",
    recruiter: "Recruiter",
    landlord: "Landlord",
    staff: "Staff member",
    unknown: fallback,
  };
  return labels[context.entities.audience];
}

const BLUEPRINTS: readonly ScenarioBlueprint[] = [
  {
    id: "salary_raise",
    patterns: [/\b(maas|zam|ucret|salary\b|raise\b|compensation\b|promotion\b)/],
    titleTr: "Maaş görüşmesi provası",
    npcRole: "Manager",
    settingTr: "Work meeting",
    formal: "I would like to discuss my compensation and the value I have been adding to the team.",
    neutral: "I would like to talk about a salary adjustment based on my recent work.",
    friendly: "Could we talk about my salary and the extra responsibility I have taken on?",
    opener: "Thanks for setting up this meeting. What would you like to discuss?",
    followUp: "What makes you feel this is the right time for that conversation?",
    closing: "Thanks for explaining it clearly. I will review it and come back to you with the next step.",
    firstHintTr: "Konuyu doğrudan ama saygılı aç.",
    secondAnswers: [
      "Over the past few months, I have taken on more responsibility and delivered strong results.",
      "My responsibilities have grown, and I would like my compensation to reflect that.",
      "I can share specific examples of my recent impact on the team.",
    ],
    secondHintTr: "Değerini somut sorumluluk veya sonuçlarla anlat.",
    firstPatterns: ["(discuss|talk).*(salary|compensation|adjustment)", "(salary|compensation).*(responsibilit|impact|work)"],
    secondPatterns: ["(responsibilit|result|impact|deliver|example)"],
  },
  {
    id: "running_late",
    patterns: [
      /\b(gecik(?!en\s+(?:odeme|fatura))|gec kal|yetisem|late\b|delay\b|trafik)/,
    ],
    titleTr: "Geç kalma mesajı",
    npcRole: (context) => audienceRole(context, "Conversation partner"),
    settingTr: (context) => conversationSetting(context, "In person"),
    formal: (context) => `I wanted to let you know that I am running ${context.entities.duration ?? "a little"} late. I apologize for the delay and will keep you updated.`,
    neutral: (context) => `I am running ${context.entities.duration ?? "a little"} late. I will keep you posted.`,
    friendly: (context) => `I am running ${context.entities.duration ?? "a little"} late, sorry. I will message you when I am close.`,
    opener: "Hi, are you still on your way?",
    followUp: "No problem. Do you know when you will arrive?",
    closing: "All right, thanks for letting me know.",
    firstHintTr: "Gecikeceğini kısa ve net söyle.",
    secondAnswers: [
      "I should be there as soon as possible.",
      "I will message you as soon as I am close.",
      "I will keep you updated if anything changes.",
    ],
    secondHintTr: "Tahmini zamanı veya haber vereceğini söyle.",
    firstPatterns: ["(running|be).*(late|delay)", "sorry.*late"],
    secondPatterns: ["(there|arrive|close|update|message)"],
  },
  {
    id: "deadline_extension",
    patterns: [/\b(ek sure|sure iste|deadline\b|deadline uzat|teslim tarih|extension\b)/],
    titleTr: "Ek süre isteme",
    npcRole: (context) => audienceRole(context, "Manager"),
    settingTr: (context) => conversationSetting(context, "Work conversation"),
    formal: (context) => `Would it be possible to extend the deadline${context.entities.schedule ? ` until ${context.entities.schedule}` : ""}? I want to make sure I deliver the work properly.`,
    neutral: (context) => `Could I have a little more time for this${context.entities.schedule ? `, ideally until ${context.entities.schedule}` : ""}?`,
    friendly: "Could I get a bit more time on this? I want to finish it properly.",
    opener: "Hi, how is the task progressing?",
    followUp: "What is causing the delay, and how much more time do you need?",
    closing: "Thanks for being clear. I will consider the revised timing.",
    firstHintTr: "Ek süreyi gerekçesiyle birlikte iste.",
    secondAnswers: [
      "The scope took longer than expected, and one extra day would help me finish it properly.",
      "I underestimated one part of the task. I can complete it with a short extension.",
      "I can send the completed sections now and deliver the rest at the revised time.",
    ],
    secondHintTr: "Sebebi ve gerçekçi yeni süreyi açıkla.",
    firstPatterns: ["(extend|more time|extension).*(deadline|finish|task)"],
    secondPatterns: ["(longer|underestimated|complete|deliver|extra day|extension)"],
  },
  {
    id: "reschedule",
    patterns: [/\b(ertele|tarihi degis|yeniden plan|baska gun|reschedule\b|postpone\b|move the meeting\b)/],
    titleTr: "Erteleme konuşması",
    npcRole: (context) => audienceRole(context, "Conversation partner"),
    settingTr: (context) => conversationSetting(context, "Conversation"),
    formal: (context) => `Would it be possible to reschedule${context.entities.schedule ? ` for ${context.entities.schedule}` : ""}? Please let me know what works for you.`,
    neutral: (context) => `Could we move this${context.entities.schedule ? ` to ${context.entities.schedule}` : " to another time"}?`,
    friendly: (context) => `Can we move this${context.entities.schedule ? ` to ${context.entities.schedule}` : ""}? Tell me what suits you.`,
    opener: "Hi, I saw your message. What did you want to change?",
    followUp: "Sure. What time would work better for you?",
    closing: "That works. Thanks for checking with me.",
    firstHintTr: "Erteleme isteğini nazikçe söyle.",
    secondAnswers: [
      "I can do tomorrow afternoon if that works for you.",
      "Please let me know which alternative time works best.",
      "I am flexible with the new time.",
    ],
    secondHintTr: "Alternatif zaman öner veya karşı tarafa sor.",
    firstPatterns: ["(reschedule|move|another time|change).*(meeting|plan|this)?"],
    secondPatterns: ["(tomorrow|afternoon|time|flexible|works)"],
  },
  {
    id: "cancel_plan",
    patterns: [/\b(iptal|gelemeyeceg|gelemiyorum|cancel\b|can't come\b|cannot come\b|make it\b)/],
    titleTr: "Plan iptali",
    npcRole: (context) => audienceRole(context, "Conversation partner"),
    settingTr: (context) => conversationSetting(context, "Conversation"),
    formal: "I am sorry, but I need to cancel our plan. I apologize for the inconvenience.",
    neutral: "I am sorry, but I cannot make it. Could we plan another time?",
    friendly: "Sorry, I can't make it. Can we do another time?",
    opener: "Hi, are we still good for our plan?",
    followUp: "Thanks for telling me. Would you like to pick another time?",
    closing: "No worries. We can find another time.",
    firstHintTr: "İptali net söyle ve kısa bir özür ekle.",
    secondAnswers: [
      "I would still like to meet, so I can suggest another day.",
      "Please let me know when you are free again.",
      "I am flexible next week if you would like to reschedule.",
    ],
    secondHintTr: "Yeni plan için kapıyı açık bırak.",
    firstPatterns: ["(cancel|can't|cannot).*(make it|come|plan)", "sorry.*(cancel|can't|cannot)"],
    secondPatterns: ["(another|reschedule|free|next week|suggest)"],
  },
  {
    id: "doctor_appointment",
    patterns: [/\b(doktor|doctor\b|clinic\b|hastane|hospital\b|randevu|appointment\b)/],
    titleTr: "Doktor randevusu",
    npcRole: "Receptionist",
    settingTr: (context) => conversationSetting(context, "Clinic"),
    formal: "I would like to make an appointment with a doctor, please.",
    neutral: "Hi, I need to book a doctor's appointment.",
    friendly: "Hi, could you help me book an appointment?",
    opener: "Hello, how can I help you?",
    followUp: "Of course. What day would work for you?",
    closing: "All right, I have noted your request.",
    firstHintTr: "Randevu istediğini söyle; tıbbi ayrıntı vermen gerekmez.",
    secondAnswers: [
      "The earliest available appointment would be best for me.",
      "I am available in the afternoon if possible.",
      "Could you tell me the first available time?",
    ],
    secondHintTr: "Uygun zamanını veya ilk boş saati sor.",
    firstPatterns: ["(appointment|book|see).*(doctor)?"],
    secondPatterns: ["(available|earliest|afternoon|time)"],
  },
  {
    id: "sick_leave",
    patterns: [/\b(hasta|iyi hisset|rahatsiz|sick\b|unwell\b|fever\b)/],
    titleTr: "Rahatsızlık ve izin",
    npcRole: (context) => audienceRole(context, "Manager"),
    settingTr: (context) => conversationSetting(context, "Work conversation"),
    formal: "I am not feeling well today, so I need to take some time to recover. Thank you for understanding.",
    neutral: "I am not feeling well today, so I need to rest.",
    friendly: "I'm feeling under the weather today, so I'm going to rest.",
    opener: "Hi, is everything all right?",
    followUp: "I understand. Is there anything urgent the team should know?",
    closing: "Okay, please take care and keep us updated.",
    firstHintTr: "Rahatsız olduğunu sade biçimde söyle; özel sağlık detayı verme.",
    secondAnswers: [
      "I have shared the urgent information with the team.",
      "I will update you later if anything changes.",
      "There is nothing urgent from my side right now.",
    ],
    secondHintTr: "Acil işi veya güncelleme vereceğini söyle.",
    firstPatterns: ["(not feeling well|unwell|sick|under the weather).*(rest|time|today)?"],
    secondPatterns: ["(team|urgent|update|nothing)"],
  },
  {
    id: "apology",
    patterns: [/\b(ozur|kusura bak|yanlis anla|sorry\b|apolog|hata yapt)/],
    titleTr: "Özür ve düzeltme",
    npcRole: (context) => audienceRole(context, "Conversation partner"),
    settingTr: (context) => conversationSetting(context, "Conversation"),
    formal: "I apologize for the misunderstanding. That was not my intention.",
    neutral: "I am sorry about the misunderstanding. I did not mean it that way.",
    friendly: "Sorry, that came out wrong. I didn't mean it like that.",
    opener: "Hi, I wanted to check something about what happened.",
    followUp: "Thanks for saying that. What did you mean to communicate?",
    closing: "I understand. Thanks for clearing it up.",
    firstHintTr: "Özür dile ve niyetini sakin anlat.",
    secondAnswers: [
      "I should have explained it more clearly.",
      "I meant to say that I respect your point.",
      "I will be more careful with my wording next time.",
    ],
    secondHintTr: "Asıl niyetini veya düzeltmeni söyle.",
    firstPatterns: ["(sorry|apolog).*(misunderstanding|intention|mean|wrong)?"],
    secondPatterns: ["(meant|should have|wording|clearly)"],
  },
  {
    id: "refund",
    patterns: [/\b(refund\b|iade|para iade|geri odeme)/],
    titleTr: "İade talebi",
    npcRole: "Customer support agent",
    settingTr: (context) => conversationSetting(context, "Customer support"),
    formal: "I would like to request a refund because the issue has not been resolved.",
    neutral: "I would like a refund, please. This did not work as expected.",
    friendly: "Could you help me get a refund for this?",
    opener: "Hello, how can I help you today?",
    followUp: "I understand. Could you tell me why you are requesting a refund?",
    closing: "Thanks for explaining. I will guide you through the next step.",
    firstHintTr: "İade istediğini sakin ve net söyle.",
    secondAnswers: [
      "The product did not work as described, so I would appreciate a refund.",
      "The issue is still unresolved after I asked for help.",
      "Could you please explain the refund process and the next step?",
    ],
    secondHintTr: "Sebebi söyle ve sonraki adımı sor.",
    firstPatterns: ["(request|want|like).*(refund)", "refund.*(please|issue|work)"],
    secondPatterns: ["(not work|unresolved|process|next step|described)"],
  },
  {
    id: "complaint",
    patterns: [/\b(sikayet|complaint\b|bozuk|yanlis urun|wrong item\b|sorun|problem\b)/],
    titleTr: "Şikâyet konuşması",
    npcRole: "Customer support agent",
    settingTr: (context) => conversationSetting(context, "Customer support"),
    formal: "I would like to report an issue and ask for your help resolving it.",
    neutral: "I have a problem with this and I need some help.",
    friendly: "Could you help me sort this out?",
    opener: "Hello, how can I help you today?",
    followUp: "I am sorry about that. What exactly happened?",
    closing: "Thanks for explaining. I will help you with the next step.",
    firstHintTr: "Sorunu suçlayıcı olmadan net anlat.",
    secondAnswers: [
      "The item I received was not the one I ordered.",
      "The service did not match what was promised.",
      "I would appreciate a clear solution to this issue.",
    ],
    secondHintTr: "Somut sorunu ve beklediğin çözümü söyle.",
    firstPatterns: ["(problem|issue|help|report).*(this|order|service)?"],
    secondPatterns: ["(received|ordered|promised|solution|issue)"],
  },
  {
    id: "price_increase",
    patterns: [/\b(fiyat artis|zammi acikla|price increase\b|raise the price\b|new pricing\b)/],
    titleTr: "Fiyat artışını açıklama",
    npcRole: (context) => audienceRole(context, "Client"),
    settingTr: (context) => conversationSetting(context, "Client meeting"),
    formal: "I wanted to let you know that our pricing will be updated. I would be happy to explain the reasons and the options available.",
    neutral: "Our pricing is changing, and I would like to walk you through what that means.",
    friendly: "I wanted to give you a heads-up about an upcoming price change.",
    opener: "Thanks for the update. Can you explain what is changing?",
    followUp: "How will this affect our current agreement?",
    closing: "Thanks for explaining the change and the available options.",
    firstHintTr: "Değişikliği açıkla; sebep veya rakam uydurma.",
    secondAnswers: [
      "I can explain the options that apply to your current agreement.",
      "I would like to review the impact with you before the change takes effect.",
      "Let us look at the available options and find the most suitable one.",
    ],
    secondHintTr: "Etkisini konuşmayı ve seçenek sunmayı öner.",
    firstPatterns: ["(pricing|price).*(change|update|increase)"],
    secondPatterns: ["(option|agreement|impact|review|suitable)"],
  },
  {
    id: "payment_reminder",
    patterns: [/\b(odeme hatirlat|borc|fatura|invoice\b|payment reminder\b|overdue\b|payment\b)/],
    titleTr: "Ödeme hatırlatma",
    npcRole: (context) => audienceRole(context, "Client"),
    settingTr: (context) => conversationSetting(context, "Business message"),
    formal: "I am following up regarding the outstanding payment. Could you please confirm the expected payment date?",
    neutral: "I wanted to check on the pending payment. Do you know when it will be processed?",
    friendly: "Just checking in about the payment—do you know when it might come through?",
    opener: "Hi, what did you want to follow up on?",
    followUp: "Could you remind me which payment you mean and what you need from me?",
    closing: "Thanks for the reminder. I will check the status and update you.",
    firstHintTr: "Ödemeyi yargılamadan hatırlat ve tarih sor.",
    secondAnswers: [
      "It is the payment linked to the most recent invoice.",
      "A confirmation of the expected date would be helpful.",
      "Please let me know if you need the invoice sent again.",
    ],
    secondHintTr: "Hangi ödeme olduğunu ve ihtiyacını netleştir.",
    firstPatterns: ["(payment|invoice).*(pending|outstanding|check|follow)"],
    secondPatterns: ["(invoice|expected date|confirmation|sent again)"],
  },
  {
    id: "workload_boundary",
    patterns: [/\b(is yuk|cok is|yetisemiyorum|overload|overwhelmed\b|workload\b|capacity\b|too much work\b)/],
    titleTr: "İş yükünü konuşma",
    npcRole: "Manager",
    settingTr: "Work meeting",
    formal: "I would like to review my current workload and agree on the priorities, because I do not have capacity to complete everything to a good standard.",
    neutral: "Can we review my priorities? My current workload is more than I can manage well.",
    friendly: "Could we look at my priorities together? I have too much on my plate right now.",
    opener: "Sure, what would you like to review about your workload?",
    followUp: "Which tasks are most at risk, and what would you recommend prioritizing?",
    closing: "Thanks for raising it early. Let us agree on the priorities.",
    firstHintTr: "Kapasiteni söyle ve önceliklendirme iste.",
    secondAnswers: [
      "Two deadlines overlap, so I recommend prioritizing the client task first.",
      "I can complete the urgent work if we move one lower-priority task.",
      "I would like your guidance on which outcome matters most.",
    ],
    secondHintTr: "Çakışmayı ve çözüm önerini somutlaştır.",
    firstPatterns: ["(workload|priorit|capacity|too much|plate)"],
    secondPatterns: ["(deadline|urgent|priority|move|guidance|outcome)"],
  },
  {
    id: "professional_disagreement",
    patterns: [/\b(katilmiyorum|itiraz|ayni fikir|disagree\b|push back\b|farkli dusun)/],
    titleTr: "Profesyonel itiraz",
    npcRole: (context) => audienceRole(context, "Colleague"),
    settingTr: (context) => conversationSetting(context, "Work meeting"),
    formal: "I see the reasoning, but I have a different view. Could we look at one concern before we decide?",
    neutral: "I understand your point, but I see it differently. Can I explain my concern?",
    friendly: "I get your point, but I am not fully convinced. Can we look at another angle?",
    opener: "What do you think about the proposal?",
    followUp: "Of course. What is your main concern?",
    closing: "That is a fair concern. Let us include it in the decision.",
    firstHintTr: "Önce karşı tarafı anladığını göster, sonra itiraz et.",
    secondAnswers: [
      "My main concern is the risk to the timeline.",
      "I think we should compare the alternatives before committing.",
      "Could we test the idea on a smaller scale first?",
    ],
    secondHintTr: "Tek bir kaygı ve mümkünse çözüm önerisi ver.",
    firstPatterns: ["(understand|see|get).*(but|different|concern|not fully)"],
    secondPatterns: ["(concern|risk|alternative|test|smaller)"],
  },
  {
    id: "leave_request",
    patterns: [/\b(izin iste|izin al|day off\b|annual leave\b|vacation day\b|time off\b)/],
    titleTr: "İzin isteme",
    npcRole: "Manager",
    settingTr: (context) => conversationSetting(context, "Work conversation"),
    formal: (context) => `I would like to request time off${context.entities.schedule ? ` ${context.entities.schedule}` : ""}. I can make sure my responsibilities are covered beforehand.`,
    neutral: (context) => `Could I take some time off${context.entities.schedule ? ` ${context.entities.schedule}` : ""}? I will prepare the handover first.`,
    friendly: "Could I take a day off? I will make sure everything is covered.",
    opener: "Hi, what dates are you considering?",
    followUp: "How will you make sure the urgent work is covered?",
    closing: "Thanks for planning the handover. I will confirm the request.",
    firstHintTr: "İzin zamanını söyle ve iş devrini düşündüğünü belirt.",
    secondAnswers: [
      "I will finish the urgent tasks and share a clear handover before I leave.",
      "My colleague has the context, and I will document anything still open.",
      "I can make sure the team knows what needs attention.",
    ],
    secondHintTr: "İşlerin nasıl devredileceğini açıkla.",
    firstPatterns: ["(request|take).*(time off|day off|leave)"],
    secondPatterns: ["(handover|urgent|document|team|covered)"],
  },
  {
    id: "job_interview",
    patterns: [/\b(mulakat|is gorusme|job interview\b|interview\b|recruiter\b)/],
    titleTr: "İş görüşmesi provası",
    npcRole: "Recruiter",
    settingTr: (context) => conversationSetting(context, "Job interview"),
    formal: "Thank you for the opportunity. I would be happy to explain how my experience fits this role.",
    neutral: "Thanks for meeting with me. I would like to tell you why I am interested in the role.",
    friendly: "Thanks for having me. I am excited to learn more about the role.",
    opener: "Welcome. Could you tell me a little about yourself?",
    followUp: "What experience would help you succeed in this role?",
    closing: "Thank you. That gives me a clear picture of your experience.",
    firstHintTr: "Kısa profesyonel özet ver; ayrıntı uydurma.",
    secondAnswers: [
      "My experience has taught me how to solve problems and communicate clearly.",
      "I have worked on similar responsibilities and learned to adapt quickly.",
      "I can bring a practical approach and a strong willingness to learn.",
    ],
    secondHintTr: "Deneyimini işle bağlantılı bir beceriyle anlat.",
    firstPatterns: ["(experience|interested|opportunity|role)"],
    secondPatterns: ["(solve|communicate|responsibilit|adapt|learn|approach)"],
  },
  {
    id: "hotel_checkin",
    patterns: [/\b(otel|hotel\b|reservation\b|booking\b|check in\b|check-in\b)/],
    titleTr: "Otel konuşması",
    npcRole: "Hotel receptionist",
    settingTr: "Hotel",
    formal: "Hello, I have a reservation and I would like to check in, please.",
    neutral: "Hi, I have a booking under my name. Can I check in?",
    friendly: "Hi, I am here to check in.",
    opener: "Welcome. How can I help you?",
    followUp: "Certainly. Could I have the name on the reservation?",
    closing: "Great, I found your reservation.",
    firstHintTr: "Rezervasyonun olduğunu ve check-in istediğini söyle.",
    secondAnswers: [
      "The reservation should be under my name.",
      "I can show you the booking confirmation.",
      "Sure, the name is on this confirmation.",
    ],
    secondHintTr: "İsim veya rezervasyon onayı vereceğini söyle.",
    firstPatterns: ["(reservation|booking|check in)"],
    secondPatterns: ["(name|confirmation|booking|reservation)"],
  },
  {
    id: "airport_help",
    patterns: [/\b(havalimani|havaalani|airport\b|flight\b|ucus|boarding\b|gate\b|bagaj|luggage\b)/],
    titleTr: "Havalimanında yardım",
    npcRole: "Airport staff member",
    settingTr: "Airport",
    formal: "Excuse me, could you help me find the correct place for my flight, please?",
    neutral: "Hi, could you help me with my flight information?",
    friendly: "Hi, I am a bit lost. Could you point me in the right direction?",
    opener: "Hello, what do you need help with?",
    followUp: "Do you have your boarding pass or flight information with you?",
    closing: "All right, I can point you to the correct place.",
    firstHintTr: "Uçuşla ilgili neyi bulamadığını genel biçimde söyle.",
    secondAnswers: [
      "Yes, I have the flight information on my phone.",
      "I can show you my boarding pass.",
      "Could you tell me where I should go next?",
    ],
    secondHintTr: "Belgeyi göstereceğini veya sonraki yönü sor.",
    firstPatterns: ["(help|find|lost).*(flight|gate|place|direction)?"],
    secondPatterns: ["(phone|boarding pass|where|next)"],
  },
  {
    id: "taxi",
    patterns: [/\b(taksi|taxi\b|uber\b|surucu|driver\b|adres|address\b)/],
    titleTr: "Taksi konuşması",
    npcRole: "Driver",
    settingTr: "Taxi",
    formal: "Could you take me to this address, please?",
    neutral: "Can you take me to this address?",
    friendly: "Hi, I need to go to this address.",
    opener: "Hi, where are you going?",
    followUp: "Sure. Do you have the address on your phone?",
    closing: "Okay, I can take you there.",
    firstHintTr: "Gitmek istediğin adresi göstereceğini söyle; adres uydurma.",
    secondAnswers: [
      "Yes, I can show you the address on my phone.",
      "It is this address here.",
      "Please follow this location.",
    ],
    secondHintTr: "Adresi veya konumu göstereceğini söyle.",
    firstPatterns: ["(take|go).*(address|there|location)"],
    secondPatterns: ["(phone|address|location|show)"],
  },
  {
    id: "restaurant",
    patterns: [/\b(restoran|restaurant\b|siparis|order\b|masa|menu|coffee\b|kahve|garson)/],
    titleTr: "Sipariş konuşması",
    npcRole: "Server",
    settingTr: "Restaurant",
    formal: "Could I order this, please?",
    neutral: "Can I have this, please?",
    friendly: "I will have this, please.",
    opener: "Hi, are you ready to order?",
    followUp: "Certainly. Would you like anything else?",
    closing: "Great, I will get that for you.",
    firstHintTr: "Ne istediğini kibarca söyle; ürün uydurma.",
    secondAnswers: [
      "That is all for now, thank you.",
      "Could I also have some water, please?",
      "No, that is everything, thanks.",
    ],
    secondHintTr: "Ek isteğini veya bu kadar olduğunu söyle.",
    firstPatterns: ["(order|have|will have).*(this)?"],
    secondPatterns: ["(all|water|everything|anything else)"],
  },
  {
    id: "directions",
    patterns: [/\b(kaybol|yol tarif|directions\b|nerede|where is\b|nasil gider|find the\b)/],
    titleTr: "Yol tarifi isteme",
    npcRole: "Local person",
    settingTr: "Street",
    formal: "Excuse me, could you tell me how to get there, please?",
    neutral: "Hi, could you help me find this place?",
    friendly: "Hey, do you know how I can get there?",
    opener: "Hi, do you need directions?",
    followUp: "Of course. Do you have the place marked on a map?",
    closing: "No problem. I can show you which way to go.",
    firstHintTr: "Yeri haritada göstereceğini söyle; özel adres verme.",
    secondAnswers: [
      "Yes, I have the place marked on my phone.",
      "Could you show me which direction to take?",
      "I can show you the location on the map.",
    ],
    secondHintTr: "Haritayı göstereceğini veya yönü sor.",
    firstPatterns: ["(help|tell|know).*(get|find|there|place)"],
    secondPatterns: ["(phone|map|direction|location|show)"],
  },
  {
    id: "landlord_repair",
    patterns: [/\b(ev sahib|landlord\b|kira|kiraci|tamir|repair\b|bozul|broken\b|leak\b|isitma)/],
    titleTr: "Evde tamir talebi",
    npcRole: "Landlord",
    settingTr: (context) => conversationSetting(context, "Phone call"),
    formal: "I wanted to report a maintenance issue in the property. Could you please let me know how it can be repaired?",
    neutral: "There is something in the apartment that needs repair. Could you help arrange it?",
    friendly: "Hi, something at the apartment needs fixing. Could you help?",
    opener: "Hi, what seems to be the problem?",
    followUp: "Thanks for telling me. Is the issue urgent, and when can someone access the property?",
    closing: "All right, I will look into arranging the repair.",
    firstHintTr: "Sorunu genel biçimde bildir ve tamir iste.",
    secondAnswers: [
      "It needs attention soon, but the property is currently safe.",
      "I can be available to provide access at an agreed time.",
      "Please let me know when someone can come and inspect it.",
    ],
    secondHintTr: "Aciliyeti ve erişim zamanını netleştir.",
    firstPatterns: ["(maintenance|repair|fix|needs fixing|issue).*(property|apartment)?"],
    secondPatterns: ["(urgent|safe|available|access|inspect)"],
  },
  {
    id: "decline_invitation",
    patterns: [/\b(davet|kibarca reddet|gelemem|invitation\b|decline\b|say no\b|katilamayacag)/],
    titleTr: "Daveti nazikçe reddetme",
    npcRole: (context) => audienceRole(context, "Friend"),
    settingTr: (context) => conversationSetting(context, "Conversation"),
    formal: "Thank you very much for the invitation. Unfortunately, I will not be able to attend.",
    neutral: "Thanks for inviting me. I am sorry, but I cannot make it.",
    friendly: "Thanks for thinking of me! I can't make it this time, sorry.",
    opener: "Hi, did you see my invitation?",
    followUp: "No problem. Would you like to join us another time?",
    closing: "Sounds good. We will find another chance to meet.",
    firstHintTr: "Önce teşekkür et, sonra net biçimde reddet.",
    secondAnswers: [
      "Yes, I would love to join another time.",
      "Please keep me in mind for the next one.",
      "I hope we can catch up soon.",
    ],
    secondHintTr: "Gelecekte görüşmek istediğini söyle.",
    firstPatterns: ["(thank|thanks).*(invitation|inviting).*(cannot|can't|not be able|make it)?"],
    secondPatterns: ["(another time|next one|catch up|soon)"],
  },
  {
    id: "networking_intro",
    patterns: [/\b(tanis|kendimi tanit|network\b|networking\b|introduce myself\b|ilk kez\b)/],
    titleTr: "Kendini tanıtma",
    npcRole: "New contact",
    settingTr: (context) => conversationSetting(context, "Networking event"),
    formal: "Hello, it is a pleasure to meet you. I would be happy to tell you a little about what I do.",
    neutral: "Hi, nice to meet you. Let me briefly introduce myself.",
    friendly: "Hey, nice to meet you! What brings you here?",
    opener: "Hi, I do not think we have met before.",
    followUp: "Nice to meet you. What kind of work or projects are you interested in?",
    closing: "That sounds interesting. I am glad we had the chance to meet.",
    firstHintTr: "Selam ver ve kısa tanışma cümlesi kur.",
    secondAnswers: [
      "I am interested in practical projects where I can solve real problems.",
      "I enjoy learning about new ideas and meeting people in the field.",
      "I would be happy to hear more about the work you are doing as well.",
    ],
    secondHintTr: "İlgi alanını söyle ve konuşmayı karşı tarafa aç.",
    firstPatterns: ["(nice|pleasure).*(meet|met)|introduce myself"],
    secondPatterns: ["(interested|projects|learning|hear more|work)"],
  },
];

const GENERIC_BLUEPRINT: ScenarioBlueprint = {
  id: "general_update",
  patterns: [],
  titleTr: "Gerçek hayat provası",
  npcRole: (context) => audienceRole(context, "Conversation partner"),
  settingTr: (context) => conversationSetting(context, "Conversation"),
  formal: "I wanted to explain the situation clearly. Please let me know if you need any more information.",
  neutral: "I wanted to give you a quick update about the situation.",
  friendly: "Just wanted to give you a quick heads-up.",
  opener: "Hi, what did you want to talk about?",
  followUp: "Thanks for explaining. Is there anything else I should know?",
  closing: "All right, thanks for the clear update.",
  firstHintTr: "Durumu kısa ve net biçimde açıkla.",
  secondAnswers: [
    "I can share more details if needed.",
    "Please let me know what would work best.",
    "Thank you for understanding.",
  ],
  secondHintTr: "Gerekirse daha fazla bilgi verebileceğini söyle.",
  firstPatterns: ["(explain|update|let you know|heads-up|situation)"],
  secondPatterns: ["(details|let me know|work best|understanding)"],
};

export const REAL_LIFE_BLUEPRINT_IDS: readonly string[] = [
  ...BLUEPRINTS.map((blueprint) => blueprint.id),
  GENERIC_BLUEPRINT.id,
];

function selectBlueprint(normalized: string): ScenarioBlueprint {
  return (
    BLUEPRINTS.find((blueprint) =>
      blueprint.patterns.some((pattern) => pattern.test(normalized)),
    ) ?? GENERIC_BLUEPRINT
  );
}

export function compileRealLifeRequest(input: string): CompiledRealLifeRequest {
  const original = input.trim().replace(/\s+/g, " ").slice(0, 500);
  const normalized = normalizeTr(original);
  const entities = extractRealLifeEntities(original);
  const context: CompileContext = { normalized, original, entities };
  const blueprint = selectBlueprint(normalized);

  return {
    blueprintId: blueprint.id,
    entities,
    titleTr: blueprint.titleTr,
    descriptionTr: original || blueprint.descriptionTr || "Kısa gerçek hayat provası",
    npcRole: render(blueprint.npcRole, context),
    settingTr: render(blueprint.settingTr, context),
    formal: render(blueprint.formal, context),
    neutral: render(blueprint.neutral, context),
    friendly: render(blueprint.friendly, context),
    opener: render(blueprint.opener, context),
    followUp: render(blueprint.followUp, context),
    closing: render(blueprint.closing, context),
    firstHintTr: blueprint.firstHintTr,
    secondAnswers: blueprint.secondAnswers.map((answer) => render(answer, context)),
    secondHintTr: blueprint.secondHintTr,
    firstPatterns: [...blueprint.firstPatterns],
    secondPatterns: [...blueprint.secondPatterns],
  };
}

function ensureInputIsSafe(input: string, prefix: string): string {
  const clean = input.trim().slice(0, 500);
  if (!clean) throw new Error("Lütfen çalışmak istediğin durumu yaz.");
  const safety = checkUserInput(`${prefix} ${clean}`);
  if (!safety.ok) {
    throw new Error(
      safety.suggestedResponse_tr ??
        "Bu istek güvenli İngilizce pratiğine uygun değil.",
    );
  }
  return clean;
}

function ensureOutputIsSafe(parts: readonly string[]): void {
  // These strings are authored roleplay material, not medical/legal advice.
  // Supplying the explicit practice context prevents benign phrases such as
  // "doctor's appointment" from being mistaken for an advice request while
  // the advice-specific safety patterns remain blocked.
  const outputSafety = checkMayaOutput(
    `roleplay scenario practice: ${parts.join(" ")}`,
  );
  if (!outputSafety.ok) {
    throw new Error(
      outputSafety.suggestedResponse_tr ??
        "Bu içerik güvenli İngilizce pratiğine uygun değil.",
    );
  }
}

export async function generateEmergencyAnswers(
  input: string,
): Promise<EmergencyAnswers> {
  const clean = ensureInputIsSafe(input, "English roleplay scenario practice:");
  const plan = compileRealLifeRequest(clean);
  ensureOutputIsSafe([plan.formal, plan.neutral, plan.friendly]);
  return {
    formal: plan.formal,
    neutral: plan.neutral,
    friendly: plan.friendly,
    source: "local",
    intentId: plan.blueprintId,
  };
}

export async function generateCustomScenario(
  input: string,
): Promise<CustomScenario> {
  const clean = ensureInputIsSafe(input, "roleplay practice:");
  const plan = compileRealLifeRequest(clean);
  const turns: CustomScenarioTurn[] = [
    { speaker: "npc", message: plan.opener },
    {
      speaker: "user",
      model_answers: [plan.neutral, plan.formal, plan.friendly],
      acceptable_patterns: plan.firstPatterns,
      hint_tr: plan.firstHintTr,
    },
    { speaker: "npc", message: plan.followUp },
    {
      speaker: "user",
      model_answers: plan.secondAnswers,
      acceptable_patterns: plan.secondPatterns,
      hint_tr: plan.secondHintTr,
    },
    { speaker: "npc", message: plan.closing },
  ];
  ensureOutputIsSafe(
    turns.flatMap((turn) =>
      turn.speaker === "npc" ? [turn.message ?? ""] : turn.model_answers ?? [],
    ),
  );

  return {
    titleTr: plan.titleTr,
    descriptionTr: plan.descriptionTr,
    npcRole: plan.npcRole,
    settingTr: plan.settingTr,
    turns,
    source: "local",
    intentId: plan.blueprintId,
  };
}
