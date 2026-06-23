import { getBlogPosts } from "@/components/mdx/utils";
import Hero from "@/components/hero";
import LatestArticles from "@/components/latest-articles";
import WidgetBook from "@/components/widget-book";
import WidgetPodcast from "@/components/widget-podcast";
import WidgetWebsite from "@/components/widget-website";

export default async function Home() {
  const posts = getBlogPosts(false);

  return (
    <>
      <Hero />
      {/* Content */}
      <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20">
        {/* Middle area */}
        <div className="grow">
          <div className="max-w-[700px]">
            <div className="space-y-10">
              <LatestArticles posts={posts} />
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <aside className="md:w-[240px] lg:w-[300px] shrink-0">
          <div className="space-y-6">
            <WidgetPodcast />
            <WidgetBook />
            <WidgetWebsite />
          </div>
        </aside>
      </div>
    </>
  );
}
