"use client";

import React from "react";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

type LayoutProps = React.HTMLAttributes<HTMLElement>;

export function Navbar({ className, ...rest }: LayoutProps) {
  return (
    <header
      className={cn(
        "w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/70 shadow-lg",
        className
      )}
      {...rest}
    >
      <nav className="flex h-16 items-center justify-between px-6 sm:px-8 md:px-12">
        <div className="hidden md:block text-2xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Downloader
        </div>

        <MobileNav className="md:hidden" />

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-lg font-medium">
            <Link href="/">Home</Link>
            <Link href="/terms-of-service">Terms</Link>
            <Link href="/privacy-policy">Privacy</Link>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

export function Footer({ className, ...rest }: LayoutProps) {
  return (
    <footer
      className={cn(
        "mt-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-white",
        className
      )}
      {...rest}
    >
      <div className="flex flex-col md:flex-row items-center justify-between py-6 px-6 md:px-12">
        <span>© 2025 Downloader</span>
        <div className="flex gap-4">
          <Link href="/terms-of-service">Terms</Link>
          <Link href="/privacy-policy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
