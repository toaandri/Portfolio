import { useLanguage } from "../lib/LanguageContext";
import styles from "./LanguageSwitcher.module.css";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={styles.switcher}>
      <button
        className={`${styles.btn} ${language === "fr" ? styles.active : ""}`}
        onClick={() => setLanguage("fr")}
        aria-label="Français"
      >
        FR
      </button>
      <span className={styles.sep}>|</span>
      <button
        className={`${styles.btn} ${language === "en" ? styles.active : ""}`}
        onClick={() => setLanguage("en")}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
