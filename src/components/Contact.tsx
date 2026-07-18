import {
  FacebookIcon,
  GitHubIcon,
  LinkedinIcon,
  MailIcon,
} from "./icons";
import { Reveal } from "./Reveal";

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
          <div className="card contact-card">
            <h3>Let's build something together.</h3>
            <p>
              I'm open to collaborations, internships, and interesting projects.
              Reach out anytime.
            </p>
            <div className="social-row">
              {links.map(({ label, sub, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="social-link"
                >
                  <Icon size={16} /> {label}
                  <span style={{ color: "var(--text-faint)", fontWeight: 500 }}>
                    · {sub}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
