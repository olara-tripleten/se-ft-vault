
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


**Welcome to CSS Mastery** Borders, shorthands, devtools recap

Today we'll explore:

- Advanced CSS border techniques <!-- element class="fragment" -->
- Shorthands <!-- element class="fragment" -->
- Re-visit Devtools
<!-- element class="fragment" -->

---

**Understanding CSS Borders** The foundation of visual design

Borders define the edges of elements and create visual hierarchy

```css
.basic-border {
  border: 2px solid #333;
  border-width: 1px;
  border-style: solid;
  border-color: blue;
}
```

Three essential properties: width, style, and color

<!-- element class="fragment" -->

---

**Border Styles Variety** Beyond the basic solid line

```css
.border-styles {
  /* Solid line */
  border: 2px solid #000;

  /* Dashed line */
  border: 2px dashed #ff6b6b;

  /* Dotted pattern */
  border: 3px dotted #4ecdc4;

  /* Double line effect */
  border: 4px double #45b7d1;
}
```

Each style creates different visual impact and user experience

<!-- element class="fragment" -->

---

**Individual Border Control** Precision styling for each side

```css
.custom-borders {
  border-top: 3px solid #e74c3c;
  border-right: 1px dashed #3498db;
  border-bottom: 2px dotted #2ecc71;
  border-left: 4px double #f39c12;
}
```

```css
/* Alternative syntax */
.border-sides {
  border-width: 3px 1px 2px 4px;
  border-style: solid dashed dotted double;
  border-color: red blue green orange;
}
```

<!-- element class="fragment" -->

---

**Border Radius Magic** Creating rounded corners and shapes

```css
.rounded-elements {
  /* Uniform radius */
  border-radius: 10px;

  /* Individual corners */
  border-radius: 10px 20px 15px 5px;

  /* Perfect circle */
  border-radius: 50%;

  /* Elliptical shape */
  border-radius: 50px / 25px;
}
```

Transform rectangles into circles, pills, and custom shapes

<!-- element class="fragment" -->

---

# CSS Shorthands

_Writing Less, Achieving More_

---

## What are CSS Shorthands?

**Shorthand properties** let you set multiple related CSS properties with a single declaration.

**Benefits:**

- Less code to write
- Faster to read
- Easier maintenance
- Cleaner stylesheets
---
**Example:**

```css
/* Instead of this: */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 10px;
margin-left: 20px;

/* Write this: */
margin: 10px 20px;
```

---

## Essential Shorthands: Spacing

**Margin & Padding Shorthand:**

```css
/* 4 values: top right bottom left (clockwise) */
margin: 10px 15px 20px 5px;

/* 3 values: top horizontal bottom */
margin: 10px 15px 20px;

/* 2 values: vertical horizontal */
margin: 10px 20px;

/* 1 value: all sides */
margin: 15px;

/* Same pattern applies to padding */
padding: 10px 20px;
```

**Memory Tip:** Think of a clock - start at 12 and go clockwise!

---

## Essential Shorthands: Borders & Backgrounds

**Border Shorthand:**

```css
/* width | style | color */
border: 2px solid #333;
border-top: 1px dashed red;

/* Individual borders */
border-left: 3px solid blue;
```
---
**Background Shorthand:**

```css
/* color | image | repeat | position | size */
background: #fff url('bg.jpg') no-repeat center/cover;

/* Common patterns: */
background: #f0f0f0;
background: url('image.png') center/contain;
```
---
**Font Shorthand:**

```css
/* style | weight | size/line-height | family */
font: italic bold 16px/1.5 Arial, sans-serif;

/* Simplified: */
font: 18px Georgia, serif;
```

---

## Quick Reference & Best Practices

**Most Used Shorthands:**

```css
/* Spacing (use constantly) */
margin: 20px auto;     /* Center horizontally */
padding: 10px 15px;    /* Vertical | Horizontal */

/* Borders (very common) */
border: 1px solid #ddd;
border-radius: 8px;    /* Rounded corners */

/* Backgrounds (frequently used) */
background: #fff;
background: url('img.jpg') center/cover;

/* Typography (common) */
font: 16px/1.4 Arial, sans-serif;
```
---
**Pro Tips:**

- Start with the most common 2-value patterns: `margin: 10px 20px`
- Use `margin: 0 auto` to center elements
- Always specify border style: `border: 1px solid #ccc`
- Remember: shorthands reset unspecified values to defaults

**Practice:** Use shorthands for cleaner, more professional CSS!

---
**Modifying HTML in Real-Time** Edit structure on the fly

**Edit text content:**

- Double-click on text in the DOM tree
- Type new content
- Press Enter to apply changes

<!-- element class="fragment" -->

---
**Edit HTML attributes:**

- Double-click on attribute values
- Modify href, src, class, id, etc.
- Changes apply immediately

<!-- element class="fragment" -->

---
**Add new elements:**

- Right-click on parent element
- Select "Edit as HTML"
- Add your HTML code

<!-- element class="fragment" -->

---

**The Styles Panel** Your CSS control center

**Computed styles:**

- Shows final calculated values
- Includes inherited properties
- Useful for understanding cascading

<!-- element class="fragment" -->

---
**Applied rules:**

- Shows all CSS rules affecting the element
- Ordered by specificity (most specific first)
- Inline styles appear at the top

<!-- element class="fragment" -->

---
**Override indicators:**

- Crossed-out properties are overridden
- Grayed-out properties are inactive
- Click checkboxes to enable/disable rules
<!-- element class="fragment" -->

---

**Modifying CSS Styles** Real-time style editing

**Edit existing properties:**

- Click on any CSS property value
- Type new values
- Press Tab to move to next property
- Press Enter to add new property

<!-- element class="fragment" -->

---
**Add new properties:**

- Click in empty space within a CSS rule
- Type property name and value
- Use auto-complete suggestions

<!-- element class="fragment" -->

---
**Create new CSS rules:**

- Click the "+" icon in Styles panel
- Creates new rule for selected element
- Add properties as needed
<!-- element class="fragment" -->
---
<!-- element class="fragment" -->

**Developer Tools are essential for:**

- Learning how websites work
- Debugging HTML and CSS issues
- Testing responsive designs
- Experimenting with new techniques

<!-- element class="fragment" -->

**Remember:**

- Changes in DevTools are temporary
- Use right-click → Inspect for quick access
- The Styles panel shows rule specificity
- Practice makes perfect!

<!-- element class="fragment" -->
---
![[tt-logo.svg]]