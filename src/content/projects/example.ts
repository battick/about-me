import type { Project } from "../../types/content";
export const examples: Project[] = [
  {
    slug: "interface-study",
    title: "Interface / 交互研究",
    tags: ["React", "CSS"],
  },
  {
    slug: "system-study",
    title: "System / 工程实验",
    tags: ["TypeScript", "工具"],
  },
].map((item, i) => ({
  ...item,
  summary: "开发样例，用于预览布局，并非真实项目成果。",
  year: "待填",
  role: "开发样例 · 待补真实资料",
  cover: `images/projects/example-${i + 1}/cover.svg`,
  featured: true,
  order: i + 2,
  status: "draft",
  links: {},
  sections: [
    {
      title: "开发样例",
      body: "请替换为真实项目背景、职责、技术选择与成果。此样例不会出现在生产页面中。",
    },
  ],
}));
