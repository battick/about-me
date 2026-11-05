import type { Project } from "../../types/content";
export const portfolio: Project = {
  slug: "dark-lab",
  title: "DARK LAB",
  summary: "一间用来收藏想法、代码与作品的个人数字实验室。",
  year: "2026",
  role: "个人网站 · 设计与开发",
  tags: ["React", "TypeScript", "Vite"],
  cover: "images/projects/dark-lab/cover.svg",
  featured: true,
  order: 1,
  status: "published",
  links: { github: "https://github.com/battick/about-me" },
  sections: [
    {
      title: "背景",
      body: "把分散的个人介绍与作品整理为一份可探索、可持续维护的档案。这个网站本身，是档案中的第一件作品。",
    },
    {
      title: "目标与约束",
      body: "纯静态部署，不依赖数据库；兼顾桌面与手机；个人内容与展示组件分离，缺失的信息与链接按配置隐藏。",
    },
    {
      title: "我的贡献",
      body: "这是个人网站项目。当前版本完成了视觉布局、内容模型、路由、项目筛选和部署工作流。源码由 AI 辅助实现；这里如实呈现项目交付内容，不将辅助生成的代码作为个人独立能力证明。",
    },
    {
      title: "技术选择",
      body: "React 与 TypeScript 管理界面和内容类型；Vite 构建静态资源；HashRouter 适应 GitHub Pages 子路径；CSS 与 IntersectionObserver 实现轻量动效。",
    },
    {
      title: "成果与反思",
      body: "建立了可扩展的页面骨架与内容维护方式。后续继续补充真实作品、个人介绍和授权素材，再根据访问反馈调整信息结构。",
    },
  ],
};
