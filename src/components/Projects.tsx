import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { GitHubRepo } from "../lib/github";
import { RepoCard } from "./RepoCard";
import { Reveal } from "./Reveal";

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

  const filtered =
    active === "All" ? repos : repos.filter((r) => r.language === active);

  useLayoutEffect(() => {
    const idx = languages.indexOf(active);
    const el = tabRefs.current[idx];
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
  }, [active, languages]);

  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal as="div" className="eyebrow">
          Work
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          Selected repositories.
        </Reveal>
        <Reveal as="p" className="section-sub" delay={0.1}>
          Pulled live from GitHub — {repos.length} repositories, refreshed
          automatically.
        </Reveal>

        <div className="filter-tabs" role="tablist">
          <motion.span
            className="filter-pill"
            animate={{ left: pill.left, width: pill.width }}
            transition={{ duration: 0.3, ease: [0.77, 0, 0.175, 1] }}
          />
          {languages.map((lang, i) => (
            <button
              key={lang}
              ref={(el) => (tabRefs.current[i] = el)}
              className="filter-tab"
              data-active={active === lang}
              onClick={() => setActive(lang)}
              role="tab"
              aria-selected={active === lang}
            >
              {lang}
            </button>
          ))}
        </div>

        <div className="repo-grid" key={active}>
          {filtered.map((repo, i) => (
            <RepoCard key={repo.id} repo={repo} index={i} />
          ))}
          {filtered.length === 0 && (
            <p style={{ color: "var(--text-faint)" }}>
              No repositories in this language yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
