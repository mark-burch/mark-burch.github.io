import type { ReactNode } from "react";

type WidgetProps = {
  title: string;
  image: string;
  content: ReactNode;
  Footer: ReactNode;
};

export default function Widget({ title, image, content, Footer }: WidgetProps) {
  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-linear-to-t dark:from-slate-800 dark:to-slate-800/30 odd:rotate-1 even:-rotate-1 p-5">
      <div className="font-aspekta font-[650] text-center mb-4">{title}</div>
      <div className="after:content-[''] after:block after:clear-both">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="float-left w-24 mr-4 mb-2 h-auto rounded-xl shadow-lg md:float-none md:block md:mx-auto md:mb-4 md:w-full md:max-w-[160px]"
          src={image}
          alt={title}
        />
        <div className="text-sm text-slate-500 dark:text-slate-400">
          {content}
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400 mt-3">
          {Footer}
        </div>
      </div>
    </div>
  );
}
