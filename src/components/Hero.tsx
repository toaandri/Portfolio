import { motion } from "framer-motion";
import type { GitHubData } from "../lib/github";
import { FacebookIcon, GitHubIcon, LinkedinIcon, StarIcon } from "./icons";
import { MaskText } from "./Reveal";

interface HeroProps {
  data: GitHubData;
}

const socials = [
  { label: "GitHub", href: "https://github.com/toaandri", Icon: GitHubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/maharavo-andrianarijery-87abb4348/",
    Icon: LinkedinIcon,
  },
  { label: "Facebook", href: "https://web.facebook.com/ravo.mah", Icon: FacebookIcon },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] } },
};

function splitName(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return { first: parts[0], rest: "" };
  return { first: parts[0], rest: parts.slice(1).join(" ") };
}

export function Hero({ data }: HeroProps) {
  const { user, totalStars } = data;
  const { first, rest } = splitName(user.name || user.login);

  return (
    <header className="hero" id="top">
      <div className="container">
        <motion.div
          className="hero-grid"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div>
            <motion.div variants={item} className="hero-kicker">
              Software Engineering Student
            </motion.div>

            <motion.h1 variants={item} className="hero-name">
              <MaskText as="h1" text={first} delay={0.15} />
              {rest && (
                <span className="amber">
                  {" "}
                  <MaskText as="h1" text={rest} delay={0.28} />
                </span>
              )}
            </motion.h1>

            <motion.div variants={item} className="hero-handle">
              @{user.login} · Madagascar
            </motion.div>

            <motion.p variants={item} className="hero-bio">
              {user.bio ||
                "I build practical web applications and explore new technologies, from full-stack TypeScript to Java and Python."}
            </motion.p>

            <motion.div variants={item} className="hero-actions">
              <a
                href={`https://github.com/${user.login}?tab=repositories`}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon size={16} /> View repositories
              </a>
              <a href="#projects" className="btn btn-ghost">
                See my work
              </a>
            </motion.div>

            <motion.div variants={item} className="stat-row">
              <div>
                <div className="stat-value">{user.public_repos}</div>
                <div className="stat-label">Repositories</div>
              </div>
              <div>
                <div className="stat-value">{totalStars}</div>
                <div className="stat-label">Stars earned</div>
              </div>
              <div>
                <div className="stat-value">{user.followers}</div>
                <div className="stat-label">Followers</div>
              </div>
              <div>
                <div className="stat-value">{user.following}</div>
                <div className="stat-label">Following</div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={item} className="hero-avatar">
            <img src={user.avatar_url} alt={user.login} loading="eager" />
          </motion.div>
        </motion.div>

        <motion.div
          className="social-row"
          style={{ marginTop: 36, justifyContent: "flex-start" }}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {socials.map(({ label, href, Icon }) => (
            <motion.a
              key={label}
              variants={item}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <Icon size={16} /> {label}
            </motion.a>
          ))}
        </motion.div>

        {totalStars > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{ marginTop: 18, color: "var(--text-faint)", fontSize: 13 }}
          >
            <StarIcon size={14} /> {" "}Earned {totalStars} star
            {totalStars > 1 ? "s" : ""} across public repositories.
          </motion.div>
        )}
      </div>
    </header>
  );
}
