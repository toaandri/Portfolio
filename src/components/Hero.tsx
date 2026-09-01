import { motion } from "framer-motion";
import { GitHubIcon } from "./icons";
import { useLanguage } from "../lib/LanguageContext";
import styles from "./Hero.module.css";

const socials = [
  { label: "GitHub", href: "https://github.com/toaandri", Icon: GitHubIcon },
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
  const { t } = useLanguage();

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
            <p className={styles.greeting}>{t("hero.greeting")}</p>
            <h1 className={styles.title}>
              <span>{t("hero.title1")}</span>
              <span>{t("hero.title2")}</span>
            </h1>
            <p className={styles.lead}>
              {t("hero.lead")}
            </p>

            <div className={styles.actions}>
              <a href="/Maharavo_CV.pdf" download className={styles.downloadBtn}>
                {t("hero.cv")}
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
