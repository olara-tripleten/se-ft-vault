
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


**Responsive Design 101** Building Websites That Work Everywhere

Welcome to the world of responsive web design - creating websites that look great on any device!

---

**What is Responsive Design?** Adapting to Every Screen

Responsive design is an approach that makes web pages render well on a variety of devices and window sizes.

<!-- element class="fragment" -->

**Key Principle:** One website, multiple experiences

<!-- element class="fragment" -->

- Desktop computers (1920px+) <!-- element class="fragment" -->
- Tablets (768px - 1024px) <!-- element class="fragment" -->
- Mobile phones (320px - 767px) <!-- element class="fragment" -->
- Everything in between! <!-- element class="fragment" -->

<!-- element class="fragment" -->

---

**Why Responsive Design Matters** The Multi-Device Reality

**Mobile Usage Statistics:** <!-- element class="fragment" -->

- Over 50% of web traffic comes from mobile devices
- Users expect seamless experiences across all devices

<!-- element class="fragment" -->

**Benefits:** <!-- element class="fragment" -->

- Better user experience
- Improved SEO rankings
- Cost-effective (one site vs multiple)
- Future-proof design

<!-- element class="fragment" -->

---

**Responsive by Default** Building with Flexibility in Mind

**Traditional Approach (Fixed):** <!-- element class="fragment" -->

```css
.container {
  width: 960px;
  margin: 0 auto;
}
```

<!-- element class="fragment" -->

**Responsive Approach (Flexible):** <!-- element class="fragment" -->

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
```
<!-- element class="fragment" -->

---

**Responsive Units Overview** Moving Beyond Pixels

**Relative Units vs Fixed Units:**

<!-- element class="fragment" -->

**Fixed Units (Avoid for responsive):** <!-- element class="fragment" -->

- `px` - Absolute pixels
- `pt` - Points

<!-- element class="fragment" -->

**Responsive Units (Embrace these):** <!-- element class="fragment" -->

- `%` - Percentage of parent
- `em` - Relative to element's font-size
- `rem` - Relative to root font-size
- `vw/vh` - Viewport width/height
- `vmin/vmax` - Viewport minimum/maximum

<!-- element class="fragment" -->

---

**Percentage Units in Action** Flexible Layouts



**Example: Three Column Layout** <!-- element class="fragment" -->

```css
.layout {
  display: flex;
  gap: 2%;
}

.layout__column {
  flex: 1;
}

.layout__sidebar {
  width: 25%;
}

.layout__main {
  width: 73%; /* 100% - 25% - 2% gap */
}
```

<!-- element class="fragment" -->

This layout automatically adjusts to any container width!

<!-- element class="fragment" -->

---

**Understanding Em and Rem** Typography That Scales

**Em - Relative to Parent:** <!-- element class="fragment" -->

```css
.card {
  font-size: 16px;
}

.card__title {
  font-size: 1.5em; /* 24px (16px × 1.5) */
  margin-bottom: 0.5em; /* 8px */
}
```

<!-- element class="fragment" -->

**Rem - Relative to Root:** <!-- element class="fragment" -->

```css
html {
  font-size: 16px; /* Base size */
}

.heading {
  font-size: 2rem; /* Always 32px */
}
```

<!-- element class="fragment" -->

---

**Viewport Units Magic** Using the Full Screen

**Full Height Sections:** <!-- element class="fragment" -->

```css
.hero {
  height: 100vh; /* Full viewport height */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

<!-- element class="fragment" -->

**Responsive Typography:** <!-- element class="fragment" -->

```css
.hero__title {
  font-size: 4vw;
  min-font-size: 24px;
  max-font-size: 48px;
}
```

<!-- element class="fragment" -->

**Pro Tip:** Use `vmin` for square elements that stay proportional!

<!-- element class="fragment" -->

---

**Introduction to Media Queries** Conditional CSS for Different Screens

**What are Media Queries?** CSS rules that apply only when certain conditions are met

<!-- element class="fragment" -->

**Basic Syntax:** <!-- element class="fragment" -->

```css
@media (condition) {
  /* CSS rules here */
}
```

<!-- element class="fragment" -->

**Common Conditions:** <!-- element class="fragment" -->

- Screen width (`min-width`, `max-width`)
- Screen height (`min-height`, `max-height`)
- Device orientation (`orientation: portrait`)
- Print styles (`print`)

<!-- element class="fragment" -->

---

**Media Query Breakpoints** Common Screen Size Targets

**Standard Breakpoints:** <!-- element class="fragment" -->

```css
/* Mobile phones */
@media (max-width: 767px) {
  /* Mobile styles */
}

/* Tablets */
@media (min-width: 768px) and (max-width: 1024px) {
  /* Tablet styles */
}

/* Desktop */
@media (min-width: 1025px) {
  /* Desktop styles */
}
```

<!-- element class="fragment" -->

**Remember:** These are guidelines, not rules. Use what works for your content!

<!-- element class="fragment" -->

---

**Your First Media Query** Practical Implementation

**Desktop-First Approach:** <!-- element class="fragment" -->

```css
.navigation {
  display: flex;
  justify-content: space-between;
}

.navigation__menu {
  display: flex;
  gap: 2rem;
}

@media (max-width: 768px) {
  .navigation__menu {
    display: none; /* Hide on mobile */
  }
}
```

<!-- element class="fragment" -->

This hides the menu on screens smaller than 768px wide.

<!-- element class="fragment" -->

---

**Common Layout Transformations** Adapting Your Design



**Stacking Columns on Mobile:** <!-- element class="fragment" -->

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr; /* Single column */
  }
}
```

<!-- element class="fragment" -->

**Adjusting Font Sizes:** <!-- element class="fragment" -->

```css
.heading {
  font-size: 3rem;
}

@media (max-width: 768px) {
  .heading {
    font-size: 2rem;
  }
}
```
<!-- element class="fragment" -->

---

**Navigation Patterns** Mobile Menu Solutions

**Toggle Menu Pattern:** <!-- element class="fragment" -->

```css
.navigation__toggle {
  display: none;
}

.navigation__menu {
  display: flex;
}

@media (max-width: 768px) {
  .navigation__toggle {
    display: block;
  }
  
  .navigation__menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
  }
  
  .navigation__menu_open {
    display: block;
  }
}
```

<!-- element class="fragment" -->

Combine with JavaScript to toggle the `--open` modifier class!

<!-- element class="fragment" -->

---

**Image Responsiveness** Making Media Flexible


**Basic Responsive Images:** <!-- element class="fragment" -->

```css
.image {
  max-width: 100%;
  height: auto;
}
```

<!-- element class="fragment" -->

---


**Testing Responsive Design** Developer Tools Are Your Friend

<!-- element class="fragment" -->

**Browser DevTools:**

- Right-click → Inspect → Toggle device toolbar
- Test multiple device presets
- Custom viewport sizes

<!-- element class="fragment" -->

**Physical Testing:**

- Test on actual devices when possible
- Different operating systems behave differently
- Consider touch vs mouse interactions

<!-- element class="fragment" -->

**Online Tools:**

- Browser Stack for cross-browser testing
- Responsive design checkers

---

**Common Responsive Mistakes** What to Avoid



**Fixed Heights:** <!-- element class="fragment" -->

```css
/* Avoid this */
.section {
  height: 500px; /* Breaks on small screens */
}

/* Do this instead */
.section {
  min-height: 500px;
  padding: 2rem 0;
}
```

<!-- element class="fragment" -->

**Forgetting Touch Targets:** <!-- element class="fragment" -->

- Buttons should be at least 44px × 44px
- Links need adequate spacing
- Consider thumb-friendly navigation

<!-- element class="fragment" -->

---

**Practical Exercise Setup** Let's Build Something Responsive

**Your Challenge:** Create a responsive card component that:

- Shows 3 cards per row on desktop
- Shows 2 cards per row on tablet
- Shows 1 card per row on mobile
- Has readable typography at all sizes

<!-- element class="fragment" -->

**Starter Structure:**

```html
<div class="card-grid">
  <div class="card">
    <h3 class="card__title">Card Title</h3>
    <p class="card__content">Card content here...</p>
  </div>
  <!-- Repeat cards -->
</div>
```

---

**Key Takeaways** Remember These Essentials 

**Design Principles:** <!-- element class="fragment" -->

- Start with flexible units (%, em, rem, vw/vh)
- Use media queries to adapt layouts
- Test on multiple devices regularly



**Best Practices:** <!-- element class="fragment" -->

- Mobile users are real users - design for them
- Performance matters on slower connections
- Accessibility should work on all devices

<!-- element class="fragment" -->

**Next Steps:** <!-- element class="fragment" -->

- Practice with real projects
- Learn CSS Grid and Flexbox deeply
- Explore progressive web app features

<!-- element class="fragment" -->

---
![[tt-logo.svg]]