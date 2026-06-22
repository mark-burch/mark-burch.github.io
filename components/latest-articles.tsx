"use client";

import { useMemo, useState } from "react";
import PostItem from "@/app/post-item";

type Post = {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    image?: string;
    summary?: string;
    tags?: string[];
  };
};

export default function LatestArticles({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState("All");

  // Derive the tab list from the tags used across all posts
  const tabs = useMemo(
    () =>
      Array.from(new Set(posts.flatMap((post) => post.metadata.tags ?? []))),
    [posts],
  );

  const filtered =
    active === "All"
      ? posts
      : posts.filter((post) => post.metadata.tags?.includes(active));

  return (
    <section>
      <h2 className="font-aspekta text-xl font-[650] mb-3">Latest Articles</h2>

      {/* Filters */}
      <ul className="flex flex-wrap text-sm border-b border-slate-100 dark:border-slate-800">
        {["All", ...tabs].map((tab) => (
          <li key={tab} className="px-3 -mb-px">
            <button
              type="button"
              onClick={() => setActive(tab)}
              className={`block py-3 ${
                active === tab
                  ? "font-medium text-slate-800 dark:text-slate-100 border-b-2 border-sky-500"
                  : "text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
              }`}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {/* Articles list */}
      <div>
        {filtered.map((post) => (
          <PostItem key={post.slug} {...post} />
        ))}
      </div>
    </section>
  );
}
