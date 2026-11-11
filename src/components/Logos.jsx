import { motion } from 'framer-motion'
import '../styles/Logos.css'

const logos = ['northwind', 'acme/co', 'linebase', 'orbitlab', 'kiln.io', 'parcel']

export default function Logos() {
  return (
    <section className="logos">
      <div className="container">
        <motion.p
          className="logos-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          trusted by fast-moving teams
        </motion.p>
        <ul className="logos-row">
          {logos.map((l, i) => (
            <motion.li
              key={l}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              {l}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}