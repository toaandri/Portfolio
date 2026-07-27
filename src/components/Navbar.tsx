import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import { GitHubIcon, MoonIcon, SunIcon } from "./icons";
import styles from "./Navbar.module.css";

interface NavbarProps {
  onRefresh: () => void;
  refreshing: boolean;
}

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Languages", href: "#languages" },
  { label: "Notes", href: "#notes" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({ onRefresh, refreshing }: NavbarProps) {
  const { theme, toggle } = useTheme();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.5,
  });

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
      }
      if (e.key === "Tab" && overlayRef.current) {
        const focusable = overlayRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.div
        className="scroll-progress"
        style={{ scaleX: progress, opacity: scrolled ? 1 : 0 }}
      >
        <span />
      </motion.div>

      <nav className={styles.navbar} role="navigation" aria-label="Main navigation">
        <div className={styles.inner}>
          <a href="#top" className={styles.brand}>
            <span className={styles.mark} aria-hidden="true" />
            toaandri
          </a>

          {/* Desktop links */}
          <div className={styles.links}>
            {navItems.map(({ label, href }) => (
              <a key={href} href={href} className={styles.link}>
                {label}
              </a>
            ))}
            <button
              className={styles.refreshBtn}
              onClick={onRefresh}
              aria-label="Refresh GitHub data"
              title="Refresh GitHub data"
            >
              <GitHubIcon size={14} className={refreshing ? styles.spinning : ""} />
              Sync
            </button>
            <button
              className={styles.themeToggle}
              onClick={toggle}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            </button>
          </div>

          {/* Hamburger */}
          <button
            ref={hamburgerRef}
            className={styles.hamburger}
            onClick={() => setMenuOpen((o) => !o)}
            data-open={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        ref={overlayRef}
        id="mobile-menu"
        className={styles.overlay}
        data-open={menuOpen}
        role="dialog"
        aria-label="Mobile navigation"
      >
        {navItems.map(({ label, href }) => (
          <a key={href} href={href} className={styles.link} onClick={closeMenu}>
            {label}
          </a>
        ))}
        <button
          className={styles.refreshBtn}
          onClick={() => { onRefresh(); closeMenu(); }}
        >
          <GitHubIcon size={16} className={refreshing ? styles.spinning : ""} />
          Sync
        </button>
        <button
          className={`${styles.themeToggle} ${styles.themeToggleBtn}`}
          onClick={() => { toggle(); closeMenu(); }}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <SunIcon size={20} /> : <MoonIcon size={20} />}
        </button>
      </div>
    </>
  );
}
