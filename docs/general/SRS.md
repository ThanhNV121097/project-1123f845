# SRS — general

Module: `general`
Design: [View the approved design](http://localhost:8080/design/1123f845-9533-45c5-be1e-bab2761d2e9a)
Design system: `design/design-system.md`

## 1. Purpose

This module delivers one static greeting page for visitors. It gives the project its only public experience: a centered hero with a greeting, short subline, name input, and button. Without it, the project is only an empty shell.

## 2. Actors

| Actor | Who they are | What they may do in this module |
|---|---|---|
| Visitor | Any browser user | View greeting, type name, update greeting in browser |

## 3. Scope

**In scope** — the functions specified below, by their plan titles:

- Build Hello World page

**Out of scope** — name what a reader would reasonably expect here and say where it lives instead.

- Navigation, footer, extra sections — deliberately not built; approved design has one centered hero only.
- Backend, database, persistence — not part of this static page and not needed for browser-only greeting update.
- Shared design tokens and component rules — live in `design/design-system.md`.
- Server-side greeting storage — deliberately not built; the page keeps greeting update in browser only.

## 4. Functional requirements

### 4.1 Build Hello World page

**Requirement GENERAL-001 — Render centered greeting hero**

*As a* Visitor, *I want to* see a centered greeting hero with headline, subline, name input, and button, *so that* I can interact with the page as designed.

Behaviour:

1. When Visitor opens page, system shows single centered hero on white background with near-black text and blue button.
2. System renders headline `Hello, World!`, one subline, one text input for name, and one button labeled `Say hello`.
3. System shows no navigation, footer, or extra section.

**Requirement GENERAL-002 — Update greeting in browser**

*As a* Visitor, *I want to* type a name and press the button, *so that* the greeting reflects my input without leaving page.

Behaviour:

1. When Visitor enters a non-empty name and activates button, system updates headline in browser to `Hello, {name}!`.
2. When Visitor leaves input empty and activates button, system keeps headline `Hello, World!`.
3. When Visitor enters surrounding spaces, system trims them before update.
4. System stores no greeting or name on server.

**Acceptance criteria** — each maps one-to-one onto a test case in `docs/general/test-cases/build-hello-world-page.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | Visitor loads page | Page renders | Centered hero appears on white background with headline `Hello, World!`, subline, name input, and `Say hello` button |
| AC-2 | Visitor scans page | Page renders | No navigation, footer, or extra section appears |
| AC-3 | Visitor types `Ada` in name input | Visitor activates button | Headline changes to `Hello, Ada!` in browser |
| AC-4 | Visitor leaves name input empty | Visitor activates button | Headline remains `Hello, World!` |
| AC-5 | Visitor types ` Ada ` in name input | Visitor activates button | Headline changes to `Hello, Ada!` and spaces are ignored |

**Failure, boundary and permission behaviour** — the part most often skipped and most often the source of bugs.

| Case | Condition | Expected behaviour |
|---|---|---|
| Not applicable | Single public page has no role-based access, no write to server, and approved design shows no error or loading state | No permission, conflict, or upstream-failure state is part of approved design; browser-only interaction stays on page |
| Boundary | Name input is empty when Visitor presses button | Greeting stays `Hello, World!` |
| Boundary | Name input contains surrounding spaces | System trims spaces before update |

**Data touched** — the fields this function reads and writes, in product terms.

| Field | Type | Required | Rule |
|---|---|---|---|
| Greeting headline text | text | yes | Starts as `Hello, World!`; changes in browser only when Visitor submits non-empty name |
| Name input value | text | no | Free text; blank value leaves greeting unchanged |

## 5. Screens

| Screen | Section in the design | Functions it serves | States that must exist |
|---|---|---|---|
| Hello World hero | Main page / centered hero | GENERAL-001, GENERAL-002 | default |

## 6. Non-functional requirements

| Area | Requirement |
|---|---|
| Performance | Page first renders within 1s on 1 Mbps network with cold cache |
| Accessibility | Name input and button are keyboard reachable, have visible focus, and label contrast is at least 4.5:1 against background |
| Responsive | Layout fits at 320px width with no horizontal scroll |
| Privacy | No personal data is stored or sent off device; name value stays in browser only |

## 7. Dependencies and assumptions

- **Depends on:** Approved design and design system, for page appearance and spacing.
- **Assumption:** Visitor uses modern browser with JavaScript enabled; without it, browser-only greeting update does not run.

| Open question | Proposed default | Who decides |
|---|---|---|
| None | Not applicable | Stakeholder |

## 8. Traceability

| Plan item | Requirement ids | Test cases |
|---|---|---|
| Build Hello World page | GENERAL-001, GENERAL-002 | `test-cases/build-hello-world-page.md` |
