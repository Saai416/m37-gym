# Rock Fitness Landing — Premium Gym Brand

## Theme
**Dark-dominant (black #0a0a0a) with vibrant red accents (#d41e3a, #ff4757).** Nike/Peloton premium fitness aesthetic. Luxurious, energetic, welcoming. Glassmorphism + smooth animations.

## Fonts
| Role | Font | Style |
|------|------|-------|
| Display | General Sans | Bold geometric, modern, high-impact |
| Body | Figtree | Refined, tech-forward, legible |

## Color Palette (OKLCH)
| Token | Light | Dark | Purpose |
|-------|-------|------|----------|
| **background** | 0.98 0 0 (white) | 0.06 0 0 (pure black) | Page canvas |
| **foreground** | 0.1 0 0 (near black) | 0.98 0 0 (white) | Text on canvas |
| **primary** | 0.55 0.22 25 | 0.58 0.25 20 | Red accent (#d41e3a family) |
| **secondary** | 0.58 0.25 20 | 0.55 0.22 25 | Hot red (#ff4757 family) |
| **accent** | 0.55 0.22 25 | 0.58 0.25 20 | Interactive highlights |
| **muted** | 0.9 0 0 (light grey) | 0.18 0 0 (dark grey) | Backgrounds, borders |
| **border** | 0.85 0 0 (light) | 0.15 0 0 (dark) | Dividers, outlines |

## Structural Zones
| Zone | Background | Treatment | Purpose |
|------|------------|-----------|----------|
| **Navigation** | Dark (dark mode) with subtle top border | Sticky, red hover states | Persistent brand + CTA |
| **Hero** | Black gradient bg, animated shapes | Full-screen, fade-in animations | High-impact entry |
| **Features** | Light/white bg | Elevated cards, minimal shadow | Contrast, readability |
| **Services** | Dark (dark mode) | Glassmorphic cards, red glow on hover | Premium feel, focus |
| **Pricing** | Dark (dark mode) | Tiered cards, featured tier highlighted | Clear hierarchy |
| **Testimonials** | Light/warm neutral | Card-based with ratings | Social proof |
| **Footer** | Dark with subtle border-t | Minimal, clean links | Brand closure |

## Signature Patterns
- **Floating animations**: Geometric shapes (circles, squares) with 6s float loop
- **Glow pulse**: Red accent glow intensifies on card hover (2s cycle)
- **Glassmorphism**: `.glass` (light blur) and `.glass-dark` (dark blur) utilities
- **Gradient text**: `.gradient-brand` for headings (red to hot-red)
- **Smooth transitions**: All interactive elements use `transition-smooth` (0.3s cubic-bezier)
- **Fade-in on load**: Hero sections fade-in over 0.8s

## Motion Choreography
1. Page load: fade-in animations on hero headline + CTA buttons
2. Scroll reveal: stagger fade-in for feature/service cards
3. Hover: card lift (translate-y: -4px) + glow-pulse shadow
4. Background: continuous float animation on decorative shapes

## Typography Scale
- **Display H1**: 3.5rem, font-display, font-weight 700, letter-spacing -0.02em
- **Display H2**: 2.5rem, font-display, font-weight 700
- **Body P**: 1rem, font-body, font-weight 400, line-height 1.6
- **Body Small**: 0.875rem, font-body, font-weight 400

## Quality Bar
- AA+ contrast: white on black (18:1), red accent text legible on light bg
- No bouncy animations — smooth cubic-bezier easing
- Responsive: mobile-first, desktop-optimized 1400px max
- Dark mode always-on (no light mode toggle)
- Custom utilities loaded: gradient-brand, shadow-glow-red, glass, glass-dark
