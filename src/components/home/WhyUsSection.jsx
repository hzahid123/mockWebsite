import SectionIcon from "../SectionIcon";
import { whyUsItems } from "../../data/homeData";

export default function WhyUsSection() {
  return (
    <section className="why-us section" id="why-us">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow section-eyebrow">
            <SectionIcon name="building" size={16} className="section-eyebrow-icon" />
            Why Choose Us
          </p>
          <h2>Built for High-Impact Interview Performance</h2>
        </div>
        <div className="why-grid">
          {whyUsItems.map((item) => (
            <article className="why-item reveal" key={item.title}>
              <div className="why-icon-wrap" aria-hidden="true">
                <SectionIcon name={item.icon} size={24} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
