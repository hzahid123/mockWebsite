import { useState } from "react";
import SectionIcon from "../SectionIcon";
import { roadmaps, ROADMAP_VISIBLE_COUNT } from "../../data/roadmapsData";

export default function RoadmapsSection() {
  const [active, setActive] = useState(0);
  const r = roadmaps[active];
  const lockedCount = Math.max(0, r.steps.length - ROADMAP_VISIBLE_COUNT);

  return (
    <section className="roadmaps section" id="roadmaps">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow section-eyebrow">
            <SectionIcon name="route" size={16} className="section-eyebrow-icon" />
            Learning roadmaps
          </p>
          <h2>Your path, drawn like a real road</h2>
          <p className="roadmaps-lead">
            Preview the first milestones free — the rest stay blurred so you can see the shape of the journey. The{" "}
            <strong>full roadmap</strong> (sequence, depth, pacing, interview focus) is included when you book a{" "}
            <strong>PKR 2000 mock interview</strong> for this track.
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
                        <span className="roadmap-mile-label">{locked ? "Further ahead" : `Milestone ${i + 1}`}</span>
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
            <p className="roadmap-unlock-title">
              <strong>{lockedCount} more stops</strong> on this road — we walk through them in your mock
            </p>
            <p className="roadmap-unlock-sub">
              Book a mock for this track (PKR 2000). In session we cover the full sequence, what to skip, what to double
              down on, and how it shows up in interviews.
            </p>
            <a
              href={`/book-mock-interview?track=${encodeURIComponent(r.id)}`}
              className="btn ripple-btn btn--with-icon roadmap-unlock-btn"
            >
              <SectionIcon name="video" size={20} strokeWidth={2} className="btn-icon" />
              Book mock interview — full roadmap
            </a>
            <p className="roadmap-unlock-foot">Same booking flow as Pricing · Pay PKR 2000 and confirm on WhatsApp</p>
          </div>
        </div>
      </div>
    </section>
  );
}
