---
id: FUN-SOCIAL
status: implemented
created: 2026-01-22
implemented: 2026-02-04T12:30:00Z
deployed: 2026-01-30T00:00:00Z
validated: 2026-01-30T23:25:24Z
modified: 2026-02-04
prompt_version: initial
---

# Social Links

## References

### Foundation Reference

- [FUN-LAYOUT](./page-layout.md) — Social links are displayed in footer section

### Implements

- [BUS-CONNECT](../business/uc3-connect.md) — Implements social connection via GitHub and LinkedIn

## Scope

### Included

- GitHub icon display and link behavior
- LinkedIn icon display and link behavior
- Hover states for social icons
- External link navigation (opening in new tab)

### Excluded

- Overall page structure (covered in FUN-LAYOUT)
- Footer content beyond social links
- Direct messaging or contact forms
- Email communication

## User Flow

### Overview

Visitor discovers social icons at the bottom of the page, hovers over desired icon to see interaction feedback, and clicks to open GitHub repository or LinkedIn profile in a new tab.

### Steps

1. Visitor scrolls to footer section at bottom of page
2. Visitor sees GitHub and LinkedIn icons displayed
3. Visitor hovers mouse over GitHub or LinkedIn icon
4. Icon displays hover state (visual feedback)
5. Visitor clicks on chosen social icon
6. Browser opens link in new tab
7. Visitor arrives at smaQ'it GitHub repository or creator's LinkedIn profile

### Error Handling

| Condition | Behavior |
|-----------|----------|
| Icon images fail to load | Display text fallback labels ("GitHub", "LinkedIn") |
| Link URL invalid | Display error message; icon remains non-functional |
| Browser blocks popup | Show notification to user; provide alternative click instruction |

## Data Model

### SocialLink

| Attribute | Type | Description | Constraints |
|-----------|------|-------------|-------------|
| id | Text | Link identifier | Required; unique; values: github, linkedin |
| platform | Text | Social platform name | Required; values: "GitHub", "LinkedIn" |
| url | Text | External link URL | Required; valid URL format; must start with https:// |
| iconUrl | Text | Icon image URL or reference | Required |
| isHovered | Boolean | Whether icon is currently hovered | Required; default: false |

#### Social Link Configuration

| Platform | URL | Icon |
|----------|-----|------|
| GitHub | https://github.com/[username]/smaqit | GitHub brand icon |
| LinkedIn | https://linkedin.com/in/[profile] | LinkedIn brand icon |

## API Contract

### External Navigation

**Purpose:** Open external social platform link in new browser tab

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

- [x] FUN-SOCIAL-001: Footer displays GitHub icon link
- [x] FUN-SOCIAL-002: Footer displays LinkedIn icon link
- [x] FUN-SOCIAL-003: GitHub icon is visually recognizable as GitHub brand
- [x] FUN-SOCIAL-004: LinkedIn icon is visually recognizable as LinkedIn brand
- [x] FUN-SOCIAL-005: GitHub icon displays hover state when mouse cursor hovers over it
- [x] FUN-SOCIAL-006: LinkedIn icon displays hover state when mouse cursor hovers over it
- [x] FUN-SOCIAL-007: Clicking GitHub icon opens smaQ'it GitHub repository in new tab
- [x] FUN-SOCIAL-008: Clicking LinkedIn icon opens creator LinkedIn profile in new tab
- [x] FUN-SOCIAL-009: Links open with target="_blank" attribute
- [x] FUN-SOCIAL-010: Links include rel="noopener noreferrer" for security
- [x] FUN-SOCIAL-011: Social icons display text fallback when icon images fail to load
- [x] FUN-SOCIAL-012: Social icons remain visually distinct and clickable on mobile devices

---

*Generated with smaqit v0.6.2-beta*
