import Arrow from "./Arrow";
import ProjectVisual from "./ProjectVisual";
import type { Project } from "../data/portfolio";
export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="project-card">
      <div className="project-image">
        <ProjectVisual type={project.visual} />
        <span className="project-index eyebrow">
          {String(index + 1).padStart(2, "0")} / {project.kind.toUpperCase()}
        </span>
      </div>
      <div className="project-heading">
        <h3>{project.title}</h3>
        {(project.repo || project.demo) && <span aria-hidden="true">↗︎</span>}
      </div>
      <p className="project-description">{project.summary}</p>
      <ul className="project-highlights">
        {project.contributions.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="project-bottom">
        <div className="tags">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        {(project.repo || project.demo) && (
          <div className="project-links">
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                Code <Arrow diagonal />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Demo <Arrow diagonal />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
