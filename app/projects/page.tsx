import ProjectCard from "../project-card";

import { Atlassian, Debezium, MongoDB, WesternDigital } from "@/components/logos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  const items01 = [
    {
      id: 0,
      logo: <Debezium />,
      href: "https://github.com/debezium/debezium/pulls?q=is%3Apr+is%3Aclosed+author%3Amark-burch",
      title: "Debezium",
      excerpt:
        "Contributed several changes as part of my role at MongoDB. This CDC tool is extensively used to migrate snapshot and CDC data between databases. A pure Java codebase with specific database knowledge required to work on the individual connectors.",
      openSource: true,
      techStack: [
        "Java",
        "Postgres",
        "Oracle",
        "SQL Server",
        "MySQL",
        "Db2",
        "Sybase",
      ],
    },
    {
      id: 1,
      logo: <MongoDB />,
      href: "https://www.mongodb.com/products/tools/relational-migrator",
      title: "Relational Migrator",
      excerpt:
        "Relational Migrator is a tool designed to help you migrate data from a relational database to MongoDB. It provides a UI to discover your SQL schema, map to a target schema, and migrate. A classic Spring Boot-based backend with a shiny React frontend, fuelled by the power of Apache Kafka and Debezium.",
      openSource: false,
      techStack: ["Java", "Apache Kafka", "Debezium", "React"],
    },
    {
      id: 2,
      logo: <Atlassian />,
      href: "https://www.atlassian.com/solutions/devops",
      title: "Open DevOps",
      excerpt:
        "Connects Atlassian entities between different products, providing rich integration experiences such as on-call schedules and deployments in Jira. Spring-based web backend with GraphQL and Postgres.",
      openSource: false,
      techStack: ["Kotlin", "React", "GraphQL"],
    },
    {
      id: 3,
      logo: <Atlassian />,
      href: "#0",
      title: "Confluence Data Center",
      excerpt:
        "Worked on the main product line, delivering enterprise features such as rate limiting and CDNs. Mostly a Java and Spring codebase with some very legacy code still intact at the time - Apache Struts, XWork et al.",
      openSource: false,
      techStack: ["Java", "React", "Apache Struts"],
    },
    {
      id: 4,
      logo: <WesternDigital />,
      href: "#0",
      title: "SanDisk iNAND Firmware",
      excerpt:
        "Helped write firmware that ensured temperature resistance and even wear across flash cells, especially triple TLC (Triple Level Cell) storage. Mostly written in C and version controlled by AccuRev which, I hope, has changed since.",
      openSource: false,
      techStack: ["C", "Embedded", "Java"],
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
