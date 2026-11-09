// Asset manifest: the single place that says which media files exist.
//
// Every asset starts as `ready: false`, and its slot stays empty.
// After uploading a file to /public, flip that asset to `ready: true`.
// Nothing else in the code needs to change.
//
// Files in /public are served from the site root:
//   public/hero/xyz.webm  ->  /hero/xyz.webm

export const assets = {
  // 1. Hero video (20s, plays once, holds on the logo end frame)
  hero: {
    ready: false,
    desktopWebm: '/hero/ombre_hero_v9_1080p.webm',
    // Older-browser fallback. Set to null if this file is not uploaded.
    desktopMp4: '/hero/ombre_hero_v9_1080p_silent.mp4',
    // Phones and portrait screens (4:5)
    mobileMp4: '/hero/ombre_hero_v9_mobile_4x5.mp4',
    // Shown for reduced motion, or if autoplay is blocked
    poster: '/hero/ombre_hero_v9_poster.jpg',
  },

  // 2. Vision + Benefits image
  // `ratio` reserves the slot's shape so the page never jumps when the
  // image arrives. Change it to match the real image (width / height).
  vision: {
    ready: false,
    src: '/images/vision.jpg',
    alt: '',
    ratio: '16 / 9',
  },

  // 4. Mentor Handoff image
  handoff: {
    ready: false,
    src: '/images/handoff.jpg',
    alt: 'A project continuing from the Startup Validator Mentor to the Business Model Mentor, with the same context carried forward.',
  },

  // 6. Final CTA image (no baked-in text)
  finalCta: { ready: false, src: '/images/final-cta.jpg', alt: '' },
}
