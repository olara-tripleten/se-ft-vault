
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


## More on CSS
- **Brief Project Q&A(optional?)**
- Flexbox fundamentals
- Position elements with flexbox
note: Thursdays will only have **one lecture** of **one** **hour**
---
**What is Flexbox?** A powerful CSS layout method for modern web design
Flexbox (Flexible Box Layout) provides an efficient way to arrange, distribute, and align items in a container

```css
.container {
  display: flex;
}
```

<!-- element class="fragment" -->

**Key Benefits:**

<!-- element class="fragment" -->

- One-dimensional layout (row or column)
- Dynamic sizing and alignment
- Responsive without media queries

<!-- element class="fragment" -->

---

**Flexbox Terminology** Understanding the core concepts

```css
.flex-container {
  display: flex; /* Creates flex container */
}

.flex-item {
  /* Child elements become flex items */
}
```

**Main Axis vs Cross Axis:**

- Main axis: Primary direction (default: horizontal) <!-- element class="fragment" -->
- Cross axis: Perpendicular to main axis (default: vertical) <!-- element class="fragment" -->

---

**Creating a Flex Container** The foundation of all flexbox layouts

```css
.container {
  display: flex;

  /* Optional: Set direction */
  flex-direction: row; /* default */
  flex-direction: column;
  flex-direction: row-reverse;
  flex-direction: column-reverse;
}
```

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

---

**Flex Direction Control** Choosing your layout orientation

```css {hl_lines=[7,8]}
/* Horizontal layout (default) */
.horizontal {
  display: flex;
  flex-direction: row;
}

/* Vertical layout */
.vertical {
  display: flex;
  flex-direction: column;
}
```

**Pro Tip:** Direction affects which axis is "main" and which is "cross"

---

**Justify Content** Controlling alignment along the main axis

```css
.container {
  display: flex;
  justify-content: flex-start; /* default */
  justify-content: flex-end; /* align to end */
  justify-content: center; /* center items */
  justify-content: space-between; /* distribute evenly */
  justify-content: space-around; /* equal space around */
  justify-content: space-evenly; /* equal space everywhere */
}
```

---

**Align Items** Controlling alignment along the cross axis

```css
.container {
  display: flex;
  align-items: stretch; /* default - fill container */
  align-items: flex-start; /* align to top/left */
  align-items: flex-end; /* align to bottom/right */
  align-items: center; /* center vertically */
  align-items: baseline; /* align text baselines */
}
```

---

**Flex Wrap** Handling overflow and responsive behavior

```css
.container {
  display: flex;
  flex-wrap: nowrap; /* default - single line */
  flex-wrap: wrap; /* allow wrapping */
  flex-wrap: wrap-reverse; /* wrap in reverse order */
}

/* Shorthand */
.container {
  display: flex;
  flex-flow: row wrap; /* direction + wrap */
}
```

---

**Flex Item Properties** Controlling individual item behavior

```css
.flex-item {
  flex-grow: 1; /* grow to fill space */
  flex-shrink: 1; /* shrink when needed */
  flex-basis: auto; /* initial size */

  /* Shorthand */
  flex: 1 1 auto; /* grow shrink basis */
  flex: 1; /* common: equal distribution */
}
```

```css
.special-item {
  align-self: center; /* override container's align-items */
}
```

---

## AI In learning

- Using to improve your skills
- How and when to use AI

---

**Responsible AI in Learning** Enhancing, not replacing, your skills

**AI as a Learning Assistant:**

- Ask for explanations of complex concepts <!-- element class="fragment" -->
- Request code reviews and improvements <!-- element class="fragment" -->
- Generate practice exercises and examples <!-- element class="fragment" -->

**What AI Should NOT Replace:**

<!-- element class="fragment" -->

- Critical thinking and problem-solving <!-- element class="fragment" -->
- Understanding fundamental concepts <!-- element class="fragment" -->
- Creative decision-making <!-- element class="fragment" -->

---

**Effective AI Prompting** Getting quality help from AI tools

**Good Prompt Example:** "Explain how box-sizing: border-box affects layout calculations, and show me a practical example with flexbox"

<!-- element class="fragment" -->

**Poor Prompt Example:** "Fix my CSS"

<!-- element class="fragment" -->

Be specific, provide context, and ask for explanations

<!-- element class="fragment" -->

---

## Don't use autocompletion

The (_not so_) hidden costs of automated code suggestions

**Skill Atrophy Risks:**

- Reduced typing practice leads to slower manual coding
- Decreased memorization of syntax and method names
- Weakened muscle memory for common programming patterns
- <!-- element class="fragment" -->

---

**Learning Impediments:**

- May accept suggestions without understanding the code
- Reduces exploration of alternative solutions
- Creates dependency that hinders independent problem-solving

<!-- element class="fragment" -->

---

**Code Quality Issues:**

- Suggestions may not follow your project's conventions
- Can introduce subtle bugs or inefficient patterns
- May generate overly complex solutions for simple problems

<!-- element class="fragment" -->

---

**AI Learning Best Practices** Building genuine expertise

1. **Understand Before Implementing**
   - Don't copy-paste without comprehension
   - Ask AI to explain the reasoning

<!-- element class="fragment" -->

2. **Practice Independently**
   - Code without AI assistance regularly
   - Build projects from scratch

<!-- element class="fragment" -->

3. **Verify and Test**
   - AI can make mistakes
   - Always test AI-generated code

<!-- element class="fragment" -->

---
![[tt-logo.svg]]