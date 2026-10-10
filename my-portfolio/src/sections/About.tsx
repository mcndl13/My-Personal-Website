import SectionHeading from "../components/SectionHeading";
export default function About() {
  return (
    <section className="about-section section-block" id="about">
      <div className="container">
        <SectionHeading
          index="04"
          label="ABOUT"
          title={
            <>
              Beyond the <em>editor.</em>
            </>
          }
        />
        <div className="about-grid">
          <div className="about-lead">
            An engineer driven by <em>curiosity,</em> grounded in practice.
          </div>
          <div className="about-detail">
            <p>
              I enjoy turning complex problems into useful, maintainable
              software.
            </p>
            <p>
              Beyond engineering, I'm drawn to mathematics, physics, artificial
              intelligence, philosophy, sports and training. Curiosity pushes me
              to ask better questions, discipline helps me follow through.
            </p>
            <div className="education">
              <span className="eyebrow accent">EDUCATION</span>
              <strong>Concordia University</strong>
              <span>B.Eng. Software Engineering · With Distinction · 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
