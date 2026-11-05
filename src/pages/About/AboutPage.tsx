import { profile } from "../../content/profile";
import { home } from "../../content/home";
import { experience } from "../../content/experience";
import ContactPanel from "../../components/portfolio/ContactPanel";
export default function AboutPage() {
  return (
    <div className="container page about-page">
      <p className="eyebrow">
        <span>PROFILE /</span> ABOUT ME
      </p>
      <h1>
        你好，我是 {profile.name}
        <span className="blue">.</span>
      </h1>
      <p className="page-intro">{profile.intro}</p>
      <div className="about-long">
        <p>{home.aboutBody}</p>
        <p>
          这个网站会随着作品一起生长。每个项目都有自己的背景、约束和选择；我想把这些过程也保留下来，而不仅是最后的界面。
        </p>
        {profile.school && (
          <h2>
            {profile.school} · {profile.grade}
          </h2>
        )}
        {experience.map((e) => (
          <section className="timeline" key={e.title + e.year}>
            <p className="eyebrow">
              {e.year} / {e.category}
            </p>
            <h2>{e.title}</h2>
            <p>{e.description}</p>
          </section>
        ))}
        {import.meta.env.DEV && (
          <p className="dev-note">
            待补充：学校、年级、150 字个人介绍、3–5 条真实教育与经历。
          </p>
        )}
      </div>
      <ContactPanel />
    </div>
  );
}
