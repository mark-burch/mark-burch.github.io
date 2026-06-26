import { Metadata } from "next";
import ResourceCard from "../resource-card";
import { PODCASTS } from "./podcasts";
import { BOOKS } from "./books";
import { WEBSITES } from "./websites";
import Highlight from "@/components/highlight";

export const metadata: Metadata = {
  title: "Resources",
};

export default function Resources() {
  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">
          <section>
            {/* Page title */}
            <h1 className="h1 font-aspekta mb-5">
              Recommended <Highlight>Resources</Highlight>{" "}
            </h1>
            {/* Page content */}
            <div className="space-y-8">
              <p className="text-slate-500 dark:text-slate-400">
                You won't find affiliate links here. Books lack links so as not
                to direct you to any specific store. I have no vested interest
                in driving traffic or readers to these resources other than to
                popularise ideas that I'd argue bear repeating.
              </p>
              <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
                Podcasts
              </h2>
              <section>
                <div className="space-y-5">
                  {PODCASTS.map((item) => (
                    <ResourceCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
              <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
                Books
              </h2>
              <section>
                <div className="space-y-5">
                  {BOOKS.map((item) => (
                    <ResourceCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
              <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
                Websites
              </h2>
              <section>
                <div className="space-y-5">
                  {WEBSITES.map((item) => (
                    <ResourceCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
