import SectionHeading from "../components/SectionHeading";
import { skills } from "../data/portfolio";
export default function Skills() {
  return (
    <section className="skills-section section-block" id="skills">
      <div className="container">
        <SectionHeading
          index="02"
          label="TECHNICAL SKILLS"
          title={
            <>
              My <em>toolkit.</em>
            </>
          }
          aside="Technologies used across internships, coursework and personal projects."
        />
        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skills-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
