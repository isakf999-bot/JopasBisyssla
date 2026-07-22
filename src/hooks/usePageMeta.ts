import { useEffect } from "react";

interface PageMeta {
  title: string;
  description?: string;
}

const BASE_TITLE = "Jopas Honung";

/** Sätter document.title och meta-description per sida (klient-side SEO). */
export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = `${title} · ${BASE_TITLE}`;

    if (description) {
      let tag = document.querySelector<HTMLMetaElement>(
        'meta[name="description"]'
      );
      if (!tag) {
        tag = document.createElement("meta");
        tag.name = "description";
        document.head.appendChild(tag);
      }
      tag.content = description;
    }
  }, [title, description]);
}
