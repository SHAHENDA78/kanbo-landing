import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/Hero.css";

const words = ["Ship", "work,", "not", "status", "updates."];
const highlight = "work,";

const rows = [
  {
    id: "KB-142",
    title: "Redesign onboarding flow",
    tag: "design",
    state: "progress",
  },
  {
    id: "KB-143",
    title: "Fix webhook retry logic",
    tag: "backend",
    state: "todo",
  },
  {
    id: "KB-139",
    title: "Write release notes v2.4",
    tag: "docs",
    state: "done",
  },
  {
    id: "KB-145",
    title: "Audit dashboard a11y",
    tag: "frontend",
    state: "progress",
  },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  return (
    <section className="hero" ref={ref}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          v2.4 / now with keyboard-first workflows
        </motion.p>

        <h1 aria-label="Ship work, not status updates.">
          {words.map((w, i) => (
            <span className="word-mask" key={i} aria-hidden="true">
              <motion.span
                className={`word ${w === highlight ? "word-blue" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Plan, track and close tasks from one fast workspace. Built for teams
          that would rather build than attend meetings.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
        >
          <motion.a
            href="#cta"
            className="btn btn-primary"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Start for free →
          </motion.a>
          <motion.a
            href="#how"
            className="btn btn-ghost"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            See how it works
          </motion.a>
        </motion.div>

        <motion.div
          className="terminal"
          style={{ y, scale }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="term-bar">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="term-title">kanbo / sprint-24</span>
          </div>
          <ul className="term-body">
            {rows.map((r, i) => (
              <motion.li
                key={r.id}
                className="term-row"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + i * 0.1 }}
                whileHover={{ backgroundColor: "#161616" }}
              >
                <span className="row-id">{r.id}</span>
                <span className={`row-state ${r.state}`} />
                <span className="row-title">{r.title}</span>
                <span className="row-tag">{r.tag}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
