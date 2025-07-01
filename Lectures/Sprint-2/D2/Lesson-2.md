
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

---
## Tripleten Coffeeshop

- Project Overview <!-- element class="fragment" -->
- Delivering via Github <!-- element class="fragment" -->
- Work on the project <!-- element class="fragment" -->

---

## Stage 1

During this stage you'll be working on the **Recipes Section** of the Tripleten Coffeeshop Landing Page

---

![[Screenshot 2025-05-30 at 2.43.00 PM.png]]

---

## Delivering via github

- Clone Repository
- Open on vscode
- Make the required updates
- Push the changes

---

# Clone repository

- Go to your github repositories and find `se_project_coffeeshop`
  ![[Screenshot 2025-05-30 at 3.00.25 PM.png]]

---

- Copy the SSH Link
  ![[Screenshot 2025-05-30 at 3.04.23 PM.png]]

---

- Open your terminal and navigate to your projects folder

```sh
cd ~/Documents/tripleten
```

- Clone the github repository into your computer

```sh
git clone git@github.com/{{GITHUB_USER}}/se_project_coffeeshop
```

- This will create a new folder inside of the `tripleten` folder. You need to cd into is

```sh
cd se_project_coffeeshop
# To Open VSCode
code .
```

---

## Work on the project...

---

## Pushing changes to github

After finishing the changes on the project you need to sync your local changes with github's repository.

```sh
# Moves the changes to the staging area
git add -A

# Creates a new commit on the repository with the changes
git commit -m "Add recipes html & css"

# Push the changes into github
git push -u origin main
```
---
![[tt-logo.svg]]