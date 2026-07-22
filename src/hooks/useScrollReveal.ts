import { useEffect, useRef, useState } from "react";

interface Options {
  /** Andel synligt innan trigger. */
  threshold?: number;
  /** Marginal runt roten (t.ex. "-60px" för tidigare/senare trigger). */
  rootMargin?: string;
  /** Avfyra bara en gång. */
  once?: boolean;
}

/**
 * Litet IntersectionObserver-hook för scroll-reveal. Faller tillbaka
 * till "synlig" direkt om observer saknas eller användaren föredrar
 * reducerad rörelse – innehåll göms aldrig permanent.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.16,
  rootMargin = "0px 0px -8% 0px",
  once = true,
}: Options = {}) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, visible };
}
