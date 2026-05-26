import { getPaginatedPlants, getCategories } from "@/lib/plants";
import { GardenGrid } from "@/components/GardenGrid";
import Image from "next/image";
import { VerticalLabel } from "@/components/VerticalLabel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Centrum Ogrodnicze - Oferta Roślin",
  description: "Odkryj bogatą ofertę roślin ozdobnych: iglaki, krzewy liściaste, byliny i pnącza. Ponad 350 odmian dostępnych w naszych centrach ogrodniczych.",
  openGraph: {
    title: "Oferta Roślin - Szkółka Bilscy",
    description: "Szeroki asortyment krzewów ozdobnych i drzew do Twojego ogrodu.",
  }
}

export default async function GardenCenterPage() {
  const [plants, categories] = await Promise.all([
    getPaginatedPlants("All", 1, 12),
    getCategories(),
  ]);

  return (
    <main className="min-h-screen bg-[#102a28] text-[#f7f0f0] relative">
      <VerticalLabel isAbsolute className="border-white/5 hidden lg:flex" />
      
      <div>
        {/* Hero Section */}
        <section className="relative h-[35vh] md:h-[50vh] w-full flex items-center overflow-hidden">
          <Image
            src="/images/garden-hero.png"
            alt="Plant Nursery Hero"
            fill
            className="object-cover z-0"
            priority
            unoptimized
          />
          <div className="container relative z-10 mx-auto px-6">
            <header className="max-w-2xl mt-8 md:mt-0">
              <h1 className="font-serif text-2xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 leading-tight">
                Siła roślin <br />
                <span className="text-brand-cream/80">dla Twojej przestrzeni</span>
              </h1>
              <p className="hidden md:block text-white/80 text-base md:text-lg max-w-lg mb-0 md:mb-6 leading-relaxed">
                Znajdź idealne rośliny i dodatki do swojego otoczenia. 
                Nasza szkółka oferuje najwyższej jakości tuje, sosny oraz rośliny sezonowe.
              </p>
            </header>
          </div>
          {/* Gradient Transition to Content */}
          <div className="absolute bottom-0 left-0 w-full h-24 md:h-28 bg-gradient-to-t from-[#102a28] to-transparent z-10" />
        </section>

        {/* Grid Content */}
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="mb-6 md:mb-10">
            <h2 className="font-serif text-xl md:text-2xl font-bold mb-2">Poznaj nasz asortyment</h2>
            <div className="h-1 w-12 bg-[#2d5a27]" />
          </div>
          <GardenGrid initialPlants={plants} categories={categories} />
        </div>
      </div>
    </main>
  );
}
