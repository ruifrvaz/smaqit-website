---
id: INF-DEPLOY
status: validated
created: 2026-01-22
deployed: 2026-01-30T00:00:00Z
validated: 2026-01-30T23:25:24Z
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

- Manual deployment approval workflow
- GitHub Actions workflow configuration with approval gates
- Deployment steps and validation
- Rollback capability
- Deployment status reporting
- Environment protection rules

### Excluded

- Automatic deployment on git push (requires manual approval)
- Local development environment setup
- Build or compilation steps (not needed for static site)
- GitHub Pages hosting configuration (covered in INF-HOSTING)
- Custom domain DNS setup (covered in INF-DOMAIN)

## Compute Resources

### Service Topology

**Git Push** → **GitHub Actions (Approval Required)** → **Manual Review** → **Approved Deployment** → **GitHub Pages** → **Live Site**

### Resources

| Service | Type | CPU | Memory | Storage | Purpose |
|---------|------|-----|--------|---------|---------|
| GitHub Actions Runner | Ephemeral Container | 2 cores | 7 GB | 14 GB | Executes deployment workflow after approval |

**Constraints:**
- Free tier: 2,000 minutes/month for private repos (unlimited for public repos)
- Concurrent jobs: 20 for free tier
- Job timeout: 6 hours maximum
- Environment protection: Requires manual approval from designated reviewers

## Networking

### Topology

```
Developer → Git Push → GitHub Repository → GitHub Actions (Pending Approval) → 
Manual Approval by Reviewer → GitHub Pages → CDN → Users
```

### Security Boundaries

| Boundary | Ingress | Egress | Purpose |
|----------|---------|--------|------|
| GitHub Repository | Authenticated Git push | Triggers Actions workflow | Source code updates |
| Approval Gate | Designated reviewers only | Authorizes deployment | Production safety control |
| GitHub Actions | Manual approval signal | Deploys to GitHub Pages | Controlled deployment execution |
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
| Target Environment | Production (GitHub Pages) | Deployments go to public site only after approval |
| Deployment Trigger | Push version tag (approval required) | Only tagged releases deploy; manual approval gate protects production |
| Static Files Only | No build step required | Files deployed as-is from `/public` directory |
| Budget | $0 (free for public repositories) | No deployment costs |
| Approval Requirement | Designated reviewers must approve | Prevents accidental production deployments |
| Versioning | Semantic versioning recommended | Tags follow `vMAJOR.MINOR.PATCH` format |
## Deployment Workflow

### Trigger

**Primary (Recommended):**
- **Event:** Push version tag (e.g., `v1.0.0`, `v2.1.3`)
- **Pattern:** Tags matching `v*`
- **Manual:** Workflow can also be manually triggered via GitHub Actions UI

**Alternative:**
- **Event:** Push to `main` branch
- **Paths:** Any file in `/public` directory

### Steps

1. **Checkout Code:** Clone repository at pushed commit
2. **Validate Files:** Verify `public/index.html` exists
3. **Wait for Approval:** Workflow pauses and notifies designated reviewers
4. **Manual Review:** Reviewer inspects changes and approves/rejects deployment
5. **Deploy to GitHub Pages:** Upon approval, publish `/public` directory contents
6. **Verify Deployment:** Check site accessibility at GitHub Pages URL
7. **Report Status:** Update deployment status (approved/rejected/success/failure)

### Approval Process

**Reviewers:** Repository owner or designated approvers configured in GitHub Environment settings

**Environment:** `github-pages` (required by GitHub Pages deploy-pages action)

**Approval Options:**
- **Approve:** Proceed with deployment to production
- **Reject:** Cancel deployment, leave production unchanged

**Timeout:** Pending approvals expire after 30 days (configurable)

### Deployment Options

#### Option 1: Tag-Based with Approval Gate (Recommended)
- Deploy only when version tags are pushed (e.g., `v1.0.0`, `v2.1.3`)
- Workflow trigger: `on: push: tags: ['v*']`
- Configure `github-pages` environment with required reviewers
- Workflow references environment: `environment: github-pages`
- **Note:** GitHub Pages `deploy-pages` action requires `github-pages` environment name
- **Double safety:** Intentional version tag + human approval

**Benefits:**
- Version discipline enforced via semantic versioning
- No accidental deployments from regular commits
- Clear release history via Git tags
- Human review gate catches issues before production

#### Option 2: Push-to-Main with Approval Gate
- Workflow triggers on every push to `main` branch
- Configure `github-pages` environment with required reviewers
- Workflow references environment: `environment: github-pages`
- **Caution:** Every commit triggers approval request (can be noisy)

#### Option 3: Manual Workflow Dispatch Only
- No automatic triggers
- Deploy only via manual "Run workflow" button in GitHub Actions UI
- Requires explicit action from authorized users
- Optional: Can still require environment approval for additional safety

### Rollback

**Mechanism (Tag-Based):** Create new tag pointing to previous stable version.

**Steps:**
1. Identify previous stable version: `git log --tags`
2. Create rollback tag: `git tag v1.0.1-rollback [previous-commit-hash]`
3. Push rollback tag: `git push origin v1.0.1-rollback`
4. Approve rollback deployment in GitHub Actions UI
5. Previous version deploys to production

**Alternative (Commit-Based):**
1. Revert commit: `git revert [commit-hash]`
2. Push revert: `git push origin main`
3. Tag the revert: `git tag v1.0.2 && git push origin v1.0.2`
4. Approve deployment in GitHub Actions UI

## Acceptance Criteria

Requirements use format: `INF-DEPLOY-[NNN]`

- [x] INF-DEPLOY-001: GitHub Actions workflow file exists at `.github/workflows/deploy.yml`
- [x] INF-DEPLOY-002: Workflow triggers on push of version tags matching pattern `v*`
- [x] INF-DEPLOY-003: Workflow pauses and requires manual approval before deploying to production
- [x] INF-DEPLOY-004: `github-pages` environment is configured with required reviewers in repository settings
- [x] INF-DEPLOY-005: Workflow references `environment: github-pages` to enforce approval gate
- [x] INF-DEPLOY-006: Workflow validates `public/index.html` exists before requesting approval
- [x] INF-DEPLOY-007: Designated reviewers receive notification when deployment awaits approval
- [x] INF-DEPLOY-008: Workflow deploys `/public` directory to GitHub Pages only after approval
- [x] INF-DEPLOY-009: Workflow uses `GITHUB_TOKEN` for authentication
- [x] INF-DEPLOY-010: Rejected deployments do not deploy to production
- [x] INF-DEPLOY-011: Deployment completes within 5 minutes of approval
- [x] INF-DEPLOY-012: Deployment status is visible in GitHub Actions UI (pending/approved/rejected)
- [x] INF-DEPLOY-013: Failed deployments do not overwrite production site
- [x] INF-DEPLOY-014: Site is accessible at GitHub Pages URL within 10 minutes of successful deployment
- [x] INF-DEPLOY-015: Workflow logs are accessible for 90 days after deployment
- [x] INF-DEPLOY-016: Approval history is recorded and traceable in GitHub Deployments

### Untestable Criteria

- [ ] INF-DEPLOY-017: Reviewer responds to approval request within 24 hours *(untestable)*
  - **Reason:** Approval timing depends on human availability and cannot be automatically enforced
  - **Proposal:** Configure notification preferences and escalation procedures
  - **Resolution:** Team policy and monitoring

- [ ] INF-DEPLOY-018: Rollback completes within 10 minutes of approval *(untestable)*
  - **Reason:** Rollback is a manual process triggered by developer; timing depends on human response time
  - **Proposal:** Document rollback procedure with estimated time
  - **Resolution:** Manual verification during incident response testing

---

*Generated with smaqit v0.6.2-beta*
