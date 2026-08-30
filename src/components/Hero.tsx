import { motion } from "framer-motion";
import { GitHubIcon, LinkedinIcon } from "./icons";
import styles from "./Hero.module.css";

const socials = [
  { label: "GitHub", href: "https://github.com/toaandri", Icon: GitHubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/maharavo-andrianarijery-87abb4348/",
    Icon: LinkedinIcon,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] } },
};

export function Hero({ portrait }: { portrait: string }) {
  return (
    <header className={styles.hero} id="top">
      <div className="container">
        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className={styles.copyCol}>
            <p className={styles.greeting}>I am Maharavo</p>
            <h1 className={styles.title}>
              <span>Front-End</span>
              <span>Developer &amp; Designer</span>
            </h1>
            <p className={styles.lead}>
              Blending thoughtful UI design with clean, responsive development to create
              websites that look great and perform flawlessly.
            </p>

            <div className={styles.actions}>
              <a href="#contact" className={styles.downloadBtn}>
                Download CV
              </a>
            </div>

            <div className={styles.socials}>
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialLink}
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className={styles.visualCol}>
            <div className={styles.portraitWrap}>
              <img src={portrait} alt="Portrait" loading="eager" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
