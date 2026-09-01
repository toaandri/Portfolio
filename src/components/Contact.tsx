import { motion } from "framer-motion";
import {
  FacebookIcon,
  GitHubIcon,
  LinkedinIcon,
  MailIcon,
} from "./icons";
import { Reveal } from "./Reveal";
import { useLanguage } from "../lib/LanguageContext";
import styles from "./Contact.module.css";

const links = [
  {
    labelKey: "contact.github",
    sub: "@toaandri",
    href: "https://github.com/toaandri",
    Icon: GitHubIcon,
  },
  {
    labelKey: "contact.linkedin",
    sub: "Maharavo A.",
    href: "https://www.linkedin.com/in/maharavo",
    Icon: LinkedinIcon,
  },
  {
    labelKey: "contact.facebook",
    sub: "ravo.mah",
    href: "https://web.facebook.com/ravo.mah",
    Icon: FacebookIcon,
  },
  {
    labelKey: "contact.email",
    sub: "toavinamaharavo@gmail.com",
    href: "mailto:toavinamaharavo@gmail.com?subject=Hello%20toaandri",
    Icon: MailIcon,
  },
];

export function Contact() {
  const { t } = useLanguage();

  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal>
          <div className={`card card-hoverable ${styles.card}`}>
            <h3>{t("contact.title")}</h3>
            <p>
              {t("contact.desc")}
            </p>
            <div className={styles.socialRow}>
              {links.map(({ labelKey, sub, href, Icon }) => (
                <motion.a
                  key={labelKey}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="social-link"
                  aria-label={t(labelKey)}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Icon size={16} /> {t(labelKey)}
                  <span className="sub">
                    · {sub}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
