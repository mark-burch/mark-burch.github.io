import {
  Atlassian,
  Covalent,
  Defence,
  MongoDB,
  WesternDigital,
} from "@/components/logos";

export default function Experience() {
  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
        Work Experience
      </h2>
      <ul className="space-y-8">
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 dark:before:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 group-last-of-type:before:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-linear-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Covalent />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                Jan 2026{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                Present
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                Head of Engineering
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                Covalent API
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Working on toppling an industry giant that really, really
                deserves it.
              </div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 dark:before:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 group-last-of-type:before:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-linear-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <MongoDB />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                2024{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                2026
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                Senior Engineering Lead
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                MongoDB
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Larger team, more scope, heavier-pocketed customers.
              </div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 dark:before:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 group-last-of-type:before:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-linear-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <MongoDB />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                2021{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                2024
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                Engineering Lead
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                MongoDB
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Led a large team of amazingly talented engineers in developing
                Relational Migrator for legacy SQL to MongoDB migrations. Made
                Larry Ellison a little less rich.
              </div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 dark:before:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 group-last-of-type:before:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-linear-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Atlassian />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                2018{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                2021
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                Engineering Manager
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                Atlassian
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Ran a large engineering team within the Open DevOps Cloud
                initiative. Probably found the first genuine use-case for graph
                databases.
              </div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 dark:before:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 group-last-of-type:before:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-linear-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Atlassian />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                2017{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                2018
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                Senior Software Engineer
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                Atlassian
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Individual contributor to Atlassian's Confluence Server and Data
                Center. Earned the battle scars of working on enterprise
                on-premise software.
              </div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 dark:before:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 group-last-of-type:before:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-linear-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <WesternDigital />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                2013{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                2017
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                Software Engineer
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                Western Digital (formerly SanDisk)
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Individual contributor to the iNAND flash controller firmware as
                well as related internal software. Made sure that NAND cells
                leaking charge wouldn't be a problem for anyone.
              </div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 dark:before:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 group-last-of-type:before:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-linear-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Defence />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                2012{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                2013
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                Software Engineer
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                Defence
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
