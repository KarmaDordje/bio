"use client"

import { TreePine, Trophy, Award, Star } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { VerticalLabel } from "@/components/VerticalLabel"

const achievements = [
  {
    year: "2005",
    title: "Wyróżnienie Specjalne",
    event: "Międzynarodowe Targi Rolno-Przemysłowe AGRO-TECH",
    location: "Minikowo",
    image: "/images/achievements/agrotech.jpg"
  },
  {
    year: "2005",
    title: "Wyróżnienie Dyrektora KPODR",
    event: "Targi Turystyczno-Ogrodnicze 'Lato na Wsi'",
    location: "Minikowo",
    image: "/images/achievements/lato.jpg"
  },
  {
    year: "2004",
    title: "Dyplom za udział",
    event: "X Jubileuszowe Targi Ogrodniczo-Nasienne",
    location: "Stare Pole",
    image: "/images/achievements/starepole.jpg"
  },
  {
    year: "2003",
    title: "GRAND-PRIX",
    event: "Wiosenna Wystawa Ogrodnicza 'POLKWIAT'",
    location: "Bydgoszcz",
    image: "/images/achievements/polkwiat.jpg"
  },
  {
    year: "2003",
    title: "Dyplom za udział",
    event: "X Żuławskie Targi Rolne",
    location: "2003",
    image: "/images/achievements/zul.jpg"
  },
  {
    year: "2002",
    title: "Grand Prix - Puchar Wojewody",
    event: "Targi Turystyczno-Ogrodnicze",
    location: "Minikowo",
    image: "/images/achievements/dyp2002.jpg"
  },
  {
    year: "2000",
    title: "Najlepsza ekspozycja stoiska",
    event: "Jarmark Ogrodniczy 'Twój Ogród'",
    location: "Minikowo",
    image: "/images/achievements/dyp2000.jpg"
  },
  {
    year: "1989",
    title: "Złoty Medal",
    event: "Krajowa Wystawa Ogrodnicza",
    location: "Poznań",
    image: "/images/achievements/dyp1.jpg"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function AchievementsClient() {
  return (
    <main className="flex min-h-screen bg-[#f7f0f0] text-[#102a28] relative overflow-x-hidden">
      <VerticalLabel isAbsolute />
      
      <div className="flex-1 flex flex-col md:flex-row relative">
        {/* Left Side (Light) - Content */}
        <motion.section 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="flex-1 px-8 md:px-16 lg:px-24 py-32"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-brand-dark/20" />
              <Trophy className="size-6 text-brand-dark/30" />
              <span className="text-[10px] font-bold tracking-[0.5em] text-brand-dark/60 uppercase">
                Nasze sukcesy
              </span>
            </div>
            
            <h1 className="font-serif text-5xl font-bold tracking-tight text-[#102a28] md:text-6xl mb-12">
              Osiągnięcia <br />
              <span className="font-script text-brand-green/80 text-6xl lowercase">i wyróżnienia</span>
            </h1>

            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            >
              {achievements.map((achievement, idx) => (
                <motion.div 
                  key={idx} 
                  variants={item}
                  className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-brand-dark/5"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6 bg-brand-dark/5">
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-brand-green text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest">
                      {achievement.year}
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-brand-green transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-brand-dark/60 leading-relaxed mb-1">
                    {achievement.event}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/30">
                    {achievement.location}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Right Side (Dark Area) - Decorative */}
        <section className="hidden md:flex w-[35%] bg-[#102a28] relative flex-col justify-end overflow-hidden">
          {/* Organic Wave Layer */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <svg className="absolute top-0 -left-[100px] h-full w-[calc(100%+100px)]" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path 
                d="M100,0 L100,100 L40,100 C55,80 65,65 45,50 C25,35 35,20 50,0 Z" 
                fill="#102a28" 
              />
            </svg>
          </div>
          
          <div className="relative z-10 p-12 text-white/20">
             <div className="space-y-12">
                <Award className="size-24 opacity-10" />
                <Star className="size-32 opacity-5 translate-x-12" />
                <Trophy className="size-20 opacity-10 -translate-x-8" />
             </div>
          </div>

          {/* Lush Botanical Layer - Consistent with About page */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 z-5 pointer-events-none"
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
