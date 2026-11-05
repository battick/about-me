import ContactPanel from "../../../components/portfolio/ContactPanel";
import Reveal from "../../../components/motion/Reveal";
import styles from "./ContactSection.module.css";
export default function ContactSection({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  return (
    <section className={styles.contact}>
      <Reveal className="container">
        <p className="eyebrow">
          <span>04 /</span> LET’S MAKE SOMETHING
        </p>
        {standalone ? (
          <h1>
            下一件有趣的事，
            <br />
            <span>一起做。</span>
          </h1>
        ) : (
          <h2>
            下一件有趣的事，
            <br />
            <span>一起做。</span>
          </h2>
        )}
        <p className={styles.description}>
          一个想法、一次交流，或一段新的合作。
          <br />
          所有有趣的事情，都从一句你好开始。
        </p>
        <ContactPanel />
      </Reveal>
    </section>
  );
}
