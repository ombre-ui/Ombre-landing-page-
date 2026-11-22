import { motion, useReducedMotion } from 'motion/react'
import bgWeb from '../../ombre-cta-web.webp'
import bgMobile from '../../ombre-cta-mobile.webp'
import '../styles/servererror.css'

// Soft ease and distances that match the rest of the site's slow reveals.
const EASE = [0.22, 0.61, 0.36, 1]
const RISE = 14 // px

// `onRetry` is optional. By default "Try Again" reloads the current page,
// which is what you want when this is shown in place of a page that broke.
export default function ServerError({ onRetry }) {
  const reduce = useReducedMotion()
  const retry = onRetry ?? (() => window.location.reload())

  // With reduced motion these return nothing, so everything simply appears.
  const rise = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: RISE },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, ease: EASE, delay },
        }

  return (
    <div className="servererror">
      {/* Atmosphere only: the existing "final CTA" image (no text in it),
          fading in and drifting a few pixels very slowly. Decorative. */}
      <motion.div
        className="servererror__bg"
        aria-hidden="true"
        {...(reduce
          ? {}
          : {
              initial: { opacity: 0, y: -16 },
              animate: { opacity: 1, y: 16 },
              transition: {
                opacity: { duration: 1.6, ease: EASE },
                y: {
                  duration: 24,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'reverse',
                },
              },
            })}
      >
        <picture>
          <source media="(max-width: 48rem)" srcSet={bgMobile} />
          <img
            className="servererror__img"
            src={bgWeb}
            alt=""
            decoding="async"
          />
        </picture>
      </motion.div>
      <div className="servererror__veil" aria-hidden="true" />

      <header className="servererror__header">
        <a className="servererror__wordmark" href="/">
          ombre
        </a>
      </header>

      <main className="servererror__main">
        <motion.h1 className="servererror__code" {...rise(0)}>
          500
        </motion.h1>
        <motion.div
          className="servererror__rule"
          aria-hidden="true"
          {...rise(0.12)}
        />
        <motion.h2 className="servererror__title" {...rise(0.24)}>
          Something went wrong.
        </motion.h2>
        <motion.p className="servererror__sub" {...rise(0.36)}>
          Ombre couldn’t complete that request.
        </motion.p>
        <motion.div className="servererror__actions" {...rise(0.5)}>
          <button
            type="button"
            className="servererror__btn servererror__btn--primary"
            onClick={retry}
          >
            Try Again <span aria-hidden="true">→</span>
          </button>
          <a className="servererror__btn servererror__btn--ghost" href="/">
            Back to Ombre <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </main>
    </div>
  )
}
