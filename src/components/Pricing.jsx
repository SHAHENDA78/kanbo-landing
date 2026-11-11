import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/Pricing.css'

const plans = [
  {
    name: 'Starter',
    monthly: 0,
    yearly: 0,
    desc: 'For individuals and side projects.',
    features: ['Up to 3 projects', 'Basic analytics', 'Community support'],
    cta: 'Start free',
  },
  {
    name: 'Team',
    monthly: 12,
    yearly: 9,
    desc: 'For teams that ship every week.',
    features: [
      'Unlimited projects',
      'Sprint planning',
      'GitHub & Slack integrations',
      'Priority support',
    ],
    cta: 'Start 14-day trial',
    featured: true,
  },
  {
    name: 'Scale',
    monthly: 29,
    yearly: 24,
    desc: 'For orgs that need control.',
    features: ['Everything in Team', 'SSO & audit log', 'Custom roles', 'Dedicated manager'],
    cta: 'Talk to sales',
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <p className="eyebrow">pricing</p>
        <h2 className="section-title pricing-title">
          Simple pricing.
          <br />
          <span className="dim">Per seat, per month.</span>
        </h2>

        <div className="switch" role="group" aria-label="Billing period">
          <button
            className={!yearly ? 'active' : ''}
            onClick={() => setYearly(false)}
          >
            Monthly
          </button>
          <button
            className={yearly ? 'active' : ''}
            onClick={() => setYearly(true)}
          >
            Yearly <span className="save">-25%</span>
          </button>
        </div>

        <div className="plans">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              className={`plan ${p.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {p.featured && <span className="popular">most popular</span>}
              <h3>{p.name}</h3>
              <p className="plan-desc">{p.desc}</p>

              <div className="price">
                <span className="currency">$</span>
                <span className="amount-wrap">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={yearly ? 'y' : 'm'}
                      className="amount"
                      initial={{ y: 16, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -16, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {yearly ? p.yearly : p.monthly}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <span className="per">/ seat / mo</span>
              </div>

              <ul>
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <motion.a
                href="#cta"
                className={`btn ${p.featured ? 'btn-primary' : 'btn-ghost'}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                {p.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}