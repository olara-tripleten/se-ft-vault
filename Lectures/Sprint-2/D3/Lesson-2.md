
<style>
/* Custom Reveal.js Theme - Educational/Course Style */

/* Import a clean sans-serif font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

/* Root variables for consistent theming */
:root {
  --bg-primary: #f5f4f0;
  --bg-secondary: #ffffff;
  --bg-accent: #000000;
  --text-primary: #2c2c2c;
  --text-secondary: #6b7280;
  --text-light: #9ca3af;
  --border-color: #e5e7eb;
  --shadow-light: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-medium: 0 4px 6px rgba(0, 0, 0, 0.1);
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
}

/* Main reveal container */
.reveal {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: var(--text-primary);
  background: var(--bg-primary);
}

/* Slide backgrounds */
.reveal .slides {
  background: var(--bg-primary);
}

.reveal .slides section {
  background: var(--bg-primary);
  padding: 2rem;
  text-align: left;
}

/* Typography */
.reveal h1,
.reveal h2,
.reveal h3,
.reveal h4,
.reveal h5,
.reveal h6 {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.025em;
  text-transform: none;
  color: var(--text-primary);
  margin: 0 0 1.5rem 0;
}

.reveal h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.reveal h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.reveal h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.reveal p {
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
  color: var(--text-primary);
}

/* Lists */
.reveal ul,
.reveal ol {
  margin: 0 0 1.5rem 0;
  padding-left: 1.5rem;
}

.reveal li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

/* Code blocks */
.reveal pre {
  background: var(--bg-accent);
  color: #ffffff;
  border-radius: var(--radius-md);
  padding: 1.5rem;
  margin: 1.5rem 0;
  box-shadow: var(--shadow-medium);
  font-size: 0.9rem;
  line-height: 1.4;
}

.reveal code {
  background: var(--bg-accent);
  color: #ffffff;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.9em;
}

.reveal pre code {
  background: transparent;
  padding: 0;
}

/* Card-style content blocks */
.reveal .card {
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  padding: 2rem;
  margin: 1.5rem 0;
  box-shadow: var(--shadow-light);
  border: 1px solid var(--border-color);
}

/* Section numbers (like 01, 02, 03) */
.reveal .section-number {
  font-size: 3rem;
  font-weight: 300;
  color: var(--text-light);
  margin-right: 1rem;
  line-height: 1;
}

/* Progress indicators */
.reveal .progress-text {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

/* Icon boxes (like the HTML/CSS diagram) */
.reveal .icon-box {
  background: var(--bg-accent);
  color: #ffffff;
  border-radius: var(--radius-md);
  padding: 2rem;
  text-align: center;
  margin: 1.5rem 0;
  box-shadow: var(--shadow-medium);
}

.reveal .icon-box h3 {
  color: #ffffff;
  margin-bottom: 0;
}

/* Lesson/chapter listings */
.reveal .lesson-list {
  list-style: none;
  padding: 0;
}

.reveal .lesson-item {
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-color);
}

.reveal .lesson-item:last-child {
  border-bottom: none;
}

.reveal .lesson-number {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-right: 1.5rem;
  min-width: 3rem;
}

.reveal .lesson-content h4 {
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
}

.reveal .lesson-meta {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* Completed items */
.reveal .completed {
  opacity: 0.7;
}

.reveal .completed::before {
  content: "✓";
  color: #10b981;
  font-weight: bold;
  margin-right: 0.5rem;
}

/* Navigation controls */
.reveal .controls {
  color: var(--text-secondary);
}

.reveal .controls button {
  color: var(--text-secondary);
}

.reveal .controls button:hover {
  color: var(--text-primary);
}

/* Progress bar */
.reveal .progress {
  background: var(--border-color);
}

.reveal .progress span {
  background: var(--bg-accent);
}

/* Slide numbers */
.reveal .slide-number {
  background: var(--bg-secondary);
  color: var(--text-secondary);
  border-radius: var(--radius-sm);
  padding: 0.5rem 1rem;
  box-shadow: var(--shadow-light);
  border: 1px solid var(--border-color);
}

/* Custom utility classes */
.reveal .text-center {
  text-align: center;
}

.reveal .text-secondary {
  color: var(--text-secondary);
}

.reveal .text-light {
  color: var(--text-light);
}

.reveal .mb-large {
  margin-bottom: 3rem;
}

.reveal .mt-large {
  margin-top: 3rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .reveal {
    font-size: 16px;
  }
  
  .reveal h1 {
    font-size: 2rem;
  }
  
  .reveal h2 {
    font-size: 1.75rem;
  }
  
  .reveal .slides section {
    padding: 1rem;
  }
  
  .reveal .section-number {
    font-size: 2rem;
  }
}

/* Override default reveal styles */
.reveal .slides section,
.reveal .slides section > section {
  line-height: 1.6;
  font-weight: inherit;
}

.reveal .slides section.has-dark-background,
.reveal .slides section.has-dark-background h1,
.reveal .slides section.has-dark-background h2,
.reveal .slides section.has-dark-background h3,
.reveal .slides section.has-dark-background h4,
.reveal .slides section.has-dark-background h5,
.reveal .slides section.has-dark-background h6 {
  color: #ffffff;
}
</style>


**BEM Folder Structure** Organizing CSS with Block, Element, Modifier Methodology

A shallow, practical approach to structuring your stylesheets

---

**What is BEM Folder Structure?** Organizing CSS Files by Component Logic

**BEM stands for:**

- **Block** - Independent component (header, menu, card)
- **Element** - Parts of a block (header**logo, menu**item)
- **Modifier** - Variations of blocks/elements (button_primary, card_large)

<!-- element class="fragment" -->

**Our Approach:** <!-- element class="fragment" -->

- Shallow architecture (no deep nesting)
- One file per block
- Elements and modifiers in the same block file

<!-- element class="fragment" -->

---

**Folder Structure Overview** Simple and Scalable Organization

```
some_project/
├── blocks/
│   ├── header.css
│   ├── footer.css
│   ├── logo.css
│   └── menu.css
├── pages/
│   └── index.css
└── index.html
```

<!-- element class="fragment" -->

**Two Main Directories:** <!-- element class="fragment" -->

- `blocks/` - Individual component stylesheets
- `pages/` - Page-specific styles and imports

<!-- element class="fragment" -->

---

**Blocks Directory** One Component, One File

Each block gets its own CSS file containing:

<!-- element class="fragment" -->

```css
/* blocks/header.css */
.header {
  background-color: #fff;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header__logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.header__navigation {
  display: flex;
  gap: 1rem;
}

.header_sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
```

<!-- element class="fragment" -->

**Key Benefits:** <!-- element class="fragment" -->

- Easy to locate component styles <!-- element class="fragment" -->
- Clear separation of concerns <!-- element class="fragment" -->
- Reusable across pages <!-- element class="fragment" -->

---

**Pages Directory** Connecting Everything Together

The `pages/index.css` file imports all needed blocks:

```css
/* pages/index.css */
@import "../blocks/header.css";
@import "../blocks/footer.css";
@import "../blocks/logo.css";
@import "../blocks/menu.css";
```

<!-- element class="fragment" -->

**Then link to your HTML:** <!-- element class="fragment" -->

```html
<link rel="stylesheet" href="pages/index.css" />
```

<!-- element class="fragment" -->

---

**Best Practices** Making the Most of BEM Structure

**Naming Conventions:**

- Blocks: `.header`, `.menu`, `.card`
- Elements: `.header__logo`, `.menu__item`
- Modifiers: `.button_primary`, `.card_large`

<!-- element class="fragment" -->

**File Organization Tips:**

- Keep block files focused and small
- Use meaningful, descriptive names
- Import only what you need in page files

<!-- element class="fragment" -->

**Benefits of This Approach:** <!-- element class="fragment" -->

- 🎯 Easy to find and edit component styles <!-- element class="fragment" -->
- 🔄 Reusable blocks across multiple pages <!-- element class="fragment" -->
- 🧹 Clean, maintainable codebase <!-- element class="fragment" -->
- ⚡ Efficient development workflow <!-- element class="fragment" -->

---
## Coffeeshop Stage 2

- Project Overview <!-- element class="fragment" -->
- Folder Organization <!-- element class="fragment" -->
- Work on the project <!-- element class="fragment" -->

---

## Stage 2: Book a table Form

## ![[Screenshot 2025-05-30 at 4.27.03 PM.png]]

Workflow is the same as stage 1

- Work on your project on vscode
- After finishing the changes run:

```sh
# To Stage the changes
git add -A

# To commit the staged changes
git commit -m "Add coffeeshop reservation section"

# Push the changes
git push
```
