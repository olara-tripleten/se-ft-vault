
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

# CSS Basic

---

## CSS Fundamentals

Key concepts for styling web pages

- Understanding CSS dimensions and measurement units <!-- element class="fragment" -->
- Working with backgrounds (colors, images, properties) <!-- element class="fragment" -->
- Typography and font styling <!-- element class="fragment" -->
- CSS inheritance principles <!-- element class="fragment" -->

---

**CSS Dimensions**

Understanding how elements are sized

---

CSS provides multiple ways to define element dimensions:

Fixed Sizes <!-- element class="fragment" -->

```css
element {
  width: 300px;
  height: 200px;
}
```

<!-- element class="fragment" -->

Relative Sizes <!-- element class="fragment" -->

```css
element {
  width: 50%;
  height: 100vh;
}
```

<!-- element class="fragment" -->

---

- Fixed dimensions: Provide exact control over design, no flexibility
- Relative dimensions: Provide more loose control over design, higher flexibility <!-- element class="fragment" -->

---

**CSS Measurement Units**

Different units for different purposes <!-- element class="fragment" -->

---

**Absolute Units:**

```css {hl_lines=[2,3,4]}
element {
  width: 200px; /* Pixels - screen pixels */
  margin: 1cm; /* Centimeters */
  padding: 12pt; /* Points */
}
```

- Use **px** for precise control <!-- element class=""="fragment" -->

---

**Relative Units:**

```css {hl_lines=[2,3,4, 5]}
element {
  font-size: 1.2em; /* Relative to parent font size */
  width: 50%; /* Percentage of parent */
  height: 100vh; /* Viewport height */
  padding: 2rem; /* Root em - relative to root font */
}
```

- Use % and rem for responsive design <!-- element class="fragment" -->

---

**Background Styles**

---

**Background color**

```css
element {
  /* Hex color */
  background-color: #3498db;

  /* RGB values */
  background-color: rgb(52, 152, 219);

  /* RGB with transparency */
  background-color: rgba(52, 152, 219, 0.8);

  /* Named colors */
  background-color: lightblue;
}
```

---

Background Images

```css
element {
  /* External image */
  background-image: url("https://picsum.photos/200/201");

  /* Local Image */
  background-image: url("/path/to/image.png");
}
```

---

Background Images Properties

```css
element {
  background-image: url("https://example.com/hero.jpg");
  background-size: cover; /* Covers entire element */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents tiling */
  background-attachment: fixed; /* Fixed during scroll */
}
```

---

Background Image size

```css
element {
  /* Covers all the space */
  background-size: cover;

  /* Is contained within the space */
  background-size: contain;

  /* Width & Height */
  background-size: 200px;

  /* Width x Height */
  background-size: 20px 20px;
}
```

---

**Typography | Fonts**

Styling text effectively

---

**Font Properties**

```css
h3 {
  font-family: "Segoe UI", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}
```

---

**Font Family**

```css {hl_lines=[2]}
h3 {
  font-family: "Segoe UI", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}
```

- Always give at least two fallback font families <!-- element class="fragment" -->

---

Font Size

```css {hl_lines=[3]}
h3 {
  font-family: "Segoe UI", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}
```

---

Font Line-Height

```css {hl_lines=[4]}
h3 {
  font-family: "Segoe UI", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}
```

Set Line height for better readability

## <!-- element class="fragment" -->

**CSS Inheritance**

How styles cascade down

---

Inherited Properties:

```css
body {
  /* Inherits to all children */
  font-family: "Arial", sans-serif;

  /* Inherits to all children */
  color: #333;

  /* Inherits to all children */
  line-height: 1.6;
}
```

- Text properties typically inherit (font, color, line-height)
<!-- element class="fragment" -->

---

**Non-Inherited Properties**

```css
section {
  margin: 20px;
  padding: 15px;
  background-color: white;
  border: 1px solid #ccc;
}
```

- Box properties don't inherit (margin, padding, background)
<!-- element class="fragment" -->

---

Dev tools

**Introduction to Developer Tools** your gateway to understanding and debugging web development


---

What are Developer Tools? **Built-in browser features for web developers** <!-- element class="fragment" -->

<!-- element class="fragment" -->

They allow you to: <!-- element class="fragment" -->

- Inspect HTML structure <!-- element class="fragment" -->
- Modify CSS styles in real-time <!-- element class="fragment" -->
- Debug JavaScript code <!-- element class="fragment" -->
- Monitor network activity <!-- element class="fragment" -->
- Analyze performance <!-- element class="fragment" -->

---

**Why Use Developer Tools?** 

Essential for learning and professional development
<!-- element class="fragment" -->

---
**For Learning:**

- Understand how websites are built
- Experiment with code safely
- See immediate results of changes

<!-- element class="fragment" -->

---
**For Development:**

- Debug layout issues
- Test responsive designs
- Optimize performance
- Fix broken styles

<!-- element class="fragment" -->

---
**For Inspiration:**

- Learn from other websites
- Reverse-engineer designs
- Understand best practices

<!-- element class="fragment" -->

---

**How to Open Developer Tools**

---

**Method 1: Right-click menu**
- Right-click on any webpage element
- Select "Inspect" or "Inspect Element"

<!-- element class="fragment" -->

---
**Method 2: Keyboard shortcuts**

- **Chrome/Edge:** `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
- **Firefox:** `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
- **Safari:** `Cmd+Option+I` (Mac) - requires enabling Developer menu first

<!-- element class="fragment" -->

---
**Method 3: Browser menu**

- Chrome: Menu → More Tools → Developer Tools
- Firefox: Menu → Web Developer → Inspector

---

**Developer Tools Interface**

Understanding the main panels
<!-- element class="fragment" -->

---
**Elements/Inspector Panel**

- View and edit HTML structure
- Modify CSS styles in real-time

<!-- element class="fragment" -->

---

**The Elements Panel** 

Your HTML and CSS playground
<!-- element class="fragment" -->

**Left Side: DOM Tree**

- Shows the HTML structure of the page
- Elements can be expanded/collapsed
- Hover to highlight elements on the page

<!-- element class="fragment" -->

---
**Right Side: Styles Panel**

- Shows CSS rules applied to selected element
- Rules are ordered by specificity
- Crossed-out rules are overridden

<!-- element class="fragment" -->

---

**Selecting Elements**

**Method 1: Click the inspect tool**

- Click the target/cursor icon in DevTools
- Click on any element in the webpage
- Element will be highlighted in the DOM tree

<!-- element class="fragment" -->

---
**Method 2: Right-click inspect**

- Right-click directly on the element
- Select "Inspect"
- Opens DevTools with element selected

<!-- element class="fragment" -->

---
**Method 3: Navigate the DOM tree**

- Click through the HTML structure
- Use arrow keys to navigate
- Search with `Ctrl+F` in the Elements panel

<!-- element class="fragment" -->

---

How HTML appears in Developer Tools

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <header>
      <h1>Welcome</h1>
    </header>
    <main>
      <p>This is a paragraph.</p>
    </main>
  </body>
</html>
```

- Each HTML tag appears as a collapsible node <!-- element class="fragment" -->
- Indentation shows nesting relationships <!-- element class="fragment" -->
- Text content appears inside elements <!-- element class="fragment" -->
- Attributes are shown within the opening tags <!-- element class="fragment" -->

---
![[tt-logo.svg]]