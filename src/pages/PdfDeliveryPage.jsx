import useUiEffects from "../hooks/useUiEffects";
import SectionIcon from "../components/SectionIcon";
import PdfDeliverySection from "../components/home/PdfDeliverySection";

export default function PdfDeliveryPage() {
  useUiEffects();

  return (
    <main className="booking-page">
      <section className="page-hero section">
        <div className="container">
          <p className="eyebrow page-hero-eyebrow reveal">
            <SectionIcon name="packageOpen" size={18} className="page-hero-eyebrow-icon" />
            PDF Orders
          </p>
          <h1 className="page-title reveal">Order and Delivery Process</h1>
          <p className="page-lead reveal">
            Follow the steps below to complete payment verification and receive your interview questions PDF quickly
            on WhatsApp.
          </p>
        </div>
      </section>
      <PdfDeliverySection />
    </main>
  );
}
