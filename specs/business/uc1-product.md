---
id: BUS-PRODUCT
status: draft
created: 2026-01-22
modified: 2026-07-15
---

# UC1-PRODUCT: Learn About the smaQit Suite

## Scope

### Included

- Product identity and branding presentation at the suite level
- Core value proposition communication for smaQit as a family of three toolkits
- Identification of each of the three offerings (smaQit, smaQit Extensions, smaQit ADK) and their one-line purpose
- Communication of how the three offerings relate to one another
- Target audience recognition
- High-level product positioning

### Excluded

- Detailed feature explanations per offering (covered in UC2-FEATURES)
- Contact and social connection (covered in UC3-CONNECT)
- Side-by-side comparison of alternate landing page directions (covered in UC4-COMPARE)
- Pricing information
- Documentation or technical guides

## Actors

| Actor | Description | Goals |
|-------|-------------|-------|
| IT Professional | Product Owners, Architects, Engineers, and Testers exploring agentic development tools | Quickly understand what the smaQit suite is and which of its three offerings is relevant to their work |
| Visitor | Any person landing on the website | Grasp the suite's identity and value proposition within seconds |
| Prospective Adopter | A visitor evaluating whether to adopt one or more smaQit offerings | Distinguish the three offerings well enough to know which one (or which combination) fits their need |

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Value Proposition Clarity | Visitor understands the suite's purpose within 10 seconds | User testing feedback |
| Suite Composition Recall | Visitor can name that smaQit is made of three distinct offerings after viewing the page | Survey or recall test |
| Offering Differentiation | Visitor can state, in their own words, one distinguishing purpose for each of the three offerings | User testing feedback |

## Use Case

### Preconditions

- Visitor has navigated to the smaQit website landing page
- Page content is fully loaded and visible

### Main Flow

1. Visitor sees the smaQit brand name and logo prominently displayed
2. Visitor reads the tagline "Power up with smaQit"
3. Visitor understands smaQit is now a suite of three agentic development toolkits, not a single tool
4. Visitor identifies the three offerings by name: smaQit, smaQit Extensions, and smaQit ADK
5. Visitor understands, at a one-line level, what distinguishes each offering
6. Visitor recognizes the suite is designed for IT professionals
7. Visitor identifies the suite as open source

### Alternative Flows

#### First-Time Visitor Exploration

**Trigger:** Visitor is unfamiliar with spec-driven or agentic development

1. Visitor sees brief explanatory text about the suite's approach
2. Visitor continues to explore features for more detail (UC2-FEATURES)

#### Returning Visitor Familiar with Original smaQit

**Trigger:** Visitor previously knew smaQit as a single product

1. Visitor notices the page now presents three offerings instead of one
2. Visitor identifies that the original smaQit tool is still present, now as one of three offerings
3. Visitor discovers the two new offerings (Extensions, ADK) without confusion about what happened to the original product

### Postconditions

- Visitor can articulate that smaQit is a suite of three toolkits
- Visitor can name and roughly distinguish each of the three offerings
- Visitor understands the target audience (IT professionals)
- Visitor knows the suite is open source

## Acceptance Criteria

Requirements use format: `BUS-PRODUCT-[NNN]`

- [ ] BUS-PRODUCT-001: Visitor sees the product name "smaQit" displayed prominently on the page
- [ ] BUS-PRODUCT-002: Visitor sees the smaQit visual brand identity as the first element when landing on the page
- [ ] BUS-PRODUCT-003: Visitor sees the tagline "Power up with smaQit" associated with the suite
- [ ] BUS-PRODUCT-004: Visitor can identify that smaQit consists of three distinct offerings
- [ ] BUS-PRODUCT-005: Visitor can name all three offerings: smaQit, smaQit Extensions, smaQit ADK
- [ ] BUS-PRODUCT-006: Visitor sees a one-line purpose statement for each of the three offerings
- [ ] BUS-PRODUCT-007: Visitor understands the suite targets IT professionals (POs, architects, engineers, testers)
- [ ] BUS-PRODUCT-008: Visitor can identify the suite as an open source solution

### Untestable Criteria

- [ ] BUS-PRODUCT-009: Brand conveys empowering energy consistent with the original "Power up" identity *(untestable)*
  - **Reason:** Emotional brand perception is subjective and cannot be automatically measured
  - **Proposal:** Use visual design elements (bold typography, dynamic imagery) that evoke energy and impact, consistent across all three offering presentations
  - **Resolution:** Manual review by stakeholders; optional user feedback survey

---

*Generated with smaqit v1.2.0*
