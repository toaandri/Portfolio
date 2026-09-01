import { useGitHub } from "./hooks/useGitHub";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { LanguageProvider, useLanguage } from "./lib/LanguageContext";
import { Navbar } from "./components/Navbar";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Skeleton, LoadingBar } from "./components/Skeleton";
import { SpeedInsights } from "@vercel/speed-insights/react";
import styles from "./components/Footer.module.css";

function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  return (
    <footer className={`container ${styles.footer}`}>
      <span>{t("footer.rights", { year })}</span>
    </footer>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

function AppContent() {
  useSmoothScroll();
  const { data, loading, error, progress } = useGitHub();

  return (
    <div className="grain">
      <SpeedInsights />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <LanguageSwitcher />
      <Navbar />
      {loading && !data && <LoadingBar progress={progress} />}
      {loading && !data && <Skeleton />}

      {error && !data && (
        <div className="container" style={{ padding: "var(--space-24) 0" }}>
          <div className="error-banner">
            <h2 style={{ marginBottom: "var(--space-3)" }}>
              <strong>Couldn&apos;t reach GitHub</strong>
            </h2>
            <p>{error}</p>
            <p style={{ marginTop: "var(--space-3)", fontSize: 14 }}>
              The public API allows ~60 requests/hour. Try refreshing shortly.
            </p>
          </div>
        </div>
      )}

      {data && (
        <main id="main-content">
          <Hero portrait="/assets/images/profile-photo.png" />
          <Services />
          <About />
          <Skills />
          <Projects repos={data.repos} />
          <Contact />
          <Footer />
        </main>
      )}
    </div>
  );
}
