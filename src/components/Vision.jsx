import Reveal from './Reveal.jsx'
import Headline from './Headline.jsx'
import { assets } from '../assets.js'
import '../styles/vision.css'

export default function Vision() {
  const { vision } = assets

  // A blurred copy of the picture behind it, for the soft ambient glow.
  const glow = vision.ready
    ? { '--glow-image': `url("${vision.src}")` }
    : undefined

  return (
    <section
      id="vision"
      className="section section--ivory blend-top blend-from-charcoal vision"
    >
      <div className="vision__text">
        <Headline
          as="h2"
          className="vision__headline"
          segments={[
            'AI should understand the work,',
            { text: 'not just the prompt.', em: true },
          ]}
        />
        <Reveal as="p" delay={450} className="vision__support">
          Ombre brings intelligence, expertise, and context together, so you can
          keep moving without starting over.
        </Reveal>
      </div>

      {/* Image slot: empty until the asset is uploaded and marked ready */}
      <Reveal className="vision__media" style={glow}>
        <div
          className="vision__frame"
          style={{
            '--ratio': vision.ratio,
            '--ratio-mobile': vision.ratioMobile || vision.ratio,
          }}
        >
          {vision.ready && (
            <picture>
              {vision.srcMobile && (
                <source media="(max-width: 47.99rem)" srcSet={vision.srcMobile} />
              )}
              <img
                className="vision__img"
                src={vision.src}
                alt={vision.alt}
                loading="lazy"
                decoding="async"
              />
            </picture>
          )}
        </div>
      </Reveal>
    </section>
  )
}
