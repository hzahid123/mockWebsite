import { PHONE_DISPLAY, WHATSAPP_ORDER_PLAN_URL } from "../config/contact";

/** PDF delivery: 1 working hour during working / business days, after confirmed payment. */
export const PDF_DELIVERY_SLA =
  "Within one business hour on working days, once your payment is confirmed on WhatsApp.";

/** Shorter line for course cards under “Duration”. */
export const PDF_DELIVERY_SLA_SHORT =
  "1 business hour on working days, after payment confirmation on WhatsApp";

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
    title: "Question PDF packs",
    description: "Download role-based interview question PDFs for frontend, backend, full stack, and DSA.",
    ctaLabel: "View PDF packs",
    ctaHref: "#courses"
  }
];

export const mockSteps = [
  {
    number: "01",
    icon: "route",
    title: "Choose Your Role",
    description: "Pick frontend, full stack, or specialized tracks based on your goal."
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
    title: "Get Expert Feedback",
    description: "Receive actionable insights, scoring, and a roadmap for improvement."
  }
];

export const courses = [
  { icon: "layout", title: "Frontend Interview Questions PDF", duration: PDF_DELIVERY_SLA_SHORT, price: "PKR 100" },
  { icon: "server", title: "Backend Interview Questions PDF", duration: PDF_DELIVERY_SLA_SHORT, price: "PKR 100" },
  { icon: "layers", title: "Full Stack Interview Questions PDF", duration: PDF_DELIVERY_SLA_SHORT, price: "PKR 100" },
  { icon: "binary", title: "DSA Interview Questions PDF", duration: PDF_DELIVERY_SLA_SHORT, price: "PKR 100" }
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
      "The PDF packs and mock sessions gave me a complete preparation plan. I landed two interview calls within weeks."
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
    description: "One-on-one mock interview with structured, targeted feedback. Session scheduled after payment confirmation.",
    featured: false,
    ctaHref: "/book-mock-interview",
    ctaLabel: "Book mock interview"
  },
  {
    icon: "packageOpen",
    name: "Course Bundle",
    price: "PKR 300",
    description: "Access to all interview question PDF packs. Materials sent after payment confirmation.",
    featured: true,
    ctaHref: WHATSAPP_ORDER_PLAN_URL,
    ctaLabel: "Order on WhatsApp"
  }
];

export const pdfDeliverySteps = [
  {
    icon: "wallet",
    title: "Make Payment",
    description: "Pay PKR 100 for your selected PDF pack or plan."
  },
  {
    icon: "messageCircle",
    title: "Send Screenshot on WhatsApp",
    description: `Send your payment screenshot to ${PHONE_DISPLAY} on WhatsApp with your selected plan name.`
  },
  {
    icon: "fileDown",
    title: "Receive PDFs (working hours)",
    description: `We send your PDFs on WhatsApp after verification: ${PDF_DELIVERY_SLA}`
  }
];

export const faqs = [
  {
    q: "How do I receive the PDF after payment?",
    a: `Pay for your pack, then send a clear payment screenshot to ${PHONE_DISPLAY} on WhatsApp with the exact PDF name you purchased. ${PDF_DELIVERY_SLA}`
  },
  {
    q: "What is the price of each PDF pack?",
    a: "Each role-based interview questions PDF listed on this site is PKR 100 unless stated otherwise."
  },
  {
    q: "When will I get my PDFs?",
    a: `Orders are fulfilled on WhatsApp. ${PDF_DELIVERY_SLA} If you pay outside working hours or on a non-working day, delivery is on the next working day.`
  },
  {
    q: "How do I pay — JazzCash or bank?",
    a: `All wallet and bank account details (JazzCash and Meezan Bank, account title Haseeb Zahid) are on the Payment methods page. After paying, send your screenshot to ${PHONE_DISPLAY} on WhatsApp with what you purchased or booked.`
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
    a: "A single mock interview session is PKR 2000. Course bundle pricing is shown in the Pricing section."
  },
  {
    q: "How do learning roadmaps work on this site?",
    a: "The Roadmaps section is a free preview: the first milestones are clear, and the rest stay blurred as a hook for what is ahead. The full route — order, depth, pacing, and how it ties to interviews — is covered inside your PKR 2000 mock interview when you book for that niche (e.g. frontend, backend, .NET, Angular). Use Book mock interview from the roadmap CTA or Pricing; pay and confirm on WhatsApp as usual."
  }
];
