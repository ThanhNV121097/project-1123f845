# Design System — Hello World

> Source of truth: the approved `index.html`.
> Every value below is extracted from it. Changing a value here without
> changing the approved design is a defect.

Last updated: 2025-08-14

## 1. Foundations

### 1.1 Color

Semantic tokens. Name by job, never by hue.

| Token | Value | Used for |
|---|---|---|
| `--color-bg` | `#ffffff` | Page background |
| `--color-surface` | `#f8fafc` | Card / panel background, pill background |
| `--color-surface-raised` | `#ffffff` | Input and button surfaces on the hero card |
| `--color-border` | `#dbe3ee` | Default border, divider |
| `--color-text` | `#111111` | Body text, heading text |
| `--color-text-muted` | `#5b6472` | Secondary text, captions |
| `--color-primary` | `#2563eb` | Primary action background, accent dot |
| `--color-primary-hover` | `#1d4ed8` | Primary action hover background |
| `--color-primary-text` | `#ffffff` | Text on primary |
| `--color-focus` | `#2563eb` | Focus ring tint |
| `--color-page-tint` | `#f8fbff` | Page background gradient end |
| `--color-primary-strong` | `#3b82f6` | Primary action hover top gradient |
| `--color-placeholder` | `#94a3b8` | Input placeholder text |
| `--color-border-hover` | `#b8c6da` | Hover border on input |

#### Contrast audit

Every text-on-background pair actually used. Body text ≥ 4.5:1, large text (≥ 18.66px bold or ≥ 24px) ≥ 3:1, UI borders ≥ 3:1.

| Foreground | Background | Ratio | Passes |
|---|---|---|---|
| `--color-text` | `--color-bg` | `18.88:1` | AA |
| `--color-text` | `--color-surface` | `17.72:1` | AA |
| `--color-text-muted` | `--color-bg` | `5.63:1` | AA |
| `--color-text-muted` | `--color-surface` | `5.28:1` | AA |
| `--color-primary-text` | `--color-primary` | `4.30:1` | AA Large |
| `--color-primary-text` | `--color-primary-hover` | `6.00:1` | AA |
| `--color-primary-text` | `--color-primary-strong` | `3.68:1` | AA Large |
| `--color-placeholder` | `--color-bg` | `3.39:1` | AA Large |

### 1.2 Spacing

Base unit: `4px`. Every margin, padding, and gap in the product uses one of these.

| Token | Value |
|---|---|
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `20px` |
| `--space-6` | `24px` |
| `--space-7` | `28px` |
| `--space-8` | `32px` |
| `--space-9` | `36px` |
| `--space-11` | `44px` |
| `--space-12` | `48px` |
|
| `--space-14` | `56px` |

### 1.3 Typography

Font families (include the fallback stack and how the font is loaded):

- Body: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` (system fallback stack; no custom load)
- Headings: same as body
- Mono: system monospace fallback stack

| Token | Size | Line height | Weight | Used for |
|---|---|---|---|---|
| `--text-sm` | `0.92rem` | `1.4` | `400` | Hint text |
| `--text-base` | `1rem` | `1.5` | `400` | Body, input text, button text |
| `--text-lg` | `1.2rem` | `1.7` | `400` | Subline |
| `--text-xl` | `0.95rem` | `1.2` | `600` | Eyebrow badge |
| `--text-3xl` | `clamp(2.8rem, 8vw, 5.5rem)` | `0.95` | `400` | Hero heading |

Heading levels are used in order and never skipped for visual sizing.

Weight and letter-spacing are tokens too, not just columns in the table above:

| Token | Value | Used for |
|---|---|---|
| `--font-weight-body` | `400` | Running text |
| `--font-weight-medium` | `600` | Labels, emphasis |
| `--font-weight-heading` | `400` | Hero heading |
| `--tracking-tight` | `-0.05em` | Hero heading |
| `--tracking-normal` | `0` | Everything else |

### 1.4 Radius, border, shadow, motion

| Token | Value | Used for |
|---|---|---|
| `--radius-sm` | `10px` | Accent dot |
| `--radius-md` | `16px` | Input, button |
| `--radius-lg` | `22px` | Mobile hero card |
| `--radius-xl` | `28px` | Hero card |
| `--radius-full` | `9999px` | Eyebrow pill, dot |
| `--border-width` | `1px` | Default border |
| `--shadow-sm` | `0 14px 30px rgba(37, 99, 235, 0.28)` | Primary button |
| `--shadow-md` | `0 20px 60px rgba(15, 23, 42, 0.08)` | Hero card |
| `--shadow-lg` | `none` | Not used |
| `--duration-fast` | `160ms` | Hover, focus, active transitions |
| `--duration-base` | `160ms` | Same as fast in this mockup |
| `--easing` | `ease` | All transitions |

### 1.5 Layout and breakpoints

| Name | Min width | Container | Columns | Gutter |
|---|---|---|---|---|
| `sm` | `0px` | full width with `24px` page padding | `1` | `24px` |
| `md` | `520px` | full width with `24px` page padding | `1` | `24px` |
| `lg` | `760px` | hero max width `760px` | `1` | `24px` |
| `xl` | `none` | not used | `1` | `24px` |

Z-index scale (only these values are allowed):

| Layer | Value |
|---|---|
| Base | `0` |
| Sticky header | `not used` |
| Dropdown | `not used` |
| Modal backdrop | `not used` |
| Modal | `not used` |
| Toast | `not used` |

## 2. Components

One subsection per reusable component. Every component lists all states.

### 2.1 Hero Card

**Purpose** — Centered greeting surface; use for top-level message block only.

**Anatomy** — `[eyebrow pill] [h1] [supporting copy] [form]`

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default | `--color-surface`, `--color-border`, `--radius-xl`, `--shadow-md` | Main greeting panel |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Glassy white surface with border and shadow | `--color-surface`, `--color-border`, `--shadow-md` |
| Hover | None shown | — |
| Focus (keyboard) | None shown | — |
| Active / pressed | None shown | — |
| Disabled | Not applicable | — |
| Loading | Not applicable | — |
| Error | Not applicable | — |
| Empty | Not applicable | — |

**Accessibility** — Landmark content inside `main`; hero itself is decorative container only.

### 2.2 Eyebrow Pill

**Purpose** — Small status label above headline; use for short descriptive context only.

**Anatomy** — `[dot] [label]`

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default | `--color-surface`, `--color-border`, `--color-text-muted`, `--color-primary` | Simple label chip |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Rounded pill with muted text and accent dot | `--radius-full`, `--color-surface`, `--color-border`, `--color-text-muted`, `--color-primary` |
| Hover | None shown | — |
| Focus (keyboard) | None shown | — |
| Active / pressed | None shown | — |
| Disabled | Not applicable | — |
| Loading | Not applicable | — |
| Error | Not applicable | — |
| Empty | Not applicable | — |

**Accessibility** — Purely informative; dot is `aria-hidden`.

### 2.3 Text Input

**Purpose** — Collect visitor name for live greeting update.

**Anatomy** — `[label] [input]`

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default | `--color-surface-raised`, `--color-border`, `--color-text`, `--color-placeholder` | Single-line text entry |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | White field with border and placeholder | `--radius-md`, `--border-width`, `--color-surface-raised`, `--color-border`, `--color-text`, `--color-placeholder` |
| Hover | Border darkens | `--color-border-hover` |
| Focus (keyboard) | Blue ring and border | `--color-focus`, `--color-primary` |
| Active / pressed | Text caret only; no separate styling shown | — |
| Disabled | Not shown | — |
| Loading | Not applicable | — |
| Error | Not shown | — |
| Empty | Placeholder visible | `--color-placeholder` |

**Accessibility** — Native input; label linked by `for` / `id`; minimum hit target comes from `16px` vertical padding.

### 2.4 Primary Button

**Purpose** — Submit greeting update.

**Anatomy** — `[label]`

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default | `--color-primary`, `--color-primary-text`, `--shadow-sm` | Main action |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Blue gradient fill, white text, shadow | `--color-primary`, `--color-primary-strong`, `--color-primary-text`, `--shadow-sm` |
| Hover | Slight lift and darker gradient | `--color-primary-hover`, `--color-primary-strong` |
| Focus (keyboard) | Blue focus ring | `--color-focus` |
| Active / pressed | Returns to rest height | `--duration-fast` |
| Disabled | Not shown | — |
| Loading | Not shown | — |
| Error | Not applicable | — |
| Empty | Not applicable | — |

**Accessibility** — Native `button`, keyboard reachable, visible focus ring, minimum hit target from `16px` padding.

## 3. Content and formatting

- Voice and tone: brief, friendly, direct.
- Date, time, number, and currency formats: not present in this product.
- Capitalization rule: sentence case for labels and button text; title case not used.
- Empty-state and error-message wording pattern: not present in approved mockup.

## 4. Known deviations

Places where the approved design does not follow its own rules or the
anti-patterns in `references/ai-defaults.md`. Record, do not silently fix.

| Where | Deviation | Why it stands | Follow-up |
|---|---|---|---|
| Page background | Uses `linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)` instead of flat fill | Approved mockup does it | Keep unless redesign approved |
| Hero card | Uses backdrop blur and translucent fill | Approved mockup does it | Keep unless redesign approved |
| Primary button | Uses gradient fill instead of flat fill | Approved mockup does it | Keep unless redesign approved |
| Contrast audit | Button hover top gradient `#3b82f6` with white text only reaches large-text AA | Approved mockup uses it for normal-sized label; noted for review | If label size changes, revisit |

## 5. Change log

| Date | Change | Design PR |
|---|---|---|
| 2025-08-14 | Initial design system extracted from approved hero mockup | pending |
