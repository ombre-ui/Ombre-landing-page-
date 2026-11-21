import { useEffect, useState } from 'react'
import '../styles/notfound.css'

// Self-hosted background loop. The file is "Custom 404.mp4" in the repo root;
// the rootFiles plugin in vite.config.js publishes it at this address.
const VIDEO_SRC = '/ombre-404.mp4'

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)'

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia(REDUCED_MOTION).matches
  )

  useEffect(() => {
    const query = window.matchMedia(REDUCED_MOTION)
    const onChange = () => setReduced(query.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return reduced
}

export default function NotFound() {
  const reduced = usePrefersReducedMotion()
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    document.title = 'Page not found | Ombre'
  }, [])

  return (
    <div className="notfound">
      {/* Reduced motion: no video at all, just the calm base colour.
          The video fades in only once it is really playing, so if the browser
          blocks autoplay the page simply stays on the base colour. */}
      {!reduced && (
        <video
          className={`notfound__video${playing ? ' is-playing' : ''}`}
          src={VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          onPlaying={() => setPlaying(true)}
        />
      )}

      <header className="notfound__header">
        <a className="notfound__wordmark" href="/">
          ombre
        </a>
      </header>

      <main className="notfound__main">
        <h1 className="notfound__code">404</h1>
        <div className="notfound__rule" aria-hidden="true" />
        <p className="notfound__lead">This page doesn’t exist.</p>
        <p className="notfound__sub">
          But your work doesn’t have to stop here.
        </p>
        <a className="notfound__link" href="/">
          Back to Ombre <span aria-hidden="true">→</span>
        </a>
      </main>
    </div>
  )
}
