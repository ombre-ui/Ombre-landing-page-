import Reveal from './Reveal.jsx'
import { assets } from '../assets.js'
import '../styles/handoff.css'

export default function Handoff() {
  const { handoff } = assets

  return (
    <section
      id="handoff"
      className="section section--charcoal-soft blend-top blend-from-charcoal handoff"
      aria-labelledby="handoff-heading"
    >
      <div className="handoff__inner">
        <Reveal as="h2" id="handoff-heading" className="handoff__headline">
          Different Mentor. Same project. No starting over.
        </Reveal>

        {/* Image slot: empty until the asset is uploaded and marked ready */}
        <Reveal className="handoff__media">
          <div className="handoff__frame" style={{ aspectRatio: handoff.ratio }}>
            {handoff.ready && handoff.src && (
              <img
                className="handoff__img"
                src={handoff.src}
                alt={handoff.alt}
                loading="lazy"
                decoding="async"
              />
            )}
          </div>
        </Reveal>

        <Reveal as="p" className="handoff__caption">
          Startup Validator <span aria-hidden="true">→</span> Business Model
          Mentor
        </Reveal>

        <Reveal as="p" delay={150} className="handoff__line">
          Your work keeps moving. So does your context.
        </Reveal>
      </div>
    </section>
  )
}
