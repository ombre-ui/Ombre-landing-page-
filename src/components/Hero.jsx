import { useCallback, useEffect, useRef, useState } from 'react'
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

// m:ss, for the time readout
function formatTime(seconds) {
  const s = Number.isFinite(seconds) && seconds > 0 ? seconds : 0
  const m = Math.floor(s / 60)
  const rest = Math.floor(s % 60)
  return `${m}:${String(rest).padStart(2, '0')}`
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
    case 'fullscreen':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
        </svg>
      )
    case 'exit-fullscreen':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" />
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
  const idleTimerRef = useRef(null)
  const pointerTypeRef = useRef('mouse')

  const [playing, setPlaying] = useState(false)
  const [stopped, setStopped] = useState(false) // paused, ended or blocked
  const [ended, setEnded] = useState(false)
  const [muted, setMuted] = useState(true)
  const [volume, setVolume] = useState(1)
  const [time, setTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [uiVisible, setUiVisible] = useState(true)
  const [fullscreen, setFullscreen] = useState(false)
  const [canFullscreen, setCanFullscreen] = useState(false)

  // Phones use the 4:5 file if there is one; otherwise the desktop MP4.
  const mobileSrc = hero.mobileMp4 || hero.desktopMp4

  // With no phone-shaped video, show the 16:9 video as a band rather than
  // cropping most of it away.
  const band = portrait && !hero.mobileMp4

  const videoKey = portrait && hero.mobileMp4 ? 'mobile' : 'desktop'

  // Controls fade away a moment after the video starts playing, and come
  // back on any movement, tap or keyboard focus. While paused they stay.
  const showUi = useCallback(() => {
    setUiVisible(true)
    clearTimeout(idleTimerRef.current)
    idleTimerRef.current = setTimeout(() => setUiVisible(false), 2600)
  }, [])

  useEffect(() => {
    if (playing) {
      showUi()
    } else {
      clearTimeout(idleTimerRef.current)
      setUiVisible(true)
    }
    return () => clearTimeout(idleTimerRef.current)
  }, [playing, showUi])

  const controlsShown = uiVisible || !playing

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
      setStopped(true)
      whenReady(parkOnFrame)
      return
    }

    const attempt = video.play()
    if (attempt && attempt.catch) {
      attempt.catch(() => {
        setStopped(true)
        whenReady(parkOnFrame)
      })
    }
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

  // Fullscreen: show the button only where the browser supports it.
  useEffect(() => {
    const video = videoRef.current
    setCanFullscreen(
      Boolean(
        document.fullscreenEnabled ||
          document.webkitFullscreenEnabled ||
          (video && video.webkitEnterFullscreen)
      )
    )
    const onChange = () =>
      setFullscreen(
        Boolean(document.fullscreenElement || document.webkitFullscreenElement)
      )
    document.addEventListener('fullscreenchange', onChange)
    document.addEventListener('webkitfullscreenchange', onChange)
    return () => {
      document.removeEventListener('fullscreenchange', onChange)
      document.removeEventListener('webkitfullscreenchange', onChange)
    }
  }, [hero.ready, videoKey])

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

  const onVolumeInput = (event) => {
    const video = videoRef.current
    if (!video) return
    const next = Number(event.target.value)
    video.volume = next
    video.muted = next === 0
  }

  const onSeek = (event) => {
    const video = videoRef.current
    if (!video) return
    const next = Number(event.target.value)
    video.currentTime = next
    setTime(next)
    setEnded(false)
  }

  const toggleFullscreen = () => {
    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      if (document.exitFullscreen) document.exitFullscreen()
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen()
      return
    }
    // Fullscreen the whole hero so the controls come along. iPhones can only
    // fullscreen the video itself.
    if (section.requestFullscreen) section.requestFullscreen().catch(() => {})
    else if (section.webkitRequestFullscreen) section.webkitRequestFullscreen()
    else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen()
  }

  // Clicking or tapping the picture plays or pauses, like a normal video
  // player. On touch screens, the first tap only brings the controls back.
  const onSurfaceClick = () => {
    if (pointerTypeRef.current !== 'mouse' && !controlsShown) {
      showUi()
      return
    }
    togglePlay()
    showUi()
  }

  const syncVolume = (event) => {
    setMuted(event.currentTarget.muted)
    setVolume(event.currentTarget.volume)
  }

  const progress = duration ? Math.min(time / duration, 1) : 0
  const shownVolume = muted ? 0 : volume
  const playLabel = ended ? 'Replay video' : playing ? 'Pause video' : 'Play video'
  const playIcon = ended ? 'replay' : playing ? 'pause' : 'play'

  const classes = [
    'section',
    'hero',
    band ? 'hero--band' : '',
    controlsShown ? 'hero--ui' : '',
    playing && !controlsShown ? 'hero--idle' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section
      id="hero"
      ref={sectionRef}
      className={classes}
      aria-label="Ombre"
      onPointerMove={showUi}
      onPointerDown={(event) => {
        pointerTypeRef.current = event.pointerType
      }}
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
              setStopped(false)
              setEnded(false)
            }}
            onPause={() => {
              setPlaying(false)
              setStopped(true)
            }}
            onEnded={() => {
              setPlaying(false)
              setEnded(true)
              setStopped(true)
            }}
            onTimeUpdate={(event) => setTime(event.currentTarget.currentTime)}
            onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
            onDurationChange={(event) => setDuration(event.currentTarget.duration)}
            onVolumeChange={syncVolume}
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

      {hero.ready && (
        <>
          {/* Click or tap anywhere on the picture to play or pause. */}
          <div
            className="hero__surface"
            onClick={onSurfaceClick}
            aria-hidden="true"
          />

          {/* Large play button when the video is paused, ended or blocked. */}
          {stopped && !playing && (
            <button
              type="button"
              className="hero__center liquid-glass"
              onClick={togglePlay}
              aria-label={playLabel}
            >
              <Icon name={playIcon} />
            </button>
          )}

          <div
            className="hero__ui"
            role="group"
            aria-label="Video controls"
          >
            <div className="hero__progress" style={{ '--p': progress }}>
              <span className="hero__track" aria-hidden="true" />
              <span className="hero__played" aria-hidden="true" />
              <input
                type="range"
                className="hero__seek"
                min="0"
                max={duration || 0}
                step="0.05"
                value={Math.min(time, duration || 0)}
                onChange={onSeek}
                disabled={!duration}
                aria-label="Seek"
                aria-valuetext={`${formatTime(time)} of ${formatTime(duration)}`}
              />
            </div>

            <div className="hero__row">
              <button
                type="button"
                className="hero__btn"
                onClick={togglePlay}
                aria-label={playLabel}
              >
                <Icon name={playIcon} />
              </button>

              <div className="hero__volume-group">
                <button
                  type="button"
                  className="hero__btn"
                  onClick={toggleMute}
                  aria-label={muted ? 'Turn sound on' : 'Mute'}
                  aria-pressed={!muted}
                >
                  <Icon name={muted ? 'muted' : 'volume'} />
                </button>
                <input
                  type="range"
                  className="hero__volume"
                  min="0"
                  max="1"
                  step="0.05"
                  value={shownVolume}
                  onChange={onVolumeInput}
                  aria-label="Volume"
                  aria-valuetext={`${Math.round(shownVolume * 100)} percent`}
                />
              </div>

              <span className="hero__time">
                {formatTime(time)} / {formatTime(duration)}
              </span>

              <span className="hero__spacer" />

              {canFullscreen && (
                <button
                  type="button"
                  className="hero__btn"
                  onClick={toggleFullscreen}
                  aria-label={fullscreen ? 'Exit full screen' : 'Full screen'}
                >
                  <Icon name={fullscreen ? 'exit-fullscreen' : 'fullscreen'} />
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  )
}
