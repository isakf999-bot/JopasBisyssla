import type { ReactNode } from "react";
import Reveal from "../Reveal/Reveal";
import "./SectionHeading.css";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
  className = "",
}: SectionHeadingProps) {
  const Tag = as;
  return (
    <header className={`sec-head sec-head--${align} ${className}`.trim()}>
      {eyebrow && (
        <Reveal variant="fade">
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal variant="up" delay={60}>
        <Tag className="sec-head__title">{title}</Tag>
      </Reveal>
      {description && (
        <Reveal variant="up" delay={120}>
          <p className="sec-head__desc lead">{description}</p>
        </Reveal>
      )}
    </header>
  );
}
