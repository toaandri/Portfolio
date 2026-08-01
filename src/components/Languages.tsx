import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { LanguageStat } from "../lib/github";
import { Reveal } from "./Reveal";
import { HorizontalPan } from "./HorizontalPan";
import styles from "./Languages.module.css";

interface LanguagesProps {
  languages: LanguageStat[];
}

export function Languages({ languages }: LanguagesProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (languages.length === 0) {
    return (
      <section className="section" id="languages">
        <div className="container">
          <Reveal as="h2" className="section-title" delay={0.05}>
            Languages I write.
          </Reveal>
          <p style={{ color: "var(--text-faint)", marginTop: 32 }}>
            No language data available yet.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="languages">
      <div className="container">
        <Reveal as="h2" className="section-title" delay={0.05}>
          Languages I write.
        </Reveal>
        <Reveal as="p" className="section-sub" delay={0.1}>
          Distribution across all non-fork repositories.
        </Reveal>
      </div>

      <HorizontalPan>
        <div className={styles.panTrack}>
          {languages.map((l, i) => (
            <div className={`card card-hoverable ${styles.panCard}`} key={l.name}>
              <div className={styles.panHeader}>
                <span className={styles.panDot} style={{ background: l.color }} aria-hidden="true" />
                <span className={styles.panName}>{l.name}</span>
                <span className={styles.panPct}>{l.percentage.toFixed(1)}%</span>
              </div>
              <div className={styles.panTrackBar}>
                <motion.div
                  className={styles.panFill}
                  style={{ background: l.color }}
                  initial={{ width: 0 }}
                  animate={{ width: mounted ? `${l.percentage}%` : 0 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.23, 1, 0.32, 1],
                    delay: i * 0.06,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </HorizontalPan>
    </section>
  );
}