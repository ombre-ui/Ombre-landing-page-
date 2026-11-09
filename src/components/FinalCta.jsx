import Reveal from './Reveal.jsx'
import { assets } from '../assets.js'
import { SIGNUP_URL } from '../config.js'
import '../styles/final-cta.css'

// Final CTA: a cinematic image with live, clickable text "engraved" on the
// wall. The text is HTML (not part of the image), placed by percentages so
// it stays on the wall at every screen size.
export default function FinalCta() {
  const { finalCta } = assets

  return (
    <section
      id="final-cta"
      className="final-cta"
      aria-label="Explore Ombre"
      style={{
        '--ratio': finalCta.ratio,
        '--ratio-mobile': finalCta.ratioMobile || finalCta.ratio,
      }}
    >
      {finalCta.ready && (
        <picture className="final-cta__media">
          {finalCta.srcMobile && (
            <source media="(max-width: 47.99rem)" srcSet={finalCta.srcMobile} />
          )}
          <img
            className="final-cta__img"
            src={finalCta.src}
            alt={finalCta.alt}
            loading="lazy"
            decoding="async"
          />
        </picture>
      )}

      <div className="final-cta__content">
        <Reveal delay={200}>
          <a className="final-cta__link" href={SIGNUP_URL}>
            Explore Ombre
          </a>
        </Reveal>
        <Reveal as="p" delay={450} className="final-cta__tagline">
          An AI workspace that works with you.
        </Reveal>
      </div>
    </section>
  )
}
