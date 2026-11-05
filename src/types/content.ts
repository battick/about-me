export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  role: string;
  tags: string[];
  cover: string;
  gallery?: string[];
  featured: boolean;
  order: number;
  status: "published" | "draft";
  links: { github?: string; demo?: string };
  sections: { title: string; body: string }[];
};
export type Experience = {
  year: string;
  category: string;
  title: string;
  description: string;
};
