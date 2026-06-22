import { SVGProps } from "react";

type LogoProps = SVGProps<SVGSVGElement>;

export function Debezium(props: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 64 64"
      {...props}
    >
      <defs>
        <linearGradient
          id="dbz1"
          gradientUnits="userSpaceOnUse"
          x1="9.6501"
          y1="55.4537"
          x2="55.733"
          y2="9.3708"
          gradientTransform="matrix(1 0 0 -1 0 65.094)"
        >
          <stop offset="0" stopColor="#91D443" />
          <stop offset="1" stopColor="#48BFE0" />
        </linearGradient>
        <linearGradient
          id="dbz2"
          gradientUnits="userSpaceOnUse"
          x1="21.1064"
          y1="66.91"
          x2="67.1893"
          y2="20.827"
          gradientTransform="matrix(1 0 0 -1 0 65.094)"
        >
          <stop offset="0" stopColor="#91D443" />
          <stop offset="1" stopColor="#48BFE0" />
        </linearGradient>
        <linearGradient
          id="dbz3"
          gradientUnits="userSpaceOnUse"
          x1="32.529"
          y1="78.3326"
          x2="78.6119"
          y2="32.2497"
          gradientTransform="matrix(1 0 0 -1 0 65.094)"
        >
          <stop offset="0" stopColor="#91D443" />
          <stop offset="1" stopColor="#48BFE0" />
        </linearGradient>
        <linearGradient
          id="dbz4"
          gradientUnits="userSpaceOnUse"
          x1="-1.8193"
          y1="43.9892"
          x2="44.2636"
          y2="-2.0937"
          gradientTransform="matrix(1 0 0 -1 0 65.094)"
        >
          <stop offset="0" stopColor="#91D443" />
          <stop offset="1" stopColor="#48BFE0" />
        </linearGradient>
        <linearGradient
          id="dbz5"
          gradientUnits="userSpaceOnUse"
          x1="-13.2407"
          y1="32.5678"
          x2="32.8422"
          y2="-13.5152"
          gradientTransform="matrix(1 0 0 -1 0 65.094)"
        >
          <stop offset="0" stopColor="#91D443" />
          <stop offset="1" stopColor="#48BFE0" />
        </linearGradient>
      </defs>
      <path
        fill="url(#dbz1)"
        d="M45.8,55.9c0,4.5,3.6,8.1,8.1,8.1h10V54c0-4.5-3.6-8.1-8.1-8.1H54c-7.1,0-12.9-5.8-12.9-12.9V31c0-4.5-3.6-8.1-8.1-8.1H31c-7.1,0-12.9-5.8-12.9-12.9l0,0V8.1C18.2,3.6,14.5,0,10,0H0v10c0,4.5,3.6,8.1,8.1,8.1H10c7.1,0,12.9,5.8,12.9,12.9v1.9c0,4.5,3.6,8.1,8.1,8.1H33c7.1,0,12.9,5.8,12.9,12.9l0,0V55.9z"
      />
      <path
        fill="url(#dbz2)"
        d="M64,31c0-4.5-3.6-8.1-8.1-8.1H54c-7.1,0-12.9-5.8-12.9-12.9V8.1C41,3.6,37.4,0,32.9,0h-10v10.1c0.1,4.4,3.7,8,8.1,8H33c7.1,0,12.9,5.8,12.9,12.9l0,0v1.9c0,4.5,3.6,8.1,8.1,8.1H64V31z"
      />
      <path
        fill="url(#dbz3)"
        d="M64,8.1c0-4.3-3.5-7.9-7.8-8.1H45.7v10.1c0.1,4.4,3.7,8,8.1,8H64V8.1z"
      />
      <path
        fill="url(#dbz4)"
        d="M0,33c0,4.5,3.6,8.1,8.1,8.1H10c7.1,0,12.9,5.8,12.9,12.9v1.9c0,4.5,3.6,8.1,8.1,8.1h10V53.9c-0.1-4.4-3.7-8-8.1-8H31c-7.1,0-12.9-5.8-12.9-12.9l0,0v-1.9c0-4.5-3.6-8.1-8.1-8.1H0V33z"
      />
      <path
        fill="url(#dbz5)"
        d="M0,55.9c0,4.3,3.5,7.9,7.8,8.1h10.5V53.9c-0.1-4.4-3.7-8-8.1-8H0V55.9z"
      />
    </svg>
  );
}

export function MongoDB(props: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#47A248"
        d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"
      />
    </svg>
  );
}

export function Atlassian(props: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#0052CC"
        d="M7.12 11.084a.683.683 0 00-1.16.126L.075 22.974a.703.703 0 00.63 1.018h8.19a.678.678 0 00.63-.39c1.767-3.65.696-9.203-2.406-12.52zM11.434.386a15.515 15.515 0 00-.906 15.317l3.95 7.9a.703.703 0 00.628.388h8.19a.703.703 0 00.63-1.017L12.63.38a.664.664 0 00-1.196.006z"
      />
    </svg>
  );
}

export function WesternDigital(props: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="16.6"
      viewBox="-1 71 183 138"
      {...props}
    >
      <defs>
        <linearGradient id="wdBlades" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0066ff" />
          <stop offset=".39" stopColor="#008dff" />
          <stop offset=".63" stopColor="#00c4f2" />
          <stop offset=".82" stopColor="#00e2e2" />
          <stop offset="1" stopColor="#00e6d1" />
        </linearGradient>
      </defs>
      <path
        fill="url(#wdBlades)"
        d="M140.5 75L146 74.5L147.5 76L155.5 96L155.5 177L153.5 181L149.5 198L146 205.5L141 205.5L139.5 204L139.5 76ZM171.5 75L178.5 75L178 205.5L171.5 205ZM101.5 76L108 75.5L126.5 98L126.5 174L108 204.5L101.5 204ZM55.5 77L63 76.5L89.5 98L89.5 174L62 203.5L55.5 203ZM2.5 78L10 77.5L41 95.5L46.5 100L46.5 172L44 175.5L10 202.5L2.5 202Z"
      />
    </svg>
  );
}

export function Covalent(props: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="42.5 32.5 135 134"
      {...props}
    >
      <path
        fill="#2e4fff"
        d="M49.5 40L91 39.5L94.5 57L101.5 70L109 78.5L117 84.5L132 90.5L170 93.5L170.5 105L132 108.5L114 116.5L99.5 132L93.5 145L91 159.5L50 159.5L49.5 149L52.5 137L59.5 124L74 110.5L91 103.5L152 100.5L152.5 99L98 96.5L87 94.5L74 88.5L57.5 72L51.5 59Z"
      />
    </svg>
  );
}

export function Defense(props: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="20"
      viewBox="111 2.4 330.9 507.1"
      {...props}
    >
      <path
        fill="#10B981"
        d="M331.734 20.443a4.421 4.421 0 0 0-1.802.327c-27.736 11.543-47.295 57.495-29.899 76.671 33.52 38.946 72.835 55.573 90.147 128.434 2.607 20.15 1.218 40.094 0 60.25-17.312 72.861-56.627 89.488-90.147 128.434-17.396 19.176 2.163 65.128 29.899 76.671 9.038 3.762 28.025-26.165 21.752-25.209-16.34 2.491-37.8-20.941-28.387-28.93 38.47-32.65 105.49-100.055 100.277-135.552-2.211-15.057-9.35-30.36-15.574-45.539 6.225-15.18 13.363-30.482 15.574-45.54 5.214-35.496-61.806-102.901-100.277-135.552-9.412-7.988 12.047-31.42 28.387-28.93 5.881.897-10.44-25.35-19.95-25.535zM152 24.23l-21.441 53.602L152 99.273l21.441-21.441zm-9 91.497v296.546l9-9 9 9V115.727l-2.637 2.636-6.363 6.364zm160 9.847v260.824l18-17.53V143.104zM152 428.727l-23 23v38.546l23-23 23 23v-38.546z"
      />
    </svg>
  );
}
