import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:border-blue-500 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props} 
    />
  );
})
Input.displayName = "Input"

export { Input }
