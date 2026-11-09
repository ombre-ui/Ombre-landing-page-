// Asset manifest: the single place that says which media files exist.
//
// Every asset starts as `ready: false`, and its slot stays empty.
// After uploading a file to /public, flip that asset to `ready: true`.
// Nothing else in the code needs to change.
//
// Files in /public are served from the site root:
//   public/images/xyz.webp  ->  /images/xyz.webp
//
// `ratio` reserves each slot's shape (width / height) so the page never
// jumps when an image arrives. `srcMobile` and `ratioMobile` are used on
// phones (narrower than 48rem).

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
  vision: {
    ready: false,
    src: '/images/ombre-vision-web.webp',
    srcMobile: '/images/ombre-vision-mobile.webp',
    alt: 'A laptop on a dark desk showing the Ombre Mentors screen, with a lamp, notebook and coffee beside it.',
    ratio: '2560 / 1430',
    ratioMobile: '1400 / 1601',
  },

  // 4. Mentor Handoff image (the line "Your work keeps moving. So does your
  // context." is already in the image, so the page text hides itself once
  // this image is on). No mobile version yet.
  handoff: {
    ready: false,
    src: '/images/ombre-handoff-web.webp',
    alt: 'A project continuing from the Startup Validator Mentor to the Business Model Mentor, with the same context carried forward. Your work keeps moving. So does your context.',
    ratio: '2560 / 1440',
  },

  // 6. Final CTA image (no baked-in text)
  finalCta: {
    ready: false,
    src: '/images/ombre-cta-web.webp',
    srcMobile: '/images/ombre-cta-mobile.webp',
    alt: '',
    ratio: '2560 / 1085',
    ratioMobile: '1388 / 1736',
  },
}
