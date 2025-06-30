

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


## Debugging responsive design
---

Step 1: Toggle device toolbar on devtools
![[device-toolbar.png]]
---

What it gives you

![[device-toolbar-tools.png]]

---
From left to right
1. Dimensions <!-- element class="fragment" -->
2. Responsive values<!-- element class="fragment" -->
3. Zoom level<!-- element class="fragment" -->
4. Throttling: Simulate device speed<!-- element class="fragment" -->
5. Device orientation(switched height - width)<!-- element class="fragment" -->
6. Options<!-- element class="fragment" -->
---
See the websites media queries
![[media-queries.png]]

--- 
## Horizontal overflow

Most common cause is using a fixed width value

---

**Figma 101 for Developers** Design handoff essentials

Learn to extract accurate values from Figma designs <!-- element class="fragment" -->

Understand which measurements matter for development <!-- element class="fragment" -->

Master the difference between padding and margin in design context <!-- element class="fragment" -->

note:

## For instructors

It's really important to open figma and show how it works, most students have never been exposed to any kind of design focused software, Focus on:
- How to see space between one element and the other(padding, margin or gap). 
	 Answer: by clicking on the `anchor element` and then hover over the other element while holding `alt`/`options`
- For the buttons the student only needs to download the `pen` and `+` icon, but sure to mention that the color and text are done with css and common html, not an image(pretty common error to download the whole button)
- How to see background-colors, border-radius, border styles
- How to see fonts styling

---

**Why Figma Matters for Developers** Bridge the gap between design and code



Figma is your single source of truth for:

- Colors and typography
- Spacing and layout
- Component specifications

<!-- element class="fragment" -->

---

**Essential Values to Extract** Focus on what matters for implementation

**Colors**: Use exact hex/RGB values from the color picker

<!-- element class="fragment" -->

**Typography**: Font family, size, weight, and line-height

<!-- element class="fragment" -->

**Spacing**: Gaps between elements (not always what the design shows)

<!-- element class="fragment" -->

**Dimensions**: Width and height for containers and images(*)

<!-- element class="fragment" -->

---

**Values to Ignore or Question** Not everything in Figma translates to code


**Absolute positioning**: Rarely matches responsive web behavior

<!-- element class="fragment" -->

**Fixed heights**: Can break with dynamic content

<!-- element class="fragment" -->

**Pixel-perfect spacing**: Sometimes designers eyeball alignments

<!-- element class="fragment" -->

**Complex shadows**: May need CSS simplification

<!-- element class="fragment" -->

---

**Padding vs Margin in Figma** Understanding designer intent vs developer implementation

In Figma: Designers think in terms of visual spacing

```css
/* Designer sees: "20px space around text" */
.card__content {
  padding: 20px;
}
```

<!-- element class="fragment" -->

In Code: We implement based on content relationship <!-- element class="fragment" -->

```css
/* Developer implements: "20px between cards" */
.card + .card {
  margin-top: 20px;
}
```
 <!-- element class="fragment" -->
---

**Pro Tips for Beginners** Efficient workflow techniques

Tip 1: Right-click elements to copy CSS properties

Tip 2: Use the ruler tool (R) to measure custom spacing

Tip 3: Check multiple screen sizes in the design

Tip 4: Export assets at @2x for retina displays

---

**Reading Figma Spacing** Interpreting design measurements correctly

Auto Layout spacing = CSS gap or margin between items <!-- element class="fragment" -->

Padding values = CSS padding (internal spacing) <!-- element class="fragment" -->

Manual spacing = Measure and decide padding vs margin <!-- element class="fragment" -->

```css
/* Figma Auto Layout: 16px gap */
.card-grid {
  display: flex;
  gap: 16px;
}

/* Figma Padding: 24px */
.card__content {
  padding: 24px;
}
```
<!-- element class="fragment" -->

---

**Common Beginner Mistakes** Avoid these Figma interpretation errors



Mistake 1: Copying exact pixel positions as CSS positioning <!-- element class="fragment" -->

Mistake 2: Not accounting for text overflow and dynamic content <!-- element class="fragment" -->

Mistake 3: Ignoring responsive behavior indicated in design 
<!-- element class="fragment" -->

Mistake 4: Using fixed heights when content can vary 
<!-- element class="fragment" -->
