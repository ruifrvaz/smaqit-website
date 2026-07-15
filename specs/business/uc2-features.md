---
id: BUS-FEATURES
status: draft
created: 2026-01-22
modified: 2026-07-15
---

# UC2-FEATURES: Explore smaQit Suite Capabilities

## Scope

### Included

- Key feature presentation and differentiators for each of the three offerings
- Value communication for each offering's capabilities
- Comparison context between the three offerings (what makes each one distinct)

### Excluded

- Product identity and branding (covered in UC1-PRODUCT)
- Contact and social connection (covered in UC3-CONNECT)
- Side-by-side comparison of alternate landing page directions (covered in UC4-COMPARE)
- Technical implementation details
- Installation or usage instructions

## Actors

| Actor | Description | Goals |
|-------|-------------|-------|
| Product Owner | Professional responsible for product decisions | Evaluate whether smaQit's spec-driven workflow fits team practices |
| Architect | Technical leader designing systems | Assess modularity, integration potential, and whether smaQit ADK can extend the workflow to new domains |
| Engineer | Developer building software | Understand how stateful specs, bounded agents, and Extensions' session/task tooling improve daily development |
| Tester | QA professional ensuring quality | Evaluate how the Coverage layer and Extensions' testing skills support quality practices |
| Framework Builder | Engineer wanting to build custom agents for domains smaQit doesn't cover | Understand what smaQit ADK offers beyond the core product |

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Feature Comprehension | Visitor can name at least 3 key features across the suite after viewing | User recall test |
| Differentiation Clarity | Visitor understands what makes each of the three offerings unique from the other two | Feedback survey |
| Offering-to-Need Mapping | Visitor can identify which offering(s) address their own use case | User testing feedback |

## Use Case

### Preconditions

- Visitor is on the smaQit website
- Visitor has basic understanding of software development concepts

### Main Flow

1. Visitor navigates to or scrolls to the features section
2. Visitor sees smaQit's spec-driven capabilities highlighted (stateful specs, bounded agents, spec-first development)
3. Visitor sees smaQit Extensions' quality-of-life capabilities highlighted (session continuity, task tracking, release automation)
4. Visitor sees smaQit ADK's capabilities highlighted (zero-config agent creation, isolated CLI sessions, compilation chain)
5. Visitor understands each offering's capabilities are presented distinctly, not blended together
6. Visitor appreciates what differentiates each offering from the other two and from generic AI coding assistants

### Alternative Flows

#### Role-Specific Interest

**Trigger:** Visitor has a specific role-based concern

1. Visitor focuses on the offering and features most relevant to their role
2. Visitor identifies value proposition for their specific context
3. Visitor continues to connect via social channels (UC3-CONNECT)

#### Cross-Offering Interest

**Trigger:** Visitor is interested in how offerings combine

1. Visitor notices explanatory content describing the relationship between offerings (e.g., smaQit was built using smaQit ADK)
2. Visitor understands the offerings can be adopted independently or together

### Postconditions

- Visitor can articulate key features for each of the three offerings
- Visitor understands the differentiating factors between offerings
- Visitor can assess relevance of one or more offerings to their professional context

## Acceptance Criteria

Requirements use format: `BUS-FEATURES-[NNN]`

- [ ] BUS-FEATURES-001: Visitor can identify at least 3 key features of smaQit (core)
- [ ] BUS-FEATURES-002: Visitor can identify at least 3 key features of smaQit Extensions
- [ ] BUS-FEATURES-003: Visitor can identify at least 3 key features of smaQit ADK
- [ ] BUS-FEATURES-004: Visitor understands smaQit (core) is designed for spec-driven agentic development
- [ ] BUS-FEATURES-005: Visitor understands smaQit Extensions is designed for day-to-day quality-of-life workflows
- [ ] BUS-FEATURES-006: Visitor understands smaQit ADK is designed for building custom agents and skills
- [ ] BUS-FEATURES-007: Visitor perceives each offering as differentiated from the other two, not redundant
- [ ] BUS-FEATURES-008: Visitor perceives the suite as innovative compared to traditional or generic AI coding approaches

### Untestable Criteria

- [ ] BUS-FEATURES-009: Features presentation resonates with diverse IT professional roles across all three offerings *(untestable)*
  - **Reason:** Role-specific resonance varies by individual background and cannot be universally measured
  - **Proposal:** Use role-neutral language that emphasizes universal development benefits per offering
  - **Resolution:** Manual review; gather feedback from representatives of each target role

---

*Generated with smaqit v1.2.0*
