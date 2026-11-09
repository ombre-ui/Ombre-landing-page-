import { SIGNUP_URL } from '../config.js'
import '../styles/explore.css'

// "Explore Ombre →" always links to the sign-up page.
// tone="light" is for ivory sections, where champagne would be too faint.
export default function ExploreLink({ tone = 'dark' }) {
  const className =
    tone === 'light'
      ? 'explore-link explore-link--on-light'
      : 'explore-link'

  return (
    <a className={className} href={SIGNUP_URL}>
      <span className="explore-link__label">Explore Ombre</span>
      <span className="explore-link__arrow" aria-hidden="true">
        →
      </span>
    </a>
  )
}
