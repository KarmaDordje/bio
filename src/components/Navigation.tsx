"use client";

import Link from "next/link";
import Image from "next/image";
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

  // Pages with light backgrounds at the top
  const isLightBgPage = pathname === "/contact" || pathname === "/about" || pathname === "/achievements";

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between md:justify-end px-6 md:px-8 pt-6 md:pt-8 pointer-events-none">
        {/* Mobile Logo (Visible only on mobile when menu is closed) */}
        <div className="md:hidden pointer-events-auto">
           {/* <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="Bio Logo" 
              width={60} 
              height={24} 
              className={cn(
                "h-6 w-auto object-contain transition-all",
                !isLightBgPage || scrolled || isOpen ? "brightness-0 invert" : ""
              )}
              priority
            />
          </Link> */}
        </div>

        {/* Desktop Navigation */}
        <nav className={cn(
          "hidden md:flex items-center gap-12 px-8 py-3 transition-all duration-300 pointer-events-auto rounded-full",
          scrolled ? "bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl" : "bg-transparent border-transparent"
        )}>
          {/* <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="Bio Logo" 
              width={70} 
              height={28} 
              className={cn(
                "h-7 w-auto object-contain transition-all",
                !isLightBgPage || scrolled ? "brightness-0 invert" : ""
              )}
              priority
            />
          </Link> */}
          <div className="flex gap-6 text-[10px] font-bold tracking-[0.2em] uppercase md:gap-8 md:text-[11px] text-white/50">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-white",
                  pathname === link.href ? "text-white" : ""
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Burger Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "md:hidden p-2 rounded-full transition-all pointer-events-auto",
            scrolled || isOpen ? "bg-white/10 backdrop-blur-md" : "bg-transparent"
          )}
        >
          {isOpen ? (
            <X className="size-6 text-white" />
          ) : (
            <Menu className={cn(
              "size-6 transition-colors",
              isLightBgPage && !scrolled ? "text-[#102a28]" : "text-white"
            )} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#102a28] flex flex-col items-center justify-center p-8 md:hidden"
          >
            <div className="flex flex-col items-center gap-8 w-full max-w-xs">
              {/* <Image 
                src="/images/logo.png" 
                alt="Bio Logo" 
                width={120} 
                height={48} 
                className="h-12 w-auto object-contain brightness-0 invert mb-8"
              /> */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-xl font-bold tracking-[0.3em] uppercase transition-all w-full text-center py-4 border-b border-white/10",
                    pathname === link.href ? "text-white" : "text-white/40 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
