import { motion } from "framer-motion";
import type { GitHubData } from "../lib/github";

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
  const { user, languages, repos } = data;
  const topLangs = languages.slice(0, 6);
  const joinDate = formatDate(user.created_at);

  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">About</h2>
        <p className="section-sub">
          Who I am, and what I build with.
        </p>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <p>
              I'm <strong>{user.name || user.login}</strong>, a software
              engineering student based in Madagascar. I enjoy building
              practical web applications and exploring new technologies — from
              full-stack TypeScript projects to Java and Python.
            </p>
            <p>
              My work spans academic projects and real-world apps, including{" "}
              <strong>MITANEKO</strong> for the Orange Digital Center POESAM and
              a React-based dynamic web app. I'm constantly learning and pushing
              my repos forward.
            </p>

            <div className="skills">
              {topLangs.map((l) => (
                <span key={l.name} className="skill-chip">
                  <span
                    className="lang-dot"
                    style={{ background: l.color }}
                  />
                  {l.name}
                </span>
              ))}
              {repos.length === 0 && <span className="skill-chip">Learning…</span>}
            </div>
          </motion.div>

          <motion.div
            className="card"
            style={{ padding: 24 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.5,
              ease: [0.23, 1, 0.32, 1],
              delay: 0.08,
            }}
          >
            <div className="fact-list">
              <div className="fact">
                <span className="fact-label">GitHub since</span>
                <span className="fact-value">{joinDate}</span>
              </div>
              <div className="fact">
                <span className="fact-label">Public repos</span>
                <span className="fact-value">{user.public_repos}</span>
              </div>
              <div className="fact">
                <span className="fact-label">Followers</span>
                <span className="fact-value">{user.followers}</span>
              </div>
              <div className="fact">
                <span className="fact-label">Following</span>
                <span className="fact-value">{user.following}</span>
              </div>
              <div className="fact">
                <span className="fact-label">Top language</span>
                <span className="fact-value">
                  {topLangs[0]?.name || "—"}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
