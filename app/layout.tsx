import "./css/style.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Theme from "./theme-provider";
import SideNavigation from "@/components/ui/side-navigation";
import Header from "@/components/ui/header";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const aspekta = localFont({
  src: [
    {
      path: "../public/fonts/Aspekta-500.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/Aspekta-650.woff2",
      weight: "650",
    },
  ],
  variable: "--font-aspekta",
  display: "swap",
});

const siteDescription =
  "Mark's thoughts on coding, software engineering in the age of AI and the related politics.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mark-burch.github.io"),
  title: {
    template: "%s | Mark Burch",
    default: "Mark Burch",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Mark Burch",
    title: "Mark Burch",
    description: siteDescription,
    locale: "en_AU",
    images: [
      { url: "/images/me.jpg", width: 120, height: 120, alt: "Mark Burch" },
    ],
  },
  twitter: {
    card: "summary",
    title: "Mark Burch",
    description: siteDescription,
    images: ["/images/me.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <body
        className={`${inter.variable} ${aspekta.variable} font-inter antialiased bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-200 tracking-tight`}
      >
        <Theme>
          <div className="max-w-7xl mx-auto">
            <div className="min-h-screen flex">
              <SideNavigation />

              {/* Main content */}
              <main className="grow overflow-hidden px-6">
                <div className="w-full h-full max-w-[1072px] mx-auto flex flex-col">
                  <Header />

                  {children}
                </div>
              </main>
            </div>
          </div>
        </Theme>
      </body>
    </html>
  );
}
