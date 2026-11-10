// Page structure: section order and background rhythm are locked.

import './styles/utilities.css'
import Hero from './components/Hero.jsx'
import ExploreLink from './components/ExploreLink.jsx'
import Reveal from './components/Reveal.jsx'
import Vision from './components/Vision.jsx'
import Benefits from './components/Benefits.jsx'
import Closing from './components/Closing.jsx'
import Workspace from './components/Workspace.jsx'
import Handoff from './components/Handoff.jsx'
import Philosophy from './components/Philosophy.jsx'
import FinalCta from './components/FinalCta.jsx'
import Faq from './components/Faq.jsx'
import Footer from './components/Footer.jsx'

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
      <Workspace />

      {/* 4. Mentor Handoff (soft charcoal) */}
      <Handoff />

      {/* 5. Philosophy: typography only (ivory) */}
      <Philosophy />

      {/* 6. Final CTA: cinematic image with the engraved "Explore Ombre" */}
      <FinalCta />

      {/* 7. FAQ */}
      <Faq />

      {/* 8. Footer: liquid glass panel */}
      <Footer />
    </main>
  )
}
