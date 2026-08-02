import { motion } from "framer-motion";
import type { GitHubData } from "../lib/github";
import { FacebookIcon, GitHubIcon, LinkedinIcon, StarIcon } from "./icons";
import { MaskText } from "./Reveal";
import styles from "./Hero.module.css";

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
    <header className={styles.hero} id="top">
      <div className="container">
        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className={styles.avatarCol}>
            <div className={styles.avatar}>
              <img src={user.avatar_url} alt={user.login} loading="eager" />
              <span className={styles.avatarRing} aria-hidden="true" />
              <span className={styles.avatarPulse} aria-hidden="true" />
            </div>
            <motion.p variants={item} className={styles.avatarBio}>
              I build practical web apps from Madagascar —
              TypeScript, Java, Python, and whatever else gets the job done.
            </motion.p>
          </motion.div>

          <div className={styles.contentCol}>
            <motion.div variants={item} className="kicker">
              Software Developer
            </motion.div>

            <motion.h1 variants={item} className={styles.name}>
              <MaskText as="h1" text={first} delay={0.15} />
              {rest && (
                <span className={styles.amber}>
                  {" "}
                  <MaskText as="h1" text={rest} delay={0.28} />
                </span>
              )}
            </motion.h1>

            <motion.div variants={item} className={styles.actions}>
              <a
                href={`https://github.com/${user.login}?tab=repositories`}
                className="btn btn-primary btn-magnetic"
                target="_blank"
                rel="noreferrer"
                aria-label="View GitHub repositories"
              >
                <GitHubIcon size={16} className="btn-icon-trail" /> View repositories
              </a>
            </motion.div>

            <motion.div variants={item} style={{ marginTop: 32 }}>
              <div className={styles.statRow}>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>{user.public_repos}</span>
                  <span className={styles.statLabel}>repos</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.statItem}>
                  <span className={styles.statValue}>{totalStars}</span>
                  <span className={styles.statLabel}>stars</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.statItem}>
                  <span className={styles.statValue}>{user.followers}</span>
                  <span className={styles.statLabel}>followers</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="social-row"
          style={{ marginTop: 32, justifyContent: "center" }}
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
              aria-label={`Visit ${label} profile`}
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
            style={{ marginTop: 16, color: "var(--text-faint)", fontSize: 13, textAlign: "center" }}
          >
            <StarIcon size={14} /> Earned {totalStars} star
            {totalStars > 1 ? "s" : ""} across public repositories.
          </motion.div>
        )}
      </div>
    </header>
  );
}
