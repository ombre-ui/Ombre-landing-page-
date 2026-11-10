import Reveal from './Reveal.jsx'
import '../styles/faq.css'

const questions = [
  {
    q: 'What is Ombre?',
    a: 'Ombre is an AI workspace that brings together General AI, specialized AI Mentors, and Projects. Your work stays connected as it changes direction, so you don’t have to start over.',
  },
  {
    q: 'What are AI Mentors?',
    a: 'Mentors are AI built for particular kinds of work, such as business, coding, productivity, and health. When a task needs deeper expertise, you bring in the Mentor made for it.',
  },
  {
    q: 'How is Ombre different from a regular AI chatbot?',
    a: 'A chatbot gives you a conversation. Ombre gives you a workspace: General AI for open thinking, Mentors for specialized work, and Projects that hold it all together, with context that carries from one step to the next.',
  },
  {
    q: 'What happens when I switch Mentors?',
    a: 'Your work stays in the same Project, and the relevant context goes with it. The next Mentor can pick up where the last one left off instead of asking you to begin again.',
  },
  {
    q: 'What are Projects?',
    a: 'Projects gather the conversations, Mentors, files, and progress for one piece of work in a single place, so everything stays connected.',
  },
  {
    q: 'Can I use Ombre for different kinds of work?',
    a: 'Yes. Ombre is built to support different workflows. You can think broadly with General AI, go deep with a Mentor, and move between the two as the work changes.',
  },
  {
    q: 'Is my work private?',
    a: 'Yes. Your work is kept secure in Ombre, including your conversations, files, and Projects.',
  },
]

// Each question is a native expandable element: keyboard and screen reader
// friendly, no extra scripting. In current browsers, opening one closes the
// others (they share the name "faq").
export default function Faq() {
  return (
    <section
      id="faq"
      className="section section--charcoal faq"
      aria-labelledby="faq-heading"
    >
      <div className="faq__inner">
        <Reveal as="h2" id="faq-heading" className="faq__heading">
          Common questions
        </Reveal>

        <div className="faq__list">
          {questions.map((item, i) => (
            <Reveal key={item.q} delay={i * 60}>
              <details className="faq__item" name="faq">
                <summary className="faq__question">
                  <span>{item.q}</span>
                  <span className="faq__icon" aria-hidden="true" />
                </summary>
                <div className="faq__answer">
                  <p>{item.a}</p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
