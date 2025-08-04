---
marp: true
---

# Javascript conditionals and loops

---

## What are conditionals?

Conditionals are used to execute different blocks of code based on whether a certain condition is true or false. They allow your program to make decisions and are a fundamental concept in programming. Without conditionals, your code would execute in a linear fashion, without the ability to adapt to different situations.

---

## Comparison operators

Comparison operators are used to compare two values. The result of a comparison is always a boolean value: `true` or `false`.

- `==` (equal to): Compares the values of two operands for equality, after converting both operands to a common type.
- `===` (strictly equal to - same value and same type): Compares the values and types of two operands for equality, without any type conversion.
- `!=` (not equal to): Compares the values of two operands for inequality, after converting both operands to a common type.
- `!==` (strictly not equal to): Compares the values and types of two operands for inequality, without any type conversion.
- `>` (greater than)
- `<` (less than)
- `>=` (greater than or equal to)
- `<=` (less than or equal to)

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->

```javascript
let x = 5;

console.log(x == 5); // true
console.log(x === "5"); // false
console.log(x != 8); // true
console.log(x > 8); // false
```

<!-- element class="fragment" -->

---

## Conditional statements

- `if`: Executes a block of code if a condition is true.
- `else`: Executes a block of code if the same condition is false.
- `else if`: Specifies a new condition to test, if the first condition is false.
- `switch`: Selects one of many code blocks to be executed.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->

```javascript
let time = 14;

if (time < 12) {
  console.log("Good morning!");
} else if (time < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

let day = new Date().getDay();
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  // ... and so on
}
```

<!-- element class="fragment" -->

---

## Logical operators

Logical operators are used to combine multiple conditions.

- `&&` (and): Returns true if both conditions are true.
- `||` (or): Returns true if at least one of the conditions is true.
- `!` (not): Inverts the boolean value of a condition.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->

```javascript
let x = 6;
let y = 3;

if (x < 10 && y > 1) {
  console.log("Both conditions are true.");
}

if (x === 5 || y === 5) {
  console.log("At least one condition is true.");
}

if (!(x === y)) {
  console.log("x is not equal to y");
}
```

<!-- element class="fragment" -->

---

## What are loops?

Loops are used to execute a block of code repeatedly. They are useful when you want to perform the same action multiple times, such as iterating over an array or processing a list of items.

---

## For loop

The `for` loop is used to execute a block of code a specific number of times. It consists of three parts: initialization, condition, and increment.

- **Initialization:** Executed once, before the loop starts. It is typically used to initialize a counter variable.
- **Condition:** Evaluated before each iteration. If it returns true, the loop continues. If it returns false, the loop terminates.
- **Increment:** Executed after each iteration. It is typically used to increment the counter variable.

<!-- element class="fragment" -->

### Syntax: <!-- element class="fragment" -->

```javascript
for (initialization; condition; increment) {
  // code to be executed
}
```

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->

```javascript
for (let i = 0; i < 5; i++) {
  console.log("The number is " + i);
}
```

<!-- element class="fragment" -->

---

## While loop

The `while` loop is used to execute a block of code as long as a specified condition is true. The condition is evaluated before each iteration. If it returns true, the loop continues. If it returns false, the loop terminates.

<!-- element class="fragment" -->

### Syntax: <!-- element class="fragment" -->

```javascript
while (condition) {
  // code to be executed
}
```

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->

```javascript
let i = 0;
while (i < 5) {
  console.log("The number is " + i);
  i++;
}
```

<!-- element class="fragment" -->

---

## Do...while loop

The `do...while` loop is similar to the `while` loop, but the condition is evaluated after each iteration. This means that the code block will always be executed at least once, even if the condition is false.

<!-- element class="fragment" -->

### Syntax: <!-- element class="fragment" -->

```javascript
do {
  // code to be executed
} while (condition);
```

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->

```javascript
let i = 0;
do {
  console.log("The number is " + i);
  i++;
} while (i < 5);
```

<!-- element class="fragment" -->

---

![[tt-logo.svg]]
