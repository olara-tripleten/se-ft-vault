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

# Javascript Arrays and Objects

---

## What is an array?

An array is a special variable, which can hold more than one value at a time. If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

```javascript
let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
```

However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300? The solution is an array! An array can hold many values under a single name, and you can access the values by referring to an index number.

---

## Creating arrays

You can create an array in two ways:

- Using an array literal: `let cars = ["Saab", "Volvo", "BMW"];` This is the most common way to create an array.
- Using the `new Array()` constructor: `let cars = new Array("Saab", "Volvo", "BMW");` This is less common, but it can be useful if you want to create an array of a specific size.

<!-- element class="fragment" -->

For simplicity, readability and execution speed, use the array literal method.
<!-- element class="fragment" -->

---

## Accessing array elements

You access an array element by referring to the index number. Array indexes are 0-based, which means the first item is `[0]`, second is `[1]`, and so on.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->
```javascript
let cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
console.log(cars[2]); // BMW
```
<!-- element class="fragment" -->

---

## Iterating array

You can loop through the array elements with the `for` loop. You can also use the `forEach()` method, which executes a provided function once for each array element.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->
```javascript
let cars = ["Saab", "Volvo", "BMW"];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

cars.forEach(function(car) {
  console.log(car);
});
```
 <!-- element class="fragment" -->
---

## Adding and removing elements from an array

- `push()`: Adds a new element to an array (at the end).
- `pop()`: Removes the last element from an array.
- `shift()`: Removes the first array element and "shifts" all other elements to a lower index.
- `unshift()`: Adds a new element to an array (at the beginning), and "unshifts" older elements.
- `splice()`: Adds/Removes items to/from an array.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->
```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi"); // ["Banana", "Orange", "Apple", "Mango", "Kiwi"]
fruits.pop(); // ["Banana", "Orange", "Apple"]
fruits.shift(); // ["Orange", "Apple"]
fruits.unshift("Lemon"); // ["Lemon", "Orange", "Apple"]
fruits.splice(1, 0, "Grape"); // ["Lemon", "Grape", "Orange", "Apple"]
```
<!-- element class="fragment" -->

---

## What are javascript Objects?

In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics. An object is a collection of key-value pairs. The key is a string (also called a property name), and the value can be anything, including other objects.

---

## Creating Objects

You can create an object in two ways:

- Using an object literal: `let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};` This is the most common way to create an object.
- Using the `new Object()` constructor: `let person = new Object(); person.firstName = "John"; person.lastName = "Doe"; person.age = 50; person.eyeColor = "blue";` This is less common, but it can be useful if you want to create an object with a specific prototype.

<!-- element class="fragment" -->

For simplicity, readability and execution speed, use the object literal method.

---

## Accessing Object properties

You can access object properties in two ways:

- `objectName.propertyName` (dot notation)
- `objectName["propertyName"]` (bracket notation)

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->
```javascript
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person.firstName); // John
console.log(person["lastName"]); // Doe
```
<!-- element class="fragment" -->

---

## Object Methods

Objects can also have methods. Methods are actions that can be performed on objects. Methods are stored in properties as function definitions.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->
```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName()); // "John Doe"
```
<!-- element class="fragment" -->
---
![[tt-logo.svg]]