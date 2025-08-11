
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

# Destructuring Syntax: Unpacking Data with Ease

Today, we'll explore destructuring assignment, a powerful and convenient JavaScript syntax that makes it easier to unpack values from arrays and properties from objects into distinct variables. This feature significantly improves code readability and efficiency, especially when working with complex data structures.

---

## What is Destructuring Assignment?

Destructuring assignment is a special syntax that allows you to "unpack" values from arrays, or properties from objects, into distinct variables. It provides a more concise way to extract data compared to traditional property access.

<!-- element class="fragment" -->

### Why Use Destructuring?
<!-- element class="fragment" -->

-   **Readability:** Makes code cleaner and easier to understand.
-   **Conciseness:** Reduces the amount of code needed to extract data.
-   **Efficiency:** Can simplify function parameter handling and data manipulation.

<!-- element class="fragment" -->

---

## Object Destructuring

Object destructuring allows you to extract properties from objects using their property names.

<!-- element class="fragment" -->

---
### Basic Object Destructuring

```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
};

// Traditional way
// const firstName = person.firstName;
// const age = person.age;

// With object destructuring
const { firstName, age } = person;

console.log(firstName); // 'John'
console.log(age);       // 30
```

<!-- element class="fragment" -->
---
### Renaming Variables

You can assign extracted properties to variables with different names.
<!-- element class="fragment" -->
```javascript
const { firstName: fName, lastName: lName } = person;

console.log(fName); // 'John'
console.log(lName); // 'Doe'
```

<!-- element class="fragment" -->

---
### Default Values
<!-- element class="fragment" -->
You can provide default values for properties that might not exist on the object.
<!-- element class="fragment" -->
```javascript
const { city = 'Unknown', age } = person;

console.log(city); // 'Unknown'
console.log(age);  // 30
```

<!-- element class="fragment" -->
---
### Nested Object Destructuring

You can destructure nested objects as well.

```javascript
const user = {
  id: 1,
  name: 'Alice',
  address: {
    street: '123 Main St',
    zip: '90210'
  }
};

const { name, address: { street } } = user;

console.log(name);   // 'Alice'
console.log(street); // '123 Main St'
```

---

## Array Destructuring

Array destructuring allows you to extract values from arrays based on their position.

<!-- element class="fragment" -->

### Basic Array Destructuring <!-- element class="fragment" -->

```javascript
const colors = ['red', 'green', 'blue'];

// Traditional way
// const firstColor = colors[0];
// const secondColor = colors[1];

// With array destructuring
const [firstColor, secondColor] = colors;

console.log(firstColor);  // 'red'
console.log(secondColor); // 'green'
```

<!-- element class="fragment" -->

---
### Skipping Elements

You can skip elements by leaving empty commas.

```javascript
const [,, thirdColor] = colors;
console.log(thirdColor); // 'blue'
```

<!-- element class="fragment" -->

---
### Rest Pattern with Array Destructuring

Use the rest pattern (`...`) to collect the remaining elements into a new array.

```javascript
const [first, ...restOfColors] = colors;

console.log(first);        // 'red'
console.log(restOfColors); // ['green', 'blue']
```

---

## Argument Destructuring and Default Values

Destructuring is particularly useful when defining function parameters, allowing you to extract specific properties from an object or elements from an array passed as an argument.

<!-- element class="fragment" -->

---
### Destructuring Object Arguments
<!-- element class="fragment" -->

```javascript
function displayUserDetails({ name, age, city = 'Unknown' }) {
  console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

const user1 = { name: 'Alice', age: 28 };
const user2 = { name: 'Bob', age: 35, city: 'New York' };

displayUserDetails(user1); // Name: Alice, Age: 28, City: Unknown
displayUserDetails(user2); // Name: Bob, Age: 35, City: New York
```

<!-- element class="fragment" -->
---
### Destructuring Array Arguments

```javascript
function printCoordinates([x, y]) {
  console.log(`X: ${x}, Y: ${y}`);
}

const point = [10, 20];
printCoordinates(point); // X: 10, Y: 20
```

---

## Conclusion

Destructuring assignment is a powerful and elegant feature in modern JavaScript that simplifies data extraction from objects and arrays. By incorporating object and array destructuring, along with default values and argument destructuring, you can write more concise, readable, and maintainable code. This concludes our Sprint 6 journey into dynamic DOM manipulation and advanced JavaScript features. You now have a solid foundation to build interactive and data-driven web applications!

---

# Spots Stage 7