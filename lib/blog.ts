import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface PostFrontmatter {
  title: string;
  slug: string;
  description: string;
  date: string;
  category: string;
  segmento: string;
  keyword: string;
  draft: boolean;
  image?: string;
}

export interface Post {
  frontmatter: PostFrontmatter;
  content: string;
}

function readPostFiles(): string[] {
  try {
    return readdirSync(BLOG_DIR).filter((file) => file.endsWith(".mdx"));
  } catch {
    return [];
  }
}

function readPost(file: string): Post {
  const raw = readFileSync(path.join(BLOG_DIR, file), "utf8");
  const { data, content } = matter(raw);
  return { frontmatter: data as PostFrontmatter, content };
}

export function getAllPosts(): Post[] {
  return readPostFiles()
    .map(readPost)
    .filter((post) => !post.frontmatter.draft)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime(),
    );
}

export function getPostBySlug(slug: string): Post | null {
  const post = readPostFiles()
    .map(readPost)
    .find((post) => post.frontmatter.slug === slug);

  return post ?? null;
}

export function getAllCategories(): string[] {
  return Array.from(
    new Set(getAllPosts().map((post) => post.frontmatter.category)),
  );
}
