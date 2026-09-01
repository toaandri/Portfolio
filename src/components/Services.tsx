import { Reveal } from "./Reveal";
import { useLanguage } from "../lib/LanguageContext";
import styles from "./Services.module.css";

const servicesKeys = [
  {
    titleKey: "services.fullstack.title",
    descKey: "services.fullstack.desc",
    tags: ["React & TypeScript", "Node.js & Express", "PostgreSQL & MongoDB"],
  },
  {
    titleKey: "services.mobile.title",
    descKey: "services.mobile.desc",
    tags: ["React Native", "Expo", "Cross-platform"],
  },
  {
    titleKey: "services.backend.title",
    descKey: "services.backend.desc",
    tags: ["REST & GraphQL", "Socket.io", "Auth & JWT"],
  },
  {
    titleKey: "services.database.title",
    descKey: "services.database.desc",
    tags: ["PostgreSQL & MongoDB", "Redis & Firebase", "Supabase"],
  },
];

export function Services() {
  const { t } = useLanguage();

  return (
    <section className="section" id="services">
      <div className="container">
        <Reveal as="h2" className={styles.title} delay={0.05}>
          {t("services.title")}
        </Reveal>
        <Reveal as="p" className={styles.subtitle} delay={0.1}>
          {t("services.subtitle")}
        </Reveal>

        <div className={styles.grid}>
          {servicesKeys.map((s, i) => (
            <Reveal key={s.titleKey} delay={0.08 * (i % 4)} className={styles.cardWrap}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{t(s.titleKey)}</h3>
                <p className={styles.cardDesc}>{t(s.descKey)}</p>
                <div className={styles.tags}>
                  {s.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
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
