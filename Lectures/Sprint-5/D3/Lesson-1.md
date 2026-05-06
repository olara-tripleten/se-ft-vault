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

# Array methods part 2

---

## Understanding callback functions in array methods

A callback function is a function that is passed as an argument to another function. Many of the array methods in Javascript take a callback function as an argument. This allows you to customize the behavior of the array method. A callback function is executed for each element of the array, and it can take up to three arguments: the current element, the index of the current element, and the array itself. This powerful feature allows for a more functional and declarative style of programming, making your code more concise and readable.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->
```javascript
const numbers = [1, 2, 3];

function myCallback(number, index, array) {
  console.log(`Element: ${number}, Index: ${index}, Array: ${array}`);
}

numbers.forEach(myCallback);
```
<!-- element class="fragment" -->

---

## Filtering arrays(filter)

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function. The callback function for `filter()` should return a boolean value. If the callback returns `true`, the element is included in the new array; otherwise, it is excluded. This method is perfect for situations where you need to select a subset of an array based on a specific condition.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->
```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(number => {
  return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4]
```
<!-- element class="fragment" -->

---

## Checking array elements(some,every, find)

- `some()`: Checks if at least one element in the array passes the test implemented by the provided function. It returns `true` as soon as it finds a matching element and stops iterating through the array.
- `every()`: Checks if all elements in the array pass the test implemented by the provided function. It returns `false` as soon as it finds an element that does not match and stops iterating.
- `find()`: Returns the value of the first element in the array that satisfies the provided testing function. If no element is found, it returns `undefined`.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->
```javascript
const numbers = [1, 2, 3, 4, 5];

const hasEvenNumber = numbers.some(number => {
  return number % 2 === 0;
});
console.log(hasEvenNumber); // true

const allEvenNumbers = numbers.every(number => {
  return number % 2 === 0;
});
console.log(allEvenNumbers); // false

const firstNumberGreaterThan3 = numbers.find(number => {
  return number > 3;
});
console.log(firstNumberGreaterThan3); // 4
```
<!-- element class="fragment" -->

---

## Reducing arrays

The `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. The reducer function takes four arguments: the accumulator, the current value, the current index, and the source array. The accumulator is the value that is returned by the reducer function in the previous iteration. The `reduce()` method is incredibly versatile and can be used to perform a wide range of operations, such as summing up the elements of an array, flattening an array of arrays, or grouping objects by a specific property.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->
```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // 15
```
<!-- element class="fragment" -->

---

## Sorting arrays(sort)

The `sort()` method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. This can lead to unexpected results when sorting numbers. To sort numbers correctly, you need to provide a compare function to the `sort()` method. The compare function should return a negative, zero, or positive value, depending on the arguments.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->
```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => {
  return a - b; // Sort in ascending order
});
console.log(numbers); // [1, 2, 3, 4, 5]
```
<!-- element class="fragment" -->

---
![[tt-logo.svg]]