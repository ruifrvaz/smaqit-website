---
id: BUS-COMPARE
status: validated
created: 2026-07-15
modified: 2026-07-16
validated: 2026-07-16
---

# UC4-COMPARE: Evaluate Landing Page Directions

## Scope

### Included

- Side-by-side evaluation of multiple candidate landing page designs before one is chosen for public release
- Lightweight switching between candidate designs without losing evaluation context
- Clear signal that the visitor is viewing a pre-release comparison tool, not the final public site

### Excluded

- The content and design of any individual candidate direction (covered in UC1-PRODUCT and UC2-FEATURES, which apply to whichever direction is eventually chosen)
- Persisting or recording the site owner's choice (a manual, human decision made outside the website itself)
- Public-facing use of the comparison tool once a direction has been chosen for launch

## Actors

| Actor | Description | Goals |
|-------|-------------|-------|
| Site Owner | The person responsible for choosing the final public design of the smaQit website | Compare multiple candidate designs quickly, under realistic conditions, before committing to one |

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Switch Speed | Site Owner can move from one candidate design to another in a single action | Usability observation |
| Evaluation Confidence | Site Owner reports being able to make an informed choice after using the comparison tool | Direct feedback |

## Use Case

### Preconditions

- Multiple candidate landing page designs exist for the smaQit suite
- Site Owner has access to the comparison tool

### Main Flow

1. Site Owner opens the comparison tool
2. Site Owner sees a persistent control indicating multiple candidate designs are available
3. Site Owner sees one candidate design displayed by default
4. Site Owner selects a different candidate design from the control
5. The displayed design updates to the newly selected candidate
6. Site Owner repeats selection across all available candidates
7. Site Owner forms a judgment about which candidate best serves the suite's positioning

### Alternative Flows

#### Direct Candidate Access

**Trigger:** Site Owner wants to share a specific candidate design with someone else without the comparison control

1. Site Owner accesses a candidate design directly, independent of the comparison tool
2. The candidate design displays exactly as it would within the comparison tool

### Postconditions

- Site Owner has viewed all available candidate designs
- Site Owner is positioned to choose one candidate design for public release

## Acceptance Criteria

Requirements use format: `BUS-COMPARE-[NNN]`

- [ ] BUS-COMPARE-001: Site Owner sees a persistent control for switching between candidate designs on every candidate
- [ ] BUS-COMPARE-002: Site Owner can identify which candidate design is currently displayed
- [ ] BUS-COMPARE-003: Site Owner can switch to any other candidate design in a single action
- [ ] BUS-COMPARE-004: Switching candidates does not require a full page reload from the Site Owner's perspective
- [ ] BUS-COMPARE-005: Each candidate design remains accessible on its own, independent of the comparison control

### Untestable Criteria

- [ ] BUS-COMPARE-006: Comparison tool clearly signals it is a pre-release evaluation aid rather than the final public site *(untestable)*
  - **Reason:** Whether the signal reads as "pre-release" is a subjective interpretation
  - **Proposal:** Use a visually distinct banner treatment (color, label text, position) not present in any candidate's own design
  - **Resolution:** Manual review by the Site Owner

## Addendum: Candidate A Retired (2026-07-15)

Following Site Owner review, Candidate A ("extended cards") was dropped from active comparison. The comparison now evaluates two candidates (B and C); the use case's acceptance criteria are written in terms of "candidate designs" generically and remain valid for any number of candidates >= 2 — no criteria required renumbering. Candidate B was revised for a more fluid single-scroll feel with an immersive depth-layered background; Candidate C was reskinned to a dark deep-blue theme with a layered sense of depth. See [FUN-COMPARE](../functional/preview-comparison.md) addendum for the corresponding functional delta.

## Addendum: Comparison Resolved — Candidate B Selected (2026-07-16)

Site Owner reviewed both remaining candidates and selected **Candidate B ("Immersive")** for public release. This use case is now validated: all acceptance criteria were exercised through the actual comparison-and-decision cycle described in the Main Flow (steps 1-7).

Resolution:

- Candidate B was promoted to the production site: its markup/styles/script now live directly at `public/index.html`, `public/style.css`, `public/script.js`. The comparison harness (sticky banner, tab switching, iframe) has been removed from `public/` — it served its purpose and is no longer needed once a single candidate ships.
- Candidate A and Candidate C were moved out of `public/` into `hall-of-honor/` at the repository root (self-contained, each with its own `index.html`/`style.css`/`script.js` and a README explaining the candidate and why it was retired). See `hall-of-honor/README.md`.
- This use case (BUS-COMPARE) and its implementing spec ([FUN-COMPARE](../functional/preview-comparison.md)) are retained for historical traceability but describe a mechanism that no longer exists in the live site. Should a future redesign comparison be needed, both specs — and the git history around July 2026 — document a working implementation to start from.

---

*Generated with smaqit v1.2.0*
