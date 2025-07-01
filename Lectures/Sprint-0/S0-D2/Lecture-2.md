
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


## CSS: Classes, Browser Styles & Layout

- Working with CSS classes and selectors <!-- element class="fragment" -->
- Understanding default browser styles <!-- element class="fragment" -->
- Mastering Document Flow and layout <!-- element class="fragment" -->
- Box model <!-- element class="fragment" -->
- Margin vs padding <!-- element class="fragment" -->
- block vs inline <!-- element class="fragment" -->


---

## **CSS Classes Fundamentals**

Organizing and applying styles efficiently

<!-- element class="fragment" -->

---

# **CSS Classes Fundamentals**

Basic Class Definitions

```css
.company-paragraph {
  color: blue;
  font-size: 18px;
}
```

Usage in html

<!-- element class="fragment" -->

```html
<p class="my-class">This paragraph uses the my-class style</p>
<div class="my-class">This div also uses my-class</div>
```

<!-- element class="fragment" -->

---

# **CSS Classes Fundamentals**

Basic class definition

- Classes are **reusable** across multiple elements
- Use **descriptive names** that explain the purpose
- Classes start with a **dot( . )** in **CSS**
  note: We'll go back to naming conventions further down the bootcamp

---

# **CSS Classes Fundamentals**

## Multiple classes

_Combining styles for Flexibility_

```css
.text-large {
  font-size: 24px;
}

.text-primary {
  color: blue;
}

.text-secondary {
  color: rgba(0, 0, 0, 0.8);
}
```

---

# **CSS Classes Fundamentals**

Combining Multiple classes:

```html
<h2 class="text-large text-primary">Title</h2>
<p class="text-large text-secondary">Lorem Ipsum</p>
```

- Elements can have multiple classes <!-- element class="fragment" -->
- Classes combine their effects <!-- element class="fragment" -->

---

**Default Browser Styles**

Browsers apply a series of default styles to some elements

---

# **Default Browser Styles**

What browsers apply by default

```css {hl_lines=[1, 2, 3]}
body {
  margin: 8px; /* Default body margin */
}

h1 {
  font-size: 2em; /* Default heading size */
  margin: 0.67em 0; /* Default heading margins */
  font-weight: bold; /* Default heading weight */
}

p {
  margin: 1em 0; /* Default paragraph margins */
}
```

<!-- element class="fragment" -->

---

# **Default Browser Styles**

What browsers apply by default

```css {hl_lines=[5, 6, 7, 8, 9]}
body {
  margin: 8px; /* Default body margin */
}

h1 {
  font-size: 2em; /* Default heading size */
  margin: 0.67em 0; /* Default heading margins */
  font-weight: bold; /* Default heading weight */
}

p {
  margin: 1em 0; /* Default paragraph margins */
}
```

---

# **Default Browser Styles**

What browsers apply by default

```css {hl_lines=[11, 12, 13]}
body {
  margin: 8px; /* Default body margin */
}

h1 {
  font-size: 2em; /* Default heading size */
  margin: 0.67em 0; /* Default heading margins */
  font-weight: bold; /* Default heading weight */
}

p {
  margin: 1em 0; /* Default paragraph margins */
}
```

---

# **Default Browser Styles**

Why it matters

- Every browser has built-in styles
- They create inconsistencies between browsers
- They affect how your elements look

---

# **Default Browser Styles**

## Resetting default browser

Basic Reset:

<!-- element class="fragment" -->

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

<!-- element class="fragment" -->

---

# **Default Browser Styles**

## Issues with this:

- Extremely basic
- Doesn't reset all the styles
- Only takes a couple of properties into consideration

---

# **Default Browser Styles**

## Better Approach:

Use **third party** `normalize.css` to reset and normalize defaults https://necolas.github.io/normalize.css/

<!-- element class="fragment" -->

Used by **Twitter, Github, Soundcloud, Guardian, Medium, Bootstrap**

<!-- element class="fragment" -->

---

**Document Flow Basics**

How elements naturally arrange themselves

---

# **Document Flow Basics**

Normal Document Flow

```html
<h1>This is a heading</h1>
<p>This is a paragraph that flows after the heading.</p>
<p>This paragraph flows after the previous paragraph.</p>
<span>This span</span> <span>flows inline</span> <span>with other spans.</span>
```

<!-- element class="fragment" -->

---

# **Document Flow Basics**

Normal Document Flow

```md
# This is a heading

This is a paragraph that flows after the heading.

This paragraph flows after the previous paragraph.

This span flows inline with other spans.
```

- Elements flow **top to bottom**, **left to right**
- **Block elements** stack vertically
- **Inline elements** flow horizontally

---

## **The Box Model**

Understanding element spacing

---

# **The Box Model**

Example:

```html
<div class="box-model">Hello World</div>
```

```css
.box-example {
  padding: 20px; /* Space inside the element */
  border: 2px solid #333;
  margin: 15px; /* Space outside the element */
}
```

<!-- element class="fragment" -->

---

# **The Box Model**

- Content: The actual text, image
- Padding: Inner Spacing <!-- element class="fragment" -->
- Border: The elements border line <!-- element class="fragment" -->
- Margin: Outer Spacing <!-- element class="fragment" -->

---

# **The Box Model**

![[box-model.png]]

---

**Block vs Inline Elements**

Understanding element display behavior

---

# **Block vs Inline Elements**

**Block Elements:**

```html
<div>Block element - takes full width</div>
<p>Another block element - starts on new line</p>
<h1>Headings are also block elements</h1>
```

Common block elements:

```html
<div>
  <p></p>
  <h1>
    -
    <h6>
      <section>
        <article>
          <header>
            <footer></footer>
          </header>
        </article>
      </section>
    </h6>
  </h1>
</div>
```

---

# **Block vs Inline Elements**

## Block Elements

- Take full available width <!-- element class="fragment" -->
- Start on a new line <!-- element class="fragment" -->
- Width and height can be set <!-- element class="fragment" -->

---

# **Block vs Inline Elements**

## Inline Elements:

Elements that flow with text

---

# **Block vs Inline Elements**

## Inline Elements:

```html
<p>
  This paragraph contains
  <span>inline elements</span>
  like
  <a href="#">links</a>
  and
  <strong>bold text</strong>
  that flow
  <em>naturally</em>
  with the text.
</p>
```

---

# **Block vs Inline Elements**

## Inline Elements

Common Inline elements:

```html
<span>
  <a>
    <strong>
      <em>
        <img />
        <input />
    </em></strong>
  </a>
</span>
```

---

# **Block vs Inline Elements**

## Inline Elements:

- Flow within text lines <!-- element class="fragment" -->
- Width and height ignored <!-- element class="fragment" -->
- Only horizontal margins are effective <!-- element class="fragment" -->

---

# **Block vs Inline Elements**

## Inline-Block Elements

Best of both worlds

---

# **Block vs Inline Elements**

## Inline-Block Elements:

```css
.inline-block-example {
  display: inline-block;
  width: 150px; /* Width works! */
  height: 80px; /* Height works! */
  margin: 10px; /* All margins work! */
  padding: 15px; /* All padding works! */
  vertical-align: top; /* Can align vertically */
}
```

---

# **Block vs Inline Elements**

## Inline-Block Elements:

```html
<div class="inline-block-example">Box 1</div>
<div class="inline-block-example">Box 2</div>
<div class="inline-block-example">Box 3</div>
<!-- These will sit side by side, but can have dimensions -->
```

---

# **Block vs Inline Elements**

## Inline-Block Elements:

- Flow Horizontally like Inline Elements <!-- element class="fragment" -->
- Accept width/height like block elements <!-- element class="fragment" -->
- Useful for navigation menus and button groups <!-- element class="fragment" -->
---
![[tt-logo.svg]]