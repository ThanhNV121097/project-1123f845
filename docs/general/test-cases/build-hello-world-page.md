# Test cases — build Hello World page

| ID | Requirement | Given | When | Then |
|---|---|---|---|---|
| GHW-001 | GENERAL-001 | Visitor loads page | Page renders | Centered hero appears on gradient background inside translucent bordered card with eyebrow badge `Simple greeting page`, blue dot, headline `Hello, World!`, subline, name input, and `Say hello` button |
| GHW-002 | GENERAL-001 | Visitor scans page | Page renders | No navigation, footer, or extra section appears |
| GHW-003 | GENERAL-002 | Visitor types `Ada` in name input | Visitor activates button | Headline changes to `Hello, Ada!` in browser |
| GHW-004 | GENERAL-002 | Visitor types `Ada` in name input | Visitor presses Enter while name input has focus | Headline changes to `Hello, Ada!` in browser |
| GHW-005 | GENERAL-002 | Visitor leaves name input empty | Visitor activates button | Headline remains `Hello, World!` |
| GHW-006 | GENERAL-002 | Visitor leaves name input empty | Visitor presses Enter while name input has focus | Headline remains `Hello, World!` |
| GHW-007 | GENERAL-002 | Visitor types ` Ada ` in name input | Visitor activates button | Headline changes to `Hello, Ada!` and spaces are ignored |
| GHW-008 | GENERAL-002 | Visitor types ` Ada ` in name input | Visitor presses Enter while name input has focus | Headline changes to `Hello, Ada!` and spaces are ignored |
