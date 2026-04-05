import { useState } from "react";
import SectionIcon from "../SectionIcon";
import { roadmaps, ROADMAP_VISIBLE_COUNT } from "../../data/roadmapsData";

export default function RoadmapsSection() {
  const [active, setActive] = useState(0);
  const r = roadmaps[active];

  return (
    <section className="roadmaps section" id="roadmaps">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow section-eyebrow">
            <SectionIcon name="route" size={16} className="section-eyebrow-icon" />
            Track roadmaps
          </p>
          <h2>Structured paths from core skills to interview readiness</h2>
          <p className="roadmaps-lead">
            Each overview orients you to how a track is built toward interview-ready competence. In a{" "}
            <strong>PKR 2000</strong> mock, we work with you on priorities, sequencing, and depth for your chosen focus—
            grounded in how hiring teams typically evaluate these topics.
          </p>
        </div>

        <div className="roadmap-tabs reveal" role="tablist" aria-label="Choose roadmap track">
          {roadmaps.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={idx === active}
              className={`roadmap-tab ${idx === active ? "active" : ""}`}
              onClick={() => setActive(idx)}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="roadmap-board reveal">
          <header className="roadmap-board-head">
            <h3 className="roadmap-board-title">{r.title} roadmap</h3>
            <p className="roadmap-board-sub">{r.subtitle}</p>
          </header>

          <div className="roadmap-lane" aria-hidden={false}>
            <div className="roadmap-asphalt" />
            <div className="roadmap-center-strip" aria-hidden="true">
              <span className="roadmap-dash-line" />
            </div>

            <ol className="roadmap-steps">
              {r.steps.map((step, i) => {
                const locked = i >= ROADMAP_VISIBLE_COUNT;
                const side = i % 2 === 0 ? "roadmap-step--left" : "roadmap-step--right";
                return (
                  <li key={`${r.id}-${i}`} className={`roadmap-step ${side} ${locked ? "roadmap-step--locked" : ""}`}>
                    <div className="roadmap-step-inner">
                      <div className="roadmap-step-card">
                        <span className="roadmap-mile-label">{locked ? "On this track" : `Milestone ${i + 1}`}</span>
                        <h4>{step.title}</h4>
                        <p>{step.detail}</p>
                      </div>
                      <div className="roadmap-step-join">
                        <span className="roadmap-dot" />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="roadmap-horizon" aria-hidden="true" />
          </div>

          <div className="roadmap-unlock-panel">
            <div className="roadmap-unlock-icon" aria-hidden="true">
              <SectionIcon name="sparkles" size={26} strokeWidth={1.5} />
            </div>
            <p className="roadmap-unlock-title">Take this track further in a dedicated mock interview</p>
            <p className="roadmap-unlock-sub">
              Book for <strong>PKR 2000</strong>. Your session is where we translate this structure into a concrete plan:
              emphasis, sequencing, and interview expectations—aligned to how you are preparing.
            </p>
            <a
              href={`/book-mock-interview?track=${encodeURIComponent(r.id)}`}
              className="btn ripple-btn btn--with-icon roadmap-unlock-btn"
            >
              <SectionIcon name="video" size={20} strokeWidth={2} className="btn-icon" />
              Book mock interview for this track
            </a>
            <p className="roadmap-unlock-foot">
              Standard booking: PKR 2000 per session; confirm payment on WhatsApp as listed on Pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
