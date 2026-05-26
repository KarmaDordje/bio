"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Instagram, Facebook, Mail, TreePine, Star, MapPin, MessageCircle, Heart, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FloatingLeaves } from "@/components/FloatingLeaves"
import { useRef } from "react"

export function HomeClient() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const yPlants = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <main ref={containerRef} className="flex min-h-screen flex-col bg-[#102a28] md:bg-[#f7f0f0] relative">
      {/* Hero Section */}
      <section className="relative flex h-screen w-full items-start justify-center overflow-hidden">
        {/* <FloatingLeaves /> */}
        
        {/* Desktop CSS Background Layer */}
        <div className="absolute inset-0 z-0 bg-[#f7f0f0] hidden md:block">
          {/* Dark Organic Shape */}
          <div 
            className="absolute inset-y-0 right-0 w-[60%] bg-[#102a28]"
            style={{
              clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 25% 75%, 45% 50%, 25% 25%, 0% 0%)",
              borderRadius: "0 0 0 100%", 
            }}
          />
          {/* Smooth SVG Wave Overlay for perfect curves */}
          <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path 
              d="M100,0 L100,100 L60,100 C75,85 85,70 65,50 C45,30 55,15 70,0 Z" 
              fill="#102a28" 
            />
          </svg>
        </div>

        {/* Mobile Background Layer */}
        <div className="absolute inset-0 z-0 bg-[#102a28] md:hidden" />
       
        {/* Middle Ground Layer */}
        <div className="absolute inset-0 z-5 translate-x-12 opacity-80 pointer-events-none">
          <Image
            src="/images/middle_background-2.png"
            alt="Botanical middle ground"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Mid-ground/Front Layer */}
        <motion.div 
          style={{ y: yPlants }}
          className="absolute inset-x-0 bottom-0 z-10 pointer-events-none h-full w-full"
        >
          <Image
            src="/images/front_bg_pines.png"
            alt="Botanical front elements"
            fill
            className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            priority
          />
        </motion.div>

        {/* Hero UI Container */}
        <div className="container relative z-20 flex h-full flex-col px-4 pt-[2rem]">
          {/* Left Side Trust Sidebar */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-10 items-start pointer-events-none">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4 group">
                <div className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm border border-brand-dark/5 transition-all group-hover:bg-brand-dark group-hover:text-white">
                  <TreePine className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-brand-dark">500+ gatunków</span>
                  <span className="text-[9px] text-brand-dark/40 font-medium uppercase leading-tight">Roślin w ofercie</span>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm border border-brand-dark/5 transition-all group-hover:bg-brand-dark group-hover:text-white">
                  <Star className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-brand-dark">Zaufanie</span>
                  <span className="text-[9px] text-brand-dark/40 font-medium uppercase leading-tight">Opinie klientów</span>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm border border-brand-dark/5 transition-all group-hover:bg-brand-dark group-hover:text-white">
                  <MapPin className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-brand-dark">Lokalna uprawa</span>
                  <span className="text-[9px] text-brand-dark/40 font-medium uppercase leading-tight">Bydgoszcz & Białe Błota</span>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm border border-brand-dark/5 transition-all group-hover:bg-brand-dark group-hover:text-white">
                  <MessageCircle className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-brand-dark">Doradztwo</span>
                  <span className="text-[9px] text-brand-dark/40 font-medium uppercase leading-tight">Ekspercka wiedza</span>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm border border-brand-dark/5 transition-all group-hover:bg-brand-dark group-hover:text-white">
                  <Heart className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-brand-dark">Rodzinna firma</span>
                  <span className="text-[9px] text-brand-dark/40 font-medium uppercase leading-tight">Pasja od 1978 roku</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pl-4 opacity-30">
              <div className="h-20 w-[1px] bg-brand-dark" />
              <span className="[writing-mode:vertical-lr] text-[9px] font-bold tracking-[0.5em] text-brand-dark uppercase rotate-180">
                Poczuj naturę
              </span>
            </div>
          </div>

          {/* Content Overlay - Centered on mobile, Right-aligned on desktop */}
          <motion.div 
            style={{ opacity: opacityHero }}
            className="mt-20 mx-auto md:ml-auto md:mr-0 max-w-md text-center md:mt-32"
          >
            {/* Seasonal Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cream/20 backdrop-blur-md border border-white/10 mb-8"
            >
              <Sparkles className="size-3 text-brand-cream" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/80">Sezon 2026: Kolekcja Wiosenna</span>
            </motion.div>

            <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-6xl">
              Odkryj piękno <br />
              <span className="font-script text-brand-cream/90 text-5xl md:text-7xl lowercase drop-shadow-md">swojego ogrodu</span>
            </h1>
            
            {/* Category Entry Points */}
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {[
                { label: "Iglaki", href: "/garden-center?cat=Drzewa%20i%20krzewy%20iglaste" },
                { label: "Liściaste", href: "/garden-center?cat=Rośliny%20liściaste%20o%20liściach%20sezonowych" },
                { label: "Pnącza", href: "/garden-center?cat=Pnącza" }
              ].map((cat) => (
                <Link 
                  key={cat.label} 
                  href={cat.href}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all text-[9px] font-bold tracking-widest uppercase text-white/60 hover:text-white"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="mt-12 flex flex-col gap-4 items-center">
              <Link
                href="/garden-center"
                className="group relative w-auto overflow-hidden rounded-full border-2 border-brand-cream/50 bg-white/10 shadow-2xl transition-all hover:border-brand-cream hover:scale-[1.02] active:scale-95"
              >
                <div className="flex h-full w-full items-center justify-center rounded-full bg-brand-green/20 px-12 py-5 backdrop-blur-2xl transition-all group-hover:bg-brand-green/40">
                  <span className="text-sm font-bold tracking-[0.4em] uppercase text-white drop-shadow-sm flex items-center gap-3">
                    Poznaj rośliny <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </div>

            {/* Stylized Icons Row */}
            <div className="mt-16 flex justify-center gap-6">
              <div className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white/40 transition-all hover:border-white/40 hover:text-white cursor-pointer">
                <Instagram className="size-4" />
              </div>
              <div className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white/40 transition-all hover:border-white/40 hover:text-white cursor-pointer">
                <Facebook className="size-4" />
              </div>
              <div className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white/40 transition-all hover:border-white/40 hover:text-white cursor-pointer">
                <Mail className="size-4" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
