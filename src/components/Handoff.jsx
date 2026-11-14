import Reveal from './Reveal.jsx'
import Headline from './Headline.jsx'
import { assets } from '../assets.js'
import '../styles/handoff.css'

export default function Handoff() {
  const { handoff } = assets

  // A blurred copy of the picture behind it, for the soft ambient glow.
  const glow = handoff.ready
    ? { '--glow-image': `url("${handoff.src}")` }
    : undefined

  return (
    <section
      id="handoff"
      className="section section--charcoal-soft blend-top blend-from-charcoal handoff"
      aria-labelledby="handoff-heading"
    >
      <div className="handoff__inner">
        <Headline
          as="h2"
          id="handoff-heading"
          className="handoff__headline"
          segments={['Different Mentor. Same project. No starting over.']}
        />

        {/* Image slot: empty until the asset is uploaded and marked ready */}
        <Reveal className="handoff__media" style={glow}>
          <div className="handoff__frame" style={{ aspectRatio: handoff.ratio }}>
            {handoff.ready && handoff.src && (
              <div className="handoff__parallax">
                <img
                  className="handoff__img"
                  src={handoff.src}
                  alt={handoff.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
          </div>
        </Reveal>

        <Reveal as="p" className="handoff__caption">
          Startup Validator <span aria-hidden="true">→</span> Business Model
          Mentor
        </Reveal>

        {/* The same line is baked into the image. Once the image is on, this
            text is hidden visually (but kept for screen readers and search). */}
        <Reveal
          as="p"
          delay={150}
          className={handoff.ready ? 'sr-only' : 'handoff__line'}
        >
          Your work keeps moving. So does your context.
        </Reveal>
      </div>
    </section>
  )
}
