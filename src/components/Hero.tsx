import { motion } from "framer-motion";
import type { GitHubData } from "../lib/github";
import { FacebookIcon, GitHubIcon, LinkedinIcon, StarIcon } from "./icons";

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
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
  },
};

export function Hero({ data }: HeroProps) {
  const { user, totalStars } = data;

  return (
    <header className="hero" id="top">
      <div className="container">
        <motion.div
          className="hero-grid"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="avatar-wrap">
            <div className="avatar-ring" />
            <img
              className="avatar"
              src={user.avatar_url}
              alt={user.login}
              loading="eager"
            />
          </motion.div>

          <div>
            <motion.h1 variants={item} className="hero-name">
              {user.name || user.login}
            </motion.h1>
            <motion.div variants={item} className="hero-handle">
              @{user.login}
            </motion.div>
            <motion.p variants={item} className="hero-bio">
              {user.bio}
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
              <div className="stat">
                <span className="stat-value">
                  {user.public_repos}
                </span>
                <span className="stat-label">Repositories</span>
              </div>
              <div className="stat">
                <span className="stat-value">{totalStars}</span>
                <span className="stat-label">Stars earned</span>
              </div>
              <div className="stat">
                <span className="stat-value">{user.followers}</span>
                <span className="stat-label">Followers</span>
              </div>
              <div className="stat">
                <span className="stat-value">{user.following}</span>
                <span className="stat-label">Following</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="social-row"
          style={{ marginTop: 28, justifyContent: "flex-start" }}
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
            transition={{ delay: 0.6 }}
            style={{ marginTop: 16, color: "var(--text-faint)", fontSize: 13 }}
          >
            <StarIcon size={14} /> {" "}Earned {totalStars} star
            {totalStars > 1 ? "s" : ""} across public repositories.
          </motion.div>
        )}
      </div>
    </header>
  );
}
