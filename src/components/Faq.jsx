import { useState } from 'react'
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

// An accordion: each question is a button that unfolds its answer, with one
// open at a time. The answers stay in the page for search engines, and a
// closed answer is hidden from keyboards and screen readers.
export default function Faq() {
  const [open, setOpen] = useState(null)

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
          {questions.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={i * 60}>
                <div className="faq__item" data-open={isOpen}>
                  <h3 className="faq__row">
                    <button
                      type="button"
                      className="faq__question"
                      id={`faq-question-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      <span>{item.q}</span>
                      <span className="faq__icon" aria-hidden="true" />
                    </button>
                  </h3>
                  <div
                    className="faq__panel"
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                  >
                    <div className="faq__panel-inner">
                      <div className="faq__answer">
                        <p>{item.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
