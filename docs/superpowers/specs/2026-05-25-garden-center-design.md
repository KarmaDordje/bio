# Design Spec: Garden Center Implementation

Implementing a modern, dark-themed Garden Center catalog for the `bio` project, using data from the provided Polish plant variety table and a Sanity-backed CMS.

## 1. Goal
Create a `/garden-center` page that allows users to browse plant varieties categorized by type (Polish names). The UI will match the high-end dark aesthetic of the provided hero screenshot.

## 2. Architecture & Data Model

### 2.1 Sanity Schemas
We will add two new document types to the Sanity Studio.

**`plantCategory` (Document)**
- `title` (String): Polish name (e.g., "Drzewa i krzewy iglaste", "Byliny").
- `slug` (Slug): Generated from title.

**`plant` (Document)**
- `varietyName` (String): e.g., "Jeddeloch", "Aurea".
- `species` (String): e.g., "Choina kanadyjska", "Cis pospolity".
- `latinName` (String): e.g., "T. baccata".
- `characteristics` (Text): Description from the table (e.g., "pokrój rozłożysty, gęsty...").
- `category` (Reference): Reference to `plantCategory`.
- `price` (Number): Placeholder price for the prototype.
- `image` (Image): Main product image (using stock images).

## 3. UI/UX Design

### 3.1 Route: `/garden-center`
- **Theme:** Brand Dark (`#102a28`) background with Brand Cream (`#f7f0f0`) text.
- **Hero Section:** High-contrast section with "Plant Power for Your Space" and a "Shop Now" primary action.

### 3.2 Components
- **Category Filter:** A horizontal, scrollable list of Polish categories. Clicking a category filters the plant grid.
- **Plant Card:**
    - **Header:** Species + Variety (e.g., **Cis pospolity 'Aurea'**)
    - **Subtitle:** Latin name in italics.
    - **Description:** Small text for characteristics.
    - **Footer:** Placeholder price + circular arrow button (Lucide `ArrowRight`).
    - **Aesthetics:** Pure white background, high border radius (`rounded-2xl`), shadow on hover.

## 4. Implementation Details
- **Tech Stack:** Next.js 15 (App Router), Tailwind CSS, Framer Motion for entrance animations, `next-sanity` for data fetching.
- **Images:** Use Unsplash source URLs for the initial prototype data to avoid manual generation.
- **Language:** UI headers in English (per screenshot 1), data content (names, categories, descriptions) in Polish (per screenshot 2).

## 5. Success Criteria
- [ ] Sanity Studio updated with new schemas.
- [ ] `/garden-center` route accessible.
- [ ] Plant grid correctly displays varieties from the Polish table.
- [ ] Category filtering works.
- [ ] Aesthetic matches the dark-green hero design.
