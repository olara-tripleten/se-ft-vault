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

# Introduction to Object-Oriented Programming (OOP)

---

## Why Use Classes in JavaScript?

- **Organization**: Group related data (properties) and functions (methods) into a single, reusable blueprint. 

<!-- element class="fragment" -->
- **Maintainability**: Makes code easier to understand, debug, and scale, especially in large applications. 

<!-- element class="fragment" -->
- **Reusability**: Create multiple "objects" (instances) from a single class definition, reducing code duplication. 

<!-- element class="fragment" -->
- **Abstraction**: Hide complex implementation details and expose a simple interface.

 <!-- element class="fragment" -->

---

## What is a Class?

A class is a blueprint for creating objects. It defines a set of properties and methods that the created objects will have.

<!-- element class="fragment" -->

Think of a `Car` class. The blueprint defines that a car has a `color`, `brand`, and can `start()` or `stop()`. Each individual car you create is an object (an instance) based on that blueprint.

<!-- element class="fragment" -->

---

## Basic Class Syntax

We use the `class` keyword, followed by the class name. The `constructor` method is a special method for creating and initializing an object created with a class.

<!-- element class="fragment" -->

```javascript
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  displayInfo() {
    console.log(`This is a ${this.brand} ${this.model}.`);
  }
}
```
<!-- element class="fragment" -->

---

## Creating an Instance

To create an object from a class, we use the `new` keyword.

<!-- element class="fragment" -->

```javascript
// Create a new object (instance) from the Car class
const myCar = new Car('Toyota', 'Corolla');

// Call a method on the instance
myCar.displayInfo(); // Output: This is a Toyota Corolla.

const anotherCar = new Car('Honda', 'Civic');
anotherCar.displayInfo(); // Output: This is a Honda Civic.
```
<!-- element class="fragment" -->

---

## The 3 Fundamentals of OOP

- Encapsulation <!-- element class="fragment" -->
- Inheritance <!-- element class="fragment" -->
- Polymorphism <!-- element class="fragment" -->

---

## 1. Encapsulation

Encapsulation is the bundling of data (properties) and the methods that operate on that data into a single unit (a class). It hides the internal state of an object from the outside.

<!-- element class="fragment" -->

This helps protect your data from accidental modification and hides complexity.

<!-- element class="fragment" -->

---

## 2. Inheritance

Inheritance allows a new class (a "child" or "subclass") to inherit properties and methods from an existing class (a "parent" or "superclass").

<!-- element class="fragment" -->

- Promotes code reuse. 

<!-- element class="fragment" -->
- We use the `extends` keyword to create a subclass. 

<!-- element class="fragment" -->
- The `super()` method calls the constructor of the parent class. 

<!-- element class="fragment" -->

---

## Inheritance Example

```javascript
// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// Child class
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const myDog = new Dog('Rex', 'German Shepherd');
myDog.speak(); // Output: Rex barks.
```
<!-- element class="fragment" -->

---

## 3. Polymorphism

Polymorphism means "many forms". In OOP, it's the ability of an object to take on many forms.

<!-- element class="fragment" -->

The most common use of polymorphism is when a parent class reference is used to refer to a child class object. In our previous example, the `speak()` method behaved differently for the `Animal` and `Dog` classes. That's a form of polymorphism!

<!-- element class="fragment" -->

---

## SOLID Principles

SOLID is a mnemonic acronym for five design principles intended to make software designs more understandable, flexible, and maintainable.

- **S** - Single-responsibility principle 

<!-- element class="fragment" -->

- **O** - Open-closed principle 
<!-- element class="fragment" -->
- **L** - Liskov substitution principle 

<!-- element class="fragment" -->
- **I** - Interface segregation principle 

<!-- element class="fragment" -->
- **D** - Dependency inversion principle 

<!-- element class="fragment" -->

---

## Conclusion

- **OOP** helps us write organized, reusable, and maintainable code. <!-- element class="fragment" -->
- **Classes** are blueprints for creating objects. <!-- element class="fragment" -->
- **Encapsulation**, **Inheritance**, and **Polymorphism** are the core pillars of OOP. <!-- element class="fragment" -->
- **SOLID** principles guide us in creating robust and scalable software. <!-- element class="fragment" -->

---

![[tt-logo.svg]]
