"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { siteLinks } from "@/lib/constants";
import { Separator } from "./ui/separator";

export function MobileNav({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const handleCloseSheet = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className={cn(className, "text-purple-600 hover:text-pink-500")}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-gradient-to-b from-purple-700 via-pink-600 to-red-500 text-white">
        <h2 className="mb-6 text-center text-xl font-bold tracking-wide">
          Site Navigation
        </h2>
        <ul className="mb-8 space-y-3">
          {siteLinks.map((link) => (
            <li key={link.href}>
              <Button
                variant={pathname === link.href ? "default" : "outline"}
                asChild
                className={cn(
                  "w-full",
                  pathname === link.href
                    ? "bg-white text-purple-700 hover:bg-gray-100"
                    : "border-white text-white hover:bg-white hover:text-purple-700 transition-colors"
                )}
              >
                <Link href={link.href} onClick={handleCloseSheet}>
                  {link.name}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
        <Separator className="border-white/50 my-4" />
      </SheetContent>
    </Sheet>
  );
}
