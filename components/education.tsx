export default function Education() {
  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
        Education
      </h2>
      <ul className="space-y-8">
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 dark:before:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 group-last-of-type:before:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-linear-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#0EA5E9"
                  d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z"
                />
              </svg>
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                2008{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                2012
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                B.Sc. Electrical and Computer Engineering
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Specialisation in digital communications systems. Can write out
                the math for OFDM modulation, used none of it throughout my
                career.
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
