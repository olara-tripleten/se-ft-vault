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

# Javascript Program Logic

---

## Strings

Strings are a fundamental data type in Javascript, used to represent text. You can create strings using single quotes, double quotes, or backticks. Backticks, also known as template literals, provide additional features like multi-line strings and string interpolation, which allows you to embed expressions directly within the string.

<!-- element class="fragment" -->

### Methods of searching strings for characters

- `indexOf()`: Returns the index of the first occurrence of a specified value in a string. If the value is not found, it returns -1.
- `lastIndexOf()`: Returns the index of the last occurrence of a specified value in a string. If the value is not found, it returns -1.
- `search()`: Searches a string for a specified value and returns the position of the match. This method can also take a regular expression as an argument.
- `includes()`: Returns true if a string contains a specified value, and false otherwise. This method is case-sensitive.

<!-- element class="fragment" -->

### Methods for converting strings

- `toUpperCase()`: Converts a string to uppercase.
- `toLowerCase()`: Converts a string to lowercase.
- `trim()`: Removes whitespace from both ends of a string. This is useful for cleaning up user input.
- `split()`: Splits a string into an array of substrings, based on a specified separator.

<!-- element class="fragment" -->

---

## Numbers and special numeric values

Javascript has only one type of number. Numbers can be written with or without decimals. Javascript uses the IEEE 754 standard for floating-point numbers, which can sometimes lead to unexpected results with decimal arithmetic.

<!-- element class="fragment" -->

### Special Numeric Values

- `NaN`: Represents "Not a Number". This value is returned when a mathematical operation fails or when trying to convert a non-numeric string to a number.
- `Infinity`: Represents a value that is greater than any other number. It is the result of dividing a non-zero number by zero.
- `-Infinity`: Represents a value that is less than any other number. It is the result of dividing a negative number by zero.

<!-- element class="fragment" -->

### Methods for working with numbers <!-- element class="fragment" -->

- `toString()`: Returns a number as a string. You can also pass a radix (e.g., 2 for binary, 16 for hexadecimal) to convert the number to a different base.
- `toFixed()`: Returns a string, with the number written with a specified number of decimals. This is useful for formatting currency values.
- `toPrecision()`: Returns a string, with a number written with a specified length. This can be useful for scientific notation.
- `parseInt()`: Parses a string and returns an integer. It will stop parsing when it encounters a non-numeric character.
- `parseFloat()`: Parses a string and returns a floating-point number.
<!-- element class="fragment" -->
---

## Logical Operators(NOT, OR, AND)

- `!`: NOT - Inverts the boolean value of its operand.
- `||`: OR - Returns the first truthy value it encounters, or the last falsy value if all operands are falsy.
- `&&`: AND - Returns the first falsy value it encounters, or the last truthy value if all operands are truthy.

Logical operators are used to determine the logic between variables or values. They are often used in conditional statements to create more complex conditions.
<!-- element class="fragment" -->

---

## The Switch-Case Statement

The `switch` statement is used to perform different actions based on different conditions. It is a good alternative to a long `if...else if...else` statement, especially when you have a single expression that you want to compare against multiple possible values. The `break` statement is crucial to prevent "fall-through," where the code would continue to execute the next case.

<!-- element class="fragment" -->

### Syntax: <!-- element class="fragment" -->
```javascript
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```
<!-- element class="fragment" -->

---

## The Ternary Operator

The ternary operator is a shorthand for an `if...else` statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false. It is a concise way to write simple conditional statements, but it can become difficult to read if it is nested or used for complex logic.

<!-- element class="fragment" -->

### Syntax: <!-- element class="fragment" -->
```javascript
condition ? value_if_true : value_if_false
```
<!-- element class="fragment" -->

---
![[tt-logo.svg]]