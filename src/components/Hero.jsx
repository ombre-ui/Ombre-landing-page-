import { useEffect, useRef, useState } from 'react'
import { assets } from '../assets.js'
import '../styles/glass.css'
import '../styles/hero.css'

function useMediaQuery(query) {
  const get = () =>
    typeof window !== 'undefined' && window.matchMedia(query).matches
  const [matches, setMatches] = useState(get)

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setMatches(mql.matches)
    onChange()
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])

  return matches
}

// Small line icons, drawn inline so nothing extra has to load.
function Icon({ name }) {
  switch (name) {
    case 'play':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path className="fill" d="M8 5v14l11-7z" />
        </svg>
      )
    case 'pause':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path className="fill" d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" />
        </svg>
      )
    case 'replay':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 4v6h6" />
          <path d="M3.5 14a8.5 8.5 0 1 0 2-8.9L3 10" />
        </svg>
      )
    case 'volume':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M11 5 6 9H3v6h3l5 4z" />
          <path d="M15.5 8.5a5 5 0 0 1 0 7" />
          <path d="M18.5 5.5a9 9 0 0 1 0 13" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M11 5 6 9H3v6h3l5 4z" />
          <path d="m16 9.5 5 5M21 9.5l-5 5" />
        </svg>
      )
  }
}

export default function Hero() {
  const { hero } = assets
  const portrait = useMediaQuery('(max-aspect-ratio: 1/1)')
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const autoPausedRef = useRef(false)

  const [playing, setPlaying] = useState(false)
  const [ended, setEnded] = useState(false)
  const [muted, setMuted] = useState(true)

  // Phones use the 4:5 file if there is one; otherwise the desktop MP4.
  const mobileSrc = hero.mobileMp4 || hero.desktopMp4

  // With no phone-shaped video, show the 16:9 video as a band rather than
  // cropping most of it away.
  const band = portrait && !hero.mobileMp4

  const videoKey = portrait && hero.mobileMp4 ? 'mobile' : 'desktop'

  // Start playing as soon as the page loads. Browsers only allow autoplay
  // when the video is muted, so it starts muted; one tap on the sound
  // button turns the audio on. With reduced motion, or if the browser
  // blocks autoplay, the video waits (on the poster, or on a still frame).
  useEffect(() => {
    if (!hero.ready) return
    const video = videoRef.current
    if (!video) return

    video.muted = true

    const parkOnFrame = () => {
      if (!hero.poster && video.currentTime === 0) {
        video.currentTime = hero.holdFrameAt ?? 3
      }
    }
    const whenReady = (fn) => {
      if (video.readyState >= 1) fn()
      else video.addEventListener('loadedmetadata', fn, { once: true })
    }

    if (reducedMotion) {
      video.pause()
      whenReady(parkOnFrame)
      return
    }

    const attempt = video.play()
    if (attempt && attempt.catch) attempt.catch(() => whenReady(parkOnFrame))
  }, [hero.ready, videoKey, reducedMotion, hero.poster, hero.holdFrameAt])

  // Pause when the hero scrolls out of view, so sound never plays unseen;
  // resume when it comes back (only if scrolling was what paused it).
  useEffect(() => {
    const el = sectionRef.current
    if (!el || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current
        if (!video) return
        if (!entry.isIntersecting) {
          if (!video.paused && !video.ended) {
            video.pause()
            autoPausedRef.current = true
          }
        } else if (autoPausedRef.current) {
          autoPausedRef.current = false
          video.play().catch(() => {})
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    autoPausedRef.current = false
    if (video.ended) video.currentTime = 0
    if (video.paused || video.ended) video.play().catch(() => {})
    else video.pause()
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    if (video.muted && video.volume === 0) video.volume = 0.7
    video.muted = !video.muted
  }

  const playLabel = ended ? 'Replay video' : playing ? 'Stop video' : 'Play video'
  const playIcon = ended ? 'replay' : playing ? 'pause' : 'play'

  return (
    <section
      id="hero"
      ref={sectionRef}
      className={`section hero${band ? ' hero--band' : ''}`}
      aria-label="Ombre"
    >
      <h1 className="sr-only">Ombre. An AI workspace that works with you.</h1>

      <div className="hero__media">
        {hero.ready && (
          // Plays once (no loop) and holds on the final logo frame.
          <video
            key={videoKey}
            ref={videoRef}
            className="hero__video"
            poster={hero.poster || undefined}
            autoPlay={!reducedMotion}
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            aria-hidden="true"
            onPlay={() => {
              setPlaying(true)
              setEnded(false)
            }}
            onPause={() => setPlaying(false)}
            onEnded={() => {
              setPlaying(false)
              setEnded(true)
            }}
            onVolumeChange={(event) => setMuted(event.currentTarget.muted)}
          >
            {portrait ? (
              mobileSrc && <source src={mobileSrc} type="video/mp4" />
            ) : (
              <>
                {hero.desktopWebm && (
                  <source src={hero.desktopWebm} type="video/webm" />
                )}
                {hero.desktopMp4 && (
                  <source src={hero.desktopMp4} type="video/mp4" />
                )}
              </>
            )}
          </video>
        )}
      </div>

      <div className="hero__fade" aria-hidden="true" />

      {/* Two small buttons, always in place: stop/play in the bottom left
          corner, sound on/off in the bottom right corner. */}
      {hero.ready && (
        <>
          <button
            type="button"
            className="hero__corner hero__corner--left liquid-glass"
            onClick={togglePlay}
            aria-label={playLabel}
          >
            <Icon name={playIcon} />
          </button>

          <button
            type="button"
            className="hero__corner hero__corner--right liquid-glass"
            onClick={toggleMute}
            aria-label={muted ? 'Turn sound on' : 'Mute'}
            aria-pressed={!muted}
          >
            <Icon name={muted ? 'muted' : 'volume'} />
          </button>
        </>
      )}
    </section>
  )
}
