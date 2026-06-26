import Image from "next/image";
import Highlight from "@/components/highlight";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">
          <section>
            {/* Page title */}
            <h1 className="h1 font-aspekta mb-5">
              I'm <Highlight>Mark Burch</Highlight>.
            </h1>

            {/* Page content */}
            <div className="text-slate-500 dark:text-slate-400 space-y-8">
              <div className="space-y-4">
                <p>
                  Passionate and driven engineering manager with a background in
                  backend systems. I still code regularly and have spent the
                  last 15+ years contributing to various large-scale commercial
                  products, primarily using JVM tech stacks. I also contribute
                  to a few large open-source Java projects such as Apache Kafka,
                  Debezium and a few OpenAPI projects.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
                  Career
                </h2>
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <p>
                    I started with firmware development in C/C++ for{" "}
                    <a
                      className="font-medium text-sky-500 hover:underline"
                      href="https://www.sandisk.com"
                      target="_blank"
                    >
                      SanDisk
                    </a>{" "}
                    back in 2013. I worked on a few important modules, most
                    notably the ones managing NAND flash cell health degradation
                    due to both cycling and ambient temperature. In addition, we
                    developed an in-house full-stack Java app to aggregate and
                    analyse experiment logs. An example of a SanDisk product
                    that ships with such firmware is the{" "}
                    <a
                      className="font-medium text-sky-500 hover:underline"
                      href="https://www.sandisk.com/en-au/products/embedded-flash/industrial-inand-emmc-drives"
                      target="_blank"
                    >
                      industrial-grade eMMC embedded flash drive
                    </a>
                    . If you've ever trusted a phone, a camera or a car with
                    your data, you've run firmware I helped write.
                  </p>
                  <a
                    className="shrink-0 self-center sm:self-start order-first sm:order-none"
                    href="https://www.sandisk.com/en-au/products/embedded-flash/industrial-inand-emmc-drives"
                    target="_blank"
                  >
                    <Image
                      className="rounded-lg w-36"
                      src="/images/about/sandisk-inand.webp"
                      width={180}
                      height={180}
                      alt="SanDisk industrial-grade eMMC embedded flash drive"
                    />
                  </a>
                </div>
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <a
                    className="shrink-0 self-center sm:self-start"
                    href="https://www.atlassian.com"
                    target="_blank"
                  >
                    <Image
                      className="rounded-lg w-24"
                      src="/images/about/atlassian.svg"
                      width={180}
                      height={180}
                      alt="Atlassian"
                    />
                  </a>
                  <p>
                    I then joined{" "}
                    <a
                      className="font-medium text-sky-500 hover:underline"
                      href="https://www.atlassian.com"
                      target="_blank"
                    >
                      Atlassian
                    </a>{" "}
                    as an individual contributor to work on what was then (and
                    probably still is) the world's most widely used
                    collaboration software —{" "}
                    <a
                      className="font-medium text-sky-500 hover:underline"
                      href="https://www.atlassian.com/enterprise/data-center/confluence"
                      target="_blank"
                    >
                      Confluence
                    </a>
                    . The team worked on several high-profile resilience and
                    availability features like rate limiting, likely
                    facilitating a better night's sleep for your Confluence Data
                    Center admin.
                  </p>
                </div>
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <a
                    className="shrink-0 self-center sm:self-start"
                    href="https://www.atlassian.com/enterprise/data-center/confluence"
                    target="_blank"
                  >
                    <Image
                      className="rounded-lg w-24"
                      src="/images/about/atlassian-confluence.svg"
                      width={180}
                      height={180}
                      alt="Confluence"
                    />
                  </a>
                  <p>
                    Within a few years I transitioned into a management role to
                    lead one of the{" "}
                    <a
                      className="font-medium text-sky-500 hover:underline"
                      href="https://www.atlassian.com/solutions/devops"
                      target="_blank"
                    >
                      Open DevOps
                    </a>{" "}
                    teams. The team operated on a YBIYRI ("You Build It, You Run
                    It") basis — pager included. We owned several microservices
                    and UI pieces within Atlassian's cloud offering.
                  </p>
                </div>
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <p>
                    Next up: Engineering lead at the{" "}
                    <a
                      className="font-medium text-sky-500 hover:underline"
                      href="https://www.mongodb.com"
                      target="_blank"
                    >
                      MongoDB
                    </a>{" "}
                    Sydney branch, which seems to surprise a lot of people who
                    aren't aware of MongoDB's Australian presence. Fun fact: the
                    storage engine that powers the database was homegrown in
                    Sydney all the way back in 2010. No Sydney, no MongoDB.
                  </p>
                  <a
                    className="shrink-0 self-center sm:self-start order-first sm:order-none"
                    href="https://www.mongodb.com"
                    target="_blank"
                  >
                    <Image
                      className="rounded-lg w-36"
                      src="/images/about/mongodb.svg"
                      width={180}
                      height={180}
                      alt="MongoDB"
                    />
                  </a>
                </div>
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <p>
                    Our team of intrepid developers, designers and product
                    managers worked on a set of tools, most notably{" "}
                    <a
                      className="font-medium text-sky-500 hover:underline"
                      href="https://www.mongodb.com/products/tools/relational-migrator"
                      target="_blank"
                    >
                      Relational Migrator
                    </a>
                    , designed to help companies retire their creaking SQL
                    estates built around older databases like Db2, Sybase and
                    Oracle in favour of something more modern. This was also the
                    first time I enjoyed some{" "}
                    <a
                      className="font-medium text-sky-500 hover:underline"
                      href="https://thenewstack.io/mongodbs-new-tool-to-move-data-from-relational-systems/"
                      target="_blank"
                    >
                      press coverage
                    </a>
                    .
                  </p>
                  <a
                    className="shrink-0 self-center sm:self-start order-first sm:order-none"
                    href="https://www.mongodb.com/products/tools/relational-migrator"
                    target="_blank"
                  >
                    <Image
                      className="rounded-lg w-36"
                      src="/images/about/mongodb-migrator.svg"
                      width={180}
                      height={180}
                      alt="MongoDB Relational Migrator"
                    />
                  </a>
                </div>
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <Image
                    className="rounded-lg w-24 shrink-0 self-center sm:self-start"
                    src="/images/about/covalent.webp"
                    width={180}
                    height={180}
                    alt="Covalent"
                  />
                  <p>
                    Now, in a modern David vs. Goliath story and back in a
                    hands-on role, I am working on displacing an industry giant.
                    The slingshot is a WIP.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Right sidebar */}
      <aside className="md:w-[240px] lg:w-[300px] shrink-0">
        <div className="space-y-6">{/* Side widgets go here */}</div>
      </aside>
    </div>
  );
}
