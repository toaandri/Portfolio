import { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalPanProps {
  children: ReactNode;
}

export function HorizontalPan({ children }: HorizontalPanProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !wrap.current || !track.current) return;

    const ctx = gsap.context(() => {
      const distance = track.current!.scrollWidth - window.innerWidth;

      if (distance <= 0) return;

      gsap.to(track.current, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top 96px",
          end: () => `+=${distance}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrap);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section ref={wrap} style={{ position: "relative", overflow: "hidden" }}>
      <div ref={track} style={{ display: "flex", alignItems: "center", minHeight: "calc(100dvh - 200px)" }}>
        {children}
      </div>
    </section>
  );
}
