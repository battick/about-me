import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { navigation } from "../../config/navigation";
import { profile } from "../../content/profile";
import { site } from "../../config/site";
export default function SiteLayout() {
  const location = useLocation();
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    setMenu(false);
    window.scrollTo(0, 0);
    const names: Record<string, string> = {
      "/": "个人数字实验室",
      "/projects": "项目",
      "/about": "关于",
      "/contact": "联系",
    };
    document.title = (names[location.pathname] || "项目档案") + " — battick";
  }, [location.pathname]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <>
      <a
        className="skip"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main")?.focus();
        }}
      >
        跳到主要内容
      </a>
      <header className={scrolled ? "header scrolled" : "header"}>
        <div className="container header-inner">
          <Link to="/" className="brand">
            <span className="brand-mark">
              b<span>.</span>
            </span>
            <span>
              battick<span className="brand-sub"> / DIGITAL LAB</span>
            </span>
          </Link>
          <button
            className="menu-toggle"
            aria-expanded={menu}
            aria-controls="site-nav"
            onClick={() => setMenu(!menu)}
          >
            {menu ? "关闭 ×" : "菜单 ☰"}
          </button>
          <nav
            id="site-nav"
            className={menu ? "nav open" : "nav"}
            aria-label="主导航"
          >
            {navigation
              .filter((n) => !n.hidden)
              .map((n) => (
                <NavLink key={n.to} to={n.to} end>
                  {n.label}
                </NavLink>
              ))}
            <Link className="nav-contact" to="/contact">
              聊聊想法 <span>↗</span>
            </Link>
          </nav>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="container footer">
        <Link to="/" className="footer-brand">
          {profile.name}
          <span> · 保持好奇，持续创造。</span>
        </Link>
        <p>
          © {new Date().getFullYear()} · UPDATED {site.updated}
        </p>
        <button
          className="text-link"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "instant"
                : "smooth",
            })
          }
        >
          返回顶部 ↑
        </button>
      </footer>
    </>
  );
}
