import { HERO_VIDEO } from "../../config/heroMedia";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import SectionIcon from "../SectionIcon";

export default function HeroSection() {
  const reduceMotion = usePrefersReducedMotion();
  const poster = HERO_VIDEO.poster ?? undefined;
  const showCredit = Boolean(HERO_VIDEO.attributionHref && HERO_VIDEO.attributionLabel);

  return (
    <section className="hero section hero-bleed" id="hero">
      <div className="hero-stack reveal">
        <div className="hero-media" aria-hidden="true">
          <div className="hero-video-frame">
            {reduceMotion ? (
              poster ? (
                <img
                  src={poster}
                  alt=""
                  className="hero-poster"
                  width={1280}
                  height={720}
                  decoding="async"
                />
              ) : (
                <video
                  className="hero-video"
                  src={HERO_VIDEO.src}
                  muted
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />
              )
            ) : (
              <video
                className="hero-video"
                src={HERO_VIDEO.src}
                poster={poster}
                autoPlay
                muted
                playsInline
                loop
                preload="metadata"
                aria-hidden="true"
              />
            )}
          </div>
        </div>
        <div className="hero-scrim" aria-hidden="true" />
        <div className="container hero-content-outer">
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow section-eyebrow">
              <SectionIcon name="video" size={17} className="hero-eyebrow-icon" strokeWidth={1.75} />
              Premium Mock Interview Platform
            </p>
            <h1>Master Your Interviews with Real Mock Practice</h1>
            <p className="hero-subtext">
              Prepare with realistic mock interviews, personalized feedback, and role-based guidance. You can also order
              interview question PDFs once your payment is confirmed.
            </p>
            <div className="hero-actions">
              <a href="/book-mock-interview" className="btn ripple-btn">
                Book mock interview
              </a>
            </div>
          </div>
        </div>
        {showCredit ? (
          <p className="hero-media-credit">
            <a href={HERO_VIDEO.attributionHref} target="_blank" rel="noreferrer">
              {HERO_VIDEO.attributionLabel}
            </a>
          </p>
        ) : null}
      </div>
    </section>
  );
}
