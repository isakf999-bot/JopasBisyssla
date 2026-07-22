import type { ReactNode } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Reveal.css";

interface RevealProps {
  children: ReactNode;
  /** Riktning på animationen. */
  variant?: "up" | "fade" | "left" | "right" | "scale";
  /** Fördröjning i ms för stagger-effekt. */
  delay?: number;
  className?: string;
}

export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
}: RevealProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal reveal--${variant} ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
