---
id: FUN-SOCIAL
status: draft
created: 2026-01-22
modified: 2026-07-15
---

# Social and Repository Links

## References

### Foundation Reference

- [FUN-LAYOUT](./page-layout.md) — Social and repository links are displayed in footer section

### Implements

- [BUS-CONNECT](../business/uc3-connect.md) — Implements social and repository connection via GitHub (x3) and LinkedIn

## Scope

### Included

- GitHub icon display and link behavior for each of the three offerings (smaQit, smaQit Extensions, smaQit ADK)
- LinkedIn icon display and link behavior
- Per-offering labeling so visitors can distinguish the three GitHub links before clicking
- Hover states for all icons
- External link navigation (opening in new tab)

### Excluded

- Overall page structure (covered in FUN-LAYOUT)
- Footer content beyond social/repository links
- Direct messaging or contact forms
- Email communication

## User Flow

### Overview

Visitor discovers repository and social icons at the bottom of the page, distinguishes which GitHub icon corresponds to which offering, hovers to see interaction feedback, and clicks to open the desired repository or LinkedIn profile in a new tab.

### Steps

1. Visitor scrolls to footer section at bottom of page
2. Visitor sees three labeled GitHub icons (smaQit, smaQit Extensions, smaQit ADK) and one LinkedIn icon
3. Visitor hovers mouse over a desired icon
4. Icon displays hover state (visual feedback)
5. Visitor clicks on chosen icon
6. Browser opens link in new tab
7. Visitor arrives at the correct GitHub repository or the creator's LinkedIn profile

### Error Handling

| Condition | Behavior |
|-----------|----------|
| Icon images fail to load | Display text fallback labels ("smaQit", "smaQit Extensions", "smaQit ADK", "LinkedIn") |
| Link URL invalid | Display error message; icon remains non-functional |
| Browser blocks popup | Show notification to user; provide alternative click instruction |

## Data Model

### SocialLink

| Attribute | Type | Description | Constraints |
|-----------|------|-------------|-------------|
| id | Text | Link identifier | Required; unique; values: github-core, github-extensions, github-adk, linkedin |
| label | Text | Visible label distinguishing this link | Required; values: "smaQit", "smaQit Extensions", "smaQit ADK", "LinkedIn" |
| platform | Text | Social platform name | Required; values: "GitHub", "LinkedIn" |
| url | Text | External link URL | Required; valid URL format; must start with https:// |
| iconUrl | Text | Icon image URL or reference | Required |
| isHovered | Boolean | Whether icon is currently hovered | Required; default: false |

#### Social Link Configuration

| Label | Platform | URL |
|-------|----------|-----|
| smaQit | GitHub | https://github.com/ruifrvaz/smaqit |
| smaQit Extensions | GitHub | https://github.com/ruifrvaz/smaqit-extensions |
| smaQit ADK | GitHub | https://github.com/ruifrvaz/smaqit-adk |
| LinkedIn | LinkedIn | https://www.linkedin.com/in/rui-vaz-43b13842 |

## API Contract

### External Navigation

**Purpose:** Open external repository or social platform link in new browser tab

#### Request

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| url | Text | Yes | External URL to navigate to |
| target | Text | Yes | Browser target; value: "_blank" |

#### Response

**Success:**
- New browser tab opens with target URL loaded

**Errors:**

| Condition | Response | Description |
|-----------|----------|-------------|
| Invalid URL | Navigation fails | Browser does not open new tab |
| Popup blocked | Browser notification | User must allow popups or use alternative method |

## State Transitions

### States

| State | Description | Entry Condition |
|-------|-------------|-----------------|
| Default | Icon displayed with default styling | Initial page load |
| Hovered | Icon displayed with hover styling | Mouse cursor over icon |
| Clicked | Navigation initiated | User clicks icon |

### Transitions

```
Default → [Mouse Enter] → Hovered
Hovered → [Mouse Leave] → Default
Hovered → [Click] → Clicked
Clicked → [Navigation Complete] → External Site (end)
```

| From | Event | To | Guard Condition |
|------|-------|-----|-----------------|
| Default | Mouse Enter | Hovered | Cursor enters icon bounds |
| Hovered | Mouse Leave | Default | Cursor leaves icon bounds |
| Hovered | Click | Clicked | User clicks icon |
| Clicked | Navigation Complete | External Site | Browser opens new tab successfully |

## Acceptance Criteria

Requirements use format: `FUN-SOCIAL-[NNN]`

- [ ] FUN-SOCIAL-001: Footer displays a GitHub icon link labeled for smaQit (core)
- [ ] FUN-SOCIAL-002: Footer displays a GitHub icon link labeled for smaQit Extensions
- [ ] FUN-SOCIAL-003: Footer displays a GitHub icon link labeled for smaQit ADK
- [ ] FUN-SOCIAL-004: Footer displays a LinkedIn icon link
- [ ] FUN-SOCIAL-005: Each GitHub icon is visually recognizable as GitHub brand
- [ ] FUN-SOCIAL-006: LinkedIn icon is visually recognizable as LinkedIn brand
- [ ] FUN-SOCIAL-007: Each icon displays a hover state when the mouse cursor hovers over it
- [ ] FUN-SOCIAL-008: Clicking the smaQit GitHub icon opens the smaQit repository in a new tab
- [ ] FUN-SOCIAL-009: Clicking the smaQit Extensions GitHub icon opens the smaQit-extensions repository in a new tab
- [ ] FUN-SOCIAL-010: Clicking the smaQit ADK GitHub icon opens the smaqit-adk repository in a new tab
- [ ] FUN-SOCIAL-011: Clicking the LinkedIn icon opens the creator's LinkedIn profile in a new tab
- [ ] FUN-SOCIAL-012: Links open with target="_blank" attribute
- [ ] FUN-SOCIAL-013: Links include rel="noopener noreferrer" for security
- [ ] FUN-SOCIAL-014: Icons display text fallback labels when icon images fail to load
- [ ] FUN-SOCIAL-015: Icons remain visually distinct and clickable on mobile devices

---

*Generated with smaqit v1.2.0*
