# The Amber Garden — Portfolio Redesign

## Overview
Awwwards-experimental portfolio for Toaviniaina Maharavo ("toaandri"), targeting both tech recruiters and academic admissions. Built with React 18 + TypeScript + Vite, preserving existing Geist fonts and amber accent while adding GSAP-driven scroll choreography.

## Design Direction
- **Vibe**: Experimental premium / editorial-Awwwards hybrid
- **Variance**: 7/10, Motion: 7/10, Density: 3/10
- **Audience**: Recruiters + schools (dual purpose)

## Visual Identity
| Token | Light | Dark |
|---|---|---|
| Body | `#f7f5f0` (crème) | `#0a0a0a` |
| Surface | `#ffffff` | `#141414` |
| Accent | `#d97706` | `#f59e0b` |
| Text | `#171717` → `#525252` | `#fafafa` → `#a3a3a3` |

Fonts: Geist Display (headings), Geist (body), Geist Mono (data). No changes.

## Layout Architecture
1. **Navbar** — Floating pill, hamburger morph → X, staggered overlay (keep existing improvements)
2. **Hero** — Split asymmetric (text left, avatar right), mask-text animation on name, pulse glow on avatar, stats in horizontal bars, shorter bio
3. **About** — 2fr/1fr bento grid, text + GitHub stats card, skills chips with stagger
4. **Projects** — GSAP Sticky Stack: each repo card pins at viewport top, previous card scales/fades. Filter tabs stay sticky.
5. **Languages** — GSAP Horizontal Pan: section pins, bars scroll horizontally on vertical scroll
6. **Notes** — Clip-path reveals on entry (inset bottom → 0), staggered
7. **Contact** — Full-width card with amber gradient tint, pill links, glow hover
8. **Footer** — Minimal, border-top, sync timestamp

## Motion Plan
- Entry: fade-up + blur on scroll reveal (existing Reveal component)
- Hero: mask text (existing MaskText), stagger children
- Projects: GSAP ScrollTrigger pin/scrub on card stack
- Languages: GSAP ScrollTrigger horizontal pan
- Notes: clip-path reveal with IntersectionObserver or Motion
- Buttons: scale(0.97) on press, lift+glow on hover
- Reduced motion: all GSAP and heavy motion disabled

## Files Changed
- `package.json` — added gsap
- `src/index.css` — new tokens, refined contrasts
- `src/components/StickyStack.tsx` — NEW (GSAP card stack)
- `src/components/HorizontalPan.tsx` — NEW (GSAP horizontal pan)
- `src/components/Hero.tsx` + `.module.css` — refactor
- `src/components/About.tsx` + `.module.css` — refactor
- `src/components/Projects.tsx` + `.module.css` — integrate StickyStack
- `src/components/Languages.tsx` + `.module.css` — integrate HorizontalPan
- `src/components/Notes.tsx` + `.module.css` — clip-path reveals
- `src/components/Contact.tsx` + `.module.css` — refinements
- `src/components/Reveal.tsx` — optional refinements
