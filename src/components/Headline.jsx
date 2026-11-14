import { useEffect, useRef, useState } from 'react'
import '../styles/headline.css'

// A headline whose words rise into place, one after another, the first time
// it scrolls into view.
//
// `segments` is a list of:
//   'plain text'                       normal words
//   { text, em: true }                 italic accent words
//   { text, em: true, block: true }    the same, on a line of its own
//
// The words are real text, so screen readers and search engines read the
// headline normally.
export default function Headline({
  as: Tag = 'h2',
  segments,
  className = '',
  ...rest
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // No observer support: just show the headline.
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -6% 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Each word gets its own number, which sets how long it waits to rise.
  let index = 0
  const renderWords = (text, keyPrefix) => {
    const words = text.split(' ').filter(Boolean)
    return words.flatMap((word, i) => {
      const element = (
        <span key={`${keyPrefix}-${i}`} className="headline__mask">
          <span className="headline__word" style={{ '--i': index++ }}>
            {word}
          </span>
        </span>
      )
      return i < words.length - 1 ? [element, ' '] : [element]
    })
  }

  const nodes = segments.map((segment, si) => {
    const { text, em = false, block = false } =
      typeof segment === 'string' ? { text: segment } : segment

    let content = renderWords(text, si)
    if (em) content = <em className="headline__em">{content}</em>

    if (block) {
      return (
        <span key={si} className="headline__line">
          {content}
        </span>
      )
    }
    return (
      <span key={si}>
        {content}
        {si < segments.length - 1 ? ' ' : null}
      </span>
    )
  })

  return (
    <Tag
      ref={ref}
      className={`headline${visible ? ' is-visible' : ''} ${className}`.trim()}
      {...rest}
    >
      {nodes}
    </Tag>
  )
}
