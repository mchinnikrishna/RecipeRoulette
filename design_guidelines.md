# E-commerce Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern e-commerce platforms like Shopify and premium fashion retailers, focusing on dark mode aesthetics with neon accents for a contemporary, tech-forward feel.

## Core Design Elements

### A. Color Palette
**Dark Mode Primary:**
- Background: 220 15% 8% (deep charcoal)
- Surface: 220 15% 12% (elevated charcoal)
- Text Primary: 0 0% 95% (near white)
- Text Secondary: 0 0% 70% (muted gray)

**Accent Colors:**
- Primary Neon: 120 100% 50% (electric green)
- Secondary Accent: 120 80% 40% (forest green)
- Error/Warning: 0 85% 60% (coral red)

**Gradients:**
- Hero overlay: Subtle gradient from 220 15% 8% to 120 20% 12%
- Button highlights: Linear gradient from primary neon to secondary accent

### B. Typography
**Font Stack:** Inter (Google Fonts)
- Headers: 600-800 weight, tracking tight
- Body text: 400-500 weight, leading relaxed
- Product prices: 600 weight, slightly larger scale
- Buttons: 500 weight, uppercase tracking

### C. Layout System
**Tailwind Spacing Units:** Consistent use of 2, 4, 8, 12, 16, 24 units
- Component padding: p-4, p-8
- Section spacing: mb-8, mb-12, mb-16
- Grid gaps: gap-4, gap-8
- Container margins: mx-4, mx-8

### D. Component Library

**Header:** Sticky navigation with logo left, cart icon and login button right, semi-transparent background with backdrop blur

**ProductCard:** 
- Dark surface with subtle border
- Product image with hover scale effect
- Clean typography hierarchy
- Neon green "Add to Cart" button
- Price prominently displayed

**Hero Section:**
- Full viewport height
- Dark gradient overlay on background
- Large typography with neon accent
- Single prominent CTA button with outline variant and blurred background

**Navigation:**
- Clean, minimal menu
- Neon hover states
- Mobile hamburger with slide-out drawer

**Forms:**
- Dark input fields with neon focus states
- Consistent button styling
- Clear error messaging in coral red

**Footer:**
- Multi-column layout
- Muted text with selective neon accents
- Social media icons

### E. Animations
Minimal and purposeful only:
- Subtle hover scale on product cards (1.02x)
- Smooth transitions on navigation states (200ms ease)
- Loading states with neon pulse effect

## Images
**Hero Image:** Large, atmospheric lifestyle image showcasing vintage clothing in moody lighting, positioned as full-width background with dark overlay

**Product Images:** High-quality, well-lit product photography on neutral backgrounds, consistent aspect ratios (4:5 portrait orientation)

**Category Banners:** Lifestyle images representing different vintage categories, used as section backgrounds with overlay text

**About/Story Images:** Curated vintage aesthetic images supporting brand narrative, used sparingly for authenticity

## Key Design Principles
1. **Contrast Excellence:** High contrast between dark backgrounds and neon accents ensures accessibility
2. **Visual Hierarchy:** Clear information architecture using size, weight, and color
3. **Breathing Room:** Generous whitespace prevents visual clutter
4. **Consistent Interaction:** Unified button styles and hover states across all components
5. **Mobile-First:** Responsive design prioritizing mobile shopping experience