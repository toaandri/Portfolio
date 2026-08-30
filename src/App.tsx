import { useGitHub } from "./hooks/useGitHub";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Skeleton, LoadingBar } from "./components/Skeleton";
import styles from "./components/Footer.module.css";

function Footer() {
  return (
    <footer className={`container ${styles.footer}`}>
      <span>© {new Date().getFullYear()} Maharavo · Front-End Developer</span>
    </footer>
  );
}

export default function App() {
  useSmoothScroll();
  const { data, loading, error, progress } = useGitHub();

  return (
    <div className="grain">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

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
          <Hero portrait={data.user.avatar_url} />
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
