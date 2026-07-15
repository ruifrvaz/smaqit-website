---
id: BUS-CONNECT
status: draft
created: 2026-01-22
modified: 2026-07-15
---

# UC3-CONNECT: Connect via Social and Repository Channels

## Scope

### Included

- Social and repository link presentation (GitHub for all three offerings, LinkedIn)
- Channel discovery and navigation
- Connection and repository-visit initiation
- Distinguishing which GitHub link corresponds to which offering

### Excluded

- Product identity and branding (covered in UC1-PRODUCT)
- Feature exploration (covered in UC2-FEATURES)
- Direct messaging or contact forms
- Email communication

## Actors

| Actor | Description | Goals |
|-------|-------------|-------|
| Interested Professional | IT professional wanting to explore or contribute to one or more offerings | Access the correct GitHub repository (smaQit, smaQit Extensions, or smaQit ADK) to view source code or contribute |
| Networking Contact | Professional seeking to connect with the creator | Find LinkedIn profile to establish professional connection |
| Community Member | Developer interested in following project updates | Locate social channels to stay informed about any of the three offerings |

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Link Discoverability | Visitor finds relevant social/repository links within 5 seconds of looking | User testing observation |
| Repository Disambiguation | Visitor can tell which GitHub link leads to which offering before clicking | Usability assessment |
| Click-through Intent | Links are clearly actionable | Usability assessment |

## Use Case

### Preconditions

- Visitor is on the smaQit website
- Visitor has interest in connecting, contributing, or exploring source code further

### Main Flow

1. Visitor scrolls to or looks for contact/connection options
2. Visitor sees GitHub links for each of the three offerings and a LinkedIn icon
3. Visitor identifies which GitHub link corresponds to the offering they care about
4. Visitor identifies the LinkedIn icon for professional connection
5. Visitor clicks on desired link
6. Visitor is directed to the external platform (correct GitHub repository or LinkedIn profile)

### Alternative Flows

#### Offering-Specific GitHub Interest

**Trigger:** Visitor wants to view or contribute to one specific offering's code

1. Visitor locates the GitHub link labeled for that specific offering (smaQit, smaQit Extensions, or smaQit ADK)
2. Visitor clicks the link
3. Visitor arrives at the correct GitHub repository for that offering

#### LinkedIn-First Interest

**Trigger:** Visitor wants to connect professionally

1. Visitor locates LinkedIn icon
2. Visitor clicks LinkedIn link
3. Visitor arrives at creator's LinkedIn profile

### Postconditions

- Visitor has successfully navigated to the chosen, correct external destination
- Visitor can continue engagement outside the website

## Acceptance Criteria

Requirements use format: `BUS-CONNECT-[NNN]`

- [ ] BUS-CONNECT-001: Visitor sees a GitHub link for the smaQit (core) repository
- [ ] BUS-CONNECT-002: Visitor sees a GitHub link for the smaQit Extensions repository
- [ ] BUS-CONNECT-003: Visitor sees a GitHub link for the smaQit ADK repository
- [ ] BUS-CONNECT-004: Visitor sees a LinkedIn icon link
- [ ] BUS-CONNECT-005: Each GitHub link is labeled or positioned so the visitor can tell which offering it leads to before clicking
- [ ] BUS-CONNECT-006: Each GitHub link directs the visitor to the correct corresponding repository
- [ ] BUS-CONNECT-007: LinkedIn link directs visitor to the creator's professional profile
- [ ] BUS-CONNECT-008: All social and repository links are visually recognizable as clickable

---

*Generated with smaqit v1.2.0*
