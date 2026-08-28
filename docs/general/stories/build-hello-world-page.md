# Story Plan — Build Hello World page

## User story
As a Visitor, I want to see a centered Hello World hero and update the greeting in browser, so that I can interact with the page as designed.

## In scope
- Single centered hero from approved design
- Gradient page background and translucent bordered card
- Eyebrow badge with blue dot and `Simple greeting page`
- Headline `Hello, World!`
- One subline
- One text input for name
- One `Say hello` button
- Browser-only greeting update to `Hello, {name}!`
- Trimming surrounding spaces before update
- Empty input leaves `Hello, World!` unchanged

## Out of scope
- Navigation, footer, extra sections
- Backend, database, persistence, server API
- Server-side greeting storage
- Any sign-in, analytics, or external services

## UI scope
- One screen: Hello World hero
- States: default and browser-updated headline after submit
- No loading, error, or empty states beyond the default page

## Acceptance criteria
1. Page opens to single centered hero on approved background with translucent bordered card.
2. Hero shows eyebrow badge `Simple greeting page`, blue dot, headline `Hello, World!`, subline, name input, and `Say hello` button.
3. No navigation, footer, or extra section appears.
4. Typing `Ada` and activating button changes headline to `Hello, Ada!` in browser.
5. Leaving input empty and activating button keeps headline `Hello, World!`.
6. Typing ` Ada ` and activating button changes headline to `Hello, Ada!` with spaces trimmed.
7. Greeting and name stay in browser only; nothing is stored on server.

## Dependencies
- Approved design and design system
- No external accounts or secrets
- Static frontend scaffold already in place
