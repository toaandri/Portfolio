import { Reveal } from "./Reveal";
import { useLanguage } from "../lib/LanguageContext";
import styles from "./About.module.css";

const stepsKeys = [
  { num: "01", labelKey: "about.step1" },
  { num: "02", labelKey: "about.step2" },
  { num: "03", labelKey: "about.step3" },
];

const metricsKeys = [
  { value: "12+", labelKey: "about.repos" },
  { value: "06+", labelKey: "about.projects" },
  { value: "04+", labelKey: "about.languages" },
];

export function About() {
  const { t } = useLanguage();

  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal as="h2" className={styles.title} delay={0.05}>
          {t("about.title")}
        </Reveal>
        <Reveal as="p" className={styles.bio} delay={0.1}>
          {t("about.bio")}
        </Reveal>

        <div className={styles.approachTitle}>{t("about.approach")}</div>
        <div className={styles.approachWrap}>
          {stepsKeys.map((s, i) => (
            <Reveal key={s.num} delay={0.1 * i} className={styles.step}>
              <span className={styles.stepNum}>{s.num}</span>
              <span>{t(s.labelKey)}</span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className={styles.metrics}>
            {metricsKeys.map((m) => (
              <div key={m.labelKey} className={styles.metric}>
                <strong>{m.value}</strong>
                <span>{t(m.labelKey)}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
