# smaQit ADK (Agent Development Kit)

**Repo:** https://github.com/ruifrvaz/smaqit-adk
**Latest version:** adk-v0.7.3 (2026-05-17)
**License:** MIT
**Requirements:** GitHub Copilot (VS Code); CLI advanced tier needs `COPILOT_GITHUB_TOKEN` / `GH_TOKEN` / `GITHUB_TOKEN` or `gh auth login`

## What It Is

An Agent Development Kit for GitHub Copilot — everything needed to create custom agents and skills, either from the command line or directly inside VS Code. It is the meta-toolkit: **smaQit (the core product) is itself "a proof-of-concept built with smaQit-ADK,"** demonstrating a five-layer specification system with compiled agents for each development phase. ADK users aren't limited to that architecture — it's "generic by design," with no domain-specific assumptions baked in.

## Two Tiers

### Lite Tier — zero-config, VS Code only

Run once: `smaqit-adk lite`. Installs two agents and two routing skills, no framework files or templates:

```
.github/
├── agents/
│   ├── smaqit.create-agent.agent.md
│   └── smaqit.create-skill.agent.md
└── skills/
    ├── smaqit.create-agent/SKILL.md
    └── smaqit.create-skill/SKILL.md
```

Activate by just saying "create a new agent" (or "skill") in Copilot chat — no explicit `/`-command or `@`-switching required. Each skill routes to a subagent that gathers specs interactively and compiles the file.

- `smaqit.create-agent` gathers 8 spec sections (identity, purpose, input sources, output format, directives, scope boundaries, completion criteria, failure scenarios) → writes `.github/agents/[name].agent.md`
- `smaqit.create-skill` gathers 5 spec sections (identity, steps with fragility levels, output, scope, failure handling) → writes `.github/skills/[name]/SKILL.md`

### Advanced Tier — globally installed CLI, no VS Code required

```bash
smaqit-adk create-agent
smaqit-adk create-skill
```

Each command runs in a **fully isolated LLM context** — no project agent instructions, no session history, no contamination. You answer questions in the terminal; the compiled file is written into your project when gathering completes.

`smaqit-adk advanced [dir]` installs the full ADK stack (framework, templates, Level agents) into `.smaqit/` for framework extension work — see "The Compilation Chain" below.

Both tiers produce the same compiled output; the difference is *how* they get there (interactive VS Code subagent vs. isolated CLI session).

## Installation

```bash
curl -fsSL https://raw.githubusercontent.com/ruifrvaz/smaqit-adk/main/install.sh | bash
smaqit-adk lite
```

## Commands

| Command | Description |
|---|---|
| `smaqit-adk lite [dir]` | Install lite-tier agents/skills into `.github/` |
| `smaqit-adk advanced [dir]` | Install full ADK (framework, templates, Level agents) into `.smaqit/` |
| `smaqit-adk create-agent [--output <dir>]` | Create an agent interactively (isolated CLI context) |
| `smaqit-adk create-skill [--output <dir>]` | Create a skill interactively (isolated CLI context) |
| `smaqit-adk help` | Detailed command help |
| `smaqit-adk uninstall [lite\|advanced]` | Remove ADK agents/skills |
| `smaqit-adk version` | Show ADK version |

## The Compilation Chain (Expert / Framework-Extension Use)

For contributors extending the ADK framework itself, not just consuming it — a three-level compilation chain:

| Level | Purpose | Answers | Agent | Lives at |
|---|---|---|---|---|
| **L0 — Principles** | Framework philosophy & concepts, no implementation detail | "Why does this matter?" | `/smaqit.L0` | `framework/*.md` |
| **L1 — Templates** | Compiles L0 principles into directive-based templates (MUST/MUST NOT/SHOULD) | "What must an agent do?" | `/smaqit.L1` | `templates/agents/*.template.md` + `templates/agents/compiled/*.rules.md` |
| **L2 — Compiled Agents** | 3-way merge of generic template + compilation rules + gathered specs → concrete agent | (executable output) | `/smaqit.L2` | `agents/` or `.github/agents/` |

`smaqit.new-agent` / `smaqit.new-skill` are the advanced-tier, framework-aware entry points that write an auditable definition file to `.smaqit/definitions/` before invoking L2 — full audit trail of *why* an agent looks the way it does, not just the compiled result. These require the full ADK stack at runtime and are intended for ADK contributors, not typical consumers.

## Design Philosophy

- **Self-contained agents** — no framework files needed in the consuming project (lite tier)
- **Compilation-based** — Principles → Templates → Agents; the compilation chain is internalized in the shipped binary, not distributed to every consuming project
- **Subagent isolation** — clean context via subagent invocation is a first-class design goal, not an afterthought
- **Generic by design** — no domain-specific assumptions; smaQit's five-layer model is *an* example use case, not *the* use case
- **Traceable** — clear L0 → L1 → L2 lineage, visible in the ADK source for anyone auditing why a compiled agent behaves the way it does

## Positioning Notes

- This is the "build your own agent" story — the product for teams/individuals who want smaQit-style rigor (bounded agents, spec-driven compilation, traceability) applied to a domain smaQit itself doesn't cover.
- The lite tier's "just say 'create a new agent' in chat" UX is the friendliest on-ramp of any of the three products — worth foregrounding on the site as the low-friction entry point, with the advanced tier / compilation chain pitched to a more technical, framework-builder audience.
- Historically the origin point of the whole three-product split: ADK was extracted out of smaQit core in early 2026 once it became clear the compilation framework was valuable independent of the five-layer spec-driven product it originally powered.

## Related Projects

- [smaQit](https://github.com/ruifrvaz/smaqit) — the flagship product built with ADK
- [smaQit Extensions](https://github.com/ruifrvaz/smaqit-extensions) — quality-of-life skills that pair with agentic workflows generally
