import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useUiEffects from "../hooks/useUiEffects";
import SectionIcon from "../components/SectionIcon";
import { submitMockInterviewBooking } from "../lib/submitBookingEmail";
import {
  CONTACT_EMAIL,
  MAILTO_CONTACT,
  PHONE_DISPLAY,
  TEL_CONTACT,
  WHATSAPP_MOCK_PAYMENT_CONFIRM_URL,
  WHATSAPP_CONTACT_URL
} from "../config/contact";
import { PAYMENT_METHODS_PATH } from "../config/paymentMethods";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  role: "",
  company: "",
  prefDate: "",
  slot: "",
  notes: "",
  consent: false
};

/** Query `?track=` from Roadmaps section — same ids as roadmapsData. */
const TRACK_TO_ROLE = {
  frontend: "frontend",
  backend: "backend",
  dotnet: "dotnet",
  angular: "angular"
};

const TRACK_TITLE = {
  frontend: "Frontend",
  backend: "Backend",
  dotnet: ".NET",
  angular: "Angular"
};

export default function BookMockInterviewPage() {
  useUiEffects();
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const minDate = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today.toISOString().slice(0, 10);
  }, []);

  const trackParam = searchParams.get("track");
  const trackRole = trackParam && TRACK_TO_ROLE[trackParam];
  const trackTitle = trackParam && TRACK_TITLE[trackParam];

  useEffect(() => {
    if (trackRole) {
      setForm((prev) => ({ ...prev, role: trackRole }));
    }
  }, [trackRole]);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const validate = () => {
    const nextErrors = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Please enter your name.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email.";
    }
    if (!form.phone.trim()) nextErrors.phone = "Please enter a phone number.";
    if (!form.role) nextErrors.role = "Please select a target role.";
    if (!form.prefDate) nextErrors.prefDate = "Please choose a preferred date.";
    if (!form.slot) nextErrors.slot = "Please choose a time slot.";
    if (!form.consent) nextErrors.consent = "Please accept to continue.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitError("");
    setSubmitting(true);
    try {
      await submitMockInterviewBooking(form);
      setSuccess(true);
      window.requestAnimationFrame(() => {
        const box = document.getElementById("formSuccess");
        if (box) box.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="booking-page">
      <section className="page-hero section">
        <div className="container">
          <p className="eyebrow reveal">Mock Interview</p>
          <h1 className="page-title reveal">Book Your Mock Interview</h1>
          <p className="page-lead reveal">
            One flow for all mocks: submit your details and preferred slot below, pay PKR 2000 (JazzCash or Meezan Bank —{" "}
            <a href={PAYMENT_METHODS_PATH}>all details here</a>
            ), then send your payment confirmation on WhatsApp so we can lock in your session. If you came from Learning
            roadmaps, the full roadmap for your niche is part of this same session — not a separate booking.
          </p>
          {trackTitle && trackRole ? (
            <p className="page-lead-note reveal">
              <strong>{trackTitle}</strong> is pre-selected below; we will cover the complete roadmap for this track in
              your mock.
            </p>
          ) : null}
        </div>
      </section>

      <section className="section booking-section">
        <div className="container booking-layout">
          <div className="booking-form-wrap reveal">
            {success && (
              <div id="formSuccess" className="form-success" role="status" aria-live="polite">
                <div className="form-success-inner">
                  <span className="form-success-icon" aria-hidden="true">
                    ✓
                  </span>
                  <h2>Request received</h2>
                  <p>
                    Thanks — your booking details were sent to{" "}
                    <a href={MAILTO_CONTACT}>{CONTACT_EMAIL}</a>. We will follow up with your slot and next steps.
                  </p>
                  <p className="form-success-next">
                    <strong>Next step:</strong> Pay PKR 2000 for your mock slot (see{" "}
                    <a href={PAYMENT_METHODS_PATH}>payment methods</a>
                    ), then{" "}
                    <a href={WHATSAPP_MOCK_PAYMENT_CONFIRM_URL} target="_blank" rel="noreferrer">
                      message us on WhatsApp
                    </a>{" "}
                    with your payment confirmation so we can confirm your booking.
                  </p>
                  <a href="/" className="btn btn-outline ripple-btn">
                    Back to home
                  </a>
                </div>
              </div>
            )}

            {!success && (
              <form className="booking-form" noValidate onSubmit={onSubmit}>
                <h2 className="form-section-title">
                  <SectionIcon name="userRound" size={22} className="form-section-icon" />
                  Your details
                </h2>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">
                      Full name <span className="req">*</span>
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      id="fullName"
                      autoComplete="name"
                      placeholder="Jane Doe"
                      value={form.fullName}
                      onChange={(e) => setField("fullName", e.target.value)}
                    />
                    <p className="form-error">{errors.fullName || ""}</p>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Work email <span className="req">*</span>
                    </label>
                    <input
                      className="form-input"
                      type="email"
                      id="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => setField("email", e.target.value)}
                    />
                    <p className="form-error">{errors.email || ""}</p>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">
                    Phone <span className="req">*</span>
                  </label>
                  <input
                    className="form-input"
                    type="tel"
                    id="phone"
                    autoComplete="tel"
                    placeholder={PHONE_DISPLAY}
                    value={form.phone}
                    onChange={(e) => setField("phone", e.target.value)}
                  />
                  <p className="form-error">{errors.phone || ""}</p>
                </div>

                <h2 className="form-section-title">
                  <SectionIcon name="clipboardPen" size={22} className="form-section-icon" />
                  Interview focus
                </h2>
                <div className="form-group">
                  <label className="form-label" htmlFor="role">
                    Target role <span className="req">*</span>
                  </label>
                  <select className="form-select" id="role" value={form.role} onChange={(e) => setField("role", e.target.value)}>
                    <option value="">Choose a track</option>
                    <option value="frontend">Frontend Engineer</option>
                    <option value="backend">Backend Engineer</option>
                    <option value="angular">Angular</option>
                    <option value="dotnet">.NET / Backend (.NET)</option>
                    <option value="fullstack">Full Stack Engineer</option>
                    <option value="system">System Design</option>
                    <option value="data">Data / ML</option>
                    <option value="other">Other</option>
                  </select>
                  <p className="form-error">{errors.role || ""}</p>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="company">
                    Target company type (optional)
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    id="company"
                    placeholder="e.g. FAANG, startup, enterprise"
                    value={form.company}
                    onChange={(e) => setField("company", e.target.value)}
                  />
                </div>

                <h2 className="form-section-title">
                  <SectionIcon name="calendarRange" size={22} className="form-section-icon" />
                  Preferred schedule
                </h2>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="prefDate">
                      Preferred date <span className="req">*</span>
                    </label>
                    <input
                      className="form-input"
                      type="date"
                      id="prefDate"
                      min={minDate}
                      value={form.prefDate}
                      onChange={(e) => setField("prefDate", e.target.value)}
                    />
                    <p className="form-error">{errors.prefDate || ""}</p>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="slot">
                      Preferred time slot <span className="req">*</span>
                    </label>
                    <select className="form-select" id="slot" value={form.slot} onChange={(e) => setField("slot", e.target.value)}>
                      <option value="">Select slot</option>
                      <option value="morning">Morning (9:00-12:00)</option>
                      <option value="afternoon">Afternoon (12:00-17:00)</option>
                      <option value="evening">Evening (17:00-21:00)</option>
                    </select>
                    <p className="form-error">{errors.slot || ""}</p>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="notes">
                    Notes for your mentor
                  </label>
                  <textarea
                    className="form-textarea"
                    id="notes"
                    rows="4"
                    placeholder="Topics to stress, past interview rounds, or areas you want feedback on."
                    value={form.notes}
                    onChange={(e) => setField("notes", e.target.value)}
                  ></textarea>
                </div>

                <div className="form-group form-checkbox-wrap">
                  <label className="form-checkbox">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => setField("consent", e.target.checked)}
                    />
                    <span>
                      I agree to be contacted about this booking and understand sessions are subject to mentor
                      availability. <span className="req">*</span>
                    </span>
                  </label>
                  <p className="form-error">{errors.consent || ""}</p>
                </div>

                {submitError ? (
                  <p className="form-error form-error-banner" role="alert">
                    {submitError}
                  </p>
                ) : null}

                <div className="form-actions">
                  <button type="submit" className="btn ripple-btn" disabled={submitting}>
                    {submitting ? "Sending…" : "Submit booking request"}
                  </button>
                  <a href="/" className="btn btn-outline ripple-btn">
                    Cancel
                  </a>
                </div>
              </form>
            )}
          </div>

          <aside className="booking-aside reveal">
            <div className="booking-aside-card booking-aside-payment">
              <h3>Where to pay</h3>
              <p className="booking-aside-payment-lead">
                JazzCash and Meezan Bank account details (with copy buttons) are on one page.
              </p>
              <a href={PAYMENT_METHODS_PATH} className="btn btn-small ripple-btn btn--with-icon booking-payment-link">
                <SectionIcon name="wallet" size={18} strokeWidth={2} className="btn-icon" />
                View payment methods
              </a>
            </div>
            <div className="booking-aside-card">
              <h3>How mock booking works</h3>
              <ol className="booking-steps">
                <li>
                  <strong>Submit this form</strong> — Your role, contact details, and preferred date and time.
                </li>
                <li>
                  <strong>Pay &amp; confirm on WhatsApp</strong> — Pay <strong>PKR 2000</strong>, then send your payment
                  confirmation to us on WhatsApp (opens with a short template message).
                </li>
                <li>
                  <strong>We finalize</strong> — We confirm your slot, match you with a mentor, and share session
                  details.
                </li>
              </ol>
              <a href={WHATSAPP_MOCK_PAYMENT_CONFIRM_URL} className="btn btn-small ripple-btn booking-whatsapp-btn" target="_blank" rel="noreferrer">
                Open WhatsApp (after payment)
              </a>
              <p className="booking-aside-note">
                Typical response time: <strong>within 24 hours</strong> on business days after payment confirmation.
              </p>
            </div>
            <div className="booking-aside-card booking-aside-muted">
              <h3>Need help?</h3>
              <p>
                Email <a href={MAILTO_CONTACT}>{CONTACT_EMAIL}</a> or WhatsApp{" "}
                <a href={WHATSAPP_CONTACT_URL} target="_blank" rel="noreferrer">
                  {PHONE_DISPLAY}
                </a>{" "}
                / <a href={TEL_CONTACT}>call {PHONE_DISPLAY}</a>.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
