---
marp: true
---

# Javascript Program Logic

---

## Strings

Strings are a fundamental data type in Javascript, used to represent text. You can create strings using single quotes, double quotes, or backticks. Backticks, also known as template literals, provide additional features like multi-line strings and string interpolation, which allows you to embed expressions directly within the string.

<!-- element class="fragment" -->

### Methods of searching strings for characters

- `indexOf()`: Returns the index of the first occurrence of a specified value in a string. If the value is not found, it returns -1.
- `lastIndexOf()`: Returns the index of the last occurrence of a specified value in a string. If the value is not found, it returns -1.
- `search()`: Searches a string for a specified value and returns the position of the match. This method can also take a regular expression as an argument.
- `includes()`: Returns true if a string contains a specified value, and false otherwise. This method is case-sensitive.

<!-- element class="fragment" -->

### Methods for converting strings

- `toUpperCase()`: Converts a string to uppercase.
- `toLowerCase()`: Converts a string to lowercase.
- `trim()`: Removes whitespace from both ends of a string. This is useful for cleaning up user input.
- `split()`: Splits a string into an array of substrings, based on a specified separator.

<!-- element class="fragment" -->

---

## Numbers and special numeric values

Javascript has only one type of number. Numbers can be written with or without decimals. Javascript uses the IEEE 754 standard for floating-point numbers, which can sometimes lead to unexpected results with decimal arithmetic.

<!-- element class="fragment" -->

### Special Numeric Values

- `NaN`: Represents "Not a Number". This value is returned when a mathematical operation fails or when trying to convert a non-numeric string to a number.
- `Infinity`: Represents a value that is greater than any other number. It is the result of dividing a non-zero number by zero.
- `-Infinity`: Represents a value that is less than any other number. It is the result of dividing a negative number by zero.

<!-- element class="fragment" -->

### Methods for working with numbers <!-- element class="fragment" -->

- `toString()`: Returns a number as a string. You can also pass a radix (e.g., 2 for binary, 16 for hexadecimal) to convert the number to a different base.
- `toFixed()`: Returns a string, with the number written with a specified number of decimals. This is useful for formatting currency values.
- `toPrecision()`: Returns a string, with a number written with a specified length. This can be useful for scientific notation.
- `parseInt()`: Parses a string and returns an integer. It will stop parsing when it encounters a non-numeric character.
- `parseFloat()`: Parses a string and returns a floating-point number.
<!-- element class="fragment" -->

---

## Logical Operators(NOT, OR, AND)

- `!`: NOT - Inverts the boolean value of its operand.
- `||`: OR - Returns the first truthy value it encounters, or the last falsy value if all operands are falsy.
- `&&`: AND - Returns the first falsy value it encounters, or the last truthy value if all operands are truthy.

Logical operators are used to determine the logic between variables or values. They are often used in conditional statements to create more complex conditions.

<!-- element class="fragment" -->

---

## The Switch-Case Statement

The `switch` statement is used to perform different actions based on different conditions. It is a good alternative to a long `if...else if...else` statement, especially when you have a single expression that you want to compare against multiple possible values. The `break` statement is crucial to prevent "fall-through," where the code would continue to execute the next case.

<!-- element class="fragment" -->

### Syntax: <!-- element class="fragment" -->

```javascript
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}
```

<!-- element class="fragment" -->

---

## The Ternary Operator

The ternary operator is a shorthand for an `if...else` statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false. It is a concise way to write simple conditional statements, but it can become difficult to read if it is nested or used for complex logic.

<!-- element class="fragment" -->

### Syntax: <!-- element class="fragment" -->

```javascript
condition ? value_if_true : value_if_false;
```

<!-- element class="fragment" -->

---

![[tt-logo.svg]]
