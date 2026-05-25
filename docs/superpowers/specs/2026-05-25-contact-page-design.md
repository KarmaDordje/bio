# Contact Page Design - 2026-05-25

## Overview
Create a modern, high-aesthetic Contact page for the "Bio" project that replaces the legacy design with a style matching the new botanical-themed Home page. The design features an organic split background, a signature vertical sidebar, and high-readability typography.

## Design Details

### Visual Aesthetic
- **Split Background:** An organic, fluid split using a dark green (`#102a28`) SVG wave shape over a cream (`#f7f0f0`) background.
- **Vertical Sidebar:** A branding element on the far left featuring a vertical line, a `TreePine` icon, and the rotated text "KONTAKT".
- **Color Palette:**
  - Background Light: `#f7f0f0` (brand-cream)
  - Background Dark: `#102a28` (brand-dark)
  - Text Light: `#f7f0f0` (on dark)
  - Text Dark: `#102a28` (on light)

### Content Structure
The page will display three primary business locations:
1. **Punkt Sprzedaży Detalicznej - Bydgoszcz**
   - Address: ul. Grunwaldzka 84
   - Phone: (0-52) 3212588
2. **Szkółka Ogrodnicza - Bydgoszcz**
   - Address: ul. Szamarzewskiego 12 a
   - Phone: (0-52) 3402812
3. **Punkt Sprzedaży Detalicznej - Białe Błota**
   - Address: ul. Szubińska 87c
   - Phone: (0-52) 3814361

### Components
- `src/app/contact/page.tsx`: Main page component.
- `src/components/VerticalLabel.tsx`: Reusable sidebar component.
- `LocationItem`: Internal component for location details on the dark background.

## Technical Requirements
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS + Vanilla CSS for complex SVG/Clip-path shapes.
- **Animations:** `framer-motion` for page transitions and staggering the entry of location items.
- **Responsiveness:** 
  - Desktop: Split view as designed.
  - Mobile: Stacked view with the organic wave transitioning horizontally.

## Implementation Plan
1. Scaffolding the `/contact` route.
2. Building the `VerticalLabel` component.
3. Implementing the SVG background wave.
4. Mapping and styling the three locations.
5. Adding entrance animations.
