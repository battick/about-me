import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <div className="container page missing">
      <p className="eyebrow">404 / OUTSIDE THE LAB</p>
      <h1>这条路，还没写好。</h1>
      <p>页面可能已移动，或项目还未公开。</p>
      <Link className="button primary" to="/">
        回到首页 ↗
      </Link>
    </div>
  );
}
