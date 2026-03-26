import { useState } from "react";
import SectionIcon from "../SectionIcon";
import { faqs } from "../../data/homeData";

export default function FaqSection() {
  const [activeFaq, setActiveFaq] = useState(-1);

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow section-eyebrow">
            <SectionIcon name="messageMore" size={16} className="section-eyebrow-icon" />
            Frequently Asked Questions
          </p>
          <h2>Everything You Need to Know</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <article key={faq.q} className={`faq-item ${activeFaq === idx ? "active" : ""}`}>
              <button className="faq-question" type="button" onClick={() => setActiveFaq((prev) => (prev === idx ? -1 : idx))}>
                {faq.q}
                <span className="faq-chevron" aria-hidden="true">
                  <SectionIcon name="chevronDown" size={22} />
                </span>
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
