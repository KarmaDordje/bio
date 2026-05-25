import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Playfair_Display, Great_Vibes } from "next/font/google";
import { cn } from "@/lib/utils";

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
  title: "Bio Remake",
  description: "Modern gardening and bio-fuel sales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("antialiased", montserrat.variable, playfair.variable, script.variable)}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
