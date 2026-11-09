// Page structure: section order and background rhythm are locked.
// Content is added section by section; empty sections are placeholders.

import './styles/utilities.css'
import Hero from './components/Hero.jsx'
import ExploreLink from './components/ExploreLink.jsx'
import Reveal from './components/Reveal.jsx'
import Vision from './components/Vision.jsx'
import Benefits from './components/Benefits.jsx'
import Closing from './components/Closing.jsx'

const placeholder = (minHeight) => ({ minHeight })

export default function App() {
  return (
    <main>
      {/* 1. Hero: video only, no nav, no overlay text */}
      <Hero />

      {/* 1b. Slim text link under the hero */}
      <section id="explore" className="section section--charcoal explore">
        <Reveal>
          <ExploreLink />
        </Reveal>
      </section>

      {/* 2. Vision, Benefits, Closing statement (ivory) */}
      <Vision />
      <Benefits />
      <Closing />

      {/* 3. Workspace: typography only (charcoal) */}
      <section
        id="workspace"
        className="section section--charcoal"
        style={placeholder('80svh')}
      />

      {/* 4. Mentor Handoff (soft charcoal) */}
      <section
        id="handoff"
        className="section section--charcoal-soft"
        style={placeholder('80svh')}
      />

      {/* 5. Philosophy: typography only (ivory) */}
      <section
        id="philosophy"
        className="section section--ivory"
        style={placeholder('70svh')}
      />

      {/* 6. Final CTA: cinematic image with live "Explore Ombre" text */}
      <section
        id="final-cta"
        className="section section--charcoal"
        style={placeholder('100svh')}
      />

      {/* 7. Testimonials: omitted until real ones exist */}
      {/* 8. FAQ: decided later */}

      {/* 9. Footer */}
      <footer
        id="footer"
        className="section section--charcoal"
        style={placeholder('30svh')}
      />
    </main>
  )
}
