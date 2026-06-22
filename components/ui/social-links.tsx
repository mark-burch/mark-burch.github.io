interface SocialLinksProps {
  className?: string;
}

// Social profile icons. `className` is merged into the <ul> for context-specific
// spacing (e.g. the footer needs different margins than the header).
export default function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <ul className={`inline-flex space-x-2 ${className}`}>
      <li>
        <a
          className="flex justify-center items-center text-slate-800 hover:text-sky-500 dark:text-slate-200 dark:hover:text-sky-500 transition duration-150 ease-in-out"
          href="https://github.com/mark-burch"
          target="_blank"
          aria-label="GitHub"
        >
          <svg
            className="w-8 h-8 fill-current"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
          </svg>
        </a>
      </li>
      <li>
        <a
          className="flex justify-center items-center text-slate-800 hover:text-sky-500 dark:text-slate-200 dark:hover:text-sky-500 transition duration-150 ease-in-out"
          href="https://www.linkedin.com/in/mark-bur"
          target="_blank"
          aria-label="LinkedIn"
        >
          {/* Bootstrap Icons LinkedIn (native 16×16); viewBox padded to -8 -8 32 32 so the glyph fills ~50% of the box, matching the other icons */}
          <svg
            className="w-8 h-8 fill-current"
            viewBox="-8 -8 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
          </svg>
        </a>
      </li>
    </ul>
  );
}
