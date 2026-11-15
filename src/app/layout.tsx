import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Preloader from "@/components/ui/Preloader";

export const metadata: Metadata = {
  metadataBase: new URL("https://walid-dev.vercel.app"),
  title: "Md. Walidul Islam | Frontend & MERN Stack Developer",
  description:
    "Explore the portfolio of Md. Walidul Islam, a Frontend and MERN Stack Developer building modern, responsive, and user-friendly web applications.",
  keywords: [
    "Md. Walidul Islam",
    "Walid",
    "Frontend Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Bangladesh",
    "Portfolio",
  ],
  authors: [{ name: "Md. Walidul Islam" }],
  creator: "Md. Walidul Islam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://walid-dev.vercel.app",
    title: "Md. Walidul Islam | Frontend & MERN Stack Developer",
    description:
      "Explore the portfolio of Md. Walidul Islam, a Frontend and MERN Stack Developer building modern, responsive, and user-friendly web applications.",
    siteName: "Md. Walidul Islam Portfolio",
    images: [
      {
        url: "/assets/avatar.jpg",
        width: 800,
        height: 800,
        alt: "Md. Walidul Islam Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Walidul Islam | Frontend & MERN Stack Developer",
    description:
      "Explore the portfolio of Md. Walidul Islam, a Frontend and MERN Stack Developer building modern, responsive, and user-friendly web applications.",
    images: ["/assets/avatar.jpg"],
  },
  icons: {
    icon: "/assets/logo.jpg",
    apple: "/assets/logo.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF9FF" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0618" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* Anti-flicker script for theme and preloader */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                  try {
                    sessionStorage.removeItem('hasSeenPreloader');
                  } catch(e) {}
                } catch(e) {}
              })();
            `,
          }}
        />
        {/* Prevent flash of content before preloader finishes */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html:not([data-preloader-done='true']) body {
                overflow: hidden !important;
              }
              html:not([data-preloader-done='true']) #main-portfolio-content {
                opacity: 0 !important;
                pointer-events: none !important;
              }
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="font-sans antialiased min-h-screen selection:bg-purple-500 selection:text-white"
      >
        <ThemeProvider>
          <Preloader />
          <ScrollProgress />
          <CustomCursor />
          <div id="main-portfolio-content" className="transition-opacity duration-500 ease-out">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
