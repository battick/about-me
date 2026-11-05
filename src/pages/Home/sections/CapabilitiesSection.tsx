import { Link } from "react-router-dom";
import { capabilities } from "../../../content/capabilities";
import SectionHeading from "../../../components/ui/SectionHeading";
import Reveal from "../../../components/motion/Reveal";
import styles from "./CapabilitiesSection.module.css";
export default function CapabilitiesSection() {
  return (
    <section className="section container">
      <SectionHeading
        number="03"
        label="TOOLKIT & MINDSET"
        title="不止于代码。"
      />
      <div className={styles.grid}>
        {capabilities
          .filter((c) => c.evidence || import.meta.env.DEV)
          .map((c) => (
            <Reveal key={c.number} className={styles.card}>
              <div className={styles.top}>
                <span>{c.number}</span>
                <span>{c.english}</span>
                <span aria-hidden="true">
                  {c.number === "01"
                    ? "⌘"
                    : c.number === "02"
                      ? "⌗"
                      : c.number === "03"
                        ? "∑"
                        : "↗"}
                </span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.description}</p>
              <div className="tags">
                {c.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              {c.evidence ? (
                <Link className="text-link" to={c.evidence}>
                  {c.label} ↗
                </Link>
              ) : (
                <p className="dev-note">待补充真实证据，生产页面隐藏</p>
              )}
            </Reveal>
          ))}
      </div>
    </section>
  );
}
