"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { PlantCard } from "./PlantCard";
import { Plant, Category, getPaginatedPlants } from "@/lib/plants";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Search } from "lucide-react";

export function GardenGrid({ 
  initialPlants, 
  categories,
  initialCategory = "Wszystkie"
}: { 
  initialPlants: Plant[], 
  categories: Category[],
  initialCategory?: string
}) {
  const [plants, setPlants] = useState<Plant[]>(initialPlants);
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(initialPlants.length === 12);
  const [isLoading, setIsLoading] = useState(false);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "200px",
  });

  const loadPlants = useCallback(async (category: string, pageNum: number, search: string, append: boolean = false) => {
    setIsLoading(true);
    const normCategory = category === "Wszystkie" ? "All" : category;
    const newPlants = await getPaginatedPlants(normCategory, pageNum, 12, search);

    if (newPlants.length < 12) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }

    if (append) {
      setPlants((prev) => [...prev, ...newPlants]);
    } else {
      setPlants(newPlants);
    }
    
    setIsLoading(false);
  }, []);

  const loadMorePlants = useCallback(async () => {
    if (isLoading || !hasMore) return;
    const nextPage = page + 1;
    await loadPlants(activeCategory, nextPage, searchQuery, true);
    setPage(nextPage);
  }, [page, isLoading, hasMore, activeCategory, searchQuery, loadPlants]);

  useEffect(() => {
    if (inView && hasMore && !isLoading) {
      loadMorePlants();
    }
  }, [inView, hasMore, isLoading, loadMorePlants]);

  const handleCategoryChange = async (category: string) => {
    if (category === activeCategory) return;
    setActiveCategory(category);
    setPage(1);
    await loadPlants(category, 1, searchQuery);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(async () => {
      setPage(1);
      await loadPlants(activeCategory, 1, value);
    }, 500);
  };

  return (
    <div className="space-y-8 md:space-y-12">
      {/* Search and Filters Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Search Field */}
        <div className="relative w-full md:max-w-md group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/20 group-focus-within:text-brand-green transition-colors">
            <Search className="size-5" />
          </div>
          <input
            type="text"
            placeholder="Szukaj rośliny (np. Tuja, Sosna)..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-sm font-medium focus:outline-none focus:border-brand-green/50 focus:bg-white/10 transition-all placeholder:text-white/20"
          />
        </div>

        {/* Categories (Desktop View) */}
        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          {["Wszystkie", ...categories.map(c => c.title)].map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all border ${
                activeCategory === cat 
                  ? "bg-[#2d5a27] border-[#2d5a27] text-white shadow-lg shadow-[#2d5a27]/20" 
                  : "border-white/10 hover:border-white/30 text-white/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
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
              <div className="col-span-full text-center py-32 bg-white/5 rounded-[2rem] border border-white/10">
                <p className="text-white/40 font-bold uppercase tracking-[0.2em] text-sm">
                  {searchQuery 
                    ? `Brak wyników dla "${searchQuery}"` 
                    : "Nie znaleziono roślin w tej kategorii"}
                </p>
                <button 
                  onClick={() => { setSearchQuery(""); loadPlants(activeCategory, 1, ""); }}
                  className="mt-6 text-brand-green text-xs font-bold uppercase tracking-widest hover:underline"
                >
                  Wyczyść wyszukiwanie
                </button>
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
          <p className="text-white/10 text-[10px] font-bold uppercase tracking-[0.3em]">To już wszystkie rośliny</p>
        )}
      </div>
    </div>
  );
}
