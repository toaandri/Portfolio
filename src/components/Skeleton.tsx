import { ClockIcon } from "./icons";

export function Skeleton() {
  return (
    <div className="container">
      <div className="hero" style={{ paddingTop: 70 }}>
        <div className="hero-grid">
          <div>
            <div className="skeleton sk-line" style={{ width: 220, height: 16 }} />
            <div
              className="skeleton sk-line"
              style={{ width: "90%", height: 64, marginTop: 22 }}
            />
            <div
              className="skeleton sk-line"
              style={{ width: "70%", height: 16, marginTop: 20 }}
            />
            <div
              className="skeleton sk-line"
              style={{ width: "100%", height: 16, marginTop: 14 }}
            />
            <div
              className="skeleton sk-line"
              style={{ width: "60%", height: 16, marginTop: 10 }}
            />
            <div style={{ display: "flex", gap: 38, marginTop: 30 }}>
              {[0, 1, 2, 3].map((i) => (
                <div key={i} style={{ width: 90 }}>
                  <div className="skeleton sk-line" style={{ height: 30 }} />
                  <div
                    className="skeleton sk-line"
                    style={{ height: 12, marginTop: 10, width: 64 }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="skeleton sk-line" style={{ width: 176, height: 176, borderRadius: 28 }} />
        </div>
      </div>

      <div className="section">
        <div className="skeleton sk-line" style={{ width: 200, height: 40 }} />
        <div className="repo-grid" style={{ marginTop: 40 }}>
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
        height: 3,
        zIndex: 100,
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: "linear-gradient(90deg, var(--accent-deep), var(--accent-soft))",
          transition: "width 300ms var(--ease-out)",
          boxShadow: "0 0 10px var(--accent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 10,
          right: 14,
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
