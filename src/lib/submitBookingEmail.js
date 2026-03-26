import { CONTACT_EMAIL } from "../config/contact";

const ROLE_LABELS = {
  frontend: "Frontend Engineer",
  backend: "Backend Engineer",
  fullstack: "Full Stack Engineer",
  system: "System Design",
  data: "Data / ML",
  other: "Other"
};

const SLOT_LABELS = {
  morning: "Morning (9:00–12:00)",
  afternoon: "Afternoon (12:00–17:00)",
  evening: "Evening (17:00–21:00)"
};

/**
 * Sends the booking payload to CONTACT_EMAIL via FormSubmit (no server required).
 * First submission: check inbox for FormSubmit activation link at that address.
 */
export async function submitMockInterviewBooking(form) {
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      _subject: `Mock interview booking — ${form.fullName}`,
      _replyto: form.email,
      _captcha: false,
      _template: "table",
      name: form.fullName,
      email: form.email,
      phone: form.phone,
      role: ROLE_LABELS[form.role] || form.role,
      company: form.company.trim() || "—",
      preferred_date: form.prefDate,
      time_slot: SLOT_LABELS[form.slot] || form.slot,
      notes: form.notes.trim() || "—",
      consent_contact: form.consent ? "Yes" : "No"
    })
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(
      data.message || data.error || "Could not send your request. Please try again or email us directly."
    );
  }

  if (data.success === false) {
    throw new Error(data.message || "Submission was rejected. Please try again.");
  }
}
