// Lafla — VOIP Call Simulator data.
//
// Branching dialogue trees for 10 stressful US/UK customer-service calls. Each
// scenario simulates the kind of phone interaction Turkish learners avoid:
// identity verification, hold music, transfers, escalation, refund disputes.
//
// Patterns are forgiving regex — we'd rather route on intent than punish a
// learner for a missing article. Each user node lists a Turkish hint so the
// learner isn't lost if they freeze.

export type VoipAgent =
  | "att_billing"
  | "irs_query"
  | "hospital_admin"
  | "airline_rebook"
  | "verizon_tech"
  | "uscis_status"
  | "comcast_cancel"
  | "amex_dispute"
  | "consulate_appointment"
  | "uber_complaint";

export interface VoipCallNode {
  id: string;
  speaker: "agent" | "user";
  /** Agent: what they say (rendered via TTS). User nodes leave this blank. */
  text?: string;
  /** Turkish nudge shown on user-turn screens. */
  hint_tr?: string;
  /** Forgiving regex list, lower-cased before match. Any hit -> success. */
  acceptable_patterns?: string[];
  /** Multi-choice path. If present, mic input is hidden, buttons shown. */
  options?: { text: string; nextId: string }[];
  /** Single-path next node id (used when this turn has only one continuation). */
  next?: string;
  /** Semantic tag for analytics + coaching feedback. */
  intent?: string;
}

export interface VoipCall {
  id: string;
  agent: VoipAgent;
  title_tr: string;
  agentName: string;
  callerContext_tr: string;
  estimatedMin: number;
  difficulty: "A2" | "B1" | "B2" | "C1";
  voice: "female_us" | "male_us" | "female_uk" | "male_uk";
  nodes: VoipCallNode[];
  startNodeId: string;
  endNodeIds: string[];
  failureNodeIds: string[];
}

// ============================================================
// 1. AT&T Billing Dispute (B1)
// ============================================================
const att: VoipCall = {
  id: "att_billing",
  agent: "att_billing",
  title_tr: "AT&T fatura itirazı",
  agentName: "Sarah, AT&T Customer Service",
  callerContext_tr:
    "Bu ay AT&T faturan 60 dolar fazla geldi. Aramayı sen yapıyorsun, kibarca itiraz et ve iadeyi iste.",
  estimatedMin: 5,
  difficulty: "B1",
  voice: "female_us",
  startNodeId: "att_1",
  endNodeIds: ["att_end_success"],
  failureNodeIds: ["att_end_fail"],
  nodes: [
    {
      id: "att_1",
      speaker: "agent",
      text: "Thank you for calling AT&T, this is Sarah. How can I help you today?",
      next: "att_2",
      intent: "greeting",
    },
    {
      id: "att_2",
      speaker: "user",
      hint_tr:
        "Konuyu kısa söyle: 'Hi, I'm calling about my bill' veya 'There's an issue with my bill'.",
      acceptable_patterns: [
        "(calling|call) about (my )?(bill|charge|account)",
        "(issue|problem|question) (with )?my (bill|account|charge)",
        "(my )?bill (is|seems|looks) (wrong|too high|incorrect)",
        "overcharged|charged too much|extra charge",
        "want to (dispute|question) (a )?(charge|bill)",
      ],
      next: "att_3",
      intent: "state-issue",
    },
    {
      id: "att_3",
      speaker: "agent",
      text: "I'm sorry to hear that. Can I have your account number or the phone number on the account?",
      next: "att_4",
      intent: "verify-identity",
    },
    {
      id: "att_4",
      speaker: "user",
      hint_tr:
        "Telefon numaranı söyle: 'My number is...' veya 'It's 555-202-3344'.",
      acceptable_patterns: [
        "(my )?(number|phone) is .{4,}",
        "it'?s [0-9 \\-]{4,}",
        "[0-9]{3}[\\- ]?[0-9]{3}[\\- ]?[0-9]{4}",
        "five (five|two|three|four|six|seven|eight|nine|zero|oh|one)",
      ],
      next: "att_5",
      intent: "give-account",
    },
    {
      id: "att_5",
      speaker: "agent",
      text: "Thank you. I've pulled up the account. What seems to be the problem with the bill?",
      next: "att_6",
      intent: "ask-details",
    },
    {
      id: "att_6",
      speaker: "user",
      hint_tr:
        "Sorunu anlat: 'I was charged 60 dollars extra' veya 'There's a charge I don't recognize'.",
      acceptable_patterns: [
        "(charged|charge) (extra|too much|sixty|\\$?60|60 dollars)",
        "(don'?t|do not) recognize",
        "(extra|unexpected|surprise) (fee|charge)",
        "(my bill|the bill) (is|was) (sixty|60).{0,15}(more|higher|extra)",
        "this charge .{0,20}(wrong|doesn'?t|isn'?t mine)",
      ],
      next: "att_7",
      intent: "explain-charge",
    },
    {
      id: "att_7",
      speaker: "agent",
      text: "I see a 60-dollar device protection fee. It was added last month. Would you like me to remove it and credit your account, or keep it?",
      options: [
        { text: "Remove it and credit me back.", nextId: "att_8_remove" },
        { text: "Keep it for now.", nextId: "att_8_keep" },
        { text: "Tell me what device protection covers first.", nextId: "att_8_explain" },
      ],
      intent: "offer-resolution",
    },
    {
      id: "att_8_remove",
      speaker: "agent",
      text: "Okay, I've removed the fee and credited 60 dollars to your account. You'll see it on next month's bill. Anything else?",
      next: "att_9",
      intent: "resolve",
    },
    {
      id: "att_8_keep",
      speaker: "agent",
      text: "Understood, I'll leave it as is. Is there anything else I can help with?",
      next: "att_end_fail",
      intent: "no-resolve",
    },
    {
      id: "att_8_explain",
      speaker: "agent",
      text: "It covers cracked screens and water damage on your phone, up to two claims a year. Want me to remove it or keep it?",
      options: [
        { text: "Remove it, please.", nextId: "att_8_remove" },
        { text: "Keep it.", nextId: "att_8_keep" },
      ],
      intent: "clarify",
    },
    {
      id: "att_9",
      speaker: "user",
      hint_tr:
        "Teşekkür et ve kapat: 'No, that's all, thank you' veya 'That's it, thanks'.",
      acceptable_patterns: [
        "no.{0,10}(thanks|thank you|that'?s (it|all))",
        "that'?s (it|all)",
        "i'?m (good|all set)",
        "nothing else",
        "thank you",
      ],
      next: "att_end_success",
      intent: "close",
    },
    {
      id: "att_end_success",
      speaker: "agent",
      text: "Great. Thank you for calling AT&T, have a wonderful day.",
      intent: "end-success",
    },
    {
      id: "att_end_fail",
      speaker: "agent",
      text: "Alright, thank you for calling AT&T. Goodbye.",
      intent: "end-fail",
    },
  ],
};

// ============================================================
// 2. IRS Tax Extension Request (B2)
// ============================================================
const irs: VoipCall = {
  id: "irs_query",
  agent: "irs_query",
  title_tr: "IRS vergi uzatması talebi",
  agentName: "Mr. Davis, IRS",
  callerContext_tr:
    "Vergi beyannamen için Form 4868 ile uzatma istiyorsun. ITIN numaran var ama biraz kekeleyebilirsin — ajan sabırsız.",
  estimatedMin: 6,
  difficulty: "B2",
  voice: "male_us",
  startNodeId: "irs_1",
  endNodeIds: ["irs_end_success"],
  failureNodeIds: ["irs_end_fail"],
  nodes: [
    {
      id: "irs_1",
      speaker: "agent",
      text: "Internal Revenue Service, this is Davis. Please state the reason for your call.",
      next: "irs_2",
      intent: "greeting",
    },
    {
      id: "irs_2",
      speaker: "user",
      hint_tr:
        "Sebebini söyle: 'I'd like to request a tax filing extension' veya 'I need to file Form 4868'.",
      acceptable_patterns: [
        "(request|ask for|file for|apply for|need) (a |an )?(tax )?(filing )?extension",
        "form 4868",
        "extend my (tax )?(filing|deadline|return)",
        "more time to file",
      ],
      next: "irs_3",
      intent: "state-purpose",
    },
    {
      id: "irs_3",
      speaker: "agent",
      text: "I can help. I'll need your full name and Taxpayer Identification Number, please.",
      next: "irs_4",
      intent: "verify-identity",
    },
    {
      id: "irs_4",
      speaker: "user",
      hint_tr:
        "Adın ve ITIN numaranı ver: 'My name is ... and my ITIN is ...'",
      acceptable_patterns: [
        "(my name is|i'?m|this is) .{2,}.{0,40}(itin|number|id|ssn) .{3,}",
        "(name is|i am|i'?m) .{2,}.{0,40}[0-9].{3,}",
        "[a-z]+ [a-z]+,? .{0,30}[0-9]{3,}",
      ],
      next: "irs_5",
      intent: "give-identity",
    },
    {
      id: "irs_5",
      speaker: "agent",
      text: "Thank you. Are you requesting an automatic six-month extension under Form 4868?",
      options: [
        { text: "Yes, that's correct.", nextId: "irs_6_yes" },
        { text: "I'm not sure which form — can you guide me?", nextId: "irs_6_guide" },
        { text: "No, I need to ask about my refund instead.", nextId: "irs_end_fail" },
      ],
      intent: "confirm-form",
    },
    {
      id: "irs_6_yes",
      speaker: "agent",
      text: "Good. Note this is an extension to file, not to pay. Any tax owed is still due by April 15th. Do you understand?",
      next: "irs_7",
      intent: "warn-pay",
    },
    {
      id: "irs_6_guide",
      speaker: "agent",
      text: "Form 4868 is the standard individual extension. Six months, file-only. Shall I proceed with that?",
      options: [
        { text: "Yes, please proceed.", nextId: "irs_6_yes" },
        { text: "Let me think — I'll call back.", nextId: "irs_end_fail" },
      ],
      intent: "clarify-form",
    },
    {
      id: "irs_7",
      speaker: "user",
      hint_tr:
        "Onayla: 'Yes, I understand' veya 'Got it, I'll pay what I owe on time'.",
      acceptable_patterns: [
        "yes,? i (understand|got it|got that)",
        "(i )?(understand|got it|got that|i see)",
        "okay,? (yes|i (understand|see))",
        "i'?ll pay .{0,15}(on time|by april)",
        "(no problem|sounds good|alright)",
      ],
      next: "irs_8",
      intent: "acknowledge",
    },
    {
      id: "irs_8",
      speaker: "agent",
      text: "Your extension is approved. You have until October 15th to file. Do you need the confirmation number now or via email?",
      options: [
        { text: "Email, please.", nextId: "irs_9_email" },
        { text: "Now, please — I'll write it down.", nextId: "irs_9_now" },
      ],
      intent: "delivery-choice",
    },
    {
      id: "irs_9_email",
      speaker: "agent",
      text: "Sent. Anything else I can help with?",
      next: "irs_10",
      intent: "confirm-email",
    },
    {
      id: "irs_9_now",
      speaker: "agent",
      text: "Your confirmation number is 4868-2026-114-A. Anything else?",
      next: "irs_10",
      intent: "give-number",
    },
    {
      id: "irs_10",
      speaker: "user",
      hint_tr:
        "Kapat: 'No, that's all, thank you for your help' kibarca.",
      acceptable_patterns: [
        "no.{0,15}(that'?s (it|all)|thank you|thanks)",
        "thank you for your help",
        "that'?s all,? thank you",
        "i'?m all set",
        "nothing else",
      ],
      next: "irs_end_success",
      intent: "close",
    },
    {
      id: "irs_end_success",
      speaker: "agent",
      text: "Thank you for contacting the IRS. Goodbye.",
      intent: "end-success",
    },
    {
      id: "irs_end_fail",
      speaker: "agent",
      text: "Alright, please call back when you have the correct information. Goodbye.",
      intent: "end-fail",
    },
  ],
};

// ============================================================
// 3. Hospital Admin — X-Ray + Insurance (B1)
// ============================================================
const hospital: VoipCall = {
  id: "hospital_admin",
  agent: "hospital_admin",
  title_tr: "Hastane — röntgen randevusu + sigorta",
  agentName: "Tina, Mercy Hospital Scheduling",
  callerContext_tr:
    "Doktorun röntgen istedi. Hastane idaresinden randevu al ve sigorta kapsamını sor.",
  estimatedMin: 5,
  difficulty: "B1",
  voice: "female_us",
  startNodeId: "hosp_1",
  endNodeIds: ["hosp_end_success"],
  failureNodeIds: ["hosp_end_fail"],
  nodes: [
    {
      id: "hosp_1",
      speaker: "agent",
      text: "Mercy Hospital scheduling, this is Tina. How may I help you?",
      next: "hosp_2",
      intent: "greeting",
    },
    {
      id: "hosp_2",
      speaker: "user",
      hint_tr:
        "İstediğini söyle: 'I'd like to schedule an x-ray' veya 'I need to book an x-ray appointment'.",
      acceptable_patterns: [
        "(schedule|book|make) (a |an )?(x.?ray|xray|appointment)",
        "(need|want) (to )?(schedule|book) (a |an )?(x.?ray|xray)",
        "(x.?ray|xray) (appointment|please)",
      ],
      next: "hosp_3",
      intent: "request-appointment",
    },
    {
      id: "hosp_3",
      speaker: "agent",
      text: "Sure. Do you have a referral from your doctor?",
      options: [
        { text: "Yes, I do.", nextId: "hosp_4_yes" },
        { text: "No, I don't have one yet.", nextId: "hosp_4_no" },
      ],
      intent: "ask-referral",
    },
    {
      id: "hosp_4_yes",
      speaker: "agent",
      text: "Great. Can you tell me the name of the referring doctor?",
      next: "hosp_5",
      intent: "ask-doctor",
    },
    {
      id: "hosp_4_no",
      speaker: "agent",
      text: "You'll need a referral first for insurance to cover it. Please get one from your primary care provider and call back.",
      next: "hosp_end_fail",
      intent: "block",
    },
    {
      id: "hosp_5",
      speaker: "user",
      hint_tr:
        "Doktorun adını söyle: 'Doctor Patel, at Riverside Clinic' veya benzeri.",
      acceptable_patterns: [
        "(doctor|dr\\.?) [a-z]+",
        "(my doctor is|it'?s|name is) (doctor |dr\\.? )?[a-z]+",
        "[a-z]+ at .{2,}",
      ],
      next: "hosp_6",
      intent: "give-doctor",
    },
    {
      id: "hosp_6",
      speaker: "agent",
      text: "Got it. We have openings Tuesday at 10 a.m. or Thursday at 2 p.m. Which works for you?",
      options: [
        { text: "Tuesday at 10 works.", nextId: "hosp_7" },
        { text: "Thursday at 2 is better.", nextId: "hosp_7" },
        { text: "Do you have anything later in the day?", nextId: "hosp_6b" },
      ],
      intent: "offer-slots",
    },
    {
      id: "hosp_6b",
      speaker: "agent",
      text: "I have Wednesday at 5 p.m. Does that work?",
      options: [
        { text: "Yes, Wednesday at 5.", nextId: "hosp_7" },
        { text: "Never mind, Thursday at 2.", nextId: "hosp_7" },
      ],
      intent: "offer-late",
    },
    {
      id: "hosp_7",
      speaker: "agent",
      text: "Booked. One question — what insurance do you have?",
      next: "hosp_8",
      intent: "ask-insurance",
    },
    {
      id: "hosp_8",
      speaker: "user",
      hint_tr:
        "Sigortanı söyle: 'I have Blue Cross' veya sigorta sor: 'Do you accept ... ?'",
      acceptable_patterns: [
        "(i have|i'?ve got|my insurance is) .{3,}",
        "(blue cross|aetna|cigna|united|kaiser|medicaid|medicare|anthem)",
        "do you (take|accept) .{3,}",
        "(is|are) .{2,} (covered|accepted)",
      ],
      next: "hosp_9",
      intent: "give-insurance",
    },
    {
      id: "hosp_9",
      speaker: "agent",
      text: "Yes, we accept that. There may be a copay at check-in. You'll get a text reminder. Anything else?",
      next: "hosp_10",
      intent: "confirm",
    },
    {
      id: "hosp_10",
      speaker: "user",
      hint_tr:
        "Kapat: 'No, thank you' veya kopay sor: 'How much is the copay?'",
      acceptable_patterns: [
        "no.{0,15}(thanks|thank you|that'?s (it|all))",
        "how much (is )?(the )?copay",
        "what'?s (the )?copay",
        "thank you",
        "that'?s (it|all)",
      ],
      next: "hosp_end_success",
      intent: "close",
    },
    {
      id: "hosp_end_success",
      speaker: "agent",
      text: "Perfect. See you at your appointment, take care.",
      intent: "end-success",
    },
    {
      id: "hosp_end_fail",
      speaker: "agent",
      text: "Alright, please call back once you have a referral. Goodbye.",
      intent: "end-fail",
    },
  ],
};

// ============================================================
// 4. United Airlines Rebooking (B2)
// ============================================================
const airline: VoipCall = {
  id: "airline_rebook",
  agent: "airline_rebook",
  title_tr: "United — kaçırılan aktarma sonrası yeni uçuş",
  agentName: "Kevin, United Airlines",
  callerContext_tr:
    "Aktarmanı kaçırdın. IST-EWR-LAX güzergahında EWR'de mahsur kaldın. Aynı gün LAX'a en erken uçuşu iste, ücret istemiyorsun.",
  estimatedMin: 7,
  difficulty: "B2",
  voice: "male_us",
  startNodeId: "air_1",
  endNodeIds: ["air_end_success"],
  failureNodeIds: ["air_end_fail"],
  nodes: [
    {
      id: "air_1",
      speaker: "agent",
      text: "Thanks for calling United, this is Kevin. How can I help?",
      next: "air_2",
      intent: "greeting",
    },
    {
      id: "air_2",
      speaker: "user",
      hint_tr:
        "Durumu özetle: 'I missed my connecting flight from Newark to LA' kibarca.",
      acceptable_patterns: [
        "missed my (connecting|connection|flight)",
        "(missed|lost) (my )?connection",
        "stuck (at|in) (newark|ewr|airport)",
        "need to (rebook|get on another flight)",
      ],
      next: "air_3",
      intent: "state-problem",
    },
    {
      id: "air_3",
      speaker: "agent",
      text: "I'm sorry to hear that. Can I get your confirmation number or last name?",
      next: "air_4",
      intent: "verify-identity",
    },
    {
      id: "air_4",
      speaker: "user",
      hint_tr:
        "Soyadını söyle: 'My last name is ... ' veya rezervasyon kodu: 'Confirmation is ABC123'.",
      acceptable_patterns: [
        "(my )?(last name|name) is [a-z]+",
        "confirmation .{0,8}(is |number )?[a-z0-9]{4,}",
        "it'?s [a-z0-9]{4,}",
        "[a-z]{3,}",
      ],
      next: "air_5",
      intent: "give-identity",
    },
    {
      id: "air_5",
      speaker: "agent",
      text: "I see your booking. There's a flight at 8 p.m. to LAX, but there's a 200-dollar rebooking fee. Or you can take the standby at 5:30 for free. What would you prefer?",
      options: [
        { text: "Standby at 5:30, please.", nextId: "air_6_standby" },
        { text: "The fee shouldn't apply — your airline caused the delay.", nextId: "air_6_push" },
        { text: "8 p.m., even with the fee.", nextId: "air_6_paid" },
      ],
      intent: "offer-options",
    },
    {
      id: "air_6_standby",
      speaker: "agent",
      text: "I'll put you on standby. No guarantee of a seat, but you're high on the list. Anything else?",
      next: "air_7",
      intent: "standby",
    },
    {
      id: "air_6_push",
      speaker: "agent",
      text: "Let me check… You're right, the delay was on our side. I'll waive the fee and confirm you on the 8 p.m. Sound good?",
      options: [
        { text: "Yes, thank you.", nextId: "air_6_confirmed" },
        { text: "Actually, standby at 5:30 is fine.", nextId: "air_6_standby" },
      ],
      intent: "waive-fee",
    },
    {
      id: "air_6_confirmed",
      speaker: "agent",
      text: "Confirmed on UA 1148, 8 p.m., gate C92. You're in 14C. Anything else?",
      next: "air_7",
      intent: "confirmed",
    },
    {
      id: "air_6_paid",
      speaker: "agent",
      text: "Okay, I've charged the card on file 200 dollars and confirmed you. Gate C92, 8 p.m. Anything else?",
      next: "air_7",
      intent: "paid",
    },
    {
      id: "air_7",
      speaker: "user",
      hint_tr:
        "Yemek kuponu veya kapı bilgisi sor: 'Can I get a meal voucher?' veya 'Thank you, that's all'.",
      acceptable_patterns: [
        "can i get (a )?(meal )?voucher",
        "meal voucher",
        "no.{0,10}(thanks|thank you|that'?s (it|all))",
        "thank you",
        "what gate",
        "where (is|do) .{0,15}gate",
      ],
      next: "air_end_success",
      intent: "close",
    },
    {
      id: "air_end_success",
      speaker: "agent",
      text: "All set. Safe travels, and thanks for flying United.",
      intent: "end-success",
    },
    {
      id: "air_end_fail",
      speaker: "agent",
      text: "Alright, please reach out at a kiosk if you change your mind. Goodbye.",
      intent: "end-fail",
    },
  ],
};

// ============================================================
// 5. Verizon Tech Support — Internet Down (A2/B1)
// ============================================================
const verizon: VoipCall = {
  id: "verizon_tech",
  agent: "verizon_tech",
  title_tr: "Verizon — internet çalışmıyor",
  agentName: "Mike, Verizon Tech Support",
  callerContext_tr:
    "İki saattir internet yok. Modemin ışıkları yanıp sönüyor. Yardım iste, basit adımları takip et.",
  estimatedMin: 4,
  difficulty: "A2",
  voice: "male_us",
  startNodeId: "ver_1",
  endNodeIds: ["ver_end_success"],
  failureNodeIds: ["ver_end_fail"],
  nodes: [
    {
      id: "ver_1",
      speaker: "agent",
      text: "Verizon tech support, this is Mike. What's the problem today?",
      next: "ver_2",
      intent: "greeting",
    },
    {
      id: "ver_2",
      speaker: "user",
      hint_tr: "Problemi söyle: 'My internet is not working' basitçe yeterli.",
      acceptable_patterns: [
        "(my )?internet (is )?(not |isn'?t )?(working|down|out|broken)",
        "no internet",
        "wifi (is )?(not |isn'?t )?(working|down)",
        "(can'?t|cannot) (connect|get online)",
      ],
      next: "ver_3",
      intent: "state-issue",
    },
    {
      id: "ver_3",
      speaker: "agent",
      text: "Okay. What color are the lights on your modem right now?",
      options: [
        { text: "Red and blinking.", nextId: "ver_4_red" },
        { text: "All off.", nextId: "ver_4_off" },
        { text: "Green but blinking.", nextId: "ver_4_green" },
      ],
      intent: "diagnose",
    },
    {
      id: "ver_4_red",
      speaker: "agent",
      text: "Red usually means a signal issue. Please unplug the modem, wait ten seconds, and plug it back in. Tell me when the lights are solid.",
      next: "ver_5",
      intent: "restart",
    },
    {
      id: "ver_4_off",
      speaker: "agent",
      text: "If it's completely off, check the power cable. Is it firmly plugged in on both ends?",
      options: [
        { text: "Yes, the cable is fine.", nextId: "ver_4_red" },
        { text: "Oh, it was loose — I plugged it in.", nextId: "ver_5" },
      ],
      intent: "power-check",
    },
    {
      id: "ver_4_green",
      speaker: "agent",
      text: "Green blinking means it's still connecting. Give it two minutes. Are the lights solid yet?",
      options: [
        { text: "Yes, all green now.", nextId: "ver_end_success" },
        { text: "Still blinking after two minutes.", nextId: "ver_4_red" },
      ],
      intent: "wait",
    },
    {
      id: "ver_5",
      speaker: "user",
      hint_tr:
        "Sonucu söyle: 'The lights are green now' veya 'Still red, still not working'.",
      acceptable_patterns: [
        "(the )?(lights )?(are )?green",
        "all green",
        "(it'?s )?working",
        "(still|it'?s still) red",
        "still (not |isn'?t )?working",
        "no change",
      ],
      next: "ver_6",
      intent: "report-result",
    },
    {
      id: "ver_6",
      speaker: "agent",
      text: "If green, you should be back online — try opening a website. If still red, I'll send a technician tomorrow morning. Which is it?",
      options: [
        { text: "Green, I'm online again.", nextId: "ver_end_success" },
        { text: "Still red — send a tech.", nextId: "ver_7_tech" },
      ],
      intent: "resolve-or-escalate",
    },
    {
      id: "ver_7_tech",
      speaker: "agent",
      text: "Okay, a technician will be at your address tomorrow between 9 and 12. You'll get a text. Goodbye for now.",
      next: "ver_end_success",
      intent: "schedule-tech",
    },
    {
      id: "ver_end_success",
      speaker: "agent",
      text: "Glad we could help. Thanks for calling Verizon, have a good one.",
      intent: "end-success",
    },
    {
      id: "ver_end_fail",
      speaker: "agent",
      text: "Alright, please call back when you can check the modem. Goodbye.",
      intent: "end-fail",
    },
  ],
};

// ============================================================
// 6. USCIS Visa Status Check (B2)
// ============================================================
const uscis: VoipCall = {
  id: "uscis_status",
  agent: "uscis_status",
  title_tr: "USCIS — vize başvuru durumu",
  agentName: "Ms. Reyes, USCIS Contact Center",
  callerContext_tr:
    "H-1B başvurun 6 aydır beklemede. Receipt numaranı verip durum sor — formal ve sabırlı ol.",
  estimatedMin: 6,
  difficulty: "B2",
  voice: "female_us",
  startNodeId: "usc_1",
  endNodeIds: ["usc_end_success"],
  failureNodeIds: ["usc_end_fail"],
  nodes: [
    {
      id: "usc_1",
      speaker: "agent",
      text: "USCIS Contact Center, this is Ms. Reyes. How may I help you?",
      next: "usc_2",
      intent: "greeting",
    },
    {
      id: "usc_2",
      speaker: "user",
      hint_tr:
        "Sebebini söyle: 'I'd like to check the status of my H-1B application' kibarca.",
      acceptable_patterns: [
        "check (the )?(status|update) (of |on )?my (case|application|petition|visa|h.?1.?b)",
        "(status|update) (of |on )?my (case|application)",
        "i'?m calling about my (h.?1.?b|visa|case|petition)",
      ],
      next: "usc_3",
      intent: "state-purpose",
    },
    {
      id: "usc_3",
      speaker: "agent",
      text: "Of course. May I have your receipt number? It begins with three letters.",
      next: "usc_4",
      intent: "ask-receipt",
    },
    {
      id: "usc_4",
      speaker: "user",
      hint_tr: "Receipt numaranı söyle: 'It's EAC 22 458 12345' formatında.",
      acceptable_patterns: [
        "(eac|wac|src|lin|iov|msc|nbc|ymd) ?[0-9 ]{6,}",
        "(it'?s|my number is|receipt is) [a-z]{3} ?[0-9 ]+",
        "[a-z]{3} ?[0-9]{2} ?[0-9]{3}",
        "[a-z]{3}[0-9]+",
      ],
      next: "usc_5",
      intent: "give-receipt",
    },
    {
      id: "usc_5",
      speaker: "agent",
      text: "Let me look that up. One moment, please. … Thank you for holding. Your case is currently in 'Initial Review'. Average processing time is 4 to 8 months.",
      next: "usc_6",
      intent: "status-report",
    },
    {
      id: "usc_6",
      speaker: "user",
      hint_tr:
        "İlerlemeyi sor: 'Is there anything I can do to expedite it?' veya 'Has anything changed recently?'.",
      acceptable_patterns: [
        "(is there|anything) .{0,15}(expedite|speed up|hurry)",
        "(any|some) (way|option) to (expedite|speed up)",
        "(any|anything) (change|update|news)",
        "what does .{0,15}(initial review|that) mean",
        "is everything (okay|alright|fine)",
      ],
      next: "usc_7",
      intent: "request-update",
    },
    {
      id: "usc_7",
      speaker: "agent",
      text: "Expedited processing requires documented financial loss, humanitarian need, or a US government interest. Would you like to file an expedite request?",
      options: [
        { text: "Yes, I'd like to file one.", nextId: "usc_8_expedite" },
        { text: "No, I'll wait the normal time.", nextId: "usc_8_wait" },
        { text: "What documents do I need?", nextId: "usc_8_docs" },
      ],
      intent: "offer-expedite",
    },
    {
      id: "usc_8_expedite",
      speaker: "agent",
      text: "I'll create a service request. You'll get an email within seven business days. Anything else?",
      next: "usc_9",
      intent: "submit",
    },
    {
      id: "usc_8_wait",
      speaker: "agent",
      text: "Understood. You can also check status online anytime. Anything else?",
      next: "usc_9",
      intent: "no-expedite",
    },
    {
      id: "usc_8_docs",
      speaker: "agent",
      text: "A letter from an employer about financial impact, or proof of urgent travel — anything official. Want me to file the request?",
      options: [
        { text: "Yes, please file it.", nextId: "usc_8_expedite" },
        { text: "No, I'll gather the documents first.", nextId: "usc_9" },
      ],
      intent: "docs-info",
    },
    {
      id: "usc_9",
      speaker: "user",
      hint_tr:
        "Teşekkür et ve kapat: 'No, thank you for your help, have a good day'.",
      acceptable_patterns: [
        "no.{0,15}(thank|thanks|that'?s (it|all))",
        "thank you for your help",
        "thank you,? .{0,20}(have a|good day)",
        "i'?m all set",
      ],
      next: "usc_end_success",
      intent: "close",
    },
    {
      id: "usc_end_success",
      speaker: "agent",
      text: "You're welcome. Thank you for calling USCIS. Goodbye.",
      intent: "end-success",
    },
    {
      id: "usc_end_fail",
      speaker: "agent",
      text: "I'm sorry I couldn't help further. Please try our online portal. Goodbye.",
      intent: "end-fail",
    },
  ],
};

// ============================================================
// 7. Comcast Cancel Service (B2)
// ============================================================
const comcast: VoipCall = {
  id: "comcast_cancel",
  agent: "comcast_cancel",
  title_tr: "Comcast — internet hizmetini iptal et",
  agentName: "Brad, Comcast Retention",
  callerContext_tr:
    "Comcast'i iptal etmek istiyorsun. Ajan agresifçe seni tutmaya çalışacak; nazikçe ama kararlı dur.",
  estimatedMin: 6,
  difficulty: "B2",
  voice: "male_us",
  startNodeId: "com_1",
  endNodeIds: ["com_end_success"],
  failureNodeIds: ["com_end_fail"],
  nodes: [
    {
      id: "com_1",
      speaker: "agent",
      text: "Comcast customer service, this is Brad. What can I do for you?",
      next: "com_2",
      intent: "greeting",
    },
    {
      id: "com_2",
      speaker: "user",
      hint_tr:
        "Net ol: 'I'd like to cancel my service' veya 'I want to cancel'.",
      acceptable_patterns: [
        "(cancel|stop|end|close|terminate) (my )?(service|account|internet|subscription)",
        "(want|like|need) to cancel",
        "(disconnect|cut off) (my )?(service|account)",
      ],
      next: "com_3",
      intent: "state-cancel",
    },
    {
      id: "com_3",
      speaker: "agent",
      text: "Sorry to hear that. May I ask why you're leaving?",
      next: "com_4",
      intent: "probe-reason",
    },
    {
      id: "com_4",
      speaker: "user",
      hint_tr:
        "Sebep söyle: 'I'm moving' veya 'It's too expensive' veya 'I found a better provider'.",
      acceptable_patterns: [
        "(too|it'?s too) expensive",
        "(i'?m )?moving",
        "moving (out|abroad|to)",
        "(found|got|switched to) (a )?(better|cheaper|new) (provider|service|deal)",
        "don'?t need it",
        "going with .{2,}",
      ],
      next: "com_5",
      intent: "give-reason",
    },
    {
      id: "com_5",
      speaker: "agent",
      text: "I understand. I can offer you 30 dollars off per month for 12 months. Would that change your mind?",
      options: [
        { text: "No, I still want to cancel.", nextId: "com_6_no" },
        { text: "Tell me more about that offer.", nextId: "com_5b" },
        { text: "Okay, I'll take the discount.", nextId: "com_end_fail" },
      ],
      intent: "retention-offer",
    },
    {
      id: "com_5b",
      speaker: "agent",
      text: "It's 30 off your current plan for 12 months, no contract extension. Sound good?",
      options: [
        { text: "No, I still want to cancel.", nextId: "com_6_no" },
        { text: "Yes, sign me up.", nextId: "com_end_fail" },
      ],
      intent: "explain-offer",
    },
    {
      id: "com_6_no",
      speaker: "agent",
      text: "Alright. What's the final cancellation date you want?",
      next: "com_7",
      intent: "set-date",
    },
    {
      id: "com_7",
      speaker: "user",
      hint_tr:
        "Tarih ver: 'End of this month, please' veya 'May 30th'.",
      acceptable_patterns: [
        "(end of|by) (this|next) (month|week)",
        "(today|tomorrow|tonight)",
        "(may|june|july|august|september|october|november|december|january|february|march|april) [0-9]+",
        "[0-9]+(st|nd|rd|th)? of (may|june|july|january|february|march|april|august|september|october|november|december)",
        "as soon as possible",
        "right (now|away)",
      ],
      next: "com_8",
      intent: "give-date",
    },
    {
      id: "com_8",
      speaker: "agent",
      text: "Done. You'll get a final bill and instructions to return the modem. Anything else?",
      next: "com_9",
      intent: "confirm-cancel",
    },
    {
      id: "com_9",
      speaker: "user",
      hint_tr:
        "Kapat: 'No, thank you, have a good day' kibarca.",
      acceptable_patterns: [
        "no.{0,15}(thanks|thank you|that'?s (it|all))",
        "thank you",
        "that'?s (it|all)",
        "i'?m good",
      ],
      next: "com_end_success",
      intent: "close",
    },
    {
      id: "com_end_success",
      speaker: "agent",
      text: "We're sorry to see you go. Have a good day.",
      intent: "end-success",
    },
    {
      id: "com_end_fail",
      speaker: "agent",
      text: "Great, you're staying with us. Thanks for your business.",
      intent: "end-fail",
    },
  ],
};

// ============================================================
// 8. Amex Dispute Charge (B2)
// ============================================================
const amex: VoipCall = {
  id: "amex_dispute",
  agent: "amex_dispute",
  title_tr: "Amex — yetkisiz harcamayı itiraz et",
  agentName: "Linda, American Express Disputes",
  callerContext_tr:
    "Hiç gitmediğin bir otelden 240 dolar çekilmiş. Amex'i ara ve harcamayı itiraz et.",
  estimatedMin: 5,
  difficulty: "B2",
  voice: "female_us",
  startNodeId: "amex_1",
  endNodeIds: ["amex_end_success"],
  failureNodeIds: ["amex_end_fail"],
  nodes: [
    {
      id: "amex_1",
      speaker: "agent",
      text: "American Express disputes, this is Linda. How can I help?",
      next: "amex_2",
      intent: "greeting",
    },
    {
      id: "amex_2",
      speaker: "user",
      hint_tr:
        "Konuyu söyle: 'I'd like to dispute a charge' veya 'There's a charge I don't recognize'.",
      acceptable_patterns: [
        "(dispute|report|question|challenge) (a |the |this )?(charge|transaction|payment)",
        "(don'?t|do not) recognize (a |this )?charge",
        "(fraud|unauthorized) (charge|transaction)",
        "didn'?t make (this|that|the) (charge|purchase)",
      ],
      next: "amex_3",
      intent: "state-dispute",
    },
    {
      id: "amex_3",
      speaker: "agent",
      text: "Of course. Can you verify the last four digits of your card and your zip code?",
      next: "amex_4",
      intent: "verify-identity",
    },
    {
      id: "amex_4",
      speaker: "user",
      hint_tr:
        "Kartın son dört hanesi ve zip kodu: 'Last four is 4421, zip is 10025'.",
      acceptable_patterns: [
        "(last four|the four|four digits).{0,20}[0-9]{4}",
        "[0-9]{4}.{0,20}(zip|code).{0,15}[0-9]{5}",
        "[0-9]{4}.{0,30}[0-9]{5}",
        "[0-9]{4}",
      ],
      next: "amex_5",
      intent: "give-card-info",
    },
    {
      id: "amex_5",
      speaker: "agent",
      text: "Thank you. Which charge are you disputing?",
      next: "amex_6",
      intent: "ask-which",
    },
    {
      id: "amex_6",
      speaker: "user",
      hint_tr:
        "Harcamayı tarif et: 'A 240 dollar charge from Plaza Hotel on May 5th'.",
      acceptable_patterns: [
        "(\\$|[0-9]+ ?dollar)",
        "[0-9]+ (charge|from)",
        "hotel|plaza",
        "(may|march|april|june|july) [0-9]+",
        "two hundred (and )?forty",
      ],
      next: "amex_7",
      intent: "describe-charge",
    },
    {
      id: "amex_7",
      speaker: "agent",
      text: "Got it. Have you contacted the merchant directly first?",
      options: [
        { text: "Yes, they couldn't help.", nextId: "amex_8_yes" },
        { text: "No, I think this is fraud.", nextId: "amex_8_fraud" },
        { text: "No, I haven't.", nextId: "amex_8_no" },
      ],
      intent: "ask-merchant",
    },
    {
      id: "amex_8_yes",
      speaker: "agent",
      text: "Okay, I'll open a dispute. We'll credit your account temporarily while we investigate. Anything else?",
      next: "amex_9",
      intent: "open-dispute",
    },
    {
      id: "amex_8_fraud",
      speaker: "agent",
      text: "Got it. I'll mark this as fraud, freeze the card, and send you a new one within three days. Anything else?",
      next: "amex_9",
      intent: "fraud-flow",
    },
    {
      id: "amex_8_no",
      speaker: "agent",
      text: "We usually ask you to contact the merchant first. Would you like to try them, or proceed with a dispute now?",
      options: [
        { text: "Proceed with the dispute now.", nextId: "amex_8_yes" },
        { text: "I'll contact the merchant and call back.", nextId: "amex_end_fail" },
      ],
      intent: "redirect",
    },
    {
      id: "amex_9",
      speaker: "user",
      hint_tr:
        "Süreyi sor veya kapat: 'How long will it take?' veya 'No, thank you'.",
      acceptable_patterns: [
        "how long",
        "when (will|do) i",
        "no.{0,15}(thanks|thank you|that'?s (it|all))",
        "thank you",
        "that'?s (it|all)",
      ],
      next: "amex_end_success",
      intent: "close",
    },
    {
      id: "amex_end_success",
      speaker: "agent",
      text: "Investigation usually takes 30 to 60 days. Thanks for calling American Express.",
      intent: "end-success",
    },
    {
      id: "amex_end_fail",
      speaker: "agent",
      text: "Alright, please call back if the merchant can't resolve it. Goodbye.",
      intent: "end-fail",
    },
  ],
};

// ============================================================
// 9. US Consulate Istanbul Appointment Reschedule (B2)
// ============================================================
const consulate: VoipCall = {
  id: "consulate_appointment",
  agent: "consulate_appointment",
  title_tr: "ABD Konsolosluğu İstanbul — randevu erteleme",
  agentName: "Ms. Bennett, US Consulate Istanbul",
  callerContext_tr:
    "Hasta olduğun için B1/B2 vize görüşmeni öne almak veya ertelemek istiyorsun. Çok formal ol.",
  estimatedMin: 6,
  difficulty: "B2",
  voice: "female_uk",
  startNodeId: "con_1",
  endNodeIds: ["con_end_success"],
  failureNodeIds: ["con_end_fail"],
  nodes: [
    {
      id: "con_1",
      speaker: "agent",
      text: "US Consulate Istanbul, visa appointments. This is Ms. Bennett. How may I assist you?",
      next: "con_2",
      intent: "greeting",
    },
    {
      id: "con_2",
      speaker: "user",
      hint_tr:
        "Sebebini söyle: 'I'd like to reschedule my visa interview' formal şekilde.",
      acceptable_patterns: [
        "(reschedule|move|change|postpone) (my )?(visa )?(interview|appointment)",
        "(need|want|like) to reschedule",
        "(change|move) the (date|time) of my appointment",
      ],
      next: "con_3",
      intent: "state-purpose",
    },
    {
      id: "con_3",
      speaker: "agent",
      text: "Certainly. Could I have your case number and full name, please?",
      next: "con_4",
      intent: "verify-identity",
    },
    {
      id: "con_4",
      speaker: "user",
      hint_tr:
        "Vaka numaran ve adın: 'Case is AA1234567, name Berk Yilmaz'.",
      acceptable_patterns: [
        "(case|number) (is )?[a-z]{0,2}[0-9]{5,}",
        "[a-z]+ ?[0-9]{5,}.{0,20}(name|i'?m) [a-z]+",
        "[a-z]+ [a-z]+",
        "my name is [a-z]+",
      ],
      next: "con_5",
      intent: "give-identity",
    },
    {
      id: "con_5",
      speaker: "agent",
      text: "Thank you. May I ask the reason for the reschedule?",
      next: "con_6",
      intent: "ask-reason",
    },
    {
      id: "con_6",
      speaker: "user",
      hint_tr:
        "Sebep açıkla: 'I'm sick and have a doctor's note' veya 'My flight was cancelled'.",
      acceptable_patterns: [
        "(i'?m |i am )?(sick|ill|unwell)",
        "doctor'?s note",
        "(flight|trip) (was )?cancel(led|ed)",
        "(family|medical) emergency",
        "work conflict",
        "can'?t make it",
      ],
      next: "con_7",
      intent: "give-reason",
    },
    {
      id: "con_7",
      speaker: "agent",
      text: "I'm sorry to hear that. The earliest available slots are May 22nd at 9 a.m. or June 3rd at 11 a.m. Which do you prefer?",
      options: [
        { text: "May 22nd at 9 works.", nextId: "con_8" },
        { text: "June 3rd, please.", nextId: "con_8" },
        { text: "Is there anything sooner?", nextId: "con_7b" },
      ],
      intent: "offer-slots",
    },
    {
      id: "con_7b",
      speaker: "agent",
      text: "I can put you on the emergency cancellation list, but I cannot guarantee an earlier slot. Shall I do that?",
      options: [
        { text: "Yes, please add me.", nextId: "con_8" },
        { text: "No, I'll take June 3rd.", nextId: "con_8" },
      ],
      intent: "emergency-list",
    },
    {
      id: "con_8",
      speaker: "agent",
      text: "Your appointment has been updated. You'll receive an email confirmation within 24 hours. Anything else?",
      next: "con_9",
      intent: "confirm",
    },
    {
      id: "con_9",
      speaker: "user",
      hint_tr:
        "Belgeleri sor veya teşekkür et: 'What documents should I bring?' veya 'No, thank you'.",
      acceptable_patterns: [
        "what documents",
        "what should i bring",
        "do i need .{0,20}(bring|prepare)",
        "no.{0,15}(thanks|thank you|that'?s (it|all))",
        "thank you for your help",
      ],
      next: "con_end_success",
      intent: "close",
    },
    {
      id: "con_end_success",
      speaker: "agent",
      text: "You're welcome. Please bring your passport, DS-160 confirmation, and the appointment letter. Goodbye.",
      intent: "end-success",
    },
    {
      id: "con_end_fail",
      speaker: "agent",
      text: "Please reach us via the online system if you change your plans. Goodbye.",
      intent: "end-fail",
    },
  ],
};

// ============================================================
// 10. Uber Driver Complaint (B1)
// ============================================================
const uber: VoipCall = {
  id: "uber_complaint",
  agent: "uber_complaint",
  title_tr: "Uber — şoför şikayeti",
  agentName: "Jay, Uber Support",
  callerContext_tr:
    "Şoför kaba davrandı ve uzun yoldan gitti. Şikayet et ve iade iste.",
  estimatedMin: 5,
  difficulty: "B1",
  voice: "male_us",
  startNodeId: "uber_1",
  endNodeIds: ["uber_end_success"],
  failureNodeIds: ["uber_end_fail"],
  nodes: [
    {
      id: "uber_1",
      speaker: "agent",
      text: "Uber Support, this is Jay. How can I help you?",
      next: "uber_2",
      intent: "greeting",
    },
    {
      id: "uber_2",
      speaker: "user",
      hint_tr:
        "Konuyu söyle: 'I'd like to report a driver' veya 'I have a problem with my last ride'.",
      acceptable_patterns: [
        "(report|complain about|complaint about) (a |the |my )?(driver|trip|ride)",
        "(problem|issue) (with )?(my |the )?(last )?(ride|trip|driver)",
        "(driver was|the driver was) .{2,}",
        "want a refund",
      ],
      next: "uber_3",
      intent: "state-issue",
    },
    {
      id: "uber_3",
      speaker: "agent",
      text: "Sorry to hear that. Which trip — the last one you took?",
      options: [
        { text: "Yes, the last one.", nextId: "uber_4" },
        { text: "No, the trip from two hours ago.", nextId: "uber_4" },
      ],
      intent: "identify-trip",
    },
    {
      id: "uber_4",
      speaker: "agent",
      text: "Got it. What happened?",
      next: "uber_5",
      intent: "ask-details",
    },
    {
      id: "uber_5",
      speaker: "user",
      hint_tr:
        "Olayı anlat: 'The driver was rude and took a long route'.",
      acceptable_patterns: [
        "(driver was|was) (rude|impolite|aggressive|angry|mean)",
        "(took|drove) (a )?(long|longer) (way|route|road)",
        "(charged|made it) (too )?expensive",
        "(yelling|shouted|yelled)",
        "felt unsafe",
        "wrong route",
      ],
      next: "uber_6",
      intent: "describe-incident",
    },
    {
      id: "uber_6",
      speaker: "agent",
      text: "That's not acceptable. Were you charged more than the original estimate?",
      options: [
        { text: "Yes, about 8 dollars more.", nextId: "uber_7_yes" },
        { text: "No, same fare, but still bad service.", nextId: "uber_7_no" },
      ],
      intent: "verify-overcharge",
    },
    {
      id: "uber_7_yes",
      speaker: "agent",
      text: "I've refunded 8 dollars to your card and flagged the driver for review. Anything else?",
      next: "uber_8",
      intent: "refund-issued",
    },
    {
      id: "uber_7_no",
      speaker: "agent",
      text: "I've credited 5 dollars to your account as a goodwill gesture and flagged the driver. Anything else?",
      next: "uber_8",
      intent: "goodwill",
    },
    {
      id: "uber_8",
      speaker: "user",
      hint_tr:
        "Kapat: 'No, that's all, thanks' veya şoförün engellenmesini iste: 'Can you make sure I don't get this driver again?'.",
      acceptable_patterns: [
        "no.{0,15}(thanks|thank you|that'?s (it|all))",
        "(make|can you) .{0,20}(not get|never get|block|avoid).{0,15}driver",
        "block this driver",
        "thank you",
        "that'?s (it|all)",
      ],
      next: "uber_end_success",
      intent: "close",
    },
    {
      id: "uber_end_success",
      speaker: "agent",
      text: "Done — you won't be matched with that driver again. Thanks for letting us know, have a good day.",
      intent: "end-success",
    },
    {
      id: "uber_end_fail",
      speaker: "agent",
      text: "Alright, please reach out through the app if anything else comes up. Goodbye.",
      intent: "end-fail",
    },
  ],
};

// ============================================================
// Registry
// ============================================================
export const VOIP_CALLS: readonly VoipCall[] = [
  att,
  irs,
  hospital,
  airline,
  verizon,
  uscis,
  comcast,
  amex,
  consulate,
  uber,
];

export function getVoipCall(id: string): VoipCall | undefined {
  return VOIP_CALLS.find((c) => c.id === id);
}
