import { motion } from "framer-motion";
import {
  FacebookIcon,
  GitHubIcon,
  LinkedinIcon,
  MailIcon,
} from "./icons";
import { Reveal } from "./Reveal";
import styles from "./Contact.module.css";

const links = [
  {
    label: "GitHub",
    sub: "@toaandri",
    href: "https://github.com/toaandri",
    Icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    sub: "Maharavo A.",
    href: "https://www.linkedin.com/in/maharavo-andrianarijery-87abb4348/",
    Icon: LinkedinIcon,
  },
  {
    label: "Facebook",
    sub: "ravo.mah",
    href: "https://web.facebook.com/ravo.mah",
    Icon: FacebookIcon,
  },
  {
    label: "Email",
    sub: "Get in touch",
    href: "mailto:?subject=Hello%20toaandri",
    Icon: MailIcon,
  },
];

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal>
          <div className={`card card-hoverable ${styles.card}`}>
            <h3>Let&apos;s build something together.</h3>
            <p>
              I&apos;m open to collaborations, internships, and interesting projects.
              Reach out anytime.
            </p>
            <div className={styles.socialRow}>
              {links.map(({ label, sub, href, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="social-link"
                  aria-label={`Contact via ${label}`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Icon size={16} /> {label}
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