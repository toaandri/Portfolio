import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { LanguageStat } from "../lib/github";
import { Reveal } from "./Reveal";
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

  return (
    <section className="section" id="languages">
      <div className="container">
        <Reveal as="div" className="eyebrow">
          Stack
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          Languages I write.
        </Reveal>
        <Reveal as="p" className="section-sub" delay={0.1}>
          Distribution across all non-fork repositories.
        </Reveal>

        <div className={styles.bars} role="list" aria-label="Programming languages">
          {languages.map((l, i) => (
            <div className={styles.row} key={l.name} role="listitem">
              <span className={styles.name}>
                <span
                  className={styles.dot}
                  style={{ background: l.color }}
                  aria-hidden="true"
                />
                {l.name}
              </span>
              <div className={styles.track} role="progressbar" aria-valuenow={Math.round(l.percentage)} aria-label={`${l.name}: ${l.percentage.toFixed(1)}%`}>
                <motion.div
                  className={styles.fill}
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
              <span className={styles.pct}>{l.percentage.toFixed(1)}%</span>
            </div>
          ))}
          {languages.length === 0 && (
            <p style={{ color: "var(--text-faint)" }}>
              No language data available yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
