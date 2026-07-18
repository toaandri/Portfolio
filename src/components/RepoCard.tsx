import { motion } from "framer-motion";
import type { GitHubRepo } from "../lib/github";
import { getLanguageColor } from "../lib/github";
import { ExternalIcon, ForkIcon, StarIcon } from "./icons";

interface RepoCardProps {
  repo: GitHubRepo;
  index: number;
}

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / 86400000);
  if (days < 1) return "today";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

export function RepoCard({ repo, index }: RepoCardProps) {
  const lang = repo.language;

  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="card card-hoverable repo-card"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1],
        delay: Math.min(index * 0.05, 0.4),
      }}
    >
      <div className="repo-top">
        <span className="repo-name">
          {repo.name}
          <ExternalIcon size={13} />
        </span>
        <span className="repo-stars">
          <StarIcon size={13} /> {repo.stargazers_count}
        </span>
      </div>

      <p className="repo-desc">
        {repo.description || "No description provided."}
      </p>

      <div className="repo-langs">
        {lang && (
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <span
              className="repo-lang-dot"
              style={{ background: getLanguageColor(lang) }}
            />
            {lang}
          </span>
        )}
        {repo.topics.slice(0, 2).map((t) => (
          <span key={t} style={{ color: "var(--accent)" }}>
            #{t}
          </span>
        ))}
      </div>

      <div className="repo-foot">
        <span>
          <ForkIcon size={13} /> {repo.forks_count}
        </span>
        <span>Updated {timeAgo(repo.updated_at)}</span>
      </div>
    </motion.a>
  );
}
