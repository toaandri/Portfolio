import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { LanguageStat } from "../lib/github";

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
        <h2 className="section-title">Languages</h2>
        <p className="section-sub">
          Distribution across all non-fork repositories.
        </p>

        <div className="lang-bars">
          {languages.map((l, i) => (
            <div className="lang-bar-row" key={l.name}>
              <span className="lang-name">
                <span
                  className="lang-dot"
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: l.color,
                  }}
                />
                {l.name}
              </span>
              <div className="lang-track">
                <motion.div
                  className="lang-fill"
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
              <span className="lang-pct">{l.percentage.toFixed(1)}%</span>
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
