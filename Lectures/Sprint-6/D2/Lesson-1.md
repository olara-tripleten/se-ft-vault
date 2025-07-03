
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


# Creating Elements and Adding them to the DOM

Welcome to Day 2! Today, we shift our focus from core JavaScript concepts to the exciting world of DOM manipulation. We'll learn how to dynamically create HTML elements and insert them into your web page, bringing your static designs to life with interactive content.

---

## The Document Object Model (DOM)

Before we start creating elements, let's briefly recap the DOM. The DOM is a programming interface for web documents. It represents the page structure as a tree of objects, where each node represents a part of the document (e.g., an element, attribute, or text).

### Why Manipulate the DOM? <!-- element class="fragment" -->

-   **Dynamic Content:** Update parts of a page without a full reload.
-   **User Interaction:** Respond to user actions like clicks, form submissions.
-   **Data Visualization:** Render data fetched from APIs.
-   **Interactive Applications:** Build single-page applications (SPAs).

<!-- element class="fragment" -->
---

## `insertAdjacentHTML` and `insertAdjacentText`

These methods provide a flexible way to insert HTML or text into a specified position relative to an existing element.

<!-- element class="fragment" -->

### `insertAdjacentHTML(position, text)`
<!-- element class="fragment" -->

Inserts a given HTML string into a specified position.
<!-- element class="fragment" -->
-   `position`: A string representing the position relative to the element.
    -   `'beforebegin'`: Before the element itself.
    -   `'afterbegin'`: Just inside the element, before its first child.
    -   `'beforeend'`: Just inside the element, after its last child.
    -   `'afterend'`: After the element itself.
  
<!-- element class="fragment" -->
```html
	<!-- HTML Structure -->
	<div id="container">
	<p id="target">This is the target paragraph.</p>
	</div>
	
	<script>
	const target = document.getElementById('target');
	
	// Insert HTML before the target element
	target.insertAdjacentHTML('beforebegin', '<p>Before the target.</p>');
	
	// Insert HTML as the first child of the target element
	target.insertAdjacentHTML('afterbegin', '<strong>Inside, at the beginning.</strong>');
	
	// Insert HTML as the last child of the target element
	target.insertAdjacentHTML('beforeend', '<em>Inside, at the end.</em>');
	
	// Insert HTML after the target element
	target.insertAdjacentHTML('afterend', '<p>After the target.</p>');
	</script>
```
<!-- element class="fragment" -->

---

## `createElement()` and `createTextNode()`

These are fundamental methods for creating new DOM nodes from scratch.

<!-- element class="fragment" -->

### `document.createElement(tagName)`
<!-- element class="fragment" -->

Creates a new HTML element with the specified tag name.
<!-- element class="fragment" -->
```javascript
const newDiv = document.createElement('div');
newDiv.id = 'myNewDiv';
newDiv.className = 'box';
```
<!-- element class="fragment" -->
### `document.createTextNode(text)`
<!-- element class="fragment" -->

Creates a new text node with the specified text content.
<!-- element class="fragment" -->
```javascript
const textNode = document.createTextNode('Hello, dynamic world!');
```
<!-- element class="fragment" -->

---

## Adding Elements to the Page

Once you've created elements, you need to add them to the existing DOM tree to make them visible on the page. Common methods include `appendChild()`, `insertBefore()`, and `replaceChild()`.

<!-- element class="fragment" -->

### `parentNode.appendChild(childNode)`
<!-- element class="fragment" -->

Adds a node to the end of the list of children of a specified parent node.
<!-- element class="fragment" -->
```html
<!-- HTML -->
<div id="parent">
  <p>Existing content.</p>
</div>

<script>
  const parent = document.getElementById('parent');
  const newParagraph = document.createElement('p');
  newParagraph.textContent = 'This is a new paragraph.';
  parent.appendChild(newParagraph);
</script>
```
<!-- element class="fragment" -->

---

### `parentNode.insertBefore(newNode, referenceNode)` 

Inserts a node before a specified reference node as a child of a specified parent node.

```html
<!-- HTML -->
<ul id="myList">
  <li>Item 1</li>
  <li id="item2">Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  const list = document.getElementById('myList');
  const item2 = document.getElementById('item2');
  const newItem = document.createElement('li');
  newItem.textContent = 'New Item (inserted before Item 2)';
  list.insertBefore(newItem, item2);
</script>
```
<!-- element class="fragment" -->

---

### `parentNode.replaceChild(newChild, oldChild)`

Replaces a child node within the parent node.

```html
<!-- HTML -->
<div id="content">
  <p id="oldParagraph">This is the old paragraph.</p>
</div>

<script>
  const contentDiv = document.getElementById('content');
  const oldParagraph = document.getElementById('oldParagraph');
  const newHeading = document.createElement('h2');
  newHeading.textContent = 'This is the new heading.';
  contentDiv.replaceChild(newHeading, oldParagraph);
</script>
```
<!-- element class="fragment" -->

---

## Combining Creation and Appending

Typically, you'll combine these methods to create and add elements in a single flow.

<!-- element class="fragment" -->

### Example: Adding a new list item
<!-- element class="fragment" -->

```html
<!-- HTML -->
<ul id="shoppingList">
  <li>Milk</li>
</ul>

<script>
  const shoppingList = document.getElementById('shoppingList');
  const newItem = document.createElement('li');
  newItem.textContent = 'Eggs';
  shoppingList.appendChild(newItem);

  // Add another item using a different approach
  shoppingList.insertAdjacentHTML('beforeend', '<li>Bread</li>');
</script>
```
<!-- element class="fragment" -->

---

## Conclusion

Today, you've learned the foundational techniques for dynamically creating and adding elements to the DOM. Understanding `insertAdjacentHTML`, `createElement()`, `createTextNode()`, and methods like `appendChild()` is crucial for building interactive web experiences. In our next lesson, we'll explore more advanced DOM manipulation techniques, including cloning, templating, and managing events on multiple elements.