import { portfolio } from "./portfolio";
import { examples } from "./example";
import { visibleProjects } from "../../lib/content";
export const allProjects = [portfolio, ...examples];
export const projects = visibleProjects(allProjects, import.meta.env.DEV);
