import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/components/mdx/utils";

const baseUrl = "https://mark-burch.github.io";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts(false).map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: post.metadata.updatedAt ?? post.metadata.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const routes = ["", "/about", "/projects", "/resume", "/resources"].map(
    (path) => ({
      url: `${baseUrl}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  return [...routes, ...posts];
}
