import type { Project } from "../types/content";
export const visibleProjects = (items: Project[], preview: boolean) =>
  items
    .filter((p) => preview || p.status === "published")
    .sort((a, b) => a.order - b.order);
export const filterProjects = (items: Project[], tag: string) =>
  tag === "全部" ? items : items.filter((p) => p.tags.includes(tag));
export function publicAsset(path: string, base: string) {
  return `${base.replace(/\/$/, "")}/${path.replace(/^\/+/, "")}`;
}
