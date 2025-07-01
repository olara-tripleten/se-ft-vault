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

# Form events

---

## Form Submission Events

The `submit` event is fired when a form is submitted. You can use this event to validate the form data before it is sent to the server, or to perform other actions when the form is submitted. To prevent the default form submission behavior, you can use the `preventDefault()` method of the event object. This is a crucial step in creating a seamless user experience, as it allows you to handle form submissions with Javascript without a full page reload. This technique is the foundation of modern, single-page applications (SPAs) and AJAX-powered forms.

<!-- element class="fragment" -->

### Example:
```javascript
const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting
  console.log('Form submitted!');
  // You can now access form data and send it to the server using fetch() or other methods.
});
```

---

## Form Field values

You can get the value of a form field using the `value` property. For checkbox and radio button fields, you can use the `checked` property to see if they are selected. It's important to note that the `value` property always returns a string, so you may need to convert it to a different type (e.g., a number) before using it. When working with forms, you'll often need to iterate through various input types, such as text fields, textareas, dropdowns, and more. Each of these has its own nuances when it comes to retrieving their values. For instance, for a `<select>` element, the `value` property will give you the value of the selected `<option>`. For checkboxes, you might need to loop through a group of them to see which ones are checked.

<!-- element class="fragment" -->

### Example:
```javascript
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const subscribeCheckbox = document.getElementById('subscribe');

const name = nameInput.value;
const email = emailInput.value;
const age = parseInt(ageInput.value); // Convert the string to a number
const isSubscribed = subscribeCheckbox.checked; // Returns true or false

console.log(name, email, age, isSubscribed);
```

---

## innerHTML and textContent

- `innerHTML`: Gets or sets the HTML content (inner HTML) of an element. When you set the `innerHTML` property, the browser will parse the string as HTML and render it. This can be a security risk if the string contains user-provided data, as it can lead to cross-site scripting (XSS) attacks. XSS occurs when a malicious script is injected into a trusted website. To mitigate this, always sanitize user input before using it with `innerHTML`.
- `textContent`: Gets or sets the text content of an element and all its descendants. When you set the `textContent` property, the browser will treat the string as plain text. This is a safer way to set the content of an element if you don't need to render any HTML. It automatically escapes any HTML tags, preventing them from being interpreted by the browser.

<!-- element class="fragment" -->

### Example:
```javascript
const myDiv = document.getElementById('myDiv');

// Potentially unsafe if the content comes from a user
myDiv.innerHTML = '<h1>Hello, World!</h1>'; // Renders an h1 element

// Safe way to display text
myDiv.textContent = '<h1>Hello, World!</h1>'; // Renders the literal string "<h1>Hello, World!</h1>"
```

---

## The event objects target property

The `target` property of the event object returns the element that triggered the event. This is useful when you have multiple elements that can trigger the same event, and you want to know which element was clicked. For example, if you have a list of items and you want to know which item was clicked, you can use the `target` property to get the clicked element. This is a powerful feature for event delegation, where you attach a single event listener to a parent element to handle events for all of its children. This is more efficient than attaching an event listener to each individual child element, especially when dealing with a large number of elements.

<!-- element class="fragment" -->

### Example:
```javascript
const myList = document.getElementById('myList');

myList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log('You clicked on item:', event.target.textContent);
    event.target.style.backgroundColor = 'lightblue'; // Highlight the clicked item
  }
});
```
---
![[tt-logo.svg]]