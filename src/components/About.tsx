import type { GitHubData } from "../lib/github";
import { Reveal } from "./Reveal";
import styles from "./About.module.css";

interface AboutProps {
  data: GitHubData;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
}

export function About({ data }: AboutProps) {
  const { user, languages } = data;
  const topLangs = languages.slice(0, 6);
  const joinDate = formatDate(user.created_at);

  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal as="h2" className="section-title" delay={0.05}>
          About me.
        </Reveal>

        <div className={styles.grid}>
          <Reveal delay={0.1} className={styles.bioCard}>
            <p>
              I&apos;m <strong>{user.name || user.login}</strong>, a software
              engineering student based in Madagascar. I build practical
              web applications and explore new technologies — from full-stack
              TypeScript to Java and Python.
            </p>
            <p>
              My work spans academic projects and real-world apps, including{" "}
              <strong>MITANEKO</strong> for the Orange Digital Center POESAM.
              I&apos;m constantly learning and pushing my craft forward.
            </p>
            <div className={styles.skills}>
              {topLangs.map((l) => (
                <span key={l.name} className={styles.chip}>
                  <span className={styles.langDot} style={{ background: l.color }} />
                  {l.name}
                </span>
              ))}
              {topLangs.length === 0 && <span className={styles.chip}>Learning…</span>}
            </div>
          </Reveal>

          <Reveal delay={0.15} className={styles.statsCard} role="complementary" aria-label="GitHub statistics">
            <div className={styles.statsList}>
              <div className={styles.stat}>
                <span className={styles.statDot} style={{ background: "var(--accent)" }} aria-hidden="true" />
                <div>
                  <span className={styles.statLabel}>GitHub since</span>
                  <span className={styles.statValue}>{joinDate}</span>
                </div>
              </div>
              <div className={styles.stat}>
                <span className={styles.statDot} style={{ background: "var(--text-faint)" }} aria-hidden="true" />
                <div>
                  <span className={styles.statLabel}>Public repos</span>
                  <span className={styles.statValue}>{user.public_repos}</span>
                </div>
              </div>
              <div className={styles.stat}>
                <span className={styles.statDot} style={{ background: "var(--accent)" }} aria-hidden="true" />
                <div>
                  <span className={styles.statLabel}>Total stars</span>
                  <span className={styles.statValue}>{data.totalStars}</span>
                </div>
              </div>
              <div className={styles.stat}>
                <span className={styles.statDot} style={{ background: "var(--accent-soft)" }} aria-hidden="true" />
                <div>
                  <span className={styles.statLabel}>Top language</span>
                  <span className={styles.statValue}>{topLangs[0]?.name || "—"}</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className={styles.quoteCard}>
            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden="true" style={{ opacity: 0.2, marginBottom: 12 }}>
              <path d="M10 24H0L6 0h8l-4 24zm14 0h-8l6-24h8l-6 24z" fill="currentColor" />
            </svg>
            <blockquote>
              A Madagascar-based builder turning ideas into working software,
              one commit at a time.
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}