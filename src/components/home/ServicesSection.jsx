import SectionIcon from "../SectionIcon";
import { services } from "../../data/homeData";

export default function ServicesSection() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow section-eyebrow">
            <SectionIcon name="mic" size={16} className="section-eyebrow-icon" />
            What We Offer
          </p>
          <h2>Focused Services for Career Growth</h2>
        </div>
        <div className="services-grid">
          {services.map((item) => (
            <article className="service-card reveal" key={item.title}>
              <div className="icon-wrap" aria-hidden="true">
                <SectionIcon name={item.icon} size={26} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a
                href={item.ctaHref}
                className={`btn btn-small ripple-btn${item.ctaHref === "/book-mock-interview" ? " btn--with-icon" : ""}`}
              >
                {item.ctaHref === "/book-mock-interview" ? (
                  <SectionIcon name="video" size={18} strokeWidth={2} className="btn-icon" />
                ) : null}
                {item.ctaLabel}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
