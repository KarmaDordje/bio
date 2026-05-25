import { TreePine } from "lucide-react"

export function VerticalLabel() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 border-r border-brand-dark/5 py-12 px-6">
      <div className="h-24 w-[1px] bg-brand-dark/20" />
      <div className="text-brand-dark/30 py-4">
        <TreePine className="size-6" />
      </div>
      <div className="h-24 w-[1px] bg-brand-dark/20" />
      <span className="[writing-mode:vertical-lr] text-[11px] font-bold tracking-[0.5em] text-brand-dark/60 uppercase rotate-180 mt-8">
        Kontakt
      </span>
    </div>
  )
}
