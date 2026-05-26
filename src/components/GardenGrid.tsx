"use client";

import { useState, useEffect, useCallback } from "react";
import { PlantCard } from "./PlantCard";
import { Plant, Category, getPaginatedPlants } from "@/lib/plants";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function GardenGrid({ initialPlants, categories }: { initialPlants: Plant[], categories: Category[] }) {
  const [plants, setPlants] = useState<Plant[]>(initialPlants);
  const [activeCategory, setActiveCategory] = useState("Wszystkie");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(initialPlants.length === 12);
  const [isLoading, setIsLoading] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "200px",
  });

  const loadMorePlants = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    const nextPage = page + 1;
    const newPlants = await getPaginatedPlants(activeCategory === "Wszystkie" ? "All" : activeCategory, nextPage, 12);

    if (newPlants.length < 12) {
      setHasMore(false);
    }

    setPlants((prev) => [...prev, ...newPlants]);
    setPage(nextPage);
    setIsLoading(false);
  }, [page, isLoading, hasMore, activeCategory]);

  useEffect(() => {
    if (inView && hasMore && !isLoading) {
      loadMorePlants();
    }
  }, [inView, hasMore, isLoading, loadMorePlants]);

  const handleCategoryChange = async (category: string) => {
    if (category === activeCategory) return;

    setActiveCategory(category);
    setIsLoading(true);
    setPage(1);

    const firstPagePlants = await getPaginatedPlants(category === "Wszystkie" ? "All" : category, 1, 12);
    setPlants(firstPagePlants);
    setHasMore(firstPagePlants.length === 12);
    setIsLoading(false);
  };

  return (
    <div className="space-y-12">
      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        {["Wszystkie", ...categories.map(c => c.title)].map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
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
          {plants.length > 0 ? (
            plants.map((plant) => (
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
            ))
          ) : (
            !isLoading && (
              <div className="col-span-full text-center py-20 bg-white/5 rounded-3xl border border-white/10">
                <p className="text-white/40 font-bold uppercase tracking-widest text-sm">Nie znaleziono roślin w tej kategorii</p>
              </div>
            )
          )}
        </AnimatePresence>
      </motion.div>

      {/* Loading Indicator / Intersection Anchor */}
      <div ref={ref} className="flex justify-center py-12">
        {isLoading && (
          <div className="size-8 border-4 border-white/10 border-t-[#2d5a27] rounded-full animate-spin" />
        )}
        {!hasMore && plants.length > 0 && (
          <p className="text-white/20 text-xs font-bold uppercase tracking-widest">Wszystkie rośliny wczytane</p>
        )}
      </div>
    </div>
  );
}
