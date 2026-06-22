import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Metadata = {
  title: string;
  publishedAt: string;
  updatedAt?: string;
  image?: string;
  summary?: string;
  author?: string;
  authorImg?: string;
  tags?: string[];
};

type Post = { metadata: Metadata; slug: string; content?: string };

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);
  return { metadata: data as Metadata, content: content.trim() };
}

export function getBlogPosts(includeContent = true): Post[] {
  const dir = path.join(process.cwd(), "content/blog");
  return getMDXFiles(dir)
    .map((file) => {
      const { metadata, content } = readMDXFile(path.join(dir, file));
      const slug = path.basename(file, path.extname(file));
      return includeContent ? { metadata, slug, content } : { metadata, slug };
    })
    .sort((a, b) =>
      new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
        ? -1
        : 1,
    );
}
