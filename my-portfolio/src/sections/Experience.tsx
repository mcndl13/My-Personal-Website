import SectionHeading from "../components/SectionHeading";
import { experience } from "../data/portfolio";
export default function Experience() {
  return (
    <section className="experience-section section-block" id="experience">
      <div className="container">
        <SectionHeading
          index="03"
          label="EXPERIENCE"
          title={
            <>
              Engineering in <em>practice.</em>
            </>
          }
          aside="Industry experience in software development, testing, data and cross-functional delivery."
        />
        <div className="experience-list">
          {experience.map((job) => (
            <article key={job.company} className="experience-row">
              <div className="experience-logo">
                <img
                  src={job.logo}
                  loading="lazy"
                  alt={`${job.company} logo`}
                />
              </div>
              <div className="experience-description">
                <div className="experience-heading-row">
                  <div>
                    <h3>{job.position}</h3>
                    <p className="experience-company">
                      {job.company} <span>· {job.location}</span>
                    </p>
                  </div>
                  <time className="experience-date">{job.period}</time>
                </div>
                <ul className="experience-bullets">
                  <li className="experience-summary">{job.impact}</li>
                  {job.achievements.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="experience-tags">
                  {job.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
