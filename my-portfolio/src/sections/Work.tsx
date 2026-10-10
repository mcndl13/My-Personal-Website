import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolio";
export default function Work() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.filter((p) => p.featured);
  return (
    <section id="work" className="work-section section-block">
      <div className="container">
        <SectionHeading
          index="01"
          label="PROJECTS"
          title={
            <>
              Selected <em>engineering.</em>
            </>
          }
          aside="Full-stack applications, data systems and machine learning work. A closer look at what I built and how."
        />
        <div className="projects-grid">
          {visible.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.title} />
          ))}
        </div>
        {projects.some((p) => !p.featured) && (
          <button
            type="button"
            className="show-more"
            aria-expanded={showAll}
            onClick={() => setShowAll((x) => !x)}
          >
            {showAll ? "Show selected projects" : "Explore more work"}{" "}
            <span aria-hidden="true">{showAll ? "↑︎" : "↓︎"}</span>
          </button>
        )}
      </div>
    </section>
  );
}
