import { useState } from "react";
import useUiEffects from "../hooks/useUiEffects";
import SectionIcon from "../components/SectionIcon";
import PaymentBrandMark from "../components/payment/PaymentBrandMark";
import { PAYMENT_METHODS } from "../config/paymentMethods";
import { PHONE_DISPLAY, WHATSAPP_MOCK_PAYMENT_CONFIRM_URL } from "../config/contact";

function CopyValueButton({ value }) {
  const [status, setStatus] = useState("idle");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 2000);
    } catch {
      setStatus("fail");
      window.setTimeout(() => setStatus("idle"), 2500);
    }
  };

  const label = status === "copied" ? "Copied" : status === "fail" ? "Copy manually" : "Copy";

  return (
    <button type="button" className="payment-copy-btn btn btn-small btn-outline ripple-btn" onClick={copy}>
      {label}
    </button>
  );
}

export default function PaymentMethodsPage() {
  useUiEffects();

  return (
    <main className="booking-page">
      <section className="page-hero section">
        <div className="container">
          <p className="eyebrow page-hero-eyebrow reveal">
            <SectionIcon name="wallet" size={18} className="page-hero-eyebrow-icon" />
            Payments
          </p>
          <h1 className="page-title reveal">Payment methods</h1>
          <p className="page-lead reveal">
            Use the details below for your <strong>PKR 2000</strong> mock interview. After paying, send a clear screenshot to{" "}
            <strong>{PHONE_DISPLAY}</strong> on WhatsApp so we can verify and confirm your booking.
          </p>
        </div>
      </section>

      <section className="section payment-methods-section">
        <div className="container">
          <div className="payment-methods-grid reveal">
            {PAYMENT_METHODS.map((m) => (
              <article className="payment-method-card" key={m.id}>
                <div className="payment-method-card__top">
                  <div className="payment-method-card__mark" aria-hidden>
                    <PaymentBrandMark id={m.id} />
                  </div>
                  <div>
                    <h2 className="payment-method-card__title">{m.title}</h2>
                    <p className="payment-method-card__subtitle">{m.subtitle}</p>
                  </div>
                </div>
                <dl className="payment-method-card__details">
                  <div>
                    <dt>Account title</dt>
                    <dd>{m.accountName}</dd>
                  </div>
                  <div>
                    <dt>{m.accountLabel}</dt>
                    <dd className="payment-method-card__value-row">
                      <code className="payment-method-card__code" translate="no">
                        {m.accountValue}
                      </code>
                      <CopyValueButton value={m.accountValue} />
                    </dd>
                  </div>
                </dl>
                <p className="payment-method-card__hint">{m.hint}</p>
              </article>
            ))}
          </div>

          <div className="payment-methods-next reveal">
            <h3 className="payment-methods-next__title">After you pay</h3>
            <ul className="payment-methods-next__list">
              <li>
                <strong>Mock interview (PKR 2000):</strong>{" "}
                <a href={WHATSAPP_MOCK_PAYMENT_CONFIRM_URL} target="_blank" rel="noreferrer">
                  Open WhatsApp with a payment message
                </a>
                .
              </li>
            </ul>
            <p className="payment-methods-next__foot">
              <a href="/book-mock-interview" className="btn btn-small ripple-btn btn--with-icon">
                <SectionIcon name="video" size={18} strokeWidth={2} className="btn-icon" />
                Book mock interview
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
