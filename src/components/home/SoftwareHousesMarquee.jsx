import { useState } from "react";
import SectionIcon from "../SectionIcon";
import { pakSoftwareHouses } from "../../data/pakSoftwareHouses";

function CompanyMark({ company, idx }) {
  const [useInitials, setUseInitials] = useState(false);

  if (useInitials || !company.logo) {
    return (
      <span className={`software-marquee-avatar software-marquee-avatar--${idx + 1}`}>{company.initials}</span>
    );
  }

  return (
    <span className="software-marquee-logo-wrap">
      <img
        className="software-marquee-logo"
        src={company.logo}
        alt=""
        loading="lazy"
        decoding="async"
        onError={() => setUseInitials(true)}
      />
    </span>
  );
}

function MarqueeSet({ suffix }) {
  return (
    <div className="software-marquee-set">
      {pakSoftwareHouses.map((c, idx) => (
        <div className="software-marquee-item" key={`${c.id}-${suffix}`}>
          <CompanyMark company={c} idx={idx} />
          <span className="software-marquee-name">{c.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function SoftwareHousesMarquee() {
  return (
    <section className="software-marquee section" aria-labelledby="software-marquee-heading">
      <div className="container software-marquee-head reveal">
        <p className="eyebrow section-eyebrow">
          <SectionIcon name="building" size={16} className="section-eyebrow-icon" />
          Pakistan tech ecosystem
        </p>
        <h2 id="software-marquee-heading">The same caliber as top software houses</h2>
        <p className="software-marquee-lead">
          Interview prep aligned with how teams hire at leading product and services companies — names you already know.
        </p>
      </div>

      <div className="software-marquee-outer reveal">
        <div className="software-marquee-viewport" aria-hidden="true">
          <div className="software-marquee-track">
            <MarqueeSet suffix="a" />
            <MarqueeSet suffix="b" />
          </div>
        </div>
        <p className="software-marquee-disclaimer">
          Logos are shown for identification only — no affiliation or endorsement by these companies.
        </p>
      </div>
    </section>
  );
}
