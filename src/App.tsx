import { useEffect, useState } from "react";
import { useGitHub } from "./hooks/useGitHub";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Languages } from "./components/Languages";
import { Contact } from "./components/Contact";
import { Skeleton, LoadingBar } from "./components/Skeleton";
import { GitHubIcon } from "./components/icons";

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
    <footer className="footer container">
      <span>© {new Date(now).getFullYear()} toaandri · Built with React</span>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
        <GitHubIcon size={13} /> Synced {when}
      </span>
    </footer>
  );
}

export default function App() {
  const { data, loading, error, progress, lastUpdated, refresh } = useGitHub();

  return (
    <>
      <Navbar onRefresh={refresh} refreshing={loading} />
      {loading && !data && <LoadingBar progress={progress} />}

      {loading && !data && <Skeleton />}

      {error && !data && (
        <div className="container" style={{ padding: "120px 0" }}>
          <div className="error-banner">
            <h2 style={{ marginBottom: 12 }}>
              <strong>Couldn't reach GitHub</strong>
            </h2>
            <p>{error}</p>
            <p style={{ marginTop: 12, fontSize: 14 }}>
              The public API allows ~60 requests/hour. Try refreshing shortly.
            </p>
            <button
              className="btn btn-primary"
              style={{ marginTop: 20 }}
              onClick={refresh}
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {data && (
        <main>
          <Hero data={data} />
          <About data={data} />
          <Projects repos={data.repos} />
          <Languages languages={data.languages} />
          <Contact />
          <Footer updated={lastUpdated} />
        </main>
      )}
    </>
  );
}
