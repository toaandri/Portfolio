# Design: Notes section

**Date:** 2026-07-21
**Approach:** A — section intégrée au scroll single-page

## Goal
Add a "Notes" blog/notes section to the portfolio using hardcoded data and a
simple chronological list. Stay 100% consistent with the existing design
system (tokens, Reveal animations, card styling). No new dependencies, no routing.

## Data model — `src/lib/notes.ts`
```ts
export interface Note {
  slug: string;
  title: string;
  date: string;   // ISO date
  tag: string;
  excerpt: string;
}
export const notes: Note[]; // sorted newest -> oldest, 4 sample entries
```

## Component — `src/components/Notes.tsx`
- `<section className="section" id="notes">` with `.container`.
- Eyebrow / title / sub using `Reveal` (mirrors `Languages.tsx`).
- `.note-list` of `.note-item` cards: date (faint), title (font-display),
  `.note-tag` chip, excerpt. Sorted by date desc. Empty state handled.
- Hover lift reuses `.card-hoverable` pattern.

## Styles — `src/index.css`
Add `.note-list`, `.note-item`, `.note-date`, `.note-tag` reusing existing
tokens (`--radius`, `--accent`, `.card`, `.eyebrow`). No new CSS variables.

## Integration
- `App.tsx`: import `Notes`, render between `<Languages>` and `<Contact>`.
- `Navbar.tsx`: add `#notes` link.

## Accessibility / responsive
Inherits global `prefers-reduced-motion`. Mobile stacks via existing `.section`/`.container` rules.

## Out of scope
No article detail pages, no markdown, no external CMS, no routing.
