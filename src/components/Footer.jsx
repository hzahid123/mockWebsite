import { FaCreditCard, FaEnvelope, FaLinkedinIn, FaPhone } from "react-icons/fa6";
import { SiFacebook, SiInstagram, SiWhatsapp, SiYoutube } from "react-icons/si";
import {
  CONTACT_EMAIL,
  MAILTO_CONTACT,
  PHONE_DISPLAY,
  TEL_CONTACT,
  WHATSAPP_CONTACT_URL
} from "../config/contact";

const SOCIAL = {
  facebook: "https://www.facebook.com/profile.php?id=61577632290085",
  instagram: "https://www.instagram.com/dry_run1/",
  linkedin: "https://www.linkedin.com/company/dryrun1/posts/?feedView=all",
  youtube: "https://www.youtube.com/@dryrun-e2w"
};

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
            <a href={MAILTO_CONTACT} className="footer-social-link">
              <FaEnvelope className="footer-contact-icon footer-contact-icon--accent" size={20} aria-hidden />
              <span>{CONTACT_EMAIL}</span>
            </a>
          </p>
          <p className="footer-link-row">
            <a href={TEL_CONTACT} className="footer-social-link">
              <FaPhone className="footer-contact-icon footer-contact-icon--accent" size={20} aria-hidden />
              <span>{PHONE_DISPLAY}</span>
            </a>
          </p>
          <p className="footer-link-row">
            <a
              href={WHATSAPP_CONTACT_URL}
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
              aria-label="Message on WhatsApp"
            >
              <SiWhatsapp className="footer-contact-icon footer-contact-icon--whatsapp" size={20} aria-hidden />
              <span>Message on WhatsApp</span>
            </a>
          </p>
          <p className="footer-link-row">
            <a href="/payment-methods" className="footer-social-link">
              <FaCreditCard className="footer-contact-icon footer-contact-icon--accent" size={20} aria-hidden />
              <span>Payment methods</span>
            </a>
          </p>
        </div>
        <div>
          <h3>Social</h3>
          <p className="footer-link-row">
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
              aria-label="Dry Run on Facebook"
            >
              <SiFacebook className="footer-brand-icon footer-brand-icon--facebook" size={20} aria-hidden />
              <span>Facebook</span>
            </a>
          </p>
          <p className="footer-link-row">
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
              aria-label="Dry Run on Instagram"
            >
              <SiInstagram className="footer-brand-icon footer-brand-icon--instagram" size={20} aria-hidden />
              <span>Instagram</span>
            </a>
          </p>
          <p className="footer-link-row">
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
              aria-label="Haseeb Zahid on LinkedIn"
            >
              <FaLinkedinIn className="footer-brand-icon footer-brand-icon--linkedin" size={20} aria-hidden />
              <span>LinkedIn</span>
            </a>
          </p>
          <p className="footer-link-row">
            <a
              href={SOCIAL.youtube}
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
              aria-label="Dry Run on YouTube"
            >
              <SiYoutube className="footer-brand-icon footer-brand-icon--youtube" size={20} aria-hidden />
              <span>YouTube</span>
            </a>
          </p>
        </div>
      </div>
      <p className="copyright">&copy; {new Date().getFullYear()} MockMaster. All rights reserved.</p>
    </footer>
  );
}
