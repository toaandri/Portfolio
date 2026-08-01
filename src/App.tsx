import { useEffect, useState } from "react";
import { useGitHub } from "./hooks/useGitHub";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Languages } from "./components/Languages";
import { Notes } from "./components/Notes";
import { Contact } from "./components/Contact";
import { Skeleton, LoadingBar } from "./components/Skeleton";
import { GitHubIcon } from "./components/icons";
import styles from "./components/Footer.module.css";

function Footer({ updated }: { updated: string | null }) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 30000);
    return () => clearInterval(id);
  }, []);

  const when = updated
    ? new Date(updated).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "—";

  return (
    <footer className={`container ${styles.footer}`}>
      <span>© {new Date(now).getFullYear()} toaandri · Built with React</span>
      <span className={styles.syncInfo}>
        <GitHubIcon size={13} /> Synced {when}
      </span>
    </footer>
  );
}

export default function App() {
  useSmoothScroll();
  const { data, loading, error, progress, lastUpdated, refresh } = useGitHub();

  return (
    <div className="grain">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Navbar onRefresh={refresh} refreshing={loading} />
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
            <button
              className="btn btn-primary"
              style={{ marginTop: "var(--space-5)" }}
              onClick={refresh}
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {data && (
        <main id="main-content">
          <Hero data={data} />
          <About data={data} />
          <Projects repos={data.repos} />
          <Languages languages={data.languages} />
          <Notes />
          <Contact />
          <Footer updated={lastUpdated} />
        </main>
      )}
    </div>
  );
}
