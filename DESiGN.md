---
name: Verdant Sanctuary
colors:
  surface: "#fbf9f4"
  surface-dim: "#dbdad5"
  surface-bright: "#fbf9f4"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f5f3ee"
  surface-container: "#f0eee9"
  surface-container-high: "#eae8e3"
  surface-container-highest: "#e4e2dd"
  on-surface: "#1b1c19"
  on-surface-variant: "#434843"
  inverse-surface: "#30312e"
  inverse-on-surface: "#f2f1ec"
  outline: "#737973"
  outline-variant: "#c3c8c1"
  surface-tint: "#4d6453"
  primary: "#061b0e"
  on-primary: "#ffffff"
  primary-container: "#1b3022"
  on-primary-container: "#819986"
  inverse-primary: "#b4cdb8"
  secondary: "#426920"
  on-secondary: "#ffffff"
  secondary-container: "#bfee95"
  on-secondary-container: "#466d24"
  tertiary: "#221500"
  on-tertiary: "#ffffff"
  tertiary-container: "#3b2804"
  on-tertiary-container: "#ab8e61"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#d0e9d4"
  primary-fixed-dim: "#b4cdb8"
  on-primary-fixed: "#0b2013"
  on-primary-fixed-variant: "#364c3c"
  secondary-fixed: "#c2f198"
  secondary-fixed-dim: "#a6d47e"
  on-secondary-fixed: "#0c2000"
  on-secondary-fixed-variant: "#2b5008"
  tertiary-fixed: "#ffdeab"
  tertiary-fixed-dim: "#e2c290"
  on-tertiary-fixed: "#271900"
  on-tertiary-fixed-variant: "#59431c"
  background: "#fbf9f4"
  on-background: "#1b1c19"
  surface-variant: "#e4e2dd"
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 56px
    fontWeight: "500"
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 40px
    fontWeight: "500"
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: "500"
    lineHeight: 40px
  headline-sm:
    fontFamily: EB Garamond
    fontSize: 24px
    fontWeight: "600"
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: "600"
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 16px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

This design system is built to evoke the tranquility of a botanical garden, focusing on peace, growth, and natural wisdom. The aesthetic direction combines **Modern Minimalism** with **Organic Tactility**.

The brand personality is authoritative yet welcoming—like a seasoned gardener. To achieve this, the UI prioritizes generous whitespace (breathing room), high-quality photography, and soft, natural transitions. The emotional response should be one of decompression and clarity. Surfaces feel like physical cards placed on a clean potting bench, utilizing subtle depth to separate information without creating visual noise.

## Colors

The palette is derived directly from the forest floor and canopy.

- **Primary (#1B3022):** "Deep Forest." Used for primary navigation, headings, and high-impact UI elements to provide grounding and authority.
- **Secondary (#4F772D):** "Vibrant Leaf." Used for interactive elements, success states, and accents that signify life and growth.
- **Tertiary (#967B4F):** "Earthed Umber." A warm brown used for secondary actions, subtle borders, or functional icons that relate to the soil and structure.
- **Neutral (#F9F7F2):** "Pressed Linen." An off-white, cream base for backgrounds to reduce eye strain and provide a softer contrast than pure white.

Functional colors (error/warning) should be desaturated to maintain the serene atmosphere.

## Typography

This design system utilizes a sophisticated pairing of an editorial serif and a precision sans-serif.

**EB Garamond** is used for all headlines to convey a sense of history, wisdom, and the "literary" nature of botanical studies. For larger displays, use a slightly tighter letter-spacing to maintain elegance.

**Hanken Grotesk** handles all functional and body text. It is a contemporary, highly legible sans-serif that ensures descriptions and scientific names are easy to scan. Body text should maintain a generous line-height to mirror the "open space" philosophy of the layout. All labels (caps or small caps) should have increased tracking for better legibility at small sizes.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop, centered within the viewport to maintain focus. We use a 12-column grid for maximum flexibility in plant galleries and informational layouts.

- **Vertical Rhythm:** A strict 8px baseline grid is used. However, section-to-section spacing is intentionally oversized (120px+) to allow the eye to rest between different botanical collections.
- **Mobile Adaptation:** On mobile devices, the 12-column grid collapses to a 2-column or 1-column layout. Margins shrink to 20px, but the "unit" remains 8px to ensure touch targets remain accessible.
- **Safe Areas:** High-quality imagery should often break the grid (full-bleed) to create an immersive, "overgrown" feeling that contrasts with the structured data.

## Elevation & Depth

To maintain a serene, flat-lay aesthetic, we avoid heavy, dark shadows. Instead, we use **Ambient Tonal Layers** and **Tinted Shadows**:

1.  **Low Elevation (Cards):** Use a very soft, diffused shadow tinted with the Primary color (e.g., hex #1B3022 at 5% opacity). This makes the card feel like it's floating just above the cream surface.
2.  **High Elevation (Modals/Overlays):** Use a larger blur radius (32px+) with a slightly higher opacity (10%) and a backdrop blur (8px) to create a frosted-glass effect that mimics morning mist.
3.  **Depth via Color:** Information hierarchy is primarily established through tonal layering (e.g., a slightly darker cream surface on top of the base neutral background) rather than shadow intensity.

## Shapes

The shape language is **Organic and Soft**.

- **Containers:** Standard cards and input fields use a `0.5rem` radius to feel approachable.
- **Interactive Elements:** Buttons and Chips utilize the `rounded-xl` or `Pill-shaped` setting to mimic the form of smooth river stones or leaves.
- **Image Treatment:** Use subtle "squircle" masks or varying corner radii for large botanical hero shots to avoid the clinical feel of sharp 90-degree corners.

## Components

### Buttons & Inputs

- **Primary Button:** Filled with `Primary Forest`, using white `Label-md` text. High roundedness.
- **Secondary Button:** Outlined in `Tertiary Umber` with a 1.5px stroke.
- **Input Fields:** Soft cream background (slightly darker than page background) with a bottom-only border in `Tertiary` to feel less boxed-in.

### Chips (Categorization)

- Used for plant families (e.g., "Ferns", "Succulents").
- Styles: Light `Secondary` background with `Primary` text. Always pill-shaped.

### Plant Cards

- The core of the system. Images should have a 4:5 aspect ratio (vertical) to mimic field guides.
- Content is bottom-aligned with a subtle gradient overlay to ensure `Headline-sm` text is legible over the image.

### Immersive Hero

- Uses full-bleed high-resolution nature photography.
- Typography is centered or left-aligned using `Display-lg`.
- Incorporate a "Scroll Indicator" component using a thin vertical line in `Tertiary Umber` to encourage exploration.

### Progress Indicators

- Use an organic leaf-growth animation or a simple thin line in `Secondary Leaf Green`. Avoid standard circular "spinners" which feel too mechanical.
