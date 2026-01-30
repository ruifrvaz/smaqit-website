---
name: smaqit.stack
description: Create stack layer specifications from technology preferences
agent: smaqit.stack
---

# Stack Prompt

This prompt captures technology preferences and constraints for your project. These requirements will be used to generate stack specifications.

## Requirements

### Technology Preferences
aw
- HTML5 - Semantic markup for page structure
- CSS3 - Modern styling with flexbox/grid for responsive layout
- Vanilla JavaScript - Minimal JS for smooth scroll behavior (optional progressive enhancement)
- No framework overhead - simple static site approach
- CDN-hosted assets preferred over local dependencies

### Constraints

- Must work on all modern browsers (Chrome, Firefox, Safari, Edge - last 2 versions)
- Must work on mobile devices (iOS Safari, Android Chrome)
- No backend or database required (static site)
- Fast load times (< 2 seconds per FUN-LAYOUT-003)
- Must remain functional when JavaScript is disabled (FUN-LAYOUT-008)
- Must be hostable on GitHub Pages (static file hosting)
- Repository structure compatible with GitHub Pages deployment

### Build Tools

- None required - direct HTML/CSS/JS files served as-is
- No transpilation, bundling, or compilation step
- Optional: Simple HTTP server for local development (Python `http.server`, Node `http-server`, VS Code Live Server)

### Development Environment

- Text editor or IDE (VS Code, Sublime, etc.)
- Modern web browser with developer tools
- Local web server for development preview (optional but recommended)
- Git for version control

### Dependencies

- Font Awesome (via CDN) - GitHub and LinkedIn social icons
- Google Fonts (via CDN) - Typography for empowering brand aesthetic (optional)
- No JavaScript frameworks or libraries
- No CSS frameworks (custom CSS for full design control)
- No build-time dependencies (npm, webpack, etc.)

### Rationale

- **Simplicity:** No build step, no dependency management, no tooling complexity
- **Performance:** Minimal payload, fast loading, no framework overhead
- **Maintainability:** Easy to understand, modify, and debug for any developer
- **Compatibility:** Works everywhere without transpilation or polyfills
- **Deployment:** Drop files anywhere - no server-side requirements
- **Progressive Enhancement:** Core experience works without JS, enhanced with JS where supported
