import { motion } from 'framer-motion'
import '../styles/Features.css'

const features = [
  {
    tag: '01',
    title: 'Keyboard-first everything',
    text: 'Create, assign and close tasks without touching the mouse. Press ⌘K and go anywhere.',
    wide: true,
  },
  {
    tag: '02',
    title: 'Sprints that plan themselves',
    text: 'Auto-balance workload across the team based on real capacity.',
  },
  {
    tag: '03',
    title: 'Live sync',
    text: 'Changes show up instantly for everyone. No refresh, no conflicts.',
  },
  {
    tag: '04',
    title: 'Integrations',
    text: 'GitHub, Slack and Figma connected in two clicks.',
  },
  {
    tag: '05',
    title: 'Analytics that matter',
    text: 'Cycle time, throughput and blockers at a glance, not vanity charts.',
    wide: true,
  },
]

const card = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Features() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <p className="eyebrow">features</p>
        <h2 className="section-title features-title">
          Everything your team needs.
          <br />
          <span className="dim">Nothing it doesn't.</span>
        </h2>

        <div className="bento">
          {features.map((f, i) => (
            <motion.article
              key={f.tag}
              className={`feature ${f.wide ? 'wide' : ''}`}
              custom={i}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4 }}
            >
              <span className="feature-tag">{f.tag}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}