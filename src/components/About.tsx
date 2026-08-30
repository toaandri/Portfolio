import { Reveal } from "./Reveal";
import styles from "./About.module.css";

const steps = [
  { num: "01", label: "Understand users & goals" },
  { num: "02", label: "Create clean UI layouts" },
  { num: "03", label: "Responsive experiences" },
];

const metrics = [
  { value: "02+", label: "Years of experience" },
  { value: "15+", label: "Projects completed" },
  { value: "05+", label: "Clients served" },
];

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal as="h2" className={styles.title} delay={0.05}>
          About Me
        </Reveal>
        <Reveal as="p" className={styles.bio} delay={0.1}>
          I&apos;m Maharavo, a front-end developer &amp; designer based in
          Madagascar. I craft clean, responsive interfaces that balance
          aesthetics with performance — turning ideas into websites that look
          great and work flawlessly on every device.
        </Reveal>

        <div className={styles.approachTitle}>My Approach</div>
        <div className={styles.approachWrap}>
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={0.1 * i} className={styles.step}>
              <span className={styles.stepNum}>{s.num}</span>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className={styles.metrics}>
            {metrics.map((m) => (
              <div key={m.label} className={styles.metric}>
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
