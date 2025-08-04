---
marp: true
---

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

## <!-- element class="fragment" -->

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

## <!-- element class="fragment" -->

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

## **Performance Considerations**

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

## <!-- element class="fragment" -->

![[tt-logo.svg]]
