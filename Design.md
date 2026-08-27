---
version: beta
name: Nexus-Portfolio-Design
description: A futuristic, data-driven portfolio interface built on a deep obsidian canvas with electric cyan accents and glassmorphism surfaces. The system uses geometric grid textures, animated gradient meshes, and floating orbs to create a living, breathing tech aesthetic. Typography pairs Space Grotesk geometric display with DM Sans humanist body. Brand voltage comes from the high-contrast obsidian-to-cyan pairing — deliberately electric and forward-looking where most portfolios use safe neutrals.

colors:
  # ── Base ──
  canvas: "#0a0a0f"
  canvas-elevated: "#111118"
  surface: "#16161f"
  surface-glass: "rgba(22, 22, 31, 0.6)"
  surface-hover: "#1e1e2a"
  surface-border: "rgba(255, 255, 255, 0.06)"

  # ── Accent ──
  cyan: "#00d4ff"
  cyan-dim: "rgba(0, 212, 255, 0.15)"
  cyan-glow: "rgba(0, 212, 255, 0.3)"
  violet: "#7c3aed"
  violet-dim: "rgba(124, 58, 237, 0.15)"
  rose: "#f43f5e"
  rose-dim: "rgba(244, 63, 94, 0.15)"
  emerald: "#10b981"
  amber: "#f59e0b"

  # ── Text ──
  text-primary: "#f0f0f5"
  text-secondary: "#a0a0b8"
  text-muted: "#6b6b80"
  text-dim: "#44445a"

  # ── Gradient Stops ──
  gradient-start: "#00d4ff"
  gradient-mid: "#7c3aed"
  gradient-end: "#f43f5e"

typography:
  display-2xl:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: 72px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -2px
  display-xl:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -1.5px
  display-lg:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: 44px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -1px
  display-md:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.5px
  display-sm:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.3px
  body-lg:
    fontFamily: "DM Sans, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "DM Sans, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  label-lg:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.5px
  label-sm:
    fontFamily: "DM Sans, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 1px
  code:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0
  nav:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.5px

rounded:
  sm: 6px
  md: 10px
  lg: 16px
  xl: 24px
  pill: 9999px
  full: 50%

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 120px

effects:
  glass-blur: "blur(20px) saturate(1.4)"
  glass-border: "1px solid rgba(255,255,255,0.06)"
  glow-cyan: "0 0 40px rgba(0,212,255,0.15)"
  glow-violet: "0 0 40px rgba(124,58,237,0.15)"
  glow-rose: "0 0 40px rgba(244,63,94,0.15)"
  shadow-card: "0 4px 24px rgba(0,0,0,0.4)"
  shadow-elevated: "0 8px 40px rgba(0,0,0,0.5)"

components:
  glass-card:
    backgroundColor: "{colors.surface-glass}"
    backdropFilter: "{effects.glass-blur}"
    border: "{effects.glass-border}"
    rounded: "{rounded.lg}"
    shadow: "{effects.shadow-card}"
  solid-card:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.surface-border}"
    rounded: "{rounded.lg}"
  nav-bar:
    backgroundColor: "rgba(10,10,15,0.8)"
    backdropFilter: "blur(16px)"
    border: "1px solid {colors.surface-border}"
    height: 72px
  btn-primary:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.canvas}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: 14px 28px
    shadow: "{effects.glow-cyan}"
  btn-ghost:
    backgroundColor: transparent
    textColor: "{colors.text-primary}"
    border: "1px solid {colors.surface-border}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: 14px 28px
  badge:
    backgroundColor: "{colors.cyan-dim}"
    textColor: "{colors.cyan}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.pill}"
    padding: 6px 16px
  section-header:
    typography: "{typography.label-sm}"
    textColor: "{colors.cyan}"
    letterSpacing: 2px

## Overview

Nexus is a futuristic, data-driven portfolio system built on a **deep obsidian canvas** (`{colors.canvas}` — #0a0a0f) with **electric cyan** (`{colors.cyan}` — #00d4ff) as the signature accent. The aesthetic is deliberately forward-looking — dark-first, high-contrast, with glassmorphism surfaces and animated gradient meshes that create a living, breathing tech environment.

Brand voltage comes from the **obsidian-to-cyan pairing** — electric, neon-tinged, unmistakably tech. Where most portfolios use safe whites and grays, Nexus commits fully to the dark surface with cyan as the singular energy source. The violet (`#7c3aed`) and rose (`#f43f5e`) serve as secondary and tertiary accents for variety without diluting the brand.

The system has three surface modes:
1. **Obsidian canvas** (`{colors.canvas}` — #0a0a0f) — the base floor, near-black with a blue tint
2. **Elevated glass** (`{colors.surface-glass}`) — frosted glass cards with blur and transparency
3. **Solid surface** (`{colors.surface}` — #16161f) — opaque cards for content blocks

Glassmorphism is the signature depth treatment — cards float with backdrop blur, subtle borders at 6% white opacity, and soft dark shadows. The glass surfaces let the canvas gradient mesh peek through, creating organic visual texture.

**Key Characteristics:**
- Deep obsidian canvas (`#0a0a0f`) — near-black with cool blue undertone, the defining surface choice
- Electric cyan accent (`#00d4ff`) — used on CTAs, badges, gradients, and glow effects. The brand's energy source.
- Glassmorphism cards with `backdrop-filter: blur(20px)` and `rgba(255,255,255,0.06)` borders — the signature depth treatment
- Geometric grid texture overlay on the canvas — subtle dotted grid at 3% opacity, tech-forward visual texture
- Animated gradient mesh hero — three gradient orbs (cyan, violet, rose) slowly orbit to create living color
- Space Grotesk geometric display + DM Sans humanist body — modern, clean, tech-native type pairing
- Glow effects on accent elements — subtle cyan/violet/rose radiance around interactive elements
- Scroll-triggered reveal animations — elements fade and slide in as they enter viewport

## Colors

### Base
- **Canvas** (`{colors.canvas}` — #0a0a0f): Near-black with cool blue undertone. The defining surface of the system — not pure black, not charcoal, deliberately tinted.
- **Canvas Elevated** (`{colors.canvas-elevated}` — #111118): One step up from canvas for nested depth.
- **Surface** (`{colors.surface}` — #16161f): Solid cards, content blocks. Distinct from glass.
- **Surface Glass** (`{colors.surface-glass}` — rgba(22,22,31,0.6)): Frosted glass base with 60% opacity.
- **Surface Hover** (`{colors.surface-hover}` — #1e1e2a): Interactive hover states.
- **Surface Border** (`{colors.surface-border}` — rgba(255,255,255,0.06)): The universal 1px border — barely visible, structural.

### Accent
- **Cyan** (`{colors.cyan}` — #00d4ff): The brand signature. Electric blue-cyan. Used on primary CTAs, gradient endpoints, glow effects, badges, and inline highlights. The most energetic color in the system.
- **Cyan Dim** (`{colors.cyan-dim}` — rgba(0,212,255,0.15)): Cyan at 15% opacity for badge backgrounds and subtle highlights.
- **Violet** (`{colors.violet}` — #7c3aed): Secondary accent. Used in gradient meshes and secondary highlights.
- **Rose** (`{colors.rose}` — #f43f5e): Tertiary accent. Used in gradient meshes and warning states.
- **Emerald** (`{colors.emerald}` — #10b981): Success states and positive indicators.
- **Amber** (`{colors.amber}` — #f59e0b): Caution states and warm highlights.

### Text
- **Text Primary** (`{colors.text-primary}` — #f0f0f5): Headlines and primary content. Near-white with a slight cool tint.
- **Text Secondary** (`{colors.text-secondary}` — #a0a0b8): Body text and descriptions. Readable muted tone.
- **Text Muted** (`{colors.text-muted}` — #6b6b80): Captions, labels, and secondary info.
- **Text Dim** (`{colors.text-dim}` — #44445a): Placeholder text and ultra-subtle labels.

## Typography

### Font Family
**Space Grotesk** (geometric sans-serif) for all display headlines, labels, and navigation. **DM Sans** (humanist sans-serif) for body text, descriptions, and running copy. **JetBrains Mono** for code blocks.

The pairing is modern and tech-native — Space Grotesk's geometric precision for headlines pairs with DM Sans's readability for body content.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-2xl}` | 72px | 700 | 1.0 | -2px | Hero headline — Space Grotesk |
| `{typography.display-xl}` | 56px | 700 | 1.05 | -1.5px | Section heroes — Space Grotesk |
| `{typography.display-lg}` | 44px | 600 | 1.1 | -1px | Major section titles — Space Grotesk |
| `{typography.display-md}` | 32px | 600 | 1.15 | -0.5px | Card titles, subsection heads |
| `{typography.display-sm}` | 24px | 600 | 1.2 | -0.3px | Small card titles |
| `{typography.body-lg}` | 18px | 400 | 1.6 | 0 | Lead paragraphs — DM Sans |
| `{typography.body-md}` | 16px | 400 | 1.6 | 0 | Default body text — DM Sans |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Captions, fine print — DM Sans |
| `{typography.label-lg}` | 14px | 500 | 1.0 | 0.5px | Button labels — Space Grotesk |
| `{typography.label-sm}` | 12px | 500 | 1.4 | 1px | Section labels, badges — DM Sans |
| `{typography.code}` | 14px | 400 | 1.7 | 0 | Code blocks — JetBrains Mono |

### Principles
Display headlines use weight 600-700 (semibold-bold) with aggressive negative letter-spacing. Space Grotesk at these weights reads as technical and precise — the opposite of editorial serif. Body type stays at weight 400 for comfortable reading on dark surfaces where lighter weights can feel thin.

## Layout

### Spacing System
- **Base unit:** 4px
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 120px
- **Section padding:** `{spacing.section}` (120px) — generous dark-space rhythm
- **Card padding:** `{spacing.xl}` (32px) for content cards, `{spacing.xxl}` (48px) for feature cards

### Grid & Container
- **Max content width:** 1200px centered
- **Hero:** Full-width gradient mesh background, centered content
- **Feature grids:** 3-up desktop, 2-up tablet, 1-up mobile
- **Skills:** Multi-column flowing tag layout
- **Projects:** 3-up cards with alternating glow accents

### Whitespace Philosophy
The dark canvas demands generous whitespace — elements need room to breathe against the obsidian floor. Section rhythm at 120px creates clear visual separation. Glass cards float with implied depth through blur and subtle borders rather than heavy shadows.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Base canvas, background sections |
| Subtle border | 1px `{colors.surface-border}` | Inputs, nav bar, basic dividers |
| Glass card | `{colors.surface-glass}` + blur + border | Feature cards, project cards, stat cards |
| Solid card | `{colors.surface}` + border | Content blocks, skill groups |
| Glow card | Glass + colored glow shadow | Highlighted/active cards |

Depth comes primarily from glassmorphism (backdrop blur + transparency) and colored glow effects rather than traditional drop shadows. The animated gradient mesh in the hero creates organic depth that static designs cannot achieve.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 6px | Small tags, inline badges |
| `{rounded.md}` | 10px | Buttons, inputs, interactive elements |
| `{rounded.lg}` | 16px | Content cards, feature cards |
| `{rounded.xl}` | 24px | Hero containers, large feature bands |
| `{rounded.pill}` | 9999px | Status badges, category tags |

## Components

### Navigation
**`nav-bar`** — Glassmorphic fixed bar. `rgba(10,10,15,0.8)` background with `blur(16px)`. Carries geometric wordmark left, horizontal nav center-right, CTA button right. Border-bottom at 6% white opacity.

### Cards

**`glass-card`** — The signature card. `rgba(22,22,31,0.6)` background, `backdrop-filter: blur(20px)`, 1px border at 6% white. Carries content in `{colors.text-primary}` and `{colors.text-secondary}`. Used for projects, stats, and feature highlights.

**`solid-card`** — Opaque alternative. `{colors.surface}` background with 1px border. Used for skill groups and content blocks where transparency would reduce readability.

### Buttons

**`btn-primary`** — Electric cyan CTA. `{colors.cyan}` background, `{colors.canvas}` text, `{rounded.md}` radius, `glow-cyan` shadow on hover. The most prominent interactive element.

**`btn-ghost`** — Transparent button with subtle border. Used for secondary actions. Borders and text in muted tones that brighten on hover.

### Badges

**`badge`** — Pill-shaped label. `{colors.cyan-dim}` background, `{colors.cyan}` text. `{typography.label-sm}` with 1px letter-spacing. Used for section labels and category tags.

### Hero

Full-width section with animated gradient mesh background. Three large radial gradients (cyan, violet, rose) at ~40% opacity slowly animate position. Content centered with `{typography.display-2xl}` headline, body subtext, and button row. A subtle geometric grid texture overlay at 3% opacity adds tech-forward detail.

### Code Mockup Card

Dark card (`{colors.surface}`) with terminal-style header (three dots), line-numbered code in `{typography.code}` with syntax highlighting via accent colors. Used as a decorative element in the hero and project sections.

## Effects & Animation

### Glassmorphism
All glass surfaces use `backdrop-filter: blur(20px) saturate(1.4)` with 60% base opacity. This creates frosted-glass depth where the gradient mesh or canvas texture shows through.

### Glow
Accent elements (buttons, highlighted cards, active states) emit a soft colored glow:
- Cyan glow: `0 0 40px rgba(0,212,255,0.15)`
- Violet glow: `0 0 40px rgba(124,58,237,0.15)`
- Rose glow: `0 0 40px rgba(244,63,94,0.15)`

### Gradient Mesh
The hero background uses three large radial gradient orbs that slowly orbit:
- Cyan orb: `radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)`
- Violet orb: `radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)`
- Rose orb: `radial-gradient(circle, rgba(244,63,94,0.1) 0%, transparent 70%)`

### Grid Texture
A repeating dot pattern at 3% white opacity covers the canvas: `radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)` at 24px grid spacing.

### Scroll Reveal
Elements fade in and translate up 20px as they enter the viewport. Staggered delays for grid children (0.1s increments).

## Do's and Don'ts

### Do
- Anchor every page on the obsidian canvas. The near-black with blue undertone is the brand.
- Use electric cyan for all primary CTAs and accent moments. It's the singular energy source.
- Apply glassmorphism to cards that need depth — the blur creates organic visual interest.
- Use the gradient mesh in hero/header sections for living, animated backgrounds.
- Maintain generous whitespace — dark surfaces need room to breathe.
- Use glow effects sparingly on interactive elements for that neon-tech feel.

### Don't
- Don't use pure black (#000000) — the canvas has a cool blue tint that distinguishes it.
- Don't use white or light backgrounds — this is a dark-first system.
- Don't overuse cyan — reserve it for CTAs, badges, and glow effects. Let the obsidian breathe.
- Don't use drop shadows as the primary depth mechanism — glassmorphism and glow are the depth language.
- Don't mix in warm tones (orange, yellow, beige) — the palette is cool-spectrum only.
- Don't add heavy borders or outlines — the 6% white border is the structural language.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero text 72→36px; single-column grids; reduced section padding |
| Tablet | 768–1024px | Horizontal nav; 2-up grids; moderate spacing |
| Desktop | 1024–1440px | Full layout; 3-up grids; 120px section rhythm |
| Wide | > 1440px | Same as desktop with max-width cap at 1200px |

### Touch Targets
- Primary buttons: minimum 44×44px
- Nav items: 40px height minimum
- Card tap areas: full card surface

## Iteration Guide

1. Focus on one component at a time. Reference its token key.
2. Glass surfaces should always have backdrop-filter — without blur, they're just semi-transparent rectangles.
3. Use `{token.refs}` everywhere — never inline hex.
4. The gradient mesh animation should be subtle — slow movement, low opacity. It's atmosphere, not content.
5. Glow effects are punctuation — a glow on every element dilutes the effect.
6. Obsidian + cyan is the core. Violet and rose are supporting players, never co-leads.
