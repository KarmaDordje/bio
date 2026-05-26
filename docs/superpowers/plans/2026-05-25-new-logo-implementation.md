# New Brand Logo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Modernize the 'Bio' company identity by implementing the new minimalist logo across all pages and ensuring it links to the home page.

**Architecture:** We will replace the text-based "BIO" logo with an optimized `<Image>` component in the shared `Navigation` component and ensure this component is used globally.

**Tech Stack:** Next.js (App Router), Tailwind CSS, Framer Motion.

---

### Task 1: Prepare Brand Asset

**Files:**
- Create: `public/images/logo.png`

- [ ] **Step 1: Copy selected logo to project directory**
Run: `cp /Users/aleksandrkarkac/nanobanana-output/a_sleek_modern_logo_for_a_nurser.png /Users/aleksandrkarkac/bio/public/images/logo.png`

- [ ] **Step 2: Verify file exists**
Run: `ls -l public/images/logo.png`
Expected: File exists with non-zero size.

- [ ] **Step 3: Commit**
```bash
git add public/images/logo.png
git commit -m "brand: add new minimalist logo asset"
```

### Task 2: Update Shared Navigation Component

**Files:**
- Modify: `src/components/Navigation.tsx`

- [ ] **Step 1: Replace text logo with Image component**
Update `src/components/Navigation.tsx` to import `Image` from `next/image` and replace the text "BIO" with the logo linked to `/`.

```tsx
// src/components/Navigation.tsx
import Link from "next/link";
import Image from "next/image"; // Add this
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// ... navLinks definition ...

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/images/logo.png" 
              alt="Bio Logo" 
              width={100} 
              height={40} 
              className="h-10 w-auto object-contain" 
              priority
            />
          </Link>
          <div className="hidden gap-6 md:flex">
            {/* ... navLinks.map ... */}
          </div>
        </div>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Commit**
```bash
git add src/components/Navigation.tsx
git commit -m "feat(ui): replace text logo with new brand image in Navigation"
```

### Task 3: Add Logo to Home Page Hero

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Add logo to the Home page navigation**
The home page has a custom navigation bar in the hero section. We should add the logo there as well for consistency.

```tsx
// src/app/page.tsx around line 70
          {/* Top Stylized Navigation */}
          <nav className="flex w-full items-center justify-between gap-8 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase md:gap-12 md:text-xs">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo.png" 
                alt="Bio Logo" 
                width={80} 
                height={32} 
                className="h-8 w-auto object-contain brightness-0 invert" 
                priority
              />
            </Link>
            <div className="flex gap-8 md:gap-12">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/garden-center" className="hover:text-white transition-colors">Garden</Link>
              <Link href="/fuel" className="hover:text-white transition-colors">Bio Fuels</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </nav>
```
*Note: Using `brightness-0 invert` to make the logo white for the dark hero background if needed.*

- [ ] **Step 2: Commit**
```bash
git add src/app/page.tsx
git commit -m "feat(ui): add logo to home page hero navigation"
```

### Task 4: Global Layout Integration

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Include Navigation in RootLayout**
Check if adding `Navigation` to `RootLayout` causes duplication on pages that already have it. If it's missing from `RootLayout`, add it.

```tsx
// src/app/layout.tsx
import { Navigation } from "@/components/Navigation"; // Add this

// ... root layout ...
      <body className="font-sans">
        <Navigation /> {/* Add this if missing */}
        {children}
      </body>
```

- [ ] **Step 2: Commit**
```bash
git add src/app/layout.tsx
git commit -m "feat(ui): ensure Navigation is included globally in RootLayout"
```
