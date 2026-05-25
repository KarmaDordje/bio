# Garden Center Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement a modern, dark-themed Garden Center catalog page with Sanity-backed data for plant varieties.

**Architecture:** Extend existing Sanity schema with `plant` and `plantCategory` documents. Create a new `/garden-center` route in Next.js using Server Components for data fetching and Client Components for interactive filtering.

**Tech Stack:** Next.js 15, Sanity.io, Tailwind CSS 4, Framer Motion, Lucide React.

---

### Task 1: Sanity Schema Definition

**Files:**
- Create: `src/sanity/schemaTypes/plant.ts`
- Create: `src/sanity/schemaTypes/plantCategory.ts`
- Modify: `src/sanity/schemaTypes/index.ts`

- [ ] **Step 1: Create `plantCategory` schema**

```typescript
import { defineType, defineField } from 'sanity'

export const plantCategory = defineType({
  name: 'plantCategory',
  title: 'Kategoria Roślin',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
  ],
})
```

- [ ] **Step 2: Create `plant` schema**

```typescript
import { defineType, defineField } from 'sanity'

export const plant = defineType({
  name: 'plant',
  title: 'Roślina',
  type: 'document',
  fields: [
    defineField({ name: 'varietyName', title: 'Nazwa odmiany', type: 'string' }),
    defineField({ name: 'species', title: 'Gatunek', type: 'string' }),
    defineField({ name: 'latinName', title: 'Nazwa łacińska', type: 'string' }),
    defineField({ name: 'characteristics', title: 'Charakterystyka', type: 'text' }),
    defineField({
      name: 'category',
      title: 'Kategoria',
      type: 'reference',
      to: [{ type: 'plantCategory' }],
    }),
    defineField({ name: 'price', title: 'Cena (placeholder)', type: 'number' }),
    defineField({ name: 'image', title: 'Zdjęcie', type: 'image', options: { hotspot: true } }),
  ],
})
```

- [ ] **Step 3: Register schemas**

```typescript
// src/sanity/schemaTypes/index.ts
import { type SchemaTypeDefinition } from 'sanity'
import { news } from './news'
import { project } from './project'
import { fuel } from './fuel'
import { plant } from './plant'
import { plantCategory } from './plantCategory'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [news, project, fuel, plant, plantCategory],
}
```

- [ ] **Step 4: Commit**
`git add src/sanity/schemaTypes/ && git commit -m "feat(sanity): add plant and plantCategory schemas"`

---

### Task 2: Data Fetching and Types

**Files:**
- Create: `src/lib/plants.ts`

- [ ] **Step 1: Create GROQ queries and types**

```typescript
import { client } from "@/sanity/lib/client";

export type Plant = {
  _id: string;
  varietyName: string;
  species: string;
  latinName: string;
  characteristics: string;
  price: number;
  imageUrl: string;
  category: string;
};

export async function getPlants() {
  return await client.fetch(`
    *[_type == "plant"]{
      _id,
      varietyName,
      species,
      latinName,
      characteristics,
      price,
      "imageUrl": image.asset->url,
      "category": category->title
    }
  `);
}

export async function getCategories() {
  return await client.fetch(`*[_type == "plantCategory"]{ _id, title, "slug": slug.current }`);
}
```

- [ ] **Step 2: Commit**
`git add src/lib/plants.ts && git commit -m "feat(api): add plant fetching logic"`

---

### Task 3: Plant Card Component

**Files:**
- Create: `src/components/PlantCard.tsx`

- [ ] **Step 1: Implement card with dark aesthetic**

```tsx
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Plant } from "@/lib/plants";

export function PlantCard({ plant }: { plant: Plant }) {
  return (
    <div className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="aspect-square relative rounded-xl overflow-hidden mb-4 bg-gray-100">
        {plant.imageUrl && (
          <Image src={plant.imageUrl} alt={plant.varietyName} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        )}
      </div>
      <div className="space-y-1">
        <h3 className="font-bold text-lg text-[#102a28] leading-tight">
          {plant.species} '{plant.varietyName}'
        </h3>
        <p className="text-xs text-gray-400 italic font-medium uppercase tracking-wider">{plant.latinName}</p>
        <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed mt-2">{plant.characteristics}</p>
      </div>
      <div className="flex justify-between items-center mt-6">
        <span className="font-bold text-[#102a28] text-lg">${plant.price.toFixed(2)}</span>
        <button className="size-10 bg-[#102a28] rounded-full flex items-center justify-center text-white hover:bg-[#2d5a27] transition-colors">
          <ArrowRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**
`git add src/components/PlantCard.tsx && git commit -m "feat(ui): add PlantCard component"`

---

### Task 4: Garden Center Page Implementation

**Files:**
- Create: `src/app/garden-center/page.tsx`
- Create: `src/components/GardenGrid.tsx` (Client Component for filtering)

- [ ] **Step 1: Implement main page (Server Component)**

```tsx
import { getPlants, getCategories } from "@/lib/plants";
import { GardenGrid } from "@/components/GardenGrid";

export default async function GardenCenterPage() {
  const [plants, categories] = await Promise.all([getPlants(), getCategories()]);

  return (
    <main className="min-h-screen bg-[#102a28] text-[#f7f0f0] pt-24 pb-32">
      <div className="container mx-auto px-4">
        <header className="mb-16 max-w-2xl">
          <h1 className="font-serif text-5xl font-bold mb-6">Plant Power for Your Space</h1>
          <p className="text-white/60 text-lg">Find the perfect plants and essentials for a greener home.</p>
          <button className="mt-8 px-8 py-3 bg-white/10 border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-white/20 transition-all">
            Shop Now
          </button>
        </header>

        <GardenGrid initialPlants={plants} categories={categories} />
      </div>
    </main>
  );
}
```

- [ ] **Step 2: Implement filtering logic (Client Component)**

```tsx
"use client";

import { useState } from "react";
import { PlantCard } from "./PlantCard";
import { Plant } from "@/lib/plants";
import { motion, AnimatePresence } from "framer-motion";

export function GardenGrid({ initialPlants, categories }: { initialPlants: any[], categories: any[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPlants = activeCategory === "All" 
    ? initialPlants 
    : initialPlants.filter(p => p.category === activeCategory);

  return (
    <div className="space-y-12">
      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        {["All", ...categories.map(c => c.title)].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap px-6 py-2 rounded-full text-xs font-bold transition-all border ${
              activeCategory === cat 
                ? "bg-[#2d5a27] border-[#2d5a27] text-white" 
                : "border-white/10 hover:border-white/30 text-white/60"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredPlants.map((plant) => (
            <motion.div
              key={plant._id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <PlantCard plant={plant} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
```

- [ ] **Step 3: Commit**
`git add src/app/garden-center/page.tsx src/components/GardenGrid.tsx && git commit -m "feat(page): implement garden center with filtering"`
