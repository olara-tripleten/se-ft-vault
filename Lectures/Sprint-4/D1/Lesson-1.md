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

<img src="../../../tt-logo.svg" style="width: 150px; height: 40px;" />
# Javascript 101: Data types and variables

---

## How to add Javascript to a website

There are two primary ways to add Javascript to a website:

- **Inline Javascript:** You can add Javascript code directly to your HTML file using the `<script>` tag. This is useful for small scripts or for testing purposes. However, for larger applications, it's best to keep your Javascript code separate from your HTML. 
- **External Javascript file:** You can create a separate `.js` file and link it to your HTML file using the `<script>` tag with the `src` attribute. This is the recommended approach for most projects as it promotes code organization and reusability.
### Inline Javascript Example: <!-- element class="fragment" -->
```html
<script>
  // Your Javascript code goes here
  console.log("Hello from inline Javascript!");
</script>
```
<!-- element class="fragment" -->

### External Javascript Example: <!-- element class="fragment" -->
```html
<!-- In your HTML file -->
<script src="my-script.js"></script>

<!-- In my-script.js -->
console.log("Hello from an external Javascript file!");
```
<!-- element class="fragment" -->

---

## Displaying information with Javascript

There are several ways to display information using Javascript:

- `document.write()`: This method writes directly to the HTML document. It's generally not recommended for modern web development as it can overwrite existing content. It is considered a legacy feature and should be avoided in most cases.
- `console.log()`: This method writes to the browser's console, which is a useful tool for debugging and development. You can open the console in your browser's developer tools to view the output.
- `alert()`: This method displays a pop-up dialog box with a message to the user. It can be useful for displaying important information or for debugging, but it can also be intrusive to the user experience.
- `innerHTML`: This property allows you to get or set the HTML content of an element. You can use it to dynamically change the content of your web page.

<!-- element class="fragment" -->

### `document.write()` <!-- element class="fragment" -->
```javascript
document.write("<h1>Hello, World!</h1>");
```

<!-- element class="fragment" -->

### `console.log()` <!-- element class="fragment" -->
```javascript
console.log("This message will appear in the browser's console.");
```
<!-- element class="fragment" -->

---

## Comments

Comments are used to explain your code and make it more readable. They are ignored by the Javascript engine.

- **Single-line comments:** Start with `//`. Anything after `//` on the same line will be treated as a comment.
- **Multi-line comments:** Start with `/*` and end with `*/`. Everything between `/*` and `*/` will be treated as a comment, even if it spans multiple lines.

<!-- element class="fragment" -->

### Single-line comment example: <!-- element class="fragment" -->
```javascript
// This is a single-line comment
let x = 5; // This is another single-line comment
```

<!-- element class="fragment" -->

### Multi-line comment example: <!-- element class="fragment" -->
```javascript
/*
This is a multi-line comment.
It can span multiple lines.
*/
let y = 10;
```
<!-- element class="fragment" -->

---

## Numbers and arithmetic operators

Javascript has a single `Number` type for both integers and floating-point numbers. You can perform arithmetic operations using the following operators:

- `+` (addition)
- `-` (subtraction)
- `*` (multiplication)
- `/` (division)
- `%` (modulo - remainder of a division)
- `**` (exponentiation)

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->
```javascript
let x = 10;
let y = 5;

console.log(x + y); // 15
console.log(x - y); // 5
console.log(x * y); // 50
console.log(x / y); // 2
console.log(x % y); // 0
console.log(2 ** 3); // 8
```
<!-- element class="fragment" -->

---

## Strings and working with strings

Strings are used to represent text. They are enclosed in single or double quotes. You can also use backticks to create template literals, which allow for multi-line strings and string interpolation.

You can concatenate strings using the `+` operator.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->
```javascript
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
console.log(fullName); // "John Doe"

let greeting = `Hello, ${fullName}!`;
console.log(greeting); // "Hello, John Doe!"
```

<!-- element class="fragment" -->

---
### String methods:
Javascript provides many useful methods for working with strings, such as:

- `length`: Returns the length of a string.
- `toUpperCase()`: Converts a string to uppercase.
- `toLowerCase()`: Converts a string to lowercase.
- `indexOf()`: Returns the index of the first occurrence of a specified value in a string.
- `slice()`: Extracts a part of a string and returns the extracted part in a new string.
- `replace()`: Replaces a specified value with another value in a string.

<!-- element class="fragment" -->

---

## Primitive data types

Javascript has several primitive data types:

- `String`: Represents text.
- `Number`: Represents numbers.
- `Boolean`: Represents `true` or `false`.
- `Undefined`: Represents an uninitialized variable.
- `Null`: Represents the intentional absence of any object value.
- `Symbol`: Represents a unique identifier.
- `BigInt`: Represents integers of arbitrary length.

<!-- element class="fragment" -->

---

## Variables

Variables are used to store data. You can declare variables using the `var`, `let`, or `const` keywords.

- `var`: The old way of declaring variables. It has function scope, which means it is only available within the function it is declared in. It is also hoisted, which means that the declaration is moved to the top of the scope before the code is executed. This can lead to unexpected behavior and is generally not recommended.
- `let`: The modern way of declaring variables that can be reassigned. It has block scope, which means it is only available within the block it is declared in (e.g., inside an `if` statement or a `for` loop). It is not hoisted.
- `const`: The modern way of declaring variables that cannot be reassigned. It also has block scope and is not hoisted. You must assign a value to a `const` variable when you declare it.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->
```javascript
let age = 30;
const name = "John";

age = 31; // This is allowed
// name = "Jane"; // This will cause an error
```
<!-- element class="fragment" -->
---

## null, undefined, NaN

- `null`: Represents the intentional absence of any object value. It is a primitive value that is assigned to a variable to indicate that it has no value.
- `undefined`: Represents an uninitialized variable. It is the default value of a variable that has been declared but not assigned a value.
- `NaN`: Represents "Not a Number". It's a special value that indicates that a value is not a legal number. It is often the result of an invalid mathematical operation, such as dividing a string by a number.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->
```javascript
let x;
console.log(x); // undefined

let y = null;
console.log(y); // null

console.log("hello" / 5); // NaN
```
<!-- element class="fragment" -->

---
![[tt-logo.svg]]