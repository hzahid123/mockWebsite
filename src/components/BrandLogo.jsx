import { useCallback, useId, useState } from "react";
import { BRAND_LOGO_SRC_LIST } from "../config/brand";

/** Minimum size (px) — skip tiny/placeholder files and try the next path. */
const MIN_LOGO_PX = 48;

function MockLabSvgMark({ className = "" }) {
  const uid = useId().replace(/:/g, "");
  const gradId = `mocklab-grad-${uid}`;

  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      aria-hidden
      focusable="false"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="var(--primary-dark)" />
        </linearGradient>
      </defs>
      <rect x="1.5" y="1.5" width="37" height="37" rx="11" fill={`url(#${gradId})`} />
      <path
        fill="var(--accent)"
        fillOpacity="0.95"
        d="M17 5.5H23V12H27L22 30H18L13 12H17V5.5Z"
      />
      <path
        fill="var(--secondary)"
        fillOpacity="0.2"
        d="M14.5 13.5h11l-1 3.5h-9l-1-3.5Z"
      />
    </svg>
  );
}

/**
 * @param {object} props
 * @param {"header" | "footer"} [props.variant]
 * @param {string} [props.className]
 */
export default function BrandLogo({ variant = "header", className = "" }) {
  const [srcIndex, setSrcIndex] = useState(0);

  const bump = useCallback(() => {
    setSrcIndex((i) => i + 1);
  }, []);

  const onImgError = useCallback(() => {
    bump();
  }, [bump]);

  const onImgLoad = useCallback(
    (e) => {
      const el = e.currentTarget;
      const url = el.currentSrc || el.src || "";
      if (url.includes(".ico")) return;
      const { naturalWidth, naturalHeight } = el;
      if (naturalWidth < MIN_LOGO_PX || naturalHeight < MIN_LOGO_PX) {
        bump();
      }
    },
    [bump]
  );

  const cn = `brand-logo-img brand-logo-img--${variant} ${className}`.trim();

  if (srcIndex >= BRAND_LOGO_SRC_LIST.length) {
    return <MockLabSvgMark className={cn} />;
  }

  const src = BRAND_LOGO_SRC_LIST[srcIndex];

  return (
    <img
      key={src}
      src={src}
      alt=""
      decoding="async"
      fetchPriority={variant === "header" ? "high" : "auto"}
      className={cn}
      aria-hidden
      onError={onImgError}
      onLoad={onImgLoad}
    />
  );
}
