
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


# Objects Part 2: Advanced Object Manipulation

Welcome to the second part of our exploration into JavaScript objects! Building on your existing knowledge, this lesson will delve into more advanced techniques for accessing, modifying, and iterating over object properties. We'll also clarify the crucial concept of value versus reference in JavaScript.

---

## Objects Review

Before we dive deeper, let's quickly review the basics of JavaScript objects. Objects are collections of key-value pairs, where keys are strings (or Symbols) and values can be any data type, including other objects or functions.

<!-- element class="fragment" -->

### Creating Objects

```javascript
// Object literal syntax
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false
};

// Using the Object constructor (less common)
const car = new Object();
car.make = "Toyota";
car.model = "Camry";
```

---

## Accessing Nested Properties

Objects can contain other objects, leading to nested structures. You can access properties at any level using dot notation or bracket notation.

<!-- element class="fragment" -->

### Example

```javascript
const company = {
  name: "Tech Solutions",
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345"
  },
  departments: [
    { name: "Engineering", employees: 50 },
    { name: "Marketing", employees: 20 }
  ]
};

console.log(company.address.city); // "Anytown"
console.log(company["departments"][0].name); // "Engineering"
```

---

## Adding and Modifying Properties

You can add new properties to an object or modify existing ones simply by assigning a value to a key.

<!-- element class="fragment" -->

### Adding Properties

```javascript
const user = {};
user.name = "Alice";
user["email"] = "alice@example.com";
console.log(user); // { name: "Alice", email: "alice@example.com" }
```

<!-- element class="fragment" -->

### Modifying Properties

```javascript
user.name = "Alicia";
console.log(user.name); // "Alicia"
```

---

## Shorthand Property Notation

When a variable name is the same as the object property name you want to create, you can use shorthand property notation.

<!-- element class="fragment" -->

### Example

```javascript
const name = "Bob";
const age = 25;

const person = {
  name, // Equivalent to name: name
  age   // Equivalent to age: age
};

console.log(person); // { name: "Bob", age: 25 }
```

---

## Computed Property Keys

You can use an expression in square brackets `[]` to define a property key. This is useful when the property name is determined at runtime.

<!-- element class="fragment" -->

### Example

```javascript
const key = "dynamicProperty";
const value = "This is a dynamic value";

const myObject = {
  [key]: value,
  ['prefix' + 'Name']: 'Combined Name'
};

console.log(myObject); // { dynamicProperty: "This is a dynamic value", prefixName: "Combined Name" }
```

---

## The `delete` Operator

The `delete` operator removes a property from an object. It returns `true` if the property was successfully deleted, and `false` otherwise.

<!-- element class="fragment" -->

### Example

```javascript
const product = {
  id: 1,
  name: "Laptop",
  price: 1200
};

console.log(product.price); // 1200
delete product.price;
console.log(product.price); // undefined
console.log(product); // { id: 1, name: "Laptop" }
```

---

## Checking if a Property Exists

There are several ways to check if a property exists on an object.

<!-- element class="fragment" -->

### `in` Operator

Checks if a property exists on an object or its prototype chain.

```javascript
const car = { make: "Honda", model: "Civic" };
console.log("make" in car);    // true
console.log("year" in car);    // false
```

<!-- element class="fragment" -->

---
### `hasOwnProperty()` Method

Checks if a property exists directly on the object (not on its prototype chain).

```javascript
console.log(car.hasOwnProperty("make")); // true
console.log(car.hasOwnProperty("toString")); // false (inherited from prototype)
```

<!-- element class="fragment" -->

---
### Checking for `undefined`

Be cautious with this, as a property might exist but have an `undefined` value.

```javascript
const obj = { a: undefined, b: 10 };
console.log(obj.a === undefined); // true
console.log(obj.c === undefined); // true (but c doesn't exist)
```

---

## Iterating Over Properties of an Object

You can iterate over an object's properties using various methods.

<!-- element class="fragment" -->

### `for...in` Loop

Iterates over enumerable properties, including those on the prototype chain.

```javascript
const book = { title: "The Great Gatsby", author: "F. Scott Fitzgerald" };
for (const key in book) {
  console.log(`${key}: ${book[key]}`);
}
// Output:
// title: The Great Gatsby
// author: F. Scott Fitzgerald
```

<!-- element class="fragment" -->
---
### `Object.keys()`, `Object.values()`, `Object.entries()`

These methods return an array of a given object's own enumerable string-keyed property names, values, or [key, value] pairs, respectively.

```javascript
console.log(Object.keys(book));   // ["title", "author"]
console.log(Object.values(book)); // ["The Great Gatsby", "F. Scott Fitzgerald"]
console.log(Object.entries(book)); // [["title", "The Great Gatsby"], ["author", "F. Scott Fitzgerald"]]

// Using with for...of
for (const [key, value] of Object.entries(book)) {
  console.log(`${key}: ${value}`);
}
```

---

## Understanding Value and Reference in JavaScript

This is a fundamental concept in JavaScript. Primitive values (strings, numbers, booleans, null, undefined, Symbol, BigInt) are passed by value, while objects (including arrays and functions) are passed by reference.

<!-- element class="fragment" -->

---
### Pass by Value (Primitives)

When you assign a primitive value to a new variable or pass it to a function, a copy of the value is made.

```javascript
let a = 10;
let b = a; // b gets a copy of the value of a
b = 20;
console.log(a); // 10 (a is unchanged)
console.log(b); // 20
```

<!-- element class="fragment" -->

---
### Pass by Reference (Objects)

When you assign an object to a new variable or pass it to a function, the reference (memory address) to the object is copied, not the object itself. Both variables then point to the same object in memory.

```javascript
let obj1 = { value: 10 };
let obj2 = obj1; // obj2 gets a copy of the reference to obj1
obj2.value = 20;
console.log(obj1.value); // 20 (obj1 is changed because both refer to the same object)
console.log(obj2.value); // 20

// Function example
function modifyObject(obj) {
  obj.newValue = "Modified";
}

const myObj = {};
modifyObject(myObj);
console.log(myObj); // { newValue: "Modified" }
```

<!-- element class="fragment" -->

---
### Copying Objects (Deep vs. Shallow)

To create a true copy of an object (not just a reference), you need to perform a shallow or deep copy.

-   **Shallow Copy:** Copies top-level properties. Nested objects are still copied by reference.
    ```javascript
    const original = { a: 1, b: { c: 2 } };
    const shallowCopy = { ...original }; // Using spread syntax
    shallowCopy.a = 10;
    shallowCopy.b.c = 20;
    console.log(original.a); // 1
    console.log(original.b.c); // 20 (nested object still referenced)
    ```

-   **Deep Copy:** Creates a completely independent copy, including all nested objects.
    ```javascript
    // Simple deep copy (works for JSON-serializable objects)
    const originalDeep = { a: 1, b: { c: 2 } };
    const deepCopy = JSON.parse(JSON.stringify(originalDeep));
    deepCopy.b.c = 20;
    console.log(originalDeep.b.c); // 2 (original is unchanged)
    ```

---

## Conclusion

Mastering object manipulation and understanding the distinction between pass-by-value and pass-by-reference are critical skills in JavaScript. These concepts will empower you to work effectively with complex data structures and avoid common pitfalls. In our next lesson, we'll shift gears and begin our journey into dynamically creating and adding elements to the DOM, bringing your web pages to life!
