import SectionIcon from "../SectionIcon";
import { testimonials } from "../../data/homeData";
import TestimonialAvatar from "./TestimonialAvatar";

export default function TestimonialsSection() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow section-eyebrow">
            <SectionIcon name="quote" size={16} className="section-eyebrow-icon" />
            Student Success Stories
          </p>
          <h2>What Learners Say About Us</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card reveal" key={item.name}>
              <div className="testimonial-quote-icon" aria-hidden="true">
                <SectionIcon name="quote" size={28} strokeWidth={1.35} />
              </div>
              <TestimonialAvatar variant={item.avatar} name={item.name} />
              <p>"{item.quote}"</p>
              <h3>{item.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
