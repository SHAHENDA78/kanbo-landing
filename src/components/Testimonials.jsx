import { motion } from 'framer-motion'
import '../styles/Testimonials.css'

const quotes = [
  {
    text: 'We cut our weekly planning meeting from an hour to ten minutes. The keyboard shortcuts alone are worth it.',
    name: 'Sara Lindholm',
    role: 'Eng Manager, Northwind',
  },
  {
    text: 'Status updates write themselves now. I stopped chasing people on Slack the week we switched.',
    name: 'Omar Haddad',
    role: 'Product Lead, Linebase',
  },
  {
    text: 'Finally a tracker that feels like a dev tool, not a spreadsheet wearing a suit.',
    name: 'Mia Okafor',
    role: 'CTO, Orbitlab',
  },
]

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <p className="eyebrow">testimonials</p>
        <h2 className="section-title t-title">
          Teams that stopped
          <br />
          <span className="dim">attending status meetings.</span>
        </h2>

        <div className="quotes">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.name}
              className="quote"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote>“{q.text}”</blockquote>
              <figcaption>
                <span className="avatar">{q.name[0]}</span>
                <span>
                  <strong>{q.name}</strong>
                  <small>{q.role}</small>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}