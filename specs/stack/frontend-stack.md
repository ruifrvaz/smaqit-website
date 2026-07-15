---
id: STK-FRONTEND
status: draft
created: 2026-01-22
modified: 2026-07-15
---

# Frontend Technology Stack

## References

### Enables

- [FUN-LAYOUT](../functional/page-layout.md) — Implements page structure with HTML, styles with CSS, enhances with JS
- [FUN-HERO](../functional/hero-section.md) — Renders hero content with HTML/CSS
- [FUN-FEATURES](../functional/features-section.md) — Renders toolkit cards with HTML/CSS grid
- [FUN-SOCIAL](../functional/social-links.md) — Renders social/repository icons with HTML/CSS

## Scope

### Included

- Core web technologies for rendering and interactivity across all three comparison candidates
- Language versions and standards
- Rationale for technology choices, including the additions needed for scroll-driven and panel-swap interactions
- Browser compatibility requirements

### Excluded

- External dependencies (covered in STK-DEPENDENCIES)
- The comparison harness's own switching technology (covered in STK-COMPARE-HARNESS)
- Build tools and bundling (not needed for this project)
- Development environment setup (IDE, editor configuration)
- Deployment and hosting (covered in Infrastructure layer)

## Technology Stack

### Languages

| Language | Version |
|----------|---------|
| HTML | HTML5 (2014 standard, latest features) |
| CSS | CSS3 (includes Flexbox, Grid, Custom Properties, Scroll Snap) |
| JavaScript | ECMAScript 2015+ (ES6+) |

### Frameworks

**None** — Intentionally framework-free for simplicity and performance, consistent with the original single-product site.

### Libraries

**None** — Vanilla JavaScript only, used for: smooth scroll (Candidate A), scroll-triggered panel activation via IntersectionObserver (Candidate B), and no-scroll panel swapping (Candidate C).

### Build Tools

**None** — Files served directly without compilation or bundling, for every candidate.

**Rationale:** Extending to three candidate directions and three product offerings does not introduce complexity that would justify a build step. Direct file serving continues to provide zero build complexity, instant iteration, and maximum compatibility across all three candidates.

## Rationale

### HTML5
- **Universal support:** Works in all modern browsers
- **Semantic elements:** Clear structure (`<header>`, `<section>`, `<nav>`, `<footer>`)
- **Accessibility:** Built-in ARIA support and semantic roles
- **No compilation:** Direct browser rendering

### CSS3
- **Flexbox/Grid:** Native responsive layouts without framework overhead, used for the toolkit card grid (Candidate A)
- **Scroll Snap:** Native `scroll-snap-type` / `scroll-snap-align` for Candidate B's full-viewport panel scrolling, without a JS scrolling library
- **Custom Properties:** Dynamic theming and per-offering accent colors
- **Modern features:** Smooth scroll behavior, viewport units, calc()
- **No preprocessing:** Direct browser interpretation

### Vanilla JavaScript (ES6+)
- **Progressive enhancement:** Core experience works without JS (FUN-LAYOUT-008)
- **IntersectionObserver:** Native API used to detect which panel is in view (Candidate B) and to trigger reveal animations, without a scroll-library dependency
- **Minimal use:** No JS is required for Candidate C's panel swap beyond toggling a CSS class/attribute, keeping the no-scroll interaction lightweight
- **Native APIs:** No library wrapper overhead
- **Browser support:** ES6+ and IntersectionObserver are supported in all target modern browsers
- **Performance:** No framework bundle size

### Framework-Free Decision
- **Simplicity:** Three candidate landing pages, each still a small number of static sections, don't justify framework complexity
- **Performance:** Zero framework bytes to download/parse/execute, across every candidate
- **Maintainability:** Standard web APIs, no framework version churn
- **Consistency:** Preserves the zero-build philosophy documented in the original site's README

## Constraints

| Constraint | Description | Impact |
|------------|-------------|--------|
| Browser Compatibility | Must work in modern browsers (Chrome, Firefox, Safari, Edge - last 2 versions) | Use ES6+ and IntersectionObserver, both broadly supported; avoid experimental APIs |
| Mobile Support | Must work on iOS Safari and Android Chrome | Use responsive CSS; scroll-snap and touch scrolling tested on touch devices |
| JavaScript Optional | Core content must remain accessible without JavaScript (FUN-LAYOUT-008) | Content and layout in HTML/CSS for all candidates; JS enhances but does not gate access to content |
| Load Performance | Must load in < 2 seconds (FUN-LAYOUT-003) | No large framework bundles; minimal dependencies across all three candidates |
| Static Hosting | Must work on GitHub Pages | No server-side rendering; no build step complications |
| Team Simplicity | Accessible to developers without framework expertise | Standard HTML/CSS/JS only, across all three candidates |

## Acceptance Criteria

Requirements use format: `STK-FRONTEND-[NNN]`

- [ ] STK-FRONTEND-001: HTML markup uses HTML5 standard (DOCTYPE html) in all three candidates
- [ ] STK-FRONTEND-002: CSS uses CSS3 features (Flexbox, Grid, Custom Properties, Scroll Snap where applicable)
- [ ] STK-FRONTEND-003: JavaScript uses ECMAScript 2015+ syntax where JS is needed
- [ ] STK-FRONTEND-004: No frontend frameworks are included (React, Vue, Angular, etc.) in any candidate
- [ ] STK-FRONTEND-005: No CSS frameworks are included (Bootstrap, Tailwind, etc.) in any candidate
- [ ] STK-FRONTEND-006: No JavaScript libraries are included for core functionality in any candidate
- [ ] STK-FRONTEND-007: Page structure and content are fully accessible without JavaScript in all three candidates
- [ ] STK-FRONTEND-008: HTML uses semantic elements (header, section, nav, footer, etc.)
- [ ] STK-FRONTEND-009: CSS uses modern layout techniques (Flexbox, Grid, or Scroll Snap) for responsive design
- [ ] STK-FRONTEND-010: JavaScript code (if present) runs in modern browsers without transpilation
- [ ] STK-FRONTEND-011: Candidate B's panel detection uses IntersectionObserver rather than scroll-position polling

### Untestable Criteria

- [ ] STK-FRONTEND-012: Technology choices align with team simplicity constraint *(untestable)*
  - **Reason:** Team skill assessment is subjective and context-dependent
  - **Proposal:** Use standard web technologies documented on MDN
  - **Resolution:** Manual review; verify no framework-specific knowledge required

---

*Generated with smaqit v1.2.0*
