---
id: FUN-COMPARE
status: deprecated
created: 2026-07-15
modified: 2026-07-16
---

# Preview Comparison Harness

## References

### Implements

- [BUS-COMPARE](../business/uc4-compare.md) — Implements the candidate-switching behavior evaluated by the Site Owner

## Scope

### Included

- A sticky banner, present above every candidate design, offering a control to switch between exactly 3 candidate designs
- The mechanism by which the displayed candidate updates without a full page navigation
- The identity and one-line distinguishing treatment of each of the 3 candidates (for traceability; each candidate's own internal layout is specified separately or, for non-primary candidates, implemented directly against this section's Candidate Directions table without a full FUN-LAYOUT-equivalent spec)
- Direct standalone access to any one candidate outside the banner

### Excluded

- The internal section-by-section behavior of Candidate A (fully specified in FUN-LAYOUT, FUN-HERO, FUN-FEATURES, FUN-SOCIAL)
- The internal section-by-section behavior of Candidates B and C — these are intentionally specified only at the level of distinguishing treatment below (see Candidate Directions), not decomposed into per-section specs, because they are evaluation candidates rather than the chosen production design; the chosen candidate should receive full section-level specs at the point it is selected for public release
- Persisting the Site Owner's final choice
- Any analytics or tracking of which candidate is viewed

## User Flow

### Overview

The Site Owner opens the comparison harness, which displays Candidate A by default beneath a sticky banner. Selecting a different tab in the banner swaps the displayed candidate in place.

### Steps

1. Site Owner opens the comparison harness entry page
2. Sticky banner renders at the top of the viewport, remaining fixed during scroll
3. Banner displays 3 tabs, one per candidate, with the active candidate visually indicated
4. Candidate A content renders below the banner by default
5. Site Owner selects a different tab
6. Displayed candidate content is replaced with the newly selected candidate, in place, without a full browser navigation
7. Banner updates to indicate the newly active candidate

### Error Handling

| Condition | Behavior |
|-----------|----------|
| A candidate's content fails to load | Banner remains functional; an inline message indicates the candidate could not be loaded |
| JavaScript disabled | Banner control degrades to standard links that each load a candidate as a full page navigation |

## Data Model

### Candidate

| Attribute | Type | Description | Constraints |
|-----------|------|-------------|-------------|
| id | Text | Candidate identifier | Required; unique; values: a, b, c |
| label | Text | Short label shown in the banner tab | Required; max 20 characters |
| entryPath | Text | Path to the candidate's standalone page | Required |
| distinguishingTreatment | Text | One-line description of what makes this candidate's UX distinct | Required |

### ComparisonHarnessState

| Attribute | Type | Description | Constraints |
|-----------|------|-------------|-------------|
| activeCandidateId | Text | Currently displayed candidate | Required; must match a Candidate.id |
| candidates | Array | The 3 available candidates | Required; length = 3 |

#### Candidate Directions

| ID | Label | Distinguishing Treatment |
|----|-------|---------------------------|
| a | Cards | Extends the original single-product hero + card-grid pattern to all three offerings |
| b | Immersive | Removes the static banner image; full-viewport scroll-snap panels walk through the suite and each offering's features |
| c | Panels | Elegant navigation bar swaps between offering panels with no page scrolling required |

## API Contract

*Not applicable: Comparison harness runs entirely client-side with no backend APIs.*

## State Transitions

### States

| State | Description | Entry Condition |
|-------|-------------|-----------------|
| Displaying Candidate A | Candidate A content shown below banner | Initial harness load, or Candidate A tab selected |
| Displaying Candidate B | Candidate B content shown below banner | Candidate B tab selected |
| Displaying Candidate C | Candidate C content shown below banner | Candidate C tab selected |

### Transitions

```
Displaying Candidate A → [Select Candidate B tab] → Displaying Candidate B
Displaying Candidate A → [Select Candidate C tab] → Displaying Candidate C
Displaying Candidate B → [Select Candidate A tab] → Displaying Candidate A
Displaying Candidate B → [Select Candidate C tab] → Displaying Candidate C
Displaying Candidate C → [Select Candidate A tab] → Displaying Candidate A
Displaying Candidate C → [Select Candidate B tab] → Displaying Candidate B
```

| From | Event | To | Guard Condition |
|------|-------|-----|-----------------|
| Any Displaying state | Select tab for candidate X | Displaying Candidate X | Tab for candidate X clicked and candidate X ≠ current active candidate |

## Acceptance Criteria

Requirements use format: `FUN-COMPARE-[NNN]`

- [ ] FUN-COMPARE-001: A sticky banner is present at the top of the viewport on every candidate
- [ ] FUN-COMPARE-002: Banner remains fixed in position while the candidate content below it scrolls
- [ ] FUN-COMPARE-003: Banner displays exactly 3 tabs, one per candidate
- [ ] FUN-COMPARE-004: The currently active candidate's tab is visually distinguished from the other two
- [ ] FUN-COMPARE-005: Candidate A is displayed by default when the harness is opened with no candidate specified
- [ ] FUN-COMPARE-006: Selecting a tab updates the displayed candidate to match, without a full browser page reload
- [ ] FUN-COMPARE-007: Each candidate is independently reachable via its own direct path outside the harness banner
- [ ] FUN-COMPARE-008: Banner degrades to standard navigation links when JavaScript is disabled

## Addendum: Candidate A Retired, B/C Redesigned (2026-07-15)

Candidate A is retired from the active comparison per Site Owner direction. `version-a.html`, `style.css`, and `script.js` remain on disk (unlinked from the harness banner) rather than deleted. The harness banner now presents exactly 2 tabs (B, C); FUN-COMPARE-003 ("exactly 3 tabs") is superseded — the harness now presents exactly 2 tabs, one per active candidate, with the same single-action switching and no-full-reload behavior.

Both remaining candidates were revised at the distinguishing-treatment level:

| ID | Label | Revised Distinguishing Treatment |
|----|-------|-----------------------------------|
| b | Immersive | Single continuous scroll (no scroll-snap stops); offering cards emerge over a fixed, depth-layered dark background (cross-fading glow blobs, grain, vignette, subtle parallax) rather than discrete full-viewport color panels |
| c | Panels | Dark deep-blue glassmorphism theme (was light theme); layered background glow behind translucent blurred panels for a sense of depth, same no-scroll nav-swap mechanic |

## Acceptance Criteria (Revised)

- [ ] FUN-COMPARE-003-REV: Banner displays exactly 2 tabs, one per active candidate (supersedes original 3-tab criterion)
- [ ] FUN-COMPARE-009: Candidate B's sections reveal via fade/rise transitions as they scroll into view, without hard scroll-snap stops between them
- [ ] FUN-COMPARE-010: Candidate B's background remains fixed in place (does not hard-cut per section) while its accent glow cross-fades to match the active section
- [ ] FUN-COMPARE-011: Candidate C's visual theme uses a dark background with blue-dominant tones across nav, panels, and footer strip

## Addendum: Harness Retired — Candidate B Promoted to Production (2026-07-16)

The Site Owner selected Candidate B. This spec is now **deprecated**: the comparison harness it describes (sticky banner, tab switching, iframe swap) has been removed from `public/`, along with `version-b.html`/`style-b.css`/`script-b.js` and `version-c.html`/`style-c.css`/`script-c.js` as standalone files. In their place:

- `public/index.html`, `public/style.css`, `public/script.js` now contain Candidate B's markup/styles/script directly — this is the production site, specified going forward by full section-level specs (FUN-LAYOUT, FUN-HERO, FUN-FEATURES, FUN-SOCIAL) once those are refreshed to match, rather than by this comparison-harness spec.
- Candidate A and Candidate C are archived at `hall-of-honor/version-a-cards/` and `hall-of-honor/version-c-panels/` respectively (each self-contained and independently viewable) — see `hall-of-honor/README.md`.

This spec and [BUS-COMPARE](../business/uc4-compare.md) remain in the repository for historical traceability and as a reference implementation if a future redesign comparison is needed.

---

*Generated with smaqit v1.2.0*
