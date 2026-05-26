"use client"

import { TreePine, Instagram, Facebook, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { VerticalLabel } from "@/components/VerticalLabel"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen bg-[#f7f0f0] text-[#102a28] relative overflow-x-hidden">
      <VerticalLabel isAbsolute />
      
      <div className="flex-1 flex flex-col md:flex-row relative">
        {/* Left Side (Light) */}
        <motion.section 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 z-10 py-20"
        >
          <div className="space-y-8 max-w-2xl">
            <h1 className="font-serif text-5xl font-bold tracking-tight text-[#102a28] md:text-6xl">
              O nas
            </h1>

            <div className="space-y-6 text-[#102a28]/80 leading-relaxed text-lg">
              <p>
                Szkółka Krzewów Ozdobnych została założona przez inż. Grzegorza Bilskiego w 1978 roku. 
                Od początku działalności systematycznie zwiększała się skala produkcji oraz poszerzał 
                asortyment krzewów ozdobnych.
              </p>
              <p>
                Obecnie w szkółce produkowanych jest ponad 150 gatunków i odmian roślin iglastych oraz 
                ponad 200 gatunków i odmian roślin liściastych, w tym m.in. pnącza, różaneczniki oraz 
                rośliny wrzosowate. Lista asortymentowa jest co roku aktualizowana i rozbudowywana – 
                stopniowo rezygnujemy z gatunków i odmian mniej atrakcyjnych, wprowadzając w ich miejsce 
                nowe, ciekawsze propozycje.
              </p>
              <p>
                Wraz ze wzrostem produkcji zaczęła rozwijać się działalność handlowa. Od 1989 roku 
                powstawały kolejne punkty sprzedaży detalicznej, które początkowo służyły głównie 
                sprzedaży własnej produkcji, a z czasem przekształciły się w nowoczesne centra ogrodnicze.
              </p>
              <p>
                Szkółka brała udział w wielu wystawach regionalnych i ogólnopolskich, zdobywając liczne 
                wyróżnienia. Do najważniejszych należą: złoty medal na Krajowej Wystawie Ogrodniczej 
                (Polagra) w 1989 roku, dyplom za „Najlepszą ekspozycję stoiska” na Jarmarku Ogrodniczym 
                „Twój Ogród 2000” w Minikowie oraz Grand Prix Targów Turystyczno-Ogrodniczych – 
                Puchar Wojewody Kujawsko-Pomorskiego, przyznany 12 maja 2002 roku w Minikowie.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <div className="flex size-10 items-center justify-center rounded-full border border-[#102a28]/20 text-[#102a28]/40 transition-all hover:border-[#102a28]/40 hover:text-[#102a28] cursor-pointer">
                <Instagram className="size-4" />
              </div>
              <div className="flex size-10 items-center justify-center rounded-full border border-[#102a28]/20 text-[#102a28]/40 transition-all hover:border-[#102a28]/40 hover:text-[#102a28] cursor-pointer">
                <Facebook className="size-4" />
              </div>
              <div className="flex size-10 items-center justify-center rounded-full border border-[#102a28]/20 text-[#102a28]/40 transition-all hover:border-[#102a28]/40 hover:text-[#102a28] cursor-pointer">
                <Mail className="size-4" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Right Side (Dark Area) */}
        <section className="w-full md:w-[45%] bg-[#102a28] relative flex flex-col justify-end overflow-hidden min-h-[500px]">
          {/* Organic Wave Layer */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <svg className="absolute top-0 -left-[100px] md:-left-[150px] h-full w-[calc(100%+100px)] md:w-[calc(100%+150px)]" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path 
                d="M100,0 L100,100 L40,100 C55,80 65,65 45,50 C25,35 35,20 50,0 Z" 
                fill="#102a28" 
              />
            </svg>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative z-10 w-full h-full"
          >
             <Image
                src="/images/front.png"
                alt="Botanical illustration"
                fill
                className="object-contain object-bottom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102a28]/60 via-transparent to-transparent" />
          </motion.div>
        </section>
      </div>
    </main>
  )
}
