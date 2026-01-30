---
id: INF-DEPLOY
status: draft
created: 2026-01-22
prompt_version: initial
---

# Deployment Pipeline

## References

### Foundation Reference

- [INF-HOSTING](./github-pages-hosting.md) — Deployment pipeline publishes to GitHub Pages hosting
- [INF-DOMAIN](./custom-domain.md) — Deployed site accessible via custom domain

### Enables

#### Business
- [BUS-PRODUCT](../business/uc1-product.md) — Deploys product information to production
- [BUS-FEATURES](../business/uc2-features.md) — Deploys feature descriptions to production
- [BUS-CONNECT](../business/uc3-connect.md) — Deploys social connection points to production

#### Functional
- [FUN-LAYOUT](../functional/page-layout.md) — Deploys page structure
- [FUN-HERO](../functional/hero-section.md) — Deploys hero section
- [FUN-FEATURES](../functional/features-section.md) — Deploys feature cards
- [FUN-SOCIAL](../functional/social-links.md) — Deploys social links

#### Stack
- [STK-FRONTEND](../stack/frontend-stack.md) — Deploys HTML, CSS, and JavaScript files
- [STK-DEPENDENCIES](../stack/dependencies-stack.md) — Ensures CDN dependencies load correctly in production

## Scope

### Included

- Automated deployment trigger from Git push
- GitHub Actions workflow configuration
- Deployment steps and validation
- Rollback capability
- Deployment status reporting

### Excluded

- Local development environment setup
- Manual deployment procedures (automated only)
- Build or compilation steps (not needed for static site)
- GitHub Pages hosting configuration (covered in INF-HOSTING)
- Custom domain DNS setup (covered in INF-DOMAIN)

## Compute Resources

### Service Topology

**Git Push** → **GitHub Actions** → **GitHub Pages Deployment** → **Live Site**

### Resources

| Service | Type | CPU | Memory | Storage | Purpose |
|---------|------|-----|--------|---------|---------|
| GitHub Actions Runner | Ephemeral Container | 2 cores | 7 GB | 14 GB | Executes deployment workflow |

**Constraints:**
- Free tier: 2,000 minutes/month for private repos (unlimited for public repos)
- Concurrent jobs: 20 for free tier
- Job timeout: 6 hours maximum

## Networking

### Topology

```
Developer → Git Push → GitHub Repository → GitHub Actions → GitHub Pages → CDN → Users
```

### Security Boundaries

| Boundary | Ingress | Egress | Purpose |
|----------|---------|--------|---------|
| GitHub Repository | Authenticated Git push | Triggers Actions workflow | Source code updates |
| GitHub Actions | Repository events | Deploys to GitHub Pages | Automated deployment execution |
| GitHub Pages | Actions deployment | Serves updated site | Production environment |

### Integration Points

| System | Protocol | Direction | Purpose |
|--------|----------|-----------|---------|
| Git Remote | HTTPS/SSH | Inbound (push) | Receives code updates |
| GitHub Actions | GitHub API | Bidirectional | Orchestrates deployment |
| GitHub Pages | GitHub API | Outbound (deploy) | Publishes static files |

## Scaling

GitHub Actions automatically scales workflow execution. No manual configuration required.

| Aspect | Mechanism | Limit |
|--------|-----------|-------|
| Concurrent Deployments | Automatic queuing | 1 deployment at a time per repository |
| Workflow Execution | On-demand runners | 2,000 minutes/month (free tier, public repos unlimited) |

## Observability

### Logging

| Log Type | Destination | Retention | Purpose |
|----------|-------------|-----------|---------|
| Workflow Logs | GitHub Actions interface | 90 days | Track deployment steps and errors |
| Deployment Status | GitHub Deployments API | Indefinite | Monitor deployment history |
| Commit Messages | Git history | Indefinite | Trace changes triggering deployments |

### Metrics

| Metric | Source | Alert Threshold | Purpose |
|--------|--------|-----------------|---------|
| Deployment Status | GitHub Actions | Failure | Detect deployment issues |
| Deployment Duration | GitHub Actions | > 5 minutes | Detect performance degradation |
| Deployment Frequency | Git commits | N/A | Track release velocity |

### Tracing

GitHub Actions provides step-by-step execution logs for each workflow run.

## Secrets Management

| Secret | Type | Source | Rotation |
|--------|------|--------|----------|
| GITHUB_TOKEN | Automatic Token | GitHub Actions | Automatic per workflow run |

**Note:** GITHUB_TOKEN is automatically provided and scoped to the repository. No manual secret configuration required.

## Constraints

| Constraint | Description | Impact |
|------------|-------------|--------|
| Target Environment | Production (GitHub Pages) | Deployments go directly to public site |
| Deployment Trigger | Push to `main` branch | No manual approval gate |
| Static Files Only | No build step required | Files deployed as-is from `/public` directory |
| Budget | $0 (free for public repositories) | No deployment costs |

## Deployment Workflow

### Trigger

- **Event:** Push to `main` branch
- **Paths:** Any file in `/public` directory
- **Manual:** Workflow can be manually triggered via GitHub Actions UI

### Steps

1. **Checkout Code:** Clone repository at pushed commit
2. **Validate Files:** Verify `public/index.html` exists
3. **Deploy to GitHub Pages:** Publish `/public` directory contents
4. **Verify Deployment:** Check site accessibility at GitHub Pages URL
5. **Report Status:** Update deployment status (success/failure)

### Rollback

**Mechanism:** Revert commit and push to `main` branch triggers automatic redeployment of previous version.

**Steps:**
1. Identify commit to revert: `git log`
2. Revert commit: `git revert [commit-hash]`
3. Push revert: `git push origin main`
4. GitHub Actions automatically deploys reverted version

## Acceptance Criteria

Requirements use format: `INF-DEPLOY-[NNN]`

- [ ] INF-DEPLOY-001: GitHub Actions workflow file exists at `.github/workflows/deploy.yml`
- [ ] INF-DEPLOY-002: Workflow triggers on push to `main` branch
- [ ] INF-DEPLOY-003: Workflow deploys `/public` directory to GitHub Pages
- [ ] INF-DEPLOY-004: Workflow uses `GITHUB_TOKEN` for authentication
- [ ] INF-DEPLOY-005: Workflow validates `public/index.html` exists before deployment
- [ ] INF-DEPLOY-006: Deployment completes within 5 minutes of push
- [ ] INF-DEPLOY-007: Deployment status is visible in GitHub Actions UI
- [ ] INF-DEPLOY-008: Failed deployments do not overwrite production site
- [ ] INF-DEPLOY-009: Site is accessible at GitHub Pages URL within 10 minutes of successful deployment
- [ ] INF-DEPLOY-010: Workflow logs are accessible for 90 days after deployment

### Untestable Criteria

- [ ] INF-DEPLOY-011: Rollback completes within 10 minutes *(untestable)*
  - **Reason:** Rollback is a manual process triggered by developer; timing depends on human response time
  - **Proposal:** Document rollback procedure with estimated time
  - **Resolution:** Manual verification during incident response testing

---

*Generated with smaqit v0.6.2-beta*
