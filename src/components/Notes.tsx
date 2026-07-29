import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { notes } from "../lib/notes";
import styles from "./Notes.module.css";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function Notes() {
  const sorted = [...notes].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="section" id="notes">
      <div className="container">
        <Reveal as="h2" className="section-title" delay={0.05}>
          Writing & things I&apos;m learning.
        </Reveal>
        <Reveal as="p" className="section-sub" delay={0.1}>
          Occasional notes on code, careers, and the stuff I pick up along the way.
        </Reveal>

        <div className={styles.list}>
          {sorted.map((note, i) => (
            <motion.article
              key={note.slug}
              className={`card card-hoverable ${styles.item}`}
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                ease: [0.23, 1, 0.32, 1],
                delay: 0.08 * i,
              }}
            >
              <div className={styles.meta}>
                <time className={styles.date} dateTime={note.date}>
                  {formatDate(note.date)}
                </time>
                <span className={styles.tag}>{note.tag}</span>
              </div>
              <h3 className={styles.title}>{note.title}</h3>
              <p className={styles.excerpt}>{note.excerpt}</p>
            </motion.article>
          ))}
          {sorted.length === 0 && (
            <p style={{ color: "var(--text-faint)" }}>
              No notes published yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}