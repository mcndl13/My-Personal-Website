import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Arrow from "./Arrow";
import { profile } from "../data/portfolio";
const links = [
  { name: "Work", hash: "#work" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "About", hash: "#about" },
];
export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label="Mouhamed — home">
          m<span>.</span>kc
          <span className="brand-mark" aria-hidden="true">
            ✳︎
          </span>
        </a>
        <nav
          id="primary-navigation"
          aria-label="Primary navigation"
          className={`nav-links ${open ? "is-open" : ""}`}
        >
          {links.map((link) => (
            <a key={link.hash} href={link.hash} onClick={() => setOpen(false)}>
              {link.name}
            </a>
          ))}
          <a
            className="mobile-contact"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Contact <Arrow diagonal />
          </a>
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          {profile.resume && (
            <a
              className="nav-resume"
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé ↗︎
            </a>
          )}
          {profile.github && (
            <a
              className="nav-social"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
          )}
          {profile.linkedin && (
            <a
              className="nav-social"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
          )}
          <a href={`mailto:${profile.email}`} className="nav-contact">
            Get in touch <Arrow diagonal />
          </a>
          <button
            className="menu-button"
            type="button"
            aria-controls="primary-navigation"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((previous) => !previous)}
          >
            {open ? "Close ×" : "Menu ☰︎"}
          </button>
        </div>
      </div>
    </header>
  );
}
