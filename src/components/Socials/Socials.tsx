import { CONTACT } from "../../data/site";
import "./Socials.css";

interface SocialsProps {
  className?: string;
}

const ITEMS = [
  {
    name: "Instagram",
    href: CONTACT.instagram,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5.2" />
        <circle cx="12" cy="12" r="4.2" />
        <circle className="social__spark" cx="17.2" cy="6.8" r="1.15" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: CONTACT.facebook,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          className="social__fill"
          d="M13.6 21v-7.1h2.4l.36-2.79h-2.76V9.33c0-.81.22-1.36 1.38-1.36h1.47V5.47a19.7 19.7 0 0 0-2.15-.11c-2.13 0-3.58 1.3-3.58 3.68v2.06H8.34v2.79h2.35V21z"
        />
      </svg>
    ),
  },
];

/** Sociala medier-länkar som ikon-chips. Fungerar på mörk bakgrund. */
export default function Socials({ className = "" }: SocialsProps) {
  return (
    <ul className={`socials ${className}`.trim()}>
      {ITEMS.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer noopener"
            className="social"
            aria-label={item.name}
          >
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
