import SectionIcon from "../SectionIcon";
import { courses } from "../../data/homeData";

export default function CoursesSection() {
  return (
    <section className="courses section" id="courses">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow section-eyebrow">
            <SectionIcon name="fileText" size={16} className="section-eyebrow-icon" />
            Interview Question PDFs
          </p>
          <h2>Role-Based PDF Packs</h2>
        </div>
        <div className="course-grid">
          {courses.map((course) => (
            <article className="course-card reveal" key={course.title}>
              <div className="course-card-icon" aria-hidden="true">
                <SectionIcon name={course.icon} size={22} />
              </div>
              <h3>{course.title}</h3>
              <p className="meta">Duration: {course.duration}</p>
              <p className="price">{course.price}</p>
              <a className="btn btn-small ripple-btn" href="/pdf-delivery">
                Order PDF
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
