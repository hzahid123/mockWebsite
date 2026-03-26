import SectionIcon from "../SectionIcon";
import { trustPillars } from "../../data/homeData";

export default function TrustSection() {
  return (
    <section className="trust section" id="trust" aria-label="What we focus on">
      <div className="container trust-grid">
        {trustPillars.map((item) => (
          <article className="stat-card reveal" key={item.title}>
            <div className="stat-card-icon" aria-hidden="true">
              <SectionIcon name={item.icon} size={28} />
            </div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
