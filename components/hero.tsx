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
            alt="Mark Burch"
          />
          <h1 className="h1 font-aspekta mb-5">
            I write about <Highlight>coding</Highlight>, software{" "}
            <Highlight>engineering</Highlight> and{" "}
            <Highlight>politics</Highlight>.
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            These are my own thoughts, experiences and learnings from a 15+ year
            software engineering career. <Highlight>No AI</Highlight> — not even
            a spellchecker.
          </p>
        </div>
      </div>
    </section>
  );
}
