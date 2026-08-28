# Test cases — Build Hello World page

Risk level: low. Single static page, no backend, no persistence. Coverage stays on visible hero, browser-only heading update, and empty-input behavior.

## Cases

### Scenario: Render centered greeting hero
**Given** Visitor opens page
**When** Page renders
**Then** one centered hero appears on gradient background inside translucent bordered card, with eyebrow badge `Simple greeting page`, blue dot, headline `Hello, World!`, subline, name input, and `Say hello` button
**Check:** measure_styles

### Scenario: Show no extra page sections
**Given** Visitor scans page after load
**When** Page renders
**Then** no navigation, footer, or extra section appears
**Check:** render_url

### Scenario: Update heading for non-empty name
**Given** Visitor types `Ada` in name input
**When** Visitor activates `Say hello` button
**Then** headline changes in browser to `Hello, Ada!`
**Check:** render_url

### Scenario: Keep default heading for empty name
**Given** Visitor leaves name input empty
**When** Visitor activates `Say hello` button
**Then** headline remains `Hello, World!`
**Check:** render_url

### Scenario: Trim surrounding spaces before update
**Given** Visitor types ` Ada ` in name input
**When** Visitor activates `Say hello` button
**Then** headline changes in browser to `Hello, Ada!` and surrounding spaces are ignored
**Check:** render_url
