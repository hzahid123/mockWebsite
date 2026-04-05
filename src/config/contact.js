/** Official contact — single source of truth for email, phone, WhatsApp. */

export const CONTACT_EMAIL = "team.dryrun@gmail.com";

/** E.164 digits only (Pakistan mobile), no leading + — used for wa.me links. */
export const PHONE_E164 = "923044756078";

/** International format for display and tel: links. */
export const PHONE_DISPLAY = "+923044756078";

export const MAILTO_CONTACT = `mailto:${CONTACT_EMAIL}`;
export const TEL_CONTACT = `tel:${PHONE_DISPLAY}`;

/** General WhatsApp — booking questions, session follow-up, etc. (no separate PDF storefront). */
export const WHATSAPP_CONTACT_URL = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(
  "Hi, I have a question about MockMaster mock interviews."
)}`;

/** After submitting the mock interview form — user pays PKR 2000 and confirms on WhatsApp. */
export const WHATSAPP_MOCK_PAYMENT_CONFIRM_URL = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(
  "Hi, I completed the mock interview booking form on your website. I am sharing my payment confirmation for PKR 2000."
)}`;

/** @deprecated Use WHATSAPP_CONTACT_URL */
export const WHATSAPP_ORDER_PDF_URL = WHATSAPP_CONTACT_URL;

/** @deprecated Use WHATSAPP_CONTACT_URL */
export const WHATSAPP_ORDER_PLAN_URL = WHATSAPP_CONTACT_URL;

/** @deprecated Use PHONE_DISPLAY — kept for any older imports */
export const WHATSAPP_NUMBER = PHONE_DISPLAY;

/** @deprecated Use PHONE_E164 */
export const WHATSAPP_E164 = PHONE_E164;
