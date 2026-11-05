import { Link } from "react-router-dom";
import { home } from "../../../content/home";
import { profile } from "../../../content/profile";
import { experience } from "../../../content/experience";
import { assetUrl } from "../../../lib/assetUrl";
import Reveal from "../../../components/motion/Reveal";
import styles from "./AboutSection.module.css";
export default function AboutSection() {
  return (
    <section id="about" className="section container">
      <Reveal className={styles.grid}>
        <div className={styles.portrait}>
          {profile.portrait ? (
            <img
              src={assetUrl(profile.portrait)}
              alt={profile.name}
              width="640"
              height="760"
              loading="lazy"
            />
          ) : (
            <>
              <span className={styles.cross}>+</span>
              <span className={styles.letter}>
                {profile.initials}
                <i>.</i>
              </span>
              <p>THE PERSON BEHIND THE CODE</p>
            </>
          )}
          <span className={styles.serial}>PROFILE / 001</span>
        </div>
        <div className={styles.copy}>
          <p className="eyebrow">
            <span>01 /</span> ABOUT ME
          </p>
          <h2>
            {home.about}
            <br />
            <span>{home.aboutAccent}</span>
          </h2>
          <p>{home.aboutBody}</p>
          {profile.school && (
            <p>
              {profile.school} · {profile.grade}
            </p>
          )}
          {experience.slice(0, 3).map((item) => (
            <div className="timeline" key={item.year + item.title}>
              <span>
                {item.year} / {item.category}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
          {import.meta.env.DEV && (
            <p className="dev-note">待填：学校 / 年级 / 个人介绍 / 真实经历</p>
          )}
          <Link to="/about" className="text-link">
            认识更多的我 <span>↗</span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
