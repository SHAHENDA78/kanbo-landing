import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/FAQ.css'

const faqs = [
  {
    q: 'Is there a free plan?',
    a: 'Yes. Starter is free forever for up to 3 projects. No credit card needed.',
  },
  {
    q: 'Can I import from Jira or Trello?',
    a: 'Yes. Upload a CSV or connect your account and we will import projects, tasks and comments in a few minutes.',
  },
  {
    q: 'How does the 14-day trial work?',
    a: 'You get every Team feature for 14 days. If you do not upgrade, you drop back to Starter automatically.',
  },
  {
    q: 'Do you offer discounts for students or nonprofits?',
    a: 'Yes, 50% off for verified students, educators and registered nonprofits. Contact support to apply.',
  },
  {
    q: 'Can I cancel any time?',
    a: 'Always. Cancel from settings in two clicks and keep access until the end of your billing period.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section faq" id="faq">
      <div className="container faq-inner">
        <div>
          <p className="eyebrow">faq</p>
          <h2 className="section-title faq-title">
            Questions,
            <br />
            <span className="dim">answered.</span>
          </h2>
        </div>

        <ul className="faq-list">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <li key={f.q} className={isOpen ? 'open' : ''}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span>{f.q}</span>
                  <motion.span
                    className="icon"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}