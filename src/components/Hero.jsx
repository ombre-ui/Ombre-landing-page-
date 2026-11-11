import { useEffect, useRef, useState } from 'react'
import { assets } from '../assets.js'
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

export default function Hero() {
  const { hero } = assets
  const portrait = useMediaQuery('(max-aspect-ratio: 1/1)')
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const videoRef = useRef(null)
  const [fallback, setFallback] = useState(false)

  // Phones use the 4:5 file if there is one; otherwise the desktop MP4.
  const mobileSrc = hero.mobileMp4 || hero.desktopMp4

  // When there is no phone-shaped video, show the 16:9 video as a band
  // rather than cropping most of it away.
  const band = portrait && !hero.mobileMp4

  // Hold a still frame instead of playing: for reduced motion, blocked
  // autoplay, or a file that fails to load.
  const holdFrame = reducedMotion || fallback
  const showStill = hero.ready && Boolean(hero.poster) && holdFrame
  const showVideo = hero.ready && !showStill

  useEffect(() => {
    if (!showVideo) return
    const video = videoRef.current
    if (!video) return
    video.muted = true

    if (holdFrame) {
      // No poster file: park the video on a good frame instead of playing.
      const park = () => {
        video.currentTime = hero.holdFrameAt ?? 3
        video.pause()
      }
      if (video.readyState >= 1) park()
      else video.addEventListener('loadedmetadata', park, { once: true })
      return
    }

    const attempt = video.play()
    if (attempt && attempt.catch) attempt.catch(() => setFallback(true))
  }, [showVideo, holdFrame, portrait, hero.holdFrameAt])

  const onSourceError = () => setFallback(true)

  return (
    <section
      id="hero"
      className={`section hero${band ? ' hero--band' : ''}`}
      aria-label="Ombre"
    >
      <h1 className="sr-only">Ombre. An AI workspace that works with you.</h1>

      <div className="hero__media" aria-hidden="true">
        {showVideo && (
          // Plays once (no loop) and holds on the final logo frame.
          <video
            key={portrait ? 'mobile' : 'desktop'}
            ref={videoRef}
            className="hero__video"
            autoPlay={!reducedMotion}
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
          >
            {portrait ? (
              mobileSrc && (
                <source src={mobileSrc} type="video/mp4" onError={onSourceError} />
              )
            ) : (
              <>
                {hero.desktopWebm && (
                  <source
                    src={hero.desktopWebm}
                    type="video/webm"
                    onError={hero.desktopMp4 ? undefined : onSourceError}
                  />
                )}
                {hero.desktopMp4 && (
                  <source
                    src={hero.desktopMp4}
                    type="video/mp4"
                    onError={onSourceError}
                  />
                )}
              </>
            )}
          </video>
        )}

        {showStill && <img className="hero__still" src={hero.poster} alt="" />}
      </div>

      <div className="hero__fade" aria-hidden="true" />
    </section>
  )
}
