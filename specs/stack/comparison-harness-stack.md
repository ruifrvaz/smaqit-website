---
id: STK-COMPARE-HARNESS
status: draft
created: 2026-07-15
---

# Comparison Harness Technology Stack

## References

### Foundation Reference

- [STK-FRONTEND](./frontend-stack.md) — Harness extends the base zero-build frontend stack

### Implements

- [FUN-COMPARE](../functional/preview-comparison.md) — Provides the technical mechanism for candidate switching

## Scope

### Included

- Technology used to implement the sticky banner and candidate-switching behavior
- Mechanism for loading candidate content without a full browser navigation
- State handling for which candidate is currently active

### Excluded

- Internal technology choices of each candidate page (covered in STK-FRONTEND)
- Any server-side or build-time component (none required)

## Technology Stack

### Languages

| Language | Version |
|----------|---------|
| HTML | HTML5 |
| CSS | CSS3 |
| JavaScript | ECMAScript 2015+ (ES6+) |

### Frameworks

**None**

### Libraries

**None**

### Build Tools

**None**

## Constraints

| Constraint | Description | Impact |
|------------|-------------|--------|
| No Full Reload | Switching candidates must not require a full browser navigation (FUN-COMPARE-006) | Use an `<iframe>` whose `src` attribute is updated by vanilla JS, rather than separate page loads |
| Direct Access | Each candidate must remain independently reachable (FUN-COMPARE-007) | Candidate files are standalone, valid HTML documents servable on their own path, not only inside the harness |
| No-JS Fallback | Banner must degrade when JavaScript is disabled (FUN-COMPARE-008) | Banner tabs are real anchor elements pointing at each candidate's standalone path; JS intercepts clicks only when available |
| Static Hosting | Must work on GitHub Pages, same as the rest of the site | No server-side routing; iframe `src` swap is purely client-side |

## Acceptance Criteria

Requirements use format: `STK-COMPARE-HARNESS-[NNN]`

- [ ] STK-COMPARE-HARNESS-001: Candidate switching is implemented with an `<iframe>` element whose `src` is updated via vanilla JavaScript
- [ ] STK-COMPARE-HARNESS-002: Banner tabs are anchor (`<a>`) elements with valid `href` values pointing directly at each candidate's standalone file
- [ ] STK-COMPARE-HARNESS-003: No frontend framework or JavaScript library is used to implement the harness
- [ ] STK-COMPARE-HARNESS-004: No build step is required to produce or update the harness

---

*Generated with smaqit v1.2.0*
