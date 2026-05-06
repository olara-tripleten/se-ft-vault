
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


# Advanced DOM Manipulation: Cloning, Templates, and Events

Welcome to Day 3! Building on our previous lesson, today we'll dive into more advanced techniques for dynamically manipulating the DOM. We'll explore how to efficiently clone existing elements, leverage template elements for reusable content, dynamically generate elements from data arrays, manage event listeners on multiple elements, and understand the crucial concept of family relations within the DOM.

---

## Cloning Elements

Sometimes, instead of creating new elements from scratch, it's more efficient to clone an existing element and then modify its content or attributes. The `cloneNode()` method allows you to do this.

<!-- element class="fragment" -->

### `element.cloneNode(deep)`
<!-- element class="fragment" -->

-   `deep` (boolean, optional): If `true`, all descendants of the node are also cloned. If `false` (default), only the node itself is cloned.

<!-- element class="fragment" -->
```html
<!-- HTML -->
<ul id="originalList">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<script>
  const originalList = document.getElementById('originalList');

  // Shallow clone (only the <ul> element, no <li>s)
  const shallowClone = originalList.cloneNode(false);
  document.body.appendChild(shallowClone);
  console.log(shallowClone.children.length); // 0

  // Deep clone (<ul> and all its <li>s)
  const deepClone = originalList.cloneNode(true);
  deepClone.id = 'clonedList'; // Change ID to avoid duplicates
  document.body.appendChild(deepClone);
  console.log(deepClone.children.length); // 2
</script>
```
<!-- element class="fragment" -->

---

## Template Elements

The `<template>` HTML element is a mechanism for holding client-side content that is not to be rendered when a page is loaded but may be instantiated subsequently during runtime using JavaScript. It's perfect for reusable blocks of HTML.

<!-- element class="fragment" -->

### Using `<template>`

<!-- element class="fragment" -->

```html
<!-- HTML -->
<template id="myTemplate">
  <div class="card">
    <h3></h3>
    <p></p>
  </div>
</template>

<div id="container"></div>

<script>
  const template = document.getElementById('myTemplate');
  const container = document.getElementById('container');

  const data = [
    { title: 'Card 1', description: 'Description for card 1.' },
    { title: 'Card 2', description: 'Description for card 2.' }
  ];

  data.forEach(item => {
    const clone = document.importNode(template.content, true);
    clone.querySelector('h3').textContent = item.title;
    clone.querySelector('p').textContent = item.description;
    container.appendChild(clone);
  });
</script>
```
<!-- element class="fragment" -->

---

## Dynamically Generating Elements from an Array

A common task is to render a list of items from an array of data. This involves iterating over the array and creating DOM elements for each item.

<!-- element class="fragment" -->

### Example: Displaying a list of users
<!-- element class="fragment" -->

```html
<!-- HTML -->
<ul id="userList"></ul>

<script>
  const users = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 24 },
    { id: 3, name: 'Charlie', age: 35 }
  ];

  const userList = document.getElementById('userList');

  users.forEach(user => {
    const listItem = document.createElement('li');
    listItem.textContent = `${user.name} (${user.age} years old)`;
    userList.appendChild(listItem);
  });
</script>
```
<!-- element class="fragment" -->

---
## Setting Listeners on Multiple Elements

When you dynamically create multiple elements, you often need to attach event listeners to them. Instead of attaching a listener to each individual element (which can be inefficient for many elements), you can use **event delegation**.

<!-- element class="fragment" -->

### Event Delegation
<!-- element class="fragment" -->

Attach a single event listener to a common parent element. When an event bubbles up from a child element, you can check `event.target` to determine which specific child triggered the event.
<!-- element class="fragment" -->

```html
<!-- HTML -->
<div id="buttonContainer">
  <button class="myButton" data-id="1">Button 1</button>
  <button class="myButton" data-id="2">Button 2</button>
  <button class="myButton" data-id="3">Button 3</button>
</div>

<script>
  const buttonContainer = document.getElementById('buttonContainer');

  buttonContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('myButton')) {
      const buttonId = event.target.dataset.id;
      console.log(`Button ${buttonId} clicked!`);
    }
  });

  // Dynamically add a new button
  const newButton = document.createElement('button');
  newButton.className = 'myButton';
  newButton.dataset.id = '4';
  newButton.textContent = 'Button 4';
  buttonContainer.appendChild(newButton);
</script>
```
<!-- element class="fragment" -->

---

## Removing or Moving Elements

Just as you can add elements, you can also remove them or move them within the DOM.

<!-- element class="fragment" -->

### Removing Elements
<!-- element class="fragment" -->

-   `element.remove()`: Removes the element from the DOM.
-   `parentNode.removeChild(child)`: Removes a specified child node from the DOM and returns the removed node.
<!-- element class="fragment" -->

```html
<!-- HTML -->
<div id="items">
  <p id="itemToRemove">Remove me!</p>
  <p id="anotherItem">Keep me!</p>
</div>

<script>
  const itemToRemove = document.getElementById('itemToRemove');
  itemToRemove.remove(); // Simple removal

  const itemsDiv = document.getElementById('items');
  const anotherItem = document.getElementById('anotherItem');
  // itemsDiv.removeChild(anotherItem); // Example of removeChild
</script>
```

<!-- element class="fragment" -->

### Moving Elements <!-- element class="fragment" -->

When you use `appendChild()` or `insertBefore()` on an element that is already in the DOM, it is automatically moved from its current position to the new one.

<!-- element class="fragment" -->

```html
<!-- HTML -->
<div id="div1">
  <p id="paragraphToMove">Move this paragraph.</p>
</div>
<div id="div2"></div>

<script>
  const paragraphToMove = document.getElementById('paragraphToMove');
  const div2 = document.getElementById('div2');

  div2.appendChild(paragraphToMove); // Moves the paragraph from div1 to div2
</script>
```
<!-- element class="fragment" -->

---
## Family Relations in the DOM

Understanding the relationships between nodes in the DOM tree is crucial for effective navigation and manipulation.
<!-- element class="fragment" -->
### Key Properties <!-- element class="fragment" -->
-   `parentNode`: The parent of the current node.
-   `children`: A live HTMLCollection of the child elements (excluding text and comment nodes).
-   `firstChild`, `lastChild`: The first/last child node (can be text, comment, or element).
-   `firstElementChild`, `lastElementChild`: The first/last child *element*.
-   `nextSibling`, `previousSibling`: The next/previous node at the same level.
-   `nextElementSibling`, `previousElementSibling`: The next/previous *element* at the same level.
<!-- element class="fragment" -->

```html
<!-- HTML -->
<div id="parent">
  <!-- Comment -->
  <p id="child1">Child 1</p>
  Text Node
  <span id="child2">Child 2</span>
</div>

<script>
  const child1 = document.getElementById('child1');
  console.log(child1.parentNode.id); // "parent"
  console.log(child1.nextSibling); // Text Node
  console.log(child1.nextElementSibling.id); // "child2"

  const parent = document.getElementById('parent');
  console.log(parent.children.length); // 2 (p and span)
  console.log(parent.firstElementChild.id); // "child1"
</script>
```
<!-- element class="fragment" -->

---

## Conclusion

Today's lesson has equipped you with powerful techniques for advanced DOM manipulation. You now know how to clone elements, use templates for efficient content generation, handle events on multiple dynamic elements, and navigate the DOM tree using family relation properties. These skills are fundamental for building complex and interactive web applications. In our final lesson for this sprint, we'll explore destructuring syntax, a modern JavaScript feature that will further streamline your code.