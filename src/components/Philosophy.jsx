import Reveal from './Reveal.jsx'
import '../styles/philosophy.css'

// Typography only: no images, spacious and quiet.
export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="section section--ivory blend-top blend-from-charcoal-soft philosophy"
      aria-labelledby="philosophy-heading"
    >
      <div className="philosophy__inner">
        <Reveal
          as="h2"
          id="philosophy-heading"
          className="philosophy__headline"
        >
          Work doesn’t move in straight lines.
        </Reveal>

        <div className="philosophy__body">
          <Reveal as="p" delay={150} className="philosophy__line">
            <span className="philosophy__row">Ideas evolve. Questions change.</span>
            <span className="philosophy__row">
              New problems open new possibilities.
            </span>
          </Reveal>

          <Reveal as="p" delay={300} className="philosophy__line">
            <span className="philosophy__row">
              Sometimes you need to think broadly.
            </span>
            <span className="philosophy__row">
              Sometimes you need to go deep.
            </span>
          </Reveal>
        </div>

        <span className="philosophy__rule" aria-hidden="true" />

        <Reveal as="p" delay={450} className="philosophy__closing">
          Ombre moves with you.
        </Reveal>
      </div>
    </section>
  )
}
