import { Reveal } from "./Reveal";
import { useLanguage } from "../lib/LanguageContext";
import styles from "./Skills.module.css";

const groupsKeys = [
  {
    titleKey: "skills.languages",
    items: ["TypeScript", "JavaScript", "Java", "Python", "PHP", "SQL"],
  },
  {
    titleKey: "skills.spokenLanguages",
    items: ["Malagasy", "English", "French"],
  },
  {
    titleKey: "skills.frontend",
    items: ["React", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Styled Components"],
  },
  {
    titleKey: "skills.backend",
    items: ["Node.js", "NestJS", "Express", "GraphQL", "Socket.io", "REST APIs"],
  },
  {
    titleKey: "skills.databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"],
  },
  {
    titleKey: "skills.devops",
    items: ["Docker", "Kubernetes", "AWS", "Vercel", "Git", "GitHub Actions"],
  },
  {
    titleKey: "skills.testing",
    items: ["Jest", "Vitest", "Cypress", "Playwright"],
  },
];

export function Skills() {
  const { t } = useLanguage();

  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal as="h2" className={styles.title} delay={0.05}>
          {t("skills.title")}
        </Reveal>
        <Reveal as="p" className={styles.subtitle} delay={0.1}>
          {t("skills.subtitle")}
        </Reveal>

        <div className={styles.grid}>
          {groupsKeys.map((g, i) => (
            <Reveal key={g.titleKey} delay={0.08 * (i % 4)} className={styles.cardWrap}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{t(g.titleKey)}</h3>
                <div className={styles.chips}>
                  {g.items.map((item) => (
                    <span key={item} className={styles.chip}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
