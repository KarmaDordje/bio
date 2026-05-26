"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

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
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-end px-8 pt-8 pointer-events-none">
      <nav className={cn(
        "flex items-center gap-12 px-8 py-3 transition-all duration-300 pointer-events-auto rounded-full",
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
    </div>
  );
}
