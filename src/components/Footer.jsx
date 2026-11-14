import Reveal from './Reveal.jsx'
import { assets } from '../assets.js'
import { SIGNUP_URL, SIGNIN_URL, CONTACT_EMAIL } from '../config.js'
import '../styles/glass.css'
import '../styles/footer.css'
import '../styles/footer-logo.css'

// Only links that go somewhere real are listed. Mentors and Projects have
// no pages of their own.
const groups = [
  {
    title: 'Product',
    links: [
      { label: 'How it works', href: '#workspace' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Account',
    links: [
      { label: 'Sign in', href: SIGNIN_URL },
      { label: 'Get started', href: SIGNUP_URL },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
  {
    title: 'Contact',
    links: [{ label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` }],
  },
]

export default function Footer() {
  const { finalCta, logo } = assets

  // The glow behind the glass reuses the final CTA image (lamp area).
  const style = finalCta.ready
    ? { '--glow-image': `url("${finalCta.src}")` }
    : undefined

  return (
    <footer id="footer" className="footer" style={style}>
      <div className="footer__bg" aria-hidden="true" />

      <Reveal className="footer__panel liquid-glass">
        <div className="footer__grid">
          <div className="footer__brand">
            {/* The small ring (transparent background) with the word "ombre"
                as live text beside it. Links back to the top. */}
            <a
              className="footer__wordmark"
              href="#hero"
              aria-label="Ombre, back to top"
            >
              {logo.ready && (
                <img
                  className="footer__logo"
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  decoding="async"
                />
              )}
              <span className="footer__wordmark-text">ombre</span>
            </a>
            <p className="footer__tagline">An AI workspace that works with you.</p>
          </div>

          <nav className="footer__links" aria-label="Footer">
            {groups.map((group) => (
              <div key={group.title}>
                <h2 className="footer__heading">{group.title}</h2>
                <ul className="footer__list">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a className="footer__link" href={link.href}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer__bar">
          <p>© {new Date().getFullYear()} Ombre</p>
          <a className="footer__top" href="#hero">
            Back to top ↑
          </a>
        </div>
      </Reveal>
    </footer>
  )
}
