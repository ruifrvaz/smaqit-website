# Website Content Brief — smaQit Suite Overhaul

Synthesized from research into the three repos, for use when redesigning `public/index.html` (and any new pages/structure). This is a content and IA brief, not a visual design spec.

## Positioning Summary

smaQit is no longer a single tool — it's a **suite of three complementary Copilot-native toolkits**, all open source, all MIT licensed, all installed the same way (`curl | bash` → single binary → `init`):

1. **smaQit** — the flagship. Spec-driven agent orchestration: describe requirements, get stateful specs, get working/tested/deployed code.
2. **smaQit Extensions** — the daily-driver companion. QoL skills for session continuity, task tracking, releases, testing, project diagnostics. Works with or without smaQit core.
3. **smaQit ADK** — the meta-tool. Build your *own* custom Copilot agents and skills, the same way smaQit itself was built.

**Suggested overarching tagline options** (building on the existing "Power up with smaQit"):
- "Power up with smaQit — spec, ship, and extend your AI-assisted workflow."
- "One methodology, three toolkits: specify, orchestrate, extend."
- Keep "Power up with smaQit" as the umbrella brand line; give each product its own sub-tagline (see below).

## Per-Product Sub-Taglines (from each repo's own framing)

| Product | Suggested sub-tagline | Source |
|---|---|---|
| smaQit | "Spec-driven agent orchestration for auditable, reproducible development" | README: "orchestration toolkit for agentic software development... auditability, clear boundaries, reproducible workflows" |
| smaQit Extensions | "Quality-of-life workflows, agents, and skills for your AI coding sessions" | README verbatim |
| smaQit ADK | "The agent development kit — build custom Copilot agents and skills" | README: "ships everything you need to create custom agents and skills" |

## Recommended Site Structure

The current site is a single-page landing (Hero → 4 Features → Footer). For three products, recommend either:

**Option A — Single page, three-product sections (lowest lift, matches current zero-build philosophy)**
- Hero: suite-level positioning, not just smaQit-core
- "Three Toolkits" section: three cards (smaQit / Extensions / ADK), each with icon, one-line description, and a "Learn more" link to GitHub
- Per-product feature strip (reuse the existing 4-feature-card pattern, once per product, or condense to 3 features each)
- "How they fit together" diagram/section (ADK → builds → smaQit; Extensions → pairs with → either)
- Footer: GitHub links to all three repos + LinkedIn

**Option B — Landing page + three product subpages**
- `index.html` becomes a suite overview (cards linking to each product page)
- `smaqit.html`, `smaqit-extensions.html`, `smaqit-adk.html` — one page per product, each following the current page's structure (hero/features/footer) scoped to that product
- More scalable if any product's content grows, but breaks the "zero-build, one HTML file" simplicity the current README emphasizes

Given the current stack is deliberately zero-build (no bundler, static HTML/CSS/JS, Font Awesome + Google Fonts via CDN), **Option A preserves that simplicity** and is the lower-risk migration. Option B is worth considering only if the products' content genuinely needs the room.

## Feature Content Per Product (ready to drop into feature-card markup)

### smaQit
1. **Stateful Specs** — track spec lifecycle (draft → implemented → deployed → validated) with built-in versioning
2. **Bounded Agents** — one agent, one layer or phase — no scope creep, ever
3. **Spec-First Development** — code follows specs, not the other way around
4. **Five Layers, Three Phases** — Business/Functional/Stack/Infrastructure/Coverage specs; Development/Deployment/Validation phases, each mapped to an Agile role

### smaQit Extensions
1. **Session Continuity** — load full context at session start, document history at session end
2. **Task Tracking Built In** — auto-numbered tasks, assisted or autonomous workflow modes
3. **Release Automation** — analyze changes, suggest versions, execute git/PR release flows
4. **Project Diagnostics** — scan for gaps in testing, security, logging, monitoring, CI/CD

### smaQit ADK
1. **Zero-Config Lite Tier** — say "create a new agent" in Copilot chat, no setup beyond one install
2. **Isolated CLI Sessions** — advanced tier runs in a clean LLM context, no project contamination
3. **Principles → Templates → Agents** — traceable L0/L1/L2 compilation chain for framework builders
4. **Generic by Design** — no domain assumptions; smaQit itself is just one example of what you can build

## Cross-Product Narrative (for an "ecosystem" or "how it fits together" section)

Suggested framing, in order of narrative logic:

1. Start with **ADK** conceptually (the foundation) — but lead visually/marketing-wise with **smaQit** (the flagship, most immediately useful product) since that's what visitors currently associate with the brand.
2. "smaQit was built using smaQit-ADK" is a strong, concrete proof point — the flagship product is dogfooding the meta-tool. Worth a callout box or diagram.
3. Extensions is positioned as "works with anything" — lowest commitment, useful in any repo, not gated behind adopting the full spec-driven workflow.

## Brand / Voice Notes (continuity with existing site)

- Keep capitalization convention: **smaQit** (capital Q) in prose/user-facing copy; lowercase `smaqit` only in code/CLI contexts — this distinction is already used consistently across all three repos' READMEs.
- Existing site voice is concise, benefit-first, avoids jargon overload in the hero (technical depth is pushed to the features section). Maintain that pattern across all three products' summaries.
- Existing footer social links: GitHub (`github.com/ruifrvaz/smaqit`) and LinkedIn. Overhaul should add GitHub links for the two new repos (either as additional footer icons, or per-product "View on GitHub" buttons within each product's section) — LinkedIn stays as the single personal/author link.
- Existing copyright line: "© 2026 smaQit. Open source SDD toolkit." — should generalize to reflect the suite, e.g. "© 2026 smaQit. Open source agentic development toolkits."

## Traceability Note

The current site was built via smaQit's own Spec Driven Development process (see root `specs/` folder — `uc1-product.md`, `uc2-features.md`, `uc3-connect.md` with `BUS-PRODUCT-*` / `BUS-FEATURES-*` acceptance criteria, plus `functional/`, `coverage/`, `stack/`, `infrastructure/` layers). If continuing that methodology for the overhaul, new/updated specs should be drafted for:
- **UC1-PRODUCT** (needs revision — currently scoped to smaQit alone, not the suite)
- **UC2-FEATURES** (needs revision — currently lists only the original 4 features)
- A new use case for the three-product structure itself (e.g. **UC4-SUITE** or **UC0-ECOSYSTEM**) covering the "which toolkit is right for me" decision a visitor needs to make

This is optional — the site's own README frames the specs as the source of truth for implementation decisions, so a spec-first pass before touching `public/index.html` would keep the site internally consistent with its own stated methodology.
