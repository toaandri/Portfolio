import { useMemo, useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import type { GitHubRepo } from "../lib/github";
import { RepoCard } from "./RepoCard";
import { Reveal } from "./Reveal";
import { StickyStack } from "./StickyStack";
import styles from "./Projects.module.css";

interface ProjectsProps {
  repos: GitHubRepo[];
}

export function Projects({ repos }: ProjectsProps) {
  const languages = useMemo(() => {
    const set = new Set<string>();
    repos.forEach((r) => r.language && set.add(r.language));
    return ["All", ...[...set].sort()];
  }, [repos]);

  const [active, setActive] = useState("All");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [pill, setPill] = useState({ left: 0, width: 0 });
  const filterRef = useRef<HTMLDivElement>(null);

  const filtered =
    active === "All" ? repos : repos.filter((r) => r.language === active);

  useLayoutEffect(() => {
    const idx = languages.indexOf(active);
    const el = tabRefs.current[idx];
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
  }, [active, languages]);

  const topRepos = filtered.slice(0, 12);

  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal as="h2" className="section-title" delay={0.05}>
          Selected repositories.
        </Reveal>
        <Reveal as="p" className="section-sub" delay={0.1}>
          Pulled live from GitHub — {repos.length} repositories, refreshed
          automatically.
        </Reveal>

        <div className={styles.filterWrap} ref={filterRef}>
          <div className={styles.filterTabs} role="tablist" aria-label="Filter repositories by language">
            <motion.span
              className={styles.pill}
              animate={{ left: pill.left, width: pill.width }}
              transition={{ duration: 0.3, ease: [0.77, 0, 0.175, 1] }}
            />
            {languages.map((lang, i) => (
              <button
                key={lang}
                ref={(el) => (tabRefs.current[i] = el)}
                className={styles.tab}
                data-active={active === lang}
                onClick={() => setActive(lang)}
                role="tab"
                aria-selected={active === lang}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {topRepos.length === 0 && (
          <p style={{ color: "var(--text-faint)" }}>
            No repositories in this language yet.
          </p>
        )}

        {topRepos.length <= 3 ? (
          <div className={styles.grid} key={active}>
            {topRepos.map((repo, i) => (
              <RepoCard key={repo.id} repo={repo} index={i} />
            ))}
          </div>
        ) : (
          <StickyStack
            cards={topRepos.map((repo) => (
              <div key={repo.id} style={{ width: "100%" }}>
                <RepoCard repo={repo} index={0} />
              </div>
            ))}
          />
        )}
      </div>
    </section>
  );
}