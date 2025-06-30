
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



**Introduction to CSS Animations**

**Animations** bring your web pages to life

<!-- element class="fragment" -->

**Two main approaches:**
<!-- element class="fragment" -->

- **Transitions**: Animate between two states
- **Keyframe Animations**: Complex, multi-step animations

<!-- element class="fragment" -->

Both use **CSS properties** - no JavaScript required!

<!-- element class="fragment" -->

---

**CSS Transform Property**

**Transform** changes an element's appearance without affecting layout

<!-- element class="fragment" -->

```css
.card {
  transform: rotate(45deg);
}
```

<!-- element class="fragment" -->

```css
.card {
  transform: scale(1.5);
}
```

<!-- element class="fragment" -->

```css
.card {
  transform: translate(50px, 100px);
}
```

<!-- element class="fragment" -->

---

**Transform Functions**

**Rotation:**

```css
.card {
  transform: rotate(45deg);
}
.card {
  transform: rotateX(45deg);
}
.card {
  transform: rotateY(45deg);
}
```

<!-- element class="fragment" -->
---
**Scaling:**

```css
.card {
  transform: scale(1.5);
}
.card {
  transform: scaleX(2);
}
.card {
  transform: scaleY(0.5);
}
```

<!-- element class="fragment" -->
---
**Translation (movement):** <!-- element class="fragment" -->

```css
.card {
  transform: translateX(100px);
}
.card {
  transform: translateY(-50px);
}
.card {
  transform: translate(50px, 100px);
}
```

<!-- element class="fragment" -->

---

**Combining Transforms**

**Multiple transforms** in one declaration:

```css
.card {
  transform: rotate(45deg) scale(1.2) translateX(50px);
}
```

<!-- element class="fragment" -->

**Order matters!** Transforms are applied from right to left

<!-- element class="fragment" -->

```css
/* Different results: */
transform: rotate(45deg) translateX(100px);
transform: translateX(100px) rotate(45deg);
```

<!-- element class="fragment" -->

---

**Transform Origin**

**transform-origin** controls the pivot point

<!-- element class="fragment" -->

```css
.card {
  transform: rotate(45deg);
  transform-origin: top left;
}
```

<!-- element class="fragment" -->

**Common values:** <!-- element class="fragment" -->

- `center` (default)
- `top left`, `top right`, `bottom left`, `bottom right`
- `50px 100px` (specific coordinates)
- `50% 25%` (percentage values)

<!-- element class="fragment" -->

---

**CSS Transitions**

**Transitions** animate property changes smoothly

<!-- element class="fragment" -->

```css
.button {
  background-color: blue;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: red;
}
```

<!-- element class="fragment" -->

**Result:** Color changes smoothly over 0.3 seconds on hover

<!-- element class="fragment" -->

---

**Transition Properties**

```css
.button {
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0.1s;
}
```

<!-- element class="fragment" -->

**Shorthand:**

```css
.button {
  transition: background-color 0.3s ease 0.1s;
}
```

<!-- element class="fragment" -->

**Multiple properties:**

```css
.button {
  transition: background-color 0.3s, transform 0.2s;
}
```

<!-- element class="fragment" -->

---

**Timing Functions**

**Controls the animation curve:**

<!-- element class="fragment" -->

```css
transition-timing-function: ease; /* Default */
transition-timing-function: linear; /* Constant speed */
transition-timing-function: ease-in; /* Slow start */
transition-timing-function: ease-out; /* Slow end */
transition-timing-function: ease-in-out; /* Slow start & end */
```

<!-- element class="fragment" -->

**Custom curves:**

```css
transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
```

<!-- element class="fragment" -->

---

**Practical Transform + Transition Example**

**HTML:**

```html
<div class="card">
  <h3>Hover me!</h3>
</div>
```

**CSS:**

```css
.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
```

---

**Button Hover Effects**

```css
.button {
  background: #3498db;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.button:hover {
  background: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
```

**Creates a lifting effect** on hover

<!-- element class="fragment" -->

---

**Image Zoom Effect**

```css
.image-container {
  overflow: hidden;
  border-radius: 8px;
}

.image-container img {
  width: 100%;
  transition: transform 0.3s ease;
}

.image-container:hover img {
  transform: scale(1.1);
}
```

**Smooth zoom without affecting layout**

<!-- element class="fragment" -->

---

**Loading Spinner with Transform**

```css
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

<!-- element class="fragment" -->

**Continuous rotation animation**

<!-- element class="fragment" -->

---

**Performance Considerations**
---
**Fast properties** (GPU accelerated):

- `transform`
- `opacity`
<!-- element class="fragment" -->
<!-- element class="fragment" -->
---
**Slow properties (avoid animating):** 

- `width`, `height`
- `margin`, `padding`
- `top`, `left`
<!-- element class="fragment" -->
---
**Use `transform` instead:** <!-- element class="fragment" -->

```css
/* Slow */
.box {
  left: 100px;
}

/* Fast */
.box {
  transform: translateX(100px);
}
```

<!-- element class="fragment" -->

---

**Common Animation Patterns**

**Fade in:**

```css
.fade-in {
  opacity: 0;
  transition: opacity 0.5s ease;
}
.fade-in.visible {
  opacity: 1;
}
```

<!-- element class="fragment" -->

**Slide up:** <!-- element class="fragment" -->

```css
.slide-up {
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.4s ease;
}
.slide-up.visible {
  transform: translateY(0);
  opacity: 1;
}
```

<!-- element class="fragment" -->

---

**Combining Embedding and Animations**

**Animated iframe container:**

```css
.video-container {
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.5s ease;
}

.video-container.loaded {
  opacity: 1;
  transform: scale(1);
}
```

<!-- element class="fragment" -->

**Smooth video appearance** when page loads

<!-- element class="fragment" -->

---

**Best Practices Summary**

- Keep animations subtle and purposeful <!-- element class="fragment" -->
- Use GPU-accelerated properties <!-- element class="fragment" -->
- Test on different devices <!-- element class="fragment" -->
- Provide reduced motion options for accessibility <!-- element class="fragment" -->

**Animations Continuation** Advanced CSS Animation Techniques

<!-- element class="fragment" -->

Building upon fundamental animation concepts to create sophisticated web interactions

<!-- element class="fragment" -->



