import Reveal from './Reveal.jsx'
import Headline from './Headline.jsx'
import '../styles/workspace.css'

const steps = [
  {
    label: 'General AI',
    text: 'Start here when you’re exploring an idea, solving a problem, or working out what comes next.',
  },
  {
    label: 'Mentors',
    text: 'When the work needs deeper expertise, bring in an AI Mentor built for that kind of task.',
  },
  {
    label: 'Projects',
    text: 'Keep everything organized in one place, where conversations, files, Mentors, and progress come together.',
  },
  {
    label: 'Continuity',
    text: 'As your work evolves, Ombre keeps the pieces connected. Explore broadly, go deeper, change direction, keep building.',
  },
]

// Typography only: no images, cards or icons.
export default function Workspace() {
  return (
    <section
      id="workspace"
      className="section section--charcoal blend-top blend-from-ivory workspace"
      aria-labelledby="workspace-heading"
    >
      <div className="workspace__inner">
        <Headline
          as="h2"
          id="workspace-heading"
          className="workspace__headline"
          segments={[
            { text: 'One workspace.', block: true },
            { text: 'Every direction your work takes.', em: true, block: true },
          ]}
        />

        <div className="workspace__rows">
          {steps.map((step, i) => (
            <Reveal key={step.label} delay={i * 100} className="workspace__row">
              <h3 className="workspace__label">{step.label}</h3>
              <p className="workspace__text">{step.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="workspace__closing">
          Without losing the context behind the work.
        </Reveal>
      </div>
    </section>
  )
}
