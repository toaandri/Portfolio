import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const EASE = [0.23, 1, 0.32, 1] as const;

interface RevealProps {
  children: ReactNode;
  delay?: number;
  as?: "div" | "span" | "h2" | "p";
  className?: string;
}

type AllowedTags = "div" | "span" | "h2" | "p";

export function Reveal({
  children,
  delay = 0,
  as = "div" as AllowedTags,
  className,
  ...rest
}: RevealProps & Record<string, unknown>) {
  const Tag = motion[as as keyof typeof motion] as React.ComponentType<
    ComponentPropsWithoutRef<typeof motion.div> & Record<string, unknown>
  >;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

interface MaskTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "span" | "h1" | "h2";
}

export function MaskText({ text, className, delay = 0, as = "span" }: MaskTextProps) {
  const Tag = as;
  return (
    <span className={"mask-line " + (className || "")}>
      <motion.span
        initial={{ y: "115%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.85, ease: EASE, delay }}
        className="mask-inner"
      >
        <Tag>{text}</Tag>
      </motion.span>
    </span>
  );
}