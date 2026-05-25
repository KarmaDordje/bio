import { getPlants, getCategories } from "@/lib/plants";
import { GardenGrid } from "@/components/GardenGrid";

export default async function GardenCenterPage() {
  const [plants, categories] = await Promise.all([getPlants(), getCategories()]);

  return (
    <main className="min-h-screen bg-[#102a28] text-[#f7f0f0] pt-24 pb-32">
      <div className="container mx-auto px-4">
        <header className="mb-16 max-w-2xl">
          <h1 className="font-serif text-5xl font-bold mb-6">Plant Power for Your Space</h1>
          <p className="text-white/60 text-lg">Find the perfect plants and essentials for a greener home.</p>
          <button className="mt-8 px-8 py-3 bg-white/10 border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-white/20 transition-all">
            Shop Now
          </button>
        </header>

        <GardenGrid initialPlants={plants} categories={categories} />
      </div>
    </main>
  );
}
