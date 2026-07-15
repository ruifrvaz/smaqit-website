# Candidate A — "Extended Cards"

Retired July 2026. Part of the smaQit website A/B/C design comparison — see `hall-of-honor/README.md` at the repo root for the full picture and the other retired candidate.

## Concept

Extends the site's original single-product hero + banner image + card-grid pattern to cover all three offerings (smaQit, smaQit Extensions, smaQit ADK): a hero section with the smaQit banner image, a three-card "Three Toolkits" grid below it, a one-line "how they fit together" strip, and a footer with GitHub/LinkedIn links.

## Why it was retired

Dropped early, before the B/C refinement round. It read as the safest, least differentiated option next to B's immersive scroll and C's no-scroll panel nav — the banner-image-plus-cards format didn't stretch well to represent three distinct offerings, and both B and C proved more interesting directions to develop further.

## Files

- `index.html` — full page markup
- `style.css` — Flexbox/Grid layout, light theme, orange/blue/teal accent per offering
- `script.js` — progressive-enhancement smooth scroll + IntersectionObserver card reveal
- `assets/banner.png` — the smaQit banner image used in the hero

Open `index.html` directly in a browser to preview.

Note: this candidate's "how they fit together" copy ("smaQit ADK built smaQit...") reflects the pre-correction positioning from earlier in the comparison round — it was superseded by the corrected framing (smaQit = greenfield/business-heavy, Extensions = add tooling or app-heavy/logic-light builds, ADK = build-your-own agentic ecosystem) before this candidate was retired, so it was never updated to match.
