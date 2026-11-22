import { useEffect, useRef, useState } from 'react'
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
  const videoRef = useRef(null)

  useEffect(() => {
    document.title = 'Page not found | Ombre'
  }, [])

  // Older phones decide whether a video may autoplay from the real `muted`
  // HTML attribute, which React does not write (it only sets the property).
  // So write the attribute ourselves, then ask the browser to play. If it
  // refuses, nothing breaks: the video stays hidden and the page simply shows
  // its calm base colour.
  useEffect(() => {
    const video = videoRef.current
    if (!video) {
      setPlaying(false)
      return
    }

    video.defaultMuted = true
    video.setAttribute('muted', '')
    video.muted = true

    // Already running (the 'playing' event may have fired before this ran).
    if (!video.paused && video.readyState >= 3) setPlaying(true)

    // Older browsers return nothing here instead of a promise.
    const attempt = video.play()
    if (attempt !== undefined && typeof attempt.catch === 'function') {
      attempt.catch(() => {})
    }
  }, [reduced])

  return (
    <div className="notfound">
      {/* Reduced motion: no video at all, just the calm base colour.
          The video fades in only once it is really playing, so if the browser
          blocks autoplay the page simply stays on the base colour. */}
      {!reduced && (
        <video
          ref={videoRef}
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
