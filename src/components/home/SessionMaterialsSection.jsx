import SectionIcon from "../SectionIcon";
import { sessionMaterialTopics } from "../../data/homeData";

export default function SessionMaterialsSection() {
  return (
    <section className="courses section" id="session-materials">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow section-eyebrow">
            <SectionIcon name="fileText" size={16} className="section-eyebrow-icon" />
            With your 1:1 session
          </p>
          <h2>Question materials after you book</h2>
          <p className="session-materials-lead">
            There is no separate PDF store on this site. When you book a mock interview, we share{" "}
            <strong>related interview questions</strong> for your niche (e.g. frontend, backend, full stack, DSA) so you can
            keep practicing after the session.
          </p>
        </div>
        <div className="course-grid">
          {sessionMaterialTopics.map((item) => (
            <article className="course-card reveal" key={item.title}>
              <div className="course-card-icon" aria-hidden="true">
                <SectionIcon name={item.icon} size={22} />
              </div>
              <h3>{item.title}</h3>
              <p className="meta">Included after your booked mock</p>
              <p className="session-materials-blurb">{item.blurb}</p>
            </article>
          ))}
        </div>
        <p className="session-materials-cta reveal">
          <a href="/book-mock-interview" className="btn ripple-btn btn--with-icon">
            <SectionIcon name="video" size={20} strokeWidth={2} className="btn-icon" />
            Book mock interview
          </a>
        </p>
      </div>
    </section>
  );
}
