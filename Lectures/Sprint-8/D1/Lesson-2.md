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

# Advanced Javascript: Asynchronous Programming

---

## What does asynchronous mean?

In programming, "asynchronous" refers to events that happen outside the main program flow. Imagine you're a chef in a kitchen. A synchronous approach would be to cook one dish from start to finish before even starting the next one. An asynchronous approach is like putting a dish in the oven (a long-running task) and then starting to prepare the next dish while the first one cooks. You don't wait for the oven; you just get notified when it's done.

In JavaScript, this means your program can initiate a task that takes time (like fetching data from a server) and then continue executing other code without waiting for the first task to complete. This keeps your application responsive, especially the user interface.

<!-- element class="fragment" -->

---

## Synchronous vs. Asynchronous Operations

JavaScript operations can be categorized as either synchronous (blocking) or asynchronous (non-blocking).

- **Synchronous:** A synchronous operation blocks further execution until it has completed. Most basic operations in JavaScript are synchronous. For example, `console.log('Hello');` will complete before the next line of code is executed. If a synchronous task takes a long time, the entire program (and the browser UI) will freeze.

<!-- element class="fragment" -->

- **Asynchronous:** An asynchronous operation does not block further execution. It starts the operation and then allows the program to continue. When the operation is finished, it notifies the program, usually via a callback function, a promise, or an async/await structure. Examples include `setTimeout`, network requests (`fetch`), and file operations in Node.js.

<!-- element class="fragment" -->

---

## The JavaScript Runtime Environment

To understand how JavaScript handles asynchronous operations, we need to look at its runtime environment, which includes:

- **The Call Stack:** A LIFO (Last-In, First-Out) data structure that tracks which function is currently being executed. When a function is called, it's pushed onto the stack. When it returns, it's popped off.

<!-- element class="fragment" -->

- **Web APIs / C++ APIs:** These are APIs provided by the browser (or Node.js) that handle asynchronous tasks like `setTimeout`, DOM events, and `fetch` requests. They run outside the JavaScript engine.

<!-- element class="fragment" -->

- **The Callback Queue (or Message Queue):** When an asynchronous operation completes, its callback function is placed in this queue, waiting to be executed.

<!-- element class="fragment" -->

- **The Event Loop:** This is the core mechanism. The event loop's job is to constantly monitor the call stack and the callback queue. If the call stack is empty, it takes the first function from the queue and pushes it onto the call stack for execution.

<!-- element class="fragment" -->

---

## The Event Loop in Action

Let's trace a simple example:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Callback executed");
}, 2000);

console.log("End");
```

1.  `console.log('Start')` is pushed to the call stack, prints "Start", and is popped off.

<!-- element class="fragment" -->

2.  `setTimeout` is pushed to the call stack. It's a Web API, so the browser's timer API is kicked off to wait for 2 seconds. `setTimeout` itself finishes immediately and is popped off the stack.

<!-- element class="fragment" -->

3.  `console.log('End')` is pushed to the call stack, prints "End", and is popped off.

<!-- element class="fragment" -->

4.  The call stack is now empty.

<!-- element class="fragment" -->

5.  After 2 seconds, the timer completes, and the callback function `() => { console.log('Callback executed'); }` is placed in the callback queue.

<!-- element class="fragment" -->

6.  The event loop sees the call stack is empty and there's a function in the queue. It moves the callback to the call stack.

<!-- element class="fragment" -->

7.  The callback is executed, `console.log('Callback executed')` is pushed to the stack, prints "Callback executed", and is popped off. The callback function then returns and is popped off. The program is now finished.

<!-- element class="fragment" -->

---

## Why Do We Need Asynchronous Operations?

Imagine a web page that needs to fetch a large image from a server. If this were a synchronous operation, the entire user interface would freeze while the image downloads. The user wouldn't be able to click buttons, scroll, or interact with the page in any way.

Asynchronous operations are the solution. They allow the application to remain responsive to the user while long-running tasks happen in the background. This is essential for:

<!-- element class="fragment" -->

- **A smooth user experience:** No freezing or unresponsiveness.

<!-- element class="fragment" -->

- **Performance:** Allows multiple operations (like fetching data, rendering UI, and responding to user input) to be in progress concurrently.

<!-- element class="fragment" -->

- **Efficiency:** The program isn't sitting idle waiting for tasks to complete.

<!-- element class="fragment" -->

---

## Introduction to Promises

Callbacks work, but they can lead to "Callback Hell" – deeply nested callbacks that are hard to read and maintain. Promises were introduced in ES6 to provide a cleaner way to handle asynchronous operations.

A `Promise` is an object that represents the eventual completion (or failure) of an asynchronous operation. It's a placeholder for a value that will be available later.

A promise can be in one of three states:

<!-- element class="fragment" -->

- **Pending:** The initial state. The operation has not yet completed.

<!-- element class="fragment" -->

- **Fulfilled (or Resolved):** The operation completed successfully, and the promise now has a resulting value.

<!-- element class="fragment" -->

- **Rejected:** The operation failed, and the promise contains a reason for the failure (an error).

<!-- element class="fragment" -->

---

## Working with Promises

You can create a promise using the `Promise` constructor, which takes a function with two arguments: `resolve` and `reject`.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation here
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("The operation was successful!");
    } else {
      reject("The operation failed.");
    }
  }, 2000);
});
```

<!-- element class="fragment" -->
---
To consume a promise, you use the `.then()` and `.catch()` methods.

<!-- element class="fragment" -->

- `.then(onFulfilled, onRejected)`: Attaches callbacks for the fulfilled and rejected cases. You can chain `.then()` calls.

<!-- element class="fragment" -->

- `.catch(onRejected)`: A shorthand for `.then(null, onRejected)`, used for error handling.

<!-- element class="fragment" -->

```javascript
myPromise
  .then((result) => {
    console.log(result); // 'The operation was successful!'
  })
  .catch((error) => {
    console.error(error); // 'The operation failed.'
  });
```

Promises make asynchronous code more readable, manageable, and easier to reason about than traditional callbacks.
