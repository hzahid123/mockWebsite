import { PHONE_DISPLAY } from "../config/contact";

/** Honest trust signals — no fabricated volume stats. */
export const trustPillars = [
  {
    icon: "listChecks",
    title: "Realistic format",
    description: "Practice structured like real technical and behavioral rounds—no inflated claims, just focused prep."
  },
  {
    icon: "messageMore",
    title: "Clear feedback",
    description: "After each mock you get concrete notes: what landed, what to tighten, and what to practice next."
  },
  {
    icon: "calendarClock",
    title: "Your pace",
    description: "Book when you are ready. Sessions are tailored to your role and experience—not one-size-fits-all."
  }
];

export const services = [
  {
    icon: "mic",
    title: "Mock Interviews",
    description: "Practice real-world technical and behavioral rounds tailored to your target role and company level.",
    ctaLabel: "Book mock interview",
    ctaHref: "/book-mock-interview"
  },
  {
    icon: "fileText",
    title: "Question materials with your session",
    description:
      "Curated interview question packs (PDF-style) for your track are shared when you book a 1:1 mock—not sold separately here.",
    ctaLabel: "Book to get materials",
    ctaHref: "#session-materials"
  }
];

export const mockSteps = [
  {
    number: "01",
    icon: "route",
    title: "Choose Your Role",
    description: "Pick frontend, backend, DSA, database, OOP, or other tracks based on your goal."
  },
  {
    number: "02",
    icon: "banknote",
    title: "Book & confirm payment",
    description:
      "Use the Book mock interview page for your details and slot, pay PKR 2000, then confirm payment on WhatsApp."
  },
  {
    number: "03",
    icon: "badgeCheck",
    title: "Feedback & practice pack",
    description:
      "Get expert feedback on your mock, plus related question materials for your niche so you can keep drilling after the session."
  }
];

/** Topics covered by materials shared after a booked mock (no standalone purchase on this site). */
export const sessionMaterialTopics = [
  {
    icon: "layout",
    title: "Frontend",
    blurb: "UI, JS, and typical frontend interview angles aligned to your stack."
  },
  {
    icon: "server",
    title: "Backend",
    blurb: "APIs, data, and service design questions matched to your focus."
  },
  {
    icon: "layers",
    title: "Full stack",
    blurb: "Cross-cutting prompts that mirror end-to-end ownership interviews."
  },
  {
    icon: "binary",
    title: "DSA",
    blurb: "Patterns and problem types to reinforce what interviewers actually ask."
  }
];

export const testimonials = [
  {
    name: "Aisha K.",
    avatar: "woman",
    quote: "The mock rounds felt exactly like real interviews. The feedback was precise and helped me crack my frontend role."
  },
  {
    name: "Daniel R.",
    avatar: "man",
    quote:
      "I improved my confidence and system design approach in just a few sessions. Highly recommended for serious candidates."
  },
  {
    name: "Meera S.",
    avatar: "woman",
    quote:
      "The mock sessions and follow-up practice materials gave me a clear prep plan. I landed two interview calls within weeks."
  }
];

export const whyUsItems = [
  {
    icon: "building",
    title: "Industry Mentors",
    description: "Learn from professionals actively hiring and interviewing candidates."
  },
  {
    icon: "clapperboard",
    title: "Real Interview Simulation",
    description: "Practice under realistic pressure with role-specific question sets."
  },
  {
    icon: "clipboardPen",
    title: "Personalized Feedback",
    description: "Get structured feedback reports with strengths, gaps, and next steps."
  }
];

export const pricingPlans = [
  {
    icon: "video",
    name: "Mock Interview",
    price: "PKR 2000",
    description:
      "One-on-one mock with structured feedback. After your session, you receive related question materials for your track. Session scheduled after payment confirmation.",
    featured: true,
    ctaHref: "/book-mock-interview",
    ctaLabel: "Book mock interview"
  }
];

export const faqs = [
  {
    q: "How do I get interview question PDFs or packs?",
    a: `We do not sell PDFs separately on this site. When you book a 1:1 mock interview (PKR 2000), we share curated question materials matched to your role or track after the session so you can keep practicing. Book from the home page or Pricing, then confirm payment on WhatsApp at ${PHONE_DISPLAY}.`
  },
  {
    q: "How do I pay — JazzCash or bank?",
    a: `All wallet and bank account details (JazzCash and Meezan Bank, account title Haseeb Zahid) are on the Payment methods page. After paying for your mock, send your screenshot to ${PHONE_DISPLAY} on WhatsApp so we can confirm your booking.`
  },
  {
    q: "How do I book a mock interview?",
    a: `Everything starts on the Book mock interview page: submit your details and preferred slot, pay PKR 2000, then send your payment confirmation to ${PHONE_DISPLAY} on WhatsApp. We confirm your session and share next steps from there.`
  },
  {
    q: "What happens during a mock interview?",
    a: "You get a structured practice session aligned with real interview flow (technical and/or behavioral, depending on your role), followed by clear feedback on what went well and what to improve next."
  },
  {
    q: "How much does a mock interview cost?",
    a: "A single mock interview session is PKR 2000. Related question materials are included with your booked session—not sold as a separate product here."
  },
  {
    q: "How do learning roadmaps work on this site?",
    a: "The Roadmaps section is a free preview: the first milestones are clear, and the rest stay blurred as a hook for what is ahead. The full route — order, depth, pacing, and how it ties to interviews — is covered inside your PKR 2000 mock interview when you book for that niche (OOP, Database, DSA, Frontend, or Backend). Use Book mock interview from the roadmap CTA or Pricing; pay and confirm on WhatsApp as usual."
  },
  {
    q: "How can I message you on WhatsApp?",
    a: `You can reach us at ${PHONE_DISPLAY}. Use the “Message on WhatsApp” link in the footer to open a chat.`
  }
];
