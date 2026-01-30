---
id: INF-DOMAIN
status: draft
created: 2026-01-22
prompt_version: initial
---

# Custom Domain Configuration

## References

### Foundation Reference

- [INF-HOSTING](./github-pages-hosting.md) — Custom domain maps to GitHub Pages hosting

### Enables

#### Business
- [BUS-PRODUCT](../business/uc1-product.md) — Makes product accessible via branded domain
- [BUS-FEATURES](../business/uc2-features.md) — Makes features accessible via branded domain
- [BUS-CONNECT](../business/uc3-connect.md) — Makes social connections accessible via branded domain

#### Functional
- [FUN-LAYOUT](../functional/page-layout.md) — Page accessible via custom domain
- [FUN-HERO](../functional/hero-section.md) — Hero section accessible via custom domain
- [FUN-FEATURES](../functional/features-section.md) — Features accessible via custom domain
- [FUN-SOCIAL](../functional/social-links.md) — Social links accessible via custom domain

#### Stack
- [STK-FRONTEND](../stack/frontend-stack.md) — Frontend accessible via custom domain
- [STK-DEPENDENCIES](../stack/dependencies-stack.md) — Dependencies load correctly from custom domain

## Scope

### Included

- DNS configuration for custom domain
- GitHub Pages custom domain setup
- SSL/TLS certificate provisioning via GitHub
- Domain verification
- HTTPS enforcement

### Excluded

- Domain registration and purchase (prerequisite)
- GitHub Pages hosting configuration (covered in INF-HOSTING)
- Deployment automation (covered in INF-DEPLOY)

## Compute Resources

### Service Topology

**DNS resolution** → **GitHub Pages hosting** → **Static site delivery**

No additional compute resources required. DNS provides name resolution; GitHub handles SSL certificates and hosting.

### Resources

| Service | Type | CPU | Memory | Storage | Purpose |
|---------|------|-----|--------|---------|---------|
| DNS Provider | Managed DNS Service | N/A | N/A | N/A | Resolves custom domain to GitHub Pages |
| GitHub Pages SSL | Managed Certificate | N/A | N/A | N/A | Provides HTTPS encryption |

## Networking

### Topology

```
User Browser → DNS Lookup → Custom Domain → GitHub CDN → Static Site
                                ↓
                         SSL/TLS Certificate (Let's Encrypt via GitHub)
```

### DNS Records

| Type | Host | Value | TTL | Purpose |
|------|------|-------|-----|---------|
| A | @ | 185.199.108.153 | 3600 | GitHub Pages IPv4 (primary) |
| A | @ | 185.199.109.153 | 3600 | GitHub Pages IPv4 (redundancy) |
| A | @ | 185.199.110.153 | 3600 | GitHub Pages IPv4 (redundancy) |
| A | @ | 185.199.111.153 | 3600 | GitHub Pages IPv4 (redundancy) |
| AAAA | @ | 2606:50c0:8000::153 | 3600 | GitHub Pages IPv6 (primary) |
| AAAA | @ | 2606:50c0:8001::153 | 3600 | GitHub Pages IPv6 (redundancy) |
| AAAA | @ | 2606:50c0:8002::153 | 3600 | GitHub Pages IPv6 (redundancy) |
| AAAA | @ | 2606:50c0:8003::153 | 3600 | GitHub Pages IPv6 (redundancy) |
| CNAME | www | [username].github.io | 3600 | WWW subdomain redirect |

**Note:** Replace `[username]` with actual GitHub username (e.g., `ruifrvaz.github.io`).

### Security Boundaries

| Boundary | Ingress | Egress | Purpose |
|----------|---------|--------|---------|
| DNS Resolution | Any DNS client | Returns GitHub Pages IPs | Public domain resolution |
| SSL/TLS Encryption | HTTPS clients only | Encrypted content delivery | Secure communication |

### Integration Points

| System | Protocol | Direction | Purpose |
|--------|----------|-----------|---------|
| DNS Provider | DNS (UDP 53) | Inbound queries | Resolves domain to GitHub IPs |
| Let's Encrypt | HTTPS | Outbound (GitHub) | Issues SSL certificates automatically |

## Scaling

DNS and SSL certificate provisioning handled automatically by GitHub Pages and DNS provider.

| Aspect | Mechanism | Limit |
|--------|-----------|-------|
| DNS Queries | Distributed DNS servers | No practical limit |
| SSL Certificate Renewal | Automatic (Let's Encrypt) | 90-day validity, auto-renewed |
| Propagation Time | DNS TTL-based | ~1 hour to 24 hours initial propagation |

## Observability

### Logging

| Log Type | Destination | Retention | Purpose |
|----------|-------------|-----------|---------|
| DNS Queries | DNS provider dashboard | Varies by provider | Monitor domain resolution |
| SSL Certificate Status | GitHub Pages settings | Real-time status | Monitor certificate health |

### Metrics

| Metric | Source | Alert Threshold | Purpose |
|--------|--------|-----------------|---------|
| DNS Resolution | DNS provider | Resolution failure | Detect DNS issues |
| SSL Certificate Expiry | GitHub Pages | < 30 days to expiry | Detect renewal issues |
| Domain Verification | GitHub repository settings | Unverified status | Ensure domain ownership |

### Tracing

Not applicable for DNS and SSL configuration.

## Secrets Management

No secrets required. Domain ownership verified via DNS records or repository file.

## Constraints

| Constraint | Description | Impact |
|------------|-------------|--------|
| Target Environment | Production (public internet) | Domain must be publicly resolvable |
| Geographic | Global DNS resolution | Low latency worldwide |
| Budget | DNS provider cost only (typically $10-15/year) | Minimal ongoing cost |
| Domain Ownership | User must own domain | Prerequisite for configuration |
| SSL Certificate | GitHub provides via Let's Encrypt | Free, automatic, 90-day renewal |

## Acceptance Criteria

Requirements use format: `INF-DOMAIN-[NNN]`

- [ ] INF-DOMAIN-001: Custom domain is configured in GitHub Pages repository settings
- [ ] INF-DOMAIN-002: DNS A records point to all four GitHub Pages IPv4 addresses
- [ ] INF-DOMAIN-003: DNS AAAA records point to all four GitHub Pages IPv6 addresses
- [ ] INF-DOMAIN-004: CNAME record for `www` subdomain points to `[username].github.io`
- [ ] INF-DOMAIN-005: Domain verification succeeds in GitHub repository settings
- [ ] INF-DOMAIN-006: SSL certificate is provisioned and active for custom domain
- [ ] INF-DOMAIN-007: Site is accessible via `https://[custom-domain]`
- [ ] INF-DOMAIN-008: Site is accessible via `https://www.[custom-domain]`
- [ ] INF-DOMAIN-009: HTTP requests redirect to HTTPS automatically
- [ ] INF-DOMAIN-010: SSL certificate shows valid status (green lock in browser)
- [ ] INF-DOMAIN-011: No mixed content warnings (all resources load via HTTPS)

### Untestable Criteria

- [ ] INF-DOMAIN-012: DNS propagation completes within 24 hours *(untestable)*
  - **Reason:** DNS propagation timing varies by ISP and cannot be automatically validated during specification phase
  - **Proposal:** Manual verification via DNS lookup tools (dig, nslookup) after configuration
  - **Resolution:** User confirms DNS resolution from multiple geographic locations

---

*Generated with smaqit v0.6.2-beta*
