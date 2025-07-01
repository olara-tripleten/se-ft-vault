
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


**CSS Positioning**

Understanding Element Positioning in Web Layout

note: You can use the [practice example](./practice/positioning/index.html) to demonstrate while you go over the lesson in general

---

**What is CSS Positioning?**

- By default, elements follow the **normal document flow**

<!-- element class="fragment" -->

- CSS positioning allows us to **override** this natural flow

<!-- element class="fragment" -->

- Five main position values: `static`, `relative`, `absolute`, `fixed`, `sticky`

<!-- element class="fragment" -->

---

**Position: Static (Default)** The natural document flow

```css
.element {
  position: static; /* Default value */
}
```

- Elements appear **in order** as they appear in HTML

<!-- element class="fragment" -->

- **No special positioning** properties work (top, right, bottom, left)

<!-- element class="fragment" -->

- Most elements use static positioning by default

<!-- element class="fragment" -->

---

**Position: Relative** Positioned relative to its normal position

```css
.relative__element {
  position: relative;
  top: 20px;
  left: 30px;
}
```

- Element **maintains its space** in the document flow

<!-- element class="fragment" -->

- Offset from its **original position** using top, right, bottom, left

<!-- element class="fragment" -->

- Other elements **don't move** to fill the space

<!-- element class="fragment" -->

---

**Relative Positioning Example** Visual demonstration

```html
<div class="container">
  <div class="box">Box 1</div>
  <div class="box box_relative">Box 2 (Relative)</div>
  <div class="box">Box 3</div>
</div>
```

```css
.box_relative {
  position: relative;
  top: 20px;
  left: 40px;
  background-color: #ff6b6b;
}
```

---

Without position: relative
![[Screenshot 2025-05-29 at 6.22.33 PM.png]]
With position relative
![[Screenshot 2025-05-29 at 6.23.10 PM.png]]

---

**Position: Absolute** Positioned relative to nearest positioned ancestor

```css
.absolute-element {
  position: absolute;
  top: 50px;
  right: 20px;
}
```

- Element is **removed** from normal document flow

<!-- element class="fragment" -->

- Positioned relative to **nearest positioned parent** (not static)

<!-- element class="fragment" -->

- If no positioned parent exists, positioned relative to **document body**

<!-- element class="fragment" -->

---

**Absolute Positioning Container** Creating a positioning context

```html
<div class="container">
  <div class="absolute-child">I'm absolutely positioned!</div>
</div>
```

```css
.container {
  position: relative; /* Creates positioning context */
  width: 300px;
  height: 200px;
  border: 2px solid #333;
}
.absolute-child {
  position: absolute;
  top: 20px;
  right: 10px;
  background-color: #4ecdc4;
}
```

**Key Point:** Parent must have `position: relative` to contain absolutely positioned children

 <!-- element class="fragment" -->

---

**Position: Fixed** Positioned relative to the viewport

```css
.fixed-element {
  position: fixed;
  top: 0;
  right: 0;
}
```

- Always positioned relative to the **browser viewport**

<!-- element class="fragment" -->

- **Stays in place** when page is scrolled

<!-- element class="fragment" -->

- Removed from normal document flow

<!-- element class="fragment" -->

- Perfect for **navigation bars**, **floating buttons**, **modals**

<!-- element class="fragment" -->

---

**Fixed Navigation Example** Creating a sticky header

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #2c3e50;
  z-index: 1000;
  padding: 1rem;
}
```

- Navigation stays at **top of screen** during scroll

<!-- element class="fragment" -->

- `width: 100%` ensures it spans the full viewport

<!-- element class="fragment" -->

- High `z-index` keeps it **above other content**

<!-- element class="fragment" -->

---

**Understanding Z-Index** Controlling stacking order

```css
.element-1 {
  position: absolute;
  z-index: 10;
}
.element-2 {
  position: absolute;
  z-index: 20; /* Appears on top */
}
```

- Only works on **positioned elements** (not static)

<!-- element class="fragment" -->

- Higher values appear **on top** of lower values

<!-- element class="fragment" -->

- Default z-index is `auto` (typically 0)

<!-- element class="fragment" -->

---

**Z-Index Stacking Context** Understanding layering rules

- Each positioned element creates a **stacking context**

<!-- element class="fragment" -->

- Child elements can't appear **behind their parent's layer**

<!-- element class="fragment" -->

- Elements are stacked in this order:
  1. Background and borders
  2. Negative z-index elements
  3. Block-level elements
  4. Floated elements
  5. Inline elements
  6. Positioned elements (z-index: 0)
  7. Positive z-index elements

<!-- element class="fragment" -->

---

**When to Use Position Absolute** Common use cases and best practices

**Perfect for:**

- **Tooltips** and popover content
- **Dropdown menus**
- **Image overlays** and badges
- **Modal dialogs**
- **Custom form controls**

<!-- element class="fragment" -->

**Avoid for:**

<!-- element class="fragment" -->

- **Main layout structure** (use flexbox/grid instead)
- **Responsive design** without careful planning
- **Content that needs to flow** with other elements

<!-- element class="fragment" -->

---

**Absolute Positioning: Tooltip Example** Practical implementation

```html
<div class="tooltip-container">
  <button class="btn">Hover me</button>
  <div class="tooltip">This is a helpful tooltip!</div>
</div>
```

```css
.tooltip-container {
  position: relative; /* Positioning context */
  display: inline-block;
}
.tooltip {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%); /* Center horizontally */
  background-color: #333;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.3s;
}
.tooltip-container:hover .tooltip {
  opacity: 1;
}
```

---

**Common Positioning Mistakes** Avoid these pitfalls

**Forgetting positioning context:**

```css
/* Wrong - no positioned parent */
.child {
  position: absolute;
  top: 20px;
}

/* Right - create context */
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 20px;
}
```

<!-- element class="fragment" -->

**Z-index without positioning:**

<!-- element class="fragment" -->

```css
/* Wrong - z-index ignored */
.element {
  z-index: 999;
}

/* Right - position required */
.element {
  position: relative;
  z-index: 999;
}
```

<!-- element class="fragment" -->

---

**Performance Considerations** Optimizing positioned elements

- **Fixed and absolute** elements create new **stacking contexts**

<!-- element class="fragment" -->

- Avoid **animating top/left** properties (use `transform` instead)

<!-- element class="fragment" -->

- **Too many positioned elements** can impact performance

<!-- element class="fragment" -->

---

**Positioning Best Practices** Guidelines for effective use

1. **Use flexbox/grid** for main layout structure

<!-- element class="fragment" -->

2. **Reserve absolute positioning** for overlays and decorative elements

<!-- element class="fragment" -->

3. **Always provide a positioned parent** for absolute children

<!-- element class="fragment" -->

4. **Test on multiple screen sizes** and orientations

<!-- element class="fragment" -->

5. **Keep z-index values organized** and documented

<!-- element class="fragment" -->

6. **Consider accessibility** - positioned elements can confuse screen readers

<!-- element class="fragment" -->

---

**Key Takeaways** Essential concepts to remember

- **Relative:** Offset from normal position, keeps space in flow

<!-- element class="fragment" -->

- **Absolute:** Positioned relative to nearest positioned parent

<!-- element class="fragment" -->

- **Fixed:** Always positioned relative to viewport

<!-- element class="fragment" -->

- **Z-index:** Only works on positioned elements

<!-- element class="fragment" -->

- **Best for:** Overlays, tooltips, modals, and decorative elements

<!-- element class="fragment" -->

- **Avoid for:** Main layout structure - use flexbox/grid instead

<!-- element class="fragment" -->
