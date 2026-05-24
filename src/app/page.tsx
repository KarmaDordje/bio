"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TreeDeciduous, Flame } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-brand-dark px-4 py-20 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
          >
            Profesjonalizm <br />
            <span className="text-brand-green">w Naturze</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-10 max-w-2xl text-xl text-gray-300 md:text-2xl"
          >
            Centrum Ogrodnicze i Dostawca Energii Odnawialnej. <br className="hidden md:block" />
            Dbamy o Twój ogród i ekologiczne ciepło Twojego domu.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link 
              href="#oferta"
              className="rounded-full bg-brand-green px-8 py-4 font-semibold text-white transition-all hover:bg-opacity-90 hover:shadow-lg active:scale-95"
            >
              Poznaj Ofertę
            </Link>
            <Link 
              href="/kontakt"
              className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all hover:bg-white hover:text-brand-dark active:scale-95"
            >
              Skontaktuj się
            </Link>
          </motion.div>
        </motion.div>

        {/* Background elements */}
        <div className="absolute top-1/2 left-1/2 -z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green/15 blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
      </section>

      {/* Split Entry Section */}
      <section id="oferta" className="grid min-h-[60vh] grid-cols-1 md:grid-cols-2">
        {/* Centrum Ogrodnicze */}
        <Link 
          href="/ogrodnictwo"
          className="group relative flex flex-col items-center justify-center overflow-hidden bg-white p-12 text-center transition-all md:p-24"
        >
          <div className="absolute inset-0 z-0 bg-brand-green/5 opacity-0 transition-all duration-500 group-hover:opacity-100" />
          
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="relative z-10 mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-brand-green/10 text-brand-green shadow-sm transition-colors group-hover:bg-brand-green group-hover:text-white"
          >
            <TreeDeciduous size={48} />
          </motion.div>
          
          <h2 className="relative z-10 mb-4 text-4xl font-bold text-brand-dark md:text-5xl">Centrum Ogrodnicze</h2>
          <p className="relative z-10 mb-10 max-w-md text-lg text-gray-600">
            Szeroki wybór roślin, narzędzi i akcesoriów ogrodowych. Tworzymy zielone przestrzenie z pasją od lat.
          </p>
          
          <div className="relative z-10 flex items-center gap-2 text-lg font-bold text-brand-green">
            Sprawdź ofertę <ArrowRight size={24} className="transition-transform group-hover:translate-x-2" />
          </div>
          
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-green transition-all duration-500 group-hover:w-full" />
        </Link>

        {/* Paliwa Bio */}
        <Link 
          href="/paliwa"
          className="group relative flex flex-col items-center justify-center overflow-hidden bg-brand-dark p-12 text-center text-white transition-all md:p-24"
        >
          <div className="absolute inset-0 z-0 bg-brand-green/10 opacity-0 transition-all duration-500 group-hover:opacity-100" />
          
          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            className="relative z-10 mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-brand-green/20 text-brand-green shadow-sm transition-colors group-hover:bg-brand-green group-hover:text-white"
          >
            <Flame size={48} />
          </motion.div>
          
          <h2 className="relative z-10 mb-4 text-4xl font-bold text-white md:text-5xl">Paliwa Bio</h2>
          <p className="relative z-10 mb-10 max-w-md text-lg text-gray-300">
            Najwyższej jakości pellet, brykiet i drewno kominkowe. Ekologiczne i wydajne źródła ciepła dla Twojego domu.
          </p>
          
          <div className="relative z-10 flex items-center gap-2 text-lg font-bold text-brand-green">
            Sprawdź ofertę <ArrowRight size={24} className="transition-transform group-hover:translate-x-2" />
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-green transition-all duration-500 group-hover:w-full" />
        </Link>
      </section>
    </main>
  );
}
