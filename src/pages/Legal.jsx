import { useEffect } from 'react'
import { privacy } from '../legal/privacy.js'
import { terms } from '../legal/terms.js'
import { CONTACT_EMAIL } from '../config.js'
import '../styles/legal.css'

const docs = { privacy, terms }

// Turns the contact email inside a sentence into a clickable link.
function withLinks(text) {
  const parts = text.split(CONTACT_EMAIL)
  return parts.flatMap((part, i) =>
    i < parts.length - 1
      ? [
          part,
          <a key={i} href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>,
        ]
      : [part]
  )
}

export default function Legal({ doc }) {
  const page = docs[doc]
  const other = doc === 'privacy' ? 'terms' : 'privacy'

  useEffect(() => {
    document.title = `${page.title} | Ombre`
    window.scrollTo(0, 0)
  }, [page.title])

  return (
    <div className="legal">
      <header className="legal__header">
        <a className="legal__wordmark" href="/">
          ombre
        </a>
        <a className="legal__back" href="/">
          ← Back to Ombre
        </a>
      </header>

      <main className="legal__main">
        <h1 className="legal__title">{page.title}</h1>
        <p className="legal__updated">Last updated: {page.updated}</p>
        <p className="legal__intro">{page.intro}</p>

        {page.sections.map((section, i) => (
          <section key={section.heading} className="legal__section">
            <h2>
              <span className="legal__num">{i + 1}.</span> {section.heading}
            </h2>
            {section.text &&
              section.text.map((p) => <p key={p}>{withLinks(p)}</p>)}
            {section.list && (
              <ul>
                {section.list.map((item) => (
                  <li key={item}>{withLinks(item)}</li>
                ))}
              </ul>
            )}
            {section.more &&
              section.more.map((p) => <p key={p}>{withLinks(p)}</p>)}
          </section>
        ))}
      </main>

      <footer className="legal__footer">
        <p>© {new Date().getFullYear()} Ombre</p>
        <a href={`/${other}`}>
          {other === 'privacy' ? 'Privacy Policy' : 'Terms of Use'}
        </a>
      </footer>
    </div>
  )
}
