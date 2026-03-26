/**
 * Generic placeholder avatar (Facebook-style silhouette), not a real person photo.
 */
export default function TestimonialAvatar({ variant = "woman", name = "" }) {
  const isMan = variant === "man";
  const label = name ? `Placeholder avatar for ${name}` : "Placeholder profile";

  return (
    <div className="testimonial-avatar" role="img" aria-label={label}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="50" cy="50" r="50" fill="#E4E6EB" />
        <circle cx="50" cy="36" r="17" fill="#BCC0C4" />
        {isMan ? (
          <path
            d="M50 53 Q26 57 18 76 L18 94 L82 94 L82 76 Q74 57 50 53Z"
            fill="#BCC0C4"
          />
        ) : (
          <path
            d="M50 53 Q34 57 26 78 Q24 86 28 92 L72 92 Q76 86 74 78 Q66 57 50 53Z"
            fill="#BCC0C4"
          />
        )}
      </svg>
    </div>
  );
}
