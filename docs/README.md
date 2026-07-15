# smaQit Documentation

This folder is the working knowledge base for the smaQit website overhaul. smaQit has grown from a single tool into a suite of three offerings, and the site (currently branded around the original `smaqit` repo alone) needs to represent all three.

## The Three Offerings

| Product | Repo | Tagline | Role in the suite |
|---|---|---|---|
| **smaQit** | [ruifrvaz/smaqit](https://github.com/ruifrvaz/smaqit) | Spec-driven agent orchestration | The core framework/product. Turns requirements into stateful specs, then into working, tested, deployed applications. |
| **smaQit Extensions** | [ruifrvaz/smaqit-extensions](https://github.com/ruifrvaz/smaqit-extensions) | Quality-of-life workflows, agents and skills | A skills/agents pack that bolts onto any agentic dev workflow: session management, task tracking, releases, testing, project diagnostics. |
| **smaQit ADK** | [ruifrvaz/smaqit-adk](https://github.com/ruifrvaz/smaqit-adk) | Agent Development Kit | The meta-toolkit — lets anyone create their own custom Copilot agents and skills. smaQit itself was built with it. |

## How They Relate

```
smaQit ADK  ──(used to build)──>  smaQit (product)
     |
     └──(also builds custom agents/skills for)──> any project

smaQit Extensions ──(installs alongside)──> smaQit, or any agentic repo
```

- **ADK is the meta-layer.** It compiles principles into templates into agents. smaQit (the spec-driven product) is itself "a proof-of-concept built with smaQit-ADK."
- **smaQit is the flagship product.** Five-layer spec system (Business, Functional, Stack, Infrastructure, Coverage) with three implementation phases (Development, Deployment, Validation).
- **Extensions is the companion pack.** Not required to use smaQit, but designed to sit alongside it (or any repo) adding session/task/release/testing quality-of-life skills.

All three share: GitHub Copilot (VS Code) as the current supported platform, Go-based single-binary installers (`curl | bash`), MIT license, and the same author (ruifrvaz).

## Files in This Folder

- `smaqit-core.md` — Deep dive on the core smaQit framework
- `smaqit-extensions.md` — Deep dive on smaQit Extensions
- `smaqit-adk.md` — Deep dive on smaQit ADK
- `website-content-brief.md` — Synthesized positioning, messaging, and site-structure recommendations for the overhaul

## Current Site State (for reference)

The live site (`public/index.html`) only brands the original **smaqit** product: a hero section, a 4-feature grid (Stateful Specs, Versioned Prompts, Built for Agile Teams, Modular Layers), and a footer with GitHub/LinkedIn links. It was itself built using smaQit's own Spec Driven Development workflow (see `specs/` at repo root — `uc1-product`, `uc2-features`, `uc3-connect`). Tagline: "Power up with smaQit."

This documentation set captures what's needed to extend that story to all three offerings.
