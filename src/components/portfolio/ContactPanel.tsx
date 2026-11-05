import { useState } from "react";
import { profile } from "../../content/profile";
import { assetUrl } from "../../lib/assetUrl";
export default function ContactPanel() {
  const [status, setStatus] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus("邮箱已复制");
    } catch {
      setStatus("复制失败，请选择邮箱文字复制，或使用邮件链接。");
    }
  }
  return (
    <div className="contact-panel">
      {profile.email ? (
        <>
          <a className="email" href={`mailto:${profile.email}`}>
            {profile.email} ↗
          </a>
          <button className="text-link" onClick={copy}>
            复制邮箱 ⧉
          </button>
          <p role="status">{status}</p>
        </>
      ) : (
        <a
          className="email"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          在 GitHub 找到我 ↗
        </a>
      )}
      <div className="contact-links">
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        {profile.resume && <a href={assetUrl(profile.resume)}>下载简历 ↓</a>}
        {import.meta.env.DEV && !profile.email && (
          <span className="dev-note">待填：邮箱 · 简历 · 社交链接</span>
        )}
      </div>
    </div>
  );
}
