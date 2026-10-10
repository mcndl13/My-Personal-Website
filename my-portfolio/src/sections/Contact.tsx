import Arrow from "../components/Arrow";
import { profile } from "../data/portfolio";
export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-content">
        <span className="eyebrow contact-eyebrow">05 / CONTACT</span>
        <h2>
          Let's build
          <br />
          <em>something useful.</em>
        </h2>
        <p>
          I'm open to software engineering opportunities and conversations about
          building reliable, thoughtful products.
        </p>
        <a href={`mailto:${profile.email}`} className="contact-mail">
          {profile.email} <Arrow diagonal />
        </a>
        <div className="contact-bottom">
          <span>SOFTWARE ENGINEER · MONTRÉAL, QUÉBEC</span>
          <div>
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB ↗︎
              </a>
            )}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN ↗︎
              </a>
            )}
            {profile.resume && (
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                RÉSUMÉ ↗︎
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
