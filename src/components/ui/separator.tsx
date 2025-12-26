"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & {
    styleType?: "gradient" | "soft" | "dashed"
  }
>(({ className, orientation = "horizontal", decorative = true, styleType = "gradient", ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      "shrink-0 transition-all",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      styleType === "gradient" &&
        "bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 dark:from-pink-600 dark:via-purple-600 dark:to-indigo-600",
      styleType === "soft" &&
        "bg-gray-300 dark:bg-gray-700",
      styleType === "dashed" &&
        "bg-transparent border-t border-dashed border-gray-400 dark:border-gray-600",
      className
    )}
    {...props}
  />
))
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
