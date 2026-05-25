"use client";

import { useState } from "react";
import { PlantCard } from "./PlantCard";
import { Plant, Category } from "@/lib/plants";
import { motion, AnimatePresence } from "framer-motion";

export function GardenGrid({ initialPlants, categories }: { initialPlants: Plant[], categories: Category[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPlants = activeCategory === "All" 
    ? initialPlants 
    : initialPlants.filter(p => p.category === activeCategory);

  return (
    <div className="space-y-12">
      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        {["All", ...categories.map(c => c.title)].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap px-6 py-2 rounded-full text-xs font-bold transition-all border ${
              activeCategory === cat 
                ? "bg-[#2d5a27] border-[#2d5a27] text-white" 
                : "border-white/10 hover:border-white/30 text-white/60"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredPlants.map((plant) => (
            <motion.div
              key={plant._id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <PlantCard plant={plant} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
