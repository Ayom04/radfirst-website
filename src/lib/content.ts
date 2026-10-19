// Site content, ported from the approved design prototype.
// Figures use the "Website version" numbers from the client's documents.

export const CONTACT = {
  email: "radfirstinitiative@gmail.com",
  phone: "+234 802 253 7826",
  phoneRaw: "+2348022537826",
  location: "Lagos State, Nigeria",
};

export const SOCIALS = {
  tiktok: "https://www.tiktok.com/@radfirstinitiative",
  instagram: "https://www.instagram.com/rad_first",
  facebook: "https://www.facebook.com/share/1CFwuvNUf7/",
};

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  minutes: number;
  /** Only articles with a written body get their own page. */
  published?: boolean;
};

export const FEATURED_ARTICLE: Article = {
  slug: "why-radiographers-leave-the-room",
  category: "Imaging explained",
  title: "Why does the radiographer leave the room during your X-ray?",
  excerpt: "It isn’t because your scan is dangerous. Here’s what’s actually going on.",
  minutes: 5,
  published: true,
};

export const ARTICLES: Article[] = [
  { slug: "does-ultrasound-use-radiation", category: "Myths & facts", title: "Does an ultrasound use radiation?", excerpt: "No. Ultrasound uses sound waves, which is why it’s used in pregnancy.", minutes: 3 },
  { slug: "your-first-mammogram", category: "Breast health", title: "What to expect at your first mammogram", excerpt: "How long it takes, whether it hurts, and how to prepare.", minutes: 4 },
  { slug: "symptoms-men-shouldnt-ignore", category: "Men’s health", title: "Five symptoms men shouldn’t ignore", excerpt: "Changes worth getting checked, and the scans that can help.", minutes: 4 },
  { slug: "xray-ct-mri-ultrasound", category: "Imaging explained", title: "X-ray, CT, MRI or ultrasound: what’s the difference?", excerpt: "A plain guide to the four scans you’re most likely to be sent for.", minutes: 6 },
  { slug: "health-myths-to-stop-sharing", category: "Myths & facts", title: "“Soursop cures cancer” and other myths to stop sharing", excerpt: "Why some health claims spread online, and how to check them.", minutes: 5 },
  { slug: "too-young-for-that", category: "Youth health", title: "“I’m too young for that”: health myths young people believe", excerpt: "Highlights from our August Health Connect session.", minutes: 4 },
];

export type TeamMember = { name: string; initials: string; role: string; bio: string; background: string[] };

// Team members other than the founder have chosen not to show public photos.
export const TEAM: TeamMember[] = [
  { name: "Isiaka Omobolaji", initials: "IO", role: "Healthcare Professional & Strategic Adviser", bio: "A radiation therapist and researcher with over 20 years’ experience in oncology at Lagos University Teaching Hospital. He guides RADFIRST’s health-related work and helps the team build connections and partnerships.", background: ["Senior Therapy Radiographer, LUTH", "20+ years in radiation therapy", "Oncology and cancer care", "Research involvement"] },
  { name: "Abdulahi Moriamo Olamiji", initials: "AM", role: "Partnerships & Outreach Lead", bio: "A medical radiographer experienced in general radiography, CT, mammography and ultrasound. She brings clinical and industry experience to RADFIRST’s partnerships and outreach.", background: ["B.Sc. Radiography, University of Lagos", "PGD Ultrasound (in view)", "Postgraduate courses in Mammography and CT", "Radiation Safety training, NNRA", "Member, RRBN and Association of Radiographers of Nigeria"] },
  { name: "Abdullah Ayomide Saba", initials: "AS", role: "Digital Lead", bio: "A software engineer who has built SaaS, fintech and high-traffic platforms. He leads RADFIRST’s digital infrastructure and technology direction.", background: ["B.Sc. Systems Engineering, University of Lagos (in progress)", "Full-stack and backend engineering", "DevOps, databases and APIs"] },
  { name: "Apatira Soffiyah", initials: "AS", role: "Head of Research & Health Education", bio: "She leads RADFIRST’s research and health-education work, including developing and reviewing our educational content.", background: [] },
  { name: "Layole Rumayzah", initials: "LR", role: "Head of Volunteers", bio: "She coordinates RADFIRST’s volunteers, organising, communicating with and supporting the people who contribute to our programmes.", background: [] },
  { name: "Abd Wahab Ogunlola", initials: "AO", role: "Graphic Designer", bio: "He turns health information and organisational messages into clear, engaging and accessible visual content.", background: [] },
];

export type Goal = { title: string; value: number; goal: number; label: string; sub?: string };

export const GOALS: Goal[] = [
  { title: "People reached with digital health education", value: 1000000, goal: 5000000, label: "1M+ / 5M" },
  { title: "Diagnostic-centre partnerships", value: 1, goal: 20, label: "1 / 20" },
  { title: "Subsidised or sponsored scans facilitated", value: 15, goal: 5000, label: "10–15 / 5,000" },
  { title: "Students reached through school education", value: 0, goal: 10000, label: "0 / 10,000", sub: "Starting with the School & Campus Tour" },
  { title: "Institutions with RADFIRST Health Clubs", value: 0, goal: 15, label: "0 / 15", sub: "Ambassador programme in development" },
];
