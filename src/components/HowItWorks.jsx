import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/HowItWorks.css";

const steps = [
  {
    n: "01",
    title: "Capture",
    text: "Dump tasks in from anywhere: keyboard, Slack, email or GitHub issues. Everything lands in one inbox.",
    code: '$ tf add "Fix login bug" --assign @sara',
  },
  {
    n: "02",
    title: "Plan",
    text: "Drag work into a sprint. kanbo balances the load and flags anything that will not fit.",
    code: "$ tf sprint plan --capacity auto",
  },
  {
    n: "03",
    title: "Ship",
    text: "Close tasks straight from your pull requests. Status updates itself, so nobody has to ask.",
    code: "$ tf done KB-142 --pr 318",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 70%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="section how" id="how" ref={ref}>
      <div className="container">
        <p className="eyebrow">how it works</p>
        <h2 className="section-title how-title">
          From idea to shipped
          <br />
          <span className="dim">in three steps.</span>
        </h2>

        <div className="timeline">
          <div className="line">
            <motion.div className="line-fill" style={{ height }} />
          </div>

          {steps.map((s) => (
            <motion.div
              key={s.n}
              className="step"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="step-dot" />
              <span className="step-n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <code>{s.code}</code>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
