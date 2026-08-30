import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import styles from "./Navbar.module.css";

interface NavbarProps {
  onRefresh?: () => void;
  refreshing?: boolean;
}

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

export function Navbar(_props: NavbarProps) {
  const { scrollY } = useScroll();
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

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 12);
  });

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
          <a href="#top" className={styles.brand} aria-label="Go to home section">
            vm
          </a>

          <div className={styles.links}>
            {navItems.map(({ label, href }) => (
              <a key={href} href={href} className={styles.link}>
                {label}
              </a>
            ))}
            <a href="#contact" className={styles.ctaButton}>
              Let&apos;s Talk
            </a>
          </div>

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
        <a href="#contact" className={styles.ctaButton} onClick={closeMenu}>
          Let&apos;s Talk
        </a>
      </div>
    </>
  );
}
