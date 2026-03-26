import useUiEffects from "../hooks/useUiEffects";
import HeroSection from "../components/home/HeroSection";
import TrustSection from "../components/home/TrustSection";
import ServicesSection from "../components/home/ServicesSection";
import MockProcessSection from "../components/home/MockProcessSection";
import CoursesSection from "../components/home/CoursesSection";
// import AdSlotSection from "../components/home/AdSlotSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import WhyUsSection from "../components/home/WhyUsSection";
import PricingSection from "../components/home/PricingSection";
import FaqSection from "../components/home/FaqSection";
import FinalCtaSection from "../components/home/FinalCtaSection";

export default function HomePage() {
  useUiEffects();

  return (
    <main>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <MockProcessSection />
      <CoursesSection />
      {/* <AdSlotSection /> */}
      <WhyUsSection />
      <PricingSection />
      <FaqSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </main>
  );
}
