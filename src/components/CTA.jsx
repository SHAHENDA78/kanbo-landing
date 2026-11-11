import { motion } from 'framer-motion'
import '../styles/CTA.css'

export default function CTA() {
  return (
    <section className="section cta" id="cta">
      <div className="container">
        <motion.div
          className="cta-box"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">get started</p>
          <h2>
            Stop managing work.
            <br />
            <span className="pink">Start shipping it.</span>
          </h2>
          <p className="cta-sub">
            Free for small teams. Set up in under five minutes.
          </p>

          <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="you@company.com"
              aria-label="Email address"
              required
            />
            <motion.button
              type="submit"
              className="btn btn-primary"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Get started →
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}