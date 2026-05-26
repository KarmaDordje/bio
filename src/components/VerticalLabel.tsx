import { TreePine } from "lucide-react"
import { cn } from "@/lib/utils"

interface VerticalLabelProps {
  label?: string;
  className?: string;
  isAbsolute?: boolean;
}

export function VerticalLabel({ label = "Od 1978 roku", className, isAbsolute = false }: VerticalLabelProps) {
  return (
    <div className={cn(
      "hidden lg:flex flex-col items-center gap-8 pointer-events-none",
      isAbsolute ? "absolute left-8 top-1/2 -translate-y-1/2" : "py-12 px-6 border-r border-brand-dark/5",
      className
    )}>
      <div className="flex flex-col items-center gap-4">
        <div className="h-16 w-[1px] bg-brand-dark/20" />
        <TreePine className="size-6 text-brand-dark/30" />
        <div className="h-16 w-[1px] bg-brand-dark/20" />
      </div>
      <span className="[writing-mode:vertical-lr] text-[10px] font-bold tracking-[0.5em] text-brand-dark/60 uppercase rotate-180">
        {label}
      </span>
    </div>
  )
}
