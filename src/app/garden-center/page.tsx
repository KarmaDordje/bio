import { getPaginatedPlants, getCategories } from "@/lib/plants";
import { GardenGrid } from "@/components/GardenGrid";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { VerticalLabel } from "@/components/VerticalLabel";

export default async function GardenCenterPage() {
  const [plants, categories] = await Promise.all([
    getPaginatedPlants("All", 1, 12),
    getCategories(),
  ]);

  return (
    <main className="min-h-screen bg-[#102a28] text-[#f7f0f0] relative">
      <VerticalLabel isAbsolute className="border-white/5" />
      
      <div>
        {/* Hero Section */}
        <section className="relative h-[70vh] w-full flex items-center overflow-hidden">
          <Image
            src="/images/garden-hero.png"
            alt="Plant Nursery Hero"
            fill
            className="object-cover z-0"
            priority
            unoptimized
          />
          <div className="container relative z-10 mx-auto px-4">
            <header className="max-w-2xl">
              <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
                Siła roślin <br />
                <span className="text-brand-cream/80">dla Twojej przestrzeni</span>
              </h1>
              <p className="text-white/80 text-xl max-w-lg mb-10 leading-relaxed">
                Znajdź idealne rośliny i dodatki do swojego otoczenia. 
                Nasza szkółka oferuje najwyższej jakości tuje, sosny oraz rośliny sezonowe.
              </p>
            </header>
          </div>
          {/* Gradient Transition to Content */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#102a28] to-transparent z-10" />
        </section>

        {/* Grid Content */}
        <div className="container mx-auto px-4 py-24">
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-2">Poznaj nasze asortyment</h2>
            <div className="h-1 w-12 bg-[#2d5a27]" />
          </div>
          <GardenGrid initialPlants={plants} categories={categories} />
        </div>
      </div>
    </main>
  );
}
