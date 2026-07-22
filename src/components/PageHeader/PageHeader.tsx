import type { ReactNode } from "react";
import Reveal from "../Reveal/Reveal";
import "./PageHeader.css";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}

/** Enhetlig sidhuvud-hero för undersidor. */
export default function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <header className="page-header">
      <div className="page-header__bg" aria-hidden="true" />
      <div className="container page-header__inner">
        <Reveal variant="fade">
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
        <Reveal variant="up" delay={80}>
          <h1 className="page-header__title">{title}</h1>
        </Reveal>
        {intro && (
          <Reveal variant="up" delay={160}>
            <p className="page-header__intro lead">{intro}</p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
