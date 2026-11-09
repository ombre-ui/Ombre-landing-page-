import Reveal from './Reveal.jsx'
import '../styles/benefits.css'

const benefits = [
  {
    title: 'One continuous workspace',
    text: 'Your work, conversations, Mentors, and Projects stay connected in one place.',
  },
  {
    title: 'The right expertise, when you need it',
    text: 'Move from broad thinking to specialized help without breaking your flow.',
  },
  {
    title: 'Context that moves with you',
    text: 'Switch to a different Mentor and the thread comes with you. Nothing to re-explain.',
  },
  {
    title: 'Built around your work',
    text: 'Projects give your ideas, files, conversations, and progress one place to come together.',
  },
]

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="section section--ivory benefits"
      aria-label="Benefits"
    >
      <ol className="benefits__list">
        {benefits.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 120} className="benefit">
            <span className="benefit__num" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="benefit__title">{item.title}</h3>
            <p className="benefit__text">{item.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
