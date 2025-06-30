
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


## Grid 101

---

\***\*What is Grid Layout\*\***

A two-dimensional CSS layout system for web design

- Lets you align items in rows and columns  <!-- element class="fragment" -->
- More powerful than flexbox for complex layouts   <!-- element class="fragment" -->
- Enables precise control over layout structure   <!-- element class="fragment" -->

---

\***\*CSS Grid Terminology\*\***

Understand key terms before diving into code

- Grid Container: Element with display: grid  <!-- element class="fragment" -->
- Grid Items: Direct children of the container
<!-- element class="fragment" -->
- Grid Lines: Dividers between rows and columns  <!-- element class="fragment" -->
- Grid Tracks: Space between two lines  <!-- element class="fragment" -->
- Grid Areas: Named section of the grid
<!-- element class="fragment" -->

---

\***\*Creating a Grid Container\*\***

Turn any block into a grid layout

```css
.container {
  display: grid;
}
```

- Always start by applying `display: grid`  <!-- element class="fragment" -->
- Enables grid-specific properties <!-- element class="fragment" -->

---

\***\*Defining Rows and Columns\*\***

Use `grid-template-rows` and `grid-template-columns`

```css

.container {
  display: grid;
  grid-template-columns: 200px 1fr 100px;
  grid-template-rows: auto auto;
}

```

- Values can be px, %, fr, or auto  <!-- element class="fragment" -->
- fr divides space proportionally <!-- element class="fragment" -->

---

\***\*The** `**gap**` **Property\*\***

Adds spacing between rows and columns

```css
.container {
  display: grid;
  gap: 20px;
}
```

- Replaces `grid-row-gap` and `grid-column-gap`  <!-- element class="fragment" -->
- Accepts any CSS length unit  <!-- element class="fragment" -->

---

\***\*The** `**repeat()**` **Function\*\***

Simplify repetitive column or row definitions

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

- First value: number of repetitions  <!-- element class="fragment" -->
- Second value: what to repeat <!-- element class="fragment" -->

---

\***\*Using the** `**fr**` **Unit\*\***

Distribute space proportionally within the grid

```css

.container {
  display: grid;
  grid-template-columns: 2fr 1fr;
}

```

- 2/3 of the space to first column  <!-- element class="fragment" -->
- 1/3 to the second  <!-- element class="fragment" -->

---

\***\*Positioning Items in the Grid\*\***

Use `grid-column` and `grid-row` to place items

```css
.item {
  grid-column: 1 / 3;
  grid-row: 2 / 4;
}
```

- Numbers refer to grid lines  <!-- element class="fragment" -->
- You can span multiple columns or rows <!-- element class="fragment" -->

---

\***\*Grid Template Areas\*\***

Name grid sections for easier layout management

```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;
}
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```

- Define areas visually  <!-- element class="fragment" -->
- Assign items using grid-area <!-- element class="fragment" -->

---

\***\*Responsive Grids with** `**auto-fit**` **and** `**minmax()`\*\*\*\*

Create adaptive layouts without media queries

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
```

- `auto-fit`: fills the row with as many columns as possible  <!-- element class="fragment" -->
- `minmax()`: sets a minimum and maximum width  <!-- element class="fragment" -->
- Columns shrink and grow responsively <!-- element class="fragment" -->

---

\***\*Example Layout with BEM Naming\*\***

A responsive card layout using CSS Grid and BEM

```html
<section class="grid">
   
  <div class="grid__item grid__item--featured">Featured</div>
   
  <div class="grid__item">Card 1</div>
   
  <div class="grid__item">Card 2</div>
   
  <div class="grid__item">Card 3</div>
</section>
```

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}
.grid__item {
  background-color: #eee;
  padding: 1rem;
  border-radius: 8px;
}
.grid__item--featured {
  grid-column: span 2;
}
```

- Clean BEM naming  <!-- element class="fragment" -->
- Responsive behavior using minmax and auto-fit <!-- element class="fragment" -->
