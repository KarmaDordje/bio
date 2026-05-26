# Design Spec: New Brand Logo Implementation

## Objective
Modernize the 'Bio' company identity by replacing the legacy 1978 logo with a new, minimalist, and high-end botanical brand identity (selected Option 3).

## Proposed Changes

### 1. Brand Asset
- **Source**: AI-generated minimalist logo featuring an integrated leaf icon and the lowercase text 'bio'.
- **File Path**: `public/images/logo.png`
- **Format**: PNG (transparent background)

### 2. Navigation Implementation
The logo will be added to the navigation area of every page, ensuring consistent branding.

#### A. Shared Navigation Component (`src/components/Navigation.tsx`)
- Replace the text-based logo: `<span className="inline-block font-bold text-brand-green">BIO</span>`.
- Add a Next.js `<Image>` component wrapped in a `<Link href="/">`.
- **Styling**: 
  - Height: `40px` (or `h-10`) to fit the navbar.
  - Width: `auto` (maintain aspect ratio).
  - Priority: `true`.

#### B. Home Page Navigation (`src/app/page.tsx`)
- Add the new logo to the top stylized navigation or hero section.
- Ensure it links to `/`.

#### C. Layout Integration
- Ensure the `Navigation` component is included in the root layout (`src/app/layout.tsx`) or consistently across all page components to satisfy the "each page" requirement.

### 3. Click Behavior
- The logo (both the icon and text parts) must be wrapped in a `<Link href="/">` to always route the user back to the home page.

### 3. Global CSS & Brand Colors
- Ensure the colors in the logo (deep forest green and sage) are aligned with the project's Tailwind config or CSS variables if necessary (already appears to be consistent with the `#102a28` background used in the app).

## Testing & Verification
- **Visual Inspection**: Verify the logo is crisp, correctly scaled, and vertically centered in the navigation bar on desktop and mobile.
- **Link Verification**: Ensure the logo still functions as a home link (`/`).
- **Responsive Check**: Verify the navbar handles the logo width correctly on smaller screens.

## Success Criteria
- The legacy text-based logo is completely replaced.
- The new logo is visible and properly sized on all pages.
- The transition is seamless with no layout shifts.
