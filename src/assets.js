// Asset manifest: the single place that says which media files exist.
//
// Each asset has `ready: true/false`. A slot with `ready: false` stays
// empty, so the page never points at a missing file.
//
// The five images currently sit in the repo root and are imported below,
// which lets Vite bundle and fingerprint them. When they move into
// public/images/, switch these imports to plain paths such as
// '/images/ombre-vision-web.webp'.
//
// `ratio` reserves each slot's shape (width / height) so the page never
// jumps when an image arrives. `srcMobile` and `ratioMobile` are used on
// phones (narrower than 48rem).

import visionWeb from '../ombre-vision-web.webp'
import visionMobile from '../ombre-vision-mobile.webp'
import handoffWeb from '../ombre-handoff-web.webp'
import ctaWeb from '../ombre-cta-web.webp'
import ctaMobile from '../ombre-cta-mobile.webp'

export const assets = {
  // 1. Hero video (20s, plays once, holds on the logo end frame).
  // Not uploaded yet: the hero stays an empty black slot.
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
    ready: true,
    src: visionWeb,
    srcMobile: visionMobile,
    alt: 'A laptop on a dark desk showing the Ombre Mentors screen, with a lamp, notebook and coffee beside it.',
    ratio: '2560 / 1430',
    ratioMobile: '1400 / 1601',
  },

  // 4. Mentor Handoff image. The line "Your work keeps moving. So does your
  // context." is already in the image, so the page text hides itself
  // visually once this image is on. No mobile version yet.
  handoff: {
    ready: true,
    src: handoffWeb,
    alt: 'A project continuing from the Startup Validator Mentor to the Business Model Mentor, with the same context carried forward. Your work keeps moving. So does your context.',
    ratio: '2560 / 1440',
  },

  // 6. Final CTA image (no baked-in text). The engraved "Explore Ombre"
  // link is live HTML placed on the wall (see final-cta.css).
  finalCta: {
    ready: true,
    src: ctaWeb,
    srcMobile: ctaMobile,
    alt: '',
    ratio: '2560 / 1085',
    ratioMobile: '1388 / 1736',
  },
}
