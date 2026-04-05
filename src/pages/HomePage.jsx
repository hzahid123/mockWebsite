import useUiEffects from "../hooks/useUiEffects";
import HeroSection from "../components/home/HeroSection";
import TrustSection from "../components/home/TrustSection";
import SoftwareHousesMarquee from "../components/home/SoftwareHousesMarquee";
import ServicesSection from "../components/home/ServicesSection";
import MockProcessSection from "../components/home/MockProcessSection";
import SessionMaterialsSection from "../components/home/SessionMaterialsSection";
import RoadmapsSection from "../components/home/RoadmapsSection";
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
      <SoftwareHousesMarquee />
      <ServicesSection />
      <MockProcessSection />
      <SessionMaterialsSection />
      <RoadmapsSection />
      {/* <AdSlotSection /> */}
      <WhyUsSection />
      <PricingSection />
      <FaqSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </main>
  );
}
