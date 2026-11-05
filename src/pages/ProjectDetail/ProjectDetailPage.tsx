import { Link, useParams } from "react-router-dom";
import { projects } from "../../content/projects";
import { assetUrl } from "../../lib/assetUrl";
import NotFound from "../NotFound/NotFoundPage";
export default function ProjectDetailPage() {
  const { slug } = useParams();
  const p = projects.find((p) => p.slug === slug);
  if (!p) return <NotFound />;
  return (
    <article className="container page detail">
      <Link className="text-link" to="/projects">
        ← 返回项目
      </Link>
      <p className="eyebrow">
        {p.year} / {p.role}
      </p>
      {p.status === "draft" && (
        <p className="dev-note">开发样例 · 非真实项目成果</p>
      )}
      <h1>{p.title}</h1>
      <p className="page-intro">{p.summary}</p>
      <div className="tags">
        {p.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <figure>
        <img
          src={assetUrl(p.cover)}
          alt={p.title + " 视觉概念图"}
          width="1440"
          height="900"
        />
        <figcaption>项目视觉概念图 · 实际界面以网站体验为准</figcaption>
      </figure>
      <div className="detail-body">
        {p.sections.map((s, i) => (
          <section key={s.title}>
            <p className="eyebrow">0{i + 1} /</p>
            <h2>{s.title}</h2>
            <p>{s.body}</p>
          </section>
        ))}
      </div>
      {p.gallery?.map((image) => (
        <img
          key={image}
          src={assetUrl(image)}
          alt={p.title + " 界面展示"}
          loading="lazy"
        />
      ))}
      <div className="actions">
        {p.links.github && (
          <a
            className="button primary"
            href={p.links.github}
            target="_blank"
            rel="noreferrer"
          >
            查看源码 ↗
          </a>
        )}
        {p.links.demo && (
          <a
            className="button secondary"
            href={p.links.demo}
            target="_blank"
            rel="noreferrer"
          >
            在线演示 ↗
          </a>
        )}
      </div>
    </article>
  );
}
