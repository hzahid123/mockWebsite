import SectionIcon from "../SectionIcon";
import { pricingPlans } from "../../data/homeData";

export default function PricingSection() {
  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow section-eyebrow">
            <SectionIcon name="packageOpen" size={16} className="section-eyebrow-icon" />
            Pricing
          </p>
          <h2>Mock interview session pricing</h2>
        </div>
        <div className="pricing-grid">
          {pricingPlans.map((plan) => {
            const external = plan.ctaHref.startsWith("http");
            return (
              <article className={`pricing-card reveal ${plan.featured ? "featured" : ""}`} key={plan.name}>
                <div className="pricing-card-icon" aria-hidden="true">
                  <SectionIcon name={plan.icon} size={26} />
                </div>
                <h3>{plan.name}</h3>
                <p className="price">{plan.price}</p>
                <p>{plan.description}</p>
                <a
                  className={`btn btn-small ripple-btn${plan.ctaHref === "/book-mock-interview" ? " btn--with-icon" : ""}`}
                  href={plan.ctaHref}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {plan.ctaHref === "/book-mock-interview" ? (
                    <SectionIcon name="video" size={18} strokeWidth={2} className="btn-icon" />
                  ) : null}
                  {plan.ctaLabel}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
