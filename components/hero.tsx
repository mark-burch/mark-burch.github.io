import Image from "next/image";
import HeroImage from "@/public/images/me.jpg";
import Highlight from "@/components/highlight";

export default function Hero() {
  return (
    <section>
      <div className="max-w-[700px]">
        <div className="pt-8 pb-10">
          <Image
            className="rounded-full mb-5"
            src={HeroImage}
            width={56}
            height={56}
            priority
            alt="Me"
          />
          <h1 className="h1 font-aspekta mb-5">
            I write about coding and being a{" "}
            <Highlight>full-time</Highlight>{" "}
            maker.
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Writer, Speaker, Developer, and Co-Founder of Code.co, and
            AppForYou. I write about coding, startups, and my journey as a
            full-time maker.
          </p>
        </div>
      </div>
    </section>
  );
}
