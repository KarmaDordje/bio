"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Start" },
  { href: "/garden-center", label: "Centrum" },
  { href: "/achievements", label: "Osiągnięcia" },
  { href: "/about", label: "O nas" },
  { href: "/contact", label: "Kontakt" },
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-end px-6 md:px-12 pt-6 md:pt-10 pointer-events-none">
        {/* Desktop Navigation */}
        <nav className={cn(
          "hidden md:flex items-center gap-2 px-3 py-2 transition-all duration-500 pointer-events-auto rounded-full border",
          scrolled 
            ? "bg-[#102a28]/80 border-white/20 backdrop-blur-xl shadow-2xl scale-100" 
            : "bg-transparent border-transparent scale-105"
        )}>
          <div className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-5 py-2.5 rounded-full text-[11px] lg:text-[12px] font-extrabold tracking-[0.25em] uppercase transition-all duration-300",
                    isActive 
                      ? "text-[#102a28] bg-brand-cream shadow-md" 
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-brand-cream rounded-full -z-10"
                      transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Mobile Burger Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "md:hidden p-3 rounded-full transition-all duration-300 pointer-events-auto border",
            scrolled || isOpen 
              ? "bg-[#102a28] border-white/10 shadow-xl" 
              : "bg-white/10 border-white/10"
          )}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="size-6 text-white" />
          ) : (
            <Menu className="size-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[#102a28] flex flex-col items-center justify-center p-8 md:hidden"
          >
            <div className="flex flex-col items-center gap-4 w-full max-w-xs">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-black tracking-[0.4em] uppercase transition-all w-full text-center py-5 rounded-2xl border-2",
                      isActive 
                        ? "text-[#102a28] bg-brand-cream border-brand-cream" 
                        : "text-white/40 border-transparent hover:text-white hover:border-white/10"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            
            {/* Social or Decorative element in mobile menu */}
            <div className="absolute bottom-12 opacity-20">
               <div className="h-[1px] w-12 bg-white mb-4 mx-auto" />
               <p className="text-[10px] font-bold tracking-[0.5em] text-white uppercase">Szkółka Bilscy</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
