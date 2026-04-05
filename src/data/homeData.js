import { PHONE_DISPLAY } from "../config/contact";

export const services = [
  {
    icon: "mic",
    title: "Mock Interviews",
    description:
      "Practice real-world technical and behavioral rounds tailored to your target role and company level.",
    ctaLabel: "Book mock interview",
    ctaHref: "/book-mock-interview"
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
    title: "Feedback & next steps",
    description:
      "Receive structured feedback on your performance—what worked, what to sharpen, and how to prepare for your next round."
  }
];

export const testimonials = [
  {
    name: "Fatima",
    avatar: "woman",
    quote:
      "The mock rounds felt exactly like real interviews. The feedback was precise and helped me crack my frontend role."
  },
  {
    name: "Atta",
    avatar: "man",
    quote:
      "I improved my confidence and system design approach in just a few sessions. Highly recommended for serious candidates."
  },
  {
    name: "Zara",
    avatar: "woman",
    quote:
      "The mocks and clear guidance gave me a focused prep plan. I landed two interview calls within weeks."
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
      "One-on-one mock interview with structured, actionable feedback. Your session is scheduled after payment confirmation on WhatsApp.",
    featured: true,
    ctaHref: "/book-mock-interview",
    ctaLabel: "Book mock interview"
  }
];

export const faqs = [
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
    a: "A single mock interview session is PKR 2000, including the session and written feedback after your round."
  },
  {
    q: "How do learning roadmaps work on this site?",
    a: "Roadmaps give a high-level view of how each track is organized toward interview readiness. The detailed walkthrough—what to emphasize, in what order, and how it shows up in hiring conversations—is part of your PKR 2000 mock when you book for that track (OOP, Database, DSA, Frontend, or Backend). Book from the roadmaps section or Pricing, then confirm payment on WhatsApp as described there."
  },
  {
    q: "How can I message you on WhatsApp?",
    a: `You can reach us at ${PHONE_DISPLAY}. Use the “Message on WhatsApp” link in the footer to open a chat.`
  }
];
