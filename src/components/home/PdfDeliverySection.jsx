import SectionIcon from "../SectionIcon";
import { pdfDeliverySteps, PDF_DELIVERY_SLA } from "../../data/homeData";
import { PHONE_DISPLAY, WHATSAPP_ORDER_PDF_URL } from "../../config/contact";
import { PAYMENT_METHODS_PATH } from "../../config/paymentMethods";

export default function PdfDeliverySection() {
  return (
    <section className="mock-process section" id="pdf-delivery">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow section-eyebrow">
            <SectionIcon name="fileText" size={16} className="section-eyebrow-icon" />
            PDF Delivery Process
          </p>
          <h2>Professional Order Verification and Fast Delivery</h2>
        </div>
        <div className="steps-grid">
          {pdfDeliverySteps.map((step, idx) => (
            <article className="step-card reveal" key={step.title}>
              <div className="step-card-top">
                <span className="step-icon" aria-hidden="true">
                  <SectionIcon name={step.icon} size={22} />
                </span>
                <span className="step-num">{String(idx + 1).padStart(2, "0")}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
        <div className="ad-placeholder ad-placeholder-pdf ad-placeholder-pdf--after-steps reveal">
          <p className="ad-placeholder-lead">
            <span className="ad-placeholder-icon" aria-hidden="true">
              <SectionIcon name="messageCircle" size={20} />
            </span>
            <span>
              Official WhatsApp for payment proof: <strong>{PHONE_DISPLAY}</strong>. Delivery: <strong>{PDF_DELIVERY_SLA}</strong>{" "}
              Payments outside working hours may roll to the next working day.{" "}
              <a href={PAYMENT_METHODS_PATH}>JazzCash &amp; Meezan details</a>.
            </span>
          </p>
          <p className="pdf-delivery-cta-row">
            <a className="btn btn-small ripple-btn" href={WHATSAPP_ORDER_PDF_URL} target="_blank" rel="noreferrer">
              Send Payment Screenshot Now
            </a>
            <a className="btn btn-small btn-outline ripple-btn" href={PAYMENT_METHODS_PATH}>
              Payment methods
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
