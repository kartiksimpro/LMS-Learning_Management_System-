import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md hover:scale-105 hover:brightness-110",
        destructive:
          "bg-red-600 text-white shadow-md hover:bg-red-700 hover:scale-105",
        outline:
          "border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-100 hover:scale-105",
        secondary:
          "bg-gray-700 text-white shadow-md hover:bg-gray-800 hover:scale-105",
        ghost:
          "hover:bg-gray-100 text-gray-700 hover:scale-105",
        link:
          "text-blue-600 underline underline-offset-4 hover:brightness-110",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 rounded-md px-4 text-xs",
        lg: "h-12 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
