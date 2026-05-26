import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Playfair_Display, Great_Vibes } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navigation } from "@/components/Navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const script = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Bilscy.pl - Szkółka Krzewów Ozdobnych",
    default: "Bilscy.pl - Szkółka Krzewów Ozdobnych i Biopaliwa",
  },
  description: "Profesjonalna szkółka krzewów ozdobnych z tradycją od 1978 roku. Oferujemy ponad 350 odmian roślin iglastych i liściastych oraz wysokiej jakości biopaliwa.",
  keywords: ["szkółka roślin", "krzewy ozdobne", "iglaki", "rośliny liściaste", "biopaliwa", "pellet", "ogród"],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://bilscy.pl",
    siteName: "Bilscy.pl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("antialiased", montserrat.variable, playfair.variable, script.variable)} suppressHydrationWarning>
      <body className="font-sans">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
