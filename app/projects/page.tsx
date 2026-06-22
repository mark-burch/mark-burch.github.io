import ProjectCard from "../project-card";

import Icon01 from "@/public/images/project-icon-01.svg";
import Icon02 from "@/public/images/project-icon-02.svg";
import Icon03 from "@/public/images/project-icon-03.svg";
import Icon04 from "@/public/images/project-icon-04.svg";
import Icon05 from "@/public/images/project-icon-05.svg";
import Icon06 from "@/public/images/project-icon-06.svg";
import Icon07 from "@/public/images/project-icon-07.svg";
import Icon08 from "@/public/images/project-icon-08.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  const items01 = [
    {
      id: 0,
      icon: Icon01,
      href: "#0",
      title: "Container Tinkering",
      excerpt: "Solutions for running containers locally and remotely.",
      openSource: true,
    },
    {
      id: 1,
      icon: Icon02,
      href: "#0",
      title: "Engine Prototypes",
      excerpt: "Solutions for running containers locally and remotely.",
      openSource: false,
    },
    {
      id: 2,
      icon: Icon01,
      href: "#0",
      title: "Container Tinkering",
      excerpt: "Solutions for running containers locally and remotely.",
      openSource: true,
    },
    {
      id: 3,
      icon: Icon02,
      href: "#0",
      title: "Engine Prototypes",
      excerpt: "Solutions for running containers locally and remotely.",
      openSource: false,
    },
  ];

  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">
          <section>
            {/* Page title */}
            <h1 className="h1 font-aspekta mb-5">Projects</h1>
            {/* Page content */}
            <div className="space-y-8">
              <p className="text-slate-500 dark:text-slate-400">
                Like the vast majority of anyone who's ever written code, most
                of mine is private and proprietary. Here are a few things I can
                share.
              </p>
              {/* Side Hustles cards */}
              <section>
                {/* Cards */}
                <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
                  {items01.map((item) => (
                    <ProjectCard key={item.id} item={item} />
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
