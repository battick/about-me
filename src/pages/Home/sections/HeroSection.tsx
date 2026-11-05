import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { site } from "../../../config/site";
import { profile } from "../../../content/profile";
import { home } from "../../../content/home";
import { assetUrl } from "../../../lib/assetUrl";
import { useReducedMotion } from "../../../hooks/useReducedMotion";
import styles from "./HeroSection.module.css";
export default function HeroSection() {
  const video = useRef<HTMLVideoElement>(null);
  const section = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState(false);
  const [eligible, setEligible] = useState(false);
  const [inView, setInView] = useState(true);
  useEffect(() => {
    const query = matchMedia("(min-width: 769px)");
    const update = () =>
      setEligible(
        query.matches &&
          !(
            navigator as Navigator & {
              connection?: { saveData?: boolean; effectiveType?: string };
            }
          ).connection?.saveData &&
          !["slow-2g", "2g", "3g"].includes(
            (
              navigator as Navigator & {
                connection?: { effectiveType?: string };
              }
            ).connection?.effectiveType || "",
          ),
      );
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  const active =
    eligible && !reduced && !!(site.hero.mp4 || site.hero.webm) && !failed;
  useEffect(() => {
    if (!section.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setInView(entry.isIntersecting),
    );
    observer.observe(section.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const sync = () => {
      if (!video.current) return;
      if (active && inView && !paused && !document.hidden)
        video.current.play().catch(() => setFailed(true));
      else video.current.pause();
    };
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, [active, paused, inView]);
  return (
    <section ref={section} className={styles.hero} aria-label="个人数字实验室">
      <img
        className={styles.art}
        src={assetUrl(site.hero.poster)}
        alt=""
        width="1600"
        height="1100"
        fetchPriority="high"
      />
      {active && (
        <video
          ref={video}
          className={styles.art}
          muted
          loop
          playsInline
          poster={assetUrl(site.hero.poster)}
          onError={() => setFailed(true)}
        >
          {site.hero.webm && (
            <source src={assetUrl(site.hero.webm)} type="video/webm" />
          )}
          {site.hero.mp4 && (
            <source src={assetUrl(site.hero.mp4)} type="video/mp4" />
          )}
        </video>
      )}
      <div className={styles.shade} />
      <div className={"container " + styles.inner}>
        <p className={"eyebrow " + styles.label}>
          <span className="status-dot" /> {profile.field} · SELECTED WORK
        </p>
        <h1>
          {home.hero[0]}
          <br />
          <span>{home.hero[1]}</span>
        </h1>
        <p className={styles.intro}>{profile.intro}</p>
        <div className="actions">
          <Link to="/projects" className="button primary">
            查看项目 <span>↗</span>
          </Link>
          <Link to="/contact" className="button secondary">
            联系我 <span>↗</span>
          </Link>
        </div>
        <div className={styles.bottom}>
          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: reduced ? "instant" : "smooth" })
            }
          >
            向下探索 <span>↓</span>
          </button>
          <span>
            PERSONAL ARCHIVE / 2026
            <br />
            <b>持续探索，未完待续。</b>
          </span>
        </div>
      </div>
      {active && (
        <button
          className={styles.pause}
          onClick={() => setPaused(!paused)}
          aria-label={paused ? "播放背景视频" : "暂停背景视频"}
        >
          {paused ? "播放 ▶" : "暂停 Ⅱ"}
        </button>
      )}
    </section>
  );
}
