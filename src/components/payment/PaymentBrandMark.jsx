/**
 * Stylized service marks (simplified shapes + brand-associated colors), not official trademarks.
 */
export default function PaymentBrandMark({ id, className = "" }) {
  const cn = `payment-brand-mark ${className}`.trim();

  if (id === "jazzcash") {
    return (
      <svg className={cn} viewBox="0 0 48 48" width="48" height="48" aria-hidden>
        <rect width="48" height="48" rx="12" fill="#E31837" />
        <rect x="15" y="9" width="18" height="30" rx="4" fill="#fff" />
        <rect x="21" y="33" width="6" height="2" rx="1" fill="#E31837" />
        <circle cx="24" cy="15" r="2" fill="#E31837" opacity="0.35" />
        <rect x="19" y="19" width="10" height="8" rx="1" fill="#E31837" opacity="0.12" />
      </svg>
    );
  }

  if (id === "meezan") {
    return (
      <svg className={cn} viewBox="0 0 48 48" width="48" height="48" aria-hidden>
        <rect width="48" height="48" rx="12" fill="#006B3F" />
        <rect x="8" y="34" width="32" height="5" rx="1" fill="#fff" />
        <rect x="11" y="20" width="6" height="14" rx="1" fill="#fff" />
        <rect x="21" y="14" width="6" height="20" rx="1" fill="#fff" />
        <rect x="31" y="20" width="6" height="14" rx="1" fill="#fff" />
      </svg>
    );
  }

  return null;
}
