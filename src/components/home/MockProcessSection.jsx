import SectionIcon from "../SectionIcon";
import { mockSteps } from "../../data/homeData";

export default function MockProcessSection() {
  return (
    <section className="mock-process section" id="mock-process">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow section-eyebrow">
            <SectionIcon name="route" size={16} className="section-eyebrow-icon" />
            Mock Interview Workflow
          </p>
          <h2>How It Works in 3 Simple Steps</h2>
        </div>
        <div className="steps-grid">
          {mockSteps.map((step) => (
            <article className="step-card reveal" key={step.number}>
              <div className="step-card-top">
                <span className="step-icon" aria-hidden="true">
                  <SectionIcon name={step.icon} size={22} />
                </span>
                <span className="step-num">{step.number}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
