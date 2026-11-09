import { SIGNUP_URL } from '../config.js'
import '../styles/explore.css'

// "Explore Ombre →" always links to the sign-up page.
export default function ExploreLink() {
  return (
    <a className="explore-link" href={SIGNUP_URL}>
      <span className="explore-link__label">Explore Ombre</span>
      <span className="explore-link__arrow" aria-hidden="true">
        →
      </span>
    </a>
  )
}
