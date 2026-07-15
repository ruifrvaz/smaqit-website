# Candidate C — "Panels"

Retired July 2026. Part of the smaQit website A/B/C design comparison — see `hall-of-honor/README.md` at the repo root for the full picture and the other retired candidate.

## Concept

An elegant no-scroll navigation bar over a dark, deep-blue, depth-layered background. Four tabs (Overview / smaQit / Extensions / ADK) swap glassmorphic panels in place — nothing ever scrolls. A persistent footer strip keeps the GitHub/LinkedIn links visible at all times.

## Why it was retired

Strong runner-up — the panel-swap interaction and deep-blue glass aesthetic held up well. It lost out to Candidate B's single continuous-scroll experience, which felt like a more natural fit for walking a visitor through three distinct offerings in sequence rather than asking them to actively navigate tabs.

## Files

- `index.html` — full page markup (nav bar, four panels, footer strip)
- `style.css` — dark deep-blue theme, glassmorphism, layered blob backgrounds for depth, elegant pill-button CTAs and footer links
- `script.js` — tab/panel swap logic (no scroll, no IntersectionObserver needed)

Open `index.html` directly in a browser to preview.

Content reflects the corrected offering positioning finalized just before this candidate was retired: smaQit for greenfield projects with heavy business requirements, Extensions for adding tooling to those projects or standalone for application-heavy/logic-light builds, and ADK as the complement for building your own agentic ecosystem.
