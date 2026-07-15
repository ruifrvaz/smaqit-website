# smaQit (Core)

**Repo:** https://github.com/ruifrvaz/smaqit
**Latest version:** v1.2.0 (2026-05-26)
**License:** MIT
**Platform support:** GitHub Copilot (VS Code) — supported today; other AI assistants planned

## What It Is

An orchestration toolkit for agentic software development. You describe requirements in natural language; specification agents generate stateful specs; implementation agents turn those specs into working, tested, and deployed applications.

> "Built for teams that value auditability, clear boundaries, and reproducible workflows."

## Core Features

- **Lightweight** — single binary, no dependencies. `smaqit init` scaffolds everything.
- **Traceable requirements** — requirements captured in session context with full traceability from input to spec to implementation.
- **Stateful specs** — specifications track lifecycle: `draft → implemented → deployed → validated` (with `failed` and `deprecated` states).
- **Bounded agents** — each agent owns exactly one layer or phase; no scope creep, no multi-responsibility agents.
- **Self-validating** — agents verify their own output before declaring completion.
- **Spec-first** — code follows specs, not the other way around.

## The Five-Layer / Three-Phase Model

smaQit splits work into **specification layers** (what/why) and **implementation phases** (how it gets built, deployed, verified). Each layer/phase maps to a bounded agent and, for Agile teams, to a familiar role:

| Role | Layer | Focus | Invocation |
|---|---|---|---|
| Stakeholders | Input | Requirements and business needs | (session context) |
| Product Owner | Business | Why, for whom, success criteria | `/smaqit.business` |
| Engineers | Functional | What behaviors, contracts, data models | `/smaqit.functional` |
| Software Developer | Stack | With what languages, frameworks, tools | `/smaqit.stack` |
| DevOps | Infrastructure | Where and how it runs | `/smaqit.infrastructure` |
| Testers | Coverage | How we verify it works | `/smaqit.coverage` |

Implementation phases (each an orchestrating agent that invokes the relevant spec agents automatically):

| Phase | Agent | Purpose |
|---|---|---|
| Development | `/smaqit.development` | Build working app from specs (generates Business/Functional/Stack specs first if missing) |
| Deployment | `/smaqit.deployment` | Deploy to target environment (generates Infrastructure specs first if missing) |
| Validation | `/smaqit.validation` | Run tests against deployed system (generates Coverage specs first if missing) |

As of v0.7.0+, `/smaqit.development` coordinates spec generation internally — users no longer need to manually run `/smaqit.business` → `/smaqit.functional` → `/smaqit.stack` in sequence; one command orchestrates the whole phase. Both **autonomous** (no user breaks) and **assisted** (maker-checker loop, max 3 iterations) execution modes are supported.

## CLI Commands

| Command | Description |
|---|---|
| `smaqit init` | Scaffold `.smaqit/` and `.github/` directories |
| `smaqit status` | Show project state and spec coverage |
| `smaqit plan` | Show specs to process (for agents) |
| `smaqit validate` | Verify project structure integrity |
| `smaqit help` | Show detailed command help |
| `smaqit uninstall` | Remove smaqit from project |
| `smaqit version` | Show smaqit version |

## Installation

```bash
curl -fsSL https://raw.githubusercontent.com/ruifrvaz/smaqit/main/install.sh | bash
smaqit init
```

Reinstallation is safe: `smaqit init` on an existing install detects conflicts, preserves user specs and custom extensions in `.smaqit/`, and prompts for confirmation only when smaqit-owned files would be overwritten.

## Quickstart: "Hello, Mario!"

The canonical onboarding tutorial (`docs/wiki/workflows/quickstart.md`) walks through building a console app end to end:

1. `smaqit init` in a new project
2. Invoke `/smaqit.development` in Copilot chat
3. Describe requirements in natural language (actors, behavior, constraints)
4. The agent generates Business/Functional/Stack specs, builds the code, and runs tests

Result: a `specs/` tree (business/functional/stack), working `src/`, and passing `tests/` — all traceable back to the original requirement.

## Core Concepts (for messaging/positioning)

- **Stateful Specifications** — every spec carries YAML frontmatter (`id`, `status`, `created`, `implemented`, `deployed`, `validated`) enabling incremental development: partial progress, resumable workflows, targeted regeneration of only failed specs, and progress visibility via `smaqit status`. State lives in the spec file itself — no external database, git-friendly and diffable.
- **Bounded Agents** — each agent enforces a Stop → Respond → Suggest pattern when asked to do out-of-scope work (e.g., asking the Business agent to also write code gets redirected to `/smaqit.development`, not silently accommodated). This keeps specialization high and prevents scope creep / context pollution.
- **Layer Independence** — each layer's specification is generated from session context (the user's stated requirements for that layer), not derived from upstream specs — upstream specs provide context, not requirements. Prevents "false derivation chains."
- **Self-Validating Agents** — agents check their own output against acceptance criteria before declaring a spec/phase complete.
- **Team Alignment** — the layer model deliberately mirrors Agile/Scrum roles (see table above), so specialists work in their own domain layer without needing full-stack context, enabling parallel work and clear handoffs.
- **Traceability** — every implementation artifact (HTML/CSS/JS/code comments) can carry traceability comments linking back to the specific spec requirement ID that justified it (seen in the smaQit-website codebase itself, e.g. `<!-- Traceability: BUS-PRODUCT-001 -->`).

## Compatibility

| Platform | Status |
|---|---|
| GitHub Copilot (VS Code) | Supported |
| Other AI assistants | Planned |

## Notable History / Provenance

- Originally shipped generic Level 0/1/2 compilation agents and templates in-repo; these were extracted into the standalone **smaqit-adk** repo (v0.9.0, April 2026) once the compilation framework proved reusable beyond smaQit itself — this is the origin of the current three-product structure.
- 14 infrastructure-focused skills (CI/CD generation, rsync deploy, TLS/domain config, VM bootstrap, Terraform provisioning for Cyso Cloud, etc.) were migrated in from a project called "SPECtacular" in v1.2.0 (May 2026), substantially expanding the Infrastructure layer's out-of-the-box capability.

## Related Projects

- **smaQit-ADK** — the agent development toolkit smaQit itself was built with
- **smaQit Extensions** — quality-of-life skills that pair with any smaqit-based (or general agentic) workflow
