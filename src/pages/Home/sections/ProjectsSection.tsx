import { Link } from "react-router-dom";
import { projects } from "../../../content/projects";
import ProjectCard from "../../../components/portfolio/ProjectCard";
import SectionHeading from "../../../components/ui/SectionHeading";
import Reveal from "../../../components/motion/Reveal";
export default function ProjectsSection() {
  return (
    <section className="section container" id="work">
      <div className="heading-row">
        <SectionHeading
          number="02"
          label="SELECTED WORK"
          title="一些想法，已经发生。"
        />
        <Link className="text-link" to="/projects">
          全部项目 ↗
        </Link>
      </div>
      <div className="project-grid">
        {projects
          .filter((p) => p.featured)
          .slice(0, 4)
          .map((p, i) => (
            <Reveal key={p.slug}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
      </div>
    </section>
  );
}
