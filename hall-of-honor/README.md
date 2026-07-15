# Hall of Honor

Retired candidates from the smaQit website's A/B/C design comparison (July 2026). These are not part of the deployed site (`public/`) — they're kept here for reference in case any of their ideas are worth revisiting.

**The winner: Candidate B ("Immersive")**, now promoted to `public/` as the live site — one continuous scroll, cards emerging over a depth-layered dark background.

## Archive contents

| Folder | Candidate | Concept | Why it was retired |
|---|---|---|---|
| `version-a-cards/` | A — "Extended Cards" | Extends the original single-product hero + banner image + card grid to three offerings | Dropped early in the B/C iteration round in favor of the two more distinctive directions |
| `version-c-panels/` | C — "Panels" | Dark deep-blue, no-scroll elegant nav bar that swaps panels | Strong runner-up; lost out to B's single continuous scroll experience |

Each folder is self-contained (`index.html`, `style.css`, `script.js`, and assets if applicable) — open `index.html` directly in a browser to preview it standalone. Each also has its own README with more detail on that candidate.

## Reviving a candidate

If you want to bring one of these back into rotation:

1. Copy the candidate's folder contents into `public/` (renaming to avoid clobbering the live `index.html`/`style.css`/`script.js`, or swap them in deliberately).
2. Update `specs/functional/preview-comparison.md` and `specs/business/uc4-compare.md` — they document the full comparison history and criteria used to pick B.
3. Consider re-adding a preview-switcher banner (see git history around July 2026 for the harness implementation) if you want to compare candidates side by side again rather than fully switching.
