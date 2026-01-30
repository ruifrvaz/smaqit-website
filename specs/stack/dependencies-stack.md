---
id: STK-DEPENDENCIES
status: deployed
created: 2026-01-22
implemented: 2026-01-22T23:30:00Z
deployed: 2026-01-30T00:00:00Z
prompt_version: initial
---

# External Dependencies

## References

### Foundation Reference

- [STK-FRONTEND](./frontend-stack.md) — Dependencies extend base frontend stack

### Implements

- [FUN-SOCIAL](../functional/social-links.md) — Provides GitHub and LinkedIn icons

## Scope

### Included

- Icon library for social links
- Optional web font for typography
- CDN delivery mechanism
- Version pinning strategy

### Excluded

- Core frontend technologies (covered in STK-FRONTEND)
- JavaScript frameworks or libraries (intentionally excluded)
- Build-time dependencies (none required)
- Development tooling (not part of production stack)

## Technology Stack

### Languages

*Not applicable: Dependencies are pre-compiled assets served via CDN.*

### Frameworks

*Not applicable: No framework dependencies.*

### Libraries

| Library | Version | Purpose |
|---------|---------|---------|
| Font Awesome | 6.x (latest via CDN) | GitHub and LinkedIn social icons (FUN-SOCIAL-003, FUN-SOCIAL-004) |
| Google Fonts | Latest via CDN (optional) | Typography for empowering brand aesthetic |

### Build Tools

*Not applicable: CDN assets require no build step.*

## Rationale

### Font Awesome via CDN
- **Icon coverage:** Includes official GitHub and LinkedIn brand icons
- **Recognition:** Widely recognized icon set, familiar to users
- **CDN delivery:** Fast global distribution, browser caching
- **Zero build:** No local files, no icon processing
- **Fallback:** Can display text labels if CDN fails (per FUN-SOCIAL-011)
- **Free tier:** Core icons available without subscription

**Alternative considered:** SVG icons directly in HTML
- **Rejected:** Increases HTML size; harder to maintain; Font Awesome provides consistent styling

### Google Fonts via CDN (Optional)
- **Typography variety:** Access to professional web fonts
- **Performance:** Optimized delivery and font subsetting
- **CDN caching:** Users likely have fonts cached from other sites
- **Fallback:** CSS font stack ensures readability if CDN fails (per FUN-HERO-008)
- **Free:** No licensing costs

**Alternative considered:** System fonts only
- **Available:** Can use system font stack if preferred for maximum performance
- **Decision:** Optional; can implement without Google Fonts using web-safe fallbacks

## CDN Strategy

### Version Pinning

**Font Awesome:**
```html
<!-- Pin to major version 6.x for stability -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
      integrity="sha512-..." 
      crossorigin="anonymous" 
      referrerpolicy="no-referrer" />
```

**Google Fonts (if used):**
```html
<!-- Load via Google Fonts API with font-display:swap for performance -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=[FONT_NAME]:wght@[WEIGHTS]&display=swap" rel="stylesheet">
```

### Security
- Use Subresource Integrity (SRI) hashes for Font Awesome
- Use `crossorigin="anonymous"` for CORS
- Use `referrerpolicy="no-referrer"` for privacy

### Performance
- Use `preconnect` for Google Fonts to reduce DNS/TLS overhead
- Use `font-display: swap` to prevent invisible text during load
- Load only required font weights to minimize payload

## Constraints

| Constraint | Description | Impact |
|------------|-------------|--------|
| No Build Dependencies | Must work without npm, webpack, or bundlers | Use CDN delivery instead of local packages |
| Performance | Must load quickly (< 2 seconds per FUN-LAYOUT-003) | Minimize dependencies; use CDN caching |
| Fallback Required | Icons must have text fallback (FUN-SOCIAL-011) | Implement text labels for accessibility |
| GitHub Pages Compatible | Must work on static file hosting | CDN assets compatible with static hosting |
| Brand Recognition | Icons must be recognizable (FUN-SOCIAL-003/004) | Use standard icon library with official brand icons |

## Acceptance Criteria

Requirements use format: `STK-DEPENDENCIES-[NNN]`

- [x] STK-DEPENDENCIES-001: Font Awesome is loaded via CDN (not local files)
- [x] STK-DEPENDENCIES-002: Font Awesome version is pinned to major version 6.x
- [x] STK-DEPENDENCIES-003: Font Awesome includes GitHub brand icon (fa-github)
- [x] STK-DEPENDENCIES-004: Font Awesome includes LinkedIn brand icon (fa-linkedin)
- [x] STK-DEPENDENCIES-005: Font Awesome CDN link includes Subresource Integrity (SRI) hash
- [x] STK-DEPENDENCIES-006: Font Awesome CDN link includes crossorigin="anonymous" attribute
- [x] STK-DEPENDENCIES-007: Google Fonts (if used) are loaded via Google Fonts API CDN
- [x] STK-DEPENDENCIES-008: Google Fonts (if used) use font-display: swap for performance
- [x] STK-DEPENDENCIES-009: Google Fonts (if used) use preconnect for DNS/TLS optimization
- [x] STK-DEPENDENCIES-010: CSS includes fallback font stack in case CDN assets fail to load
- [x] STK-DEPENDENCIES-011: No npm packages or build-time dependencies are required for production

---

*Generated with smaqit v0.6.2-beta*
