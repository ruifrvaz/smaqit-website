---
id: FUN-FEATURES
status: draft
created: 2026-01-22
modified: 2026-07-15
---

# Three Toolkits Section

## References

### Foundation Reference

- [FUN-LAYOUT](./page-layout.md) — Three Toolkits section is second section in page structure

### Implements

- [BUS-FEATURES](../business/uc2-features.md) — Implements per-offering feature presentation and differentiation

## Scope

### Included

- Display of exactly 3 toolkit cards, one per offering (smaQit, smaQit Extensions, smaQit ADK), extending the original single-product 4-feature-card pattern to a 3-product card pattern
- Toolkit card content (offering name, one-line tagline, 3-4 mini feature bullets, GitHub link)
- Responsive grid layout for toolkit cards
- Visual accent distinguishing each of the three cards from one another
- Toolkit card visibility when section scrolls into view

### Excluded

- Overall page structure (covered in FUN-LAYOUT)
- Hero section content (covered in FUN-HERO)
- Social and repository links behavior beyond the in-card GitHub link (covered in FUN-SOCIAL)
- Feature content authoring and management

## User Flow

### Overview

Visitor scrolls to the Three Toolkits section and views 3 toolkit cards arranged in a responsive grid, learning about smaQit's, smaQit Extensions', and smaQit ADK's key differentiators.

### Steps

1. Visitor scrolls down from hero section
2. Three Toolkits section comes into viewport
3. Visitor sees 3 toolkit cards displayed in a grid layout
4. Visitor reads the first card: "smaQit" with tagline and mini feature list
5. Visitor reads the second card: "smaQit Extensions" with tagline and mini feature list
6. Visitor reads the third card: "smaQit ADK" with tagline and mini feature list
7. Visitor understands each offering's differentiators and can follow a GitHub link from any card

### Error Handling

| Condition | Behavior |
|-----------|----------|
| Images/icons fail to load | Card text content remains accessible |
| Grid layout unsupported | Cards stack vertically in fallback layout |

## Data Model

### ToolkitCard

| Attribute | Type | Description | Constraints |
|-----------|------|-------------|-------------|
| id | Text | Card identifier | Required; unique; values: smaqit-core, smaqit-extensions, smaqit-adk |
| title | Text | Offering name | Required; max 50 characters |
| tagline | Text | One-line offering purpose | Required; max 100 characters |
| miniFeatures | Array | Short feature bullets | Required; length 3-4; each max 80 characters |
| githubUrl | Text | Link to the offering's repository | Required; valid URL format; must start with https:// |
| order | Number | Display order | Required; unique; 1-3 |

### ToolkitCardsList

| Attribute | Type | Description | Constraints |
|-----------|------|-------------|-------------|
| cards | Array | Collection of toolkit cards | Required; length = 3 |

#### Toolkit Card Content

| ID | Title | Tagline |
|----|-------|---------|
| smaqit-core | smaQit | Spec-driven agent orchestration — describe requirements, get working, tested, deployed code |
| smaqit-extensions | smaQit Extensions | Quality-of-life workflows, agents, and skills for your AI coding sessions |
| smaqit-adk | smaQit ADK | The agent development kit — build custom Copilot agents and skills |

## API Contract

*Not applicable: Three Toolkits section displays static content with no API interactions.*

## State Transitions

*Not applicable: Three Toolkits section is stateless; content is always visible when scrolled into view.*

## Acceptance Criteria

Requirements use format: `FUN-FEATURES-[NNN]`

- [ ] FUN-FEATURES-001: Three Toolkits section displays exactly 3 toolkit cards
- [ ] FUN-FEATURES-002: Card 1 displays "smaQit" title, tagline, and 3-4 mini feature bullets
- [ ] FUN-FEATURES-003: Card 2 displays "smaQit Extensions" title, tagline, and 3-4 mini feature bullets
- [ ] FUN-FEATURES-004: Card 3 displays "smaQit ADK" title, tagline, and 3-4 mini feature bullets
- [ ] FUN-FEATURES-005: Each card includes a GitHub link to its corresponding repository
- [ ] FUN-FEATURES-006: Toolkit cards are arranged in a grid layout on desktop viewports (> 1024px)
- [ ] FUN-FEATURES-007: Toolkit cards display in a 3-column grid on desktop viewports
- [ ] FUN-FEATURES-008: Toolkit cards stack vertically on mobile viewports (< 768px)
- [ ] FUN-FEATURES-009: Toolkit cards remain readable and accessible when grid layout is unsupported
- [ ] FUN-FEATURES-010: Three Toolkits section is positioned below hero section in page flow
- [ ] FUN-FEATURES-011: Each toolkit card has a visually distinct accent (e.g., color) differentiating it from the other two cards

---

*Generated with smaqit v1.2.0*
