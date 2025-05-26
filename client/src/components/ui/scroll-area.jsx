import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden rounded-lg shadow-lg", className)}
    {...props}>
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-lg">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-all duration-200 ease-in-out",
      orientation === "vertical" &&
        "h-full w-2.5 border-l-2 border-l-transparent p-[2px] rounded-full",
      orientation === "horizontal" &&
        "h-2.5 w-full border-t-2 border-t-transparent p-[2px] rounded-full",
      className
    )}
    {...props}>
    <ScrollAreaPrimitive.ScrollAreaThumb
      className="relative flex-1 rounded-full bg-gradient-to-t from-blue-500 to-blue-700 transition-all duration-300 ease-in-out hover:bg-gradient-to-t hover:from-blue-600 hover:to-blue-800"
    />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
