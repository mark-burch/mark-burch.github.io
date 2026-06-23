import { ReactNode } from "react";

interface Resource {
  id: number;
  image: string;
  title: string;
  summary: ReactNode;
  extended: ReactNode;
  footer: ReactNode;
}

interface ResourceCardProps {
  item: Resource;
}

export default function ResourceCard({ item }: ResourceCardProps) {
  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-linear-to-t dark:from-slate-800 dark:to-slate-800/30 p-5">
      <div className="after:content-[''] after:block after:clear-both">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="float-left w-24 sm:w-40 mr-4 mb-2 h-auto rounded-xl shadow-lg"
          src={item.image}
          alt={item.title}
        />
        <div className="text-lg font-aspekta font-[650] mb-1">{item.title}</div>
        <div className="text-sm text-slate-500 dark:text-slate-400">
          {item.summary}
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400 mt-2">
          {item.extended}
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400 mt-3">
          {item.footer}
        </div>
      </div>
    </div>
  );
}
