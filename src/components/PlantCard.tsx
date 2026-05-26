import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Plant } from "@/lib/plants";

export function PlantCard({ plant }: { plant: Plant }) {
  return (
    <div className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full min-h-[380px]">
      <div className="aspect-square relative rounded-xl overflow-hidden mb-4 bg-gray-100 shrink-0">
        {plant.imageUrl && (
          <Image 
            src={plant.imageUrl} 
            alt={`${plant.species} ${plant.varietyName}`} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        )}
      </div>
      <div className="space-y-1 flex-grow">
        <h3 className="font-bold text-lg text-[#102a28] leading-tight">
          {plant.species} '{plant.varietyName}'
        </h3>
        <p className="text-xs text-gray-400 italic font-medium uppercase tracking-wider">{plant.latinName}</p>
      </div>
      <div className="flex justify-between items-center mt-6">
        <span className="font-bold text-[#102a28] text-lg">{plant.price.toFixed(2)} zł</span>
        <button 
          className="size-10 bg-[#102a28] rounded-full flex items-center justify-center text-white hover:bg-[#2d5a27] transition-colors"
          aria-label={`View details for ${plant.species} ${plant.varietyName}`}
        >
          <ArrowRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
