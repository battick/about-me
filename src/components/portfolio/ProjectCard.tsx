import { Link } from "react-router-dom";
import type { Project } from "../../types/content";
import { assetUrl } from "../../lib/assetUrl";
import styles from "./ProjectCard.module.css";
export default function ProjectCard({
  project: p,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <article className={styles.card}>
      <Link
        className={styles.cover}
        to={`/projects/${p.slug}`}
        aria-label={`探索项目 ↗：${p.title} 项目详情`}
      >
        <img
          src={assetUrl(p.cover)}
          alt={`${p.title} — ${p.status === "draft" ? "开发样例概念图" : "网站视觉概念图"}`}
          width="1440"
          height="900"
          loading="lazy"
        />
        <span className={styles.view}>探索项目 ↗</span>
        {p.status === "draft" && (
          <span className={styles.draft}>开发样例 · 不公开</span>
        )}
      </Link>
      <div className={styles.info}>
        <div>
          <p className="eyebrow">
            {String(index + 1).padStart(2, "0")} / {p.year} · {p.role}
          </p>
          <h3>
            <Link to={`/projects/${p.slug}`}>
              {p.title} <span>↗</span>
            </Link>
          </h3>
          <p>{p.summary}</p>
        </div>
        <div className="tags">
          {p.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      {p.links.github && (
        <a
          className="text-link"
          href={p.links.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      )}
    </article>
  );
}
