import Reveal from './Reveal.jsx'
import ExploreLink from './ExploreLink.jsx'
import '../styles/closing.css'

export default function Closing() {
  return (
    <section id="closing" className="section section--ivory closing">
      <Reveal>
        <p className="closing__statement">
          <span className="closing__line">
            Your work is bigger than a single conversation.
          </span>
          <span className="closing__line closing__line--italic">
            Ombre is built to work with it.
          </span>
        </p>
      </Reveal>

      <Reveal delay={200} className="closing__cta">
        <ExploreLink tone="light" />
      </Reveal>
    </section>
  )
}
