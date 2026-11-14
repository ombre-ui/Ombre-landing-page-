import Reveal from './Reveal.jsx'
import Headline from './Headline.jsx'
import ExploreLink from './ExploreLink.jsx'
import '../styles/closing.css'

export default function Closing() {
  return (
    <section id="closing" className="section section--ivory closing">
      <Headline
        as="h2"
        className="closing__statement"
        segments={[
          { text: 'Your work is bigger than a single conversation.', block: true },
          { text: 'Ombre is built to work with it.', em: true, block: true },
        ]}
      />

      <Reveal delay={500} className="closing__cta">
        <ExploreLink tone="light" />
      </Reveal>
    </section>
  )
}
