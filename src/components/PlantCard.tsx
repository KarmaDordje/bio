import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Plant } from "@/lib/plants";

export function PlantCard({ plant }: { plant: Plant }) {
  return (
    <div className="group bg-white rounded-xl md:rounded-2xl p-3 md:p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full min-h-[300px] md:min-h-[380px]">
      <div className="aspect-square relative rounded-lg md:rounded-xl overflow-hidden mb-3 md:mb-4 bg-gray-100 shrink-0">
        {plant.imageUrl && (
          <Image 
            src={plant.imageUrl} 
            alt={`${plant.species} ${plant.varietyName}`} 
            fill 
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        )}
      </div>
      <div className="space-y-1 flex-grow">
        <h3 className="font-bold text-sm md:text-lg text-[#102a28] leading-tight line-clamp-2">
          {plant.species} '{plant.varietyName}'
        </h3>
        <p className="text-[9px] md:text-xs text-gray-400 italic font-medium uppercase tracking-wider line-clamp-1">{plant.latinName}</p>
      </div>
      <div className="flex justify-between items-center mt-3 md:mt-6">
        <span className="font-bold text-[#102a28] text-sm md:text-lg">{plant.price.toFixed(2)} zł</span>
        <button 
          className="size-8 md:size-10 bg-[#102a28] rounded-full flex items-center justify-center text-white hover:bg-[#2d5a27] transition-colors shrink-0"
          aria-label={`View details for ${plant.species} ${plant.varietyName}`}
        >
          <ArrowRight className="size-4 md:size-5" />
        </button>
      </div>
    </div>
  );
}
