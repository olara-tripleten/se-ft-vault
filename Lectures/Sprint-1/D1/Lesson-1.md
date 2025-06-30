


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


**HTML Semantics, IDs & CSS Pseudo-Classes** Advanced Web Development Concepts

Building meaningful, accessible, and interactive web pages

---

**What We'll Cover Today**



- HTML Semantic Elements and their importance

<!-- element class="fragment" -->

- IDs: Purpose, syntax, and linking within pages

<!-- element class="fragment" -->

- CSS Pseudo-classes for interactive states

<!-- element class="fragment" -->

- CSS Pseudo-elements for enhanced styling

<!-- element class="fragment" -->

- Best practices and MDN documentation
<!-- element class="fragment" -->

---

**HTML Semantics Recap** Why meaning matters in markup

**Semantic HTML** uses elements that describe the meaning and structure of content, not just its appearance.


```html
<!-- Non-semantic approach -->
<div class="header">
  <div class="nav">...</div>
</div>
<div class="main-content">...</div>
<div class="sidebar">...</div>
<div class="footer">...</div>
```

```html
<!-- Semantic approach -->
<header>
  <nav>...</nav>
</header>
<main>...</main>
<aside>...</aside>
<footer>...</footer>
```

---

**Key Semantic Elements** Building blocks for meaningful structure



```html
<article>     <!-- Self-contained content -->
<section>     <!-- Thematic grouping -->
<header>      <!-- Introductory content -->
<nav>         <!-- Navigation links -->
<main>        <!-- Primary content -->
<aside>       <!-- Sidebar content -->
<footer>      <!-- Footer information -->
```


```html
<figure>      <!-- Self-contained content with caption -->
<figcaption>  <!-- Caption for figure -->
<time>        <!-- Date/time information -->
<address>     <!-- Contact information -->
```

<!-- element class="fragment" -->

---

**Semantic Elements in Action** Real-world blog post example

```html
<article>
  <header>
    <h1>Understanding Web Accessibility</h1>
    <p>Published on <time datetime="2024-03-15">March 15, 2024</time></p>
    <address>By <a href="mailto:author@example.com">Jane Developer</a></address>
  </header>
  
  <section>
    <h2>Introduction</h2>
    <p>Web accessibility ensures that websites are usable by everyone...</p>
    <figure>
      <img src="accessibility-chart.png" alt="Accessibility statistics">
      <figcaption>Web accessibility impact statistics</figcaption>
    </figure>
  </section>
  
  <footer>
    <p>Tags: <a href="#accessibility">accessibility</a>, <a href="#web-dev">web development</a></p>
  </footer>
</article>
```

---

**HTML IDs: Unique Identifiers** Creating anchors and references

**ID attributes** provide unique identifiers for HTML elements

```html
<h2 id="introduction">Introduction</h2>
<p id="main-paragraph">This is the main content...</p>
<section id="contact-form">
  <form>...</form>
</section>
```


**Rules for IDs:**

- Must be unique on the page <!-- element class="fragment" -->
- Case-sensitive <!-- element class="fragment" -->
- Cannot contain spaces <!-- element class="fragment" -->
- Should start with a letter <!-- element class="fragment" -->

---

**Using IDs for Internal Links** Creating navigation within your page



```html
<!-- Navigation menu -->
<nav>
  <ul>
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#features">Features</a></li>
   
  </ul>
</nav>
```

<!-- element class="fragment" -->

```html
<!-- Target sections -->
<section id="introduction">
  <h2>Introduction</h2>
  <p>Welcome to our product page...</p>
</section>

<section id="features">
  <h2>Features</h2>
  <p>Our product offers...</p>
</section>
```

<!-- element class="fragment" -->

---

**ID Linking Best Practices** Smooth scrolling and accessibility


```css
/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* Offset for fixed headers */
section[id] {
  scroll-margin-top: 80px;
}
```

<!-- element class="fragment" -->

```html
<!-- Accessible "skip to content" link -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<main id="main-content">
  <h1>Page Title</h1>
  <!-- Main content here -->
</main>
```

<!-- element class="fragment" -->

---

**CSS Pseudo-Classes: Interactive States** Styling based on element state

**Pseudo-classes** select elements based on their state or position

<!-- element class="fragment" -->

```css
/* Link states */
a:link    { color: blue; }
a:visited { color: purple; }
a:hover   { color: red; }
a:active  { color: orange; }
```

<!-- element class="fragment" -->

```css
/* Form states */
input:focus { border-color: #007acc; }
input:valid { border-color: green; }
input:invalid { border-color: red; }
```
<!-- element class="fragment" -->

---

**Structural Pseudo-Classes** Selecting based on position

```css
/* First and last children */
li:first-child { font-weight: bold; }
li:last-child  { margin-bottom: 0; }
```

```css
/* Nth-child patterns */
tr:nth-child(even) { background: #f2f2f2; }
tr:nth-child(odd)  { background: white; }

/* Every third item */
.gallery-item:nth-child(3n) { margin-right: 0; }
```

---


**MDN Documentation: Your Best Friend** Learning to look up what you need

**Mozilla Developer Network (MDN)** is the authoritative source for web documentation



**How to search effectively:**

- Use specific element names: "HTML section element" <!-- element class="fragment" -->
- Search for CSS properties: "CSS hover pseudo-class" <!-- element class="fragment" -->
- Look for examples and browser compatibility <!-- element class="fragment" -->

**Key MDN sections:**
<!-- element class="fragment" -->
- HTML elements reference <!-- element class="fragment" -->
- CSS pseudo-classes reference <!-- element class="fragment" -->
- CSS pseudo-elements reference <!-- element class="fragment" -->
- Web accessibility guidelines <!-- element class="fragment" -->

---

**Using MDN Effectively** Navigation and key information


**What to look for on MDN pages:**

- **Syntax** - How to write it correctly
- **Examples** - Copy-paste starting points
- **Browser support** - Compatibility information
- **Accessibility** - Screen reader and keyboard support

**Pro tip:** Use MDN's search with quotation marks for exact matches

- `"nth-child"` instead of `nth child`
- `"semantic HTML"` instead of `semantic HTML`

---

**Common Gotchas and Solutions** Avoiding frequent mistakes

<!-- element class="fragment" -->

**ID Mistakes:**

```html
<!-- ❌ Wrong: Duplicate IDs -->
<div id="content">...</div>
<div id="content">...</div>

<!-- ✅ Correct: Unique IDs -->
<div id="main-content">...</div>
<div id="sidebar-content">...</div>
```

<!-- element class="fragment" -->

**Pseudo-class Mistakes:**

```css
/* ❌ Wrong: Missing colon */
a hover { color: red; }

/* ✅ Correct: Proper syntax */
a:hover { color: red; }
```

---
