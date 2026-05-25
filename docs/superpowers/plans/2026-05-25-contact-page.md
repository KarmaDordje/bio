# Contact Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a modern, high-aesthetic Contact page with an organic split background and a vertical branding sidebar.

**Architecture:** A Next.js page with a split-screen layout. The left side features a fixed vertical branding sidebar and a light-themed content area, while the right side uses an SVG wave-clipped dark background to house the contact locations.

**Tech Stack:** Next.js (App Router), Tailwind CSS, Framer Motion, Lucide React.

---

### Task 1: Create VerticalLabel Component

**Files:**
- Create: `src/components/VerticalLabel.tsx`

- [ ] **Step 1: Write the component code**

```tsx
import { TreePine } from "lucide-react"

export function VerticalLabel() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 border-r border-brand-dark/5 py-12 px-6">
      <div className="h-24 w-[1px] bg-brand-dark/20" />
      <div className="text-brand-dark/30 py-4">
        <TreePine className="size-6" />
      </div>
      <div className="h-24 w-[1px] bg-brand-dark/20" />
      <span className="[writing-mode:vertical-lr] text-[11px] font-bold tracking-[0.5em] text-brand-dark/60 uppercase rotate-180 mt-8">
        Kontakt
      </span>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/VerticalLabel.tsx
git commit -m "feat: add VerticalLabel component"
```

---

### Task 2: Scaffold Contact Page

**Files:**
- Create: `src/app/contact/page.tsx`

- [ ] **Step 1: Create the basic layout with VerticalLabel**

```tsx
import { VerticalLabel } from "@/components/VerticalLabel"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen bg-brand-cream overflow-hidden">
      <VerticalLabel />
      
      <div className="flex-1 flex flex-col md:flex-row relative">
        {/* Left Side (Light) */}
        <section className="flex-1 flex flex-col justify-center px-8 md:px-16 z-10">
          <nav className="absolute top-8 left-16 flex gap-8 text-[10px] font-bold tracking-[0.2em] text-brand-dark/40 uppercase">
            <Link href="/" className="hover:text-brand-dark transition-colors">Home</Link>
            <Link href="/contact" className="text-brand-dark">Contact</Link>
          </nav>

          <h1 className="font-serif text-5xl md:text-6xl font-bold text-brand-dark mb-6">
            Zapraszamy <br />
            <span className="font-script text-brand-green/80 text-6xl lowercase">do kontaktu</span>
          </h1>
          <p className="text-sm text-brand-dark/60 max-w-sm leading-relaxed">
            Nasze centra ogrodnicze oraz szkółka są do Państwa dyspozycji sześć dni w tygodniu. 
            Z przyjemnością pomożemy w doborze roślin i doradzimy w pielęgnacji ogrodu.
          </p>
        </section>

        {/* Right Side (Placeholder for Dark Area) */}
        <section className="w-full md:w-[50%] bg-brand-dark relative">
          {/* Wave will go here */}
        </section>
      </div>
    </main>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/contact/page.tsx
git commit -m "feat: scaffold contact page"
```

---

### Task 3: Implement SVG Background Wave

**Files:**
- Modify: `src/app/contact/page.tsx`

- [ ] **Step 1: Add the SVG Wave Path**

```tsx
{/* Right Side (Dark Area) */}
<section className="w-full md:w-[50%] bg-brand-dark relative flex flex-col justify-center px-12 md:px-20 text-white min-h-[500px]">
  {/* Organic Wave Layer */}
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <svg className="absolute top-0 -left-[150px] h-full w-[calc(100%+150px)]" preserveAspectRatio="none" viewBox="0 0 100 100">
      <path 
        d="M100,0 L100,100 L40,100 C55,80 65,65 45,50 C25,35 35,20 50,0 Z" 
        fill="#102a28" 
      />
    </svg>
  </div>
  
  <div className="relative z-10">
    {/* Locations will go here */}
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/app/contact/page.tsx
git commit -m "style: add organic svg wave to contact page"
```

---

### Task 4: Implement Location Details

**Files:**
- Modify: `src/app/contact/page.tsx`

- [ ] **Step 1: Define Location Data and Component**

```tsx
const locations = [
  {
    type: "Centrum Ogrodnicze",
    city: "Bydgoszcz",
    address: "ul. Grunwaldzka 84",
    phone: "(0-52) 3212588",
    email: "sklep@bio.com.pl"
  },
  {
    type: "Szkółka Roślin",
    city: "Bydgoszcz",
    address: "ul. Szamarzewskiego 12 a",
    phone: "(0-52) 3402812",
    email: "szkolka@bio.com.pl"
  },
  {
    type: "Centrum Ogrodnicze",
    city: "Białe Błota",
    address: "ul. Szubińska 87c",
    phone: "tel./fax (0-52) 3814361",
    email: "sklep@bio.com.pl"
  }
]

function LocationItem({ location }: { location: typeof locations[0] }) {
  return (
    <div className="mb-12 last:mb-0">
      <h4 className="text-[10px] tracking-[0.4em] uppercase text-brand-cream/40 mb-3 font-bold">
        {location.type}
      </h4>
      <h3 className="font-serif text-3xl mb-2 text-white">
        {location.city}
      </h3>
      <div className="space-y-1 text-sm text-brand-cream/70 font-light">
        <p>{location.address}</p>
        <p>{location.phone}</p>
        <p className="pt-2 text-[11px] tracking-wider uppercase font-medium text-brand-cream/40">
          e-mail: <span className="text-brand-cream/80 lowercase">{location.email}</span>
        </p>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Render locations in the dark area**

```tsx
<div className="relative z-10 py-20">
  {locations.map((loc, i) => (
    <LocationItem key={i} location={loc} />
  ))}
</div>
```

- [ ] **Step 3: Commit**

```bash
git add src/app/contact/page.tsx
git commit -m "feat: render location details on contact page"
```

---

### Task 5: Add Entrance Animations

**Files:**
- Modify: `src/app/contact/page.tsx`

- [ ] **Step 1: Add "use client" and Motion components**

```tsx
"use client"

import { motion } from "framer-motion"
// ... imports

// Inside ContactPage component:
// Wrap elements in motion.div

<motion.section 
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="flex-1 ..."
>
  {/* Left Content */}
</motion.section>

// Staggered animation for locations:
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

// In LocationItem:
<motion.div variants={item} className="mb-12 ...">
  {/* ... */}
</motion.div>
```

- [ ] **Step 2: Commit**

```bash
git add src/app/contact/page.tsx
git commit -m "style: add entrance animations to contact page"
```
