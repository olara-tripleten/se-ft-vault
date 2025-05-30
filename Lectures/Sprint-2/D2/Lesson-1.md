<style>
	* {
		width: 100%;
			text-align: start;
	}
	.controls{
		width: auto;
		text-align: end;
	}
	h1 {
		position: absolute;
		top: 0px;
		left: 0px;
		font-size: 24px !important;
		
	}
	h2 {
		font-size: 48px !important;
		font-weight: light;
	}
	
	p, li {
		font-size: 32px;
	}
</style>

**Animations Continuation** Advanced CSS Animation Techniques

Building upon fundamental animation concepts to create sophisticated web interactions

---

**Today's Learning Objectives**

- Master smooth transitions for professional animations
- Implement shadow effects for depth and visual hierarchy
- Create linear and radial gradients for dynamic backgrounds
- Control content visibility with overflow properties
- Build complex animations using keyframes
- Explore essential introductory animation techniques

---

**Smooth Transitions** Creating seamless property changes

Transitions allow smooth changes between CSS property values over time

<!-- element class="fragment" -->

```css
.button {
  background-color: #3498db;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #2980b9;
}
```

<!-- element class="fragment" -->

**Key Properties:**

- `transition-property`: Which properties to animate
- `transition-duration`: How long the transition takes
- `transition-timing-function`: Speed curve of the transition

<!-- element class="fragment" -->

---

**Transition Timing Functions** Controlling animation speed curves

```css
.card {
  transform: translateY(0);
  transition: transform 0.4s ease-in-out;
}

.card:hover {
  transform: translateY(-10px);
}
```

<!-- element class="fragment" -->

**Common timing functions:**

- `ease`: Slow start, fast middle, slow end
- `linear`: Constant speed
- `ease-in`: Slow start, then fast
- `ease-out`: Fast start, then slow
- `cubic-bezier()`: Custom timing curves

<!-- element class="fragment" -->

---

**Multiple Property Transitions** Animating several properties simultaneously

```css
.card {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: scale(1);
  transition: all 0.3s ease;
}

.card:hover {
  background-color: #f8f9fa;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  transform: scale(1.02);
}
```

<!-- element class="fragment" -->

**Best Practice:** Specify individual properties instead of `all` for better performance

<!-- element class="fragment" -->

---

**CSS Shadows** Adding depth and visual hierarchy

**Box Shadow Syntax:** <!-- element class="fragment" -->

```css
box-shadow: h-offset v-offset blur spread color;
```

<!-- element class="fragment" -->

```css
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card--elevated {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.card--floating {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 12px 20px rgba(0, 0, 0, 0.08);
}
```

<!-- element class="fragment" -->

---

**Animated Shadow Effects** Creating dynamic depth changes

```css
.button {
  background-color: #3498db;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
}

.button:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.button:active {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}
```

<!-- element class="fragment" -->

**Text Shadow for Typography:** <!-- element class="fragment" -->

```css
.heading {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
```

<!-- element class="fragment" -->

---

**Linear Gradients** Creating smooth color transitions

**Basic Linear Gradient:** <!-- element class="fragment" -->

```css
.gradient-bg {
  background: linear-gradient(to right, #3498db, #2ecc71);
}
```

<!-- element class="fragment" -->

**Directional Control:** <!-- element class="fragment" -->

```css
.gradient-bg--vertical {
  background: linear-gradient(to bottom, #e74c3c, #f39c12);
}

.gradient-bg--diagonal {
  background: linear-gradient(45deg, #9b59b6, #3498db);
}

.gradient-bg--angle {
  background: linear-gradient(135deg, #667eea, #764ba2);
}
```

<!-- element class="fragment" -->

---

**Multi-Stop Linear Gradients** Complex color combinations

```css
.sunset-gradient {
  background: linear-gradient(to bottom, #ff7e5f 0%, #feb47b 50%, #86a8e7 100%);
}
```

<!-- element class="fragment" -->

```css
.rainbow-gradient {
  background: linear-gradient(
    90deg,
    #ff0000 0%,
    #ff8000 16.66%,
    #ffff00 33.33%,
    #00ff00 50%,
    #0080ff 66.66%,
    #8000ff 83.33%,
    #ff0080 100%
  );
}
```

<!-- element class="fragment" -->

---

**Radial Gradients** Circular and elliptical color transitions

**Basic Radial Gradient:** <!-- element class="fragment" -->

```css
.radial-bg {
  background: radial-gradient(circle, #3498db, #2c3e50);
}
```

<!-- element class="fragment" -->

**Positioned Radial Gradients:** <!-- element class="fragment" -->

```css
.spotlight {
  background: radial-gradient(
    circle at 30% 40%,
    #ffffff 0%,
    #3498db 50%,
    #2c3e50 100%
  );
}

.elliptical {
  background: radial-gradient(ellipse at center, #e74c3c 0%, #c0392b 100%);
}
```

<!-- element class="fragment" -->

---

**Animated Gradients** Creating dynamic gradient effects

```css
.animated-gradient {
  background: linear-gradient(45deg, #3498db, #e74c3c, #f39c12, #2ecc71);
  background-size: 400% 400%;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
```

<!-- element class="fragment" -->

**Gradient Hover Effect:** <!-- element class="fragment" -->

```css
.button--gradient {
  background: linear-gradient(45deg, #3498db, #2ecc71);
  transition: background 0.3s ease;
}

.button--gradient:hover {
  background: linear-gradient(45deg, #2980b9, #27ae60);
}
```

<!-- element class="fragment" -->

---

**Hiding Overflow** Controlling content visibility

**Overflow Properties:** <!-- element class="fragment" -->

```css
.container {
  width: 300px;
  height: 200px;
  overflow: hidden; /* Hide overflowing content */
}

.container--scroll {
  overflow: scroll; /* Always show scrollbars */
}

.container--auto {
  overflow: auto; /* Show scrollbars when needed */
}
```

<!-- element class="fragment" -->

**Directional Overflow Control:** <!-- element class="fragment" -->

```css
.horizontal-scroll {
  overflow-x: auto;
  overflow-y: hidden;
}
```

<!-- element class="fragment" -->

---

**Overflow in Animations** Creating reveal effects

```css
.reveal-container {
  width: 300px;
  height: 50px;
  overflow: hidden;
  position: relative;
}

.reveal-text {
  transform: translateY(100%);
  transition: transform 0.5s ease;
}

.reveal-container:hover .reveal-text {
  transform: translateY(0);
}
```

<!-- element class="fragment" -->

---

**Image Zoom with Overflow:**

```css
.image-container {
  overflow: hidden;
  border-radius: 8px;
}

.image-container img {
  transition: transform 0.3s ease;
}

.image-container:hover img {
  transform: scale(1.1);
}
```

<!-- element class="fragment" -->

---

**CSS Keyframes** Defining complex animation sequences

**Basic Keyframe Structure:** <!-- element class="fragment" -->

```css
@keyframes animationName {
  0% {
    /* Starting state */
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    /* Ending state */
    opacity: 1;
    transform: translateY(0);
  }
}
```

<!-- element class="fragment" -->

**Applying Keyframe Animation:** <!-- element class="fragment" -->

```css
.fade-in {
  animation: animationName 0.5s ease forwards;
}
```

<!-- element class="fragment" -->

---

**Multi-Step Keyframes** Creating complex animation sequences

```css
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
}
```

<!-- element class="fragment" -->

```css
.bouncing-element {
  animation: bounce 1s ease-in-out infinite;
}
```

<!-- element class="fragment" -->

---

**Animation Properties** Fine-tuning animation behavior

```css
.animated-element {
  animation-name: slideIn;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-delay: 0.2s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
}
```

<!-- element class="fragment" -->

**Shorthand Animation:** <!-- element class="fragment" -->

```css
.animated-element {
  animation: slideIn 0.5s ease-out 0.2s 1 normal forwards;
}
```

<!-- element class="fragment" -->

---

**Rotation Animations** Creating spinning and rotating effects

```css
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loading-spinner {
  animation: spin 1s linear infinite;
}
```

<!-- element class="fragment" -->

---

**Pulse Animation:**

```css
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
```

<!-- element class="fragment" -->

---

**Slide Animations** Creating entrance and exit effects

```css
@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
```

```
@keyframes slideOutRight {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(100%);
        opacity: 0;
    }
}
```

<!-- element class="fragment" -->

---

**Fade Animations** Smooth opacity transitions

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

<!-- element class="fragment" -->

---

**Applying Fade Animations:**

```css
.fade-in-element {
  animation: fadeInUp 0.6s ease forwards;
}
```

---

**Animation Performance** Optimizing for smooth animations

**Use transform and opacity for best performance:** <!-- element class="fragment" -->

```css
/* Good - uses transform */
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

/* Avoid - causes layout reflow */
@keyframes slideInBad {
  from {
    left: -100px;
  }
  to {
    left: 0;
  }
}
```

<!-- element class="fragment" -->

**will-change property for optimization:** <!-- element class="fragment" -->

```css
.animated-element {
  will-change: transform, opacity;
}
```

<!-- element class="fragment" -->

---

**Combining Animation Techniques** Creating rich interactive experiences

```css
.card {
  background: linear-gradient(135deg, #667eea, #764ba2);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.card__content {
  transform: translateY(20px);
  opacity: 0;
  animation: fadeInUp 0.5s ease 0.2s forwards;
}
```

<!-- element class="fragment" -->

---

**Practical Animation Examples** Real-world implementation patterns

**Loading Button Animation:**

<!-- element class="fragment" -->

```css
.button--loading {
  position: relative;
  color: transparent;
}

.button--loading::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid #ffffff;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

<!-- element class="fragment" -->

---

**Navigation Menu Animation** Smooth menu transitions

```css
.menu {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease;
}

.menu--open {
  max-height: 200px;
}

.menu__item {
  transform: translateX(-100%);
  opacity: 0;
  transition: all 0.3s ease;
}

.menu--open .menu__item {
  transform: translateX(0);
  opacity: 1;
}

.menu__item:nth-child(2) {
  transition-delay: 0.1s;
}
.menu__item:nth-child(3) {
  transition-delay: 0.2s;
}
```

<!-- element class="fragment" -->

---

**Best Practices Summary**

**Performance Guidelines:** <!-- element class="fragment" -->

- Use `transform` and `opacity` for smooth animations
- Avoid animating layout properties (width, height, margin)
- Use `will-change` for complex animations

<!-- element class="fragment" -->

**User Experience:** <!-- element class="fragment" -->

- Keep animations short (200-500ms for most interactions)
- Provide meaning and context through animations
- Respect user preferences with `prefers-reduced-motion`

<!-- element class="fragment" -->

**Code Organization:** <!-- element class="fragment" -->

- Use BEM methodology for animation classes
- Group related keyframes together
- Comment complex animation sequences

<!-- element class="fragment" -->
