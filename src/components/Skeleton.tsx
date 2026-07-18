import { ClockIcon } from "./icons";

export function Skeleton() {
  return (
    <div className="container">
      <div className="hero" style={{ paddingTop: 80 }}>
        <div className="hero-grid">
          <div className="skeleton sk-avatar" />
          <div>
            <div className="skeleton sk-line" style={{ width: 280, height: 36 }} />
            <div
              className="skeleton sk-line"
              style={{ width: 120, height: 16, marginTop: 12 }}
            />
            <div
              className="skeleton sk-line"
              style={{ width: "100%", height: 16, marginTop: 20 }}
            />
            <div
              className="skeleton sk-line"
              style={{ width: "80%", height: 16, marginTop: 10 }}
            />
            <div style={{ display: "flex", gap: 28, marginTop: 28 }}>
              {[0, 1, 2, 3].map((i) => (
                <div key={i} style={{ width: 80 }}>
                  <div className="skeleton sk-line" style={{ height: 24 }} />
                  <div
                    className="skeleton sk-line"
                    style={{ height: 12, marginTop: 8, width: 60 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="skeleton sk-line" style={{ width: 160, height: 28 }} />
        <div className="repo-grid" style={{ marginTop: 32 }}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="skeleton sk-block" />
          ))}
        </div>
      </div>
    </div>
  );
}

interface LoadingBarProps {
  progress: number;
}

export function LoadingBar({ progress }: LoadingBarProps) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        background: "transparent",
        zIndex: 100,
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: "var(--accent)",
          transition: "width 300ms var(--ease-out)",
          boxShadow: "0 0 8px var(--accent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 8,
          right: 12,
          fontSize: 12,
          color: "var(--text-faint)",
          display: "inline-flex",
          alignItems: "center",
          gap: 5,
        }}
      >
        <ClockIcon size={12} /> Fetching GitHub… {progress}%
      </div>
    </div>
  );
}
