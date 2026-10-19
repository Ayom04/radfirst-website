// Form definitions for every enquiry on the site. The <StepForm> component renders these.

export type FieldType = "text" | "email" | "tel" | "textarea" | "radio" | "check" | "amount" | "naira" | "file" | "consent";

export type Field = {
  id: string;
  label: string;
  type: FieldType;
  required?: boolean;
  hint?: string;
  placeholder?: string;
  autoComplete?: string;
  narrow?: boolean;
  options?: string[];
  /** Show this field only when field `[0]` has one of the values in `[1]`. */
  showIf?: [string, string[]];
};

export type Step = { title: string; fields: Field[] };

export type FormConfig = {
  steps: Step[];
  submit: string;
  thanks: ThanksKey;
  side?: { title: string; text: string };
};

const SCANS = ["X-ray", "Ultrasound", "Mammography", "CT", "MRI", "Other"];
const AMT1 = ["₦100,000", "₦250,000", "₦500,000", "₦1,000,000", "₦1,500,000"];
const AMT2 = ["₦100,000", "₦250,000", "₦500,000", "₦1,000,000", "₦5,000,000", "₦15,000,000"];

const F = {
  name: { id: "name", label: "Full name", type: "text", required: true, autoComplete: "name" },
  email: { id: "email", label: "Email address", type: "email", required: true, autoComplete: "email" },
  phone: { id: "phone", label: "Phone / WhatsApp number", type: "tel", autoComplete: "tel" },
  country: { id: "country", label: "Country", type: "text", placeholder: "Nigeria", autoComplete: "country-name" },
  update: { id: "update", label: "Would you like an impact update about how your support was used?", type: "radio", options: ["Yes", "No"] },
  method: { id: "method", label: "Preferred update method", type: "radio", options: ["Email", "WhatsApp", "Both"], showIf: ["update", ["Yes"]] },
  anon: { id: "anon", label: "Would you like to remain anonymous?", type: "radio", options: ["Yes", "No"] },
  msg: { id: "msg", label: "Additional message", type: "textarea", placeholder: "Anything you’d like us to know" },
} satisfies Record<string, Field>;

const you: Field[] = [F.name, F.email, F.phone, F.country];
const close: Field[] = [F.update, F.method, F.anon, F.msg];

export type DonateOption = {
  key: string;
  letter: string;
  title: string;
  summary: string;
  intro: [string, string];
  verb: string;
  steps: Step[];
};

export const DONATE: DonateOption[] = [
  {
    key: "case", letter: "A", title: "Fund a diagnostic case", summary: "Cover all or part of one person’s scan", verb: "fund a diagnostic case",
    intro: ["Fund a diagnostic case", "Your support can cover all or part of the diagnostic care someone needs to understand what is happening in their body."],
    steps: [
      { title: "About you", fields: you },
      { title: "Your support", fields: [
        { id: "how", label: "How would you like to support?", type: "radio", required: true, options: ["Fully fund a diagnostic case", "Partially support a diagnostic case", "I’d like RADFIRST to match my contribution with other support", "I’m not sure yet"] },
        { id: "scan", label: "What type of diagnostic support would you like to fund?", type: "radio", required: true, options: [...SCANS, "Let RADFIRST decide the most appropriate need"] },
        { id: "who", label: "Who would you like your support to benefit?", type: "radio", options: ["One individual", "A family", "Women", "Children/adolescents", "Men", "Young people", "Low-income individuals/communities", "Urgent cases generally", "No specific group"] },
        { id: "amt", label: "How much would you like to contribute?", type: "amount", required: true, options: AMT1 },
        { id: "specific", label: "Would you like your contribution to support a specific case?", type: "radio", options: ["Yes", "No", "Allocate it where the need is greatest"] },
      ] },
      { title: "Updates & message", fields: close },
    ],
  },
  {
    key: "scan", letter: "B", title: "Adopt a specific scan", summary: "Make one type of scan accessible", verb: "adopt a scan",
    intro: ["Adopt a scan", "A single diagnostic scan can be an important step toward understanding what is happening in someone’s body. By adopting a scan, you make a specific diagnostic service more accessible to someone who may otherwise struggle to afford it."],
    steps: [
      { title: "About you", fields: you },
      { title: "Your scan", fields: [
        { id: "scan", label: "What type of scan would you like to support?", type: "radio", required: true, options: [...SCANS, "Let RADFIRST determine the need"] },
        { id: "count", label: "How many scans would you like to support?", type: "radio", required: true, options: ["1 scan", "2–5 scans", "6–10 scans", "More than 10", "I’m not sure yet"] },
        { id: "full", label: "Would you like to fully or partially support the scan(s)?", type: "radio", required: true, options: ["Fully fund", "Partially fund", "I’m not sure yet"] },
        { id: "who", label: "Who would you like the scan support to benefit?", type: "radio", options: ["One individual", "Women", "Children/adolescents", "Men", "Young people", "Low-income individuals/communities", "Urgent cases", "No specific group"] },
        { id: "alloc", label: "Would you like RADFIRST to allocate your support based on need?", type: "radio", required: true, options: ["Yes", "No"] },
      ] },
      { title: "Updates & message", fields: [{ ...F.update, required: true }, F.method, F.anon, F.msg] },
    ],
  },
  {
    key: "group", letter: "C", title: "Support a group or population", summary: "Focus your support on people facing barriers", verb: "support a group or population",
    intro: ["Support a group or population", "Help RADFIRST reach people who face barriers to diagnostic care. Choose a population to focus on, or let us direct your contribution where the need is greatest."],
    steps: [
      { title: "About you", fields: [F.name, F.email, F.phone, { id: "org", label: "Organisation, if applicable", type: "text" }, F.country] },
      { title: "Your focus", fields: [
        { id: "pop", label: "Who would you like to support?", type: "radio", required: true, options: ["Women", "Men", "Children/adolescents", "Young people", "Low-income individuals", "Students", "Underserved communities", "People needing urgent diagnostic support", "A specific community", "No specific population"] },
        { id: "what", label: "What would you like your support to provide?", type: "radio", required: true, options: ["Diagnostic scans", "Screening activities", "Health education", "Community outreach", "Referral/access support", "A combination of the above", "I’m not sure yet"] },
        { id: "where", label: "Which location would you like to support?", type: "radio", options: ["Lagos", "Another Nigerian state", "A specific community", "No specific location", "I’m not sure yet"] },
        { id: "amt", label: "How much would you like to contribute?", type: "amount", options: AMT2 },
        { id: "prog", label: "Would you like to support a specific programme?", type: "radio", options: ["Yes", "No", "I’m not sure"] },
        { id: "progname", label: "Which programme or campaign?", type: "text", showIf: ["prog", ["Yes"]] },
      ] },
      { title: "Updates & message", fields: close },
    ],
  },
  {
    key: "campaign", letter: "D", title: "Sponsor a health campaign", summary: "Take health conversations into communities", verb: "sponsor a health campaign",
    intro: ["Sponsor a health campaign", "Help us take important health conversations beyond social media and into communities. Your support helps RADFIRST plan, deliver and amplify campaigns on early diagnosis, preventive healthcare and diagnostic awareness."],
    steps: [
      { title: "About you", fields: [{ id: "name", label: "Full name or organisation name", type: "text", required: true }, { id: "contact", label: "Contact person", type: "text" }, F.email, F.phone, { id: "web", label: "Website or social media", type: "text" }, { id: "loc", label: "Country / state / city", type: "text" }] },
      { title: "The campaign", fields: [
        { id: "type", label: "What type of campaign would you like to support?", type: "radio", required: true, options: ["Early diagnosis awareness", "Cancer awareness", "Women’s health", "Men’s health", "Youth health", "Medical imaging awareness", "Preventive health", "Community health education", "Screening-related activity", "A specific RADFIRST campaign", "Other", "I’m open to recommendations"] },
        { id: "how", label: "How would you like to support the campaign?", type: "check", required: true, hint: "Select all that apply", options: ["Fully sponsor the campaign", "Partially sponsor the campaign", "Sponsor specific activities", "Provide funding", "Provide a venue", "Provide diagnostic services/discounts", "Provide logistics", "Provide media/publicity", "Provide equipment/resources", "Provide professional expertise", "Mobilise a community/group", "Other"] },
        { id: "level", label: "What level of financial support are you considering?", type: "radio", options: ["Under ₦100,000", "₦100,000–₦250,000", "₦250,000–₦500,000", "₦500,000–₦1,000,000", "₦1,000,000+", "I’m not sure yet", "Non-financial support"] },
      ] },
      { title: "Your goals", fields: [
        { id: "reach", label: "Who or where would you like the campaign to reach?", type: "textarea" },
        { id: "topic", label: "Is there a particular campaign, health topic or period you have in mind?", type: "textarea" },
        { id: "achieve", label: "What would you like the partnership to achieve?", type: "textarea" },
        { id: "report", label: "Would you like to receive an impact report?", type: "radio", options: ["Yes", "No"] },
        { id: "msg", label: "Additional information", type: "textarea" },
      ] },
    ],
  },
  {
    key: "fund", letter: "E", title: "Support the Emergency Diagnostic Support Fund", summary: "Help urgent cases when they arise", verb: "support the Emergency Diagnostic Support Fund",
    intro: ["Support the Emergency Diagnostic Support Fund", "Some people need diagnostic care urgently but face financial or access barriers at the moment they need help most. Your contribution builds a pool of support that we direct to eligible urgent needs as they arise."],
    steps: [
      { title: "About you", fields: you },
      { title: "Your contribution", fields: [
        { id: "how", label: "How would you like to support the fund?", type: "radio", required: true, options: ["One-time contribution", "Recurring support", "Sponsor a specific amount", "I’m not sure yet"] },
        { id: "amt", label: "How much would you like to contribute?", type: "amount", options: AMT2 },
        { id: "restrict", label: "Would you like your contribution restricted to a particular type of diagnostic need?", type: "radio", options: ["No restriction", ...SCANS] },
        { id: "prio", label: "Who would you like the fund to prioritise?", type: "radio", options: ["Women", "Men", "Children/adolescents", "Young people", "Low-income individuals", "Urgent cases generally", "No specific group"] },
      ] },
      { title: "Updates & message", fields: close },
    ],
  },
  {
    key: "inkind", letter: "F", title: "Provide in-kind support", summary: "Venues, equipment, media and services", verb: "provide in-kind support",
    intro: ["Provide in-kind support", "Not every contribution has to be financial. Venues, equipment, media support, printing, transport and professional services all help RADFIRST deliver its work."],
    steps: [
      { title: "About you", fields: [{ id: "name", label: "Full name or organisation name", type: "text", required: true }, { id: "contact", label: "Contact person", type: "text" }, F.email, F.phone, { id: "loc", label: "Location", type: "text" }, { id: "web", label: "Website or social media", type: "text" }] },
      { title: "What you’re offering", fields: [
        { id: "what", label: "What would you like to provide?", type: "check", required: true, hint: "Select all that apply", options: ["Venue", "Medical/diagnostic equipment", "Health education materials", "Printing", "Branded materials", "Transportation/logistics", "Photography/videography", "Media/publicity", "Digital/technology support", "Internet/data", "Food/refreshments", "Volunteer/professional services", "Office/work materials", "Other"] },
        { id: "desc", label: "Please describe what you would like to provide", type: "textarea", required: true },
        { id: "qty", label: "Quantity or estimated value, if applicable", type: "text" },
        { id: "when", label: "When would this support be available?", type: "radio", options: ["Immediately", "Within 1 month", "Within 3 months", "Specific date", "Flexible"] },
      ] },
      { title: "Final details", fields: [
        { id: "act", label: "Is this support for a specific RADFIRST activity?", type: "radio", options: ["Yes", "No", "I’m not sure"] },
        { id: "actname", label: "Which activity?", type: "text", showIf: ["act", ["Yes"]] },
        { id: "recog", label: "Would you like recognition for your contribution?", type: "radio", options: ["Yes", "No", "I’m not sure"] },
        { id: "msg", label: "Additional information", type: "textarea" },
      ] },
    ],
  },
  {
    key: "general", letter: "G", title: "General RADFIRST support", summary: "Let us direct it where it’s needed", verb: "support RADFIRST",
    intro: ["Support RADFIRST", "You don’t have to choose a specific project to make a difference. General support helps RADFIRST respond to emerging needs, strengthen our programmes and keep building a culture of early diagnosis."],
    steps: [
      { title: "About you", fields: you },
      { title: "Your support", fields: [
        { id: "how", label: "How would you like to support RADFIRST?", type: "check", required: true, hint: "Select all that apply", options: ["Financial contribution", "Recurring financial support", "In-kind support", "Professional expertise", "Partnership", "Volunteer support", "Networking/connections", "I’m not sure yet"] },
        { id: "amt", label: "How much would you like to contribute?", type: "amount", options: AMT2, showIf: ["how", ["Financial contribution", "Recurring financial support"]] },
        { id: "alloc", label: "Would you like RADFIRST to allocate your support where it is most needed?", type: "radio", options: ["Yes", "No", "I’m open to discussion"] },
        { id: "area", label: "Is there a particular area you would like to support?", type: "radio", options: ["Diagnostic access", "Health education", "Health Connect", "Community outreach", "Youth engagement", "Screening activities", "Emergency diagnostic support", "Digital awareness", "General operations", "No preference", "Other"] },
      ] },
      { title: "Updates & message", fields: close },
    ],
  },
  {
    key: "other", letter: "H", title: "I have another way I’d like to support", summary: "Tell us your idea", verb: "support RADFIRST",
    intro: ["Tell us how you’d like to help", "Have an idea that doesn’t fit the options above? Describe it and our team will get in touch."],
    steps: [{ title: "Your idea", fields: [F.name, F.email, F.phone, { id: "idea", label: "How would you like to support RADFIRST?", type: "textarea", required: true }] }],
  },
];

export const getDonateOption = (key: string) => DONATE.find((o) => o.key === key);

export const FORMS = {
  partner: {
    submit: "Submit partnership enquiry", thanks: "partner",
    side: { title: "What happens after you submit?", text: "Our Partnerships team reviews your submission and contacts you to discuss the opportunity, clarify expectations and agree the right partnership structure." },
    steps: [
      { title: "Your organisation", fields: [
        { id: "org", label: "Organisation name", type: "text", required: true },
        { id: "otype", label: "Organisation type", type: "radio", required: true, options: ["Healthcare provider", "Diagnostic centre", "Hospital", "NGO/nonprofit", "Foundation", "Corporate organisation", "School/university", "Government/public institution", "Faith-based organisation", "Media organisation", "Technology company", "Professional association", "Other"] },
        { id: "web", label: "Website", type: "text" }, { id: "social", label: "Social media handles", type: "text" },
        { id: "country", label: "Country", type: "text", placeholder: "Nigeria" }, { id: "city", label: "State / city", type: "text" },
        { id: "mission", label: "Your organisation’s mission or a brief description", type: "textarea" },
      ] },
      { title: "Contact person", fields: [
        { id: "cname", label: "Contact person’s name", type: "text", required: true }, { id: "pos", label: "Position / title", type: "text" },
        { id: "email", label: "Email", type: "email", required: true }, { id: "phone", label: "Phone / WhatsApp", type: "tel", required: true },
      ] },
      { title: "Partnership interest", fields: [
        { id: "kind", label: "What kind of partnership are you interested in?", type: "check", required: true, hint: "Select all that apply", options: ["Diagnostic services partnership", "Discounted/free diagnostic services", "Campaign sponsorship", "Programme sponsorship", "Community outreach", "School/youth engagement", "Health education", "Research", "Referral/network partnership", "Treatment/referral support", "Media/communications", "Technology/digital support", "In-kind support", "Funding/financial support", "Employee/CSR engagement", "Long-term strategic partnership", "Other"] },
        { id: "support", label: "What would you like to support?", type: "check", options: ["Diagnostic access", "Health education", "RADFIRST Health Connect", "Community outreach", "Youth health programmes", "Screening initiatives", "Emergency Diagnostic Support Fund", "Patient navigation/referral support", "Digital awareness", "General RADFIRST work", "Specific campaign/project", "Not sure yet"] },
        { id: "give", label: "What can your organisation contribute?", type: "check", options: ["Funding", "Diagnostic services", "Discounts", "Venue", "Equipment", "Staff/professional expertise", "Volunteers", "Technology", "Media/publicity", "Logistics", "Community access/mobilisation", "Training", "Research support", "Network/connections", "Other"] },
      ] },
      { title: "Tell us more", fields: [
        { id: "ptype", label: "What type of partnership are you proposing?", type: "textarea" },
        { id: "achieve", label: "What would you like the partnership to achieve?", type: "textarea" },
        { id: "target", label: "Is there a specific campaign, project or target population you have in mind?", type: "textarea" },
        { id: "time", label: "Proposed timeline", type: "radio", options: ["One-off", "1–3 months", "3–6 months", "6–12 months", "Long-term", "Flexible"] },
        { id: "file", label: "Upload a supporting document or proposal", type: "file", hint: "Optional · PDF, DOCX or PPTX" },
      ] },
    ],
  },
  expertise: {
    submit: "Submit", thanks: "expertise",
    side: { title: "Any amount of time helps", text: "One conversation, a workshop, a review of our content or an introduction can all make a real difference." },
    steps: [
      { title: "About you", fields: [
        { id: "name", label: "Full name", type: "text", required: true }, { id: "email", label: "Email", type: "email", required: true },
        { id: "phone", label: "Phone / WhatsApp", type: "tel" }, { id: "loc", label: "Location", type: "text" },
        { id: "field", label: "Profession / field", type: "text", required: true }, { id: "role", label: "Organisation / current role", type: "text" },
        { id: "link", label: "LinkedIn, website or social media", type: "text" },
        { id: "years", label: "Years of experience", type: "radio", options: ["0–2", "3–5", "6–10", "11–20", "20+"] },
      ] },
      { title: "How you’d help", fields: [
        { id: "how", label: "How would you like to support RADFIRST?", type: "check", required: true, hint: "Select all that apply", options: ["Mentorship", "Strategic advice", "Clinical/healthcare guidance", "Research support", "Training/workshops", "Speaking at RADFIRST events", "Content review/fact-checking", "Programme development", "Monitoring & evaluation", "Fundraising", "Partnership introductions", "Networking/connections", "Policy guidance", "Technology/digital support", "Communications/media", "Volunteer/team development", "Career guidance for young people", "Other"] },
        { id: "areas", label: "What areas can you support?", type: "textarea" },
        { id: "level", label: "What level of involvement would you prefer?", type: "radio", options: ["One-off contribution", "Occasional", "Monthly", "Quarterly", "Ongoing", "Flexible"] },
        { id: "open", label: "Would you be open to:", type: "check", options: ["Speaking at an event", "Reviewing educational content", "Advising the team", "Connecting us to organisations or professionals", "Supporting programme development", "Mentoring young people", "Hosting or joining training", "Supporting fundraising"] },
      ] },
      { title: "Tell us more", fields: [
        { id: "about", label: "Tell us about yourself and how you think you could contribute", type: "textarea" },
        { id: "else", label: "Anything else?", type: "textarea" },
      ] },
    ],
  },
  help: {
    submit: "Submit my request", thanks: "help",
    side: { title: "Your information is private", text: "Only the RADFIRST team reviewing support requests sees what you share. Share only what you’re comfortable with." },
    steps: [
      { title: "Who needs support", fields: [
        { id: "for", label: "Who are you seeking support for?", type: "radio", options: ["Myself", "My child/dependent", "A family member", "Someone I am supporting", "Other"] },
        { id: "name", label: "Full name of the person needing support", type: "text", required: true },
        { id: "age", label: "Age", type: "text", required: true, placeholder: "e.g. 34", narrow: true },
        { id: "gender", label: "Gender", type: "radio", options: ["Female", "Male", "Prefer not to say", "Other"] },
        { id: "phone", label: "Phone / WhatsApp", type: "tel", required: true },
        { id: "email", label: "Email", type: "email" },
        { id: "loc", label: "Location", type: "text", hint: "State and LGA or community", placeholder: "e.g. Lagos, Alimosho" },
      ] },
      { title: "What you need", fields: [
        { id: "kind", label: "What kind of support are you seeking?", type: "check", hint: "Select all that apply", options: ["Help accessing a diagnostic scan", "Financial support for a scan", "Discounted diagnostic service", "Help finding a diagnostic facility", "Referral to a healthcare professional", "Understanding the next step after a scan", "Follow-up/navigation support", "Information/health education", "Other"] },
        { id: "scan", label: "What scan or healthcare service do you need?", type: "radio", options: [...SCANS, "I don’t know"] },
        { id: "rec", label: "Has a healthcare professional recommended this?", type: "radio", options: ["Yes", "No", "I’m not sure"] },
        { id: "advised", label: "What were you advised to do?", type: "textarea", showIf: ["rec", ["Yes"]] },
        { id: "story", label: "Briefly tell us what happened and why you are seeking support", type: "textarea" },
        { id: "urgent", label: "How urgent is the request?", type: "radio", options: ["As soon as possible", "Within the next few days", "Within the next few weeks", "Not urgent", "I’m not sure"] },
        { id: "care", label: "Are you currently receiving care from a healthcare professional?", type: "radio", options: ["Yes", "No", "Not currently", "Prefer not to say"] },
        { id: "ref", label: "Do you already have a referral, request form or prescription?", type: "radio", options: ["Yes", "No"] },
        { id: "file", label: "Upload a relevant document", type: "file", hint: "Optional · referral, request form, estimate, previous report. Remove anything you’re not comfortable sharing." },
      ] },
      { title: "Cost & consent", fields: [
        { id: "fin", label: "What kind of financial support do you need?", type: "radio", options: ["Full support", "Partial support", "A discount would help", "I don’t know"] },
        { id: "contrib", label: "If you can contribute something toward the cost, how much?", type: "naira", hint: "Optional" },
        { id: "heard", label: "How did you hear about RADFIRST?", type: "radio", options: ["Social media", "Friend/family", "Healthcare professional", "School", "Community organisation", "RADFIRST event", "Other"] },
        { id: "consent", label: "I confirm that the information provided is accurate to the best of my knowledge, and I understand that submitting this form does not guarantee financial assistance, diagnostic services, treatment or referral.", type: "consent", required: true },
      ] },
    ],
  },
  volunteer: {
    submit: "Apply to volunteer", thanks: "volunteer",
    side: { title: "Questions?", text: "Our Head of Volunteers, Layole Rumayzah, reviews every application." },
    steps: [
      { title: "About you", fields: [
        { id: "name", label: "Full name", type: "text", required: true }, { id: "email", label: "Email", type: "email", required: true },
        { id: "phone", label: "Phone / WhatsApp", type: "tel", required: true }, { id: "loc", label: "Location", type: "text", placeholder: "State, city" },
        { id: "occ", label: "What do you currently do?", type: "radio", options: ["Secondary school student", "University student", "Health professional", "Working professional", "Other"] },
      ] },
      { title: "How you’d help", fields: [
        { id: "areas", label: "Where would you like to help?", type: "check", required: true, hint: "Select all that apply", options: ["Content creation", "Graphic design", "Community outreach", "Events & webinars", "Research & health education", "Patient navigation", "Social media", "Fundraising", "Admin & coordination", "Photography/videography"] },
        { id: "time", label: "How much time can you give?", type: "radio", options: ["A few hours a month", "A few hours a week", "For specific events", "Flexible"] },
        { id: "why", label: "Why would you like to volunteer with RADFIRST?", type: "textarea" },
      ] },
    ],
  },
  story: {
    submit: "Share my story", thanks: "story",
    steps: [{ title: "Your story", fields: [
      { id: "name", label: "Your name", type: "text", hint: "Optional" },
      { id: "contact", label: "Email or WhatsApp", type: "text", required: true, hint: "So we can ask your permission before publishing" },
      { id: "kind", label: "Whose story is this?", type: "radio", options: ["My own experience", "Someone I supported", "As a health worker", "As a RADFIRST volunteer"] },
      { id: "story", label: "Your story", type: "textarea", required: true, placeholder: "What happened, what helped, what you wish you’d known" },
      { id: "pub", label: "If we share it, how should we credit you?", type: "radio", options: ["Full name", "First name only", "Anonymous", "Please don’t publish it"] },
      { id: "consent", label: "I’m happy for RADFIRST to contact me about this story. Nothing will be published without my approval.", type: "consent", required: true },
    ] }],
  },
  contact: {
    submit: "Send message", thanks: "contact",
    steps: [{ title: "Send us a message", fields: [
      { id: "name", label: "Your name", type: "text", required: true }, { id: "email", label: "Email", type: "email", required: true },
      { id: "topic", label: "What is it about?", type: "radio", options: ["General question", "Partnership", "Media & press", "Programmes", "Proposal request"] },
      { id: "msg", label: "Message", type: "textarea", required: true },
    ] }],
  },
} satisfies Record<string, FormConfig>;

export type FormName = keyof typeof FORMS;

export type Thanks = { heading: string; text: string; next?: string[]; alert?: boolean };

export const THANKS = {
  donate: { heading: "Thank you for choosing to support diagnostic access.", text: "Your request has been received by the RADFIRST team.", next: ["We review your support request.", "A member of the RADFIRST team contacts you to confirm the details.", "We share the payment or account information and any next steps.", "Your contribution is documented and directed to the agreed area of support.", "Where you asked for one, you receive an impact update."] },
  partner: { heading: "Thank you. Your partnership enquiry is in.", text: "Our Partnerships team will review your submission and contact you to discuss the opportunity, clarify expectations and agree the most appropriate partnership structure." },
  expertise: { heading: "Thank you for your interest in supporting RADFIRST.", text: "Our team will review your response and reach out where there is a suitable opportunity to collaborate." },
  help: { heading: "We’ve received your request.", text: "A member of our team will review it and contact you by phone or WhatsApp. Submitting this form does not guarantee financial assistance, a scan, treatment or a referral, but we will tell you what we can do and point you to other help where we can’t.", next: ["We review your request and any documents you shared.", "We contact you to understand your situation better.", "We tell you whether RADFIRST can support you, connect you to a service, or refer you elsewhere."], alert: true },
  volunteer: { heading: "Thanks for offering your time.", text: "Our Head of Volunteers will contact you about current opportunities and how onboarding works." },
  story: { heading: "Thank you for sharing your story.", text: "We read every story. We’ll contact you before anything is published, and nothing goes live without your approval." },
  contact: { heading: "Message sent.", text: "Thanks for getting in touch. We usually reply within two working days." },
  notify: { heading: "You’re on the list.", text: "We’ll send you the topic, speaker and joining link for the next Health Connect session as soon as they’re confirmed." },
} satisfies Record<string, Thanks>;

export type ThanksKey = keyof typeof THANKS;

/** Thank-you page slugs: one per form, plus `donate-<option>` so the heading names the option chosen. */
export function thanksFor(slug: string): Thanks | undefined {
  if (slug.startsWith("donate-")) {
    const opt = getDonateOption(slug.slice(7));
    if (opt) return { ...THANKS.donate, heading: `Thank you for choosing to ${opt.verb}.` };
  }
  return slug in THANKS ? THANKS[slug as ThanksKey] : undefined;
}

export const THANKS_SLUGS = [...Object.keys(THANKS), ...DONATE.map((o) => `donate-${o.key}`)];
