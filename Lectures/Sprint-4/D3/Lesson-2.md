---
marp: true
---

# Javascript Dom Basics

---

## What is the dom

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page. When a web page is loaded, the browser creates a DOM of the page. The HTML DOM model is constructed as a tree of Objects.

---

## Selecting HTML elements

You can select HTML elements using various methods:

- `getElementById()`: Selects an element by its ID. This is the most efficient way to select a single element.
- `getElementsByTagName()`: Selects all elements with a specified tag name. This returns an HTMLCollection, which is a live collection of elements.
- `getElementsByClassName()`: Selects all elements with a specified class name. This also returns an HTMLCollection.
- `querySelector()`: Selects the first element that matches a specified CSS selector. This is a very powerful method that allows you to use any CSS selector to select an element.
- `querySelectorAll()`: Selects all elements that match a specified CSS selector. This returns a NodeList, which is a static collection of elements.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->

```javascript
// Get an element by its ID
let mainHeading = document.getElementById("main-heading");

// Get all paragraphs
let paragraphs = document.getElementsByTagName("p");

// Get all elements with the class "box"
let boxes = document.getElementsByClassName("box");

// Get the first element with the class "container"
let container = document.querySelector(".container");

// Get all list items
let listItems = document.querySelectorAll("li");
```

<!-- element class="fragment" -->

---

## Browser events

Events are actions that happen in the browser, such as a user clicking a button, resizing the window, or pressing a key on the keyboard. You can use Javascript to listen for these events and execute code when they occur. This is called event handling.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->

```javascript
let button = document.getElementById("my-button");

button.addEventListener("click", function () {
  console.log("Button clicked!");
});
```

## <!-- element class="fragment" -->

## Setting attributes

You can set the attributes of an HTML element using the `setAttribute()` method. This method takes two arguments: the name of the attribute and the value to set.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->

```javascript
let image = document.getElementById("my-image");
image.setAttribute("src", "new-image.jpg");
```

## <!-- element class="fragment" -->

## Manipulating CSS classes

You can add, remove, and toggle CSS classes on an HTML element using the `classList` property.

- `add()`: Adds one or more class names to an element.
- `remove()`: Removes one or more class names from an element.
- `toggle()`: Toggles a class name for an element.
- `contains()`: Checks if an element has a specified class name.

<!-- element class="fragment" -->

### Example:

```javascript
let box = document.getElementById("my-box");

box.classList.add("highlight");
box.classList.remove("hidden");
box.classList.toggle("active");

if (box.classList.contains("highlight")) {
  console.log("The box is highlighted.");
}
```

## <!-- element class="fragment" -->

## Creating and Appending Elements

You can create new HTML elements and append them to the DOM using the `createElement()` and `appendChild()` methods.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->

```javascript
// Create a new paragraph element
let newParagraph = document.createElement("p");

// Set the text content of the paragraph
newParagraph.textContent = "This is a new paragraph.";

// Append the paragraph to the body of the document
document.body.appendChild(newParagraph);
```

<!-- element class="fragment" -->
