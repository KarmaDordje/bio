import { VerticalLabel } from "@/components/VerticalLabel"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen bg-brand-cream overflow-x-hidden">
      <VerticalLabel />
      
      <div className="flex-1 flex flex-col md:flex-row relative">
        {/* Left Side (Light) */}
        <section className="flex-1 flex flex-col justify-center px-8 md:px-16 z-10">
          <nav className="absolute top-8 left-16 flex gap-8 text-[10px] font-bold tracking-[0.2em] text-brand-dark/40 uppercase">
            <Link href="/" className="hover:text-brand-dark transition-colors">Home</Link>
            <Link href="/contact" className="text-brand-dark">Contact</Link>
          </nav>

          <h1 className="font-serif text-5xl md:text-6xl font-bold text-brand-dark mb-6">
            Zapraszamy <br />
            <span className="font-script text-brand-green/80 text-6xl lowercase">do kontaktu</span>
          </h1>
          <p className="text-sm text-brand-dark/60 max-w-sm leading-relaxed">
            Nasze centra ogrodnicze oraz szkółka są do Państwa dyspozycji sześć dni w tygodniu. 
            Z przyjemnością pomożemy w doborze roślin i doradzimy w pielęgnacji ogrodu.
          </p>
        </section>

        {/* Right Side (Dark Area) */}
        <section className="w-full md:w-[50%] bg-brand-dark relative flex flex-col justify-center px-12 md:px-20 text-white min-h-[500px]">
          {/* Organic Wave Layer */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <svg className="absolute top-0 -left-[150px] h-full w-[calc(100%+150px)]" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path 
                d="M100,0 L100,100 L40,100 C55,80 65,65 45,50 C25,35 35,20 50,0 Z" 
                fill="#102a28" 
              />
            </svg>
          </div>
          
          <div className="relative z-10">
            {/* Locations will go here */}
          </div>
        </section>
      </div>
    </main>
  )
}
