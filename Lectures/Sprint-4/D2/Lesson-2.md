---
marp: true
---

# Javascript functions 101

---

## What is a function?

A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it). Functions are one of the fundamental building blocks in JavaScript. They are reusable blocks of code that you can execute whenever you need them.

---

## Declaring and calling functions

A function is defined with the `function` keyword, followed by a name, followed by parentheses `()`.

<!-- element class="fragment" -->

### Syntax: <!-- element class="fragment" -->

```javascript
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

<!-- element class="fragment" -->

To execute the function, you need to call it. You can call a function by using its name followed by parentheses.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->

```javascript
function sayHello() {
  console.log("Hello, World!");
}

sayHello(); // "Hello, World!"
```

<!-- element class="fragment" -->

---

## Functions parameters

Function parameters are the names listed in the function definition. Function arguments are the real values passed to (and received by) the function. You can pass as many parameters as you want to a function.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->

```javascript
function sayHello(name) {
  console.log("Hello, " + name + "!");
}

sayHello("John"); // "Hello, John!"
sayHello("Jane"); // "Hello, Jane!"
```

<!-- element class="fragment" -->

---

## Returning values

When JavaScript reaches a `return` statement, the function will stop executing. If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement. A function can return any type of value, including objects and other functions.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->

```javascript
function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log(sum); // 8
```

<!-- element class="fragment" -->

---

## Function Scope

Variables defined inside a function are not accessible (visible) from outside the function. They have function scope. However, a function can access all variables and functions defined inside the scope in which it is defined.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->

```javascript
function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
```

<!-- element class="fragment" -->

---

## Arrow Functions

Arrow functions were introduced in ES6. Arrow functions allow us to write shorter function syntax.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->

```javascript
// ES5
var x = function (x, y) {
  return x * y;
};

// ES6
const x = (x, y) => x * y;
```

## <!-- element class="fragment" -->

![[tt-logo.svg]]
