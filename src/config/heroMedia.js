/**
 * Hero video — served from `public/videos/` → URL `/videos/...` (Vite static assets).
 * Replace the file in `public/videos/interview-video.mp4` to update the clip.
 */
export const HERO_VIDEO = {
  src: "/videos/interview-video.mp4",
  /** Optional JPEG/PNG in `public/` for faster first paint; leave unknown to rely on the first frame. */
  poster: null,
  /** If set, shows a credit link under the player (omit for your own footage). */
  attributionLabel: null,
  attributionHref: null
};
