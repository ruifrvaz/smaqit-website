---
name: smaqit.functional
description: Create functional layer specifications from user experience requirements
agent: smaqit.functional
---

# Functional Prompt

This prompt captures functional requirements for your project. These requirements will be used to generate functional specifications.

## Requirements

---

## CONCERN: Page Layout

Define the overall page structure, sections, and responsive behavior.

### User Experience

- Single-page vertical scroll layout
- Three main sections: Hero, Features, Footer
- Responsive design adapts to mobile (< 768px), tablet (768px-1024px), and desktop (> 1024px) viewports
- Fast initial load (within 2 seconds)

### Behaviors

- Page loads with hero section in viewport
- Smooth scroll navigation between sections
- Graceful degradation for older browsers

### Data Models

- Page Structure (sections: hero, features, footer)
- Viewport Breakpoints (mobile: < 768px, tablet: 768-1024px, desktop: > 1024px)

---

## CONCERN: Hero Section

Define the hero section that introduces smaQ'it with product name, tagline, and description.

### User Experience

- Hero section immediately visible on page load
- Displays product name, tagline, and SDD description
- Empowering visual design with bold typography and dynamic energy

### Data Models

- Product Information
  - Name: "smaQ'it"
  - Tagline: "Power up with smaQ'it"
  - Description: "Spec Driven Development (SDD) toolkit"
  - Target Audience: "IT professionals (POs, architects, engineers, testers)"
  - License: "Open source"

---

## CONCERN: Features Section

Define the features display with 4 feature cards showcasing key capabilities.

### User Experience

- Features section below the fold with 4 feature cards
- Cards arranged in responsive grid (2x2 on desktop, 2x2 or 1x4 on mobile)

### Behaviors

- Feature cards are visible when section scrolls into view

### Data Models

- Features (array of 4 items)
  - Stateful Specs (title, description)
  - Versioned Prompts (title, description)
  - Built for Agile Teams (title, description)
  - Modular Layers (title, description)

---

## CONCERN: Social Links

Define social media icons in footer for GitHub and LinkedIn connection.

### User Experience

- Footer with social icons (GitHub, LinkedIn)
- Icons visually recognizable and clickable

### Behaviors

- Social icon links open in new tab/window
- Hover states on social icons

### Interactions

- Click social icons to open external GitHub/LinkedIn links

### Data Models

- Social Links
  - GitHub URL (repository link)
  - LinkedIn URL (profile link)

### State Transitions

- Social Icon Hover → Hover State Active → Hover Exit → Default State
- Social Icon Click → New Tab Opens → External Site Loaded

### API Contracts

- External navigation contracts:
  - GitHub link → Opens smaQ'it repository in new tab
  - LinkedIn link → Opens creator profile in new tab
