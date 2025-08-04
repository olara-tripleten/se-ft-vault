---
marp: true
---

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

cars.forEach(function (car) {
  console.log(car);
});
```

## <!-- element class="fragment" -->

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
let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
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
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName()); // "John Doe"
```

## <!-- element class="fragment" -->

![[tt-logo.svg]]
