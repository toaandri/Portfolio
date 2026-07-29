import { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

interface StickyStackProps {
  cards: ReactNode[];
}

export function StickyStack({ cards }: StickyStackProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !ref.current || cards.length < 2) return;

    const ctx = gsap.context(() => {
      const cardEls = gsap.utils.toArray<HTMLElement>(".stack-card");

      cardEls.forEach((card, i) => {
        if (i === cardEls.length - 1) return;

        ScrollTrigger.create({
          trigger: card,
          start: "top 96px",
          endTrigger: cardEls[cardEls.length - 1],
          end: "top 96px",
          pin: true,
          pinSpacing: false,
        });

        gsap.to(card, {
          scale: 0.92,
          opacity: 0.4,
          filter: "blur(4px)",
          ease: "none",
          scrollTrigger: {
            trigger: cardEls[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, [reduce, cards.length]);

  return (
    <div ref={ref} className="sticky-stack">
      {cards.map((card, i) => (
        <div
          key={i}
          className="stack-card"
          style={{
            position: "sticky",
            top: "96px",
            minHeight: "calc(100dvh - 140px)",
            display: "flex",
            alignItems: "center",
          }}
        >
          {card}
        </div>
      ))}
    </div>
  );
}
