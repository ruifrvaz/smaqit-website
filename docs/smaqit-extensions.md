# smaQit Extensions

**Repo:** https://github.com/ruifrvaz/smaqit-extensions
**Latest version:** v1.4.0 (2026-07-13)
**License:** MIT
**Requirements:** GitHub Copilot with agent and skill support, a git repository

## What It Is

Quality-of-life workflows, agents, and skills for agentic development. Adds streamlined session management, task tracking, and release/test automation to any repository with a one-time install. Works standalone or alongside smaQit core.

## What's Included

27 workflow skills + 3 utility agents, installed into a project's `.github/agents/` and `.github/skills/`.

### Skill Categories

**Session Management**
- `smaqit.session-start` — load full project context at session start
- `smaqit.session-assess` — analyze requests before implementation
- `smaqit.session-finish` — document session history at completion
- `smaqit.session-title` — generate concise session titles
- `smaqit.session-recap` — summarize session progress as a structured table

**Task Tracking**
- `smaqit.task-create` — create new tasks with auto-numbering
- `smaqit.task-start` — start a task, with assisted or autonomous workflow mode
- `smaqit.task-list` — show current active tasks
- `smaqit.task-complete` — mark tasks complete with verification
- `smaqit.task-plan` — pre-implementation planning; scores task complexity, gathers codebase context in parallel, produces an execution plan
- `smaqit.task-refresh` — retroactive task creation at session end (scans commits/diffs against `PLANNING.md` to catch untracked work)

**Testing**
- `smaqit.test-start` — initialize testing workflows
- `smaqit.test-create` — build structured E2E test playbooks from task files (build-gate, deploy-gate, live-service validation)
- `smaqit.test-complete` — finalize testing sessions, verify pass/fail, generate standardized reports

**Release Management**
- `smaqit.release-analysis` — collect changes, assess severity, suggest next version
- `smaqit.release-approval` — obtain approval (auto-confirm or interactive)
- `smaqit.release-prepare-files` — validate git state, prepare release files
- `smaqit.release-git-local` — execute git ops for local releases (commit, tag, push)
- `smaqit.release-git-pr` — execute git ops for PR-based releases (CI/CD)

**Project Management**
- `smaqit.project-init` — bootstrap `.github/copilot-instructions.md` from a template
- `smaqit.project-glossary` — manage a per-project glossary
- `smaqit.project-diagnose` — scan project structure for gaps across testing, security, logging, monitoring, provisioning, CI/CD
- `smaqit.project-research` — build/maintain a documentation topology map for the project
- `smaqit.project-recap` — generate a live project dashboard from current codebase state
- `smaqit.project-compendium` — manage a live Q&A knowledge base

**Assessment**
- `smaqit.parity-assess` — compare two systems, generate a structured parity assessment with Mermaid diagrams and an action roadmap

**Utilities**
- `smaqit.utils.read-pdf` — extract text from a PDF and continue with the caller's original goal
- `smaqit.utils.triage-issues` — search upstream GitHub repos for known issues before implementation begins (pre-flight blocking/advisory gate)

### Utility Agents

- `@smaqit.release.local` — automated release management (local dev, interactive or auto-confirm)
- `@smaqit.release.pr` — automated release management (PR-based, CI/CD, auto-confirm only)
- `@smaqit.user-testing` — end-to-end testing workflow

## Installation

```bash
curl -fsSL https://raw.githubusercontent.com/ruifrvaz/smaqit-extensions/main/install.sh | bash
```

Installs to a project's `.github/agents/` and `.github/skills/`, and scaffolds `.smaqit/{tasks,history,user-testing,templates}/`.

## Usage

Skills are invoked by name directly in Copilot chat:

```
smaqit.session-start
smaqit.task-create Implement new feature
smaqit.task-start 001               # Assisted mode (default) — needs user approval
smaqit.task-start 002 --autonomous  # Autonomous mode — AI completes automatically
smaqit.session-finish
```

CLI (the `smaqit-extensions` binary):

```bash
smaqit-extensions init           # Install extensions in current directory
smaqit-extensions update         # Self-update binary to latest release (Linux only)
smaqit-extensions uninstall      # Remove extensions from current directory
smaqit-extensions version        # Show version
```

### Task Workflow Modes

| Mode | Behavior | Use for |
|---|---|---|
| **Assisted** (default) | AI implements and stops; user reviews and runs `task-complete` | Complex features, user-facing changes, quality gates |
| **Autonomous** | AI implements, verifies, and completes automatically — no approval gate | CI/CD pipelines, batch operations, well-defined refactors |

## Positioning Notes

- This is the only one of the three offerings that isn't about *specs or agent-building* — it's operational tooling for the day-to-day of working with an AI coding agent: remembering context between sessions, tracking tasks, shipping releases, and catching known upstream issues before you hit them.
- Designed to be useful standalone in *any* git repo, not just smaQit projects — a lighter-weight, lower-commitment entry point than the full spec-driven workflow.
- Actively the most frequently released of the three products (27 skills across roughly a dozen minor/patch releases in the last few months per its CHANGELOG) — signals it's the most operationally battle-tested / dogfooded piece.

## Related Projects

- [smaQit](https://github.com/ruifrvaz/smaqit) — spec-driven agent orchestration framework
- [smaQit-ADK](https://github.com/ruifrvaz/smaqit-adk) — agent development toolkit
