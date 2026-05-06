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

# Javascript conditionals and loops

---

## What are conditionals?

Conditionals are used to execute different blocks of code based on whether a certain condition is true or false. They allow your program to make decisions and are a fundamental concept in programming. Without conditionals, your code would execute in a linear fashion, without the ability to adapt to different situations.

---

## Comparison operators

Comparison operators are used to compare two values. The result of a comparison is always a boolean value: `true` or `false`.

- `==` (equal to): Compares the values of two operands for equality, after converting both operands to a common type.
- `===` (strictly equal to - same value and same type): Compares the values and types of two operands for equality, without any type conversion.
- `!=` (not equal to): Compares the values of two operands for inequality, after converting both operands to a common type.
- `!==` (strictly not equal to): Compares the values and types of two operands for inequality, without any type conversion.
- `>` (greater than)
- `<` (less than)
- `>=` (greater than or equal to)
- `<=` (less than or equal to)

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->
```javascript
let x = 5;

console.log(x == 5); // true
console.log(x === "5"); // false
console.log(x != 8); // true
console.log(x > 8); // false
```
<!-- element class="fragment" -->

---

## Conditional statements

- `if`: Executes a block of code if a condition is true.
- `else`: Executes a block of code if the same condition is false.
- `else if`: Specifies a new condition to test, if the first condition is false.
- `switch`: Selects one of many code blocks to be executed.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->
```javascript
let time = 14;

if (time < 12) {
  console.log("Good morning!");
} else if (time < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

let day = new Date().getDay();
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  // ... and so on
}
```
<!-- element class="fragment" -->

---

## Logical operators

Logical operators are used to combine multiple conditions.

- `&&` (and): Returns true if both conditions are true.
- `||` (or): Returns true if at least one of the conditions is true.
- `!` (not): Inverts the boolean value of a condition.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->
```javascript
let x = 6;
let y = 3;

if (x < 10 && y > 1) {
  console.log("Both conditions are true.");
}

if (x === 5 || y === 5) {
  console.log("At least one condition is true.");
}

if (!(x === y)) {
  console.log("x is not equal to y");
}
```
<!-- element class="fragment" -->

---

## What are loops?

Loops are used to execute a block of code repeatedly. They are useful when you want to perform the same action multiple times, such as iterating over an array or processing a list of items.

---

## For loop

The `for` loop is used to execute a block of code a specific number of times. It consists of three parts: initialization, condition, and increment.

- **Initialization:** Executed once, before the loop starts. It is typically used to initialize a counter variable.
- **Condition:** Evaluated before each iteration. If it returns true, the loop continues. If it returns false, the loop terminates.
- **Increment:** Executed after each iteration. It is typically used to increment the counter variable.

<!-- element class="fragment" -->

### Syntax: <!-- element class="fragment" -->
```javascript
for (initialization; condition; increment) {
  // code to be executed
}
```

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->
```javascript
for (let i = 0; i < 5; i++) {
  console.log("The number is " + i);
}
```
<!-- element class="fragment" -->

---

## While loop

The `while` loop is used to execute a block of code as long as a specified condition is true. The condition is evaluated before each iteration. If it returns true, the loop continues. If it returns false, the loop terminates.

<!-- element class="fragment" -->

### Syntax: <!-- element class="fragment" -->
```javascript
while (condition) {
  // code to be executed
}
```

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->
```javascript
let i = 0;
while (i < 5) {
  console.log("The number is " + i);
  i++;
}
```
<!-- element class="fragment" -->

---

## Do...while loop

The `do...while` loop is similar to the `while` loop, but the condition is evaluated after each iteration. This means that the code block will always be executed at least once, even if the condition is false.

<!-- element class="fragment" -->

### Syntax: <!-- element class="fragment" -->
```javascript
do {
  // code to be executed
} while (condition);
```

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->
```javascript
let i = 0;
do {
  console.log("The number is " + i);
  i++;
} while (i < 5);
```
<!-- element class="fragment" -->

---
![[tt-logo.svg]]