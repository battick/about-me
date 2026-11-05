import { useState } from "react";
import { projects } from "../../content/projects";
import { filterProjects } from "../../lib/content";
import ProjectCard from "../../components/portfolio/ProjectCard";
export default function ProjectsPage() {
  const [tag, setTag] = useState("全部");
  const tags = ["全部", ...new Set(projects.flatMap((p) => p.tags))];
  const filtered = filterProjects(projects, tag);
  return (
    <div className="container page">
      <p className="eyebrow">
        <span>ARCHIVE /</span> PROJECTS
      </p>
      <h1>想法的落点。</h1>
      <p className="page-intro">
        从想法出发，在实践中留下痕迹。这里收藏每一次探索。
      </p>
      <div className="filters" aria-label="按技术筛选">
        {tags.map((t) => (
          <button key={t} aria-pressed={tag === t} onClick={() => setTag(t)}>
            {t}
          </button>
        ))}
      </div>
      <p className="eyebrow" role="status">
        {String(filtered.length).padStart(2, "0")} 个项目
      </p>
      <div className="project-grid">
        {filtered.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}
