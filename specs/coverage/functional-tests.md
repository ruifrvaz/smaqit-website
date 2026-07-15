---
id: COV-FUNCTIONAL
status: draft
created: 2026-01-30
modified: 2026-07-15
---

# Functional Acceptance Tests

## References

### Functional

- [FUN-LAYOUT](../functional/page-layout.md) — Page structure and responsive behavior (Candidate A)
- [FUN-HERO](../functional/hero-section.md) — Hero section content and layout
- [FUN-FEATURES](../functional/features-section.md) — Three Toolkits section grid and content
- [FUN-SOCIAL](../functional/social-links.md) — Social/repository links interaction and navigation
- [FUN-COMPARE](../functional/preview-comparison.md) — Comparison harness banner and candidate switching

## Scope

### Included

- Functional behavior validation for all page components of Candidate A, the fully-specified layout
- Comparison harness behavior validation (applies across all three candidates)
- Responsive layout testing across viewports
- Interactive element behavior (hover, click, scroll, tab-switch)
- Content rendering and accessibility
- Browser compatibility verification

### Excluded

- Business use case journeys (covered in COV-JOURNEYS)
- Technical stack validation (covered in COV-TECHNICAL)
- Internal section-by-section behavior of Candidates B and C (excluded from FUN-COMPARE scope; not decomposed into testable functional specs until a candidate is chosen)
- Visual design assessment (subjective criteria marked untestable)
- Performance benchmarks (covered in COV-TECHNICAL)

## Verification Requirements

| Category | Requirement | Target |
|----------|-------------|--------|
| Test Environment | GitHub Actions with Playwright | https://ruifrvaz.github.io/smaqit-website |
| Browser Coverage | Chromium, Firefox, WebKit | All browsers must pass |
| Viewport Testing | Mobile (375px), Tablet (768px), Desktop (1440px) | All viewports must pass |
| Interaction Testing | Mouse, touch, keyboard navigation | All input methods validated |

## Coverage Map

| Requirement ID | Source Spec | Test Case ID | Expected Outcome |
|----------------|-------------|--------------|------------------|
| FUN-LAYOUT-001 through 011 | functional/page-layout.md | COV-FUNCTIONAL-001 | Four-section structure, load performance, scroll behavior, responsiveness, no-JS fallback, and harness embedding all verified |
| FUN-HERO-001 through 012 | functional/hero-section.md | COV-FUNCTIONAL-002 | Suite-level hero content, imagery, and fallback behavior verified |
| FUN-FEATURES-001 through 011 | functional/features-section.md | COV-FUNCTIONAL-003 | Three toolkit cards, correct content and links, grid/responsive behavior, per-card accent verified |
| FUN-SOCIAL-001 through 015 | functional/social-links.md | COV-FUNCTIONAL-004 | Three GitHub links plus LinkedIn, correct labeling, correct destinations, hover/security attributes verified |
| FUN-COMPARE-001 through 008 | functional/preview-comparison.md | COV-FUNCTIONAL-005 | Banner presence, tab switching, default candidate, direct access, no-JS fallback verified |

## Test Definitions

### Page Layout Tests

```gherkin
# COV-FUNCTIONAL-001: Maps to FUN-LAYOUT-001 through FUN-LAYOUT-011
Feature: Candidate A Page Structure and Responsiveness

  Scenario: Page displays four sections in correct order
    Given I navigate to Candidate A
    When the page loads
    Then I see a hero section
    And I see a Three Toolkits section below hero
    And I see a "how they fit together" note below Three Toolkits
    And I see a footer section below that
    And the sections appear in order: hero, toolkits, relationship, footer

  Scenario: Page loads within performance target
    Given I navigate to Candidate A
    When I measure the page load time
    Then the page fully loads within 2 seconds

  Scenario Outline: Layout adapts responsively across viewports
    Given I set viewport to <width>px width
    When I navigate to Candidate A
    Then the layout is responsive and readable
    And no horizontal scrolling is required

    Examples:
      | width |
      | 375   |
      | 768   |
      | 1440  |

  Scenario: Page functions without JavaScript
    Given I disable JavaScript in the browser
    When I navigate to Candidate A
    Then all content is visible and accessible
    And links remain clickable

  Scenario: Page renders correctly inside the comparison harness iframe
    Given I open the comparison harness with Candidate A active
    Then Candidate A's content renders identically to its standalone page
```

### Hero Section Tests

```gherkin
# COV-FUNCTIONAL-002: Maps to FUN-HERO-001 through FUN-HERO-012
Feature: Suite Hero Content

  Scenario: Hero displays suite identity
    Given I am on Candidate A's homepage
    Then I see "smaQit" displayed prominently
    And I see the tagline "Power up with smaQit"
    And I see text stating the suite consists of three offerings
    And I see "IT professionals" referenced as the target audience
    And I see "open source" mentioned

  Scenario: Hero degrades gracefully on asset failure
    Given the banner image fails to load
    When I view the hero section
    Then fallback text "smaQit" is displayed with appropriate alt text
    And the section remains fully readable
```

### Three Toolkits Section Tests

```gherkin
# COV-FUNCTIONAL-003: Maps to FUN-FEATURES-001 through FUN-FEATURES-011
Feature: Three Toolkits Cards

  Scenario: Exactly three toolkit cards are displayed with correct content
    Given I scroll to the Three Toolkits section
    Then I see exactly 3 cards
    And card 1 is titled "smaQit" with its tagline and a GitHub link
    And card 2 is titled "smaQit Extensions" with its tagline and a GitHub link
    And card 3 is titled "smaQit ADK" with its tagline and a GitHub link
    And each card has a visually distinct accent

  Scenario: Cards use a grid layout on desktop and stack on mobile
    Given I set viewport to 1440px width
    When I view the Three Toolkits section
    Then the 3 cards are arranged in a grid
    Given I set viewport to 375px width
    When I view the Three Toolkits section
    Then the 3 cards stack vertically and remain readable
```

### Social and Repository Links Tests

```gherkin
# COV-FUNCTIONAL-004: Maps to FUN-SOCIAL-001 through FUN-SOCIAL-015
Feature: Social and Repository Links

  Scenario: Footer displays all four links correctly labeled
    Given I scroll to the footer
    Then I see a GitHub link labeled for smaQit
    And I see a GitHub link labeled for smaQit Extensions
    And I see a GitHub link labeled for smaQit ADK
    And I see a LinkedIn link

  Scenario Outline: Each link opens the correct destination securely
    Given I click the "<label>" link
    Then a new tab opens
    And the URL contains "<domain-fragment>"
    And the link element has target="_blank" and rel="noopener noreferrer"

    Examples:
      | label              | domain-fragment                         |
      | smaQit              | github.com/ruifrvaz/smaqit               |
      | smaQit Extensions   | github.com/ruifrvaz/smaqit-extensions    |
      | smaQit ADK          | github.com/ruifrvaz/smaqit-adk           |
      | LinkedIn            | linkedin.com                             |

  Scenario: Icons remain usable when images fail or on mobile
    Given icon images fail to load
    Then text fallback labels are visible for all four links
    Given I am on a 375px viewport
    Then all four links are large enough for touch (min 44x44px)
```

### Comparison Harness Tests

```gherkin
# COV-FUNCTIONAL-005: Maps to FUN-COMPARE-001 through FUN-COMPARE-008
Feature: Preview Comparison Harness

  Scenario: Banner is present and sticky with three tabs
    Given I open the comparison harness
    Then a banner is visible at the top of the viewport
    And it displays exactly 3 tabs
    When I scroll down
    Then the banner remains fixed at the top

  Scenario: Candidate A is the default
    Given I open the harness with no candidate specified
    Then Candidate A's content is displayed
    And Candidate A's tab is visually indicated as active

  Scenario Outline: Switching tabs swaps the displayed candidate without a full reload
    Given I open the harness
    When I select the "<candidate>" tab
    Then the "<candidate>" content is displayed below the banner
    And no full browser page reload occurs
    And the "<candidate>" tab is now visually indicated as active

    Examples:
      | candidate   |
      | Candidate B |
      | Candidate C |
      | Candidate A |

  Scenario: Each candidate is reachable directly
    Given I navigate directly to Candidate B's standalone path
    Then Candidate B's content renders correctly without the harness banner's switching logic being required

  Scenario: Banner degrades without JavaScript
    Given JavaScript is disabled
    When I open the comparison harness
    Then each tab is a standard link that navigates to that candidate's standalone page
```

## Untestable Criteria

| Requirement | Source | Reason | Verification Decision |
|-------------|--------|--------|----------------------|
| FUN-HERO-013 | functional/hero-section.md | Emotional brand perception (empowering energy) is subjective | Manual design review; optional user feedback survey |
| BUS-COMPARE-006 | business/uc4-compare.md | Whether the harness "reads" as pre-release is a subjective interpretation | Manual review by the Site Owner |

## Coverage Summary

| Layer | Total Requirements | Mapped to Tests | Untestable | Coverage % |
|-------|--------------------|------------------|------------|------------|
| Functional (Candidate A + Harness) | 57 | 56 | 1 | 100% |
| **Total** | **57** | **56** | **1** | **100%** |

**Formula:** Coverage % = (56) / (57 - 1) × 100 = 100%

**Note:** Requirement count: FUN-LAYOUT (11) + FUN-HERO (12 testable + 1 untestable) + FUN-FEATURES (11) + FUN-SOCIAL (15) + FUN-COMPARE (8) = 57 total, 56 testable, all 56 mapped to the five consolidated test features above.

## Acceptance Criteria

Requirements use format: `COV-FUNCTIONAL-[NNN]`

- [ ] COV-FUNCTIONAL-001: All Candidate A page-layout scenarios pass across Chromium, Firefox, and WebKit
- [ ] COV-FUNCTIONAL-002: All hero-section scenarios pass across Chromium, Firefox, and WebKit
- [ ] COV-FUNCTIONAL-003: All Three Toolkits scenarios pass across Chromium, Firefox, and WebKit
- [ ] COV-FUNCTIONAL-004: All social/repository link scenarios pass across Chromium, Firefox, and WebKit
- [ ] COV-FUNCTIONAL-005: All comparison harness scenarios pass across Chromium, Firefox, and WebKit
- [ ] COV-FUNCTIONAL-006: All scenarios pass at 375px, 768px, and 1440px viewports

---

*Generated with smaqit v1.2.0*
