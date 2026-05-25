import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Plant } from "@/lib/plants";

export function PlantCard({ plant }: { plant: Plant }) {
  return (
    <div className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="aspect-square relative rounded-xl overflow-hidden mb-4 bg-gray-100">
        {plant.imageUrl && (
          <Image 
            src={plant.imageUrl} 
            alt={plant.varietyName} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        )}
      </div>
      <div className="space-y-1">
        <h3 className="font-bold text-lg text-[#102a28] leading-tight">
          {plant.species} '{plant.varietyName}'
        </h3>
        <p className="text-xs text-gray-400 italic font-medium uppercase tracking-wider">{plant.latinName}</p>
        <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed mt-2">{plant.characteristics}</p>
      </div>
      <div className="flex justify-between items-center mt-6">
        <span className="font-bold text-[#102a28] text-lg">${plant.price.toFixed(2)}</span>
        <button className="size-10 bg-[#102a28] rounded-full flex items-center justify-center text-white hover:bg-[#2d5a27] transition-colors">
          <ArrowRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
