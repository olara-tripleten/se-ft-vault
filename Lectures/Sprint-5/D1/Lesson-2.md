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

# Debugging Javascript

---

## Debugging Tools: Console

The browser's console is an essential tool for debugging Javascript. You can use it to log messages, inspect variables, and execute code. To open the console, right-click on the page and select "Inspect", then click on the "Console" tab. The console provides a wealth of information and tools to help you find and fix problems in your code. It's your first line of defense when something goes wrong.

<!-- element class="fragment" -->

### `console.log()`

The `console.log()` method is the most common way to log messages to the console. You can pass any type of data to this method, including strings, numbers, objects, and arrays. This is incredibly useful for tracking the value of variables at different points in your code's execution.

<!-- element class="fragment" -->

### `console.error()`

The `console.error()` method is used to log error messages to the console. Error messages are typically displayed in red and include a stack trace, which can help you identify the source of the error. This is a great way to distinguish critical errors from other log messages.

<!-- element class="fragment" -->

### `console.warn()`

The `console.warn()` method is used to log warning messages to the console. Warning messages are typically displayed in yellow. These are useful for highlighting potential issues that don't necessarily break your application but should be addressed.

---

## How to Read errors

When an error occurs in your Javascript code, the browser will display an error message in the console. The error message typically includes the following information:

- The type of error (e.g., `TypeError`, `ReferenceError`). This tells you the category of the error.
- A description of the error. This provides a more specific message about what went wrong.
- The file name and line number where the error occurred. This is a direct link to the problematic code.
- A stack trace, which shows the sequence of function calls that led to the error. This helps you trace the execution path and understand the context in which the error occurred.

By carefully reading the error message, you can often identify the cause of the error and fix it. Don't be intimidated by error messages; they are your friends in the debugging process.

---

## Error types

There are several types of errors that can occur in Javascript:

- `SyntaxError`: Occurs when the code is not written correctly. This is often due to a typo, a missing bracket, or some other violation of the Javascript syntax rules.
- `ReferenceError`: Occurs when you try to use a variable that has not been declared. This is a common error when you misspell a variable name or try to access a variable that is out of scope.
- `TypeError`: Occurs when you try to perform an operation on a value of the wrong type. For example, trying to call a method on a `null` or `undefined` value.
- `RangeError`: Occurs when you try to use a number that is outside the allowed range. For example, trying to create an array with a negative length.
- `URIError`: Occurs when you use an invalid URI. This can happen when you are working with functions like `encodeURI()` or `decodeURI()`.

---

## The debugger

The `debugger` statement can be used to pause the execution of your code at a specific point. When the browser encounters a `debugger` statement, it will open the debugger and allow you to inspect the state of your application. You can then step through the code line by line, inspect variables, and execute code in the console. This is an incredibly powerful tool for understanding the flow of your program and identifying the exact point where something goes wrong. You can set breakpoints directly in the browser's developer tools without modifying your code, which is often a more convenient approach.

<!-- element class="fragment" -->

### Example:
```javascript
function myFunction() {
  let x = 10;
  debugger; // Pause the execution here
  console.log(x);
}
```

---

## Hypothesis-Driven Debugging

Hypothesis-driven debugging is a systematic approach to debugging that involves the following steps:

1. **Formulate a hypothesis:** Based on the error message and your understanding of the code, formulate a hypothesis about the cause of the error. What do you think is going wrong?
2. **Test the hypothesis:** Design an experiment to test your hypothesis. This may involve adding `console.log()` statements to check the value of variables, using the debugger to step through the code, or modifying the code to see if it fixes the problem.
3. **Analyze the results:** Analyze the results of your experiment to determine if your hypothesis was correct. If it was, you can fix the error. If not, you can formulate a new hypothesis and repeat the process. This iterative process of hypothesizing, testing, and analyzing will eventually lead you to the root cause of the bug.

---![[tt-logo.svg]]