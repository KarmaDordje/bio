"use client"

import { motion } from "framer-motion"
import { TreePine, Flame, ArrowRight, Instagram, Facebook, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex h-screen w-full items-start justify-center overflow-hidden bg-[#f7f0f0]">
        {/* CSS Background Layer */}
        <div className="absolute inset-0 z-0 bg-[#f7f0f0]">
          {/* Dark Organic Shape */}
          <div 
            className="absolute inset-y-0 right-0 w-[60%] bg-[#102a28]"
            style={{
              clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 25% 75%, 45% 50%, 25% 25%, 0% 0%)",
              borderRadius: "0 0 0 100%", /* Soften the polygon edges */
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
       
                   {/* Middle Ground Layer */}
       <div className="absolute inset-0 z-5 translate-x-12 opacity-80
         pointer-events-none">
          <Image
            src="/images/middle_background-2.png"
            alt="Botanical middle ground"
            fill
            className="object-contain"
            priority
          />
        </div>
        {/* Mid-ground/Front Layer */}
        <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none h-full w-full">
          <Image
            src="/images/front.png"
            alt="Botanical front elements"
            fill
            className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            priority
          />
        </div>

        {/* Hero UI Container */}
        <div className="container relative z-20 flex h-full flex-col px-4 pt-[2rem]">
          {/* Left Side Decoration & Info */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-8 pointer-events-none hidden lg:flex">
            <div className="flex flex-col items-center gap-4">
              <div className="h-16 w-[1px] bg-brand-dark/20" />
              <TreePine className="size-6 text-brand-dark/30" />
              <div className="h-16 w-[1px] bg-brand-dark/20" />
            </div>
            <span className="[writing-mode:vertical-lr] text-[10px] font-bold tracking-[0.5em] text-brand-dark/60 uppercase rotate-180">
              Od 1978 roku
            </span>
          </div>

          {/* Top Stylized Navigation */}
          <nav className="flex w-full justify-end gap-8 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase md:gap-12 md:text-xs">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/garden-center" className="hover:text-white transition-colors">Garden</Link>
            <Link href="/fuel" className="hover:text-white transition-colors">Bio Fuels</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </nav>

          {/* Content Overlay - Positioned Top Right within Dark Area */}
          <div className="mt-20 ml-auto max-w-md text-center md:mt-32">
            <h1 className="font-serif text-5xl font-bold tracking-tight text-white md:text-6xl">
              Odkryj piękno <br />
              <span className="font-script text-brand-cream/90 text-6xl md:text-7xl lowercase drop-shadow-md">swojego ogrodu</span>
            </h1>
            
            {/* Stylized Icons Row */}
            <div className="mt-12 flex justify-center gap-6">
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

            {/* Action Buttons */}
            <div className="mt-12 flex flex-col gap-4 items-center">
              <Link
                href="/garden-center"
                className="group relative w-full overflow-hidden rounded-full border border-white/30 bg-white/10 p-[1px] shadow-2xl transition-all hover:border-white/50 active:scale-95"
              >
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white/10 px-8 py-4 backdrop-blur-2xl transition-all group-hover:bg-white/20">
                  <span className="text-xs font-bold tracking-[0.3em] uppercase">
                    <span className="text-white">Centrum</span>{" "}
                    <span className="text-white">Ogrodnicze</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
