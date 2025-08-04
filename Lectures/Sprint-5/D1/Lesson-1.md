---
marp: true
---

# Form events

---

## Form Submission Events

The `submit` event is fired when a form is submitted. You can use this event to validate the form data before it is sent to the server, or to perform other actions when the form is submitted. To prevent the default form submission behavior, you can use the `preventDefault()` method of the event object. This is a crucial step in creating a seamless user experience, as it allows you to handle form submissions with Javascript without a full page reload. This technique is the foundation of modern, single-page applications (SPAs) and AJAX-powered forms.

<!-- element class="fragment" -->

### Example:

```javascript
const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting
  console.log("Form submitted!");
  // You can now access form data and send it to the server using fetch() or other methods.
});
```

---

## Form Field values

You can get the value of a form field using the `value` property. For checkbox and radio button fields, you can use the `checked` property to see if they are selected. It's important to note that the `value` property always returns a string, so you may need to convert it to a different type (e.g., a number) before using it. When working with forms, you'll often need to iterate through various input types, such as text fields, textareas, dropdowns, and more. Each of these has its own nuances when it comes to retrieving their values. For instance, for a `<select>` element, the `value` property will give you the value of the selected `<option>`. For checkboxes, you might need to loop through a group of them to see which ones are checked.

<!-- element class="fragment" -->

### Example:

```javascript
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const subscribeCheckbox = document.getElementById("subscribe");

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
const myDiv = document.getElementById("myDiv");

// Potentially unsafe if the content comes from a user
myDiv.innerHTML = "<h1>Hello, World!</h1>"; // Renders an h1 element

// Safe way to display text
myDiv.textContent = "<h1>Hello, World!</h1>"; // Renders the literal string "<h1>Hello, World!</h1>"
```

---

## The event objects target property

The `target` property of the event object returns the element that triggered the event. This is useful when you have multiple elements that can trigger the same event, and you want to know which element was clicked. For example, if you have a list of items and you want to know which item was clicked, you can use the `target` property to get the clicked element. This is a powerful feature for event delegation, where you attach a single event listener to a parent element to handle events for all of its children. This is more efficient than attaching an event listener to each individual child element, especially when dealing with a large number of elements.

<!-- element class="fragment" -->

### Example:

```javascript
const myList = document.getElementById("myList");

myList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("You clicked on item:", event.target.textContent);
    event.target.style.backgroundColor = "lightblue"; // Highlight the clicked item
  }
});
```

---

![[tt-logo.svg]]
