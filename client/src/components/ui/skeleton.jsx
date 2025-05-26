import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "animate-pulse bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 rounded-md",
        "bg-[length:200%] bg-[position:-100%] animate-shimmer",
        className
      )}
      {...props} />
  );
}

export { Skeleton }
