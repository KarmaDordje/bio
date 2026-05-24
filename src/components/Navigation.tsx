"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Strona główna" },
  { href: "/garden-center", label: "Centrum ogrodnicze" },
  { href: "/nursery", label: "Szkółka" },
  { href: "/fuel", label: "Paliwa" },
  { href: "/projects", label: "Projekty" },
  { href: "/offer", label: "Oferta" },
  { href: "/news", label: "Aktualności" },
  { href: "/about", label: "O nas" },
  { href: "/contact", label: "Kontakt" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold text-brand-green">BIO</span>
          </Link>
          <div className="hidden gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-brand-green",
                  pathname === link.href
                    ? "text-brand-green"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
