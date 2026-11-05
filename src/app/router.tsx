import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";
const Home = lazy(() => import("../pages/Home/HomePage"));
const Projects = lazy(() => import("../pages/Projects/ProjectsPage"));
const Detail = lazy(() => import("../pages/ProjectDetail/ProjectDetailPage"));
const About = lazy(() => import("../pages/About/AboutPage"));
const Contact = lazy(() => import("../pages/Contact/ContactPage"));
const Missing = lazy(() => import("../pages/NotFound/NotFoundPage"));
export function AppRoutes() {
  return (
    <Suspense fallback={<p className="loading">正在进入实验室…</p>}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<Detail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
// Notes / Lab / Now 内容就绪后在此接入懒加载路由。
