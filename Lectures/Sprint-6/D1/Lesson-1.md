
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


# Functions Part 2: Advanced Concepts

Welcome to the second part of our deep dive into JavaScript functions! In this lesson, we'll explore more advanced concepts that will help you write cleaner, more efficient, and more robust code. We'll cover scope, variable shadowing, arrow functions, default parameters, and the powerful spread and rest parameters.

---

## Understanding Scope

Scope determines the accessibility of variables, objects, and functions in different parts of your code. JavaScript has two main types of scope: **global scope** and **local scope** (function scope and block scope).

<!-- element class="fragment" -->

### Global Scope

Variables declared in the global scope are accessible from anywhere in your code.

```javascript
const globalVar = "I'm global!";

function accessGlobal() {
  console.log(globalVar); // Accessible
}

accessGlobal();
```

---

## Local Scope: Function and Block

### Function Scope

Variables declared inside a function are only accessible within that function.

```javascript
function functionScopeExample() {
  const functionVar = "I'm local to the function!";
  console.log(functionVar);
}

functionScopeExample();
// console.log(functionVar); // Error: functionVar is not defined
```

<!-- element class="fragment" -->

### Block Scope (let and const)

Variables declared with `let` and `const` inside a block (e.g., `if` statements, `for` loops, or just `{}`) are only accessible within that block.

```javascript
if (true) {
  let blockVar = "I'm local to the block!";
  console.log(blockVar);
}
// console.log(blockVar); // Error: blockVar is not defined
```

---

## Variable Shadowing

Variable shadowing occurs when a variable declared in an inner scope has the same name as a variable in an outer scope. The inner variable "shadows" or hides the outer variable within its scope.

<!-- element class="fragment" -->

### Example of Shadowing

```javascript
let message = "Global message";

function showMessage() {
  let message = "Local message"; // This shadows the global message
  console.log(message); // Outputs: "Local message"
}

showMessage();
console.log(message); // Outputs: "Global message"
```

---

## Arrow Functions (`=>`)

Arrow functions provide a more concise syntax for writing function expressions. They also have a different way of handling the `this` keyword, which is lexically bound.

<!-- element class="fragment" -->

### Basic Syntax

```javascript
// Function expression
const add = function(a, b) {
  return a + b;
};

// Arrow function
const addArrow = (a, b) => a + b;

console.log(add(2, 3));
console.log(addArrow(2, 3));
```

<!-- element class="fragment" -->

---

## Default Parameters

Default parameters allow you to initialize a function parameter with a default value if no value or `undefined` is passed for that parameter.

<!-- element class="fragment" -->

### Example

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet("Bob");    // Outputs: "Hello, Bob!"
greet();         // Outputs: "Hello, Guest!"
greet(undefined); // Outputs: "Hello, Guest!"
greet(null);     // Outputs: "Hello, null!" (null is a value)
```

---

## Spread (`...`) and Rest (`...`) Parameters

Both spread and rest parameters use the `...` syntax, but they serve different purposes based on where they are used.

<!-- element class="fragment" -->

### Rest Parameters (in function definitions)

Rest parameters allow a function to accept an indefinite number of arguments as an array. They must be the last parameter in a function definition.

```javascript
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3));       // Outputs: 6
console.log(sumAll(10, 20, 30, 40)); // Outputs: 100
```

<!-- element class="fragment" -->

### Spread Syntax (in function calls, array literals, object literals)

Spread syntax expands an iterable (like an array or string) into individual elements. It's useful for copying arrays, concatenating arrays, and passing array elements as arguments to functions.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Copy and add elements
console.log(arr2); // [1, 2, 3, 4, 5]

function display(a, b, c) {
  console.log(a, b, c);
}

display(...arr1); // Pass array elements as arguments

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // Copy and add properties
console.log(obj2); // { a: 1, b: 2, c: 3 }
```

---

## Conclusion

By mastering scope, understanding the nuances of arrow functions, and effectively using default, rest, and spread parameters, you gain powerful tools to write more expressive and maintainable JavaScript code. These concepts are fundamental for advanced programming patterns and will be invaluable as you build more complex applications. In the next lesson, we'll shift our focus to advanced object manipulation.