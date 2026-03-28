import SectionIcon from "./SectionIcon";
import {
  CONTACT_EMAIL,
  MAILTO_CONTACT,
  PHONE_DISPLAY,
  TEL_CONTACT,
  WHATSAPP_ORDER_PDF_URL
} from "../config/contact";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>About</h3>
          <p>MockMaster helps candidates prepare with realistic interviews and high-quality learning programs.</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p className="footer-link-row">
            <SectionIcon name="mail" size={18} className="footer-inline-icon" />
            <a href={MAILTO_CONTACT}>{CONTACT_EMAIL}</a>
          </p>
          <p className="footer-link-row">
            <SectionIcon name="phone" size={18} className="footer-inline-icon" />
            <a href={TEL_CONTACT}>{PHONE_DISPLAY}</a>
          </p>
          <p className="footer-link-row">
            <SectionIcon name="messageCircle" size={18} className="footer-inline-icon" />
            <a href={WHATSAPP_ORDER_PDF_URL} target="_blank" rel="noreferrer">
              Message on WhatsApp
            </a>
          </p>
          <p className="footer-link-row">
            <SectionIcon name="wallet" size={18} className="footer-inline-icon" />
            <a href="/payment-methods">Payment methods</a>
          </p>
        </div>
        <div>
          <h3>Social</h3>
          <p className="footer-link-row">
            <SectionIcon name="linkedin" size={18} className="footer-inline-icon" />
            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>
          </p>
          <p className="footer-link-row">
            <SectionIcon name="instagram" size={18} className="footer-inline-icon" />
            <a href="#" aria-label="Instagram">
              Instagram
            </a>
          </p>
          <p className="footer-link-row">
            <SectionIcon name="youtube" size={18} className="footer-inline-icon" />
            <a href="#" aria-label="YouTube">
              YouTube
            </a>
          </p>
        </div>
      </div>
      <p className="copyright">&copy; {new Date().getFullYear()} MockMaster. All rights reserved.</p>
    </footer>
  );
}
