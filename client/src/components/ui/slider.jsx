import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      "transition-all duration-300 ease-in-out",
      className
    )}
    {...props}>
    <SliderPrimitive.Track
      className="relative h-2 w-full grow overflow-hidden rounded-full bg-gradient-to-r from-primary/20 via-primary/30 to-primary/40">
      <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-primary to-accent" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={cn(
        "block h-5 w-5 rounded-full border border-primary/50 bg-background shadow-lg transition-transform transform active:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        "hover:bg-primary/10 active:bg-primary"
      )}
    />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
