import StarChart from "../components/StarChart";
import Arrow from "../components/Arrow";
import { profile } from "../data/portfolio";
export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-meta">
          <span className="eyebrow">
            <span className="live-dot" /> SOFTWARE ENGINEER / MONTRÉAL
          </span>
          <span className="eyebrow muted">SELECTED WORK / 2026</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow accent">HELLO, I'M MOUHAMED.</span>
            <h1 id="hero-title">
              Software
              <br />
              <em>Engineer.</em>
              <span className="hero-star" aria-hidden="true">
                ✳︎
              </span>
            </h1>
            <p className="hero-intro">
              Software Engineer graduate. I build web and mobile software, work
              across frontend and backend systems, and explore data and AI
              through hands-on projects.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#work">
                Explore projects <Arrow diagonal />
              </a>
              <a className="text-link" href={`mailto:${profile.email}`}>
                Contact me <Arrow />
              </a>
            </div>
            <p className="availability">
              <span className="live-dot" /> OPEN TO SOFTWARE ENGINEERING
              OPPORTUNITIES
            </p>
          </div>
          <div className="hero-visual">
            <span className="hero-figure-label eyebrow">
              FIG 01 / ENGINEER & EXPLORER
            </span>
            <StarChart className="hero-stars" id="hero-field" />
            <figure className="portrait-wrap">
              <img
                className="portrait"
                src="/assets/07851.png"
                alt="Portrait of Mouhamed"
                width="1239"
                height="1222"
                fetchPriority="high"
              />
              <figcaption className="portrait-stamp">
                BUILD / LEARN / ITERATE ↗︎
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="hero-footnote">
          <span>SOFTWARE · SYSTEMS · CURIOSITY</span>
          <a href="#work">EXPLORE WORK ↓︎</a>
        </div>
      </div>
    </section>
  );
}
