// Asset manifest: the single place that says which media files exist.
//
// Each asset has `ready: true/false`. A slot with `ready: false` stays
// empty, so the page never points at a missing file.
//
// The images and the hero video currently sit in the repo root and are
// imported below, which lets Vite bundle and fingerprint them. When files
// move into public/, switch these imports to plain paths such as
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
import heroVideo from '../ombre_hero_v9_1080p_with_audio (1) (1).mp4'

export const assets = {
  // 1. Hero video (20s, plays once, holds on the logo end frame).
  // Only one file is uploaded so far (the 1080p MP4). It plays muted, so its
  // audio track is never heard. Any file left as null is simply skipped:
  //   desktopWebm  smaller file for Chrome and Firefox (optional)
  //   mobileMp4    4:5 version for phones (optional; without it, phones see
  //                the 16:9 video as a band instead of a cropped screen)
  //   poster       a still image for reduced motion (optional; without it,
  //                the video parks on the frame at `holdFrameAt` seconds)
  hero: {
    ready: true,
    desktopWebm: null,
    desktopMp4: heroVideo,
    mobileMp4: null,
    poster: null,
    holdFrameAt: 3,
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
