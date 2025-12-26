import { Metadata } from "next";
import { DM_Sans as FontSans } from "next/font/google";

import { Navbar, Footer } from "@/components/layout";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ReactQueryProvider } from "@/components/providers/react-query-provider";

import { cn } from "@/lib/utils";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Instagram Video Downloader",
  description: "Download Instagram Reels & Videos Easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={cn(
          fontSans.variable,
          `bg-gradient-to-br 
           from-indigo-400 via-purple-500 to-pink-500 
           dark:from-indigo-900 dark:via-purple-800 dark:to-pink-700
           font-sans text-gray-900 dark:text-gray-100 antialiased transition-colors duration-500`
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <div className="flex flex-col min-h-screen">
              {/* Sticky Navbar with shadow */}
              <Navbar className="sticky top-0 z-50 shadow-md bg-white/80 backdrop-blur-md dark:bg-gray-800/80 transition-colors duration-300" />

              {/* Main content area */}
              <main className="flex-1 relative mx-auto w-full max-w-5xl p-4 sm:p-6 md:p-8">
                {children}
              </main>

              {/* Footer */}
              <Footer className="mt-auto bg-white/80 dark:bg-gray-900/80 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300" />
            </div>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
