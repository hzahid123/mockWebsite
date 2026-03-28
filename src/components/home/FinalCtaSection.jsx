import SectionIcon from "../SectionIcon";

export default function FinalCtaSection() {
  return (
    <section className="final-cta section" id="final-cta">
      <div className="container final-cta-wrap reveal">
        <div className="final-cta-icon" aria-hidden="true">
          <SectionIcon name="sparkles" size={32} strokeWidth={1.5} />
        </div>
        <h2>Ready to Boost Your Interview Success Rate?</h2>
        <p>Book your mock interview today and start preparing with confidence.</p>
        <a href="/book-mock-interview" className="btn ripple-btn btn--with-icon">
          <SectionIcon name="video" size={20} strokeWidth={2} className="btn-icon" />
          Book mock interview
        </a>
      </div>
    </section>
  );
}
