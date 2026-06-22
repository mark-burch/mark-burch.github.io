import Education from "@/components/education";
import Experience from "@/components/experience";
import Patents from "@/components/patents";

export const metadata = {
  title: "Resume",
};

export default function Resume() {
  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">
          <section>
            {/* Page title */}
            <h1 className="h1 font-aspekta mb-12">Resume</h1>
            {/* Page content */}
            <div className="text-slate-500 dark:text-slate-400 space-y-12">
              <Experience />
              <Patents />
              <Education />
              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
                  Recommendations
                </h2>
                <p>
                  See{" "}
                  <a
                    className="font-medium text-sky-500 hover:underline"
                    href="https://www.linkedin.com/in/mark-bur"
                    target="_blank"
                  >
                    LinkedIn
                  </a>{" "}
                  and feel free to ask me for references.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
