import { useTheme } from "../hooks/useTheme";
import { GitHubIcon, MoonIcon, SunIcon } from "./icons";

interface NavbarProps {
  onRefresh: () => void;
  refreshing: boolean;
}

export function Navbar({ onRefresh, refreshing }: NavbarProps) {
  const { theme, toggle } = useTheme();

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="nav-brand">
          <span className="dot" />
          toaandri
        </a>
        <div className="nav-links">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#languages" className="nav-link">
            Languages
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          <button
            className="refresh-btn"
            onClick={onRefresh}
            aria-label="Refresh GitHub data"
            title="Refresh GitHub data"
          >
            <GitHubIcon size={14} className={refreshing ? "spinning" : ""} />
            Sync
          </button>
          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
